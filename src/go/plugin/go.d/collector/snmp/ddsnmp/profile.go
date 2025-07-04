// SPDX-License-Identifier: GPL-3.0-or-later

package ddsnmp

import (
	"errors"
	"fmt"
	"slices"
	"sort"
	"strings"

	"github.com/netdata/netdata/go/plugins/pkg/matcher"
	"github.com/netdata/netdata/go/plugins/plugin/go.d/collector/snmp/ddsnmp/ddprofiledefinition"
)

// FindProfiles returns profiles matching the given sysObjectID.
// Profiles are loaded once on the first call and cached globally.
func FindProfiles(sysObjId string) []*Profile {
	loadProfiles()

	var profiles []*Profile

	for _, prof := range ddProfiles {
		for _, id := range prof.Definition.SysObjectIDs {
			m, err := matcher.NewRegExpMatcher(id)
			if err != nil {
				log.Warningf("failed to compile regular expression from '%s': %v", id, err)
				continue
			}
			if m.MatchString(sysObjId) {
				profiles = append(profiles, prof.clone())
				break
			}
		}
	}

	enrichProfiles(profiles)
	deduplicateMetricsAcrossProfiles(profiles)

	return profiles
}

type Profile struct {
	SourceFile string                                 `yaml:"-"`
	Definition *ddprofiledefinition.ProfileDefinition `yaml:",inline"`
}

func (p *Profile) clone() *Profile {
	return &Profile{
		SourceFile: p.SourceFile,
		Definition: p.Definition.Clone(),
	}
}

func (p *Profile) merge(base *Profile) {
	p.mergeMetrics(base)
	// Append other fields as before (these likely don't need deduplication)
	p.Definition.MetricTags = append(p.Definition.MetricTags, base.Definition.MetricTags...)
	p.Definition.StaticTags = append(p.Definition.StaticTags, base.Definition.StaticTags...)
	p.mergeMetadata(base)
}

func (p *Profile) mergeMetrics(base *Profile) {
	seen := make(map[string]bool)

	for _, m := range p.Definition.Metrics {
		switch {
		case m.IsScalar():
			seen[m.Symbol.Name] = true
		case m.IsColumn():
			for _, symbol := range m.Symbols {
				seen[symbol.Name] = true
			}
		}
	}

	for _, bm := range base.Definition.Metrics {
		switch {
		case bm.IsScalar():
			if !seen[bm.Symbol.Name] {
				p.Definition.Metrics = append(p.Definition.Metrics, bm)
				seen[bm.Symbol.Name] = true
			}
		case bm.IsColumn():
			bm.Symbols = slices.DeleteFunc(bm.Symbols, func(sym ddprofiledefinition.SymbolConfig) bool {
				v := seen[sym.Name]
				seen[sym.Name] = true
				return v
			})
			if len(bm.Symbols) > 0 {
				p.Definition.Metrics = append(p.Definition.Metrics, bm)
			}
		}
	}
}

func (p *Profile) mergeMetadata(base *Profile) {
	if p.Definition.Metadata == nil {
		p.Definition.Metadata = make(ddprofiledefinition.MetadataConfig)
	}

	for resName, baseRes := range base.Definition.Metadata {
		targetRes, exists := p.Definition.Metadata[resName]
		if !exists {
			targetRes = ddprofiledefinition.NewMetadataResourceConfig()
		}

		targetRes.IDTags = append(targetRes.IDTags, baseRes.IDTags...)

		if targetRes.Fields == nil && len(baseRes.Fields) > 0 {
			targetRes.Fields = make(map[string]ddprofiledefinition.MetadataField, len(baseRes.Fields))
		}

		for field, symbol := range baseRes.Fields {
			if _, ok := targetRes.Fields[field]; !ok {
				targetRes.Fields[field] = symbol
			}
		}

		p.Definition.Metadata[resName] = targetRes
	}
}

func (p *Profile) validate() error {
	ddprofiledefinition.NormalizeMetrics(p.Definition.Metrics)

	var errs []error

	for _, err := range ddprofiledefinition.ValidateEnrichMetadata(p.Definition.Metadata) {
		errs = append(errs, errors.New(err))
	}
	for _, err := range ddprofiledefinition.ValidateEnrichMetrics(p.Definition.Metrics) {
		errs = append(errs, errors.New(err))
	}
	for _, err := range ddprofiledefinition.ValidateEnrichMetricTags(p.Definition.MetricTags) {
		errs = append(errs, errors.New(err))
	}
	if len(errs) > 0 {
		return errors.Join(errs...)
	}

	return nil
}

func (p *Profile) removeConstantMetrics() {
	if p.Definition == nil {
		return
	}

	p.Definition.Metrics = slices.DeleteFunc(p.Definition.Metrics, func(m ddprofiledefinition.MetricsConfig) bool {
		if m.IsScalar() && m.Symbol.ConstantValueOne {
			return true
		}

		if m.IsColumn() {
			m.Symbols = slices.DeleteFunc(m.Symbols, func(s ddprofiledefinition.SymbolConfig) bool {
				return s.ConstantValueOne
			})
		}

		return m.IsColumn() && len(m.Symbols) == 0
	})
}

func enrichProfiles(profiles []*Profile) {
	for _, prof := range profiles {
		if prof.Definition == nil {
			continue
		}

		for i := range prof.Definition.Metrics {
			metric := &prof.Definition.Metrics[i]

			for j := range metric.MetricTags {
				tagCfg := &metric.MetricTags[j]

				if tagCfg.Mapping != nil {
					continue
				}

				if tagCfg.MappingRef == "ifType" {
					tagCfg.Mapping = sharedMappings.ifType
				}
			}
		}
	}
}

func deduplicateMetricsAcrossProfiles(profiles []*Profile) {
	if len(profiles) < 2 {
		return
	}

	// Create a slice of indices sorted by priority (non-generic first)
	type indexedProfile struct {
		idx       int
		isGeneric bool
	}

	indexed := make([]indexedProfile, len(profiles))
	for i, prof := range profiles {
		indexed[i] = indexedProfile{
			idx:       i,
			isGeneric: strings.Contains(strings.ToLower(prof.SourceFile), "generic"),
		}
	}

	slices.SortFunc(indexed, func(a, b indexedProfile) int {
		if a.isGeneric && !b.isGeneric {
			return 1 // a comes after b
		}
		if !a.isGeneric && b.isGeneric {
			return -1 // a comes before b
		}
		// If both are generic or both are non-generic, maintain original order
		return a.idx - b.idx
	})

	// Reorder profiles slice according to deduplication priority
	sortedProfiles := make([]*Profile, len(profiles))
	for i, ip := range indexed {
		sortedProfiles[i] = profiles[ip.idx]
	}
	copy(profiles, sortedProfiles)

	seenMetrics := make(map[string]bool)

	for _, prof := range profiles {
		if prof.Definition == nil {
			continue
		}

		prof.Definition.Metrics = slices.DeleteFunc(prof.Definition.Metrics, func(metric ddprofiledefinition.MetricsConfig) bool {
			key := generateMetricKey(metric)
			if seenMetrics[key] {
				return true
			}
			seenMetrics[key] = true
			return false
		})
	}
}

func generateMetricKey(metric ddprofiledefinition.MetricsConfig) string {
	var parts []string

	if metric.IsScalar() {
		parts = append(parts, "scalar")
		parts = append(parts, metric.Symbol.OID)
		parts = append(parts, metric.Symbol.Name)
		return strings.Join(parts, "|")
	}

	parts = append(parts, "table")
	parts = append(parts, metric.Table.OID)
	parts = append(parts, metric.Table.Name)

	symbolKeys := make([]string, 0, len(metric.Symbols))
	for _, sym := range metric.Symbols {
		symbolKey := fmt.Sprintf("%s:%s", sym.OID, sym.Name)
		symbolKeys = append(symbolKeys, symbolKey)
	}
	sort.Strings(symbolKeys)
	parts = append(parts, symbolKeys...)

	return strings.Join(parts, "|")
}

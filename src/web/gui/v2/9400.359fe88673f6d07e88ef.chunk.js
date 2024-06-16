!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="2cdc8de5-2f78-4f07-abfe-b7e633a5a36c",e._sentryDebugIdIdentifier="sentry-dbid-2cdc8de5-2f78-4f07-abfe-b7e633a5a36c")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"30bb3b259cbd4ba916a329c4a18ea5d88a4aeb61"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[9400],{79400:(e,t,l)=>{l.r(t),l.d(t,{default:()=>se});l(41393),l(81454);var a=l(96540),n=l(83199),o=l(4659),s=l(63450),r=l(58168),i=(l(62953),l(63950)),c=l.n(i),d=l(29217),u=l(78940);const m=e=>{let{scope:t,setScope:l=c(),isDisabled:o,...s}=e;return a.createElement(n.Flex,(0,r.A)({gap:3},s),Object.entries(u.Wu).map((e=>{let[s,{text:r,tooltip:i}]=e;return a.createElement(n.RadioButton,{key:s,checked:s===t,onChange:()=>l(s),disabled:o},a.createElement(d.A,{content:i,align:"bottom"},a.createElement(n.TextSmall,{color:"textDescription"},r)))})))};var p=l(54518),b=l(87659);const g=e=>{let{selectedKey:t,selectedValue:l,onAddHostLabel:o=c(),onRemoveHostLabel:s=c(),isDefault:r=!1,showPlaceholder:i=c(),isDisabled:u}=e;const[m,b]=(0,a.useState)(t||""),[g,h]=(0,a.useState)(l||""),E=()=>{m&&g&&(o({[m]:g}),i())};return a.createElement(n.Flex,{gap:2},a.createElement(p.A,{component:"input",onChange:b,onBlur:E,placeholder:"Host key",value:m,disabled:u||!r}),a.createElement(p.A,{component:"input",onChange:h,onBlur:E,placeholder:"Host value",value:g,disabled:u||!r||!m}),r?a.createElement(d.A,{content:"Save label pair",align:"bottom"},a.createElement(n.Button,{flavour:"borderless",disabled:!m||!g},a.createElement(n.Icon,{name:"check",color:"primary",size:"small"}))):a.createElement(d.A,{content:"Remove label pair",align:"bottom"},a.createElement(n.Button,{flavour:"borderless",onClick:()=>s(t)},a.createElement(n.Icon,{name:"x",color:"primary",size:"small"}))))},h=e=>{let{hostLabels:t,onAddHostLabel:l,onRemoveHostLabel:n}=e;return Object.entries(t).map((e=>{let[t,o]=e;return a.createElement(g,{key:t,onAddHostLabel:l,selectedKey:t,selectedValue:o,onRemoveHostLabel:n})}))},E=e=>{let{hostLabels:t,onAddHostLabel:l=c(),onRemoveHostLabel:o=c(),isEdit:s,isDisabled:r}=e;const i=!!Object.entries(t||{}).length,[d,,u]=(0,b.A)(!1);return a.createElement(n.Flex,{column:!0,gap:1},a.createElement(n.TextSmall,{color:"textLite"},"Host labels"),i&&a.createElement(h,{hostLabels:t,onAddHostLabel:l,onRemoveHostLabel:o}),(!i||d)&&a.createElement(g,{key:JSON.stringify(t),onAddHostLabel:l,isDefault:!0,showPlaceholder:u,isDisabled:r}),s&&!d&&i&&a.createElement(n.Flex,{justifyContent:"end"},a.createElement(n.Button,{flavour:"borderless",onClick:u},"Add host label")))};var v=l(99851);function f(){const e=new Date,t=e.getFullYear(),l=e.getMonth(),a=e.getDate(),n=new Date(0);return n.setFullYear(t,l,a+1),n.setHours(0,0,0,0),n}var C=l(51730),A=l(82526),x=l(27467);const S=Object.entries(u.SB).map((e=>{let[t,l]=e;return{label:l,value:t}})),D=f(),y=(0,C.o)((0,A.W)(D,{years:1})),k=e=>{let{duration:t,setDuration:l,setDate:o,endDate:s,isDisabled:r}=e;const i=(0,x.rW)("offset");return a.createElement(n.Flex,{gap:2},a.createElement(p.A,{component:"select",title:"Duration",onChange:l,options:S,placeholder:"Select duration",value:t,isDisabled:r}),"custom"===t.value&&a.createElement(n.Flex,{alignSelf:"end"},a.createElement(v.A,{isSinglePicker:!0,values:{singleDate:s},minDate:D,maxDate:y,utc:i,onChange:o,isPlaying:!1,accessorProps:u.Iv,padding:[4,0],width:"auto",accessorTooltipContent:"Select end date"})))};function I(){return(0,C.o)(Date.now())}const L=I(),O=f(),R=e=>{let{start:t,end:l,onChange:o,isDisabled:s,isEdit:r}=e;const[i,c]=(0,a.useState)(r?"schedule":u.SX),[m,p]=(0,a.useState)(u.DK),[b,g]=(0,a.useState)(0),h=(0,x.rW)("offset"),[E,S]=(0,a.useState)(t?new Date(t):r?null:L),[D,y]=(0,a.useState)(l?new Date(l):r?null:O),[R,w]=(0,a.useState)((0,C.o)((0,A.W)(E,{days:1})));(0,a.useEffect)((()=>{const e=(0,A.W)(E,{days:1});w(e),!r&&E>=D&&y(e)}),[E]),(0,a.useEffect)((()=>{o({start:E,end:D,scheduleOption:i,duration:m})}),[E,D,i,m]);const H=f(),N=(0,C.o)((0,A.W)(H,{years:1}));return a.createElement(n.Flex,{column:!0,gap:3},!r&&a.createElement(n.Flex,{gap:3},Object.entries(u.Yo).map((e=>{let[t,{text:l,tooltip:o}]=e;return a.createElement(n.RadioButton,{key:t,checked:t===i,onChange:()=>c(t),disabled:s},a.createElement(d.A,{content:o,align:"bottom"},a.createElement(n.TextSmall,{color:"textDescription"},l)))}))),"now"===i?a.createElement(k,{duration:m,setDuration:p,setDate:e=>{S(Date.now()),y(e)},endDate:D,isDisabled:s}):a.createElement(n.Flex,{gap:2},a.createElement(n.Flex,{column:!0,gap:2,flex:{grow:1,shrink:1},basis:0},a.createElement(n.TextSmall,null,"Start date"),a.createElement(v.A,{isSinglePicker:!0,values:{singleDate:new Date(E)},minDate:I(),maxDate:N,utc:h,onChange:e=>{S(e),g((e=>e+1))},isPlaying:!1,accessorProps:u.Iv,padding:[4,0],width:"auto",accessorTooltipContent:"Select start date"})),a.createElement(n.Flex,{column:!0,gap:2,flex:{grow:1,shrink:1},basis:0},a.createElement(n.TextSmall,null,"End date"),a.createElement(v.A,{key:b,isSinglePicker:!0,values:{singleDate:D?new Date(D):D},minDate:R,maxDate:N,utc:h,onChange:y,isPlaying:!1,accessorProps:u.Iv,padding:[4,0],width:"auto",accessorTooltipContent:"Select end date"}))))},w=e=>{let{content:t="Loading alerts..."}=e;return a.createElement(n.Flex,{height:45,alignItems:"center",justifyContent:"center"},a.createElement(n.Text,null,t))};var H=l(51719),N=(l(9391),l(17333),l(3064),l(98992),l(54520),l(72577),l(47767)),P=l(38819),F=l(22292),_=l(46741),T=l(3914),B=l(67990),M=l(71856),j=l(88982),U=l(29848),W=l(36021),z=l(47444),K=l(45860);const V=(0,z.K0)({key:"spaceAlertMetas",get:e=>()=>(0,K.z5)(e)});var J=l(64118),Y=l(10368),G=l(79394),Z=l(71835);const q={name:"",rooms:[],nodes:[],hostLabels:null,alertNames:[],alertContexts:[],alertRoles:[],startsAt:null,lastsUntil:null},X=e=>{let{id:t,name:l,...a}=e;return{label:l,value:t,...a}},$=e=>({label:e,value:e}),Q=e=>{var t;let{rooms:l,nodes:a,hostLabels:n,startsAt:o,lastsUntil:s,...r}=e;return{...r,scope:r.accountId?"personal":u._V,canSubmit:!(null===r||void 0===r||null===(t=r.name)||void 0===t||!t.length),rooms:null!==l&&void 0!==l&&l.length?l.map(X):[M.PT],...null!==a&&void 0!==a&&a.length?{nodes:a.map(X).filter((e=>{let{notAvailable:t}=e;return!t}))}:{},...n?{hostLabels:n}:{},...o?{startsAt:o}:{},...s?{lastsUntil:s}:{}}},ee=e=>{let{value:t}=e;return t},te=(e,t)=>{const{scope:l,rooms:a,nodes:n,hostLabels:o,startsAt:s,lastsUntil:r,scheduleOption:i,duration:c,...d}=e,m=a.filter((e=>{let{value:t}=e;return t!==u.jH.value})).map(ee),p=n.map(ee),b=!!Object.keys(o||{}).length,{start:g,end:h}=(e=>{let{startsAt:t,lastsUntil:l,scheduleOption:a,duration:n}=e;if("schedule"==a)return{start:t,end:l};let o,s=Date.now();switch(n){case"oneHour":o=(0,A.W)(s,{hours:1});break;case"sixHours":o=(0,A.W)(s,{hours:6});break;case"twelveHours":o=(0,A.W)(s,{hours:12});break;case"oneDay":o=(0,A.W)(s,{days:1});break;case"custom":o=l}return{start:s,...o?{end:o}:{}}})({startsAt:s,lastsUntil:r,scheduleOption:i,duration:c});return{...d,..."personal"==l?{account_id:t}:{},...m.length?{room_ids:m}:{},...p.length?{node_ids:p}:{},...b?{host_labels:o}:{},...g?{starts_at:new Date(g).toISOString()}:{},...h?{lasts_until:new Date(h).toISOString()}:{}}},le=[{label:"CRITICAL",value:"CRITICAL"},{label:"WARNING",value:"WARNING"},{label:"CLEAR",value:"CLEAR"}],ae=e=>{var t;let{rule:l,onClose:n,isEdit:o}=e;const s=(0,F.NJ)(),r=(0,N.Zp)(),i=(0,T.bq)(),[c,d]=(0,b.A)(),m=(0,j.A)({all:!0}),p=null===(t=m.find((e=>{let{label:t}=e;return"All nodes"==t})))||void 0===t?void 0:t.value,{loaded:g,value:h,hasError:E}=(()=>{var e;const t=(0,T.vt)(),l=(0,z.xf)(V(t));return{loaded:"loading"!==l.state,value:(null===(e=l.contents)||void 0===e?void 0:e.data)||K.rx,hasError:"hasError"===l.state}})(),v=(0,W._B)(),f=(0,W.FU)(),C=o?f:v,A=(0,U.ly)(),x=(0,W.Lz)(),[,,S]=(0,Z.A)(),[D,y]=(0,a.useState)({alertNameOptions:[],alertContextOptions:[],alertRoleOptions:[]}),{alertNameOptions:k,alertContextOptions:I,alertRoleOptions:L}=D,[O,R]=(0,a.useState)((()=>({...q,...Q(l)}))),[w,H]=(0,a.useState)([]),{loaded:M,value:X}=(0,J.I8)({alertNames:O.alertNames,contexts:O.alertContexts,allowEmptyName:!0});(0,a.useEffect)((()=>{const e=(X||[]).filter((e=>!((O.alertNames||[]).length&&!O.alertNames.includes(e.name))&&(!((O.alertContexts||[]).length&&!O.alertContexts.includes(e.context))&&!((O.nodeIds||[]).length&&!O.nodeIds.includes(e.nodeId))))).map((e=>{let{instance:t,instanceName:l}=e;return{value:t,label:l}}));H(e)}),[M,X,O.alertNames,O.alertContexts,O.nodeIds]);const ee=(0,B.vv)(O.roomIds||[p]),ae=(0,a.useCallback)((e=>R((t=>({...t,scope:e})))),[]),ne=(0,a.useCallback)((e=>R((t=>({...t,name:e,canSubmit:!(null===e||void 0===e||!e.length)})))),[]),oe=(0,a.useCallback)((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const l=(e=>e.length<=1?e:e[e.length-1].value==u.jH.value?[u.jH]:e.filter((e=>{let{value:t}=e;return!!t})))(e),a=l.map((e=>{let{value:t}=e;return t||p})),n=t.length<l.length?l.filter((e=>{let{value:l}=e;return!t.includes(l)}))[0]:null;R((e=>({...e,rooms:l,roomIds:a,lastRoomAdded:n||null})))}),[p]),se=(0,a.useCallback)((e=>R((t=>({...t,nodeIds:e.map((e=>{let{value:t}=e;return t})),nodes:e})))),[]),re=(0,a.useCallback)((e=>R((t=>({...t,hostLabels:{...t.hostLabels,...e}})))),[]),ie=(0,a.useCallback)((e=>R((t=>{const l={...t.hostLabels};return delete l[e],{...t,hostLabels:l}}))),[]),ce=(0,a.useCallback)((e=>t=>R((l=>({...l,[e]:t.map((e=>{let{value:t}=e;return t}))})))),[]),de=(0,a.useCallback)((e=>{let{start:t,end:l,scheduleOption:a,duration:n}=e;return R((e=>({...e,startsAt:t,lastsUntil:l,scheduleOption:a,duration:n.value})))}),[]),ue=(0,a.useCallback)((()=>{d(),C(te(O,s)).then((()=>{n(),x(),A()})).catch((e=>S((0,Y.H)(e)))).finally(d)}),[O,s]),me=(0,G.A)();(0,a.useEffect)((()=>{var e;const t=(null===(e=O.lastRoomAdded)||void 0===e?void 0:e.value)||p;let l=null;return t&&(l=me(t)),()=>{var e;return!(null===(e=l)||void 0===e||!e.cancel)&&l.cancel()}}),[O.roomIds,me]),(0,a.useEffect)((()=>{if(g){const{contexts:e,names:t,roles:l}=h||{};y({alertNameOptions:t?t.map($):[],alertContextOptions:e?e.map($):[],alertRoleOptions:l?l.map($):[]})}}),[g]),(0,a.useEffect)((()=>{const e=(0,P.PP)(),t=(()=>{const{silencingRulePrefill:e}=(0,P.PP)();if(!e)return{};let t={};try{t=JSON.parse(e)}catch(l){}return t})(),{alertName:l,nodeId:a,context:n,instance:o,roomId:s}=t;if(s){const e=m.filter((e=>{let{value:t}=e;return t==s}));e&&oe(e)}if(l&&R((e=>({...e,alertNames:[l]}))),n&&R((e=>({...e,alertContexts:[n]}))),o&&R((e=>({...e,alertInstances:[o]}))),a){const e=ee.filter((e=>{let{value:t}=e;return t==a}));e&&se(e)}(0,P.Z8)({...e,silencingRulePrefill:""})}),[R,ce,se,ee]);const pe=(0,_.JT)("space:CreatePersonalSilencingRule"),be=(0,a.useCallback)((()=>r("/spaces/".concat(i,"/settings/billing"))),[i]);return{state:O,onScopeChange:ae,onRuleNameChange:ne,onRoomsSelectionChange:oe,roomOptions:m,onNodesSelectionChange:se,nodesOptions:ee,alertMetasLoaded:g,alertMetas:h,alertNameOptions:k,alertContextOptions:I,alertInstancesEnabled:!0,alertInstancesOptions:w,alertRoleOptions:L,alertStatusOptions:le,alertMetasError:E,onAlertValueChange:ce,onAddHostLabel:re,onRemoveHostLabel:ie,onDatesChange:de,loading:c,onSave:ue,spaceCreatePersonalSilencingRule:pe,onUpdateButtonClick:be}},ne=e=>null!==e&&void 0!==e&&e.length?e.map($):[],oe=()=>a.createElement(n.Box,{as:"hr",height:"1px",width:"100%",sx:{borderWidth:"1px 0px 0px 0px",borderColor:"borderSecondary",borderStyle:"solid"}}),se=e=>{let{rule:t={},onClose:l,isEdit:r}=e;const{state:i,onScopeChange:c,onRuleNameChange:u,onRoomsSelectionChange:b,roomOptions:g,onNodesSelectionChange:h,nodesOptions:v,alertMetasLoaded:f,alertNameOptions:C,alertContextOptions:A,alertInstancesEnabled:x,alertInstancesOptions:S,alertRoleOptions:D,alertStatusOptions:y,onAlertValueChange:k,onAddHostLabel:I,onRemoveHostLabel:L,onDatesChange:O,loading:N,onSave:P,spaceCreatePersonalSilencingRule:F,onUpdateButtonClick:_}=ae({rule:t,onClose:l,isEdit:r});return a.createElement(n.Modal,{onEsc:l,backdropProps:{backdropBlur:!0}},a.createElement(s.$m,{style:{maxHeight:"800px"}},a.createElement(n.ModalHeader,{padding:[6,4,3]},a.createElement(n.Flex,{column:!0,gap:2},a.createElement(n.Flex,{flex:!0,alignItems:"center",justifyContent:"between"},a.createElement(n.H4,null,"Add silencing rule"),l&&a.createElement(s.Oj,{onClose:l})),a.createElement(n.Text,null,"Define an alert notification silencing rule that will apply to all users or just you."," ",a.createElement(o.A,{"data-ga":"alert-silencing::click-link-docs::rule-modal","data-testid":"silencing-rules-doc",href:"https://learn.netdata.cloud/docs/alerts-and-notifications/notifications/netdata-cloud-notifications/manage-alert-notification-silencing-rules",rel:"noopener noreferrer",target:"_blank"},"Learn how to configure silencing rules.")),!F&&a.createElement(H.A,null))),a.createElement(n.ModalBody,{padding:[0]},a.createElement(s.fn,null,a.createElement(n.Flex,{column:!0,gap:3},a.createElement(m,{scope:i.scope,setScope:c,padding:[0,0,1,0],isDisabled:!F}),a.createElement(p.A,{component:"input",onChange:u,placeholder:"Add rule name",title:"Rule name*",value:i.name,disabled:!F}),a.createElement(p.A,{component:"select",isMulti:!0,onChange:e=>b(e,i.roomIds),options:g,placeholder:"Select rooms",title:"Rooms*",value:i.rooms,isDisabled:!F}),a.createElement(p.A,{component:"select",isMulti:!0,onChange:h,options:v,placeholder:"Select nodes",title:"Nodes",value:i.nodes,isDisabled:!F||!v.length}),a.createElement(E,{hostLabels:i.hostLabels,onAddHostLabel:I,onRemoveHostLabel:L,isEdit:r,isDisabled:!F}),f?a.createElement(a.Fragment,null,a.createElement(oe,null),a.createElement(p.A,{component:"select",isMulti:!0,onChange:k("alertNames"),options:C,placeholder:"Select alert name",title:"Alert name",value:ne(i.alertNames),isDisabled:!F}),a.createElement(p.A,{component:"select",isMulti:!0,onChange:k("alertContexts"),options:A,placeholder:"Select alert context",title:"Alert context",value:ne(i.alertContexts),isDisabled:!F}),a.createElement(p.A,{component:"select",isMulti:!0,onChange:k("alertInstances"),options:S,placeholder:"Select alert instance",title:"Alert instance",value:ne(i.alertInstances),isDisabled:!F||!x}),a.createElement(p.A,{component:"select",isMulti:!0,onChange:k("severities"),options:y,placeholder:"Select alert status",title:"Alert status",value:ne(i.severities),isDisabled:!F}),a.createElement(p.A,{component:"select",isMulti:!0,onChange:k("alertRoles"),options:D,placeholder:"Select alert role",title:"Alert role",value:ne(i.alertRoles),isDisabled:!F})):a.createElement(w,null),a.createElement(oe,null),a.createElement(R,{start:i.startsAt,end:i.lastsUntil,onChange:O,isEdit:r,isDisabled:!F}))),a.createElement(s.fn,{alignItems:"end",justifyContent:"center"},a.createElement(n.Flex,{gap:4},a.createElement(n.Button,{flavour:"borderless",label:"Cancel",onClick:l,disabled:N}),F?a.createElement(d.A,{content:r?"Update the rule":"Create the rule",align:"bottom"},a.createElement(n.Button,{label:"OK",onClick:P,"data-ga":"alert-silencing::click-save-".concat(r?"edit":"new","-rule::rule-modal"),"data-testid":"saveRule-button",textTransform:"uppercase",isLoading:N,disabled:N||!i.canSubmit})):a.createElement(d.A,{content:"Update to a paid plan in order to be able to create silencing rules",align:"bottom"},a.createElement(n.Button,{label:"Upgrade!",onClick:_})))))))}},51719:(e,t,l)=>{l.d(t,{A:()=>i});var a=l(58168),n=l(96540),o=l(83199),s=l(54856),r=l(3914);const i=e=>{const t=(0,r.dg)();return n.createElement(o.Flex,(0,a.A)({gap:2,alignItems:"center"},e),n.createElement(o.Icon,{size:"small",color:"warning",name:"warning_triangle"}),n.createElement(o.Text,null,"This feature is only available to paid plans"),t?null:n.createElement(s.A,null))}}}]);
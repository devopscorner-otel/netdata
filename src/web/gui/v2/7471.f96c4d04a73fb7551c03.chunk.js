!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="796e2291-866c-4722-9c30-22064b74ae0c",e._sentryDebugIdIdentifier="sentry-dbid-796e2291-866c-4722-9c30-22064b74ae0c")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"30b1ba65cc8722be7e184f4a401fb43e6b21634d"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[7471],{51641:(e,t,n)=>{"use strict";n.d(t,{A:()=>u,e:()=>d});var a,r=n(96540),o=n(47444),i=n(21396);const s=(0,o.eU)({key:"agentDataTrackStatus",default:""}),c=null===(a=window.localNetdataRegistry)||void 0===a?void 0:a.mg,l=window.envSettings.agentApiUrl,d=()=>(0,o.vc)(s),u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;const n=(0,o.lZ)(s);(0,r.useEffect)((()=>{if(!e)return;const a=i.enc.Hex.parse("fd90fa3e33a504c10a444f910444650772e77e81b00c7523643462f298fd14c0"),r=i.lib.WordArray.random(16),o=JSON.stringify({machine_guid:e,url:t}),s=i.AES.encrypt(o,a,{iv:r}).ciphertext,c=i.enc.Hex.stringify(r)+i.enc.Hex.stringify(s),l=c+i.HmacSHA256(i.enc.Hex.parse(c),a).toString();fetch("".concat("https://frankfurt.netdata.rocks/privacy","?data=").concat(encodeURIComponent(l))).then((e=>e.json())).then((e=>n(e.status))).catch((e=>console.error("Error:",e)))}),[e])}},86147:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>A});n(62953);var a=n(96540),r=n(39225),o=n(83741),i=n(22332),s=n(80925),c=n(24266),l=n(22292),d=n(20378),u=n(78459),g=n(15255),m=n(87337),v=n(28738),f=n(38819),y=n(71835);const w={ErrInvalidRedirectURI:"Invalid redirect URI",ErrUntrustedRedirectURI:"Untrusted redirect URI",ErrSpaceMemberAlreadyExists:"Space member already exists",ErrInvalidSpaceID:"Invalid space ID",ErrInvalidInvitationToken:"Invalid invitation token",ErrInvitationNotFound:"Invitation not found",ErrInvitationEmailMismatch:"Invitation email mismatch",ErrInvitationExpired:"Invitation expired",ErrUnauthenticated:"Unauthenticated",ErrInternalServerError:"Internal server error"},h=()=>{const[,e]=(0,y.A)();(0,a.useEffect)((()=>{const{error_msg_key:t,error_message:n}=(0,f.PP)();var a,r;n&&e({message:decodeURIComponent((a=t,r=n,w[a]||r||"An unexpected error occurred"))})}),[])};var I=n(29848);const p=(0,r.A)((()=>Promise.all([n.e(4631),n.e(7519),n.e(8323),n.e(963),n.e(5598)]).then(n.bind(n,95598))),"Layout"),k=(0,i.withChartProvider)((()=>{const e=(0,l.uW)("isLoaded"),t=(0,l.uW)("email"),n=(0,l.NJ)(),r=(0,l.uW)("isAnonymous"),i=(0,I.c0)(),s=(0,u.OS)();return(0,a.useEffect)((()=>{r||s()}),[r]),(0,a.useEffect)((()=>{if(n&&t)try{o.gV({id:n,email:t})}catch(e){console.warn("Sentry: unable to set user")}}),[t,n]),(0,m.xN)(),(0,u.Ay)(),(0,d.Ay)(),(0,g.Ay)(),h(),a.createElement(a.Suspense,{fallback:a.createElement(v.A,null)},a.createElement(p,{key:i,isUserLoaded:e}))})),A=(0,c.Xc)((()=>{const e=(0,s.e)().getRoot();return a.createElement(k,{chart:e})}))},3714:(e,t,n)=>{"use strict";n.d(t,{j:()=>i});n(62953),n(48408);var a=n(26655),r=n(80158);const o=e=>(window.localNetdataRegistry.mg=e.agent.mg,window.localNetdataRegistry.hostname=(0,r.Yv)(e.agent.nm||"agent"),{cloudStatus:e.cloud.status,canBeClaimed:e.can_be_claimed,keyFilename:e.key_filename,claimId:e.cloud.claim_id,mg:e.agent.mg,nd:e.agent.nd,success:e.success,message:e.message}),i=function(){let{key:e,token:t,rooms:n,url:r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=new URLSearchParams({key:e,rooms:n,token:t,url:r}).toString();return i=e&&n&&t&&r&&i?"?".concat(i):"",a.A.get("/api/v2/claim".concat(i),{baseURL:window.envSettings.agentApiUrl,transform:o})}},15255:(e,t,n)=>{"use strict";n.d(t,{Ay:()=>m,OS:()=>u,RJ:()=>g});n(62953);var a=n(96540),r=n(47444),o=n(3914),i=n(22292),s=n(79731),c=n(3714);const l=(0,r.Iz)({key:"claimStatusAtom",default:{loaded:!1,loading:!1,cloudStatus:"disabled",canBeClaimed:!1,claimId:null,keyFilename:"",error:"",claiming:!1,claimingError:""}}),d=(0,r.Iz)({key:"checkClaimStatus",default:()=>1}),u=()=>{var e;const t=null===(e=window.localNetdataRegistry)||void 0===e?void 0:e.mg,n=(0,r.lZ)(d(t));return(0,a.useCallback)((()=>n((e=>e+1))),[t])},g=()=>{var e;const t=null===(e=window.localNetdataRegistry)||void 0===e?void 0:e.mg,[n,o]=(0,r.L4)(l({machineGuid:t}));return[n,(0,a.useCallback)((e=>o((t=>({...t,...e})),[])))]},m=()=>{var e;const t=(0,o.dg)(),n=null===(e=window.localNetdataRegistry)||void 0===e?void 0:e.mg,[l,u]=(0,r.L4)(d(n)),[m,v]=g(n),{loading:f}=m,y=(0,i.uW)("isAnonymous");return(0,a.useEffect)((()=>{!f&&n&&t&&(v({loading:!0,nodeId:null,spaceId:null,roomIds:[]}),(0,c.j)().then((e=>{let{data:t}=e;v({loading:!1,loaded:!0,...t,error:""})})).catch((e=>{var t;const n=null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.data;v({loading:!1,loaded:!0,error:(0,s.o)(null===n||void 0===n?void 0:n.errorMsgKey)||(null===n||void 0===n?void 0:n.errorMessage)||"Something went wrong",cloudStatus:"disabled",canBeClaimed:!1,keyFilename:""})})))}),[n,l,t,y]),{...m,checkAgain:u}}},29848:(e,t,n)=>{"use strict";n.d(t,{Hs:()=>c,c0:()=>i,ly:()=>s,pp:()=>l});n(62953);var a=n(47444);const r=(0,a.eU)({key:"spaceKeyAtom",default:0}),o=(0,a.eU)({key:"roomViewLoading",default:!0}),i=()=>(0,a.vc)(r),s=()=>{const[e,t]=(0,a.L4)(r);return()=>t(e+1)},c=()=>(0,a.vc)(o),l=()=>(0,a.L4)(o)},78459:(e,t,n)=>{"use strict";n.d(t,{Ay:()=>h,OS:()=>y,f7:()=>w});n(62953);var a,r=n(96540),o=n(47444),i=n(92138),s=n(3914),c=n(22292),l=n(79731),d=n(15255),u=n(9224),g=n(51641);const m=null===(a=window.localNetdataRegistry)||void 0===a?void 0:a.mg,v=(0,o.Iz)({key:"currentAgentBearerAtom",default:{loading:!1,token:localStorage.getItem("agentJWT:".concat(m))||"",expiration:localStorage.getItem("agentJWTExp:".concat(m))||null,bearerProtection:!0,error:""}}),f=(0,o.Iz)({key:"checkAgentBearer",default:()=>1}),y=()=>{const[{mg:e}]=(0,d.RJ)(),t=(0,o.lZ)(f(e));return(0,r.useCallback)((()=>t((e=>e+1))),[e])},w=()=>{const[{claimId:e,mg:t,nd:n}]=(0,d.RJ)();return(0,o.L4)(v({nodeId:n,machineGuid:t,claimId:e}))},h=()=>{const e=(0,s.dg)(),[{claimId:t,mg:n,nd:a}]=(0,d.RJ)(),[m,v]=(0,o.L4)(f(n)),[{loading:y,token:h,expiration:I,bearerProtection:p,error:k},A]=w(),S=(0,i.A)(m),b=(0,c.uW)("isAnonymous");return(0,r.useEffect)((()=>{!y&&n&&e&&!b&&t&&a&&(m===S&&I&&1e3*I>(new Date).getTime()+3600||(A((e=>({...e,loading:!0}))),(0,u.q5)(a,n,t).then((e=>{let{data:t}=e;A({loading:!1,...t,error:""}),localStorage.setItem("agentJWT:".concat(n),null===t||void 0===t?void 0:t.token),localStorage.setItem("agentJWTExp:".concat(n),null===t||void 0===t?void 0:t.expiration)})).catch((e=>{var t;const a=null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.data;localStorage.removeItem("agentJWT:".concat(n)),localStorage.removeItem("agentJWTExp:".concat(n)),A({loading:!1,token:"",expiration:null,bearerProtection:!0,error:(0,l.o)(null===a||void 0===a?void 0:a.errorMsgKey)||(null===a||void 0===a?void 0:a.errorMessage)||"Something went wrong"})}))))}),[n,I,m,e,b,S]),(0,g.A)(n),{token:h,bearerProtection:p,checkAgain:v,error:k}}},20378:(e,t,n)=>{"use strict";n.d(t,{Ay:()=>m,OS:()=>u,Q8:()=>g});n(62953);var a=n(96540),r=n(47444),o=n(3914),i=n(22292),s=n(79731),c=n(9224);const l=(0,r.Iz)({key:"userAccessAtom",default:{loaded:!1,loading:!1,userStatus:"notLoggedIn",userNodeStatus:"noAccess",nodeId:null,spaceId:null,roomIds:[],error:""}}),d=(0,r.Iz)({key:"checkUserAccess",default:()=>1}),u=()=>{var e;const t=null===(e=window.localNetdataRegistry)||void 0===e?void 0:e.mg,n=(0,r.lZ)(d(t));return(0,a.useCallback)((()=>n((e=>e+1))),[t])},g=()=>{var e;const t=null===(e=window.localNetdataRegistry)||void 0===e?void 0:e.mg;return(0,r.L4)(l({machineGuid:t}))},m=()=>{var e;const t=(0,o.dg)(),n=null===(e=window.localNetdataRegistry)||void 0===e?void 0:e.mg,[l,u]=(0,r.L4)(d(n)),[m,v]=g(n),{loading:f}=m,y=(0,i.uW)("isAnonymous");return(0,a.useEffect)((()=>{!f&&n&&t&&!y&&(v((e=>({loading:!0,nodeId:null,spaceId:null,roomIds:[],...e}))),(0,c.az)(n).then((e=>{let{data:t}=e;v({loading:!1,loaded:!0,...t,error:""})})).catch((e=>{var t;const n=null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.data;v({loading:!1,loaded:!0,error:(0,s.o)(null===n||void 0===n?void 0:n.errorMsgKey)||(null===n||void 0===n?void 0:n.errorMessage)||"Something went wrong",userStatus:"notLoggedIn",userNodeStatus:"noAccess",nodeId:null,spaceId:null,roomIds:[]})})))}),[n,l,t,y,f]),{...m,checkAgain:u}}},87337:(e,t,n)=>{"use strict";n.d(t,{xN:()=>f,vS:()=>g,YN:()=>y,KF:()=>v,iw:()=>u,rE:()=>m});n(17333),n(3064),n(41393),n(14905),n(98992),n(54520),n(72577),n(81454),n(8872),n(25509),n(65223),n(60321),n(41927),n(11632),n(64377),n(66771),n(12516),n(68931),n(52514),n(35694),n(52774),n(49536),n(21926),n(94483),n(16215),n(62953);var a=n(96540),r=n(47444),o=n(47767),i=n(22292);const s=(0,r.Iz)({key:"visitedNodes",default:()=>[]});var c=n(47762),l=n(9224);const d=(0,r.K0)({key:"visitedNodeIdsValue",get:e=>t=>{let{get:n}=t;return n(s(e)).map((e=>{let{id:t}=e;return t}))}}),u=()=>{const e=(0,i.NJ)(),t=(0,r.vc)(s(e)),n=(0,r.Zs)((e=>{let{set:t}=e;return e=>{t(c.gl,{values:e.reduce(((e,t)=>({...e,[t.id]:{...t,loaded:!0}})),{}),merge:!0})}}),[]);return(0,a.useEffect)((()=>{n(t)}),[t]),(0,r.vc)(d(e))},g=e=>{const t=(0,i.NJ)(),n=(0,r.vc)(s(t)),o=(0,a.useMemo)((()=>e?n.filter((t=>t.name.toUpperCase().includes(e.toUpperCase()))):n),[n,e]);return(0,a.useMemo)((()=>o.map((e=>e.id))),[o])},m=()=>(0,r.Zs)((e=>{let{snapshot:t,set:n}=e;return async(e,a)=>{const r=await t.getPromise((0,i.Dm)("id")),{urls:o,name:d}=await t.getPromise((0,c.GN)({id:e})),u=o.filter((e=>e!==a));n((0,c.GN)({id:e,key:"urls"}),u),u.length||n(s(r),(t=>t.filter((t=>t.id!==e))));try{await(u.length?(0,l.Bz)(r,e,d,u):(0,l.sm)(r,[e])),(0,l.UL)(r,e).catch((()=>{}))}catch(g){n((0,c.GN)({id:e,key:"urls"}),o)}}}),[]),v=()=>{const{pathname:e}=(0,o.zy)(),t=(0,i.NJ)(),n=f({autoFetch:!1});return(0,r.Zs)((e=>{let{snapshot:t,set:a}=e;return async(e,r,o)=>{if(await t.getPromise((0,i.Dm)("isAnonymous")))return;const d=await t.getPromise((0,i.Dm)("id")),{urls:u,name:g}=await t.getPromise((0,c.GN)({id:e}));let m=r?[r,...u]:u;m=[...new Set([window.location.href,...m])];const v=m.length!==u.length;try{a((0,c.GN)({id:e,key:"urls"}),m),a(s(d),(t=>{const n=t.find((t=>t.id===e)),a=t.filter((t=>t.id!==e));return n?[{...n,accessCount:n.accessCount+1,lastAccessTime:(new Date).toISOString()},...a]:[{accessCount:1,id:e,lastAccessTime:(new Date).toISOString(),urls:m,name:o},...a]})),v&&await(0,l.Bz)(d,e,o||g,m),n(),await(0,l.UL)(d,e)}catch(f){a((0,c.GN)({id:e,key:"urls"}),u)}}}),[n,e,t])},f=function(){let{autoFetch:e=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{id:t,isAnonymous:n}=(0,i.uW)(),[,o]=(0,r.L4)(s(t)),[c,d]=(0,a.useState)(0),u=(0,a.useCallback)((()=>{d((e=>e+1))}),[d]);return(0,a.useEffect)((()=>{if(t&&(e||c))if(n){const e=(window.visitedNodes||[]).sort(((e,t)=>new Date(t.lastAccessTime)-new Date(e.lastAccessTime)));o(e)}else(0,l.uQ)(t).then((e=>{if(!e)return;const{data:{results:t}}=e,n=t.sort(((e,t)=>new Date(t.lastAccessTime)-new Date(e.lastAccessTime)));o(n)}))}),[e,c,t,n]),u},y=()=>{const e=(0,i.NJ)(),t=s(e);return(0,r.Zs)((e=>{let{snapshot:n,set:a}=e;return async e=>{const r=(await n.getPromise((0,c.th)(e))).map((e=>e.machineGUID)),o=await n.getPromise(t),i=o.filter((e=>!r.includes(e.id)));i.length!==o.length&&a(t,i)}}),[e])}},92138:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var a=n(96540),r=n(2404),o=n.n(r),i=n(80862);const s=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o();const r=(0,a.useRef)(),s=(0,a.useRef)(e);return!(0,i.A)().current||t&&n(s.current,e)||(r.current=s.current,s.current=e),r.current}},50477:()=>{}}]);
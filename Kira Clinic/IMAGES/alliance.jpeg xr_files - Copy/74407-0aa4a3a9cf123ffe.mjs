"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[74407],{552341:(e,t,s)=>{s.d(t,{Z:()=>a});var r=s(149722);let a=()=>{let e=(0,r.Z)(),t=!!e.isAuth&&e.isPartner;return t}},354500:(e,t,s)=>{s.d(t,{Oz:()=>r,mo:()=>i,nt:()=>n,v8:()=>a});let r={BUSINESS_ACCOUNT:"BUSINESS_ACCOUNT",BUSINESS_HIERARCHY:"BUSINESS_HIERARCHY",USER_ACCOUNT:"USER",AD_ACCOUNT:"AD_ACCOUNT",PROFILE:"PROFILE"},a="BUSINESS_PANEL",n="ASSET_PANEL",i=500},368552:(e,t,s)=>{s.d(t,{FE:()=>T,lG:()=>O,d9:()=>N});var r=s(667294),a=s(616550),n=s(552341),i=s(516018),u=s(340523),l=s(149722),c=s(953565);let _=()=>{let e=(0,l.Z)(),{checkExperiment:t}=(0,u.F)(),s=(0,n.Z)()&&t("web_m10n_business_reporting_business_entity_service").anyEnabled,[a,_]=(0,r.useState)({isReady:!1}),d=(0,r.useCallback)(async({entityId:e,actingBusinessId:t,favorites:r})=>{s&&(await (0,i.yo)({entityId:e,actingBusinessId:t,favorites:r}),_(e=>{let s={...e,actingBusinessId:t};return r&&(s.favoriteAdAccounts={favoriteAdAccountsMap:{...e.favoriteAdAccounts?.favoriteAdAccountsMap||{},[r.actingBusinessId]:{advertiserId:r.adAccounts}}}),s}))},[s]);return(0,r.useEffect)(()=>{s&&e.isAuth&&!a.isReady&&(async()=>{let t=!1;try{let t=await (0,i.SF)({entityId:e.id});_(e=>({...e,...t}))}catch{t=!0}finally{(0,c.nP)("globalAccountSwitcher.getFavoriteAdAccounts",{sampleRate:1,tags:{businessId:e.id,hasError:t}}),_(e=>({...e,isReady:!0}))}})()},[a.isReady,s,e]),{accountSwitcherConfig:a,setConfig:d}};var d=s(354500),A=s(214877),E=s(342513),S=s(96157),o=s(624797),m=s(938927),p=s(441354),C=s(785893);let{Provider:I,useHook:N}=(0,E.Z)("AccountSwitcherContext"),O=e=>e.search&&(0,o.mB)(e.search).advertiserId,T=({children:e})=>{let t=(0,a.TH)(),{params:{userBizId:s,businessHierarchyId:u,advertiserId:c,username:E}}=(0,a.$B)(),o=O(t),N=(0,l.Z)(),[T,g]=(0,r.useState)(""),[y,R]=(0,r.useState)(null),[U,f]=(0,r.useState)(!1),[D,P]=(0,r.useState)(null),h=new URLSearchParams(t.search),[L,b]=(0,r.useState)(h.has("actingBusinessId")?null:{id:N.id||"",name:N.fullName||"",img:N.imageMediumUrl||""}),[$,v]=(0,r.useState)(!1),B=(0,n.Z)(),{logContextEvent:w}=(0,A.v)(),{accountSwitcherConfig:M,setConfig:G}=_();(0,r.useEffect)(()=>{u?g(u):g("")},[u]);let H=(0,r.useCallback)(async({id:e,username:t})=>{let s=await (0,i.bG)({user_id:e,username:t});s&&P({type:e?d.Oz.BUSINESS_ACCOUNT:d.Oz.PROFILE,id:e||s.id,name:s.full_name,img:s.image_medium_url,username:t}),v(!1)},[]),Z=(0,p.rc)(E);(0,r.useEffect)(()=>{(0,S.cD)(t)&&D&&Z!==E&&E===N.username&&(H({username:N.username}),b({id:N.id||"",name:N.fullName||"",img:N.imageMediumUrl||""}),R({type:d.nt,id:N.id}))},[t,Z,H,D,E,N.fullName,N.id,N.imageMediumUrl,N.username]),(0,r.useEffect)(()=>{let e=async({businessId:e,assetId:t})=>{if(!e){v(!1);return}try{let e={asset:{name:""},type:"AD_ACCOUNT"};if(N.isAuth){let{data:{data:s={[t]:e}}={}}=await (0,m.pI)({businessId:N.id,assetIds:[t],resourceType:"AD_ACCOUNT"})||{},{asset:r,type:a}=s[t]||e;P({id:t,name:r.name,img:"",type:a})}}catch{P({id:N.id||"",name:N.fullName||"",img:N.imageMediumUrl||"",type:d.Oz.BUSINESS_ACCOUNT})}v(!1)},r=async({id:e})=>{let t=await (0,i.p)({hierarchyId:e});P({id:e,name:t?.data?t.data.name:"",img:t?.data?t.data.img_medium_url:"",type:d.Oz.BUSINESS_HIERARCHY}),v(!1)};if(N.isAuth&&B){let a=D&&D.username&&D.username!==E;if((!D||a)&&!$){let a=(0,S.TI)(t)||(0,S.h3)(t),n=c||!!o&&!a;v(!0),u?r({id:u}):s?H({id:s}):(0,S.cD)(t)&&E?H({username:E}):n?e({businessId:N.id,assetId:c||o||""}):D&&D.id===N.id||(P({type:d.Oz.BUSINESS_ACCOUNT,id:N.id||"",name:N.fullName||"",img:N.imageMediumUrl||""}),v(!1))}}},[D,N,u,s,E,c,o,L,B,t,H,$]);let F=(0,r.useMemo)(()=>({activePanel:y,selectedHierarchyId:T,switcherOpen:U,openAccountSwitcher:()=>{if(w({event_type:101,view_type:608,component:14346}),!y){if((0,S.TI)(t))R({type:d.v8});else{let e=new URLSearchParams(t.search),s=e.get("actingBusinessId");R({type:d.nt,id:s??L?.id})}}f(!0)},closeAccountSwitcher:()=>f(!1),openAssetPanel:e=>{R({type:d.nt,id:e})},closeAssetPanel:()=>{R({type:d.v8})},actingBusiness:L,selectedAccount:D,setSelectedAccount:P,setActingBusiness:b,accountSwitcherConfig:M,setConfig:G}),[y,T,U,L,D,M,G,w,t]);return(0,C.jsx)(I,{value:F,children:e})}},593882:(e,t,s)=>{s.d(t,{C:()=>p,H:()=>C});var r=s(667294),a=s(552341),n=s(354500),i=s(516018),u=s(29156),l=s(250304),c=s(24691),_=s(342513),d=s(107366),A=s(244413),E=s(149722),S=s(186966),o=s(785893);let{Provider:m,useHook:p}=(0,_.Z)("BusinessHierarchyContext"),C=({children:e})=>{let[t,s]=(0,r.useState)([]),[_,p]=(0,r.useState)(!1),[C,I]=(0,r.useState)(!1),[N,O]=(0,r.useState)({}),[T,g]=(0,r.useState)(null),[y,R]=(0,r.useState)([]),[U,f]=(0,r.useState)({}),D=(0,S.Z)(),P=(0,r.useRef)(D),h=(0,E.Z)(),L=(0,a.Z)(),b=(0,r.useRef)({}),$=(0,r.useCallback)((e,t)=>{let s;t===n.Oz.BUSINESS_HIERARCHY?s=(0,c.Z)(l.Q6.DASHBOARD,"","",e):t===n.Oz.BUSINESS_ACCOUNT&&(s=(0,c.Z)(l.Q6.DASHBOARD,e));let r=(0,A.Z)({site:"www",path:s});(0,u.Z)(r)},[]),v=(0,r.useCallback)(async e=>{if(!L)return[];if(I(!0),b.current[e])return I(!1),b.current[e];{let t=await (0,d.Z)({url:"ads/v4/business_access/business_hierarchies/",data:{search_by:["FULL_NAME","BUSINESS_ID"],search_value:e}}),{data:s}=t.resource_response,r=s&&s.map(e=>(e.children&&(e.children=e.children.map(e=>(e.user.entity_type=n.Oz.USER_ACCOUNT,e))),e))||[],a=/^\d+$/.test(e),u=RegExp(e.toLowerCase(),"g"),l=[];T||g(l=await P.current());let c=T??l,_=c.filter(t=>{if(a)return t.id.includes(e);let s=t.user.full_name.toLowerCase();return s.match(u)}).map(i.IT),A=[...r.map(e=>e.id),..._.map(e=>e.id)],E=a?(h.id||"").includes(e):(h.fullName||"").toLowerCase().match(u);return h.isAuth&&E&&A.push(h.id),b.current[e]=A,I(!1),A}},[L,P,h.id,h.fullName,h.isAuth,T]),{id:B="",username:w="",email:M="",fullName:G="",imageSmallUrl:H="",imageMediumUrl:Z="",isAuth:F}=h,k=async e=>{if((!F||!L||T)&&!e)return;p(!0);let t=[];try{let e=await (0,d.Z)({url:"ads/v4/business_access/business_hierarchies/"}),{data:r}=e.resource_response;t=r&&r.map(e=>(e.children&&(e.children=e.children.map(e=>(e.user.entity_type=n.Oz.USER_ACCOUNT,e))),e))||[],s(t)}catch{s([])}try{let e=[];T||(e=await P.current(),g(e));let s=T??e;R(s.map(i.IT)),f(s.reduce((e,t)=>(e[t.id]=t.business_roles||[],e),{})),O((0,i.WP)({id:B,username:w,email:M,fullName:G,imageSmallUrl:H,imageMediumUrl:Z})),b.current[""]=[...t.map(e=>e.id),...s.map(i.IT).map(e=>e.id),B],p(!1)}catch{p(!1)}},V=(0,r.useCallback)(k,[B,w,M,G,H,Z,F,L,T]),z=(0,r.useCallback)(e=>t.some(t=>t.id===e||t.children.some(t=>t.id===e||t.user.id===e)),[t]),Y=(0,r.useCallback)(e=>t.map(e=>"BUSINESS_HIERARCHY"===e.entity_type?e:null).find(t=>!!t&&t.children.some(t=>t.user.id===e)),[t]),x=(0,r.useMemo)(()=>({businessHierarchies:[...N.id&&!z(N.id)?[N]:[],...t,...y.filter(e=>!z(e.id))],switchAccount:$,searchAccounts:v,loadingAccounts:_,isSearchingAccounts:C,fetchData:V,getParentHierarchyForIdIfExists:Y,viewerRolesOfEachEmployer:U}),[t,$,v,y,_,C,N,V,z,Y,U]);return(0,o.jsx)(m,{value:x,children:e})}},516018:(e,t,s)=>{s.d(t,{IT:()=>_,SF:()=>o,Vq:()=>c,WP:()=>d,Yu:()=>S,bG:()=>E,p:()=>A,yo:()=>m});var r=s(216167),a=s(354500),n=s(107366),i=s(288673),u=s(562967),l=s(785893);let c=e=>({id:e.id,entity_type:a.Oz.BUSINESS_ACCOUNT,user:{id:e.user.id,entity_type:a.Oz.USER_ACCOUNT,username:e.user.username,email:e.user.email,full_name:e.user.full_name,image_small_url:e.user.image_small_url,image_medium_url:e.user.image_medium_url}}),_=e=>({id:e.id,entity_type:a.Oz.BUSINESS_ACCOUNT,requires_mfa_for_roles:e.requires_mfa_for_roles,user:{id:e.user.id,entity_type:a.Oz.USER_ACCOUNT,username:e.user.username,email:e.user.email,full_name:e.user.full_name,image_small_url:e.user.image_small_url,image_medium_url:e.user.image_medium_url}}),d=e=>({id:e.id,entity_type:a.Oz.BUSINESS_ACCOUNT,user:{id:e.id,entity_type:a.Oz.USER_ACCOUNT,username:e.username,email:e.email,full_name:e.fullName,image_small_url:e.imageSmallUrl,image_medium_url:e.imageMediumUrl}}),A=async({hierarchyId:e})=>{let t=await (0,n.Z)({url:`ads/v4/business_access/business_hierarchy/${e}/`});return t.resource_response},E=async({user_id:e,username:t})=>{if(!t&&!e)return null;let s=await r.Z.create("UserResource",{user_id:e,username:t}).callGet(),{resource_response:{data:a}}=s;return a},S=(0,l.jsx)("hr",{style:{borderTop:"1px solid #e9e9e9"}}),o=async({entityId:e})=>{let t=await (0,i.FO)([{entity_type:"BIZ_USER",entity_id:e,property_keys:["GLOBAL_ACCOUNT_SWITCHER_CONFIG"]}]),s=t[0];if(!(s&&s.properties))return{};let r=s.properties.GLOBAL_ACCOUNT_SWITCHER_CONFIG;return r},m=async({entityId:e,actingBusinessId:t,favorites:s})=>{let r={};(0,u.k)(t)||(r.actingBusinessId=t),s&&(r.favoriteAdAccounts={favoriteAdAccountsMap:{[s.actingBusinessId]:{advertiserId:s.adAccounts}}}),Object.keys(r).length>0&&await (0,i.RM)([{entity_type:"BIZ_USER",entity_id:e,properties:{GLOBAL_ACCOUNT_SWITCHER_CONFIG:r}}])}},24691:(e,t,s)=>{s.d(t,{Z:()=>n});let r="/business/business-manager/",a="/business/business-hierarchy/",n=(e,t,s,n)=>{switch(e){case"DASHBOARD":return n?`${a}${String(n)}/dashboard/`:`${r}${String(t)}/dashboard/`;case"PEOPLE":return`${r}${String(t)}/employees/`;case"PARTNERS":return`${r}${String(t)}/partners/`;case"AD_ACCOUNTS":return`${r}${String(t)}/ad-accounts/`;case"HISTORY":return`${r}${String(t)}/history/`;case"PEOPLE_DETAIL":return`${r}${String(t)}/employees/${String(s)}/details/`;case"PARTNERS_DETAIL":return`${r}${String(t)}/partners/${String(s)}/details/`;case"SHARED_PARTNERS_DETAIL":return`${r}${String(t)}/shared/${String(s)}/details/`;case"AD_ACCOUNTS_DETAIL":return`${r}${String(t)}/ad-accounts/${String(s)}/details/`;case"PENDING_AD_ACCOUNTS_DETAIL":return`${r}${String(t)}/ad-accounts/pending/${String(s)}/details/`;case"PEOPLE_INVITES":return`${r}${String(t)}/employees/invites/`;case"PEOPLE_PENDING_TAB":return`${r}${String(t)}/employees/pending/`;case"PARTNERS_PENDING_TAB":return`${r}${String(t)}/partners/pending/`;case"AD_ACCOUNTS_PENDING_TAB":return`${r}${String(t)}/ad-accounts/pending`;case"AD_ACCOUNTS_CEE_MIGRATION":return`${r}${String(t)}/ad-accounts/cee-migration`;case"PARTNERS_INVITE_PAGE":return`${r}${String(t)}/partners/invites/`;case"PARTNERS_REQUEST_PAGE":return`${r}${String(t)}/partners/requests/`;case"PROFILES":return`${r}${String(t)}/profiles/`;case"PROFILES_DETAIL":return`${r}${String(t)}/profiles/${String(s)}/details/`;case"BUSINESS_SECURITY":return`${r}${String(t)}/security/`;case"SUPPORT_TOOL":return`${r}${String(t)}/support/`;case"ASSET_GROUPS":return s?`${r}${String(t)}/asset-groups/?asset_group_id=${String(s)}`:`${r}${String(t)}/asset-groups/`;case"INVOICE_MANAGEMENT":return`${r}${String(t)}/invoice-management/`;case"BUSINESS_HIERARCHY":return`${a}${String(n)}/hierarchy/`;case"BUSINESS_HIERARCHY_BUSINESS_SECURITY":return`${a}${String(n)}/business_security/`;case"MANAGERS":return`${a}${String(n)}/managers/`;case"AUDIENCES":return`${r}${String(t)}/audiences/`;case"SHARED_TAGS":return`${r}${String(t)}/shared-tags/`;case"CATALOGS":return`${r}${String(t)}/catalogs/`;case"BRAND_SAFETY":return`${r}${String(t)}/brand-safety/`;default:return r}}},317540:(e,t,s)=>{s.d(t,{Z:()=>r});let r={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,F5:116,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}},186966:(e,t,s)=>{s.d(t,{Z:()=>a});var r=s(107366);function a(){return async()=>{let e=await (0,r.Z)({url:"/ads/v4/business_access/businesses/me/employers/"}),t=e.resource_response?e.resource_response.data:{data:[]};return await Promise.all(t&&t.data||[])}}},665407:(e,t,s)=>{s.d(t,{By:()=>n,di:()=>u,s8:()=>i});var r=s(250304),a=s(107366);let n=async({limit:e,sortBy:t="FULL_NAME",sortDirection:s="ASCENDING",searchBy:n="FULL_NAME",searchTerm:i="",startIndex:u=0})=>{let l=e&&e<r.xX?e:r.xX,c=await (0,a.Z)({url:"ads/v4/business_access/businesses/me/get_pinterest_support_businesses",data:{sort_by:t,sort_ascending:"ASCENDING"===s,search_by:n,search_value:i,start_index:u,page_size:l}});return c.resource_response},i=async e=>{let t=await (0,a.Z)({url:`ads/v4/business_access/businesses/${e}/get_pinterest_support_access`});return t.resource_response},u=async()=>{let e=await (0,a.Z)({url:"ads/v4/pinterest_support_managed_advertisers",data:{add_fields:"advertiser.owner_user()"}});return e.resource_response}},939341:(e,t,s)=>{s.d(t,{I:()=>p,a:()=>o});var r=s(667294),a=s(616550),n=s(516018),i=s(700280),u=s(342513),l=s(340523),c=s(149722),_=s(665407),d=s(130371);let A=()=>{let{checkExperiment:e}=(0,l.F)(),t=(0,c.Z)(),s=!!(t.isAuth&&t.isPartner&&e("web_m10n_pin_support_tool").anyEnabled),{state:a,receiveAdAccounts:n}=(0,d.Z)(s),{managedBusinessesMap:i,error:u,fetching:A}=a,E=!!u||i.size>0,S=(0,r.useCallback)(async()=>{let e=await (0,_.di)();n(e?.data??[])},[n]);return(0,r.useEffect)(()=>{E||A||S()},[S,E,A]),i};var E=s(785893);let{Provider:S,useMaybeHook:o}=(0,u.Z)("PinSupportToolContext"),m=()=>{let{search:e}=(0,a.TH)();return(0,r.useMemo)(()=>new URLSearchParams(e),[e])},p=({children:e,viewerAdvertiser:t})=>{let{checkExperiment:s}=(0,l.F)(),a=(0,c.Z)(),u=a.isAuth&&a.isPartner&&s("web_m10n_pin_support_tool").anyEnabled,{state:_,actions:o}=(0,d.Z)(u),p=A(),C=[...p.values()].map(e=>(0,n.Vq)(e)),{sterling_on_steroids_ldap:I}=(0,i.u)(),{activeAdAccount:N,headerVisible:O}=_,T=a.isAuth&&!!I,{changeClient:g,changeAdAccount:y,toggleHeaderVisibility:R}=o;(0,r.useEffect)(()=>{u&&(T&&!O&&R(!0),!T&&O&&R(!1))},[R,T,u,O]);let U=m(),f=U.get("managedClientId"),D=U.get("advertiserId"),P=D||t?.id;(0,r.useEffect)(()=>{f&&P?y(P,f):f&&g(f)},[g,y,f,P]);let h=p.get(N?.clientId||""),L=h?.managedAdAccounts||new Map,b=L.get(N?.adAccountId||""),$=[...p.values()];return(0,E.jsx)(S,{value:{managedBusinesses:$,managedBusinessAccounts:C,headerVisible:_.headerVisible,activeClient:h,activeAdAccount:b,viewerAdvertiser:t,changeClient:g,changeAdAccount:y,toggleHeaderVisibility:R},children:e})}},130371:(e,t,s)=>{s.d(t,{Z:()=>c});var r=s(667294),a=s(573810);let n=e=>{let t=e.map(e=>({id:e.business.id,ownedAndManagedAdAccounts:e.business.ad_account_count,user:e.business.pinterest_support_business,managedAdAccounts:e.advertisers.reduce((e,t)=>e.set(t.id,t),new Map)})),s=[...t].sort(({user:{username:e}},{user:{username:t}})=>e.localeCompare(t)),r=s.map(e=>{let t=e.managedAdAccounts.values(),s=[...t].sort(({name:e},{name:t})=>e.localeCompare(t));return e.managedAdAccounts=s.reduce((e,t)=>e.set(t.id,t),new Map),e}),a=r.reduce((e,t)=>e.set(t.id,t),new Map);return a},i={managedBusinessesMap:new Map,headerVisible:!1,activeAdAccount:{clientId:void 0,adAccountId:void 0},fetching:!1,error:!1},u=(e,t)=>{switch(t.type){case"LOAD_AD_ACCOUNTS":return{...e,managedBusinessesMap:t.payload.managedBusinesses};case"SET_ACTIVE_CLIENT":case"SET_ACTIVE_AD_ACCOUNT":return{...e,activeAdAccount:t.payload};case"TOGGLE_HEADER_VISIBILITY":return{...e,headerVisible:t.payload};default:return e}},l=({dispatch:e,isEnabled:t,state:s})=>{let{headerVisible:a}=s,n=(0,r.useCallback)(s=>{t&&e({type:"SET_ACTIVE_CLIENT",payload:{clientId:s,adAccountId:null}})},[t,e]),i=(0,r.useCallback)((s,r)=>{t&&e({type:"SET_ACTIVE_AD_ACCOUNT",payload:{adAccountId:s,clientId:r}})},[t,e]),u=(0,r.useCallback)(s=>{t&&e({type:"TOGGLE_HEADER_VISIBILITY",payload:s??!a})},[t,e,a]);return{changeClient:n,changeAdAccount:i,toggleHeaderVisibility:u}},c=e=>{let[t,s]=(0,r.useReducer)(u,i),c=l({dispatch:s,isEnabled:e,state:t}),{activeAdAccount:_}=t;(0,r.useEffect)(()=>{let e=JSON.parse((0,a.qn)("psToolAdAccount",!1));e&&s({type:"SET_ACTIVE_AD_ACCOUNT",payload:e})},[]),(0,r.useEffect)(()=>{(0,a.Nh)("psToolAdAccount",JSON.stringify(_))},[_]);let d=(0,r.useCallback)(e=>{let t=n(e);s({type:"LOAD_AD_ACCOUNTS",payload:{managedBusinesses:t}})},[s]);return{state:t,actions:c,receiveAdAccounts:d}}},441354:(e,t,s)=>{s.d(t,{XI:()=>a,YZ:()=>i,rc:()=>n,sU:()=>c});var r=s(667294);function a(e){let[t,s]=(0,r.useState)(!1),a=()=>s(!0),n=()=>s(!1);return(0,r.useEffect)(()=>{let{current:t}=e;return t&&(t.addEventListener("mouseenter",a),t.addEventListener("mouseleave",n)),()=>{t&&(t.removeEventListener("mouseenter",a),t.removeEventListener("mouseleave",n))}}),t}let n=e=>{let t=(0,r.useRef)(e);return(0,r.useEffect)(()=>{t.current=e}),t.current};function i(){let e=(0,r.useRef)(!0);return(0,r.useEffect)(()=>{e.current=!1},[]),e.current}function u(e,t){return Object.is(e,t)}let l=Symbol("pre-initial value");function c(e,{equal:t=u,delta:s}={equal:u}){let a=(0,r.useRef)(l),n=a.current;return(0,r.useEffect)(()=>{a.current=e}),{previousValue:n,changed:n===l||!t(n,e),delta:s?.(n,e)}}},520719:(e,t,s)=>{s.d(t,{$o:()=>i,GW:()=>r,Jo:()=>n,MS:()=>p,Q8:()=>o,VX:()=>E,Zo:()=>l,aD:()=>c,b2:()=>d,g2:()=>A,s4:()=>u,tK:()=>m,ym:()=>_,zQ:()=>S});let r="/business/hub/?show_vmp=true",a=["FR"],n=["US","GB","CA","AU","DE","FR"].concat(["ES","IT","AT","CH","NL","BR","MX"]).filter(e=>!a.includes(e)),i={APPROVED:"approved",PENDING:"pending",DISAPPROVED:"declined",APPEAL_PENDING:"appeal_pending"},u=Object.freeze({APPLIED:"APPLIED",ACCEPTED:"ACCEPTED",NON_COMPLIANT:"NON_COMPLIANT",SUSPENDED:"SUSPENDED",CANCELLED:"CANCELLED"}),l=Object.freeze({UNSTARTED:"workflow-status-unstarted",IN_PROGRESS:"workflow-status-in-progress",ACCEPTED:"check-circle",ATTENTION:"workflow-status-warning",REJECTED:"workflow-status-problem",RECOMMENDED:"info-circle"}),c=Object.freeze({UNSTARTED:"dark",IN_PROGRESS:"success",ACCEPTED:"success",ATTENTION:"warning",REJECTED:"error",RECOMMENDED:"subtle"}),_="Verified merchant program not yet available in this country",d=2e3,A={can_appeal:!0,is_appeal:!1,appeal_count:0,appeal_comment:"",shipping_policy_url:"",return_policy_url:"",review_status:2,review_reasons:[]},E=Object.freeze({ACCOUNT_AGE:"ACCOUNT_AGE",DOMAIN_AGE:"DOMAIN_AGE",PROFILE_IMAGE:"PROFILE_IMAGE",PROFILE_COVER_IMAGE:"PROFILE_COVER_IMAGE",BIO:"BIO",SHOP_TAB:"SHOP_TAB",PINNER_FEEDBACK:"PINNER_FEEDBACK"}),S=[E.ACCOUNT_AGE,E.DOMAIN_AGE,E.PROFILE_IMAGE,E.PROFILE_COVER_IMAGE,E.BIO,E.SHOP_TAB,E.PINNER_FEEDBACK],o=Object.freeze({PASS:"PASS",FAIL:"FAIL"}),m=30,p=.5}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/74407-0aa4a3a9cf123ffe.mjs.map
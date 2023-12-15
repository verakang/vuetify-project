import{m as U,a as le,u as O,b as Ve,c as Te,d as ke,e as ve,f as Be,g as Ie,h as Ce,V as Ye,i as ce,j as We,t as Xe,k as Fe}from"./VDivider-2d8c06ba.js";import{p as $,i as de,c as v,r as ne,a as j,b as R,g as Ee,s as I,o as oe,d as Me,f as Ze,e as je,h as qe,j as Ue,k as ie,l as Y,m as u,n as me,t as q,q as fe,u as ge,v as Le,w as Ke,x as H,y as Pe,z as ee,A as te,B as Ge,C as he,D as Re,E as D,F as Je,G as Qe,H as et,I as tt,J as at,T as lt,K as He,L as nt,M as ot,N as it}from"./index-61698a78.js";import{u as ut,V as st,a as ye,b as rt,c as X,d as ct}from"./VTextField-12d6ce92.js";import{V as vt}from"./VCard-04f1408a.js";const ae=Symbol.for("vuetify:layout"),$e=Symbol.for("vuetify:layout-item"),pe=1e3,dt=$({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Ne=$({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function mt(){const e=de(ae);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Ae(e){const i=de(ae);if(!i)throw new Error("[Vuetify] Could not find injected layout");const t=e.id??`layout-item-${je()}`,n=Ee("useLayoutItem");Me($e,{id:t});const l=I(!1);qe(()=>l.value=!0),Ue(()=>l.value=!1);const{layoutItemStyles:a,layoutItemScrimStyles:r}=i.register(n,{...e,active:v(()=>l.value?!1:e.active.value),id:t});return ie(()=>i.unregister(t)),{layoutItemStyles:a,layoutRect:i.layoutRect,layoutItemScrimStyles:r}}const ft=(e,i,t,n)=>{let l={top:0,left:0,right:0,bottom:0};const a=[{id:"",layer:{...l}}];for(const r of e){const g=i.get(r),p=t.get(r),h=n.get(r);if(!g||!p||!h)continue;const s={...l,[g.value]:parseInt(l[g.value],10)+(h.value?parseInt(p.value,10):0)};a.push({id:r,layer:s}),l=s}return a};function gt(e){const i=de(ae,null),t=v(()=>i?i.rootZIndex.value-100:pe),n=ne([]),l=j(new Map),a=j(new Map),r=j(new Map),g=j(new Map),p=j(new Map),{resizeRef:h,contentRect:s}=ut(),b=v(()=>{const o=new Map,m=e.overlaps??[];for(const c of m.filter(x=>x.includes(":"))){const[x,S]=c.split(":");if(!n.value.includes(x)||!n.value.includes(S))continue;const M=l.get(x),L=l.get(S),z=a.get(x),N=a.get(S);!M||!L||!z||!N||(o.set(S,{position:M.value,amount:parseInt(z.value,10)}),o.set(x,{position:L.value,amount:-parseInt(N.value,10)}))}return o}),d=v(()=>{const o=[...new Set([...r.values()].map(c=>c.value))].sort((c,x)=>c-x),m=[];for(const c of o){const x=n.value.filter(S=>{var M;return((M=r.get(S))==null?void 0:M.value)===c});m.push(...x)}return ft(m,l,a,g)}),f=v(()=>!Array.from(p.values()).some(o=>o.value)),_=v(()=>d.value[d.value.length-1].layer),V=v(()=>({"--v-layout-left":R(_.value.left),"--v-layout-right":R(_.value.right),"--v-layout-top":R(_.value.top),"--v-layout-bottom":R(_.value.bottom),...f.value?void 0:{transition:"none"}})),B=v(()=>d.value.slice(1).map((o,m)=>{let{id:c}=o;const{layer:x}=d.value[m],S=a.get(c),M=l.get(c);return{id:c,...x,size:Number(S.value),position:M.value}})),w=o=>B.value.find(m=>m.id===o),T=Ee("createLayout"),k=I(!1);oe(()=>{k.value=!0}),Me(ae,{register:(o,m)=>{let{id:c,order:x,position:S,layoutSize:M,elementSize:L,active:z,disableTransitions:N,absolute:ue}=m;r.set(c,x),l.set(c,S),a.set(c,M),g.set(c,z),N&&p.set(c,N);const K=Ze($e,T==null?void 0:T.vnode).indexOf(o);K>-1?n.value.splice(K,0,c):n.value.push(c);const G=v(()=>B.value.findIndex(A=>A.id===c)),Z=v(()=>t.value+d.value.length*2-G.value*2),C=v(()=>{const A=S.value==="left"||S.value==="right",W=S.value==="right",Q=S.value==="bottom",be={[S.value]:0,zIndex:Z.value,transform:`translate${A?"X":"Y"}(${(z.value?0:-110)*(W||Q?-1:1)}%)`,position:ue.value||t.value!==pe?"absolute":"fixed",...f.value?void 0:{transition:"none"}};if(!k.value)return be;const P=B.value[G.value];if(!P)throw new Error(`[Vuetify] Could not find layout item "${c}"`);const re=b.value.get(c);return re&&(P[re.position]+=re.amount),{...be,height:A?`calc(100% - ${P.top}px - ${P.bottom}px)`:L.value?`${L.value}px`:void 0,left:W?void 0:`${P.left}px`,right:W?`${P.right}px`:void 0,top:S.value!=="bottom"?`${P.top}px`:void 0,bottom:S.value!=="top"?`${P.bottom}px`:void 0,width:A?L.value?`${L.value}px`:void 0:`calc(100% - ${P.left}px - ${P.right}px)`}}),J=v(()=>({zIndex:Z.value-1}));return{layoutItemStyles:C,layoutItemScrimStyles:J,zIndex:Z}},unregister:o=>{r.delete(o),l.delete(o),a.delete(o),g.delete(o),p.delete(o),n.value=n.value.filter(m=>m!==o)},mainRect:_,mainStyles:V,getLayoutItem:w,items:B,layoutRect:s,rootZIndex:t});const E=v(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),y=v(()=>({zIndex:i?t.value:void 0,position:i?"relative":void 0,overflow:i?"hidden":void 0}));return{layoutClasses:E,layoutStyles:y,getLayoutItem:w,items:B,layoutRect:s,layoutRef:h}}const ze=$({text:String,...U(),...le()},"VToolbarTitle"),De=Y()({name:"VToolbarTitle",props:ze(),setup(e,i){let{slots:t}=i;return O(()=>{const n=!!(t.default||t.text||e.text);return u(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[n&&u("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(l=t.default)==null?void 0:l.call(t)])]}})}),{}}}),ht=[null,"prominent","default","comfortable","compact"],Oe=$({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>ht.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Ve(),...U(),...Te(),...ke(),...le({tag:"header"}),...me()},"VToolbar"),we=Y()({name:"VToolbar",props:Oe(),setup(e,i){var f;let{slots:t}=i;const{backgroundColorClasses:n,backgroundColorStyles:l}=ve(q(e,"color")),{borderClasses:a}=Be(e),{elevationClasses:r}=Ie(e),{roundedClasses:g}=Ce(e),{themeClasses:p}=fe(e),{rtlClasses:h}=ge(),s=I(!!(e.extended||(f=t.extension)!=null&&f.call(t))),b=v(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),d=v(()=>s.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Le({VBtn:{variant:"text"}}),O(()=>{var w;const _=!!(e.title||t.title),V=!!(t.image||e.image),B=(w=t.extension)==null?void 0:w.call(t);return s.value=!!(e.extended||B),u(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},n.value,a.value,r.value,g.value,p.value,h.value,e.class],style:[l.value,e.style]},{default:()=>[V&&u("div",{key:"image",class:"v-toolbar__image"},[t.image?u(ce,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):u(Ye,{key:"image-img",cover:!0,src:e.image},null)]),u(ce,{defaults:{VTabs:{height:R(b.value)}}},{default:()=>{var T,k,E;return[u("div",{class:"v-toolbar__content",style:{height:R(b.value)}},[t.prepend&&u("div",{class:"v-toolbar__prepend"},[(T=t.prepend)==null?void 0:T.call(t)]),_&&u(De,{key:"title",text:e.title},{text:t.title}),(k=t.default)==null?void 0:k.call(t),t.append&&u("div",{class:"v-toolbar__append"},[(E=t.append)==null?void 0:E.call(t)])])]}}),u(ce,{defaults:{VTabs:{height:R(d.value)}}},{default:()=>[u(st,null,{default:()=>[s.value&&u("div",{class:"v-toolbar__extension",style:{height:R(d.value)}},[B])]})]})]})}),{contentHeight:b,extensionHeight:d}}}),yt=$({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function bt(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=i;let n=0;const l=ne(null),a=I(0),r=I(0),g=I(0),p=I(!1),h=I(!1),s=v(()=>Number(e.scrollThreshold)),b=v(()=>Ke((s.value-a.value)/s.value||0)),d=()=>{const f=l.value;!f||t&&!t.value||(n=a.value,a.value="window"in f?f.pageYOffset:f.scrollTop,h.value=a.value<n,g.value=Math.abs(a.value-s.value))};return H(h,()=>{r.value=r.value||a.value}),H(p,()=>{r.value=0}),oe(()=>{H(()=>e.scrollTarget,f=>{var V;const _=f?document.querySelector(f):window;_&&_!==l.value&&((V=l.value)==null||V.removeEventListener("scroll",d),l.value=_,l.value.addEventListener("scroll",d,{passive:!0}))},{immediate:!0})}),ie(()=>{var f;(f=l.value)==null||f.removeEventListener("scroll",d)}),t&&H(t,d,{immediate:!0}),{scrollThreshold:s,currentScroll:a,currentThreshold:g,isScrollActive:p,scrollRatio:b,isScrollingUp:h,savedScroll:r}}const pt=$({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Oe(),...Ne(),...yt(),height:{type:[Number,String],default:64}},"VAppBar"),wt=Y()({name:"VAppBar",props:pt(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:t}=i;const n=ne(),l=Pe(e,"modelValue"),a=v(()=>{var T;const w=new Set(((T=e.scrollBehavior)==null?void 0:T.split(" "))??[]);return{hide:w.has("hide"),inverted:w.has("inverted"),collapse:w.has("collapse"),elevate:w.has("elevate"),fadeImage:w.has("fade-image")}}),r=v(()=>{const w=a.value;return w.hide||w.inverted||w.collapse||w.elevate||w.fadeImage||!l.value}),{currentScroll:g,scrollThreshold:p,isScrollingUp:h,scrollRatio:s}=bt(e,{canScroll:r}),b=v(()=>e.collapse||a.value.collapse&&(a.value.inverted?s.value>0:s.value===0)),d=v(()=>e.flat||a.value.elevate&&(a.value.inverted?g.value>0:g.value===0)),f=v(()=>a.value.fadeImage?a.value.inverted?1-s.value:s.value:void 0),_=v(()=>{var k,E;if(a.value.hide&&a.value.inverted)return 0;const w=((k=n.value)==null?void 0:k.contentHeight)??0,T=((E=n.value)==null?void 0:E.extensionHeight)??0;return w+T});ee(v(()=>!!e.scrollBehavior),()=>{Ge(()=>{a.value.hide?a.value.inverted?l.value=g.value>p.value:l.value=h.value||g.value<p.value:l.value=!0})});const{ssrBootStyles:V}=ye(),{layoutItemStyles:B}=Ae({id:e.name,order:v(()=>parseInt(e.order,10)),position:q(e,"location"),layoutSize:_,elementSize:I(void 0),active:l,absolute:q(e,"absolute")});return O(()=>{const w=we.filterProps(e);return u(we,te({ref:n,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...B.value,"--v-toolbar-image-opacity":f.value,height:void 0,...V.value},e.style]},w,{collapse:b.value,flat:d.value}),t)}),{}}}),St=Y()({name:"VAppBarTitle",props:ze(),setup(e,i){let{slots:t}=i;return O(()=>u(De,te(e,{class:"v-app-bar-title"}),t)),{}}}),xt=Je("p",{class:"text-center ms-3"},"利嘉淨水場小水力發電機組",-1),_t={__name:"AppBar",setup(e){return(i,t)=>(he(),Re(wt,{class:"bg-primary",flat:""},{default:D(()=>[u(St,null,{default:D(()=>[xt]),_:1})]),_:1}))}};const Vt=$({scrollable:Boolean,...U(),...le({tag:"main"})},"VMain"),Tt=Y()({name:"VMain",props:Vt(),setup(e,i){let{slots:t}=i;const{mainStyles:n}=mt(),{ssrBootStyles:l}=ye();return O(()=>u(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[n.value,l.value,e.style]},{default:()=>{var a,r;return[e.scrollable?u("div",{class:"v-main__scroller"},[(a=t.default)==null?void 0:a.call(t)]):(r=t.default)==null?void 0:r.call(t)]}})),{}}});function kt(e){let{rootEl:i,isSticky:t,layoutItemStyles:n}=e;const l=I(!1),a=I(0),r=v(()=>{const h=typeof l.value=="boolean"?"top":l.value;return[t.value?{top:"auto",bottom:"auto",height:void 0}:void 0,l.value?{[h]:R(a.value)}:{top:n.value.top}]});oe(()=>{H(t,h=>{h?window.addEventListener("scroll",p,{passive:!0}):window.removeEventListener("scroll",p)},{immediate:!0})}),ie(()=>{window.removeEventListener("scroll",p)});let g=0;function p(){const h=g>window.scrollY?"up":"down",s=i.value.getBoundingClientRect(),b=parseFloat(n.value.top??0),d=window.scrollY-Math.max(0,a.value-b),f=s.height+Math.max(a.value,b)-window.scrollY-window.innerHeight,_=parseFloat(getComputedStyle(i.value).getPropertyValue("--v-body-scroll-y"))||0;s.height<window.innerHeight-b?(l.value="top",a.value=b):h==="up"&&l.value==="bottom"||h==="down"&&l.value==="top"?(a.value=window.scrollY+s.top-_,l.value=!0):h==="down"&&f<=0?(a.value=0,l.value="bottom"):h==="up"&&d<=0&&(_?l.value!=="top"&&(a.value=-d+_+b,l.value="top"):(a.value=s.top+d,l.value="top")),g=window.scrollY}return{isStuck:l,stickyStyles:r}}const Bt=100,It=20;function Se(e){const i=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*i}function xe(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let i=0;for(let t=e.length-1;t>0;t--){if(e[t].t===e[t-1].t)continue;const n=Se(i),l=(e[t].d-e[t-1].d)/(e[t].t-e[t-1].t);i+=(l-n)*Math.abs(l),t===e.length-1&&(i*=.5)}return Se(i)*1e3}function Ct(){const e={};function i(l){Array.from(l.changedTouches).forEach(a=>{(e[a.identifier]??(e[a.identifier]=new Qe(It))).push([l.timeStamp,a])})}function t(l){Array.from(l.changedTouches).forEach(a=>{delete e[a.identifier]})}function n(l){var h;const a=(h=e[l])==null?void 0:h.values().reverse();if(!a)throw new Error(`No samples for touch id ${l}`);const r=a[0],g=[],p=[];for(const s of a){if(r[0]-s[0]>Bt)break;g.push({t:s[0],d:s[1].clientX}),p.push({t:s[0],d:s[1].clientY})}return{x:xe(g),y:xe(p),get direction(){const{x:s,y:b}=this,[d,f]=[Math.abs(s),Math.abs(b)];return d>f&&s>=0?"right":d>f&&s<=0?"left":f>d&&b>=0?"down":f>d&&b<=0?"up":Et()}}}return{addMovement:i,endTouch:t,getVelocity:n}}function Et(){throw new Error}function Mt(e){let{isActive:i,isTemporary:t,width:n,touchless:l,position:a}=e;oe(()=>{window.addEventListener("touchstart",w,{passive:!0}),window.addEventListener("touchmove",T,{passive:!1}),window.addEventListener("touchend",k,{passive:!0})}),ie(()=>{window.removeEventListener("touchstart",w),window.removeEventListener("touchmove",T),window.removeEventListener("touchend",k)});const r=v(()=>["left","right"].includes(a.value)),{addMovement:g,endTouch:p,getVelocity:h}=Ct();let s=!1;const b=I(!1),d=I(0),f=I(0);let _;function V(y,o){return(a.value==="left"?y:a.value==="right"?document.documentElement.clientWidth-y:a.value==="top"?y:a.value==="bottom"?document.documentElement.clientHeight-y:F())-(o?n.value:0)}function B(y){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const m=a.value==="left"?(y-f.value)/n.value:a.value==="right"?(document.documentElement.clientWidth-y-f.value)/n.value:a.value==="top"?(y-f.value)/n.value:a.value==="bottom"?(document.documentElement.clientHeight-y-f.value)/n.value:F();return o?Math.max(0,Math.min(1,m)):m}function w(y){if(l.value)return;const o=y.changedTouches[0].clientX,m=y.changedTouches[0].clientY,c=25,x=a.value==="left"?o<c:a.value==="right"?o>document.documentElement.clientWidth-c:a.value==="top"?m<c:a.value==="bottom"?m>document.documentElement.clientHeight-c:F(),S=i.value&&(a.value==="left"?o<n.value:a.value==="right"?o>document.documentElement.clientWidth-n.value:a.value==="top"?m<n.value:a.value==="bottom"?m>document.documentElement.clientHeight-n.value:F());(x||S||i.value&&t.value)&&(s=!0,_=[o,m],f.value=V(r.value?o:m,i.value),d.value=B(r.value?o:m),p(y),g(y))}function T(y){const o=y.changedTouches[0].clientX,m=y.changedTouches[0].clientY;if(s){if(!y.cancelable){s=!1;return}const x=Math.abs(o-_[0]),S=Math.abs(m-_[1]);(r.value?x>S&&x>3:S>x&&S>3)?(b.value=!0,s=!1):(r.value?S:x)>3&&(s=!1)}if(!b.value)return;y.preventDefault(),g(y);const c=B(r.value?o:m,!1);d.value=Math.max(0,Math.min(1,c)),c>1?f.value=V(r.value?o:m,!0):c<0&&(f.value=V(r.value?o:m,!1))}function k(y){if(s=!1,!b.value)return;g(y),b.value=!1;const o=h(y.changedTouches[0].identifier),m=Math.abs(o.x),c=Math.abs(o.y);(r.value?m>c&&m>400:c>m&&c>3)?i.value=o.direction===({left:"right",right:"left",top:"down",bottom:"up"}[a.value]||F()):i.value=d.value>.5}const E=v(()=>b.value?{transform:a.value==="left"?`translateX(calc(-100% + ${d.value*n.value}px))`:a.value==="right"?`translateX(calc(100% - ${d.value*n.value}px))`:a.value==="top"?`translateY(calc(-100% + ${d.value*n.value}px))`:a.value==="bottom"?`translateY(calc(100% - ${d.value*n.value}px))`:F(),transition:"none"}:void 0);return{isDragging:b,dragProgress:d,dragStyles:E}}function F(){throw new Error}const Lt=["start","end","left","right","top","bottom"],Pt=$({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Lt.includes(e)},sticky:Boolean,...Ve(),...U(),...et(),...Te(),...Ne(),...ke(),...le({tag:"nav"}),...me()},"VNavigationDrawer"),_e=Y()({name:"VNavigationDrawer",props:Pt(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,i){let{attrs:t,emit:n,slots:l}=i;const{isRtl:a}=ge(),{themeClasses:r}=fe(e),{borderClasses:g}=Be(e),{backgroundColorClasses:p,backgroundColorStyles:h}=ve(q(e,"color")),{elevationClasses:s}=Ie(e),{displayClasses:b,mobile:d}=tt(e),{roundedClasses:f}=Ce(e),_=We(),V=Pe(e,"modelValue",null,C=>!!C),{ssrBootStyles:B}=ye(),{scopeId:w}=rt(),T=ne(),k=I(!1),E=v(()=>e.rail&&e.expandOnHover&&k.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),y=v(()=>Xe(e.location,a.value)),o=v(()=>!e.permanent&&(d.value||e.temporary)),m=v(()=>e.sticky&&!o.value&&y.value!=="bottom");ee(()=>e.expandOnHover&&e.rail!=null,()=>{H(k,C=>n("update:rail",!C))}),ee(()=>!e.disableResizeWatcher,()=>{H(o,C=>!e.permanent&&nt(()=>V.value=!C))}),ee(()=>!e.disableRouteWatcher&&!!_,()=>{H(_.currentRoute,()=>o.value&&(V.value=!1))}),H(()=>e.permanent,C=>{C&&(V.value=!0)}),at(()=>{e.modelValue!=null||o.value||(V.value=e.permanent||!d.value)});const{isDragging:c,dragProgress:x,dragStyles:S}=Mt({isActive:V,isTemporary:o,width:E,touchless:q(e,"touchless"),position:y}),M=v(()=>{const C=o.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):E.value;return c.value?C*x.value:C}),{layoutItemStyles:L,layoutItemScrimStyles:z}=Ae({id:e.name,order:v(()=>parseInt(e.order,10)),position:y,layoutSize:M,elementSize:E,active:v(()=>V.value||c.value),disableTransitions:v(()=>c.value),absolute:v(()=>e.absolute||m.value&&typeof N.value!="string")}),{isStuck:N,stickyStyles:ue}=kt({rootEl:T,isSticky:m,layoutItemStyles:L}),se=ve(v(()=>typeof e.scrim=="string"?e.scrim:null)),K=v(()=>({...c.value?{opacity:x.value*.2,transition:"none"}:void 0,...z.value}));Le({VList:{bgColor:"transparent"}});function G(){k.value=!0}function Z(){k.value=!1}return O(()=>{const C=l.image||e.image;return u(He,null,[u(e.tag,te({ref:T,onMouseenter:G,onMouseleave:Z,class:["v-navigation-drawer",`v-navigation-drawer--${y.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":k.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":o.value,"v-navigation-drawer--active":V.value,"v-navigation-drawer--sticky":m.value},r.value,p.value,g.value,b.value,s.value,f.value,e.class],style:[h.value,L.value,S.value,B.value,ue.value,e.style]},w,t),{default:()=>{var J,A,W,Q;return[C&&u("div",{key:"image",class:"v-navigation-drawer__img"},[l.image?(J=l.image)==null?void 0:J.call(l,{image:e.image}):u("img",{src:e.image,alt:""},null)]),l.prepend&&u("div",{class:"v-navigation-drawer__prepend"},[(A=l.prepend)==null?void 0:A.call(l)]),u("div",{class:"v-navigation-drawer__content"},[(W=l.default)==null?void 0:W.call(l)]),l.append&&u("div",{class:"v-navigation-drawer__append"},[(Q=l.append)==null?void 0:Q.call(l)])]}}),u(lt,{name:"fade-transition"},{default:()=>[o.value&&(c.value||V.value)&&!!e.scrim&&u("div",te({class:["v-navigation-drawer__scrim",se.backgroundColorClasses.value],style:[K.value,se.backgroundColorStyles.value],onClick:()=>V.value=!1},w),null)]})])}),{isStuck:N}}}),Rt={__name:"View",setup(e){return(i,t)=>{const n=ot("router-view");return he(),it(He,null,[u(Tt,{class:"bg-blue-lighten-5 pb-8"},{default:D(()=>[u(n)]),_:1}),u(_e,{width:"150"},{default:D(()=>[u(X,{title:"總覽"}),u(Fe),u(X,{link:"",title:"發電總覽",to:"/home"}),u(X,{link:"",title:"設備清單",to:"/devicelist"})]),_:1}),u(_e,{width:"180"},{default:D(()=>[u(vt,{class:"pa-3",elevation:"0"},{default:D(()=>[u(ct,{variant:"outlined",density:"compact",label:"搜尋","append-inner-icon":"mdi-magnify","single-line":"","hide-details":""})]),_:1}),u(X,{link:"",title:"案場一"}),u(X,{link:"",title:"案場二"}),u(X,{link:"",title:"案場三"})]),_:1})],64)}}};const Ht=$({...U(),...dt({fullHeight:!0}),...me()},"VApp"),$t=Y()({name:"VApp",props:Ht(),setup(e,i){let{slots:t}=i;const n=fe(e),{layoutClasses:l,getLayoutItem:a,items:r,layoutRef:g}=gt(e),{rtlClasses:p}=ge();return O(()=>{var h;return u("div",{ref:g,class:["v-application",n.themeClasses.value,l.value,p.value,e.class],style:[e.style]},[u("div",{class:"v-application__wrap"},[(h=t.default)==null?void 0:h.call(t)])])}),{getLayoutItem:a,items:r,theme:n}}}),Ot={__name:"Default",setup(e){return(i,t)=>(he(),Re($t,null,{default:D(()=>[u(_t),u(Rt)]),_:1}))}};export{Ot as default};
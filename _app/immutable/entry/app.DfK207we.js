const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.BaPfjxzI.js","../chunks/disclose-version.Bg9kRutz.js","../chunks/legacy.BkGlw58T.js","../chunks/utils.CJAfLu7n.js","../chunks/template.CV4TamR3.js","../chunks/if.Dfke5Qdj.js","../chunks/event-modifiers.CPIZuD_Z.js","../chunks/lifecycle.kEagMOkj.js","../chunks/store.BFJyLPHz.js","../chunks/stores.B_LT1IeS.js","../chunks/entry.Dz7wqagb.js","../chunks/index.BtPFLMy9.js","../chunks/preload-helper.4zoQEAJ5.js","../chunks/render.CfvtWDgS.js","../chunks/svelte-head.CoG-BEWW.js","../chunks/common.BvlOTgvE.js","../chunks/index-client.B2ZHp8Gn.js","../chunks/props.DPVyA6hB.js","../chunks/toast.1yhZ1T__.js","../chunks/html.CgVfE5hm.js","../assets/0.BdIo_8pu.css","../nodes/1.c7WH6YG4.js","../assets/1.CgUTVSGB.css","../nodes/2.D5jrFIDk.js","../chunks/markmap.Buesja9a.js","../chunks/class.cTksmFMZ.js","../chunks/debounce.CLTjDgnO.js","../chunks/footer.DRS15gHO.js","../nodes/3.Bzv1FpJe.js","../nodes/4.DvgXzhZ7.js","../nodes/5.BQO4So5b.js","../chunks/toolbar.DQ53-pWM.js","../assets/toolbar.CH3xBrHd.css","../chunks/loader.BvSB28za.js","../nodes/6.CRD7TX9Z.js","../nodes/7.Cn90g9oA.js","../chunks/public-api.mXPY6WKa.js","../nodes/8.DZqehiRK.js"])))=>i.map(i=>d[i]);
var q=e=>{throw TypeError(e)};var F=(e,t,r)=>t.has(e)||q("Cannot "+r);var i=(e,t,r)=>(F(e,t,"read from private field"),r?r.call(e):t.get(e)),x=(e,t,r)=>t.has(e)?q("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),A=(e,t,r,o)=>(F(e,t,"write to private field"),o?o.call(e,r):t.set(e,r),r);import{p as K,b as T,_ as l}from"../chunks/preload-helper.4zoQEAJ5.js";import{j as M,k as Q,i as U,ar as W,l as X,q as $,av as tt,g as f,O as et,a as O,aw as rt,aq as at,V as st,p as ot,Z as nt,u as it,ax as ct,f as p,s as ut,b as _t,d as L,c as mt,r as dt,t as lt,e as V}from"../chunks/utils.CJAfLu7n.js";import{h as ft,m as ht,u as vt,s as gt}from"../chunks/render.CfvtWDgS.js";import"../chunks/disclose-version.Bg9kRutz.js";import{i as D}from"../chunks/if.Dfke5Qdj.js";import{a as y,t as N,d as I,e as Et}from"../chunks/template.CV4TamR3.js";import{p as k}from"../chunks/props.DPVyA6hB.js";import{o as yt}from"../chunks/index-client.B2ZHp8Gn.js";function w(e,t,r){M&&Q();var o=e,n,_;U(()=>{n!==(n=t())&&(_&&(tt(_),_=null),n&&(_=X(()=>r(o,n))))},W),M&&(o=$)}function bt(e){return class extends Pt{constructor(t){super({component:e,...t})}}}var h,u;class Pt{constructor(t){x(this,h);x(this,u);var _;var r=new Map,o=(a,s)=>{var v=st(s);return r.set(a,v),v};const n=new Proxy({...t.props||{},$$events:{}},{get(a,s){return f(r.get(s)??o(s,Reflect.get(a,s)))},has(a,s){return s===et?!0:(f(r.get(s)??o(s,Reflect.get(a,s))),Reflect.has(a,s))},set(a,s,v){return O(r.get(s)??o(s,v),v),Reflect.set(a,s,v)}});A(this,u,(t.hydrate?ft:ht)(t.component,{target:t.target,anchor:t.anchor,props:n,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((_=t==null?void 0:t.props)!=null&&_.$$host)||t.sync===!1)&&rt(),A(this,h,n.$$events);for(const a of Object.keys(i(this,u)))a==="$set"||a==="$destroy"||a==="$on"||at(this,a,{get(){return i(this,u)[a]},set(s){i(this,u)[a]=s},enumerable:!0});i(this,u).$set=a=>{Object.assign(n,a)},i(this,u).$destroy=()=>{vt(i(this,u))}}$set(t){i(this,u).$set(t)}$on(t,r){i(this,h)[t]=i(this,h)[t]||[];const o=(...n)=>r.call(this,...n);return i(this,h)[t].push(o),()=>{i(this,h)[t]=i(this,h)[t].filter(n=>n!==o)}}$destroy(){i(this,u).$destroy()}}h=new WeakMap,u=new WeakMap;const qt={};var Rt=N('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),pt=N("<!> <!>",1);function Ot(e,t){ot(t,!0);let r=k(t,"components",23,()=>[]),o=k(t,"data_0",3,null),n=k(t,"data_1",3,null);nt(()=>t.stores.page.set(t.page)),it(()=>{t.stores,t.page,t.constructors,r(),t.form,o(),n(),t.stores.page.notify()});let _=L(!1),a=L(!1),s=L(null);yt(()=>{const c=t.stores.page.subscribe(()=>{f(_)&&(O(a,!0),ct().then(()=>{O(s,K(document.title||"untitled page"))}))});return O(_,!0),c});const v=V(()=>t.constructors[1]);var j=pt(),C=p(j);{var G=c=>{var d=I();const b=V(()=>t.constructors[0]);var P=p(d);w(P,()=>f(b),(g,E)=>{T(E(g,{get data(){return o()},get form(){return t.form},children:(m,Tt)=>{var S=I(),B=p(S);w(B,()=>f(v),(H,J)=>{T(J(H,{get data(){return n()},get form(){return t.form}}),R=>r()[1]=R,()=>{var R;return(R=r())==null?void 0:R[1]})}),y(m,S)},$$slots:{default:!0}}),m=>r()[0]=m,()=>{var m;return(m=r())==null?void 0:m[0]})}),y(c,d)},Y=c=>{var d=I();const b=V(()=>t.constructors[0]);var P=p(d);w(P,()=>f(b),(g,E)=>{T(E(g,{get data(){return o()},get form(){return t.form}}),m=>r()[0]=m,()=>{var m;return(m=r())==null?void 0:m[0]})}),y(c,d)};D(C,c=>{t.constructors[1]?c(G):c(Y,!1)})}var Z=ut(C,2);{var z=c=>{var d=Rt(),b=mt(d);{var P=g=>{var E=Et();lt(()=>gt(E,f(s))),y(g,E)};D(b,g=>{f(a)&&g(P)})}dt(d),y(c,d)};D(Z,c=>{f(_)&&c(z)})}y(e,j),_t()}const Ft=bt(Ot),Mt=[()=>l(()=>import("../nodes/0.BaPfjxzI.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),import.meta.url),()=>l(()=>import("../nodes/1.c7WH6YG4.js"),__vite__mapDeps([21,1,2,3,13,5,14,4,8,9,10,11,22]),import.meta.url),()=>l(()=>import("../nodes/2.D5jrFIDk.js"),__vite__mapDeps([23,1,2,3,14,4,24,5,15,12,11,25,17,8,16,26,27]),import.meta.url),()=>l(()=>import("../nodes/3.Bzv1FpJe.js"),__vite__mapDeps([28,1,2,3,4,7,16,10,11]),import.meta.url),()=>l(()=>import("../nodes/4.DvgXzhZ7.js"),__vite__mapDeps([29,12,3,1,13,5,14,4,15,11,19,25,16,27,2]),import.meta.url),()=>l(()=>import("../nodes/5.BQO4So5b.js"),__vite__mapDeps([30,1,2,3,14,4,7,16,10,11,24,5,15,12,25,17,8,26,31,32,33,18,13,19]),import.meta.url),()=>l(()=>import("../nodes/6.CRD7TX9Z.js"),__vite__mapDeps([34,1,3,4,12,16,15,11,24,5,25,17,8,26,31,32]),import.meta.url),()=>l(()=>import("../nodes/7.Cn90g9oA.js"),__vite__mapDeps([35,12,3,1,2,13,5,14,4,15,11,25,6,7,8,10,9,27,33,18,19,17,16,36,26]),import.meta.url),()=>l(()=>import("../nodes/8.DZqehiRK.js"),__vite__mapDeps([37,1,2,3,7,16,10,11]),import.meta.url)],Nt=[],Gt={"/":[2],"/docs":[3],"/docs/[id]":[4],"/full":[5],"/inner":[6],"/repl":[7],"/usage":[8]},xt={handleError:({error:e})=>{console.error(e)},reroute:()=>{},transport:{}},At=Object.fromEntries(Object.entries(xt.transport).map(([e,t])=>[e,t.decode])),Yt=(e,t)=>At[e](t);export{Yt as decode,At as decoders,Gt as dictionary,xt as hooks,qt as matchers,Mt as nodes,Ft as root,Nt as server_loads};

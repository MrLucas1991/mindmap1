var lt=Object.defineProperty;var dt=(r,t,a)=>t in r?lt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a;var x=(r,t,a)=>dt(r,typeof t!="symbol"?t+"":t,a);import{_ as n,b as pt,p as H}from"../chunks/preload-helper.4zoQEAJ5.js";import"../chunks/disclose-version.Bg9kRutz.js";import{p as ut,u as ht,t as f,b as _t,$ as ft,s as v,c as l,g as s,a as B,h as vt,f as S,r as m,d as G}from"../chunks/utils.CJAfLu7n.js";import{s as T}from"../chunks/render.CfvtWDgS.js";import{d as kt,i as J}from"../chunks/if.Dfke5Qdj.js";import{e as Q,a as gt,b as W,s as V}from"../chunks/common.BvlOTgvE.js";import{h as wt}from"../chunks/html.CgVfE5hm.js";import{a as d,t as g,d as K}from"../chunks/template.CV4TamR3.js";import{h as yt}from"../chunks/svelte-head.CoG-BEWW.js";import{t as X}from"../chunks/class.cTksmFMZ.js";import{o as Et}from"../chunks/index-client.B2ZHp8Gn.js";import{F as bt}from"../chunks/footer.DRS15gHO.js";const At=(r,t,a)=>{const o=r[t];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((h,L)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(L.bind(null,new Error("Unknown variable dynamic import: "+t+(t.split("/").length!==a?". Note that variables only represent file names one level deep.":""))))})};async function xt(r){return await At(Object.assign({"../docs/faq.md":()=>n(()=>import("../chunks/faq.Chw567Oz.js"),[],import.meta.url),"../docs/guide--use-with-nodejs.md":()=>n(()=>import("../chunks/guide--use-with-nodejs.BBZmgRkI.js"),[],import.meta.url),"../docs/json-options.md":()=>n(()=>import("../chunks/json-options.DzuBR8oj.js"),[],import.meta.url),"../docs/magic-comments.md":()=>n(()=>import("../chunks/magic-comments.Dv48Zb3t.js"),[],import.meta.url),"../docs/markmap.md":()=>n(()=>import("../chunks/markmap.BwYsdQ9y.js"),[],import.meta.url),"../docs/packages--coc-markmap.md":()=>n(()=>import("../chunks/packages--coc-markmap.AHDe9Q9U.js"),[],import.meta.url),"../docs/packages--markmap-autoloader.md":()=>n(()=>import("../chunks/packages--markmap-autoloader.JpK3cmw-.js"),[],import.meta.url),"../docs/packages--markmap-cli.md":()=>n(()=>import("../chunks/packages--markmap-cli.BqYE9tak.js"),[],import.meta.url),"../docs/packages--markmap-lib.md":()=>n(()=>import("../chunks/packages--markmap-lib.BsDIcLQd.js"),[],import.meta.url),"../docs/packages--markmap-render.md":()=>n(()=>import("../chunks/packages--markmap-render.0Ti3CuqS.js"),[],import.meta.url),"../docs/packages--markmap-toolbar.md":()=>n(()=>import("../chunks/packages--markmap-toolbar.CbAADZq1.js"),[],import.meta.url),"../docs/packages--markmap-view.md":()=>n(()=>import("../chunks/packages--markmap-view.CJtfwG5v.js"),[],import.meta.url)}),`../docs/${r}.md`,3)}async function Tt({params:r}){const t=r.id,{frontmatter:a,html:o}=await xt(t);return{path:t,frontmatter:a,html:o}}const Xt=Object.freeze(Object.defineProperty({__proto__:null,load:Tt},Symbol.toStringTag,{value:"Module"})),Y="https://cnt.deno.dev",j=new Set,Lt=200;let q;const Pt=async r=>{const t=await fetch(`${Y}/get/${r}`),{data:a}=await t.json();return a},Ot=async r=>(j.add(r),q||(q=new Promise(a=>{setTimeout(()=>{q=void 0;const o=[...j].sort().join(",");j.clear(),a(Pt(o))},Lt)})),(await q)[r]),C={};class k{constructor(t){x(this,"key","");x(this,"hash","");x(this,"data",0);this.url=t}static get(t){return C[t]||(C[t]=k.create(t))}static async create(t){const a=new k(t);return await a.load(),a}async load(){this.hash=await Dt(this.url),this.key=`markmap-url-${this.hash}`,this.data=await Ot(this.key)}hit(){fetch(`${Y}/hit/${this.key}`),this.data+=1}update(t){t.dataset.uk=this.hash,t.textContent=`${this.data}`,t.classList[this.data?"remove":"add"]("hidden")}check(t){if(t.__counting)return;const a=document.createElement("span");a.className="url-badge",t.after(a),this.update(a),t.__counting=this.hash}}async function Dt(r){const t=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(r)),a=new Uint8Array(t);return Array.from(a,o=>o.toString(16).padStart(2,"0")).join("").slice(0,6)}async function Rt(r,t){const a=r.target.closest("a");if(!a||!t(a.href))return;const o=await k.get(a.href);o.hit(),document.querySelectorAll(`[data-uk="${o.hash}"]`).forEach(h=>o.update(h))}var It=g('<meta name="Description" content="The documentation of markmap packages.">'),St=g('<li class="toc-sep"> </li>'),Vt=g('<li class="toc-item toc-heading"><a> </a></li>'),jt=g('<li class="toc-item"><a> </a></li> <!>',1),qt=g('<main class="relative flex md:fs"><aside id="markmap/sidebar" style="width:240px"><a href="#" rel="external" class="backdrop">Close</a> <a href="#markmap/sidebar" rel="external" class="toggle">|||</a> <ul class="toc h-full overflow-auto"></ul></aside> <div class="markdown flex-1 min-w-0 p-4 lg:pr-12 overflow-auto"><h1> </h1> <!> <!></div></main>');function Yt(r,t){ut(t,!0);let a,o=G(void 0),h=G(void 0);const L=[{title:"markmap",path:"markmap"},{title:"JSON Options",path:"json-options"},{title:"Magic Comments",path:"magic-comments"},{title:"faq",path:"faq"},{title:"Packages",type:"sep"},{title:"markmap-autoloader",path:"packages--markmap-autoloader"},{title:"markmap-lib",path:"packages--markmap-lib"},{title:"markmap-render",path:"packages--markmap-render"},{title:"markmap-view",path:"packages--markmap-view"},{title:"markmap-cli",path:"packages--markmap-cli"},{title:"markmap-toolbar",path:"packages--markmap-toolbar"},{title:"coc-markmap",path:"packages--coc-markmap"},{title:"Guides",type:"sep"},{title:"Use with Node",path:"guide--use-with-nodejs"}];function P(){if(!s(o))return;let i;for(const e of s(o)){if(e.el.getBoundingClientRect().top>100)break;i=e}B(h,H(i||s(o)[0]))}function Z(i){i.forEach(async e=>{e.target="_blank",e.rel="noopener",(await k.get(e.href)).check(e)})}function M(i){return i&&!i.startsWith(window.location.origin)}function N(){if(!a)return;B(o,H(Array.from(a.querySelectorAll("h2,h3"),e=>({el:e,id:e.id,title:e.textContent,depth:+e.tagName.toLowerCase().slice(1)}))));const{hljs:i}=window;if(i){const e=window.location.hash;e&&(window.location.hash=""),a.querySelectorAll("pre code").forEach(c=>{i.highlightElement(c)}),e&&(window.location.hash=e)}P(),Z(Array.from(a.querySelectorAll("a[href]")).filter(e=>M(e.href)))}ht(()=>{t.data&&a&&(a.scrollTo(0,0),vt(N))}),Et(()=>(gt().then(N),a.addEventListener("scroll",P),()=>a.removeEventListener("scroll",P)));var O=qt();yt(i=>{var e=It();f(()=>{var c;return ft.title=`${((c=t.data.frontmatter)==null?void 0:c.title)??""} - markmap docs`}),d(i,e)});var D=l(O),U=v(l(D),4);Q(U,21,()=>L,W,(i,e)=>{var c=K(),at=S(c);{var et=p=>{var u=St(),_=l(u,!0);m(u),f(()=>T(_,s(e).title)),d(p,u)},rt=p=>{var u=jt(),_=S(u),y=l(_),ot=l(y,!0);m(y),m(_);var it=v(_,2);{var st=I=>{var F=K(),nt=S(F);Q(nt,17,()=>s(o),W,(mt,E)=>{var b=Vt(),A=l(b),ct=l(A,!0);m(A),m(b),f(()=>{V(b,"style",`padding-left: ${8*s(E).depth}px`),V(A,"href",`#${s(E).id}`),X(A,"active",s(E)===s(h)),T(ct,s(E).title)}),d(mt,b)}),d(I,F)};J(it,I=>{s(e).path===t.data.path&&s(o)&&I(st)})}f(()=>{V(y,"href",s(e).path),X(y,"active",s(e).path===t.data.path),T(ot,s(e).title)}),d(p,u)};J(at,p=>{s(e).type==="sep"?p(et):p(rt,!1)})}d(i,c)}),m(U),m(D);var w=v(D,2);w.__click=[Rt,M];var R=l(w),$=l(R,!0);m(R);var z=v(R,2);wt(z,()=>t.data.html);var tt=v(z,2);bt(tt),m(w),pt(w,i=>a=i,()=>a),m(O),f(()=>{var i;return T($,(i=t.data.frontmatter)==null?void 0:i.title)}),d(r,O),_t()}kt(["click"]);export{Yt as component,Xt as universal};
/*! For license information please see 580.54938b46.chunk.js.LICENSE.txt */
(self.webpackChunkmovie_app=self.webpackChunkmovie_app||[]).push([[580],{580:(e,n,t)=>{"use strict";t.d(n,{A:()=>K});var r=t(139),a=t.n(r),s=t(43),i=t(579);const o=["xxl","xl","lg","md","sm","xs"],l="xs",c=s.createContext({prefixes:{},breakpoints:o,minBreakpoint:l}),{Consumer:u,Provider:f}=c;function d(e,n){const{prefixes:t}=(0,s.useContext)(c);return e||t[n]||n}const p=function(e){const n=(0,s.useRef)(e);return(0,s.useEffect)((()=>{n.current=e}),[e]),n};"undefined"!==typeof t.g&&t.g.navigator&&t.g.navigator.product,new WeakMap;const v=["as","disabled"];function g(e){let{tagName:n,disabled:t,href:r,target:a,rel:s,role:i,onClick:o,tabIndex:l=0,type:c}=e;n||(n=null!=r||null!=a||null!=s?"a":"button");const u={tagName:n};if("button"===n)return[{type:c||"button",disabled:t},u];const f=e=>{(t||"a"===n&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),t?e.stopPropagation():null==o||o(e)};return"a"===n&&(r||(r="#"),t&&(r=void 0)),[{role:null!=i?i:"button",disabled:void 0,tabIndex:t?void 0:l,href:r,target:"a"===n?a:void 0,"aria-disabled":t||void 0,rel:"a"===n?s:void 0,onClick:f,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),f(e))}},u]}const y=s.forwardRef(((e,n)=>{let{as:t,disabled:r}=e,a=function(e,n){if(null==e)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}(e,v);const[s,{tagName:o}]=g(Object.assign({tagName:t,disabled:r},a));return(0,i.jsx)(o,Object.assign({},a,s,{ref:n}))}));y.displayName="Button";const b=["onKeyDown"];const m=s.forwardRef(((e,n)=>{let{onKeyDown:t}=e,r=function(e,n){if(null==e)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}(e,b);const[a]=g(Object.assign({tagName:"a"},r)),o=function(e){const n=p(e);return(0,s.useCallback)((function(){return n.current&&n.current(...arguments)}),[n])}((e=>{a.onKeyDown(e),null==t||t(e)}));return(l=r.href)&&"#"!==l.trim()&&"button"!==r.role?(0,i.jsx)("a",Object.assign({ref:n},r,{onKeyDown:t})):(0,i.jsx)("a",Object.assign({ref:n},r,a,{onKeyDown:o}));var l}));m.displayName="Anchor";const x=m,h=s.forwardRef(((e,n)=>{let{active:t=!1,disabled:r=!1,className:s,style:o,activeLabel:l="(current)",children:c,linkStyle:u,linkClassName:f,as:d=x,...p}=e;const v=t||r?"span":d;return(0,i.jsx)("li",{ref:n,style:o,className:a()(s,"page-item",{active:t,disabled:r}),children:(0,i.jsxs)(v,{className:a()("page-link",f),style:u,...p,children:[c,t&&l&&(0,i.jsx)("span",{className:"visually-hidden",children:l})]})})}));h.displayName="PageItem";const N=h;function j(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;const r=s.forwardRef(((e,r)=>{let{children:a,...s}=e;return(0,i.jsxs)(h,{...s,ref:r,children:[(0,i.jsx)("span",{"aria-hidden":"true",children:a||n}),(0,i.jsx)("span",{className:"visually-hidden",children:t})]})}));return r.displayName=e,r}const w=j("First","\xab"),k=j("Prev","\u2039","Previous"),O=j("Ellipsis","\u2026","More"),P=j("Next","\u203a"),C=j("Last","\xbb"),D=s.forwardRef(((e,n)=>{let{bsPrefix:t,className:r,size:s,...o}=e;const l=d(t,"pagination");return(0,i.jsx)("ul",{ref:n,...o,className:a()(r,l,s&&`${l}-${s}`)})}));D.displayName="Pagination";const K=Object.assign(D,{First:w,Prev:k,Ellipsis:O,Item:N,Next:P,Last:C})},139:(e,n)=>{var t;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e="",n=0;n<arguments.length;n++){var t=arguments[n];t&&(e=i(e,s(t)))}return e}function s(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var n="";for(var t in e)r.call(e,t)&&e[t]&&(n=i(n,t));return n}function i(e,n){return n?e?e+" "+n:e+n:e}e.exports?(a.default=a,e.exports=a):void 0===(t=function(){return a}.apply(n,[]))||(e.exports=t)}()}}]);
//# sourceMappingURL=580.54938b46.chunk.js.map
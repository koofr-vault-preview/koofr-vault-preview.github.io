import{q as Oe,g as Ie,r as be,u as Ue,s as Pe,j as s}from"./DynamicThemeProvider-4BQuZolX.js";import{c as d,a as le,M as U}from"./emotion-css.esm-9QbHV8nv.js";import{R as G,g as Re,a as ke,b as Le,c as We,f as Ye,d as Ke}from"./RetinaImage-BgyCGNAx.js";import{S as Je}from"./logo-CF5GKqjA.js";import{i as ce,j as Ge,k as pe}from"./Button-CJ4fGdXT.js";import{L as De,G as ze,a as Qe}from"./LanguagePickerDropdown-CuoRgWx_.js";import{u as Ve}from"./useDocumentTitle-D3L4F_h2.js";import"./useMenuUpdate-DaK7Jj7t.js";var re={exports:{}},qe=re.exports,ve;function Xe(){return ve||(ve=1,(function(q,z){(function(O,K){q.exports=K(Oe())})(typeof self<"u"?self:qe,(O=>(()=>{var K={2:(t,a,e)=>{var n=e(2199),i=e(4664),o=e(5950);t.exports=function(r){return n(r,o,i)}},79:(t,a,e)=>{var n=e(3702),i=e(80),o=e(4739),r=e(8655),c=e(1175);function p(u){var x=-1,h=u==null?0:u.length;for(this.clear();++x<h;){var m=u[x];this.set(m[0],m[1])}}p.prototype.clear=n,p.prototype.delete=i,p.prototype.get=o,p.prototype.has=r,p.prototype.set=c,t.exports=p},80:(t,a,e)=>{var n=e(6025),i=Array.prototype.splice;t.exports=function(o){var r=this.__data__,c=n(r,o);return!(c<0||(c==r.length-1?r.pop():i.call(r,c,1),--this.size,0))}},270:(t,a,e)=>{var n=e(7068),i=e(346);t.exports=function o(r,c,p,u,x){return r===c||(r==null||c==null||!i(r)&&!i(c)?r!=r&&c!=c:n(r,c,p,u,o,x))}},289:(t,a,e)=>{var n=e(2651);t.exports=function(i){return n(this,i).get(i)}},294:t=>{t.exports=function(a){return typeof a=="number"&&a>-1&&a%1==0&&a<=9007199254740991}},317:t=>{t.exports=function(a){var e=-1,n=Array(a.size);return a.forEach((function(i,o){n[++e]=[o,i]})),n}},346:t=>{t.exports=function(a){return a!=null&&typeof a=="object"}},361:t=>{var a=/^(?:0|[1-9]\d*)$/;t.exports=function(e,n){var i=typeof e;return!!(n=n??9007199254740991)&&(i=="number"||i!="symbol"&&a.test(e))&&e>-1&&e%1==0&&e<n}},392:t=>{t.exports=function(a,e){return a?.[e]}},659:(t,a,e)=>{var n=e(1873),i=Object.prototype,o=i.hasOwnProperty,r=i.toString,c=n?n.toStringTag:void 0;t.exports=function(p){var u=o.call(p,c),x=p[c];try{p[c]=void 0;var h=!0}catch{}var m=r.call(p);return h&&(u?p[c]=x:delete p[c]),m}},689:(t,a,e)=>{var n=e(2),i=Object.prototype.hasOwnProperty;t.exports=function(o,r,c,p,u,x){var h=1&c,m=n(o),M=m.length;if(M!=n(r).length&&!h)return!1;for(var y=M;y--;){var f=m[y];if(!(h?f in r:i.call(r,f)))return!1}var E=x.get(o),j=x.get(r);if(E&&j)return E==r&&j==o;var B=!0;x.set(o,r),x.set(r,o);for(var b=h;++y<M;){var v=o[f=m[y]],T=r[f];if(p)var P=h?p(T,v,f,r,o,x):p(v,T,f,o,r,x);if(!(P===void 0?v===T||u(v,T,c,p,x):P)){B=!1;break}b||(b=f=="constructor")}if(B&&!b){var R=o.constructor,L=r.constructor;R==L||!("constructor"in o)||!("constructor"in r)||typeof R=="function"&&R instanceof R&&typeof L=="function"&&L instanceof L||(B=!1)}return x.delete(o),x.delete(r),B}},695:(t,a,e)=>{var n=e(8096),i=e(2428),o=e(6449),r=e(3656),c=e(361),p=e(7167),u=Object.prototype.hasOwnProperty;t.exports=function(x,h){var m=o(x),M=!m&&i(x),y=!m&&!M&&r(x),f=!m&&!M&&!y&&p(x),E=m||M||y||f,j=E?n(x.length,String):[],B=j.length;for(var b in x)!h&&!u.call(x,b)||E&&(b=="length"||y&&(b=="offset"||b=="parent")||f&&(b=="buffer"||b=="byteLength"||b=="byteOffset")||c(b,B))||j.push(b);return j}},938:t=>{t.exports=function(a){var e=this.__data__,n=e.delete(a);return this.size=e.size,n}},945:(t,a,e)=>{var n=e(79),i=e(8223),o=e(3661);t.exports=function(r,c){var p=this.__data__;if(p instanceof n){var u=p.__data__;if(!i||u.length<199)return u.push([r,c]),this.size=++p.size,this;p=this.__data__=new o(u)}return p.set(r,c),this.size=p.size,this}},1042:(t,a,e)=>{var n=e(6110)(Object,"create");t.exports=n},1175:(t,a,e)=>{var n=e(6025);t.exports=function(i,o){var r=this.__data__,c=n(r,i);return c<0?(++this.size,r.push([i,o])):r[c][1]=o,this}},1380:t=>{t.exports=function(a){return this.__data__.set(a,"__lodash_hash_undefined__"),this}},1420:(t,a,e)=>{var n=e(79);t.exports=function(){this.__data__=new n,this.size=0}},1459:t=>{t.exports=function(a){return this.__data__.has(a)}},1549:(t,a,e)=>{var n=e(2032),i=e(3862),o=e(6721),r=e(2749),c=e(5749);function p(u){var x=-1,h=u==null?0:u.length;for(this.clear();++x<h;){var m=u[x];this.set(m[0],m[1])}}p.prototype.clear=n,p.prototype.delete=i,p.prototype.get=o,p.prototype.has=r,p.prototype.set=c,t.exports=p},1873:(t,a,e)=>{var n=e(9325).Symbol;t.exports=n},1882:(t,a,e)=>{var n=e(2552),i=e(3805);t.exports=function(o){if(!i(o))return!1;var r=n(o);return r=="[object Function]"||r=="[object GeneratorFunction]"||r=="[object AsyncFunction]"||r=="[object Proxy]"}},1986:(t,a,e)=>{var n=e(1873),i=e(7828),o=e(5288),r=e(5911),c=e(317),p=e(4247),u=n?n.prototype:void 0,x=u?u.valueOf:void 0;t.exports=function(h,m,M,y,f,E,j){switch(M){case"[object DataView]":if(h.byteLength!=m.byteLength||h.byteOffset!=m.byteOffset)return!1;h=h.buffer,m=m.buffer;case"[object ArrayBuffer]":return!(h.byteLength!=m.byteLength||!E(new i(h),new i(m)));case"[object Boolean]":case"[object Date]":case"[object Number]":return o(+h,+m);case"[object Error]":return h.name==m.name&&h.message==m.message;case"[object RegExp]":case"[object String]":return h==m+"";case"[object Map]":var B=c;case"[object Set]":var b=1&y;if(B||(B=p),h.size!=m.size&&!b)return!1;var v=j.get(h);if(v)return v==m;y|=2,j.set(h,m);var T=r(B(h),B(m),y,f,E,j);return j.delete(h),T;case"[object Symbol]":if(x)return x.call(h)==x.call(m)}return!1}},2032:(t,a,e)=>{var n=e(1042);t.exports=function(){this.__data__=n?n(null):{},this.size=0}},2199:(t,a,e)=>{var n=e(4528),i=e(6449);t.exports=function(o,r,c){var p=r(o);return i(o)?p:n(p,c(o))}},2404:(t,a,e)=>{var n=e(270);t.exports=function(i,o){return n(i,o)}},2428:(t,a,e)=>{var n=e(7534),i=e(346),o=Object.prototype,r=o.hasOwnProperty,c=o.propertyIsEnumerable,p=n((function(){return arguments})())?n:function(u){return i(u)&&r.call(u,"callee")&&!c.call(u,"callee")};t.exports=p},2552:(t,a,e)=>{var n=e(1873),i=e(659),o=e(9350),r=n?n.toStringTag:void 0;t.exports=function(c){return c==null?c===void 0?"[object Undefined]":"[object Null]":r&&r in Object(c)?i(c):o(c)}},2651:(t,a,e)=>{var n=e(4218);t.exports=function(i,o){var r=i.__data__;return n(o)?r[typeof o=="string"?"string":"hash"]:r.map}},2749:(t,a,e)=>{var n=e(1042),i=Object.prototype.hasOwnProperty;t.exports=function(o){var r=this.__data__;return n?r[o]!==void 0:i.call(r,o)}},2804:(t,a,e)=>{var n=e(6110)(e(9325),"Promise");t.exports=n},2949:(t,a,e)=>{var n=e(2651);t.exports=function(i,o){var r=n(this,i),c=r.size;return r.set(i,o),this.size+=r.size==c?0:1,this}},3040:(t,a,e)=>{var n=e(1549),i=e(79),o=e(8223);t.exports=function(){this.size=0,this.__data__={hash:new n,map:new(o||i),string:new n}}},3146:(t,a,e)=>{for(var n=e(3491),i=typeof window>"u"?e.g:window,o=["moz","webkit"],r="AnimationFrame",c=i["request"+r],p=i["cancel"+r]||i["cancelRequest"+r],u=0;!c&&u<o.length;u++)c=i[o[u]+"Request"+r],p=i[o[u]+"Cancel"+r]||i[o[u]+"CancelRequest"+r];if(!c||!p){var x=0,h=0,m=[],M=1e3/60;c=function(y){if(m.length===0){var f=n(),E=Math.max(0,M-(f-x));x=E+f,setTimeout((function(){var j=m.slice(0);m.length=0;for(var B=0;B<j.length;B++)if(!j[B].cancelled)try{j[B].callback(x)}catch(b){setTimeout((function(){throw b}),0)}}),Math.round(E))}return m.push({handle:++h,callback:y,cancelled:!1}),h},p=function(y){for(var f=0;f<m.length;f++)m[f].handle===y&&(m[f].cancelled=!0)}}t.exports=function(y){return c.call(i,y)},t.exports.cancel=function(){p.apply(i,arguments)},t.exports.polyfill=function(y){y||(y=i),y.requestAnimationFrame=c,y.cancelAnimationFrame=p}},3345:t=>{t.exports=function(){return[]}},3491:function(t){(function(){var a,e,n,i,o,r;typeof performance<"u"&&performance!==null&&performance.now?t.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(t.exports=function(){return(a()-o)/1e6},e=process.hrtime,i=(a=function(){var c;return 1e9*(c=e())[0]+c[1]})(),r=1e9*process.uptime(),o=i-r):Date.now?(t.exports=function(){return Date.now()-n},n=Date.now()):(t.exports=function(){return new Date().getTime()-n},n=new Date().getTime())}).call(this)},3605:t=>{t.exports=function(a){return this.__data__.get(a)}},3650:(t,a,e)=>{var n=e(4335)(Object.keys,Object);t.exports=n},3656:(t,a,e)=>{t=e.nmd(t);var n=e(9325),i=e(9935),o=a&&!a.nodeType&&a,r=o&&t&&!t.nodeType&&t,c=r&&r.exports===o?n.Buffer:void 0,p=(c?c.isBuffer:void 0)||i;t.exports=p},3661:(t,a,e)=>{var n=e(3040),i=e(7670),o=e(289),r=e(4509),c=e(2949);function p(u){var x=-1,h=u==null?0:u.length;for(this.clear();++x<h;){var m=u[x];this.set(m[0],m[1])}}p.prototype.clear=n,p.prototype.delete=i,p.prototype.get=o,p.prototype.has=r,p.prototype.set=c,t.exports=p},3702:t=>{t.exports=function(){this.__data__=[],this.size=0}},3805:t=>{t.exports=function(a){var e=typeof a;return a!=null&&(e=="object"||e=="function")}},3862:t=>{t.exports=function(a){var e=this.has(a)&&delete this.__data__[a];return this.size-=e?1:0,e}},4218:t=>{t.exports=function(a){var e=typeof a;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?a!=="__proto__":a===null}},4247:t=>{t.exports=function(a){var e=-1,n=Array(a.size);return a.forEach((function(i){n[++e]=i})),n}},4248:t=>{t.exports=function(a,e){for(var n=-1,i=a==null?0:a.length;++n<i;)if(e(a[n],n,a))return!0;return!1}},4335:t=>{t.exports=function(a,e){return function(n){return a(e(n))}}},4509:(t,a,e)=>{var n=e(2651);t.exports=function(i){return n(this,i).has(i)}},4528:t=>{t.exports=function(a,e){for(var n=-1,i=e.length,o=a.length;++n<i;)a[o+n]=e[n];return a}},4664:(t,a,e)=>{var n=e(9770),i=e(3345),o=Object.prototype.propertyIsEnumerable,r=Object.getOwnPropertySymbols,c=r?function(p){return p==null?[]:(p=Object(p),n(r(p),(function(u){return o.call(p,u)})))}:i;t.exports=c},4739:(t,a,e)=>{var n=e(6025);t.exports=function(i){var o=this.__data__,r=n(o,i);return r<0?void 0:o[r][1]}},4840:(t,a,e)=>{var n=typeof e.g=="object"&&e.g&&e.g.Object===Object&&e.g;t.exports=n},4894:(t,a,e)=>{var n=e(1882),i=e(294);t.exports=function(o){return o!=null&&i(o.length)&&!n(o)}},4901:(t,a,e)=>{var n=e(2552),i=e(294),o=e(346),r={};r["[object Float32Array]"]=r["[object Float64Array]"]=r["[object Int8Array]"]=r["[object Int16Array]"]=r["[object Int32Array]"]=r["[object Uint8Array]"]=r["[object Uint8ClampedArray]"]=r["[object Uint16Array]"]=r["[object Uint32Array]"]=!0,r["[object Arguments]"]=r["[object Array]"]=r["[object ArrayBuffer]"]=r["[object Boolean]"]=r["[object DataView]"]=r["[object Date]"]=r["[object Error]"]=r["[object Function]"]=r["[object Map]"]=r["[object Number]"]=r["[object Object]"]=r["[object RegExp]"]=r["[object Set]"]=r["[object String]"]=r["[object WeakMap]"]=!1,t.exports=function(c){return o(c)&&i(c.length)&&!!r[n(c)]}},5083:(t,a,e)=>{var n=e(1882),i=e(7296),o=e(3805),r=e(7473),c=/^\[object .+?Constructor\]$/,p=Function.prototype,u=Object.prototype,x=p.toString,h=u.hasOwnProperty,m=RegExp("^"+x.call(h).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(M){return!(!o(M)||i(M))&&(n(M)?m:c).test(r(M))}},5288:t=>{t.exports=function(a,e){return a===e||a!=a&&e!=e}},5481:(t,a,e)=>{var n=e(9325)["__core-js_shared__"];t.exports=n},5527:t=>{var a=Object.prototype;t.exports=function(e){var n=e&&e.constructor;return e===(typeof n=="function"&&n.prototype||a)}},5580:(t,a,e)=>{var n=e(6110)(e(9325),"DataView");t.exports=n},5749:(t,a,e)=>{var n=e(1042);t.exports=function(i,o){var r=this.__data__;return this.size+=this.has(i)?0:1,r[i]=n&&o===void 0?"__lodash_hash_undefined__":o,this}},5861:(t,a,e)=>{var n=e(5580),i=e(8223),o=e(2804),r=e(6545),c=e(8303),p=e(2552),u=e(7473),x="[object Map]",h="[object Promise]",m="[object Set]",M="[object WeakMap]",y="[object DataView]",f=u(n),E=u(i),j=u(o),B=u(r),b=u(c),v=p;(n&&v(new n(new ArrayBuffer(1)))!=y||i&&v(new i)!=x||o&&v(o.resolve())!=h||r&&v(new r)!=m||c&&v(new c)!=M)&&(v=function(T){var P=p(T),R=P=="[object Object]"?T.constructor:void 0,L=R?u(R):"";if(L)switch(L){case f:return y;case E:return x;case j:return h;case B:return m;case b:return M}return P}),t.exports=v},5911:(t,a,e)=>{var n=e(8859),i=e(4248),o=e(9219);t.exports=function(r,c,p,u,x,h){var m=1&p,M=r.length,y=c.length;if(M!=y&&!(m&&y>M))return!1;var f=h.get(r),E=h.get(c);if(f&&E)return f==c&&E==r;var j=-1,B=!0,b=2&p?new n:void 0;for(h.set(r,c),h.set(c,r);++j<M;){var v=r[j],T=c[j];if(u)var P=m?u(T,v,j,c,r,h):u(v,T,j,r,c,h);if(P!==void 0){if(P)continue;B=!1;break}if(b){if(!i(c,(function(R,L){if(!o(b,L)&&(v===R||x(v,R,p,u,h)))return b.push(L)}))){B=!1;break}}else if(v!==T&&!x(v,T,p,u,h)){B=!1;break}}return h.delete(r),h.delete(c),B}},5950:(t,a,e)=>{var n=e(695),i=e(8984),o=e(4894);t.exports=function(r){return o(r)?n(r):i(r)}},6009:(t,a,e)=>{t=e.nmd(t);var n=e(4840),i=a&&!a.nodeType&&a,o=i&&t&&!t.nodeType&&t,r=o&&o.exports===i&&n.process,c=(function(){try{return o&&o.require&&o.require("util").types||r&&r.binding&&r.binding("util")}catch{}})();t.exports=c},6025:(t,a,e)=>{var n=e(5288);t.exports=function(i,o){for(var r=i.length;r--;)if(n(i[r][0],o))return r;return-1}},6110:(t,a,e)=>{var n=e(5083),i=e(392);t.exports=function(o,r){var c=i(o,r);return n(c)?c:void 0}},6449:t=>{var a=Array.isArray;t.exports=a},6545:(t,a,e)=>{var n=e(6110)(e(9325),"Set");t.exports=n},6721:(t,a,e)=>{var n=e(1042),i=Object.prototype.hasOwnProperty;t.exports=function(o){var r=this.__data__;if(n){var c=r[o];return c==="__lodash_hash_undefined__"?void 0:c}return i.call(r,o)?r[o]:void 0}},7068:(t,a,e)=>{var n=e(7217),i=e(5911),o=e(1986),r=e(689),c=e(5861),p=e(6449),u=e(3656),x=e(7167),h="[object Arguments]",m="[object Array]",M="[object Object]",y=Object.prototype.hasOwnProperty;t.exports=function(f,E,j,B,b,v){var T=p(f),P=p(E),R=T?m:c(f),L=P?m:c(E),F=(R=R==h?M:R)==M,H=(L=L==h?M:L)==M,X=R==L;if(X&&u(f)){if(!u(E))return!1;T=!0,F=!1}if(X&&!F)return v||(v=new n),T||x(f)?i(f,E,j,B,b,v):o(f,E,R,j,B,b,v);if(!(1&j)){var N=F&&y.call(f,"__wrapped__"),A=H&&y.call(E,"__wrapped__");if(N||A){var C=N?f.value():f,S=A?E.value():E;return v||(v=new n),b(C,S,j,B,v)}}return!!X&&(v||(v=new n),r(f,E,j,B,b,v))}},7167:(t,a,e)=>{var n=e(4901),i=e(7301),o=e(6009),r=o&&o.isTypedArray,c=r?i(r):n;t.exports=c},7217:(t,a,e)=>{var n=e(79),i=e(1420),o=e(938),r=e(3605),c=e(9817),p=e(945);function u(x){var h=this.__data__=new n(x);this.size=h.size}u.prototype.clear=i,u.prototype.delete=o,u.prototype.get=r,u.prototype.has=c,u.prototype.set=p,t.exports=u},7296:(t,a,e)=>{var n,i=e(5481),o=(n=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";t.exports=function(r){return!!o&&o in r}},7301:t=>{t.exports=function(a){return function(e){return a(e)}}},7473:t=>{var a=Function.prototype.toString;t.exports=function(e){if(e!=null){try{return a.call(e)}catch{}try{return e+""}catch{}}return""}},7534:(t,a,e)=>{var n=e(2552),i=e(346);t.exports=function(o){return i(o)&&n(o)=="[object Arguments]"}},7670:(t,a,e)=>{var n=e(2651);t.exports=function(i){var o=n(this,i).delete(i);return this.size-=o?1:0,o}},7828:(t,a,e)=>{var n=e(9325).Uint8Array;t.exports=n},8096:t=>{t.exports=function(a,e){for(var n=-1,i=Array(a);++n<a;)i[n]=e(n);return i}},8223:(t,a,e)=>{var n=e(6110)(e(9325),"Map");t.exports=n},8303:(t,a,e)=>{var n=e(6110)(e(9325),"WeakMap");t.exports=n},8655:(t,a,e)=>{var n=e(6025);t.exports=function(i){return n(this.__data__,i)>-1}},8859:(t,a,e)=>{var n=e(3661),i=e(1380),o=e(1459);function r(c){var p=-1,u=c==null?0:c.length;for(this.__data__=new n;++p<u;)this.add(c[p])}r.prototype.add=r.prototype.push=i,r.prototype.has=o,t.exports=r},8984:(t,a,e)=>{var n=e(5527),i=e(3650),o=Object.prototype.hasOwnProperty;t.exports=function(r){if(!n(r))return i(r);var c=[];for(var p in Object(r))o.call(r,p)&&p!="constructor"&&c.push(p);return c}},9155:t=>{t.exports=O},9219:t=>{t.exports=function(a,e){return a.has(e)}},9325:(t,a,e)=>{var n=e(4840),i=typeof self=="object"&&self&&self.Object===Object&&self,o=n||i||Function("return this")();t.exports=o},9350:t=>{var a=Object.prototype.toString;t.exports=function(e){return a.call(e)}},9770:t=>{t.exports=function(a,e){for(var n=-1,i=a==null?0:a.length,o=0,r=[];++n<i;){var c=a[n];e(c,n,a)&&(r[o++]=c)}return r}},9817:t=>{t.exports=function(a){return this.__data__.has(a)}},9905:(t,a,e)=>{e.d(a,{default:()=>X});var n=e(3146),i=e.n(n);const o=function(N){return new RegExp(/<[a-z][\s\S]*>/i).test(N)},r=function(N,A){return Math.floor(Math.random()*(A-N+1))+N};var c="TYPE_CHARACTER",p="REMOVE_CHARACTER",u="REMOVE_ALL",x="REMOVE_LAST_VISIBLE_NODE",h="PAUSE_FOR",m="CALL_FUNCTION",M="ADD_HTML_TAG_ELEMENT",y="CHANGE_DELETE_SPEED",f="CHANGE_DELAY",E="CHANGE_CURSOR",j="PASTE_STRING",B="HTML_TAG";function b(N){return b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},b(N)}function v(N,A){var C=Object.keys(N);if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(N);A&&(S=S.filter((function(V){return Object.getOwnPropertyDescriptor(N,V).enumerable}))),C.push.apply(C,S)}return C}function T(N){for(var A=1;A<arguments.length;A++){var C=arguments[A]!=null?arguments[A]:{};A%2?v(Object(C),!0).forEach((function(S){F(N,S,C[S])})):Object.getOwnPropertyDescriptors?Object.defineProperties(N,Object.getOwnPropertyDescriptors(C)):v(Object(C)).forEach((function(S){Object.defineProperty(N,S,Object.getOwnPropertyDescriptor(C,S))}))}return N}function P(N){return(function(A){if(Array.isArray(A))return R(A)})(N)||(function(A){if(typeof Symbol<"u"&&A[Symbol.iterator]!=null||A["@@iterator"]!=null)return Array.from(A)})(N)||(function(A,C){if(A){if(typeof A=="string")return R(A,C);var S={}.toString.call(A).slice(8,-1);return S==="Object"&&A.constructor&&(S=A.constructor.name),S==="Map"||S==="Set"?Array.from(A):S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S)?R(A,C):void 0}})(N)||(function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)})()}function R(N,A){(A==null||A>N.length)&&(A=N.length);for(var C=0,S=Array(A);C<A;C++)S[C]=N[C];return S}function L(N,A){for(var C=0;C<A.length;C++){var S=A[C];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(N,H(S.key),S)}}function F(N,A,C){return(A=H(A))in N?Object.defineProperty(N,A,{value:C,enumerable:!0,configurable:!0,writable:!0}):N[A]=C,N}function H(N){var A=(function(C){if(b(C)!="object"||!C)return C;var S=C[Symbol.toPrimitive];if(S!==void 0){var V=S.call(C,"string");if(b(V)!="object")return V;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(C)})(N);return b(A)=="symbol"?A:A+""}const X=(function(){function N(S,V){var l=this;if((function(w,I){if(!(w instanceof I))throw new TypeError("Cannot call a class as a function")})(this,N),F(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),F(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),F(this,"setupWrapperElement",(function(){l.state.elements.container&&(l.state.elements.wrapper.className=l.options.wrapperClassName,l.state.elements.cursor.className=l.options.cursorClassName,l.state.elements.cursor.innerHTML=l.options.cursor,l.state.elements.container.innerHTML="",l.state.elements.container.appendChild(l.state.elements.wrapper),l.state.elements.container.appendChild(l.state.elements.cursor))})),F(this,"start",(function(){return l.state.eventLoopPaused=!1,l.runEventLoop(),l})),F(this,"pause",(function(){return l.state.eventLoopPaused=!0,l})),F(this,"stop",(function(){return l.state.eventLoop&&((0,n.cancel)(l.state.eventLoop),l.state.eventLoop=null),l})),F(this,"pauseFor",(function(w){return l.addEventToQueue(h,{ms:w}),l})),F(this,"typeOutAllStrings",(function(){return typeof l.options.strings=="string"?(l.typeString(l.options.strings).pauseFor(l.options.pauseFor),l):(l.options.strings.forEach((function(w){l.typeString(w).pauseFor(l.options.pauseFor).deleteAll(l.options.deleteSpeed)})),l)})),F(this,"typeString",(function(w){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(o(w))return l.typeOutHTMLString(w,I);if(w){var W=(l.options||{}).stringSplitter,Y=typeof W=="function"?W(w):w.split("");l.typeCharacters(Y,I)}return l})),F(this,"pasteString",(function(w){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return o(w)?l.typeOutHTMLString(w,I,!0):(w&&l.addEventToQueue(j,{character:w,node:I}),l)})),F(this,"typeOutHTMLString",(function(w){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,W=arguments.length>2?arguments[2]:void 0,Y=(function(_){var $=document.createElement("div");return $.innerHTML=_,$.childNodes})(w);if(Y.length>0)for(var k=0;k<Y.length;k++){var Q=Y[k],Z=Q.innerHTML;Q&&Q.nodeType!==3?(Q.innerHTML="",l.addEventToQueue(M,{node:Q,parentNode:I}),W?l.pasteString(Z,Q):l.typeString(Z,Q)):Q.textContent&&(W?l.pasteString(Q.textContent,I):l.typeString(Q.textContent,I))}return l})),F(this,"deleteAll",(function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return l.addEventToQueue(u,{speed:w}),l})),F(this,"changeDeleteSpeed",(function(w){if(!w)throw new Error("Must provide new delete speed");return l.addEventToQueue(y,{speed:w}),l})),F(this,"changeDelay",(function(w){if(!w)throw new Error("Must provide new delay");return l.addEventToQueue(f,{delay:w}),l})),F(this,"changeCursor",(function(w){if(!w)throw new Error("Must provide new cursor");return l.addEventToQueue(E,{cursor:w}),l})),F(this,"deleteChars",(function(w){if(!w)throw new Error("Must provide amount of characters to delete");for(var I=0;I<w;I++)l.addEventToQueue(p);return l})),F(this,"callFunction",(function(w,I){if(!w||typeof w!="function")throw new Error("Callback must be a function");return l.addEventToQueue(m,{cb:w,thisArg:I}),l})),F(this,"typeCharacters",(function(w){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!w||!Array.isArray(w))throw new Error("Characters must be an array");return w.forEach((function(W){l.addEventToQueue(c,{character:W,node:I})})),l})),F(this,"removeCharacters",(function(w){if(!w||!Array.isArray(w))throw new Error("Characters must be an array");return w.forEach((function(){l.addEventToQueue(p)})),l})),F(this,"addEventToQueue",(function(w,I){var W=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return l.addEventToStateProperty(w,I,W,"eventQueue")})),F(this,"addReverseCalledEvent",(function(w,I){var W=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return l.options.loop?l.addEventToStateProperty(w,I,W,"reverseCalledEvents"):l})),F(this,"addEventToStateProperty",(function(w,I){var W=arguments.length>2&&arguments[2]!==void 0&&arguments[2],Y=arguments.length>3?arguments[3]:void 0,k={eventName:w,eventArgs:I||{}};return l.state[Y]=W?[k].concat(P(l.state[Y])):[].concat(P(l.state[Y]),[k]),l})),F(this,"runEventLoop",(function(){l.state.lastFrameTime||(l.state.lastFrameTime=Date.now());var w=Date.now(),I=w-l.state.lastFrameTime;if(!l.state.eventQueue.length){if(!l.options.loop)return;l.state.eventQueue=P(l.state.calledEvents),l.state.calledEvents=[],l.options=T({},l.state.initialOptions)}if(l.state.eventLoop=i()(l.runEventLoop),!l.state.eventLoopPaused){if(l.state.pauseUntil){if(w<l.state.pauseUntil)return;l.state.pauseUntil=null}var W,Y=P(l.state.eventQueue),k=Y.shift();if(!(I<=(W=k.eventName===x||k.eventName===p?l.options.deleteSpeed==="natural"?r(40,80):l.options.deleteSpeed:l.options.delay==="natural"?r(120,160):l.options.delay))){var Q=k.eventName,Z=k.eventArgs;switch(l.logInDevMode({currentEvent:k,state:l.state,delay:W}),Q){case j:case c:var _=Z.character,$=Z.node,xe=document.createTextNode(_),ee=xe;l.options.onCreateTextNode&&typeof l.options.onCreateTextNode=="function"&&(ee=l.options.onCreateTextNode(_,xe)),ee&&($?$.appendChild(ee):l.state.elements.wrapper.appendChild(ee)),l.state.visibleNodes=[].concat(P(l.state.visibleNodes),[{type:"TEXT_NODE",character:_,node:ee}]);break;case p:Y.unshift({eventName:x,eventArgs:{removingCharacterNode:!0}});break;case h:var Ee=k.eventArgs.ms;l.state.pauseUntil=Date.now()+parseInt(Ee);break;case m:var he=k.eventArgs,Se=he.cb,Be=he.thisArg;Se.call(Be,{elements:l.state.elements});break;case M:var me=k.eventArgs,ae=me.node,oe=me.parentNode;oe?oe.appendChild(ae):l.state.elements.wrapper.appendChild(ae),l.state.visibleNodes=[].concat(P(l.state.visibleNodes),[{type:B,node:ae,parentNode:oe||l.state.elements.wrapper}]);break;case u:var Fe=l.state.visibleNodes,ie=Z.speed,te=[];ie&&te.push({eventName:y,eventArgs:{speed:ie,temp:!0}});for(var Ae=0,Ne=Fe.length;Ae<Ne;Ae++)te.push({eventName:x,eventArgs:{removingCharacterNode:!1}});ie&&te.push({eventName:y,eventArgs:{speed:l.options.deleteSpeed,temp:!0}}),Y.unshift.apply(Y,te);break;case x:var Te=k.eventArgs.removingCharacterNode;if(l.state.visibleNodes.length){var se=l.state.visibleNodes.pop(),Ce=se.type,ne=se.node,Me=se.character;l.options.onRemoveNode&&typeof l.options.onRemoveNode=="function"&&l.options.onRemoveNode({node:ne,character:Me}),ne&&ne.parentNode.removeChild(ne),Ce===B&&Te&&Y.unshift({eventName:x,eventArgs:{}})}break;case y:l.options.deleteSpeed=k.eventArgs.speed;break;case f:l.options.delay=k.eventArgs.delay;break;case E:l.options.cursor=k.eventArgs.cursor,l.state.elements.cursor.innerHTML=k.eventArgs.cursor}l.options.loop&&(k.eventName===x||k.eventArgs&&k.eventArgs.temp||(l.state.calledEvents=[].concat(P(l.state.calledEvents),[k]))),l.state.eventQueue=Y,l.state.lastFrameTime=w}}})),S)if(typeof S=="string"){var fe=document.querySelector(S);if(!fe)throw new Error("Could not find container element");this.state.elements.container=fe}else this.state.elements.container=S;V&&(this.options=T(T({},this.options),V)),this.state.initialOptions=T({},this.options),this.init()}var A,C;return A=N,(C=[{key:"init",value:function(){var S,V;this.setupWrapperElement(),this.addEventToQueue(E,{cursor:this.options.cursor},!0),this.addEventToQueue(u,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(S=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(V=document.createElement("style")).appendChild(document.createTextNode(S)),document.head.appendChild(V),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(S){this.options.devMode&&console.log(S)}}])&&L(A.prototype,C),Object.defineProperty(A,"prototype",{writable:!1}),N})()},9935:t=>{t.exports=function(){return!1}}},ue={};function J(t){var a=ue[t];if(a!==void 0)return a.exports;var e=ue[t]={id:t,loaded:!1,exports:{}};return K[t].call(e.exports,e,e.exports,J),e.loaded=!0,e.exports}J.n=t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return J.d(a,{a}),a},J.d=(t,a)=>{for(var e in a)J.o(a,e)&&!J.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:a[e]})},J.g=(function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}})(),J.o=(t,a)=>Object.prototype.hasOwnProperty.call(t,a),J.nmd=t=>(t.paths=[],t.children||(t.children=[]),t);var ge={};return(()=>{J.d(ge,{default:()=>M});var t=J(9155),a=J.n(t),e=J(9905),n=J(2404),i=J.n(n);function o(y){return o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},o(y)}function r(y,f){for(var E=0;E<f.length;E++){var j=f[E];j.enumerable=j.enumerable||!1,j.configurable=!0,"value"in j&&(j.writable=!0),Object.defineProperty(y,h(j.key),j)}}function c(y,f){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(E,j){return E.__proto__=j,E},c(y,f)}function p(y){if(y===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y}function u(){try{var y=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch{}return(u=function(){return!!y})()}function x(y){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(f){return f.__proto__||Object.getPrototypeOf(f)},x(y)}function h(y){var f=(function(E){if(o(E)!="object"||!E)return E;var j=E[Symbol.toPrimitive];if(j!==void 0){var B=j.call(E,"string");if(o(B)!="object")return B;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(E)})(y);return o(f)=="symbol"?f:f+""}var m=(function(y){(function(b,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function");b.prototype=Object.create(v&&v.prototype,{constructor:{value:b,writable:!0,configurable:!0}}),Object.defineProperty(b,"prototype",{writable:!1}),v&&c(b,v)})(B,y);var f,E,j=(function(b){var v=u();return function(){var T,P=x(b);if(v){var R=x(this).constructor;T=Reflect.construct(P,arguments,R)}else T=P.apply(this,arguments);return(function(L,F){if(F&&(o(F)=="object"||typeof F=="function"))return F;if(F!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return p(L)})(this,T)}})(B);function B(){var b,v,T,P;(function(H,X){if(!(H instanceof X))throw new TypeError("Cannot call a class as a function")})(this,B);for(var R=arguments.length,L=new Array(R),F=0;F<R;F++)L[F]=arguments[F];return v=p(b=j.call.apply(j,[this].concat(L))),P={instance:null},(T=h(T="state"))in v?Object.defineProperty(v,T,{value:P,enumerable:!0,configurable:!0,writable:!0}):v[T]=P,b}return f=B,(E=[{key:"componentDidMount",value:function(){var b=this,v=new e.default(this.typewriter,this.props.options);this.setState({instance:v},(function(){var T=b.props.onInit;T&&T(v)}))}},{key:"componentDidUpdate",value:function(b){i()(this.props.options,b.options)||this.setState({instance:new e.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var b=this,v=this.props.component;return a().createElement(v,{ref:function(T){return b.typewriter=T},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&r(f.prototype,E),Object.defineProperty(f,"prototype",{writable:!1}),B})(t.Component);m.defaultProps={component:"div"};const M=m})(),ge.default})()))})(re)),re.exports}var He=Xe();const Ze=Ie(He),_e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAA9CAYAAAAQyx+GAAAABGdBTUEAALGPC/xhBQAABFpJREFUeAHtmmtIVEEUgM9dd5WotBTZ2DULH2mG9LCH9tQeakllPypSgiAhogdW0I/C0oQECbOSCqIHUQr1wwqKVMJMS0yLygpCtLLdTf1jbW252nq7szK6y+7N2esud2ebgWXmnjvnzDnfnZk7O3cAWGIEGAFGgBFgBBgBRoBOAty/3J46LylNp+9++K86tN4L06rTv7xsrBLzXyF243+XK0kARE6fBqWFeSRVvb5Obl4htH/6PKqfRGAmBQVCxpqUUY3RUCH/1BkiN4nAYEt1jU2QsikLX1KV11aWw4qkRcQ+szlGBJVLPQbboGnOIZ1TcGw4lwSGpjmHdE7BQHAuCQxW9qa8U2cAc3+/g0tm85BMZ+iCto5PgK9Npj5tgDZ2BlLgBjnzb8P7To7jeGyAajB9fWY4cvIUXKm4DcYfP3BMTvPtew7ayXu/fb9sK1BMiTIq1FFXNKrQIzpd42+qwWTu2AXVj+tt4xtDmQ/kgc/VD3THCUbSqAVz92HNMJS8g/tgy4Z14O/vLwlMvzAEb917AIUl55B+qp8maiO1YBqaWqwQliycDwWHcyUBsVUqEKabR/XP4FnzC+AH+WXUrmMMXT3WuMK1Gtv4xlSeFqYd0udBQy2YMREgUGZgRCAxMN4KpuzyddDOTrL+UNlbkqxvpafPW2D/0YJhFqg8Nz4O0JtG7iTrUGp53eoQf9PL1w4yOQSyglnqpGckJsyRg4NDm7KCSZgdD2VFI0Pp2KH9sHhBgoOTcghkBYMCzlg9smWavnK5HAyctik7GKdeeYFQdjBo00ulUllRhIYEewGSIRdkBxMUOBHuXLsIFRfPANoydWeyWCzW5UBI7DyYuXQNVNU+ITYv6zoGe7l2VTIuujU/f/UG4EWjsDEFm3P2wsfmOggJnjxqO7L3mFE9HEOF5ldv7LR/mkzw7kObnUzswqfBLEtcYBf3hPHjYVZMtJ1M7MKnweRkb4Wd2VuGY7954TTRMEIKPg1G2PWHtSuTUZzWlJ5Cvk7yaTAYiJTc58HgtdHkSUGgVJK/hMlrSsHuBTpoAr5UUgQxkRGAhhZpkgTm23cj3K+pJW3DI/X0X7uJ7e7MGpmASZUkgUEHb9ZvzyFtg8p6Pj/HSH0qLvUYdPBmsKtdaltu1cvefQAqKu+51aatMWVAWET0nwG/GFshLvf2/pyLygZhPOcXkx3Rwrqezlvff/BYE8I37AnKgT+QxYMl31krpl8mq/hrTw+cKDnrrIqvyqazOUbk0SoHuzrQpiv6UZUU6shyoctv84TTHHBvWY8RIcvAMDAiBETE9PYYDgwopk69NRMJzzXxZ51+SEGw7dICz7VmPFubU0ADb4FD6Pv38eJStxw1Q6epUOIUXD35303PxinJOqeOqBIUUyUpiytV890dafQOJSEwrUqdyYGiVHjGRvE4Se9wRmQL2UQaVPcYHDLP89w4TVw4r+ADsMyV3NkBaFf0WV1GgBEQJfAX8S4bCLs1i8wAAAAASUVORK5CYII=",$e="data:image/png;base64,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",et="data:image/png;base64,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",tt="/assets/graphic-2@2x-o9q-Ivx4.png",nt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAA9CAYAAAAQyx+GAAAABGdBTUEAALGPC/xhBQAAC+VJREFUeAHtWwt0FcUZnr25yU0CiJCUvHje3PJGHgG0Jmo8vAQUOJQAkgJFCnIoCihWQE4VFbENHhCpCvJsqxVTq5bSU2s5VktsQVADAkJDILzkkYRHIA+S3On/bTJ752527927eZwezZyz2dnZf/7//74788/OI4w1p2YGmhloZiB0Bm5p36utlVoOK0LfFRlHXPJzJZVllxzxyVmc8+F07aTrTiN8TqPC72KZI8G9knv5YmCbP3tGF7rtoCuCrqN0fUaXX1L8nprgwePxuAquO/p6Hd545vXGcKbEMqbEMMVLd0rcUUh/ihTGC5nDUeTwOs53aunNzcvLq7DrHpHyAveyJag/ffL4PVvWZPWnLEjJp+seRVHO0N0vNToxrZK6x5TyqlT6tVI5Z2lMYQMZ53DKelKUm4yzfYrCdisOJSdaceaUnP2myIqCIKSkEymnjfQ0CjEpKSnhX529Os7LvbPJ6BC6GtoOJ527HIpjQ7+k1u/v37+/0gicXVKgq0EddrVP9lRWsVnk9U+pVbQzclaUhYWFsbZtbmUxdMW2bUP3NuqrosuXWWHxZVZ0+Qorpqu6ulpUMb4rykUCsTXcyd6oOHM8TwjVhxToaBBiWnTpHVdWVvYiRfjpRjqpubJuHjdLGzyQpQ5OYWm3D2TJnTsJDAHvx08WsN179rGcvfvZ7r372NG8fOIcDaZO4mRnW1RU1OKy8tL5AWKKafeRNdaLGHSZL89emU9+/pICZitZMfL9evdks6dOZhkPjGIx1CoaIhVRa8re8Ve24Xdvs6++PlxXpcIqKB658MIg0Foipa7SEEqciV2HKvHuo0qcm8tXK3cfPvvxpfzzLw/QD9u4CTZmPbaEw6bsA/Jjps0q9Xq9N2s9OE73DiHAsyfqSPAsJePVsjNhCR6VkEuFRY3LhoF22Ow/ZLRGzujMmbyiokKVpDgFhxqXlLi421pQK8mWCUE+7YGJ/IsDXxu43DRFS1/I0kiZ/PAjGikUn3iH/qkcPsN3e80gSK3Ijl3dSnzyQZmUlu7efNv2d+uNnkYe/u2Fi+qFfChJJuXZl9Zy6j5q9fyCUzWk+Lr6AWAIAjO01xiGiZDzMinuwffwA4e/CQWDJnv12jX+h/f+zCfNfoQn9f0Rdyb+UPvFkUcZ3kEGsmbJjBTIHzmWx+Gj7DMwAEto6E2kozt0S6SmeEI2MCxjKqe+a+avafn1Gzf48lUvGwZLWb+cR2BFHdSVUyBShBx8hK+yPmABJhO41opbd+zTRt995jyxjIfa3OHorn/l8PjegzUnw5O68qETpvLV6zfzHR/u4vtzD6oX8ijDO8gIUKgLHUhWSFEF6Q98fXjRU5oeVR+FBGCzxoJOKjExJVqJS/5MOIb7lDkLhL2Q7us2/VYD6erQnS9Y9hy3MnpBBrKoA/sgasSkaRpIOaYEcghxB77LWIANGHWwgz/S2sUGWdHIB2fwysrKQPYN34EUoafnXcP5seMnDOUCFaIO6go9uFslReiF78Ag6wDG4ExIEs4EzwhZQer9Gby0tEzYsHxH0xfdAV3jWkmJ5bp6wcefWaGBuv8nM211Z2C4c/QETQ8wAqsE3Tzbxu1uTXHltCAmtkcKP3/xkt7PoM8IliKm4NeuDylyTJkwc672nWIn1gELMAl8wArM5ozUvqFlv61aJWL07fd2BCXBSAAjCfQgPtjpPkKnTIrcffJPnqIgvUmIhXQHJhkjMAckxpnkHiJXyPjZz0MyKITx7SHmLwiedpMZKYXFxbzjgDTVRqDvnEB2gU3GCuym5FCz+lgIx9HwWFhUHEi36Tt8mEEP4ouV0cdIkRkpkKUZtha7YMtOAjZgFHiB3ZCY8CTPHZoQgXp1y+/t2FPr4KsVuhBw7aRApAh90A0bsGU3AaOMGRzUIYfG9feFEJgsKyu3a0/9pIeuNRs2W9LxysZtPPG2O9Rr+ETfl6ocU/SK8BEIG5g+2E3A6NdqiANBjLqvFBHv6UkLTWNE4YJZM1hkpLrWI4os3+ljil24RAv9lJI7BV+ly6FVuUefWs5oEqleH32So9Zd/osFbNnCeQyrf0bJU7sCCFuwaScBI7D6Eh9TwwVjKjFVnC+kl6oHrVq2ZHNnZPpkQ8xdLCzS1mkT4wMu+6qa93yRW8fCnOmZAUlBBaGbhmwGm3YTsAJzbVJquaghhjn4JfGmrLycXb1WIh4b/X77gL5+NkYNvZetW/mMaUvxE26AhytXSxgwS+ki8mqLiXJFrSVP1A2tqqoqtuq1jZJcaNl2sTEMOwBI586rNgIq2PkP32AwduQw9sG29bTPproVsJ7QDVuwaTe99PpGBsxqUlh5VFTkK8irHtw4eeg89aMtNW8Z2/TWO4yGM/EY0h2g4n5Qs6l4vKAgYF0afdiLa19XZRBT/rT5NY3UgBXpZR7tHiDBlhUiVWHdH2Dc+OZ2rVRhylZwgQLtp4mICMuiZ3UTh+YUbM0GjSetotUMtkeQ/vJ3X2vQ19WTEijQ6uvieedHNbqFLSOZYGXASCOTEKuu5UA8++4023xLDNmRHXvww0f/a2skDPaBt2TFr7Xvh0BDsplxfDSKyandDzxgA0aBF9h9TOhyGKroe+amEB583zhO/c/MP9PyQFOC+pICo5hmwEdMO+xMCYBp0IhxGinALIZpHSW+R0dC8jJBDO4r1vzGlIBAL4wmkQ1BCiakYuEKNuyk51evk0hxc2D2MWCSS09Pd9K84XNBDpzIPXQkZPv6ZYfHnn5ec8ZO94EDWLoQC1ZY0tCvA1txknYveUT7bpovwArMJnT4F6tdKj65XJCDvZlTZ85asesnIy9UCV31IUXMjxBfxPqvn8EgD8Cg7jNRT1D9IYxBu5A/NTRcxSc/IcDg3j11qK3Z9vCJvjVaLDLZWVzSL21iuTTUhNk0MMiYgFGPO+gzGVao4hZZEQJWyfXrln2SY8rozId4eXnNxBTrKVg6CJaMFsPtkAKfBw4fqydlC9lXp0FBydALZGRkhMmzbpB099hJlkDJpCBIipaClTcsMqE7oGtgBq7fPkEZ3okhGXbl7ZNghMrv8QPAZ/kHBiZg0+MN6blz5/RIClD/lBV3GXR3wICsJ0Vsm4IcLEeK1T1Zp1nebMNNBm+WR6CFr366CQswhUSCmXBbj+cWImefbKBFl16G68FmpMjO49sDH2b13aKVderzWNeFj7LPGIGAxQynrXJsTlHM2e5niJr4vCVPax9ZVkjRA8AzWpLdTX29PpAOn/R+wndbG2xW2XLEu58ko35nY9r1GsRHTfFtZiGmiO6jd7yxnmGPJoQcvuhIqYbPVvHVS86ZkHwfGb+sc0B1CBtjTU3Kp//ey1OGjdETgnMxxfDVDlh7wxVZikp0d6zwKquoBWQIwyOHpNPSwavM5XKxayXXaTlAYS1bNM55HRqC2ZvvfmB6Fo+WRLNdDr6o7Fz+KeFfk93pyOhK0WpGTfF9p4ghGcFv5sIn+Ycff1qvnUjR/TAlgC7orBNYKd7V+pLrjPek15cE2y0GpNCR0cVwYOokOoa++lcDaMEo/ETBaZY+fgo7ffacn29YTOrTo5t6lBVHWru6u9D53rZ0mvNW1iLa/9DBjdJSVlR8hc77FrNj+SdqjrLSkdaDR44GWvi+oCiOZ398V//12dnZQQ4H+7lm+GCLGD0p217O6kfasa1wYlTmQ1l/2/XJeMpjZ8+SfnQ9HIJGwuFnOlio5i384SQT9IS4BT11RCw5LtcKRArJ4Ryt2qdx3u1mZdUs7lUm0taMW9ZR/7ySrzj4OxHhzjfKTx3DP0o0eAqJGKuk6L2M7tQjoaKiMo1iBR2hpH+04Iy2Bri1qT5Tqqjd5Sqc/sFCUXJcrvDdpQVHvtXbaOhny8TYJcXIYZwoP1JYGltVXRHrrXLQv+awWK5wdalf4Qr9Sw4rdDi9Rc4wV2GP2OhCs3+iMNLdpGUgRYw+0x5d9B/65cX+bT7lOzapM/8vxsIS3Q82k2Lwa9BR+Ewixjtt3qLdzS1FRxD+85RIOUQX0ve3++h4UR+JkLl0/ZGu72dMMSKluayZAY2B/wG5c445NJ/J1AAAAABJRU5ErkJggg==",rt="/assets/graphic-3@2x-DFvq1ZvH.png",at="/assets/graphic-4-DEP80msl.png",ot="/assets/graphic-4@2x-BSxi8HUF.png",it="/assets/main-graphic-BH5TrvAQ.png",st="/assets/main-graphic@2x-DrmctVov.png",ye="/assets/open-source-u8EY6AMF.png",we="/assets/open-source@2x-q94tbrLH.png",lt="data:image/png;base64,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",ct="data:image/png;base64,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",pt="data:image/png;base64,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",dt="/assets/step-1@2x-BnC6LKQH.png",ut="data:image/png;base64,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",gt="/assets/step-2@2x-Cv5N9IX7.png",ft="data:image/png;base64,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",xt="/assets/step-3@2x-0j47Yci1.png",ht="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAtBQTFRFAAAAmcwzc7sEc7oEcroFcroEcroEcroEcroEcroEcroEcroEcroEcroEc7sEc7wEmcwzc7sEc7oEcroEcroEcroEc7oEc7sFe70JcrsFcroEcroEcrsFe70JgP+AcrsFcroEcrsFgP+AdbsHcroEc7oEdrwIc7oFcroEcroEc7oFgL9AcrsFdbsIl8xGt9t+zeam1+u33O7B3O7A1uu2y+WitNp6k8o/dLsHc7sFgL8QcroEdbsJp9Ri2u2++fz1////9/vx1uu3oNFXc7oFgL8Qt9yA8vjo+vz22ey8v9+NrddtptRip9RjrtdvweGS/P357fbfsNhydLsIc7oFqv9Vnc9R7ffg9/vwvt+NkMk6drwKd70OlMpAxOKX5/PVc7sFc7sHxeOY/v79rddseb0QfL8WtNp5/f78u96Gc7oGc7oFeL0P3u/EyeSffb8YgsIh1Oqz0+mxdrwLdbsH5fLR/P77pNJecroFr9dw2+2/crsEns9S+/340eiucrwFoNBVc7oEtdp8j8g3c7sF2e29croEgsIiotJac7sEdrwMrNZszOajyuWhwuGT6/Xcc7sFlMtB8fjn7PXdicUulctDcrsEg8Ii9vvv8vjn0+qyyOSec7sEtdp6n9BV9vrw6/Xb4fDJi8YwcrsF8Pjl6vXa5vPToNBWcrsEcroE3+/G0Oisc7oEqtVomc1KyOSdcroF1OqyxuOZc7oFweGRc7oE0umvc7sGwuGSc7oErtdupdNfcroFsdl1croE6PPWcrsEer4S/f77iMUrcrsF8/nqc7sFsdhznM5O2Oy6c7wEgcIgkck7crsEf8Acq9ZrqdVme74UyeSe5PLPc7sFisYvnc9Qc7sF4vHL2+7AcroEwOCQcrsFrdZu/v/9c7oEe70JxOKWcrwFzeancrsEcroEdrwIc7oFpdNe2Oy5c7sFc7oF9vvwgL8Qc7oFcrsEbX1x6QAAAPB0Uk5TAAI7hq7N5fD7+e/kyqt/MwFRtPH/7KxGCoDn33IGAXXtYwAz0sUjcPbyWgGi////////////////iwa3//////////+iBP//////////////////nwH/////////////hv////////////9Q//////////8i////////u////1L/5P//Wf/b//82////////j///////6f//////J////////4X/////tOb//9n////p//////j////3///n/9b/sP///4H/Vf///yL//+L///////+E//8v///P/0///9gE/0X/qesXQP//b4b/A1HXxFysvQAABCZJREFUeJyNlvdfFEcYxseGBcupaxeNxhIkNuS4U9F97IqiKBZU7AbOi6KoXFA5K6Am4Syx9xa70Qgae8OSWCL2GlssiUb9F7I7M7vs3O0dvL+87/vM+/3s7HRCfK1Y8RIlSwWVLlO2XHD5ChUrWUxKfJnKVapKglWrXqMwsmat2pKJ1akbEgCqV/8LM0i1oAYN/VFfNvIHqda4iTnV9KtAlCSFNjOBwr42VDRv0bJV6/A2EdZIm90gtw3zptq11xujOnSUoVunzl0KyK7dvL6lU1HdeyjFPXtF9+4T07dfeKyS9B8Qp7UOHCRgeg8HDwHihw4bruUJI0Yqnx5l0/LRwmhwcczYcYgf/404FIlJMhwTnDz71jDyfAwnTgKSJ/uO4ZQUYOo0Pp7T9Vnm8zUxFa7vfCHF0mY4MJNzs7R5r897OAmyzZRSLN2N2byfcxhVk6+osXD5pSRprgNJLJrH1mctlg0eB/MecpsPxwIWZahUMbbmo4YgORAlpWUilc1flrqPKjO1O+JNxtBoC2UsYtFiBavCPtYD44Wi73/4MTsmSpA8WMLW2VKlj2wvd0C8MMvLlqsL8qcVRi1RxkoarLKQ4kzqiKHGitVr2EJeK3R8HdazYAMpQX1zGcOMBVZtA2w0qpuwmfUyg5SkvgV6DjcWbNGwrUY1IRbbaLCdlKK+JXoJf79Dw34W5J3YRf1usof6VogW2vdq2D5BTkEk9ftJaepbo7fQfkDDfhHkg/BQf4iUoT4cfYT2tF8ZdThHkHNhpf4IKUt9G8QI7ZL9qEpF/yaqx5BN/XFSjvoInBALpGgVO+klJiOX+lMkmHor+hUFi8Bp6s+Q8tRHIrwo2FmkU3+OVKDehtiEwrHzF5BHg4ukIvX2ThhROHYSl9jBcJlUYkpnjBRLrqjY76L2B5826SqxVKNBF8iJQkniWmCLeGJec+M6DW4o27s662V/7YTR7M+b+bdE5TbusD7eVXZ3DaYNgDxFCmj33LjPogcKZqlDw7hRSEkLROU8xCO2aB7Tq7wuk20OzAiEPYGLjb70lJ6TIUEsmwBHun/qr2fIZ9HzF+xYbsBS51S45/qlXHjJd8Mrfgc0bMzyaTPhmG/6fzlPnuFvfvq91p8MTUI5NxvIXOhL3XsIvOTUm7cFF1wz3u5MckD2iPMuXbvthitf26/vjNdpW61mQSogr9ukr+vz//zrBh7lafl78crvqulxi5YoizF2Z8rB3GPJEWcvKMmd+/om/+D1xOg2UO+UfeX6/woeGJc8151604ePxMvCRht+x75tV6THmp17Oj3PaZDf+zxnFPsU6juGRnvzzgRSbPqsQNTrt+aUMu9zgv1Bz1/5fRgqFpKRZQY9fvoiAKSaZfHSVSJz4+6DIj2XLRsytu/ef+jI8VOfz128fNWM+R/J7aDOMmQI6AAAAABJRU5ErkJggg==",mt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABsCAMAAAC4uKf/AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAelQTFRFAAAA////csEJdLwIcrwFc7sFcrsEc7oFcrsFcroFc7sEc7oEmcwzcr0Ec7sEcrsEc7oEcroEgMYOcrsFcrsEcrsEc7oFdLsGc7sEecIMcroGe70JcrsFcroEdMUMc7sFgP+AcrsEc7wFcrsFdroFdLsGc7oEd7sJcrsFcroHc7oEc7wGdrwLisUvlctDnc9QpNJdq9ZqgL9Ac7sFeb0Qm85Nvt+M1+u57fbf/f79////jsYcc7oEhcMnuNyB4O/H/P37gL8QcroFeb0R3u/Ffb8Xut2E9vrw+vz28vnper4Tv9+N+Pz08fjmzuept9t/odFYi8Yyc7oGe74Uqv9VpdNg2Oy6rdZtiMUsh8Qq3O7B6PPWstl3gMEd+Pvz4fDKnc9Rc70IdrwMyOSdmc1Js9p5dLsIg8Ii6fTZ3u/EicUu8Pfl/v7+vd6JdLsHnM5O9PnskMg67/fjiMQrcroFc7wGut2FhMIkfsAaudyC5fLRs9l40Oirx+OcoNBW4PDI6/XbrNZslstEwOCP1eq11Oq02ey8c7oEwuGSyOSec7sFisYwo9JcotFadbsJ9/vxttt+ttt93e7C4vDLf8Ab6/XcgMEeer4S0umw8/nr8vjo8fjnz+eqnM5PqtVo7fbgfb8Yh8Qpstl2fjtq6QAAAKN0Uk5TAAEdRGuStcXS3+z5BTp8vvT/Emm382hPrRWGG4/1FpcC7zXLNIv9HsdO7oX///////8Env////////8Jsv////8QxP//////////////////////A////////////////x////////////////////////+YUP//////////////////////tv//xv///////////////////////////////7ZbNuIAAAYqSURBVHicvVr3Q9s4FDYbkjDEKHsfs6ywSctomQmbHqtsKNCW3Ra6C3Qcd3B7dVzHXf/S83NikGxJthLw95vf0Bcrz09P0pMk8wgKDgkNC4+IjLLZ7baoyIjwsNCQ4CCBAczCER0TG4coiIuNiXacJ1N8QmISjUhFUuKl+PNhciSn2HlMXthTkgN/v9Q0mzGTF7a01ICo0jMyzVIBMjPS/abKyjYxf5rZzM7yiyonIVeUCpCbkCPOlZfvDxUg/xtBKkdBob9cCBUWCAVmUbH/VIDiIvNcJaWBcSFUWmKW6zJvmLLyisoqp7OqsqK8jGd32RRVdQ3Lv7auvqGxyXWKpsaG+rpalnVNtTHXlat03+aW1jYXBW2tLc10j6tXjLiuXaf5tTs7aEQqOpztNK/r1wzei8bV2dVNDt7jdveQku6uThob992qKXPo6e07HbN/YHBo2DMC4pEbw0ODA/2nqr5eD2Umv+WQUWJj1K2Gw9j4hF49MT6mhox7VK+uYXPpY37ypm+kqekZyjwpmJme8hndnNQpmV9Aic60atY7ytw8i8mL+Tmv3WyVTsX4uhe0eWNxyfdWt/hUgFu+t1ta1ChKqZnLoc2Hnd6f27e8YsyF0MqyN47mtGFZTMvKBRqj1duK851VM1SKwx3F4bbWoUDPladZU+6ugef6xqZZLoQ2N9bBZ+0uKS7M03LlaNbKVYWrb8s8FWBLmco1zbvl52jIEkh9pzKH2ztiXAjtbCszqfnfEkiuLLLeWFRi4959US6E7t9TooSMyVyyCnpAuigxv+0Hl8ymvNsSKczGudLJmq1K+b92/OGSZ1L538iv247XkxmEahLyxrpgbJxhC2JylsxcGWdcqWTdq+TDDX+5ENpQ8iQhyjyrzNMIxajyLQt8X1psKl83uQaknSYqYu/ggTWlz3TeoGEV/jY3sb7Z1KS1S1j2ws9aDoQLoWUYo5cQJfvIUnBhJ/yqKVO5l40VWAP6iE87xcsVT8T9HvwogzWl7OFDbs0orzgwShcuscfrM1U71DZzvHEePX4CIz15/IhnBSmom6i5vDkrERc5YSDeuvx0Vi1xZp9yzObBwolLEpVYJPbmUB9OscdYeebC8Izz18K/1oELkiAeo3FJM4wxzR7iuYvAc7blNOiJWjlaJovBBS2yRROzjkIvXBq8YJrOQIXXgktiZLJYXLAvW4wxB9g80JIdsBPNmKxuxQWxkhSEn9vUwt7hkOn/Usvlcr1kGh/K2jZ8jxMXJAXjBnXgT6l7fXilJ3vFNJ4AdR0uCZZC8Md6Wd/PdEev9WSv2dawD6jHBSFSKP7YIOsH2O5zejLO9z8gqxtwQagUhj82yvpBtvsbPdl3bOtBWd2IC8KkI+ypDMJ1iO3+vZ7sB7b1kKxuwnPokXSMPZ2A+zDb/Uc92U9s62HQn2CCYykSe6oANWVPp+Jnt5brF+r+1gsPGFRggkgpCnuqBPUI2x39qiX7jWM8AgaVmCBKwksCKOF6OO5o83eS6w/usgb7bryks0n4ygnri5vnjv78C+c6+JtrDJPuxJ7tgmTo7bszrndv+bZ6MqFpBLxXud4bWeqnUShAAB9Usg8GhpQAEQl9MbIb+tCPwJ7KDT5qMTLloy7HBBFSOPZklK7EyHTpKlwoEYuRURKxyBIjRkZZYkQWTzGyf1y6xVOkLBAio5UFIgWPENm4S1/wiJRyQmS0Uk6oSAWc1o4HXDN6kSpUfsv4qJJ95JrRy2+hjYWMTyrZJ64ZfWMhuGU63VxwNhWIuWUS3Qwi9PmLy/XlM99Gvxm85Oc2F/1LO1jHwdzmWrqBl5IJwws+mrD00MXS4yRrD8ou4gjwP0KGHQFae7gpZZMOF3psa+2BtKVH7dZeIlh6PWLtxY+1V1pSkYWXddZeQ/IvWL+yL1i/+nPBanR1fEi7Oj709+pY6FLcY+ZSnNvMQL/u3zO+7t8Tv+63tpGB16KxT2/R2Pe/RcPa5hPJqK3mRG2rOTmHthrJ2oYhSVoItBVqwTyXtU1eUkDta5T1ywhWNubJyHpgWcshwMJmSoCFbaIAx665Btjdc2rwNW7tTTin1l4vrGta9kFpxz46Vtuxj4Xbsf8HdOj2IeCOqF0AAAAASUVORK5CYII=",de=Ge("#1683fb","#1683fb","#ffffff","#0576f1","#0576f1","#ffffff"),D={smMaxWidth:767,mdMinWidth:768,mdMaxWidth:1048,lgMinWidth:1049,lgMaxWidth:1365,xlMinWidth:1366},g={sm:`@media (max-width: ${D.smMaxWidth}px)`,smmd:`@media (max-width: ${D.mdMaxWidth}px)`,md:`@media (min-width: ${D.mdMinWidth}px) and (max-width: ${D.mdMaxWidth}px)`,mdlg:`@media (min-width: ${D.mdMinWidth}px) and (max-width: ${D.lgMaxWidth}px)`,lg:`@media (min-width: ${D.lgMinWidth}px) and (max-width: ${D.lgMaxWidth}px)`,lgxl:`@media (min-width: ${D.lgMinWidth}px)`,xl:`@media (min-width: ${D.xlMinWidth}px)`},je=be.memo(({strings:q})=>{const z={strings:q,autoStart:!0,loop:!0,delay:70,deleteSpeed:50,pauseFor:1500};return s.jsx("span",{className:d`
        & .Typewriter {
          display: inline;
        }

        & .Typewriter__cursor {
          color: #ffd15c;
          font-weight: 300;
          margin-left: -5px;
          position: relative;
          bottom: 9px;
          font-size: inherit;
        }
      `,children:s.jsx(Ze,{options:z})})});je.displayName="TypingText";const At=be.memo(()=>{const q=Ue();Ve();const z=Pe();return s.jsxs("div",{className:d`
        display: flex;
        flex-direction: column;
        align-items: center;
      `,children:[s.jsxs("div",{className:d`
          width: 100%;
          padding-top: 20px;
          padding-bottom: 20px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 30px;

          ${g.sm} {
            padding-left: 15px;
            padding-right: 15px;
            padding-top: 7px;
            padding-bottom: 15px;
          }

          ${g.md} {
            padding-top: 20px;
          }

          ${g.mdlg} {
            padding-left: 28px;
            padding-right: 28px;
          }

          ${g.xl} {
            width: 1280px;
          }
        `,children:[s.jsx("div",{className:d`
            flex-shrink: 0;
          `,children:s.jsx(Je,{})}),s.jsxs("div",{className:d`
            display: flex;
            align-items: center;
            min-width: 0;
          `,children:[s.jsx("div",{className:d`
              margin-right: 25px;
              overflow: hidden;

              ${g.sm} {
                margin-right: 10px;
                margin-left: 10px;
              }
            `,children:s.jsx(De,{size:"large",placement:"bottom",dropdownToggleClassName:d`
                width: 100%;
              `})}),s.jsx(ce,{href:"/login",className:le(de,d`
                font-size: 16px;
                padding: 12px 19px;
                font-weight: 700;
                line-height: 22px;
                flex-shrink: 0;

                ${g.sm} {
                  font-size: 14px;
                  padding: 7px 10px;
                  line-height: 22px;
                }

                ${g.md} {
                  line-height: 12px;
                }
              `),children:s.jsx(U,{id:"web.landing_page.get_started.button",description:"Primary call-to-action button on the landing page that starts login.",defaultMessage:"Get started"})})]})]}),s.jsxs("div",{className:d`
          display: flex;
          flex-direction: row;
          margin-bottom: 70px;

          ${g.sm} {
            padding-left: 15px;
            padding-right: 15px;
          }

          ${g.smmd} {
            flex-direction: column;
            max-width: 556px;
          }

          ${g.mdlg} {
            padding-left: 28px;
            padding-right: 28px;
          }

          ${g.lg} {
            width: 100%;
          }

          ${g.xl} {
            width: 1280px;
          }
        `,children:[s.jsxs("div",{className:d`
            display: flex;
            flex-direction: column;
            flex-grow: 1;
          `,children:[s.jsx("h1",{className:d`
              font-size: 64px;
              line-height: 1.08;
              font-weight: 700;
              color: #011722;
              margin: 0 0 36px;

              ${g.sm} {
                font-size: 51px;
                margin: 0 0 26px;
              }

              ${g.md} {
                width: 700px;
              }

              @media (max-width: 548px) {
                font-size: 45px;
              }

              @media (max-width: 482px) {
                font-size: 43px;
              }

              @media (max-width: 450px) {
                font-size: 38px;
              }

              @media (max-width: 420px) {
                font-size: 28px;
              }
            `,children:s.jsx(U,{id:"web.landing_page.title",description:"Hero headline on the official landing page with animated keyword.",defaultMessage:"One vault for all<br></br><b>your {typing_text}</b>",values:{br:()=>s.jsx("br",{}),b:O=>s.jsx("span",{className:d`
                      font-weight: 800;
                    `,children:O}),typing_text:s.jsx(je,{strings:[q.formatMessage({id:"web.landing_page.title.typing_text_1",description:"First animated keyword in the landing page hero headline.",defaultMessage:"private files."}),q.formatMessage({id:"web.landing_page.title.typing_text_2",description:"Second animated keyword in the landing page hero headline.",defaultMessage:"confidentials."}),q.formatMessage({id:"web.landing_page.title.typing_text_3",description:"Third animated keyword in the landing page hero headline.",defaultMessage:"secrets."})]})}})}),s.jsx("p",{className:d`
              font-size: 18px;
              color: #011722;
              margin: 0 0 38px;

              ${g.sm} {
                font-size: 14px;
                margin: 0 0 26px;
              }

              ${g.lgxl} {
                width: 565px;
              }
            `,children:s.jsx(U,{id:"web.landing_page.description",description:"Supporting hero paragraph on the official landing page.",defaultMessage:"Powerful, open source, client-side, zero-knowledge encryption. Unlock enhanced security for your most sensitive files with Koofr Vault."})}),s.jsx(ce,{href:"/login",className:le(de,d`
                font-size: 18px;
                padding: 9px 21px;
                font-weight: 700;

                ${g.smmd} {
                  width: 100%;
                }

                ${g.lgxl} {
                  width: 500px;
                }
              `),children:s.jsx(U,{id:"web.landing_page.get_started.button",description:"Primary call-to-action button on the landing page that starts login.",defaultMessage:"Get started"})}),z.appStoreUrl!==void 0||z.googlePlayUrl!==void 0||z.fDroidUrl!==void 0?s.jsxs("div",{className:d`
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                gap: 20px;
                margin-top: 32px;

                ${g.smmd} {
                  justify-content: center;
                }
              `,children:[z.googlePlayUrl!==void 0?s.jsx("a",{href:z.googlePlayUrl,target:"_blank",rel:"noreferrer",children:s.jsx(G,{image:ke,image2x:Re,width:122,height:36})}):null,z.appStoreUrl!==void 0?s.jsx("a",{href:z.appStoreUrl,target:"_blank",rel:"noreferrer",children:s.jsx(G,{image:We,image2x:Le,width:117,height:36})}):null,z.fDroidUrl!==void 0?s.jsx("a",{href:z.fDroidUrl,target:"_blank",rel:"noreferrer",children:s.jsx(G,{image:Ke,image2x:Ye,width:123,height:36})}):null]}):null]}),s.jsx("div",{className:d`
            ${g.smmd} {
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 38px 0;
            }

            ${g.lgxl} {
              padding: 25px 33px 0;
              flex-shrink: 0;
            }
          `,children:s.jsx(G,{image:it,image2x:st,width:480,height:338,classNameForSize:(O,K)=>d`
              ${g.sm} {
                background-size: 290px ${290*K/O}px;
                width: 290px;
                height: ${290*K/O}px;
              }

              @media (min-width: 1000px) and (max-width: 1049px) {
                background-size: ${O*.6}px ${K*.6}px;
                width: ${O*.6}px;
                height: ${K*.6}px;
              }

              @media (min-width: 1050px) and (max-width: 1169px) {
                background-size: ${O*.7}px ${K*.7}px;
                width: ${O*.7}px;
                height: ${K*.7}px;
              }
              @media (min-width: 1170px) and (max-width: 1271px) {
                background-size: ${O*.8}px ${K*.8}px;
                width: ${O*.8}px;
                height: ${K*.8}px;
              }
            `})})]}),s.jsxs("div",{className:d`
          display: flex;
          flex-direction: column;
          margin-bottom: 107px;

          ${g.sm} {
            padding-left: 15px;
            padding-right: 15px;
          }

          ${g.smmd} {
            max-width: 556px;
          }

          ${g.mdlg} {
            padding-left: 28px;
            padding-right: 28px;
          }

          ${g.lg} {
            width: 100%;
          }

          ${g.xl} {
            width: 1280px;
          }
        `,children:[s.jsx("h2",{className:d`
            font-size: 30px;
            font-weight: 700;
            color: #011722;
            margin: 0 0 23px;
          `,children:s.jsx(U,{id:"web.landing_page.section_1.title",description:"Section title describing overall security benefits on the landing page.",defaultMessage:"Extra strong protection"})}),s.jsx("p",{className:d`
            font-size: 18px;
            color: #011722;

            ${g.smmd} {
              margin: 0 0 50px;
            }

            ${g.lgxl} {
              width: 500px;
              margin: 0 0 32px;
            }
          `,children:s.jsx(U,{id:"web.landing_page.section_1.content",description:"Section paragraph explaining Vault and Koofr with security metaphor.",defaultMessage:"Koofr Vault is an open source, client-side, zero-knowledge encrypted storage application by <a>Koofr cloud storage</a>. It's like having a box with a unique lock in your trunk: an extra layer of security to protect your files.",values:{a:O=>s.jsx("a",{href:"https://koofr.eu",target:"_blank",rel:"noopener",children:O})}})}),s.jsxs("div",{className:d`
            display: flex;

            ${g.smmd} {
              flex-direction: column;
              align-items: center;
            }

            ${g.lgxl} {
              flex-direction: row;
              justify-content: space-between;
            }
          `,children:[s.jsxs("div",{className:d`
              display: flex;
              flex-direction: column;
              width: 286px;

              @media (min-width: 1000px) and (max-width: 1069px) {
                width: 250px;
              }

              @media (min-width: 1070px) and (max-width: 1170px) {
                width: 250px;
              }
            `,children:[s.jsx("div",{className:d`
                height: 150px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-bottom: 22px;
              `,children:s.jsx(G,{image:pt,image2x:dt,width:70,height:86})}),s.jsx("h3",{className:d`
                font-size: 18px;
                font-weight: 600;
                color: #011722;
                margin: 0 0 10px;
              `,children:s.jsx(U,{id:"web.landing_page.section_2.title",description:"Feature card title about private Safe Key on the landing page.",defaultMessage:"Private Safe Key"})}),s.jsx("p",{className:d`
                font-size: 18px;
                color: #011722;
                margin: 0;
              `,children:s.jsx(U,{id:"web.landing_page.section_2.content",description:"Feature card text explaining choosing a Safe Key.",defaultMessage:"Choose a Safe Key to create a Safe Box in your Koofr Vault."})})]}),s.jsxs("div",{className:d`
              display: flex;
              flex-direction: column;
              width: 286px;

              @media (min-width: 1000px) and (max-width: 1069px) {
                width: 250px;
              }

              @media (min-width: 1070px) and (max-width: 1170px) {
                width: 250px;
              }
            `,children:[s.jsx("div",{className:d`
                height: 150px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-bottom: 22px;
              `,children:s.jsx(G,{image:ut,image2x:gt,width:70,height:86})}),s.jsx("h3",{className:d`
                font-size: 18px;
                font-weight: 600;
                color: #011722;
                margin: 0 0 10px;
              `,children:s.jsx(U,{id:"web.landing_page.section_3.title",description:"Feature card title about encryption happening in the browser.",defaultMessage:"It all stays in your browser"})}),s.jsx("p",{className:d`
                font-size: 18px;
                color: #011722;
                margin: 0;
              `,children:s.jsx(U,{id:"web.landing_page.section_3.content",description:"Feature card text about on-device encryption/decryption.",defaultMessage:"Your Safe Box files are encrypted or decrypted on demand, on your device."})})]}),s.jsxs("div",{className:d`
              display: flex;
              flex-direction: column;
              width: 286px;

              @media (min-width: ${D.lgMinWidth}px) and (max-width: 1069px) {
                width: 210px;
              }

              @media (min-width: 1070px) and (max-width: 1170px) {
                width: 250px;
              }
            `,children:[s.jsx("div",{className:d`
                height: 150px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-bottom: 22px;
              `,children:s.jsx(G,{image:ft,image2x:xt,width:70,height:86})}),s.jsx("h3",{className:d`
                font-size: 18px;
                font-weight: 600;
                color: #011722;
                margin: 0 0 10px;
              `,children:s.jsx(U,{id:"web.landing_page.section_4.title",description:"Feature card title about exclusive access to encrypted content.",defaultMessage:"Only you have access"})}),s.jsx("p",{className:d`
                font-size: 18px;
                color: #011722;
                margin: 0;
              `,children:s.jsx(U,{id:"web.landing_page.section_4.content",description:"Feature card text explaining that content isn't accessible without the Safe Key.",defaultMessage:"Cloud content is encrypted and never accessible without your Safe Key."})})]})]})]}),s.jsxs("div",{className:d`
          width: 100%;
          display: flex;

          ${g.sm} {
            padding-left: 15px;
            padding-right: 15px;
          }

          ${g.smmd} {
            flex-direction: column-reverse;
            align-items: center;
            margin-bottom: 120px;
          }

          ${g.mdlg} {
            padding-left: 28px;
            padding-right: 28px;
          }

          ${g.lgxl} {
            flex-direction: row;
            align-items: center;
            margin-bottom: 120px;
          }

          ${g.xl} {
            width: 1280px;
          }
        `,children:[s.jsx("div",{className:d`
            width: 60%;
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-grow: 1;
          `,children:s.jsx(G,{image:at,image2x:ot,width:356,height:414,classNameForSize:(O,K)=>d`
              ${g.sm} {
                background-size: 290px ${290*K/O}px;
                width: 290px;
                height: ${290*K/O}px;
              }
            `})}),s.jsxs("div",{className:d`
            display: flex;
            flex-direction: column;
            max-width: 500px;
            flex-shrink: 0;
          `,children:[s.jsx("h2",{className:d`
              font-size: 30px;
              font-weight: 700;
              color: #011722;
              margin: 0 0 22px;
            `,children:s.jsx(U,{id:"web.landing_page.section_5.title",description:"Section title about privacy and exclusive access.",defaultMessage:"For your eyes only"})}),s.jsx("p",{className:d`
              font-size: 18px;
              color: #011722;
              margin: 0 0 32px;
            `,children:s.jsx(U,{id:"web.landing_page.section_5.content_1",description:"Section paragraph describing local encryption before upload.",defaultMessage:"Your files are encrypted, file names and all content included, locally on your device with your Safe Key and some magic salt before they are sent to your Vault."})}),s.jsx("p",{className:d`
              font-size: 18px;
              color: #011722;
              margin: 0 0 32px;

              ${g.smmd} {
                margin: 0 0 70px;
              }
            `,children:s.jsx(U,{id:"web.landing_page.section_5.content_2",description:"Section paragraph explaining that Koofr never receives unencrypted data.",defaultMessage:"Neither your Safe key nor any other unencrypted file data or metadata is sent to or stored by <a>Koofr</a>. Only you can decrypt and access your Vault files.",values:{a:O=>s.jsx("a",{href:"https://koofr.eu",target:"_blank",rel:"noopener",children:O})}})})]})]}),s.jsx("div",{className:d`
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #011722;

          ${g.smmd} {
            padding: 60px 0 60px;
          }

          ${g.lgxl} {
            padding: 111px 0 120px;
          }
        `,children:s.jsxs("div",{className:d`
            display: flex;

            ${g.sm} {
              padding-left: 15px;
              padding-right: 15px;
            }

            ${g.smmd} {
              flex-direction: column;
              max-width: 556px;
            }

            ${g.mdlg} {
              padding-left: 28px;
              padding-right: 28px;
            }

            ${g.lg} {
              width: 100%;
            }

            ${g.lgxl} {
              flex-direction: row;
              justify-content: space-between;
            }

            ${g.xl} {
              width: 1280px;
            }
          `,children:[s.jsx("div",{className:d`
              display: flex;
              flex-direction: column;
              flex-grow: 1;

              ${g.smmd} {
                align-items: center;
                margin-bottom: 40px;
              }

              ${g.lgxl} {
                margin-top: 71px;
              }

              @media (min-width: ${D.lgMinWidth}px) and (max-width: 1249px) {
                display: none;
              }
            `,children:s.jsx("a",{href:"https://github.com/koofr/vault",target:"_blank",rel:"noreferrer",children:s.jsx(G,{image:ye,image2x:we,width:308,height:150})})}),s.jsxs("div",{className:d`
              display: flex;
              flex-direction: column;
              flex-shrink: 0;

              ${g.lgxl} {
                width: 500px;
                margin: 0 40px;
              }
            `,children:[s.jsx("h2",{className:d`
                font-size: 30px;
                font-weight: 700;
                color: #f4f5f5;
                margin: 0 0 22px;
              `,children:s.jsx(U,{id:"web.landing_page.section_6.title",description:"Section title highlighting that Koofr Vault is fully open source.",defaultMessage:"Fully open source"})}),s.jsx("p",{className:d`
                font-size: 18px;
                color: #f4f5f5;
                margin: 0 0 32px;
              `,children:s.jsx(U,{id:"web.landing_page.section_6.content_1",description:"Section paragraph about open source code and encryption primitives.",defaultMessage:"Koofr Vault is <a>open source</a>, so you can always check that the code does exactly what is promised - and nothing more. File encryption is performed using NaCl SecretBox, which uses XSalsa20 cipher and Poly1305 for ensuring integrity.",values:{a:O=>s.jsx("a",{href:"https://github.com/koofr/vault",target:"_blank",rel:"noreferrer",className:d`
                        ${pe} {
                          color: #f4f5f5;
                          text-decoration: underline;
                        }
                      `,children:O})}})}),s.jsx("p",{className:d`
                font-size: 18px;
                color: #f4f5f5;

                ${g.smmd} {
                  margin: 0 0 50px;
                }

                ${g.lgxl} {
                  margin: 0 0 78px;
                }

                @media (min-width: ${D.lgMinWidth}px) and (max-width: 1249px) {
                  margin: 0 0 0;
                }
              `,children:s.jsx(U,{id:"web.landing_page.section_6.content_2",description:"Section paragraph about rclone compatibility.",defaultMessage:"It is compatible with <a>rclone</a> . This means that you can download your encrypted files and decrypt them locally using the rclone command-line tool.",values:{a:O=>s.jsx("a",{href:"https://rclone.org",target:"_blank",rel:"noreferrer",className:d`
                        ${pe} {
                          color: #f4f5f5;
                          text-decoration: underline;
                        }
                      `,children:O})}})})]}),s.jsxs("div",{className:d`
              display: flex;
              flex-direction: column;

              ${g.smmd} {
                align-items: center;
              }

              ${g.lgxl} {
                justify-content: flex-end;
                align-items: flex-end;
                flex-grow: 1;
              }

              @media (min-width: ${D.lgMinWidth}px) and (max-width: 1249px) {
                align-items: center;
              }
            `,children:[s.jsx("div",{className:d`
                display: none;

                @media (min-width: ${D.lgMinWidth}px) and (max-width: 1249px) {
                  display: flex;
                  margin: 0 22px 30px 0;
                }
              `,children:s.jsx("a",{href:"https://github.com/koofr/vault",target:"_blank",rel:"noreferrer",children:s.jsx(G,{image:ye,image2x:we,width:308,height:150})})}),s.jsxs("div",{className:d`
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                border: 1px solid #565656;
                width: 288px;
                height: 152px;
              `,children:[s.jsx("a",{href:"https://github.com/koofr/vault",target:"_blank",rel:"noreferrer",className:d`
                  margin: 0 23px;
                `,children:s.jsx(G,{image:ht,image2x:mt,width:54,height:54})}),s.jsx("a",{href:"https://rclone.org/",target:"_blank",rel:"noreferrer",className:d`
                  margin: 0 23px;
                `,children:s.jsx(G,{image:lt,image2x:ct,width:55,height:52})})]})]})]})}),s.jsxs("div",{className:d`
          display: flex;

          ${g.sm} {
            padding-left: 15px;
            padding-right: 15px;
          }

          ${g.smmd} {
            flex-direction: column;
            max-width: 556px;
            padding-top: 60px;
            padding-bottom: 60px;
          }

          ${g.mdlg} {
            padding-left: 28px;
            padding-right: 28px;
          }

          ${g.lg} {
            width: 100%;
          }

          ${g.lgxl} {
            flex-direction: row;
            justify-content: center;
            padding-top: 76px;
            padding-bottom: 76px;
          }

          ${g.xl} {
            width: 1280px;
          }
        `,children:[s.jsxs("div",{className:d`
            display: flex;
            flex-direction: column;
            align-items: center;

            ${g.smmd} {
              margin-bottom: 50px;
            }

            ${g.lgxl} {
              width: 350px;
            }
          `,children:[s.jsx("div",{className:d`
              width: 150px;
              height: 112px;
              border: 1px solid #d4d6d7;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin-bottom: 15px;
            `,children:s.jsx(G,{image:_e,image2x:$e,width:70,height:61})}),s.jsx("p",{className:d`
              font-size: 18px;
              font-weight: 600;
              color: #011722;
              margin: 0;
              text-align: center;
            `,children:s.jsx(U,{id:"web.landing_page.section_7.title",description:"Feature highlight label for client-side encryption.",defaultMessage:"Client-side encryption"})})]}),s.jsxs("div",{className:d`
            display: flex;
            flex-direction: column;
            align-items: center;

            ${g.smmd} {
              margin-bottom: 50px;
            }

            ${g.lgxl} {
              width: 350px;
            }
          `,children:[s.jsx("div",{className:d`
              width: 150px;
              height: 112px;
              border: 1px solid #d4d6d7;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin-bottom: 15px;
            `,children:s.jsx(G,{image:et,image2x:tt,width:70,height:61})}),s.jsx("p",{className:d`
              font-size: 18px;
              font-weight: 600;
              color: #011722;
              margin: 0;
              text-align: center;
            `,children:s.jsx(U,{id:"web.landing_page.section_8.title",description:"Feature highlight label for verifiable source code.",defaultMessage:"Verifiable source code"})})]}),s.jsxs("div",{className:d`
            display: flex;
            flex-direction: column;
            align-items: center;

            ${g.smmd} {
              margin-bottom: 0;
            }

            ${g.lgxl} {
              width: 350px;
            }
          `,children:[s.jsx("div",{className:d`
              width: 150px;
              height: 112px;
              border: 1px solid #d4d6d7;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin-bottom: 15px;
            `,children:s.jsx(G,{image:nt,image2x:rt,width:70,height:61})}),s.jsx("p",{className:d`
              font-size: 18px;
              font-weight: 600;
              color: #011722;
              margin: 0;
              text-align: center;
            `,children:s.jsx(U,{id:"web.landing_page.section_9.title",description:"Feature highlight label for zero-knowledge design.",defaultMessage:"Zero knowledge"})})]})]}),s.jsx("div",{className:d`
          width: 100%;
          border-bottom: 1px solid #d4d6d7;

          ${g.smmd} {
            margin-bottom: 60px;
          }

          ${g.lgxl} {
            margin-bottom: 111px;
          }
        `}),s.jsxs("div",{className:d`
          display: flex;
          flex-direction: column;
          align-items: center;

          ${g.sm} {
            padding-left: 15px;
            padding-right: 15px;
          }

          ${g.smmd} {
            margin: 0 0 60px;
          }

          ${g.lgxl} {
            margin: 0 0 111px;
          }
        `,children:[s.jsxs("div",{className:d`
            display: flex;
            flex-direction: column;
            max-width: 500px;
          `,children:[s.jsx("h2",{className:d`
              font-size: 30px;
              font-weight: 700;
              color: #011722;
              flex-grow: 1;
              margin: 0 0 22px;
              text-align: center;
            `,children:s.jsx(U,{id:"web.landing_page.section_10.title",description:"Call-to-action section title encouraging users to start using Koofr Vault.",defaultMessage:"Unlock your Vault"})}),s.jsx("p",{className:d`
              font-size: 18px;
              color: #011722;
              margin: 0 0 43px;
              text-align: center;
            `,children:s.jsx(U,{id:"web.landing_page.section_10.description",description:"Call-to-action description mentioning Koofr plans.",defaultMessage:"Start encrypting your cloud storage files in just a few minutes. Included in all <a>Koofr plans</a>.",values:{a:O=>s.jsx("a",{href:"https://koofr.eu/pricing",target:"_blank",rel:"noopener",children:O})}})}),s.jsx(ce,{href:"/login",className:le(de,d`
                width: 100%;
                font-size: 18px;
                padding: 9px 21px;
                font-weight: 700;
              `),children:s.jsx(U,{id:"web.landing_page.get_started.button",description:"Primary call-to-action button on the landing page that starts login.",defaultMessage:"Get started"})})]}),s.jsx("p",{className:d`
            font-size: 18px;
            color: #011722;
            margin: 43px 0 0;
            text-align: center;
          `,children:s.jsx(U,{id:"web.landing_page.section_10.questions",description:"Support link text for questions about Koofr Vault on the landing page.",defaultMessage:"Have questions about Koofr Vault? <a>Find answers here</a>.",values:{a:O=>s.jsx("a",{href:"https://koofr.eu/help/koofr-vault",target:"_blank",rel:"noopener",children:O})}})})]}),s.jsx("div",{className:d`
          width: 100%;
          border-bottom: 1px solid #d4d6d7;
        `}),s.jsxs("div",{className:d`
          ${g.smmd} {
            padding: 30px 28px;
          }

          ${g.lgxl} {
            padding: 40px 28px;
          }
        `,children:[s.jsx("p",{className:d`
            font-size: 14px;
            color: #011722;
            text-align: center;
            margin: 0 0 15px;
          `,children:s.jsx(U,{id:"web.landing_page.copyright.text",description:"Footer copyright line on the landing page with company link and current year.",defaultMessage:"© {year}. <a>Koofr d.o.o.</a> all rights reserved.",values:{year:new Date().getFullYear(),a:O=>s.jsx("a",{href:"https://koofr.eu",target:"_blank",rel:"noopener",className:d`
                    font-weight: 600;
                    ${pe} {
                      color: #011722;
                      text-decoration: none;
                    }
                  `,children:O})}})}),s.jsxs("div",{className:d`
            font-size: 13px;
            color: #011722;
            text-align: center;
          `,children:[s.jsx(ze,{}),s.jsx(Qe,{})]})]})]})});At.displayName="LandingPageOfficial";export{At as LandingPageOfficial};

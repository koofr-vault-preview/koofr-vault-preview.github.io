import{m as Ce,g as Ie,r as we,n as Ue,j as l}from"./DynamicThemeProvider-MqskYVZg.js";import{a as se,c as d}from"./emotion-css.esm-D9bkNW-b.js";import{R as k,g as Pe,a as Re,b as Me,c as We,f as Ye,d as Le}from"./RetinaImage-TZMvYiRS.js";import{S as ke}from"./logo-yAmZJmBX.js";import{a as ce,c as Je,d as le}from"./Button-D3442RQe.js";import{G as Ge,a as De}from"./GitRevision-2tlf2Zij.js";import{u as Ke}from"./useDocumentTitle-D3L4F_h2.js";var te={exports:{}},Qe=te.exports,Ae;function ze(){return Ae||(Ae=1,(function(K,G){(function(D,re){K.exports=re(Ce())})(typeof self<"u"?self:Qe,(D=>(()=>{var re={2:(t,o,e)=>{var r=e(2199),i=e(4664),a=e(5950);t.exports=function(n){return r(n,a,i)}},79:(t,o,e)=>{var r=e(3702),i=e(80),a=e(4739),n=e(8655),c=e(1175);function p(u){var m=-1,g=u==null?0:u.length;for(this.clear();++m<g;){var h=u[m];this.set(h[0],h[1])}}p.prototype.clear=r,p.prototype.delete=i,p.prototype.get=a,p.prototype.has=n,p.prototype.set=c,t.exports=p},80:(t,o,e)=>{var r=e(6025),i=Array.prototype.splice;t.exports=function(a){var n=this.__data__,c=r(n,a);return!(c<0||(c==n.length-1?n.pop():i.call(n,c,1),--this.size,0))}},270:(t,o,e)=>{var r=e(7068),i=e(346);t.exports=function a(n,c,p,u,m){return n===c||(n==null||c==null||!i(n)&&!i(c)?n!=n&&c!=c:r(n,c,p,u,a,m))}},289:(t,o,e)=>{var r=e(2651);t.exports=function(i){return r(this,i).get(i)}},294:t=>{t.exports=function(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=9007199254740991}},317:t=>{t.exports=function(o){var e=-1,r=Array(o.size);return o.forEach((function(i,a){r[++e]=[a,i]})),r}},346:t=>{t.exports=function(o){return o!=null&&typeof o=="object"}},361:t=>{var o=/^(?:0|[1-9]\d*)$/;t.exports=function(e,r){var i=typeof e;return!!(r=r??9007199254740991)&&(i=="number"||i!="symbol"&&o.test(e))&&e>-1&&e%1==0&&e<r}},392:t=>{t.exports=function(o,e){return o?.[e]}},659:(t,o,e)=>{var r=e(1873),i=Object.prototype,a=i.hasOwnProperty,n=i.toString,c=r?r.toStringTag:void 0;t.exports=function(p){var u=a.call(p,c),m=p[c];try{p[c]=void 0;var g=!0}catch{}var h=n.call(p);return g&&(u?p[c]=m:delete p[c]),h}},689:(t,o,e)=>{var r=e(2),i=Object.prototype.hasOwnProperty;t.exports=function(a,n,c,p,u,m){var g=1&c,h=r(a),C=h.length;if(C!=r(n).length&&!g)return!1;for(var y=C;y--;){var x=h[y];if(!(g?x in n:i.call(n,x)))return!1}var E=m.get(a),j=m.get(n);if(E&&j)return E==n&&j==a;var S=!0;m.set(a,n),m.set(n,a);for(var b=g;++y<C;){var v=a[x=h[y]],T=n[x];if(p)var U=g?p(T,v,x,n,a,m):p(v,T,x,a,n,m);if(!(U===void 0?v===T||u(v,T,c,p,m):U)){S=!1;break}b||(b=x=="constructor")}if(S&&!b){var P=a.constructor,M=n.constructor;P==M||!("constructor"in a)||!("constructor"in n)||typeof P=="function"&&P instanceof P&&typeof M=="function"&&M instanceof M||(S=!1)}return m.delete(a),m.delete(n),S}},695:(t,o,e)=>{var r=e(8096),i=e(2428),a=e(6449),n=e(3656),c=e(361),p=e(7167),u=Object.prototype.hasOwnProperty;t.exports=function(m,g){var h=a(m),C=!h&&i(m),y=!h&&!C&&n(m),x=!h&&!C&&!y&&p(m),E=h||C||y||x,j=E?r(m.length,String):[],S=j.length;for(var b in m)!g&&!u.call(m,b)||E&&(b=="length"||y&&(b=="offset"||b=="parent")||x&&(b=="buffer"||b=="byteLength"||b=="byteOffset")||c(b,S))||j.push(b);return j}},938:t=>{t.exports=function(o){var e=this.__data__,r=e.delete(o);return this.size=e.size,r}},945:(t,o,e)=>{var r=e(79),i=e(8223),a=e(3661);t.exports=function(n,c){var p=this.__data__;if(p instanceof r){var u=p.__data__;if(!i||u.length<199)return u.push([n,c]),this.size=++p.size,this;p=this.__data__=new a(u)}return p.set(n,c),this.size=p.size,this}},1042:(t,o,e)=>{var r=e(6110)(Object,"create");t.exports=r},1175:(t,o,e)=>{var r=e(6025);t.exports=function(i,a){var n=this.__data__,c=r(n,i);return c<0?(++this.size,n.push([i,a])):n[c][1]=a,this}},1380:t=>{t.exports=function(o){return this.__data__.set(o,"__lodash_hash_undefined__"),this}},1420:(t,o,e)=>{var r=e(79);t.exports=function(){this.__data__=new r,this.size=0}},1459:t=>{t.exports=function(o){return this.__data__.has(o)}},1549:(t,o,e)=>{var r=e(2032),i=e(3862),a=e(6721),n=e(2749),c=e(5749);function p(u){var m=-1,g=u==null?0:u.length;for(this.clear();++m<g;){var h=u[m];this.set(h[0],h[1])}}p.prototype.clear=r,p.prototype.delete=i,p.prototype.get=a,p.prototype.has=n,p.prototype.set=c,t.exports=p},1873:(t,o,e)=>{var r=e(9325).Symbol;t.exports=r},1882:(t,o,e)=>{var r=e(2552),i=e(3805);t.exports=function(a){if(!i(a))return!1;var n=r(a);return n=="[object Function]"||n=="[object GeneratorFunction]"||n=="[object AsyncFunction]"||n=="[object Proxy]"}},1986:(t,o,e)=>{var r=e(1873),i=e(7828),a=e(5288),n=e(5911),c=e(317),p=e(4247),u=r?r.prototype:void 0,m=u?u.valueOf:void 0;t.exports=function(g,h,C,y,x,E,j){switch(C){case"[object DataView]":if(g.byteLength!=h.byteLength||g.byteOffset!=h.byteOffset)return!1;g=g.buffer,h=h.buffer;case"[object ArrayBuffer]":return!(g.byteLength!=h.byteLength||!E(new i(g),new i(h)));case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+g,+h);case"[object Error]":return g.name==h.name&&g.message==h.message;case"[object RegExp]":case"[object String]":return g==h+"";case"[object Map]":var S=c;case"[object Set]":var b=1&y;if(S||(S=p),g.size!=h.size&&!b)return!1;var v=j.get(g);if(v)return v==h;y|=2,j.set(g,h);var T=n(S(g),S(h),y,x,E,j);return j.delete(g),T;case"[object Symbol]":if(m)return m.call(g)==m.call(h)}return!1}},2032:(t,o,e)=>{var r=e(1042);t.exports=function(){this.__data__=r?r(null):{},this.size=0}},2199:(t,o,e)=>{var r=e(4528),i=e(6449);t.exports=function(a,n,c){var p=n(a);return i(a)?p:r(p,c(a))}},2404:(t,o,e)=>{var r=e(270);t.exports=function(i,a){return r(i,a)}},2428:(t,o,e)=>{var r=e(7534),i=e(346),a=Object.prototype,n=a.hasOwnProperty,c=a.propertyIsEnumerable,p=r((function(){return arguments})())?r:function(u){return i(u)&&n.call(u,"callee")&&!c.call(u,"callee")};t.exports=p},2552:(t,o,e)=>{var r=e(1873),i=e(659),a=e(9350),n=r?r.toStringTag:void 0;t.exports=function(c){return c==null?c===void 0?"[object Undefined]":"[object Null]":n&&n in Object(c)?i(c):a(c)}},2651:(t,o,e)=>{var r=e(4218);t.exports=function(i,a){var n=i.__data__;return r(a)?n[typeof a=="string"?"string":"hash"]:n.map}},2749:(t,o,e)=>{var r=e(1042),i=Object.prototype.hasOwnProperty;t.exports=function(a){var n=this.__data__;return r?n[a]!==void 0:i.call(n,a)}},2804:(t,o,e)=>{var r=e(6110)(e(9325),"Promise");t.exports=r},2949:(t,o,e)=>{var r=e(2651);t.exports=function(i,a){var n=r(this,i),c=n.size;return n.set(i,a),this.size+=n.size==c?0:1,this}},3040:(t,o,e)=>{var r=e(1549),i=e(79),a=e(8223);t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||i),string:new r}}},3146:(t,o,e)=>{for(var r=e(3491),i=typeof window>"u"?e.g:window,a=["moz","webkit"],n="AnimationFrame",c=i["request"+n],p=i["cancel"+n]||i["cancelRequest"+n],u=0;!c&&u<a.length;u++)c=i[a[u]+"Request"+n],p=i[a[u]+"Cancel"+n]||i[a[u]+"CancelRequest"+n];if(!c||!p){var m=0,g=0,h=[],C=1e3/60;c=function(y){if(h.length===0){var x=r(),E=Math.max(0,C-(x-m));m=E+x,setTimeout((function(){var j=h.slice(0);h.length=0;for(var S=0;S<j.length;S++)if(!j[S].cancelled)try{j[S].callback(m)}catch(b){setTimeout((function(){throw b}),0)}}),Math.round(E))}return h.push({handle:++g,callback:y,cancelled:!1}),g},p=function(y){for(var x=0;x<h.length;x++)h[x].handle===y&&(h[x].cancelled=!0)}}t.exports=function(y){return c.call(i,y)},t.exports.cancel=function(){p.apply(i,arguments)},t.exports.polyfill=function(y){y||(y=i),y.requestAnimationFrame=c,y.cancelAnimationFrame=p}},3345:t=>{t.exports=function(){return[]}},3491:function(t){(function(){var o,e,r,i,a,n;typeof performance<"u"&&performance!==null&&performance.now?t.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(t.exports=function(){return(o()-a)/1e6},e=process.hrtime,i=(o=function(){var c;return 1e9*(c=e())[0]+c[1]})(),n=1e9*process.uptime(),a=i-n):Date.now?(t.exports=function(){return Date.now()-r},r=Date.now()):(t.exports=function(){return new Date().getTime()-r},r=new Date().getTime())}).call(this)},3605:t=>{t.exports=function(o){return this.__data__.get(o)}},3650:(t,o,e)=>{var r=e(4335)(Object.keys,Object);t.exports=r},3656:(t,o,e)=>{t=e.nmd(t);var r=e(9325),i=e(9935),a=o&&!o.nodeType&&o,n=a&&t&&!t.nodeType&&t,c=n&&n.exports===a?r.Buffer:void 0,p=(c?c.isBuffer:void 0)||i;t.exports=p},3661:(t,o,e)=>{var r=e(3040),i=e(7670),a=e(289),n=e(4509),c=e(2949);function p(u){var m=-1,g=u==null?0:u.length;for(this.clear();++m<g;){var h=u[m];this.set(h[0],h[1])}}p.prototype.clear=r,p.prototype.delete=i,p.prototype.get=a,p.prototype.has=n,p.prototype.set=c,t.exports=p},3702:t=>{t.exports=function(){this.__data__=[],this.size=0}},3805:t=>{t.exports=function(o){var e=typeof o;return o!=null&&(e=="object"||e=="function")}},3862:t=>{t.exports=function(o){var e=this.has(o)&&delete this.__data__[o];return this.size-=e?1:0,e}},4218:t=>{t.exports=function(o){var e=typeof o;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?o!=="__proto__":o===null}},4247:t=>{t.exports=function(o){var e=-1,r=Array(o.size);return o.forEach((function(i){r[++e]=i})),r}},4248:t=>{t.exports=function(o,e){for(var r=-1,i=o==null?0:o.length;++r<i;)if(e(o[r],r,o))return!0;return!1}},4335:t=>{t.exports=function(o,e){return function(r){return o(e(r))}}},4509:(t,o,e)=>{var r=e(2651);t.exports=function(i){return r(this,i).has(i)}},4528:t=>{t.exports=function(o,e){for(var r=-1,i=e.length,a=o.length;++r<i;)o[a+r]=e[r];return o}},4664:(t,o,e)=>{var r=e(9770),i=e(3345),a=Object.prototype.propertyIsEnumerable,n=Object.getOwnPropertySymbols,c=n?function(p){return p==null?[]:(p=Object(p),r(n(p),(function(u){return a.call(p,u)})))}:i;t.exports=c},4739:(t,o,e)=>{var r=e(6025);t.exports=function(i){var a=this.__data__,n=r(a,i);return n<0?void 0:a[n][1]}},4840:(t,o,e)=>{var r=typeof e.g=="object"&&e.g&&e.g.Object===Object&&e.g;t.exports=r},4894:(t,o,e)=>{var r=e(1882),i=e(294);t.exports=function(a){return a!=null&&i(a.length)&&!r(a)}},4901:(t,o,e)=>{var r=e(2552),i=e(294),a=e(346),n={};n["[object Float32Array]"]=n["[object Float64Array]"]=n["[object Int8Array]"]=n["[object Int16Array]"]=n["[object Int32Array]"]=n["[object Uint8Array]"]=n["[object Uint8ClampedArray]"]=n["[object Uint16Array]"]=n["[object Uint32Array]"]=!0,n["[object Arguments]"]=n["[object Array]"]=n["[object ArrayBuffer]"]=n["[object Boolean]"]=n["[object DataView]"]=n["[object Date]"]=n["[object Error]"]=n["[object Function]"]=n["[object Map]"]=n["[object Number]"]=n["[object Object]"]=n["[object RegExp]"]=n["[object Set]"]=n["[object String]"]=n["[object WeakMap]"]=!1,t.exports=function(c){return a(c)&&i(c.length)&&!!n[r(c)]}},5083:(t,o,e)=>{var r=e(1882),i=e(7296),a=e(3805),n=e(7473),c=/^\[object .+?Constructor\]$/,p=Function.prototype,u=Object.prototype,m=p.toString,g=u.hasOwnProperty,h=RegExp("^"+m.call(g).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(C){return!(!a(C)||i(C))&&(r(C)?h:c).test(n(C))}},5288:t=>{t.exports=function(o,e){return o===e||o!=o&&e!=e}},5481:(t,o,e)=>{var r=e(9325)["__core-js_shared__"];t.exports=r},5527:t=>{var o=Object.prototype;t.exports=function(e){var r=e&&e.constructor;return e===(typeof r=="function"&&r.prototype||o)}},5580:(t,o,e)=>{var r=e(6110)(e(9325),"DataView");t.exports=r},5749:(t,o,e)=>{var r=e(1042);t.exports=function(i,a){var n=this.__data__;return this.size+=this.has(i)?0:1,n[i]=r&&a===void 0?"__lodash_hash_undefined__":a,this}},5861:(t,o,e)=>{var r=e(5580),i=e(8223),a=e(2804),n=e(6545),c=e(8303),p=e(2552),u=e(7473),m="[object Map]",g="[object Promise]",h="[object Set]",C="[object WeakMap]",y="[object DataView]",x=u(r),E=u(i),j=u(a),S=u(n),b=u(c),v=p;(r&&v(new r(new ArrayBuffer(1)))!=y||i&&v(new i)!=m||a&&v(a.resolve())!=g||n&&v(new n)!=h||c&&v(new c)!=C)&&(v=function(T){var U=p(T),P=U=="[object Object]"?T.constructor:void 0,M=P?u(P):"";if(M)switch(M){case x:return y;case E:return m;case j:return g;case S:return h;case b:return C}return U}),t.exports=v},5911:(t,o,e)=>{var r=e(8859),i=e(4248),a=e(9219);t.exports=function(n,c,p,u,m,g){var h=1&p,C=n.length,y=c.length;if(C!=y&&!(h&&y>C))return!1;var x=g.get(n),E=g.get(c);if(x&&E)return x==c&&E==n;var j=-1,S=!0,b=2&p?new r:void 0;for(g.set(n,c),g.set(c,n);++j<C;){var v=n[j],T=c[j];if(u)var U=h?u(T,v,j,c,n,g):u(v,T,j,n,c,g);if(U!==void 0){if(U)continue;S=!1;break}if(b){if(!i(c,(function(P,M){if(!a(b,M)&&(v===P||m(v,P,p,u,g)))return b.push(M)}))){S=!1;break}}else if(v!==T&&!m(v,T,p,u,g)){S=!1;break}}return g.delete(n),g.delete(c),S}},5950:(t,o,e)=>{var r=e(695),i=e(8984),a=e(4894);t.exports=function(n){return a(n)?r(n):i(n)}},6009:(t,o,e)=>{t=e.nmd(t);var r=e(4840),i=o&&!o.nodeType&&o,a=i&&t&&!t.nodeType&&t,n=a&&a.exports===i&&r.process,c=(function(){try{return a&&a.require&&a.require("util").types||n&&n.binding&&n.binding("util")}catch{}})();t.exports=c},6025:(t,o,e)=>{var r=e(5288);t.exports=function(i,a){for(var n=i.length;n--;)if(r(i[n][0],a))return n;return-1}},6110:(t,o,e)=>{var r=e(5083),i=e(392);t.exports=function(a,n){var c=i(a,n);return r(c)?c:void 0}},6449:t=>{var o=Array.isArray;t.exports=o},6545:(t,o,e)=>{var r=e(6110)(e(9325),"Set");t.exports=r},6721:(t,o,e)=>{var r=e(1042),i=Object.prototype.hasOwnProperty;t.exports=function(a){var n=this.__data__;if(r){var c=n[a];return c==="__lodash_hash_undefined__"?void 0:c}return i.call(n,a)?n[a]:void 0}},7068:(t,o,e)=>{var r=e(7217),i=e(5911),a=e(1986),n=e(689),c=e(5861),p=e(6449),u=e(3656),m=e(7167),g="[object Arguments]",h="[object Array]",C="[object Object]",y=Object.prototype.hasOwnProperty;t.exports=function(x,E,j,S,b,v){var T=p(x),U=p(E),P=T?h:c(x),M=U?h:c(E),F=(P=P==g?C:P)==C,q=(M=M==g?C:M)==C,V=P==M;if(V&&u(x)){if(!u(E))return!1;T=!0,F=!1}if(V&&!F)return v||(v=new r),T||m(x)?i(x,E,j,S,b,v):a(x,E,P,j,S,b,v);if(!(1&j)){var N=F&&y.call(x,"__wrapped__"),A=q&&y.call(E,"__wrapped__");if(N||A){var O=N?x.value():x,B=A?E.value():E;return v||(v=new r),b(O,B,j,S,v)}}return!!V&&(v||(v=new r),n(x,E,j,S,b,v))}},7167:(t,o,e)=>{var r=e(4901),i=e(7301),a=e(6009),n=a&&a.isTypedArray,c=n?i(n):r;t.exports=c},7217:(t,o,e)=>{var r=e(79),i=e(1420),a=e(938),n=e(3605),c=e(9817),p=e(945);function u(m){var g=this.__data__=new r(m);this.size=g.size}u.prototype.clear=i,u.prototype.delete=a,u.prototype.get=n,u.prototype.has=c,u.prototype.set=p,t.exports=u},7296:(t,o,e)=>{var r,i=e(5481),a=(r=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(n){return!!a&&a in n}},7301:t=>{t.exports=function(o){return function(e){return o(e)}}},7473:t=>{var o=Function.prototype.toString;t.exports=function(e){if(e!=null){try{return o.call(e)}catch{}try{return e+""}catch{}}return""}},7534:(t,o,e)=>{var r=e(2552),i=e(346);t.exports=function(a){return i(a)&&r(a)=="[object Arguments]"}},7670:(t,o,e)=>{var r=e(2651);t.exports=function(i){var a=r(this,i).delete(i);return this.size-=a?1:0,a}},7828:(t,o,e)=>{var r=e(9325).Uint8Array;t.exports=r},8096:t=>{t.exports=function(o,e){for(var r=-1,i=Array(o);++r<o;)i[r]=e(r);return i}},8223:(t,o,e)=>{var r=e(6110)(e(9325),"Map");t.exports=r},8303:(t,o,e)=>{var r=e(6110)(e(9325),"WeakMap");t.exports=r},8655:(t,o,e)=>{var r=e(6025);t.exports=function(i){return r(this.__data__,i)>-1}},8859:(t,o,e)=>{var r=e(3661),i=e(1380),a=e(1459);function n(c){var p=-1,u=c==null?0:c.length;for(this.__data__=new r;++p<u;)this.add(c[p])}n.prototype.add=n.prototype.push=i,n.prototype.has=a,t.exports=n},8984:(t,o,e)=>{var r=e(5527),i=e(3650),a=Object.prototype.hasOwnProperty;t.exports=function(n){if(!r(n))return i(n);var c=[];for(var p in Object(n))a.call(n,p)&&p!="constructor"&&c.push(p);return c}},9155:t=>{t.exports=D},9219:t=>{t.exports=function(o,e){return o.has(e)}},9325:(t,o,e)=>{var r=e(4840),i=typeof self=="object"&&self&&self.Object===Object&&self,a=r||i||Function("return this")();t.exports=a},9350:t=>{var o=Object.prototype.toString;t.exports=function(e){return o.call(e)}},9770:t=>{t.exports=function(o,e){for(var r=-1,i=o==null?0:o.length,a=0,n=[];++r<i;){var c=o[r];e(c,r,o)&&(n[a++]=c)}return n}},9817:t=>{t.exports=function(o){return this.__data__.has(o)}},9905:(t,o,e)=>{e.d(o,{default:()=>V});var r=e(3146),i=e.n(r);const a=function(N){return new RegExp(/<[a-z][\s\S]*>/i).test(N)},n=function(N,A){return Math.floor(Math.random()*(A-N+1))+N};var c="TYPE_CHARACTER",p="REMOVE_CHARACTER",u="REMOVE_ALL",m="REMOVE_LAST_VISIBLE_NODE",g="PAUSE_FOR",h="CALL_FUNCTION",C="ADD_HTML_TAG_ELEMENT",y="CHANGE_DELETE_SPEED",x="CHANGE_DELAY",E="CHANGE_CURSOR",j="PASTE_STRING",S="HTML_TAG";function b(N){return b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},b(N)}function v(N,A){var O=Object.keys(N);if(Object.getOwnPropertySymbols){var B=Object.getOwnPropertySymbols(N);A&&(B=B.filter((function(z){return Object.getOwnPropertyDescriptor(N,z).enumerable}))),O.push.apply(O,B)}return O}function T(N){for(var A=1;A<arguments.length;A++){var O=arguments[A]!=null?arguments[A]:{};A%2?v(Object(O),!0).forEach((function(B){F(N,B,O[B])})):Object.getOwnPropertyDescriptors?Object.defineProperties(N,Object.getOwnPropertyDescriptors(O)):v(Object(O)).forEach((function(B){Object.defineProperty(N,B,Object.getOwnPropertyDescriptor(O,B))}))}return N}function U(N){return(function(A){if(Array.isArray(A))return P(A)})(N)||(function(A){if(typeof Symbol<"u"&&A[Symbol.iterator]!=null||A["@@iterator"]!=null)return Array.from(A)})(N)||(function(A,O){if(A){if(typeof A=="string")return P(A,O);var B={}.toString.call(A).slice(8,-1);return B==="Object"&&A.constructor&&(B=A.constructor.name),B==="Map"||B==="Set"?Array.from(A):B==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(B)?P(A,O):void 0}})(N)||(function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)})()}function P(N,A){(A==null||A>N.length)&&(A=N.length);for(var O=0,B=Array(A);O<A;O++)B[O]=N[O];return B}function M(N,A){for(var O=0;O<A.length;O++){var B=A[O];B.enumerable=B.enumerable||!1,B.configurable=!0,"value"in B&&(B.writable=!0),Object.defineProperty(N,q(B.key),B)}}function F(N,A,O){return(A=q(A))in N?Object.defineProperty(N,A,{value:O,enumerable:!0,configurable:!0,writable:!0}):N[A]=O,N}function q(N){var A=(function(O){if(b(O)!="object"||!O)return O;var B=O[Symbol.toPrimitive];if(B!==void 0){var z=B.call(O,"string");if(b(z)!="object")return z;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(O)})(N);return b(A)=="symbol"?A:A+""}const V=(function(){function N(B,z){var s=this;if((function(w,I){if(!(w instanceof I))throw new TypeError("Cannot call a class as a function")})(this,N),F(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),F(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),F(this,"setupWrapperElement",(function(){s.state.elements.container&&(s.state.elements.wrapper.className=s.options.wrapperClassName,s.state.elements.cursor.className=s.options.cursorClassName,s.state.elements.cursor.innerHTML=s.options.cursor,s.state.elements.container.innerHTML="",s.state.elements.container.appendChild(s.state.elements.wrapper),s.state.elements.container.appendChild(s.state.elements.cursor))})),F(this,"start",(function(){return s.state.eventLoopPaused=!1,s.runEventLoop(),s})),F(this,"pause",(function(){return s.state.eventLoopPaused=!0,s})),F(this,"stop",(function(){return s.state.eventLoop&&((0,r.cancel)(s.state.eventLoop),s.state.eventLoop=null),s})),F(this,"pauseFor",(function(w){return s.addEventToQueue(g,{ms:w}),s})),F(this,"typeOutAllStrings",(function(){return typeof s.options.strings=="string"?(s.typeString(s.options.strings).pauseFor(s.options.pauseFor),s):(s.options.strings.forEach((function(w){s.typeString(w).pauseFor(s.options.pauseFor).deleteAll(s.options.deleteSpeed)})),s)})),F(this,"typeString",(function(w){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(a(w))return s.typeOutHTMLString(w,I);if(w){var W=(s.options||{}).stringSplitter,Y=typeof W=="function"?W(w):w.split("");s.typeCharacters(Y,I)}return s})),F(this,"pasteString",(function(w){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return a(w)?s.typeOutHTMLString(w,I,!0):(w&&s.addEventToQueue(j,{character:w,node:I}),s)})),F(this,"typeOutHTMLString",(function(w){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,W=arguments.length>2?arguments[2]:void 0,Y=(function(H){var Z=document.createElement("div");return Z.innerHTML=H,Z.childNodes})(w);if(Y.length>0)for(var R=0;R<Y.length;R++){var Q=Y[R],X=Q.innerHTML;Q&&Q.nodeType!==3?(Q.innerHTML="",s.addEventToQueue(C,{node:Q,parentNode:I}),W?s.pasteString(X,Q):s.typeString(X,Q)):Q.textContent&&(W?s.pasteString(Q.textContent,I):s.typeString(Q.textContent,I))}return s})),F(this,"deleteAll",(function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return s.addEventToQueue(u,{speed:w}),s})),F(this,"changeDeleteSpeed",(function(w){if(!w)throw new Error("Must provide new delete speed");return s.addEventToQueue(y,{speed:w}),s})),F(this,"changeDelay",(function(w){if(!w)throw new Error("Must provide new delay");return s.addEventToQueue(x,{delay:w}),s})),F(this,"changeCursor",(function(w){if(!w)throw new Error("Must provide new cursor");return s.addEventToQueue(E,{cursor:w}),s})),F(this,"deleteChars",(function(w){if(!w)throw new Error("Must provide amount of characters to delete");for(var I=0;I<w;I++)s.addEventToQueue(p);return s})),F(this,"callFunction",(function(w,I){if(!w||typeof w!="function")throw new Error("Callback must be a function");return s.addEventToQueue(h,{cb:w,thisArg:I}),s})),F(this,"typeCharacters",(function(w){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!w||!Array.isArray(w))throw new Error("Characters must be an array");return w.forEach((function(W){s.addEventToQueue(c,{character:W,node:I})})),s})),F(this,"removeCharacters",(function(w){if(!w||!Array.isArray(w))throw new Error("Characters must be an array");return w.forEach((function(){s.addEventToQueue(p)})),s})),F(this,"addEventToQueue",(function(w,I){var W=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return s.addEventToStateProperty(w,I,W,"eventQueue")})),F(this,"addReverseCalledEvent",(function(w,I){var W=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return s.options.loop?s.addEventToStateProperty(w,I,W,"reverseCalledEvents"):s})),F(this,"addEventToStateProperty",(function(w,I){var W=arguments.length>2&&arguments[2]!==void 0&&arguments[2],Y=arguments.length>3?arguments[3]:void 0,R={eventName:w,eventArgs:I||{}};return s.state[Y]=W?[R].concat(U(s.state[Y])):[].concat(U(s.state[Y]),[R]),s})),F(this,"runEventLoop",(function(){s.state.lastFrameTime||(s.state.lastFrameTime=Date.now());var w=Date.now(),I=w-s.state.lastFrameTime;if(!s.state.eventQueue.length){if(!s.options.loop)return;s.state.eventQueue=U(s.state.calledEvents),s.state.calledEvents=[],s.options=T({},s.state.initialOptions)}if(s.state.eventLoop=i()(s.runEventLoop),!s.state.eventLoopPaused){if(s.state.pauseUntil){if(w<s.state.pauseUntil)return;s.state.pauseUntil=null}var W,Y=U(s.state.eventQueue),R=Y.shift();if(!(I<=(W=R.eventName===m||R.eventName===p?s.options.deleteSpeed==="natural"?n(40,80):s.options.deleteSpeed:s.options.delay==="natural"?n(120,160):s.options.delay))){var Q=R.eventName,X=R.eventArgs;switch(s.logInDevMode({currentEvent:R,state:s.state,delay:W}),Q){case j:case c:var H=X.character,Z=X.node,xe=document.createTextNode(H),_=xe;s.options.onCreateTextNode&&typeof s.options.onCreateTextNode=="function"&&(_=s.options.onCreateTextNode(H,xe)),_&&(Z?Z.appendChild(_):s.state.elements.wrapper.appendChild(_)),s.state.visibleNodes=[].concat(U(s.state.visibleNodes),[{type:"TEXT_NODE",character:H,node:_}]);break;case p:Y.unshift({eventName:m,eventArgs:{removingCharacterNode:!0}});break;case g:var je=R.eventArgs.ms;s.state.pauseUntil=Date.now()+parseInt(je);break;case h:var me=R.eventArgs,Ee=me.cb,Be=me.thisArg;Ee.call(Be,{elements:s.state.elements});break;case C:var ge=R.eventArgs,ne=ge.node,oe=ge.parentNode;oe?oe.appendChild(ne):s.state.elements.wrapper.appendChild(ne),s.state.visibleNodes=[].concat(U(s.state.visibleNodes),[{type:S,node:ne,parentNode:oe||s.state.elements.wrapper}]);break;case u:var Se=s.state.visibleNodes,ae=X.speed,$=[];ae&&$.push({eventName:y,eventArgs:{speed:ae,temp:!0}});for(var he=0,Fe=Se.length;he<Fe;he++)$.push({eventName:m,eventArgs:{removingCharacterNode:!1}});ae&&$.push({eventName:y,eventArgs:{speed:s.options.deleteSpeed,temp:!0}}),Y.unshift.apply(Y,$);break;case m:var Ne=R.eventArgs.removingCharacterNode;if(s.state.visibleNodes.length){var ie=s.state.visibleNodes.pop(),Te=ie.type,ee=ie.node,Oe=ie.character;s.options.onRemoveNode&&typeof s.options.onRemoveNode=="function"&&s.options.onRemoveNode({node:ee,character:Oe}),ee&&ee.parentNode.removeChild(ee),Te===S&&Ne&&Y.unshift({eventName:m,eventArgs:{}})}break;case y:s.options.deleteSpeed=R.eventArgs.speed;break;case x:s.options.delay=R.eventArgs.delay;break;case E:s.options.cursor=R.eventArgs.cursor,s.state.elements.cursor.innerHTML=R.eventArgs.cursor}s.options.loop&&(R.eventName===m||R.eventArgs&&R.eventArgs.temp||(s.state.calledEvents=[].concat(U(s.state.calledEvents),[R]))),s.state.eventQueue=Y,s.state.lastFrameTime=w}}})),B)if(typeof B=="string"){var fe=document.querySelector(B);if(!fe)throw new Error("Could not find container element");this.state.elements.container=fe}else this.state.elements.container=B;z&&(this.options=T(T({},this.options),z)),this.state.initialOptions=T({},this.options),this.init()}var A,O;return A=N,(O=[{key:"init",value:function(){var B,z;this.setupWrapperElement(),this.addEventToQueue(E,{cursor:this.options.cursor},!0),this.addEventToQueue(u,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(B=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(z=document.createElement("style")).appendChild(document.createTextNode(B)),document.head.appendChild(z),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(B){this.options.devMode&&console.log(B)}}])&&M(A.prototype,O),Object.defineProperty(A,"prototype",{writable:!1}),N})()},9935:t=>{t.exports=function(){return!1}}},de={};function L(t){var o=de[t];if(o!==void 0)return o.exports;var e=de[t]={id:t,loaded:!1,exports:{}};return re[t].call(e.exports,e,e.exports,L),e.loaded=!0,e.exports}L.n=t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return L.d(o,{a:o}),o},L.d=(t,o)=>{for(var e in o)L.o(o,e)&&!L.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:o[e]})},L.g=(function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}})(),L.o=(t,o)=>Object.prototype.hasOwnProperty.call(t,o),L.nmd=t=>(t.paths=[],t.children||(t.children=[]),t);var ue={};return(()=>{L.d(ue,{default:()=>C});var t=L(9155),o=L.n(t),e=L(9905),r=L(2404),i=L.n(r);function a(y){return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(x){return typeof x}:function(x){return x&&typeof Symbol=="function"&&x.constructor===Symbol&&x!==Symbol.prototype?"symbol":typeof x},a(y)}function n(y,x){for(var E=0;E<x.length;E++){var j=x[E];j.enumerable=j.enumerable||!1,j.configurable=!0,"value"in j&&(j.writable=!0),Object.defineProperty(y,g(j.key),j)}}function c(y,x){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(E,j){return E.__proto__=j,E},c(y,x)}function p(y){if(y===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y}function u(){try{var y=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch{}return(u=function(){return!!y})()}function m(y){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(x){return x.__proto__||Object.getPrototypeOf(x)},m(y)}function g(y){var x=(function(E){if(a(E)!="object"||!E)return E;var j=E[Symbol.toPrimitive];if(j!==void 0){var S=j.call(E,"string");if(a(S)!="object")return S;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(E)})(y);return a(x)=="symbol"?x:x+""}var h=(function(y){(function(b,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function");b.prototype=Object.create(v&&v.prototype,{constructor:{value:b,writable:!0,configurable:!0}}),Object.defineProperty(b,"prototype",{writable:!1}),v&&c(b,v)})(S,y);var x,E,j=(function(b){var v=u();return function(){var T,U=m(b);if(v){var P=m(this).constructor;T=Reflect.construct(U,arguments,P)}else T=U.apply(this,arguments);return(function(M,F){if(F&&(a(F)=="object"||typeof F=="function"))return F;if(F!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return p(M)})(this,T)}})(S);function S(){var b,v,T,U;(function(q,V){if(!(q instanceof V))throw new TypeError("Cannot call a class as a function")})(this,S);for(var P=arguments.length,M=new Array(P),F=0;F<P;F++)M[F]=arguments[F];return v=p(b=j.call.apply(j,[this].concat(M))),U={instance:null},(T=g(T="state"))in v?Object.defineProperty(v,T,{value:U,enumerable:!0,configurable:!0,writable:!0}):v[T]=U,b}return x=S,(E=[{key:"componentDidMount",value:function(){var b=this,v=new e.default(this.typewriter,this.props.options);this.setState({instance:v},(function(){var T=b.props.onInit;T&&T(v)}))}},{key:"componentDidUpdate",value:function(b){i()(this.props.options,b.options)||this.setState({instance:new e.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var b=this,v=this.props.component;return o().createElement(v,{ref:function(T){return b.typewriter=T},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&n(x.prototype,E),Object.defineProperty(x,"prototype",{writable:!1}),S})(t.Component);h.defaultProps={component:"div"};const C=h})(),ue.default})()))})(te)),te.exports}var Ve=ze();const qe=Ie(Ve),Xe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAA9CAYAAAAQyx+GAAAABGdBTUEAALGPC/xhBQAABFpJREFUeAHtmmtIVEEUgM9dd5WotBTZ2DULH2mG9LCH9tQeakllPypSgiAhogdW0I/C0oQECbOSCqIHUQr1wwqKVMJMS0yLygpCtLLdTf1jbW252nq7szK6y+7N2esud2ebgWXmnjvnzDnfnZk7O3cAWGIEGAFGgBFgBBgBRoBOAty/3J46LylNp+9++K86tN4L06rTv7xsrBLzXyF243+XK0kARE6fBqWFeSRVvb5Obl4htH/6PKqfRGAmBQVCxpqUUY3RUCH/1BkiN4nAYEt1jU2QsikLX1KV11aWw4qkRcQ+szlGBJVLPQbboGnOIZ1TcGw4lwSGpjmHdE7BQHAuCQxW9qa8U2cAc3+/g0tm85BMZ+iCto5PgK9Npj5tgDZ2BlLgBjnzb8P7To7jeGyAajB9fWY4cvIUXKm4DcYfP3BMTvPtew7ayXu/fb9sK1BMiTIq1FFXNKrQIzpd42+qwWTu2AXVj+tt4xtDmQ/kgc/VD3THCUbSqAVz92HNMJS8g/tgy4Z14O/vLwlMvzAEb917AIUl55B+qp8maiO1YBqaWqwQliycDwWHcyUBsVUqEKabR/XP4FnzC+AH+WXUrmMMXT3WuMK1Gtv4xlSeFqYd0udBQy2YMREgUGZgRCAxMN4KpuzyddDOTrL+UNlbkqxvpafPW2D/0YJhFqg8Nz4O0JtG7iTrUGp53eoQf9PL1w4yOQSyglnqpGckJsyRg4NDm7KCSZgdD2VFI0Pp2KH9sHhBgoOTcghkBYMCzlg9smWavnK5HAyctik7GKdeeYFQdjBo00ulUllRhIYEewGSIRdkBxMUOBHuXLsIFRfPANoydWeyWCzW5UBI7DyYuXQNVNU+ITYv6zoGe7l2VTIuujU/f/UG4EWjsDEFm3P2wsfmOggJnjxqO7L3mFE9HEOF5ldv7LR/mkzw7kObnUzswqfBLEtcYBf3hPHjYVZMtJ1M7MKnweRkb4Wd2VuGY7954TTRMEIKPg1G2PWHtSuTUZzWlJ5Cvk7yaTAYiJTc58HgtdHkSUGgVJK/hMlrSsHuBTpoAr5UUgQxkRGAhhZpkgTm23cj3K+pJW3DI/X0X7uJ7e7MGpmASZUkgUEHb9ZvzyFtg8p6Pj/HSH0qLvUYdPBmsKtdaltu1cvefQAqKu+51aatMWVAWET0nwG/GFshLvf2/pyLygZhPOcXkx3Rwrqezlvff/BYE8I37AnKgT+QxYMl31krpl8mq/hrTw+cKDnrrIqvyqazOUbk0SoHuzrQpiv6UZUU6shyoctv84TTHHBvWY8RIcvAMDAiBETE9PYYDgwopk69NRMJzzXxZ51+SEGw7dICz7VmPFubU0ADb4FD6Pv38eJStxw1Q6epUOIUXD35303PxinJOqeOqBIUUyUpiytV890dafQOJSEwrUqdyYGiVHjGRvE4Se9wRmQL2UQaVPcYHDLP89w4TVw4r+ADsMyV3NkBaFf0WV1GgBEQJfAX8S4bCLs1i8wAAAAASUVORK5CYII=",He="data:image/png;base64,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",Ze="data:image/png;base64,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",_e="/assets/graphic-2@2x-o9q-Ivx4.png",$e="data:image/png;base64,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",et="/assets/graphic-3@2x-DFvq1ZvH.png",tt="/assets/graphic-4-DEP80msl.png",rt="/assets/graphic-4@2x-BSxi8HUF.png",nt="/assets/main-graphic-BH5TrvAQ.png",ot="/assets/main-graphic@2x-DrmctVov.png",ve="/assets/open-source-u8EY6AMF.png",ye="/assets/open-source@2x-q94tbrLH.png",at="data:image/png;base64,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",it="data:image/png;base64,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",st="data:image/png;base64,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",ct="/assets/step-1@2x-BnC6LKQH.png",lt="data:image/png;base64,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",pt="/assets/step-2@2x-Cv5N9IX7.png",dt="data:image/png;base64,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",ut="/assets/step-3@2x-0j47Yci1.png",ft="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAtBQTFRFAAAAmcwzc7sEc7oEcroFcroEcroEcroEcroEcroEcroEcroEcroEcroEc7sEc7wEmcwzc7sEc7oEcroEcroEcroEc7oEc7sFe70JcrsFcroEcroEcrsFe70JgP+AcrsFcroEcrsFgP+AdbsHcroEc7oEdrwIc7oFcroEcroEc7oFgL9AcrsFdbsIl8xGt9t+zeam1+u33O7B3O7A1uu2y+WitNp6k8o/dLsHc7sFgL8QcroEdbsJp9Ri2u2++fz1////9/vx1uu3oNFXc7oFgL8Qt9yA8vjo+vz22ey8v9+NrddtptRip9RjrtdvweGS/P357fbfsNhydLsIc7oFqv9Vnc9R7ffg9/vwvt+NkMk6drwKd70OlMpAxOKX5/PVc7sFc7sHxeOY/v79rddseb0QfL8WtNp5/f78u96Gc7oGc7oFeL0P3u/EyeSffb8YgsIh1Oqz0+mxdrwLdbsH5fLR/P77pNJecroFr9dw2+2/crsEns9S+/340eiucrwFoNBVc7oEtdp8j8g3c7sF2e29croEgsIiotJac7sEdrwMrNZszOajyuWhwuGT6/Xcc7sFlMtB8fjn7PXdicUulctDcrsEg8Ii9vvv8vjn0+qyyOSec7sEtdp6n9BV9vrw6/Xb4fDJi8YwcrsF8Pjl6vXa5vPToNBWcrsEcroE3+/G0Oisc7oEqtVomc1KyOSdcroF1OqyxuOZc7oFweGRc7oE0umvc7sGwuGSc7oErtdupdNfcroFsdl1croE6PPWcrsEer4S/f77iMUrcrsF8/nqc7sFsdhznM5O2Oy6c7wEgcIgkck7crsEf8Acq9ZrqdVme74UyeSe5PLPc7sFisYvnc9Qc7sF4vHL2+7AcroEwOCQcrsFrdZu/v/9c7oEe70JxOKWcrwFzeancrsEcroEdrwIc7oFpdNe2Oy5c7sFc7oF9vvwgL8Qc7oFcrsEbX1x6QAAAPB0Uk5TAAI7hq7N5fD7+e/kyqt/MwFRtPH/7KxGCoDn33IGAXXtYwAz0sUjcPbyWgGi////////////////iwa3//////////+iBP//////////////////nwH/////////////hv////////////9Q//////////8i////////u////1L/5P//Wf/b//82////////j///////6f//////J////////4X/////tOb//9n////p//////j////3///n/9b/sP///4H/Vf///yL//+L///////+E//8v///P/0///9gE/0X/qesXQP//b4b/A1HXxFysvQAABCZJREFUeJyNlvdfFEcYxseGBcupaxeNxhIkNuS4U9F97IqiKBZU7AbOi6KoXFA5K6Am4Syx9xa70Qgae8OSWCL2GlssiUb9F7I7M7vs3O0dvL+87/vM+/3s7HRCfK1Y8RIlSwWVLlO2XHD5ChUrWUxKfJnKVapKglWrXqMwsmat2pKJ1akbEgCqV/8LM0i1oAYN/VFfNvIHqda4iTnV9KtAlCSFNjOBwr42VDRv0bJV6/A2EdZIm90gtw3zptq11xujOnSUoVunzl0KyK7dvL6lU1HdeyjFPXtF9+4T07dfeKyS9B8Qp7UOHCRgeg8HDwHihw4bruUJI0Yqnx5l0/LRwmhwcczYcYgf/404FIlJMhwTnDz71jDyfAwnTgKSJ/uO4ZQUYOo0Pp7T9Vnm8zUxFa7vfCHF0mY4MJNzs7R5r897OAmyzZRSLN2N2byfcxhVk6+osXD5pSRprgNJLJrH1mctlg0eB/MecpsPxwIWZahUMbbmo4YgORAlpWUilc1flrqPKjO1O+JNxtBoC2UsYtFiBavCPtYD44Wi73/4MTsmSpA8WMLW2VKlj2wvd0C8MMvLlqsL8qcVRi1RxkoarLKQ4kzqiKHGitVr2EJeK3R8HdazYAMpQX1zGcOMBVZtA2w0qpuwmfUyg5SkvgV6DjcWbNGwrUY1IRbbaLCdlKK+JXoJf79Dw34W5J3YRf1usof6VogW2vdq2D5BTkEk9ftJaepbo7fQfkDDfhHkg/BQf4iUoT4cfYT2tF8ZdThHkHNhpf4IKUt9G8QI7ZL9qEpF/yaqx5BN/XFSjvoInBALpGgVO+klJiOX+lMkmHor+hUFi8Bp6s+Q8tRHIrwo2FmkU3+OVKDehtiEwrHzF5BHg4ukIvX2ThhROHYSl9jBcJlUYkpnjBRLrqjY76L2B5826SqxVKNBF8iJQkniWmCLeGJec+M6DW4o27s662V/7YTR7M+b+bdE5TbusD7eVXZ3DaYNgDxFCmj33LjPogcKZqlDw7hRSEkLROU8xCO2aB7Tq7wuk20OzAiEPYGLjb70lJ6TIUEsmwBHun/qr2fIZ9HzF+xYbsBS51S45/qlXHjJd8Mrfgc0bMzyaTPhmG/6fzlPnuFvfvq91p8MTUI5NxvIXOhL3XsIvOTUm7cFF1wz3u5MckD2iPMuXbvthitf26/vjNdpW61mQSogr9ukr+vz//zrBh7lafl78crvqulxi5YoizF2Z8rB3GPJEWcvKMmd+/om/+D1xOg2UO+UfeX6/woeGJc8151604ePxMvCRht+x75tV6THmp17Oj3PaZDf+zxnFPsU6juGRnvzzgRSbPqsQNTrt+aUMu9zgv1Bz1/5fRgqFpKRZQY9fvoiAKSaZfHSVSJz4+6DIj2XLRsytu/ef+jI8VOfz128fNWM+R/J7aDOMmQI6AAAAABJRU5ErkJggg==",xt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABsCAMAAAC4uKf/AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAelQTFRFAAAA////csEJdLwIcrwFc7sFcrsEc7oFcrsFcroFc7sEc7oEmcwzcr0Ec7sEcrsEc7oEcroEgMYOcrsFcrsEcrsEc7oFdLsGc7sEecIMcroGe70JcrsFcroEdMUMc7sFgP+AcrsEc7wFcrsFdroFdLsGc7oEd7sJcrsFcroHc7oEc7wGdrwLisUvlctDnc9QpNJdq9ZqgL9Ac7sFeb0Qm85Nvt+M1+u57fbf/f79////jsYcc7oEhcMnuNyB4O/H/P37gL8QcroFeb0R3u/Ffb8Xut2E9vrw+vz28vnper4Tv9+N+Pz08fjmzuept9t/odFYi8Yyc7oGe74Uqv9VpdNg2Oy6rdZtiMUsh8Qq3O7B6PPWstl3gMEd+Pvz4fDKnc9Rc70IdrwMyOSdmc1Js9p5dLsIg8Ii6fTZ3u/EicUu8Pfl/v7+vd6JdLsHnM5O9PnskMg67/fjiMQrcroFc7wGut2FhMIkfsAaudyC5fLRs9l40Oirx+OcoNBW4PDI6/XbrNZslstEwOCP1eq11Oq02ey8c7oEwuGSyOSec7sFisYwo9JcotFadbsJ9/vxttt+ttt93e7C4vDLf8Ab6/XcgMEeer4S0umw8/nr8vjo8fjnz+eqnM5PqtVo7fbgfb8Yh8Qpstl2fjtq6QAAAKN0Uk5TAAEdRGuStcXS3+z5BTp8vvT/Emm382hPrRWGG4/1FpcC7zXLNIv9HsdO7oX///////8Env////////8Jsv////8QxP//////////////////////A////////////////x////////////////////////+YUP//////////////////////tv//xv///////////////////////////////7ZbNuIAAAYqSURBVHicvVr3Q9s4FDYbkjDEKHsfs6ywSctomQmbHqtsKNCW3Ra6C3Qcd3B7dVzHXf/S83NikGxJthLw95vf0Bcrz09P0pMk8wgKDgkNC4+IjLLZ7baoyIjwsNCQ4CCBAczCER0TG4coiIuNiXacJ1N8QmISjUhFUuKl+PNhciSn2HlMXthTkgN/v9Q0mzGTF7a01ICo0jMyzVIBMjPS/abKyjYxf5rZzM7yiyonIVeUCpCbkCPOlZfvDxUg/xtBKkdBob9cCBUWCAVmUbH/VIDiIvNcJaWBcSFUWmKW6zJvmLLyisoqp7OqsqK8jGd32RRVdQ3Lv7auvqGxyXWKpsaG+rpalnVNtTHXlat03+aW1jYXBW2tLc10j6tXjLiuXaf5tTs7aEQqOpztNK/r1wzei8bV2dVNDt7jdveQku6uThob992qKXPo6e07HbN/YHBo2DMC4pEbw0ODA/2nqr5eD2Umv+WQUWJj1K2Gw9j4hF49MT6mhox7VK+uYXPpY37ypm+kqekZyjwpmJme8hndnNQpmV9Aic60atY7ytw8i8mL+Tmv3WyVTsX4uhe0eWNxyfdWt/hUgFu+t1ta1ChKqZnLoc2Hnd6f27e8YsyF0MqyN47mtGFZTMvKBRqj1duK851VM1SKwx3F4bbWoUDPladZU+6ugef6xqZZLoQ2N9bBZ+0uKS7M03LlaNbKVYWrb8s8FWBLmco1zbvl52jIEkh9pzKH2ztiXAjtbCszqfnfEkiuLLLeWFRi4959US6E7t9TooSMyVyyCnpAuigxv+0Hl8ymvNsSKczGudLJmq1K+b92/OGSZ1L538iv247XkxmEahLyxrpgbJxhC2JylsxcGWdcqWTdq+TDDX+5ENpQ8iQhyjyrzNMIxajyLQt8X1psKl83uQaknSYqYu/ggTWlz3TeoGEV/jY3sb7Z1KS1S1j2ws9aDoQLoWUYo5cQJfvIUnBhJ/yqKVO5l40VWAP6iE87xcsVT8T9HvwogzWl7OFDbs0orzgwShcuscfrM1U71DZzvHEePX4CIz15/IhnBSmom6i5vDkrERc5YSDeuvx0Vi1xZp9yzObBwolLEpVYJPbmUB9OscdYeebC8Izz18K/1oELkiAeo3FJM4wxzR7iuYvAc7blNOiJWjlaJovBBS2yRROzjkIvXBq8YJrOQIXXgktiZLJYXLAvW4wxB9g80JIdsBPNmKxuxQWxkhSEn9vUwt7hkOn/Usvlcr1kGh/K2jZ8jxMXJAXjBnXgT6l7fXilJ3vFNJ4AdR0uCZZC8Md6Wd/PdEev9WSv2dawD6jHBSFSKP7YIOsH2O5zejLO9z8gqxtwQagUhj82yvpBtvsbPdl3bOtBWd2IC8KkI+ypDMJ1iO3+vZ7sB7b1kKxuwnPokXSMPZ2A+zDb/Uc92U9s62HQn2CCYykSe6oANWVPp+Jnt5brF+r+1gsPGFRggkgpCnuqBPUI2x39qiX7jWM8AgaVmCBKwksCKOF6OO5o83eS6w/usgb7bryks0n4ygnri5vnjv78C+c6+JtrDJPuxJ7tgmTo7bszrndv+bZ6MqFpBLxXud4bWeqnUShAAB9Usg8GhpQAEQl9MbIb+tCPwJ7KDT5qMTLloy7HBBFSOPZklK7EyHTpKlwoEYuRURKxyBIjRkZZYkQWTzGyf1y6xVOkLBAio5UFIgWPENm4S1/wiJRyQmS0Uk6oSAWc1o4HXDN6kSpUfsv4qJJ95JrRy2+hjYWMTyrZJ64ZfWMhuGU63VxwNhWIuWUS3Qwi9PmLy/XlM99Gvxm85Oc2F/1LO1jHwdzmWrqBl5IJwws+mrD00MXS4yRrD8ou4gjwP0KGHQFae7gpZZMOF3psa+2BtKVH7dZeIlh6PWLtxY+1V1pSkYWXddZeQ/IvWL+yL1i/+nPBanR1fEi7Oj709+pY6FLcY+ZSnNvMQL/u3zO+7t8Tv+63tpGB16KxT2/R2Pe/RcPa5hPJqK3mRG2rOTmHthrJ2oYhSVoItBVqwTyXtU1eUkDta5T1ywhWNubJyHpgWcshwMJmSoCFbaIAx665Btjdc2rwNW7tTTin1l4vrGta9kFpxz46Vtuxj4Xbsf8HdOj2IeCOqF0AAAAASUVORK5CYII=",pe=Je("#1683fb","#1683fb","#ffffff","#0576f1","#0576f1","#ffffff"),J={smMaxWidth:767,mdMinWidth:768,mdMaxWidth:1048,lgMinWidth:1049,lgMaxWidth:1365,xlMinWidth:1366},f={sm:`@media (max-width: ${J.smMaxWidth}px)`,smmd:`@media (max-width: ${J.mdMaxWidth}px)`,md:`@media (min-width: ${J.mdMinWidth}px) and (max-width: ${J.mdMaxWidth}px)`,mdlg:`@media (min-width: ${J.mdMinWidth}px) and (max-width: ${J.lgMaxWidth}px)`,lg:`@media (min-width: ${J.lgMinWidth}px) and (max-width: ${J.lgMaxWidth}px)`,lgxl:`@media (min-width: ${J.lgMinWidth}px)`,xl:`@media (min-width: ${J.xlMinWidth}px)`},be=we.memo(()=>{const G={strings:["private files.","confidentials.","secrets."],autoStart:!0,loop:!0,delay:70,deleteSpeed:50,pauseFor:1500};return l.jsx("span",{className:d`
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
      `,children:l.jsx(qe,{options:G})})});be.displayName="TypingText";const mt=we.memo(()=>{Ke();const K=Ue();return l.jsxs("div",{className:d`
        display: flex;
        flex-direction: column;
        align-items: center;
      `,children:[l.jsxs("div",{className:d`
          width: 100%;
          padding-top: 20px;
          padding-bottom: 20px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 30px;

          ${f.sm} {
            padding-left: 15px;
            padding-right: 15px;
            padding-top: 7px;
            padding-bottom: 15px;
          }

          ${f.md} {
            padding-top: 20px;
          }

          ${f.mdlg} {
            padding-left: 28px;
            padding-right: 28px;
          }

          ${f.xl} {
            width: 1280px;
          }
        `,children:[l.jsx(ke,{}),l.jsx("div",{className:d`
            display: flex;
            align-items: center;
          `,children:l.jsx(ce,{href:"/login",className:se(pe,d`
                font-size: 16px;
                padding: 12px 19px;
                font-weight: 700;
                width: 131px;
                line-height: 22px;

                ${f.sm} {
                  font-size: 14px;
                  padding: 7px 6px;
                  width: inherit;
                  line-height: 22px;
                  width: 103px;
                }

                ${f.md} {
                  line-height: 12px;
                }
              `),children:"Get started"})})]}),l.jsxs("div",{className:d`
          display: flex;
          flex-direction: row;
          margin-bottom: 70px;

          ${f.sm} {
            padding-left: 15px;
            padding-right: 15px;
          }

          ${f.smmd} {
            flex-direction: column;
            max-width: 556px;
          }

          ${f.mdlg} {
            padding-left: 28px;
            padding-right: 28px;
          }

          ${f.lg} {
            width: 100%;
          }

          ${f.xl} {
            width: 1280px;
          }
        `,children:[l.jsxs("div",{className:d`
            display: flex;
            flex-direction: column;
            flex-grow: 1;
          `,children:[l.jsxs("h1",{className:d`
              font-size: 64px;
              line-height: 1.08;
              font-weight: 700;
              color: #011722;
              margin: 0 0 36px;

              ${f.sm} {
                font-size: 51px;
                margin: 0 0 26px;
              }

              ${f.md} {
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
            `,children:["One vault for all",l.jsx("br",{}),l.jsxs("span",{className:d`
                font-weight: 800;
              `,children:["your ",l.jsx(be,{})]})]}),l.jsx("p",{className:d`
              font-size: 18px;
              color: #011722;
              margin: 0 0 38px;

              ${f.sm} {
                font-size: 14px;
                margin: 0 0 26px;
              }

              ${f.lgxl} {
                width: 565px;
              }
            `,children:"Powerful, open source, client-side, zero-knowledge encryption. Unlock enhanced security for your most sensitive files with Koofr Vault."}),l.jsx(ce,{href:"/login",className:se(pe,d`
                font-size: 18px;
                padding: 9px 21px;
                font-weight: 700;

                ${f.smmd} {
                  width: 100%;
                }

                ${f.lgxl} {
                  width: 500px;
                }
              `),children:"Get started"}),K.appStoreUrl!==void 0||K.googlePlayUrl!==void 0||K.fDroidUrl!==void 0?l.jsxs("div",{className:d`
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                gap: 20px;
                margin-top: 32px;

                ${f.smmd} {
                  justify-content: center;
                }
              `,children:[K.googlePlayUrl!==void 0?l.jsx("a",{href:K.googlePlayUrl,target:"_blank",rel:"noreferrer",children:l.jsx(k,{image:Re,image2x:Pe,width:122,height:36})}):null,K.appStoreUrl!==void 0?l.jsx("a",{href:K.appStoreUrl,target:"_blank",rel:"noreferrer",children:l.jsx(k,{image:We,image2x:Me,width:117,height:36})}):null,K.fDroidUrl!==void 0?l.jsx("a",{href:K.fDroidUrl,target:"_blank",rel:"noreferrer",children:l.jsx(k,{image:Le,image2x:Ye,width:123,height:36})}):null]}):null]}),l.jsx("div",{className:d`
            ${f.smmd} {
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 38px 0;
            }

            ${f.lgxl} {
              padding: 25px 33px 0;
              flex-shrink: 0;
            }
          `,children:l.jsx(k,{image:nt,image2x:ot,width:480,height:338,classNameForSize:(G,D)=>d`
              ${f.sm} {
                background-size: 290px ${290*D/G}px;
                width: 290px;
                height: ${290*D/G}px;
              }

              @media (min-width: 1000px) and (max-width: 1049px) {
                background-size: ${G*.6}px ${D*.6}px;
                width: ${G*.6}px;
                height: ${D*.6}px;
              }

              @media (min-width: 1050px) and (max-width: 1169px) {
                background-size: ${G*.7}px ${D*.7}px;
                width: ${G*.7}px;
                height: ${D*.7}px;
              }
              @media (min-width: 1170px) and (max-width: 1271px) {
                background-size: ${G*.8}px ${D*.8}px;
                width: ${G*.8}px;
                height: ${D*.8}px;
              }
            `})})]}),l.jsxs("div",{className:d`
          display: flex;
          flex-direction: column;
          margin-bottom: 107px;

          ${f.sm} {
            padding-left: 15px;
            padding-right: 15px;
          }

          ${f.smmd} {
            max-width: 556px;
          }

          ${f.mdlg} {
            padding-left: 28px;
            padding-right: 28px;
          }

          ${f.lg} {
            width: 100%;
          }

          ${f.xl} {
            width: 1280px;
          }
        `,children:[l.jsx("h2",{className:d`
            font-size: 30px;
            font-weight: 700;
            color: #011722;
            margin: 0 0 23px;
          `,children:"Extra strong protection"}),l.jsxs("p",{className:d`
            font-size: 18px;
            color: #011722;

            ${f.smmd} {
              margin: 0 0 50px;
            }

            ${f.lgxl} {
              width: 500px;
              margin: 0 0 32px;
            }
          `,children:["Koofr Vault is an open source, client-side, zero-knowledge encrypted storage application by"," ",l.jsx("a",{href:"https://koofr.eu",target:"_blank",rel:"noopener",children:"Koofr cloud storage"}),". It's like having a box with a unique lock in your trunk: an extra layer of security to protect your files."]}),l.jsxs("div",{className:d`
            display: flex;

            ${f.smmd} {
              flex-direction: column;
              align-items: center;
            }

            ${f.lgxl} {
              flex-direction: row;
              justify-content: space-between;
            }
          `,children:[l.jsxs("div",{className:d`
              display: flex;
              flex-direction: column;
              width: 286px;

              @media (min-width: 1000px) and (max-width: 1069px) {
                width: 250px;
              }

              @media (min-width: 1070px) and (max-width: 1170px) {
                width: 250px;
              }
            `,children:[l.jsx("div",{className:d`
                height: 150px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-bottom: 22px;
              `,children:l.jsx(k,{image:st,image2x:ct,width:70,height:86})}),l.jsx("h3",{className:d`
                font-size: 18px;
                font-weight: 600;
                color: #011722;
                margin: 0 0 10px;
              `,children:"Private Safe Key"}),l.jsx("p",{className:d`
                font-size: 18px;
                color: #011722;
                margin: 0;
              `,children:"Choose a Safe Key to create a Safe Box in your Koofr Vault."})]}),l.jsxs("div",{className:d`
              display: flex;
              flex-direction: column;
              width: 286px;

              @media (min-width: 1000px) and (max-width: 1069px) {
                width: 250px;
              }

              @media (min-width: 1070px) and (max-width: 1170px) {
                width: 250px;
              }
            `,children:[l.jsx("div",{className:d`
                height: 150px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-bottom: 22px;
              `,children:l.jsx(k,{image:lt,image2x:pt,width:70,height:86})}),l.jsx("h3",{className:d`
                font-size: 18px;
                font-weight: 600;
                color: #011722;
                margin: 0 0 10px;
              `,children:"It all stays in your browser"}),l.jsx("p",{className:d`
                font-size: 18px;
                color: #011722;
                margin: 0;
              `,children:"Your Safe Box files are encrypted or decrypted on demand, on your device."})]}),l.jsxs("div",{className:d`
              display: flex;
              flex-direction: column;
              width: 286px;

              @media (min-width: ${J.lgMinWidth}px) and (max-width: 1069px) {
                width: 210px;
              }

              @media (min-width: 1070px) and (max-width: 1170px) {
                width: 250px;
              }
            `,children:[l.jsx("div",{className:d`
                height: 150px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-bottom: 22px;
              `,children:l.jsx(k,{image:dt,image2x:ut,width:70,height:86})}),l.jsx("h3",{className:d`
                font-size: 18px;
                font-weight: 600;
                color: #011722;
                margin: 0 0 10px;
              `,children:"Only you have access"}),l.jsx("p",{className:d`
                font-size: 18px;
                color: #011722;
                margin: 0;
              `,children:"Cloud content is encrypted and never accessible without your Safe Key."})]})]})]}),l.jsxs("div",{className:d`
          width: 100%;
          display: flex;

          ${f.sm} {
            padding-left: 15px;
            padding-right: 15px;
          }

          ${f.smmd} {
            flex-direction: column-reverse;
            align-items: center;
            margin-bottom: 120px;
          }

          ${f.mdlg} {
            padding-left: 28px;
            padding-right: 28px;
          }

          ${f.lgxl} {
            flex-direction: row;
            align-items: center;
            margin-bottom: 120px;
          }

          ${f.xl} {
            width: 1280px;
          }
        `,children:[l.jsx("div",{className:d`
            width: 60%;
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-grow: 1;
          `,children:l.jsx(k,{image:tt,image2x:rt,width:356,height:414,classNameForSize:(G,D)=>d`
              ${f.sm} {
                background-size: 290px ${290*D/G}px;
                width: 290px;
                height: ${290*D/G}px;
              }
            `})}),l.jsxs("div",{className:d`
            display: flex;
            flex-direction: column;
            max-width: 500px;
            flex-shrink: 0;
          `,children:[l.jsx("h2",{className:d`
              font-size: 30px;
              font-weight: 700;
              color: #011722;
              margin: 0 0 22px;
            `,children:"For your eyes only"}),l.jsx("p",{className:d`
              font-size: 18px;
              color: #011722;
              margin: 0 0 32px;
            `,children:"Your files are encrypted, file names and all content included, locally on your device with your Safe Key and some magic salt before they are sent to your Vault."}),l.jsxs("p",{className:d`
              font-size: 18px;
              color: #011722;
              margin: 0 0 32px;

              ${f.smmd} {
                margin: 0 0 70px;
              }
            `,children:["Neither your Safe key nor any other unencrypted file data or metadata is sent to or stored by"," ",l.jsx("a",{href:"https://koofr.eu",target:"_blank",rel:"noopener",children:"Koofr"}),". Only you can decrypt and access your Vault files."]})]})]}),l.jsx("div",{className:d`
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #011722;

          ${f.smmd} {
            padding: 60px 0 60px;
          }

          ${f.lgxl} {
            padding: 111px 0 120px;
          }
        `,children:l.jsxs("div",{className:d`
            display: flex;

            ${f.sm} {
              padding-left: 15px;
              padding-right: 15px;
            }

            ${f.smmd} {
              flex-direction: column;
              max-width: 556px;
            }

            ${f.mdlg} {
              padding-left: 28px;
              padding-right: 28px;
            }

            ${f.lg} {
              width: 100%;
            }

            ${f.lgxl} {
              flex-direction: row;
              justify-content: space-between;
            }

            ${f.xl} {
              width: 1280px;
            }
          `,children:[l.jsx("div",{className:d`
              display: flex;
              flex-direction: column;
              flex-grow: 1;

              ${f.smmd} {
                align-items: center;
                margin-bottom: 40px;
              }

              ${f.lgxl} {
                margin-top: 71px;
              }

              @media (min-width: ${J.lgMinWidth}px) and (max-width: 1249px) {
                display: none;
              }
            `,children:l.jsx("a",{href:"https://github.com/koofr/vault",target:"_blank",rel:"noreferrer",children:l.jsx(k,{image:ve,image2x:ye,width:308,height:150})})}),l.jsxs("div",{className:d`
              display: flex;
              flex-direction: column;
              flex-shrink: 0;

              ${f.lgxl} {
                width: 500px;
                margin: 0 40px;
              }
            `,children:[l.jsx("h2",{className:d`
                font-size: 30px;
                font-weight: 700;
                color: #f4f5f5;
                margin: 0 0 22px;
              `,children:"Fully open source"}),l.jsxs("p",{className:d`
                font-size: 18px;
                color: #f4f5f5;
                margin: 0 0 32px;
              `,children:["Koofr Vault is"," ",l.jsx("a",{href:"https://github.com/koofr/vault",target:"_blank",rel:"noreferrer",className:d`
                  ${le} {
                    color: #f4f5f5;
                    text-decoration: underline;
                  }
                `,children:"open source"}),", so you can always check that the code does exactly what is promised - and nothing more. File encryption is performed using NaCl SecretBox, which uses XSalsa20 cipher and Poly1305 for ensuring integrity."]}),l.jsxs("p",{className:d`
                font-size: 18px;
                color: #f4f5f5;

                ${f.smmd} {
                  margin: 0 0 50px;
                }

                ${f.lgxl} {
                  margin: 0 0 78px;
                }

                @media (min-width: ${J.lgMinWidth}px) and (max-width: 1249px) {
                  margin: 0 0 0;
                }
              `,children:["It is compatible with"," ",l.jsx("a",{href:"https://rclone.org",target:"_blank",rel:"noreferrer",className:d`
                  ${le} {
                    color: #f4f5f5;
                    text-decoration: underline;
                  }
                `,children:"rclone"}),". This means that you can download your encrypted files and decrypt them locally using the rclone command-line tool."]})]}),l.jsxs("div",{className:d`
              display: flex;
              flex-direction: column;

              ${f.smmd} {
                align-items: center;
              }

              ${f.lgxl} {
                justify-content: flex-end;
                align-items: flex-end;
                flex-grow: 1;
              }

              @media (min-width: ${J.lgMinWidth}px) and (max-width: 1249px) {
                align-items: center;
              }
            `,children:[l.jsx("div",{className:d`
                display: none;

                @media (min-width: ${J.lgMinWidth}px) and (max-width: 1249px) {
                  display: flex;
                  margin: 0 22px 30px 0;
                }
              `,children:l.jsx("a",{href:"https://github.com/koofr/vault",target:"_blank",rel:"noreferrer",children:l.jsx(k,{image:ve,image2x:ye,width:308,height:150})})}),l.jsxs("div",{className:d`
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                border: 1px solid #565656;
                width: 288px;
                height: 152px;
              `,children:[l.jsx("a",{href:"https://github.com/koofr/vault",target:"_blank",rel:"noreferrer",className:d`
                  margin: 0 23px;
                `,children:l.jsx(k,{image:ft,image2x:xt,width:54,height:54})}),l.jsx("a",{href:"https://rclone.org/",target:"_blank",rel:"noreferrer",className:d`
                  margin: 0 23px;
                `,children:l.jsx(k,{image:at,image2x:it,width:55,height:52})})]})]})]})}),l.jsxs("div",{className:d`
          display: flex;

          ${f.sm} {
            padding-left: 15px;
            padding-right: 15px;
          }

          ${f.smmd} {
            flex-direction: column;
            max-width: 556px;
            padding-top: 60px;
            padding-bottom: 60px;
          }

          ${f.mdlg} {
            padding-left: 28px;
            padding-right: 28px;
          }

          ${f.lg} {
            width: 100%;
          }

          ${f.lgxl} {
            flex-direction: row;
            justify-content: center;
            padding-top: 76px;
            padding-bottom: 76px;
          }

          ${f.xl} {
            width: 1280px;
          }
        `,children:[l.jsxs("div",{className:d`
            display: flex;
            flex-direction: column;
            align-items: center;

            ${f.smmd} {
              margin-bottom: 50px;
            }

            ${f.lgxl} {
              width: 350px;
            }
          `,children:[l.jsx("div",{className:d`
              width: 150px;
              height: 112px;
              border: 1px solid #d4d6d7;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin-bottom: 15px;
            `,children:l.jsx(k,{image:Xe,image2x:He,width:70,height:61})}),l.jsx("p",{className:d`
              font-size: 18px;
              font-weight: 600;
              color: #011722;
              margin: 0;
              text-align: center;
            `,children:"Client-side encryption"})]}),l.jsxs("div",{className:d`
            display: flex;
            flex-direction: column;
            align-items: center;

            ${f.smmd} {
              margin-bottom: 50px;
            }

            ${f.lgxl} {
              width: 350px;
            }
          `,children:[l.jsx("div",{className:d`
              width: 150px;
              height: 112px;
              border: 1px solid #d4d6d7;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin-bottom: 15px;
            `,children:l.jsx(k,{image:Ze,image2x:_e,width:70,height:61})}),l.jsx("p",{className:d`
              font-size: 18px;
              font-weight: 600;
              color: #011722;
              margin: 0;
              text-align: center;
            `,children:"Verifiable source code"})]}),l.jsxs("div",{className:d`
            display: flex;
            flex-direction: column;
            align-items: center;

            ${f.smmd} {
              margin-bottom: 0;
            }

            ${f.lgxl} {
              width: 350px;
            }
          `,children:[l.jsx("div",{className:d`
              width: 150px;
              height: 112px;
              border: 1px solid #d4d6d7;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin-bottom: 15px;
            `,children:l.jsx(k,{image:$e,image2x:et,width:70,height:61})}),l.jsx("p",{className:d`
              font-size: 18px;
              font-weight: 600;
              color: #011722;
              margin: 0;
              text-align: center;
            `,children:"Zero knowledge"})]})]}),l.jsx("div",{className:d`
          width: 100%;
          border-bottom: 1px solid #d4d6d7;

          ${f.smmd} {
            margin-bottom: 60px;
          }

          ${f.lgxl} {
            margin-bottom: 111px;
          }
        `}),l.jsxs("div",{className:d`
          display: flex;
          flex-direction: column;
          align-items: center;

          ${f.sm} {
            padding-left: 15px;
            padding-right: 15px;
          }

          ${f.smmd} {
            margin: 0 0 60px;
          }

          ${f.lgxl} {
            margin: 0 0 111px;
          }
        `,children:[l.jsxs("div",{className:d`
            display: flex;
            flex-direction: column;
            max-width: 500px;
          `,children:[l.jsx("h2",{className:d`
              font-size: 30px;
              font-weight: 700;
              color: #011722;
              flex-grow: 1;
              margin: 0 0 22px;
              text-align: center;
            `,children:"Unlock your Vault"}),l.jsxs("p",{className:d`
              font-size: 18px;
              color: #011722;
              margin: 0 0 43px;
              text-align: center;
            `,children:["Start encrypting your cloud storage files in just a few minutes. Included in all"," ",l.jsx("a",{href:"https://koofr.eu/pricing",target:"_blank",rel:"noopener",children:"Koofr plans"}),"."]}),l.jsx(ce,{href:"/login",className:se(pe,d`
                width: 100%;
                font-size: 18px;
                padding: 9px 21px;
                font-weight: 700;
              `),children:"Get started"})]}),l.jsxs("p",{className:d`
            font-size: 18px;
            color: #011722;
            margin: 43px 0 0;
            text-align: center;
          `,children:["Have questions about Koofr Vault?"," ",l.jsx("a",{href:"https://koofr.eu/help/koofr-vault",target:"_blank",rel:"noopener",children:"Find answers here"}),"."]})]}),l.jsx("div",{className:d`
          width: 100%;
          border-bottom: 1px solid #d4d6d7;
        `}),l.jsxs("div",{className:d`
          ${f.smmd} {
            padding: 30px 28px;
          }

          ${f.lgxl} {
            padding: 40px 28px;
          }
        `,children:[l.jsxs("p",{className:d`
            font-size: 14px;
            color: #011722;
            text-align: center;
            margin: 0 0 15px;
          `,children:["© 2026."," ",l.jsx("a",{href:"https://koofr.eu",target:"_blank",rel:"noopener",className:d`
              font-weight: 600;
              ${le} {
                color: #011722;
                text-decoration: none;
              }
            `,children:"Koofr d.o.o."})," ","all rights reserved."]}),l.jsxs("div",{className:d`
            font-size: 13px;
            color: #011722;
            text-align: center;
          `,children:[l.jsx(Ge,{}),l.jsx(De,{})]})]})]})});mt.displayName="LandingPageOfficial";export{mt as LandingPageOfficial};

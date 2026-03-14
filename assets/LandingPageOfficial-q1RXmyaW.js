import{r as e,t}from"./chunk-DECur_0Z.js";import"./emotion-react.browser.esm-B6XXdZtW.js";import{n,t as r}from"./emotion-css.esm-Qs1dyEi9.js";import{n as i,t as a}from"./jsx-runtime-BA9giqqw.js";import"./injectIntl-DcBbzoym.js";import{t as o}from"./useIntl-uVUnHosr.js";import{u as s}from"./chunk-LFPYN7LY-BzzIMYPi.js";import{a as c,o as l}from"./Button-CQrJ5P7o.js";import{a as u,c as d,i as f,o as p,r as m,s as h,t as g}from"./RetinaImage-Cxz0cO5n.js";import{r as _}from"./config-D41TpNeF.js";import{t as v}from"./Button-DeCk-xKl.js";import"./useClickOutside-DDfmGtM1.js";import"./IntlLocalesContext-CX3kKNf2.js";import{t as y}from"./useDocumentTitle--9KSRPbr.js";import"./useMenuUpdate-uUH7xBSR.js";import{n as b,r as x,t as S}from"./GitRevision-OCTNEJA9.js";import{t as C}from"./logo-C4Nvk3N4.js";var w=e(t(((e,t)=>{(function(n,r){typeof e==`object`&&typeof t==`object`?t.exports=r(i()):typeof define==`function`&&define.amd?define(`Typewriter`,[`react`],r):typeof e==`object`?e.Typewriter=r(i()):n.Typewriter=r(n.react)})(typeof self<`u`?self:e,(e=>(()=>{var t={2:(e,t,n)=>{var r=n(2199),i=n(4664),a=n(5950);e.exports=function(e){return r(e,a,i)}},79:(e,t,n)=>{var r=n(3702),i=n(80),a=n(4739),o=n(8655),s=n(1175);function c(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=i,c.prototype.get=a,c.prototype.has=o,c.prototype.set=s,e.exports=c},80:(e,t,n)=>{var r=n(6025),i=Array.prototype.splice;e.exports=function(e){var t=this.__data__,n=r(t,e);return!(n<0||(n==t.length-1?t.pop():i.call(t,n,1),--this.size,0))}},270:(e,t,n)=>{var r=n(7068),i=n(346);e.exports=function e(t,n,a,o,s){return t===n||(t==null||n==null||!i(t)&&!i(n)?t!=t&&n!=n:r(t,n,a,o,e,s))}},289:(e,t,n)=>{var r=n(2651);e.exports=function(e){return r(this,e).get(e)}},294:e=>{e.exports=function(e){return typeof e==`number`&&e>-1&&e%1==0&&e<=9007199254740991}},317:e=>{e.exports=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}},346:e=>{e.exports=function(e){return typeof e==`object`&&!!e}},361:e=>{var t=/^(?:0|[1-9]\d*)$/;e.exports=function(e,n){var r=typeof e;return!!(n??=9007199254740991)&&(r==`number`||r!=`symbol`&&t.test(e))&&e>-1&&e%1==0&&e<n}},392:e=>{e.exports=function(e,t){return e?.[t]}},659:(e,t,n)=>{var r=n(1873),i=Object.prototype,a=i.hasOwnProperty,o=i.toString,s=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,s),n=e[s];try{e[s]=void 0;var r=!0}catch{}var i=o.call(e);return r&&(t?e[s]=n:delete e[s]),i}},689:(e,t,n)=>{var r=n(2),i=Object.prototype.hasOwnProperty;e.exports=function(e,t,n,a,o,s){var c=1&n,l=r(e),u=l.length;if(u!=r(t).length&&!c)return!1;for(var d=u;d--;){var f=l[d];if(!(c?f in t:i.call(t,f)))return!1}var p=s.get(e),m=s.get(t);if(p&&m)return p==t&&m==e;var h=!0;s.set(e,t),s.set(t,e);for(var g=c;++d<u;){var _=e[f=l[d]],v=t[f];if(a)var y=c?a(v,_,f,t,e,s):a(_,v,f,e,t,s);if(!(y===void 0?_===v||o(_,v,n,a,s):y)){h=!1;break}g||=f==`constructor`}if(h&&!g){var b=e.constructor,x=t.constructor;b==x||!(`constructor`in e)||!(`constructor`in t)||typeof b==`function`&&b instanceof b&&typeof x==`function`&&x instanceof x||(h=!1)}return s.delete(e),s.delete(t),h}},695:(e,t,n)=>{var r=n(8096),i=n(2428),a=n(6449),o=n(3656),s=n(361),c=n(7167),l=Object.prototype.hasOwnProperty;e.exports=function(e,t){var n=a(e),u=!n&&i(e),d=!n&&!u&&o(e),f=!n&&!u&&!d&&c(e),p=n||u||d||f,m=p?r(e.length,String):[],h=m.length;for(var g in e)!t&&!l.call(e,g)||p&&(g==`length`||d&&(g==`offset`||g==`parent`)||f&&(g==`buffer`||g==`byteLength`||g==`byteOffset`)||s(g,h))||m.push(g);return m}},938:e=>{e.exports=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}},945:(e,t,n)=>{var r=n(79),i=n(8223),a=n(3661);e.exports=function(e,t){var n=this.__data__;if(n instanceof r){var o=n.__data__;if(!i||o.length<199)return o.push([e,t]),this.size=++n.size,this;n=this.__data__=new a(o)}return n.set(e,t),this.size=n.size,this}},1042:(e,t,n)=>{e.exports=n(6110)(Object,`create`)},1175:(e,t,n)=>{var r=n(6025);e.exports=function(e,t){var n=this.__data__,i=r(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this}},1380:e=>{e.exports=function(e){return this.__data__.set(e,`__lodash_hash_undefined__`),this}},1420:(e,t,n)=>{var r=n(79);e.exports=function(){this.__data__=new r,this.size=0}},1459:e=>{e.exports=function(e){return this.__data__.has(e)}},1549:(e,t,n)=>{var r=n(2032),i=n(3862),a=n(6721),o=n(2749),s=n(5749);function c(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=i,c.prototype.get=a,c.prototype.has=o,c.prototype.set=s,e.exports=c},1873:(e,t,n)=>{e.exports=n(9325).Symbol},1882:(e,t,n)=>{var r=n(2552),i=n(3805);e.exports=function(e){if(!i(e))return!1;var t=r(e);return t==`[object Function]`||t==`[object GeneratorFunction]`||t==`[object AsyncFunction]`||t==`[object Proxy]`}},1986:(e,t,n)=>{var r=n(1873),i=n(7828),a=n(5288),o=n(5911),s=n(317),c=n(4247),l=r?r.prototype:void 0,u=l?l.valueOf:void 0;e.exports=function(e,t,n,r,l,d,f){switch(n){case`[object DataView]`:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case`[object ArrayBuffer]`:return!(e.byteLength!=t.byteLength||!d(new i(e),new i(t)));case`[object Boolean]`:case`[object Date]`:case`[object Number]`:return a(+e,+t);case`[object Error]`:return e.name==t.name&&e.message==t.message;case`[object RegExp]`:case`[object String]`:return e==t+``;case`[object Map]`:var p=s;case`[object Set]`:var m=1&r;if(p||=c,e.size!=t.size&&!m)return!1;var h=f.get(e);if(h)return h==t;r|=2,f.set(e,t);var g=o(p(e),p(t),r,l,d,f);return f.delete(e),g;case`[object Symbol]`:if(u)return u.call(e)==u.call(t)}return!1}},2032:(e,t,n)=>{var r=n(1042);e.exports=function(){this.__data__=r?r(null):{},this.size=0}},2199:(e,t,n)=>{var r=n(4528),i=n(6449);e.exports=function(e,t,n){var a=t(e);return i(e)?a:r(a,n(e))}},2404:(e,t,n)=>{var r=n(270);e.exports=function(e,t){return r(e,t)}},2428:(e,t,n)=>{var r=n(7534),i=n(346),a=Object.prototype,o=a.hasOwnProperty,s=a.propertyIsEnumerable;e.exports=r(function(){return arguments}())?r:function(e){return i(e)&&o.call(e,`callee`)&&!s.call(e,`callee`)}},2552:(e,t,n)=>{var r=n(1873),i=n(659),a=n(9350),o=r?r.toStringTag:void 0;e.exports=function(e){return e==null?e===void 0?`[object Undefined]`:`[object Null]`:o&&o in Object(e)?i(e):a(e)}},2651:(e,t,n)=>{var r=n(4218);e.exports=function(e,t){var n=e.__data__;return r(t)?n[typeof t==`string`?`string`:`hash`]:n.map}},2749:(e,t,n)=>{var r=n(1042),i=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return r?t[e]!==void 0:i.call(t,e)}},2804:(e,t,n)=>{e.exports=n(6110)(n(9325),`Promise`)},2949:(e,t,n)=>{var r=n(2651);e.exports=function(e,t){var n=r(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this}},3040:(e,t,n)=>{var r=n(1549),i=n(79),a=n(8223);e.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||i),string:new r}}},3146:(e,t,n)=>{for(var r=n(3491),i=typeof window>`u`?n.g:window,a=[`moz`,`webkit`],o=`AnimationFrame`,s=i[`request`+o],c=i[`cancel`+o]||i[`cancelRequest`+o],l=0;!s&&l<a.length;l++)s=i[a[l]+`Request`+o],c=i[a[l]+`Cancel`+o]||i[a[l]+`CancelRequest`+o];if(!s||!c){var u=0,d=0,f=[],p=1e3/60;s=function(e){if(f.length===0){var t=r(),n=Math.max(0,p-(t-u));u=n+t,setTimeout((function(){var e=f.slice(0);f.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(u)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return f.push({handle:++d,callback:e,cancelled:!1}),d},c=function(e){for(var t=0;t<f.length;t++)f[t].handle===e&&(f[t].cancelled=!0)}}e.exports=function(e){return s.call(i,e)},e.exports.cancel=function(){c.apply(i,arguments)},e.exports.polyfill=function(e){e||=i,e.requestAnimationFrame=s,e.cancelAnimationFrame=c}},3345:e=>{e.exports=function(){return[]}},3491:function(e){(function(){var t,n,r,i,a,o;typeof performance<`u`&&performance!==null&&performance.now?e.exports=function(){return performance.now()}:typeof process<`u`&&process!==null&&process.hrtime?(e.exports=function(){return(t()-a)/1e6},n=process.hrtime,i=(t=function(){var e;return 1e9*(e=n())[0]+e[1]})(),o=1e9*process.uptime(),a=i-o):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return new Date().getTime()-r},r=new Date().getTime())}).call(this)},3605:e=>{e.exports=function(e){return this.__data__.get(e)}},3650:(e,t,n)=>{e.exports=n(4335)(Object.keys,Object)},3656:(e,t,n)=>{e=n.nmd(e);var r=n(9325),i=n(9935),a=t&&!t.nodeType&&t,o=a&&e&&!e.nodeType&&e,s=o&&o.exports===a?r.Buffer:void 0,c=(s?s.isBuffer:void 0)||i;e.exports=c},3661:(e,t,n)=>{var r=n(3040),i=n(7670),a=n(289),o=n(4509),s=n(2949);function c(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=i,c.prototype.get=a,c.prototype.has=o,c.prototype.set=s,e.exports=c},3702:e=>{e.exports=function(){this.__data__=[],this.size=0}},3805:e=>{e.exports=function(e){var t=typeof e;return e!=null&&(t==`object`||t==`function`)}},3862:e=>{e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},4218:e=>{e.exports=function(e){var t=typeof e;return t==`string`||t==`number`||t==`symbol`||t==`boolean`?e!==`__proto__`:e===null}},4247:e=>{e.exports=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}},4248:e=>{e.exports=function(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}},4335:e=>{e.exports=function(e,t){return function(n){return e(t(n))}}},4509:(e,t,n)=>{var r=n(2651);e.exports=function(e){return r(this,e).has(e)}},4528:e=>{e.exports=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}},4664:(e,t,n)=>{var r=n(9770),i=n(3345),a=Object.prototype.propertyIsEnumerable,o=Object.getOwnPropertySymbols;e.exports=o?function(e){return e==null?[]:(e=Object(e),r(o(e),(function(t){return a.call(e,t)})))}:i},4739:(e,t,n)=>{var r=n(6025);e.exports=function(e){var t=this.__data__,n=r(t,e);return n<0?void 0:t[n][1]}},4840:(e,t,n)=>{e.exports=typeof n.g==`object`&&n.g&&n.g.Object===Object&&n.g},4894:(e,t,n)=>{var r=n(1882),i=n(294);e.exports=function(e){return e!=null&&i(e.length)&&!r(e)}},4901:(e,t,n)=>{var r=n(2552),i=n(294),a=n(346),o={};o[`[object Float32Array]`]=o[`[object Float64Array]`]=o[`[object Int8Array]`]=o[`[object Int16Array]`]=o[`[object Int32Array]`]=o[`[object Uint8Array]`]=o[`[object Uint8ClampedArray]`]=o[`[object Uint16Array]`]=o[`[object Uint32Array]`]=!0,o[`[object Arguments]`]=o[`[object Array]`]=o[`[object ArrayBuffer]`]=o[`[object Boolean]`]=o[`[object DataView]`]=o[`[object Date]`]=o[`[object Error]`]=o[`[object Function]`]=o[`[object Map]`]=o[`[object Number]`]=o[`[object Object]`]=o[`[object RegExp]`]=o[`[object Set]`]=o[`[object String]`]=o[`[object WeakMap]`]=!1,e.exports=function(e){return a(e)&&i(e.length)&&!!o[r(e)]}},5083:(e,t,n)=>{var r=n(1882),i=n(7296),a=n(3805),o=n(7473),s=/^\[object .+?Constructor\]$/,c=Function.prototype,l=Object.prototype,u=c.toString,d=l.hasOwnProperty,f=RegExp(`^`+u.call(d).replace(/[\\^$.*+?()[\]{}|]/g,`\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,`$1.*?`)+`$`);e.exports=function(e){return!(!a(e)||i(e))&&(r(e)?f:s).test(o(e))}},5288:e=>{e.exports=function(e,t){return e===t||e!=e&&t!=t}},5481:(e,t,n)=>{e.exports=n(9325)[`__core-js_shared__`]},5527:e=>{var t=Object.prototype;e.exports=function(e){var n=e&&e.constructor;return e===(typeof n==`function`&&n.prototype||t)}},5580:(e,t,n)=>{e.exports=n(6110)(n(9325),`DataView`)},5749:(e,t,n)=>{var r=n(1042);e.exports=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=r&&t===void 0?`__lodash_hash_undefined__`:t,this}},5861:(e,t,n)=>{var r=n(5580),i=n(8223),a=n(2804),o=n(6545),s=n(8303),c=n(2552),l=n(7473),u=`[object Map]`,d=`[object Promise]`,f=`[object Set]`,p=`[object WeakMap]`,m=`[object DataView]`,h=l(r),g=l(i),_=l(a),v=l(o),y=l(s),b=c;(r&&b(new r(new ArrayBuffer(1)))!=m||i&&b(new i)!=u||a&&b(a.resolve())!=d||o&&b(new o)!=f||s&&b(new s)!=p)&&(b=function(e){var t=c(e),n=t==`[object Object]`?e.constructor:void 0,r=n?l(n):``;if(r)switch(r){case h:return m;case g:return u;case _:return d;case v:return f;case y:return p}return t}),e.exports=b},5911:(e,t,n)=>{var r=n(8859),i=n(4248),a=n(9219);e.exports=function(e,t,n,o,s,c){var l=1&n,u=e.length,d=t.length;if(u!=d&&!(l&&d>u))return!1;var f=c.get(e),p=c.get(t);if(f&&p)return f==t&&p==e;var m=-1,h=!0,g=2&n?new r:void 0;for(c.set(e,t),c.set(t,e);++m<u;){var _=e[m],v=t[m];if(o)var y=l?o(v,_,m,t,e,c):o(_,v,m,e,t,c);if(y!==void 0){if(y)continue;h=!1;break}if(g){if(!i(t,(function(e,t){if(!a(g,t)&&(_===e||s(_,e,n,o,c)))return g.push(t)}))){h=!1;break}}else if(_!==v&&!s(_,v,n,o,c)){h=!1;break}}return c.delete(e),c.delete(t),h}},5950:(e,t,n)=>{var r=n(695),i=n(8984),a=n(4894);e.exports=function(e){return a(e)?r(e):i(e)}},6009:(e,t,n)=>{e=n.nmd(e);var r=n(4840),i=t&&!t.nodeType&&t,a=i&&e&&!e.nodeType&&e,o=a&&a.exports===i&&r.process,s=function(){try{return a&&a.require&&a.require(`util`).types||o&&o.binding&&o.binding(`util`)}catch{}}();e.exports=s},6025:(e,t,n)=>{var r=n(5288);e.exports=function(e,t){for(var n=e.length;n--;)if(r(e[n][0],t))return n;return-1}},6110:(e,t,n)=>{var r=n(5083),i=n(392);e.exports=function(e,t){var n=i(e,t);return r(n)?n:void 0}},6449:e=>{e.exports=Array.isArray},6545:(e,t,n)=>{e.exports=n(6110)(n(9325),`Set`)},6721:(e,t,n)=>{var r=n(1042),i=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(r){var n=t[e];return n===`__lodash_hash_undefined__`?void 0:n}return i.call(t,e)?t[e]:void 0}},7068:(e,t,n)=>{var r=n(7217),i=n(5911),a=n(1986),o=n(689),s=n(5861),c=n(6449),l=n(3656),u=n(7167),d=`[object Arguments]`,f=`[object Array]`,p=`[object Object]`,m=Object.prototype.hasOwnProperty;e.exports=function(e,t,n,h,g,_){var v=c(e),y=c(t),b=v?f:s(e),x=y?f:s(t),S=(b=b==d?p:b)==p,C=(x=x==d?p:x)==p,w=b==x;if(w&&l(e)){if(!l(t))return!1;v=!0,S=!1}if(w&&!S)return _||=new r,v||u(e)?i(e,t,n,h,g,_):a(e,t,b,n,h,g,_);if(!(1&n)){var T=S&&m.call(e,`__wrapped__`),E=C&&m.call(t,`__wrapped__`);if(T||E){var D=T?e.value():e,O=E?t.value():t;return _||=new r,g(D,O,n,h,_)}}return!!w&&(_||=new r,o(e,t,n,h,g,_))}},7167:(e,t,n)=>{var r=n(4901),i=n(7301),a=n(6009),o=a&&a.isTypedArray;e.exports=o?i(o):r},7217:(e,t,n)=>{var r=n(79),i=n(1420),a=n(938),o=n(3605),s=n(9817),c=n(945);function l(e){this.size=(this.__data__=new r(e)).size}l.prototype.clear=i,l.prototype.delete=a,l.prototype.get=o,l.prototype.has=s,l.prototype.set=c,e.exports=l},7296:(e,t,n)=>{var r,i=n(5481),a=(r=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||``))?`Symbol(src)_1.`+r:``;e.exports=function(e){return!!a&&a in e}},7301:e=>{e.exports=function(e){return function(t){return e(t)}}},7473:e=>{var t=Function.prototype.toString;e.exports=function(e){if(e!=null){try{return t.call(e)}catch{}try{return e+``}catch{}}return``}},7534:(e,t,n)=>{var r=n(2552),i=n(346);e.exports=function(e){return i(e)&&r(e)==`[object Arguments]`}},7670:(e,t,n)=>{var r=n(2651);e.exports=function(e){var t=r(this,e).delete(e);return this.size-=t?1:0,t}},7828:(e,t,n)=>{e.exports=n(9325).Uint8Array},8096:e=>{e.exports=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}},8223:(e,t,n)=>{e.exports=n(6110)(n(9325),`Map`)},8303:(e,t,n)=>{e.exports=n(6110)(n(9325),`WeakMap`)},8655:(e,t,n)=>{var r=n(6025);e.exports=function(e){return r(this.__data__,e)>-1}},8859:(e,t,n)=>{var r=n(3661),i=n(1380),a=n(1459);function o(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new r;++t<n;)this.add(e[t])}o.prototype.add=o.prototype.push=i,o.prototype.has=a,e.exports=o},8984:(e,t,n)=>{var r=n(5527),i=n(3650),a=Object.prototype.hasOwnProperty;e.exports=function(e){if(!r(e))return i(e);var t=[];for(var n in Object(e))a.call(e,n)&&n!=`constructor`&&t.push(n);return t}},9155:t=>{t.exports=e},9219:e=>{e.exports=function(e,t){return e.has(t)}},9325:(e,t,n)=>{var r=n(4840),i=typeof self==`object`&&self&&self.Object===Object&&self;e.exports=r||i||Function(`return this`)()},9350:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},9770:e=>{e.exports=function(e,t){for(var n=-1,r=e==null?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a}},9817:e=>{e.exports=function(e){return this.__data__.has(e)}},9905:(e,t,n)=>{n.d(t,{default:()=>D});var r=n(3146),i=n.n(r);let a=function(e){return new RegExp(/<[a-z][\s\S]*>/i).test(e)},o=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};var s=`TYPE_CHARACTER`,c=`REMOVE_CHARACTER`,l=`REMOVE_ALL`,u=`REMOVE_LAST_VISIBLE_NODE`,d=`PAUSE_FOR`,f=`CALL_FUNCTION`,p=`ADD_HTML_TAG_ELEMENT`,m=`CHANGE_DELETE_SPEED`,h=`CHANGE_DELAY`,g=`CHANGE_CURSOR`,_=`PASTE_STRING`,v=`HTML_TAG`;function y(e){return y=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},y(e)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?b(Object(n),!0).forEach((function(t){T(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e){return function(e){if(Array.isArray(e))return C(e)}(e)||function(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}(e)||function(e,t){if(e){if(typeof e==`string`)return C(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}}(e)||function(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function C(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,E(r.key),r)}}function T(e,t,n){return(t=E(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e){var t=function(e){if(y(e)!=`object`||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,`string`);if(y(n)!=`object`)return n;throw TypeError(`@@toPrimitive must return a primitive value.`)}return String(e)}(e);return y(t)==`symbol`?t:t+``}let D=function(){function e(t,n){var y=this;if(function(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}(this,e),T(this,`state`,{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement(`span`),cursor:document.createElement(`span`)}}),T(this,`options`,{strings:null,cursor:`|`,delay:`natural`,pauseFor:1500,deleteSpeed:`natural`,loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:`Typewriter__wrapper`,cursorClassName:`Typewriter__cursor`,stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),T(this,`setupWrapperElement`,(function(){y.state.elements.container&&(y.state.elements.wrapper.className=y.options.wrapperClassName,y.state.elements.cursor.className=y.options.cursorClassName,y.state.elements.cursor.innerHTML=y.options.cursor,y.state.elements.container.innerHTML=``,y.state.elements.container.appendChild(y.state.elements.wrapper),y.state.elements.container.appendChild(y.state.elements.cursor))})),T(this,`start`,(function(){return y.state.eventLoopPaused=!1,y.runEventLoop(),y})),T(this,`pause`,(function(){return y.state.eventLoopPaused=!0,y})),T(this,`stop`,(function(){return y.state.eventLoop&&((0,r.cancel)(y.state.eventLoop),y.state.eventLoop=null),y})),T(this,`pauseFor`,(function(e){return y.addEventToQueue(d,{ms:e}),y})),T(this,`typeOutAllStrings`,(function(){return typeof y.options.strings==`string`?(y.typeString(y.options.strings).pauseFor(y.options.pauseFor),y):(y.options.strings.forEach((function(e){y.typeString(e).pauseFor(y.options.pauseFor).deleteAll(y.options.deleteSpeed)})),y)})),T(this,`typeString`,(function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(a(e))return y.typeOutHTMLString(e,t);if(e){var n=(y.options||{}).stringSplitter,r=typeof n==`function`?n(e):e.split(``);y.typeCharacters(r,t)}return y})),T(this,`pasteString`,(function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return a(e)?y.typeOutHTMLString(e,t,!0):(e&&y.addEventToQueue(_,{character:e,node:t}),y)})),T(this,`typeOutHTMLString`,(function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0,r=function(e){var t=document.createElement(`div`);return t.innerHTML=e,t.childNodes}(e);if(r.length>0)for(var i=0;i<r.length;i++){var a=r[i],o=a.innerHTML;a&&a.nodeType!==3?(a.innerHTML=``,y.addEventToQueue(p,{node:a,parentNode:t}),n?y.pasteString(o,a):y.typeString(o,a)):a.textContent&&(n?y.pasteString(a.textContent,t):y.typeString(a.textContent,t))}return y})),T(this,`deleteAll`,(function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:`natural`;return y.addEventToQueue(l,{speed:e}),y})),T(this,`changeDeleteSpeed`,(function(e){if(!e)throw Error(`Must provide new delete speed`);return y.addEventToQueue(m,{speed:e}),y})),T(this,`changeDelay`,(function(e){if(!e)throw Error(`Must provide new delay`);return y.addEventToQueue(h,{delay:e}),y})),T(this,`changeCursor`,(function(e){if(!e)throw Error(`Must provide new cursor`);return y.addEventToQueue(g,{cursor:e}),y})),T(this,`deleteChars`,(function(e){if(!e)throw Error(`Must provide amount of characters to delete`);for(var t=0;t<e;t++)y.addEventToQueue(c);return y})),T(this,`callFunction`,(function(e,t){if(!e||typeof e!=`function`)throw Error(`Callback must be a function`);return y.addEventToQueue(f,{cb:e,thisArg:t}),y})),T(this,`typeCharacters`,(function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!e||!Array.isArray(e))throw Error(`Characters must be an array`);return e.forEach((function(e){y.addEventToQueue(s,{character:e,node:t})})),y})),T(this,`removeCharacters`,(function(e){if(!e||!Array.isArray(e))throw Error(`Characters must be an array`);return e.forEach((function(){y.addEventToQueue(c)})),y})),T(this,`addEventToQueue`,(function(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return y.addEventToStateProperty(e,t,n,`eventQueue`)})),T(this,`addReverseCalledEvent`,(function(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return y.options.loop?y.addEventToStateProperty(e,t,n,`reverseCalledEvents`):y})),T(this,`addEventToStateProperty`,(function(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2],r=arguments.length>3?arguments[3]:void 0,i={eventName:e,eventArgs:t||{}};return y.state[r]=n?[i].concat(S(y.state[r])):[].concat(S(y.state[r]),[i]),y})),T(this,`runEventLoop`,(function(){y.state.lastFrameTime||(y.state.lastFrameTime=Date.now());var e=Date.now(),t=e-y.state.lastFrameTime;if(!y.state.eventQueue.length){if(!y.options.loop)return;y.state.eventQueue=S(y.state.calledEvents),y.state.calledEvents=[],y.options=x({},y.state.initialOptions)}if(y.state.eventLoop=i()(y.runEventLoop),!y.state.eventLoopPaused){if(y.state.pauseUntil){if(e<y.state.pauseUntil)return;y.state.pauseUntil=null}var n,r=S(y.state.eventQueue),a=r.shift();if(!(t<=(n=a.eventName===u||a.eventName===c?y.options.deleteSpeed===`natural`?o(40,80):y.options.deleteSpeed:y.options.delay===`natural`?o(120,160):y.options.delay))){var b=a.eventName,C=a.eventArgs;switch(y.logInDevMode({currentEvent:a,state:y.state,delay:n}),b){case _:case s:var w=C.character,T=C.node,E=document.createTextNode(w),D=E;y.options.onCreateTextNode&&typeof y.options.onCreateTextNode==`function`&&(D=y.options.onCreateTextNode(w,E)),D&&(T?T.appendChild(D):y.state.elements.wrapper.appendChild(D)),y.state.visibleNodes=[].concat(S(y.state.visibleNodes),[{type:`TEXT_NODE`,character:w,node:D}]);break;case c:r.unshift({eventName:u,eventArgs:{removingCharacterNode:!0}});break;case d:var O=a.eventArgs.ms;y.state.pauseUntil=Date.now()+parseInt(O);break;case f:var k=a.eventArgs,A=k.cb,j=k.thisArg;A.call(j,{elements:y.state.elements});break;case p:var M=a.eventArgs,N=M.node,P=M.parentNode;P?P.appendChild(N):y.state.elements.wrapper.appendChild(N),y.state.visibleNodes=[].concat(S(y.state.visibleNodes),[{type:v,node:N,parentNode:P||y.state.elements.wrapper}]);break;case l:var F=y.state.visibleNodes,I=C.speed,L=[];I&&L.push({eventName:m,eventArgs:{speed:I,temp:!0}});for(var R=0,z=F.length;R<z;R++)L.push({eventName:u,eventArgs:{removingCharacterNode:!1}});I&&L.push({eventName:m,eventArgs:{speed:y.options.deleteSpeed,temp:!0}}),r.unshift.apply(r,L);break;case u:var B=a.eventArgs.removingCharacterNode;if(y.state.visibleNodes.length){var V=y.state.visibleNodes.pop(),H=V.type,U=V.node,W=V.character;y.options.onRemoveNode&&typeof y.options.onRemoveNode==`function`&&y.options.onRemoveNode({node:U,character:W}),U&&U.parentNode.removeChild(U),H===v&&B&&r.unshift({eventName:u,eventArgs:{}})}break;case m:y.options.deleteSpeed=a.eventArgs.speed;break;case h:y.options.delay=a.eventArgs.delay;break;case g:y.options.cursor=a.eventArgs.cursor,y.state.elements.cursor.innerHTML=a.eventArgs.cursor}y.options.loop&&(a.eventName===u||a.eventArgs&&a.eventArgs.temp||(y.state.calledEvents=[].concat(S(y.state.calledEvents),[a]))),y.state.eventQueue=r,y.state.lastFrameTime=e}}})),t)if(typeof t==`string`){var b=document.querySelector(t);if(!b)throw Error(`Could not find container element`);this.state.elements.container=b}else this.state.elements.container=t;n&&(this.options=x(x({},this.options),n)),this.state.initialOptions=x({},this.options),this.init()}var t,n;return t=e,(n=[{key:`init`,value:function(){var e,t;this.setupWrapperElement(),this.addEventToQueue(g,{cursor:this.options.cursor},!0),this.addEventToQueue(l,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(e=`.Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}`,(t=document.createElement(`style`)).appendChild(document.createTextNode(e)),document.head.appendChild(t),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),!0===this.options.autoStart&&this.options.strings&&this.typeOutAllStrings().start()}},{key:`logInDevMode`,value:function(e){this.options.devMode&&console.log(e)}}])&&w(t.prototype,n),Object.defineProperty(t,`prototype`,{writable:!1}),e}()},9935:e=>{e.exports=function(){return!1}}},n={};function r(e){var i=n[e];if(i!==void 0)return i.exports;var a=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if(typeof globalThis==`object`)return globalThis;try{return this||Function(`return this`)()}catch{if(typeof window==`object`)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nmd=e=>(e.paths=[],e.children||=[],e);var i={};return(()=>{r.d(i,{default:()=>h});var e=r(9155),t=r.n(e),n=r(9905),a=r(2404),o=r.n(a);function s(e){return s=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},s(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,p(r.key),r)}}function l(e,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},l(e,t)}function u(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function d(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch{}return(d=function(){return!!e})()}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function p(e){var t=function(e){if(s(e)!=`object`||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,`string`);if(s(n)!=`object`)return n;throw TypeError(`@@toPrimitive must return a primitive value.`)}return String(e)}(e);return s(t)==`symbol`?t:t+``}var m=function(e){(function(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function`);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,`prototype`,{writable:!1}),t&&l(e,t)})(m,e);var r,i,a=function(e){var t=d();return function(){var n,r=f(e);if(t){var i=f(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(e,t){if(t&&(s(t)==`object`||typeof t==`function`))return t;if(t!==void 0)throw TypeError(`Derived constructors may only return object or undefined`);return u(e)}(this,n)}}(m);function m(){var e,t,n,r;(function(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)})(this,m);var i=[...arguments];return t=u(e=a.call.apply(a,[this].concat(i))),r={instance:null},(n=p(n=`state`))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,e}return r=m,(i=[{key:`componentDidMount`,value:function(){var e=this,t=new n.default(this.typewriter,this.props.options);this.setState({instance:t},(function(){var n=e.props.onInit;n&&n(t)}))}},{key:`componentDidUpdate`,value:function(e){o()(this.props.options,e.options)||this.setState({instance:new n.default(this.typewriter,this.props.options)})}},{key:`componentWillUnmount`,value:function(){this.state.instance&&this.state.instance.stop()}},{key:`render`,value:function(){var e=this,n=this.props.component;return t().createElement(n,{ref:function(t){return e.typewriter=t},className:`Typewriter`,"data-testid":`typewriter-wrapper`})}}])&&c(r.prototype,i),Object.defineProperty(r,`prototype`,{writable:!1}),m}(e.Component);m.defaultProps={component:`div`};let h=m})(),i.default})()))}))(),1),T=e(i(),1),E=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAA9CAYAAAAQyx+GAAAABGdBTUEAALGPC/xhBQAABFpJREFUeAHtmmtIVEEUgM9dd5WotBTZ2DULH2mG9LCH9tQeakllPypSgiAhogdW0I/C0oQECbOSCqIHUQr1wwqKVMJMS0yLygpCtLLdTf1jbW252nq7szK6y+7N2esud2ebgWXmnjvnzDnfnZk7O3cAWGIEGAFGgBFgBBgBRoBOAty/3J46LylNp+9++K86tN4L06rTv7xsrBLzXyF243+XK0kARE6fBqWFeSRVvb5Obl4htH/6PKqfRGAmBQVCxpqUUY3RUCH/1BkiN4nAYEt1jU2QsikLX1KV11aWw4qkRcQ+szlGBJVLPQbboGnOIZ1TcGw4lwSGpjmHdE7BQHAuCQxW9qa8U2cAc3+/g0tm85BMZ+iCto5PgK9Npj5tgDZ2BlLgBjnzb8P7To7jeGyAajB9fWY4cvIUXKm4DcYfP3BMTvPtew7ayXu/fb9sK1BMiTIq1FFXNKrQIzpd42+qwWTu2AXVj+tt4xtDmQ/kgc/VD3THCUbSqAVz92HNMJS8g/tgy4Z14O/vLwlMvzAEb917AIUl55B+qp8maiO1YBqaWqwQliycDwWHcyUBsVUqEKabR/XP4FnzC+AH+WXUrmMMXT3WuMK1Gtv4xlSeFqYd0udBQy2YMREgUGZgRCAxMN4KpuzyddDOTrL+UNlbkqxvpafPW2D/0YJhFqg8Nz4O0JtG7iTrUGp53eoQf9PL1w4yOQSyglnqpGckJsyRg4NDm7KCSZgdD2VFI0Pp2KH9sHhBgoOTcghkBYMCzlg9smWavnK5HAyctik7GKdeeYFQdjBo00ulUllRhIYEewGSIRdkBxMUOBHuXLsIFRfPANoydWeyWCzW5UBI7DyYuXQNVNU+ITYv6zoGe7l2VTIuujU/f/UG4EWjsDEFm3P2wsfmOggJnjxqO7L3mFE9HEOF5ldv7LR/mkzw7kObnUzswqfBLEtcYBf3hPHjYVZMtJ1M7MKnweRkb4Wd2VuGY7954TTRMEIKPg1G2PWHtSuTUZzWlJ5Cvk7yaTAYiJTc58HgtdHkSUGgVJK/hMlrSsHuBTpoAr5UUgQxkRGAhhZpkgTm23cj3K+pJW3DI/X0X7uJ7e7MGpmASZUkgUEHb9ZvzyFtg8p6Pj/HSH0qLvUYdPBmsKtdaltu1cvefQAqKu+51aatMWVAWET0nwG/GFshLvf2/pyLygZhPOcXkx3Rwrqezlvff/BYE8I37AnKgT+QxYMl31krpl8mq/hrTw+cKDnrrIqvyqazOUbk0SoHuzrQpiv6UZUU6shyoctv84TTHHBvWY8RIcvAMDAiBETE9PYYDgwopk69NRMJzzXxZ51+SEGw7dICz7VmPFubU0ADb4FD6Pv38eJStxw1Q6epUOIUXD35303PxinJOqeOqBIUUyUpiytV890dafQOJSEwrUqdyYGiVHjGRvE4Se9wRmQL2UQaVPcYHDLP89w4TVw4r+ADsMyV3NkBaFf0WV1GgBEQJfAX8S4bCLs1i8wAAAAASUVORK5CYII=`,D=`data:image/png;base64,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`,O=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAA9CAYAAAAQyx+GAAAABGdBTUEAALGPC/xhBQAACapJREFUeAHtWgl4jlcWfhMkJEJjqUhGLEkIGiK1RrQJsaZaHcOTMkGVWgadIaaeYITKYiL2IEGmNRVVjKUjxJaEEEtbNIoQaimK2qISa76553Kv/0/+5Uu+MFH/eZ7ku8u55577fveee875fsBCFgQsCFgQsCBgQcCCQBlHwMqcfla1GijmeF7WfuXKGaPrt35ZF/W89S6vdoLJY0ejdYvmatnLLN+BQ0fw2az5ZvVTDQyBEtQ5wKzA3wuD5SgZeZMWYCzAGEHASLNlx1iAMYKAkWbLjrEAYwQBI80vfMck/HsltqbtNqJO0ebk7alYumJV0Y7n3PLCgdmaloHDR4+pXtb3WT9ix+69JvlXb0zGIcZXmqQJmBOnTsP//Q8wOiwcjg298e6AocjLy8d3R7Lg5d9d6hkaHonoeYtlPet4Nhr5BsK5WVusS06R7aKw5pvNvI94jp3MgaI8iWN3ZR5AY7/OqNaoBYKHjUF+/j18uWY9QkaNQ+e+A9D+nT5cxPylX8CleTu4+vghPGauEFuspyZgHj1+BFK2dq3XsXPtChzLzsGW1F148PAhLl+5KhW5eTsXt+/ckfWDh3/A10vmY+ifgzHFgOKTomN531fxcxnIR+U4Tw83rF22EGe/3YXsnDNI3pGG3kHd4F6/LmLDw7B5ZSLn7dTBF99t24i0dUmYsSAeV3+9LmWoLWgChiaxsrLCXz4MQQuvpuje6W2kZ+43O3fXgLfQvGljjBkyED+eOIkbN2/JMb9cvYZTZ87ib8MGS5mis0rlyrj4yxXMXLgUDx894keyUqWKKGdtjcr29qji4MBZa9WsgfS9+xG/fCVsbWxAO7S4pBkYmtDa+klao6KtLfLy87kOYvtT5cq1X3mb+GdToQIv2tra8Gf+vXuiC3d+u4ty5crBji2YqNprVWVfyKixmLvkcwZYE7g41ZJHTDKwwiMGWLOAHtj//RF09GsHmkNXF11eU2XNwNCkm9jN8dvdu9xI+vu2hXu9uridewc/nb/AQaFQX5fS2fEj/o0pO9CgritcajvJbo8G9VCzejV+TO7duy8N7+PHj5G8PQ0O9naYk/AvpO7Zh5iFS/CahzdOnzsPOn4To2biy9XrcSs3FzFTJqCOc21cK8ExImVUpx2k5oUKtIV37s7EXydPR0D7tujRyR+O7C1/1K8vWnZ5j23vyvBr3VJvlDc7RoF9QvjZjwobr9dHlciwUIyZOI23+7b0YQb4FJy82oB21qoNm/T4HzJ7RkQ2J2ruIl62qWCD15u2whueDeHXRn9uzlAa/yi1SX//3bqTbQ59yjp+QqlUtzFvZArqd7Iae+NF2nQb2C7QreqV2ZFQktauV9jNxecXehTn6d4mQElJ3aUnl9YhZJjCR/OOEcLLly8qStgQwVP4ac2MpiFiK8GE6f9E7KKlRbrr1nFBUGAA3NhxdWa34eOCAlxiBjn79Bls2pYKMt6CTp89hx79BiN60t8ROnKoaC6dp0DX0I5ht4mybMXXem9Ea6WgoEB5f9Bw+VbF/EH9P1IOHvrBrPjUjEzFr2ffIuNHfjqZj1W7Y8yiJxQzBIxZLUvAwJxBvUXVaPxmkeOgRmzSfzYo9vWb6smak5DITYJYk9nFm2IQQl4EMCvXbdRbiGf7QOXMufNqcDDIw8IEPRtV3tlDYQZazmFq3YYPuakRz6mP3PtxUyKl9OrVHJGclIj6rnVkW3EL3m80wcblCSAnkIiu/PjlSarEvHBgjEXXs+KX6YUR8TER6BkyFMy2cIP6xw9H8CuY4qvh4yfhbl6eXODZ8z8zb3gJ3hv4MdjRQ3VPH3RhsdMB5uS92dwL8yPCJe+5ny/KsqZCaR+l3oNHKjPmL9bb+nRtky0Rc5GhZY6ZrIsru1xtd9m2+IsVUsbR49mKtZMb72vYrpNS0bUxL7PAVmExG+fz7hgkx4p5TAGjaceUVnS9e99BXL9xU+oZHvqJLFPB3s6OB6kXj2SiVYtmvG/NN1skT1PmyG356nNcztqP7L3bcWx3Co/hbrHgdWdGJuebEjpG8qspaAKmtKLrDVu2S13JT2np7SXrVBgxqD/8mVdNweG7XQN5X8aBb/V4KCil0GPBsuVYtX4T7Owq8X7ycYi6d/SHPQsn1FJRr0ztyKd8IrquWsVBRtfBvd4xKUVE139gMdL02QtQlUXNgsh5K0yuLs6yieIoIubvyDaSMX12HB48eMDbSBfKCxGxc8Sf5Gx28vNl8dmzl8A7jPzTtGOETK3R9SWd3A15tIWJonZjRCmKf8yYzUEZFPwnXDi0BzdPHubxGo2hFyfIrZ6rKJp9agaG3ojW6Prq9WeJJHLzi0O6IcDHIcE8UiebJXI8YseQTGeWqlBLmo9SaUTXw9j1K4hin+KQbysf1KxRnacXBo4eD0+PBizZnsFtjDhOQh75MWpJMzBkgBNiI7GQJYh0A8n4mRGYFzGFJ4p0lVmzLE5WyU5QIDk1dh5yn6Y+dVOiktFEgZJalNaMmrcIx1l+mMZPHf8JP0rDQifqjdQ9snodJamIO99QSKCbduDOQgn/dezdX/oYQ8ZOKKEURWHHyuTYbsGD5Dy0LlN4aLIxLk5OWBA51ZR8VX1tfJ79IIlSByUlus6NEXnKaSwPrJY0AUOZusH9nnyyUDuhIb5e3brIZjKmlMgubVqXvBX3799XLVYTMKpnMcPYmu0Y3bzvpOhZZkYUr5sS5NNizf+8TFdqmQCGFJowerjUaw/zalkKQta1FmbHJyLnp7PFElNmgBk24AOerhTaDx0XVqxPuWJc4ee29AyERc6UzZ4e7rJsqlBmgKGrPi56Kr++SWHyQSjlQJ97S0oESp8ho3gehmRUrGiLEQP7qRJXZoAhbbv4d+CJa6E5+SRv9QpGYtJq0aTqSTYlJi6BJ8KFf0QDE+fM4N+x1AgpU8CQwpTNp2haEGX2mG8Dn8CeWL+ZbpYngaLo133SlUwf+Zt06IpPP5shdwrxRLBvVcG9euqymyxr9nxNSi9hZ1z0NDR0q4/Q8Ci5OPrpCGXxKHVAUTIFhBT7kJt/+co1nMg5zf2UwlcyHR/aKcUBhdR+FnoaWYTwEP8fvwzPOnYC8eyHRiVNR5KhJZtCn4EF6f4y3NHBuuqNnJxc0af7VA2M7qDfT9lqn6ODVVdD4JQ5G/NiQVfa3ryjpFRzd69SeF6zO6bwgJe9TiAQGCy311auxcoqveByTgBLasnA8pUDhsAwBE4lmwoueReyL0mwXtUCgWPl5Jb6NK2SwvIVr+QmMfj+CQy7Oo2cLaAYhMfSaEGgNBD4H8ShY9fjPZuRAAAAAElFTkSuQmCC`,k=`/assets/graphic-2@2x-o9q-Ivx4.png`,A=`data:image/png;base64,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`,j=`/assets/graphic-3@2x-DFvq1ZvH.png`,M=`/assets/graphic-4-DEP80msl.png`,N=`/assets/graphic-4@2x-BSxi8HUF.png`,P=`/assets/main-graphic-BH5TrvAQ.png`,F=`/assets/main-graphic@2x-DrmctVov.png`,I=`/assets/open-source-u8EY6AMF.png`,L=`/assets/open-source@2x-q94tbrLH.png`,R=`data:image/png;base64,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`,z=`data:image/png;base64,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`,B=`data:image/png;base64,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`,V=`/assets/step-1@2x-BnC6LKQH.png`,H=`data:image/png;base64,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`,U=`/assets/step-2@2x-Cv5N9IX7.png`,W=`data:image/png;base64,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`,G=`/assets/step-3@2x-0j47Yci1.png`,K=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAtBQTFRFAAAAmcwzc7sEc7oEcroFcroEcroEcroEcroEcroEcroEcroEcroEcroEc7sEc7wEmcwzc7sEc7oEcroEcroEcroEc7oEc7sFe70JcrsFcroEcroEcrsFe70JgP+AcrsFcroEcrsFgP+AdbsHcroEc7oEdrwIc7oFcroEcroEc7oFgL9AcrsFdbsIl8xGt9t+zeam1+u33O7B3O7A1uu2y+WitNp6k8o/dLsHc7sFgL8QcroEdbsJp9Ri2u2++fz1////9/vx1uu3oNFXc7oFgL8Qt9yA8vjo+vz22ey8v9+NrddtptRip9RjrtdvweGS/P357fbfsNhydLsIc7oFqv9Vnc9R7ffg9/vwvt+NkMk6drwKd70OlMpAxOKX5/PVc7sFc7sHxeOY/v79rddseb0QfL8WtNp5/f78u96Gc7oGc7oFeL0P3u/EyeSffb8YgsIh1Oqz0+mxdrwLdbsH5fLR/P77pNJecroFr9dw2+2/crsEns9S+/340eiucrwFoNBVc7oEtdp8j8g3c7sF2e29croEgsIiotJac7sEdrwMrNZszOajyuWhwuGT6/Xcc7sFlMtB8fjn7PXdicUulctDcrsEg8Ii9vvv8vjn0+qyyOSec7sEtdp6n9BV9vrw6/Xb4fDJi8YwcrsF8Pjl6vXa5vPToNBWcrsEcroE3+/G0Oisc7oEqtVomc1KyOSdcroF1OqyxuOZc7oFweGRc7oE0umvc7sGwuGSc7oErtdupdNfcroFsdl1croE6PPWcrsEer4S/f77iMUrcrsF8/nqc7sFsdhznM5O2Oy6c7wEgcIgkck7crsEf8Acq9ZrqdVme74UyeSe5PLPc7sFisYvnc9Qc7sF4vHL2+7AcroEwOCQcrsFrdZu/v/9c7oEe70JxOKWcrwFzeancrsEcroEdrwIc7oFpdNe2Oy5c7sFc7oF9vvwgL8Qc7oFcrsEbX1x6QAAAPB0Uk5TAAI7hq7N5fD7+e/kyqt/MwFRtPH/7KxGCoDn33IGAXXtYwAz0sUjcPbyWgGi////////////////iwa3//////////+iBP//////////////////nwH/////////////hv////////////9Q//////////8i////////u////1L/5P//Wf/b//82////////j///////6f//////J////////4X/////tOb//9n////p//////j////3///n/9b/sP///4H/Vf///yL//+L///////+E//8v///P/0///9gE/0X/qesXQP//b4b/A1HXxFysvQAABCZJREFUeJyNlvdfFEcYxseGBcupaxeNxhIkNuS4U9F97IqiKBZU7AbOi6KoXFA5K6Am4Syx9xa70Qgae8OSWCL2GlssiUb9F7I7M7vs3O0dvL+87/vM+/3s7HRCfK1Y8RIlSwWVLlO2XHD5ChUrWUxKfJnKVapKglWrXqMwsmat2pKJ1akbEgCqV/8LM0i1oAYN/VFfNvIHqda4iTnV9KtAlCSFNjOBwr42VDRv0bJV6/A2EdZIm90gtw3zptq11xujOnSUoVunzl0KyK7dvL6lU1HdeyjFPXtF9+4T07dfeKyS9B8Qp7UOHCRgeg8HDwHihw4bruUJI0Yqnx5l0/LRwmhwcczYcYgf/404FIlJMhwTnDz71jDyfAwnTgKSJ/uO4ZQUYOo0Pp7T9Vnm8zUxFa7vfCHF0mY4MJNzs7R5r897OAmyzZRSLN2N2byfcxhVk6+osXD5pSRprgNJLJrH1mctlg0eB/MecpsPxwIWZahUMbbmo4YgORAlpWUilc1flrqPKjO1O+JNxtBoC2UsYtFiBavCPtYD44Wi73/4MTsmSpA8WMLW2VKlj2wvd0C8MMvLlqsL8qcVRi1RxkoarLKQ4kzqiKHGitVr2EJeK3R8HdazYAMpQX1zGcOMBVZtA2w0qpuwmfUyg5SkvgV6DjcWbNGwrUY1IRbbaLCdlKK+JXoJf79Dw34W5J3YRf1usof6VogW2vdq2D5BTkEk9ftJaepbo7fQfkDDfhHkg/BQf4iUoT4cfYT2tF8ZdThHkHNhpf4IKUt9G8QI7ZL9qEpF/yaqx5BN/XFSjvoInBALpGgVO+klJiOX+lMkmHor+hUFi8Bp6s+Q8tRHIrwo2FmkU3+OVKDehtiEwrHzF5BHg4ukIvX2ThhROHYSl9jBcJlUYkpnjBRLrqjY76L2B5826SqxVKNBF8iJQkniWmCLeGJec+M6DW4o27s662V/7YTR7M+b+bdE5TbusD7eVXZ3DaYNgDxFCmj33LjPogcKZqlDw7hRSEkLROU8xCO2aB7Tq7wuk20OzAiEPYGLjb70lJ6TIUEsmwBHun/qr2fIZ9HzF+xYbsBS51S45/qlXHjJd8Mrfgc0bMzyaTPhmG/6fzlPnuFvfvq91p8MTUI5NxvIXOhL3XsIvOTUm7cFF1wz3u5MckD2iPMuXbvthitf26/vjNdpW61mQSogr9ukr+vz//zrBh7lafl78crvqulxi5YoizF2Z8rB3GPJEWcvKMmd+/om/+D1xOg2UO+UfeX6/woeGJc8151604ePxMvCRht+x75tV6THmp17Oj3PaZDf+zxnFPsU6juGRnvzzgRSbPqsQNTrt+aUMu9zgv1Bz1/5fRgqFpKRZQY9fvoiAKSaZfHSVSJz4+6DIj2XLRsytu/ef+jI8VOfz128fNWM+R/J7aDOMmQI6AAAAABJRU5ErkJggg==`,q=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABsCAMAAAC4uKf/AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAelQTFRFAAAA////csEJdLwIcrwFc7sFcrsEc7oFcrsFcroFc7sEc7oEmcwzcr0Ec7sEcrsEc7oEcroEgMYOcrsFcrsEcrsEc7oFdLsGc7sEecIMcroGe70JcrsFcroEdMUMc7sFgP+AcrsEc7wFcrsFdroFdLsGc7oEd7sJcrsFcroHc7oEc7wGdrwLisUvlctDnc9QpNJdq9ZqgL9Ac7sFeb0Qm85Nvt+M1+u57fbf/f79////jsYcc7oEhcMnuNyB4O/H/P37gL8QcroFeb0R3u/Ffb8Xut2E9vrw+vz28vnper4Tv9+N+Pz08fjmzuept9t/odFYi8Yyc7oGe74Uqv9VpdNg2Oy6rdZtiMUsh8Qq3O7B6PPWstl3gMEd+Pvz4fDKnc9Rc70IdrwMyOSdmc1Js9p5dLsIg8Ii6fTZ3u/EicUu8Pfl/v7+vd6JdLsHnM5O9PnskMg67/fjiMQrcroFc7wGut2FhMIkfsAaudyC5fLRs9l40Oirx+OcoNBW4PDI6/XbrNZslstEwOCP1eq11Oq02ey8c7oEwuGSyOSec7sFisYwo9JcotFadbsJ9/vxttt+ttt93e7C4vDLf8Ab6/XcgMEeer4S0umw8/nr8vjo8fjnz+eqnM5PqtVo7fbgfb8Yh8Qpstl2fjtq6QAAAKN0Uk5TAAEdRGuStcXS3+z5BTp8vvT/Emm382hPrRWGG4/1FpcC7zXLNIv9HsdO7oX///////8Env////////8Jsv////8QxP//////////////////////A////////////////x////////////////////////+YUP//////////////////////tv//xv///////////////////////////////7ZbNuIAAAYqSURBVHicvVr3Q9s4FDYbkjDEKHsfs6ywSctomQmbHqtsKNCW3Ra6C3Qcd3B7dVzHXf/S83NikGxJthLw95vf0Bcrz09P0pMk8wgKDgkNC4+IjLLZ7baoyIjwsNCQ4CCBAczCER0TG4coiIuNiXacJ1N8QmISjUhFUuKl+PNhciSn2HlMXthTkgN/v9Q0mzGTF7a01ICo0jMyzVIBMjPS/abKyjYxf5rZzM7yiyonIVeUCpCbkCPOlZfvDxUg/xtBKkdBob9cCBUWCAVmUbH/VIDiIvNcJaWBcSFUWmKW6zJvmLLyisoqp7OqsqK8jGd32RRVdQ3Lv7auvqGxyXWKpsaG+rpalnVNtTHXlat03+aW1jYXBW2tLc10j6tXjLiuXaf5tTs7aEQqOpztNK/r1wzei8bV2dVNDt7jdveQku6uThob992qKXPo6e07HbN/YHBo2DMC4pEbw0ODA/2nqr5eD2Umv+WQUWJj1K2Gw9j4hF49MT6mhox7VK+uYXPpY37ypm+kqekZyjwpmJme8hndnNQpmV9Aic60atY7ytw8i8mL+Tmv3WyVTsX4uhe0eWNxyfdWt/hUgFu+t1ta1ChKqZnLoc2Hnd6f27e8YsyF0MqyN47mtGFZTMvKBRqj1duK851VM1SKwx3F4bbWoUDPladZU+6ugef6xqZZLoQ2N9bBZ+0uKS7M03LlaNbKVYWrb8s8FWBLmco1zbvl52jIEkh9pzKH2ztiXAjtbCszqfnfEkiuLLLeWFRi4959US6E7t9TooSMyVyyCnpAuigxv+0Hl8ymvNsSKczGudLJmq1K+b92/OGSZ1L538iv247XkxmEahLyxrpgbJxhC2JylsxcGWdcqWTdq+TDDX+5ENpQ8iQhyjyrzNMIxajyLQt8X1psKl83uQaknSYqYu/ggTWlz3TeoGEV/jY3sb7Z1KS1S1j2ws9aDoQLoWUYo5cQJfvIUnBhJ/yqKVO5l40VWAP6iE87xcsVT8T9HvwogzWl7OFDbs0orzgwShcuscfrM1U71DZzvHEePX4CIz15/IhnBSmom6i5vDkrERc5YSDeuvx0Vi1xZp9yzObBwolLEpVYJPbmUB9OscdYeebC8Izz18K/1oELkiAeo3FJM4wxzR7iuYvAc7blNOiJWjlaJovBBS2yRROzjkIvXBq8YJrOQIXXgktiZLJYXLAvW4wxB9g80JIdsBPNmKxuxQWxkhSEn9vUwt7hkOn/Usvlcr1kGh/K2jZ8jxMXJAXjBnXgT6l7fXilJ3vFNJ4AdR0uCZZC8Md6Wd/PdEev9WSv2dawD6jHBSFSKP7YIOsH2O5zejLO9z8gqxtwQagUhj82yvpBtvsbPdl3bOtBWd2IC8KkI+ypDMJ1iO3+vZ7sB7b1kKxuwnPokXSMPZ2A+zDb/Uc92U9s62HQn2CCYykSe6oANWVPp+Jnt5brF+r+1gsPGFRggkgpCnuqBPUI2x39qiX7jWM8AgaVmCBKwksCKOF6OO5o83eS6w/usgb7bryks0n4ygnri5vnjv78C+c6+JtrDJPuxJ7tgmTo7bszrndv+bZ6MqFpBLxXud4bWeqnUShAAB9Usg8GhpQAEQl9MbIb+tCPwJ7KDT5qMTLloy7HBBFSOPZklK7EyHTpKlwoEYuRURKxyBIjRkZZYkQWTzGyf1y6xVOkLBAio5UFIgWPENm4S1/wiJRyQmS0Uk6oSAWc1o4HXDN6kSpUfsv4qJJ95JrRy2+hjYWMTyrZJ64ZfWMhuGU63VxwNhWIuWUS3Qwi9PmLy/XlM99Gvxm85Oc2F/1LO1jHwdzmWrqBl5IJwws+mrD00MXS4yRrD8ou4gjwP0KGHQFae7gpZZMOF3psa+2BtKVH7dZeIlh6PWLtxY+1V1pSkYWXddZeQ/IvWL+yL1i/+nPBanR1fEi7Oj709+pY6FLcY+ZSnNvMQL/u3zO+7t8Tv+63tpGB16KxT2/R2Pe/RcPa5hPJqK3mRG2rOTmHthrJ2oYhSVoItBVqwTyXtU1eUkDta5T1ywhWNubJyHpgWcshwMJmSoCFbaIAx665Btjdc2rwNW7tTTin1l4vrGta9kFpxz46Vtuxj4Xbsf8HdOj2IeCOqF0AAAAASUVORK5CYII=`,J=a(),Y=c(`#1683fb`,`#1683fb`,`#ffffff`,`#0576f1`,`#0576f1`,`#ffffff`),X={smMaxWidth:767,mdMinWidth:768,mdMaxWidth:1048,lgMinWidth:1049,lgMaxWidth:1365,xlMinWidth:1366},Z={sm:`@media (max-width: ${X.smMaxWidth}px)`,smmd:`@media (max-width: ${X.mdMaxWidth}px)`,md:`@media (min-width: ${X.mdMinWidth}px) and (max-width: ${X.mdMaxWidth}px)`,mdlg:`@media (min-width: ${X.mdMinWidth}px) and (max-width: ${X.lgMaxWidth}px)`,lg:`@media (min-width: ${X.lgMinWidth}px) and (max-width: ${X.lgMaxWidth}px)`,lgxl:`@media (min-width: ${X.lgMinWidth}px)`,xl:`@media (min-width: ${X.xlMinWidth}px)`},Q=(0,T.memo)(({strings:e})=>{let t={strings:e,autoStart:!0,loop:!0,delay:70,deleteSpeed:50,pauseFor:1500};return(0,J.jsx)(`span`,{className:r`
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
      `,children:(0,J.jsx)(w.default,{options:t})})});Q.displayName=`TypingText`;var $=(0,T.memo)(()=>{let e=o();y();let t=_();return(0,J.jsxs)(`div`,{className:r`
        display: flex;
        flex-direction: column;
        align-items: center;
      `,children:[(0,J.jsxs)(`div`,{className:r`
          width: 100%;
          padding-top: 20px;
          padding-bottom: 20px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 30px;

          ${Z.sm} {
            padding-left: 15px;
            padding-right: 15px;
            padding-top: 7px;
            padding-bottom: 15px;
          }

          ${Z.md} {
            padding-top: 20px;
          }

          ${Z.mdlg} {
            padding-left: 28px;
            padding-right: 28px;
          }

          ${Z.xl} {
            width: 1280px;
          }
        `,children:[(0,J.jsx)(`div`,{className:r`
            flex-shrink: 0;
          `,children:(0,J.jsx)(C,{})}),(0,J.jsxs)(`div`,{className:r`
            display: flex;
            align-items: center;
            min-width: 0;
          `,children:[(0,J.jsx)(`div`,{className:r`
              margin-right: 25px;
              overflow: hidden;

              ${Z.sm} {
                margin-right: 10px;
                margin-left: 10px;
              }
            `,children:(0,J.jsx)(x,{size:`large`,placement:`bottom`,dropdownToggleClassName:r`
                width: 100%;
              `})}),(0,J.jsx)(v,{href:`/login`,className:n(Y,r`
                font-size: 16px;
                padding: 12px 19px;
                font-weight: 700;
                line-height: 22px;
                flex-shrink: 0;

                ${Z.sm} {
                  font-size: 14px;
                  padding: 7px 10px;
                  line-height: 22px;
                }

                ${Z.md} {
                  line-height: 12px;
                }
              `),children:(0,J.jsx)(s,{id:`web.landing_page.get_started.button`,description:`Primary call-to-action button on the landing page that starts login.`,defaultMessage:`Get started`})})]})]}),(0,J.jsxs)(`div`,{className:r`
          display: flex;
          flex-direction: row;
          margin-bottom: 70px;

          ${Z.sm} {
            padding-left: 15px;
            padding-right: 15px;
          }

          ${Z.smmd} {
            flex-direction: column;
            max-width: 556px;
          }

          ${Z.mdlg} {
            padding-left: 28px;
            padding-right: 28px;
          }

          ${Z.lg} {
            width: 100%;
          }

          ${Z.xl} {
            width: 1280px;
          }
        `,children:[(0,J.jsxs)(`div`,{className:r`
            display: flex;
            flex-direction: column;
            flex-grow: 1;
          `,children:[(0,J.jsx)(`h1`,{className:r`
              font-size: 64px;
              line-height: 1.08;
              font-weight: 700;
              color: #011722;
              margin: 0 0 36px;

              ${Z.sm} {
                font-size: 51px;
                margin: 0 0 26px;
              }

              ${Z.md} {
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
            `,children:(0,J.jsx)(s,{id:`web.landing_page.title`,description:`Hero headline on the official landing page with animated keyword.`,defaultMessage:`One vault for all<br></br><b>your {typing_text}</b>`,values:{br:()=>(0,J.jsx)(`br`,{}),b:e=>(0,J.jsx)(`span`,{className:r`
                      font-weight: 800;
                    `,children:e}),typing_text:(0,J.jsx)(Q,{strings:[e.formatMessage({id:`web.landing_page.title.typing_text_1`,description:`First animated keyword in the landing page hero headline.`,defaultMessage:`private files.`}),e.formatMessage({id:`web.landing_page.title.typing_text_2`,description:`Second animated keyword in the landing page hero headline.`,defaultMessage:`confidentials.`}),e.formatMessage({id:`web.landing_page.title.typing_text_3`,description:`Third animated keyword in the landing page hero headline.`,defaultMessage:`secrets.`})]})}})}),(0,J.jsx)(`p`,{className:r`
              font-size: 18px;
              color: #011722;
              margin: 0 0 38px;

              ${Z.sm} {
                font-size: 14px;
                margin: 0 0 26px;
              }

              ${Z.lgxl} {
                width: 565px;
              }
            `,children:(0,J.jsx)(s,{id:`web.landing_page.description`,description:`Supporting hero paragraph on the official landing page.`,defaultMessage:`Powerful, open source, client-side, zero-knowledge encryption. Unlock enhanced security for your most sensitive files with Koofr Vault.`})}),(0,J.jsx)(v,{href:`/login`,className:n(Y,r`
                font-size: 18px;
                padding: 9px 21px;
                font-weight: 700;

                ${Z.smmd} {
                  width: 100%;
                }

                ${Z.lgxl} {
                  width: 500px;
                }
              `),children:(0,J.jsx)(s,{id:`web.landing_page.get_started.button`,description:`Primary call-to-action button on the landing page that starts login.`,defaultMessage:`Get started`})}),t.appStoreUrl!==void 0||t.googlePlayUrl!==void 0||t.fDroidUrl!==void 0?(0,J.jsxs)(`div`,{className:r`
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                gap: 20px;
                margin-top: 32px;

                ${Z.smmd} {
                  justify-content: center;
                }
              `,children:[t.googlePlayUrl===void 0?null:(0,J.jsx)(`a`,{href:t.googlePlayUrl,target:`_blank`,rel:`noreferrer`,children:(0,J.jsx)(g,{image:f,image2x:m,width:122,height:36})}),t.appStoreUrl===void 0?null:(0,J.jsx)(`a`,{href:t.appStoreUrl,target:`_blank`,rel:`noreferrer`,children:(0,J.jsx)(g,{image:d,image2x:h,width:117,height:36})}),t.fDroidUrl===void 0?null:(0,J.jsx)(`a`,{href:t.fDroidUrl,target:`_blank`,rel:`noreferrer`,children:(0,J.jsx)(g,{image:p,image2x:u,width:123,height:36})})]}):null]}),(0,J.jsx)(`div`,{className:r`
            ${Z.smmd} {
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 38px 0;
            }

            ${Z.lgxl} {
              padding: 25px 33px 0;
              flex-shrink: 0;
            }
          `,children:(0,J.jsx)(g,{image:P,image2x:F,width:480,height:338,classNameForSize:(e,t)=>r`
              ${Z.sm} {
                background-size: 290px ${290*t/e}px;
                width: 290px;
                height: ${290*t/e}px;
              }

              @media (min-width: 1000px) and (max-width: 1049px) {
                background-size: ${e*.6}px ${t*.6}px;
                width: ${e*.6}px;
                height: ${t*.6}px;
              }

              @media (min-width: 1050px) and (max-width: 1169px) {
                background-size: ${e*.7}px ${t*.7}px;
                width: ${e*.7}px;
                height: ${t*.7}px;
              }
              @media (min-width: 1170px) and (max-width: 1271px) {
                background-size: ${e*.8}px ${t*.8}px;
                width: ${e*.8}px;
                height: ${t*.8}px;
              }
            `})})]}),(0,J.jsxs)(`div`,{className:r`
          display: flex;
          flex-direction: column;
          margin-bottom: 107px;

          ${Z.sm} {
            padding-left: 15px;
            padding-right: 15px;
          }

          ${Z.smmd} {
            max-width: 556px;
          }

          ${Z.mdlg} {
            padding-left: 28px;
            padding-right: 28px;
          }

          ${Z.lg} {
            width: 100%;
          }

          ${Z.xl} {
            width: 1280px;
          }
        `,children:[(0,J.jsx)(`h2`,{className:r`
            font-size: 30px;
            font-weight: 700;
            color: #011722;
            margin: 0 0 23px;
          `,children:(0,J.jsx)(s,{id:`web.landing_page.section_1.title`,description:`Section title describing overall security benefits on the landing page.`,defaultMessage:`Extra strong protection`})}),(0,J.jsx)(`p`,{className:r`
            font-size: 18px;
            color: #011722;

            ${Z.smmd} {
              margin: 0 0 50px;
            }

            ${Z.lgxl} {
              width: 500px;
              margin: 0 0 32px;
            }
          `,children:(0,J.jsx)(s,{id:`web.landing_page.section_1.content`,description:`Section paragraph explaining Vault and Koofr with security metaphor.`,defaultMessage:`Koofr Vault is an open source, client-side, zero-knowledge encrypted storage application by <a>Koofr cloud storage</a>. It's like having a box with a unique lock in your trunk: an extra layer of security to protect your files.`,values:{a:e=>(0,J.jsx)(`a`,{href:`https://koofr.eu`,target:`_blank`,rel:`noopener`,children:e})}})}),(0,J.jsxs)(`div`,{className:r`
            display: flex;

            ${Z.smmd} {
              flex-direction: column;
              align-items: center;
            }

            ${Z.lgxl} {
              flex-direction: row;
              justify-content: space-between;
            }
          `,children:[(0,J.jsxs)(`div`,{className:r`
              display: flex;
              flex-direction: column;
              width: 286px;

              @media (min-width: 1000px) and (max-width: 1069px) {
                width: 250px;
              }

              @media (min-width: 1070px) and (max-width: 1170px) {
                width: 250px;
              }
            `,children:[(0,J.jsx)(`div`,{className:r`
                height: 150px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-bottom: 22px;
              `,children:(0,J.jsx)(g,{image:B,image2x:V,width:70,height:86})}),(0,J.jsx)(`h3`,{className:r`
                font-size: 18px;
                font-weight: 600;
                color: #011722;
                margin: 0 0 10px;
              `,children:(0,J.jsx)(s,{id:`web.landing_page.section_2.title`,description:`Feature card title about private Safe Key on the landing page.`,defaultMessage:`Private Safe Key`})}),(0,J.jsx)(`p`,{className:r`
                font-size: 18px;
                color: #011722;
                margin: 0;
              `,children:(0,J.jsx)(s,{id:`web.landing_page.section_2.content`,description:`Feature card text explaining choosing a Safe Key.`,defaultMessage:`Choose a Safe Key to create a Safe Box in your Koofr Vault.`})})]}),(0,J.jsxs)(`div`,{className:r`
              display: flex;
              flex-direction: column;
              width: 286px;

              @media (min-width: 1000px) and (max-width: 1069px) {
                width: 250px;
              }

              @media (min-width: 1070px) and (max-width: 1170px) {
                width: 250px;
              }
            `,children:[(0,J.jsx)(`div`,{className:r`
                height: 150px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-bottom: 22px;
              `,children:(0,J.jsx)(g,{image:H,image2x:U,width:70,height:86})}),(0,J.jsx)(`h3`,{className:r`
                font-size: 18px;
                font-weight: 600;
                color: #011722;
                margin: 0 0 10px;
              `,children:(0,J.jsx)(s,{id:`web.landing_page.section_3.title`,description:`Feature card title about encryption happening in the browser.`,defaultMessage:`It all stays in your browser`})}),(0,J.jsx)(`p`,{className:r`
                font-size: 18px;
                color: #011722;
                margin: 0;
              `,children:(0,J.jsx)(s,{id:`web.landing_page.section_3.content`,description:`Feature card text about on-device encryption/decryption.`,defaultMessage:`Your Safe Box files are encrypted or decrypted on demand, on your device.`})})]}),(0,J.jsxs)(`div`,{className:r`
              display: flex;
              flex-direction: column;
              width: 286px;

              @media (min-width: ${X.lgMinWidth}px) and (max-width: 1069px) {
                width: 210px;
              }

              @media (min-width: 1070px) and (max-width: 1170px) {
                width: 250px;
              }
            `,children:[(0,J.jsx)(`div`,{className:r`
                height: 150px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-bottom: 22px;
              `,children:(0,J.jsx)(g,{image:W,image2x:G,width:70,height:86})}),(0,J.jsx)(`h3`,{className:r`
                font-size: 18px;
                font-weight: 600;
                color: #011722;
                margin: 0 0 10px;
              `,children:(0,J.jsx)(s,{id:`web.landing_page.section_4.title`,description:`Feature card title about exclusive access to encrypted content.`,defaultMessage:`Only you have access`})}),(0,J.jsx)(`p`,{className:r`
                font-size: 18px;
                color: #011722;
                margin: 0;
              `,children:(0,J.jsx)(s,{id:`web.landing_page.section_4.content`,description:`Feature card text explaining that content isn't accessible without the Safe Key.`,defaultMessage:`Cloud content is encrypted and never accessible without your Safe Key.`})})]})]})]}),(0,J.jsxs)(`div`,{className:r`
          width: 100%;
          display: flex;

          ${Z.sm} {
            padding-left: 15px;
            padding-right: 15px;
          }

          ${Z.smmd} {
            flex-direction: column-reverse;
            align-items: center;
            margin-bottom: 120px;
          }

          ${Z.mdlg} {
            padding-left: 28px;
            padding-right: 28px;
          }

          ${Z.lgxl} {
            flex-direction: row;
            align-items: center;
            margin-bottom: 120px;
          }

          ${Z.xl} {
            width: 1280px;
          }
        `,children:[(0,J.jsx)(`div`,{className:r`
            width: 60%;
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-grow: 1;
          `,children:(0,J.jsx)(g,{image:M,image2x:N,width:356,height:414,classNameForSize:(e,t)=>r`
              ${Z.sm} {
                background-size: 290px ${290*t/e}px;
                width: 290px;
                height: ${290*t/e}px;
              }
            `})}),(0,J.jsxs)(`div`,{className:r`
            display: flex;
            flex-direction: column;
            max-width: 500px;
            flex-shrink: 0;
          `,children:[(0,J.jsx)(`h2`,{className:r`
              font-size: 30px;
              font-weight: 700;
              color: #011722;
              margin: 0 0 22px;
            `,children:(0,J.jsx)(s,{id:`web.landing_page.section_5.title`,description:`Section title about privacy and exclusive access.`,defaultMessage:`For your eyes only`})}),(0,J.jsx)(`p`,{className:r`
              font-size: 18px;
              color: #011722;
              margin: 0 0 32px;
            `,children:(0,J.jsx)(s,{id:`web.landing_page.section_5.content_1`,description:`Section paragraph describing local encryption before upload.`,defaultMessage:`Your files are encrypted, file names and all content included, locally on your device with your Safe Key and some magic salt before they are sent to your Vault.`})}),(0,J.jsx)(`p`,{className:r`
              font-size: 18px;
              color: #011722;
              margin: 0 0 32px;

              ${Z.smmd} {
                margin: 0 0 70px;
              }
            `,children:(0,J.jsx)(s,{id:`web.landing_page.section_5.content_2`,description:`Section paragraph explaining that Koofr never receives unencrypted data.`,defaultMessage:`Neither your Safe key nor any other unencrypted file data or metadata is sent to or stored by <a>Koofr</a>. Only you can decrypt and access your Vault files.`,values:{a:e=>(0,J.jsx)(`a`,{href:`https://koofr.eu`,target:`_blank`,rel:`noopener`,children:e})}})})]})]}),(0,J.jsx)(`div`,{className:r`
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #011722;

          ${Z.smmd} {
            padding: 60px 0 60px;
          }

          ${Z.lgxl} {
            padding: 111px 0 120px;
          }
        `,children:(0,J.jsxs)(`div`,{className:r`
            display: flex;

            ${Z.sm} {
              padding-left: 15px;
              padding-right: 15px;
            }

            ${Z.smmd} {
              flex-direction: column;
              max-width: 556px;
            }

            ${Z.mdlg} {
              padding-left: 28px;
              padding-right: 28px;
            }

            ${Z.lg} {
              width: 100%;
            }

            ${Z.lgxl} {
              flex-direction: row;
              justify-content: space-between;
            }

            ${Z.xl} {
              width: 1280px;
            }
          `,children:[(0,J.jsx)(`div`,{className:r`
              display: flex;
              flex-direction: column;
              flex-grow: 1;

              ${Z.smmd} {
                align-items: center;
                margin-bottom: 40px;
              }

              ${Z.lgxl} {
                margin-top: 71px;
              }

              @media (min-width: ${X.lgMinWidth}px) and (max-width: 1249px) {
                display: none;
              }
            `,children:(0,J.jsx)(`a`,{href:`https://github.com/koofr/vault`,target:`_blank`,rel:`noreferrer`,children:(0,J.jsx)(g,{image:I,image2x:L,width:308,height:150})})}),(0,J.jsxs)(`div`,{className:r`
              display: flex;
              flex-direction: column;
              flex-shrink: 0;

              ${Z.lgxl} {
                width: 500px;
                margin: 0 40px;
              }
            `,children:[(0,J.jsx)(`h2`,{className:r`
                font-size: 30px;
                font-weight: 700;
                color: #f4f5f5;
                margin: 0 0 22px;
              `,children:(0,J.jsx)(s,{id:`web.landing_page.section_6.title`,description:`Section title highlighting that Koofr Vault is fully open source.`,defaultMessage:`Fully open source`})}),(0,J.jsx)(`p`,{className:r`
                font-size: 18px;
                color: #f4f5f5;
                margin: 0 0 32px;
              `,children:(0,J.jsx)(s,{id:`web.landing_page.section_6.content_1`,description:`Section paragraph about open source code and encryption primitives.`,defaultMessage:`Koofr Vault is <a>open source</a>, so you can always check that the code does exactly what is promised - and nothing more. File encryption is performed using NaCl SecretBox, which uses XSalsa20 cipher and Poly1305 for ensuring integrity.`,values:{a:e=>(0,J.jsx)(`a`,{href:`https://github.com/koofr/vault`,target:`_blank`,rel:`noreferrer`,className:r`
                        ${l} {
                          color: #f4f5f5;
                          text-decoration: underline;
                        }
                      `,children:e})}})}),(0,J.jsx)(`p`,{className:r`
                font-size: 18px;
                color: #f4f5f5;

                ${Z.smmd} {
                  margin: 0 0 50px;
                }

                ${Z.lgxl} {
                  margin: 0 0 78px;
                }

                @media (min-width: ${X.lgMinWidth}px) and (max-width: 1249px) {
                  margin: 0 0 0;
                }
              `,children:(0,J.jsx)(s,{id:`web.landing_page.section_6.content_2`,description:`Section paragraph about rclone compatibility.`,defaultMessage:`It is compatible with <a>rclone</a> . This means that you can download your encrypted files and decrypt them locally using the rclone command-line tool.`,values:{a:e=>(0,J.jsx)(`a`,{href:`https://rclone.org`,target:`_blank`,rel:`noreferrer`,className:r`
                        ${l} {
                          color: #f4f5f5;
                          text-decoration: underline;
                        }
                      `,children:e})}})})]}),(0,J.jsxs)(`div`,{className:r`
              display: flex;
              flex-direction: column;

              ${Z.smmd} {
                align-items: center;
              }

              ${Z.lgxl} {
                justify-content: flex-end;
                align-items: flex-end;
                flex-grow: 1;
              }

              @media (min-width: ${X.lgMinWidth}px) and (max-width: 1249px) {
                align-items: center;
              }
            `,children:[(0,J.jsx)(`div`,{className:r`
                display: none;

                @media (min-width: ${X.lgMinWidth}px) and (max-width: 1249px) {
                  display: flex;
                  margin: 0 22px 30px 0;
                }
              `,children:(0,J.jsx)(`a`,{href:`https://github.com/koofr/vault`,target:`_blank`,rel:`noreferrer`,children:(0,J.jsx)(g,{image:I,image2x:L,width:308,height:150})})}),(0,J.jsxs)(`div`,{className:r`
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                border: 1px solid #565656;
                width: 288px;
                height: 152px;
              `,children:[(0,J.jsx)(`a`,{href:`https://github.com/koofr/vault`,target:`_blank`,rel:`noreferrer`,className:r`
                  margin: 0 23px;
                `,children:(0,J.jsx)(g,{image:K,image2x:q,width:54,height:54})}),(0,J.jsx)(`a`,{href:`https://rclone.org/`,target:`_blank`,rel:`noreferrer`,className:r`
                  margin: 0 23px;
                `,children:(0,J.jsx)(g,{image:R,image2x:z,width:55,height:52})})]})]})]})}),(0,J.jsxs)(`div`,{className:r`
          display: flex;

          ${Z.sm} {
            padding-left: 15px;
            padding-right: 15px;
          }

          ${Z.smmd} {
            flex-direction: column;
            max-width: 556px;
            padding-top: 60px;
            padding-bottom: 60px;
          }

          ${Z.mdlg} {
            padding-left: 28px;
            padding-right: 28px;
          }

          ${Z.lg} {
            width: 100%;
          }

          ${Z.lgxl} {
            flex-direction: row;
            justify-content: center;
            padding-top: 76px;
            padding-bottom: 76px;
          }

          ${Z.xl} {
            width: 1280px;
          }
        `,children:[(0,J.jsxs)(`div`,{className:r`
            display: flex;
            flex-direction: column;
            align-items: center;

            ${Z.smmd} {
              margin-bottom: 50px;
            }

            ${Z.lgxl} {
              width: 350px;
            }
          `,children:[(0,J.jsx)(`div`,{className:r`
              width: 150px;
              height: 112px;
              border: 1px solid #d4d6d7;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin-bottom: 15px;
            `,children:(0,J.jsx)(g,{image:E,image2x:D,width:70,height:61})}),(0,J.jsx)(`p`,{className:r`
              font-size: 18px;
              font-weight: 600;
              color: #011722;
              margin: 0;
              text-align: center;
            `,children:(0,J.jsx)(s,{id:`web.landing_page.section_7.title`,description:`Feature highlight label for client-side encryption.`,defaultMessage:`Client-side encryption`})})]}),(0,J.jsxs)(`div`,{className:r`
            display: flex;
            flex-direction: column;
            align-items: center;

            ${Z.smmd} {
              margin-bottom: 50px;
            }

            ${Z.lgxl} {
              width: 350px;
            }
          `,children:[(0,J.jsx)(`div`,{className:r`
              width: 150px;
              height: 112px;
              border: 1px solid #d4d6d7;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin-bottom: 15px;
            `,children:(0,J.jsx)(g,{image:O,image2x:k,width:70,height:61})}),(0,J.jsx)(`p`,{className:r`
              font-size: 18px;
              font-weight: 600;
              color: #011722;
              margin: 0;
              text-align: center;
            `,children:(0,J.jsx)(s,{id:`web.landing_page.section_8.title`,description:`Feature highlight label for verifiable source code.`,defaultMessage:`Verifiable source code`})})]}),(0,J.jsxs)(`div`,{className:r`
            display: flex;
            flex-direction: column;
            align-items: center;

            ${Z.smmd} {
              margin-bottom: 0;
            }

            ${Z.lgxl} {
              width: 350px;
            }
          `,children:[(0,J.jsx)(`div`,{className:r`
              width: 150px;
              height: 112px;
              border: 1px solid #d4d6d7;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin-bottom: 15px;
            `,children:(0,J.jsx)(g,{image:A,image2x:j,width:70,height:61})}),(0,J.jsx)(`p`,{className:r`
              font-size: 18px;
              font-weight: 600;
              color: #011722;
              margin: 0;
              text-align: center;
            `,children:(0,J.jsx)(s,{id:`web.landing_page.section_9.title`,description:`Feature highlight label for zero-knowledge design.`,defaultMessage:`Zero knowledge`})})]})]}),(0,J.jsx)(`div`,{className:r`
          width: 100%;
          border-bottom: 1px solid #d4d6d7;

          ${Z.smmd} {
            margin-bottom: 60px;
          }

          ${Z.lgxl} {
            margin-bottom: 111px;
          }
        `}),(0,J.jsxs)(`div`,{className:r`
          display: flex;
          flex-direction: column;
          align-items: center;

          ${Z.sm} {
            padding-left: 15px;
            padding-right: 15px;
          }

          ${Z.smmd} {
            margin: 0 0 60px;
          }

          ${Z.lgxl} {
            margin: 0 0 111px;
          }
        `,children:[(0,J.jsxs)(`div`,{className:r`
            display: flex;
            flex-direction: column;
            max-width: 500px;
          `,children:[(0,J.jsx)(`h2`,{className:r`
              font-size: 30px;
              font-weight: 700;
              color: #011722;
              flex-grow: 1;
              margin: 0 0 22px;
              text-align: center;
            `,children:(0,J.jsx)(s,{id:`web.landing_page.section_10.title`,description:`Call-to-action section title encouraging users to start using Koofr Vault.`,defaultMessage:`Unlock your Vault`})}),(0,J.jsx)(`p`,{className:r`
              font-size: 18px;
              color: #011722;
              margin: 0 0 43px;
              text-align: center;
            `,children:(0,J.jsx)(s,{id:`web.landing_page.section_10.description`,description:`Call-to-action description mentioning Koofr plans.`,defaultMessage:`Start encrypting your cloud storage files in just a few minutes. Included in all <a>Koofr plans</a>.`,values:{a:e=>(0,J.jsx)(`a`,{href:`https://koofr.eu/pricing`,target:`_blank`,rel:`noopener`,children:e})}})}),(0,J.jsx)(v,{href:`/login`,className:n(Y,r`
                width: 100%;
                font-size: 18px;
                padding: 9px 21px;
                font-weight: 700;
              `),children:(0,J.jsx)(s,{id:`web.landing_page.get_started.button`,description:`Primary call-to-action button on the landing page that starts login.`,defaultMessage:`Get started`})})]}),(0,J.jsx)(`p`,{className:r`
            font-size: 18px;
            color: #011722;
            margin: 43px 0 0;
            text-align: center;
          `,children:(0,J.jsx)(s,{id:`web.landing_page.section_10.questions`,description:`Support link text for questions about Koofr Vault on the landing page.`,defaultMessage:`Have questions about Koofr Vault? <a>Find answers here</a>.`,values:{a:e=>(0,J.jsx)(`a`,{href:`https://koofr.eu/help/koofr-vault`,target:`_blank`,rel:`noopener`,children:e})}})})]}),(0,J.jsx)(`div`,{className:r`
          width: 100%;
          border-bottom: 1px solid #d4d6d7;
        `}),(0,J.jsxs)(`div`,{className:r`
          ${Z.smmd} {
            padding: 30px 28px;
          }

          ${Z.lgxl} {
            padding: 40px 28px;
          }
        `,children:[(0,J.jsx)(`p`,{className:r`
            font-size: 14px;
            color: #011722;
            text-align: center;
            margin: 0 0 15px;
          `,children:(0,J.jsx)(s,{id:`web.landing_page.copyright.text`,description:`Footer copyright line on the landing page with company link and current year.`,defaultMessage:`© {year}. <a>Koofr d.o.o.</a> all rights reserved.`,values:{year:new Date().getFullYear(),a:e=>(0,J.jsx)(`a`,{href:`https://koofr.eu`,target:`_blank`,rel:`noopener`,className:r`
                    font-weight: 600;
                    ${l} {
                      color: #011722;
                      text-decoration: none;
                    }
                  `,children:e})}})}),(0,J.jsxs)(`div`,{className:r`
            font-size: 13px;
            color: #011722;
            text-align: center;
          `,children:[(0,J.jsx)(b,{}),(0,J.jsx)(S,{})]})]})]})});$.displayName=`LandingPageOfficial`;export{$ as LandingPageOfficial};
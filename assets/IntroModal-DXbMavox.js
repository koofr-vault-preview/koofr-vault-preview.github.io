import{r as k,j as m,m as Fe}from"./DynamicThemeProvider-CxehgrR0.js";import{a as Be,c as T}from"./emotion-css.esm-CiHGz3gB.js";import{a as Me,n as De,g as Ee}from"./Button-Dt6jELX4.js";import{r as He}from"./range-od_q854e.js";import{i as ke,R as de,g as Re,a as Ue,b as _e,c as qe,f as $e,d as Ge}from"./RetinaImage-C1tj6ORK.js";import{M as Ke,b as We,c as Ye,d as Je,e as Xe,A as Qe,f as Ze,h as en}from"./mainWebAuthenticated-D-bLv1yt.js";import"./NavbarSticky-DuO2swp8.js";import"./index-CGvPQgHA.js";function nn(e,n,t,i,a){return i+(a-i)*((e-n)/(t-n))}function xe(e){return typeof e=="number"}function Ie(e){return typeof e=="string"}function pe(e){return Object.prototype.toString.call(e)==="[object Object]"}function rn(e){return Array.isArray(e)}function je(e){return pe(e)||rn(e)}function D(e){return Math.abs(e)}function he(e){return e?e/D(e):0}function ue(e,n){return D(e-n)}function tn(e,n){if(e===0||n===0||D(e)<=D(n))return 0;var t=ue(D(e),D(n));return D(t/e)}function an(e){var n=Math.pow(10,e);return function(t){return Math.round(t*n)/n}}function le(e){return re(e).map(Number)}function X(e){return e[ve(e)]}function ve(e){return Math.max(0,e.length-1)}function re(e){return Object.keys(e)}function Te(e,n){return[e,n].reduce(function(t,i){return re(i).forEach(function(a){var s=t[a],o=i[a],l=pe(s)&&pe(o);t[a]=l?Te(s,o):o}),t},{})}function Ne(e,n){var t=re(e),i=re(n);return t.length!==i.length?!1:t.every(function(a){var s=e[a],o=n[a];return typeof s=="function"?"".concat(s)==="".concat(o):!je(s)||!je(o)?s===o:Ne(s,o)})}function on(e,n){var t={start:i,center:a,end:s};function i(){return 0}function a(u){return s(u)/2}function s(u){return n-u}function o(){return n*Number(e)}function l(u){return xe(e)?o():t[e](u)}var v={measure:l};return v}function sn(e){var n=0;function t(o,l){return function(){o===!!n&&l()}}function i(){n=window.requestAnimationFrame(e)}function a(){window.cancelAnimationFrame(n),n=0}var s={proceed:t(!0,i),start:t(!1,i),stop:t(!0,a)};return s}function cn(e,n){var t=e==="y"?"y":"x",i=e==="y"?"x":"y",a=l(),s=v();function o(c){var r=c.width,d=c.height;return t==="x"?r:d}function l(){return t==="y"?"top":n==="rtl"?"right":"left"}function v(){return t==="y"?"bottom":n==="rtl"?"left":"right"}var u={scroll:t,cross:i,startEdge:a,endEdge:s,measureSize:o};return u}function oe(e,n){var t=D(e-n);function i(u){return u<e}function a(u){return u>n}function s(u){return i(u)||a(u)}function o(u){return s(u)?i(u)?e:n:u}function l(u){return t?u-t*Math.ceil((u-n)/t):u}var v={length:t,max:n,min:e,constrain:o,reachedAny:s,reachedMax:a,reachedMin:i,removeOffset:l};return v}function Ce(e,n,t){var i=oe(0,e),a=i.min,s=i.constrain,o=e+1,l=v(n);function v(p){return t?D((o+p)%o):s(p)}function u(){return l}function c(p){return l=v(p),f}function r(p){return c(u()+p)}function d(){return Ce(e,u(),t)}var f={add:r,clone:d,get:u,set:c,min:a,max:e};return f}function un(e){var n=e==="rtl"?-1:1;function t(a){return a*n}var i={apply:t};return i}function fe(){var e=[];function n(a,s,o,l){return l===void 0&&(l={passive:!0}),a.addEventListener(s,o,l),e.push(function(){return a.removeEventListener(s,o,l)}),i}function t(){return e=e.filter(function(a){return a()}),i}var i={add:n,removeAll:t};return i}function ee(e){var n=e;function t(){return n}function i(r){return n=u(r),c}function a(r){return n+=u(r),c}function s(r){return n-=u(r),c}function o(r){return n*=r,c}function l(r){return n/=r,c}function v(){return n!==0&&l(n),c}function u(r){return xe(r)?r:r.get()}var c={add:a,divide:l,get:t,multiply:o,normalize:v,set:i,subtract:s};return c}function ln(e,n,t,i,a,s,o,l,v,u,c,r,d,f,p,E){var y=e.cross,g=["INPUT","SELECT","TEXTAREA"],x={passive:!1},b=ee(0),w=fe(),S=fe(),I=d.measure(20),A={mouse:300,touch:400},M={mouse:500,touch:600},P=p?5:16,_=1,H=0,Y=0,W=!1,G=!1,z=!1,C=!1;function ne(){var h=t;w.add(h,"dragstart",function(L){return L.preventDefault()},x).add(h,"touchmove",function(){},x).add(h,"touchend",function(){}).add(h,"touchstart",ie).add(h,"mousedown",ie).add(h,"touchcancel",K).add(h,"contextmenu",K).add(h,"click",R,!0)}function V(){var h=C?document:t;S.add(h,"touchmove",Z,x).add(h,"touchend",K).add(h,"mousemove",Z,x).add(h,"mouseup",K)}function q(){w.removeAll(),S.removeAll()}function J(h){var L=h.nodeName||"";return g.indexOf(L)>-1}function ae(){var h=p?M:A,L=C?"mouse":"touch";return h[L]}function se(h,L){var $=c.clone().add(he(h)*-1),N=$.get()===c.min||$.get()===c.max,U=u.byDistance(h,!p).distance;return p||D(h)<I?U:!f&&N?U*.4:E&&L?U*.5:u.byIndex($.get(),0).distance}function ie(h){if(C=!a.isTouchEvent(h),!(C&&h.button!==0)&&!J(h.target)){var L=ue(i.get(),s.get())>=2,$=C||!L;W=!0,a.pointerDown(h),b.set(i),i.set(s),v.useBaseMass().useSpeed(80),V(),H=a.readPoint(h),Y=a.readPoint(h,y),r.emit("pointerDown"),$&&(z=!1)}}function Z(h){if(!G&&!C){if(!h.cancelable)return K(h);var L=a.readPoint(h),$=a.readPoint(h,y),N=ue(L,H),U=ue($,Y);if(G=N>U,!G&&!z)return K(h)}var ce=a.pointerMove(h);!z&&ce&&(z=!0),o.start(),i.add(n.apply(ce)),h.preventDefault()}function K(h){var L=u.byDistance(0,!1),$=L.index!==c.get(),N=a.pointerUp(h)*ae(),U=se(n.apply(N),$),ce=tn(N,U),Le=ue(i.get(),b.get())>=.5,be=$&&ce>.75,Oe=D(N)<I,Ve=be?10:P,ze=be?_+2.5*ce:_;Le&&!C&&(z=!0),G=!1,W=!1,S.removeAll(),v.useSpeed(Oe?9:Ve).useMass(ze),l.distance(U,!p),C=!1,r.emit("pointerUp")}function R(h){z&&(h.stopPropagation(),h.preventDefault())}function j(){return!z}function B(){return W}var O={addActivationEvents:ne,clickAllowed:j,pointerDown:B,removeAllEvents:q};return O}function dn(e){var n=170,t,i;function a(r){return typeof TouchEvent<"u"&&r instanceof TouchEvent}function s(r){return r.timeStamp}function o(r,d){var f=d||e.scroll,p="client".concat(f==="x"?"X":"Y");return(a(r)?r.touches[0]:r)[p]}function l(r){return t=r,i=r,o(r)}function v(r){var d=o(r)-o(i),f=s(r)-s(t)>n;return i=r,f&&(t=r),d}function u(r){if(!t||!i)return 0;var d=o(i)-o(t),f=s(r)-s(t),p=s(r)-s(i)>n,E=d/f,y=f&&!p&&D(E)>.1;return y?E:0}var c={isTouchEvent:a,pointerDown:l,pointerMove:v,pointerUp:u,readPoint:o};return c}function fn(e){function n(i){return e*(i/100)}var t={measure:n};return t}function vn(e,n,t){var i=an(2),a=ee(0),s=ee(0),o=ee(0),l=0,v=n,u=t;function c(){a.add(s),e.add(a),s.multiply(0)}function r(w){w.divide(u),s.add(w)}function d(w){o.set(w).subtract(e);var S=nn(o.get(),0,100,0,v);return l=he(o.get()),o.normalize().multiply(S).subtract(a),r(o),b}function f(w){var S=w.get()-e.get(),I=!i(S);return I&&e.set(w),I}function p(){return l}function E(){return g(n)}function y(){return x(t)}function g(w){return v=w,b}function x(w){return u=w,b}var b={direction:p,seek:d,settle:f,update:c,useBaseMass:y,useBaseSpeed:E,useMass:x,useSpeed:g};return b}function pn(e,n,t,i,a){var s=a.measure(10),o=a.measure(50),l=.85,v=!1;function u(){return!(v||!e.reachedAny(t.get())||!e.reachedAny(n.get()))}function c(f){if(u()){var p=e.reachedMin(n.get())?"min":"max",E=D(e[p]-n.get()),y=t.get()-n.get(),g=Math.min(E/o,l);t.subtract(y*g),!f&&D(y)<s&&(t.set(e.constrain(t.get())),i.useSpeed(10).useMass(3))}}function r(f){v=!f}var d={constrain:c,toggleActive:r};return d}function mn(e,n,t,i){var a=oe(-n+e,t[0]),s=t.map(a.constrain),o=v();function l(){var c=s[0],r=X(s),d=s.lastIndexOf(c),f=s.indexOf(r)+1;return oe(d,f)}function v(){if(n<=e)return[a.max];if(i==="keepSnaps")return s;var c=l(),r=c.min,d=c.max;return s.slice(r,d)}var u={snapsContained:o};return u}function gn(e,n,t){var i=a();function a(){var o=n[0],l=X(n),v=t?o-e:l,u=o;return oe(v,u)}var s={limit:i};return s}function xn(e,n,t,i){var a=.1,s=n.min+a,o=n.max+a,l=oe(s,o),v=l.reachedMin,u=l.reachedMax;function c(f){return f===1?u(t.get()):f===-1?v(t.get()):!1}function r(f){if(c(f)){var p=e*(f*-1);i.forEach(function(E){return E.add(p)})}}var d={loop:r};return d}function hn(e){var n=e.max,t=e.length;function i(s){var o=s-n;return o/-t}var a={get:i};return a}function Sn(e,n,t,i,a,s,o){var l=e.startEdge,v=e.endEdge,u=s.groupSlides,c=f().map(n.measure),r=p(),d=E();function f(){return u(i).map(function(g){return X(g)[v]-g[0][l]}).map(D)}function p(){return i.map(function(g){return t[l]-g[l]}).map(function(g){return-D(g)})}function E(){var g=0,x=X(r)-X(a);return u(r).map(function(b){return b[0]}).map(function(b,w,S){var I=!w,A=w===ve(S);return o&&I?g:o&&A?x:b+c[w]})}var y={snaps:r,snapsAligned:d};return y}function yn(e,n,t,i,a){var s=i.reachedAny,o=i.removeOffset,l=i.constrain;function v(p){return p.concat().sort(function(E,y){return D(E)-D(y)})[0]}function u(p){var E=e?o(p):l(p),y=n.map(function(x){return x-E}).map(function(x){return c(x,0)}).map(function(x,b){return{diff:x,index:b}}).sort(function(x,b){return D(x.diff)-D(b.diff)}),g=y[0].index;return{index:g,distance:E}}function c(p,E){var y=[p,p+t,p-t];if(!e)return y[0];if(!E)return v(y);var g=y.filter(function(x){return he(x)===E});return v(g)}function r(p,E){var y=n[p]-a.get(),g=c(y,E);return{index:p,distance:g}}function d(p,E){var y=a.get()+p,g=u(y),x=g.index,b=g.distance,w=!e&&s(y);if(!E||w)return{index:x,distance:p};var S=n[x]-b,I=p+c(S,0);return{index:x,distance:I}}var f={byDistance:d,byIndex:r,shortcut:c};return f}function wn(e,n,t,i,a,s){function o(c){var r=c.distance,d=c.index!==n.get();r&&(e.start(),a.add(r)),d&&(t.set(n.get()),n.set(c.index),s.emit("select"))}function l(c,r){var d=i.byDistance(c,r);o(d)}function v(c,r){var d=n.clone().set(c),f=i.byIndex(d.get(),r);o(f)}var u={distance:l,index:v};return u}function Pe(e,n,t){var i=e.scroll==="x"?o:l,a=t.style,s=!1;function o(d){return"translate3d(".concat(d,"px,0px,0px)")}function l(d){return"translate3d(0px,".concat(d,"px,0px)")}function v(d){s||(a.transform=i(n.apply(d.get())))}function u(d){s=!d}function c(){s||(a.transform="",t.getAttribute("style")||t.removeAttribute("style"))}var r={clear:c,to:v,toggleActive:u};return r}function bn(e,n,t,i,a,s,o,l,v){var u=le(a),c=le(a).reverse(),r=E().concat(y());function d(S,I){return S.reduce(function(A,M){return A-a[M]},I)}function f(S,I){return S.reduce(function(A,M){var P=d(A,I);return P>0?A.concat([M]):A},[])}function p(S,I){var A=I==="start",M=A?-i:i,P=o.findSlideBounds([M]);return S.map(function(_){var H=A?0:-i,Y=A?i:0,W=P.filter(function(q){return q.index===_})[0],G=W[A?"end":"start"],z=ee(-1),C=ee(-1),ne=Pe(e,n,v[_]),V=function(){return z.set(l.get()>G?H:Y)};return{index:_,location:C,translate:ne,target:V}})}function E(){var S=s[0]-1,I=f(c,S);return p(I,"end")}function y(){var S=t-s[0]-1,I=f(u,S);return p(I,"start")}function g(){return r.every(function(S){var I=S.index,A=u.filter(function(M){return M!==I});return d(A,t)<=.1})}function x(){r.forEach(function(S){var I=S.target,A=S.translate,M=S.location,P=I();P.get()!==M.get()&&(P.get()===0?A.clear():A.to(P),M.set(P))})}function b(){r.forEach(function(S){return S.translate.clear()})}var w={canLoop:g,clear:b,loop:x,loopPoints:r};return w}function En(e,n,t,i,a,s,o){var l=a.removeOffset,v=a.constrain,u=.5,c=s?[0,n,-n]:[0],r=f(c,o);function d(y){var g=y||0;return t.map(function(x){var b=oe(u,x-u);return b.constrain(x*g)})}function f(y,g){var x=y||c,b=d(g);return x.reduce(function(w,S){var I=i.map(function(A,M){return{start:A-t[M]+b[M]+S,end:A+e-b[M]+S,index:M}});return w.concat(I)},[])}function p(y,g){var x=s?l(y):v(y),b=g||r;return b.reduce(function(w,S){var I=S.index,A=S.start,M=S.end,P=w.indexOf(I)!==-1,_=A<x&&M>x;return!P&&_?w.concat([I]):w},[])}var E={check:p,findSlideBounds:f};return E}function In(e,n,t,i,a){var s=e.measureSize,o=e.startEdge,l=e.endEdge,v=t[0]&&a,u=f(),c=p(),r=t.map(s),d=E();function f(){if(!v)return 0;var g=t[0];return D(n[o]-g[o])}function p(){if(!v)return 0;var g=window.getComputedStyle(X(i));return parseFloat(g.getPropertyValue("margin-".concat(l)))}function E(){return t.map(function(g,x,b){var w=!x,S=x===ve(b);return w?r[x]+u:S?r[x]+c:b[x+1][o]-g[o]}).map(D)}var y={slideSizes:r,slideSizesWithGaps:d};return y}function jn(e,n,t){var i=xe(t);function a(v,u){return le(v).filter(function(c){return c%u===0}).map(function(c){return v.slice(c,c+u)})}function s(v){return le(v).reduce(function(u,c){var r=n.slice(X(u),c+1),d=r.reduce(function(f,p){return f+p},0);return!c||d>e?u.concat(c):u},[]).map(function(u,c,r){return v.slice(u,r[c+1])})}function o(v){return i?a(v,t):s(v)}var l={groupSlides:o};return l}function An(e,n,t,i,a){var s=i.align,o=i.axis,l=i.direction,v=i.startIndex,u=i.inViewThreshold,c=i.loop,r=i.speed,d=i.dragFree,f=i.slidesToScroll,p=i.skipSnaps,E=i.containScroll,y=n.getBoundingClientRect(),g=t.map(function(U){return U.getBoundingClientRect()}),x=un(l),b=cn(o,l),w=b.measureSize(y),S=fn(w),I=on(s,w),A=!c&&E!=="",M=c||E!=="",P=In(b,y,g,t,M),_=P.slideSizes,H=P.slideSizesWithGaps,Y=jn(w,H,f),W=Sn(b,I,y,g,H,Y,A),G=W.snaps,z=W.snapsAligned,C=-X(G)+X(H),ne=mn(w,C,z,E).snapsContained,V=A?ne:z,q=gn(C,V,c).limit,J=Ce(ve(V),v,c),ae=J.clone(),se=le(t),ie=function(){c||N.scrollBounds.constrain(N.dragHandler.pointerDown()),N.scrollBody.seek(j).update();var U=N.scrollBody.settle(j);U&&!N.dragHandler.pointerDown()&&(N.animation.stop(),a.emit("settle")),U||a.emit("scroll"),c&&(N.scrollLooper.loop(N.scrollBody.direction()),N.slideLooper.loop()),N.translate.to(R),N.animation.proceed()},Z=sn(ie),K=V[J.get()],R=ee(K),j=ee(K),B=vn(R,r,1),O=yn(c,V,C,q,j),h=wn(Z,J,ae,O,j,a),L=En(w,C,_,G,q,c,u),$=ln(b,x,e,j,dn(b),R,Z,h,B,O,J,a,S,c,d,p),N={containerRect:y,slideRects:g,animation:Z,axis:b,direction:x,dragHandler:$,eventStore:fe(),percentOfView:S,index:J,indexPrevious:ae,limit:q,location:R,options:i,scrollBody:B,scrollBounds:pn(q,R,j,B,S),scrollLooper:xn(C,q,R,[R,j]),scrollProgress:hn(q),scrollSnaps:V,scrollTarget:O,scrollTo:h,slideLooper:bn(b,x,w,C,H,V,L,R,t),slidesToScroll:Y,slidesInView:L,slideIndexes:se,target:j,translate:Pe(b,x,n)};return N}function Bn(){var e={};function n(o){return e[o]||[]}function t(o){return n(o).forEach(function(l){return l(o)}),s}function i(o,l){return e[o]=n(o).concat([l]),s}function a(o,l){return e[o]=n(o).filter(function(v){return v!==l}),s}var s={emit:t,off:a,on:i};return s}var Mn={align:"center",axis:"x",container:null,slides:null,containScroll:"",direction:"ltr",slidesToScroll:1,breakpoints:{},dragFree:!1,draggable:!0,inViewThreshold:0,loop:!1,skipSnaps:!1,speed:10,startIndex:0,active:!0};function Se(){function e(a,s){return Te(a,s||{})}function n(a,s){var o=JSON.stringify(re(a.breakpoints||{})),l=JSON.stringify(re(s.breakpoints||{}));return o!==l?!1:Ne(a,s)}function t(a){var s=a.breakpoints||{},o=re(s).filter(function(l){return window.matchMedia(l).matches}).map(function(l){return s[l]}).reduce(function(l,v){return e(l,v)},{});return e(a,o)}var i={merge:e,areEqual:n,atMedia:t};return i}function Dn(){var e=Se(),n=e.atMedia,t=e.areEqual,i=[],a=[];function s(){return a.some(function(c){return c()})}function o(c){var r=n(c.options);return function(){return!t(r,n(c.options))}}function l(c,r){return a=c.map(o),i=c.filter(function(d){return n(d.options).active}),i.forEach(function(d){return d.init(r)}),c.reduce(function(d,f){var p;return Object.assign(d,(p={},p[f.name]=f,p))},{})}function v(){i=i.filter(function(c){return c.destroy()})}var u={init:l,destroy:v,haveChanged:s};return u}function te(e,n,t){var i=fe(),a=Se(),s=Dn(),o=Bn(),l=o.on,v=o.off,u=S,c=!1,r,d=a.merge(Mn,te.globalOptions),f=a.merge(d),p=[],E,y=0,g,x;function b(){var j=f.container,B=f.slides,O=Ie(j)?e.querySelector(j):j;g=O||e.children[0];var h=Ie(B)?g.querySelectorAll(B):B;x=[].slice.call(h||g.children)}function w(j,B){if(!c){if(d=a.merge(d,j),f=a.atMedia(d),b(),r=An(e,g,x,f,o),y=r.axis.measureSize(e.getBoundingClientRect()),!f.active)return I();if(r.translate.to(r.location),p=B||p,E=s.init(p,R),f.loop){if(!r.slideLooper.canLoop()){I(),w({loop:!1},B),d=a.merge(d,{loop:!0});return}r.slideLooper.loop()}f.draggable&&g.offsetParent&&x.length&&r.dragHandler.addActivationEvents()}}function S(j,B){var O=V();I(),w(a.merge({startIndex:O},j),B),o.emit("reInit")}function I(){r.dragHandler.removeAllEvents(),r.animation.stop(),r.eventStore.removeAll(),r.translate.clear(),r.slideLooper.clear(),s.destroy()}function A(){c||(c=!0,i.removeAll(),I(),o.emit("destroy"))}function M(){var j=a.atMedia(d),B=!a.areEqual(j,f),O=r.axis.measureSize(e.getBoundingClientRect()),h=y!==O,L=s.haveChanged();(h||B||L)&&S(),o.emit("resize")}function P(j){var B=r[j?"target":"location"].get(),O=f.loop?"removeOffset":"constrain";return r.slidesInView.check(r.limit[O](B))}function _(j){var B=P(j);return r.slideIndexes.filter(function(O){return B.indexOf(O)===-1})}function H(j,B,O){!f.active||c||(r.scrollBody.useBaseMass().useSpeed(B?100:f.speed),r.scrollTo.index(j,O||0))}function Y(j){var B=r.index.clone().add(1);H(B.get(),j===!0,-1)}function W(j){var B=r.index.clone().add(-1);H(B.get(),j===!0,1)}function G(){var j=r.index.clone().add(1);return j.get()!==V()}function z(){var j=r.index.clone().add(-1);return j.get()!==V()}function C(){return r.scrollSnaps.map(r.scrollProgress.get)}function ne(){return r.scrollProgress.get(r.location.get())}function V(){return r.index.get()}function q(){return r.indexPrevious.get()}function J(){return r.dragHandler.clickAllowed()}function ae(){return E}function se(){return r}function ie(){return e}function Z(){return g}function K(){return x}var R={canScrollNext:G,canScrollPrev:z,clickAllowed:J,containerNode:Z,internalEngine:se,destroy:A,off:v,on:l,plugins:ae,previousScrollSnap:q,reInit:u,rootNode:ie,scrollNext:Y,scrollPrev:W,scrollProgress:ne,scrollSnapList:C,scrollTo:H,selectedScrollSnap:V,slideNodes:K,slidesInView:P,slidesNotInView:_};return w(n,t),i.add(window,"resize",M),setTimeout(function(){return o.emit("init")},0),R}te.globalOptions=void 0;te.optionsHandler=Se;function kn(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Ae(e){return e.concat().sort(function(n,t){return n.name>t.name?1:-1}).map(function(n){return n.options})}function Tn(e,n){if(e.length!==n.length)return!1;var t=te.optionsHandler().areEqual,i=Ae(e),a=Ae(n);return i.every(function(s,o){var l=a[o];return t(s,l)})}function ye(e,n){e===void 0&&(e={}),n===void 0&&(n=[]);var t=k.useRef(te.optionsHandler()),i=k.useRef(e),a=k.useRef(n),s=k.useState(),o=s[0],l=s[1],v=k.useState(),u=v[0],c=v[1],r=k.useCallback(function(){o&&o.reInit(i.current,a.current)},[o]);return k.useEffect(function(){if(kn()&&u){te.globalOptions=ye.globalOptions;var d=te(u,i.current,a.current);return l(d),function(){return d.destroy()}}else l(void 0)},[u,l]),k.useEffect(function(){t.current.areEqual(i.current,e)||(i.current=e,r())},[e,r]),k.useEffect(function(){Tn(a.current,n)||(a.current=n,r())},[n,r]),[c,o]}ye.globalOptions=void 0;const Nn="/assets/intro-01-B9L7sRgW.png",Cn="/assets/intro-01@2x-C6IY3zvY.png",Pn="/assets/intro-02-BX_TPVw7.png",Ln="/assets/intro-02@2x-CJMA9LRs.png",On="/assets/intro-03-f6aZ2Ngn.png",Vn="/assets/intro-03@2x-DrCdDUzO.png",zn="/assets/intro-04-BtgH-TAQ.png",Fn="/assets/intro-04@2x-B0dG3kIn.png",Hn="/assets/intro-05-Dqdl8gEQ.png",Rn="/assets/intro-05@2x-BnID3d4Y.png",Un="/assets/intro-06-BakGMiYr.png",_n="/assets/intro-06@2x-uEm0irpW.png",qn="/assets/intro-07-YOooEHwu.png",$n="/assets/intro-07@2x-Yau4t8ms.png",Gn="/assets/intro-08-BXnzdKrm.png",Kn="/assets/intro-08@2x-DeDcHWkj.png",Wn="/assets/intro-09-D_b0_Q1f.png",Yn="/assets/intro-09@2x-JLCUkqHb.png",Jn="/assets/intro-end-BWIREVl1.png",Xn="/assets/intro-end@2x-BopevUnH.png",Qn="/assets/intro-start-BEtT2OsF.png",Zn="/assets/intro-start@2x-3Sd9KtJc.png",me="#2286f7",ge="#0870e6",er=Me(me,me,"#ffffff",ge,ge,"#ffffff"),nr=Be(Me("transparent","transparent",me,"transparent","transparent",ge),T`
    padding-left: 0;
    padding-right: 0;
  `),F={small:"@media (max-width: 558px)",normal:"@media (min-width: 559px)"},rr=k.memo(()=>m.jsx("div",{className:T`
        padding: 0;
        ${ke(Qn,Zn,560,202)}
        background-position: 0 51px;

        ${F.small} {
          background-size: 100% auto;
        }

        @media (max-width: 558px) {
          width: 100%;
        }

        @media (min-width: 558px) {
          width: 558px;
          height: 300px;
        }
      `,children:m.jsx("p",{className:T`
          margin: 0;
          font-weight: normal;
          color: #011722;

          ${F.small} {
            width: 220px;
            padding: 150px 0 0 34px;
            font-size: 16px;
          }

          ${F.normal} {
            width: 245px;
            padding: 140px 0 0 34px;
            font-size: 18px;
          }
        `,children:"Welcome to Koofr Vault: your favourite cloud storage with client-side encryption!"})})),we=De.div`
  display: flex;
  padding: 25px 0 0;

  ${F.small} {
    flex-direction: column;
  }

  ${F.normal} {
    flex-direction: row;
    justify-content: space-between;
    height: 300px;
  }
`,Q=k.memo(({image:e,image2x:n,children:t})=>m.jsxs("div",{className:T`
        display: flex;
        flex-direction: column;
        align-items: center;

        ${F.small} {
          padding: 0 25px 25px;
        }

        ${F.normal} {
          margin: 0 15px;
          width: 150px;
        }
      `,children:[m.jsx(de,{image:e,image2x:n,width:130,height:130,className:T`
          margin-bottom: 15px;
        `}),m.jsx("p",{className:T`
          font-size: 14px;
          color: #011722;
          margin: 0;
          text-align: center;

          & strong {
            font-weight: 600;
          }
        `,children:t})]})),tr=k.memo(()=>m.jsxs(we,{children:[m.jsx(Q,{image:Nn,image2x:Cn,children:"The Vault is like having a box with a unique lock in your trunk: an extra layer of security to protect your most sensitive files."}),m.jsxs(Q,{image:Pn,image2x:Ln,children:["Vault is"," ",m.jsx("a",{href:"https://github.com/koofr/vault",target:"_blank",rel:"noreferrer",children:"open source"}),", so you can always check that the code does exactly what is promised - and nothing more."]}),m.jsxs(Q,{image:On,image2x:Vn,children:[m.jsx("a",{href:"https://rclone.org",target:"_blank",rel:"noreferrer",children:"rclone"})," ","compatibility: Download your encrypted files and decrypt them locally using the rclone command-line tool."]})]})),ar=k.memo(()=>m.jsxs(we,{children:[m.jsx(Q,{image:zn,image2x:Fn,children:"You can have one or more Safe Boxes in your Vault, with separate Safe Keys for each Safe Box."}),m.jsx(Q,{image:Hn,image2x:Rn,children:"Vault encrypts both file names and content, so they are only readable inside the Safe Box."}),m.jsx(Q,{image:Un,image2x:_n,children:"In your main Koofr app, the files will appear with encrypted file names and cannot be opened."})]})),ir=k.memo(()=>m.jsxs(we,{children:[m.jsx(Q,{image:qn,image2x:$n,children:"When you create a Safe Box, you'll choose a Safe Key for it."}),m.jsx(Q,{image:Gn,image2x:Kn,children:"Since the Safe Key is used to encrypt the files you store in the Safe Box, it cannot be changed later."}),m.jsxs(Q,{image:Wn,image2x:Yn,children:[m.jsx("strong",{children:"There is no way recover your files if you forget your Safe Key."})," ","It is never sent to or stored on Koofr servers."]})]})),or=k.memo(()=>{const e=Fe();return m.jsxs("div",{className:T`
        display: flex;
        flex-direction: column;
        padding: 0;
        ${ke(Jn,Xn,252,203)}

        ${F.small} {
          background-position: bottom 15px center;
          width: 100%;
          height: 335px;
        }

        ${F.normal} {
          background-position: 281px 68px;
          width: 558px;
          height: 300px;
        }
      `,children:[m.jsx("div",{className:T`
          ${F.normal} {
            display: flex;
            flex-direction: row;
            align-items: center;
            flex-grow: 1;
          }
        `,children:m.jsx("p",{className:T`
            font-weight: normal;
            color: #011722;

            ${F.small} {
              width: 245px;
              margin: 0 auto;
              padding: 10px 0 0 0;
              text-align: center;
              font-size: 16px;
            }

            ${F.normal} {
              width: 200px;
              margin-left: 34px;
              font-size: 18px;
            }
          `,children:"Get started with Vault by creating your first Safe Box."})}),e.appStoreUrl!==void 0||e.googlePlayUrl!==void 0||e.fDroidUrl!==void 0?m.jsxs("div",{className:T`
            ${F.small} {
              display: flex;
              flex-direction: row;
              justify-content: center;
              margin-top: 20px;
            }

            ${F.normal} {
              display: flex;
              flex-direction: row;
              flex-shrink: 0;
              margin-left: 34px;
            }
          `,children:[e.googlePlayUrl!==void 0?m.jsx("a",{href:e.googlePlayUrl,target:"_blank",rel:"noreferrer",className:T`
                margin-right: 20px;
              `,children:m.jsx(de,{image:Re,image2x:Ue,width:122,height:36})}):null,e.appStoreUrl!==void 0?m.jsx("a",{href:e.appStoreUrl,target:"_blank",rel:"noreferrer",className:T`
                margin-right: 20px;
              `,children:m.jsx(de,{image:_e,image2x:qe,width:117,height:36})}):null,e.fDroidUrl!==void 0?m.jsx("a",{href:e.fDroidUrl,target:"_blank",rel:"noreferrer",className:T`
                margin-right: 20px;
              `,children:m.jsx(de,{image:$e,image2x:Ge,width:123,height:36})}):null]}):null]})}),sr=De.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
`,cr=k.memo(({hide:e})=>{const n=["Welcome","About Vault","Safe Boxes","Safe Key","Start using Vault"],t=[m.jsx(rr,{}),m.jsx(tr,{}),m.jsx(ar,{}),m.jsx(ir,{}),m.jsx(or,{})],i=t.length,[a,s]=k.useState(0),o=a>0,l=a===i-1,[v,u]=ye({loop:!1,speed:15});k.useEffect(()=>{if(u!==void 0){const d=()=>{const f=u.selectedScrollSnap();f===i?e():s(f)};return u.on("select",d),()=>{u.off("select",d)}}},[u,e,i]);const c=k.useCallback(()=>{s(d=>{const f=d-1;return u!==void 0&&u.scrollTo(f),f})},[u]),r=k.useCallback(()=>{l?e():s(d=>{const f=d+1;return u!==void 0&&u.scrollTo(f),f})},[e,l,u]);return m.jsxs(m.Fragment,{children:[m.jsx(Ke,{children:m.jsx(We,{children:n[a]})}),m.jsx(Ye,{className:T`
          padding: 0;

          @media (max-width: 768px) {
            height: 100%;
          }
        `,children:m.jsx("div",{className:T`
            overflow: hidden;
            height: 100%;
          `,ref:v,children:m.jsxs("div",{className:T`
              display: flex;
              align-items: flex-start;
              height: 100%;
            `,children:[t.map((d,f)=>m.jsx("div",{className:T`
                  flex: 0 0 100%;
                  min-width: 0;
                  height: 100%;
                  overflow-x: hidden;
                  overflow-y: auto;
                `,children:m.jsx(sr,{children:d})},f)),m.jsx("div",{className:T`
                flex: 0 0 100%;
                min-width: 0;
                height: 100%;
              `})]})})}),m.jsxs(Je,{children:[m.jsx(Xe,{children:o?m.jsx(Ee,{type:"button",className:nr,onClick:c,children:"Back"}):null}),m.jsx(Qe,{children:m.jsx("div",{className:T`
              display: flex;
              margin: auto;
            `,children:He(0,i).map(d=>m.jsx("div",{className:Be(T`
                    background-color: #d4d6d7;
                    display: inline-block;
                    width: 6px;
                    height: 6px;
                    border-radius: 3px;
                    margin: 0 2.5px;
                  `,d===a&&T`
                      background-color: #676f73;
                    `)},d))})}),m.jsx(Ze,{children:m.jsx(Ee,{type:"button",className:er,onClick:r,children:l?"Done":"Next"})})]})]})}),xr=k.memo(({isVisible:e,hide:n})=>m.jsx(en,{show:e,onHide:n,children:e?m.jsx(cr,{hide:n}):m.jsx(m.Fragment,{})}));export{xr as IntroModal};

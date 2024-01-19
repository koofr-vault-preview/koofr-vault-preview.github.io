import{r as k,d as Me,b as D,j as m,p as ze}from"./DynamicThemeProvider-71c37830.js";import{a as Be,n as Te,g as Ee}from"./Button-d7c59dae.js";import{r as He}from"./range-43cece75.js";import{i as ke,R as ve,g as Re,a as $e,b as qe,c as Ue}from"./RetinaImage-adf244fe.js";import{M as _e,b as Ge,c as Ke,d as We,e as Je,A as Xe,f as Ye,h as Qe}from"./mainAuthenticated-1a2119d2.js";import"./index-6ac7cbed.js";import"./NavbarSticky-315264f4.js";import"./index-6cb6affe.js";function Ze(e,n,t,i,a){return i+(a-i)*((e-n)/(t-n))}function xe(e){return typeof e=="number"}function Ie(e){return typeof e=="string"}function pe(e){return Object.prototype.toString.call(e)==="[object Object]"}function en(e){return Array.isArray(e)}function je(e){return pe(e)||en(e)}function T(e){return Math.abs(e)}function he(e){return e?e/T(e):0}function ue(e,n){return T(e-n)}function nn(e,n){if(e===0||n===0||T(e)<=T(n))return 0;var t=ue(T(e),T(n));return T(t/e)}function rn(e){var n=Math.pow(10,e);return function(t){return Math.round(t*n)/n}}function le(e){return re(e).map(Number)}function Y(e){return e[fe(e)]}function fe(e){return Math.max(0,e.length-1)}function re(e){return Object.keys(e)}function Ne(e,n){return[e,n].reduce(function(t,i){return re(i).forEach(function(a){var s=t[a],o=i[a],l=pe(s)&&pe(o);t[a]=l?Ne(s,o):o}),t},{})}function Pe(e,n){var t=re(e),i=re(n);return t.length!==i.length?!1:t.every(function(a){var s=e[a],o=n[a];return typeof s=="function"?"".concat(s)==="".concat(o):!je(s)||!je(o)?s===o:Pe(s,o)})}function tn(e,n){var t={start:i,center:a,end:s};function i(){return 0}function a(u){return s(u)/2}function s(u){return n-u}function o(){return n*Number(e)}function l(u){return xe(e)?o():t[e](u)}var v={measure:l};return v}function an(e){var n=0;function t(o,l){return function(){o===!!n&&l()}}function i(){n=window.requestAnimationFrame(e)}function a(){window.cancelAnimationFrame(n),n=0}var s={proceed:t(!0,i),start:t(!1,i),stop:t(!0,a)};return s}function on(e,n){var t=e==="y"?"y":"x",i=e==="y"?"x":"y",a=l(),s=v();function o(c){var r=c.width,d=c.height;return t==="x"?r:d}function l(){return t==="y"?"top":n==="rtl"?"right":"left"}function v(){return t==="y"?"bottom":n==="rtl"?"left":"right"}var u={scroll:t,cross:i,startEdge:a,endEdge:s,measureSize:o};return u}function oe(e,n){var t=T(e-n);function i(u){return u<e}function a(u){return u>n}function s(u){return i(u)||a(u)}function o(u){return s(u)?i(u)?e:n:u}function l(u){return t?u-t*Math.ceil((u-n)/t):u}var v={length:t,max:n,min:e,constrain:o,reachedAny:s,reachedMax:a,reachedMin:i,removeOffset:l};return v}function De(e,n,t){var i=oe(0,e),a=i.min,s=i.constrain,o=e+1,l=v(n);function v(p){return t?T((o+p)%o):s(p)}function u(){return l}function c(p){return l=v(p),f}function r(p){return c(u()+p)}function d(){return De(e,u(),t)}var f={add:r,clone:d,get:u,set:c,min:a,max:e};return f}function sn(e){var n=e==="rtl"?-1:1;function t(a){return a*n}var i={apply:t};return i}function de(){var e=[];function n(a,s,o,l){return l===void 0&&(l={passive:!0}),a.addEventListener(s,o,l),e.push(function(){return a.removeEventListener(s,o,l)}),i}function t(){return e=e.filter(function(a){return a()}),i}var i={add:n,removeAll:t};return i}function ee(e){var n=e;function t(){return n}function i(r){return n=u(r),c}function a(r){return n+=u(r),c}function s(r){return n-=u(r),c}function o(r){return n*=r,c}function l(r){return n/=r,c}function v(){return n!==0&&l(n),c}function u(r){return xe(r)?r:r.get()}var c={add:a,divide:l,get:t,multiply:o,normalize:v,set:i,subtract:s};return c}function cn(e,n,t,i,a,s,o,l,v,u,c,r,d,f,p,E){var S=e.cross,g=["INPUT","SELECT","TEXTAREA"],x={passive:!1},w=ee(0),b=de(),y=de(),I=d.measure(20),A={mouse:300,touch:400},B={mouse:500,touch:600},C=p?5:16,q=1,H=0,J=0,W=!1,G=!1,F=!1,P=!1;function ne(){var h=t;b.add(h,"dragstart",function(L){return L.preventDefault()},x).add(h,"touchmove",function(){},x).add(h,"touchend",function(){}).add(h,"touchstart",ie).add(h,"mousedown",ie).add(h,"touchcancel",K).add(h,"contextmenu",K).add(h,"click",R,!0)}function V(){var h=P?document:t;y.add(h,"touchmove",Z,x).add(h,"touchend",K).add(h,"mousemove",Z,x).add(h,"mouseup",K)}function U(){b.removeAll(),y.removeAll()}function X(h){var L=h.nodeName||"";return g.indexOf(L)>-1}function ae(){var h=p?B:A,L=P?"mouse":"touch";return h[L]}function se(h,L){var _=c.clone().add(he(h)*-1),N=_.get()===c.min||_.get()===c.max,$=u.byDistance(h,!p).distance;return p||T(h)<I?$:!f&&N?$*.4:E&&L?$*.5:u.byIndex(_.get(),0).distance}function ie(h){if(P=!a.isTouchEvent(h),!(P&&h.button!==0)&&!X(h.target)){var L=ue(i.get(),s.get())>=2,_=P||!L;W=!0,a.pointerDown(h),w.set(i),i.set(s),v.useBaseMass().useSpeed(80),V(),H=a.readPoint(h),J=a.readPoint(h,S),r.emit("pointerDown"),_&&(F=!1)}}function Z(h){if(!G&&!P){if(!h.cancelable)return K(h);var L=a.readPoint(h),_=a.readPoint(h,S),N=ue(L,H),$=ue(_,J);if(G=N>$,!G&&!F)return K(h)}var ce=a.pointerMove(h);!F&&ce&&(F=!0),o.start(),i.add(n.apply(ce)),h.preventDefault()}function K(h){var L=u.byDistance(0,!1),_=L.index!==c.get(),N=a.pointerUp(h)*ae(),$=se(n.apply(N),_),ce=nn(N,$),Le=ue(i.get(),w.get())>=.5,we=_&&ce>.75,Oe=T(N)<I,Ve=we?10:C,Fe=we?q+2.5*ce:q;Le&&!P&&(F=!0),G=!1,W=!1,y.removeAll(),v.useSpeed(Oe?9:Ve).useMass(Fe),l.distance($,!p),P=!1,r.emit("pointerUp")}function R(h){F&&(h.stopPropagation(),h.preventDefault())}function j(){return!F}function M(){return W}var O={addActivationEvents:ne,clickAllowed:j,pointerDown:M,removeAllEvents:U};return O}function un(e){var n=170,t,i;function a(r){return typeof TouchEvent<"u"&&r instanceof TouchEvent}function s(r){return r.timeStamp}function o(r,d){var f=d||e.scroll,p="client".concat(f==="x"?"X":"Y");return(a(r)?r.touches[0]:r)[p]}function l(r){return t=r,i=r,o(r)}function v(r){var d=o(r)-o(i),f=s(r)-s(t)>n;return i=r,f&&(t=r),d}function u(r){if(!t||!i)return 0;var d=o(i)-o(t),f=s(r)-s(t),p=s(r)-s(i)>n,E=d/f,S=f&&!p&&T(E)>.1;return S?E:0}var c={isTouchEvent:a,pointerDown:l,pointerMove:v,pointerUp:u,readPoint:o};return c}function ln(e){function n(i){return e*(i/100)}var t={measure:n};return t}function dn(e,n,t){var i=rn(2),a=ee(0),s=ee(0),o=ee(0),l=0,v=n,u=t;function c(){a.add(s),e.add(a),s.multiply(0)}function r(b){b.divide(u),s.add(b)}function d(b){o.set(b).subtract(e);var y=Ze(o.get(),0,100,0,v);return l=he(o.get()),o.normalize().multiply(y).subtract(a),r(o),w}function f(b){var y=b.get()-e.get(),I=!i(y);return I&&e.set(b),I}function p(){return l}function E(){return g(n)}function S(){return x(t)}function g(b){return v=b,w}function x(b){return u=b,w}var w={direction:p,seek:d,settle:f,update:c,useBaseMass:S,useBaseSpeed:E,useMass:x,useSpeed:g};return w}function fn(e,n,t,i,a){var s=a.measure(10),o=a.measure(50),l=.85,v=!1;function u(){return!(v||!e.reachedAny(t.get())||!e.reachedAny(n.get()))}function c(f){if(u()){var p=e.reachedMin(n.get())?"min":"max",E=T(e[p]-n.get()),S=t.get()-n.get(),g=Math.min(E/o,l);t.subtract(S*g),!f&&T(S)<s&&(t.set(e.constrain(t.get())),i.useSpeed(10).useMass(3))}}function r(f){v=!f}var d={constrain:c,toggleActive:r};return d}function vn(e,n,t,i){var a=oe(-n+e,t[0]),s=t.map(a.constrain),o=v();function l(){var c=s[0],r=Y(s),d=s.lastIndexOf(c),f=s.indexOf(r)+1;return oe(d,f)}function v(){if(n<=e)return[a.max];if(i==="keepSnaps")return s;var c=l(),r=c.min,d=c.max;return s.slice(r,d)}var u={snapsContained:o};return u}function pn(e,n,t){var i=a();function a(){var o=n[0],l=Y(n),v=t?o-e:l,u=o;return oe(v,u)}var s={limit:i};return s}function mn(e,n,t,i){var a=.1,s=n.min+a,o=n.max+a,l=oe(s,o),v=l.reachedMin,u=l.reachedMax;function c(f){return f===1?u(t.get()):f===-1?v(t.get()):!1}function r(f){if(c(f)){var p=e*(f*-1);i.forEach(function(E){return E.add(p)})}}var d={loop:r};return d}function gn(e){var n=e.max,t=e.length;function i(s){var o=s-n;return o/-t}var a={get:i};return a}function xn(e,n,t,i,a,s,o){var l=e.startEdge,v=e.endEdge,u=s.groupSlides,c=f().map(n.measure),r=p(),d=E();function f(){return u(i).map(function(g){return Y(g)[v]-g[0][l]}).map(T)}function p(){return i.map(function(g){return t[l]-g[l]}).map(function(g){return-T(g)})}function E(){var g=0,x=Y(r)-Y(a);return u(r).map(function(w){return w[0]}).map(function(w,b,y){var I=!b,A=b===fe(y);return o&&I?g:o&&A?x:w+c[b]})}var S={snaps:r,snapsAligned:d};return S}function hn(e,n,t,i,a){var s=i.reachedAny,o=i.removeOffset,l=i.constrain;function v(p){return p.concat().sort(function(E,S){return T(E)-T(S)})[0]}function u(p){var E=e?o(p):l(p),S=n.map(function(x){return x-E}).map(function(x){return c(x,0)}).map(function(x,w){return{diff:x,index:w}}).sort(function(x,w){return T(x.diff)-T(w.diff)}),g=S[0].index;return{index:g,distance:E}}function c(p,E){var S=[p,p+t,p-t];if(!e)return S[0];if(!E)return v(S);var g=S.filter(function(x){return he(x)===E});return v(g)}function r(p,E){var S=n[p]-a.get(),g=c(S,E);return{index:p,distance:g}}function d(p,E){var S=a.get()+p,g=u(S),x=g.index,w=g.distance,b=!e&&s(S);if(!E||b)return{index:x,distance:p};var y=n[x]-w,I=p+c(y,0);return{index:x,distance:I}}var f={byDistance:d,byIndex:r,shortcut:c};return f}function yn(e,n,t,i,a,s){function o(c){var r=c.distance,d=c.index!==n.get();r&&(e.start(),a.add(r)),d&&(t.set(n.get()),n.set(c.index),s.emit("select"))}function l(c,r){var d=i.byDistance(c,r);o(d)}function v(c,r){var d=n.clone().set(c),f=i.byIndex(d.get(),r);o(f)}var u={distance:l,index:v};return u}function Ce(e,n,t){var i=e.scroll==="x"?o:l,a=t.style,s=!1;function o(d){return"translate3d(".concat(d,"px,0px,0px)")}function l(d){return"translate3d(0px,".concat(d,"px,0px)")}function v(d){s||(a.transform=i(n.apply(d.get())))}function u(d){s=!d}function c(){s||(a.transform="",t.getAttribute("style")||t.removeAttribute("style"))}var r={clear:c,to:v,toggleActive:u};return r}function Sn(e,n,t,i,a,s,o,l,v){var u=le(a),c=le(a).reverse(),r=E().concat(S());function d(y,I){return y.reduce(function(A,B){return A-a[B]},I)}function f(y,I){return y.reduce(function(A,B){var C=d(A,I);return C>0?A.concat([B]):A},[])}function p(y,I){var A=I==="start",B=A?-i:i,C=o.findSlideBounds([B]);return y.map(function(q){var H=A?0:-i,J=A?i:0,W=C.filter(function(U){return U.index===q})[0],G=W[A?"end":"start"],F=ee(-1),P=ee(-1),ne=Ce(e,n,v[q]),V=function(){return F.set(l.get()>G?H:J)};return{index:q,location:P,translate:ne,target:V}})}function E(){var y=s[0]-1,I=f(c,y);return p(I,"end")}function S(){var y=t-s[0]-1,I=f(u,y);return p(I,"start")}function g(){return r.every(function(y){var I=y.index,A=u.filter(function(B){return B!==I});return d(A,t)<=.1})}function x(){r.forEach(function(y){var I=y.target,A=y.translate,B=y.location,C=I();C.get()!==B.get()&&(C.get()===0?A.clear():A.to(C),B.set(C))})}function w(){r.forEach(function(y){return y.translate.clear()})}var b={canLoop:g,clear:w,loop:x,loopPoints:r};return b}function bn(e,n,t,i,a,s,o){var l=a.removeOffset,v=a.constrain,u=.5,c=s?[0,n,-n]:[0],r=f(c,o);function d(S){var g=S||0;return t.map(function(x){var w=oe(u,x-u);return w.constrain(x*g)})}function f(S,g){var x=S||c,w=d(g);return x.reduce(function(b,y){var I=i.map(function(A,B){return{start:A-t[B]+w[B]+y,end:A+e-w[B]+y,index:B}});return b.concat(I)},[])}function p(S,g){var x=s?l(S):v(S),w=g||r;return w.reduce(function(b,y){var I=y.index,A=y.start,B=y.end,C=b.indexOf(I)!==-1,q=A<x&&B>x;return!C&&q?b.concat([I]):b},[])}var E={check:p,findSlideBounds:f};return E}function wn(e,n,t,i,a){var s=e.measureSize,o=e.startEdge,l=e.endEdge,v=t[0]&&a,u=f(),c=p(),r=t.map(s),d=E();function f(){if(!v)return 0;var g=t[0];return T(n[o]-g[o])}function p(){if(!v)return 0;var g=window.getComputedStyle(Y(i));return parseFloat(g.getPropertyValue("margin-".concat(l)))}function E(){return t.map(function(g,x,w){var b=!x,y=x===fe(w);return b?r[x]+u:y?r[x]+c:w[x+1][o]-g[o]}).map(T)}var S={slideSizes:r,slideSizesWithGaps:d};return S}function En(e,n,t){var i=xe(t);function a(v,u){return le(v).filter(function(c){return c%u===0}).map(function(c){return v.slice(c,c+u)})}function s(v){return le(v).reduce(function(u,c){var r=n.slice(Y(u),c+1),d=r.reduce(function(f,p){return f+p},0);return!c||d>e?u.concat(c):u},[]).map(function(u,c,r){return v.slice(u,r[c+1])})}function o(v){return i?a(v,t):s(v)}var l={groupSlides:o};return l}function In(e,n,t,i,a){var s=i.align,o=i.axis,l=i.direction,v=i.startIndex,u=i.inViewThreshold,c=i.loop,r=i.speed,d=i.dragFree,f=i.slidesToScroll,p=i.skipSnaps,E=i.containScroll,S=n.getBoundingClientRect(),g=t.map(function($){return $.getBoundingClientRect()}),x=sn(l),w=on(o,l),b=w.measureSize(S),y=ln(b),I=tn(s,b),A=!c&&E!=="",B=c||E!=="",C=wn(w,S,g,t,B),q=C.slideSizes,H=C.slideSizesWithGaps,J=En(b,H,f),W=xn(w,I,S,g,H,J,A),G=W.snaps,F=W.snapsAligned,P=-Y(G)+Y(H),ne=vn(b,P,F,E).snapsContained,V=A?ne:F,U=pn(P,V,c).limit,X=De(fe(V),v,c),ae=X.clone(),se=le(t),ie=function(){c||N.scrollBounds.constrain(N.dragHandler.pointerDown()),N.scrollBody.seek(j).update();var $=N.scrollBody.settle(j);$&&!N.dragHandler.pointerDown()&&(N.animation.stop(),a.emit("settle")),$||a.emit("scroll"),c&&(N.scrollLooper.loop(N.scrollBody.direction()),N.slideLooper.loop()),N.translate.to(R),N.animation.proceed()},Z=an(ie),K=V[X.get()],R=ee(K),j=ee(K),M=dn(R,r,1),O=hn(c,V,P,U,j),h=yn(Z,X,ae,O,j,a),L=bn(b,P,q,G,U,c,u),_=cn(w,x,e,j,un(w),R,Z,h,M,O,X,a,y,c,d,p),N={containerRect:S,slideRects:g,animation:Z,axis:w,direction:x,dragHandler:_,eventStore:de(),percentOfView:y,index:X,indexPrevious:ae,limit:U,location:R,options:i,scrollBody:M,scrollBounds:fn(U,R,j,M,y),scrollLooper:mn(P,U,R,[R,j]),scrollProgress:gn(U),scrollSnaps:V,scrollTarget:O,scrollTo:h,slideLooper:Sn(w,x,b,P,H,V,L,R,t),slidesToScroll:J,slidesInView:L,slideIndexes:se,target:j,translate:Ce(w,x,n)};return N}function jn(){var e={};function n(o){return e[o]||[]}function t(o){return n(o).forEach(function(l){return l(o)}),s}function i(o,l){return e[o]=n(o).concat([l]),s}function a(o,l){return e[o]=n(o).filter(function(v){return v!==l}),s}var s={emit:t,off:a,on:i};return s}var An={align:"center",axis:"x",container:null,slides:null,containScroll:"",direction:"ltr",slidesToScroll:1,breakpoints:{},dragFree:!1,draggable:!0,inViewThreshold:0,loop:!1,skipSnaps:!1,speed:10,startIndex:0,active:!0};function ye(){function e(a,s){return Ne(a,s||{})}function n(a,s){var o=JSON.stringify(re(a.breakpoints||{})),l=JSON.stringify(re(s.breakpoints||{}));return o!==l?!1:Pe(a,s)}function t(a){var s=a.breakpoints||{},o=re(s).filter(function(l){return window.matchMedia(l).matches}).map(function(l){return s[l]}).reduce(function(l,v){return e(l,v)},{});return e(a,o)}var i={merge:e,areEqual:n,atMedia:t};return i}function Mn(){var e=ye(),n=e.atMedia,t=e.areEqual,i=[],a=[];function s(){return a.some(function(c){return c()})}function o(c){var r=n(c.options);return function(){return!t(r,n(c.options))}}function l(c,r){return a=c.map(o),i=c.filter(function(d){return n(d.options).active}),i.forEach(function(d){return d.init(r)}),c.reduce(function(d,f){var p;return Object.assign(d,(p={},p[f.name]=f,p))},{})}function v(){i=i.filter(function(c){return c.destroy()})}var u={init:l,destroy:v,haveChanged:s};return u}function te(e,n,t){var i=de(),a=ye(),s=Mn(),o=jn(),l=o.on,v=o.off,u=y,c=!1,r,d=a.merge(An,te.globalOptions),f=a.merge(d),p=[],E,S=0,g,x;function w(){var j=f.container,M=f.slides,O=Ie(j)?e.querySelector(j):j;g=O||e.children[0];var h=Ie(M)?g.querySelectorAll(M):M;x=[].slice.call(h||g.children)}function b(j,M){if(!c){if(d=a.merge(d,j),f=a.atMedia(d),w(),r=In(e,g,x,f,o),S=r.axis.measureSize(e.getBoundingClientRect()),!f.active)return I();if(r.translate.to(r.location),p=M||p,E=s.init(p,R),f.loop){if(!r.slideLooper.canLoop()){I(),b({loop:!1},M),d=a.merge(d,{loop:!0});return}r.slideLooper.loop()}f.draggable&&g.offsetParent&&x.length&&r.dragHandler.addActivationEvents()}}function y(j,M){var O=V();I(),b(a.merge({startIndex:O},j),M),o.emit("reInit")}function I(){r.dragHandler.removeAllEvents(),r.animation.stop(),r.eventStore.removeAll(),r.translate.clear(),r.slideLooper.clear(),s.destroy()}function A(){c||(c=!0,i.removeAll(),I(),o.emit("destroy"))}function B(){var j=a.atMedia(d),M=!a.areEqual(j,f),O=r.axis.measureSize(e.getBoundingClientRect()),h=S!==O,L=s.haveChanged();(h||M||L)&&y(),o.emit("resize")}function C(j){var M=r[j?"target":"location"].get(),O=f.loop?"removeOffset":"constrain";return r.slidesInView.check(r.limit[O](M))}function q(j){var M=C(j);return r.slideIndexes.filter(function(O){return M.indexOf(O)===-1})}function H(j,M,O){!f.active||c||(r.scrollBody.useBaseMass().useSpeed(M?100:f.speed),r.scrollTo.index(j,O||0))}function J(j){var M=r.index.clone().add(1);H(M.get(),j===!0,-1)}function W(j){var M=r.index.clone().add(-1);H(M.get(),j===!0,1)}function G(){var j=r.index.clone().add(1);return j.get()!==V()}function F(){var j=r.index.clone().add(-1);return j.get()!==V()}function P(){return r.scrollSnaps.map(r.scrollProgress.get)}function ne(){return r.scrollProgress.get(r.location.get())}function V(){return r.index.get()}function U(){return r.indexPrevious.get()}function X(){return r.dragHandler.clickAllowed()}function ae(){return E}function se(){return r}function ie(){return e}function Z(){return g}function K(){return x}var R={canScrollNext:G,canScrollPrev:F,clickAllowed:X,containerNode:Z,internalEngine:se,destroy:A,off:v,on:l,plugins:ae,previousScrollSnap:U,reInit:u,rootNode:ie,scrollNext:J,scrollPrev:W,scrollProgress:ne,scrollSnapList:P,scrollTo:H,selectedScrollSnap:V,slideNodes:K,slidesInView:C,slidesNotInView:q};return b(n,t),i.add(window,"resize",B),setTimeout(function(){return o.emit("init")},0),R}te.globalOptions=void 0;te.optionsHandler=ye;function Bn(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Ae(e){return e.concat().sort(function(n,t){return n.name>t.name?1:-1}).map(function(n){return n.options})}function Tn(e,n){if(e.length!==n.length)return!1;var t=te.optionsHandler().areEqual,i=Ae(e),a=Ae(n);return i.every(function(s,o){var l=a[o];return t(s,l)})}function Se(e,n){e===void 0&&(e={}),n===void 0&&(n=[]);var t=k.useRef(te.optionsHandler()),i=k.useRef(e),a=k.useRef(n),s=k.useState(),o=s[0],l=s[1],v=k.useState(),u=v[0],c=v[1],r=k.useCallback(function(){o&&o.reInit(i.current,a.current)},[o]);return k.useEffect(function(){if(Bn()&&u){te.globalOptions=Se.globalOptions;var d=te(u,i.current,a.current);return l(d),function(){return d.destroy()}}else l(void 0)},[u,l]),k.useEffect(function(){t.current.areEqual(i.current,e)||(i.current=e,r())},[e,r]),k.useEffect(function(){Tn(a.current,n)||(a.current=n,r())},[n,r]),[c,o]}Se.globalOptions=void 0;const kn="/assets/intro-01-e4c8126c.png",Nn="/assets/intro-01@2x-09162756.png",Pn="/assets/intro-02-3f4554ad.png",Dn="/assets/intro-02@2x-e53b38c7.png",Cn="/assets/intro-03-092d561b.png",Ln="/assets/intro-03@2x-4c9caaf8.png",On="/assets/intro-04-c17cce86.png",Vn="/assets/intro-04@2x-09b6d43c.png",Fn="/assets/intro-05-26a22d86.png",zn="/assets/intro-05@2x-13635ed9.png",Hn="/assets/intro-06-2da52494.png",Rn="/assets/intro-06@2x-8e766de4.png",$n="/assets/intro-07-2143630b.png",qn="/assets/intro-07@2x-27110963.png",Un="/assets/intro-08-37b46360.png",_n="/assets/intro-08@2x-411d131f.png",Gn="/assets/intro-09-fcd08f8e.png",Kn="/assets/intro-09@2x-d39af3bd.png",Wn="/assets/intro-end-d6d780b4.png",Jn="/assets/intro-end@2x-47780cdf.png",Xn="/assets/intro-start-a942b3c7.png",Yn="/assets/intro-start@2x-90ba1b19.png",me="#2286f7",ge="#0870e6",Qn=Be(me,me,"#ffffff",ge,ge,"#ffffff"),Zn=Me(Be("transparent","transparent",me,"transparent","transparent",ge),D`
    padding-left: 0;
    padding-right: 0;
  `),z={small:"@media (max-width: 558px)",normal:"@media (min-width: 559px)"},er=k.memo(()=>m.jsx("div",{className:D`
        padding: 0;
        ${ke(Xn,Yn,560,202)}
        background-position: 0 51px;

        ${z.small} {
          background-size: 100% auto;
        }

        @media (max-width: 558px) {
          width: 100%;
        }

        @media (min-width: 558px) {
          width: 558px;
          height: 300px;
        }
      `,children:m.jsx("p",{className:D`
          margin: 0;
          font-weight: normal;
          color: #011722;

          ${z.small} {
            width: 220px;
            padding: 150px 0 0 34px;
            font-size: 16px;
          }

          ${z.normal} {
            width: 245px;
            padding: 140px 0 0 34px;
            font-size: 18px;
          }
        `,children:"Welcome to Koofr Vault: your favourite cloud storage with client-side encryption!"})})),be=Te.div`
  display: flex;
  padding: 25px 0 0;

  ${z.small} {
    flex-direction: column;
  }

  ${z.normal} {
    flex-direction: row;
    justify-content: space-between;
    height: 300px;
  }
`,Q=k.memo(({image:e,image2x:n,children:t})=>m.jsxs("div",{className:D`
        display: flex;
        flex-direction: column;
        align-items: center;

        ${z.small} {
          padding: 0 25px 25px;
        }

        ${z.normal} {
          margin: 0 15px;
          width: 150px;
        }
      `,children:[m.jsx(ve,{image:e,image2x:n,width:130,height:130,className:D`
          margin-bottom: 15px;
        `}),m.jsx("p",{className:D`
          font-size: 14px;
          color: #011722;
          margin: 0;
          text-align: center;

          & strong {
            font-weight: 600;
          }
        `,children:t})]})),nr=k.memo(()=>m.jsxs(be,{children:[m.jsx(Q,{image:kn,image2x:Nn,children:"The Vault is like having a box with a unique lock in your trunk: an extra layer of security to protect your most sensitive files."}),m.jsxs(Q,{image:Pn,image2x:Dn,children:["Vault is"," ",m.jsx("a",{href:"https://github.com/koofr/vault",target:"_blank",rel:"noreferrer",children:"open source"}),", so you can always check that the code does exactly what is promised - and nothing more."]}),m.jsxs(Q,{image:Cn,image2x:Ln,children:[m.jsx("a",{href:"https://rclone.org",target:"_blank",rel:"noreferrer",children:"rclone"})," ","compatibility: Download your encrypted files and decrypt them locally using the rclone command-line tool."]})]})),rr=k.memo(()=>m.jsxs(be,{children:[m.jsx(Q,{image:On,image2x:Vn,children:"You can have one or more Safe Boxes in your Vault, with separate Safe Keys for each Safe Box."}),m.jsx(Q,{image:Fn,image2x:zn,children:"Vault encrypts both file names and content, so they are only readable inside the Safe Box."}),m.jsx(Q,{image:Hn,image2x:Rn,children:"In your main Koofr app, the files will appear with encrypted file names and cannot be opened."})]})),tr=k.memo(()=>m.jsxs(be,{children:[m.jsx(Q,{image:$n,image2x:qn,children:"When you create a Safe Box, you'll choose a Safe Key for it."}),m.jsx(Q,{image:Un,image2x:_n,children:"Since the Safe Key is used to encrypt the files you store in the Safe Box, it cannot be changed later."}),m.jsxs(Q,{image:Gn,image2x:Kn,children:[m.jsx("strong",{children:"There is no way recover your files if you forget your Safe Key."})," ","It is never sent to or stored on Koofr servers."]})]})),ar=k.memo(()=>{const e=ze();return m.jsxs("div",{className:D`
        display: flex;
        flex-direction: column;
        padding: 0;
        ${ke(Wn,Jn,252,203)}

        ${z.small} {
          background-position: bottom 15px center;
          width: 100%;
          height: 335px;
        }

        ${z.normal} {
          background-position: 281px 68px;
          width: 558px;
          height: 300px;
        }
      `,children:[m.jsx("div",{className:D`
          ${z.normal} {
            display: flex;
            flex-direction: row;
            align-items: center;
            flex-grow: 1;
          }
        `,children:m.jsx("p",{className:D`
            font-weight: normal;
            color: #011722;

            ${z.small} {
              width: 245px;
              margin: 0 auto;
              padding: 10px 0 0 0;
              text-align: center;
              font-size: 16px;
            }

            ${z.normal} {
              width: 200px;
              margin-left: 34px;
              font-size: 18px;
            }
          `,children:"Get started with Vault by creating your first Safe Box."})}),e.appStoreUrl!==void 0||e.googlePlayUrl!==void 0?m.jsxs("div",{className:D`
            ${z.small} {
              display: flex;
              flex-direction: row;
              justify-content: center;
              margin-top: 20px;
            }

            ${z.normal} {
              display: flex;
              flex-direction: row;
              flex-shrink: 0;
              margin-left: 34px;
            }
          `,children:[e.googlePlayUrl!==void 0?m.jsx("a",{href:e.googlePlayUrl,target:"_blank",rel:"noreferrer",className:D`
                margin-right: 20px;
              `,children:m.jsx(ve,{image:Re,image2x:$e,width:122,height:36})}):null,e.appStoreUrl!==void 0?m.jsx("a",{href:e.appStoreUrl,target:"_blank",rel:"noreferrer",children:m.jsx(ve,{image:qe,image2x:Ue,width:117,height:36})}):null]}):null]})}),ir=Te.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
`,or=k.memo(({hide:e})=>{const n=["Welcome","About Vault","Safe Boxes","Safe Key","Start using Vault"],t=[m.jsx(er,{}),m.jsx(nr,{}),m.jsx(rr,{}),m.jsx(tr,{}),m.jsx(ar,{})],i=t.length,[a,s]=k.useState(0),o=a>0,l=a===i-1,[v,u]=Se({loop:!1,speed:15});k.useEffect(()=>{if(u!==void 0){const d=()=>{const f=u.selectedScrollSnap();f===i?e():s(f)};return u.on("select",d),()=>{u.off("select",d)}}},[u,e,i]);const c=k.useCallback(()=>{s(d=>{const f=d-1;return u!==void 0&&u.scrollTo(f),f})},[u]),r=k.useCallback(()=>{l?e():s(d=>{const f=d+1;return u!==void 0&&u.scrollTo(f),f})},[e,l,u]);return m.jsxs(m.Fragment,{children:[m.jsx(_e,{children:m.jsx(Ge,{children:n[a]})}),m.jsx(Ke,{className:D`
          padding: 0;

          @media (max-width: 768px) {
            height: 100%;
          }
        `,children:m.jsx("div",{className:D`
            overflow: hidden;
            height: 100%;
          `,ref:v,children:m.jsxs("div",{className:D`
              display: flex;
              align-items: flex-start;
              height: 100%;
            `,children:[t.map((d,f)=>m.jsx("div",{className:D`
                  flex: 0 0 100%;
                  min-width: 0;
                  height: 100%;
                  overflow-x: hidden;
                  overflow-y: auto;
                `,children:m.jsx(ir,{children:d})},f)),m.jsx("div",{className:D`
                flex: 0 0 100%;
                min-width: 0;
                height: 100%;
              `})]})})}),m.jsxs(We,{children:[m.jsx(Je,{children:o?m.jsx(Ee,{type:"button",className:Zn,onClick:c,children:"Back"}):null}),m.jsx(Xe,{children:m.jsx("div",{className:D`
              display: flex;
              margin: auto;
            `,children:He(0,i).map(d=>m.jsx("div",{className:Me(D`
                    background-color: #d4d6d7;
                    display: inline-block;
                    width: 6px;
                    height: 6px;
                    border-radius: 3px;
                    margin: 0 2.5px;
                  `,d===a&&D`
                      background-color: #676f73;
                    `)},d))})}),m.jsx(Ye,{children:m.jsx(Ee,{type:"button",className:Qn,onClick:r,children:l?"Done":"Next"})})]})]})}),mr=k.memo(({isVisible:e,hide:n})=>m.jsx(Qe,{show:e,onHide:n,children:e?m.jsx(or,{hide:n}):m.jsx(m.Fragment,{})}));export{mr as IntroModal};

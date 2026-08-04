import{r as e}from"./chunk-DECur_0Z.js";import"./emotion-react.browser.esm-B6XXdZtW.js";import{n as t,t as n}from"./emotion-css.esm-Qs1dyEi9.js";import{n as r,t as i}from"./jsx-runtime-BA9giqqw.js";import"./injectIntl-DcBbzoym.js";import{t as a}from"./useIntl-uVUnHosr.js";import{u as o}from"./chunk-LFPYN7LY-JR5T8hsc.js";import{a as s,s as c}from"./Button-CQrJ5P7o.js";import{t as l}from"./range-DSvptEXY.js";import{a as u,c as d,d as f,l as p,n as m,s as h,t as g,u as _}from"./Modal-DDIJZmeV.js";import{a as v,c as y,i as b,n as x,o as S,r as C,s as w,t as T}from"./RetinaImage-Cxz0cO5n.js";import{r as E}from"./config-D41TpNeF.js";import"./react-dom-D7VaEYON.js";import{n as D}from"./Button-QQQJxeoZ.js";import"./useClickOutside-DDfmGtM1.js";import"./useIsMobile-Dv4RoKy5.js";var O=e(r());function ee(e){return Object.prototype.toString.call(e)===`[object Object]`}function k(e){return ee(e)||Array.isArray(e)}function te(){return!!(typeof window<`u`&&window.document&&window.document.createElement)}function A(e,t){let n=Object.keys(e),r=Object.keys(t);return n.length!==r.length||JSON.stringify(Object.keys(e.breakpoints||{}))!==JSON.stringify(Object.keys(t.breakpoints||{}))?!1:n.every(n=>{let r=e[n],i=t[n];return typeof r==`function`?`${r}`==`${i}`:!k(r)||!k(i)?r===i:A(r,i)})}function j(e){return e.concat().sort((e,t)=>e.name>t.name?1:-1).map(e=>e.options)}function M(e,t){if(e.length!==t.length)return!1;let n=j(e),r=j(t);return n.every((e,t)=>{let n=r[t];return A(e,n)})}function N(e){return typeof e==`number`}function P(e){return typeof e==`string`}function F(e){return typeof e==`boolean`}function I(e){return Object.prototype.toString.call(e)===`[object Object]`}function L(e){return Math.abs(e)}function ne(e){return Math.sign(e)}function R(e,t){return L(e-t)}function z(e,t){return e===0||t===0||L(e)<=L(t)?0:L(R(L(e),L(t))/e)}function B(e){return Math.round(e*100)/100}function V(e){return K(e).map(Number)}function H(e){return e[U(e)]}function U(e){return Math.max(0,e.length-1)}function W(e,t){return t===U(e)}function G(e,t=0){return Array.from(Array(e),(e,n)=>t+n)}function K(e){return Object.keys(e)}function re(e,t){return[e,t].reduce((e,t)=>(K(t).forEach(n=>{let r=e[n],i=t[n];e[n]=I(r)&&I(i)?re(r,i):i}),e),{})}function ie(e,t){return t.MouseEvent!==void 0&&e instanceof t.MouseEvent}function ae(e,t){let n={start:r,center:i,end:a};function r(){return 0}function i(e){return a(e)/2}function a(e){return t-e}function o(r,i){return P(e)?n[e](r):e(t,r,i)}return{measure:o}}function oe(){let e=[];function t(t,n,i,a={passive:!0}){let o;if(`addEventListener`in t)t.addEventListener(n,i,a),o=()=>t.removeEventListener(n,i,a);else{let e=t;e.addListener(i),o=()=>e.removeListener(i)}return e.push(o),r}function n(){e=e.filter(e=>e())}let r={add:t,clear:n};return r}function se(e,t,n,r){let i=oe(),a=1e3/60,o=null,s=0,c=0;function l(){i.add(e,`visibilitychange`,()=>{e.hidden&&m()})}function u(){p(),i.clear()}function d(e){if(!c)return;o||(o=e,n(),n());let i=e-o;for(o=e,s+=i;s>=a;)n(),s-=a;r(s/a),c&&=t.requestAnimationFrame(d)}function f(){c||=t.requestAnimationFrame(d)}function p(){t.cancelAnimationFrame(c),o=null,s=0,c=0}function m(){o=null,s=0}return{init:l,destroy:u,start:f,stop:p,update:n,render:r}}function ce(e,t){let n=t===`rtl`,r=e===`y`,i=r?`y`:`x`,a=r?`x`:`y`,o=!r&&n?-1:1,s=u(),c=d();function l(e){let{height:t,width:n}=e;return r?t:n}function u(){return r?`top`:n?`right`:`left`}function d(){return r?`bottom`:n?`left`:`right`}function f(e){return e*o}return{scroll:i,cross:a,startEdge:s,endEdge:c,measureSize:l,direction:f}}function q(e=0,t=0){let n=L(e-t);function r(t){return t<e}function i(e){return e>t}function a(e){return r(e)||i(e)}function o(n){return a(n)?r(n)?e:t:n}function s(e){return n?e-n*Math.ceil((e-t)/n):e}return{length:n,max:t,min:e,constrain:o,reachedAny:a,reachedMax:i,reachedMin:r,removeOffset:s}}function le(e,t,n){let{constrain:r}=q(0,e),i=e+1,a=o(t);function o(e){return n?L((i+e)%i):r(e)}function s(){return a}function c(e){return a=o(e),d}function l(e){return u().set(s()+e)}function u(){return le(e,s(),n)}let d={get:s,set:c,add:l,clone:u};return d}function ue(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v){let{cross:y,direction:b}=e,x=[`INPUT`,`SELECT`,`TEXTAREA`],S={passive:!1},C=oe(),w=oe(),T=q(50,225).constrain(p.measure(20)),E={mouse:300,touch:400},D={mouse:500,touch:600},O=m?43:25,ee=!1,k=0,te=0,A=!1,j=!1,M=!1,N=!1;function P(e){if(!v)return;function n(t){(F(v)||v(e,t))&&W(t)}let r=t;C.add(r,`dragstart`,e=>e.preventDefault(),S).add(r,`touchmove`,()=>void 0,S).add(r,`touchend`,()=>void 0).add(r,`touchstart`,n).add(r,`mousedown`,n).add(r,`touchcancel`,K).add(r,`contextmenu`,K).add(r,`click`,re,!0)}function I(){C.clear(),w.clear()}function B(){let e=N?n:t;w.add(e,`touchmove`,G,S).add(e,`touchend`,K).add(e,`mousemove`,G,S).add(e,`mouseup`,K)}function V(e){let t=e.nodeName||``;return x.includes(t)}function H(){return(m?D:E)[N?`mouse`:`touch`]}function U(e,t){let n=d.add(ne(e)*-1),r=u.byDistance(e,!m).distance;return m||L(e)<T?r:g&&t?r*.5:u.byIndex(n.get(),0).distance}function W(e){let t=ie(e,r);N=t,M=m&&t&&!e.buttons&&ee,ee=R(i.get(),o.get())>=2,!(t&&e.button!==0)&&(V(e.target)||(A=!0,a.pointerDown(e),l.useFriction(0).useDuration(0),i.set(o),B(),k=a.readPoint(e),te=a.readPoint(e,y),f.emit(`pointerDown`)))}function G(e){if(!ie(e,r)&&e.touches.length>=2)return K(e);let t=a.readPoint(e),n=a.readPoint(e,y),o=R(t,k),c=R(n,te);if(!j&&!N&&(!e.cancelable||(j=o>c,!j)))return K(e);let u=a.pointerMove(e);o>h&&(M=!0),l.useFriction(.3).useDuration(.75),s.start(),i.add(b(u)),e.preventDefault()}function K(e){let t=u.byDistance(0,!1).index!==d.get(),n=a.pointerUp(e)*H(),r=U(b(n),t),i=z(n,r),o=O-10*i,s=_+i/50;j=!1,A=!1,w.clear(),l.useDuration(o).useFriction(s),c.distance(r,!m),N=!1,f.emit(`pointerUp`)}function re(e){M&&=(e.stopPropagation(),e.preventDefault(),!1)}function ae(){return A}return{init:P,destroy:I,pointerDown:ae}}function de(e,t){let n,r;function i(e){return e.timeStamp}function a(n,r){let i=`client${(r||e.scroll)===`x`?`X`:`Y`}`;return(ie(n,t)?n:n.touches[0])[i]}function o(e){return n=e,r=e,a(e)}function s(e){let t=a(e)-a(r),o=i(e)-i(n)>170;return r=e,o&&(n=e),t}function c(e){if(!n||!r)return 0;let t=a(r)-a(n),o=i(e)-i(n),s=i(e)-i(r)>170,c=t/o;return o&&!s&&L(c)>.1?c:0}return{pointerDown:o,pointerMove:s,pointerUp:c,readPoint:a}}function fe(){function e(e){let{offsetTop:t,offsetLeft:n,offsetWidth:r,offsetHeight:i}=e;return{top:t,right:n+r,bottom:t+i,left:n,width:r,height:i}}return{measure:e}}function pe(e){function t(t){return t/100*e}return{measure:t}}function me(e,t,n,r,i,a,o){let s=[e].concat(r),c,l,u=[],d=!1;function f(e){return i.measureSize(o.measure(e))}function p(i){if(!a)return;l=f(e),u=r.map(f);function o(n){for(let a of n){if(d)return;let n=a.target===e,o=r.indexOf(a.target),s=n?l:u[o];if(L(f(n?e:r[o])-s)>=.5){i.reInit(),t.emit(`resize`);break}}}c=new ResizeObserver(e=>{(F(a)||a(i,e))&&o(e)}),n.requestAnimationFrame(()=>{s.forEach(e=>c.observe(e))})}function m(){d=!0,c&&c.disconnect()}return{init:p,destroy:m}}function he(e,t,n,r,i,a){let o=0,s=0,c=i,l=a,u=e.get(),d=0;function f(){let t=r.get()-e.get(),i=!c,a=0;return i?(o=0,n.set(r),e.set(r),a=t):(n.set(e),o+=t/c,o*=l,u+=o,e.add(o),a=u-d),s=ne(a),d=u,x}function p(){return L(r.get()-t.get())<.001}function m(){return c}function h(){return s}function g(){return o}function _(){return y(i)}function v(){return b(a)}function y(e){return c=e,x}function b(e){return l=e,x}let x={direction:h,duration:m,velocity:g,seek:f,settled:p,useBaseFriction:v,useBaseDuration:_,useFriction:b,useDuration:y};return x}function ge(e,t,n,r,i){let a=i.measure(10),o=i.measure(50),s=q(.1,.99),c=!1;function l(){return!(c||!e.reachedAny(n.get())||!e.reachedAny(t.get()))}function u(i){if(!l())return;let c=L(e[e.reachedMin(t.get())?`min`:`max`]-t.get()),u=n.get()-t.get(),d=s.constrain(c/o);n.subtract(u*d),!i&&L(u)<a&&(n.set(e.constrain(n.get())),r.useDuration(25).useBaseFriction())}function d(e){c=!e}return{shouldConstrain:l,constrain:u,toggleActive:d}}function _e(e,t,n,r,i){let a=q(-t+e,0),o=d(),s=u(),c=f();function l(e,t){return R(e,t)<=1}function u(){let e=o[0],t=H(o);return q(o.lastIndexOf(e),o.indexOf(t)+1)}function d(){return n.map((e,t)=>{let{min:r,max:i}=a,o=a.constrain(e),s=!t,c=W(n,t);return s?i:c||l(r,o)?r:l(i,o)?i:o}).map(e=>parseFloat(e.toFixed(3)))}function f(){if(t<=e+i)return[a.max];if(r===`keepSnaps`)return o;let{min:n,max:c}=s;return o.slice(n,c)}return{snapsContained:c,scrollContainLimit:s}}function ve(e,t,n){let r=t[0];return{limit:q(n?r-e:H(t),r)}}function ye(e,t,n,r){let i=.1,{reachedMin:a,reachedMax:o}=q(t.min+i,t.max+i);function s(e){return e===1?o(n.get()):e===-1?a(n.get()):!1}function c(t){if(!s(t))return;let n=t*-1*e;r.forEach(e=>e.add(n))}return{loop:c}}function be(e){let{max:t,length:n}=e;function r(e){let r=e-t;return n?r/-n:0}return{get:r}}function xe(e,t,n,r,i){let{startEdge:a,endEdge:o}=e,{groupSlides:s}=i,c=d().map(t.measure),l=f(),u=p();function d(){return s(r).map(e=>H(e)[o]-e[0][a]).map(L)}function f(){return r.map(e=>n[a]-e[a]).map(e=>-L(e))}function p(){return s(l).map(e=>e[0]).map((e,t)=>e+c[t])}return{snaps:l,snapsAligned:u}}function Se(e,t,n,r,i,a){let{groupSlides:o}=i,{min:s,max:c}=r,l=u();function u(){let r=o(a),i=!e||t===`keepSnaps`;return n.length===1?[a]:i?r:r.slice(s,c).map((e,t,n)=>{let r=!t,i=W(n,t);return r?G(H(n[0])+1):i?G(U(a)-H(n)[0]+1,H(n)[0]):e})}return{slideRegistry:l}}function Ce(e,t,n,r,i){let{reachedAny:a,removeOffset:o,constrain:s}=r;function c(e){return e.concat().sort((e,t)=>L(e)-L(t))[0]}function l(n){let r=e?o(n):s(n),{index:i}=t.map((e,t)=>({diff:u(e-r,0),index:t})).sort((e,t)=>L(e.diff)-L(t.diff))[0];return{index:i,distance:r}}function u(t,r){let i=[t,t+n,t-n];if(!e)return t;if(!r)return c(i);let a=i.filter(e=>ne(e)===r);return a.length?c(a):H(i)-n}function d(e,n){return{index:e,distance:u(t[e]-i.get(),n)}}function f(n,r){let o=i.get()+n,{index:s,distance:c}=l(o),d=!e&&a(o);return!r||d?{index:s,distance:n}:{index:s,distance:n+u(t[s]-c,0)}}return{byDistance:f,byIndex:d,shortcut:u}}function we(e,t,n,r,i,a,o){function s(i){let s=i.distance,c=i.index!==t.get();a.add(s),s&&(r.duration()?e.start():(e.update(),e.render(1),e.update())),c&&(n.set(t.get()),t.set(i.index),o.emit(`select`))}function c(e,t){s(i.byDistance(e,t))}function l(e,n){let r=t.clone().set(e);s(i.byIndex(r.get(),n))}return{distance:c,index:l}}function Te(e,t,n,r,i,a,o,s){let c={passive:!0,capture:!0},l=0;function u(u){if(!s)return;function f(t){if(new Date().getTime()-l>10)return;o.emit(`slideFocusStart`),e.scrollLeft=0;let a=n.findIndex(e=>e.includes(t));N(a)&&(i.useDuration(0),r.index(a,0),o.emit(`slideFocus`))}a.add(document,`keydown`,d,!1),t.forEach((e,t)=>{a.add(e,`focus`,e=>{(F(s)||s(u,e))&&f(t)},c)})}function d(e){e.code===`Tab`&&(l=new Date().getTime())}return{init:u}}function Ee(e){let t=e;function n(){return t}function r(e){t=o(e)}function i(e){t+=o(e)}function a(e){t-=o(e)}function o(e){return N(e)?e:e.get()}return{get:n,set:r,add:i,subtract:a}}function De(e,t){let n=e.scroll===`x`?o:s,r=t.style,i=null,a=!1;function o(e){return`translate3d(${e}px,0px,0px)`}function s(e){return`translate3d(0px,${e}px,0px)`}function c(t){if(a)return;let o=B(e.direction(t));o!==i&&(r.transform=n(o),i=o)}function l(e){a=!e}function u(){a||(r.transform=``,t.getAttribute(`style`)||t.removeAttribute(`style`))}return{clear:u,to:c,toggleActive:l}}function Oe(e,t,n,r,i,a,o,s,c){let l=.5,u=V(i),d=V(i).reverse(),f=_().concat(v());function p(e,t){return e.reduce((e,t)=>e-i[t],t)}function m(e,t){return e.reduce((e,n)=>p(e,t)>0?e.concat([n]):e,[])}function h(e){return a.map((n,i)=>({start:n-r[i]+l+e,end:n+t-l+e}))}function g(t,r,i){let a=h(r);return t.map(t=>{let r=i?0:-n,o=i?n:0,l=i?`end`:`start`,u=a[t][l];return{index:t,loopPoint:u,slideLocation:Ee(-1),translate:De(e,c[t]),target:()=>s.get()>u?r:o}})}function _(){let e=o[0];return g(m(d,e),n,!1)}function v(){return g(m(u,t-o[0]-1),-n,!0)}function y(){return f.every(({index:e})=>p(u.filter(t=>t!==e),t)<=.1)}function b(){f.forEach(e=>{let{target:t,translate:n,slideLocation:r}=e,i=t();i!==r.get()&&(n.to(i),r.set(i))})}function x(){f.forEach(e=>e.translate.clear())}return{canLoop:y,clear:x,loop:b,loopPoints:f}}function ke(e,t,n){let r,i=!1;function a(a){if(!n)return;function o(e){for(let n of e)if(n.type===`childList`){a.reInit(),t.emit(`slidesChanged`);break}}r=new MutationObserver(e=>{i||(F(n)||n(a,e))&&o(e)}),r.observe(e,{childList:!0})}function o(){r&&r.disconnect(),i=!0}return{init:a,destroy:o}}function Ae(e,t,n,r){let i={},a=null,o=null,s,c=!1;function l(){s=new IntersectionObserver(e=>{c||(e.forEach(e=>{let n=t.indexOf(e.target);i[n]=e}),a=null,o=null,n.emit(`slidesInView`))},{root:e.parentElement,threshold:r}),t.forEach(e=>s.observe(e))}function u(){s&&s.disconnect(),c=!0}function d(e){return K(i).reduce((t,n)=>{let r=parseInt(n),{isIntersecting:a}=i[r];return(e&&a||!e&&!a)&&t.push(r),t},[])}function f(e=!0){if(e&&a)return a;if(!e&&o)return o;let t=d(e);return e&&(a=t),e||(o=t),t}return{init:l,destroy:u,get:f}}function je(e,t,n,r,i,a){let{measureSize:o,startEdge:s,endEdge:c}=e,l=n[0]&&i,u=m(),d=h(),f=n.map(o),p=g();function m(){if(!l)return 0;let e=n[0];return L(t[s]-e[s])}function h(){if(!l)return 0;let e=a.getComputedStyle(H(r));return parseFloat(e.getPropertyValue(`margin-${c}`))}function g(){return n.map((e,t,n)=>{let r=!t,i=W(n,t);return r?f[t]+u:i?f[t]+d:n[t+1][s]-e[s]}).map(L)}return{slideSizes:f,slideSizesWithGaps:p,startGap:u,endGap:d}}function Me(e,t,n,r,i,a,o,s,c){let{startEdge:l,endEdge:u,direction:d}=e,f=N(n);function p(e,t){return V(e).filter(e=>e%t===0).map(n=>e.slice(n,n+t))}function m(e){return e.length?V(e).reduce((n,f,p)=>{let m=H(n)||0,h=m===0,g=f===U(e),_=i[l]-a[m][l],v=i[l]-a[f][u],y=!r&&h?d(o):0,b=L(v-(!r&&g?d(s):0)-(_+y));return p&&b>t+c&&n.push(f),g&&n.push(e.length),n},[]).map((t,n,r)=>{let i=Math.max(r[n-1]||0);return e.slice(i,t)}):[]}function h(e){return f?p(e,n):m(e)}return{groupSlides:h}}function Ne(e,t,n,r,i,a,o){let{align:s,axis:c,direction:l,startIndex:u,loop:d,duration:f,dragFree:p,dragThreshold:m,inViewThreshold:h,slidesToScroll:g,skipSnaps:_,containScroll:v,watchResize:y,watchSlides:b,watchDrag:x,watchFocus:S}=a,C=fe(),w=C.measure(t),T=n.map(C.measure),E=ce(c,l),D=E.measureSize(w),O=pe(D),ee=ae(s,D),k=!d&&!!v,{slideSizes:te,slideSizesWithGaps:A,startGap:j,endGap:M}=je(E,w,T,n,d||!!v,i),N=Me(E,D,g,d,w,T,j,M,2),{snaps:P,snapsAligned:F}=xe(E,ee,w,T,N),I=-H(P)+H(A),{snapsContained:L,scrollContainLimit:ne}=_e(D,I,F,v,2),R=k?L:F,{limit:z}=ve(I,R,d),B=le(U(R),u,d),W=B.clone(),G=V(n),K=({dragHandler:e,scrollBody:t,scrollBounds:n,options:{loop:r}})=>{r||n.constrain(e.pointerDown()),t.seek()},re=({scrollBody:e,translate:t,location:n,offsetLocation:r,previousLocation:i,scrollLooper:a,slideLooper:o,dragHandler:s,animation:c,eventHandler:l,scrollBounds:u,options:{loop:d}},f)=>{let p=e.settled(),m=!u.shouldConstrain(),h=d?p:p&&m,g=h&&!s.pointerDown();g&&c.stop();let _=n.get()*f+i.get()*(1-f);r.set(_),d&&(a.loop(e.direction()),o.loop()),t.to(r.get()),g&&l.emit(`settle`),h||l.emit(`scroll`)},ie=se(r,i,()=>K(Ue),e=>re(Ue,e)),q=.68,Ne=R[B.get()],Pe=Ee(Ne),Fe=Ee(Ne),J=Ee(Ne),Y=Ee(Ne),X=he(Pe,J,Fe,Y,f,q),Ie=Ce(d,R,I,z,Y),Le=we(ie,B,W,X,Ie,Y,o),Re=be(z),ze=oe(),Be=Ae(t,n,o,h),{slideRegistry:Ve}=Se(k,v,R,ne,N,G),He=Te(e,n,Ve,Le,X,ze,o,S),Ue={ownerDocument:r,ownerWindow:i,eventHandler:o,containerRect:w,slideRects:T,animation:ie,axis:E,dragHandler:ue(E,e,r,i,Y,de(E,i),Pe,ie,Le,X,Ie,B,o,O,p,m,_,q,x),eventStore:ze,percentOfView:O,index:B,indexPrevious:W,limit:z,location:Pe,offsetLocation:J,previousLocation:Fe,options:a,resizeHandler:me(t,o,i,n,E,y,C),scrollBody:X,scrollBounds:ge(z,J,Y,X,O),scrollLooper:ye(I,z,J,[Pe,J,Fe,Y]),scrollProgress:Re,scrollSnapList:R.map(Re.get),scrollSnaps:R,scrollTarget:Ie,scrollTo:Le,slideLooper:Oe(E,D,I,te,A,P,R,J,n),slideFocus:He,slidesHandler:ke(t,o,b),slidesInView:Be,slideIndexes:G,slideRegistry:Ve,slidesToScroll:N,target:Y,translate:De(E,t)};return Ue}function Pe(){let e={},t;function n(e){t=e}function r(t){return e[t]||[]}function i(e){return r(e).forEach(n=>n(t,e)),c}function a(t,n){return e[t]=r(t).concat([n]),c}function o(t,n){return e[t]=r(t).filter(e=>e!==n),c}function s(){e={}}let c={init:n,emit:i,off:o,on:a,clear:s};return c}var Fe={align:`center`,axis:`x`,container:null,slides:null,containScroll:`trimSnaps`,direction:`ltr`,slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function J(e){function t(e,t){return re(e,t||{})}function n(n){let r=n.breakpoints||{};return t(n,K(r).filter(t=>e.matchMedia(t).matches).map(e=>r[e]).reduce((e,n)=>t(e,n),{}))}function r(t){return t.map(e=>K(e.breakpoints||{})).reduce((e,t)=>e.concat(t),[]).map(e.matchMedia)}return{mergeOptions:t,optionsAtMedia:n,optionsMediaQueries:r}}function Y(e){let t=[];function n(n,r){return t=r.filter(({options:t})=>e.optionsAtMedia(t).active!==!1),t.forEach(t=>t.init(n,e)),r.reduce((e,t)=>Object.assign(e,{[t.name]:t}),{})}function r(){t=t.filter(e=>e.destroy())}return{init:n,destroy:r}}function X(e,t,n){let r=e.ownerDocument,i=r.defaultView,a=J(i),o=Y(a),s=oe(),c=Pe(),{mergeOptions:l,optionsAtMedia:u,optionsMediaQueries:d}=a,{on:f,off:p,emit:m}=c,h=D,g=!1,_,v=l(Fe,X.globalOptions),y=l(v),b=[],x,S,C;function w(){let{container:t,slides:n}=y;S=(P(t)?e.querySelector(t):t)||e.children[0];let r=P(n)?S.querySelectorAll(n):n;C=[].slice.call(r||S.children)}function T(t){let n=Ne(e,S,C,r,i,t,c);return t.loop&&!n.slideLooper.canLoop()?T(Object.assign({},t,{loop:!1})):n}function E(e,t){g||(v=l(v,e),y=u(v),b=t||b,w(),_=T(y),d([v,...b.map(({options:e})=>e)]).forEach(e=>s.add(e,`change`,D)),y.active&&(_.translate.to(_.location.get()),_.animation.init(),_.slidesInView.init(),_.slideFocus.init(W),_.eventHandler.init(W),_.resizeHandler.init(W),_.slidesHandler.init(W),_.options.loop&&_.slideLooper.loop(),S.offsetParent&&C.length&&_.dragHandler.init(W),x=o.init(W,b)))}function D(e,t){let n=I();O(),E(l({startIndex:n},e),t),c.emit(`reInit`)}function O(){_.dragHandler.destroy(),_.eventStore.clear(),_.translate.clear(),_.slideLooper.clear(),_.resizeHandler.destroy(),_.slidesHandler.destroy(),_.slidesInView.destroy(),_.animation.destroy(),o.destroy(),s.clear()}function ee(){g||(g=!0,s.clear(),O(),c.emit(`destroy`),c.clear())}function k(e,t,n){!y.active||g||(_.scrollBody.useBaseFriction().useDuration(t===!0?0:y.duration),_.scrollTo.index(e,n||0))}function te(e){k(_.index.add(1).get(),e,-1)}function A(e){k(_.index.add(-1).get(),e,1)}function j(){return _.index.add(1).get()!==I()}function M(){return _.index.add(-1).get()!==I()}function N(){return _.scrollSnapList}function F(){return _.scrollProgress.get(_.offsetLocation.get())}function I(){return _.index.get()}function L(){return _.indexPrevious.get()}function ne(){return _.slidesInView.get()}function R(){return _.slidesInView.get(!1)}function z(){return x}function B(){return _}function V(){return e}function H(){return S}function U(){return C}let W={canScrollNext:j,canScrollPrev:M,containerNode:H,internalEngine:B,destroy:ee,off:p,on:f,emit:m,plugins:z,previousScrollSnap:L,reInit:h,rootNode:V,scrollNext:te,scrollPrev:A,scrollProgress:F,scrollSnapList:N,scrollTo:k,selectedScrollSnap:I,slideNodes:U,slidesInView:ne,slidesNotInView:R};return E(t,n),setTimeout(()=>c.emit(`init`),0),W}X.globalOptions=void 0;function Ie(e={},t=[]){let n=(0,O.useRef)(e),r=(0,O.useRef)(t),[i,a]=(0,O.useState)(),[o,s]=(0,O.useState)(),c=(0,O.useCallback)(()=>{i&&i.reInit(n.current,r.current)},[i]);return(0,O.useEffect)(()=>{A(n.current,e)||(n.current=e,c())},[e,c]),(0,O.useEffect)(()=>{M(r.current,t)||(r.current=t,c())},[t,c]),(0,O.useEffect)(()=>{if(te()&&o){X.globalOptions=Ie.globalOptions;let e=X(o,n.current,r.current);return a(e),()=>e.destroy()}else a(void 0)},[o,a]),[s,i]}Ie.globalOptions=void 0;var Le=e(l(),1),Re=`/assets/intro-01-B9L7sRgW.png`,ze=`/assets/intro-01@2x-C6IY3zvY.png`,Be=`/assets/intro-02-BX_TPVw7.png`,Ve=`/assets/intro-02@2x-CJMA9LRs.png`,He=`/assets/intro-03-f6aZ2Ngn.png`,Ue=`/assets/intro-03@2x-DrCdDUzO.png`,We=`/assets/intro-04-BtgH-TAQ.png`,Ge=`/assets/intro-04@2x-B0dG3kIn.png`,Ke=`/assets/intro-05-Dqdl8gEQ.png`,qe=`/assets/intro-05@2x-BnID3d4Y.png`,Je=`/assets/intro-06-BakGMiYr.png`,Ye=`/assets/intro-06@2x-uEm0irpW.png`,Xe=`/assets/intro-07-YOooEHwu.png`,Ze=`/assets/intro-07@2x-Yau4t8ms.png`,Qe=`/assets/intro-08-BXnzdKrm.png`,$e=`/assets/intro-08@2x-DeDcHWkj.png`,et=`/assets/intro-09-D_b0_Q1f.png`,tt=`/assets/intro-09@2x-JLCUkqHb.png`,nt=`/assets/intro-end-BWIREVl1.png`,rt=`/assets/intro-end@2x-BopevUnH.png`,it=`/assets/intro-start-BEtT2OsF.png`,at=`/assets/intro-start@2x-3Sd9KtJc.png`,Z=i(),ot=`#2286f7`,st=`#0870e6`,ct=s(ot,ot,`#ffffff`,st,st,`#ffffff`),lt=t(s(`transparent`,`transparent`,ot,`transparent`,`transparent`,st),n`
    padding-left: 0;
    padding-right: 0;
  `),Q={small:`@media (max-width: 558px)`,normal:`@media (min-width: 559px)`},ut=(0,O.memo)(()=>(0,Z.jsx)(`div`,{className:n`
        padding: 0;
        ${x(it,at,560,202)}
        background-position: 0 51px;

        ${Q.small} {
          background-size: 100% auto;
        }

        @media (max-width: 558px) {
          width: 100%;
        }

        @media (min-width: 558px) {
          width: 558px;
          height: 300px;
        }
      `,children:(0,Z.jsx)(`p`,{className:n`
          margin: 0;
          font-weight: normal;
          color: #011722;

          ${Q.small} {
            width: 220px;
            padding: 150px 0 0 34px;
            font-size: 16px;
          }

          ${Q.normal} {
            width: 245px;
            padding: 140px 0 0 34px;
            font-size: 18px;
          }
        `,children:(0,Z.jsx)(o,{id:`web.intro.step_1.content`,description:`Intro modal step 1 body text welcoming users to Koofr Vault.`,defaultMessage:`Welcome to Koofr Vault: your favourite cloud storage with client-side encryption!`})})}));ut.displayName=`IntroStep1`;var dt=c.div`
  display: flex;
  padding: 25px 0 0;

  ${Q.small} {
    flex-direction: column;
  }

  ${Q.normal} {
    flex-direction: row;
    justify-content: space-between;
    height: 300px;
  }
`,$=(0,O.memo)(({image:e,image2x:t,children:r})=>(0,Z.jsxs)(`div`,{className:n`
        display: flex;
        flex-direction: column;
        align-items: center;

        ${Q.small} {
          padding: 0 25px 25px;
        }

        ${Q.normal} {
          margin: 0 15px;
          width: 150px;
        }
      `,children:[(0,Z.jsx)(T,{image:e,image2x:t,width:130,height:130,className:n`
          margin-bottom: 15px;
          flex-shrink: 0;
        `}),(0,Z.jsx)(`p`,{className:n`
          font-size: 14px;
          color: #011722;
          margin: 0;
          text-align: center;

          & strong {
            font-weight: 600;
          }
        `,children:r})]}));$.displayName=`IntroFeature`;var ft=(0,O.memo)(()=>(0,Z.jsxs)(dt,{children:[(0,Z.jsx)($,{image:Re,image2x:ze,children:(0,Z.jsx)(o,{id:`web.intro.step_2.content_1`,description:`Intro modal step 2 feature text explaining the Safe Box metaphor.`,defaultMessage:`The Vault is like having a box with a unique lock in your trunk: an extra layer of security to protect your most sensitive files.`})}),(0,Z.jsx)($,{image:Be,image2x:Ve,children:(0,Z.jsx)(o,{id:`web.intro.step_2.content_2`,description:`Intro modal step 2 feature text about the open source nature of Vault.`,defaultMessage:`Vault is <a>open source</a>, so you can always check that the code does exactly what is promised - and nothing more.`,values:{a:e=>(0,Z.jsx)(`a`,{href:`https://github.com/koofr/vault`,target:`_blank`,rel:`noreferrer`,children:e})}})}),(0,Z.jsx)($,{image:He,image2x:Ue,children:(0,Z.jsx)(o,{id:`web.intro.step_2.content_3`,description:`Intro modal step 2 feature text about rclone compatibility.`,defaultMessage:`<a>rclone</a> compatibility: Download your encrypted files and decrypt them locally using the rclone command-line tool.`,values:{a:e=>(0,Z.jsx)(`a`,{href:`https://rclone.org`,target:`_blank`,rel:`noreferrer`,children:e})}})})]}));ft.displayName=`IntroStep2`;var pt=(0,O.memo)(()=>(0,Z.jsxs)(dt,{children:[(0,Z.jsx)($,{image:We,image2x:Ge,children:(0,Z.jsx)(o,{id:`web.intro.step_3.content_1`,description:`Intro modal step 3 feature text about multiple Safe Boxes and keys.`,defaultMessage:`You can have one or more Safe Boxes in your Vault, with separate Safe Keys for each Safe Box.`})}),(0,Z.jsx)($,{image:Ke,image2x:qe,children:(0,Z.jsx)(o,{id:`web.intro.step_3.content_2`,description:`Intro modal step 3 feature text about encrypting file names and contents.`,defaultMessage:`Vault encrypts both file names and content, so they are only readable inside the Safe Box.`})}),(0,Z.jsx)($,{image:Je,image2x:Ye,children:(0,Z.jsx)(o,{id:`web.intro.step_3.content_3`,description:`Intro modal step 3 feature text about how files appear in the main Koofr app.`,defaultMessage:`In your main Koofr app, the files will appear with encrypted file names and cannot be opened.`})})]}));pt.displayName=`IntroStep3`;var mt=(0,O.memo)(()=>(0,Z.jsxs)(dt,{children:[(0,Z.jsx)($,{image:Xe,image2x:Ze,children:(0,Z.jsx)(o,{id:`web.intro.step_4.content_1`,description:`Intro modal step 4 feature text about choosing a Safe Key when creating a Safe Box.`,defaultMessage:`When you create a Safe Box, you'll choose a Safe Key for it.`})}),(0,Z.jsx)($,{image:Qe,image2x:$e,children:(0,Z.jsx)(o,{id:`web.intro.step_4.content_2`,description:`Intro modal step 4 feature text warning the Safe Key cannot be changed.`,defaultMessage:`Since the Safe Key is used to encrypt the files you store in the Safe Box, it cannot be changed later.`})}),(0,Z.jsx)($,{image:et,image2x:tt,children:(0,Z.jsx)(o,{id:`web.intro.step_4.content_3`,description:`Intro modal step 4 feature text warning there is no recovery if the Safe Key is lost.`,defaultMessage:`<b>There is no way recover your files if you forget your Safe Key.</b> It is never sent to or stored on Koofr servers.`,values:{b:e=>(0,Z.jsx)(`strong`,{children:e})}})})]}));mt.displayName=`IntroStep4`;var ht=(0,O.memo)(()=>{let e=E();return(0,Z.jsxs)(`div`,{className:n`
        display: flex;
        flex-direction: column;
        padding: 0;
        ${x(nt,rt,252,203)}

        ${Q.small} {
          background-position: bottom 15px center;
          width: 100%;
          height: 335px;
        }

        ${Q.normal} {
          background-position: 281px 68px;
          width: 558px;
          height: 320px;
        }
      `,children:[(0,Z.jsx)(`div`,{className:n`
          ${Q.normal} {
            display: flex;
            flex-direction: row;
            align-items: center;
            flex-grow: 1;
          }
        `,children:(0,Z.jsx)(`p`,{className:n`
            font-weight: normal;
            color: #011722;

            ${Q.small} {
              width: 245px;
              margin: 0 auto;
              padding: 10px 0 0 0;
              text-align: center;
              font-size: 16px;
            }

            ${Q.normal} {
              width: 200px;
              margin-left: 34px;
              font-size: 18px;
            }
          `,children:(0,Z.jsx)(o,{id:`web.intro.step_5.content`,description:`Intro modal step 5 body text prompting users to create their first Safe Box.`,defaultMessage:`Get started with Vault by creating your first Safe Box.`})})}),e.appStoreUrl!==void 0||e.googlePlayUrl!==void 0||e.fDroidUrl!==void 0?(0,Z.jsxs)(`div`,{className:n`
            ${Q.small} {
              display: flex;
              flex-direction: row;
              justify-content: center;
              margin-top: 20px;
            }

            ${Q.normal} {
              display: flex;
              flex-direction: row;
              flex-shrink: 0;
              margin-left: 34px;
            }
          `,children:[e.googlePlayUrl===void 0?null:(0,Z.jsx)(`a`,{href:e.googlePlayUrl,target:`_blank`,rel:`noreferrer`,className:n`
                margin-right: 20px;
              `,children:(0,Z.jsx)(T,{image:b,image2x:C,width:122,height:36})}),e.appStoreUrl===void 0?null:(0,Z.jsx)(`a`,{href:e.appStoreUrl,target:`_blank`,rel:`noreferrer`,className:n`
                margin-right: 20px;
              `,children:(0,Z.jsx)(T,{image:y,image2x:w,width:117,height:36})}),e.fDroidUrl===void 0?null:(0,Z.jsx)(`a`,{href:e.fDroidUrl,target:`_blank`,rel:`noreferrer`,className:n`
                margin-right: 20px;
              `,children:(0,Z.jsx)(T,{image:S,image2x:v,width:123,height:36})})]}):null]})});ht.displayName=`IntroStep5`;var gt=c.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
`,_t=(0,O.memo)(({hide:e})=>{let r=a(),i=[r.formatMessage({id:`web.intro.step_1.title`,description:`Title for step 1 in the intro modal.`,defaultMessage:`Welcome`}),r.formatMessage({id:`web.intro.step_2.title`,description:`Title for step 2 in the intro modal.`,defaultMessage:`About Vault`}),r.formatMessage({id:`web.intro.step_3.title`,description:`Title for step 3 in the intro modal.`,defaultMessage:`Safe Boxes`}),r.formatMessage({id:`web.intro.step_4.title`,description:`Title for step 4 in the intro modal.`,defaultMessage:`Safe Key`}),r.formatMessage({id:`web.intro.step_5.title`,description:`Title for step 5 in the intro modal.`,defaultMessage:`Start using Vault`})],s=[(0,Z.jsx)(ut,{}),(0,Z.jsx)(ft,{}),(0,Z.jsx)(pt,{}),(0,Z.jsx)(mt,{}),(0,Z.jsx)(ht,{})],c=s.length,[l,g]=(0,O.useState)(0),v=l>0,y=l===c-1,[b,x]=Ie({loop:!1});(0,O.useEffect)(()=>{if(x!==void 0){let t=()=>{let t=x.selectedScrollSnap();t===c?e():g(t)};return x.on(`select`,t),()=>{x.off(`select`,t)}}},[x,e,c]);let S=(0,O.useCallback)(()=>{g(e=>{let t=e-1;return x!==void 0&&x.scrollTo(t),t})},[x]),C=(0,O.useCallback)(()=>{y?e():g(e=>{let t=e+1;return x!==void 0&&x.scrollTo(t),t})},[e,y,x]);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(_,{children:(0,Z.jsx)(f,{children:i[l]})}),(0,Z.jsx)(m,{className:n`
          padding: 0;

          @media (max-width: 768px) {
            height: 100%;
          }
        `,children:(0,Z.jsx)(`div`,{className:n`
            overflow: hidden;
            height: 100%;
          `,ref:b,children:(0,Z.jsxs)(`div`,{className:n`
              display: flex;
              align-items: flex-start;
              height: 100%;
            `,children:[s.map((e,t)=>(0,Z.jsx)(`div`,{className:n`
                  flex: 0 0 100%;
                  min-width: 0;
                  height: 100%;
                  overflow-x: hidden;
                  overflow-y: auto;
                `,children:(0,Z.jsx)(gt,{children:e})},t)),(0,Z.jsx)(`div`,{className:n`
                flex: 0 0 100%;
                min-width: 0;
                height: 100%;
              `})]})})}),(0,Z.jsxs)(u,{children:[(0,Z.jsx)(d,{children:v?(0,Z.jsx)(D,{type:`button`,className:lt,onClick:S,children:(0,Z.jsx)(o,{id:`web.intro.back.button`,description:`Back button label in the intro modal.`,defaultMessage:`Back`})}):null}),(0,Z.jsx)(p,{children:(0,Z.jsx)(`div`,{className:n`
              display: flex;
              margin: auto;
            `,children:(0,Le.default)(0,c).map(e=>(0,Z.jsx)(`div`,{className:t(n`
                    background-color: #d4d6d7;
                    display: inline-block;
                    width: 6px;
                    height: 6px;
                    border-radius: 3px;
                    margin: 0 2.5px;
                  `,e===l&&n`
                      background-color: #676f73;
                    `)},e))})}),(0,Z.jsx)(h,{children:(0,Z.jsx)(D,{type:`button`,className:ct,onClick:C,children:y?(0,Z.jsx)(o,{id:`web.intro.done.button`,description:`Final button label in the intro modal to finish onboarding.`,defaultMessage:`Done`}):(0,Z.jsx)(o,{id:`web.intro.next.button`,description:`Next button label in the intro modal to advance to the next step.`,defaultMessage:`Next`})})})]})]})});_t.displayName=`IntroModalContent`;var vt=(0,O.memo)(({isVisible:e,hide:t})=>(0,Z.jsx)(g,{show:e,onHide:t,children:e?(0,Z.jsx)(_t,{hide:t}):(0,Z.jsx)(Z.Fragment,{})}));vt.displayName=`IntroModal`;export{vt as IntroModal};
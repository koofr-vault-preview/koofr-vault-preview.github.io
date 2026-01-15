import{r as C,j as S,n as wn}from"./DynamicThemeProvider-MqskYVZg.js";import{c as A,a as Wt}from"./emotion-css.esm-D9bkNW-b.js";import{g as _t,c as Zt,s as tn}from"./Button-D3442RQe.js";import{r as vn}from"./range-D-uOy64e.js";import{i as nn,R as bt,g as jn,a as En,b as Ln,c as Tn,f as Dn,d as Mn}from"./RetinaImage-TZMvYiRS.js";import{M as Nn,b as kn,c as An,d as Bn,e as On,f as Cn,E as Fn,g as Pn}from"./mainWebAuthenticated-OoemftV8.js";import"./NavbarSticky-ClW7pS7A.js";import"./index-CuwaZ00B.js";function Vn(t){return Object.prototype.toString.call(t)==="[object Object]"}function Yt(t){return Vn(t)||Array.isArray(t)}function zn(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function At(t,n){const o=Object.keys(t),s=Object.keys(n);if(o.length!==s.length)return!1;const c=JSON.stringify(Object.keys(t.breakpoints||{})),r=JSON.stringify(Object.keys(n.breakpoints||{}));return c!==r?!1:o.every(e=>{const l=t[e],i=n[e];return typeof l=="function"?`${l}`==`${i}`:!Yt(l)||!Yt(i)?l===i:At(l,i)})}function Qt(t){return t.concat().sort((n,o)=>n.name>o.name?1:-1).map(n=>n.options)}function $n(t,n){if(t.length!==n.length)return!1;const o=Qt(t),s=Qt(n);return o.every((c,r)=>{const e=s[r];return At(c,e)})}function Bt(t){return typeof t=="number"}function Dt(t){return typeof t=="string"}function wt(t){return typeof t=="boolean"}function Jt(t){return Object.prototype.toString.call(t)==="[object Object]"}function k(t){return Math.abs(t)}function Ot(t){return Math.sign(t)}function mt(t,n){return k(t-n)}function Hn(t,n){if(t===0||n===0||k(t)<=k(n))return 0;const o=mt(k(t),k(n));return k(o/t)}function Rn(t){return Math.round(t*100)/100}function gt(t){return ht(t).map(Number)}function R(t){return t[yt(t)]}function yt(t){return Math.max(0,t.length-1)}function Ct(t,n){return n===yt(t)}function Xt(t,n=0){return Array.from(Array(t),(o,s)=>n+s)}function ht(t){return Object.keys(t)}function en(t,n){return[t,n].reduce((o,s)=>(ht(s).forEach(c=>{const r=o[c],e=s[c],l=Jt(r)&&Jt(e);o[c]=l?en(r,e):e}),o),{})}function Mt(t,n){return typeof n.MouseEvent<"u"&&t instanceof n.MouseEvent}function Un(t,n){const o={start:s,center:c,end:r};function s(){return 0}function c(i){return r(i)/2}function r(i){return n-i}function e(i,a){return Dt(t)?o[t](i):t(n,i,a)}return{measure:e}}function xt(){let t=[];function n(c,r,e,l={passive:!0}){let i;if("addEventListener"in c)c.addEventListener(r,e,l),i=()=>c.removeEventListener(r,e,l);else{const a=c;a.addListener(e),i=()=>a.removeListener(e)}return t.push(i),s}function o(){t=t.filter(c=>c())}const s={add:n,clear:o};return s}function Gn(t,n,o,s){const c=xt(),r=1e3/60;let e=null,l=0,i=0;function a(){c.add(t,"visibilitychange",()=>{t.hidden&&d()})}function g(){h(),c.clear()}function p(x){if(!i)return;e||(e=x,o(),o());const f=x-e;for(e=x,l+=f;l>=r;)o(),l-=r;const y=l/r;s(y),i&&(i=n.requestAnimationFrame(p))}function u(){i||(i=n.requestAnimationFrame(p))}function h(){n.cancelAnimationFrame(i),e=null,l=0,i=0}function d(){e=null,l=0}return{init:a,destroy:g,start:u,stop:h,update:o,render:s}}function Kn(t,n){const o=n==="rtl",s=t==="y",c=s?"y":"x",r=s?"x":"y",e=!s&&o?-1:1,l=g(),i=p();function a(d){const{height:m,width:x}=d;return s?m:x}function g(){return s?"top":o?"right":"left"}function p(){return s?"bottom":o?"left":"right"}function u(d){return d*e}return{scroll:c,cross:r,startEdge:l,endEdge:i,measureSize:a,direction:u}}function st(t=0,n=0){const o=k(t-n);function s(a){return a<t}function c(a){return a>n}function r(a){return s(a)||c(a)}function e(a){return r(a)?s(a)?t:n:a}function l(a){return o?a-o*Math.ceil((a-n)/o):a}return{length:o,max:n,min:t,constrain:e,reachedAny:r,reachedMax:c,reachedMin:s,removeOffset:l}}function on(t,n,o){const{constrain:s}=st(0,t),c=t+1;let r=e(n);function e(u){return o?k((c+u)%c):s(u)}function l(){return r}function i(u){return r=e(u),p}function a(u){return g().set(l()+u)}function g(){return on(t,l(),o)}const p={get:l,set:i,add:a,clone:g};return p}function qn(t,n,o,s,c,r,e,l,i,a,g,p,u,h,d,m,x,f,y){const{cross:I,direction:j}=t,M=["INPUT","SELECT","TEXTAREA"],E={passive:!1},w=xt(),v=xt(),L=st(50,225).constrain(h.measure(20)),B={mouse:300,touch:400},T={mouse:500,touch:600},V=d?43:25;let U=!1,G=0,K=0,et=!1,tt=!1,Q=!1,J=!1;function lt(b){if(!y)return;function D(P){(wt(y)||y(b,P))&&ft(P)}const O=n;w.add(O,"dragstart",P=>P.preventDefault(),E).add(O,"touchmove",()=>{},E).add(O,"touchend",()=>{}).add(O,"touchstart",D).add(O,"mousedown",D).add(O,"touchcancel",F).add(O,"contextmenu",F).add(O,"click",W,!0)}function q(){w.clear(),v.clear()}function it(){const b=J?o:n;v.add(b,"touchmove",$,E).add(b,"touchend",F).add(b,"mousemove",$,E).add(b,"mouseup",F)}function ct(b){const D=b.nodeName||"";return M.includes(D)}function X(){return(d?T:B)[J?"mouse":"touch"]}function ut(b,D){const O=p.add(Ot(b)*-1),P=g.byDistance(b,!d).distance;return d||k(b)<L?P:x&&D?P*.5:g.byIndex(O.get(),0).distance}function ft(b){const D=Mt(b,s);J=D,Q=d&&D&&!b.buttons&&U,U=mt(c.get(),e.get())>=2,!(D&&b.button!==0)&&(ct(b.target)||(et=!0,r.pointerDown(b),a.useFriction(0).useDuration(0),c.set(e),it(),G=r.readPoint(b),K=r.readPoint(b,I),u.emit("pointerDown")))}function $(b){if(!Mt(b,s)&&b.touches.length>=2)return F(b);const O=r.readPoint(b),P=r.readPoint(b,I),_=mt(O,G),Z=mt(P,K);if(!tt&&!J&&(!b.cancelable||(tt=_>Z,!tt)))return F(b);const ot=r.pointerMove(b);_>m&&(Q=!0),a.useFriction(.3).useDuration(.75),l.start(),c.add(j(ot)),b.preventDefault()}function F(b){const O=g.byDistance(0,!1).index!==p.get(),P=r.pointerUp(b)*X(),_=ut(j(P),O),Z=Hn(P,_),ot=V-10*Z,nt=f+Z/50;tt=!1,et=!1,v.clear(),a.useDuration(ot).useFriction(nt),i.distance(_,!d),J=!1,u.emit("pointerUp")}function W(b){Q&&(b.stopPropagation(),b.preventDefault(),Q=!1)}function H(){return et}return{init:lt,destroy:q,pointerDown:H}}function _n(t,n){let s,c;function r(p){return p.timeStamp}function e(p,u){const d=`client${(u||t.scroll)==="x"?"X":"Y"}`;return(Mt(p,n)?p:p.touches[0])[d]}function l(p){return s=p,c=p,e(p)}function i(p){const u=e(p)-e(c),h=r(p)-r(s)>170;return c=p,h&&(s=p),u}function a(p){if(!s||!c)return 0;const u=e(c)-e(s),h=r(p)-r(s),d=r(p)-r(c)>170,m=u/h;return h&&!d&&k(m)>.1?m:0}return{pointerDown:l,pointerMove:i,pointerUp:a,readPoint:e}}function Yn(){function t(o){const{offsetTop:s,offsetLeft:c,offsetWidth:r,offsetHeight:e}=o;return{top:s,right:c+r,bottom:s+e,left:c,width:r,height:e}}return{measure:t}}function Qn(t){function n(s){return t*(s/100)}return{measure:n}}function Jn(t,n,o,s,c,r,e){const l=[t].concat(s);let i,a,g=[],p=!1;function u(x){return c.measureSize(e.measure(x))}function h(x){if(!r)return;a=u(t),g=s.map(u);function f(y){for(const I of y){if(p)return;const j=I.target===t,M=s.indexOf(I.target),E=j?a:g[M],w=u(j?t:s[M]);if(k(w-E)>=.5){x.reInit(),n.emit("resize");break}}}i=new ResizeObserver(y=>{(wt(r)||r(x,y))&&f(y)}),o.requestAnimationFrame(()=>{l.forEach(y=>i.observe(y))})}function d(){p=!0,i&&i.disconnect()}return{init:h,destroy:d}}function Xn(t,n,o,s,c,r){let e=0,l=0,i=c,a=r,g=t.get(),p=0;function u(){const E=s.get()-t.get(),w=!i;let v=0;return w?(e=0,o.set(s),t.set(s),v=E):(o.set(t),e+=E/i,e*=a,g+=e,t.add(e),v=g-p),l=Ot(v),p=g,M}function h(){const E=s.get()-n.get();return k(E)<.001}function d(){return i}function m(){return l}function x(){return e}function f(){return I(c)}function y(){return j(r)}function I(E){return i=E,M}function j(E){return a=E,M}const M={direction:m,duration:d,velocity:x,seek:u,settled:h,useBaseFriction:y,useBaseDuration:f,useFriction:j,useDuration:I};return M}function Wn(t,n,o,s,c){const r=c.measure(10),e=c.measure(50),l=st(.1,.99);let i=!1;function a(){return!(i||!t.reachedAny(o.get())||!t.reachedAny(n.get()))}function g(h){if(!a())return;const d=t.reachedMin(n.get())?"min":"max",m=k(t[d]-n.get()),x=o.get()-n.get(),f=l.constrain(m/e);o.subtract(x*f),!h&&k(x)<r&&(o.set(t.constrain(o.get())),s.useDuration(25).useBaseFriction())}function p(h){i=!h}return{shouldConstrain:a,constrain:g,toggleActive:p}}function Zn(t,n,o,s,c){const r=st(-n+t,0),e=p(),l=g(),i=u();function a(d,m){return mt(d,m)<=1}function g(){const d=e[0],m=R(e),x=e.lastIndexOf(d),f=e.indexOf(m)+1;return st(x,f)}function p(){return o.map((d,m)=>{const{min:x,max:f}=r,y=r.constrain(d),I=!m,j=Ct(o,m);return I?f:j||a(x,y)?x:a(f,y)?f:y}).map(d=>parseFloat(d.toFixed(3)))}function u(){if(n<=t+c)return[r.max];if(s==="keepSnaps")return e;const{min:d,max:m}=l;return e.slice(d,m)}return{snapsContained:i,scrollContainLimit:l}}function te(t,n,o){const s=n[0],c=o?s-t:R(n);return{limit:st(c,s)}}function ne(t,n,o,s){const r=n.min+.1,e=n.max+.1,{reachedMin:l,reachedMax:i}=st(r,e);function a(u){return u===1?i(o.get()):u===-1?l(o.get()):!1}function g(u){if(!a(u))return;const h=t*(u*-1);s.forEach(d=>d.add(h))}return{loop:g}}function ee(t){const{max:n,length:o}=t;function s(r){const e=r-n;return o?e/-o:0}return{get:s}}function oe(t,n,o,s,c){const{startEdge:r,endEdge:e}=t,{groupSlides:l}=c,i=p().map(n.measure),a=u(),g=h();function p(){return l(s).map(m=>R(m)[e]-m[0][r]).map(k)}function u(){return s.map(m=>o[r]-m[r]).map(m=>-k(m))}function h(){return l(a).map(m=>m[0]).map((m,x)=>m+i[x])}return{snaps:a,snapsAligned:g}}function re(t,n,o,s,c,r){const{groupSlides:e}=c,{min:l,max:i}=s,a=g();function g(){const u=e(r),h=!t||n==="keepSnaps";return o.length===1?[r]:h?u:u.slice(l,i).map((d,m,x)=>{const f=!m,y=Ct(x,m);if(f){const I=R(x[0])+1;return Xt(I)}if(y){const I=yt(r)-R(x)[0]+1;return Xt(I,R(x)[0])}return d})}return{slideRegistry:a}}function se(t,n,o,s,c){const{reachedAny:r,removeOffset:e,constrain:l}=s;function i(d){return d.concat().sort((m,x)=>k(m)-k(x))[0]}function a(d){const m=t?e(d):l(d),x=n.map((y,I)=>({diff:g(y-m,0),index:I})).sort((y,I)=>k(y.diff)-k(I.diff)),{index:f}=x[0];return{index:f,distance:m}}function g(d,m){const x=[d,d+o,d-o];if(!t)return d;if(!m)return i(x);const f=x.filter(y=>Ot(y)===m);return f.length?i(f):R(x)-o}function p(d,m){const x=n[d]-c.get(),f=g(x,m);return{index:d,distance:f}}function u(d,m){const x=c.get()+d,{index:f,distance:y}=a(x),I=!t&&r(x);if(!m||I)return{index:f,distance:d};const j=n[f]-y,M=d+g(j,0);return{index:f,distance:M}}return{byDistance:u,byIndex:p,shortcut:g}}function ie(t,n,o,s,c,r,e){function l(p){const u=p.distance,h=p.index!==n.get();r.add(u),u&&(s.duration()?t.start():(t.update(),t.render(1),t.update())),h&&(o.set(n.get()),n.set(p.index),e.emit("select"))}function i(p,u){const h=c.byDistance(p,u);l(h)}function a(p,u){const h=n.clone().set(p),d=c.byIndex(h.get(),u);l(d)}return{distance:i,index:a}}function ce(t,n,o,s,c,r,e,l){const i={passive:!0,capture:!0};let a=0;function g(h){if(!l)return;function d(m){if(new Date().getTime()-a>10)return;e.emit("slideFocusStart"),t.scrollLeft=0;const y=o.findIndex(I=>I.includes(m));Bt(y)&&(c.useDuration(0),s.index(y,0),e.emit("slideFocus"))}r.add(document,"keydown",p,!1),n.forEach((m,x)=>{r.add(m,"focus",f=>{(wt(l)||l(h,f))&&d(x)},i)})}function p(h){h.code==="Tab"&&(a=new Date().getTime())}return{init:g}}function pt(t){let n=t;function o(){return n}function s(i){n=e(i)}function c(i){n+=e(i)}function r(i){n-=e(i)}function e(i){return Bt(i)?i:i.get()}return{get:o,set:s,add:c,subtract:r}}function rn(t,n){const o=t.scroll==="x"?e:l,s=n.style;let c=null,r=!1;function e(u){return`translate3d(${u}px,0px,0px)`}function l(u){return`translate3d(0px,${u}px,0px)`}function i(u){if(r)return;const h=Rn(t.direction(u));h!==c&&(s.transform=o(h),c=h)}function a(u){r=!u}function g(){r||(s.transform="",n.getAttribute("style")||n.removeAttribute("style"))}return{clear:g,to:i,toggleActive:a}}function ae(t,n,o,s,c,r,e,l,i){const g=gt(c),p=gt(c).reverse(),u=f().concat(y());function h(w,v){return w.reduce((L,B)=>L-c[B],v)}function d(w,v){return w.reduce((L,B)=>h(L,v)>0?L.concat([B]):L,[])}function m(w){return r.map((v,L)=>({start:v-s[L]+.5+w,end:v+n-.5+w}))}function x(w,v,L){const B=m(v);return w.map(T=>{const V=L?0:-o,U=L?o:0,G=L?"end":"start",K=B[T][G];return{index:T,loopPoint:K,slideLocation:pt(-1),translate:rn(t,i[T]),target:()=>l.get()>K?V:U}})}function f(){const w=e[0],v=d(p,w);return x(v,o,!1)}function y(){const w=n-e[0]-1,v=d(g,w);return x(v,-o,!0)}function I(){return u.every(({index:w})=>{const v=g.filter(L=>L!==w);return h(v,n)<=.1})}function j(){u.forEach(w=>{const{target:v,translate:L,slideLocation:B}=w,T=v();T!==B.get()&&(L.to(T),B.set(T))})}function M(){u.forEach(w=>w.translate.clear())}return{canLoop:I,clear:M,loop:j,loopPoints:u}}function le(t,n,o){let s,c=!1;function r(i){if(!o)return;function a(g){for(const p of g)if(p.type==="childList"){i.reInit(),n.emit("slidesChanged");break}}s=new MutationObserver(g=>{c||(wt(o)||o(i,g))&&a(g)}),s.observe(t,{childList:!0})}function e(){s&&s.disconnect(),c=!0}return{init:r,destroy:e}}function ue(t,n,o,s){const c={};let r=null,e=null,l,i=!1;function a(){l=new IntersectionObserver(d=>{i||(d.forEach(m=>{const x=n.indexOf(m.target);c[x]=m}),r=null,e=null,o.emit("slidesInView"))},{root:t.parentElement,threshold:s}),n.forEach(d=>l.observe(d))}function g(){l&&l.disconnect(),i=!0}function p(d){return ht(c).reduce((m,x)=>{const f=parseInt(x),{isIntersecting:y}=c[f];return(d&&y||!d&&!y)&&m.push(f),m},[])}function u(d=!0){if(d&&r)return r;if(!d&&e)return e;const m=p(d);return d&&(r=m),d||(e=m),m}return{init:a,destroy:g,get:u}}function fe(t,n,o,s,c,r){const{measureSize:e,startEdge:l,endEdge:i}=t,a=o[0]&&c,g=d(),p=m(),u=o.map(e),h=x();function d(){if(!a)return 0;const y=o[0];return k(n[l]-y[l])}function m(){if(!a)return 0;const y=r.getComputedStyle(R(s));return parseFloat(y.getPropertyValue(`margin-${i}`))}function x(){return o.map((y,I,j)=>{const M=!I,E=Ct(j,I);return M?u[I]+g:E?u[I]+p:j[I+1][l]-y[l]}).map(k)}return{slideSizes:u,slideSizesWithGaps:h,startGap:g,endGap:p}}function de(t,n,o,s,c,r,e,l,i){const{startEdge:a,endEdge:g,direction:p}=t,u=Bt(o);function h(f,y){return gt(f).filter(I=>I%y===0).map(I=>f.slice(I,I+y))}function d(f){return f.length?gt(f).reduce((y,I,j)=>{const M=R(y)||0,E=M===0,w=I===yt(f),v=c[a]-r[M][a],L=c[a]-r[I][g],B=!s&&E?p(e):0,T=!s&&w?p(l):0,V=k(L-T-(v+B));return j&&V>n+i&&y.push(I),w&&y.push(f.length),y},[]).map((y,I,j)=>{const M=Math.max(j[I-1]||0);return f.slice(M,y)}):[]}function m(f){return u?h(f,o):d(f)}return{groupSlides:m}}function pe(t,n,o,s,c,r,e){const{align:l,axis:i,direction:a,startIndex:g,loop:p,duration:u,dragFree:h,dragThreshold:d,inViewThreshold:m,slidesToScroll:x,skipSnaps:f,containScroll:y,watchResize:I,watchSlides:j,watchDrag:M,watchFocus:E}=r,w=2,v=Yn(),L=v.measure(n),B=o.map(v.measure),T=Kn(i,a),V=T.measureSize(L),U=Qn(V),G=Un(l,V),K=!p&&!!y,et=p||!!y,{slideSizes:tt,slideSizesWithGaps:Q,startGap:J,endGap:lt}=fe(T,L,B,o,et,c),q=de(T,V,x,p,L,B,J,lt,w),{snaps:it,snapsAligned:ct}=oe(T,G,L,B,q),X=-R(it)+R(Q),{snapsContained:ut,scrollContainLimit:ft}=Zn(V,X,ct,y,w),$=K?ut:ct,{limit:F}=te(X,$,p),W=on(yt($),g,p),H=W.clone(),N=gt(o),b=({dragHandler:at,scrollBody:Lt,scrollBounds:Tt,options:{loop:St}})=>{St||Tt.constrain(at.pointerDown()),Lt.seek()},D=({scrollBody:at,translate:Lt,location:Tt,offsetLocation:St,previousLocation:mn,scrollLooper:gn,slideLooper:hn,dragHandler:xn,animation:yn,eventHandler:Ht,scrollBounds:Sn,options:{loop:Rt}},Ut)=>{const Gt=at.settled(),bn=!Sn.shouldConstrain(),Kt=Rt?Gt:Gt&&bn,qt=Kt&&!xn.pointerDown();qt&&yn.stop();const In=Tt.get()*Ut+mn.get()*(1-Ut);St.set(In),Rt&&(gn.loop(at.direction()),hn.loop()),Lt.to(St.get()),qt&&Ht.emit("settle"),Kt||Ht.emit("scroll")},O=Gn(s,c,()=>b(Et),at=>D(Et,at)),P=.68,_=$[W.get()],Z=pt(_),ot=pt(_),nt=pt(_),rt=pt(_),dt=Xn(Z,nt,ot,rt,u,P),vt=se(p,$,X,F,rt),jt=ie(O,W,H,dt,vt,rt,e),Vt=ee(F),zt=xt(),dn=ue(n,o,e,m),{slideRegistry:$t}=re(K,y,$,ft,q,N),pn=ce(t,o,$t,jt,dt,zt,e,E),Et={ownerDocument:s,ownerWindow:c,eventHandler:e,containerRect:L,slideRects:B,animation:O,axis:T,dragHandler:qn(T,t,s,c,rt,_n(T,c),Z,O,jt,dt,vt,W,e,U,h,d,f,P,M),eventStore:zt,percentOfView:U,index:W,indexPrevious:H,limit:F,location:Z,offsetLocation:nt,previousLocation:ot,options:r,resizeHandler:Jn(n,e,c,o,T,I,v),scrollBody:dt,scrollBounds:Wn(F,nt,rt,dt,U),scrollLooper:ne(X,F,nt,[Z,nt,ot,rt]),scrollProgress:Vt,scrollSnapList:$.map(Vt.get),scrollSnaps:$,scrollTarget:vt,scrollTo:jt,slideLooper:ae(T,V,X,tt,Q,it,$,nt,o),slideFocus:pn,slidesHandler:le(n,e,j),slidesInView:dn,slideIndexes:N,slideRegistry:$t,slidesToScroll:q,target:rt,translate:rn(T,n)};return Et}function me(){let t={},n;function o(a){n=a}function s(a){return t[a]||[]}function c(a){return s(a).forEach(g=>g(n,a)),i}function r(a,g){return t[a]=s(a).concat([g]),i}function e(a,g){return t[a]=s(a).filter(p=>p!==g),i}function l(){t={}}const i={init:o,emit:c,off:e,on:r,clear:l};return i}const ge={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function he(t){function n(r,e){return en(r,e||{})}function o(r){const e=r.breakpoints||{},l=ht(e).filter(i=>t.matchMedia(i).matches).map(i=>e[i]).reduce((i,a)=>n(i,a),{});return n(r,l)}function s(r){return r.map(e=>ht(e.breakpoints||{})).reduce((e,l)=>e.concat(l),[]).map(t.matchMedia)}return{mergeOptions:n,optionsAtMedia:o,optionsMediaQueries:s}}function xe(t){let n=[];function o(r,e){return n=e.filter(({options:l})=>t.optionsAtMedia(l).active!==!1),n.forEach(l=>l.init(r,t)),e.reduce((l,i)=>Object.assign(l,{[i.name]:i}),{})}function s(){n=n.filter(r=>r.destroy())}return{init:o,destroy:s}}function It(t,n,o){const s=t.ownerDocument,c=s.defaultView,r=he(c),e=xe(r),l=xt(),i=me(),{mergeOptions:a,optionsAtMedia:g,optionsMediaQueries:p}=r,{on:u,off:h,emit:d}=i,m=T;let x=!1,f,y=a(ge,It.globalOptions),I=a(y),j=[],M,E,w;function v(){const{container:N,slides:b}=I;E=(Dt(N)?t.querySelector(N):N)||t.children[0];const O=Dt(b)?E.querySelectorAll(b):b;w=[].slice.call(O||E.children)}function L(N){const b=pe(t,E,w,s,c,N,i);if(N.loop&&!b.slideLooper.canLoop()){const D=Object.assign({},N,{loop:!1});return L(D)}return b}function B(N,b){x||(y=a(y,N),I=g(y),j=b||j,v(),f=L(I),p([y,...j.map(({options:D})=>D)]).forEach(D=>l.add(D,"change",T)),I.active&&(f.translate.to(f.location.get()),f.animation.init(),f.slidesInView.init(),f.slideFocus.init(H),f.eventHandler.init(H),f.resizeHandler.init(H),f.slidesHandler.init(H),f.options.loop&&f.slideLooper.loop(),E.offsetParent&&w.length&&f.dragHandler.init(H),M=e.init(H,j)))}function T(N,b){const D=q();V(),B(a({startIndex:D},N),b),i.emit("reInit")}function V(){f.dragHandler.destroy(),f.eventStore.clear(),f.translate.clear(),f.slideLooper.clear(),f.resizeHandler.destroy(),f.slidesHandler.destroy(),f.slidesInView.destroy(),f.animation.destroy(),e.destroy(),l.clear()}function U(){x||(x=!0,l.clear(),V(),i.emit("destroy"),i.clear())}function G(N,b,D){!I.active||x||(f.scrollBody.useBaseFriction().useDuration(b===!0?0:I.duration),f.scrollTo.index(N,D||0))}function K(N){const b=f.index.add(1).get();G(b,N,-1)}function et(N){const b=f.index.add(-1).get();G(b,N,1)}function tt(){return f.index.add(1).get()!==q()}function Q(){return f.index.add(-1).get()!==q()}function J(){return f.scrollSnapList}function lt(){return f.scrollProgress.get(f.offsetLocation.get())}function q(){return f.index.get()}function it(){return f.indexPrevious.get()}function ct(){return f.slidesInView.get()}function X(){return f.slidesInView.get(!1)}function ut(){return M}function ft(){return f}function $(){return t}function F(){return E}function W(){return w}const H={canScrollNext:tt,canScrollPrev:Q,containerNode:F,internalEngine:ft,destroy:U,off:h,on:u,emit:d,plugins:ut,previousScrollSnap:it,reInit:m,rootNode:$,scrollNext:K,scrollPrev:et,scrollProgress:lt,scrollSnapList:J,scrollTo:G,selectedScrollSnap:q,slideNodes:W,slidesInView:ct,slidesNotInView:X};return B(n,o),setTimeout(()=>i.emit("init"),0),H}It.globalOptions=void 0;function Ft(t={},n=[]){const o=C.useRef(t),s=C.useRef(n),[c,r]=C.useState(),[e,l]=C.useState(),i=C.useCallback(()=>{c&&c.reInit(o.current,s.current)},[c]);return C.useEffect(()=>{At(o.current,t)||(o.current=t,i())},[t,i]),C.useEffect(()=>{$n(s.current,n)||(s.current=n,i())},[n,i]),C.useEffect(()=>{if(zn()&&e){It.globalOptions=Ft.globalOptions;const a=It(e,o.current,s.current);return r(a),()=>a.destroy()}else r(void 0)},[e,r]),[l,c]}Ft.globalOptions=void 0;const ye="/assets/intro-01-B9L7sRgW.png",Se="/assets/intro-01@2x-C6IY3zvY.png",be="/assets/intro-02-BX_TPVw7.png",Ie="/assets/intro-02@2x-CJMA9LRs.png",we="/assets/intro-03-f6aZ2Ngn.png",ve="/assets/intro-03@2x-DrCdDUzO.png",je="/assets/intro-04-BtgH-TAQ.png",Ee="/assets/intro-04@2x-B0dG3kIn.png",Le="/assets/intro-05-Dqdl8gEQ.png",Te="/assets/intro-05@2x-BnID3d4Y.png",De="/assets/intro-06-BakGMiYr.png",Me="/assets/intro-06@2x-uEm0irpW.png",Ne="/assets/intro-07-YOooEHwu.png",ke="/assets/intro-07@2x-Yau4t8ms.png",Ae="/assets/intro-08-BXnzdKrm.png",Be="/assets/intro-08@2x-DeDcHWkj.png",Oe="/assets/intro-09-D_b0_Q1f.png",Ce="/assets/intro-09@2x-JLCUkqHb.png",Fe="/assets/intro-end-BWIREVl1.png",Pe="/assets/intro-end@2x-BopevUnH.png",Ve="/assets/intro-start-BEtT2OsF.png",ze="/assets/intro-start@2x-3Sd9KtJc.png",Nt="#2286f7",kt="#0870e6",$e=Zt(Nt,Nt,"#ffffff",kt,kt,"#ffffff"),He=Wt(Zt("transparent","transparent",Nt,"transparent","transparent",kt),A`
    padding-left: 0;
    padding-right: 0;
  `),z={small:"@media (max-width: 558px)",normal:"@media (min-width: 559px)"},sn=C.memo(()=>S.jsx("div",{className:A`
        padding: 0;
        ${nn(Ve,ze,560,202)}
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
      `,children:S.jsx("p",{className:A`
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
        `,children:"Welcome to Koofr Vault: your favourite cloud storage with client-side encryption!"})}));sn.displayName="IntroStep1";const Pt=tn.div`
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
`,Y=C.memo(({image:t,image2x:n,children:o})=>S.jsxs("div",{className:A`
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
      `,children:[S.jsx(bt,{image:t,image2x:n,width:130,height:130,className:A`
          margin-bottom: 15px;
        `}),S.jsx("p",{className:A`
          font-size: 14px;
          color: #011722;
          margin: 0;
          text-align: center;

          & strong {
            font-weight: 600;
          }
        `,children:o})]}));Y.displayName="IntroFeature";const cn=C.memo(()=>S.jsxs(Pt,{children:[S.jsx(Y,{image:ye,image2x:Se,children:"The Vault is like having a box with a unique lock in your trunk: an extra layer of security to protect your most sensitive files."}),S.jsxs(Y,{image:be,image2x:Ie,children:["Vault is"," ",S.jsx("a",{href:"https://github.com/koofr/vault",target:"_blank",rel:"noreferrer",children:"open source"}),", so you can always check that the code does exactly what is promised - and nothing more."]}),S.jsxs(Y,{image:we,image2x:ve,children:[S.jsx("a",{href:"https://rclone.org",target:"_blank",rel:"noreferrer",children:"rclone"})," ","compatibility: Download your encrypted files and decrypt them locally using the rclone command-line tool."]})]}));cn.displayName="IntroStep2";const an=C.memo(()=>S.jsxs(Pt,{children:[S.jsx(Y,{image:je,image2x:Ee,children:"You can have one or more Safe Boxes in your Vault, with separate Safe Keys for each Safe Box."}),S.jsx(Y,{image:Le,image2x:Te,children:"Vault encrypts both file names and content, so they are only readable inside the Safe Box."}),S.jsx(Y,{image:De,image2x:Me,children:"In your main Koofr app, the files will appear with encrypted file names and cannot be opened."})]}));an.displayName="IntroStep3";const ln=C.memo(()=>S.jsxs(Pt,{children:[S.jsx(Y,{image:Ne,image2x:ke,children:"When you create a Safe Box, you'll choose a Safe Key for it."}),S.jsx(Y,{image:Ae,image2x:Be,children:"Since the Safe Key is used to encrypt the files you store in the Safe Box, it cannot be changed later."}),S.jsxs(Y,{image:Oe,image2x:Ce,children:[S.jsx("strong",{children:"There is no way recover your files if you forget your Safe Key."})," ","It is never sent to or stored on Koofr servers."]})]}));ln.displayName="IntroStep4";const un=C.memo(()=>{const t=wn();return S.jsxs("div",{className:A`
        display: flex;
        flex-direction: column;
        padding: 0;
        ${nn(Fe,Pe,252,203)}

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
      `,children:[S.jsx("div",{className:A`
          ${z.normal} {
            display: flex;
            flex-direction: row;
            align-items: center;
            flex-grow: 1;
          }
        `,children:S.jsx("p",{className:A`
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
          `,children:"Get started with Vault by creating your first Safe Box."})}),t.appStoreUrl!==void 0||t.googlePlayUrl!==void 0||t.fDroidUrl!==void 0?S.jsxs("div",{className:A`
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
          `,children:[t.googlePlayUrl!==void 0?S.jsx("a",{href:t.googlePlayUrl,target:"_blank",rel:"noreferrer",className:A`
                margin-right: 20px;
              `,children:S.jsx(bt,{image:En,image2x:jn,width:122,height:36})}):null,t.appStoreUrl!==void 0?S.jsx("a",{href:t.appStoreUrl,target:"_blank",rel:"noreferrer",className:A`
                margin-right: 20px;
              `,children:S.jsx(bt,{image:Tn,image2x:Ln,width:117,height:36})}):null,t.fDroidUrl!==void 0?S.jsx("a",{href:t.fDroidUrl,target:"_blank",rel:"noreferrer",className:A`
                margin-right: 20px;
              `,children:S.jsx(bt,{image:Mn,image2x:Dn,width:123,height:36})}):null]}):null]})});un.displayName="IntroStep5";const Re=tn.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
`,fn=C.memo(({hide:t})=>{const n=["Welcome","About Vault","Safe Boxes","Safe Key","Start using Vault"],o=[S.jsx(sn,{}),S.jsx(cn,{}),S.jsx(an,{}),S.jsx(ln,{}),S.jsx(un,{})],s=o.length,[c,r]=C.useState(0),e=c>0,l=c===s-1,[i,a]=Ft({loop:!1});C.useEffect(()=>{if(a!==void 0){const u=()=>{const h=a.selectedScrollSnap();h===s?t():r(h)};return a.on("select",u),()=>{a.off("select",u)}}},[a,t,s]);const g=C.useCallback(()=>{r(u=>{const h=u-1;return a!==void 0&&a.scrollTo(h),h})},[a]),p=C.useCallback(()=>{l?t():r(u=>{const h=u+1;return a!==void 0&&a.scrollTo(h),h})},[t,l,a]);return S.jsxs(S.Fragment,{children:[S.jsx(kn,{children:S.jsx(An,{children:n[c]})}),S.jsx(Bn,{className:A`
          padding: 0;

          @media (max-width: 768px) {
            height: 100%;
          }
        `,children:S.jsx("div",{className:A`
            overflow: hidden;
            height: 100%;
          `,ref:i,children:S.jsxs("div",{className:A`
              display: flex;
              align-items: flex-start;
              height: 100%;
            `,children:[o.map((u,h)=>S.jsx("div",{className:A`
                  flex: 0 0 100%;
                  min-width: 0;
                  height: 100%;
                  overflow-x: hidden;
                  overflow-y: auto;
                `,children:S.jsx(Re,{children:u})},h)),S.jsx("div",{className:A`
                flex: 0 0 100%;
                min-width: 0;
                height: 100%;
              `})]})})}),S.jsxs(On,{children:[S.jsx(Cn,{children:e?S.jsx(_t,{type:"button",className:He,onClick:g,children:"Back"}):null}),S.jsx(Fn,{children:S.jsx("div",{className:A`
              display: flex;
              margin: auto;
            `,children:vn(0,s).map(u=>S.jsx("div",{className:Wt(A`
                    background-color: #d4d6d7;
                    display: inline-block;
                    width: 6px;
                    height: 6px;
                    border-radius: 3px;
                    margin: 0 2.5px;
                  `,u===c&&A`
                      background-color: #676f73;
                    `)},u))})}),S.jsx(Pn,{children:S.jsx(_t,{type:"button",className:$e,onClick:p,children:l?"Done":"Next"})})]})]})});fn.displayName="IntroModalContent";const Ue=C.memo(({isVisible:t,hide:n})=>S.jsx(Nn,{show:t,onHide:n,children:t?S.jsx(fn,{hide:n}):S.jsx(S.Fragment,{})}));Ue.displayName="IntroModal";export{Ue as IntroModal};

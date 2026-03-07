import{r as C,j as x,u as we,s as je}from"./DynamicThemeProvider-4BQuZolX.js";import{c as B,a as Zt,M as z}from"./emotion-css.esm-9QbHV8nv.js";import{q as Yt,j as te,s as ee}from"./Button-CJ4fGdXT.js";import{r as ve}from"./range-C18qM98b.js";import{i as ne,R as It,g as Me,a as Ee,b as Te,c as Le,f as ke,d as De}from"./RetinaImage-BgyCGNAx.js";import{M as Ne,b as Be,c as Ae,d as Oe,e as Ce,f as Fe,B as Pe,g as _e}from"./mainWebAuthenticated-B_qxT0lb.js";import"./NavbarSticky-CvwZKpMB.js";import"./index-Cmtiu6kJ.js";function Ve(t){return Object.prototype.toString.call(t)==="[object Object]"}function Qt(t){return Ve(t)||Array.isArray(t)}function ze(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function At(t,e){const s=Object.keys(t),r=Object.keys(e);if(s.length!==r.length)return!1;const c=JSON.stringify(Object.keys(t.breakpoints||{})),o=JSON.stringify(Object.keys(e.breakpoints||{}));return c!==o?!1:s.every(n=>{const l=t[n],i=e[n];return typeof l=="function"?`${l}`==`${i}`:!Qt(l)||!Qt(i)?l===i:At(l,i)})}function Jt(t){return t.concat().sort((e,s)=>e.name>s.name?1:-1).map(e=>e.options)}function $e(t,e){if(t.length!==e.length)return!1;const s=Jt(t),r=Jt(e);return s.every((c,o)=>{const n=r[o];return At(c,n)})}function Ot(t){return typeof t=="number"}function kt(t){return typeof t=="string"}function jt(t){return typeof t=="boolean"}function Xt(t){return Object.prototype.toString.call(t)==="[object Object]"}function N(t){return Math.abs(t)}function Ct(t){return Math.sign(t)}function gt(t,e){return N(t-e)}function He(t,e){if(t===0||e===0||N(t)<=N(e))return 0;const s=gt(N(t),N(e));return N(s/t)}function Ke(t){return Math.round(t*100)/100}function xt(t){return ht(t).map(Number)}function K(t){return t[bt(t)]}function bt(t){return Math.max(0,t.length-1)}function Ft(t,e){return e===bt(t)}function Wt(t,e=0){return Array.from(Array(t),(s,r)=>e+r)}function ht(t){return Object.keys(t)}function oe(t,e){return[t,e].reduce((s,r)=>(ht(r).forEach(c=>{const o=s[c],n=r[c],l=Xt(o)&&Xt(n);s[c]=l?oe(o,n):n}),s),{})}function Dt(t,e){return typeof e.MouseEvent<"u"&&t instanceof e.MouseEvent}function Re(t,e){const s={start:r,center:c,end:o};function r(){return 0}function c(i){return o(i)/2}function o(i){return e-i}function n(i,a){return kt(t)?s[t](i):t(e,i,a)}return{measure:n}}function yt(){let t=[];function e(c,o,n,l={passive:!0}){let i;if("addEventListener"in c)c.addEventListener(o,n,l),i=()=>c.removeEventListener(o,n,l);else{const a=c;a.addListener(n),i=()=>a.removeListener(n)}return t.push(i),r}function s(){t=t.filter(c=>c())}const r={add:e,clear:s};return r}function Ue(t,e,s,r){const c=yt(),o=1e3/60;let n=null,l=0,i=0;function a(){c.add(t,"visibilitychange",()=>{t.hidden&&u()})}function m(){h(),c.clear()}function d(y){if(!i)return;n||(n=y,s(),s());const f=y-n;for(n=y,l+=f;l>=o;)s(),l-=o;const b=l/o;r(b),i&&(i=e.requestAnimationFrame(d))}function p(){i||(i=e.requestAnimationFrame(d))}function h(){e.cancelAnimationFrame(i),n=null,l=0,i=0}function u(){n=null,l=0}return{init:a,destroy:m,start:p,stop:h,update:s,render:r}}function Ge(t,e){const s=e==="rtl",r=t==="y",c=r?"y":"x",o=r?"x":"y",n=!r&&s?-1:1,l=m(),i=d();function a(u){const{height:g,width:y}=u;return r?g:y}function m(){return r?"top":s?"right":"left"}function d(){return r?"bottom":s?"left":"right"}function p(u){return u*n}return{scroll:c,cross:o,startEdge:l,endEdge:i,measureSize:a,direction:p}}function it(t=0,e=0){const s=N(t-e);function r(a){return a<t}function c(a){return a>e}function o(a){return r(a)||c(a)}function n(a){return o(a)?r(a)?t:e:a}function l(a){return s?a-s*Math.ceil((a-e)/s):a}return{length:s,max:e,min:t,constrain:n,reachedAny:o,reachedMax:c,reachedMin:r,removeOffset:l}}function se(t,e,s){const{constrain:r}=it(0,t),c=t+1;let o=n(e);function n(p){return s?N((c+p)%c):r(p)}function l(){return o}function i(p){return o=n(p),d}function a(p){return m().set(l()+p)}function m(){return se(t,l(),s)}const d={get:l,set:i,add:a,clone:m};return d}function qe(t,e,s,r,c,o,n,l,i,a,m,d,p,h,u,g,y,f,b){const{cross:I,direction:v}=t,k=["INPUT","SELECT","TEXTAREA"],M={passive:!1},w=yt(),j=yt(),E=it(50,225).constrain(h.measure(20)),A={mouse:300,touch:400},T={mouse:500,touch:600},_=u?43:25;let R=!1,U=0,G=0,ot=!1,et=!1,J=!1,X=!1;function ut(S){if(!b)return;function L(P){(jt(b)||b(S,P))&&dt(P)}const O=e;w.add(O,"dragstart",P=>P.preventDefault(),M).add(O,"touchmove",()=>{},M).add(O,"touchend",()=>{}).add(O,"touchstart",L).add(O,"mousedown",L).add(O,"touchcancel",F).add(O,"contextmenu",F).add(O,"click",Z,!0)}function q(){w.clear(),j.clear()}function ct(){const S=X?s:e;j.add(S,"touchmove",$,M).add(S,"touchend",F).add(S,"mousemove",$,M).add(S,"mouseup",F)}function at(S){const L=S.nodeName||"";return k.includes(L)}function W(){return(u?T:A)[X?"mouse":"touch"]}function ft(S,L){const O=d.add(Ct(S)*-1),P=m.byDistance(S,!u).distance;return u||N(S)<E?P:y&&L?P*.5:m.byIndex(O.get(),0).distance}function dt(S){const L=Dt(S,r);X=L,J=u&&L&&!S.buttons&&R,R=gt(c.get(),n.get())>=2,!(L&&S.button!==0)&&(at(S.target)||(ot=!0,o.pointerDown(S),a.useFriction(0).useDuration(0),c.set(n),ct(),U=o.readPoint(S),G=o.readPoint(S,I),p.emit("pointerDown")))}function $(S){if(!Dt(S,r)&&S.touches.length>=2)return F(S);const O=o.readPoint(S),P=o.readPoint(S,I),Y=gt(O,U),tt=gt(P,G);if(!et&&!X&&(!S.cancelable||(et=Y>tt,!et)))return F(S);const st=o.pointerMove(S);Y>g&&(J=!0),a.useFriction(.3).useDuration(.75),l.start(),c.add(v(st)),S.preventDefault()}function F(S){const O=m.byDistance(0,!1).index!==d.get(),P=o.pointerUp(S)*W(),Y=ft(v(P),O),tt=He(P,Y),st=_-10*tt,nt=f+tt/50;et=!1,ot=!1,j.clear(),a.useDuration(st).useFriction(nt),i.distance(Y,!u),X=!1,p.emit("pointerUp")}function Z(S){J&&(S.stopPropagation(),S.preventDefault(),J=!1)}function H(){return ot}return{init:ut,destroy:q,pointerDown:H}}function Ye(t,e){let r,c;function o(d){return d.timeStamp}function n(d,p){const u=`client${(p||t.scroll)==="x"?"X":"Y"}`;return(Dt(d,e)?d:d.touches[0])[u]}function l(d){return r=d,c=d,n(d)}function i(d){const p=n(d)-n(c),h=o(d)-o(r)>170;return c=d,h&&(r=d),p}function a(d){if(!r||!c)return 0;const p=n(c)-n(r),h=o(d)-o(r),u=o(d)-o(c)>170,g=p/h;return h&&!u&&N(g)>.1?g:0}return{pointerDown:l,pointerMove:i,pointerUp:a,readPoint:n}}function Qe(){function t(s){const{offsetTop:r,offsetLeft:c,offsetWidth:o,offsetHeight:n}=s;return{top:r,right:c+o,bottom:r+n,left:c,width:o,height:n}}return{measure:t}}function Je(t){function e(r){return t*(r/100)}return{measure:e}}function Xe(t,e,s,r,c,o,n){const l=[t].concat(r);let i,a,m=[],d=!1;function p(y){return c.measureSize(n.measure(y))}function h(y){if(!o)return;a=p(t),m=r.map(p);function f(b){for(const I of b){if(d)return;const v=I.target===t,k=r.indexOf(I.target),M=v?a:m[k],w=p(v?t:r[k]);if(N(w-M)>=.5){y.reInit(),e.emit("resize");break}}}i=new ResizeObserver(b=>{(jt(o)||o(y,b))&&f(b)}),s.requestAnimationFrame(()=>{l.forEach(b=>i.observe(b))})}function u(){d=!0,i&&i.disconnect()}return{init:h,destroy:u}}function We(t,e,s,r,c,o){let n=0,l=0,i=c,a=o,m=t.get(),d=0;function p(){const M=r.get()-t.get(),w=!i;let j=0;return w?(n=0,s.set(r),t.set(r),j=M):(s.set(t),n+=M/i,n*=a,m+=n,t.add(n),j=m-d),l=Ct(j),d=m,k}function h(){const M=r.get()-e.get();return N(M)<.001}function u(){return i}function g(){return l}function y(){return n}function f(){return I(c)}function b(){return v(o)}function I(M){return i=M,k}function v(M){return a=M,k}const k={direction:g,duration:u,velocity:y,seek:p,settled:h,useBaseFriction:b,useBaseDuration:f,useFriction:v,useDuration:I};return k}function Ze(t,e,s,r,c){const o=c.measure(10),n=c.measure(50),l=it(.1,.99);let i=!1;function a(){return!(i||!t.reachedAny(s.get())||!t.reachedAny(e.get()))}function m(h){if(!a())return;const u=t.reachedMin(e.get())?"min":"max",g=N(t[u]-e.get()),y=s.get()-e.get(),f=l.constrain(g/n);s.subtract(y*f),!h&&N(y)<o&&(s.set(t.constrain(s.get())),r.useDuration(25).useBaseFriction())}function d(h){i=!h}return{shouldConstrain:a,constrain:m,toggleActive:d}}function tn(t,e,s,r,c){const o=it(-e+t,0),n=d(),l=m(),i=p();function a(u,g){return gt(u,g)<=1}function m(){const u=n[0],g=K(n),y=n.lastIndexOf(u),f=n.indexOf(g)+1;return it(y,f)}function d(){return s.map((u,g)=>{const{min:y,max:f}=o,b=o.constrain(u),I=!g,v=Ft(s,g);return I?f:v||a(y,b)?y:a(f,b)?f:b}).map(u=>parseFloat(u.toFixed(3)))}function p(){if(e<=t+c)return[o.max];if(r==="keepSnaps")return n;const{min:u,max:g}=l;return n.slice(u,g)}return{snapsContained:i,scrollContainLimit:l}}function en(t,e,s){const r=e[0],c=s?r-t:K(e);return{limit:it(c,r)}}function nn(t,e,s,r){const o=e.min+.1,n=e.max+.1,{reachedMin:l,reachedMax:i}=it(o,n);function a(p){return p===1?i(s.get()):p===-1?l(s.get()):!1}function m(p){if(!a(p))return;const h=t*(p*-1);r.forEach(u=>u.add(h))}return{loop:m}}function on(t){const{max:e,length:s}=t;function r(o){const n=o-e;return s?n/-s:0}return{get:r}}function sn(t,e,s,r,c){const{startEdge:o,endEdge:n}=t,{groupSlides:l}=c,i=d().map(e.measure),a=p(),m=h();function d(){return l(r).map(g=>K(g)[n]-g[0][o]).map(N)}function p(){return r.map(g=>s[o]-g[o]).map(g=>-N(g))}function h(){return l(a).map(g=>g[0]).map((g,y)=>g+i[y])}return{snaps:a,snapsAligned:m}}function rn(t,e,s,r,c,o){const{groupSlides:n}=c,{min:l,max:i}=r,a=m();function m(){const p=n(o),h=!t||e==="keepSnaps";return s.length===1?[o]:h?p:p.slice(l,i).map((u,g,y)=>{const f=!g,b=Ft(y,g);if(f){const I=K(y[0])+1;return Wt(I)}if(b){const I=bt(o)-K(y)[0]+1;return Wt(I,K(y)[0])}return u})}return{slideRegistry:a}}function cn(t,e,s,r,c){const{reachedAny:o,removeOffset:n,constrain:l}=r;function i(u){return u.concat().sort((g,y)=>N(g)-N(y))[0]}function a(u){const g=t?n(u):l(u),y=e.map((b,I)=>({diff:m(b-g,0),index:I})).sort((b,I)=>N(b.diff)-N(I.diff)),{index:f}=y[0];return{index:f,distance:g}}function m(u,g){const y=[u,u+s,u-s];if(!t)return u;if(!g)return i(y);const f=y.filter(b=>Ct(b)===g);return f.length?i(f):K(y)-s}function d(u,g){const y=e[u]-c.get(),f=m(y,g);return{index:u,distance:f}}function p(u,g){const y=c.get()+u,{index:f,distance:b}=a(y),I=!t&&o(y);if(!g||I)return{index:f,distance:u};const v=e[f]-b,k=u+m(v,0);return{index:f,distance:k}}return{byDistance:p,byIndex:d,shortcut:m}}function an(t,e,s,r,c,o,n){function l(d){const p=d.distance,h=d.index!==e.get();o.add(p),p&&(r.duration()?t.start():(t.update(),t.render(1),t.update())),h&&(s.set(e.get()),e.set(d.index),n.emit("select"))}function i(d,p){const h=c.byDistance(d,p);l(h)}function a(d,p){const h=e.clone().set(d),u=c.byIndex(h.get(),p);l(u)}return{distance:i,index:a}}function ln(t,e,s,r,c,o,n,l){const i={passive:!0,capture:!0};let a=0;function m(h){if(!l)return;function u(g){if(new Date().getTime()-a>10)return;n.emit("slideFocusStart"),t.scrollLeft=0;const b=s.findIndex(I=>I.includes(g));Ot(b)&&(c.useDuration(0),r.index(b,0),n.emit("slideFocus"))}o.add(document,"keydown",d,!1),e.forEach((g,y)=>{o.add(g,"focus",f=>{(jt(l)||l(h,f))&&u(y)},i)})}function d(h){h.code==="Tab"&&(a=new Date().getTime())}return{init:m}}function mt(t){let e=t;function s(){return e}function r(i){e=n(i)}function c(i){e+=n(i)}function o(i){e-=n(i)}function n(i){return Ot(i)?i:i.get()}return{get:s,set:r,add:c,subtract:o}}function re(t,e){const s=t.scroll==="x"?n:l,r=e.style;let c=null,o=!1;function n(p){return`translate3d(${p}px,0px,0px)`}function l(p){return`translate3d(0px,${p}px,0px)`}function i(p){if(o)return;const h=Ke(t.direction(p));h!==c&&(r.transform=s(h),c=h)}function a(p){o=!p}function m(){o||(r.transform="",e.getAttribute("style")||e.removeAttribute("style"))}return{clear:m,to:i,toggleActive:a}}function un(t,e,s,r,c,o,n,l,i){const m=xt(c),d=xt(c).reverse(),p=f().concat(b());function h(w,j){return w.reduce((E,A)=>E-c[A],j)}function u(w,j){return w.reduce((E,A)=>h(E,j)>0?E.concat([A]):E,[])}function g(w){return o.map((j,E)=>({start:j-r[E]+.5+w,end:j+e-.5+w}))}function y(w,j,E){const A=g(j);return w.map(T=>{const _=E?0:-s,R=E?s:0,U=E?"end":"start",G=A[T][U];return{index:T,loopPoint:G,slideLocation:mt(-1),translate:re(t,i[T]),target:()=>l.get()>G?_:R}})}function f(){const w=n[0],j=u(d,w);return y(j,s,!1)}function b(){const w=e-n[0]-1,j=u(m,w);return y(j,-s,!0)}function I(){return p.every(({index:w})=>{const j=m.filter(E=>E!==w);return h(j,e)<=.1})}function v(){p.forEach(w=>{const{target:j,translate:E,slideLocation:A}=w,T=j();T!==A.get()&&(E.to(T),A.set(T))})}function k(){p.forEach(w=>w.translate.clear())}return{canLoop:I,clear:k,loop:v,loopPoints:p}}function fn(t,e,s){let r,c=!1;function o(i){if(!s)return;function a(m){for(const d of m)if(d.type==="childList"){i.reInit(),e.emit("slidesChanged");break}}r=new MutationObserver(m=>{c||(jt(s)||s(i,m))&&a(m)}),r.observe(t,{childList:!0})}function n(){r&&r.disconnect(),c=!0}return{init:o,destroy:n}}function dn(t,e,s,r){const c={};let o=null,n=null,l,i=!1;function a(){l=new IntersectionObserver(u=>{i||(u.forEach(g=>{const y=e.indexOf(g.target);c[y]=g}),o=null,n=null,s.emit("slidesInView"))},{root:t.parentElement,threshold:r}),e.forEach(u=>l.observe(u))}function m(){l&&l.disconnect(),i=!0}function d(u){return ht(c).reduce((g,y)=>{const f=parseInt(y),{isIntersecting:b}=c[f];return(u&&b||!u&&!b)&&g.push(f),g},[])}function p(u=!0){if(u&&o)return o;if(!u&&n)return n;const g=d(u);return u&&(o=g),u||(n=g),g}return{init:a,destroy:m,get:p}}function pn(t,e,s,r,c,o){const{measureSize:n,startEdge:l,endEdge:i}=t,a=s[0]&&c,m=u(),d=g(),p=s.map(n),h=y();function u(){if(!a)return 0;const b=s[0];return N(e[l]-b[l])}function g(){if(!a)return 0;const b=o.getComputedStyle(K(r));return parseFloat(b.getPropertyValue(`margin-${i}`))}function y(){return s.map((b,I,v)=>{const k=!I,M=Ft(v,I);return k?p[I]+m:M?p[I]+d:v[I+1][l]-b[l]}).map(N)}return{slideSizes:p,slideSizesWithGaps:h,startGap:m,endGap:d}}function mn(t,e,s,r,c,o,n,l,i){const{startEdge:a,endEdge:m,direction:d}=t,p=Ot(s);function h(f,b){return xt(f).filter(I=>I%b===0).map(I=>f.slice(I,I+b))}function u(f){return f.length?xt(f).reduce((b,I,v)=>{const k=K(b)||0,M=k===0,w=I===bt(f),j=c[a]-o[k][a],E=c[a]-o[I][m],A=!r&&M?d(n):0,T=!r&&w?d(l):0,_=N(E-T-(j+A));return v&&_>e+i&&b.push(I),w&&b.push(f.length),b},[]).map((b,I,v)=>{const k=Math.max(v[I-1]||0);return f.slice(k,b)}):[]}function g(f){return p?h(f,s):u(f)}return{groupSlides:g}}function gn(t,e,s,r,c,o,n){const{align:l,axis:i,direction:a,startIndex:m,loop:d,duration:p,dragFree:h,dragThreshold:u,inViewThreshold:g,slidesToScroll:y,skipSnaps:f,containScroll:b,watchResize:I,watchSlides:v,watchDrag:k,watchFocus:M}=o,w=2,j=Qe(),E=j.measure(e),A=s.map(j.measure),T=Ge(i,a),_=T.measureSize(E),R=Je(_),U=Re(l,_),G=!d&&!!b,ot=d||!!b,{slideSizes:et,slideSizesWithGaps:J,startGap:X,endGap:ut}=pn(T,E,A,s,ot,c),q=mn(T,_,y,d,E,A,X,ut,w),{snaps:ct,snapsAligned:at}=sn(T,U,E,A,q),W=-K(ct)+K(J),{snapsContained:ft,scrollContainLimit:dt}=tn(_,W,at,b,w),$=G?ft:at,{limit:F}=en(W,$,d),Z=se(bt($),m,d),H=Z.clone(),D=xt(s),S=({dragHandler:lt,scrollBody:Tt,scrollBounds:Lt,options:{loop:St}})=>{St||Lt.constrain(lt.pointerDown()),Tt.seek()},L=({scrollBody:lt,translate:Tt,location:Lt,offsetLocation:St,previousLocation:me,scrollLooper:ge,slideLooper:xe,dragHandler:he,animation:ye,eventHandler:Ht,scrollBounds:be,options:{loop:Kt}},Rt)=>{const Ut=lt.settled(),Se=!be.shouldConstrain(),Gt=Kt?Ut:Ut&&Se,qt=Gt&&!he.pointerDown();qt&&ye.stop();const Ie=Lt.get()*Rt+me.get()*(1-Rt);St.set(Ie),Kt&&(ge.loop(lt.direction()),xe.loop()),Tt.to(St.get()),qt&&Ht.emit("settle"),Gt||Ht.emit("scroll")},O=Ue(r,c,()=>S(Et),lt=>L(Et,lt)),P=.68,Y=$[Z.get()],tt=mt(Y),st=mt(Y),nt=mt(Y),rt=mt(Y),pt=We(tt,nt,st,rt,p,P),vt=cn(d,$,W,F,rt),Mt=an(O,Z,H,pt,vt,rt,n),Vt=on(F),zt=yt(),de=dn(e,s,n,g),{slideRegistry:$t}=rn(G,b,$,dt,q,D),pe=ln(t,s,$t,Mt,pt,zt,n,M),Et={ownerDocument:r,ownerWindow:c,eventHandler:n,containerRect:E,slideRects:A,animation:O,axis:T,dragHandler:qe(T,t,r,c,rt,Ye(T,c),tt,O,Mt,pt,vt,Z,n,R,h,u,f,P,k),eventStore:zt,percentOfView:R,index:Z,indexPrevious:H,limit:F,location:tt,offsetLocation:nt,previousLocation:st,options:o,resizeHandler:Xe(e,n,c,s,T,I,j),scrollBody:pt,scrollBounds:Ze(F,nt,rt,pt,R),scrollLooper:nn(W,F,nt,[tt,nt,st,rt]),scrollProgress:Vt,scrollSnapList:$.map(Vt.get),scrollSnaps:$,scrollTarget:vt,scrollTo:Mt,slideLooper:un(T,_,W,et,J,ct,$,nt,s),slideFocus:pe,slidesHandler:fn(e,n,v),slidesInView:de,slideIndexes:D,slideRegistry:$t,slidesToScroll:q,target:rt,translate:re(T,e)};return Et}function xn(){let t={},e;function s(a){e=a}function r(a){return t[a]||[]}function c(a){return r(a).forEach(m=>m(e,a)),i}function o(a,m){return t[a]=r(a).concat([m]),i}function n(a,m){return t[a]=r(a).filter(d=>d!==m),i}function l(){t={}}const i={init:s,emit:c,off:n,on:o,clear:l};return i}const hn={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function yn(t){function e(o,n){return oe(o,n||{})}function s(o){const n=o.breakpoints||{},l=ht(n).filter(i=>t.matchMedia(i).matches).map(i=>n[i]).reduce((i,a)=>e(i,a),{});return e(o,l)}function r(o){return o.map(n=>ht(n.breakpoints||{})).reduce((n,l)=>n.concat(l),[]).map(t.matchMedia)}return{mergeOptions:e,optionsAtMedia:s,optionsMediaQueries:r}}function bn(t){let e=[];function s(o,n){return e=n.filter(({options:l})=>t.optionsAtMedia(l).active!==!1),e.forEach(l=>l.init(o,t)),n.reduce((l,i)=>Object.assign(l,{[i.name]:i}),{})}function r(){e=e.filter(o=>o.destroy())}return{init:s,destroy:r}}function wt(t,e,s){const r=t.ownerDocument,c=r.defaultView,o=yn(c),n=bn(o),l=yt(),i=xn(),{mergeOptions:a,optionsAtMedia:m,optionsMediaQueries:d}=o,{on:p,off:h,emit:u}=i,g=T;let y=!1,f,b=a(hn,wt.globalOptions),I=a(b),v=[],k,M,w;function j(){const{container:D,slides:S}=I;M=(kt(D)?t.querySelector(D):D)||t.children[0];const O=kt(S)?M.querySelectorAll(S):S;w=[].slice.call(O||M.children)}function E(D){const S=gn(t,M,w,r,c,D,i);if(D.loop&&!S.slideLooper.canLoop()){const L=Object.assign({},D,{loop:!1});return E(L)}return S}function A(D,S){y||(b=a(b,D),I=m(b),v=S||v,j(),f=E(I),d([b,...v.map(({options:L})=>L)]).forEach(L=>l.add(L,"change",T)),I.active&&(f.translate.to(f.location.get()),f.animation.init(),f.slidesInView.init(),f.slideFocus.init(H),f.eventHandler.init(H),f.resizeHandler.init(H),f.slidesHandler.init(H),f.options.loop&&f.slideLooper.loop(),M.offsetParent&&w.length&&f.dragHandler.init(H),k=n.init(H,v)))}function T(D,S){const L=q();_(),A(a({startIndex:L},D),S),i.emit("reInit")}function _(){f.dragHandler.destroy(),f.eventStore.clear(),f.translate.clear(),f.slideLooper.clear(),f.resizeHandler.destroy(),f.slidesHandler.destroy(),f.slidesInView.destroy(),f.animation.destroy(),n.destroy(),l.clear()}function R(){y||(y=!0,l.clear(),_(),i.emit("destroy"),i.clear())}function U(D,S,L){!I.active||y||(f.scrollBody.useBaseFriction().useDuration(S===!0?0:I.duration),f.scrollTo.index(D,L||0))}function G(D){const S=f.index.add(1).get();U(S,D,-1)}function ot(D){const S=f.index.add(-1).get();U(S,D,1)}function et(){return f.index.add(1).get()!==q()}function J(){return f.index.add(-1).get()!==q()}function X(){return f.scrollSnapList}function ut(){return f.scrollProgress.get(f.offsetLocation.get())}function q(){return f.index.get()}function ct(){return f.indexPrevious.get()}function at(){return f.slidesInView.get()}function W(){return f.slidesInView.get(!1)}function ft(){return k}function dt(){return f}function $(){return t}function F(){return M}function Z(){return w}const H={canScrollNext:et,canScrollPrev:J,containerNode:F,internalEngine:dt,destroy:R,off:h,on:p,emit:u,plugins:ft,previousScrollSnap:ct,reInit:g,rootNode:$,scrollNext:G,scrollPrev:ot,scrollProgress:ut,scrollSnapList:X,scrollTo:U,selectedScrollSnap:q,slideNodes:Z,slidesInView:at,slidesNotInView:W};return A(e,s),setTimeout(()=>i.emit("init"),0),H}wt.globalOptions=void 0;function Pt(t={},e=[]){const s=C.useRef(t),r=C.useRef(e),[c,o]=C.useState(),[n,l]=C.useState(),i=C.useCallback(()=>{c&&c.reInit(s.current,r.current)},[c]);return C.useEffect(()=>{At(s.current,t)||(s.current=t,i())},[t,i]),C.useEffect(()=>{$e(r.current,e)||(r.current=e,i())},[e,i]),C.useEffect(()=>{if(ze()&&n){wt.globalOptions=Pt.globalOptions;const a=wt(n,s.current,r.current);return o(a),()=>a.destroy()}else o(void 0)},[n,o]),[l,c]}Pt.globalOptions=void 0;const Sn="/assets/intro-01-B9L7sRgW.png",In="/assets/intro-01@2x-C6IY3zvY.png",wn="/assets/intro-02-BX_TPVw7.png",jn="/assets/intro-02@2x-CJMA9LRs.png",vn="/assets/intro-03-f6aZ2Ngn.png",Mn="/assets/intro-03@2x-DrCdDUzO.png",En="/assets/intro-04-BtgH-TAQ.png",Tn="/assets/intro-04@2x-B0dG3kIn.png",Ln="/assets/intro-05-Dqdl8gEQ.png",kn="/assets/intro-05@2x-BnID3d4Y.png",Dn="/assets/intro-06-BakGMiYr.png",Nn="/assets/intro-06@2x-uEm0irpW.png",Bn="/assets/intro-07-YOooEHwu.png",An="/assets/intro-07@2x-Yau4t8ms.png",On="/assets/intro-08-BXnzdKrm.png",Cn="/assets/intro-08@2x-DeDcHWkj.png",Fn="/assets/intro-09-D_b0_Q1f.png",Pn="/assets/intro-09@2x-JLCUkqHb.png",_n="/assets/intro-end-BWIREVl1.png",Vn="/assets/intro-end@2x-BopevUnH.png",zn="/assets/intro-start-BEtT2OsF.png",$n="/assets/intro-start@2x-3Sd9KtJc.png",Nt="#2286f7",Bt="#0870e6",Hn=te(Nt,Nt,"#ffffff",Bt,Bt,"#ffffff"),Kn=Zt(te("transparent","transparent",Nt,"transparent","transparent",Bt),B`
    padding-left: 0;
    padding-right: 0;
  `),V={small:"@media (max-width: 558px)",normal:"@media (min-width: 559px)"},ie=C.memo(()=>x.jsx("div",{className:B`
        padding: 0;
        ${ne(zn,$n,560,202)}
        background-position: 0 51px;

        ${V.small} {
          background-size: 100% auto;
        }

        @media (max-width: 558px) {
          width: 100%;
        }

        @media (min-width: 558px) {
          width: 558px;
          height: 300px;
        }
      `,children:x.jsx("p",{className:B`
          margin: 0;
          font-weight: normal;
          color: #011722;

          ${V.small} {
            width: 220px;
            padding: 150px 0 0 34px;
            font-size: 16px;
          }

          ${V.normal} {
            width: 245px;
            padding: 140px 0 0 34px;
            font-size: 18px;
          }
        `,children:x.jsx(z,{id:"web.intro.step_1.content",description:"Intro modal step 1 body text welcoming users to Koofr Vault.",defaultMessage:"Welcome to Koofr Vault: your favourite cloud storage with client-side encryption!"})})}));ie.displayName="IntroStep1";const _t=ee.div`
  display: flex;
  padding: 25px 0 0;

  ${V.small} {
    flex-direction: column;
  }

  ${V.normal} {
    flex-direction: row;
    justify-content: space-between;
    height: 300px;
  }
`,Q=C.memo(({image:t,image2x:e,children:s})=>x.jsxs("div",{className:B`
        display: flex;
        flex-direction: column;
        align-items: center;

        ${V.small} {
          padding: 0 25px 25px;
        }

        ${V.normal} {
          margin: 0 15px;
          width: 150px;
        }
      `,children:[x.jsx(It,{image:t,image2x:e,width:130,height:130,className:B`
          margin-bottom: 15px;
          flex-shrink: 0;
        `}),x.jsx("p",{className:B`
          font-size: 14px;
          color: #011722;
          margin: 0;
          text-align: center;

          & strong {
            font-weight: 600;
          }
        `,children:s})]}));Q.displayName="IntroFeature";const ce=C.memo(()=>x.jsxs(_t,{children:[x.jsx(Q,{image:Sn,image2x:In,children:x.jsx(z,{id:"web.intro.step_2.content_1",description:"Intro modal step 2 feature text explaining the Safe Box metaphor.",defaultMessage:"The Vault is like having a box with a unique lock in your trunk: an extra layer of security to protect your most sensitive files."})}),x.jsx(Q,{image:wn,image2x:jn,children:x.jsx(z,{id:"web.intro.step_2.content_2",description:"Intro modal step 2 feature text about the open source nature of Vault.",defaultMessage:"Vault is <a>open source</a>, so you can always check that the code does exactly what is promised - and nothing more.",values:{a:t=>x.jsx("a",{href:"https://github.com/koofr/vault",target:"_blank",rel:"noreferrer",children:t})}})}),x.jsx(Q,{image:vn,image2x:Mn,children:x.jsx(z,{id:"web.intro.step_2.content_3",description:"Intro modal step 2 feature text about rclone compatibility.",defaultMessage:"<a>rclone</a> compatibility: Download your encrypted files and decrypt them locally using the rclone command-line tool.",values:{a:t=>x.jsx("a",{href:"https://rclone.org",target:"_blank",rel:"noreferrer",children:t})}})})]}));ce.displayName="IntroStep2";const ae=C.memo(()=>x.jsxs(_t,{children:[x.jsx(Q,{image:En,image2x:Tn,children:x.jsx(z,{id:"web.intro.step_3.content_1",description:"Intro modal step 3 feature text about multiple Safe Boxes and keys.",defaultMessage:"You can have one or more Safe Boxes in your Vault, with separate Safe Keys for each Safe Box."})}),x.jsx(Q,{image:Ln,image2x:kn,children:x.jsx(z,{id:"web.intro.step_3.content_2",description:"Intro modal step 3 feature text about encrypting file names and contents.",defaultMessage:"Vault encrypts both file names and content, so they are only readable inside the Safe Box."})}),x.jsx(Q,{image:Dn,image2x:Nn,children:x.jsx(z,{id:"web.intro.step_3.content_3",description:"Intro modal step 3 feature text about how files appear in the main Koofr app.",defaultMessage:"In your main Koofr app, the files will appear with encrypted file names and cannot be opened."})})]}));ae.displayName="IntroStep3";const le=C.memo(()=>x.jsxs(_t,{children:[x.jsx(Q,{image:Bn,image2x:An,children:x.jsx(z,{id:"web.intro.step_4.content_1",description:"Intro modal step 4 feature text about choosing a Safe Key when creating a Safe Box.",defaultMessage:"When you create a Safe Box, you'll choose a Safe Key for it."})}),x.jsx(Q,{image:On,image2x:Cn,children:x.jsx(z,{id:"web.intro.step_4.content_2",description:"Intro modal step 4 feature text warning the Safe Key cannot be changed.",defaultMessage:"Since the Safe Key is used to encrypt the files you store in the Safe Box, it cannot be changed later."})}),x.jsx(Q,{image:Fn,image2x:Pn,children:x.jsx(z,{id:"web.intro.step_4.content_3",description:"Intro modal step 4 feature text warning there is no recovery if the Safe Key is lost.",defaultMessage:"<b>There is no way recover your files if you forget your Safe Key.</b> It is never sent to or stored on Koofr servers.",values:{b:t=>x.jsx("strong",{children:t})}})})]}));le.displayName="IntroStep4";const ue=C.memo(()=>{const t=je();return x.jsxs("div",{className:B`
        display: flex;
        flex-direction: column;
        padding: 0;
        ${ne(_n,Vn,252,203)}

        ${V.small} {
          background-position: bottom 15px center;
          width: 100%;
          height: 335px;
        }

        ${V.normal} {
          background-position: 281px 68px;
          width: 558px;
          height: 320px;
        }
      `,children:[x.jsx("div",{className:B`
          ${V.normal} {
            display: flex;
            flex-direction: row;
            align-items: center;
            flex-grow: 1;
          }
        `,children:x.jsx("p",{className:B`
            font-weight: normal;
            color: #011722;

            ${V.small} {
              width: 245px;
              margin: 0 auto;
              padding: 10px 0 0 0;
              text-align: center;
              font-size: 16px;
            }

            ${V.normal} {
              width: 200px;
              margin-left: 34px;
              font-size: 18px;
            }
          `,children:x.jsx(z,{id:"web.intro.step_5.content",description:"Intro modal step 5 body text prompting users to create their first Safe Box.",defaultMessage:"Get started with Vault by creating your first Safe Box."})})}),t.appStoreUrl!==void 0||t.googlePlayUrl!==void 0||t.fDroidUrl!==void 0?x.jsxs("div",{className:B`
            ${V.small} {
              display: flex;
              flex-direction: row;
              justify-content: center;
              margin-top: 20px;
            }

            ${V.normal} {
              display: flex;
              flex-direction: row;
              flex-shrink: 0;
              margin-left: 34px;
            }
          `,children:[t.googlePlayUrl!==void 0?x.jsx("a",{href:t.googlePlayUrl,target:"_blank",rel:"noreferrer",className:B`
                margin-right: 20px;
              `,children:x.jsx(It,{image:Ee,image2x:Me,width:122,height:36})}):null,t.appStoreUrl!==void 0?x.jsx("a",{href:t.appStoreUrl,target:"_blank",rel:"noreferrer",className:B`
                margin-right: 20px;
              `,children:x.jsx(It,{image:Le,image2x:Te,width:117,height:36})}):null,t.fDroidUrl!==void 0?x.jsx("a",{href:t.fDroidUrl,target:"_blank",rel:"noreferrer",className:B`
                margin-right: 20px;
              `,children:x.jsx(It,{image:De,image2x:ke,width:123,height:36})}):null]}):null]})});ue.displayName="IntroStep5";const Rn=ee.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
`,fe=C.memo(({hide:t})=>{const e=we(),s=[e.formatMessage({id:"web.intro.step_1.title",description:"Title for step 1 in the intro modal.",defaultMessage:"Welcome"}),e.formatMessage({id:"web.intro.step_2.title",description:"Title for step 2 in the intro modal.",defaultMessage:"About Vault"}),e.formatMessage({id:"web.intro.step_3.title",description:"Title for step 3 in the intro modal.",defaultMessage:"Safe Boxes"}),e.formatMessage({id:"web.intro.step_4.title",description:"Title for step 4 in the intro modal.",defaultMessage:"Safe Key"}),e.formatMessage({id:"web.intro.step_5.title",description:"Title for step 5 in the intro modal.",defaultMessage:"Start using Vault"})],r=[x.jsx(ie,{}),x.jsx(ce,{}),x.jsx(ae,{}),x.jsx(le,{}),x.jsx(ue,{})],c=r.length,[o,n]=C.useState(0),l=o>0,i=o===c-1,[a,m]=Pt({loop:!1});C.useEffect(()=>{if(m!==void 0){const h=()=>{const u=m.selectedScrollSnap();u===c?t():n(u)};return m.on("select",h),()=>{m.off("select",h)}}},[m,t,c]);const d=C.useCallback(()=>{n(h=>{const u=h-1;return m!==void 0&&m.scrollTo(u),u})},[m]),p=C.useCallback(()=>{i?t():n(h=>{const u=h+1;return m!==void 0&&m.scrollTo(u),u})},[t,i,m]);return x.jsxs(x.Fragment,{children:[x.jsx(Be,{children:x.jsx(Ae,{children:s[o]})}),x.jsx(Oe,{className:B`
          padding: 0;

          @media (max-width: 768px) {
            height: 100%;
          }
        `,children:x.jsx("div",{className:B`
            overflow: hidden;
            height: 100%;
          `,ref:a,children:x.jsxs("div",{className:B`
              display: flex;
              align-items: flex-start;
              height: 100%;
            `,children:[r.map((h,u)=>x.jsx("div",{className:B`
                  flex: 0 0 100%;
                  min-width: 0;
                  height: 100%;
                  overflow-x: hidden;
                  overflow-y: auto;
                `,children:x.jsx(Rn,{children:h})},u)),x.jsx("div",{className:B`
                flex: 0 0 100%;
                min-width: 0;
                height: 100%;
              `})]})})}),x.jsxs(Ce,{children:[x.jsx(Fe,{children:l?x.jsx(Yt,{type:"button",className:Kn,onClick:d,children:x.jsx(z,{id:"web.intro.back.button",description:"Back button label in the intro modal.",defaultMessage:"Back"})}):null}),x.jsx(Pe,{children:x.jsx("div",{className:B`
              display: flex;
              margin: auto;
            `,children:ve(0,c).map(h=>x.jsx("div",{className:Zt(B`
                    background-color: #d4d6d7;
                    display: inline-block;
                    width: 6px;
                    height: 6px;
                    border-radius: 3px;
                    margin: 0 2.5px;
                  `,h===o&&B`
                      background-color: #676f73;
                    `)},h))})}),x.jsx(_e,{children:x.jsx(Yt,{type:"button",className:Hn,onClick:p,children:i?x.jsx(z,{id:"web.intro.done.button",description:"Final button label in the intro modal to finish onboarding.",defaultMessage:"Done"}):x.jsx(z,{id:"web.intro.next.button",description:"Next button label in the intro modal to advance to the next step.",defaultMessage:"Next"})})})]})]})});fe.displayName="IntroModalContent";const Un=C.memo(({isVisible:t,hide:e})=>x.jsx(Ne,{show:t,onHide:e,children:t?x.jsx(fe,{hide:e}):x.jsx(x.Fragment,{})}));Un.displayName="IntroModal";export{Un as IntroModal};

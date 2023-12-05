var Ie=Object.defineProperty;var Se=(e,t,r)=>t in e?Ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var N=(e,t,r)=>(Se(e,typeof t!="symbol"?t+"":t,r),r);import{g as Y,r as i,u as j,j as o,b as d,d as v,a as k,E as Re}from"./DynamicThemeProvider-8db021c0.js";import{L as B,u as ce,d as de,b as Ne}from"./index-785e270c.js";import{S as $e,a as He,u as Oe,D as Be}from"./PasswordInput-b4462587.js";import{u as Ve}from"./useDocumentTitle-2cb3b118.js";import{j as V,D as Le,F as ue,M as pe,b as he,c as me,d as fe,f as ge,g as K,h as xe,k as Ae,l as Pe,a as C,u as S,_ as ze,m as We,n as Ze,o as _e,R as U,p as Ue,e as qe,q as oe}from"./mainAuthenticated-da65d0b7.js";import{f as J}from"./index-8c64d985.js";import{S as be,n as L,o as Ge,k as Ke,p as Qe,r as ee,c as ve,d as we,q as Xe,T as I,i as Ye,j as Je,s as et,l as tt,m as rt,t as ot,g as nt,h as st,u as it,R as at}from"./RepoGuard-68390874.js";import{u as lt}from"./NavbarSticky-e92eb122.js";import{N as ct,M as A,a as dt,b as ut,c as pt,d as ht,e as mt,f as ft}from"./DashboardNavbar-76557c1e.js";import{E as gt}from"./RepoError-de2c233d.js";import{i as ye,t as xt,r as bt}from"./range-295d118f.js";import{b as P,n as D,d as O,B as vt,e as wt,f as yt}from"./Button-0a845b25.js";import{D as jt}from"./DirPicker-a020e83c.js";import{a as Ct}from"./Navbar-214aa63a.js";import"./GitRevision-b7397e1d.js";import"./index-94b5b978.js";import"./DashboardLoading-2b60918b.js";import"./RepoUnlockForm-4021b1e8.js";import"./error-icon@2x-ffa05ea5.js";var Ft=function e(t,r){if(t===r)return!0;if(t&&r&&typeof t=="object"&&typeof r=="object"){if(t.constructor!==r.constructor)return!1;var n,s,a;if(Array.isArray(t)){if(n=t.length,n!=r.length)return!1;for(s=n;s--!==0;)if(!e(t[s],r[s]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if(a=Object.keys(t),n=a.length,n!==Object.keys(r).length)return!1;for(s=n;s--!==0;)if(!Object.prototype.hasOwnProperty.call(r,a[s]))return!1;for(s=n;s--!==0;){var l=a[s];if(!e(t[l],r[l]))return!1}return!0}return t!==t&&r!==r};const kt=Y(Ft),z=typeof window<"u"?i.useLayoutEffect:i.useEffect;function Dt(e,t,r){const[n,s]=i.useState(()=>t(e)),a=i.useCallback(()=>{const l=t(e);kt(n,l)||(s(l),r&&r())},[n,e,r]);return z(a),[n,a]}function Mt(e,t,r){const[n,s]=Dt(e,t,r);return z(function(){const l=e.getHandlerId();if(l!=null)return e.subscribeToStateChange(s,{handlerIds:[l]})},[e,s]),n}function Tt(e,t,r){return Mt(t,e||(()=>({})),()=>r.reconnect())}function Et(e,t){const r=[...t||[]];return t==null&&typeof e!="function"&&r.push(e),i.useMemo(()=>typeof e=="function"?e():e,r)}let q=!1;class It{receiveHandlerId(t){this.targetId=t}getHandlerId(){return this.targetId}subscribeToStateChange(t,r){return this.internalMonitor.subscribeToStateChange(t,r)}canDrop(){if(!this.targetId)return!1;V(!q,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return q=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{q=!1}}isOver(t){return this.targetId?this.internalMonitor.isOverTarget(this.targetId,t):!1}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(t){this.targetId=null,this.internalMonitor=t.getMonitor()}}function St(e,t,r){const n=r.getRegistry(),s=n.addTarget(e,t);return[s,()=>n.removeTarget(s)]}function Rt(e,t,r,n){let s=r?r.call(n,e,t):void 0;if(s!==void 0)return!!s;if(e===t)return!0;if(typeof e!="object"||!e||typeof t!="object"||!t)return!1;const a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;const u=Object.prototype.hasOwnProperty.bind(t);for(let c=0;c<a.length;c++){const h=a[c];if(!u(h))return!1;const p=e[h],f=t[h];if(s=r?r.call(n,p,f,h):void 0,s===!1||s===void 0&&p!==f)return!1}return!0}function Nt(e){return e!==null&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function $t(e){if(typeof e.type=="string")return;const t=e.type.displayName||e.type.name||"the component";throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${t} into a <div>, or turn it into a drag source or a drop target itself.`)}function Ht(e){return(t=null,r=null)=>{if(!i.isValidElement(t)){const a=t;return e(a,r),a}const n=t;return $t(n),Bt(n,r?a=>e(a,r):e)}}function Ot(e){const t={};return Object.keys(e).forEach(r=>{const n=e[r];if(r.endsWith("Ref"))t[r]=e[r];else{const s=Ht(n);t[r]=()=>s}}),t}function ne(e,t){typeof e=="function"?e(t):e.current=t}function Bt(e,t){const r=e.ref;return V(typeof r!="string","Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"),r?i.cloneElement(e,{ref:n=>{ne(r,n),ne(t,n)}}):i.cloneElement(e,{ref:t})}class Vt{get connectTarget(){return this.dropTarget}reconnect(){const t=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();t&&this.disconnectDropTarget();const r=this.dropTarget;if(this.handlerId){if(!r){this.lastConnectedDropTarget=r;return}t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=r,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,r,this.dropTargetOptions))}}receiveHandlerId(t){t!==this.handlerId&&(this.handlerId=t,this.reconnect())}get dropTargetOptions(){return this.dropTargetOptionsInternal}set dropTargetOptions(t){this.dropTargetOptionsInternal=t}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didDropTargetChange(){return this.lastConnectedDropTarget!==this.dropTarget}didOptionsChange(){return!Rt(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}disconnectDropTarget(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}get dropTarget(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}clearDropTarget(){this.dropTargetRef=null,this.dropTargetNode=null}constructor(t){this.hooks=Ot({dropTarget:(r,n)=>{this.clearDropTarget(),this.dropTargetOptions=n,Nt(r)?this.dropTargetRef=r:this.dropTargetNode=r,this.reconnect()}}),this.handlerId=null,this.dropTargetRef=null,this.dropTargetOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDropTarget=null,this.lastConnectedDropTargetOptions=null,this.backend=t}}function te(){const{dragDropManager:e}=i.useContext(Le);return V(e!=null,"Expected drag drop context"),e}function Lt(e){return i.useMemo(()=>e.hooks.dropTarget(),[e])}function At(e){const t=te(),r=i.useMemo(()=>new Vt(t.getBackend()),[t]);return z(()=>(r.dropTargetOptions=e||null,r.reconnect(),()=>r.disconnectDropTarget()),[e]),r}function Pt(){const e=te();return i.useMemo(()=>new It(e),[e])}function zt(e){const{accept:t}=e;return i.useMemo(()=>(V(e.accept!=null,"accept must be defined"),Array.isArray(t)?t:[t]),[t])}class Wt{canDrop(){const t=this.spec,r=this.monitor;return t.canDrop?t.canDrop(r.getItem(),r):!0}hover(){const t=this.spec,r=this.monitor;t.hover&&t.hover(r.getItem(),r)}drop(){const t=this.spec,r=this.monitor;if(t.drop)return t.drop(r.getItem(),r)}constructor(t,r){this.spec=t,this.monitor=r}}function Zt(e,t){const r=i.useMemo(()=>new Wt(e,t),[t]);return i.useEffect(()=>{r.spec=e},[e]),r}function _t(e,t,r){const n=te(),s=Zt(e,t),a=zt(e);z(function(){const[u,c]=St(a,s,n);return t.receiveHandlerId(u),r.receiveHandlerId(u),c},[n,t,s,r,a.map(l=>l.toString()).join("|")])}function Ut(e,t){const r=Et(e,t),n=Pt(),s=At(r.options);return _t(r,n,s),[Tt(r.collect,n,s),Lt(s)]}const H=i.memo(({label:e,children:t})=>{const r=j();return o.jsxs("div",{className:d`
          margin: 0 0 15px;
        `,children:[o.jsx("div",{className:d`
            font-size: 13px;
            font-weight: normal;
            color: ${r.colors.textLight};
          `,children:e}),o.jsx("div",{className:d`
            font-size: 13px;
            font-weight: normal;
            color: ${r.colors.text};
            line-height: 1.7;
            word-break: break-word;

            & p {
              margin: 0 0 1em;

              &:last-child {
                margin-bottom: 0;
              }
            }
          `,children:t})]})}),je=i.memo(({file:e})=>{const t=j();return o.jsxs("div",{className:d`
        display: flex;
        flex-direction: column;
      `,children:[o.jsx(H,{label:"Name",children:e.nameError===void 0?o.jsx(o.Fragment,{children:e.name}):o.jsxs("div",{className:d`
              color: ${t.colors.destructive};
            `,children:[o.jsx("p",{children:e.name}),o.jsx("p",{children:e.nameError})]})}),o.jsx(H,{label:"Type",children:qt(e.category)}),e.sizeDisplay!==""?o.jsx(H,{label:"Size",children:e.sizeDisplay}):null,e.modified!==void 0?o.jsxs(H,{label:"Modified",children:[o.jsx(be,{value:e.modified,noTooltip:!0}),o.jsx("br",{}),J(e.modified,"PPPPpp")]}):null]})});function qt(e){switch(e){case"Generic":return"File";case"Folder":return"Folder";case"Archive":return"Archive";case"Audio":return"Audio";case"Code":return"Code";case"Document":return"Document";case"Image":return"Image";case"Pdf":return"PDF";case"Presentation":return"Presentation";case"Sheet":return"Spreadsheet";case"Text":return"Text";case"Video":return"Video"}}const Ce=i.memo(({file:e})=>o.jsx("div",{className:d`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        overflow-x: hidden;
      `,children:o.jsx("div",{className:d`
          margin: 25px 25px 50px;
        `,children:o.jsx(ue,{size:"Lg",attrs:e.fileIconAttrs})})})),Gt=i.memo(({file:e,hide:t})=>o.jsxs(o.Fragment,{children:[o.jsx(pe,{children:o.jsx(he,{children:"Info"})}),o.jsxs(me,{children:[o.jsx(je,{file:e}),o.jsx(Ce,{file:e})]}),o.jsx(fe,{children:o.jsx(ge,{children:o.jsx(K,{variant:"primary",onClick:t,children:"Close"})})})]})),Kt=i.memo(({file:e,hide:t})=>o.jsx(xe,{show:e!==void 0,onHide:t,children:e!==void 0?o.jsx(Gt,{file:e,hide:t}):o.jsx(o.Fragment,{})})),Qt=i.memo(({file:e,hide:t})=>{const r=j(),n=e!==void 0,s=lt();return o.jsx("div",{className:v(d`
          flex-direction: column;
          position: fixed;
          background-color: #fff;
          z-index: ${r.zindex.dashboardMenu};
          display: flex;
          top: 70px;
          bottom: 0;
          left: -250px;
          width: 250px;
          border-right: 1px solid ${r.colors.borderLight};
          border-top: 1px solid ${r.colors.borderLight};
          transition: left 0.3s ease-out;
        `,n&&d`
            left: 0;
          `,s&&d`
            top: 69px;
          `),children:e!==void 0?o.jsxs("div",{className:d`
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            overflow: hidden;
          `,children:[o.jsxs("div",{className:d`
              display: flex;
              flex-direction: row;
              align-items: center;
              flex-shrink: 0;
              border-bottom: 1px solid ${r.colors.border};
              height: 46px;
            `,children:[o.jsx("div",{className:d`
                flex-grow: 1;
                font-size: 14px;
                font-weight: normal;
                margin: 0 0 0 20px;
                color: ${r.colors.text};
              `,children:"Info"}),o.jsx("div",{className:d`
                margin-right: 7px;
              `,children:o.jsx(Ae.Provider,{value:t,children:o.jsx(Pe,{})})})]}),o.jsx("div",{className:d`
              display: flex;
              flex-direction: column;
              flex-grow: 1;
              padding: 20px 25px 0;
              overflow-x: hidden;
            `,children:o.jsx(je,{file:e})}),o.jsx(Ce,{file:e})]}):null})}),Fe=i.createContext(void 0);function E(){return i.useContext(Fe)}const Xt=i.memo(()=>{const e=k(),t=C(),r=E(),[n]=S((u,c)=>u.repoFilesBrowsersBreadcrumbsSubscribe(r,c),u=>u.repoFilesBrowsersBreadcrumbsData,[r]),s=i.useMemo(()=>e?n.slice(n.length-1):n,[n,e]),a=i.useMemo(()=>s.map((u,c)=>({id:u.id,name:u.name,link:L(u.repoId,u.path),isClickable:!0,hasCaret:!1,isLast:c===s.length-1})),[s]),l=i.useCallback((u,c)=>{c.isLast&&t.repoFilesBrowsersLoadFiles(r)},[t,r]);return o.jsx(ct,{breadcrumbs:a,onClick:l})}),Yt="/assets/empty-folder@2x-ac89faae.png";var Jt=ze,er=function(){return Jt.Date.now()},tr=er,rr=ye,G=tr,se=xt,or="Expected a function",nr=Math.max,sr=Math.min;function ir(e,t,r){var n,s,a,l,u,c,h=0,p=!1,f=!1,m=!0;if(typeof e!="function")throw new TypeError(or);t=se(t)||0,rr(r)&&(p=!!r.leading,f="maxWait"in r,a=f?nr(se(r.maxWait)||0,t):a,m="trailing"in r?!!r.trailing:m);function x(b){var T=n,R=s;return n=s=void 0,h=b,l=e.apply(R,T),l}function y(b){return h=b,u=setTimeout(F,t),p?x(b):l}function w(b){var T=b-c,R=b-h,re=t-T;return f?sr(re,a-R):re}function g(b){var T=b-c,R=b-h;return c===void 0||T>=t||T<0||f&&R>=a}function F(){var b=G();if(g(b))return $(b);u=setTimeout(F,w(b))}function $(b){return u=void 0,m&&n?x(b):(n=s=void 0,l)}function M(){u!==void 0&&clearTimeout(u),h=0,n=c=s=u=void 0}function Z(){return u===void 0?l:$(G())}function _(){var b=G(),T=g(b);if(n=arguments,s=this,c=b,T){if(u===void 0)return y(c);if(f)return clearTimeout(u),u=setTimeout(F,t),x(c)}return u===void 0&&(u=setTimeout(F,t)),l}return _.cancel=M,_.flush=Z,_}var ar=ir,lr=ar,cr=ye,dr="Expected a function";function ur(e,t,r){var n=!0,s=!0;if(typeof e!="function")throw new TypeError(dr);return cr(r)&&(n="leading"in r?!!r.leading:n,s="trailing"in r?!!r.trailing:s),lr(e,t,{leading:n,maxWait:t,trailing:s})}var pr=ur;const hr=Y(pr);function mr(e){return e.isDirectory}function fr(e){return new Promise((t,r)=>{const n=e.createReader();let s=[];const a=()=>{n.readEntries(l=>{l.length===0?t(s):(s=s.concat(Array.from(l)),setTimeout(a,10))},r)};a()})}function gr(e){return new Promise((t,r)=>e.file(t,r))}function xr(e){const t=a=>{const l=(u,c)=>{u(a)};return{isDirectory:!1,isFile:!0,name:a.name,file:l}},r=(a,l)=>({name:a,isFile:!1,isDirectory:!0,createReader:()=>{let c=!1;return{readEntries:(p,f)=>{c?p([]):(c=!0,p(l))}}}}),n={name:"",isDirectory:!0,file:void 0,children:new Map};e.forEach(a=>{const l=a.webkitRelativePath.split("/"),u=l.slice(0,l.length-1);let c=n;u.forEach(h=>{let p=c.children.get(h);p===void 0&&(p={name:h,isDirectory:!0,file:void 0,children:new Map},c.children.set(h,p)),c=p}),c.children.set(a.name,{name:a.name,isDirectory:!1,file:a,children:void 0})});const s=a=>{if(a.isDirectory){const l=Array.from(a.children.values()).map(s);return r(a.name,l)}return t(a.file)};return Array.from(n.children.values()).map(s)}function ie(e){return String.prototype.normalize?e.normalize().split("").filter(n=>n>=" "&&!(n>=""&&n<="")).join(""):e}function br(e,t){return e+(/\/$/.test(e)?"":"/")+(t[0]!=="/"?t:t.slice(1))}class vr{constructor(t){N(this,"upload");N(this,"queue",[]);N(this,"processQueue",()=>{if(this.queue.length===0)return;const t=this.queue.slice();this.queue.length=0;const r=t.map(n=>n.entry);this.uploadFileEntries(r).forEach((n,s)=>{n.then(t[s].resolve,t[s].reject)})});N(this,"processQueueThrottled",hr(this.processQueue,100));this.upload=t.upload}uploadFileEntries(t){return t.length===0?[]:this.upload(t)}getFileName(t){let r=ie(t.name);if(r==="image.jpeg"||r==="image.jpg"||r==="image.png"){const n=J(new Date,"yyyyMMdd_hhmmssSSS"),s=r.split(".").pop();r=`image_${n}.${s}`}return r}addEntry(t){return new Promise((r,n)=>{if(t.name===".DS_Store"){r();return}this.queue.push({entry:t,resolve:r,reject:n}),this.processQueueThrottled()})}async handleEntryDir(t,r){const n=ie(t.name),s=br(r,n);await wr(30);const a=await fr(t);return await Promise.all(a.map(l=>this.handleEntry(l,s).then(()=>{}))),s}async handleEntryFile(t,r){const n=await gr(t),s={parentPath:r,name:this.getFileName(n),file:n};await this.addEntry(s)}async handleEntry(t,r){mr(t)?await this.handleEntryDir(t,r):await this.handleEntryFile(t,r)}uploadDataTransferItems(t){return t.filter(r=>r.webkitGetAsEntry!=null).map(r=>r.webkitGetAsEntry()).filter(r=>r!=null).map(r=>this.handleEntry(r,"/"))}uploadWebkitFilesAsEntries(t){return xr(t).map(r=>this.handleEntry(r,"/"))}uploadNativeFiles(t){return this.uploadFileEntries(t.map(r=>({parentPath:"/",name:this.getFileName(r),file:r})))}uploadFiles(t){if(t.length>0){const r=t[0];if(r.webkitGetAsEntry!=null)return r.webkitGetAsEntry()!=null?this.uploadDataTransferItems(t):[];if(r.webkitRelativePath!=null)return this.uploadWebkitFilesAsEntries(t)}return this.uploadNativeFiles(t)}}const wr=e=>new Promise(t=>setTimeout(t,e));function ke(){const e=C(),t=E();return i.useCallback(n=>{const{repoId:s,path:a}=e.repoFilesBrowsersInfo(t);return s===void 0||a===void 0?[]:new vr({upload(u){return u.map(async c=>{const h=c.parentPath==="/"?c.name:c.parentPath.slice(1)+"/"+c.name;await e.transfersUpload(s,a,h,c.file)})}}).uploadFiles(n)},[e,t])}const De=i.createContext(void 0);function W(){return i.useContext(De)}const yr=i.memo(()=>{const e=ke(),t=i.useRef(null),r=W(),n=i.useCallback(l=>{l===null?r.uploadFile=void 0:r.uploadFile=()=>l.click()},[r]),s=i.useCallback(l=>{l===null?r.uploadDir=void 0:r.uploadDir=()=>l.click()},[r]),a=i.useCallback(async l=>{if(l.currentTarget.files!==null){const u=Array.from(l.currentTarget.files);Promise.all(e(u))}},[e]);return o.jsxs("form",{ref:t,style:{display:"none"},children:[o.jsx("input",{type:"file",ref:n,onChange:a,"aria-label":"Upload file"}),o.jsx("input",{type:"file",ref:s,onChange:a,"aria-label":"Upload folder",webkitdirectory:"",mozdirectory:"",directory:""})]})}),jr=i.memo(()=>{const e=j(),t=W();return o.jsxs("div",{className:d`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 80px 0 0;
      `,children:[o.jsx("img",{src:Yt,alt:"",className:d`
          display: block;
          width: 252px;
          height: 186px;
          cursor: pointer;
        `,onClick:()=>{var r;(r=t.uploadFile)==null||r.call(t)}}),o.jsx("h3",{className:d`
          font-size: 14px;
          color: ${e.colors.text};
          font-weight: 600;
          margin: 0 0 20px;
        `,children:"This folder is empty."})]})});function Cr(e){return e(Re)}function Fr(){const[e,t]=i.useState(null),[r,n]=i.useState({width:0,height:0}),s=i.useCallback(()=>{n({width:(e==null?void 0:e.offsetWidth)||0,height:(e==null?void 0:e.offsetHeight)||0})},[e==null?void 0:e.offsetHeight,e==null?void 0:e.offsetWidth]);return i.useEffect(()=>(window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}),[s]),i.useLayoutEffect(()=>{s()},[e==null?void 0:e.offsetHeight,e==null?void 0:e.offsetWidth]),[t,r]}const kr=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:9,height:7,fill:"none",...e},i.createElement("path",{fill:"currentColor",d:"M2.887 5.115 1.308 3.537A.731.731 0 0 0 .274 4.57l2.082 2.082a.75.75 0 0 0 1.058 0L8.72 1.37A.731.731 0 1 0 7.687.333l-4.8 4.782Z"})),Dr=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:8,height:2,fill:"none",...e},i.createElement("path",{fill:"currentColor",d:"M1.051.27a.731.731 0 1 0 0 1.462h5.887a.731.731 0 1 0 0-1.462H1.051Z"})),Me=i.memo(({value:e,onClick:t})=>{const r=j();return o.jsx("button",{type:"button",role:"checkbox","aria-checked":e==="checked"?"true":e==="indeterminate"?"mixed":"false",className:v(d`
          ${P}
          width: 32px;
          height: 32px;
          transition: color;
        `,e==="checked"?d`
              color: #566bb8;
            `:d`
              color: ${r.colors.textLight};

              &:hover {
                color: ${r.colors.text};
              }
            `),onClick:t,children:o.jsx("div",{className:d`
          display: flex;
          justify-content: center;
          align-items: center;
        `,children:o.jsxs("div",{className:d`
            width: 15px;
            height: 15px;
            border: 1.5px solid currentColor;
            border-radius: 3px;
            position: relative;

            button:focus > div > & {
              outline: 0;
              box-shadow: 0 0 2px 1px rgb(13 110 253 / 25%);
            }
          `,children:[o.jsx("div",{className:v(d`
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                transition: opacity 0.2s ease-out;
                opacity: 0;
              `,e==="checked"&&d`
                  opacity: 1;
                `),children:o.jsx(kr,{})}),o.jsx("div",{className:v(d`
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                transition: opacity 0.2s ease-out;
                opacity: 0;
              `,e==="indeterminate"&&d`
                  opacity: 1;
                `),children:o.jsx(Dr,{})})]})})})});var Mr=We,Tr=Ze,Er=_e,Ir="[object String]";function Sr(e){return typeof e=="string"||!Tr(e)&&Er(e)&&Mr(e)==Ir}var Rr=Sr;const Nr=Y(Rr);function $r(e,t){let r=0,n=0,s=0;const a=t.map((c,h)=>{const p={type:0,width:void 0,relWidth:void 0,minWidth:c.minWidth};if(c.width===void 0)n+=1;else if(Nr(c.width)){if(c.width[c.width.length-1]!=="%")throw new Error(`Column width must be a number or percentage: ${c.width}`);const f=parseInt(c.width.slice(0,c.width.length-1),10)/100;s+=f,p.type=2,p.relWidth=f}else{if(c.minWidth!==void 0)throw new Error(`Column cannot have both width number and minWidth: ${c.width}, ${c.minWidth}`);p.type=1,p.width=c.width,r+=p.width}return p});if(s>1)throw new Error("Columns relative widths cannot be more than 100%");if(n>0){if(s===1)throw new Error("Columns relative widths cannot equal 100% if there are unknown widths");const c=(1-s)/n;a.forEach(h=>{h.type===0&&(h.type=2,h.relWidth=c)})}else a.forEach(c=>{c.type===2&&(c.relWidth=c.relWidth/s)});const l=Math.max(e-r,0);let u=l;return a.forEach(c=>{if(c.type===2&&c.minWidth!==void 0){const h=Math.min(Math.max(l*c.relWidth,c.minWidth),u);u-=h,c.type=1,c.width=h}}),a.forEach(c=>{if(c.type===2){const h=Math.min(Math.max(l*c.relWidth,0),u);u-=h,c.type=1,c.width=h}}),a.map(c=>c.width)}const Hr=e=>{switch(e){case void 0:return;case"Asc":return"ascending";case"Desc":return"descending";case"Hidden":return"none"}},Q=D.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
  align-items: center;
  padding-left: 10px;
  flex-grow: 0;
  flex-shrink: 0;
`,Te=D(Q)`
  font-size: 13px;
  font-weight: normal;
  color: ${({theme:e})=>e.colors.textLight};
  vertical-align: middle;
`,Or=D(Te)`
  align-items: center;
  justify-content: center;
  display: flex;
`,Br=D.button`
  ${P}
  color: ${({theme:e})=>e.colors.textLight};
  cursor: pointer;
  padding-right: 15px;

  ${({sortBy:e,theme:t})=>e==="Asc"||e==="Desc"?Cr(r=>r`
            &:after {
              content: '';
              display: inline-block;
              width: 0;
              height: 0;
              border-top: ${e==="Asc"?"none":`4px solid ${t.colors.textLight}`};
              border-bottom: ${e==="Asc"?`4px solid ${t.colors.textLight}`:"none"};
              border-right: 4px solid transparent;
              border-left: 4px solid transparent;
              position: relative;
              left: 7px;
              bottom: 2px;
            }
          `):void 0}
`,Vr=D.div`
  display: flex;
  align-items: center;
  height: 33px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  position: relative;
`,Lr=D.div``,Ar=i.memo(({index:e,isSelected:t,isFirstSelected:r,hasHover:n,isDropOver:s,height:a,ariaLabel:l,onClick:u,onContextMenu:c,children:h})=>{const p=j();return o.jsx("div",{className:v(d`
            display: flex;
            flex-direction: column;
            margin-top: -1px;
            background-color: #fff;
            border-top: 1px solid ${p.colors.borderLight};
            border-bottom: 1px solid ${p.colors.borderLight};
            border-left: 1px solid transparent;
            border-right: 1px solid transparent;
            overflow: hidden;
            position: relative;
            transition:
              height 0.3s ease-out,
              border 0.1s ease-out,
              box-shadow 0.1s ease-out;
          `,e===0?d`
                border-top-color: ${p.colors.border};
              `:void 0,n&&!t?d`
                &:hover {
                  background-color: ${p.colors.empty};
                  border-top-color: ${p.colors.border};
                  border-left-color: ${p.colors.border};
                  border-right-color: ${p.colors.border};
                  border-bottom-color: ${p.colors.border};
                  box-shadow: ${p.boxShadow};
                  z-index: 1;
                }
              `:void 0,t?d`
                background-color: ${p.colors.selectionBg};
                border-top-color: ${p.colors.borderLight};
                border-left-color: ${p.colors.selection};
                border-right-color: ${p.colors.selection};
                border-bottom-color: ${p.colors.selection};
                box-shadow: ${p.boxShadow};
                z-index: 2;
              `:void 0,r?d`
                border-top-color: ${p.colors.selection};
              `:void 0,s?d`
                background-color: ${p.colors.bgLight};
                border-top-color: ${p.colors.border};
                border-left-color: ${p.colors.border};
                border-right-color: ${p.colors.border};
                border-bottom-color: ${p.colors.border};
                z-index: 1;
              `:void 0),style:{height:`${a+1}px`},onClick:u,onContextMenu:c,role:"row","aria-rowindex":e,"aria-label":l,"aria-selected":t,children:h})}),Pr=D.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;
  height: 47px;
`,zr=D.div`
  user-select: none;
  padding: 0 2px 3px;
`,Ee=i.createContext(void 0),Wr=i.memo(({columns:e,selectionSummary:t,length:r,data:n,Row:s,ariaLabel:a,onHeadCheckboxClick:l,onSortByClick:u,onRowCheckboxClick:c,onRowClick:h,onRowContextMenu:p})=>{const[f,{width:m}]=Fr(),x=i.useMemo(()=>{if(m===0)return[];const g=m-6,F=[{name:"checkbox",label:"",width:42},...e],$=$r(g,F.map(M=>({width:M.width,minWidth:M.minWidth})));return F.map((M,Z)=>({name:M.name,label:M.label,width:$[Z],sortBy:M.sortBy}))},[e,m]),y=i.useMemo(()=>({columns:x,onRowCheckboxClick:c,onRowClick:h,onRowContextMenu:p}),[x,c,h,p]),w=i.useMemo(()=>bt(0,r),[r]);return o.jsx(zr,{ref:f,role:"grid","aria-label":a,"aria-rowcount":r,children:x.length>0?o.jsxs(Ee.Provider,{value:y,children:[o.jsx("div",{role:"rowgroup",children:o.jsx(Vr,{role:"row",children:x.map(g=>g.name==="checkbox"?o.jsx(Or,{style:{minWidth:`${g.width}px`},role:"columnheader",children:o.jsx(Me,{value:t==="None"?"unchecked":t==="Partial"?"indeterminate":"checked",onClick:l})},g.name):o.jsx(Te,{style:{minWidth:`${g.width}px`},role:"columnheader","aria-sort":Hr(g.sortBy),children:g.sortBy!==void 0?o.jsx(Br,{sortBy:g.sortBy,onClick:F=>{u!==void 0&&u(F,g.name)},children:g.label}):g.label},g.name))})}),o.jsx(Lr,{role:"rowgroup",children:w.map(g=>o.jsx(s,{index:g,data:n},g))})]}):null})}),Zr=i.memo(({index:e,row:t,isSelected:r,isFirstSelected:n,ariaLabel:s})=>{const{columns:a,onRowCheckboxClick:l,onRowClick:u,onRowContextMenu:c}=i.useContext(Ee),h=i.useCallback(m=>{l(m,e)},[l,e]),p=i.useCallback(m=>{u(m,e)},[u,e]),f=i.useCallback(m=>{c(m,e)},[c,e]);return o.jsx(Ar,{index:e,isSelected:r,isFirstSelected:n,hasHover:!0,isDropOver:!1,height:48,ariaLabel:s,onClick:p,onContextMenu:f,children:o.jsx(Pr,{children:a.map(m=>m.name==="checkbox"?o.jsx(Q,{style:{width:`${m.width}px`},role:"cell",children:o.jsx(Me,{value:r?"checked":"unchecked",onClick:h})},m.name):o.jsx(Q,{style:{width:`${m.width}px`},role:"cell",children:t[m.name]},m.name))})},e)}),_r=e=>Ge?e.metaKey:e.ctrlKey,ae=e=>e.shiftKey,Ur=i.memo(({file:e})=>{const t=k(),r=j(),n=C(),s=i.useCallback(()=>{e.path!==void 0&&Ke(n,e.repoId,e.path,t)},[n,e,t]),a=i.useCallback(()=>{e.path!==void 0&&n.repoFilesRenameFile(e.repoId,e.path)},[n,e]);return o.jsxs("div",{className:d`
        display: flex;
        flex-direction: row;
        align-items: center;
      `,children:[o.jsx("span",{className:d`
          margin-right: 15px;
        `,children:o.jsx(ue,{size:"Sm",attrs:e.fileIconAttrs})}),o.jsxs("span",{className:v(d`
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          `,e.nameError!==void 0&&d`
              color: ${r.colors.destructive};
            `),children:[e.path!=null?e.type==="Dir"?o.jsx(B,{to:L(e.repoId,e.path),className:d`
                font-weight: 600;

                ${O} {
                  color: ${r.colors.text};
                }
              `,children:e.name}):Qe(e)?o.jsx(B,{to:ee(e.repoId,e.path),className:d`
                ${O} {
                  color: ${r.colors.text};
                }
              `,children:e.name}):o.jsx("a",{href:".",onClick:l=>{l.preventDefault(),l.stopPropagation(),s()},className:d`
                ${O} {
                  color: ${r.colors.text};
                }
              `,children:e.name}):e.name,e.nameError!==void 0?" (ERROR)":null]}),t?null:o.jsxs("button",{className:d`
            ${P}
            width: 32px;
            height: 32px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            top: 2px;
            display: none;

            *:hover > * > * > * > & {
              display: block;
            }
          `,onClick:l=>{l.stopPropagation(),a()},"aria-label":"Rename",children:[o.jsx(ve,{className:d`
              button:hover > & {
                display: none;
              }
            `,role:"img"}),o.jsx(we,{className:d`
              display: none;

              button:hover > & {
                display: inline;
              }
            `,role:"img"})]})]})}),qr=i.memo(({file:e})=>o.jsx("span",{className:d`
        font-size: 12px;
      `,children:e.sizeDisplay})),Gr=i.memo(({file:e})=>e.modified===void 0?null:o.jsx("span",{className:d`
        font-size: 12px;
      `,children:o.jsx(be,{value:e.modified})})),Kr=i.memo(({index:e,data:t})=>{const r=i.useMemo(()=>t.items[e],[t,e]),[n]=S((u,c)=>u.repoFilesFileSubscribe(r.fileId,c),u=>u.repoFilesFileData,[r.fileId]),s=r.isSelected,a=s&&(e===0||!t.items[e-1].isSelected),l=i.useMemo(()=>{if(n!==void 0)return{name:o.jsx(Ur,{file:n}),size:o.jsx(qr,{file:n}),modified:o.jsx(Gr,{file:n})}},[n]);return l===void 0?null:o.jsx(Zr,{index:e,row:l,isSelected:s,isFirstSelected:a,ariaLabel:n!==void 0?n.type==="Dir"?`Folder ${n.name}`:`File ${n.name}`:void 0},r.fileId)}),Qr=i.memo(({info:e})=>{const t=k(),r=C(),n=E(),s=e.items,a=i.useMemo(()=>({items:s}),[s]),l=e.sort,u=i.useMemo(()=>[{name:"name",label:"Name",sortBy:l.field==="Name"?l.direction:"Hidden"},{name:"size",label:"Size",width:t?0:"15%",minWidth:t?void 0:70,sortBy:l.field==="Size"?l.direction:"Hidden"},{name:"modified",label:"Modified",width:t?0:"20%",minWidth:t?void 0:150,sortBy:l.field==="Modified"?l.direction:"Hidden"}],[t,l]),c=i.useCallback(()=>{e.selectionSummary==="All"?r.repoFilesBrowsersClearSelection(n):r.repoFilesBrowsersSelectAll(n)},[r,n,e]),h=i.useCallback((x,y)=>{switch(y){case"name":r.repoFilesBrowsersSortBy(n,U.Name);break;case"size":r.repoFilesBrowsersSortBy(n,U.Size);break;case"modified":r.repoFilesBrowsersSortBy(n,U.Modified);break}},[r,n]),p=i.useCallback((x,y)=>{x.stopPropagation(),r.repoFilesBrowsersSelectFile(n,s[y].fileId,!0,ae(x),!1)},[r,n,s]),f=i.useCallback((x,y)=>{r.repoFilesBrowsersSelectFile(n,s[y].fileId,_r(x),ae(x),!1)},[r,n,s]),m=i.useCallback((x,y)=>{},[]);return o.jsx(Wr,{columns:u,selectionSummary:e.selectionSummary,length:s.length,data:a,Row:Kr,ariaLabel:"Files list",onHeadCheckboxClick:c,onSortByClick:h,onRowCheckboxClick:p,onRowClick:f,onRowContextMenu:m})}),Xr=i.memo(({info:e})=>{const t=C(),r=E();return o.jsx(o.Fragment,{children:e.status.type==="Error"&&!e.status.loaded?o.jsx(gt,{error:e.status.error,onRetry:()=>{t.repoFilesBrowsersLoadFiles(r)}}):e.status.type==="Loaded"&&e.totalCount===0?o.jsx(jr,{}):o.jsx(Qr,{info:e})})}),Yr=i.memo(i.forwardRef(({isActive:e,isAllowed:t,isOver:r},n)=>{const s=j(),a=v(d`
          position: fixed;
          display: none;
          z-index: ${s.zindex.dropZoneLines};
          background-color: ${s.colors.border};
        `,e&&d`
            display: block;
          `,r&&(t?d`
                background-color: ${s.colors.successful};
              `:d`
                background-color: ${s.colors.destructive};
              `));return o.jsxs("div",{ref:n,className:d`
            display: flex;
            flex-direction: column;
            flex-grow: 1;
          `,children:[o.jsx("div",{className:v(a,d`
                top: 0;
                left: 5px;
                right: 0;
                height: 5px;
              `)}),o.jsx("div",{className:v(a,d`
                top: 5px;
                bottom: 0;
                right: 0;
                width: 5px;
              `)}),o.jsx("div",{className:v(a,d`
                bottom: 0;
                left: 0;
                right: 5px;
                height: 5px;
              `)}),o.jsx("div",{className:v(a,d`
                top: 0;
                bottom: 5px;
                left: 0;
                width: 5px;
              `)})]})}));function Jr(){const e=document.activeElement,t=["input","select","button","textarea"];return e!=null&&t.indexOf(e.tagName.toLowerCase())!==-1}function eo(e){const t=i.useCallback(r=>{if(Jr()||r.clipboardData==null||r.clipboardData.items==null&&r.clipboardData.files==null)return;const n=r.clipboardData.files!=null?Array.from(r.clipboardData.files):Array.from(r.clipboardData.items).filter(s=>s.kind==="file");Promise.all(e(n))},[e]);i.useEffect(()=>(window.addEventListener("paste",t),()=>window.removeEventListener("paste",t)),[t])}const to=i.memo(()=>{const t=ke(),[{canDrop:r,isOver:n},s]=Ut(()=>({accept:[Ue],collect:a=>({canDrop:a.canDrop(),isOver:a.isOver({shallow:!0})}),drop:(a,l)=>{if(l.didDrop())return;const u=a.items!=null?Array.from(a.items):Array.from(a.files);Promise.all(t(u))}}),[t]);return i.useEffect(()=>{s(document.body)},[s]),eo(t),o.jsx(Yr,{isActive:r,isOver:n,isAllowed:!0})}),ro=i.memo(({info:{srcFilesCount:e,mode:t,dirPickerId:r,destFileName:n,createDirEnabled:s,canMove:a},cancel:l})=>{const u=k(),c=j(),h=C(),p=i.useCallback((x,y,w)=>h.repoFilesMoveDirPickerClick(y,w),[h]),f=i.useCallback(()=>{h.repoFilesMoveCreateDir()},[h]),m=i.useCallback(async()=>{h.repoFilesMoveMoveFiles()},[h]);return o.jsxs(o.Fragment,{children:[o.jsx(pe,{children:o.jsxs(he,{className:d`
              font-weight: normal;
            `,children:[t==="Copy"?"Copy":"Move"," ",o.jsxs("strong",{className:d`
                font-weight: 600;
              `,children:[e," ",e===1?"item":"items"]}),n!==void 0?o.jsxs(o.Fragment,{children:[" to ",o.jsx("strong",{className:d`
                    font-weight: 600;
                  `,children:n})]}):null]})}),o.jsx(me,{className:d`
            padding-bottom: 0;
            overflow: hidden;
          `,children:o.jsx("div",{className:v(d`
                border: 1px solid ${c.colors.borderDarker};
                border-radius: 3px;
                overflow-y: scroll;
                overflow-x: hidden;
              `,u?d`
                    flex-grow: 1;
                  `:d`
                    height: 300px;
                  `),children:o.jsx(jt,{pickerId:r,onClick:p})})}),o.jsxs(fe,{children:[o.jsx(qe,{children:o.jsx(vt,{type:"button",disabled:!s,onClick:f,children:"Create folder"})}),o.jsxs(ge,{children:[o.jsx(K,{type:"button",onClick:l,children:"Cancel"}),o.jsx(K,{type:"button",variant:a?"primary":"disabled",disabled:!a,onClick:m,children:t==="Copy"?"Copy":"Move"})]})]})]})}),oo=i.memo(()=>{const e=C(),[t]=S((n,s)=>n.repoFilesMoveInfoSubscribe(s),n=>n.repoFilesMoveInfoData,[]),r=i.useCallback(()=>e.repoFilesMoveCancel(),[e]);return o.jsx(xe,{show:t!==void 0,onHide:r,children:t!==void 0?o.jsx(ro,{info:t,cancel:r}):o.jsx(o.Fragment,{})})}),no=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},i.createElement("path",{fill:"#fff",d:"M9.722 9.752h4.92a.72.72 0 0 0 .72-.72v-.023a.72.72 0 0 0-.72-.72h-4.92V3.375a.72.72 0 0 0-.72-.72h-.024a.72.72 0 0 0-.72.72V8.29H3.362a.72.72 0 0 0-.72.72v.023c0 .397.323.72.72.72h4.896v4.896c0 .397.323.72.72.72h.024a.72.72 0 0 0 .72-.72V9.752Z"})),so=D.nav`
  display: flex;
  flex-direction: row;
  padding-top: ${({theme:e})=>e.isMobile?0:"11px"};
`,io=i.memo(i.forwardRef(({children:e,className:t,backgroundClassName:r,icon:n,...s},a)=>{const l=j();return o.jsx(wt,{className:v(d`
            ${P}
            margin: 0;
            padding: 0;

            ${O} {
              text-decoration: none;
            }
          `,l.isMobile?d`
                min-width: 37px;
              `:d`
                margin-left: 6px;
                margin-right: 6px;
                margin-bottom: 5px;
                min-width: 45px;

                &:last-of-type {
                  margin-right: 0;
                }
              `),...s,ref:a,children:o.jsxs("div",{className:d`
            display: flex;
            flex-direction: column;
            align-items: center;
          `,children:[o.jsx("div",{className:v(d`
                display: flex;
                justify-content: center;
                align-items: center;
                width: 32px;
                height: 32px;
                border-radius: 3px;
                transition: ${yt};
              `,!l.isMobile&&d`
                  margin-bottom: 3px;
                `,r),children:n}),l.isMobile?null:o.jsx("div",{className:d`
                display: block;
                color: ${l.colors.text};
                font-size: 11px;
                line-height: 20px;
                font-weight: 600;
                text-align: center;
              `,children:e})]})})})),ao=i.memo(({hide:e})=>{const t=W(),r=i.useCallback(()=>{var n;e(),(n=t.uploadFile)==null||n.call(t)},[e,t]);return o.jsx(A,{onClick:r,children:"Upload file"})}),lo=i.memo(({hide:e})=>{const t=W(),r=i.useCallback(()=>{var n;e(),(n=t.uploadDir)==null||n.call(t)},[e,t]);return o.jsx(A,{onClick:r,children:"Upload folder"})}),co=i.memo(({hide:e})=>{const t=C(),r=E(),n=i.useCallback(()=>t.repoFilesBrowsersCreateDir(r),[t,r]);return o.jsx(o.Fragment,{children:o.jsx(A,{onClick:()=>{e(),n()},children:"Create folder"})})}),uo=i.memo(({hide:e})=>{const t=ce(),r=C(),n=E(),s=i.useCallback(()=>{const{repoId:a}=r.repoFilesBrowsersInfo(n),l=`new text file ${J(new Date,"yyyyMMddHHmmss")}.txt`;r.repoFilesBrowsersCreateFile(n,l).then(u=>{u!==void 0&&t(ee(a,u,!0))})},[r,n,t]);return o.jsx(o.Fragment,{children:o.jsx(A,{onClick:()=>{e(),s()},children:"Create new text file"})})}),po=i.memo(({hide:e})=>o.jsxs(o.Fragment,{children:[o.jsx(ao,{hide:e}),o.jsx(lo,{hide:e}),o.jsx(co,{hide:e}),o.jsx(dt,{}),o.jsx(uo,{hide:e})]})),ho=i.memo(()=>{const e=j(),[t,{show:r,popper:n,toggle:s}]=ut({popperConfig:{strategy:"fixed"}});return pt(r,n),o.jsx(ht,{isVisible:r,...t,className:d`
        width: 230px;
        z-index: ${e.zindex.repoFilesAddMenu};
      `,children:o.jsx(po,{hide:()=>s==null?void 0:s(!1)})})}),mo=i.memo(()=>{const e=j(),[t]=mt();return o.jsx(io,{backgroundClassName:d`
        background-color: ${e.colors.primary};

        &:hover {
          background-color: ${e.colors.primaryHover};
        }
      `,icon:o.jsx(no,{role:"img"}),...t,children:"Add"})}),fo=i.memo(()=>{const[e,t]=i.useState(!1);return o.jsxs(ft,{show:e,onToggle:r=>t(r),placement:"bottom",children:[o.jsx(mo,{}),o.jsx(ho,{})]})}),go=i.memo(()=>o.jsx(so,{children:o.jsx(fo,{})})),xo=i.memo(({info:e})=>{const t=j(),{status:r,totalCount:n,totalSizeDisplay:s,selectedCount:a,selectedSizeDisplay:l}=e;return r.type==="Loading"||r.type==="Error"||n===0?null:o.jsx("div",{className:d`
          font-size: 13px;
          font-weight: normal;
          color: ${t.colors.textLight};
          flex-shrink: 0;
        `,children:a>0?o.jsxs("span",{children:[a," ",a===1?"item":"items"," -"," ",l," selected"]}):o.jsxs("span",{children:[n," ",n===1?"item":"items"," -"," ",s]})})}),bo=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},i.createElement("g",{fill:"#263238"},i.createElement("path",{d:"M7.766 6.388c-.002 0-.07-.027-.081-.03.023.004-4.783.005-4.783.005v9.585h8.307v-6.45a.33.33 0 0 0 .06.135S7.754 6.38 7.766 6.388Zm4.496 2.171c.226.21.41.63.41.938v7.355c0 .308-.25.558-.559.558H2a.559.559 0 0 1-.56-.558V5.459A.56.56 0 0 1 2 4.901h5.749c.309 0 .742.17.969.379l3.545 3.28Z"}),i.createElement("path",{d:"M7.428 5.887V9.95h4.199V8.486H8.883V5.887H7.428Z"}),i.createElement("path",{d:"M5.328 5.452V1.135c0-.309.25-.559.559-.559h5.749c.309 0 .742.17.969.38l3.545 3.279c.226.21.41.63.41.938v7.354a.56.56 0 0 1-.559.56h-3.924v-1.463h3.02V5.173a.33.33 0 0 0 .06.135s-3.515-3.252-3.504-3.244L6.79 2.038v3.414H5.328Z"}),i.createElement("path",{d:"M11.317 1.57v4.057h4.344V4.165h-2.886V1.563l-1.458.007Z"}))),vo=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},i.createElement("g",{fill:"#676F73"},i.createElement("path",{d:"M7.766 6.388c-.002 0-.07-.027-.081-.03.023.004-4.783.005-4.783.005v9.585h8.307v-6.45a.33.33 0 0 0 .06.135S7.754 6.38 7.766 6.388Zm4.496 2.171c.226.21.41.63.41.938v7.355c0 .308-.25.558-.559.558H2a.559.559 0 0 1-.56-.558V5.459A.56.56 0 0 1 2 4.901h5.749c.309 0 .742.17.969.379l3.545 3.28Z"}),i.createElement("path",{d:"m7.408 5.887.02 4.062h4.2V8.486H8.883L8.87 5.887H7.408Z"}),i.createElement("path",{d:"M5.328 5.452V1.135c0-.309.25-.559.559-.559h5.749c.309 0 .742.17.969.38l3.545 3.279c.226.21.41.63.41.938v7.354a.56.56 0 0 1-.559.56h-3.924v-1.463h3.02V5.173a.33.33 0 0 0 .06.135s-3.515-3.252-3.504-3.244L6.79 2.038v3.414H5.328Z"}),i.createElement("path",{d:"m11.296 1.57.02 4.057h4.345V4.165h-2.886l-.017-2.602c-.001-.224-1.463-.217-1.462.007Z"}))),wo=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},i.createElement("path",{fill:"#263238",d:"m10.1 2.029.043.035a.547.547 0 0 0-.081-.03.465.465 0 0 0 .063.005H2.903V15.96h12.195V6.573a.54.54 0 0 0 .004.071.316.316 0 0 0 .055.065l-5.056-4.68Zm6.05 3.606c.227.21.41.63.41.938v10.292c0 .309-.25.559-.558.559H1.999a.559.559 0 0 1-.559-.559V1.135c0-.309.25-.559.56-.559h8.125c.309 0 .743.17.97.38l5.055 4.68Z"}),i.createElement("path",{fill:"#263238",d:"M9.758 1.714v5.39h6.245V5.64h-4.79V1.707l-1.455.007Z"}),i.createElement("path",{fill:"#71BA05",d:"M3.582 11.383h-.68v1.462h6.83v-1.462H3.581Z"}),i.createElement("path",{fill:"#71BA05",d:"M11.32 12.123 8.23 9.032a.731.731 0 1 0-1.034 1.034l2.057 2.056-2.057 2.058a.731.731 0 0 0 1.034 1.034l3.09-3.091Z"})),yo=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},i.createElement("g",{fill:"#676F73"},i.createElement("path",{d:"m10.1 2.029.043.035a.547.547 0 0 0-.081-.03.465.465 0 0 0 .063.005H2.903V15.96h12.195V6.573a.54.54 0 0 0 .004.071.316.316 0 0 0 .055.065l-5.056-4.68Zm6.05 3.606c.227.21.41.63.41.938v10.292c0 .309-.25.559-.558.559H1.999a.559.559 0 0 1-.559-.559V1.135c0-.309.25-.559.56-.559h8.125c.309 0 .743.17.97.38l5.055 4.68Z"}),i.createElement("path",{d:"M9.758 1.714v5.39h6.245V5.64h-4.79V1.707l-1.455.007Zm-6.176 9.669H2.85v1.462h6.881v-1.462h-6.15Z"}),i.createElement("path",{d:"M11.32 12.123 8.23 9.032a.731.731 0 1 0-1.034 1.034l2.057 2.056-2.057 2.058a.731.731 0 0 0 1.034 1.034l3.09-3.091Z"}))),jo=i.memo(({info:e,onInfoClick:t})=>{const r=k(),n=C(),s=E(),a=e.selectedFile!==void 0&&e.path!==void 0?e.selectedFile:void 0,l=i.useCallback(()=>{a!==void 0&&a.path!==void 0&&n.repoFilesRenameFile(a.repoId,a.path)},[n,a]);return o.jsxs(Xe,{children:[e.selectedFile!==void 0?o.jsx(I,{icon:o.jsx($e,{role:"img"}),iconHover:o.jsx(He,{role:"img"}),onClick:t,children:"Info"}):null,r&&a!==void 0?o.jsx(I,{icon:o.jsx(ve,{role:"img"}),iconHover:o.jsx(we,{role:"img"}),onClick:l,children:"Rename"}):null,e.canCopySelected?o.jsx(I,{icon:o.jsx(vo,{role:"img"}),iconHover:o.jsx(bo,{role:"img"}),onClick:()=>{n.repoFilesBrowsersMoveSelected(s,oe.Copy)},children:"Copy"}):null,e.canMoveSelected?o.jsx(I,{icon:o.jsx(yo,{role:"img"}),iconHover:o.jsx(wo,{role:"img"}),onClick:()=>{n.repoFilesBrowsersMoveSelected(s,oe.Move)},children:"Move"}):null,e.canDownloadSelected?o.jsx(I,{icon:o.jsx(Ye,{role:"img"}),iconHover:o.jsx(Je,{role:"img"}),onClick:()=>{et(n,s,r)},children:"Download"}):null,e.canDeleteSelected?o.jsx(I,{icon:o.jsx(tt,{role:"img"}),iconHover:o.jsx(rt,{role:"img"}),onClick:()=>{n.repoFilesBrowsersDeleteSelected(s)},children:"Delete"}):null,e.selectedFile!==void 0&&ot(e.selectedFile)?o.jsx(I,{as:B,to:ee(e.selectedFile.repoId,e.selectedFile.path,!0),icon:o.jsx(nt,{role:"img"}),iconHover:o.jsx(st,{role:"img"}),children:"Edit text"}):null,e.selectedCount>0?o.jsx(it,{onClick:()=>n.repoFilesBrowsersClearSelection(s)}):null]})}),Co=i.memo(({info:e,onInfoClick:t})=>{const r=k();return o.jsx("div",{className:v(d`
          display: flex;
        `,r?d`
              flex-direction: column;
              align-items: center;
            `:d`
              width: 100%;
              flex-direction: row;
              align-items: center;
              overflow: hidden;
            `),children:e!==void 0?o.jsxs("div",{className:v(d`
              flex-grow: 1;
              flex-shrink: 0;
              margin: 0;
              padding: 0;
              display: flex;
              align-items: center;
              position: relative;
            `,r?d``:d`
                  margin-right: 50px;
                `),children:[o.jsx(xo,{info:e}),o.jsx(jo,{info:e,onInfoClick:t})]}):null})}),Fo=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none",...e},i.createElement("path",{fill:"#71BA05",fillRule:"evenodd",d:"M3.52 0A3.526 3.526 0 0 0 0 3.52v24.96C0 30.42 1.58 32 3.52 32h24.96c1.94 0 3.52-1.58 3.52-3.52V3.52C32 1.58 30.42 0 28.48 0H3.52Zm0 1.26h24.96a2.24 2.24 0 0 1 2.26 2.26v24.96a2.24 2.24 0 0 1-2.26 2.26H3.52a2.24 2.24 0 0 1-2.26-2.26V3.52a2.24 2.24 0 0 1 2.26-2.26Zm12.75 9.784a.72.72 0 0 0-.459.169L10 16.078l5.811 4.866a.724.724 0 1 0 .93-1.113l-3.81-3.188H22a.655.655 0 1 0 0-1.312h-8.864l3.604-3.006a.725.725 0 0 0-.47-1.28Z",clipRule:"evenodd"})),ko=i.memo(({to:e})=>o.jsx(B,{to:e,className:d`
        display: flex;
        align-items: center;
      `,"aria-label":"Back",children:o.jsx(Fo,{role:"img"})})),Do=i.memo(()=>{const e=k(),t=E(),[r]=S((n,s)=>n.repoFilesBrowsersBreadcrumbsSubscribe(t,s),n=>n.repoFilesBrowsersBreadcrumbsData,[t]);if(e&&r.length>1){const n=r[r.length-2],s=L(n.repoId,n.path);return o.jsx(ko,{to:s})}else return o.jsx(Ct,{})});function Mo(e,t,r){const n=C(),s=i.useMemo(()=>n.repoFilesBrowsersCreate(e,t,{selectName:r!==""?r:void 0}),[n]);i.useEffect(()=>()=>{n.repoFilesBrowsersDestroy(s)},[n,s]);const a=i.useRef(0);return i.useEffect(()=>{a.current>0&&n.repoFilesBrowsersSetLocation(s,e,t),a.current+=1},[n,s,e,t]),s}const X="vaultRepoFileInfoSheetVisible";function To(){try{if(localStorage.getItem(X)==="true")return!0}catch{}return!1}function le(e){try{e?localStorage.setItem(X,"true"):localStorage.removeItem(X)}catch{}}function Eo(e){const t=k(),[r,n]=i.useState(To),s=r&&!t,a=Oe(),l=a.show,u=e==null?void 0:e.selectedFile,c=i.useCallback(()=>{t?u!==void 0&&l(u):n(p=>{const f=!p;return le(f),f})},[t,l,u]),h=i.useCallback(()=>{n(!1),le(!1)},[]);return{onInfoClick:c,infoSheetVisible:s,infoSheetHide:h,infoModal:a}}function Io(e,t){const r=ce(),[n]=de();let s=n.get("name")??void 0;return s===""&&(s=void 0),i.useEffect(()=>{s!==void 0&&r(L(e,t),{replace:!0})},[r,e,t,s]),s}const So=i.memo(({repo:e})=>{const t=k(),r=e.id,[n]=de(),s=n.get("path")??void 0,a=Io(r,s),l=Mo(r,s??"/",a),[u]=S((w,g)=>w.repoFilesBrowsersInfoSubscribe(l,g),w=>w.repoFilesBrowsersInfoData,[l]),[c]=S((w,g)=>w.repoFilesBrowsersBreadcrumbsSubscribe(l,g),w=>w.repoFilesBrowsersBreadcrumbsData,[l]),h=i.useMemo(()=>c.map(w=>w.name).join(" › "),[c]);Ve(h);const{onInfoClick:p,infoSheetVisible:f,infoSheetHide:m,infoModal:x}=Eo(u),y=i.useMemo(()=>({}),[]);return o.jsx(Fe.Provider,{value:l,children:o.jsx(De.Provider,{value:y,children:o.jsxs(Be,{navbarLeft:o.jsx(Do,{}),navbarHeader:o.jsx(Xt,{}),navbarNav:o.jsx(go,{}),navbarExtra:o.jsx(Co,{info:u,onInfoClick:p}),className:t?d`
                  padding-top: 0;
                `:d`
                  padding-top: 10px;
                `,sidenavClassName:t?d``:d`
                  margin-top: -50px;
                `,children:[u!==void 0?o.jsx(Xr,{info:u}):null,o.jsx(oo,{}),o.jsx(to,{}),o.jsx(yr,{}),o.jsx(Qt,{file:f?u==null?void 0:u.selectedFile:void 0,hide:m}),o.jsx(Kt,{file:x.payload,hide:x.hide})]})})})}),Yo=i.memo(()=>{const t=Ne().repoId;return t===void 0?null:o.jsx(at,{repoId:t,component:So})});export{Yo as RepoFilesPage};

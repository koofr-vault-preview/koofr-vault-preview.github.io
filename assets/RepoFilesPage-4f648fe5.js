var Ie=Object.defineProperty;var Se=(e,t,r)=>t in e?Ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var N=(e,t,r)=>(Se(e,typeof t!="symbol"?t+"":t,r),r);import{g as Q,r as i,u as y,j as o,b as d,d as b,a as k,F as Re}from"./DynamicThemeProvider-71c37830.js";import{L as O,u as ce,d as de,b as Ne}from"./index-6ac7cbed.js";import{S as $e,a as He,u as Oe,D as Pe}from"./DashboardLayout-bca3cc10.js";import{D as Ve}from"./DashboardLoading-73be0481.js";import{u as Be}from"./useDocumentTitle-2cb3b118.js";import{j as P,D as Le,F as ue,M as pe,b as he,c as me,d as fe,f as ge,g as q,h as xe,k as Ae,l as ze,a as j,_ as We,m as Ze,n as _e,o as Ue,u as X,R as Z,p as qe,e as Ge,q as oe}from"./mainAuthenticated-b8ffc429.js";import{S as ve,n as V,o as Ke,k as Qe,q as Xe,r as Y,c as be,d as we,s as Ye,T as E,i as Je,j as et,t as tt,l as rt,m as ot,u as nt,g as st,h as it,v as lt,R as at}from"./browser-12e579f7.js";import{f as J}from"./index-8c64d985.js";import{u as ct}from"./NavbarSticky-315264f4.js";import{N as dt,M as B,a as ut,b as pt,c as ht,d as mt,e as ft,f as gt}from"./DashboardNavbar-1dfe0e24.js";import{E as xt}from"./DashboardError-90f33415.js";import{i as ye,t as vt,r as bt}from"./range-13dd74cf.js";import{n as D,b as ee,d as H,B as wt,e as yt,f as jt}from"./Button-d7c59dae.js";import{C as je}from"./Checkbox-d081d1a7.js";import{D as Ct}from"./DirPicker-05f3cf46.js";import{a as Ft}from"./Navbar-47732754.js";import"./GitRevision-87d517fc.js";import"./index-4a786a98.js";import"./RepoUnlockForm-4318147d.js";import"./PasswordInput-ea80222e.js";import"./error-icon@2x-ffa05ea5.js";var kt=function e(t,r){if(t===r)return!0;if(t&&r&&typeof t=="object"&&typeof r=="object"){if(t.constructor!==r.constructor)return!1;var n,s,l;if(Array.isArray(t)){if(n=t.length,n!=r.length)return!1;for(s=n;s--!==0;)if(!e(t[s],r[s]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if(l=Object.keys(t),n=l.length,n!==Object.keys(r).length)return!1;for(s=n;s--!==0;)if(!Object.prototype.hasOwnProperty.call(r,l[s]))return!1;for(s=n;s--!==0;){var a=l[s];if(!e(t[a],r[a]))return!1}return!0}return t!==t&&r!==r};const Dt=Q(kt),L=typeof window<"u"?i.useLayoutEffect:i.useEffect;function Mt(e,t,r){const[n,s]=i.useState(()=>t(e)),l=i.useCallback(()=>{const a=t(e);Dt(n,a)||(s(a),r&&r())},[n,e,r]);return L(l),[n,l]}function Tt(e,t,r){const[n,s]=Mt(e,t,r);return L(function(){const a=e.getHandlerId();if(a!=null)return e.subscribeToStateChange(s,{handlerIds:[a]})},[e,s]),n}function Et(e,t,r){return Tt(t,e||(()=>({})),()=>r.reconnect())}function It(e,t){const r=[...t||[]];return t==null&&typeof e!="function"&&r.push(e),i.useMemo(()=>typeof e=="function"?e():e,r)}let _=!1;class St{receiveHandlerId(t){this.targetId=t}getHandlerId(){return this.targetId}subscribeToStateChange(t,r){return this.internalMonitor.subscribeToStateChange(t,r)}canDrop(){if(!this.targetId)return!1;P(!_,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return _=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{_=!1}}isOver(t){return this.targetId?this.internalMonitor.isOverTarget(this.targetId,t):!1}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(t){this.targetId=null,this.internalMonitor=t.getMonitor()}}function Rt(e,t,r){const n=r.getRegistry(),s=n.addTarget(e,t);return[s,()=>n.removeTarget(s)]}function Nt(e,t,r,n){let s=r?r.call(n,e,t):void 0;if(s!==void 0)return!!s;if(e===t)return!0;if(typeof e!="object"||!e||typeof t!="object"||!t)return!1;const l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;const u=Object.prototype.hasOwnProperty.bind(t);for(let c=0;c<l.length;c++){const h=l[c];if(!u(h))return!1;const p=e[h],f=t[h];if(s=r?r.call(n,p,f,h):void 0,s===!1||s===void 0&&p!==f)return!1}return!0}function $t(e){return e!==null&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Ht(e){if(typeof e.type=="string")return;const t=e.type.displayName||e.type.name||"the component";throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${t} into a <div>, or turn it into a drag source or a drop target itself.`)}function Ot(e){return(t=null,r=null)=>{if(!i.isValidElement(t)){const l=t;return e(l,r),l}const n=t;return Ht(n),Vt(n,r?l=>e(l,r):e)}}function Pt(e){const t={};return Object.keys(e).forEach(r=>{const n=e[r];if(r.endsWith("Ref"))t[r]=e[r];else{const s=Ot(n);t[r]=()=>s}}),t}function ne(e,t){typeof e=="function"?e(t):e.current=t}function Vt(e,t){const r=e.ref;return P(typeof r!="string","Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"),r?i.cloneElement(e,{ref:n=>{ne(r,n),ne(t,n)}}):i.cloneElement(e,{ref:t})}class Bt{get connectTarget(){return this.dropTarget}reconnect(){const t=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();t&&this.disconnectDropTarget();const r=this.dropTarget;if(this.handlerId){if(!r){this.lastConnectedDropTarget=r;return}t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=r,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,r,this.dropTargetOptions))}}receiveHandlerId(t){t!==this.handlerId&&(this.handlerId=t,this.reconnect())}get dropTargetOptions(){return this.dropTargetOptionsInternal}set dropTargetOptions(t){this.dropTargetOptionsInternal=t}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didDropTargetChange(){return this.lastConnectedDropTarget!==this.dropTarget}didOptionsChange(){return!Nt(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}disconnectDropTarget(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}get dropTarget(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}clearDropTarget(){this.dropTargetRef=null,this.dropTargetNode=null}constructor(t){this.hooks=Pt({dropTarget:(r,n)=>{this.clearDropTarget(),this.dropTargetOptions=n,$t(r)?this.dropTargetRef=r:this.dropTargetNode=r,this.reconnect()}}),this.handlerId=null,this.dropTargetRef=null,this.dropTargetOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDropTarget=null,this.lastConnectedDropTargetOptions=null,this.backend=t}}function te(){const{dragDropManager:e}=i.useContext(Le);return P(e!=null,"Expected drag drop context"),e}function Lt(e){return i.useMemo(()=>e.hooks.dropTarget(),[e])}function At(e){const t=te(),r=i.useMemo(()=>new Bt(t.getBackend()),[t]);return L(()=>(r.dropTargetOptions=e||null,r.reconnect(),()=>r.disconnectDropTarget()),[e]),r}function zt(){const e=te();return i.useMemo(()=>new St(e),[e])}function Wt(e){const{accept:t}=e;return i.useMemo(()=>(P(e.accept!=null,"accept must be defined"),Array.isArray(t)?t:[t]),[t])}class Zt{canDrop(){const t=this.spec,r=this.monitor;return t.canDrop?t.canDrop(r.getItem(),r):!0}hover(){const t=this.spec,r=this.monitor;t.hover&&t.hover(r.getItem(),r)}drop(){const t=this.spec,r=this.monitor;if(t.drop)return t.drop(r.getItem(),r)}constructor(t,r){this.spec=t,this.monitor=r}}function _t(e,t){const r=i.useMemo(()=>new Zt(e,t),[t]);return i.useEffect(()=>{r.spec=e},[e]),r}function Ut(e,t,r){const n=te(),s=_t(e,t),l=Wt(e);L(function(){const[u,c]=Rt(l,s,n);return t.receiveHandlerId(u),r.receiveHandlerId(u),c},[n,t,s,r,l.map(a=>a.toString()).join("|")])}function qt(e,t){const r=It(e,t),n=zt(),s=At(r.options);return Ut(r,n,s),[Et(r.collect,n,s),Lt(s)]}const F=i.memo(({label:e,children:t})=>{const r=y();return o.jsxs("div",{className:d`
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
          `,children:t})]})}),Ce=i.memo(({file:e})=>{const t=y();return o.jsxs("div",{className:d`
        display: flex;
        flex-direction: column;
      `,children:[o.jsx(F,{label:"Name",children:e.nameError===void 0?o.jsx(o.Fragment,{children:e.name}):o.jsxs("div",{className:d`
              color: ${t.colors.destructive};
            `,children:[o.jsx("p",{children:e.name}),o.jsx("p",{children:e.nameError})]})}),o.jsx(F,{label:"Type",children:Gt(e.category)}),e.sizeDisplay!==""?o.jsx(F,{label:"Size",children:e.sizeDisplay}):null,e.modified!==void 0?o.jsxs(F,{label:"Modified",children:[o.jsx(ve,{value:e.modified,noTooltip:!0}),o.jsx("br",{}),J(e.modified,"PPPPpp")]}):null,o.jsx(F,{label:"Path",children:e.decryptedPath??"???"}),o.jsx(F,{label:"Encrypted path",children:e.encryptedPath}),e.type==="File"?o.jsxs(o.Fragment,{children:[o.jsx(F,{label:"MD5",children:e.tags.hash??"???"}),o.jsx(F,{label:"Encrypted MD5",children:e.remoteHash??"???"})]}):null,e.tags.error!==void 0?o.jsx(F,{label:"Tags error",children:o.jsx("span",{className:d`
              color: ${t.colors.destructive};
            `,children:e.tags.error})}):null]})});function Gt(e){switch(e){case"Generic":return"File";case"Folder":return"Folder";case"Archive":return"Archive";case"Audio":return"Audio";case"Code":return"Code";case"Document":return"Document";case"Image":return"Image";case"Pdf":return"PDF";case"Presentation":return"Presentation";case"Sheet":return"Spreadsheet";case"Text":return"Text";case"Video":return"Video"}}const Fe=i.memo(({file:e})=>o.jsx("div",{className:d`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        overflow-x: hidden;
      `,children:o.jsx("div",{className:d`
          margin: 25px 25px 50px;
        `,children:o.jsx(ue,{size:"Lg",attrs:e.fileIconAttrs})})})),Kt=i.memo(({file:e,hide:t})=>o.jsxs(o.Fragment,{children:[o.jsx(pe,{children:o.jsx(he,{children:"Info"})}),o.jsxs(me,{children:[o.jsx(Ce,{file:e}),o.jsx(Fe,{file:e})]}),o.jsx(fe,{children:o.jsx(ge,{children:o.jsx(q,{variant:"primary",onClick:t,children:"Close"})})})]})),Qt=i.memo(({file:e,hide:t})=>o.jsx(xe,{show:e!==void 0,onHide:t,children:e!==void 0?o.jsx(Kt,{file:e,hide:t}):o.jsx(o.Fragment,{})})),Xt=i.memo(({file:e,hide:t})=>{const r=y(),n=e!==void 0,s=ct();return o.jsx("div",{className:b(d`
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
              `,children:o.jsx(Ae.Provider,{value:t,children:o.jsx(ze,{})})})]}),o.jsx("div",{className:d`
              display: flex;
              flex-direction: column;
              flex-grow: 1;
              padding: 20px 25px 0;
              overflow-x: hidden;
            `,children:o.jsx(Ce,{file:e})}),o.jsx(Fe,{file:e})]}):null})}),ke=i.createContext(void 0);function I(){return i.useContext(ke)}const Yt=i.memo(({breadcrumbs:e})=>{const t=k(),r=j(),n=I(),s=i.useMemo(()=>t?e.slice(e.length-1):e,[e,t]),l=i.useMemo(()=>s.map((u,c)=>({id:u.id,name:u.name,link:V(u.repoId,u.path),isClickable:!0,hasCaret:!1,isLast:c===s.length-1})),[s]),a=i.useCallback((u,c)=>{c.isLast&&r.repoFilesBrowsersLoadFiles(n)},[r,n]);return o.jsx(dt,{breadcrumbs:l,onClick:a})}),Jt="/assets/empty-folder@2x-ac89faae.png";var er=We,tr=function(){return er.Date.now()},rr=tr,or=ye,U=rr,se=vt,nr="Expected a function",sr=Math.max,ir=Math.min;function lr(e,t,r){var n,s,l,a,u,c,h=0,p=!1,f=!1,m=!0;if(typeof e!="function")throw new TypeError(nr);t=se(t)||0,or(r)&&(p=!!r.leading,f="maxWait"in r,l=f?sr(se(r.maxWait)||0,t):l,m="trailing"in r?!!r.trailing:m);function v(x){var T=n,R=s;return n=s=void 0,h=x,a=e.apply(R,T),a}function w(x){return h=x,u=setTimeout(C,t),p?v(x):a}function S(x){var T=x-c,R=x-h,re=t-T;return f?ir(re,l-R):re}function g(x){var T=x-c,R=x-h;return c===void 0||T>=t||T<0||f&&R>=l}function C(){var x=U();if(g(x))return $(x);u=setTimeout(C,S(x))}function $(x){return u=void 0,m&&n?v(x):(n=s=void 0,a)}function M(){u!==void 0&&clearTimeout(u),h=0,n=c=s=u=void 0}function z(){return u===void 0?a:$(U())}function W(){var x=U(),T=g(x);if(n=arguments,s=this,c=x,T){if(u===void 0)return w(c);if(f)return clearTimeout(u),u=setTimeout(C,t),v(c)}return u===void 0&&(u=setTimeout(C,t)),a}return W.cancel=M,W.flush=z,W}var ar=lr,cr=ar,dr=ye,ur="Expected a function";function pr(e,t,r){var n=!0,s=!0;if(typeof e!="function")throw new TypeError(ur);return dr(r)&&(n="leading"in r?!!r.leading:n,s="trailing"in r?!!r.trailing:s),cr(e,t,{leading:n,maxWait:t,trailing:s})}var hr=pr;const mr=Q(hr);function fr(e){return e.isDirectory}function gr(e){return new Promise((t,r)=>{const n=e.createReader();let s=[];const l=()=>{n.readEntries(a=>{a.length===0?t(s):(s=s.concat(Array.from(a)),setTimeout(l,10))},r)};l()})}function xr(e){return new Promise((t,r)=>e.file(t,r))}function vr(e){const t=l=>{const a=(u,c)=>{u(l)};return{isDirectory:!1,isFile:!0,name:l.name,file:a}},r=(l,a)=>({name:l,isFile:!1,isDirectory:!0,createReader:()=>{let c=!1;return{readEntries:(p,f)=>{c?p([]):(c=!0,p(a))}}}}),n={name:"",isDirectory:!0,file:void 0,children:new Map};e.forEach(l=>{const a=l.webkitRelativePath.split("/"),u=a.slice(0,a.length-1);let c=n;u.forEach(h=>{let p=c.children.get(h);p===void 0&&(p={name:h,isDirectory:!0,file:void 0,children:new Map},c.children.set(h,p)),c=p}),c.children.set(l.name,{name:l.name,isDirectory:!1,file:l,children:void 0})});const s=l=>{if(l.isDirectory){const a=Array.from(l.children.values()).map(s);return r(l.name,a)}return t(l.file)};return Array.from(n.children.values()).map(s)}function ie(e){return String.prototype.normalize?e.normalize().split("").filter(n=>n>=" "&&!(n>=""&&n<="")).join(""):e}function br(e,t){return e+(/\/$/.test(e)?"":"/")+(t[0]!=="/"?t:t.slice(1))}class wr{constructor(t){N(this,"upload");N(this,"queue",[]);N(this,"processQueue",()=>{if(this.queue.length===0)return;const t=this.queue.slice();this.queue.length=0;const r=t.map(n=>n.entry);this.uploadFileEntries(r).forEach((n,s)=>{n.then(t[s].resolve,t[s].reject)})});N(this,"processQueueThrottled",mr(this.processQueue,100));this.upload=t.upload}uploadFileEntries(t){return t.length===0?[]:this.upload(t)}getFileName(t){let r=ie(t.name);if(r==="image.jpeg"||r==="image.jpg"||r==="image.png"){const n=J(new Date,"yyyyMMdd_hhmmssSSS"),s=r.split(".").pop();r=`image_${n}.${s}`}return r}addEntry(t){return new Promise((r,n)=>{if(t.name===".DS_Store"){r();return}this.queue.push({entry:t,resolve:r,reject:n}),this.processQueueThrottled()})}async handleEntryDir(t,r){const n=ie(t.name),s=br(r,n);await yr(30);const l=await gr(t);return await Promise.all(l.map(a=>this.handleEntry(a,s).then(()=>{}))),s}async handleEntryFile(t,r){const n=await xr(t),s={parentPath:r,name:this.getFileName(n),file:n};await this.addEntry(s)}async handleEntry(t,r){fr(t)?await this.handleEntryDir(t,r):await this.handleEntryFile(t,r)}uploadDataTransferItems(t){return t.filter(r=>r.webkitGetAsEntry!=null).map(r=>r.webkitGetAsEntry()).filter(r=>r!=null).map(r=>this.handleEntry(r,"/"))}uploadWebkitFilesAsEntries(t){return vr(t).map(r=>this.handleEntry(r,"/"))}uploadNativeFiles(t){return this.uploadFileEntries(t.map(r=>({parentPath:"/",name:this.getFileName(r),file:r})))}uploadFiles(t){if(t.length>0){const r=t[0];if(r.webkitGetAsEntry!=null)return r.webkitGetAsEntry()!=null?this.uploadDataTransferItems(t):[];if(r.webkitRelativePath!=null)return this.uploadWebkitFilesAsEntries(t)}return this.uploadNativeFiles(t)}}const yr=e=>new Promise(t=>setTimeout(t,e));function De(){const e=j(),t=I();return i.useCallback(n=>{const{repoId:s,encryptedPath:l}=e.repoFilesBrowsersInfo(t);return s===void 0||l===void 0?[]:new wr({upload(u){return u.map(async c=>{const h=c.parentPath==="/"?c.name:c.parentPath.slice(1)+"/"+c.name;await e.transfersUpload(s,l,h,c.file)})}}).uploadFiles(n)},[e,t])}const Me=i.createContext(void 0);function A(){return i.useContext(Me)}const jr=i.memo(()=>{const e=De(),t=i.useRef(null),r=A(),n=i.useCallback(a=>{a===null?r.uploadFile=void 0:r.uploadFile=()=>a.click()},[r]),s=i.useCallback(a=>{a===null?r.uploadDir=void 0:r.uploadDir=()=>a.click()},[r]),l=i.useCallback(async a=>{if(a.currentTarget.files!==null){const u=Array.from(a.currentTarget.files);Promise.all(e(u))}t.current!==null&&t.current.reset()},[e]);return o.jsxs("form",{ref:t,style:{display:"none"},children:[o.jsx("input",{type:"file",ref:n,onChange:l,"aria-label":"Upload file"}),o.jsx("input",{type:"file",ref:s,onChange:l,"aria-label":"Upload folder",webkitdirectory:"",mozdirectory:"",directory:""})]})}),Cr=i.memo(()=>{const e=y(),t=A();return o.jsxs("div",{className:d`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 80px 0 0;
      `,children:[o.jsx("img",{src:Jt,alt:"",className:d`
          display: block;
          width: 252px;
          height: 186px;
          cursor: pointer;
        `,onClick:()=>{var r;(r=t.uploadFile)==null||r.call(t)}}),o.jsx("h3",{className:d`
          font-size: 14px;
          color: ${e.colors.text};
          font-weight: 600;
          margin: 0 0 20px;
        `,children:"This folder is empty."})]})});function Fr(e){return e(Re)}function kr(){const[e,t]=i.useState(null),[r,n]=i.useState({width:0,height:0}),s=i.useCallback(()=>{n({width:(e==null?void 0:e.offsetWidth)||0,height:(e==null?void 0:e.offsetHeight)||0})},[e==null?void 0:e.offsetHeight,e==null?void 0:e.offsetWidth]);return i.useEffect(()=>(window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}),[s]),i.useLayoutEffect(()=>{s()},[e==null?void 0:e.offsetHeight,e==null?void 0:e.offsetWidth]),[t,r]}var Dr=Ze,Mr=_e,Tr=Ue,Er="[object String]";function Ir(e){return typeof e=="string"||!Mr(e)&&Tr(e)&&Dr(e)==Er}var Sr=Ir;const Rr=Q(Sr);function Nr(e,t){let r=0,n=0,s=0;const l=t.map((c,h)=>{const p={type:0,width:void 0,relWidth:void 0,minWidth:c.minWidth};if(c.width===void 0)n+=1;else if(Rr(c.width)){if(c.width[c.width.length-1]!=="%")throw new Error(`Column width must be a number or percentage: ${c.width}`);const f=parseInt(c.width.slice(0,c.width.length-1),10)/100;s+=f,p.type=2,p.relWidth=f}else{if(c.minWidth!==void 0)throw new Error(`Column cannot have both width number and minWidth: ${c.width}, ${c.minWidth}`);p.type=1,p.width=c.width,r+=p.width}return p});if(s>1)throw new Error("Columns relative widths cannot be more than 100%");if(n>0){if(s===1)throw new Error("Columns relative widths cannot equal 100% if there are unknown widths");const c=(1-s)/n;l.forEach(h=>{h.type===0&&(h.type=2,h.relWidth=c)})}else l.forEach(c=>{c.type===2&&(c.relWidth=c.relWidth/s)});const a=Math.max(e-r,0);let u=a;return l.forEach(c=>{if(c.type===2&&c.minWidth!==void 0){const h=Math.min(Math.max(a*c.relWidth,c.minWidth),u);u-=h,c.type=1,c.width=h}}),l.forEach(c=>{if(c.type===2){const h=Math.min(Math.max(a*c.relWidth,0),u);u-=h,c.type=1,c.width=h}}),l.map(c=>c.width)}const $r=e=>{switch(e){case void 0:return;case"Asc":return"ascending";case"Desc":return"descending";case"Hidden":return"none"}},G=D.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
  align-items: center;
  padding-left: 10px;
  flex-grow: 0;
  flex-shrink: 0;
`,Te=D(G)`
  font-size: 13px;
  font-weight: normal;
  color: ${({theme:e})=>e.colors.textLight};
  vertical-align: middle;
`,Hr=D(Te)`
  align-items: center;
  justify-content: center;
  display: flex;
`,Or=D.button`
  ${ee}
  color: ${({theme:e})=>e.colors.textLight};
  cursor: pointer;
  padding-right: 15px;

  ${({sortBy:e,theme:t})=>e==="Asc"||e==="Desc"?Fr(r=>r`
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
`,Pr=D.div`
  display: flex;
  align-items: center;
  height: 33px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  position: relative;
`,Vr=D.div``,Br=i.memo(({index:e,isSelected:t,isFirstSelected:r,hasHover:n,isDropOver:s,height:l,ariaLabel:a,onClick:u,onContextMenu:c,children:h})=>{const p=y();return o.jsx("div",{className:b(d`
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
              `:void 0),style:{height:`${l+1}px`},onClick:u,onContextMenu:c,role:"row","aria-rowindex":e,"aria-label":a,"aria-selected":t,children:h})}),Lr=D.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;
  height: 47px;
`,Ar=D.div`
  user-select: none;
  padding: 0 2px 3px;
`,Ee=i.createContext(void 0),zr=i.memo(({columns:e,selectionSummary:t,length:r,data:n,Row:s,ariaLabel:l,onHeadCheckboxClick:a,onSortByClick:u,onRowCheckboxClick:c,onRowClick:h,onRowContextMenu:p})=>{const[f,{width:m}]=kr(),v=i.useMemo(()=>{if(m===0)return[];const g=m-6,C=[{name:"checkbox",label:"",width:42},...e],$=Nr(g,C.map(M=>({width:M.width,minWidth:M.minWidth})));return C.map((M,z)=>({name:M.name,label:M.label,width:$[z],sortBy:M.sortBy}))},[e,m]),w=i.useMemo(()=>({columns:v,onRowCheckboxClick:c,onRowClick:h,onRowContextMenu:p}),[v,c,h,p]),S=i.useMemo(()=>bt(0,r),[r]);return o.jsx(Ar,{ref:f,role:"grid","aria-label":l,"aria-rowcount":r,children:v.length>0?o.jsxs(Ee.Provider,{value:w,children:[o.jsx("div",{role:"rowgroup",children:o.jsx(Pr,{role:"row",children:v.map(g=>g.name==="checkbox"?o.jsx(Hr,{style:{minWidth:`${g.width}px`},role:"columnheader",children:o.jsx(je,{value:t==="None"?"unchecked":t==="Partial"?"indeterminate":"checked",onClick:a})},g.name):o.jsx(Te,{style:{minWidth:`${g.width}px`},role:"columnheader","aria-sort":$r(g.sortBy),children:g.sortBy!==void 0?o.jsx(Or,{sortBy:g.sortBy,onClick:C=>{u!==void 0&&u(C,g.name)},children:g.label}):g.label},g.name))})}),o.jsx(Vr,{role:"rowgroup",children:S.map(g=>o.jsx(s,{index:g,data:n},g))})]}):null})}),Wr=i.memo(({index:e,row:t,isSelected:r,isFirstSelected:n,ariaLabel:s})=>{const{columns:l,onRowCheckboxClick:a,onRowClick:u,onRowContextMenu:c}=i.useContext(Ee),h=i.useCallback(m=>{a(m,e)},[a,e]),p=i.useCallback(m=>{u(m,e)},[u,e]),f=i.useCallback(m=>{c(m,e)},[c,e]);return o.jsx(Br,{index:e,isSelected:r,isFirstSelected:n,hasHover:!0,isDropOver:!1,height:48,ariaLabel:s,onClick:p,onContextMenu:f,children:o.jsx(Lr,{children:l.map(m=>m.name==="checkbox"?o.jsx(G,{style:{width:`${m.width}px`},role:"cell",children:o.jsx(je,{value:r?"checked":"unchecked",onClick:h})},m.name):o.jsx(G,{style:{width:`${m.width}px`},role:"cell",children:t[m.name]},m.name))})},e)}),Zr=e=>Ke?e.metaKey:e.ctrlKey,le=e=>e.shiftKey,_r=i.memo(({file:e})=>{const t=k(),r=y(),n=j(),s=i.useCallback(()=>{Qe(n,e.repoId,e.encryptedPath,t)},[n,e,t]),l=i.useCallback(()=>{n.repoFilesRenameFile(e.repoId,e.encryptedPath)},[n,e]);return o.jsxs("div",{className:d`
        display: flex;
        flex-direction: row;
        align-items: center;
      `,children:[o.jsx("span",{className:d`
          margin-right: 15px;
        `,children:o.jsx(ue,{size:"Sm",attrs:e.fileIconAttrs})}),o.jsxs("span",{className:b(d`
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          `,e.nameError!==void 0&&d`
              color: ${r.colors.destructive};
            `),children:[e.type==="Dir"?o.jsx(O,{to:V(e.repoId,e.encryptedPath),className:d`
              font-weight: 600;

              ${H} {
                color: ${r.colors.text};
              }
            `,children:e.name}):Xe(e)?o.jsx(O,{to:Y(e.repoId,e.encryptedPath),className:d`
              ${H} {
                color: ${r.colors.text};
              }
            `,children:e.name}):o.jsx("a",{href:".",onClick:a=>{a.preventDefault(),a.stopPropagation(),s()},className:d`
              ${H} {
                color: ${r.colors.text};
              }
            `,children:e.name}),e.nameError!==void 0?" (ERROR)":null]}),t?null:o.jsxs("button",{className:d`
            ${ee}
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
          `,onClick:a=>{a.stopPropagation(),l()},"aria-label":"Rename",children:[o.jsx(be,{className:d`
              button:hover > & {
                display: none;
              }
            `,role:"img"}),o.jsx(we,{className:d`
              display: none;

              button:hover > & {
                display: inline;
              }
            `,role:"img"})]})]})}),Ur=i.memo(({file:e})=>o.jsx("span",{className:d`
        font-size: 12px;
      `,children:e.sizeDisplay})),qr=i.memo(({file:e})=>e.modified===void 0?null:o.jsx("span",{className:d`
        font-size: 12px;
      `,children:o.jsx(ve,{value:e.modified})})),Gr=i.memo(({index:e,data:t})=>{const r=i.useMemo(()=>t.items[e],[t,e]),[n]=X((u,c)=>u.repoFilesFileSubscribe(r.fileId,c),u=>u.repoFilesFileData,[r.fileId]),s=r.isSelected,l=s&&(e===0||!t.items[e-1].isSelected),a=i.useMemo(()=>{if(n!==void 0)return{name:o.jsx(_r,{file:n}),size:o.jsx(Ur,{file:n}),modified:o.jsx(qr,{file:n})}},[n]);return a===void 0?null:o.jsx(Wr,{index:e,row:a,isSelected:s,isFirstSelected:l,ariaLabel:n!==void 0?n.type==="Dir"?`Folder ${n.name}`:`File ${n.name}`:void 0},r.fileId)}),Kr=i.memo(({info:e})=>{const t=k(),r=j(),n=I(),s=e.items,l=i.useMemo(()=>({items:s}),[s]),a=e.sort,u=i.useMemo(()=>[{name:"name",label:"Name",sortBy:a.field==="Name"?a.direction:"Hidden"},{name:"size",label:"Size",width:t?0:"15%",minWidth:t?void 0:70,sortBy:a.field==="Size"?a.direction:"Hidden"},{name:"modified",label:"Modified",width:t?0:"20%",minWidth:t?void 0:150,sortBy:a.field==="Modified"?a.direction:"Hidden"}],[t,a]),c=i.useCallback(()=>{e.selectionSummary==="All"?r.repoFilesBrowsersClearSelection(n):r.repoFilesBrowsersSelectAll(n)},[r,n,e]),h=i.useCallback((v,w)=>{switch(w){case"name":r.repoFilesBrowsersSortBy(n,Z.Name);break;case"size":r.repoFilesBrowsersSortBy(n,Z.Size);break;case"modified":r.repoFilesBrowsersSortBy(n,Z.Modified);break}},[r,n]),p=i.useCallback((v,w)=>{v.stopPropagation(),r.repoFilesBrowsersSelectFile(n,s[w].fileId,!0,le(v),!1)},[r,n,s]),f=i.useCallback((v,w)=>{r.repoFilesBrowsersSelectFile(n,s[w].fileId,Zr(v),le(v),!1)},[r,n,s]),m=i.useCallback((v,w)=>{},[]);return o.jsx(zr,{columns:u,selectionSummary:e.selectionSummary,length:s.length,data:l,Row:Gr,ariaLabel:"Files list",onHeadCheckboxClick:c,onSortByClick:h,onRowCheckboxClick:p,onRowClick:f,onRowContextMenu:m})}),Qr=i.memo(({info:e})=>{const t=j(),r=I();return o.jsx(o.Fragment,{children:e.status.type==="Error"&&!e.status.loaded?o.jsx(xt,{error:e.status.error,onRetry:()=>{t.repoFilesBrowsersLoadFiles(r)}}):e.status.type==="Loaded"&&e.totalCount===0?o.jsx(Cr,{}):o.jsx(Kr,{info:e})})}),Xr=i.memo(i.forwardRef(({isActive:e,isAllowed:t,isOver:r},n)=>{const s=y(),l=b(d`
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
          `,children:[o.jsx("div",{className:b(l,d`
                top: 0;
                left: 5px;
                right: 0;
                height: 5px;
              `)}),o.jsx("div",{className:b(l,d`
                top: 5px;
                bottom: 0;
                right: 0;
                width: 5px;
              `)}),o.jsx("div",{className:b(l,d`
                bottom: 0;
                left: 0;
                right: 5px;
                height: 5px;
              `)}),o.jsx("div",{className:b(l,d`
                top: 0;
                bottom: 5px;
                left: 0;
                width: 5px;
              `)})]})}));function Yr(){const e=document.activeElement,t=["input","select","button","textarea"];return e!=null&&t.indexOf(e.tagName.toLowerCase())!==-1}function Jr(e){const t=i.useCallback(r=>{if(Yr()||r.clipboardData==null||r.clipboardData.items==null&&r.clipboardData.files==null)return;const n=r.clipboardData.files!=null?Array.from(r.clipboardData.files):Array.from(r.clipboardData.items).filter(s=>s.kind==="file");Promise.all(e(n))},[e]);i.useEffect(()=>(window.addEventListener("paste",t),()=>window.removeEventListener("paste",t)),[t])}const eo=i.memo(()=>{const t=De(),[{canDrop:r,isOver:n},s]=qt(()=>({accept:[qe],collect:l=>({canDrop:l.canDrop(),isOver:l.isOver({shallow:!0})}),drop:(l,a)=>{if(a.didDrop())return;const u=l.items!=null?Array.from(l.items):Array.from(l.files);Promise.all(t(u))}}),[t]);return i.useEffect(()=>{s(document.body)},[s]),Jr(t),o.jsx(Xr,{isActive:r,isOver:n,isAllowed:!0})}),to=i.memo(({info:{srcFilesCount:e,mode:t,dirPickerId:r,destFileName:n,createDirEnabled:s,canMove:l},cancel:a})=>{const u=k(),c=y(),h=j(),p=i.useCallback((v,w,S)=>h.repoFilesMoveDirPickerClick(w,S),[h]),f=i.useCallback(()=>{h.repoFilesMoveCreateDir()},[h]),m=i.useCallback(async()=>{h.repoFilesMoveMoveFiles()},[h]);return o.jsxs(o.Fragment,{children:[o.jsx(pe,{children:o.jsxs(he,{className:d`
              font-weight: normal;
            `,children:[t==="Copy"?"Copy":"Move"," ",o.jsxs("strong",{className:d`
                font-weight: 600;
              `,children:[e," ",e===1?"item":"items"]}),n!==void 0?o.jsxs(o.Fragment,{children:[" to ",o.jsx("strong",{className:d`
                    font-weight: 600;
                  `,children:n})]}):null]})}),o.jsx(me,{className:d`
            padding-bottom: 0;
            overflow: hidden;
          `,children:o.jsx("div",{className:b(d`
                border: 1px solid ${c.colors.borderDarker};
                border-radius: 3px;
                overflow-y: scroll;
                overflow-x: hidden;
              `,u?d`
                    flex-grow: 1;
                  `:d`
                    height: 300px;
                  `),children:o.jsx(Ct,{pickerId:r,onClick:p})})}),o.jsxs(fe,{children:[o.jsx(Ge,{children:o.jsx(wt,{type:"button",disabled:!s,onClick:f,children:"Create folder"})}),o.jsxs(ge,{children:[o.jsx(q,{type:"button",onClick:a,children:"Cancel"}),o.jsx(q,{type:"button",variant:l?"primary":"disabled",disabled:!l,onClick:m,children:t==="Copy"?"Copy":"Move"})]})]})]})}),ro=i.memo(()=>{const e=j(),[t]=X((n,s)=>n.repoFilesMoveInfoSubscribe(s),n=>n.repoFilesMoveInfoData,[]),r=i.useCallback(()=>e.repoFilesMoveCancel(),[e]);return o.jsx(xe,{show:t!==void 0,onHide:r,children:t!==void 0?o.jsx(to,{info:t,cancel:r}):o.jsx(o.Fragment,{})})}),oo=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},i.createElement("path",{fill:"#fff",d:"M9.722 9.752h4.92a.72.72 0 0 0 .72-.72v-.023a.72.72 0 0 0-.72-.72h-4.92V3.375a.72.72 0 0 0-.72-.72h-.024a.72.72 0 0 0-.72.72V8.29H3.362a.72.72 0 0 0-.72.72v.023c0 .397.323.72.72.72h4.896v4.896c0 .397.323.72.72.72h.024a.72.72 0 0 0 .72-.72V9.752Z"})),no=D.nav`
  display: flex;
  flex-direction: row;
  padding-top: ${({theme:e})=>e.isMobile?0:"11px"};
`,so=i.memo(i.forwardRef(({children:e,className:t,backgroundClassName:r,icon:n,...s},l)=>{const a=y();return o.jsx(yt,{className:b(d`
            ${ee}
            margin: 0;
            padding: 0;

            ${H} {
              text-decoration: none;
            }
          `,a.isMobile?d`
                min-width: 37px;
              `:d`
                margin-left: 6px;
                margin-right: 6px;
                margin-bottom: 5px;
                min-width: 45px;

                &:last-of-type {
                  margin-right: 0;
                }
              `),...s,ref:l,children:o.jsxs("div",{className:d`
            display: flex;
            flex-direction: column;
            align-items: center;
          `,children:[o.jsx("div",{className:b(d`
                display: flex;
                justify-content: center;
                align-items: center;
                width: 32px;
                height: 32px;
                border-radius: 3px;
                transition: ${jt};
              `,!a.isMobile&&d`
                  margin-bottom: 3px;
                `,r),children:n}),a.isMobile?null:o.jsx("div",{className:d`
                display: block;
                color: ${a.colors.text};
                font-size: 11px;
                line-height: 20px;
                font-weight: 600;
                text-align: center;
              `,children:e})]})})})),io=i.memo(({hide:e})=>{const t=A(),r=i.useCallback(()=>{var n;e(),(n=t.uploadFile)==null||n.call(t)},[e,t]);return o.jsx(B,{onClick:r,children:"Upload file"})}),lo=i.memo(({hide:e})=>{const t=A(),r=i.useCallback(()=>{var n;e(),(n=t.uploadDir)==null||n.call(t)},[e,t]);return o.jsx(B,{onClick:r,children:"Upload folder"})}),ao=i.memo(({hide:e})=>{const t=j(),r=I(),n=i.useCallback(()=>t.repoFilesBrowsersCreateDir(r),[t,r]);return o.jsx(o.Fragment,{children:o.jsx(B,{onClick:()=>{e(),n()},children:"Create folder"})})}),co=i.memo(({hide:e})=>{const t=ce(),r=j(),n=I(),s=i.useCallback(()=>{const{repoId:l}=r.repoFilesBrowsersInfo(n),a=`new text file ${J(new Date,"yyyyMMddHHmmss")}.txt`;r.repoFilesBrowsersCreateFile(n,a).then(u=>{u!==void 0&&t(Y(l,u,!0))})},[r,n,t]);return o.jsx(o.Fragment,{children:o.jsx(B,{onClick:()=>{e(),s()},children:"Create new text file"})})}),uo=i.memo(({hide:e})=>o.jsxs(o.Fragment,{children:[o.jsx(io,{hide:e}),o.jsx(lo,{hide:e}),o.jsx(ao,{hide:e}),o.jsx(ut,{}),o.jsx(co,{hide:e})]})),po=i.memo(()=>{const e=y(),[t,{show:r,popper:n,toggle:s}]=pt({popperConfig:{strategy:"fixed"}});return ht(r,n),o.jsx(mt,{isVisible:r,...t,className:d`
        width: 230px;
        z-index: ${e.zindex.repoFilesAddMenu};
      `,children:o.jsx(uo,{hide:()=>s==null?void 0:s(!1)})})}),ho=i.memo(()=>{const e=y(),[t]=ft();return o.jsx(so,{backgroundClassName:d`
        background-color: ${e.colors.primary};

        &:hover {
          background-color: ${e.colors.primaryHover};
        }
      `,icon:o.jsx(oo,{role:"img"}),...t,children:"Add"})}),mo=i.memo(()=>{const[e,t]=i.useState(!1);return o.jsxs(gt,{show:e,onToggle:r=>t(r),placement:"bottom",children:[o.jsx(ho,{}),o.jsx(po,{})]})}),fo=i.memo(()=>o.jsx(no,{children:o.jsx(mo,{})})),go=i.memo(({info:e})=>{const t=y(),{status:r,totalCount:n,totalSizeDisplay:s,selectedCount:l,selectedSizeDisplay:a}=e;return r.type==="Loading"&&!r.loaded||r.type==="Error"||n===0?null:o.jsx("div",{className:d`
          font-size: 13px;
          font-weight: normal;
          color: ${t.colors.textLight};
          flex-shrink: 0;
        `,children:l>0?o.jsxs("span",{children:[l," ",l===1?"item":"items"," -"," ",a," selected"]}):o.jsxs("span",{children:[n," ",n===1?"item":"items"," -"," ",s]})})}),xo=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},i.createElement("g",{fill:"#263238"},i.createElement("path",{d:"M7.766 6.388c-.002 0-.07-.027-.081-.03.023.004-4.783.005-4.783.005v9.585h8.307v-6.45a.33.33 0 0 0 .06.135S7.754 6.38 7.766 6.388Zm4.496 2.171c.226.21.41.63.41.938v7.355c0 .308-.25.558-.559.558H2a.559.559 0 0 1-.56-.558V5.459A.56.56 0 0 1 2 4.901h5.749c.309 0 .742.17.969.379l3.545 3.28Z"}),i.createElement("path",{d:"M7.428 5.887V9.95h4.199V8.486H8.883V5.887H7.428Z"}),i.createElement("path",{d:"M5.328 5.452V1.135c0-.309.25-.559.559-.559h5.749c.309 0 .742.17.969.38l3.545 3.279c.226.21.41.63.41.938v7.354a.56.56 0 0 1-.559.56h-3.924v-1.463h3.02V5.173a.33.33 0 0 0 .06.135s-3.515-3.252-3.504-3.244L6.79 2.038v3.414H5.328Z"}),i.createElement("path",{d:"M11.317 1.57v4.057h4.344V4.165h-2.886V1.563l-1.458.007Z"}))),vo=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},i.createElement("g",{fill:"#676F73"},i.createElement("path",{d:"M7.766 6.388c-.002 0-.07-.027-.081-.03.023.004-4.783.005-4.783.005v9.585h8.307v-6.45a.33.33 0 0 0 .06.135S7.754 6.38 7.766 6.388Zm4.496 2.171c.226.21.41.63.41.938v7.355c0 .308-.25.558-.559.558H2a.559.559 0 0 1-.56-.558V5.459A.56.56 0 0 1 2 4.901h5.749c.309 0 .742.17.969.379l3.545 3.28Z"}),i.createElement("path",{d:"m7.408 5.887.02 4.062h4.2V8.486H8.883L8.87 5.887H7.408Z"}),i.createElement("path",{d:"M5.328 5.452V1.135c0-.309.25-.559.559-.559h5.749c.309 0 .742.17.969.38l3.545 3.279c.226.21.41.63.41.938v7.354a.56.56 0 0 1-.559.56h-3.924v-1.463h3.02V5.173a.33.33 0 0 0 .06.135s-3.515-3.252-3.504-3.244L6.79 2.038v3.414H5.328Z"}),i.createElement("path",{d:"m11.296 1.57.02 4.057h4.345V4.165h-2.886l-.017-2.602c-.001-.224-1.463-.217-1.462.007Z"}))),bo=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},i.createElement("path",{fill:"#263238",d:"m10.1 2.029.043.035a.547.547 0 0 0-.081-.03.465.465 0 0 0 .063.005H2.903V15.96h12.195V6.573a.54.54 0 0 0 .004.071.316.316 0 0 0 .055.065l-5.056-4.68Zm6.05 3.606c.227.21.41.63.41.938v10.292c0 .309-.25.559-.558.559H1.999a.559.559 0 0 1-.559-.559V1.135c0-.309.25-.559.56-.559h8.125c.309 0 .743.17.97.38l5.055 4.68Z"}),i.createElement("path",{fill:"#263238",d:"M9.758 1.714v5.39h6.245V5.64h-4.79V1.707l-1.455.007Z"}),i.createElement("path",{fill:"#71BA05",d:"M3.582 11.383h-.68v1.462h6.83v-1.462H3.581Z"}),i.createElement("path",{fill:"#71BA05",d:"M11.32 12.123 8.23 9.032a.731.731 0 1 0-1.034 1.034l2.057 2.056-2.057 2.058a.731.731 0 0 0 1.034 1.034l3.09-3.091Z"})),wo=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},i.createElement("g",{fill:"#676F73"},i.createElement("path",{d:"m10.1 2.029.043.035a.547.547 0 0 0-.081-.03.465.465 0 0 0 .063.005H2.903V15.96h12.195V6.573a.54.54 0 0 0 .004.071.316.316 0 0 0 .055.065l-5.056-4.68Zm6.05 3.606c.227.21.41.63.41.938v10.292c0 .309-.25.559-.558.559H1.999a.559.559 0 0 1-.559-.559V1.135c0-.309.25-.559.56-.559h8.125c.309 0 .743.17.97.38l5.055 4.68Z"}),i.createElement("path",{d:"M9.758 1.714v5.39h6.245V5.64h-4.79V1.707l-1.455.007Zm-6.176 9.669H2.85v1.462h6.881v-1.462h-6.15Z"}),i.createElement("path",{d:"M11.32 12.123 8.23 9.032a.731.731 0 1 0-1.034 1.034l2.057 2.056-2.057 2.058a.731.731 0 0 0 1.034 1.034l3.09-3.091Z"}))),yo=i.memo(({info:e,onInfoClick:t})=>{const r=k(),n=j(),s=I(),l=e.selectedFile!==void 0?e.selectedFile:void 0,a=i.useCallback(()=>{l!==void 0&&n.repoFilesRenameFile(l.repoId,l.encryptedPath)},[n,l]);return o.jsxs(Ye,{children:[e.selectedFile!==void 0?o.jsx(E,{icon:o.jsx($e,{role:"img"}),iconHover:o.jsx(He,{role:"img"}),onClick:t,children:"Info"}):null,r&&l!==void 0?o.jsx(E,{icon:o.jsx(be,{role:"img"}),iconHover:o.jsx(we,{role:"img"}),onClick:a,children:"Rename"}):null,e.canCopySelected?o.jsx(E,{icon:o.jsx(vo,{role:"img"}),iconHover:o.jsx(xo,{role:"img"}),onClick:()=>{n.repoFilesBrowsersMoveSelected(s,oe.Copy)},children:"Copy"}):null,e.canMoveSelected?o.jsx(E,{icon:o.jsx(wo,{role:"img"}),iconHover:o.jsx(bo,{role:"img"}),onClick:()=>{n.repoFilesBrowsersMoveSelected(s,oe.Move)},children:"Move"}):null,e.canDownloadSelected?o.jsx(E,{icon:o.jsx(Je,{role:"img"}),iconHover:o.jsx(et,{role:"img"}),onClick:()=>{tt(n,s,r)},children:"Download"}):null,e.canDeleteSelected?o.jsx(E,{icon:o.jsx(rt,{role:"img"}),iconHover:o.jsx(ot,{role:"img"}),onClick:()=>{n.repoFilesBrowsersDeleteSelected(s)},children:"Delete"}):null,e.selectedFile!==void 0&&nt(e.selectedFile)?o.jsx(E,{as:O,to:Y(e.selectedFile.repoId,e.selectedFile.encryptedPath,!0),icon:o.jsx(st,{role:"img"}),iconHover:o.jsx(it,{role:"img"}),children:"Edit text"}):null,e.selectedCount>0?o.jsx(lt,{onClick:()=>n.repoFilesBrowsersClearSelection(s)}):null]})}),jo=i.memo(({info:e,onInfoClick:t})=>{const r=k();return o.jsx("div",{className:b(d`
          display: flex;
        `,r?d`
              flex-direction: column;
              align-items: center;
            `:d`
              width: 100%;
              flex-direction: row;
              align-items: center;
              overflow: hidden;
            `),children:e!==void 0?o.jsxs("div",{className:b(d`
              flex-grow: 1;
              flex-shrink: 0;
              margin: 0;
              padding: 0;
              display: flex;
              align-items: center;
              position: relative;
            `,r?d``:d`
                  margin-right: 50px;
                `),children:[o.jsx(go,{info:e}),o.jsx(yo,{info:e,onInfoClick:t})]}):null})}),Co=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none",...e},i.createElement("path",{fill:"#71BA05",fillRule:"evenodd",d:"M3.52 0A3.526 3.526 0 0 0 0 3.52v24.96C0 30.42 1.58 32 3.52 32h24.96c1.94 0 3.52-1.58 3.52-3.52V3.52C32 1.58 30.42 0 28.48 0H3.52Zm0 1.26h24.96a2.24 2.24 0 0 1 2.26 2.26v24.96a2.24 2.24 0 0 1-2.26 2.26H3.52a2.24 2.24 0 0 1-2.26-2.26V3.52a2.24 2.24 0 0 1 2.26-2.26Zm12.75 9.784a.72.72 0 0 0-.459.169L10 16.078l5.811 4.866a.724.724 0 1 0 .93-1.113l-3.81-3.188H22a.655.655 0 1 0 0-1.312h-8.864l3.604-3.006a.725.725 0 0 0-.47-1.28Z",clipRule:"evenodd"})),Fo=i.memo(({to:e})=>o.jsx(O,{to:e,className:d`
        display: flex;
        align-items: center;
      `,"aria-label":"Back",children:o.jsx(Co,{role:"img"})})),ko=i.memo(({breadcrumbs:e})=>{if(k()&&e.length>1){const r=e[e.length-2],n=V(r.repoId,r.path);return o.jsx(Fo,{to:n})}else return o.jsx(Ft,{})});function Do(e,t,r){const n=j(),s=i.useRef(e),l=i.useRef(t),a=i.useRef(),u=i.useMemo(()=>{if(a.current!==void 0&&e===s.current&&t===l.current&&r===void 0)return a.current;const c=n.repoFilesBrowsersCreate(e,t,{selectName:r});return s.current=e,l.current=t,a.current=c,c},[n,e,t,r]);return i.useEffect(()=>()=>{n.repoFilesBrowsersDestroy(u)},[n,u]),u}const K="vaultRepoFileInfoSheetVisible";function Mo(){try{if(localStorage.getItem(K)==="true")return!0}catch{}return!1}function ae(e){try{e?localStorage.setItem(K,"true"):localStorage.removeItem(K)}catch{}}function To(e){const t=k(),[r,n]=i.useState(Mo),s=r&&!t,l=Oe(),a=l.show,u=e.selectedFile,c=i.useCallback(()=>{t?u!==void 0&&a(u):n(p=>{const f=!p;return ae(f),f})},[t,a,u]),h=i.useCallback(()=>{n(!1),ae(!1)},[]);return{onInfoClick:c,infoSheetVisible:s,infoSheetHide:h,infoModal:l}}function Eo(e,t){const r=ce(),[n]=de();let s=n.get("name")??void 0;return s===""&&(s=void 0),i.useEffect(()=>{s!==void 0&&r(V(e,t),{replace:!0})},[r,e,t,s]),s}const Io=i.memo(({browserId:e,info:t})=>{const r=k(),n=i.useMemo(()=>t.breadcrumbs.map(h=>h.name).join(" › "),[t]);Be(n);const{onInfoClick:s,infoSheetVisible:l,infoSheetHide:a,infoModal:u}=To(t),c=i.useMemo(()=>({}),[]);return o.jsx(ke.Provider,{value:e,children:o.jsx(Me.Provider,{value:c,children:o.jsxs(Pe,{navbarLeft:t!==void 0?o.jsx(ko,{breadcrumbs:t.breadcrumbs}):void 0,navbarHeader:t!==void 0?o.jsx(Yt,{breadcrumbs:t.breadcrumbs}):void 0,navbarNav:o.jsx(fo,{}),navbarExtra:o.jsx(jo,{info:t,onInfoClick:s}),className:r?d`
                  padding-top: 0;
                `:d`
                  padding-top: 10px;
                `,sidenavClassName:r?d``:d`
                  margin-top: -50px;
                `,children:[t!==void 0?o.jsx(Qr,{info:t}):null,o.jsx(ro,{}),o.jsx(eo,{}),o.jsx(jr,{}),o.jsx(Xt,{file:l?t==null?void 0:t.selectedFile:void 0,hide:a}),o.jsx(Qt,{file:u.payload,hide:u.hide})]})})})}),So=i.memo(({repoId:e})=>{const[t]=de(),r=t.get("path")??void 0,n=Eo(e,r),s=Do(e,r??"/",n),[l]=X((a,u)=>a.repoFilesBrowsersInfoSubscribe(s,u),a=>a.repoFilesBrowsersInfoData,[s]);return l===void 0?o.jsx(Ve,{}):o.jsx(at,{repoId:e,repoStatus:l.repoStatus,isLocked:l.isLocked,children:o.jsx(Io,{browserId:s,info:l})})}),en=i.memo(()=>{const t=Ne().repoId;return t===void 0?null:o.jsx(So,{repoId:t})});export{en as RepoFilesPage};

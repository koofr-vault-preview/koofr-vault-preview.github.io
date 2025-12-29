const __vite__fileDeps=["assets/RepoFilesDropZoneDesktop-CE_HL9Sm.js","assets/DynamicThemeProvider-CxehgrR0.js","assets/emotion-css.esm-CiHGz3gB.js","assets/DashboardLayout-XGDc2SSa.js","assets/mainWebAuthenticated-0FoFru7y.js","assets/NavbarSticky-DuO2swp8.js","assets/Button-Dt6jELX4.js","assets/index-CViSzOrh.js","assets/index-DxkFTwjz.css","assets/DashboardNavbar-BTTigZyM.js","assets/Navbar-D0t0rxK0.js","assets/GitRevision-CuNzV39U.js","assets/DashboardLoading-Ckd3ET6n.js","assets/useDocumentTitle-D3L4F_h2.js","assets/browser-Cmb7RFJx.js","assets/DashboardError-COeDTH-J.js","assets/error-icon@2x-BzFHMFnI.js","assets/PasswordInput-BFxXt0R1.js","assets/index-CrWxlqLP.js","assets/range-Drd2y_Pg.js","assets/Checkbox-B60T99_6.js","assets/DirPicker-DKydp6pw.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var At=Object.defineProperty;var kt=(e,t,r)=>t in e?At(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var U=(e,t,r)=>kt(e,typeof t!="symbol"?t+"":t,r);import{g as ee,r as i,u as $,j as o,a as D,B as Ot}from"./DynamicThemeProvider-CxehgrR0.js";import{c as p,a as j,L as Q,u as Rt}from"./emotion-css.esm-CiHGz3gB.js";import{a as Pt,S as Nt,b as Ht,u as Lt,D as Bt}from"./DashboardLayout-XGDc2SSa.js";import{D as zt}from"./DashboardLoading-Ckd3ET6n.js";import{u as Vt}from"./useDocumentTitle-D3L4F_h2.js";import{k as te,D as Wt,a as T,F as st,M as it,b as lt,c as ct,d as dt,f as ut,g as ge,h as pt,u as re,l as Ut,m as Gt,_ as ne,n as oe,o as G,p as S,q as qt,e as Zt,r as Kt,s as Qt}from"./mainWebAuthenticated-0FoFru7y.js";import{S as ht,n as _e,o as Yt,q as Jt,s as Xt,r as $e,c as ft,d as mt,t as er,T as R,i as tr,j as rr,u as nr,l as or,m as ar,v as sr,g as ir,h as lr,w as cr,R as dr}from"./browser-Cmb7RFJx.js";import{f as Te}from"./index-CrWxlqLP.js";import{u as ur}from"./NavbarSticky-DuO2swp8.js";import{N as pr,M as ae,a as hr,b as fr,c as mr,d as gr,e as vr,f as xr}from"./DashboardNavbar-BTTigZyM.js";import{E as br}from"./DashboardError-COeDTH-J.js";import{n as E,b as Fe,d as K,B as yr,e as wr,f as Cr}from"./Button-Dt6jELX4.js";import{r as jr,i as Ie,t as _r,e as gt,a as $r,b as Tr,_ as Fr,c as Ir}from"./range-Drd2y_Pg.js";import{C as vt}from"./Checkbox-B60T99_6.js";import{_ as Dr}from"./index-CViSzOrh.js";import{D as Sr}from"./DirPicker-DKydp6pw.js";import{a as Er}from"./Navbar-D0t0rxK0.js";var Mr=function e(t,r){if(t===r)return!0;if(t&&r&&typeof t=="object"&&typeof r=="object"){if(t.constructor!==r.constructor)return!1;var n,a,s;if(Array.isArray(t)){if(n=t.length,n!=r.length)return!1;for(a=n;a--!==0;)if(!e(t[a],r[a]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if(s=Object.keys(t),n=s.length,n!==Object.keys(r).length)return!1;for(a=n;a--!==0;)if(!Object.prototype.hasOwnProperty.call(r,s[a]))return!1;for(a=n;a--!==0;){var l=s[a];if(!e(t[l],r[l]))return!1}return!0}return t!==t&&r!==r};const Ar=ee(Mr),se=typeof window<"u"?i.useLayoutEffect:i.useEffect;function kr(e,t,r){const[n,a]=i.useState(()=>t(e)),s=i.useCallback(()=>{const l=t(e);Ar(n,l)||(a(l),r&&r())},[n,e,r]);return se(s),[n,s]}function Or(e,t,r){const[n,a]=kr(e,t,r);return se(function(){const l=e.getHandlerId();if(l!=null)return e.subscribeToStateChange(a,{handlerIds:[l]})},[e,a]),n}function Rr(e,t,r){return Or(t,e||(()=>({})),()=>r.reconnect())}function Pr(e,t){const r=[...t||[]];return t==null&&typeof e!="function"&&r.push(e),i.useMemo(()=>typeof e=="function"?e():e,r)}let ue=!1;class Nr{receiveHandlerId(t){this.targetId=t}getHandlerId(){return this.targetId}subscribeToStateChange(t,r){return this.internalMonitor.subscribeToStateChange(t,r)}canDrop(){if(!this.targetId)return!1;te(!ue,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return ue=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{ue=!1}}isOver(t){return this.targetId?this.internalMonitor.isOverTarget(this.targetId,t):!1}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(t){this.targetId=null,this.internalMonitor=t.getMonitor()}}function Hr(e,t,r){const n=r.getRegistry(),a=n.addTarget(e,t);return[a,()=>n.removeTarget(a)]}function Lr(e,t,r,n){let a;if(a!==void 0)return!!a;if(e===t)return!0;if(typeof e!="object"||!e||typeof t!="object"||!t)return!1;const s=Object.keys(e),l=Object.keys(t);if(s.length!==l.length)return!1;const d=Object.prototype.hasOwnProperty.bind(t);for(let c=0;c<s.length;c++){const u=s[c];if(!d(u))return!1;const h=e[u],m=t[u];if(a=void 0,a===!1||a===void 0&&h!==m)return!1}return!0}function Br(e){return e!==null&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function zr(e){if(typeof e.type=="string")return;const t=e.type.displayName||e.type.name||"the component";throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${t} into a <div>, or turn it into a drag source or a drop target itself.`)}function Vr(e){return(t=null,r=null)=>{if(!i.isValidElement(t)){const s=t;return e(s,r),s}const n=t;return zr(n),Ur(n,r?s=>e(s,r):e)}}function Wr(e){const t={};return Object.keys(e).forEach(r=>{const n=e[r];if(r.endsWith("Ref"))t[r]=e[r];else{const a=Vr(n);t[r]=()=>a}}),t}function Me(e,t){typeof e=="function"?e(t):e.current=t}function Ur(e,t){const r=e.ref;return te(typeof r!="string","Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"),r?i.cloneElement(e,{ref:n=>{Me(r,n),Me(t,n)}}):i.cloneElement(e,{ref:t})}class Gr{get connectTarget(){return this.dropTarget}reconnect(){const t=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();t&&this.disconnectDropTarget();const r=this.dropTarget;if(this.handlerId){if(!r){this.lastConnectedDropTarget=r;return}t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=r,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,r,this.dropTargetOptions))}}receiveHandlerId(t){t!==this.handlerId&&(this.handlerId=t,this.reconnect())}get dropTargetOptions(){return this.dropTargetOptionsInternal}set dropTargetOptions(t){this.dropTargetOptionsInternal=t}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didDropTargetChange(){return this.lastConnectedDropTarget!==this.dropTarget}didOptionsChange(){return!Lr(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}disconnectDropTarget(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}get dropTarget(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}clearDropTarget(){this.dropTargetRef=null,this.dropTargetNode=null}constructor(t){this.hooks=Wr({dropTarget:(r,n)=>{this.clearDropTarget(),this.dropTargetOptions=n,Br(r)?this.dropTargetRef=r:this.dropTargetNode=r,this.reconnect()}}),this.handlerId=null,this.dropTargetRef=null,this.dropTargetOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDropTarget=null,this.lastConnectedDropTargetOptions=null,this.backend=t}}function De(){const{dragDropManager:e}=i.useContext(Wt);return te(e!=null,"Expected drag drop context"),e}function qr(e){return i.useMemo(()=>e.hooks.dropTarget(),[e])}function Zr(e){const t=De(),r=i.useMemo(()=>new Gr(t.getBackend()),[t]);return se(()=>(r.dropTargetOptions=e||null,r.reconnect(),()=>r.disconnectDropTarget()),[e]),r}function Kr(){const e=De();return i.useMemo(()=>new Nr(e),[e])}function Qr(e){const{accept:t}=e;return i.useMemo(()=>(te(e.accept!=null,"accept must be defined"),Array.isArray(t)?t:[t]),[t])}class Yr{canDrop(){const t=this.spec,r=this.monitor;return t.canDrop?t.canDrop(r.getItem(),r):!0}hover(){const t=this.spec,r=this.monitor;t.hover&&t.hover(r.getItem(),r)}drop(){const t=this.spec,r=this.monitor;if(t.drop)return t.drop(r.getItem(),r)}constructor(t,r){this.spec=t,this.monitor=r}}function Jr(e,t){const r=i.useMemo(()=>new Yr(e,t),[t]);return i.useEffect(()=>{r.spec=e},[e]),r}function Xr(e,t,r){const n=De(),a=Jr(e,t),s=Qr(e);se(function(){const[d,c]=Hr(s,a,n);return t.receiveHandlerId(d),r.receiveHandlerId(d),c},[n,t,a,r,s.map(l=>l.toString()).join("|")])}function en(e,t){const r=Pr(e,t),n=Kr(),a=Zr(r.options);return Xr(r,n,a),[Rr(r.collect,n,a),qr(a)]}function tn(){return T()}const I=i.memo(({label:e,children:t})=>{const r=$();return o.jsxs("div",{className:p`
          margin: 0 0 15px;
        `,children:[o.jsx("div",{className:p`
            font-size: 13px;
            font-weight: normal;
            color: ${r.colors.textLight};
          `,children:e}),o.jsx("div",{className:p`
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
          `,children:t})]})}),xt=i.memo(({file:e})=>{const t=$();return o.jsxs("div",{className:p`
        display: flex;
        flex-direction: column;
      `,children:[o.jsx(I,{label:"Name",children:e.nameError===void 0?o.jsx(o.Fragment,{children:e.name}):o.jsxs("div",{className:p`
              color: ${t.colors.destructive};
            `,children:[o.jsx("p",{children:e.name}),o.jsx("p",{children:e.nameError})]})}),o.jsx(I,{label:"Type",children:rn(e.category)}),e.sizeDisplay!==""?o.jsx(I,{label:"Size",children:e.sizeDisplay}):null,e.modified!==void 0?o.jsxs(I,{label:"Modified",children:[o.jsx(ht,{value:e.modified,noTooltip:!0}),o.jsx("br",{}),Te(e.modified,"PPPPpp")]}):null,o.jsx(I,{label:"Path",children:e.decryptedPath??"???"}),o.jsx(I,{label:"Encrypted path",children:e.encryptedPath}),e.type==="File"?o.jsxs(o.Fragment,{children:[o.jsx(I,{label:"MD5",children:e.tags.hash??"???"}),o.jsx(I,{label:"Encrypted MD5",children:e.remoteHash??"???"})]}):null,e.tags.error!==void 0?o.jsx(I,{label:"Tags error",children:o.jsx("span",{className:p`
              color: ${t.colors.destructive};
            `,children:e.tags.error})}):null]})});function rn(e){switch(e){case"Generic":return"File";case"Folder":return"Folder";case"Archive":return"Archive";case"Audio":return"Audio";case"Code":return"Code";case"Document":return"Document";case"Image":return"Image";case"Pdf":return"PDF";case"Presentation":return"Presentation";case"Sheet":return"Spreadsheet";case"Text":return"Text";case"Video":return"Video"}}const bt=i.memo(({file:e})=>o.jsx("div",{className:p`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        overflow-x: hidden;
      `,children:o.jsx("div",{className:p`
          margin: 25px 25px 50px;
        `,children:o.jsx(st,{size:"Lg",attrs:e.fileIconAttrs})})})),nn=i.memo(({file:e,hide:t})=>o.jsxs(o.Fragment,{children:[o.jsx(it,{children:o.jsx(lt,{children:"Info"})}),o.jsxs(ct,{children:[o.jsx(xt,{file:e}),o.jsx(bt,{file:e})]}),o.jsx(dt,{children:o.jsx(ut,{children:o.jsx(ge,{variant:"primary",onClick:t,children:"Close"})})})]})),on=i.memo(({file:e,hide:t})=>o.jsx(pt,{show:e!==void 0,onHide:t,children:e!==void 0?o.jsx(nn,{file:e,hide:t}):o.jsx(o.Fragment,{})})),an=i.memo(({file:e,hide:t})=>{const r=$(),n=e!==void 0,a=ur(),[s]=re((d,c)=>d.transfersIsActiveSubscribe(c),d=>d.transfersIsActiveData,[]),l=s?Pt:0;return o.jsx("div",{className:j(p`
          flex-direction: column;
          position: fixed;
          background-color: #fff;
          z-index: ${r.zindex.fileInfoSheet};
          display: flex;
          top: 70px;
          bottom: ${l}px;
          left: -250px;
          width: 250px;
          border-right: 1px solid ${r.colors.borderLight};
          border-top: 1px solid ${r.colors.borderLight};
          transition: left 0.3s ease-out;
        `,n&&p`
            left: 0;
          `,a&&p`
            top: 69px;
          `),children:e!==void 0?o.jsxs("div",{className:p`
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            overflow: hidden;
          `,children:[o.jsxs("div",{className:p`
              display: flex;
              flex-direction: row;
              align-items: center;
              flex-shrink: 0;
              border-bottom: 1px solid ${r.colors.border};
              height: 46px;
            `,children:[o.jsx("div",{className:p`
                flex-grow: 1;
                font-size: 14px;
                font-weight: normal;
                margin: 0 0 0 20px;
                color: ${r.colors.text};
              `,children:"Info"}),o.jsx("div",{className:p`
                margin-right: 7px;
              `,children:o.jsx(Ut.Provider,{value:t,children:o.jsx(Gt,{})})})]}),o.jsx("div",{className:p`
              display: flex;
              flex-direction: column;
              flex-grow: 1;
              padding: 20px 25px 0;
              overflow-x: hidden;
            `,children:o.jsx(xt,{file:e})}),o.jsx(bt,{file:e})]}):null})}),yt=i.createContext(void 0);function O(){return i.useContext(yt)}const sn=i.memo(({breadcrumbs:e})=>{const t=D(),r=T(),n=O(),a=i.useMemo(()=>t?e.slice(e.length-1):e,[e,t]),s=i.useMemo(()=>a.map((d,c)=>({id:d.id,name:d.name,link:/^recent:/.test(d.id)?{pathname:`/repos/${d.repoId}/recent`}:_e(d.repoId,d.path),isClickable:!0,hasCaret:!1,isLast:c===a.length-1})),[a]),l=i.useCallback((d,c)=>{c.isLast&&r.repoFilesBrowsersLoadFiles(n)},[r,n]);return o.jsx(pr,{breadcrumbs:s,onClick:l})}),ln="/assets/empty-folder@2x-DkQV6bHE.png",wt=i.createContext(void 0);function q(){return i.useContext(wt)}const cn=i.memo(()=>{const e=$(),t=q();return o.jsxs("div",{className:p`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 80px 0 0;
      `,children:[o.jsx("img",{src:ln,alt:"",className:p`
          display: block;
          width: 252px;
          height: 186px;
          cursor: pointer;
        `,onClick:()=>{var r;(r=t.uploadFile)==null||r.call(t)}}),o.jsx("h3",{className:p`
          font-size: 14px;
          color: ${e.colors.text};
          font-weight: 600;
          margin: 0 0 20px;
        `,children:"This folder is empty."})]})});function dn(e){return e(Ot)}function un(){const[e,t]=i.useState(null),[r,n]=i.useState({width:0,height:0}),a=i.useCallback(()=>{n({width:(e==null?void 0:e.offsetWidth)||0,height:(e==null?void 0:e.offsetHeight)||0})},[e==null?void 0:e.offsetHeight,e==null?void 0:e.offsetWidth]);return i.useEffect(()=>(window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}),[a]),i.useLayoutEffect(()=>{a()},[e==null?void 0:e.offsetHeight,e==null?void 0:e.offsetWidth]),[t,r]}var pn=ne,hn=oe,fn=G,mn="[object String]";function gn(e){return typeof e=="string"||!hn(e)&&fn(e)&&pn(e)==mn}var vn=gn;const xn=ee(vn);function bn(e,t){let r=0,n=0,a=0;const s=t.map((c,u)=>{const h={type:0,width:void 0,relWidth:void 0,minWidth:c.minWidth};if(c.width===void 0)n+=1;else if(xn(c.width)){if(c.width[c.width.length-1]!=="%")throw new Error(`Column width must be a number or percentage: ${c.width}`);const m=parseInt(c.width.slice(0,c.width.length-1),10)/100;a+=m,h.type=2,h.relWidth=m}else{if(c.minWidth!==void 0)throw new Error(`Column cannot have both width number and minWidth: ${c.width}, ${c.minWidth}`);h.type=1,h.width=c.width,r+=h.width}return h});if(a>1)throw new Error("Columns relative widths cannot be more than 100%");if(n>0){if(a===1)throw new Error("Columns relative widths cannot equal 100% if there are unknown widths");const c=(1-a)/n;s.forEach(u=>{u.type===0&&(u.type=2,u.relWidth=c)})}else s.forEach(c=>{c.type===2&&(c.relWidth=c.relWidth/a)});const l=Math.max(e-r,0);let d=l;return s.forEach(c=>{if(c.type===2&&c.minWidth!==void 0){const u=Math.min(Math.max(l*c.relWidth,c.minWidth),d);d-=u,c.type=1,c.width=u}}),s.forEach(c=>{if(c.type===2){const u=Math.min(Math.max(l*c.relWidth,0),d);d-=u,c.type=1,c.width=u}}),s.map(c=>c.width)}const yn=e=>{switch(e){case void 0:return;case"Asc":return"ascending";case"Desc":return"descending";case"Hidden":return"none"}},ve=E.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
  align-items: center;
  padding-left: 10px;
  flex-grow: 0;
  flex-shrink: 0;
`,Ct=E(ve)`
  font-size: 13px;
  font-weight: normal;
  color: ${({theme:e})=>e.colors.textLight};
  vertical-align: middle;
`,wn=E(Ct)`
  align-items: center;
  justify-content: center;
  display: flex;
`,Cn=E.button`
  ${Fe}
  color: ${({theme:e})=>e.colors.textLight};
  cursor: pointer;
  padding-right: 15px;

  ${({sortBy:e,theme:t})=>e==="Asc"||e==="Desc"?dn(r=>r`
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
`,jn=E.div`
  display: flex;
  align-items: center;
  height: 33px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  position: relative;
`,_n=E.div``,$n=i.memo(({index:e,isSelected:t,isFirstSelected:r,hasHover:n,isDropOver:a,height:s,ariaLabel:l,onClick:d,onContextMenu:c,children:u})=>{const h=$();return o.jsx("div",{className:j(p`
            display: flex;
            flex-direction: column;
            margin-top: -1px;
            background-color: #fff;
            border-top: 1px solid ${h.colors.borderLight};
            border-bottom: 1px solid ${h.colors.borderLight};
            border-left: 1px solid transparent;
            border-right: 1px solid transparent;
            overflow: hidden;
            position: relative;
            transition:
              height 0.3s ease-out,
              border 0.1s ease-out,
              box-shadow 0.1s ease-out;
          `,e===0?p`
                border-top-color: ${h.colors.border};
              `:void 0,n&&!t?p`
                &:hover {
                  background-color: ${h.colors.empty};
                  border-top-color: ${h.colors.border};
                  border-left-color: ${h.colors.border};
                  border-right-color: ${h.colors.border};
                  border-bottom-color: ${h.colors.border};
                  box-shadow: ${h.boxShadow};
                  z-index: 1;
                }
              `:void 0,t?p`
                background-color: ${h.colors.selectionBg};
                border-top-color: ${h.colors.borderLight};
                border-left-color: ${h.colors.selection};
                border-right-color: ${h.colors.selection};
                border-bottom-color: ${h.colors.selection};
                box-shadow: ${h.boxShadow};
                z-index: 2;
              `:void 0,r?p`
                border-top-color: ${h.colors.selection};
              `:void 0,a?p`
                background-color: ${h.colors.bgLight};
                border-top-color: ${h.colors.border};
                border-left-color: ${h.colors.border};
                border-right-color: ${h.colors.border};
                border-bottom-color: ${h.colors.border};
                z-index: 1;
              `:void 0),style:{height:`${s+1}px`},onClick:d,onContextMenu:c,role:"row","aria-rowindex":e,"aria-label":l,"aria-selected":t,children:u})}),Tn=E.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;
  height: 47px;
`,Fn=E.div`
  user-select: none;
  padding: 0 2px 3px;
`,jt=i.createContext(void 0),In=i.memo(({columns:e,selectionSummary:t,length:r,data:n,Row:a,ariaLabel:s,onHeadCheckboxClick:l,onSortByClick:d,onRowCheckboxClick:c,onRowClick:u,onRowContextMenu:h})=>{const[m,{width:f}]=un(),v=i.useMemo(()=>{if(f===0)return[];const g=f-6,C=[{name:"checkbox",label:"",width:42},...e],_=bn(g,C.map(F=>({width:F.width,minWidth:F.minWidth})));return C.map((F,M)=>({name:F.name,label:F.label,width:_[M],sortBy:F.sortBy}))},[e,f]),x=i.useMemo(()=>({columns:v,onRowCheckboxClick:c,onRowClick:u,onRowContextMenu:h}),[v,c,u,h]),w=i.useMemo(()=>jr(0,r),[r]);return o.jsx(Fn,{ref:m,role:"grid","aria-label":s,"aria-rowcount":r,children:v.length>0?o.jsxs(jt.Provider,{value:x,children:[o.jsx("div",{role:"rowgroup",children:o.jsx(jn,{role:"row",children:v.map(g=>g.name==="checkbox"?o.jsx(wn,{style:{minWidth:`${g.width}px`},role:"columnheader",children:o.jsx(vt,{value:t==="None"?"unchecked":t==="Partial"?"indeterminate":"checked",onClick:l})},g.name):o.jsx(Ct,{style:{minWidth:`${g.width}px`},role:"columnheader","aria-sort":yn(g.sortBy),children:g.sortBy!==void 0?o.jsx(Cn,{sortBy:g.sortBy,onClick:C=>{d!==void 0&&d(C,g.name)},children:g.label}):g.label},g.name))})}),o.jsx(_n,{role:"rowgroup",children:w.map(g=>o.jsx(a,{index:g,data:n},g))})]}):null})}),Dn=i.memo(({index:e,row:t,isSelected:r,isFirstSelected:n,ariaLabel:a})=>{const{columns:s,onRowCheckboxClick:l,onRowClick:d,onRowContextMenu:c}=i.useContext(jt),u=i.useCallback(f=>{l(f,e)},[l,e]),h=i.useCallback(f=>{d(f,e)},[d,e]),m=i.useCallback(f=>{c(f,e)},[c,e]);return o.jsx($n,{index:e,isSelected:r,isFirstSelected:n,hasHover:!0,isDropOver:!1,height:48,ariaLabel:a,onClick:h,onContextMenu:m,children:o.jsx(Tn,{children:s.map(f=>f.name==="checkbox"?o.jsx(ve,{style:{width:`${f.width}px`},role:"cell",children:o.jsx(vt,{value:r?"checked":"unchecked",onClick:u})},f.name):o.jsx(ve,{style:{width:`${f.width}px`},role:"cell",children:t[f.name]},f.name))})},e)}),Sn=e=>Yt?e.metaKey:e.ctrlKey,Ae=e=>e.shiftKey,En=i.memo(({file:e})=>{const t=D(),r=$(),n=T(),a=i.useCallback(()=>{Jt(n,e.repoId,e.encryptedPath,t)},[n,e,t]),s=i.useCallback(()=>{n.repoFilesRenameFile(e.repoId,e.encryptedPath)},[n,e]);return o.jsxs("div",{className:p`
        display: flex;
        flex-direction: row;
        align-items: center;
      `,children:[o.jsx("span",{className:p`
          margin-right: 15px;
        `,children:o.jsx(st,{size:"Sm",attrs:e.fileIconAttrs})}),o.jsxs("span",{className:j(p`
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          `,e.nameError!==void 0&&p`
              color: ${r.colors.destructive};
            `),children:[e.type==="Dir"?o.jsx(Q,{to:_e(e.repoId,e.encryptedPath),className:p`
              font-weight: 600;

              ${K} {
                color: ${r.colors.text};
              }
            `,children:e.name}):Xt(e)?o.jsx(Q,{to:$e(e.repoId,e.encryptedPath),className:p`
              ${K} {
                color: ${r.colors.text};
              }
            `,children:e.name}):o.jsx("a",{href:".",onClick:l=>{l.preventDefault(),l.stopPropagation(),a()},className:p`
              ${K} {
                color: ${r.colors.text};
              }
            `,children:e.name}),e.nameError!==void 0?" (ERROR)":null]}),t?null:o.jsxs("button",{className:p`
            ${Fe}
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
          `,onClick:l=>{l.stopPropagation(),s()},"aria-label":"Rename",children:[o.jsx(ft,{className:p`
              button:hover > & {
                display: none;
              }
            `,role:"img"}),o.jsx(mt,{className:p`
              display: none;

              button:hover > & {
                display: inline;
              }
            `,role:"img"})]})]})}),Mn=i.memo(({file:e})=>o.jsx("span",{className:p`
        font-size: 12px;
      `,children:e.sizeDisplay})),An=i.memo(({file:e})=>e.modified===void 0?null:o.jsx("span",{className:p`
        font-size: 12px;
      `,children:o.jsx(ht,{value:e.modified})})),kn=i.memo(({index:e,data:t})=>{const r=i.useMemo(()=>t.items[e],[t,e]),[n]=re((d,c)=>d.repoFilesFileSubscribe(r.fileId,c),d=>d.repoFilesFileData,[r.fileId]),a=r.isSelected,s=a&&(e===0||!t.items[e-1].isSelected),l=i.useMemo(()=>{if(n!==void 0)return{name:o.jsx(En,{file:n}),size:o.jsx(Mn,{file:n}),modified:o.jsx(An,{file:n})}},[n]);return l===void 0?null:o.jsx(Dn,{index:e,row:l,isSelected:a,isFirstSelected:s,ariaLabel:n!==void 0?n.type==="Dir"?`Folder ${n.name}`:`File ${n.name}`:void 0},r.fileId)}),On=i.memo(({info:e})=>{const t=D(),r=T(),n=O(),a=e.items,s=i.useMemo(()=>({items:a}),[a]),l=e.sort,d=i.useMemo(()=>[{name:"name",label:"Name",sortBy:l.field==="Name"?l.direction:"Hidden"},{name:"size",label:"Size",width:t?0:"15%",minWidth:t?void 0:70,sortBy:l.field==="Size"?l.direction:"Hidden"},{name:"modified",label:"Modified",width:t?0:"20%",minWidth:t?void 0:150,sortBy:l.field==="Modified"?l.direction:"Hidden"}],[t,l]),c=i.useCallback(()=>{e.selectionSummary==="All"?r.repoFilesBrowsersClearSelection(n):r.repoFilesBrowsersSelectAll(n)},[r,n,e]),u=i.useCallback((v,x)=>{switch(x){case"name":r.repoFilesBrowsersSortBy(n,"Name");break;case"size":r.repoFilesBrowsersSortBy(n,"Size");break;case"modified":r.repoFilesBrowsersSortBy(n,"Modified");break}},[r,n]),h=i.useCallback((v,x)=>{v.stopPropagation(),r.repoFilesBrowsersSelectFile(n,a[x].fileId,!0,Ae(v),!1)},[r,n,a]),m=i.useCallback((v,x)=>{r.repoFilesBrowsersSelectFile(n,a[x].fileId,Sn(v),Ae(v),!1)},[r,n,a]),f=i.useCallback((v,x)=>{},[]);return o.jsx(In,{columns:d,selectionSummary:e.selectionSummary,length:a.length,data:s,Row:kn,ariaLabel:"Files list",onHeadCheckboxClick:c,onSortByClick:u,onRowCheckboxClick:h,onRowClick:m,onRowContextMenu:f})}),Rn=i.memo(({info:e})=>{const t=T(),r=O();return o.jsx(o.Fragment,{children:e.status.type==="Error"&&!e.status.loaded?o.jsx(br,{error:e.status.error,onRetry:()=>{t.repoFilesBrowsersLoadFiles(r)}}):e.status.type==="Loaded"&&e.totalCount===0?o.jsx(cn,{}):o.jsx(On,{info:e})})});i.lazy(()=>Dr(()=>import("./RepoFilesDropZoneDesktop-CE_HL9Sm.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])).then(e=>({default:e.RepoFilesDropZoneDesktop})));const Pn=i.memo(i.forwardRef(({isActive:e,isAllowed:t,isOver:r},n)=>{const a=$(),s=j(p`
          position: fixed;
          display: none;
          z-index: ${a.zindex.dropZoneLines};
          background-color: ${a.colors.border};
        `,e&&p`
            display: block;
          `,r&&(t?p`
                background-color: ${a.colors.successful};
              `:p`
                background-color: ${a.colors.destructive};
              `));return o.jsxs("div",{ref:n,className:p`
            display: flex;
            flex-direction: column;
            flex-grow: 1;
          `,children:[o.jsx("div",{className:j(s,p`
                top: 0;
                left: 5px;
                right: 0;
                height: 5px;
              `)}),o.jsx("div",{className:j(s,p`
                top: 5px;
                bottom: 0;
                right: 0;
                width: 5px;
              `)}),o.jsx("div",{className:j(s,p`
                bottom: 0;
                left: 0;
                right: 5px;
                height: 5px;
              `)}),o.jsx("div",{className:j(s,p`
                top: 0;
                bottom: 5px;
                left: 0;
                width: 5px;
              `)})]})}));function Nn(){const e=document.activeElement,t=["input","select","button","textarea"];return e!=null&&t.indexOf(e.tagName.toLowerCase())!==-1}function Hn(e){const t=i.useCallback(r=>{if(Nn()||r.clipboardData==null||r.clipboardData.items==null&&r.clipboardData.files==null)return;const n=r.clipboardData.files!=null?Array.from(r.clipboardData.files):Array.from(r.clipboardData.items).filter(a=>a.kind==="file");Promise.all(e(n))},[e]);i.useEffect(()=>(window.addEventListener("paste",t),()=>window.removeEventListener("paste",t)),[t])}var Ln=S,Bn=function(){return Ln.Date.now()},zn=Bn,Vn=Ie,pe=zn,ke=_r,Wn="Expected a function",Un=Math.max,Gn=Math.min;function qn(e,t,r){var n,a,s,l,d,c,u=0,h=!1,m=!1,f=!0;if(typeof e!="function")throw new TypeError(Wn);t=ke(t)||0,Vn(r)&&(h=!!r.leading,m="maxWait"in r,s=m?Un(ke(r.maxWait)||0,t):s,f="trailing"in r?!!r.trailing:f);function v(y){var k=n,W=a;return n=a=void 0,u=y,l=e.apply(W,k),l}function x(y){return u=y,d=setTimeout(C,t),h?v(y):l}function w(y){var k=y-c,W=y-u,Ee=t-k;return m?Gn(Ee,s-W):Ee}function g(y){var k=y-c,W=y-u;return c===void 0||k>=t||k<0||m&&W>=s}function C(){var y=pe();if(g(y))return _(y);d=setTimeout(C,w(y))}function _(y){return d=void 0,f&&n?v(y):(n=a=void 0,l)}function F(){d!==void 0&&clearTimeout(d),u=0,n=c=a=d=void 0}function M(){return d===void 0?l:_(pe())}function A(){var y=pe(),k=g(y);if(n=arguments,a=this,c=y,k){if(d===void 0)return x(c);if(m)return clearTimeout(d),d=setTimeout(C,t),v(c)}return d===void 0&&(d=setTimeout(C,t)),l}return A.cancel=F,A.flush=M,A}var Zn=qn,Kn=Zn,Qn=Ie,Yn="Expected a function";function Jn(e,t,r){var n=!0,a=!0;if(typeof e!="function")throw new TypeError(Yn);return Qn(r)&&(n="leading"in r?!!r.leading:n,a="trailing"in r?!!r.trailing:a),Kn(e,t,{leading:n,maxWait:t,trailing:a})}var Xn=Jn;const eo=ee(Xn);function to(e){return e.isDirectory}function ro(e){return new Promise((t,r)=>{const n=e.createReader();let a=[];const s=()=>{n.readEntries(l=>{l.length===0?t(a):(a=a.concat(Array.from(l)),setTimeout(s,10))},r)};s()})}function no(e){return new Promise((t,r)=>e.file(t,r))}function oo(e){const t=s=>{const l=(d,c)=>{d(s)};return{isDirectory:!1,isFile:!0,name:s.name,file:l}},r=(s,l)=>({name:s,isFile:!1,isDirectory:!0,createReader:()=>{let c=!1;return{readEntries:(h,m)=>{c?h([]):(c=!0,h(l))}}}}),n={name:"",isDirectory:!0,file:void 0,children:new Map};e.forEach(s=>{const l=s.webkitRelativePath.split("/"),d=l.slice(0,l.length-1);let c=n;d.forEach(u=>{let h=c.children.get(u);h===void 0&&(h={name:u,isDirectory:!0,file:void 0,children:new Map},c.children.set(u,h)),c=h}),c.children.set(s.name,{name:s.name,isDirectory:!1,file:s,children:void 0})});const a=s=>{if(s.isDirectory){const l=Array.from(s.children.values()).map(a);return r(s.name,l)}return t(s.file)};return Array.from(n.children.values()).map(a)}function Oe(e){return String.prototype.normalize?e.normalize().split("").filter(n=>n>=" "&&!(n>=""&&n<="")).join(""):e}function ao(e,t){return e+(/\/$/.test(e)?"":"/")+(t[0]!=="/"?t:t.slice(1))}class so{constructor(t){U(this,"upload");U(this,"queue",[]);U(this,"processQueue",()=>{if(this.queue.length===0)return;const t=this.queue.slice();this.queue.length=0;const r=t.map(n=>n.entry);this.uploadFileEntries(r).forEach((n,a)=>{n.then(t[a].resolve,t[a].reject)})});U(this,"processQueueThrottled",eo(this.processQueue,100));this.upload=t.upload}uploadFileEntries(t){return t.length===0?[]:this.upload(t)}getFileName(t){let r=Oe(t.name);if(r==="image.jpeg"||r==="image.jpg"||r==="image.png"){const n=Te(new Date,"yyyyMMdd_hhmmssSSS"),a=r.split(".").pop();r=`image_${n}.${a}`}return r}addEntry(t){return new Promise((r,n)=>{if(t.name===".DS_Store"){r();return}this.queue.push({entry:t,resolve:r,reject:n}),this.processQueueThrottled()})}async handleEntryDir(t,r){const n=Oe(t.name),a=ao(r,n);await io(30);const s=await ro(t);return await Promise.all(s.map(l=>this.handleEntry(l,a).then(()=>{}))),a}async handleEntryFile(t,r){const n=await no(t),a={parentPath:r,name:this.getFileName(n),file:n};await this.addEntry(a)}async handleEntry(t,r){to(t)?await this.handleEntryDir(t,r):await this.handleEntryFile(t,r)}uploadDataTransferItems(t){return t.filter(r=>r.webkitGetAsEntry!=null).map(r=>r.webkitGetAsEntry()).filter(r=>r!=null).map(r=>this.handleEntry(r,"/"))}uploadWebkitFilesAsEntries(t){return oo(t).map(r=>this.handleEntry(r,"/"))}uploadNativeFiles(t){return this.uploadFileEntries(t.map(r=>({parentPath:"/",name:this.getFileName(r),file:r})))}uploadFiles(t){if(t.length>0){const r=t[0];if(r.webkitGetAsEntry!=null)return r.webkitGetAsEntry()!=null?this.uploadDataTransferItems(t):[];if(r.webkitRelativePath!=null)return this.uploadWebkitFilesAsEntries(t)}return this.uploadNativeFiles(t)}}const io=e=>new Promise(t=>setTimeout(t,e));function _t(){const e=T(),t=O();return i.useCallback(n=>{const{repoId:a,encryptedPath:s}=e.repoFilesBrowsersInfo(t);return a===void 0||s===void 0?[]:new so({upload(d){return d.map(async c=>{const u=c.parentPath==="/"?c.name:c.parentPath.slice(1)+"/"+c.name;await e.transfersUpload(a,s,u,c.file)})}}).uploadFiles(n)},[e,t])}const lo=i.memo(()=>{const t=_t(),[{canDrop:r,isOver:n},a]=en(()=>({accept:[qt],collect:s=>({canDrop:s.canDrop(),isOver:s.isOver({shallow:!0})}),drop:(s,l)=>{if(l.didDrop())return;const d=s.items!=null?Array.from(s.items):Array.from(s.files);Promise.all(t(d))}}),[t]);return i.useEffect(()=>{a(document.body)},[a]),Hn(t),o.jsx(Pn,{isActive:r,isOver:n,isAllowed:!0})}),co=i.memo(()=>o.jsx(lo,{})),uo=i.memo(({info:{srcFilesCount:e,mode:t,dirPickerId:r,destFileName:n,createDirEnabled:a,canMove:s},cancel:l})=>{const d=D(),c=$(),u=T(),h=i.useCallback((v,x,w)=>u.repoFilesMoveDirPickerClick(x,w),[u]),m=i.useCallback(()=>{u.repoFilesMoveCreateDir()},[u]),f=i.useCallback(async()=>{u.repoFilesMoveMoveFiles()},[u]);return o.jsxs(o.Fragment,{children:[o.jsx(it,{children:o.jsxs(lt,{className:p`
              font-weight: normal;
            `,children:[t==="Copy"?"Copy":"Move"," ",o.jsxs("strong",{className:p`
                font-weight: 600;
              `,children:[e," ",e===1?"item":"items"]}),n!==void 0?o.jsxs(o.Fragment,{children:[" to ",o.jsx("strong",{className:p`
                    font-weight: 600;
                  `,children:n})]}):null]})}),o.jsx(ct,{className:p`
            padding-bottom: 0;
            overflow: hidden;
          `,children:o.jsx("div",{className:j(p`
                border: 1px solid ${c.colors.borderDarker};
                border-radius: 3px;
                overflow-y: scroll;
                overflow-x: hidden;
              `,d?p`
                    flex-grow: 1;
                  `:p`
                    height: 300px;
                  `),children:o.jsx(Sr,{pickerId:r,onClick:h})})}),o.jsxs(dt,{children:[o.jsx(Zt,{children:o.jsx(yr,{type:"button",disabled:!a,onClick:m,children:"Create folder"})}),o.jsxs(ut,{children:[o.jsx(ge,{type:"button",onClick:l,children:"Cancel"}),o.jsx(ge,{type:"button",variant:s?"primary":"disabled",disabled:!s,onClick:f,children:t==="Copy"?"Copy":"Move"})]})]})]})}),po=i.memo(()=>{const e=T(),[t]=re((n,a)=>n.repoFilesMoveInfoSubscribe(a),n=>n.repoFilesMoveInfoData,[]),r=i.useCallback(()=>e.repoFilesMoveCancel(),[e]);return o.jsx(pt,{show:t!==void 0,onHide:r,children:t!==void 0?o.jsx(uo,{info:t,cancel:r}):o.jsx(o.Fragment,{})})}),ho=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},i.createElement("path",{fill:"#fff",d:"M9.722 9.752h4.92a.72.72 0 0 0 .72-.72v-.023a.72.72 0 0 0-.72-.72h-4.92V3.375a.72.72 0 0 0-.72-.72h-.024a.72.72 0 0 0-.72.72V8.29H3.362a.72.72 0 0 0-.72.72v.023c0 .397.323.72.72.72h4.896v4.896c0 .397.323.72.72.72h.024a.72.72 0 0 0 .72-.72V9.752Z"})),fo=E.nav`
  display: flex;
  flex-direction: row;
  padding-top: ${({theme:e})=>e.isMobile?0:"11px"};
`,mo=i.memo(i.forwardRef(({children:e,className:t,backgroundClassName:r,icon:n,...a},s)=>{const l=$();return o.jsx(wr,{className:j(p`
            ${Fe}
            margin: 0;
            padding: 0;

            ${K} {
              text-decoration: none;
            }
          `,l.isMobile?p`
                min-width: 37px;
              `:p`
                margin-left: 6px;
                margin-right: 6px;
                margin-bottom: 5px;
                min-width: 45px;

                &:last-of-type {
                  margin-right: 0;
                }
              `),...a,ref:s,children:o.jsxs("div",{className:p`
            display: flex;
            flex-direction: column;
            align-items: center;
          `,children:[o.jsx("div",{className:j(p`
                display: flex;
                justify-content: center;
                align-items: center;
                width: 32px;
                height: 32px;
                border-radius: 3px;
                transition: ${Cr};
              `,!l.isMobile&&p`
                  margin-bottom: 3px;
                `,r),children:n}),l.isMobile?null:o.jsx("div",{className:p`
                display: block;
                color: ${l.colors.text};
                font-size: 11px;
                line-height: 20px;
                font-weight: 600;
                text-align: center;
              `,children:e})]})})})),go=i.memo(({hide:e})=>{const t=q(),r=i.useCallback(()=>{var n;e(),(n=t.uploadFile)==null||n.call(t)},[e,t]);return o.jsx(ae,{onClick:r,children:"Upload file"})}),vo=i.memo(({hide:e})=>{const t=q(),r=i.useCallback(()=>{var n;e(),(n=t.uploadDir)==null||n.call(t)},[e,t]);return o.jsx(ae,{onClick:r,children:"Upload folder"})}),xo=i.memo(({hide:e})=>{const t=T(),r=O(),n=i.useCallback(()=>t.repoFilesBrowsersCreateDir(r),[t,r]);return o.jsx(o.Fragment,{children:o.jsx(ae,{onClick:()=>{e(),n()},children:"Create folder"})})}),bo=i.memo(({hide:e})=>{const t=Rt(),r=T(),n=O(),a=i.useCallback(()=>{const{repoId:s}=r.repoFilesBrowsersInfo(n),l=`new text file ${Te(new Date,"yyyyMMddHHmmss")}.txt`;r.repoFilesBrowsersCreateFile(n,l).then(d=>{d!==void 0&&t($e(s,d,!0))})},[r,n,t]);return o.jsx(o.Fragment,{children:o.jsx(ae,{onClick:()=>{e(),a()},children:"Create new text file"})})}),yo=i.memo(({hide:e})=>o.jsxs(o.Fragment,{children:[o.jsx(go,{hide:e}),o.jsx(vo,{hide:e}),o.jsx(xo,{hide:e}),o.jsx(hr,{}),o.jsx(bo,{hide:e})]})),wo=i.memo(()=>{const e=$(),[t,{show:r,popper:n,toggle:a}]=fr({popperConfig:{strategy:"fixed"}});return mr(r,n),o.jsx(gr,{isVisible:r,...t,className:p`
        width: 230px;
        z-index: ${e.zindex.repoFilesAddMenu};
      `,children:o.jsx(yo,{hide:()=>a==null?void 0:a(!1)})})}),Co=i.memo(()=>{const e=$(),[t]=vr();return o.jsx(mo,{backgroundClassName:p`
        background-color: ${e.colors.primary};

        &:hover {
          background-color: ${e.colors.primaryHover};
        }
      `,icon:o.jsx(ho,{role:"img"}),...t,children:"Add"})}),jo=i.memo(()=>{const[e,t]=i.useState(!1);return o.jsxs(xr,{show:e,onToggle:r=>t(r),placement:"bottom",children:[o.jsx(Co,{}),o.jsx(wo,{})]})}),_o=i.memo(({info:e})=>o.jsx(fo,{children:(e==null?void 0:e.encryptedPath)!==void 0?o.jsx(jo,{}):null})),$o=i.memo(({info:e})=>{const t=$(),{status:r,totalCount:n,totalSizeDisplay:a,selectedCount:s,selectedSizeDisplay:l}=e;return r.type==="Loading"&&!r.loaded||r.type==="Error"||n===0?null:o.jsx("div",{className:p`
          font-size: 13px;
          font-weight: normal;
          color: ${t.colors.textLight};
          flex-shrink: 0;
        `,children:s>0?o.jsxs("span",{children:[s," ",s===1?"item":"items"," -"," ",l," selected"]}):o.jsxs("span",{children:[n," ",n===1?"item":"items"," -"," ",a]})})}),To=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},i.createElement("g",{fill:"#263238"},i.createElement("path",{d:"M7.766 6.388c-.002 0-.07-.027-.081-.03.023.004-4.783.005-4.783.005v9.585h8.307v-6.45a.33.33 0 0 0 .06.135S7.754 6.38 7.766 6.388Zm4.496 2.171c.226.21.41.63.41.938v7.355c0 .308-.25.558-.559.558H2a.559.559 0 0 1-.56-.558V5.459A.56.56 0 0 1 2 4.901h5.749c.309 0 .742.17.969.379l3.545 3.28Z"}),i.createElement("path",{d:"M7.428 5.887V9.95h4.199V8.486H8.883V5.887H7.428Z"}),i.createElement("path",{d:"M5.328 5.452V1.135c0-.309.25-.559.559-.559h5.749c.309 0 .742.17.969.38l3.545 3.279c.226.21.41.63.41.938v7.354a.56.56 0 0 1-.559.56h-3.924v-1.463h3.02V5.173a.33.33 0 0 0 .06.135s-3.515-3.252-3.504-3.244L6.79 2.038v3.414H5.328Z"}),i.createElement("path",{d:"M11.317 1.57v4.057h4.344V4.165h-2.886V1.563l-1.458.007Z"}))),Fo=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},i.createElement("g",{fill:"#676F73"},i.createElement("path",{d:"M7.766 6.388c-.002 0-.07-.027-.081-.03.023.004-4.783.005-4.783.005v9.585h8.307v-6.45a.33.33 0 0 0 .06.135S7.754 6.38 7.766 6.388Zm4.496 2.171c.226.21.41.63.41.938v7.355c0 .308-.25.558-.559.558H2a.559.559 0 0 1-.56-.558V5.459A.56.56 0 0 1 2 4.901h5.749c.309 0 .742.17.969.379l3.545 3.28Z"}),i.createElement("path",{d:"m7.408 5.887.02 4.062h4.2V8.486H8.883L8.87 5.887H7.408Z"}),i.createElement("path",{d:"M5.328 5.452V1.135c0-.309.25-.559.559-.559h5.749c.309 0 .742.17.969.38l3.545 3.279c.226.21.41.63.41.938v7.354a.56.56 0 0 1-.559.56h-3.924v-1.463h3.02V5.173a.33.33 0 0 0 .06.135s-3.515-3.252-3.504-3.244L6.79 2.038v3.414H5.328Z"}),i.createElement("path",{d:"m11.296 1.57.02 4.057h4.345V4.165h-2.886l-.017-2.602c-.001-.224-1.463-.217-1.462.007Z"}))),Io=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},i.createElement("path",{fill:"#263238",d:"m10.1 2.029.043.035a.547.547 0 0 0-.081-.03.465.465 0 0 0 .063.005H2.903V15.96h12.195V6.573a.54.54 0 0 0 .004.071.316.316 0 0 0 .055.065l-5.056-4.68Zm6.05 3.606c.227.21.41.63.41.938v10.292c0 .309-.25.559-.558.559H1.999a.559.559 0 0 1-.559-.559V1.135c0-.309.25-.559.56-.559h8.125c.309 0 .743.17.97.38l5.055 4.68Z"}),i.createElement("path",{fill:"#263238",d:"M9.758 1.714v5.39h6.245V5.64h-4.79V1.707l-1.455.007Z"}),i.createElement("path",{fill:"#71BA05",d:"M3.582 11.383h-.68v1.462h6.83v-1.462H3.581Z"}),i.createElement("path",{fill:"#71BA05",d:"M11.32 12.123 8.23 9.032a.731.731 0 1 0-1.034 1.034l2.057 2.056-2.057 2.058a.731.731 0 0 0 1.034 1.034l3.09-3.091Z"})),Do=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},i.createElement("g",{fill:"#676F73"},i.createElement("path",{d:"m10.1 2.029.043.035a.547.547 0 0 0-.081-.03.465.465 0 0 0 .063.005H2.903V15.96h12.195V6.573a.54.54 0 0 0 .004.071.316.316 0 0 0 .055.065l-5.056-4.68Zm6.05 3.606c.227.21.41.63.41.938v10.292c0 .309-.25.559-.558.559H1.999a.559.559 0 0 1-.559-.559V1.135c0-.309.25-.559.56-.559h8.125c.309 0 .743.17.97.38l5.055 4.68Z"}),i.createElement("path",{d:"M9.758 1.714v5.39h6.245V5.64h-4.79V1.707l-1.455.007Zm-6.176 9.669H2.85v1.462h6.881v-1.462h-6.15Z"}),i.createElement("path",{d:"M11.32 12.123 8.23 9.032a.731.731 0 1 0-1.034 1.034l2.057 2.056-2.057 2.058a.731.731 0 0 0 1.034 1.034l3.09-3.091Z"}))),So=i.memo(({info:e,onInfoClick:t})=>{const r=D(),n=T(),a=O(),s=e.selectedFile!==void 0?e.selectedFile:void 0,l=i.useCallback(()=>{s!==void 0&&n.repoFilesRenameFile(s.repoId,s.encryptedPath)},[n,s]);return o.jsxs(er,{children:[e.selectedFile!==void 0?o.jsx(R,{icon:o.jsx(Nt,{role:"img"}),iconHover:o.jsx(Ht,{role:"img"}),onClick:t,children:"Info"}):null,r&&s!==void 0?o.jsx(R,{icon:o.jsx(ft,{role:"img"}),iconHover:o.jsx(mt,{role:"img"}),onClick:l,children:"Rename"}):null,e.canCopySelected?o.jsx(R,{icon:o.jsx(Fo,{role:"img"}),iconHover:o.jsx(To,{role:"img"}),onClick:()=>{n.repoFilesBrowsersMoveSelected(a,"Copy")},children:"Copy"}):null,e.canMoveSelected?o.jsx(R,{icon:o.jsx(Do,{role:"img"}),iconHover:o.jsx(Io,{role:"img"}),onClick:()=>{n.repoFilesBrowsersMoveSelected(a,"Move")},children:"Move"}):null,e.canDownloadSelected?o.jsx(R,{icon:o.jsx(tr,{role:"img"}),iconHover:o.jsx(rr,{role:"img"}),onClick:()=>{nr(n,a,r)},children:"Download"}):null,e.canDeleteSelected?o.jsx(R,{icon:o.jsx(or,{role:"img"}),iconHover:o.jsx(ar,{role:"img"}),onClick:()=>{n.repoFilesBrowsersDeleteSelected(a)},children:"Delete"}):null,e.selectedFile!==void 0&&sr(e.selectedFile)?o.jsx(R,{as:Q,to:$e(e.selectedFile.repoId,e.selectedFile.encryptedPath,!0),icon:o.jsx(ir,{role:"img"}),iconHover:o.jsx(lr,{role:"img"}),children:"Edit text"}):null,e.selectedCount>0?o.jsx(cr,{onClick:()=>n.repoFilesBrowsersClearSelection(a)}):null]})}),Eo=i.memo(({info:e,onInfoClick:t})=>{const r=D();return o.jsx("div",{className:j(p`
          display: flex;
        `,r?p`
              flex-direction: column;
              align-items: center;
            `:p`
              width: 100%;
              flex-direction: row;
              align-items: center;
              overflow: hidden;
            `),children:e!==void 0?o.jsxs("div",{className:j(p`
              flex-grow: 1;
              flex-shrink: 0;
              margin: 0;
              padding: 0;
              display: flex;
              align-items: center;
              position: relative;
            `,r?p``:p`
                  margin-right: 50px;
                `),children:[o.jsx($o,{info:e}),o.jsx(So,{info:e,onInfoClick:t})]}):null})}),Mo=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none",...e},i.createElement("path",{fill:"#71BA05",fillRule:"evenodd",d:"M3.52 0A3.526 3.526 0 0 0 0 3.52v24.96C0 30.42 1.58 32 3.52 32h24.96c1.94 0 3.52-1.58 3.52-3.52V3.52C32 1.58 30.42 0 28.48 0H3.52Zm0 1.26h24.96a2.24 2.24 0 0 1 2.26 2.26v24.96a2.24 2.24 0 0 1-2.26 2.26H3.52a2.24 2.24 0 0 1-2.26-2.26V3.52a2.24 2.24 0 0 1 2.26-2.26Zm12.75 9.784a.72.72 0 0 0-.459.169L10 16.078l5.811 4.866a.724.724 0 1 0 .93-1.113l-3.81-3.188H22a.655.655 0 1 0 0-1.312h-8.864l3.604-3.006a.725.725 0 0 0-.47-1.28Z",clipRule:"evenodd"})),Ao=i.memo(({to:e})=>o.jsx(Q,{to:e,className:p`
        display: flex;
        align-items: center;
      `,"aria-label":"Back",children:o.jsx(Mo,{role:"img"})})),ko=i.memo(({breadcrumbs:e})=>{if(D()&&e.length>1){const r=e[e.length-2],n=_e(r.repoId,r.path);return o.jsx(Ao,{to:n})}else return o.jsx(Er,{})});i.memo(()=>{const e=tn(),t=q(),r=O();return i.useEffect(()=>(t.uploadFile=()=>{const{repoId:n,encryptedPath:a}=e.repoFilesBrowsersInfo(r);n!==void 0&&a!==void 0&&e.repoFilesUploadFile(n,a)},t.uploadDir=()=>{const{repoId:n,encryptedPath:a}=e.repoFilesBrowsersInfo(r);n!==void 0&&a!==void 0&&e.repoFilesUploadDir(n,a)},()=>{t.uploadFile=void 0,t.uploadDir=void 0}),[e,r,t]),null});const Oo=i.memo(()=>{const e=_t(),t=i.useRef(null),r=q(),n=i.useCallback(l=>{l===null?r.uploadFile=void 0:r.uploadFile=()=>l.click()},[r]),a=i.useCallback(l=>{l===null?r.uploadDir=void 0:r.uploadDir=()=>l.click()},[r]),s=i.useCallback(async l=>{if(l.currentTarget.files!==null){const d=Array.from(l.currentTarget.files);Promise.all(e(d))}t.current!==null&&t.current.reset()},[e]);return o.jsxs("form",{ref:t,style:{display:"none"},children:[o.jsx("input",{type:"file",ref:n,onChange:s,"aria-label":"Upload file"}),o.jsx("input",{type:"file",ref:a,onChange:s,"aria-label":"Upload folder",webkitdirectory:"",mozdirectory:"",directory:""})]})}),Ro=i.memo(()=>o.jsx(Oo,{}));function Po(){this.__data__=[],this.size=0}var No=Po,Ho=gt;function Lo(e,t){for(var r=e.length;r--;)if(Ho(e[r][0],t))return r;return-1}var ie=Lo,Bo=ie,zo=Array.prototype,Vo=zo.splice;function Wo(e){var t=this.__data__,r=Bo(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():Vo.call(t,r,1),--this.size,!0}var Uo=Wo,Go=ie;function qo(e){var t=this.__data__,r=Go(t,e);return r<0?void 0:t[r][1]}var Zo=qo,Ko=ie;function Qo(e){return Ko(this.__data__,e)>-1}var Yo=Qo,Jo=ie;function Xo(e,t){var r=this.__data__,n=Jo(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}var ea=Xo,ta=No,ra=Uo,na=Zo,oa=Yo,aa=ea;function N(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}N.prototype.clear=ta;N.prototype.delete=ra;N.prototype.get=na;N.prototype.has=oa;N.prototype.set=aa;var le=N,sa=le;function ia(){this.__data__=new sa,this.size=0}var la=ia;function ca(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}var da=ca;function ua(e){return this.__data__.get(e)}var pa=ua;function ha(e){return this.__data__.has(e)}var fa=ha,ma=S,ga=ma["__core-js_shared__"],va=ga,he=va,Re=function(){var e=/[^.]+$/.exec(he&&he.keys&&he.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function xa(e){return!!Re&&Re in e}var ba=xa,ya=Function.prototype,wa=ya.toString;function Ca(e){if(e!=null){try{return wa.call(e)}catch{}try{return e+""}catch{}}return""}var $t=Ca,ja=$r,_a=ba,$a=Ie,Ta=$t,Fa=/[\\^$.*+?()[\]{}|]/g,Ia=/^\[object .+?Constructor\]$/,Da=Function.prototype,Sa=Object.prototype,Ea=Da.toString,Ma=Sa.hasOwnProperty,Aa=RegExp("^"+Ea.call(Ma).replace(Fa,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ka(e){if(!$a(e)||_a(e))return!1;var t=ja(e)?Aa:Ia;return t.test(Ta(e))}var Oa=ka;function Ra(e,t){return e==null?void 0:e[t]}var Pa=Ra,Na=Oa,Ha=Pa;function La(e,t){var r=Ha(e,t);return Na(r)?r:void 0}var H=La,Ba=H,za=S,Va=Ba(za,"Map"),Se=Va,Wa=H,Ua=Wa(Object,"create"),ce=Ua,Pe=ce;function Ga(){this.__data__=Pe?Pe(null):{},this.size=0}var qa=Ga;function Za(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Ka=Za,Qa=ce,Ya="__lodash_hash_undefined__",Ja=Object.prototype,Xa=Ja.hasOwnProperty;function es(e){var t=this.__data__;if(Qa){var r=t[e];return r===Ya?void 0:r}return Xa.call(t,e)?t[e]:void 0}var ts=es,rs=ce,ns=Object.prototype,os=ns.hasOwnProperty;function as(e){var t=this.__data__;return rs?t[e]!==void 0:os.call(t,e)}var ss=as,is=ce,ls="__lodash_hash_undefined__";function cs(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=is&&t===void 0?ls:t,this}var ds=cs,us=qa,ps=Ka,hs=ts,fs=ss,ms=ds;function L(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}L.prototype.clear=us;L.prototype.delete=ps;L.prototype.get=hs;L.prototype.has=fs;L.prototype.set=ms;var gs=L,Ne=gs,vs=le,xs=Se;function bs(){this.size=0,this.__data__={hash:new Ne,map:new(xs||vs),string:new Ne}}var ys=bs;function ws(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var Cs=ws,js=Cs;function _s(e,t){var r=e.__data__;return js(t)?r[typeof t=="string"?"string":"hash"]:r.map}var de=_s,$s=de;function Ts(e){var t=$s(this,e).delete(e);return this.size-=t?1:0,t}var Fs=Ts,Is=de;function Ds(e){return Is(this,e).get(e)}var Ss=Ds,Es=de;function Ms(e){return Es(this,e).has(e)}var As=Ms,ks=de;function Os(e,t){var r=ks(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}var Rs=Os,Ps=ys,Ns=Fs,Hs=Ss,Ls=As,Bs=Rs;function B(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}B.prototype.clear=Ps;B.prototype.delete=Ns;B.prototype.get=Hs;B.prototype.has=Ls;B.prototype.set=Bs;var Tt=B,zs=le,Vs=Se,Ws=Tt,Us=200;function Gs(e,t){var r=this.__data__;if(r instanceof zs){var n=r.__data__;if(!Vs||n.length<Us-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Ws(n)}return r.set(e,t),this.size=r.size,this}var qs=Gs,Zs=le,Ks=la,Qs=da,Ys=pa,Js=fa,Xs=qs;function z(e){var t=this.__data__=new Zs(e);this.size=t.size}z.prototype.clear=Ks;z.prototype.delete=Qs;z.prototype.get=Ys;z.prototype.has=Js;z.prototype.set=Xs;var ei=z,ti="__lodash_hash_undefined__";function ri(e){return this.__data__.set(e,ti),this}var ni=ri;function oi(e){return this.__data__.has(e)}var ai=oi,si=Tt,ii=ni,li=ai;function Y(e){var t=-1,r=e==null?0:e.length;for(this.__data__=new si;++t<r;)this.add(e[t])}Y.prototype.add=Y.prototype.push=ii;Y.prototype.has=li;var ci=Y;function di(e,t){for(var r=-1,n=e==null?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}var ui=di;function pi(e,t){return e.has(t)}var hi=pi,fi=ci,mi=ui,gi=hi,vi=1,xi=2;function bi(e,t,r,n,a,s){var l=r&vi,d=e.length,c=t.length;if(d!=c&&!(l&&c>d))return!1;var u=s.get(e),h=s.get(t);if(u&&h)return u==t&&h==e;var m=-1,f=!0,v=r&xi?new fi:void 0;for(s.set(e,t),s.set(t,e);++m<d;){var x=e[m],w=t[m];if(n)var g=l?n(w,x,m,t,e,s):n(x,w,m,e,t,s);if(g!==void 0){if(g)continue;f=!1;break}if(v){if(!mi(t,function(C,_){if(!gi(v,_)&&(x===C||a(x,C,r,n,s)))return v.push(_)})){f=!1;break}}else if(!(x===w||a(x,w,r,n,s))){f=!1;break}}return s.delete(e),s.delete(t),f}var Ft=bi,yi=S,wi=yi.Uint8Array,Ci=wi;function ji(e){var t=-1,r=Array(e.size);return e.forEach(function(n,a){r[++t]=[a,n]}),r}var _i=ji;function $i(e){var t=-1,r=Array(e.size);return e.forEach(function(n){r[++t]=n}),r}var Ti=$i,He=Kt,Le=Ci,Fi=gt,Ii=Ft,Di=_i,Si=Ti,Ei=1,Mi=2,Ai="[object Boolean]",ki="[object Date]",Oi="[object Error]",Ri="[object Map]",Pi="[object Number]",Ni="[object RegExp]",Hi="[object Set]",Li="[object String]",Bi="[object Symbol]",zi="[object ArrayBuffer]",Vi="[object DataView]",Be=He?He.prototype:void 0,fe=Be?Be.valueOf:void 0;function Wi(e,t,r,n,a,s,l){switch(r){case Vi:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case zi:return!(e.byteLength!=t.byteLength||!s(new Le(e),new Le(t)));case Ai:case ki:case Pi:return Fi(+e,+t);case Oi:return e.name==t.name&&e.message==t.message;case Ni:case Li:return e==t+"";case Ri:var d=Di;case Hi:var c=n&Ei;if(d||(d=Si),e.size!=t.size&&!c)return!1;var u=l.get(e);if(u)return u==t;n|=Mi,l.set(e,t);var h=Ii(d(e),d(t),n,a,s,l);return l.delete(e),h;case Bi:if(fe)return fe.call(e)==fe.call(t)}return!1}var Ui=Wi;function Gi(e,t){for(var r=-1,n=t.length,a=e.length;++r<n;)e[a+r]=t[r];return e}var qi=Gi,Zi=qi,Ki=oe;function Qi(e,t,r){var n=t(e);return Ki(e)?n:Zi(n,r(e))}var Yi=Qi;function Ji(e,t){for(var r=-1,n=e==null?0:e.length,a=0,s=[];++r<n;){var l=e[r];t(l,r,e)&&(s[a++]=l)}return s}var Xi=Ji;function el(){return[]}var tl=el,rl=Xi,nl=tl,ol=Object.prototype,al=ol.propertyIsEnumerable,ze=Object.getOwnPropertySymbols,sl=ze?function(e){return e==null?[]:(e=Object(e),rl(ze(e),function(t){return al.call(e,t)}))}:nl,il=sl;function ll(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var cl=ll,dl=ne,ul=G,pl="[object Arguments]";function hl(e){return ul(e)&&dl(e)==pl}var fl=hl,Ve=fl,ml=G,It=Object.prototype,gl=It.hasOwnProperty,vl=It.propertyIsEnumerable,xl=Ve(function(){return arguments}())?Ve:function(e){return ml(e)&&gl.call(e,"callee")&&!vl.call(e,"callee")},bl=xl,J={exports:{}};function yl(){return!1}var wl=yl;J.exports;(function(e,t){var r=S,n=wl,a=t&&!t.nodeType&&t,s=a&&!0&&e&&!e.nodeType&&e,l=s&&s.exports===a,d=l?r.Buffer:void 0,c=d?d.isBuffer:void 0,u=c||n;e.exports=u})(J,J.exports);var Dt=J.exports,Cl=ne,jl=Tr,_l=G,$l="[object Arguments]",Tl="[object Array]",Fl="[object Boolean]",Il="[object Date]",Dl="[object Error]",Sl="[object Function]",El="[object Map]",Ml="[object Number]",Al="[object Object]",kl="[object RegExp]",Ol="[object Set]",Rl="[object String]",Pl="[object WeakMap]",Nl="[object ArrayBuffer]",Hl="[object DataView]",Ll="[object Float32Array]",Bl="[object Float64Array]",zl="[object Int8Array]",Vl="[object Int16Array]",Wl="[object Int32Array]",Ul="[object Uint8Array]",Gl="[object Uint8ClampedArray]",ql="[object Uint16Array]",Zl="[object Uint32Array]",b={};b[Ll]=b[Bl]=b[zl]=b[Vl]=b[Wl]=b[Ul]=b[Gl]=b[ql]=b[Zl]=!0;b[$l]=b[Tl]=b[Nl]=b[Fl]=b[Hl]=b[Il]=b[Dl]=b[Sl]=b[El]=b[Ml]=b[Al]=b[kl]=b[Ol]=b[Rl]=b[Pl]=!1;function Kl(e){return _l(e)&&jl(e.length)&&!!b[Cl(e)]}var Ql=Kl;function Yl(e){return function(t){return e(t)}}var Jl=Yl,X={exports:{}};X.exports;(function(e,t){var r=Qt,n=t&&!t.nodeType&&t,a=n&&!0&&e&&!e.nodeType&&e,s=a&&a.exports===n,l=s&&r.process,d=function(){try{var c=a&&a.require&&a.require("util").types;return c||l&&l.binding&&l.binding("util")}catch{}}();e.exports=d})(X,X.exports);var Xl=X.exports,ec=Ql,tc=Jl,We=Xl,Ue=We&&We.isTypedArray,rc=Ue?tc(Ue):ec,St=rc,nc=cl,oc=bl,ac=oe,sc=Dt,ic=Fr,lc=St,cc=Object.prototype,dc=cc.hasOwnProperty;function uc(e,t){var r=ac(e),n=!r&&oc(e),a=!r&&!n&&sc(e),s=!r&&!n&&!a&&lc(e),l=r||n||a||s,d=l?nc(e.length,String):[],c=d.length;for(var u in e)(t||dc.call(e,u))&&!(l&&(u=="length"||a&&(u=="offset"||u=="parent")||s&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||ic(u,c)))&&d.push(u);return d}var pc=uc,hc=Object.prototype;function fc(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||hc;return e===r}var mc=fc;function gc(e,t){return function(r){return e(t(r))}}var vc=gc,xc=vc,bc=xc(Object.keys,Object),yc=bc,wc=mc,Cc=yc,jc=Object.prototype,_c=jc.hasOwnProperty;function $c(e){if(!wc(e))return Cc(e);var t=[];for(var r in Object(e))_c.call(e,r)&&r!="constructor"&&t.push(r);return t}var Tc=$c,Fc=pc,Ic=Tc,Dc=Ir;function Sc(e){return Dc(e)?Fc(e):Ic(e)}var Ec=Sc,Mc=Yi,Ac=il,kc=Ec;function Oc(e){return Mc(e,kc,Ac)}var Rc=Oc,Ge=Rc,Pc=1,Nc=Object.prototype,Hc=Nc.hasOwnProperty;function Lc(e,t,r,n,a,s){var l=r&Pc,d=Ge(e),c=d.length,u=Ge(t),h=u.length;if(c!=h&&!l)return!1;for(var m=c;m--;){var f=d[m];if(!(l?f in t:Hc.call(t,f)))return!1}var v=s.get(e),x=s.get(t);if(v&&x)return v==t&&x==e;var w=!0;s.set(e,t),s.set(t,e);for(var g=l;++m<c;){f=d[m];var C=e[f],_=t[f];if(n)var F=l?n(_,C,f,t,e,s):n(C,_,f,e,t,s);if(!(F===void 0?C===_||a(C,_,r,n,s):F)){w=!1;break}g||(g=f=="constructor")}if(w&&!g){var M=e.constructor,A=t.constructor;M!=A&&"constructor"in e&&"constructor"in t&&!(typeof M=="function"&&M instanceof M&&typeof A=="function"&&A instanceof A)&&(w=!1)}return s.delete(e),s.delete(t),w}var Bc=Lc,zc=H,Vc=S,Wc=zc(Vc,"DataView"),Uc=Wc,Gc=H,qc=S,Zc=Gc(qc,"Promise"),Kc=Zc,Qc=H,Yc=S,Jc=Qc(Yc,"Set"),Xc=Jc,ed=H,td=S,rd=ed(td,"WeakMap"),nd=rd,xe=Uc,be=Se,ye=Kc,we=Xc,Ce=nd,Et=ne,V=$t,qe="[object Map]",od="[object Object]",Ze="[object Promise]",Ke="[object Set]",Qe="[object WeakMap]",Ye="[object DataView]",ad=V(xe),sd=V(be),id=V(ye),ld=V(we),cd=V(Ce),P=Et;(xe&&P(new xe(new ArrayBuffer(1)))!=Ye||be&&P(new be)!=qe||ye&&P(ye.resolve())!=Ze||we&&P(new we)!=Ke||Ce&&P(new Ce)!=Qe)&&(P=function(e){var t=Et(e),r=t==od?e.constructor:void 0,n=r?V(r):"";if(n)switch(n){case ad:return Ye;case sd:return qe;case id:return Ze;case ld:return Ke;case cd:return Qe}return t});var dd=P,me=ei,ud=Ft,pd=Ui,hd=Bc,Je=dd,Xe=oe,et=Dt,fd=St,md=1,tt="[object Arguments]",rt="[object Array]",Z="[object Object]",gd=Object.prototype,nt=gd.hasOwnProperty;function vd(e,t,r,n,a,s){var l=Xe(e),d=Xe(t),c=l?rt:Je(e),u=d?rt:Je(t);c=c==tt?Z:c,u=u==tt?Z:u;var h=c==Z,m=u==Z,f=c==u;if(f&&et(e)){if(!et(t))return!1;l=!0,h=!1}if(f&&!h)return s||(s=new me),l||fd(e)?ud(e,t,r,n,a,s):pd(e,t,c,r,n,a,s);if(!(r&md)){var v=h&&nt.call(e,"__wrapped__"),x=m&&nt.call(t,"__wrapped__");if(v||x){var w=v?e.value():e,g=x?t.value():t;return s||(s=new me),a(w,g,r,n,s)}}return f?(s||(s=new me),hd(e,t,r,n,a,s)):!1}var xd=vd,bd=xd,ot=G;function Mt(e,t,r,n,a){return e===t?!0:e==null||t==null||!ot(e)&&!ot(t)?e!==e&&t!==t:bd(e,t,r,n,Mt,a)}var yd=Mt,wd=yd;function Cd(e,t){return wd(e,t)}var jd=Cd;const _d=ee(jd);function $d(e,t){const r=T(),n=i.useRef(e),a=i.useRef(),s=i.useMemo(()=>{if(a.current!==void 0&&_d(e,n.current)&&t===void 0)return a.current;const l=r.repoFilesBrowsersCreate(e,{selectName:t});return n.current=e,a.current=l,l},[r,e,t]);return i.useEffect(()=>()=>{r.repoFilesBrowsersDestroy(s)},[r,s]),s}const je="vaultRepoFileInfoSheetVisible";function Td(){try{if(localStorage.getItem(je)==="true")return!0}catch{}return!1}function at(e){try{e?localStorage.setItem(je,"true"):localStorage.removeItem(je)}catch{}}function Fd(e){const t=D(),[r,n]=i.useState(Td),a=r&&!t,s=Lt(),l=s.show,d=e.selectedFile,c=i.useCallback(()=>{t?d!==void 0&&l(d):n(h=>{const m=!h;return at(m),m})},[t,l,d]),u=i.useCallback(()=>{n(!1),at(!1)},[]);return{onInfoClick:c,infoSheetVisible:a,infoSheetHide:u,infoModal:s}}const Id=i.memo(({browserId:e,info:t})=>{const r=D(),n=i.useMemo(()=>t.breadcrumbs.map(u=>u.name).join(" › "),[t]);Vt(n);const{onInfoClick:a,infoSheetVisible:s,infoSheetHide:l,infoModal:d}=Fd(t),c=i.useMemo(()=>({}),[]);return o.jsx(yt.Provider,{value:e,children:o.jsx(wt.Provider,{value:c,children:o.jsxs(Bt,{navbarLeft:t!==void 0?o.jsx(ko,{breadcrumbs:t.breadcrumbs}):void 0,navbarHeader:t!==void 0?o.jsx(sn,{breadcrumbs:t.breadcrumbs}):void 0,navbarNav:o.jsx(_o,{info:t}),navbarExtra:o.jsx(Eo,{info:t,onInfoClick:a}),className:r?p`
                  padding-top: 0;
                `:p`
                  padding-top: 10px;
                `,sidenavClassName:r?p``:p`
                  margin-top: -50px;
                `,children:[t!==void 0?o.jsx(Rn,{info:t}):null,o.jsx(po,{}),(t==null?void 0:t.encryptedPath)!==void 0?o.jsx(co,{}):null,o.jsx(Ro,{}),o.jsx(an,{file:s?t==null?void 0:t.selectedFile:void 0,hide:l}),o.jsx(on,{file:d.payload,hide:d.hide})]})})})}),qd=i.memo(({source:e,selectName:t})=>{const r=$d(e,t),[n]=re((a,s)=>a.repoFilesBrowsersInfoSubscribe(r,s),a=>a.repoFilesBrowsersInfoData,[r]);return n===void 0||n.repoId===void 0?o.jsx(zt,{}):o.jsx(dr,{repoId:n.repoId,repoStatus:n.repoStatus,isLocked:n.isLocked,children:o.jsx(Id,{browserId:r,info:n})})});export{Pn as D,qd as R,O as a,tn as u};

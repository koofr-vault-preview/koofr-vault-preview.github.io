const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/RepoFilesDropZoneDesktop-BvcnMzbH.js","assets/DynamicThemeProvider-MqskYVZg.js","assets/emotion-css.esm-D9bkNW-b.js","assets/DashboardLayout-Ljf5x_Tc.js","assets/mainWebAuthenticated-OoemftV8.js","assets/NavbarSticky-ClW7pS7A.js","assets/Button-D3442RQe.js","assets/index-CuwaZ00B.js","assets/index-ulgnFFAK.css","assets/DashboardNavbar-BiBpbZil.js","assets/Navbar-D-Wj6WD0.js","assets/GitRevision-DuC4owbd.js","assets/DashboardLoading-TPfUkMWq.js","assets/useDocumentTitle-D3L4F_h2.js","assets/browser-CuLqH9VL.js","assets/DashboardError-DequXBb6.js","assets/error-icon@2x-BzFHMFnI.js","assets/PasswordInput-B_Y0Lhkz.js","assets/format-a-hYJmZ8.js","assets/range-D-uOy64e.js","assets/Checkbox-5Dzeg3U_.js","assets/DirPicker-CU646mgF.js"])))=>i.map(i=>d[i]);
import{g as Y,r as l,u as k,j as s,a as H,B as In}from"./DynamicThemeProvider-MqskYVZg.js";import{c as h,a as M,L as Q,u as Dn}from"./emotion-css.esm-D9bkNW-b.js";import{a as qn,S as Sn,b as Mn,u as En,D as An}from"./DashboardLayout-Ljf5x_Tc.js";import{D as kn}from"./DashboardLoading-TPfUkMWq.js";import{u as Nn}from"./useDocumentTitle-D3L4F_h2.js";import{k as X,D as On,a as N,F as wa,M as Ca,b as ja,c as Ta,d as Fa,e as Ra,g as Ia,h as Ar,u as ee,l as Pn,m as Hn,r as re,n as te,o as G,p as L,q as Ln,f as $n,s as Bn,t as zn}from"./mainWebAuthenticated-OoemftV8.js";import{S as Da,n as Or,o as Vn,q as Wn,s as Un,r as Pr,d as qa,c as Sa,t as Gn,T as z,u as Kn,j as Zn,k as Jn,l as Qn,m as Yn,v as Xn,g as ei,h as ri,w as ti,R as ai}from"./browser-CuLqH9VL.js";import{f as Hr}from"./format-a-hYJmZ8.js";import{u as ni}from"./NavbarSticky-ClW7pS7A.js";import{N as ii,a as si,b as oi,M as li,c as ci,d as ae,e as ui,f as di}from"./DashboardNavbar-BiBpbZil.js";import{E as pi}from"./DashboardError-DequXBb6.js";import{s as $,b as Lr,d as J,B as hi,e as fi,f as mi}from"./Button-D3442RQe.js";import{r as vi,a as $r,b as gi,c as Ma,d as bi,e as yi,f as xi,g as _i}from"./range-D-uOy64e.js";import{C as Ea}from"./Checkbox-5Dzeg3U_.js";import{_ as wi}from"./index-CuwaZ00B.js";import{D as Ci}from"./DirPicker-CU646mgF.js";import{a as ji}from"./Navbar-D-Wj6WD0.js";var ce,Ur;function Ti(){return Ur||(Ur=1,ce=function e(r,t){if(r===t)return!0;if(r&&t&&typeof r=="object"&&typeof t=="object"){if(r.constructor!==t.constructor)return!1;var a,n,i;if(Array.isArray(r)){if(a=r.length,a!=t.length)return!1;for(n=a;n--!==0;)if(!e(r[n],t[n]))return!1;return!0}if(r.constructor===RegExp)return r.source===t.source&&r.flags===t.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===t.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===t.toString();if(i=Object.keys(r),a=i.length,a!==Object.keys(t).length)return!1;for(n=a;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[n]))return!1;for(n=a;n--!==0;){var o=i[n];if(!e(r[o],t[o]))return!1}return!0}return r!==r&&t!==t}),ce}var Fi=Ti();const Ri=Y(Fi),ne=typeof window<"u"?l.useLayoutEffect:l.useEffect;function Ii(e,r,t){const[a,n]=l.useState(()=>r(e)),i=l.useCallback(()=>{const o=r(e);Ri(a,o)||(n(o),t&&t())},[a,e,t]);return ne(i),[a,i]}function Di(e,r,t){const[a,n]=Ii(e,r,t);return ne(function(){const o=e.getHandlerId();if(o!=null)return e.subscribeToStateChange(n,{handlerIds:[o]})},[e,n]),a}function qi(e,r,t){return Di(r,e||(()=>({})),()=>t.reconnect())}function Si(e,r){const t=[...r||[]];return r==null&&typeof e!="function"&&t.push(e),l.useMemo(()=>typeof e=="function"?e():e,t)}let ue=!1;class Mi{receiveHandlerId(r){this.targetId=r}getHandlerId(){return this.targetId}subscribeToStateChange(r,t){return this.internalMonitor.subscribeToStateChange(r,t)}canDrop(){if(!this.targetId)return!1;X(!ue,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return ue=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{ue=!1}}isOver(r){return this.targetId?this.internalMonitor.isOverTarget(this.targetId,r):!1}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(r){this.targetId=null,this.internalMonitor=r.getMonitor()}}function Ei(e,r,t){const a=t.getRegistry(),n=a.addTarget(e,r);return[n,()=>a.removeTarget(n)]}function Ai(e,r,t,a){let n;if(n!==void 0)return!!n;if(e===r)return!0;if(typeof e!="object"||!e||typeof r!="object"||!r)return!1;const i=Object.keys(e),o=Object.keys(r);if(i.length!==o.length)return!1;const c=Object.prototype.hasOwnProperty.bind(r);for(let u=0;u<i.length;u++){const d=i[u];if(!c(d))return!1;const p=e[d],f=r[d];if(n=void 0,n===!1||n===void 0&&p!==f)return!1}return!0}function ki(e){return e!==null&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Ni(e){if(typeof e.type=="string")return;const r=e.type.displayName||e.type.name||"the component";throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${r} into a <div>, or turn it into a drag source or a drop target itself.`)}function Oi(e){return(r=null,t=null)=>{if(!l.isValidElement(r)){const i=r;return e(i,t),i}const a=r;return Ni(a),Hi(a,t?i=>e(i,t):e)}}function Pi(e){const r={};return Object.keys(e).forEach(t=>{const a=e[t];if(t.endsWith("Ref"))r[t]=e[t];else{const n=Oi(a);r[t]=()=>n}}),r}function Gr(e,r){typeof e=="function"?e(r):e.current=r}function Hi(e,r){const t=e.ref;return X(typeof t!="string","Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"),t?l.cloneElement(e,{ref:a=>{Gr(t,a),Gr(r,a)}}):l.cloneElement(e,{ref:r})}class Li{get connectTarget(){return this.dropTarget}reconnect(){const r=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();r&&this.disconnectDropTarget();const t=this.dropTarget;if(this.handlerId){if(!t){this.lastConnectedDropTarget=t;return}r&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=t,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,t,this.dropTargetOptions))}}receiveHandlerId(r){r!==this.handlerId&&(this.handlerId=r,this.reconnect())}get dropTargetOptions(){return this.dropTargetOptionsInternal}set dropTargetOptions(r){this.dropTargetOptionsInternal=r}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didDropTargetChange(){return this.lastConnectedDropTarget!==this.dropTarget}didOptionsChange(){return!Ai(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}disconnectDropTarget(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}get dropTarget(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}clearDropTarget(){this.dropTargetRef=null,this.dropTargetNode=null}constructor(r){this.hooks=Pi({dropTarget:(t,a)=>{this.clearDropTarget(),this.dropTargetOptions=a,ki(t)?this.dropTargetRef=t:this.dropTargetNode=t,this.reconnect()}}),this.handlerId=null,this.dropTargetRef=null,this.dropTargetOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDropTarget=null,this.lastConnectedDropTargetOptions=null,this.backend=r}}function Br(){const{dragDropManager:e}=l.useContext(On);return X(e!=null,"Expected drag drop context"),e}function $i(e){return l.useMemo(()=>e.hooks.dropTarget(),[e])}function Bi(e){const r=Br(),t=l.useMemo(()=>new Li(r.getBackend()),[r]);return ne(()=>(t.dropTargetOptions=e||null,t.reconnect(),()=>t.disconnectDropTarget()),[e]),t}function zi(){const e=Br();return l.useMemo(()=>new Mi(e),[e])}function Vi(e){const{accept:r}=e;return l.useMemo(()=>(X(e.accept!=null,"accept must be defined"),Array.isArray(r)?r:[r]),[r])}class Wi{canDrop(){const r=this.spec,t=this.monitor;return r.canDrop?r.canDrop(t.getItem(),t):!0}hover(){const r=this.spec,t=this.monitor;r.hover&&r.hover(t.getItem(),t)}drop(){const r=this.spec,t=this.monitor;if(r.drop)return r.drop(t.getItem(),t)}constructor(r,t){this.spec=r,this.monitor=t}}function Ui(e,r){const t=l.useMemo(()=>new Wi(e,r),[r]);return l.useEffect(()=>{t.spec=e},[e]),t}function Gi(e,r,t){const a=Br(),n=Ui(e,r),i=Vi(e);ne(function(){const[c,u]=Ei(i,n,a);return r.receiveHandlerId(c),t.receiveHandlerId(c),u},[a,r,n,t,i.map(o=>o.toString()).join("|")])}function Ki(e,r){const t=Si(e,r),a=zi(),n=Bi(t.options);return Gi(t,a,n),[qi(t.collect,a,n),$i(n)]}function Zi(){return N()}const P=l.memo(({label:e,children:r})=>{const t=k();return s.jsxs("div",{className:h`
          margin: 0 0 15px;
        `,children:[s.jsx("div",{className:h`
            font-size: 13px;
            font-weight: normal;
            color: ${t.colors.textLight};
          `,children:e}),s.jsx("div",{className:h`
            font-size: 13px;
            font-weight: normal;
            color: ${t.colors.text};
            line-height: 1.7;
            word-break: break-word;

            & p {
              margin: 0 0 1em;

              &:last-child {
                margin-bottom: 0;
              }
            }
          `,children:r})]})});P.displayName="Item";const zr=l.memo(({file:e})=>{const r=k();return s.jsxs("div",{className:h`
        display: flex;
        flex-direction: column;
      `,children:[s.jsx(P,{label:"Name",children:e.nameError===void 0?s.jsx(s.Fragment,{children:e.name}):s.jsxs("div",{className:h`
              color: ${r.colors.destructive};
            `,children:[s.jsx("p",{children:e.name}),s.jsx("p",{children:e.nameError})]})}),s.jsx(P,{label:"Type",children:Ji(e.category)}),e.sizeDisplay!==""?s.jsx(P,{label:"Size",children:e.sizeDisplay}):null,e.modified!==void 0?s.jsxs(P,{label:"Modified",children:[s.jsx(Da,{value:e.modified,noTooltip:!0}),s.jsx("br",{}),Hr(e.modified,"PPPPpp")]}):null,s.jsx(P,{label:"Path",children:e.decryptedPath??"???"}),s.jsx(P,{label:"Encrypted path",children:e.encryptedPath}),e.type==="File"?s.jsxs(s.Fragment,{children:[s.jsx(P,{label:"MD5",children:e.tags.hash??"???"}),s.jsx(P,{label:"Encrypted MD5",children:e.remoteHash??"???"})]}):null,e.tags.error!==void 0?s.jsx(P,{label:"Tags error",children:s.jsx("span",{className:h`
              color: ${r.colors.destructive};
            `,children:e.tags.error})}):null]})});zr.displayName="RepoFileInfoGeneral";function Ji(e){switch(e){case"Generic":return"File";case"Folder":return"Folder";case"Archive":return"Archive";case"Audio":return"Audio";case"Code":return"Code";case"Document":return"Document";case"Image":return"Image";case"Pdf":return"PDF";case"Presentation":return"Presentation";case"Sheet":return"Spreadsheet";case"Text":return"Text";case"Video":return"Video"}}const Vr=l.memo(({file:e})=>s.jsx("div",{className:h`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        overflow-x: hidden;
      `,children:s.jsx("div",{className:h`
          margin: 25px 25px 50px;
        `,children:s.jsx(wa,{size:"Lg",attrs:e.fileIconAttrs})})}));Vr.displayName="RepoFileInfoImage";const Aa=l.memo(({file:e,hide:r})=>s.jsxs(s.Fragment,{children:[s.jsx(ja,{children:s.jsx(Ta,{children:"Info"})}),s.jsxs(Fa,{children:[s.jsx(zr,{file:e}),s.jsx(Vr,{file:e})]}),s.jsx(Ra,{children:s.jsx(Ia,{children:s.jsx(Ar,{variant:"primary",onClick:r,children:"Close"})})})]}));Aa.displayName="RepoFileInfoModalContent";const ka=l.memo(({file:e,hide:r})=>s.jsx(Ca,{show:e!==void 0,onHide:r,children:e!==void 0?s.jsx(Aa,{file:e,hide:r}):s.jsx(s.Fragment,{})}));ka.displayName="RepoFileInfoModal";const Na=l.memo(({file:e,hide:r})=>{const t=k(),a=e!==void 0,n=ni(),[i]=ee((c,u)=>c.transfersIsActiveSubscribe(u),c=>c.transfersIsActiveData,[]),o=i?qn:0;return s.jsx("div",{className:M(h`
          flex-direction: column;
          position: fixed;
          background-color: #fff;
          z-index: ${t.zindex.fileInfoSheet};
          display: flex;
          top: 70px;
          bottom: ${o}px;
          left: -250px;
          width: 250px;
          border-right: 1px solid ${t.colors.borderLight};
          border-top: 1px solid ${t.colors.borderLight};
          transition: left 0.3s ease-out;
        `,a&&h`
            left: 0;
          `,n&&h`
            top: 69px;
          `),children:e!==void 0?s.jsxs("div",{className:h`
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            overflow: hidden;
          `,children:[s.jsxs("div",{className:h`
              display: flex;
              flex-direction: row;
              align-items: center;
              flex-shrink: 0;
              border-bottom: 1px solid ${t.colors.border};
              height: 46px;
            `,children:[s.jsx("div",{className:h`
                flex-grow: 1;
                font-size: 14px;
                font-weight: normal;
                margin: 0 0 0 20px;
                color: ${t.colors.text};
              `,children:"Info"}),s.jsx("div",{className:h`
                margin-right: 7px;
              `,children:s.jsx(Pn.Provider,{value:r,children:s.jsx(Hn,{})})})]}),s.jsx("div",{className:h`
              display: flex;
              flex-direction: column;
              flex-grow: 1;
              padding: 20px 25px 0;
              overflow-x: hidden;
            `,children:s.jsx(zr,{file:e})}),s.jsx(Vr,{file:e})]}):null})});Na.displayName="RepoFileInfoSheet";const Oa=l.createContext(void 0);function B(){return l.useContext(Oa)}const Pa=l.memo(({breadcrumbs:e})=>{const r=H(),t=N(),a=B(),n=l.useMemo(()=>r?e.slice(e.length-1):e,[e,r]),i=l.useMemo(()=>n.map((c,u)=>({id:c.id,name:c.name,link:/^recent:/.test(c.id)?{pathname:`/repos/${c.repoId}/recent`}:Or(c.repoId,c.path),isClickable:!0,hasCaret:!1,isLast:u===n.length-1})),[n]),o=l.useCallback((c,u)=>{u.isLast&&t.repoFilesBrowsersLoadFiles(a)},[t,a]);return s.jsx(ii,{breadcrumbs:i,onClick:o})});Pa.displayName="RepoFilesBreadcrumbs";const Qi="/assets/empty-folder@2x-DkQV6bHE.png",Ha=l.createContext(void 0);function K(){return l.useContext(Ha)}const La=l.memo(()=>{const e=k(),r=K();return s.jsxs("div",{className:h`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 80px 0 0;
      `,children:[s.jsx("img",{src:Qi,alt:"",className:h`
          display: block;
          width: 252px;
          height: 186px;
          cursor: pointer;
        `,onClick:()=>{r.uploadFile?.()}}),s.jsx("h3",{className:h`
          font-size: 14px;
          color: ${e.colors.text};
          font-weight: 600;
          margin: 0 0 20px;
        `,children:"This folder is empty."})]})});La.displayName="RepoFilesEmpty";function Yi(e){return e(In)}function Xi(){const[e,r]=l.useState(null),[t,a]=l.useState({width:0,height:0}),n=l.useCallback(()=>{a({width:e?.offsetWidth||0,height:e?.offsetHeight||0})},[e?.offsetHeight,e?.offsetWidth]);return l.useEffect(()=>(window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}),[n]),l.useLayoutEffect(()=>{n()},[e?.offsetHeight,e?.offsetWidth]),[r,t]}var de,Kr;function es(){if(Kr)return de;Kr=1;var e=re(),r=te(),t=G(),a="[object String]";function n(i){return typeof i=="string"||!r(i)&&t(i)&&e(i)==a}return de=n,de}var rs=es();const ts=Y(rs);function as(e,r){let t=0,a=0,n=0;const i=r.map(u=>{const d={type:0,width:void 0,relWidth:void 0,minWidth:u.minWidth};if(u.width===void 0)a+=1;else if(ts(u.width)){if(u.width[u.width.length-1]!=="%")throw new Error(`Column width must be a number or percentage: ${u.width}`);const p=parseInt(u.width.slice(0,u.width.length-1),10)/100;n+=p,d.type=2,d.relWidth=p}else{if(u.minWidth!==void 0)throw new Error(`Column cannot have both width number and minWidth: ${u.width}, ${u.minWidth}`);d.type=1,d.width=u.width,t+=d.width}return d});if(n>1)throw new Error("Columns relative widths cannot be more than 100%");if(a>0){if(n===1)throw new Error("Columns relative widths cannot equal 100% if there are unknown widths");const u=(1-n)/a;i.forEach(d=>{d.type===0&&(d.type=2,d.relWidth=u)})}else i.forEach(u=>{u.type===2&&(u.relWidth=u.relWidth/n)});const o=Math.max(e-t,0);let c=o;return i.forEach(u=>{if(u.type===2&&u.minWidth!==void 0){const d=Math.min(Math.max(o*u.relWidth,u.minWidth),c);c-=d,u.type=1,u.width=d}}),i.forEach(u=>{if(u.type===2){const d=Math.min(Math.max(o*u.relWidth,0),c);c-=d,u.type=1,u.width=d}}),i.map(u=>u.width)}const ns=e=>{switch(e){case void 0:return;case"Asc":return"ascending";case"Desc":return"descending";case"Hidden":return"none"}},kr=$.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
  align-items: center;
  padding-left: 10px;
  flex-grow: 0;
  flex-shrink: 0;
`,$a=$(kr)`
  font-size: 13px;
  font-weight: normal;
  color: ${({theme:e})=>e.colors.textLight};
  vertical-align: middle;
`,is=$($a)`
  align-items: center;
  justify-content: center;
  display: flex;
`,ss=$.button`
  ${Lr}
  color: ${({theme:e})=>e.colors.textLight};
  cursor: pointer;
  padding-right: 15px;

  ${({sortBy:e,theme:r})=>e==="Asc"||e==="Desc"?Yi(t=>t`
            &:after {
              content: '';
              display: inline-block;
              width: 0;
              height: 0;
              border-top: ${e==="Asc"?"none":`4px solid ${r.colors.textLight}`};
              border-bottom: ${e==="Asc"?`4px solid ${r.colors.textLight}`:"none"};
              border-right: 4px solid transparent;
              border-left: 4px solid transparent;
              position: relative;
              left: 7px;
              bottom: 2px;
            }
          `):void 0}
`,os=$.div`
  display: flex;
  align-items: center;
  height: 33px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  position: relative;
`,ls=$.div``,Ba=l.memo(({index:e,isSelected:r,isFirstSelected:t,hasHover:a,isDropOver:n,height:i,ariaLabel:o,onClick:c,onContextMenu:u,children:d})=>{const p=k();return s.jsx("div",{className:M(h`
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
          `,e===0?h`
                border-top-color: ${p.colors.border};
              `:void 0,a&&!r?h`
                &:hover {
                  background-color: ${p.colors.empty};
                  border-top-color: ${p.colors.border};
                  border-left-color: ${p.colors.border};
                  border-right-color: ${p.colors.border};
                  border-bottom-color: ${p.colors.border};
                  box-shadow: ${p.boxShadow};
                  z-index: 1;
                }
              `:void 0,r?h`
                background-color: ${p.colors.selectionBg};
                border-top-color: ${p.colors.borderLight};
                border-left-color: ${p.colors.selection};
                border-right-color: ${p.colors.selection};
                border-bottom-color: ${p.colors.selection};
                box-shadow: ${p.boxShadow};
                z-index: 2;
              `:void 0,t?h`
                border-top-color: ${p.colors.selection};
              `:void 0,n?h`
                background-color: ${p.colors.bgLight};
                border-top-color: ${p.colors.border};
                border-left-color: ${p.colors.border};
                border-right-color: ${p.colors.border};
                border-bottom-color: ${p.colors.border};
                z-index: 1;
              `:void 0),style:{height:`${i+1}px`},onClick:c,onContextMenu:u,role:"row","aria-rowindex":e,"aria-label":o,"aria-selected":r,children:d})});Ba.displayName="BaseTableRow";const cs=$.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;
  height: 47px;
`,us=$.div`
  user-select: none;
  padding: 0 2px 3px;
`,za=l.createContext(void 0),Va=l.memo(({columns:e,selectionSummary:r,length:t,data:a,Row:n,ariaLabel:i,onHeadCheckboxClick:o,onSortByClick:c,onRowCheckboxClick:u,onRowClick:d,onRowContextMenu:p})=>{const[f,{width:m}]=Xi(),g=l.useMemo(()=>{if(m===0)return[];const v=m-6,w=[{name:"checkbox",label:"",width:42},...e],b=as(v,w.map(R=>({width:R.width,minWidth:R.minWidth})));return w.map((R,x)=>({name:R.name,label:R.label,width:b[x],sortBy:R.sortBy}))},[e,m]),y=l.useMemo(()=>({columns:g,onRowCheckboxClick:u,onRowClick:d,onRowContextMenu:p}),[g,u,d,p]),_=l.useMemo(()=>vi(0,t),[t]);return s.jsx(us,{ref:f,role:"grid","aria-label":i,"aria-rowcount":t,children:g.length>0?s.jsxs(za.Provider,{value:y,children:[s.jsx("div",{role:"rowgroup",children:s.jsx(os,{role:"row",children:g.map(v=>v.name==="checkbox"?s.jsx(is,{style:{minWidth:`${v.width}px`},role:"columnheader",children:s.jsx(Ea,{value:r==="None"?"unchecked":r==="Partial"?"indeterminate":"checked",onClick:o})},v.name):s.jsx($a,{style:{minWidth:`${v.width}px`},role:"columnheader","aria-sort":ns(v.sortBy),children:v.sortBy!==void 0?s.jsx(ss,{sortBy:v.sortBy,onClick:w=>{c!==void 0&&c(w,v.name)},children:v.label}):v.label},v.name))})}),s.jsx(ls,{role:"rowgroup",children:_.map(v=>s.jsx(n,{index:v,data:a},v))})]}):null})});Va.displayName="Table";const Wa=l.memo(({index:e,row:r,isSelected:t,isFirstSelected:a,ariaLabel:n})=>{const{columns:i,onRowCheckboxClick:o,onRowClick:c,onRowContextMenu:u}=l.useContext(za),d=l.useCallback(m=>{o(m,e)},[o,e]),p=l.useCallback(m=>{c(m,e)},[c,e]),f=l.useCallback(m=>{u(m,e)},[u,e]);return s.jsx(Ba,{index:e,isSelected:t,isFirstSelected:a,hasHover:!0,isDropOver:!1,height:48,ariaLabel:n,onClick:p,onContextMenu:f,children:s.jsx(cs,{children:i.map(m=>m.name==="checkbox"?s.jsx(kr,{style:{width:`${m.width}px`},role:"cell",children:s.jsx(Ea,{value:t?"checked":"unchecked",onClick:d})},m.name):s.jsx(kr,{style:{width:`${m.width}px`},role:"cell",children:r[m.name]},m.name))})},e)});Wa.displayName="TableRow";const ds=e=>Vn?e.metaKey:e.ctrlKey,Zr=e=>e.shiftKey,Ua=l.memo(({file:e})=>{const r=H(),t=k(),a=N(),n=l.useCallback(()=>{Wn(a,e.repoId,e.encryptedPath,r)},[a,e,r]),i=l.useCallback(()=>{a.repoFilesRenameFile(e.repoId,e.encryptedPath)},[a,e]);return s.jsxs("div",{className:h`
        display: flex;
        flex-direction: row;
        align-items: center;
      `,children:[s.jsx("span",{className:h`
          margin-right: 15px;
        `,children:s.jsx(wa,{size:"Sm",attrs:e.fileIconAttrs})}),s.jsxs("span",{className:M(h`
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          `,e.nameError!==void 0&&h`
              color: ${t.colors.destructive};
            `),children:[e.type==="Dir"?s.jsx(Q,{to:Or(e.repoId,e.encryptedPath),className:h`
              font-weight: 600;

              ${J} {
                color: ${t.colors.text};
              }
            `,children:e.name}):Un(e)?s.jsx(Q,{to:Pr(e.repoId,e.encryptedPath),className:h`
              ${J} {
                color: ${t.colors.text};
              }
            `,children:e.name}):s.jsx("a",{href:".",onClick:o=>{o.preventDefault(),o.stopPropagation(),n()},className:h`
              ${J} {
                color: ${t.colors.text};
              }
            `,children:e.name}),e.nameError!==void 0?" (ERROR)":null]}),r?null:s.jsxs("button",{className:h`
            ${Lr}
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
          `,onClick:o=>{o.stopPropagation(),i()},"aria-label":"Rename",children:[s.jsx(qa,{className:h`
              button:hover > & {
                display: none;
              }
            `,role:"img"}),s.jsx(Sa,{className:h`
              display: none;

              button:hover > & {
                display: inline;
              }
            `,role:"img"})]})]})});Ua.displayName="FileName";const Ga=l.memo(({file:e})=>s.jsx("span",{className:h`
        font-size: 12px;
      `,children:e.sizeDisplay}));Ga.displayName="FileSize";const Ka=l.memo(({file:e})=>e.modified===void 0?null:s.jsx("span",{className:h`
        font-size: 12px;
      `,children:s.jsx(Da,{value:e.modified})}));Ka.displayName="FileModified";const Za=l.memo(({index:e,data:r})=>{const t=l.useMemo(()=>r.items[e],[r,e]),[a]=ee((c,u)=>c.repoFilesFileSubscribe(t.fileId,u),c=>c.repoFilesFileData,[t.fileId]),n=t.isSelected,i=n&&(e===0||!r.items[e-1].isSelected),o=l.useMemo(()=>{if(a!==void 0)return{name:s.jsx(Ua,{file:a}),size:s.jsx(Ga,{file:a}),modified:s.jsx(Ka,{file:a})}},[a]);return o===void 0?null:s.jsx(Wa,{index:e,row:o,isSelected:n,isFirstSelected:i,ariaLabel:a!==void 0?a.type==="Dir"?`Folder ${a.name}`:`File ${a.name}`:void 0},t.fileId)});Za.displayName="RepoFilesTableRow";const Ja=l.memo(({info:e})=>{const r=H(),t=N(),a=B(),n=e.items,i=l.useMemo(()=>({items:n}),[n]),o=e.sort,c=l.useMemo(()=>[{name:"name",label:"Name",sortBy:o.field==="Name"?o.direction:"Hidden"},{name:"size",label:"Size",width:r?0:"15%",minWidth:r?void 0:70,sortBy:o.field==="Size"?o.direction:"Hidden"},{name:"modified",label:"Modified",width:r?0:"20%",minWidth:r?void 0:150,sortBy:o.field==="Modified"?o.direction:"Hidden"}],[r,o]),u=l.useCallback(()=>{e.selectionSummary==="All"?t.repoFilesBrowsersClearSelection(a):t.repoFilesBrowsersSelectAll(a)},[t,a,e]),d=l.useCallback((g,y)=>{switch(y){case"name":t.repoFilesBrowsersSortBy(a,"Name");break;case"size":t.repoFilesBrowsersSortBy(a,"Size");break;case"modified":t.repoFilesBrowsersSortBy(a,"Modified");break}},[t,a]),p=l.useCallback((g,y)=>{g.stopPropagation(),t.repoFilesBrowsersSelectFile(a,n[y].fileId,!0,Zr(g),!1)},[t,a,n]),f=l.useCallback((g,y)=>{t.repoFilesBrowsersSelectFile(a,n[y].fileId,ds(g),Zr(g),!1)},[t,a,n]),m=l.useCallback(()=>{},[]);return s.jsx(Va,{columns:c,selectionSummary:e.selectionSummary,length:n.length,data:i,Row:Za,ariaLabel:"Files list",onHeadCheckboxClick:u,onSortByClick:d,onRowCheckboxClick:p,onRowClick:f,onRowContextMenu:m})});Ja.displayName="RepoFilesTable";const Qa=l.memo(({info:e})=>{const r=N(),t=B();return s.jsx(s.Fragment,{children:e.status.type==="Error"&&!e.status.loaded?s.jsx(pi,{error:e.status.error,onRetry:()=>{r.repoFilesBrowsersLoadFiles(t)}}):e.status.type==="Loaded"&&e.totalCount===0?s.jsx(La,{}):s.jsx(Ja,{info:e})})});Qa.displayName="RepoFilesContent";l.lazy(()=>wi(()=>import("./RepoFilesDropZoneDesktop-BvcnMzbH.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])).then(e=>({default:e.RepoFilesDropZoneDesktop})));const Ya=l.memo(l.forwardRef(({isActive:e,isAllowed:r,isOver:t},a)=>{const n=k(),i=M(h`
          position: fixed;
          display: none;
          z-index: ${n.zindex.dropZoneLines};
          background-color: ${n.colors.border};
        `,e&&h`
            display: block;
          `,t&&(r?h`
                background-color: ${n.colors.successful};
              `:h`
                background-color: ${n.colors.destructive};
              `));return s.jsxs("div",{ref:a,className:h`
            display: flex;
            flex-direction: column;
            flex-grow: 1;
          `,children:[s.jsx("div",{className:M(i,h`
                top: 0;
                left: 5px;
                right: 0;
                height: 5px;
              `)}),s.jsx("div",{className:M(i,h`
                top: 5px;
                bottom: 0;
                right: 0;
                width: 5px;
              `)}),s.jsx("div",{className:M(i,h`
                bottom: 0;
                left: 0;
                right: 5px;
                height: 5px;
              `)}),s.jsx("div",{className:M(i,h`
                top: 0;
                bottom: 5px;
                left: 0;
                width: 5px;
              `)})]})}));Ya.displayName="DropZone";function ps(){const e=document.activeElement,r=["input","select","button","textarea"];return e!=null&&r.indexOf(e.tagName.toLowerCase())!==-1}function hs(e){const r=l.useCallback(t=>{if(ps()||t.clipboardData==null||t.clipboardData.items==null&&t.clipboardData.files==null)return;const a=t.clipboardData.files!=null?Array.from(t.clipboardData.files):Array.from(t.clipboardData.items).filter(n=>n.kind==="file");Promise.all(e(a))},[e]);l.useEffect(()=>(window.addEventListener("paste",r),()=>window.removeEventListener("paste",r)),[r])}var pe,Jr;function fs(){if(Jr)return pe;Jr=1;var e=L(),r=function(){return e.Date.now()};return pe=r,pe}var he,Qr;function ms(){if(Qr)return he;Qr=1;var e=$r(),r=fs(),t=gi(),a="Expected a function",n=Math.max,i=Math.min;function o(c,u,d){var p,f,m,g,y,_,v=0,w=!1,b=!1,R=!0;if(typeof c!="function")throw new TypeError(a);u=t(u)||0,e(d)&&(w=!!d.leading,b="maxWait"in d,m=b?n(t(d.maxWait)||0,u):m,R="trailing"in d?!!d.trailing:R);function x(F){var A=p,O=f;return p=f=void 0,v=F,g=c.apply(O,A),g}function I(F){return v=F,y=setTimeout(D,u),w?x(F):g}function T(F){var A=F-_,O=F-v,Z=u-A;return b?i(Z,m-O):Z}function C(F){var A=F-_,O=F-v;return _===void 0||A>=u||A<0||b&&O>=m}function D(){var F=r();if(C(F))return q(F);y=setTimeout(D,T(F))}function q(F){return y=void 0,R&&p?x(F):(p=f=void 0,g)}function E(){y!==void 0&&clearTimeout(y),v=0,p=_=f=y=void 0}function j(){return y===void 0?g:q(r())}function S(){var F=r(),A=C(F);if(p=arguments,f=this,_=F,A){if(y===void 0)return I(_);if(b)return clearTimeout(y),y=setTimeout(D,u),x(_)}return y===void 0&&(y=setTimeout(D,u)),g}return S.cancel=E,S.flush=j,S}return he=o,he}var fe,Yr;function vs(){if(Yr)return fe;Yr=1;var e=ms(),r=$r(),t="Expected a function";function a(n,i,o){var c=!0,u=!0;if(typeof n!="function")throw new TypeError(t);return r(o)&&(c="leading"in o?!!o.leading:c,u="trailing"in o?!!o.trailing:u),e(n,i,{leading:c,maxWait:i,trailing:u})}return fe=a,fe}var gs=vs();const bs=Y(gs);function ys(e){return e.isDirectory}function xs(e){return new Promise((r,t)=>{const a=e.createReader();let n=[];const i=()=>{a.readEntries(o=>{o.length===0?r(n):(n=n.concat(Array.from(o)),setTimeout(i,10))},t)};i()})}function _s(e){return new Promise((r,t)=>e.file(r,t))}function ws(e){const r=i=>{const o=(c,u)=>{c(i)};return{isDirectory:!1,isFile:!0,name:i.name,file:o}},t=(i,o)=>({name:i,isFile:!1,isDirectory:!0,createReader:()=>{let u=!1;return{readEntries:(p,f)=>{u?p([]):(u=!0,p(o))}}}}),a={children:new Map};e.forEach(i=>{const o=i.webkitRelativePath.split("/"),c=o.slice(0,o.length-1);let u=a;c.forEach(d=>{let p=u.children.get(d);p===void 0&&(p={name:d,isDirectory:!0,file:void 0,children:new Map},u.children.set(d,p)),u=p}),u.children.set(i.name,{name:i.name,isDirectory:!1,file:i,children:void 0})});const n=i=>{if(i.isDirectory){const o=Array.from(i.children.values()).map(n);return t(i.name,o)}return r(i.file)};return Array.from(a.children.values()).map(n)}function Xr(e){return String.prototype.normalize?e.normalize().split("").filter(a=>a>=" "&&!(a>=""&&a<="")).join(""):e}function Cs(e,r){return e+(/\/$/.test(e)?"":"/")+(r[0]!=="/"?r:r.slice(1))}class js{upload;queue=[];constructor(r){this.upload=r.upload}uploadFileEntries(r){return r.length===0?[]:this.upload(r)}getFileName(r){let t=Xr(r.name);if(t==="image.jpeg"||t==="image.jpg"||t==="image.png"){const a=Hr(new Date,"yyyyMMdd_hhmmssSSS"),n=t.split(".").pop();t=`image_${a}.${n}`}return t}addEntry(r){return new Promise((t,a)=>{if(r.name===".DS_Store"){t();return}this.queue.push({entry:r,resolve:t,reject:a}),this.processQueueThrottled()})}processQueue=()=>{if(this.queue.length===0)return;const r=this.queue.slice();this.queue.length=0;const t=r.map(a=>a.entry);this.uploadFileEntries(t).forEach((a,n)=>{a.then(r[n].resolve,r[n].reject)})};processQueueThrottled=bs(this.processQueue,100);async handleEntryDir(r,t){const a=Xr(r.name),n=Cs(t,a);await Ts(30);const i=await xs(r);return await Promise.all(i.map(o=>this.handleEntry(o,n).then(()=>{}))),n}async handleEntryFile(r,t){const a=await _s(r),n={parentPath:t,name:this.getFileName(a),file:a};await this.addEntry(n)}async handleEntry(r,t){ys(r)?await this.handleEntryDir(r,t):await this.handleEntryFile(r,t)}uploadDataTransferItems(r){return r.filter(t=>t.webkitGetAsEntry!=null).map(t=>t.webkitGetAsEntry()).filter(t=>t!=null).map(t=>this.handleEntry(t,"/"))}uploadWebkitFilesAsEntries(r){return ws(r).map(t=>this.handleEntry(t,"/"))}uploadNativeFiles(r){return this.uploadFileEntries(r.map(t=>({parentPath:"/",name:this.getFileName(t),file:t})))}uploadFiles(r){if(r.length>0){const t=r[0];if(t.webkitGetAsEntry!=null)return t.webkitGetAsEntry()!=null?this.uploadDataTransferItems(r):[];if(t.webkitRelativePath!=null)return this.uploadWebkitFilesAsEntries(r)}return this.uploadNativeFiles(r)}}const Ts=e=>new Promise(r=>setTimeout(r,e));function Xa(){const e=N(),r=B();return l.useCallback(a=>{const{repoId:n,encryptedPath:i}=e.repoFilesBrowsersInfo(r);return n===void 0||i===void 0?[]:new js({upload(c){return c.map(async u=>{const d=u.parentPath==="/"?u.name:u.parentPath.slice(1)+"/"+u.name;await e.transfersUpload(n,i,d,u.file)})}}).uploadFiles(a)},[e,r])}const en=l.memo(()=>{const r=Xa(),[{canDrop:t,isOver:a},n]=Ki(()=>({accept:[Ln],collect:i=>({canDrop:i.canDrop(),isOver:i.isOver({shallow:!0})}),drop:(i,o)=>{if(o.didDrop())return;const c=i.items!=null?Array.from(i.items):Array.from(i.files);Promise.all(r(c))}}),[r]);return l.useEffect(()=>{n(document.body)},[n]),hs(r),s.jsx(Ya,{isActive:t,isOver:a,isAllowed:!0})});en.displayName="RepoFilesDropZoneWeb";const rn=l.memo(()=>s.jsx(en,{}));rn.displayName="RepoFilesDropZone";const tn=l.memo(({info:{srcFilesCount:e,mode:r,dirPickerId:t,destFileName:a,createDirEnabled:n,canMove:i},cancel:o})=>{const c=H(),u=k(),d=N(),p=l.useCallback((g,y,_)=>d.repoFilesMoveDirPickerClick(y,_),[d]),f=l.useCallback(()=>{d.repoFilesMoveCreateDir()},[d]),m=l.useCallback(()=>{d.repoFilesMoveMoveFiles()},[d]);return s.jsxs(s.Fragment,{children:[s.jsx(ja,{children:s.jsxs(Ta,{className:h`
              font-weight: normal;
            `,children:[r==="Copy"?"Copy":"Move"," ",s.jsxs("strong",{className:h`
                font-weight: 600;
              `,children:[e," ",e===1?"item":"items"]}),a!==void 0?s.jsxs(s.Fragment,{children:[" to ",s.jsx("strong",{className:h`
                    font-weight: 600;
                  `,children:a})]}):null]})}),s.jsx(Fa,{className:h`
            padding-bottom: 0;
            overflow: hidden;
          `,children:s.jsx("div",{className:M(h`
                border: 1px solid ${u.colors.borderDarker};
                border-radius: 3px;
                overflow-y: scroll;
                overflow-x: hidden;
              `,c?h`
                    flex-grow: 1;
                  `:h`
                    height: 300px;
                  `),children:s.jsx(Ci,{pickerId:t,onClick:p})})}),s.jsxs(Ra,{children:[s.jsx($n,{children:s.jsx(hi,{type:"button",disabled:!n,onClick:f,children:"Create folder"})}),s.jsxs(Ia,{children:[s.jsx(Ar,{type:"button",onClick:o,children:"Cancel"}),s.jsx(Ar,{type:"button",variant:i?"primary":"disabled",disabled:!i,onClick:m,children:r==="Copy"?"Copy":"Move"})]})]})]})});tn.displayName="RepoFilesMoveModalContent";const an=l.memo(()=>{const e=N(),[r]=ee((a,n)=>a.repoFilesMoveInfoSubscribe(n),a=>a.repoFilesMoveInfoData,[]),t=l.useCallback(()=>e.repoFilesMoveCancel(),[e]);return s.jsx(Ca,{show:r!==void 0,onHide:t,children:r!==void 0?s.jsx(tn,{info:r,cancel:t}):s.jsx(s.Fragment,{})})});an.displayName="RepoFilesMoveModal";const Fs=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},l.createElement("path",{fill:"#fff",d:"M9.722 9.752h4.92a.72.72 0 0 0 .72-.72v-.023a.72.72 0 0 0-.72-.72h-4.92V3.375a.72.72 0 0 0-.72-.72h-.024a.72.72 0 0 0-.72.72V8.29H3.362a.72.72 0 0 0-.72.72v.023c0 .397.323.72.72.72h4.896v4.896c0 .397.323.72.72.72h.024a.72.72 0 0 0 .72-.72z"})),Rs=$.nav`
  display: flex;
  flex-direction: row;
  padding-top: ${({theme:e})=>e.isMobile?0:"11px"};
`,nn=l.memo(l.forwardRef(({children:e,className:r,backgroundClassName:t,icon:a,...n},i)=>{const o=k();return s.jsx(fi,{className:M(h`
            ${Lr}
            margin: 0;
            padding: 0;

            ${J} {
              text-decoration: none;
            }
          `,o.isMobile?h`
                min-width: 37px;
              `:h`
                margin-left: 6px;
                margin-right: 6px;
                margin-bottom: 5px;
                min-width: 45px;

                &:last-of-type {
                  margin-right: 0;
                }
              `,r),...n,ref:i,children:s.jsxs("div",{className:h`
            display: flex;
            flex-direction: column;
            align-items: center;
          `,children:[s.jsx("div",{className:M(h`
                display: flex;
                justify-content: center;
                align-items: center;
                width: 32px;
                height: 32px;
                border-radius: 3px;
                transition: ${mi};
              `,!o.isMobile&&h`
                  margin-bottom: 3px;
                `,t),children:a}),o.isMobile?null:s.jsx("div",{className:h`
                display: block;
                color: ${o.colors.text};
                font-size: 11px;
                line-height: 20px;
                font-weight: 600;
                text-align: center;
              `,children:e})]})})}));nn.displayName="NavbarNavItem";const sn=l.memo(({hide:e})=>{const r=K(),t=l.useCallback(()=>{e(),r.uploadFile?.()},[e,r]);return s.jsx(ae,{onClick:t,children:"Upload file"})});sn.displayName="UploadFileItem";const on=l.memo(({hide:e})=>{const r=K(),t=l.useCallback(()=>{e(),r.uploadDir?.()},[e,r]);return s.jsx(ae,{onClick:t,children:"Upload folder"})});on.displayName="UploadDirItem";const ln=l.memo(({hide:e})=>{const r=N(),t=B(),a=l.useCallback(()=>r.repoFilesBrowsersCreateDir(t),[r,t]);return s.jsx(s.Fragment,{children:s.jsx(ae,{onClick:()=>{e(),a()},children:"Create folder"})})});ln.displayName="CreateDirItem";const cn=l.memo(({hide:e})=>{const r=Dn(),t=N(),a=B(),n=l.useCallback(()=>{const{repoId:i}=t.repoFilesBrowsersInfo(a),o=`new text file ${Hr(new Date,"yyyyMMddHHmmss")}.txt`;t.repoFilesBrowsersCreateFile(a,o).then(async c=>{c!==void 0&&await r(Pr(i,c,!0))})},[t,a,r]);return s.jsx(s.Fragment,{children:s.jsx(ae,{onClick:()=>{e(),n()},children:"Create new text file"})})});cn.displayName="CreateTextFileItem";const un=l.memo(({hide:e})=>s.jsxs(s.Fragment,{children:[s.jsx(sn,{hide:e}),s.jsx(on,{hide:e}),s.jsx(ln,{hide:e}),s.jsx(ci,{}),s.jsx(cn,{hide:e})]}));un.displayName="RepoFilesAddMenuContent";const dn=l.memo(()=>{const e=k(),[r,{show:t,popper:a,toggle:n}]=si({popperConfig:{strategy:"fixed"}});return oi(t,a),s.jsx(li,{isVisible:t,...r,className:h`
        width: 230px;
        z-index: ${e.zindex.repoFilesAddMenu};
      `,children:s.jsx(un,{hide:()=>n?.(!1)})})});dn.displayName="RepoFilesAddMenu";const pn=l.memo(()=>{const e=k(),[r]=di();return s.jsx(nn,{backgroundClassName:h`
        background-color: ${e.colors.primary};

        &:hover {
          background-color: ${e.colors.primaryHover};
        }
      `,icon:s.jsx(Fs,{role:"img"}),...r,children:"Add"})});pn.displayName="AddButton";const hn=l.memo(()=>{const[e,r]=l.useState(!1);return s.jsxs(ui,{show:e,onToggle:t=>r(t),placement:"bottom",children:[s.jsx(pn,{}),s.jsx(dn,{})]})});hn.displayName="AddButtonDropdown";const fn=l.memo(({info:e})=>s.jsx(Rs,{children:e?.encryptedPath!==void 0?s.jsx(hn,{}):null}));fn.displayName="RepoFilesNav";const mn=l.memo(({info:e})=>{const r=k(),{status:t,totalCount:a,totalSizeDisplay:n,selectedCount:i,selectedSizeDisplay:o}=e;return t.type==="Loading"&&!t.loaded||t.type==="Error"||a===0?null:s.jsx("div",{className:h`
          font-size: 13px;
          font-weight: normal;
          color: ${r.colors.textLight};
          flex-shrink: 0;
        `,children:i>0?s.jsxs("span",{children:[i," ",i===1?"item":"items"," -"," ",o," selected"]}):s.jsxs("span",{children:[a," ",a===1?"item":"items"," -"," ",n]})})});mn.displayName="RepoFilesSummary";const Is=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},l.createElement("g",{fill:"#263238"},l.createElement("path",{d:"M7.766 6.388c-.002 0-.07-.027-.081-.03.023.004-4.783.005-4.783.005v9.585h8.307v-6.45a.3.3 0 0 0 .06.135S7.754 6.38 7.766 6.388m4.496 2.171c.226.21.41.63.41.938v7.355c0 .308-.25.558-.559.558H2a.56.56 0 0 1-.56-.558V5.459A.56.56 0 0 1 2 4.901h5.749c.309 0 .742.17.969.379z"}),l.createElement("path",{d:"M7.428 5.887V9.95h4.199V8.486H8.883V5.887z"}),l.createElement("path",{d:"M5.328 5.452V1.135c0-.309.25-.559.559-.559h5.749c.309 0 .742.17.969.38l3.545 3.279c.226.21.41.63.41.938v7.354a.56.56 0 0 1-.559.56h-3.924v-1.463h3.02V5.173a.3.3 0 0 0 .06.135s-3.515-3.252-3.504-3.244L6.79 2.038v3.414z"}),l.createElement("path",{d:"M11.317 1.57v4.057h4.344V4.165h-2.886V1.563z"}))),Ds=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},l.createElement("g",{fill:"#676f73"},l.createElement("path",{d:"M7.766 6.388c-.002 0-.07-.027-.081-.03.023.004-4.783.005-4.783.005v9.585h8.307v-6.45a.3.3 0 0 0 .06.135S7.754 6.38 7.766 6.388m4.496 2.171c.226.21.41.63.41.938v7.355c0 .308-.25.558-.559.558H2a.56.56 0 0 1-.56-.558V5.459A.56.56 0 0 1 2 4.901h5.749c.309 0 .742.17.969.379z"}),l.createElement("path",{d:"m7.408 5.887.02 4.062h4.2V8.486H8.883L8.87 5.887z"}),l.createElement("path",{d:"M5.328 5.452V1.135c0-.309.25-.559.559-.559h5.749c.309 0 .742.17.969.38l3.545 3.279c.226.21.41.63.41.938v7.354a.56.56 0 0 1-.559.56h-3.924v-1.463h3.02V5.173a.3.3 0 0 0 .06.135s-3.515-3.252-3.504-3.244L6.79 2.038v3.414z"}),l.createElement("path",{d:"m11.296 1.57.02 4.057h4.345V4.165h-2.886l-.017-2.602c-.001-.224-1.463-.217-1.462.007"}))),qs=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},l.createElement("path",{fill:"#263238",d:"m10.1 2.029.043.035-.081-.03.063.005H2.903V15.96h12.195V6.573l.004.071a.3.3 0 0 0 .055.065zm6.05 3.606c.227.21.41.63.41.938v10.292c0 .309-.25.559-.558.559H1.999a.56.56 0 0 1-.559-.559V1.135c0-.309.25-.559.56-.559h8.125c.309 0 .743.17.97.38z"}),l.createElement("path",{fill:"#263238",d:"M9.758 1.714v5.39h6.245V5.64h-4.79V1.707z"}),l.createElement("path",{fill:"#71ba05",d:"M3.582 11.383h-.68v1.462h6.83v-1.462H3.581Z"}),l.createElement("path",{fill:"#71ba05",d:"M11.32 12.123 8.23 9.032a.731.731 0 1 0-1.034 1.034l2.057 2.056-2.057 2.058a.731.731 0 0 0 1.034 1.034z"})),Ss=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},l.createElement("g",{fill:"#676f73"},l.createElement("path",{d:"m10.1 2.029.043.035-.081-.03.063.005H2.903V15.96h12.195V6.573l.004.071a.3.3 0 0 0 .055.065zm6.05 3.606c.227.21.41.63.41.938v10.292c0 .309-.25.559-.558.559H1.999a.56.56 0 0 1-.559-.559V1.135c0-.309.25-.559.56-.559h8.125c.309 0 .743.17.97.38z"}),l.createElement("path",{d:"M9.758 1.714v5.39h6.245V5.64h-4.79V1.707zm-6.176 9.669H2.85v1.462h6.881v-1.462h-6.15Z"}),l.createElement("path",{d:"M11.32 12.123 8.23 9.032a.731.731 0 1 0-1.034 1.034l2.057 2.056-2.057 2.058a.731.731 0 0 0 1.034 1.034z"}))),vn=l.memo(({info:e,onInfoClick:r})=>{const t=H(),a=N(),n=B(),i=e.selectedFile!==void 0?e.selectedFile:void 0,o=l.useCallback(()=>{i!==void 0&&a.repoFilesRenameFile(i.repoId,i.encryptedPath)},[a,i]);return s.jsxs(Gn,{children:[e.selectedFile!==void 0?s.jsx(z,{icon:s.jsx(Mn,{role:"img"}),iconHover:s.jsx(Sn,{role:"img"}),onClick:r,children:"Info"}):null,t&&i!==void 0?s.jsx(z,{icon:s.jsx(qa,{role:"img"}),iconHover:s.jsx(Sa,{role:"img"}),onClick:o,children:"Rename"}):null,e.canCopySelected?s.jsx(z,{icon:s.jsx(Ds,{role:"img"}),iconHover:s.jsx(Is,{role:"img"}),onClick:()=>{a.repoFilesBrowsersMoveSelected(n,"Copy")},children:"Copy"}):null,e.canMoveSelected?s.jsx(z,{icon:s.jsx(Ss,{role:"img"}),iconHover:s.jsx(qs,{role:"img"}),onClick:()=>{a.repoFilesBrowsersMoveSelected(n,"Move")},children:"Move"}):null,e.canDownloadSelected?s.jsx(z,{icon:s.jsx(Jn,{role:"img"}),iconHover:s.jsx(Zn,{role:"img"}),onClick:()=>{Kn(a,n,t)},children:"Download"}):null,e.canDeleteSelected?s.jsx(z,{icon:s.jsx(Yn,{role:"img"}),iconHover:s.jsx(Qn,{role:"img"}),onClick:()=>{a.repoFilesBrowsersDeleteSelected(n)},children:"Delete"}):null,e.selectedFile!==void 0&&Xn(e.selectedFile)?s.jsx(z,{as:Q,to:Pr(e.selectedFile.repoId,e.selectedFile.encryptedPath,!0),icon:s.jsx(ri,{role:"img"}),iconHover:s.jsx(ei,{role:"img"}),children:"Edit text"}):null,e.selectedCount>0?s.jsx(ti,{onClick:()=>a.repoFilesBrowsersClearSelection(n)}):null]})});vn.displayName="RepoFilesToolbar";const gn=l.memo(({info:e,onInfoClick:r})=>{const t=H();return s.jsx("div",{className:M(h`
          display: flex;
        `,t?h`
              flex-direction: column;
              align-items: center;
            `:h`
              width: 100%;
              flex-direction: row;
              align-items: center;
              overflow: hidden;
            `),children:e!==void 0?s.jsxs("div",{className:M(h`
              flex-grow: 1;
              flex-shrink: 0;
              margin: 0;
              padding: 0;
              display: flex;
              align-items: center;
              position: relative;
            `,t?h``:h`
                  margin-right: 50px;
                `),children:[s.jsx(mn,{info:e}),s.jsx(vn,{info:e,onInfoClick:r})]}):null})});gn.displayName="RepoFilesNavbarExtra";const Ms=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none",...e},l.createElement("path",{fill:"#71ba05",fillRule:"evenodd",d:"M3.52 0A3.526 3.526 0 0 0 0 3.52v24.96C0 30.42 1.58 32 3.52 32h24.96c1.94 0 3.52-1.58 3.52-3.52V3.52C32 1.58 30.42 0 28.48 0zm0 1.26h24.96a2.24 2.24 0 0 1 2.26 2.26v24.96a2.24 2.24 0 0 1-2.26 2.26H3.52a2.24 2.24 0 0 1-2.26-2.26V3.52a2.24 2.24 0 0 1 2.26-2.26m12.75 9.784a.72.72 0 0 0-.459.169L10 16.078l5.811 4.866a.724.724 0 1 0 .93-1.113l-3.81-3.188H22a.655.655 0 1 0 0-1.312h-8.864l3.604-3.006a.725.725 0 0 0-.47-1.28Z",clipRule:"evenodd"})),bn=l.memo(({to:e})=>s.jsx(Q,{to:e,className:h`
        display: flex;
        align-items: center;
      `,"aria-label":"Back",children:s.jsx(Ms,{role:"img"})}));bn.displayName="NavbarBack";const yn=l.memo(({breadcrumbs:e})=>{if(H()&&e.length>1){const t=e[e.length-2],a=Or(t.repoId,t.path);return s.jsx(bn,{to:a})}else return s.jsx(ji,{})});yn.displayName="RepoFilesNavbarLeft";const Es=l.memo(()=>{const e=Zi(),r=K(),t=B();return l.useEffect(()=>(r.uploadFile=()=>{const{repoId:a,encryptedPath:n}=e.repoFilesBrowsersInfo(t);a!==void 0&&n!==void 0&&e.repoFilesUploadFile(a,n)},r.uploadDir=()=>{const{repoId:a,encryptedPath:n}=e.repoFilesBrowsersInfo(t);a!==void 0&&n!==void 0&&e.repoFilesUploadDir(a,n)},()=>{r.uploadFile=void 0,r.uploadDir=void 0}),[e,t,r]),null});Es.displayName="RepoFilesUploadFormDesktop";const xn=l.memo(()=>{const e=Xa(),r=l.useRef(null),t=K(),a=l.useCallback(o=>{o===null?t.uploadFile=void 0:t.uploadFile=()=>o.click()},[t]),n=l.useCallback(o=>{o===null?t.uploadDir=void 0:t.uploadDir=()=>o.click()},[t]),i=l.useCallback(o=>{if(o.currentTarget.files!==null){const c=Array.from(o.currentTarget.files);Promise.all(e(c))}r.current!==null&&r.current.reset()},[e]);return s.jsxs("form",{ref:r,style:{display:"none"},children:[s.jsx("input",{type:"file",ref:a,onChange:i,"aria-label":"Upload file"}),s.jsx("input",{type:"file",ref:n,onChange:i,"aria-label":"Upload folder",webkitdirectory:"",mozdirectory:"",directory:""})]})});xn.displayName="RepoFilesUploadFormWeb";const _n=l.memo(()=>s.jsx(xn,{}));_n.displayName="RepoFilesUploadForm";var me,et;function As(){if(et)return me;et=1;function e(){this.__data__=[],this.size=0}return me=e,me}var ve,rt;function ie(){if(rt)return ve;rt=1;var e=Ma();function r(t,a){for(var n=t.length;n--;)if(e(t[n][0],a))return n;return-1}return ve=r,ve}var ge,tt;function ks(){if(tt)return ge;tt=1;var e=ie(),r=Array.prototype,t=r.splice;function a(n){var i=this.__data__,o=e(i,n);if(o<0)return!1;var c=i.length-1;return o==c?i.pop():t.call(i,o,1),--this.size,!0}return ge=a,ge}var be,at;function Ns(){if(at)return be;at=1;var e=ie();function r(t){var a=this.__data__,n=e(a,t);return n<0?void 0:a[n][1]}return be=r,be}var ye,nt;function Os(){if(nt)return ye;nt=1;var e=ie();function r(t){return e(this.__data__,t)>-1}return ye=r,ye}var xe,it;function Ps(){if(it)return xe;it=1;var e=ie();function r(t,a){var n=this.__data__,i=e(n,t);return i<0?(++this.size,n.push([t,a])):n[i][1]=a,this}return xe=r,xe}var _e,st;function se(){if(st)return _e;st=1;var e=As(),r=ks(),t=Ns(),a=Os(),n=Ps();function i(o){var c=-1,u=o==null?0:o.length;for(this.clear();++c<u;){var d=o[c];this.set(d[0],d[1])}}return i.prototype.clear=e,i.prototype.delete=r,i.prototype.get=t,i.prototype.has=a,i.prototype.set=n,_e=i,_e}var we,ot;function Hs(){if(ot)return we;ot=1;var e=se();function r(){this.__data__=new e,this.size=0}return we=r,we}var Ce,lt;function Ls(){if(lt)return Ce;lt=1;function e(r){var t=this.__data__,a=t.delete(r);return this.size=t.size,a}return Ce=e,Ce}var je,ct;function $s(){if(ct)return je;ct=1;function e(r){return this.__data__.get(r)}return je=e,je}var Te,ut;function Bs(){if(ut)return Te;ut=1;function e(r){return this.__data__.has(r)}return Te=e,Te}var Fe,dt;function zs(){if(dt)return Fe;dt=1;var e=L(),r=e["__core-js_shared__"];return Fe=r,Fe}var Re,pt;function Vs(){if(pt)return Re;pt=1;var e=zs(),r=(function(){var a=/[^.]+$/.exec(e&&e.keys&&e.keys.IE_PROTO||"");return a?"Symbol(src)_1."+a:""})();function t(a){return!!r&&r in a}return Re=t,Re}var Ie,ht;function wn(){if(ht)return Ie;ht=1;var e=Function.prototype,r=e.toString;function t(a){if(a!=null){try{return r.call(a)}catch{}try{return a+""}catch{}}return""}return Ie=t,Ie}var De,ft;function Ws(){if(ft)return De;ft=1;var e=bi(),r=Vs(),t=$r(),a=wn(),n=/[\\^$.*+?()[\]{}|]/g,i=/^\[object .+?Constructor\]$/,o=Function.prototype,c=Object.prototype,u=o.toString,d=c.hasOwnProperty,p=RegExp("^"+u.call(d).replace(n,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function f(m){if(!t(m)||r(m))return!1;var g=e(m)?p:i;return g.test(a(m))}return De=f,De}var qe,mt;function Us(){if(mt)return qe;mt=1;function e(r,t){return r?.[t]}return qe=e,qe}var Se,vt;function V(){if(vt)return Se;vt=1;var e=Ws(),r=Us();function t(a,n){var i=r(a,n);return e(i)?i:void 0}return Se=t,Se}var Me,gt;function Wr(){if(gt)return Me;gt=1;var e=V(),r=L(),t=e(r,"Map");return Me=t,Me}var Ee,bt;function oe(){if(bt)return Ee;bt=1;var e=V(),r=e(Object,"create");return Ee=r,Ee}var Ae,yt;function Gs(){if(yt)return Ae;yt=1;var e=oe();function r(){this.__data__=e?e(null):{},this.size=0}return Ae=r,Ae}var ke,xt;function Ks(){if(xt)return ke;xt=1;function e(r){var t=this.has(r)&&delete this.__data__[r];return this.size-=t?1:0,t}return ke=e,ke}var Ne,_t;function Zs(){if(_t)return Ne;_t=1;var e=oe(),r="__lodash_hash_undefined__",t=Object.prototype,a=t.hasOwnProperty;function n(i){var o=this.__data__;if(e){var c=o[i];return c===r?void 0:c}return a.call(o,i)?o[i]:void 0}return Ne=n,Ne}var Oe,wt;function Js(){if(wt)return Oe;wt=1;var e=oe(),r=Object.prototype,t=r.hasOwnProperty;function a(n){var i=this.__data__;return e?i[n]!==void 0:t.call(i,n)}return Oe=a,Oe}var Pe,Ct;function Qs(){if(Ct)return Pe;Ct=1;var e=oe(),r="__lodash_hash_undefined__";function t(a,n){var i=this.__data__;return this.size+=this.has(a)?0:1,i[a]=e&&n===void 0?r:n,this}return Pe=t,Pe}var He,jt;function Ys(){if(jt)return He;jt=1;var e=Gs(),r=Ks(),t=Zs(),a=Js(),n=Qs();function i(o){var c=-1,u=o==null?0:o.length;for(this.clear();++c<u;){var d=o[c];this.set(d[0],d[1])}}return i.prototype.clear=e,i.prototype.delete=r,i.prototype.get=t,i.prototype.has=a,i.prototype.set=n,He=i,He}var Le,Tt;function Xs(){if(Tt)return Le;Tt=1;var e=Ys(),r=se(),t=Wr();function a(){this.size=0,this.__data__={hash:new e,map:new(t||r),string:new e}}return Le=a,Le}var $e,Ft;function eo(){if(Ft)return $e;Ft=1;function e(r){var t=typeof r;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?r!=="__proto__":r===null}return $e=e,$e}var Be,Rt;function le(){if(Rt)return Be;Rt=1;var e=eo();function r(t,a){var n=t.__data__;return e(a)?n[typeof a=="string"?"string":"hash"]:n.map}return Be=r,Be}var ze,It;function ro(){if(It)return ze;It=1;var e=le();function r(t){var a=e(this,t).delete(t);return this.size-=a?1:0,a}return ze=r,ze}var Ve,Dt;function to(){if(Dt)return Ve;Dt=1;var e=le();function r(t){return e(this,t).get(t)}return Ve=r,Ve}var We,qt;function ao(){if(qt)return We;qt=1;var e=le();function r(t){return e(this,t).has(t)}return We=r,We}var Ue,St;function no(){if(St)return Ue;St=1;var e=le();function r(t,a){var n=e(this,t),i=n.size;return n.set(t,a),this.size+=n.size==i?0:1,this}return Ue=r,Ue}var Ge,Mt;function Cn(){if(Mt)return Ge;Mt=1;var e=Xs(),r=ro(),t=to(),a=ao(),n=no();function i(o){var c=-1,u=o==null?0:o.length;for(this.clear();++c<u;){var d=o[c];this.set(d[0],d[1])}}return i.prototype.clear=e,i.prototype.delete=r,i.prototype.get=t,i.prototype.has=a,i.prototype.set=n,Ge=i,Ge}var Ke,Et;function io(){if(Et)return Ke;Et=1;var e=se(),r=Wr(),t=Cn(),a=200;function n(i,o){var c=this.__data__;if(c instanceof e){var u=c.__data__;if(!r||u.length<a-1)return u.push([i,o]),this.size=++c.size,this;c=this.__data__=new t(u)}return c.set(i,o),this.size=c.size,this}return Ke=n,Ke}var Ze,At;function so(){if(At)return Ze;At=1;var e=se(),r=Hs(),t=Ls(),a=$s(),n=Bs(),i=io();function o(c){var u=this.__data__=new e(c);this.size=u.size}return o.prototype.clear=r,o.prototype.delete=t,o.prototype.get=a,o.prototype.has=n,o.prototype.set=i,Ze=o,Ze}var Je,kt;function oo(){if(kt)return Je;kt=1;var e="__lodash_hash_undefined__";function r(t){return this.__data__.set(t,e),this}return Je=r,Je}var Qe,Nt;function lo(){if(Nt)return Qe;Nt=1;function e(r){return this.__data__.has(r)}return Qe=e,Qe}var Ye,Ot;function co(){if(Ot)return Ye;Ot=1;var e=Cn(),r=oo(),t=lo();function a(n){var i=-1,o=n==null?0:n.length;for(this.__data__=new e;++i<o;)this.add(n[i])}return a.prototype.add=a.prototype.push=r,a.prototype.has=t,Ye=a,Ye}var Xe,Pt;function uo(){if(Pt)return Xe;Pt=1;function e(r,t){for(var a=-1,n=r==null?0:r.length;++a<n;)if(t(r[a],a,r))return!0;return!1}return Xe=e,Xe}var er,Ht;function po(){if(Ht)return er;Ht=1;function e(r,t){return r.has(t)}return er=e,er}var rr,Lt;function jn(){if(Lt)return rr;Lt=1;var e=co(),r=uo(),t=po(),a=1,n=2;function i(o,c,u,d,p,f){var m=u&a,g=o.length,y=c.length;if(g!=y&&!(m&&y>g))return!1;var _=f.get(o),v=f.get(c);if(_&&v)return _==c&&v==o;var w=-1,b=!0,R=u&n?new e:void 0;for(f.set(o,c),f.set(c,o);++w<g;){var x=o[w],I=c[w];if(d)var T=m?d(I,x,w,c,o,f):d(x,I,w,o,c,f);if(T!==void 0){if(T)continue;b=!1;break}if(R){if(!r(c,function(C,D){if(!t(R,D)&&(x===C||p(x,C,u,d,f)))return R.push(D)})){b=!1;break}}else if(!(x===I||p(x,I,u,d,f))){b=!1;break}}return f.delete(o),f.delete(c),b}return rr=i,rr}var tr,$t;function ho(){if($t)return tr;$t=1;var e=L(),r=e.Uint8Array;return tr=r,tr}var ar,Bt;function fo(){if(Bt)return ar;Bt=1;function e(r){var t=-1,a=Array(r.size);return r.forEach(function(n,i){a[++t]=[i,n]}),a}return ar=e,ar}var nr,zt;function mo(){if(zt)return nr;zt=1;function e(r){var t=-1,a=Array(r.size);return r.forEach(function(n){a[++t]=n}),a}return nr=e,nr}var ir,Vt;function vo(){if(Vt)return ir;Vt=1;var e=Bn(),r=ho(),t=Ma(),a=jn(),n=fo(),i=mo(),o=1,c=2,u="[object Boolean]",d="[object Date]",p="[object Error]",f="[object Map]",m="[object Number]",g="[object RegExp]",y="[object Set]",_="[object String]",v="[object Symbol]",w="[object ArrayBuffer]",b="[object DataView]",R=e?e.prototype:void 0,x=R?R.valueOf:void 0;function I(T,C,D,q,E,j,S){switch(D){case b:if(T.byteLength!=C.byteLength||T.byteOffset!=C.byteOffset)return!1;T=T.buffer,C=C.buffer;case w:return!(T.byteLength!=C.byteLength||!j(new r(T),new r(C)));case u:case d:case m:return t(+T,+C);case p:return T.name==C.name&&T.message==C.message;case g:case _:return T==C+"";case f:var F=n;case y:var A=q&o;if(F||(F=i),T.size!=C.size&&!A)return!1;var O=S.get(T);if(O)return O==C;q|=c,S.set(T,C);var Z=a(F(T),F(C),q,E,j,S);return S.delete(T),Z;case v:if(x)return x.call(T)==x.call(C)}return!1}return ir=I,ir}var sr,Wt;function go(){if(Wt)return sr;Wt=1;function e(r,t){for(var a=-1,n=t.length,i=r.length;++a<n;)r[i+a]=t[a];return r}return sr=e,sr}var or,Ut;function bo(){if(Ut)return or;Ut=1;var e=go(),r=te();function t(a,n,i){var o=n(a);return r(a)?o:e(o,i(a))}return or=t,or}var lr,Gt;function yo(){if(Gt)return lr;Gt=1;function e(r,t){for(var a=-1,n=r==null?0:r.length,i=0,o=[];++a<n;){var c=r[a];t(c,a,r)&&(o[i++]=c)}return o}return lr=e,lr}var cr,Kt;function xo(){if(Kt)return cr;Kt=1;function e(){return[]}return cr=e,cr}var ur,Zt;function _o(){if(Zt)return ur;Zt=1;var e=yo(),r=xo(),t=Object.prototype,a=t.propertyIsEnumerable,n=Object.getOwnPropertySymbols,i=n?function(o){return o==null?[]:(o=Object(o),e(n(o),function(c){return a.call(o,c)}))}:r;return ur=i,ur}var dr,Jt;function wo(){if(Jt)return dr;Jt=1;function e(r,t){for(var a=-1,n=Array(r);++a<r;)n[a]=t(a);return n}return dr=e,dr}var pr,Qt;function Co(){if(Qt)return pr;Qt=1;var e=re(),r=G(),t="[object Arguments]";function a(n){return r(n)&&e(n)==t}return pr=a,pr}var hr,Yt;function jo(){if(Yt)return hr;Yt=1;var e=Co(),r=G(),t=Object.prototype,a=t.hasOwnProperty,n=t.propertyIsEnumerable,i=e((function(){return arguments})())?e:function(o){return r(o)&&a.call(o,"callee")&&!n.call(o,"callee")};return hr=i,hr}var W={exports:{}},fr,Xt;function To(){if(Xt)return fr;Xt=1;function e(){return!1}return fr=e,fr}W.exports;var ea;function Tn(){return ea||(ea=1,(function(e,r){var t=L(),a=To(),n=r&&!r.nodeType&&r,i=n&&!0&&e&&!e.nodeType&&e,o=i&&i.exports===n,c=o?t.Buffer:void 0,u=c?c.isBuffer:void 0,d=u||a;e.exports=d})(W,W.exports)),W.exports}var mr,ra;function Fo(){if(ra)return mr;ra=1;var e=re(),r=yi(),t=G(),a="[object Arguments]",n="[object Array]",i="[object Boolean]",o="[object Date]",c="[object Error]",u="[object Function]",d="[object Map]",p="[object Number]",f="[object Object]",m="[object RegExp]",g="[object Set]",y="[object String]",_="[object WeakMap]",v="[object ArrayBuffer]",w="[object DataView]",b="[object Float32Array]",R="[object Float64Array]",x="[object Int8Array]",I="[object Int16Array]",T="[object Int32Array]",C="[object Uint8Array]",D="[object Uint8ClampedArray]",q="[object Uint16Array]",E="[object Uint32Array]",j={};j[b]=j[R]=j[x]=j[I]=j[T]=j[C]=j[D]=j[q]=j[E]=!0,j[a]=j[n]=j[v]=j[i]=j[w]=j[o]=j[c]=j[u]=j[d]=j[p]=j[f]=j[m]=j[g]=j[y]=j[_]=!1;function S(F){return t(F)&&r(F.length)&&!!j[e(F)]}return mr=S,mr}var vr,ta;function Ro(){if(ta)return vr;ta=1;function e(r){return function(t){return r(t)}}return vr=e,vr}var U={exports:{}};U.exports;var aa;function Io(){return aa||(aa=1,(function(e,r){var t=zn(),a=r&&!r.nodeType&&r,n=a&&!0&&e&&!e.nodeType&&e,i=n&&n.exports===a,o=i&&t.process,c=(function(){try{var u=n&&n.require&&n.require("util").types;return u||o&&o.binding&&o.binding("util")}catch{}})();e.exports=c})(U,U.exports)),U.exports}var gr,na;function Fn(){if(na)return gr;na=1;var e=Fo(),r=Ro(),t=Io(),a=t&&t.isTypedArray,n=a?r(a):e;return gr=n,gr}var br,ia;function Do(){if(ia)return br;ia=1;var e=wo(),r=jo(),t=te(),a=Tn(),n=xi(),i=Fn(),o=Object.prototype,c=o.hasOwnProperty;function u(d,p){var f=t(d),m=!f&&r(d),g=!f&&!m&&a(d),y=!f&&!m&&!g&&i(d),_=f||m||g||y,v=_?e(d.length,String):[],w=v.length;for(var b in d)(p||c.call(d,b))&&!(_&&(b=="length"||g&&(b=="offset"||b=="parent")||y&&(b=="buffer"||b=="byteLength"||b=="byteOffset")||n(b,w)))&&v.push(b);return v}return br=u,br}var yr,sa;function qo(){if(sa)return yr;sa=1;var e=Object.prototype;function r(t){var a=t&&t.constructor,n=typeof a=="function"&&a.prototype||e;return t===n}return yr=r,yr}var xr,oa;function So(){if(oa)return xr;oa=1;function e(r,t){return function(a){return r(t(a))}}return xr=e,xr}var _r,la;function Mo(){if(la)return _r;la=1;var e=So(),r=e(Object.keys,Object);return _r=r,_r}var wr,ca;function Eo(){if(ca)return wr;ca=1;var e=qo(),r=Mo(),t=Object.prototype,a=t.hasOwnProperty;function n(i){if(!e(i))return r(i);var o=[];for(var c in Object(i))a.call(i,c)&&c!="constructor"&&o.push(c);return o}return wr=n,wr}var Cr,ua;function Ao(){if(ua)return Cr;ua=1;var e=Do(),r=Eo(),t=_i();function a(n){return t(n)?e(n):r(n)}return Cr=a,Cr}var jr,da;function ko(){if(da)return jr;da=1;var e=bo(),r=_o(),t=Ao();function a(n){return e(n,t,r)}return jr=a,jr}var Tr,pa;function No(){if(pa)return Tr;pa=1;var e=ko(),r=1,t=Object.prototype,a=t.hasOwnProperty;function n(i,o,c,u,d,p){var f=c&r,m=e(i),g=m.length,y=e(o),_=y.length;if(g!=_&&!f)return!1;for(var v=g;v--;){var w=m[v];if(!(f?w in o:a.call(o,w)))return!1}var b=p.get(i),R=p.get(o);if(b&&R)return b==o&&R==i;var x=!0;p.set(i,o),p.set(o,i);for(var I=f;++v<g;){w=m[v];var T=i[w],C=o[w];if(u)var D=f?u(C,T,w,o,i,p):u(T,C,w,i,o,p);if(!(D===void 0?T===C||d(T,C,c,u,p):D)){x=!1;break}I||(I=w=="constructor")}if(x&&!I){var q=i.constructor,E=o.constructor;q!=E&&"constructor"in i&&"constructor"in o&&!(typeof q=="function"&&q instanceof q&&typeof E=="function"&&E instanceof E)&&(x=!1)}return p.delete(i),p.delete(o),x}return Tr=n,Tr}var Fr,ha;function Oo(){if(ha)return Fr;ha=1;var e=V(),r=L(),t=e(r,"DataView");return Fr=t,Fr}var Rr,fa;function Po(){if(fa)return Rr;fa=1;var e=V(),r=L(),t=e(r,"Promise");return Rr=t,Rr}var Ir,ma;function Ho(){if(ma)return Ir;ma=1;var e=V(),r=L(),t=e(r,"Set");return Ir=t,Ir}var Dr,va;function Lo(){if(va)return Dr;va=1;var e=V(),r=L(),t=e(r,"WeakMap");return Dr=t,Dr}var qr,ga;function $o(){if(ga)return qr;ga=1;var e=Oo(),r=Wr(),t=Po(),a=Ho(),n=Lo(),i=re(),o=wn(),c="[object Map]",u="[object Object]",d="[object Promise]",p="[object Set]",f="[object WeakMap]",m="[object DataView]",g=o(e),y=o(r),_=o(t),v=o(a),w=o(n),b=i;return(e&&b(new e(new ArrayBuffer(1)))!=m||r&&b(new r)!=c||t&&b(t.resolve())!=d||a&&b(new a)!=p||n&&b(new n)!=f)&&(b=function(R){var x=i(R),I=x==u?R.constructor:void 0,T=I?o(I):"";if(T)switch(T){case g:return m;case y:return c;case _:return d;case v:return p;case w:return f}return x}),qr=b,qr}var Sr,ba;function Bo(){if(ba)return Sr;ba=1;var e=so(),r=jn(),t=vo(),a=No(),n=$o(),i=te(),o=Tn(),c=Fn(),u=1,d="[object Arguments]",p="[object Array]",f="[object Object]",m=Object.prototype,g=m.hasOwnProperty;function y(_,v,w,b,R,x){var I=i(_),T=i(v),C=I?p:n(_),D=T?p:n(v);C=C==d?f:C,D=D==d?f:D;var q=C==f,E=D==f,j=C==D;if(j&&o(_)){if(!o(v))return!1;I=!0,q=!1}if(j&&!q)return x||(x=new e),I||c(_)?r(_,v,w,b,R,x):t(_,v,C,w,b,R,x);if(!(w&u)){var S=q&&g.call(_,"__wrapped__"),F=E&&g.call(v,"__wrapped__");if(S||F){var A=S?_.value():_,O=F?v.value():v;return x||(x=new e),R(A,O,w,b,x)}}return j?(x||(x=new e),a(_,v,w,b,R,x)):!1}return Sr=y,Sr}var Mr,ya;function zo(){if(ya)return Mr;ya=1;var e=Bo(),r=G();function t(a,n,i,o,c){return a===n?!0:a==null||n==null||!r(a)&&!r(n)?a!==a&&n!==n:e(a,n,i,o,t,c)}return Mr=t,Mr}var Er,xa;function Vo(){if(xa)return Er;xa=1;var e=zo();function r(t,a){return e(t,a)}return Er=r,Er}var Wo=Vo();const Uo=Y(Wo);function Go(e,r){const t=N(),a=l.useRef(e),n=l.useRef(void 0),i=l.useMemo(()=>{if(n.current!==void 0&&Uo(e,a.current)&&r===void 0)return n.current;const o=t.repoFilesBrowsersCreate(e,{selectName:r});return a.current=e,n.current=o,o},[t,e,r]);return l.useEffect(()=>()=>{t.repoFilesBrowsersDestroy(i)},[t,i]),i}const Nr="vaultRepoFileInfoSheetVisible";function Ko(){try{if(localStorage.getItem(Nr)==="true")return!0}catch{}return!1}function _a(e){try{e?localStorage.setItem(Nr,"true"):localStorage.removeItem(Nr)}catch{}}function Zo(e){const r=H(),[t,a]=l.useState(Ko),n=t&&!r,i=En(),o=i.show,c=e.selectedFile,u=l.useCallback(()=>{r?c!==void 0&&o(c):a(p=>{const f=!p;return _a(f),f})},[r,o,c]),d=l.useCallback(()=>{a(!1),_a(!1)},[]);return{onInfoClick:u,infoSheetVisible:n,infoSheetHide:d,infoModal:i}}const Rn=l.memo(({browserId:e,info:r})=>{const t=H(),a=l.useMemo(()=>r.breadcrumbs.map(d=>d.name).join(" › "),[r]);Nn(a);const{onInfoClick:n,infoSheetVisible:i,infoSheetHide:o,infoModal:c}=Zo(r),u=l.useMemo(()=>({}),[]);return s.jsx(Oa.Provider,{value:e,children:s.jsx(Ha.Provider,{value:u,children:s.jsxs(An,{navbarLeft:r!==void 0?s.jsx(yn,{breadcrumbs:r.breadcrumbs}):void 0,navbarHeader:r!==void 0?s.jsx(Pa,{breadcrumbs:r.breadcrumbs}):void 0,navbarNav:s.jsx(fn,{info:r}),navbarExtra:s.jsx(gn,{info:r,onInfoClick:n}),className:t?h`
                  padding-top: 0;
                `:h`
                  padding-top: 10px;
                `,sidenavClassName:t?h``:h`
                  margin-top: -50px;
                `,children:[r!==void 0?s.jsx(Qa,{info:r}):null,s.jsx(an,{}),r?.encryptedPath!==void 0?s.jsx(rn,{}):null,s.jsx(_n,{}),s.jsx(Na,{file:i?r?.selectedFile:void 0,hide:o}),s.jsx(ka,{file:c.payload,hide:c.hide})]})})})});Rn.displayName="RepoFilesInfo";const Jo=l.memo(({source:e,selectName:r})=>{const t=Go(e,r),[a]=ee((n,i)=>n.repoFilesBrowsersInfoSubscribe(t,i),n=>n.repoFilesBrowsersInfoData,[t]);return a===void 0||a.repoId===void 0?s.jsx(kn,{}):s.jsx(ai,{repoId:a.repoId,repoStatus:a.repoStatus,isLocked:a.isLocked,children:s.jsx(Rn,{browserId:t,info:a})})});Jo.displayName="RepoFiles";export{Ya as D,Jo as R,B as a,Zi as u};

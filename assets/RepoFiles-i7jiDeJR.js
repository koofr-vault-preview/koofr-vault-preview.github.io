const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/RepoFilesDropZoneDesktop-Cipbh7Gi.js","assets/DynamicThemeProvider-4BQuZolX.js","assets/emotion-css.esm-9QbHV8nv.js","assets/DashboardLayout-CiCy3sR7.js","assets/mainWebAuthenticated-BLBNfo9d.js","assets/NavbarSticky-CvwZKpMB.js","assets/Button-CJ4fGdXT.js","assets/index-Bqs6k82x.js","assets/index-ulgnFFAK.css","assets/DashboardNavbar-Cqb2YHXt.js","assets/Navbar-DmkHxDZO.js","assets/useMenuUpdate-DaK7Jj7t.js","assets/LanguagePickerDropdown-BCsB8ClU.js","assets/DashboardLoading-C3JER0Gk.js","assets/useDocumentTitle-D3L4F_h2.js","assets/browser-CJ-bVFNY.js","assets/DashboardError-afEkoonJ.js","assets/error-icon@2x-BzFHMFnI.js","assets/PasswordInput-BNN50ma6.js","assets/format-BhrSY7QU.js","assets/range-CLyZZ-QA.js","assets/Checkbox-LRr_6R4N.js","assets/DirPicker-hB9Dvzil.js"])))=>i.map(i=>d[i]);
import{g as ee,r as c,a as N,u as W,j as n,b as L,K as Ii}from"./DynamicThemeProvider-4BQuZolX.js";import{c as p,M as R,a as A,L as X,u as Di}from"./emotion-css.esm-9QbHV8nv.js";import{a as Si,S as qi,b as Ai,u as Ei,D as ki}from"./DashboardLayout-CiCy3sR7.js";import{D as Ni}from"./DashboardLoading-C3JER0Gk.js";import{u as Oi}from"./useDocumentTitle-D3L4F_h2.js";import{k as re,D as Pi,a as O,l as Hi,F as Ma,M as ja,b as Fa,c as Ta,d as Ra,e as Ia,g as Da,h as Nr,u as te,m as Li,n as zi,r as ae,o as ie,p as Z,q as z,s as Bi,f as $i,t as Vi,v as Wi}from"./mainWebAuthenticated-BLBNfo9d.js";import{S as Sa,n as Hr,o as Ui,q as Gi,s as Ki,r as Lr,d as qa,c as Aa,t as Zi,T as V,u as Ji,j as Qi,k as Yi,l as Xi,m as eo,v as ro,g as to,h as ao,w as io,R as oo}from"./browser-CJ-bVFNY.js";import{f as zr}from"./format-BhrSY7QU.js";import{u as no}from"./NavbarSticky-CvwZKpMB.js";import{N as so}from"./DashboardNavbar-Cqb2YHXt.js";import{E as lo}from"./DashboardError-afEkoonJ.js";import{s as B,h as Br,k as Y,B as co,m as uo,n as fo}from"./Button-CJ4fGdXT.js";import{r as po,a as $r,b as ho,c as Ea,d as mo,e as go,f as vo,g as bo}from"./range-CLyZZ-QA.js";import{C as ka}from"./Checkbox-LRr_6R4N.js";import{_ as yo}from"./index-Bqs6k82x.js";import{D as _o}from"./DirPicker-hB9Dvzil.js";import{u as xo,a as wo,M as Co,b as Mo,c as oe,D as jo,d as Fo}from"./useMenuUpdate-DaK7Jj7t.js";import{a as To}from"./Navbar-DmkHxDZO.js";var ue,Kr;function Ro(){return Kr||(Kr=1,ue=function e(r,t){if(r===t)return!0;if(r&&t&&typeof r=="object"&&typeof t=="object"){if(r.constructor!==t.constructor)return!1;var a,i,o;if(Array.isArray(r)){if(a=r.length,a!=t.length)return!1;for(i=a;i--!==0;)if(!e(r[i],t[i]))return!1;return!0}if(r.constructor===RegExp)return r.source===t.source&&r.flags===t.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===t.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===t.toString();if(o=Object.keys(r),a=o.length,a!==Object.keys(t).length)return!1;for(i=a;i--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[i]))return!1;for(i=a;i--!==0;){var s=o[i];if(!e(r[s],t[s]))return!1}return!0}return r!==r&&t!==t}),ue}var Io=Ro();const Do=ee(Io),ne=typeof window<"u"?c.useLayoutEffect:c.useEffect;function So(e,r,t){const[a,i]=c.useState(()=>r(e)),o=c.useCallback(()=>{const s=r(e);Do(a,s)||(i(s),t&&t())},[a,e,t]);return ne(o),[a,o]}function qo(e,r,t){const[a,i]=So(e,r,t);return ne(function(){const s=e.getHandlerId();if(s!=null)return e.subscribeToStateChange(i,{handlerIds:[s]})},[e,i]),a}function Ao(e,r,t){return qo(r,e||(()=>({})),()=>t.reconnect())}function Eo(e,r){const t=[...r||[]];return r==null&&typeof e!="function"&&t.push(e),c.useMemo(()=>typeof e=="function"?e():e,t)}let fe=!1;class ko{receiveHandlerId(r){this.targetId=r}getHandlerId(){return this.targetId}subscribeToStateChange(r,t){return this.internalMonitor.subscribeToStateChange(r,t)}canDrop(){if(!this.targetId)return!1;re(!fe,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return fe=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{fe=!1}}isOver(r){return this.targetId?this.internalMonitor.isOverTarget(this.targetId,r):!1}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(r){this.targetId=null,this.internalMonitor=r.getMonitor()}}function No(e,r,t){const a=t.getRegistry(),i=a.addTarget(e,r);return[i,()=>a.removeTarget(i)]}function Oo(e,r,t,a){let i;if(i!==void 0)return!!i;if(e===r)return!0;if(typeof e!="object"||!e||typeof r!="object"||!r)return!1;const o=Object.keys(e),s=Object.keys(r);if(o.length!==s.length)return!1;const l=Object.prototype.hasOwnProperty.bind(r);for(let d=0;d<o.length;d++){const u=o[d];if(!l(u))return!1;const f=e[u],h=r[u];if(i=void 0,i===!1||i===void 0&&f!==h)return!1}return!0}function Po(e){return e!==null&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Ho(e){if(typeof e.type=="string")return;const r=e.type.displayName||e.type.name||"the component";throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${r} into a <div>, or turn it into a drag source or a drop target itself.`)}function Lo(e){return(r=null,t=null)=>{if(!c.isValidElement(r)){const o=r;return e(o,t),o}const a=r;return Ho(a),Bo(a,t?o=>e(o,t):e)}}function zo(e){const r={};return Object.keys(e).forEach(t=>{const a=e[t];if(t.endsWith("Ref"))r[t]=e[t];else{const i=Lo(a);r[t]=()=>i}}),r}function Zr(e,r){typeof e=="function"?e(r):e.current=r}function Bo(e,r){const t=e.ref;return re(typeof t!="string","Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"),t?c.cloneElement(e,{ref:a=>{Zr(t,a),Zr(r,a)}}):c.cloneElement(e,{ref:r})}class $o{get connectTarget(){return this.dropTarget}reconnect(){const r=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();r&&this.disconnectDropTarget();const t=this.dropTarget;if(this.handlerId){if(!t){this.lastConnectedDropTarget=t;return}r&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=t,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,t,this.dropTargetOptions))}}receiveHandlerId(r){r!==this.handlerId&&(this.handlerId=r,this.reconnect())}get dropTargetOptions(){return this.dropTargetOptionsInternal}set dropTargetOptions(r){this.dropTargetOptionsInternal=r}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didDropTargetChange(){return this.lastConnectedDropTarget!==this.dropTarget}didOptionsChange(){return!Oo(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}disconnectDropTarget(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}get dropTarget(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}clearDropTarget(){this.dropTargetRef=null,this.dropTargetNode=null}constructor(r){this.hooks=zo({dropTarget:(t,a)=>{this.clearDropTarget(),this.dropTargetOptions=a,Po(t)?this.dropTargetRef=t:this.dropTargetNode=t,this.reconnect()}}),this.handlerId=null,this.dropTargetRef=null,this.dropTargetOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDropTarget=null,this.lastConnectedDropTargetOptions=null,this.backend=r}}function Vr(){const{dragDropManager:e}=c.useContext(Pi);return re(e!=null,"Expected drag drop context"),e}function Vo(e){return c.useMemo(()=>e.hooks.dropTarget(),[e])}function Wo(e){const r=Vr(),t=c.useMemo(()=>new $o(r.getBackend()),[r]);return ne(()=>(t.dropTargetOptions=e||null,t.reconnect(),()=>t.disconnectDropTarget()),[e]),t}function Uo(){const e=Vr();return c.useMemo(()=>new ko(e),[e])}function Go(e){const{accept:r}=e;return c.useMemo(()=>(re(e.accept!=null,"accept must be defined"),Array.isArray(r)?r:[r]),[r])}class Ko{canDrop(){const r=this.spec,t=this.monitor;return r.canDrop?r.canDrop(t.getItem(),t):!0}hover(){const r=this.spec,t=this.monitor;r.hover&&r.hover(t.getItem(),t)}drop(){const r=this.spec,t=this.monitor;if(r.drop)return r.drop(t.getItem(),t)}constructor(r,t){this.spec=r,this.monitor=t}}function Zo(e,r){const t=c.useMemo(()=>new Ko(e,r),[r]);return c.useEffect(()=>{t.spec=e},[e]),t}function Jo(e,r,t){const a=Vr(),i=Zo(e,r),o=Go(e);ne(function(){const[l,d]=No(o,i,a);return r.receiveHandlerId(l),t.receiveHandlerId(l),d},[a,r,i,t,o.map(s=>s.toString()).join("|")])}function Qo(e,r){const t=Eo(e,r),a=Uo(),i=Wo(t.options);return Jo(t,a,i),[Ao(t.collect,a,i),Vo(i)]}function Yo(){return O()}const H=c.memo(({label:e,children:r})=>{const t=N();return n.jsxs("div",{className:p`
          margin: 0 0 15px;
        `,children:[n.jsx("div",{className:p`
            font-size: 13px;
            font-weight: normal;
            color: ${t.colors.textLight};
          `,children:e}),n.jsx("div",{className:p`
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
          `,children:r})]})});H.displayName="Item";const Wr=c.memo(({file:e})=>{const r=N(),t=W(),a=Hi();return n.jsxs("div",{className:p`
        display: flex;
        flex-direction: column;
      `,children:[n.jsx(H,{label:t.formatMessage({id:"web.repo_file_info.name.label",description:"Field label for the file name in the file info panel.",defaultMessage:"Name"}),children:e.nameError===void 0?n.jsx(n.Fragment,{children:e.name}):n.jsxs("div",{className:p`
              color: ${r.colors.destructive};
            `,children:[n.jsx("p",{children:e.name}),n.jsx("p",{children:e.nameError})]})}),n.jsx(H,{label:t.formatMessage({id:"web.repo_file_info.type.label",description:"Field label for the file type/category in the file info panel.",defaultMessage:"Type"}),children:Xo(e.category,t)}),e.sizeDisplay!==""?n.jsx(H,{label:t.formatMessage({id:"web.repo_file_info.size.label",description:"Field label for the file size in the file info panel.",defaultMessage:"Size"}),children:e.sizeDisplay}):null,e.modified!==void 0?n.jsxs(H,{label:t.formatMessage({id:"web.repo_file_info.modified.label",description:"Field label for the last modified date in the file info panel.",defaultMessage:"Modified"}),children:[n.jsx(Sa,{value:e.modified,noTooltip:!0}),n.jsx("br",{}),zr(e.modified,"PPPPpp",{locale:a})]}):null,n.jsx(H,{label:t.formatMessage({id:"web.repo_file_info.path.label",description:"Field label for the decrypted file path in the file info panel.",defaultMessage:"Path"}),children:e.decryptedPath??"???"}),n.jsx(H,{label:t.formatMessage({id:"web.repo_file_info.encrypted_path.label",description:"Field label for the encrypted file path in the file info panel.",defaultMessage:"Encrypted path"}),children:e.encryptedPath}),e.type==="File"?n.jsxs(n.Fragment,{children:[n.jsx(H,{label:t.formatMessage({id:"web.repo_file_info.md5.label",description:"Field label for the file MD5 hash in the file info panel.",defaultMessage:"MD5"}),children:e.tags.hash??"???"}),n.jsx(H,{label:t.formatMessage({id:"web.repo_file_info.encrypted_md5.label",description:"Field label for the encrypted MD5 hash in the file info panel.",defaultMessage:"Encrypted MD5"}),children:e.remoteHash??"???"})]}):null,e.tags.error!==void 0?n.jsx(H,{label:t.formatMessage({id:"web.repo_file_info.tags_error.label",description:"Field label for tag processing errors in the file info panel.",defaultMessage:"Tags error"}),children:n.jsx("span",{className:p`
              color: ${r.colors.destructive};
            `,children:e.tags.error})}):null]})});Wr.displayName="RepoFileInfoGeneral";function Xo(e,r){switch(e){case"Generic":return r.formatMessage({id:"web.repo_file_category.file",description:"File category label for generic files in the file info panel.",defaultMessage:"File"});case"Folder":return r.formatMessage({id:"web.repo_file_category.folder",description:"File category label for folders in the file info panel.",defaultMessage:"Folder"});case"Archive":return r.formatMessage({id:"web.repo_file_category.archive",description:"File category label for archive files in the file info panel.",defaultMessage:"Archive"});case"Audio":return r.formatMessage({id:"web.repo_file_category.audio",description:"File category label for audio files in the file info panel.",defaultMessage:"Audio"});case"Code":return r.formatMessage({id:"web.repo_file_category.code",description:"File category label for code files in the file info panel.",defaultMessage:"Code"});case"Document":return r.formatMessage({id:"web.repo_file_category.document",description:"File category label for document files in the file info panel.",defaultMessage:"Document"});case"Image":return r.formatMessage({id:"web.repo_file_category.image",description:"File category label for image files in the file info panel.",defaultMessage:"Image"});case"Pdf":return r.formatMessage({id:"web.repo_file_category.pdf",description:"File category label for PDF files in the file info panel.",defaultMessage:"PDF"});case"Presentation":return r.formatMessage({id:"web.repo_file_category.presentation",description:"File category label for presentation files in the file info panel.",defaultMessage:"Presentation"});case"Sheet":return r.formatMessage({id:"web.repo_file_category.spreadsheet",description:"File category label for spreadsheet files in the file info panel.",defaultMessage:"Spreadsheet"});case"Text":return r.formatMessage({id:"web.repo_file_category.text",description:"File category label for plain text files in the file info panel.",defaultMessage:"Text"});case"Video":return r.formatMessage({id:"web.repo_file_category.video",description:"File category label for video files in the file info panel.",defaultMessage:"Video"})}}const Ur=c.memo(({file:e})=>n.jsx("div",{className:p`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        overflow-x: hidden;
      `,children:n.jsx("div",{className:p`
          margin: 25px 25px 50px;
        `,children:n.jsx(Ma,{size:"Lg",attrs:e.fileIconAttrs})})}));Ur.displayName="RepoFileInfoImage";const Na=c.memo(({file:e,hide:r})=>n.jsxs(n.Fragment,{children:[n.jsx(Fa,{children:n.jsx(Ta,{children:n.jsx(R,{id:"web.repo_file_info.title",description:"Modal title for the file info dialog/sheet.",defaultMessage:"Info"})})}),n.jsxs(Ra,{children:[n.jsx(Wr,{file:e}),n.jsx(Ur,{file:e})]}),n.jsx(Ia,{children:n.jsx(Da,{children:n.jsx(Nr,{variant:"primary",onClick:r,children:n.jsx(R,{id:"web.repo_file_info.close.button",description:"Close button label in the file info modal.",defaultMessage:"Close"})})})})]}));Na.displayName="RepoFileInfoModalContent";const Oa=c.memo(({file:e,hide:r})=>n.jsx(ja,{show:e!==void 0,onHide:r,children:e!==void 0?n.jsx(Na,{file:e,hide:r}):n.jsx(n.Fragment,{})}));Oa.displayName="RepoFileInfoModal";const Pa=c.memo(({file:e,hide:r})=>{const t=N(),a=e!==void 0,i=no(),[o]=te((l,d)=>l.transfersIsActiveSubscribe(d),l=>l.transfersIsActiveData,[]),s=o?Si:0;return n.jsx("div",{className:A(p`
          flex-direction: column;
          position: fixed;
          background-color: #fff;
          z-index: ${t.zindex.fileInfoSheet};
          display: flex;
          top: 70px;
          bottom: ${s}px;
          left: -250px;
          width: 250px;
          border-right: 1px solid ${t.colors.borderLight};
          border-top: 1px solid ${t.colors.borderLight};
          transition: left 0.3s ease-out;
        `,a&&p`
            left: 0;
          `,i&&p`
            top: 69px;
          `),children:e!==void 0?n.jsxs("div",{className:p`
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            overflow: hidden;
          `,children:[n.jsxs("div",{className:p`
              display: flex;
              flex-direction: row;
              align-items: center;
              flex-shrink: 0;
              border-bottom: 1px solid ${t.colors.border};
              height: 46px;
            `,children:[n.jsx("div",{className:p`
                flex-grow: 1;
                font-size: 14px;
                font-weight: normal;
                margin: 0 0 0 20px;
                color: ${t.colors.text};
              `,children:n.jsx(R,{id:"web.repo_file_info.title",description:"Modal title for the file info dialog/sheet.",defaultMessage:"Info"})}),n.jsx("div",{className:p`
                margin-right: 7px;
              `,children:n.jsx(Li.Provider,{value:r,children:n.jsx(zi,{})})})]}),n.jsx("div",{className:p`
              display: flex;
              flex-direction: column;
              flex-grow: 1;
              padding: 20px 25px 0;
              overflow-x: hidden;
            `,children:n.jsx(Wr,{file:e})}),n.jsx(Ur,{file:e})]}):null})});Pa.displayName="RepoFileInfoSheet";const Ha=c.createContext(void 0);function $(){return c.useContext(Ha)}const La=c.memo(({breadcrumbs:e})=>{const r=L(),t=O(),a=$(),i=c.useMemo(()=>r?e.slice(e.length-1):e,[e,r]),o=c.useMemo(()=>i.map((l,d)=>({id:l.id,name:l.name,link:/^recent:/.test(l.id)?{pathname:`/repos/${l.repoId}/recent`}:Hr(l.repoId,l.path),isClickable:!0,hasCaret:!1,isLast:d===i.length-1})),[i]),s=c.useCallback((l,d)=>{d.isLast&&t.repoFilesBrowsersLoadFiles(a)},[t,a]);return n.jsx(so,{breadcrumbs:o,onClick:s})});La.displayName="RepoFilesBreadcrumbs";const en="/assets/empty-folder@2x-DkQV6bHE.png",za=c.createContext(void 0);function J(){return c.useContext(za)}const Ba=c.memo(()=>{const e=N(),r=J();return n.jsxs("div",{className:p`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 80px 0 0;
      `,children:[n.jsx("img",{src:en,alt:"",className:p`
          display: block;
          width: 252px;
          height: 186px;
          cursor: pointer;
        `,onClick:()=>{r.uploadFile?.()}}),n.jsx("h3",{className:p`
          font-size: 14px;
          color: ${e.colors.text};
          font-weight: 600;
          margin: 0 0 20px;
        `,children:n.jsx(R,{id:"web.repo_files_empty.title",description:"Empty-state headline shown when a Safe Box folder has no files.",defaultMessage:"This folder is empty."})})]})});Ba.displayName="RepoFilesEmpty";function rn(e){return e(Ii)}function tn(){const[e,r]=c.useState(null),[t,a]=c.useState({width:0,height:0}),i=c.useCallback(()=>{a({width:e?.offsetWidth||0,height:e?.offsetHeight||0})},[e?.offsetHeight,e?.offsetWidth]);return c.useEffect(()=>(window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}),[i]),c.useLayoutEffect(()=>{i()},[e?.offsetHeight,e?.offsetWidth]),[r,t]}var pe,Jr;function an(){if(Jr)return pe;Jr=1;var e=ae(),r=ie(),t=Z(),a="[object String]";function i(o){return typeof o=="string"||!r(o)&&t(o)&&e(o)==a}return pe=i,pe}var on=an();const nn=ee(on);function sn(e,r){let t=0,a=0,i=0;const o=r.map(d=>{const u={type:0,width:void 0,relWidth:void 0,minWidth:d.minWidth};if(d.width===void 0)a+=1;else if(nn(d.width)){if(d.width[d.width.length-1]!=="%")throw new Error(`Column width must be a number or percentage: ${d.width}`);const f=parseInt(d.width.slice(0,d.width.length-1),10)/100;i+=f,u.type=2,u.relWidth=f}else{if(d.minWidth!==void 0)throw new Error(`Column cannot have both width number and minWidth: ${d.width}, ${d.minWidth}`);u.type=1,u.width=d.width,t+=u.width}return u});if(i>1)throw new Error("Columns relative widths cannot be more than 100%");if(a>0){if(i===1)throw new Error("Columns relative widths cannot equal 100% if there are unknown widths");const d=(1-i)/a;o.forEach(u=>{u.type===0&&(u.type=2,u.relWidth=d)})}else o.forEach(d=>{d.type===2&&(d.relWidth=d.relWidth/i)});const s=Math.max(e-t,0);let l=s;return o.forEach(d=>{if(d.type===2&&d.minWidth!==void 0){const u=Math.min(Math.max(s*d.relWidth,d.minWidth),l);l-=u,d.type=1,d.width=u}}),o.forEach(d=>{if(d.type===2){const u=Math.min(Math.max(s*d.relWidth,0),l);l-=u,d.type=1,d.width=u}}),o.map(d=>d.width)}const ln=e=>{switch(e){case void 0:return;case"Asc":return"ascending";case"Desc":return"descending";case"Hidden":return"none"}},Or=B.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
  align-items: center;
  padding-left: 10px;
  flex-grow: 0;
  flex-shrink: 0;
`,$a=B(Or)`
  font-size: 13px;
  font-weight: normal;
  color: ${({theme:e})=>e.colors.textLight};
  vertical-align: middle;
`,cn=B($a)`
  align-items: center;
  justify-content: center;
  display: flex;
`,dn=B.button`
  ${Br}
  color: ${({theme:e})=>e.colors.textLight};
  cursor: pointer;
  padding-right: 15px;

  ${({sortBy:e,theme:r})=>e==="Asc"||e==="Desc"?rn(t=>t`
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
`,un=B.div`
  display: flex;
  align-items: center;
  height: 33px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  position: relative;
`,fn=B.div``,Va=c.memo(({index:e,isSelected:r,isFirstSelected:t,hasHover:a,isDropOver:i,height:o,ariaLabel:s,onClick:l,onContextMenu:d,children:u})=>{const f=N();return n.jsx("div",{className:A(p`
            display: flex;
            flex-direction: column;
            margin-top: -1px;
            background-color: #fff;
            border-top: 1px solid ${f.colors.borderLight};
            border-bottom: 1px solid ${f.colors.borderLight};
            border-left: 1px solid transparent;
            border-right: 1px solid transparent;
            overflow: hidden;
            position: relative;
            transition:
              height 0.3s ease-out,
              border 0.1s ease-out,
              box-shadow 0.1s ease-out;
          `,e===0?p`
                border-top-color: ${f.colors.border};
              `:void 0,a&&!r?p`
                &:hover {
                  background-color: ${f.colors.empty};
                  border-top-color: ${f.colors.border};
                  border-left-color: ${f.colors.border};
                  border-right-color: ${f.colors.border};
                  border-bottom-color: ${f.colors.border};
                  box-shadow: ${f.boxShadow};
                  z-index: 1;
                }
              `:void 0,r?p`
                background-color: ${f.colors.selectionBg};
                border-top-color: ${f.colors.borderLight};
                border-left-color: ${f.colors.selection};
                border-right-color: ${f.colors.selection};
                border-bottom-color: ${f.colors.selection};
                box-shadow: ${f.boxShadow};
                z-index: 2;
              `:void 0,t?p`
                border-top-color: ${f.colors.selection};
              `:void 0,i?p`
                background-color: ${f.colors.bgLight};
                border-top-color: ${f.colors.border};
                border-left-color: ${f.colors.border};
                border-right-color: ${f.colors.border};
                border-bottom-color: ${f.colors.border};
                z-index: 1;
              `:void 0),style:{height:`${o+1}px`},onClick:l,onContextMenu:d,role:"row","aria-rowindex":e,"aria-label":s,"aria-selected":r,children:u})});Va.displayName="BaseTableRow";const pn=B.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;
  height: 47px;
`,hn=B.div`
  user-select: none;
  padding: 0 2px 3px;
`,Wa=c.createContext(void 0),Ua=c.memo(({columns:e,selectionSummary:r,length:t,data:a,Row:i,ariaLabel:o,onHeadCheckboxClick:s,onSortByClick:l,onRowCheckboxClick:d,onRowClick:u,onRowContextMenu:f})=>{const[h,{width:m}]=tn(),y=c.useMemo(()=>{if(m===0)return[];const g=m-6,w=[{name:"checkbox",label:"",width:42},...e],b=sn(g,w.map(T=>({width:T.width,minWidth:T.minWidth})));return w.map((T,x)=>({name:T.name,label:T.label,width:b[x],sortBy:T.sortBy}))},[e,m]),_=c.useMemo(()=>({columns:y,onRowCheckboxClick:d,onRowClick:u,onRowContextMenu:f}),[y,d,u,f]),v=c.useMemo(()=>po(0,t),[t]);return n.jsx(hn,{ref:h,role:"grid","aria-label":o,"aria-rowcount":t,children:y.length>0?n.jsxs(Wa.Provider,{value:_,children:[n.jsx("div",{role:"rowgroup",children:n.jsx(un,{role:"row",children:y.map(g=>g.name==="checkbox"?n.jsx(cn,{style:{minWidth:`${g.width}px`},role:"columnheader",children:n.jsx(ka,{value:r==="None"?"unchecked":r==="Partial"?"indeterminate":"checked",onClick:s})},g.name):n.jsx($a,{style:{minWidth:`${g.width}px`},role:"columnheader","aria-sort":ln(g.sortBy),children:g.sortBy!==void 0?n.jsx(dn,{sortBy:g.sortBy,onClick:w=>{l!==void 0&&l(w,g.name)},children:g.label}):g.label},g.name))})}),n.jsx(fn,{role:"rowgroup",children:v.map(g=>n.jsx(i,{index:g,data:a},g))})]}):null})});Ua.displayName="Table";const Ga=c.memo(({index:e,row:r,isSelected:t,isFirstSelected:a,ariaLabel:i})=>{const{columns:o,onRowCheckboxClick:s,onRowClick:l,onRowContextMenu:d}=c.useContext(Wa),u=c.useCallback(m=>{s(m,e)},[s,e]),f=c.useCallback(m=>{l(m,e)},[l,e]),h=c.useCallback(m=>{d(m,e)},[d,e]);return n.jsx(Va,{index:e,isSelected:t,isFirstSelected:a,hasHover:!0,isDropOver:!1,height:48,ariaLabel:i,onClick:f,onContextMenu:h,children:n.jsx(pn,{children:o.map(m=>m.name==="checkbox"?n.jsx(Or,{style:{width:`${m.width}px`},role:"cell",children:n.jsx(ka,{value:t?"checked":"unchecked",onClick:u})},m.name):n.jsx(Or,{style:{width:`${m.width}px`},role:"cell",children:r[m.name]},m.name))})},e)});Ga.displayName="TableRow";const mn=e=>Ui?e.metaKey:e.ctrlKey,Qr=e=>e.shiftKey,Ka=c.memo(({file:e})=>{const r=W(),t=L(),a=N(),i=O(),o=c.useCallback(()=>{Gi(i,e.repoId,e.encryptedPath,t)},[i,e,t]),s=c.useCallback(()=>{i.repoFilesRenameFile(e.repoId,e.encryptedPath)},[i,e]),l=e.type==="Dir"?n.jsx(X,{to:Hr(e.repoId,e.encryptedPath),className:p`
          font-weight: 600;

          ${Y} {
            color: ${a.colors.text};
          }
        `,children:e.name}):Ki(e)?n.jsx(X,{to:Lr(e.repoId,e.encryptedPath),className:p`
          ${Y} {
            color: ${a.colors.text};
          }
        `,children:e.name}):n.jsx("a",{href:".",onClick:d=>{d.preventDefault(),d.stopPropagation(),o()},className:p`
          ${Y} {
            color: ${a.colors.text};
          }
        `,children:e.name});return n.jsxs("div",{className:p`
        display: flex;
        flex-direction: row;
        align-items: center;
      `,children:[n.jsx("span",{className:p`
          margin-right: 15px;
        `,children:n.jsx(Ma,{size:"Sm",attrs:e.fileIconAttrs})}),n.jsx("span",{className:A(p`
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          `,e.nameError!==void 0&&p`
              color: ${a.colors.destructive};
            `),children:e.nameError!==void 0?n.jsx(R,{id:"web.repo_files.name_with_error.text",description:"File name display when the name has an error, adding an ERROR suffix.",defaultMessage:"{name} (ERROR)",values:{name:l}}):l}),t?null:n.jsxs("button",{className:p`
            ${Br}
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
          `,onClick:d=>{d.stopPropagation(),s()},title:r.formatMessage({id:"web.repo_files.rename.tooltip",description:"Tooltip for the rename icon button shown on file rows.",defaultMessage:"Rename"}),children:[n.jsx(qa,{className:p`
              button:hover > & {
                display: none;
              }
            `,role:"img"}),n.jsx(Aa,{className:p`
              display: none;

              button:hover > & {
                display: inline;
              }
            `,role:"img"})]})]})});Ka.displayName="FileName";const Za=c.memo(({file:e})=>n.jsx("span",{className:p`
        font-size: 12px;
      `,children:e.sizeDisplay}));Za.displayName="FileSize";const Ja=c.memo(({file:e})=>e.modified===void 0?null:n.jsx("span",{className:p`
        font-size: 12px;
      `,children:n.jsx(Sa,{value:e.modified})}));Ja.displayName="FileModified";const Qa=c.memo(({index:e,data:r})=>{const t=W(),a=c.useMemo(()=>r.items[e],[r,e]),[i]=te((d,u)=>d.repoFilesFileSubscribe(a.fileId,u),d=>d.repoFilesFileData,[a.fileId]),o=a.isSelected,s=o&&(e===0||!r.items[e-1].isSelected),l=c.useMemo(()=>{if(i!==void 0)return{name:n.jsx(Ka,{file:i}),size:n.jsx(Za,{file:i}),modified:n.jsx(Ja,{file:i})}},[i]);return l===void 0?null:n.jsx(Ga,{index:e,row:l,isSelected:o,isFirstSelected:s,ariaLabel:i!==void 0?i.type==="Dir"?t.formatMessage({id:"web.repo_files.dir.aria_label",description:"Accessibility label for a folder row in the files table.",defaultMessage:"Folder {name}"},{name:i.name}):t.formatMessage({id:"web.repo_files.file.aria_label",description:"Accessibility label for a file row in the files table.",defaultMessage:"File {name}"},{name:i.name}):void 0},a.fileId)});Qa.displayName="RepoFilesTableRow";const Ya=c.memo(({info:e})=>{const r=W(),t=L(),a=O(),i=$(),o=e.items,s=c.useMemo(()=>({items:o}),[o]),l=e.sort,d=c.useMemo(()=>[{name:"name",label:r.formatMessage({id:"web.repo_files.name.column",description:"Column header label for the file name in the files table.",defaultMessage:"Name"}),sortBy:l.field==="Name"?l.direction:"Hidden"},{name:"size",label:r.formatMessage({id:"web.repo_files.size.column",description:"Column header label for file size in the files table.",defaultMessage:"Size"}),width:t?0:"15%",minWidth:t?void 0:70,sortBy:l.field==="Size"?l.direction:"Hidden"},{name:"modified",label:r.formatMessage({id:"web.repo_files.modified.column",description:"Column header label for last modified date in the files table.",defaultMessage:"Modified"}),width:t?0:"20%",minWidth:t?void 0:150,sortBy:l.field==="Modified"?l.direction:"Hidden"}],[t,l,r]),u=c.useCallback(()=>{e.selectionSummary==="All"?a.repoFilesBrowsersClearSelection(i):a.repoFilesBrowsersSelectAll(i)},[a,i,e]),f=c.useCallback((_,v)=>{switch(v){case"name":a.repoFilesBrowsersSortBy(i,"Name");break;case"size":a.repoFilesBrowsersSortBy(i,"Size");break;case"modified":a.repoFilesBrowsersSortBy(i,"Modified");break}},[a,i]),h=c.useCallback((_,v)=>{_.stopPropagation(),a.repoFilesBrowsersSelectFile(i,o[v].fileId,!0,Qr(_),!1)},[a,i,o]),m=c.useCallback((_,v)=>{a.repoFilesBrowsersSelectFile(i,o[v].fileId,mn(_),Qr(_),!1)},[a,i,o]),y=c.useCallback(()=>{},[]);return n.jsx(Ua,{columns:d,selectionSummary:e.selectionSummary,length:o.length,data:s,Row:Qa,ariaLabel:r.formatMessage({id:"web.repo_files.table.aria_label",description:"Accessibility label for the files table/list.",defaultMessage:"Files list"}),onHeadCheckboxClick:u,onSortByClick:f,onRowCheckboxClick:h,onRowClick:m,onRowContextMenu:y})});Ya.displayName="RepoFilesTable";const Xa=c.memo(({info:e})=>{const r=O(),t=$();return n.jsx(n.Fragment,{children:e.status.type==="Error"&&!e.status.loaded?n.jsx(lo,{error:e.status.error,onRetry:()=>{r.repoFilesBrowsersLoadFiles(t)}}):e.status.type==="Loaded"&&e.totalCount===0?n.jsx(Ba,{}):n.jsx(Ya,{info:e})})});Xa.displayName="RepoFilesContent";c.lazy(()=>yo(()=>import("./RepoFilesDropZoneDesktop-Cipbh7Gi.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])).then(e=>({default:e.RepoFilesDropZoneDesktop})));const ei=c.memo(c.forwardRef(({isActive:e,isAllowed:r,isOver:t},a)=>{const i=N(),o=A(p`
          position: fixed;
          display: none;
          z-index: ${i.zindex.dropZoneLines};
          background-color: ${i.colors.border};
        `,e&&p`
            display: block;
          `,t&&(r?p`
                background-color: ${i.colors.successful};
              `:p`
                background-color: ${i.colors.destructive};
              `));return n.jsxs("div",{ref:a,className:p`
            display: flex;
            flex-direction: column;
            flex-grow: 1;
          `,children:[n.jsx("div",{className:A(o,p`
                top: 0;
                left: 5px;
                right: 0;
                height: 5px;
              `)}),n.jsx("div",{className:A(o,p`
                top: 5px;
                bottom: 0;
                right: 0;
                width: 5px;
              `)}),n.jsx("div",{className:A(o,p`
                bottom: 0;
                left: 0;
                right: 5px;
                height: 5px;
              `)}),n.jsx("div",{className:A(o,p`
                top: 0;
                bottom: 5px;
                left: 0;
                width: 5px;
              `)})]})}));ei.displayName="DropZone";function gn(){const e=document.activeElement,r=["input","select","button","textarea"];return e!=null&&r.indexOf(e.tagName.toLowerCase())!==-1}function vn(e){const r=c.useCallback(t=>{if(gn()||t.clipboardData==null||t.clipboardData.items==null&&t.clipboardData.files==null)return;const a=t.clipboardData.files!=null?Array.from(t.clipboardData.files):Array.from(t.clipboardData.items).filter(i=>i.kind==="file");Promise.all(e(a))},[e]);c.useEffect(()=>(window.addEventListener("paste",r),()=>window.removeEventListener("paste",r)),[r])}var he,Yr;function bn(){if(Yr)return he;Yr=1;var e=z(),r=function(){return e.Date.now()};return he=r,he}var me,Xr;function yn(){if(Xr)return me;Xr=1;var e=$r(),r=bn(),t=ho(),a="Expected a function",i=Math.max,o=Math.min;function s(l,d,u){var f,h,m,y,_,v,g=0,w=!1,b=!1,T=!0;if(typeof l!="function")throw new TypeError(a);d=t(d)||0,e(u)&&(w=!!u.leading,b="maxWait"in u,m=b?i(t(u.maxWait)||0,d):m,T="trailing"in u?!!u.trailing:T);function x(F){var k=f,P=h;return f=h=void 0,g=F,y=l.apply(P,k),y}function I(F){return g=F,_=setTimeout(D,d),w?x(F):y}function j(F){var k=F-v,P=F-g,Q=d-k;return b?o(Q,m-P):Q}function C(F){var k=F-v,P=F-g;return v===void 0||k>=d||k<0||b&&P>=m}function D(){var F=r();if(C(F))return S(F);_=setTimeout(D,j(F))}function S(F){return _=void 0,T&&f?x(F):(f=h=void 0,y)}function E(){_!==void 0&&clearTimeout(_),g=0,f=v=h=_=void 0}function M(){return _===void 0?y:S(r())}function q(){var F=r(),k=C(F);if(f=arguments,h=this,v=F,k){if(_===void 0)return I(v);if(b)return clearTimeout(_),_=setTimeout(D,d),x(v)}return _===void 0&&(_=setTimeout(D,d)),y}return q.cancel=E,q.flush=M,q}return me=s,me}var ge,et;function _n(){if(et)return ge;et=1;var e=yn(),r=$r(),t="Expected a function";function a(i,o,s){var l=!0,d=!0;if(typeof i!="function")throw new TypeError(t);return r(s)&&(l="leading"in s?!!s.leading:l,d="trailing"in s?!!s.trailing:d),e(i,o,{leading:l,maxWait:o,trailing:d})}return ge=a,ge}var xn=_n();const wn=ee(xn);function Cn(e){return e.isDirectory}function Mn(e){return new Promise((r,t)=>{const a=e.createReader();let i=[];const o=()=>{a.readEntries(s=>{s.length===0?r(i):(i=i.concat(Array.from(s)),setTimeout(o,10))},t)};o()})}function jn(e){return new Promise((r,t)=>e.file(r,t))}function Fn(e){const r=o=>{const s=(l,d)=>{l(o)};return{isDirectory:!1,isFile:!0,name:o.name,file:s}},t=(o,s)=>({name:o,isFile:!1,isDirectory:!0,createReader:()=>{let d=!1;return{readEntries:(f,h)=>{d?f([]):(d=!0,f(s))}}}}),a={children:new Map};e.forEach(o=>{const s=o.webkitRelativePath.split("/"),l=s.slice(0,s.length-1);let d=a;l.forEach(u=>{let f=d.children.get(u);f===void 0&&(f={name:u,isDirectory:!0,file:void 0,children:new Map},d.children.set(u,f)),d=f}),d.children.set(o.name,{name:o.name,isDirectory:!1,file:o,children:void 0})});const i=o=>{if(o.isDirectory){const s=Array.from(o.children.values()).map(i);return t(o.name,s)}return r(o.file)};return Array.from(a.children.values()).map(i)}function rt(e){return String.prototype.normalize?e.normalize().split("").filter(a=>a>=" "&&!(a>=""&&a<="")).join(""):e}function Tn(e,r){return e+(/\/$/.test(e)?"":"/")+(r[0]!=="/"?r:r.slice(1))}class Rn{upload;queue=[];constructor(r){this.upload=r.upload}uploadFileEntries(r){return r.length===0?[]:this.upload(r)}getFileName(r){let t=rt(r.name);if(t==="image.jpeg"||t==="image.jpg"||t==="image.png"){const a=zr(new Date,"yyyyMMdd_hhmmssSSS"),i=t.split(".").pop();t=`image_${a}.${i}`}return t}addEntry(r){return new Promise((t,a)=>{if(r.name===".DS_Store"){t();return}this.queue.push({entry:r,resolve:t,reject:a}),this.processQueueThrottled()})}processQueue=()=>{if(this.queue.length===0)return;const r=this.queue.slice();this.queue.length=0;const t=r.map(a=>a.entry);this.uploadFileEntries(t).forEach((a,i)=>{a.then(r[i].resolve,r[i].reject)})};processQueueThrottled=wn(this.processQueue,100);async handleEntryDir(r,t){const a=rt(r.name),i=Tn(t,a);await In(30);const o=await Mn(r);return await Promise.all(o.map(s=>this.handleEntry(s,i).then(()=>{}))),i}async handleEntryFile(r,t){const a=await jn(r),i={parentPath:t,name:this.getFileName(a),file:a};await this.addEntry(i)}async handleEntry(r,t){Cn(r)?await this.handleEntryDir(r,t):await this.handleEntryFile(r,t)}uploadDataTransferItems(r){return r.filter(t=>t.webkitGetAsEntry!=null).map(t=>t.webkitGetAsEntry()).filter(t=>t!=null).map(t=>this.handleEntry(t,"/"))}uploadWebkitFilesAsEntries(r){return Fn(r).map(t=>this.handleEntry(t,"/"))}uploadNativeFiles(r){return this.uploadFileEntries(r.map(t=>({parentPath:"/",name:this.getFileName(t),file:t})))}uploadFiles(r){if(r.length>0){const t=r[0];if(t.webkitGetAsEntry!=null)return t.webkitGetAsEntry()!=null?this.uploadDataTransferItems(r):[];if(t.webkitRelativePath!=null)return this.uploadWebkitFilesAsEntries(r)}return this.uploadNativeFiles(r)}}const In=e=>new Promise(r=>setTimeout(r,e));function ri(){const e=O(),r=$();return c.useCallback(a=>{const{repoId:i,encryptedPath:o}=e.repoFilesBrowsersInfo(r);return i===void 0||o===void 0?[]:new Rn({upload(l){return l.map(async d=>{const u=d.parentPath==="/"?d.name:d.parentPath.slice(1)+"/"+d.name;await e.transfersUpload(i,o,u,d.file)})}}).uploadFiles(a)},[e,r])}const ti=c.memo(()=>{const r=ri(),[{canDrop:t,isOver:a},i]=Qo(()=>({accept:[Bi],collect:o=>({canDrop:o.canDrop(),isOver:o.isOver({shallow:!0})}),drop:(o,s)=>{if(s.didDrop())return;const l=o.items!=null?Array.from(o.items):Array.from(o.files);Promise.all(r(l))}}),[r]);return c.useEffect(()=>{i(document.body)},[i]),vn(r),n.jsx(ei,{isActive:t,isOver:a,isAllowed:!0})});ti.displayName="RepoFilesDropZoneWeb";const ai=c.memo(()=>n.jsx(ti,{}));ai.displayName="RepoFilesDropZone";const ii=c.memo(({info:{srcFilesCount:e,mode:r,dirPickerId:t,destFileName:a,createDirEnabled:i,canMove:o},cancel:s})=>{const l=L(),d=N(),u=O(),f=c.useCallback((y,_,v)=>u.repoFilesMoveDirPickerClick(_,v),[u]),h=c.useCallback(()=>{u.repoFilesMoveCreateDir()},[u]),m=c.useCallback(()=>{u.repoFilesMoveMoveFiles()},[u]);return n.jsxs(n.Fragment,{children:[n.jsx(Fa,{children:n.jsx(Ta,{className:p`
              font-weight: normal;
            `,children:a!==void 0?r==="Copy"?n.jsx(R,{id:"web.repo_files_move.copy.title",description:"Modal title when copying selected items to a destination folder.",defaultMessage:"Copy <b>{count, plural, one {# item} other {# items}}</b> to <b>{dest}</b>",values:{count:e,dest:a,b:y=>n.jsx("strong",{className:p`
                          font-weight: 600;
                        `,children:y})}}):n.jsx(R,{id:"web.repo_files_move.move.title",description:"Modal title when moving selected items to a destination folder.",defaultMessage:"Move <b>{count, plural, one {# item} other {# items}}</b> to <b>{dest}</b>",values:{count:e,dest:a,b:y=>n.jsx("strong",{className:p`
                          font-weight: 600;
                        `,children:y})}}):null})}),n.jsx(Ra,{className:p`
            padding-bottom: 0;
            overflow: hidden;
          `,children:n.jsx("div",{className:A(p`
                border: 1px solid ${d.colors.borderDarker};
                border-radius: 3px;
                overflow-y: scroll;
                overflow-x: hidden;
              `,l?p`
                    flex-grow: 1;
                  `:p`
                    height: 300px;
                  `),children:n.jsx(_o,{pickerId:t,onClick:f})})}),n.jsxs(Ia,{children:[n.jsx($i,{children:n.jsx(co,{type:"button",disabled:!i,onClick:h,children:n.jsx(R,{id:"web.repo_files_move.create_dir.button",description:"Button label in the move/copy modal to create a new destination folder.",defaultMessage:"Create folder"})})}),n.jsxs(Da,{children:[n.jsx(Nr,{type:"button",onClick:s,children:n.jsx(R,{id:"web.repo_files_move.cancel.button",description:"Cancel button in the move/copy modal.",defaultMessage:"Cancel"})}),n.jsx(Nr,{type:"button",variant:o?"primary":"disabled",disabled:!o,onClick:m,children:r==="Copy"?n.jsx(R,{id:"web.repo_files_move.copy.button",description:"Confirm button label in the move/copy modal when in copy mode.",defaultMessage:"Copy"}):n.jsx(R,{id:"web.repo_files_move.move.button",description:"Confirm button label in the move/copy modal when in move mode.",defaultMessage:"Move"})})]})]})]})});ii.displayName="RepoFilesMoveModalContent";const oi=c.memo(()=>{const e=O(),[r]=te((a,i)=>a.repoFilesMoveInfoSubscribe(i),a=>a.repoFilesMoveInfoData,[]),t=c.useCallback(()=>e.repoFilesMoveCancel(),[e]);return n.jsx(ja,{show:r!==void 0,onHide:t,children:r!==void 0?n.jsx(ii,{info:r,cancel:t}):n.jsx(n.Fragment,{})})});oi.displayName="RepoFilesMoveModal";const Dn=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},c.createElement("path",{fill:"#fff",d:"M9.722 9.752h4.92a.72.72 0 0 0 .72-.72v-.023a.72.72 0 0 0-.72-.72h-4.92V3.375a.72.72 0 0 0-.72-.72h-.024a.72.72 0 0 0-.72.72V8.29H3.362a.72.72 0 0 0-.72.72v.023c0 .397.323.72.72.72h4.896v4.896c0 .397.323.72.72.72h.024a.72.72 0 0 0 .72-.72z"})),Sn=B.nav`
  display: flex;
  flex-direction: row;
  padding-top: ${({theme:e})=>e.isMobile?0:"11px"};
`,ni=c.memo(c.forwardRef(({children:e,className:r,backgroundClassName:t,icon:a,...i},o)=>{const s=N();return n.jsx(uo,{className:A(p`
            ${Br}
            margin: 0;
            padding: 0;

            ${Y} {
              text-decoration: none;
            }
          `,s.isMobile?p`
                min-width: 37px;
              `:p`
                margin-left: 6px;
                margin-right: 6px;
                margin-bottom: 5px;
                min-width: 45px;

                &:last-of-type {
                  margin-right: 0;
                }
              `,r),...i,ref:o,children:n.jsxs("div",{className:p`
            display: flex;
            flex-direction: column;
            align-items: center;
          `,children:[n.jsx("div",{className:A(p`
                display: flex;
                justify-content: center;
                align-items: center;
                width: 32px;
                height: 32px;
                border-radius: 3px;
                transition: ${fo};
              `,!s.isMobile&&p`
                  margin-bottom: 3px;
                `,t),children:a}),s.isMobile?null:n.jsx("div",{className:p`
                display: block;
                color: ${s.colors.text};
                font-size: 11px;
                line-height: 20px;
                font-weight: 600;
                text-align: center;
              `,children:e})]})})}));ni.displayName="NavbarNavItem";const si=c.memo(({hide:e})=>{const r=J(),t=c.useCallback(()=>{e(),r.uploadFile?.()},[e,r]);return n.jsx(oe,{onClick:t,children:n.jsx(R,{id:"web.repo_files_add_menu.upload_file.menu_item",description:"Menu item label to upload files from the Add menu in the file browser.",defaultMessage:"Upload file"})})});si.displayName="UploadFileItem";const li=c.memo(({hide:e})=>{const r=J(),t=c.useCallback(()=>{e(),r.uploadDir?.()},[e,r]);return n.jsx(oe,{onClick:t,children:n.jsx(R,{id:"web.repo_files_add_menu.upload_folder.menu_item",description:"Menu item label to upload a folder from the Add menu in the file browser.",defaultMessage:"Upload folder"})})});li.displayName="UploadDirItem";const ci=c.memo(({hide:e})=>{const r=O(),t=$(),a=c.useCallback(()=>r.repoFilesBrowsersCreateDir(t),[r,t]);return n.jsx(n.Fragment,{children:n.jsx(oe,{onClick:()=>{e(),a()},children:n.jsx(R,{id:"web.repo_files_add_menu.create_dir.menu_item",description:"Menu item label to create a new folder from the Add menu in the file browser.",defaultMessage:"Create folder"})})})});ci.displayName="CreateDirItem";const di=c.memo(({hide:e})=>{const r=W(),t=Di(),a=O(),i=$(),o=c.useCallback(()=>{const{repoId:s}=a.repoFilesBrowsersInfo(i),l=r.formatMessage({id:"web.repo_files.create_text_file.default_filename",description:"Default base filename used when creating a new text file in the file browser.",defaultMessage:"new text file {date}"},{date:zr(new Date,"yyyyMMddHHmmss")})+".txt";a.repoFilesBrowsersCreateFile(i,l).then(async d=>{d!==void 0&&await t(Lr(s,d,!0))})},[r,a,i,t]);return n.jsx(n.Fragment,{children:n.jsx(oe,{onClick:()=>{e(),o()},children:n.jsx(R,{id:"web.repo_files_add_menu.create_text_file.menu_item",description:"Menu item label to create a new text file from the Add menu in the file browser.",defaultMessage:"Create new text file"})})})});di.displayName="CreateTextFileItem";const ui=c.memo(({hide:e})=>n.jsxs(n.Fragment,{children:[n.jsx(si,{hide:e}),n.jsx(li,{hide:e}),n.jsx(ci,{hide:e}),n.jsx(Mo,{}),n.jsx(di,{hide:e})]}));ui.displayName="RepoFilesAddMenuContent";const fi=c.memo(()=>{const e=N(),[r,{show:t,popper:a,toggle:i}]=xo({popperConfig:{strategy:"fixed"}});return wo(t,a),n.jsx(Co,{isVisible:t,...r,className:p`
        width: 230px;
        z-index: ${e.zindex.repoFilesAddMenu};
      `,children:n.jsx(ui,{hide:()=>i?.(!1)})})});fi.displayName="RepoFilesAddMenu";const pi=c.memo(()=>{const e=N(),[r]=Fo();return n.jsx(ni,{backgroundClassName:p`
        background-color: ${e.colors.primary};

        &:hover {
          background-color: ${e.colors.primaryHover};
        }
      `,icon:n.jsx(Dn,{role:"img"}),...r,children:n.jsx(R,{id:"web.repo_files_nav.add.button",description:"Navbar button label to open the add menu in the file browser.",defaultMessage:"Add"})})});pi.displayName="AddButton";const hi=c.memo(()=>{const[e,r]=c.useState(!1);return n.jsxs(jo,{show:e,onToggle:t=>r(t),placement:"bottom",children:[n.jsx(pi,{}),n.jsx(fi,{})]})});hi.displayName="AddButtonDropdown";const mi=c.memo(({info:e})=>n.jsx(Sn,{children:e?.encryptedPath!==void 0?n.jsx(hi,{}):null}));mi.displayName="RepoFilesNav";const gi=c.memo(({info:e})=>{const r=N(),{status:t,totalCount:a,totalSizeDisplay:i,selectedCount:o,selectedSizeDisplay:s}=e;return t.type==="Loading"&&!t.loaded||t.type==="Error"||a===0?null:n.jsx("div",{className:p`
          font-size: 13px;
          font-weight: normal;
          color: ${r.colors.textLight};
          flex-shrink: 0;
        `,children:o>0?n.jsx("span",{children:n.jsx(R,{id:"web.repo_files_summary.selected_count.text",description:"Summary text in the file list header showing selected item count and total size.",defaultMessage:"{count, plural, one {# item} other {# items}} - {size} selected",values:{count:o,size:s}})}):n.jsx("span",{children:n.jsx(R,{id:"web.repo_files_summary.total_count.text",description:"Summary text in the file list header showing total item count and size.",defaultMessage:"{count, plural, one {# item} other {# items}} - {size}",values:{count:a,size:i}})})})});gi.displayName="RepoFilesSummary";const qn=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},c.createElement("g",{fill:"#263238"},c.createElement("path",{d:"M7.766 6.388c-.002 0-.07-.027-.081-.03.023.004-4.783.005-4.783.005v9.585h8.307v-6.45a.3.3 0 0 0 .06.135S7.754 6.38 7.766 6.388m4.496 2.171c.226.21.41.63.41.938v7.355c0 .308-.25.558-.559.558H2a.56.56 0 0 1-.56-.558V5.459A.56.56 0 0 1 2 4.901h5.749c.309 0 .742.17.969.379z"}),c.createElement("path",{d:"M7.428 5.887V9.95h4.199V8.486H8.883V5.887z"}),c.createElement("path",{d:"M5.328 5.452V1.135c0-.309.25-.559.559-.559h5.749c.309 0 .742.17.969.38l3.545 3.279c.226.21.41.63.41.938v7.354a.56.56 0 0 1-.559.56h-3.924v-1.463h3.02V5.173a.3.3 0 0 0 .06.135s-3.515-3.252-3.504-3.244L6.79 2.038v3.414z"}),c.createElement("path",{d:"M11.317 1.57v4.057h4.344V4.165h-2.886V1.563z"}))),An=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},c.createElement("g",{fill:"#676f73"},c.createElement("path",{d:"M7.766 6.388c-.002 0-.07-.027-.081-.03.023.004-4.783.005-4.783.005v9.585h8.307v-6.45a.3.3 0 0 0 .06.135S7.754 6.38 7.766 6.388m4.496 2.171c.226.21.41.63.41.938v7.355c0 .308-.25.558-.559.558H2a.56.56 0 0 1-.56-.558V5.459A.56.56 0 0 1 2 4.901h5.749c.309 0 .742.17.969.379z"}),c.createElement("path",{d:"m7.408 5.887.02 4.062h4.2V8.486H8.883L8.87 5.887z"}),c.createElement("path",{d:"M5.328 5.452V1.135c0-.309.25-.559.559-.559h5.749c.309 0 .742.17.969.38l3.545 3.279c.226.21.41.63.41.938v7.354a.56.56 0 0 1-.559.56h-3.924v-1.463h3.02V5.173a.3.3 0 0 0 .06.135s-3.515-3.252-3.504-3.244L6.79 2.038v3.414z"}),c.createElement("path",{d:"m11.296 1.57.02 4.057h4.345V4.165h-2.886l-.017-2.602c-.001-.224-1.463-.217-1.462.007"}))),En=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},c.createElement("path",{fill:"#263238",d:"m10.1 2.029.043.035-.081-.03.063.005H2.903V15.96h12.195V6.573l.004.071a.3.3 0 0 0 .055.065zm6.05 3.606c.227.21.41.63.41.938v10.292c0 .309-.25.559-.558.559H1.999a.56.56 0 0 1-.559-.559V1.135c0-.309.25-.559.56-.559h8.125c.309 0 .743.17.97.38z"}),c.createElement("path",{fill:"#263238",d:"M9.758 1.714v5.39h6.245V5.64h-4.79V1.707z"}),c.createElement("path",{fill:"#71ba05",d:"M3.582 11.383h-.68v1.462h6.83v-1.462H3.581Z"}),c.createElement("path",{fill:"#71ba05",d:"M11.32 12.123 8.23 9.032a.731.731 0 1 0-1.034 1.034l2.057 2.056-2.057 2.058a.731.731 0 0 0 1.034 1.034z"})),kn=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},c.createElement("g",{fill:"#676f73"},c.createElement("path",{d:"m10.1 2.029.043.035-.081-.03.063.005H2.903V15.96h12.195V6.573l.004.071a.3.3 0 0 0 .055.065zm6.05 3.606c.227.21.41.63.41.938v10.292c0 .309-.25.559-.558.559H1.999a.56.56 0 0 1-.559-.559V1.135c0-.309.25-.559.56-.559h8.125c.309 0 .743.17.97.38z"}),c.createElement("path",{d:"M9.758 1.714v5.39h6.245V5.64h-4.79V1.707zm-6.176 9.669H2.85v1.462h6.881v-1.462h-6.15Z"}),c.createElement("path",{d:"M11.32 12.123 8.23 9.032a.731.731 0 1 0-1.034 1.034l2.057 2.056-2.057 2.058a.731.731 0 0 0 1.034 1.034z"}))),vi=c.memo(({info:e,onInfoClick:r})=>{const t=L(),a=O(),i=$(),o=e.selectedFile!==void 0?e.selectedFile:void 0,s=c.useCallback(()=>{o!==void 0&&a.repoFilesRenameFile(o.repoId,o.encryptedPath)},[a,o]);return n.jsxs(Zi,{children:[e.selectedFile!==void 0?n.jsx(V,{icon:n.jsx(Ai,{role:"img"}),iconHover:n.jsx(qi,{role:"img"}),onClick:r,children:n.jsx(R,{id:"web.repo_files_toolbar.info.button",description:"Toolbar button label in the file list to open the info sidebar for the selected item.",defaultMessage:"Info"})}):null,t&&o!==void 0?n.jsx(V,{icon:n.jsx(qa,{role:"img"}),iconHover:n.jsx(Aa,{role:"img"}),onClick:s,children:n.jsx(R,{id:"web.repo_files_toolbar.rename.button",description:"Toolbar button label on mobile to rename the selected file or folder.",defaultMessage:"Rename"})}):null,e.canCopySelected?n.jsx(V,{icon:n.jsx(An,{role:"img"}),iconHover:n.jsx(qn,{role:"img"}),onClick:()=>{a.repoFilesBrowsersMoveSelected(i,"Copy")},children:n.jsx(R,{id:"web.repo_files_toolbar.copy.button",description:"Toolbar button label to copy the selected files or folders.",defaultMessage:"Copy"})}):null,e.canMoveSelected?n.jsx(V,{icon:n.jsx(kn,{role:"img"}),iconHover:n.jsx(En,{role:"img"}),onClick:()=>{a.repoFilesBrowsersMoveSelected(i,"Move")},children:n.jsx(R,{id:"web.repo_files_toolbar.move.button",description:"Toolbar button label to move the selected files or folders.",defaultMessage:"Move"})}):null,e.canDownloadSelected?n.jsx(V,{icon:n.jsx(Yi,{role:"img"}),iconHover:n.jsx(Qi,{role:"img"}),onClick:()=>{Ji(a,i,t)},children:n.jsx(R,{id:"web.repo_files_toolbar.download.button",description:"Toolbar button label to download the selected files or folders.",defaultMessage:"Download"})}):null,e.canDeleteSelected?n.jsx(V,{icon:n.jsx(eo,{role:"img"}),iconHover:n.jsx(Xi,{role:"img"}),onClick:()=>{a.repoFilesBrowsersDeleteSelected(i)},children:n.jsx(R,{id:"web.repo_files_toolbar.delete.button",description:"Toolbar button label to delete the selected files or folders.",defaultMessage:"Delete"})}):null,e.selectedFile!==void 0&&ro(e.selectedFile)?n.jsx(V,{as:X,to:Lr(e.selectedFile.repoId,e.selectedFile.encryptedPath,!0),icon:n.jsx(ao,{role:"img"}),iconHover:n.jsx(to,{role:"img"}),children:n.jsx(R,{id:"web.repo_files_toolbar.edit_text.button",description:"Toolbar button label to open the text editor for the selected text file.",defaultMessage:"Edit text"})}):null,e.selectedCount>0?n.jsx(io,{onClick:()=>a.repoFilesBrowsersClearSelection(i)}):null]})});vi.displayName="RepoFilesToolbar";const bi=c.memo(({info:e,onInfoClick:r})=>{const t=L();return n.jsx("div",{className:A(p`
          display: flex;
        `,t?p`
              flex-direction: column;
              align-items: center;
            `:p`
              width: 100%;
              flex-direction: row;
              align-items: center;
              overflow: hidden;
            `),children:e!==void 0?n.jsxs("div",{className:A(p`
              flex-grow: 1;
              flex-shrink: 0;
              margin: 0;
              padding: 0;
              display: flex;
              align-items: center;
              position: relative;
            `,t?p``:p`
                  margin-right: 50px;
                `),children:[n.jsx(gi,{info:e}),n.jsx(vi,{info:e,onInfoClick:r})]}):null})});bi.displayName="RepoFilesNavbarExtra";const Nn=e=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none",...e},c.createElement("path",{fill:"#71ba05",fillRule:"evenodd",d:"M3.52 0A3.526 3.526 0 0 0 0 3.52v24.96C0 30.42 1.58 32 3.52 32h24.96c1.94 0 3.52-1.58 3.52-3.52V3.52C32 1.58 30.42 0 28.48 0zm0 1.26h24.96a2.24 2.24 0 0 1 2.26 2.26v24.96a2.24 2.24 0 0 1-2.26 2.26H3.52a2.24 2.24 0 0 1-2.26-2.26V3.52a2.24 2.24 0 0 1 2.26-2.26m12.75 9.784a.72.72 0 0 0-.459.169L10 16.078l5.811 4.866a.724.724 0 1 0 .93-1.113l-3.81-3.188H22a.655.655 0 1 0 0-1.312h-8.864l3.604-3.006a.725.725 0 0 0-.47-1.28Z",clipRule:"evenodd"})),yi=c.memo(({to:e})=>{const r=W();return n.jsx(X,{to:e,className:p`
        display: flex;
        align-items: center;
      `,"aria-label":r.formatMessage({id:"web.navbar_back.aria_label",description:"Accessibility label for the navbar back button.",defaultMessage:"Back"}),children:n.jsx(Nn,{role:"img"})})});yi.displayName="NavbarBack";const _i=c.memo(({breadcrumbs:e})=>{if(L()&&e.length>1){const t=e[e.length-2],a=Hr(t.repoId,t.path);return n.jsx(yi,{to:a})}else return n.jsx(To,{})});_i.displayName="RepoFilesNavbarLeft";const On=c.memo(()=>{const e=Yo(),r=J(),t=$();return c.useEffect(()=>(r.uploadFile=()=>{const{repoId:a,encryptedPath:i}=e.repoFilesBrowsersInfo(t);a!==void 0&&i!==void 0&&e.repoFilesUploadFile(a,i)},r.uploadDir=()=>{const{repoId:a,encryptedPath:i}=e.repoFilesBrowsersInfo(t);a!==void 0&&i!==void 0&&e.repoFilesUploadDir(a,i)},()=>{r.uploadFile=void 0,r.uploadDir=void 0}),[e,t,r]),null});On.displayName="RepoFilesUploadFormDesktop";const xi=c.memo(()=>{const e=W(),r=ri(),t=c.useRef(null),a=J(),i=c.useCallback(l=>{l===null?a.uploadFile=void 0:a.uploadFile=()=>l.click()},[a]),o=c.useCallback(l=>{l===null?a.uploadDir=void 0:a.uploadDir=()=>l.click()},[a]),s=c.useCallback(l=>{if(l.currentTarget.files!==null){const d=Array.from(l.currentTarget.files);Promise.all(r(d))}t.current!==null&&t.current.reset()},[r]);return n.jsxs("form",{ref:t,style:{display:"none"},children:[n.jsx("input",{type:"file",ref:i,onChange:s,"aria-label":e.formatMessage({id:"web.repo_files_upload_form.upload_file.aria_label",description:"Accessibility label for the hidden file input used to upload files.",defaultMessage:"Upload file"})}),n.jsx("input",{type:"file",ref:o,onChange:s,"aria-label":e.formatMessage({id:"web.repo_files_upload_form.upload_dir.aria_label",description:"Accessibility label for the hidden directory input used to upload folders.",defaultMessage:"Upload folder"}),webkitdirectory:"",mozdirectory:"",directory:""})]})});xi.displayName="RepoFilesUploadFormWeb";const wi=c.memo(()=>n.jsx(xi,{}));wi.displayName="RepoFilesUploadForm";var ve,tt;function Pn(){if(tt)return ve;tt=1;function e(){this.__data__=[],this.size=0}return ve=e,ve}var be,at;function se(){if(at)return be;at=1;var e=Ea();function r(t,a){for(var i=t.length;i--;)if(e(t[i][0],a))return i;return-1}return be=r,be}var ye,it;function Hn(){if(it)return ye;it=1;var e=se(),r=Array.prototype,t=r.splice;function a(i){var o=this.__data__,s=e(o,i);if(s<0)return!1;var l=o.length-1;return s==l?o.pop():t.call(o,s,1),--this.size,!0}return ye=a,ye}var _e,ot;function Ln(){if(ot)return _e;ot=1;var e=se();function r(t){var a=this.__data__,i=e(a,t);return i<0?void 0:a[i][1]}return _e=r,_e}var xe,nt;function zn(){if(nt)return xe;nt=1;var e=se();function r(t){return e(this.__data__,t)>-1}return xe=r,xe}var we,st;function Bn(){if(st)return we;st=1;var e=se();function r(t,a){var i=this.__data__,o=e(i,t);return o<0?(++this.size,i.push([t,a])):i[o][1]=a,this}return we=r,we}var Ce,lt;function le(){if(lt)return Ce;lt=1;var e=Pn(),r=Hn(),t=Ln(),a=zn(),i=Bn();function o(s){var l=-1,d=s==null?0:s.length;for(this.clear();++l<d;){var u=s[l];this.set(u[0],u[1])}}return o.prototype.clear=e,o.prototype.delete=r,o.prototype.get=t,o.prototype.has=a,o.prototype.set=i,Ce=o,Ce}var Me,ct;function $n(){if(ct)return Me;ct=1;var e=le();function r(){this.__data__=new e,this.size=0}return Me=r,Me}var je,dt;function Vn(){if(dt)return je;dt=1;function e(r){var t=this.__data__,a=t.delete(r);return this.size=t.size,a}return je=e,je}var Fe,ut;function Wn(){if(ut)return Fe;ut=1;function e(r){return this.__data__.get(r)}return Fe=e,Fe}var Te,ft;function Un(){if(ft)return Te;ft=1;function e(r){return this.__data__.has(r)}return Te=e,Te}var Re,pt;function Gn(){if(pt)return Re;pt=1;var e=z(),r=e["__core-js_shared__"];return Re=r,Re}var Ie,ht;function Kn(){if(ht)return Ie;ht=1;var e=Gn(),r=(function(){var a=/[^.]+$/.exec(e&&e.keys&&e.keys.IE_PROTO||"");return a?"Symbol(src)_1."+a:""})();function t(a){return!!r&&r in a}return Ie=t,Ie}var De,mt;function Ci(){if(mt)return De;mt=1;var e=Function.prototype,r=e.toString;function t(a){if(a!=null){try{return r.call(a)}catch{}try{return a+""}catch{}}return""}return De=t,De}var Se,gt;function Zn(){if(gt)return Se;gt=1;var e=mo(),r=Kn(),t=$r(),a=Ci(),i=/[\\^$.*+?()[\]{}|]/g,o=/^\[object .+?Constructor\]$/,s=Function.prototype,l=Object.prototype,d=s.toString,u=l.hasOwnProperty,f=RegExp("^"+d.call(u).replace(i,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function h(m){if(!t(m)||r(m))return!1;var y=e(m)?f:o;return y.test(a(m))}return Se=h,Se}var qe,vt;function Jn(){if(vt)return qe;vt=1;function e(r,t){return r?.[t]}return qe=e,qe}var Ae,bt;function U(){if(bt)return Ae;bt=1;var e=Zn(),r=Jn();function t(a,i){var o=r(a,i);return e(o)?o:void 0}return Ae=t,Ae}var Ee,yt;function Gr(){if(yt)return Ee;yt=1;var e=U(),r=z(),t=e(r,"Map");return Ee=t,Ee}var ke,_t;function ce(){if(_t)return ke;_t=1;var e=U(),r=e(Object,"create");return ke=r,ke}var Ne,xt;function Qn(){if(xt)return Ne;xt=1;var e=ce();function r(){this.__data__=e?e(null):{},this.size=0}return Ne=r,Ne}var Oe,wt;function Yn(){if(wt)return Oe;wt=1;function e(r){var t=this.has(r)&&delete this.__data__[r];return this.size-=t?1:0,t}return Oe=e,Oe}var Pe,Ct;function Xn(){if(Ct)return Pe;Ct=1;var e=ce(),r="__lodash_hash_undefined__",t=Object.prototype,a=t.hasOwnProperty;function i(o){var s=this.__data__;if(e){var l=s[o];return l===r?void 0:l}return a.call(s,o)?s[o]:void 0}return Pe=i,Pe}var He,Mt;function es(){if(Mt)return He;Mt=1;var e=ce(),r=Object.prototype,t=r.hasOwnProperty;function a(i){var o=this.__data__;return e?o[i]!==void 0:t.call(o,i)}return He=a,He}var Le,jt;function rs(){if(jt)return Le;jt=1;var e=ce(),r="__lodash_hash_undefined__";function t(a,i){var o=this.__data__;return this.size+=this.has(a)?0:1,o[a]=e&&i===void 0?r:i,this}return Le=t,Le}var ze,Ft;function ts(){if(Ft)return ze;Ft=1;var e=Qn(),r=Yn(),t=Xn(),a=es(),i=rs();function o(s){var l=-1,d=s==null?0:s.length;for(this.clear();++l<d;){var u=s[l];this.set(u[0],u[1])}}return o.prototype.clear=e,o.prototype.delete=r,o.prototype.get=t,o.prototype.has=a,o.prototype.set=i,ze=o,ze}var Be,Tt;function as(){if(Tt)return Be;Tt=1;var e=ts(),r=le(),t=Gr();function a(){this.size=0,this.__data__={hash:new e,map:new(t||r),string:new e}}return Be=a,Be}var $e,Rt;function is(){if(Rt)return $e;Rt=1;function e(r){var t=typeof r;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?r!=="__proto__":r===null}return $e=e,$e}var Ve,It;function de(){if(It)return Ve;It=1;var e=is();function r(t,a){var i=t.__data__;return e(a)?i[typeof a=="string"?"string":"hash"]:i.map}return Ve=r,Ve}var We,Dt;function os(){if(Dt)return We;Dt=1;var e=de();function r(t){var a=e(this,t).delete(t);return this.size-=a?1:0,a}return We=r,We}var Ue,St;function ns(){if(St)return Ue;St=1;var e=de();function r(t){return e(this,t).get(t)}return Ue=r,Ue}var Ge,qt;function ss(){if(qt)return Ge;qt=1;var e=de();function r(t){return e(this,t).has(t)}return Ge=r,Ge}var Ke,At;function ls(){if(At)return Ke;At=1;var e=de();function r(t,a){var i=e(this,t),o=i.size;return i.set(t,a),this.size+=i.size==o?0:1,this}return Ke=r,Ke}var Ze,Et;function Mi(){if(Et)return Ze;Et=1;var e=as(),r=os(),t=ns(),a=ss(),i=ls();function o(s){var l=-1,d=s==null?0:s.length;for(this.clear();++l<d;){var u=s[l];this.set(u[0],u[1])}}return o.prototype.clear=e,o.prototype.delete=r,o.prototype.get=t,o.prototype.has=a,o.prototype.set=i,Ze=o,Ze}var Je,kt;function cs(){if(kt)return Je;kt=1;var e=le(),r=Gr(),t=Mi(),a=200;function i(o,s){var l=this.__data__;if(l instanceof e){var d=l.__data__;if(!r||d.length<a-1)return d.push([o,s]),this.size=++l.size,this;l=this.__data__=new t(d)}return l.set(o,s),this.size=l.size,this}return Je=i,Je}var Qe,Nt;function ds(){if(Nt)return Qe;Nt=1;var e=le(),r=$n(),t=Vn(),a=Wn(),i=Un(),o=cs();function s(l){var d=this.__data__=new e(l);this.size=d.size}return s.prototype.clear=r,s.prototype.delete=t,s.prototype.get=a,s.prototype.has=i,s.prototype.set=o,Qe=s,Qe}var Ye,Ot;function us(){if(Ot)return Ye;Ot=1;var e="__lodash_hash_undefined__";function r(t){return this.__data__.set(t,e),this}return Ye=r,Ye}var Xe,Pt;function fs(){if(Pt)return Xe;Pt=1;function e(r){return this.__data__.has(r)}return Xe=e,Xe}var er,Ht;function ps(){if(Ht)return er;Ht=1;var e=Mi(),r=us(),t=fs();function a(i){var o=-1,s=i==null?0:i.length;for(this.__data__=new e;++o<s;)this.add(i[o])}return a.prototype.add=a.prototype.push=r,a.prototype.has=t,er=a,er}var rr,Lt;function hs(){if(Lt)return rr;Lt=1;function e(r,t){for(var a=-1,i=r==null?0:r.length;++a<i;)if(t(r[a],a,r))return!0;return!1}return rr=e,rr}var tr,zt;function ms(){if(zt)return tr;zt=1;function e(r,t){return r.has(t)}return tr=e,tr}var ar,Bt;function ji(){if(Bt)return ar;Bt=1;var e=ps(),r=hs(),t=ms(),a=1,i=2;function o(s,l,d,u,f,h){var m=d&a,y=s.length,_=l.length;if(y!=_&&!(m&&_>y))return!1;var v=h.get(s),g=h.get(l);if(v&&g)return v==l&&g==s;var w=-1,b=!0,T=d&i?new e:void 0;for(h.set(s,l),h.set(l,s);++w<y;){var x=s[w],I=l[w];if(u)var j=m?u(I,x,w,l,s,h):u(x,I,w,s,l,h);if(j!==void 0){if(j)continue;b=!1;break}if(T){if(!r(l,function(C,D){if(!t(T,D)&&(x===C||f(x,C,d,u,h)))return T.push(D)})){b=!1;break}}else if(!(x===I||f(x,I,d,u,h))){b=!1;break}}return h.delete(s),h.delete(l),b}return ar=o,ar}var ir,$t;function gs(){if($t)return ir;$t=1;var e=z(),r=e.Uint8Array;return ir=r,ir}var or,Vt;function vs(){if(Vt)return or;Vt=1;function e(r){var t=-1,a=Array(r.size);return r.forEach(function(i,o){a[++t]=[o,i]}),a}return or=e,or}var nr,Wt;function bs(){if(Wt)return nr;Wt=1;function e(r){var t=-1,a=Array(r.size);return r.forEach(function(i){a[++t]=i}),a}return nr=e,nr}var sr,Ut;function ys(){if(Ut)return sr;Ut=1;var e=Vi(),r=gs(),t=Ea(),a=ji(),i=vs(),o=bs(),s=1,l=2,d="[object Boolean]",u="[object Date]",f="[object Error]",h="[object Map]",m="[object Number]",y="[object RegExp]",_="[object Set]",v="[object String]",g="[object Symbol]",w="[object ArrayBuffer]",b="[object DataView]",T=e?e.prototype:void 0,x=T?T.valueOf:void 0;function I(j,C,D,S,E,M,q){switch(D){case b:if(j.byteLength!=C.byteLength||j.byteOffset!=C.byteOffset)return!1;j=j.buffer,C=C.buffer;case w:return!(j.byteLength!=C.byteLength||!M(new r(j),new r(C)));case d:case u:case m:return t(+j,+C);case f:return j.name==C.name&&j.message==C.message;case y:case v:return j==C+"";case h:var F=i;case _:var k=S&s;if(F||(F=o),j.size!=C.size&&!k)return!1;var P=q.get(j);if(P)return P==C;S|=l,q.set(j,C);var Q=a(F(j),F(C),S,E,M,q);return q.delete(j),Q;case g:if(x)return x.call(j)==x.call(C)}return!1}return sr=I,sr}var lr,Gt;function _s(){if(Gt)return lr;Gt=1;function e(r,t){for(var a=-1,i=t.length,o=r.length;++a<i;)r[o+a]=t[a];return r}return lr=e,lr}var cr,Kt;function xs(){if(Kt)return cr;Kt=1;var e=_s(),r=ie();function t(a,i,o){var s=i(a);return r(a)?s:e(s,o(a))}return cr=t,cr}var dr,Zt;function ws(){if(Zt)return dr;Zt=1;function e(r,t){for(var a=-1,i=r==null?0:r.length,o=0,s=[];++a<i;){var l=r[a];t(l,a,r)&&(s[o++]=l)}return s}return dr=e,dr}var ur,Jt;function Cs(){if(Jt)return ur;Jt=1;function e(){return[]}return ur=e,ur}var fr,Qt;function Ms(){if(Qt)return fr;Qt=1;var e=ws(),r=Cs(),t=Object.prototype,a=t.propertyIsEnumerable,i=Object.getOwnPropertySymbols,o=i?function(s){return s==null?[]:(s=Object(s),e(i(s),function(l){return a.call(s,l)}))}:r;return fr=o,fr}var pr,Yt;function js(){if(Yt)return pr;Yt=1;function e(r,t){for(var a=-1,i=Array(r);++a<r;)i[a]=t(a);return i}return pr=e,pr}var hr,Xt;function Fs(){if(Xt)return hr;Xt=1;var e=ae(),r=Z(),t="[object Arguments]";function a(i){return r(i)&&e(i)==t}return hr=a,hr}var mr,ea;function Ts(){if(ea)return mr;ea=1;var e=Fs(),r=Z(),t=Object.prototype,a=t.hasOwnProperty,i=t.propertyIsEnumerable,o=e((function(){return arguments})())?e:function(s){return r(s)&&a.call(s,"callee")&&!i.call(s,"callee")};return mr=o,mr}var G={exports:{}},gr,ra;function Rs(){if(ra)return gr;ra=1;function e(){return!1}return gr=e,gr}G.exports;var ta;function Fi(){return ta||(ta=1,(function(e,r){var t=z(),a=Rs(),i=r&&!r.nodeType&&r,o=i&&!0&&e&&!e.nodeType&&e,s=o&&o.exports===i,l=s?t.Buffer:void 0,d=l?l.isBuffer:void 0,u=d||a;e.exports=u})(G,G.exports)),G.exports}var vr,aa;function Is(){if(aa)return vr;aa=1;var e=ae(),r=go(),t=Z(),a="[object Arguments]",i="[object Array]",o="[object Boolean]",s="[object Date]",l="[object Error]",d="[object Function]",u="[object Map]",f="[object Number]",h="[object Object]",m="[object RegExp]",y="[object Set]",_="[object String]",v="[object WeakMap]",g="[object ArrayBuffer]",w="[object DataView]",b="[object Float32Array]",T="[object Float64Array]",x="[object Int8Array]",I="[object Int16Array]",j="[object Int32Array]",C="[object Uint8Array]",D="[object Uint8ClampedArray]",S="[object Uint16Array]",E="[object Uint32Array]",M={};M[b]=M[T]=M[x]=M[I]=M[j]=M[C]=M[D]=M[S]=M[E]=!0,M[a]=M[i]=M[g]=M[o]=M[w]=M[s]=M[l]=M[d]=M[u]=M[f]=M[h]=M[m]=M[y]=M[_]=M[v]=!1;function q(F){return t(F)&&r(F.length)&&!!M[e(F)]}return vr=q,vr}var br,ia;function Ds(){if(ia)return br;ia=1;function e(r){return function(t){return r(t)}}return br=e,br}var K={exports:{}};K.exports;var oa;function Ss(){return oa||(oa=1,(function(e,r){var t=Wi(),a=r&&!r.nodeType&&r,i=a&&!0&&e&&!e.nodeType&&e,o=i&&i.exports===a,s=o&&t.process,l=(function(){try{var d=i&&i.require&&i.require("util").types;return d||s&&s.binding&&s.binding("util")}catch{}})();e.exports=l})(K,K.exports)),K.exports}var yr,na;function Ti(){if(na)return yr;na=1;var e=Is(),r=Ds(),t=Ss(),a=t&&t.isTypedArray,i=a?r(a):e;return yr=i,yr}var _r,sa;function qs(){if(sa)return _r;sa=1;var e=js(),r=Ts(),t=ie(),a=Fi(),i=vo(),o=Ti(),s=Object.prototype,l=s.hasOwnProperty;function d(u,f){var h=t(u),m=!h&&r(u),y=!h&&!m&&a(u),_=!h&&!m&&!y&&o(u),v=h||m||y||_,g=v?e(u.length,String):[],w=g.length;for(var b in u)(f||l.call(u,b))&&!(v&&(b=="length"||y&&(b=="offset"||b=="parent")||_&&(b=="buffer"||b=="byteLength"||b=="byteOffset")||i(b,w)))&&g.push(b);return g}return _r=d,_r}var xr,la;function As(){if(la)return xr;la=1;var e=Object.prototype;function r(t){var a=t&&t.constructor,i=typeof a=="function"&&a.prototype||e;return t===i}return xr=r,xr}var wr,ca;function Es(){if(ca)return wr;ca=1;function e(r,t){return function(a){return r(t(a))}}return wr=e,wr}var Cr,da;function ks(){if(da)return Cr;da=1;var e=Es(),r=e(Object.keys,Object);return Cr=r,Cr}var Mr,ua;function Ns(){if(ua)return Mr;ua=1;var e=As(),r=ks(),t=Object.prototype,a=t.hasOwnProperty;function i(o){if(!e(o))return r(o);var s=[];for(var l in Object(o))a.call(o,l)&&l!="constructor"&&s.push(l);return s}return Mr=i,Mr}var jr,fa;function Os(){if(fa)return jr;fa=1;var e=qs(),r=Ns(),t=bo();function a(i){return t(i)?e(i):r(i)}return jr=a,jr}var Fr,pa;function Ps(){if(pa)return Fr;pa=1;var e=xs(),r=Ms(),t=Os();function a(i){return e(i,t,r)}return Fr=a,Fr}var Tr,ha;function Hs(){if(ha)return Tr;ha=1;var e=Ps(),r=1,t=Object.prototype,a=t.hasOwnProperty;function i(o,s,l,d,u,f){var h=l&r,m=e(o),y=m.length,_=e(s),v=_.length;if(y!=v&&!h)return!1;for(var g=y;g--;){var w=m[g];if(!(h?w in s:a.call(s,w)))return!1}var b=f.get(o),T=f.get(s);if(b&&T)return b==s&&T==o;var x=!0;f.set(o,s),f.set(s,o);for(var I=h;++g<y;){w=m[g];var j=o[w],C=s[w];if(d)var D=h?d(C,j,w,s,o,f):d(j,C,w,o,s,f);if(!(D===void 0?j===C||u(j,C,l,d,f):D)){x=!1;break}I||(I=w=="constructor")}if(x&&!I){var S=o.constructor,E=s.constructor;S!=E&&"constructor"in o&&"constructor"in s&&!(typeof S=="function"&&S instanceof S&&typeof E=="function"&&E instanceof E)&&(x=!1)}return f.delete(o),f.delete(s),x}return Tr=i,Tr}var Rr,ma;function Ls(){if(ma)return Rr;ma=1;var e=U(),r=z(),t=e(r,"DataView");return Rr=t,Rr}var Ir,ga;function zs(){if(ga)return Ir;ga=1;var e=U(),r=z(),t=e(r,"Promise");return Ir=t,Ir}var Dr,va;function Bs(){if(va)return Dr;va=1;var e=U(),r=z(),t=e(r,"Set");return Dr=t,Dr}var Sr,ba;function $s(){if(ba)return Sr;ba=1;var e=U(),r=z(),t=e(r,"WeakMap");return Sr=t,Sr}var qr,ya;function Vs(){if(ya)return qr;ya=1;var e=Ls(),r=Gr(),t=zs(),a=Bs(),i=$s(),o=ae(),s=Ci(),l="[object Map]",d="[object Object]",u="[object Promise]",f="[object Set]",h="[object WeakMap]",m="[object DataView]",y=s(e),_=s(r),v=s(t),g=s(a),w=s(i),b=o;return(e&&b(new e(new ArrayBuffer(1)))!=m||r&&b(new r)!=l||t&&b(t.resolve())!=u||a&&b(new a)!=f||i&&b(new i)!=h)&&(b=function(T){var x=o(T),I=x==d?T.constructor:void 0,j=I?s(I):"";if(j)switch(j){case y:return m;case _:return l;case v:return u;case g:return f;case w:return h}return x}),qr=b,qr}var Ar,_a;function Ws(){if(_a)return Ar;_a=1;var e=ds(),r=ji(),t=ys(),a=Hs(),i=Vs(),o=ie(),s=Fi(),l=Ti(),d=1,u="[object Arguments]",f="[object Array]",h="[object Object]",m=Object.prototype,y=m.hasOwnProperty;function _(v,g,w,b,T,x){var I=o(v),j=o(g),C=I?f:i(v),D=j?f:i(g);C=C==u?h:C,D=D==u?h:D;var S=C==h,E=D==h,M=C==D;if(M&&s(v)){if(!s(g))return!1;I=!0,S=!1}if(M&&!S)return x||(x=new e),I||l(v)?r(v,g,w,b,T,x):t(v,g,C,w,b,T,x);if(!(w&d)){var q=S&&y.call(v,"__wrapped__"),F=E&&y.call(g,"__wrapped__");if(q||F){var k=q?v.value():v,P=F?g.value():g;return x||(x=new e),T(k,P,w,b,x)}}return M?(x||(x=new e),a(v,g,w,b,T,x)):!1}return Ar=_,Ar}var Er,xa;function Us(){if(xa)return Er;xa=1;var e=Ws(),r=Z();function t(a,i,o,s,l){return a===i?!0:a==null||i==null||!r(a)&&!r(i)?a!==a&&i!==i:e(a,i,o,s,t,l)}return Er=t,Er}var kr,wa;function Gs(){if(wa)return kr;wa=1;var e=Us();function r(t,a){return e(t,a)}return kr=r,kr}var Ks=Gs();const Zs=ee(Ks);function Js(e,r){const t=O(),a=c.useRef(e),i=c.useRef(void 0),o=c.useMemo(()=>{if(i.current!==void 0&&Zs(e,a.current)&&r===void 0)return i.current;const s=t.repoFilesBrowsersCreate(e,{selectName:r});return a.current=e,i.current=s,s},[t,e,r]);return c.useEffect(()=>()=>{t.repoFilesBrowsersDestroy(o)},[t,o]),o}const Pr="vaultRepoFileInfoSheetVisible";function Qs(){try{if(localStorage.getItem(Pr)==="true")return!0}catch{}return!1}function Ca(e){try{e?localStorage.setItem(Pr,"true"):localStorage.removeItem(Pr)}catch{}}function Ys(e){const r=L(),[t,a]=c.useState(Qs),i=t&&!r,o=Ei(),s=o.show,l=e.selectedFile,d=c.useCallback(()=>{r?l!==void 0&&s(l):a(f=>{const h=!f;return Ca(h),h})},[r,s,l]),u=c.useCallback(()=>{a(!1),Ca(!1)},[]);return{onInfoClick:d,infoSheetVisible:i,infoSheetHide:u,infoModal:o}}const Ri=c.memo(({browserId:e,info:r})=>{const t=L(),a=c.useMemo(()=>r.breadcrumbs.map(u=>u.name).join(" › "),[r]);Oi(a);const{onInfoClick:i,infoSheetVisible:o,infoSheetHide:s,infoModal:l}=Ys(r),d=c.useMemo(()=>({}),[]);return n.jsx(Ha.Provider,{value:e,children:n.jsx(za.Provider,{value:d,children:n.jsxs(ki,{navbarLeft:r!==void 0?n.jsx(_i,{breadcrumbs:r.breadcrumbs}):void 0,navbarHeader:r!==void 0?n.jsx(La,{breadcrumbs:r.breadcrumbs}):void 0,navbarNav:n.jsx(mi,{info:r}),navbarExtra:n.jsx(bi,{info:r,onInfoClick:i}),className:t?p`
                  padding-top: 0;
                `:p`
                  padding-top: 10px;
                `,sidenavClassName:t?p``:p`
                  margin-top: -50px;
                `,children:[r!==void 0?n.jsx(Xa,{info:r}):null,n.jsx(oi,{}),r?.encryptedPath!==void 0?n.jsx(ai,{}):null,n.jsx(wi,{}),n.jsx(Pa,{file:o?r?.selectedFile:void 0,hide:s}),n.jsx(Oa,{file:l.payload,hide:l.hide})]})})})});Ri.displayName="RepoFilesInfo";const Xs=c.memo(({source:e,selectName:r})=>{const t=Js(e,r),[a]=te((i,o)=>i.repoFilesBrowsersInfoSubscribe(t,o),i=>i.repoFilesBrowsersInfoData,[t]);return a===void 0||a.repoId===void 0?n.jsx(Ni,{}):n.jsx(oo,{repoId:a.repoId,repoStatus:a.repoStatus,isLocked:a.isLocked,children:n.jsx(Ri,{browserId:t,info:a})})});Xs.displayName="RepoFiles";export{ei as D,Xs as R,$ as a,Yo as u};

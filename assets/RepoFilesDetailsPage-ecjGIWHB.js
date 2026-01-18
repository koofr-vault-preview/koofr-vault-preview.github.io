const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TextEditor-IyGyWD6H.js","assets/DynamicThemeProvider-MqskYVZg.js","assets/emotion-css.esm-D9bkNW-b.js","assets/mainWebAuthenticated-Bn0Psyf6.js","assets/NavbarSticky-ClW7pS7A.js","assets/Button-D3442RQe.js","assets/index-DaFY2pcp.js","assets/index-ulgnFFAK.css","assets/TextEditor-Dvl_Svmm.css"])))=>i.map(i=>d[i]);
import{r as i,j as t,z as _,u as A,a as K,A as $}from"./DynamicThemeProvider-MqskYVZg.js";import{a as h,c as m,L as N,f as O,u as G,e as W}from"./emotion-css.esm-D9bkNW-b.js";import{E as R}from"./DashboardError-Ck8URP_Z.js";import{a as v,u as f,i as b,j as Z}from"./mainWebAuthenticated-Bn0Psyf6.js";import{D as q}from"./DashboardLoading-6ZBllYk4.js";import{u as J}from"./useDocumentTitle-D3L4F_h2.js";import{f as Q,a as X,b as Y,S as ee,T as se,c as D,d as F,e as te,r as y,g as re,h as ae,i as oe,j as ie,k as le,l as ne,m as ce,n as E,o as j,p as w,R as de}from"./browser-BEuNprZl.js";import{T as ue}from"./DashboardLayout-BcK5-2N9.js";import{g as me}from"./Navbar-D-Wj6WD0.js";import{_ as pe}from"./index-DaFY2pcp.js";import{D as ve}from"./DashboardNavbar-B9iLAxOS.js";import{s as xe}from"./Button-D3442RQe.js";import"./error-icon@2x-BzFHMFnI.js";import"./NavbarSticky-ClW7pS7A.js";import"./PasswordInput-zZ_bsZMF.js";import"./format-a-hYJmZ8.js";import"./GitRevision-C9xQfCk7.js";const C=i.memo(({fileName:e,url:s,width:a,height:o})=>t.jsx("div",{className:h(m`
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 25px;
        `),style:{width:`${a}px`,height:`${o}px`},children:t.jsx("img",{src:s,alt:e,className:m`
            width: 100%;
            height: 100%;
            object-fit: scale-down;
          `})}));C.displayName="ImageViewer";function ge(e){const s=v(),[a,o]=i.useState(),r=i.useRef(void 0),l=i.useCallback(()=>{r.current!==void 0&&(URL.revokeObjectURL(r.current),r.current=void 0)},[]);i.useEffect(()=>l,[l]);const n=i.useRef(void 0),d=i.useCallback(()=>{n.current!==void 0&&(n.current.abort(),n.current=void 0)},[]);i.useEffect(()=>d,[d]);const u=i.useCallback(async()=>{d();const c=new AbortController;n.current=c;const p=await s.repoFilesDetailsGetFileStream(e,!0,c.signal),x=p!==void 0&&p.blob!==void 0?URL.createObjectURL(p.blob):void 0;l(),r.current=x,o(x)},[s,e,d,l]);return f((c,p)=>c.repoFilesDetailsFileSubscribe(e,p),c=>p=>{c.repoFilesDetailsFileData(p)!==void 0&&u()},[e,u]),a}function S(e){return ge(e)}const L=i.memo(({detailsId:e,fileName:s,contentStatus:a,width:o,height:r})=>{const l=S(e);return a===void 0||a.type==="Loading"&&!a.loaded||l===void 0?t.jsx(b,{}):t.jsx(C,{fileName:s,url:l,width:o,height:r})});L.displayName="RepoFilesDetailsImageViewer";const he=e=>"/pdfjs-4.2.67/web/viewer.html?file="+encodeURIComponent(e),P=i.memo(({url:e,width:s,height:a})=>{const o=he(e);return t.jsx("iframe",{title:"PDF viewer",id:"viewerIframe",src:o,width:s,height:a,className:m`
        border: none;
        display: block;
      `})});P.displayName="PdfViewer";const k=i.memo(({detailsId:e,width:s,height:a})=>{const o=S(e);return o!==void 0?t.jsx(P,{url:o,width:s,height:a}):t.jsx(b,{})});k.displayName="RepoFilesDetailsPdfViewer";const be=i.lazy(()=>pe(()=>import("./TextEditor-IyGyWD6H.js").then(e=>e.T),__vite__mapDeps([0,1,2,3,4,5,6,7,8])).then(e=>({default:e.TextEditor})));function fe(e){const[s]=f((a,o)=>a.repoFilesDetailsContentBytesSubscribe(e,o),a=>a.repoFilesDetailsContentBytesData,[e]);return s}function ye(e){const s=fe(e);return i.useMemo(()=>s!==void 0?new TextDecoder("utf-8").decode(s):void 0,[s])}const I=i.memo(({detailsId:e,fileName:s,contentStatus:a,isEditing:o,width:r,height:l})=>{const n=v(),d=ye(e),u=i.useCallback(c=>{n.repoFilesDetailsSetContent(e,new TextEncoder().encode(c))},[n,e]);return a.type==="Error"&&!a.loaded?t.jsx(R,{error:a.error,onRetry:()=>{n.repoFilesDetailsLoadContent(e)}}):a.type==="Loading"&&!a.loaded||d===void 0?t.jsx(b,{}):t.jsx(i.Suspense,{children:t.jsx(be,{fileName:s,text:d,isEditing:o,width:r,height:l,onChange:u})})});I.displayName="RepoFilesDetailsTextEditor";const De=(e,s,a,o,r,l,n)=>{const d=_(n),u=n.width,c=n.height-me(d);if(Q(a))return t.jsx(k,{detailsId:e,width:u,height:c});if(X(o)&&s!==void 0)return t.jsx(I,{detailsId:e,fileName:s,contentStatus:r,isEditing:l,width:u,height:c});if(Y(a)&&s!==void 0)return t.jsx(L,{detailsId:e,fileName:s,contentStatus:r,width:u,height:c})},Fe=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none",...e},i.createElement("path",{fill:"#676f73",d:"m15.945 17.823 6.185 6.185c.5.5 1.31.5 1.81 0l.028-.028c.5-.5.5-1.31 0-1.81l-6.184-6.185 6.177-6.177c.5-.5.5-1.31 0-1.81l-.03-.03c-.5-.5-1.31-.5-1.81 0l-6.177 6.178L9.79 7.99c-.5-.5-1.31-.5-1.81 0l-.029.028c-.5.5-.5 1.31 0 1.81l6.155 6.155L7.95 22.14c-.5.5-.5 1.31 0 1.81l.03.03c.5.5 1.31.5 1.81 0l6.154-6.155Z"})),T=i.memo(({to:e})=>t.jsx(N,{to:e,className:m`
        display: flex;
        align-items: center;
      `,"aria-label":"Close",children:t.jsx(Fe,{})}));T.displayName="NavbarClose";const V=i.memo(({info:e})=>{const s=A(),{status:a,fileName:o,fileModified:r,isEditing:l,contentStatus:n,saveStatus:d,isDirty:u,error:c}=e,p=a.type==="Loading"||n.type==="Loading",x=d.type==="Loading";return t.jsxs("div",{className:m`
        display: flex;
        flex-direction: column;
      `,children:[t.jsx("div",{className:m`
          font-weight: 600;
        `,"aria-label":"File name",children:o}),p?t.jsx("div",{className:m`
            font-size: 10px;
            font-weight: normal;
          `,children:"Loading..."}):x?t.jsx("div",{className:m`
            font-size: 10px;
            font-weight: normal;
          `,children:"Saving..."}):c!==void 0?t.jsx("div",{className:m`
            font-size: 10px;
            font-weight: 600;
            color: ${s.colors.destructive};
          `,"aria-label":"File error",children:c}):l?t.jsxs("div",{className:m`
            display: flex;
            flex-direction: row;
            align-items: center;
          `,"aria-label":"File info",children:[t.jsxs("span",{className:m`
              font-size: 10px;
              font-weight: normal;
            `,children:["Changes are saved automatically."," ",r!==void 0?t.jsxs(t.Fragment,{children:["Last saved ",t.jsx(ee,{value:r})]}):null]}),t.jsx("span",{className:h(m`
                margin-left: 10px;
                width: 8px;
                height: 8px;
                border-radius: 4px;
                background-color: ${s.colors.successful};
              `,u&&m`
                  background-color: ${s.colors.warning};
                `),"aria-label":u?"File modified":"File unchanged"})]}):null]})});V.displayName="RepoFilesDetailsNavbarHeader";const je=xe.nav`
  display: flex;
  align-items: center;
`;function g({...e}){return t.jsx(se,{...e,textClassName:h(m`
          font-size: 12px;
        `,e.textClassName),className:h(m`
          margin: 0;

          &:last-child {
            padding: 0;
          }
        `,e.className)})}const H=i.memo(({detailsId:e,info:s})=>{const a=K(),o=v();return t.jsx(je,{children:s.isEditing?t.jsx(t.Fragment,{children:t.jsx(g,{icon:t.jsx(F,{role:"img"}),iconHover:t.jsx(D,{role:"img"}),onClick:()=>{o.repoFilesDetailsSave(e)},disabled:!s.canSave,children:"Save"})}):s.fileExists?t.jsxs(t.Fragment,{children:[te(s.fileCategory)&&s.repoId!==void 0&&s.encryptedPath!==void 0?t.jsx(g,{as:N,to:y(s.repoId,s.encryptedPath,!0),icon:t.jsx(ae,{role:"img"}),iconHover:t.jsx(re,{role:"img"}),children:"Edit"}):null,t.jsx(g,{icon:t.jsx(le,{role:"img"}),iconHover:t.jsx(ie,{role:"img"}),onClick:()=>{s.repoId!==void 0&&s.encryptedPath!==void 0&&oe(o,s.repoId,s.encryptedPath,a)},children:"Download"}),t.jsx(g,{icon:t.jsx(F,{role:"img"}),iconHover:t.jsx(D,{role:"img"}),onClick:()=>{s.repoId!==void 0&&s.encryptedPath!==void 0&&o.repoFilesRenameFile(s.repoId,s.encryptedPath)},children:"Rename"}),t.jsx(g,{icon:t.jsx(ce,{role:"img"}),iconHover:t.jsx(ne,{role:"img"}),onClick:()=>{o.repoFilesDetailsDelete(e)},children:"Delete"})]}):null})});H.displayName="RepoFilesDetailsNavbarNav";const we=e=>e.isEditing&&e.repoId!==void 0&&e.encryptedPath!==void 0?y(e.repoId,e.encryptedPath,!1):e.repoId!==void 0?E(e.repoId,e.encryptedParentPath??"/"):"/",U=i.memo(({detailsId:e,info:s})=>t.jsx(ve,{header:t.jsx(V,{info:s}),right:t.jsx(T,{to:we(s)}),nav:t.jsx(H,{detailsId:e,info:s}),noShadow:!0}));U.displayName="RepoFilesDetailsNavbar";function Ne(e,s,a,o){const r=v(),l=i.useMemo(()=>r.repoFilesDetailsCreate(e,s,a,{loadContent:{categories:["Text","Code"],exts:[]},autosaveIntervalMs:o??2e4}),[r]);i.useEffect(()=>()=>{r.repoFilesDetailsDestroy(l)},[r,l]);const n=i.useRef(0);return i.useEffect(()=>{n.current>0&&(a?r.repoFilesDetailsEdit(l):r.repoFilesDetailsEditCancel(l)),n.current+=1},[r,l,a]),l}function Re(e,s){const a=v();i.useEffect(()=>{const o=r=>{(j&&w(r,"s",{metaKey:!0})||!j&&w(r,"s",{ctrlKey:!0}))&&(r.preventDefault(),s.current!==void 0&&s.current.canSave&&a.repoFilesDetailsSave(e))};return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[a,e,s])}const z=i.memo(({encryptedPath:e,detailsId:s,autosaveIntervalMs:a,expectedEncryptedNewPath:o,info:r,infoRef:l})=>{const n=v(),d=G();J(r.fileName),i.useEffect(()=>{r.repoId!==void 0&&r.encryptedPath!==void 0&&(r.shouldDestroy?d(E(r.repoId,r.encryptedParentPath??"/",r.fileName)):r.encryptedPath!==e&&(o.current=r.encryptedPath,d(y(r.repoId,r.encryptedPath,r.isEditing,a),{replace:!0})))},[r,e,a,d,o]),Re(s,l),Z(r.isDirty??!1);const u=$(),c=De(s,r.fileName,r.fileExt,r.fileCategory,r.contentStatus,r.isEditing,u);return t.jsxs(t.Fragment,{children:[t.jsx(U,{detailsId:s,info:r}),t.jsx("main",{className:m`
            display: flex;
            flex-direction: column;
            flex-grow: 1;
          `,children:r.status.type==="Error"&&!r.isDirty?t.jsx(R,{error:r.status.error,onRetry:()=>{n.repoFilesDetailsLoadFile(s)}}):c!==void 0?c:r.status.type==="Loading"?t.jsx(b,{}):null}),t.jsx(ue,{})]})});z.displayName="RepoFilesDetailsInnerInfo";const B=i.memo(({repoId:e,encryptedPath:s,isEditing:a,autosaveIntervalMs:o,expectedEncryptedNewPath:r})=>{const l=Ne(e,s,a,o),[n,d]=f((u,c)=>u.repoFilesDetailsInfoSubscribe(l,c),u=>u.repoFilesDetailsInfoData,[l]);return n===void 0?t.jsx(q,{}):t.jsx(de,{repoId:e,repoStatus:n.repoStatus,isLocked:n.isLocked,children:t.jsx(z,{encryptedPath:s,autosaveIntervalMs:o,expectedEncryptedNewPath:r,detailsId:l,info:n,infoRef:d})})});B.displayName="RepoFilesDetailsInner";function Ee(e){const s=e.get("autosave");if(s===null||s==="")return;const a=parseInt(s,10);if(!Number.isNaN(a))return a}const M=i.memo(({repoId:e})=>{const[s]=O(),a=s.get("path")??"/",o=s.get("editing")==="true",r=Ee(s),[l,n]=i.useState(a),d=i.useRef(void 0),[u,c]=i.useState(0);return a!==l&&(n(a),a!==d.current&&c(p=>p+1),d.current=void 0),t.jsx(B,{repoId:e,encryptedPath:a,isEditing:o,autosaveIntervalMs:r,expectedEncryptedNewPath:d},u)});M.displayName="RepoFilesDetails";const Ce=i.memo(()=>{const s=W().repoId;return s===void 0?null:t.jsx(M,{repoId:s})});Ce.displayName="RepoFilesDetailsPage";export{Ce as RepoFilesDetailsPage};

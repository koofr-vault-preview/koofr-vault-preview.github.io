import{r as i,j as s,d as h,b as m,L as b,l as S,B as P,u as k,a as T,E as I}from"./DynamicThemeProvider-75e49737.js";import{L as C,u as H,d as U,b as V}from"./index-ea7fdfe9.js";import{E as L}from"./DashboardError-b4ab87e9.js";import{D as B}from"./DashboardLoading-1b6a1f68.js";import{u as z}from"./useDocumentTitle-2cb3b118.js";import{a as x,u as f,i as M}from"./mainWebAuthenticated-cb0e6985.js";import{f as _,a as A,b as K,S as $,T as O,c as y,d as D,e as G,r as j,g as W,h as Z,i as q,j as J,k as Q,l as X,m as Y,n as N,o as w,p as E,R as ee}from"./browser-514af225.js";import{T as te}from"./DashboardLayout-67cab1fd.js";import{g as se}from"./Navbar-eb58d508.js";import{_ as re}from"./index-9c114dcf.js";import{D as oe}from"./DashboardNavbar-eef4300c.js";import{n as ae}from"./Button-36aa6271.js";import"./error-icon@2x-ffa05ea5.js";import"./NavbarSticky-a2949c3e.js";import"./RepoUnlockForm-b9108e11.js";import"./PasswordInput-1bfd450d.js";import"./index-8c64d985.js";import"./GitRevision-476e5c6c.js";const ie=i.memo(({fileName:e,url:t,width:o,height:a})=>s.jsx("div",{className:h(m`
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 25px;
        `),style:{width:`${o}px`,height:`${a}px`},children:s.jsx("img",{src:t,alt:e,className:m`
            width: 100%;
            height: 100%;
            object-fit: scale-down;
          `})}));function le(e){const t=x(),[o,a]=i.useState(),r=i.useRef(),l=i.useCallback(()=>{r.current!==void 0&&(URL.revokeObjectURL(r.current),r.current=void 0)},[]);i.useEffect(()=>l,[l]);const n=i.useRef(),c=i.useCallback(()=>{n.current!==void 0&&(n.current.abort(),n.current=void 0)},[]);i.useEffect(()=>c,[c]);const u=i.useCallback(async d=>{c();const p=new AbortController;n.current=p;const v=await t.repoFilesDetailsGetFileStream(e,!0,p.signal),F=v!==void 0&&v.blob!==void 0?URL.createObjectURL(v.blob):void 0;l(),r.current=F,a(F)},[t,e,c,l]);return f((d,p)=>d.repoFilesDetailsFileSubscribe(e,p),d=>p=>{const v=d.repoFilesDetailsFileData(p);v!==void 0&&u(v.remoteHash)},[e,u]),o}function R(e){return le(e)}const ne=i.memo(({detailsId:e,fileName:t,contentStatus:o,width:a,height:r})=>{const l=R(e);return o===void 0||o.type==="Loading"&&!o.loaded||l===void 0?s.jsx(b,{}):s.jsx(ie,{fileName:t,url:l,width:a,height:r})}),ce=e=>"/pdfjs-4.2.67/web/viewer.html?file="+encodeURIComponent(e),de=i.memo(({url:e,width:t,height:o})=>{const a=ce(e);return s.jsx("iframe",{title:"PDF viewer",id:"viewerIframe",src:a,width:t,height:o,className:m`
        border: none;
        display: block;
      `})}),ue=i.memo(({detailsId:e,width:t,height:o})=>{const a=R(e);return a!==void 0?s.jsx(de,{url:a,width:t,height:o}):s.jsx(b,{})}),me=S(()=>re(()=>import("./TextEditor-db2f4546.js").then(e=>e.T),["assets/TextEditor-db2f4546.js","assets/DynamicThemeProvider-75e49737.js","assets/index-9c114dcf.js","assets/index-9d9ae4af.css","assets/TextEditor-1862df68.css"]).then(e=>e.TextEditor),!1);function pe(e){const[t]=f((o,a)=>o.repoFilesDetailsContentBytesSubscribe(e,a),o=>o.repoFilesDetailsContentBytesData,[e]);return t}function ve(e){const t=pe(e);return t!==void 0?new TextDecoder("utf-8").decode(t):void 0}const xe=i.memo(({detailsId:e,fileName:t,contentStatus:o,isEditing:a,width:r,height:l})=>{const n=x(),c=ve(e),u=i.useCallback(d=>{n.repoFilesDetailsSetContent(e,new TextEncoder().encode(d))},[n,e]);return o.type==="Error"&&!o.loaded?s.jsx(L,{error:o.error,onRetry:()=>{n.repoFilesDetailsLoadContent(e)}}):o.type==="Loading"&&!o.loaded||c===void 0?s.jsx(b,{}):s.jsx(me,{fileName:t,text:c,isEditing:a,width:r,height:l,onChange:u})}),ge=(e,t,o,a,r,l,n)=>{const c=P(n),u=n.width,d=n.height-se(c);if(_(o))return s.jsx(ue,{detailsId:e,width:u,height:d});if(A(a)&&t!==void 0)return s.jsx(xe,{detailsId:e,fileName:t,contentStatus:r,isEditing:l,width:u,height:d});if(K(o)&&t!==void 0)return s.jsx(ne,{detailsId:e,fileName:t,contentStatus:r,width:u,height:d})},he=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none",...e},i.createElement("path",{fill:"#676F73",d:"m15.945 17.823 6.185 6.185c.5.5 1.31.5 1.81 0l.028-.028c.5-.5.5-1.31 0-1.81l-6.184-6.185 6.177-6.177c.5-.5.5-1.31 0-1.81l-.03-.03c-.5-.5-1.31-.5-1.81 0l-6.177 6.178L9.79 7.99c-.5-.5-1.31-.5-1.81 0l-.029.028c-.5.5-.5 1.31 0 1.81l6.155 6.155L7.95 22.14c-.5.5-.5 1.31 0 1.81l.03.03c.5.5 1.31.5 1.81 0l6.154-6.155Z"})),be=i.memo(({to:e})=>s.jsx(C,{to:e,className:m`
        display: flex;
        align-items: center;
      `,"aria-label":"Close",children:s.jsx(he,{})})),fe=i.memo(({info:e})=>{const t=k(),{status:o,fileName:a,fileModified:r,isEditing:l,contentStatus:n,saveStatus:c,isDirty:u,error:d}=e,p=o.type==="Loading"||n.type==="Loading",v=c.type==="Loading";return s.jsxs("div",{className:m`
        display: flex;
        flex-direction: column;
      `,children:[s.jsx("div",{className:m`
          font-weight: 600;
        `,"aria-label":"File name",children:a}),p?s.jsx("div",{className:m`
            font-size: 10px;
            font-weight: normal;
          `,children:"Loading..."}):v?s.jsx("div",{className:m`
            font-size: 10px;
            font-weight: normal;
          `,children:"Saving..."}):d!==void 0?s.jsx("div",{className:m`
            font-size: 10px;
            font-weight: 600;
            color: ${t.colors.destructive};
          `,"aria-label":"File error",children:d}):l?s.jsxs("div",{className:m`
            display: flex;
            flex-direction: row;
            align-items: center;
          `,"aria-label":"File info",children:[s.jsxs("span",{className:m`
              font-size: 10px;
              font-weight: normal;
            `,children:["Changes are saved automatically."," ",r!==void 0?s.jsxs(s.Fragment,{children:["Last saved ",s.jsx($,{value:r})]}):null]}),s.jsx("span",{className:h(m`
                margin-left: 10px;
                width: 8px;
                height: 8px;
                border-radius: 4px;
                background-color: ${t.colors.successful};
              `,u&&m`
                  background-color: ${t.colors.warning};
                `),"aria-label":u?"File modified":"File unchanged"})]}):null]})}),je=ae.nav`
  display: flex;
  align-items: center;
`;function g({...e}){return s.jsx(O,{...e,textClassName:h(m`
          font-size: 12px;
        `,e.textClassName),className:h(m`
          margin: 0;

          &:last-of-type {
            padding: 0;
          }
        `,e.className)})}const Fe=i.memo(({detailsId:e,info:t})=>{const o=T(),a=x();return s.jsx(je,{children:t.isEditing?s.jsx(s.Fragment,{children:s.jsx(g,{icon:s.jsx(y,{role:"img"}),iconHover:s.jsx(D,{role:"img"}),onClick:()=>{a.repoFilesDetailsSave(e)},disabled:!t.canSave,children:"Save"})}):t.fileExists?s.jsxs(s.Fragment,{children:[G(t.fileCategory)&&t.repoId!==void 0&&t.encryptedPath!==void 0?s.jsx(g,{as:C,to:j(t.repoId,t.encryptedPath,!0),icon:s.jsx(W,{role:"img"}),iconHover:s.jsx(Z,{role:"img"}),children:"Edit"}):null,s.jsx(g,{icon:s.jsx(q,{role:"img"}),iconHover:s.jsx(J,{role:"img"}),onClick:()=>{t.repoId!==void 0&&t.encryptedPath!==void 0&&Q(a,t.repoId,t.encryptedPath,o)},children:"Download"}),s.jsx(g,{icon:s.jsx(y,{role:"img"}),iconHover:s.jsx(D,{role:"img"}),onClick:()=>{t.repoId!==void 0&&t.encryptedPath!==void 0&&a.repoFilesRenameFile(t.repoId,t.encryptedPath)},children:"Rename"}),s.jsx(g,{icon:s.jsx(X,{role:"img"}),iconHover:s.jsx(Y,{role:"img"}),onClick:()=>{a.repoFilesDetailsDelete(e)},children:"Delete"})]}):null})}),ye=e=>e.isEditing&&e.repoId!==void 0&&e.encryptedPath!==void 0?j(e.repoId,e.encryptedPath,!1):e.repoId!==void 0?N(e.repoId,e.encryptedParentPath??"/"):"/",De=i.memo(({detailsId:e,info:t})=>s.jsx(oe,{header:s.jsx(fe,{info:t}),right:s.jsx(be,{to:ye(t)}),nav:s.jsx(Fe,{detailsId:e,info:t}),noShadow:!0}));function we(e,t,o,a){const r=x(),l=i.useMemo(()=>r.repoFilesDetailsCreate(e,t,o,{loadContent:{categories:["Text","Code"],exts:[]},autosaveIntervalMs:a??2e4}),[r]);i.useEffect(()=>()=>{r.repoFilesDetailsDestroy(l)},[r,l]);const n=i.useRef(0);return i.useEffect(()=>{n.current>0&&(o?r.repoFilesDetailsEdit(l):r.repoFilesDetailsEditCancel(l)),n.current+=1},[r,l,o]),l}function Ee(e,t){const o=x();i.useEffect(()=>{const a=r=>{(w&&E(r,"s",{metaKey:!0})||!w&&E(r,"s",{ctrlKey:!0}))&&(r.preventDefault(),t.current!==void 0&&t.current.canSave&&o.repoFilesDetailsSave(e))};return document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}},[o,e,t])}const Ce=i.memo(({encryptedPath:e,detailsId:t,autosaveIntervalMs:o,expectedEncryptedNewPath:a,info:r,infoRef:l})=>{const n=x(),c=H();z(r.fileName),i.useEffect(()=>{r.repoId!==void 0&&r.encryptedPath!==void 0&&(r.shouldDestroy?c(N(r.repoId,r.encryptedParentPath??"/",r.fileName)):r.encryptedPath!==e&&(a.current=r.encryptedPath,c(j(r.repoId,r.encryptedPath,r.isEditing,o),{replace:!0})))},[r,e,o,c,a]),Ee(t,l),M(r.isDirty??!1);const u=I(),d=ge(t,r.fileName,r.fileExt,r.fileCategory,r.contentStatus,r.isEditing,u);return s.jsxs(s.Fragment,{children:[s.jsx(De,{detailsId:t,info:r}),s.jsx("main",{className:m`
            display: flex;
            flex-direction: column;
            flex-grow: 1;
          `,children:r.status.type==="Error"&&!r.isDirty?s.jsx(L,{error:r.status.error,onRetry:()=>{n.repoFilesDetailsLoadFile(t)}}):d!==void 0?d:r.status.type==="Loading"?s.jsx(b,{}):null}),s.jsx(te,{})]})}),Le=i.memo(({repoId:e,encryptedPath:t,isEditing:o,autosaveIntervalMs:a,expectedEncryptedNewPath:r})=>{const l=we(e,t,o,a),[n,c]=f((u,d)=>u.repoFilesDetailsInfoSubscribe(l,d),u=>u.repoFilesDetailsInfoData,[l]);return n===void 0?s.jsx(B,{}):s.jsx(ee,{repoId:e,repoStatus:n.repoStatus,isLocked:n.isLocked,children:s.jsx(Ce,{encryptedPath:t,autosaveIntervalMs:a,expectedEncryptedNewPath:r,detailsId:l,info:n,infoRef:c})})});function Ne(e){const t=e.get("autosave");if(t===null||t==="")return;const o=parseInt(t,10);if(!Number.isNaN(o))return o}const Re=i.memo(({repoId:e})=>{const[t]=U(),o=t.get("path")??"/",a=t.get("editing")==="true";let r=Ne(t);const[l,n]=i.useState(o),c=i.useRef(),[u,d]=i.useState(0);return o!==l&&(n(o),o!==c.current&&d(p=>p+1),c.current=void 0),s.jsx(Le,{repoId:e,encryptedPath:o,isEditing:a,autosaveIntervalMs:r,expectedEncryptedNewPath:c},u)}),Ze=i.memo(()=>{const t=V().repoId;return t===void 0?null:s.jsx(Re,{repoId:t})});export{Ze as RepoFilesDetailsPage};

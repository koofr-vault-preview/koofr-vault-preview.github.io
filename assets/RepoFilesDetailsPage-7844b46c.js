import{r as i,j as s,d as b,b as m,L as h,l as S,B as R,u as P,a as k,E as T}from"./DynamicThemeProvider-71c37830.js";import{L as E,u as I,d as U,b as H}from"./index-6ac7cbed.js";import{E as C}from"./DashboardError-d4d8eca5.js";import{D as V}from"./DashboardLoading-46aaae0f.js";import{u as B}from"./useDocumentTitle-2cb3b118.js";import{a as v,u as f,i as z}from"./mainAuthenticated-f089bf06.js";import{f as M,a as _,b as A,S as K,T as $,c as y,d as D,e as O,r as j,g as G,h as W,i as Z,j as q,k as J,l as Q,m as X,n as L,o as F,p as w,R as Y}from"./browser-c7884103.js";import{T as ee}from"./DashboardLayout-e417de0a.js";import{g as te}from"./Navbar-47732754.js";import{_ as se}from"./index-41e09f3b.js";import{D as re}from"./DashboardNavbar-3e775b4a.js";import{n as oe}from"./Button-d7c59dae.js";import"./error-icon@2x-ffa05ea5.js";import"./NavbarSticky-315264f4.js";import"./RepoUnlockForm-88eb991f.js";import"./PasswordInput-f4e9654e.js";import"./index-8c64d985.js";import"./GitRevision-2aaf540e.js";const ae=i.memo(({fileName:e,blobUrl:t,width:o,height:a})=>s.jsx("div",{className:b(m`
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 25px;
        `),style:{width:`${o}px`,height:`${a}px`},children:s.jsx("img",{src:t,alt:e,className:m`
            width: 100%;
            height: 100%;
            object-fit: scale-down;
          `})}));function N(e){const t=v(),[o,a]=i.useState(),r=i.useRef(),l=i.useCallback(()=>{r.current!==void 0&&(URL.revokeObjectURL(r.current),r.current=void 0)},[]);i.useEffect(()=>l,[l]);const n=i.useRef(),d=i.useCallback(()=>{n.current!==void 0&&(n.current.abort(),n.current=void 0)},[]);i.useEffect(()=>d,[d]);const u=i.useCallback(async()=>{d();const c=new AbortController;n.current=c;const p=await t.repoFilesDetailsGetFileStream(e,!0,c.signal),x=p!==void 0&&p.blob!==void 0?URL.createObjectURL(p.blob):void 0;l(),r.current=x,a(x)},[t,e,d,l]);return f((c,p)=>c.repoFilesDetailsFileSubscribe(e,p),c=>p=>{c.repoFilesDetailsFileData(p)!==void 0&&u()},[e,u]),o}const ie=i.memo(({detailsId:e,fileName:t,contentStatus:o,width:a,height:r})=>{const l=N(e);return o===void 0||o.type==="Loading"&&!o.loaded||l===void 0?s.jsx(h,{}):s.jsx(ae,{fileName:t,blobUrl:l,width:a,height:r})}),le=e=>"/pdfjs-4.2.67/web/viewer.html?file="+encodeURIComponent(e),ne=i.memo(({url:e,width:t,height:o})=>{const a=le(e);return s.jsx("iframe",{title:"PDF viewer",id:"viewerIframe",src:a,width:t,height:o,className:m`
        border: none;
        display: block;
      `})}),ce=i.memo(({detailsId:e,width:t,height:o})=>{const a=N(e);return a!==void 0?s.jsx(ne,{url:a,width:t,height:o}):s.jsx(h,{})}),de=S(()=>se(()=>import("./TextEditor-4aafa275.js").then(e=>e.T),["assets/TextEditor-4aafa275.js","assets/DynamicThemeProvider-71c37830.js","assets/index-41e09f3b.js","assets/index-9d9ae4af.css","assets/TextEditor-1862df68.css"]).then(e=>e.TextEditor),!1);function ue(e){const[t]=f((o,a)=>o.repoFilesDetailsContentBytesSubscribe(e,a),o=>o.repoFilesDetailsContentBytesData,[e]);return t}function me(e){const t=ue(e);return t!==void 0?new TextDecoder("utf-8").decode(t):void 0}const pe=i.memo(({detailsId:e,fileName:t,contentStatus:o,isEditing:a,width:r,height:l})=>{const n=v(),d=me(e),u=i.useCallback(c=>{n.repoFilesDetailsSetContent(e,new TextEncoder().encode(c))},[n,e]);return o.type==="Error"&&!o.loaded?s.jsx(C,{error:o.error,onRetry:()=>{n.repoFilesDetailsLoadContent(e)}}):o.type==="Loading"&&!o.loaded||d===void 0?s.jsx(h,{}):s.jsx(de,{fileName:t,text:d,isEditing:a,width:r,height:l,onChange:u})}),ve=(e,t,o,a,r,l,n)=>{const d=R(n),u=n.width,c=n.height-te(d);if(M(o))return s.jsx(ce,{detailsId:e,width:u,height:c});if(_(a)&&t!==void 0)return s.jsx(pe,{detailsId:e,fileName:t,contentStatus:r,isEditing:l,width:u,height:c});if(A(o)&&t!==void 0)return s.jsx(ie,{detailsId:e,fileName:t,contentStatus:r,width:u,height:c})},xe=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none",...e},i.createElement("path",{fill:"#676F73",d:"m15.945 17.823 6.185 6.185c.5.5 1.31.5 1.81 0l.028-.028c.5-.5.5-1.31 0-1.81l-6.184-6.185 6.177-6.177c.5-.5.5-1.31 0-1.81l-.03-.03c-.5-.5-1.31-.5-1.81 0l-6.177 6.178L9.79 7.99c-.5-.5-1.31-.5-1.81 0l-.029.028c-.5.5-.5 1.31 0 1.81l6.155 6.155L7.95 22.14c-.5.5-.5 1.31 0 1.81l.03.03c.5.5 1.31.5 1.81 0l6.154-6.155Z"})),ge=i.memo(({to:e})=>s.jsx(E,{to:e,className:m`
        display: flex;
        align-items: center;
      `,"aria-label":"Close",children:s.jsx(xe,{})})),be=i.memo(({info:e})=>{const t=P(),{status:o,fileName:a,fileModified:r,isEditing:l,contentStatus:n,saveStatus:d,isDirty:u,error:c}=e,p=o.type==="Loading"||n.type==="Loading",x=d.type==="Loading";return s.jsxs("div",{className:m`
        display: flex;
        flex-direction: column;
      `,children:[s.jsx("div",{className:m`
          font-weight: 600;
        `,"aria-label":"File name",children:a}),p?s.jsx("div",{className:m`
            font-size: 10px;
            font-weight: normal;
          `,children:"Loading..."}):x?s.jsx("div",{className:m`
            font-size: 10px;
            font-weight: normal;
          `,children:"Saving..."}):c!==void 0?s.jsx("div",{className:m`
            font-size: 10px;
            font-weight: 600;
            color: ${t.colors.destructive};
          `,"aria-label":"File error",children:c}):l?s.jsxs("div",{className:m`
            display: flex;
            flex-direction: row;
            align-items: center;
          `,"aria-label":"File info",children:[s.jsxs("span",{className:m`
              font-size: 10px;
              font-weight: normal;
            `,children:["Changes are saved automatically."," ",r!==void 0?s.jsxs(s.Fragment,{children:["Last saved ",s.jsx(K,{value:r})]}):null]}),s.jsx("span",{className:b(m`
                margin-left: 10px;
                width: 8px;
                height: 8px;
                border-radius: 4px;
                background-color: ${t.colors.successful};
              `,u&&m`
                  background-color: ${t.colors.warning};
                `),"aria-label":u?"File modified":"File unchanged"})]}):null]})}),he=oe.nav`
  display: flex;
  align-items: center;
`;function g({...e}){return s.jsx($,{...e,textClassName:b(m`
          font-size: 12px;
        `,e.textClassName),className:b(m`
          margin: 0;

          &:last-of-type {
            padding: 0;
          }
        `,e.className)})}const fe=i.memo(({detailsId:e,info:t})=>{const o=k(),a=v();return s.jsx(he,{children:t.isEditing?s.jsx(s.Fragment,{children:s.jsx(g,{icon:s.jsx(y,{role:"img"}),iconHover:s.jsx(D,{role:"img"}),onClick:()=>{a.repoFilesDetailsSave(e)},disabled:!t.canSave,children:"Save"})}):t.fileExists?s.jsxs(s.Fragment,{children:[O(t.fileCategory)&&t.repoId!==void 0&&t.encryptedPath!==void 0?s.jsx(g,{as:E,to:j(t.repoId,t.encryptedPath,!0),icon:s.jsx(G,{role:"img"}),iconHover:s.jsx(W,{role:"img"}),children:"Edit"}):null,s.jsx(g,{icon:s.jsx(Z,{role:"img"}),iconHover:s.jsx(q,{role:"img"}),onClick:()=>{t.repoId!==void 0&&t.encryptedPath!==void 0&&J(a,t.repoId,t.encryptedPath,o)},children:"Download"}),s.jsx(g,{icon:s.jsx(y,{role:"img"}),iconHover:s.jsx(D,{role:"img"}),onClick:()=>{t.repoId!==void 0&&t.encryptedPath!==void 0&&a.repoFilesRenameFile(t.repoId,t.encryptedPath)},children:"Rename"}),s.jsx(g,{icon:s.jsx(Q,{role:"img"}),iconHover:s.jsx(X,{role:"img"}),onClick:()=>{a.repoFilesDetailsDelete(e)},children:"Delete"})]}):null})}),je=e=>e.isEditing&&e.repoId!==void 0&&e.encryptedPath!==void 0?j(e.repoId,e.encryptedPath,!1):e.repoId!==void 0?L(e.repoId,e.encryptedParentPath??"/"):"/",ye=i.memo(({detailsId:e,info:t})=>s.jsx(re,{header:s.jsx(be,{info:t}),right:s.jsx(ge,{to:je(t)}),nav:s.jsx(fe,{detailsId:e,info:t}),noShadow:!0}));function De(e,t,o,a){const r=v(),l=i.useMemo(()=>r.repoFilesDetailsCreate(e,t,o,{loadContent:{categories:["Text","Code"],exts:[]},autosaveIntervalMs:a??2e4}),[r]);i.useEffect(()=>()=>{r.repoFilesDetailsDestroy(l)},[r,l]);const n=i.useRef(0);return i.useEffect(()=>{n.current>0&&(o?r.repoFilesDetailsEdit(l):r.repoFilesDetailsEditCancel(l)),n.current+=1},[r,l,o]),l}function Fe(e,t){const o=v();i.useEffect(()=>{const a=r=>{(F&&w(r,"s",{metaKey:!0})||!F&&w(r,"s",{ctrlKey:!0}))&&(r.preventDefault(),t.current!==void 0&&t.current.canSave&&o.repoFilesDetailsSave(e))};return document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}},[o,e,t])}const we=i.memo(({encryptedPath:e,detailsId:t,autosaveIntervalMs:o,expectedEncryptedNewPath:a,info:r,infoRef:l})=>{const n=v(),d=I();B(r.fileName),i.useEffect(()=>{r.repoId!==void 0&&r.encryptedPath!==void 0&&(r.shouldDestroy?d(L(r.repoId,r.encryptedParentPath??"/",r.fileName)):r.encryptedPath!==e&&(a.current=r.encryptedPath,d(j(r.repoId,r.encryptedPath,r.isEditing,o),{replace:!0})))},[r,e,o,d,a]),Fe(t,l),z(r.isDirty??!1);const u=T(),c=ve(t,r.fileName,r.fileExt,r.fileCategory,r.contentStatus,r.isEditing,u);return s.jsxs(s.Fragment,{children:[s.jsx(ye,{detailsId:t,info:r}),s.jsx("main",{className:m`
            display: flex;
            flex-direction: column;
            flex-grow: 1;
          `,children:r.status.type==="Error"&&!r.isDirty?s.jsx(C,{error:r.status.error,onRetry:()=>{n.repoFilesDetailsLoadFile(t)}}):c!==void 0?c:r.status.type==="Loading"?s.jsx(h,{}):null}),s.jsx(ee,{})]})}),Ee=i.memo(({repoId:e,encryptedPath:t,isEditing:o,autosaveIntervalMs:a,expectedEncryptedNewPath:r})=>{const l=De(e,t,o,a),[n,d]=f((u,c)=>u.repoFilesDetailsInfoSubscribe(l,c),u=>u.repoFilesDetailsInfoData,[l]);return n===void 0?s.jsx(V,{}):s.jsx(Y,{repoId:e,repoStatus:n.repoStatus,isLocked:n.isLocked,children:s.jsx(we,{encryptedPath:t,autosaveIntervalMs:a,expectedEncryptedNewPath:r,detailsId:l,info:n,infoRef:d})})});function Ce(e){const t=e.get("autosave");if(t===null||t==="")return;const o=parseInt(t,10);if(!Number.isNaN(o))return o}const Le=i.memo(({repoId:e})=>{const[t]=U(),o=t.get("path")??"/",a=t.get("editing")==="true";let r=Ce(t);const[l,n]=i.useState(o),d=i.useRef(),[u,c]=i.useState(0);return o!==l&&(n(o),o!==d.current&&c(p=>p+1),d.current=void 0),s.jsx(Ee,{repoId:e,encryptedPath:o,isEditing:a,autosaveIntervalMs:r,expectedEncryptedNewPath:d},u)}),Ge=i.memo(()=>{const t=H().repoId;return t===void 0?null:s.jsx(Le,{repoId:t})});export{Ge as RepoFilesDetailsPage};

import{r as i,j as t,d as b,b as m,L as h,l as S,A as R,u as P,a as k,B as T}from"./DynamicThemeProvider-852093d9.js";import{L as E,u as I,d as U,b as H}from"./index-1ee9421e.js";import{E as C}from"./DashboardError-88120f3a.js";import{D as V}from"./DashboardLoading-e763ad7f.js";import{u as B}from"./useDocumentTitle-2cb3b118.js";import{a as v,u as f,i as z}from"./mainAuthenticated-df4ea9c9.js";import{f as M,a as _,b as A,S as K,T as $,c as y,d as D,e as O,r as j,g as G,h as W,i as Z,j as q,k as J,l as Q,m as X,n as L,o as F,p as w,R as Y}from"./browser-cfcd8c4f.js";import{T as ee}from"./PasswordInput-b3172d65.js";import{g as se}from"./Navbar-0277b8dc.js";import{_ as te}from"./index-e81b4117.js";import{D as re}from"./DashboardNavbar-28681a18.js";import{n as oe}from"./Button-5863cf9e.js";import"./error-icon@2x-ffa05ea5.js";import"./NavbarSticky-96fb8002.js";import"./RepoUnlockForm-703481ee.js";import"./index-8c64d985.js";import"./GitRevision-489c9829.js";const ae=i.memo(({fileName:e,blobUrl:s,width:o,height:a})=>t.jsx("div",{className:b(m`
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 25px;
        `),style:{width:`${o}px`,height:`${a}px`},children:t.jsx("img",{src:s,alt:e,className:m`
            width: 100%;
            height: 100%;
            object-fit: scale-down;
          `})}));function N(e){const s=v(),[o,a]=i.useState(),r=i.useRef(),l=i.useCallback(()=>{r.current!==void 0&&(URL.revokeObjectURL(r.current),r.current=void 0)},[]);i.useEffect(()=>l,[l]);const n=i.useRef(),d=i.useCallback(()=>{n.current!==void 0&&(n.current.abort(),n.current=void 0)},[]);i.useEffect(()=>d,[d]);const u=i.useCallback(async()=>{d();const c=new AbortController;n.current=c;const p=await s.repoFilesDetailsGetFileStream(e,!0,c.signal),x=p!==void 0&&p.blob!==void 0?URL.createObjectURL(p.blob):void 0;l(),r.current=x,a(x)},[s,e,d,l]);return f((c,p)=>c.repoFilesDetailsFileSubscribe(e,p),c=>p=>{c.repoFilesDetailsFileData(p)!==void 0&&u()},[e,u]),o}const ie=i.memo(({detailsId:e,fileName:s,contentStatus:o,width:a,height:r})=>{const l=N(e);return o===void 0||o.type==="Loading"&&!o.loaded||l===void 0?t.jsx(h,{}):t.jsx(ae,{fileName:s,blobUrl:l,width:a,height:r})}),le=e=>"/pdfjs-3.5.141/web/viewer.html?file="+encodeURIComponent(e),ne=i.memo(({url:e,width:s,height:o})=>{const a=le(e);return t.jsx("iframe",{title:"PDF viewer",id:"viewerIframe",src:a,width:s,height:o,className:m`
        border: none;
        display: block;
      `})}),ce=i.memo(({detailsId:e,width:s,height:o})=>{const a=N(e);return a!==void 0?t.jsx(ne,{url:a,width:s,height:o}):t.jsx(h,{})}),de=S(()=>te(()=>import("./TextEditor-57975d5d.js").then(e=>e.T),["assets/TextEditor-57975d5d.js","assets/DynamicThemeProvider-852093d9.js","assets/index-e81b4117.js","assets/index-9d9ae4af.css","assets/TextEditor-1862df68.css"]).then(e=>e.TextEditor),!1);function ue(e){const[s]=f((o,a)=>o.repoFilesDetailsContentBytesSubscribe(e,a),o=>o.repoFilesDetailsContentBytesData,[e]);return s}function me(e){const s=ue(e);return s!==void 0?new TextDecoder("utf-8").decode(s):void 0}const pe=i.memo(({detailsId:e,fileName:s,contentStatus:o,isEditing:a,width:r,height:l})=>{const n=v(),d=me(e),u=i.useCallback(c=>{n.repoFilesDetailsSetContent(e,new TextEncoder().encode(c))},[n,e]);return o.type==="Error"&&!o.loaded?t.jsx(C,{error:o.error,onRetry:()=>{n.repoFilesDetailsLoadContent(e)}}):o.type==="Loading"&&!o.loaded||d===void 0?t.jsx(h,{}):t.jsx(de,{fileName:s,text:d,isEditing:a,width:r,height:l,onChange:u})}),ve=(e,s,o,a,r,l,n)=>{const d=R(n),u=n.width,c=n.height-se(d);if(M(o))return t.jsx(ce,{detailsId:e,width:u,height:c});if(_(a)&&s!==void 0)return t.jsx(pe,{detailsId:e,fileName:s,contentStatus:r,isEditing:l,width:u,height:c});if(A(o)&&s!==void 0)return t.jsx(ie,{detailsId:e,fileName:s,contentStatus:r,width:u,height:c})},xe=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none",...e},i.createElement("path",{fill:"#676F73",d:"m15.945 17.823 6.185 6.185c.5.5 1.31.5 1.81 0l.028-.028c.5-.5.5-1.31 0-1.81l-6.184-6.185 6.177-6.177c.5-.5.5-1.31 0-1.81l-.03-.03c-.5-.5-1.31-.5-1.81 0l-6.177 6.178L9.79 7.99c-.5-.5-1.31-.5-1.81 0l-.029.028c-.5.5-.5 1.31 0 1.81l6.155 6.155L7.95 22.14c-.5.5-.5 1.31 0 1.81l.03.03c.5.5 1.31.5 1.81 0l6.154-6.155Z"})),ge=i.memo(({to:e})=>t.jsx(E,{to:e,className:m`
        display: flex;
        align-items: center;
      `,"aria-label":"Close",children:t.jsx(xe,{})})),be=i.memo(({info:e})=>{const s=P(),{status:o,fileName:a,fileModified:r,isEditing:l,contentStatus:n,saveStatus:d,isDirty:u,error:c}=e,p=o.type==="Loading"||n.type==="Loading",x=d.type==="Loading";return t.jsxs("div",{className:m`
        display: flex;
        flex-direction: column;
      `,children:[t.jsx("div",{className:m`
          font-weight: 600;
        `,"aria-label":"File name",children:a}),p?t.jsx("div",{className:m`
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
            `,children:["Changes are saved automatically."," ",r!==void 0?t.jsxs(t.Fragment,{children:["Last saved ",t.jsx(K,{value:r})]}):null]}),t.jsx("span",{className:b(m`
                margin-left: 10px;
                width: 8px;
                height: 8px;
                border-radius: 4px;
                background-color: ${s.colors.successful};
              `,u&&m`
                  background-color: ${s.colors.warning};
                `),"aria-label":u?"File modified":"File unchanged"})]}):null]})}),he=oe.nav`
  display: flex;
  align-items: center;
  margin-right: -8px;
`;function g({...e}){return t.jsx($,{...e,textClassName:b(m`
          font-size: 12px;
        `,e.textClassName),className:b(m`
          margin: 0;
        `,e.className)})}const fe=i.memo(({detailsId:e,info:s})=>{const o=k(),a=v();return t.jsx(he,{children:s.isEditing?t.jsx(t.Fragment,{children:t.jsx(g,{icon:t.jsx(y,{role:"img"}),iconHover:t.jsx(D,{role:"img"}),onClick:()=>{a.repoFilesDetailsSave(e)},disabled:!s.canSave,children:"Save"})}):s.fileExists?t.jsxs(t.Fragment,{children:[O(s.fileCategory)&&s.repoId!==void 0&&s.encryptedPath!==void 0?t.jsx(g,{as:E,to:j(s.repoId,s.encryptedPath,!0),icon:t.jsx(G,{role:"img"}),iconHover:t.jsx(W,{role:"img"}),children:"Edit"}):null,t.jsx(g,{icon:t.jsx(Z,{role:"img"}),iconHover:t.jsx(q,{role:"img"}),onClick:()=>{s.repoId!==void 0&&s.encryptedPath!==void 0&&J(a,s.repoId,s.encryptedPath,o)},children:"Download"}),t.jsx(g,{icon:t.jsx(y,{role:"img"}),iconHover:t.jsx(D,{role:"img"}),onClick:()=>{s.repoId!==void 0&&s.encryptedPath!==void 0&&a.repoFilesRenameFile(s.repoId,s.encryptedPath)},children:"Rename"}),t.jsx(g,{icon:t.jsx(Q,{role:"img"}),iconHover:t.jsx(X,{role:"img"}),onClick:()=>{a.repoFilesDetailsDelete(e)},children:"Delete"})]}):null})}),je=e=>e.isEditing&&e.repoId!==void 0&&e.encryptedPath!==void 0?j(e.repoId,e.encryptedPath,!1):e.repoId!==void 0?L(e.repoId,e.encryptedParentPath??"/"):"/",ye=i.memo(({detailsId:e,info:s})=>t.jsx(re,{header:t.jsx(be,{info:s}),right:t.jsx(ge,{to:je(s)}),nav:t.jsx(fe,{detailsId:e,info:s}),noShadow:!0}));function De(e,s,o,a){const r=v(),l=i.useMemo(()=>r.repoFilesDetailsCreate(e,s,o,{loadContent:{categories:["Text","Code"],exts:[]},autosaveIntervalMs:a??2e4}),[r]);i.useEffect(()=>()=>{r.repoFilesDetailsDestroy(l)},[r,l]);const n=i.useRef(0);return i.useEffect(()=>{n.current>0&&(o?r.repoFilesDetailsEdit(l):r.repoFilesDetailsEditCancel(l)),n.current+=1},[r,l,o]),l}function Fe(e,s){const o=v();i.useEffect(()=>{const a=r=>{(F&&w(r,"s",{metaKey:!0})||!F&&w(r,"s",{ctrlKey:!0}))&&(r.preventDefault(),s.current!==void 0&&s.current.canSave&&o.repoFilesDetailsSave(e))};return document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}},[o,e,s])}const we=i.memo(({encryptedPath:e,detailsId:s,autosaveIntervalMs:o,expectedEncryptedNewPath:a,info:r,infoRef:l})=>{const n=v(),d=I();B(r.fileName),i.useEffect(()=>{r.repoId!==void 0&&r.encryptedPath!==void 0&&(r.shouldDestroy?d(L(r.repoId,r.encryptedParentPath??"/",r.fileName)):r.encryptedPath!==e&&(a.current=r.encryptedPath,d(j(r.repoId,r.encryptedPath,r.isEditing,o),{replace:!0})))},[r,e,o,d,a]),Fe(s,l),z(r.isDirty??!1);const u=T(),c=ve(s,r.fileName,r.fileExt,r.fileCategory,r.contentStatus,r.isEditing,u);return t.jsxs(t.Fragment,{children:[t.jsx(ye,{detailsId:s,info:r}),t.jsx("main",{className:m`
            display: flex;
            flex-direction: column;
            flex-grow: 1;
          `,children:r.status.type==="Error"&&!r.isDirty?t.jsx(C,{error:r.status.error,onRetry:()=>{n.repoFilesDetailsLoadFile(s)}}):c!==void 0?c:r.status.type==="Loading"?t.jsx(h,{}):null}),t.jsx(ee,{})]})}),Ee=i.memo(({repoId:e,encryptedPath:s,isEditing:o,autosaveIntervalMs:a,expectedEncryptedNewPath:r})=>{const l=De(e,s,o,a),[n,d]=f((u,c)=>u.repoFilesDetailsInfoSubscribe(l,c),u=>u.repoFilesDetailsInfoData,[l]);return n===void 0?t.jsx(V,{}):t.jsx(Y,{repoId:e,repoStatus:n.repoStatus,isLocked:n.isLocked,children:t.jsx(we,{encryptedPath:s,autosaveIntervalMs:a,expectedEncryptedNewPath:r,detailsId:l,info:n,infoRef:d})})});function Ce(e){const s=e.get("autosave");if(s===null||s==="")return;const o=parseInt(s,10);if(!Number.isNaN(o))return o}const Le=i.memo(({repoId:e})=>{const[s]=U(),o=s.get("path")??"/",a=s.get("editing")==="true";let r=Ce(s);const[l,n]=i.useState(o),d=i.useRef(),[u,c]=i.useState(0);return o!==l&&(n(o),o!==d.current&&c(p=>p+1),d.current=void 0),t.jsx(Ee,{repoId:e,encryptedPath:o,isEditing:a,autosaveIntervalMs:r,expectedEncryptedNewPath:d},u)}),Oe=i.memo(()=>{const s=H().repoId;return s===void 0?null:t.jsx(Le,{repoId:s})});export{Oe as RepoFilesDetailsPage};

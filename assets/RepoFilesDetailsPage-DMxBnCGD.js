const __vite__fileDeps=["assets/TextEditor-DtRdRQht.js","assets/DynamicThemeProvider-CxehgrR0.js","assets/emotion-css.esm-CiHGz3gB.js","assets/mainWebAuthenticated-BUokeWIF.js","assets/NavbarSticky-DuO2swp8.js","assets/Button-Dt6jELX4.js","assets/index-Bd7ycyX3.js","assets/index-DxkFTwjz.css","assets/TextEditor-i-_92Xge.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as i,j as t,z as R,u as P,a as k,A as T}from"./DynamicThemeProvider-CxehgrR0.js";import{a as h,c as m,L as C,u as I,f as H,e as U}from"./emotion-css.esm-CiHGz3gB.js";import{E as N}from"./DashboardError-BIlklx0l.js";import{a as x,u as f,i as b,j as V}from"./mainWebAuthenticated-BUokeWIF.js";import{D as z}from"./DashboardLoading-CeavatL0.js";import{u as B}from"./useDocumentTitle-D3L4F_h2.js";import{f as M,a as _,b as A,S as K,T as $,c as y,d as D,e as O,r as j,g as G,h as W,i as Z,j as q,k as J,l as Q,m as X,n as S,o as w,p as E,R as Y}from"./browser-DwKdwGsm.js";import{T as ee}from"./DashboardLayout-y1QZPwdG.js";import{g as se}from"./Navbar-D0t0rxK0.js";import{_ as te}from"./index-Bd7ycyX3.js";import{D as re}from"./DashboardNavbar-Chjsjb8Z.js";import{n as oe}from"./Button-Dt6jELX4.js";import"./error-icon@2x-BzFHMFnI.js";import"./NavbarSticky-DuO2swp8.js";import"./RepoUnlockForm-CV4H2IXx.js";import"./PasswordInput-DMAEQf6X.js";import"./index-CrWxlqLP.js";import"./GitRevision-Rqm_P8y6.js";const ae=i.memo(({fileName:e,url:s,width:o,height:a})=>t.jsx("div",{className:h(m`
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 25px;
        `),style:{width:`${o}px`,height:`${a}px`},children:t.jsx("img",{src:s,alt:e,className:m`
            width: 100%;
            height: 100%;
            object-fit: scale-down;
          `})}));function ie(e){const s=x(),[o,a]=i.useState(),r=i.useRef(),l=i.useCallback(()=>{r.current!==void 0&&(URL.revokeObjectURL(r.current),r.current=void 0)},[]);i.useEffect(()=>l,[l]);const n=i.useRef(),c=i.useCallback(()=>{n.current!==void 0&&(n.current.abort(),n.current=void 0)},[]);i.useEffect(()=>c,[c]);const u=i.useCallback(async d=>{c();const p=new AbortController;n.current=p;const v=await s.repoFilesDetailsGetFileStream(e,!0,p.signal),F=v!==void 0&&v.blob!==void 0?URL.createObjectURL(v.blob):void 0;l(),r.current=F,a(F)},[s,e,c,l]);return f((d,p)=>d.repoFilesDetailsFileSubscribe(e,p),d=>p=>{const v=d.repoFilesDetailsFileData(p);v!==void 0&&u(v.remoteHash)},[e,u]),o}function L(e){return ie(e)}const le=i.memo(({detailsId:e,fileName:s,contentStatus:o,width:a,height:r})=>{const l=L(e);return o===void 0||o.type==="Loading"&&!o.loaded||l===void 0?t.jsx(b,{}):t.jsx(ae,{fileName:s,url:l,width:a,height:r})}),ne=e=>"/pdfjs-4.2.67/web/viewer.html?file="+encodeURIComponent(e),ce=i.memo(({url:e,width:s,height:o})=>{const a=ne(e);return t.jsx("iframe",{title:"PDF viewer",id:"viewerIframe",src:a,width:s,height:o,className:m`
        border: none;
        display: block;
      `})}),de=i.memo(({detailsId:e,width:s,height:o})=>{const a=L(e);return a!==void 0?t.jsx(ce,{url:a,width:s,height:o}):t.jsx(b,{})}),ue=i.lazy(()=>te(()=>import("./TextEditor-DtRdRQht.js").then(e=>e.T),__vite__mapDeps([0,1,2,3,4,5,6,7,8])).then(e=>({default:e.TextEditor})));function me(e){const[s]=f((o,a)=>o.repoFilesDetailsContentBytesSubscribe(e,a),o=>o.repoFilesDetailsContentBytesData,[e]);return s}function pe(e){const s=me(e);return s!==void 0?new TextDecoder("utf-8").decode(s):void 0}const ve=i.memo(({detailsId:e,fileName:s,contentStatus:o,isEditing:a,width:r,height:l})=>{const n=x(),c=pe(e),u=i.useCallback(d=>{n.repoFilesDetailsSetContent(e,new TextEncoder().encode(d))},[n,e]);return o.type==="Error"&&!o.loaded?t.jsx(N,{error:o.error,onRetry:()=>{n.repoFilesDetailsLoadContent(e)}}):o.type==="Loading"&&!o.loaded||c===void 0?t.jsx(b,{}):t.jsx(i.Suspense,{children:t.jsx(ue,{fileName:s,text:c,isEditing:a,width:r,height:l,onChange:u})})}),xe=(e,s,o,a,r,l,n)=>{const c=R(n),u=n.width,d=n.height-se(c);if(M(o))return t.jsx(de,{detailsId:e,width:u,height:d});if(_(a)&&s!==void 0)return t.jsx(ve,{detailsId:e,fileName:s,contentStatus:r,isEditing:l,width:u,height:d});if(A(o)&&s!==void 0)return t.jsx(le,{detailsId:e,fileName:s,contentStatus:r,width:u,height:d})},ge=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none",...e},i.createElement("path",{fill:"#676F73",d:"m15.945 17.823 6.185 6.185c.5.5 1.31.5 1.81 0l.028-.028c.5-.5.5-1.31 0-1.81l-6.184-6.185 6.177-6.177c.5-.5.5-1.31 0-1.81l-.03-.03c-.5-.5-1.31-.5-1.81 0l-6.177 6.178L9.79 7.99c-.5-.5-1.31-.5-1.81 0l-.029.028c-.5.5-.5 1.31 0 1.81l6.155 6.155L7.95 22.14c-.5.5-.5 1.31 0 1.81l.03.03c.5.5 1.31.5 1.81 0l6.154-6.155Z"})),he=i.memo(({to:e})=>t.jsx(C,{to:e,className:m`
        display: flex;
        align-items: center;
      `,"aria-label":"Close",children:t.jsx(ge,{})})),be=i.memo(({info:e})=>{const s=P(),{status:o,fileName:a,fileModified:r,isEditing:l,contentStatus:n,saveStatus:c,isDirty:u,error:d}=e,p=o.type==="Loading"||n.type==="Loading",v=c.type==="Loading";return t.jsxs("div",{className:m`
        display: flex;
        flex-direction: column;
      `,children:[t.jsx("div",{className:m`
          font-weight: 600;
        `,"aria-label":"File name",children:a}),p?t.jsx("div",{className:m`
            font-size: 10px;
            font-weight: normal;
          `,children:"Loading..."}):v?t.jsx("div",{className:m`
            font-size: 10px;
            font-weight: normal;
          `,children:"Saving..."}):d!==void 0?t.jsx("div",{className:m`
            font-size: 10px;
            font-weight: 600;
            color: ${s.colors.destructive};
          `,"aria-label":"File error",children:d}):l?t.jsxs("div",{className:m`
            display: flex;
            flex-direction: row;
            align-items: center;
          `,"aria-label":"File info",children:[t.jsxs("span",{className:m`
              font-size: 10px;
              font-weight: normal;
            `,children:["Changes are saved automatically."," ",r!==void 0?t.jsxs(t.Fragment,{children:["Last saved ",t.jsx(K,{value:r})]}):null]}),t.jsx("span",{className:h(m`
                margin-left: 10px;
                width: 8px;
                height: 8px;
                border-radius: 4px;
                background-color: ${s.colors.successful};
              `,u&&m`
                  background-color: ${s.colors.warning};
                `),"aria-label":u?"File modified":"File unchanged"})]}):null]})}),fe=oe.nav`
  display: flex;
  align-items: center;
`;function g({...e}){return t.jsx($,{...e,textClassName:h(m`
          font-size: 12px;
        `,e.textClassName),className:h(m`
          margin: 0;

          &:last-of-type {
            padding: 0;
          }
        `,e.className)})}const je=i.memo(({detailsId:e,info:s})=>{const o=k(),a=x();return t.jsx(fe,{children:s.isEditing?t.jsx(t.Fragment,{children:t.jsx(g,{icon:t.jsx(y,{role:"img"}),iconHover:t.jsx(D,{role:"img"}),onClick:()=>{a.repoFilesDetailsSave(e)},disabled:!s.canSave,children:"Save"})}):s.fileExists?t.jsxs(t.Fragment,{children:[O(s.fileCategory)&&s.repoId!==void 0&&s.encryptedPath!==void 0?t.jsx(g,{as:C,to:j(s.repoId,s.encryptedPath,!0),icon:t.jsx(G,{role:"img"}),iconHover:t.jsx(W,{role:"img"}),children:"Edit"}):null,t.jsx(g,{icon:t.jsx(Z,{role:"img"}),iconHover:t.jsx(q,{role:"img"}),onClick:()=>{s.repoId!==void 0&&s.encryptedPath!==void 0&&J(a,s.repoId,s.encryptedPath,o)},children:"Download"}),t.jsx(g,{icon:t.jsx(y,{role:"img"}),iconHover:t.jsx(D,{role:"img"}),onClick:()=>{s.repoId!==void 0&&s.encryptedPath!==void 0&&a.repoFilesRenameFile(s.repoId,s.encryptedPath)},children:"Rename"}),t.jsx(g,{icon:t.jsx(Q,{role:"img"}),iconHover:t.jsx(X,{role:"img"}),onClick:()=>{a.repoFilesDetailsDelete(e)},children:"Delete"})]}):null})}),Fe=e=>e.isEditing&&e.repoId!==void 0&&e.encryptedPath!==void 0?j(e.repoId,e.encryptedPath,!1):e.repoId!==void 0?S(e.repoId,e.encryptedParentPath??"/"):"/",ye=i.memo(({detailsId:e,info:s})=>t.jsx(re,{header:t.jsx(be,{info:s}),right:t.jsx(he,{to:Fe(s)}),nav:t.jsx(je,{detailsId:e,info:s}),noShadow:!0}));function De(e,s,o,a){const r=x(),l=i.useMemo(()=>r.repoFilesDetailsCreate(e,s,o,{loadContent:{categories:["Text","Code"],exts:[]},autosaveIntervalMs:a??2e4}),[r]);i.useEffect(()=>()=>{r.repoFilesDetailsDestroy(l)},[r,l]);const n=i.useRef(0);return i.useEffect(()=>{n.current>0&&(o?r.repoFilesDetailsEdit(l):r.repoFilesDetailsEditCancel(l)),n.current+=1},[r,l,o]),l}function we(e,s){const o=x();i.useEffect(()=>{const a=r=>{(w&&E(r,"s",{metaKey:!0})||!w&&E(r,"s",{ctrlKey:!0}))&&(r.preventDefault(),s.current!==void 0&&s.current.canSave&&o.repoFilesDetailsSave(e))};return document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}},[o,e,s])}const Ee=i.memo(({encryptedPath:e,detailsId:s,autosaveIntervalMs:o,expectedEncryptedNewPath:a,info:r,infoRef:l})=>{const n=x(),c=I();B(r.fileName),i.useEffect(()=>{r.repoId!==void 0&&r.encryptedPath!==void 0&&(r.shouldDestroy?c(S(r.repoId,r.encryptedParentPath??"/",r.fileName)):r.encryptedPath!==e&&(a.current=r.encryptedPath,c(j(r.repoId,r.encryptedPath,r.isEditing,o),{replace:!0})))},[r,e,o,c,a]),we(s,l),V(r.isDirty??!1);const u=T(),d=xe(s,r.fileName,r.fileExt,r.fileCategory,r.contentStatus,r.isEditing,u);return t.jsxs(t.Fragment,{children:[t.jsx(ye,{detailsId:s,info:r}),t.jsx("main",{className:m`
            display: flex;
            flex-direction: column;
            flex-grow: 1;
          `,children:r.status.type==="Error"&&!r.isDirty?t.jsx(N,{error:r.status.error,onRetry:()=>{n.repoFilesDetailsLoadFile(s)}}):d!==void 0?d:r.status.type==="Loading"?t.jsx(b,{}):null}),t.jsx(ee,{})]})}),Ce=i.memo(({repoId:e,encryptedPath:s,isEditing:o,autosaveIntervalMs:a,expectedEncryptedNewPath:r})=>{const l=De(e,s,o,a),[n,c]=f((u,d)=>u.repoFilesDetailsInfoSubscribe(l,d),u=>u.repoFilesDetailsInfoData,[l]);return n===void 0?t.jsx(z,{}):t.jsx(Y,{repoId:e,repoStatus:n.repoStatus,isLocked:n.isLocked,children:t.jsx(Ee,{encryptedPath:s,autosaveIntervalMs:a,expectedEncryptedNewPath:r,detailsId:l,info:n,infoRef:c})})});function Ne(e){const s=e.get("autosave");if(s===null||s==="")return;const o=parseInt(s,10);if(!Number.isNaN(o))return o}const Se=i.memo(({repoId:e})=>{const[s]=H(),o=s.get("path")??"/",a=s.get("editing")==="true";let r=Ne(s);const[l,n]=i.useState(o),c=i.useRef(),[u,d]=i.useState(0);return o!==l&&(n(o),o!==c.current&&d(p=>p+1),c.current=void 0),t.jsx(Ce,{repoId:e,encryptedPath:o,isEditing:a,autosaveIntervalMs:r,expectedEncryptedNewPath:c},u)}),We=i.memo(()=>{const s=U().repoId;return s===void 0?null:t.jsx(Se,{repoId:s})});export{We as RepoFilesDetailsPage};

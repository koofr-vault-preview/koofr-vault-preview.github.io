import{r as n,j as t,d as b,b as f,L as h,l as T,A as U,u as H,a as P,g as V,B as I}from"./DynamicThemeProvider-8db021c0.js";import{L,u as K,d as B,b as z}from"./index-785e270c.js";import{E as N}from"./RepoError-de2c233d.js";import{u as M}from"./useDocumentTitle-2cb3b118.js";import{a as g,u as w,i as _}from"./mainAuthenticated-da65d0b7.js";import{f as A,a as $,b as G,S as W,T as Z,c as F,d as D,e as q,r as y,g as J,h as O,i as Q,j as X,k as Y,l as ee,m as re,n as S,o as E,R as te}from"./RepoGuard-68390874.js";import{T as se}from"./PasswordInput-b4462587.js";import{g as oe}from"./Navbar-214aa63a.js";import{_ as ae}from"./index-94b5b978.js";import{D as ie}from"./DashboardNavbar-76557c1e.js";import{n as le}from"./Button-0a845b25.js";import"./error-icon@2x-ffa05ea5.js";import"./NavbarSticky-e92eb122.js";import"./index-8c64d985.js";import"./DashboardLoading-2b60918b.js";import"./RepoUnlockForm-4021b1e8.js";import"./GitRevision-b7397e1d.js";const ne=n.memo(({fileName:r,blobUrl:e,width:o,height:i})=>t.jsx("div",{className:b(f`
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 25px;
        `),style:{width:`${o}px`,height:`${i}px`},children:t.jsx("img",{src:e,alt:r,className:f`
            width: 100%;
            height: 100%;
            object-fit: scale-down;
          `})}));function R(r){const e=g(),[o,i]=n.useState(),l=n.useRef(),a=n.useCallback(()=>{l.current!==void 0&&(URL.revokeObjectURL(l.current),l.current=void 0)},[]);n.useEffect(()=>a,[a]);const d=n.useRef(),u=n.useCallback(()=>{d.current!==void 0&&(d.current.abort(),d.current=void 0)},[]);n.useEffect(()=>u,[u]);const s=n.useCallback(async()=>{u();const c=new AbortController;d.current=c;const m=await e.repoFilesDetailsGetFileStream(r,!0,c.signal),p=m!==void 0&&m.blob!==void 0?URL.createObjectURL(m.blob):void 0;a(),l.current=p,i(p)},[e,r,u,a]);return w((c,m)=>c.repoFilesDetailsFileSubscribe(r,m),c=>m=>{c.repoFilesDetailsFileData(m)!==void 0&&s()},[r,s]),o}const ce=n.memo(({detailsId:r,fileName:e,contentStatus:o,width:i,height:l})=>{const a=R(r);return o===void 0||o.type==="Loading"&&!o.loaded||a===void 0?t.jsx(h,{}):t.jsx(ne,{fileName:e,blobUrl:a,width:i,height:l})}),de=r=>"/pdfjs-3.5.141/web/viewer.html?file="+encodeURIComponent(r),ue=n.memo(({url:r,width:e,height:o})=>{const i=de(r);return t.jsx("iframe",{title:"PDF viewer",id:"viewerIframe",src:i,width:e,height:o,className:f`
        border: none;
        display: block;
      `})}),me=n.memo(({detailsId:r,width:e,height:o})=>{const i=R(r);return i!==void 0?t.jsx(ue,{url:i,width:e,height:o}):t.jsx(h,{})}),pe=T(()=>ae(()=>import("./TextEditor-5e87737c.js").then(r=>r.T),["assets/TextEditor-5e87737c.js","assets/DynamicThemeProvider-8db021c0.js","assets/index-94b5b978.js","assets/index-9d9ae4af.css","assets/TextEditor-1862df68.css"]).then(r=>r.TextEditor),!1);function fe(r){const[e]=w((o,i)=>o.repoFilesDetailsContentBytesSubscribe(r,i),o=>o.repoFilesDetailsContentBytesData,[r]);return e}function ve(r){const e=fe(r);return e!==void 0?new TextDecoder("utf-8").decode(e):void 0}const ge=n.memo(({detailsId:r,fileName:e,contentStatus:o,isEditing:i,width:l,height:a})=>{const d=g(),u=ve(r),s=n.useCallback(c=>{d.repoFilesDetailsSetContent(r,new TextEncoder().encode(c))},[d,r]);return o.type==="Error"&&!o.loaded?t.jsx(N,{error:o.error,onRetry:()=>{d.repoFilesDetailsLoadContent(r)}}):o.type==="Loading"&&!o.loaded||u===void 0?t.jsx(h,{}):t.jsx(pe,{fileName:e,text:u,isEditing:i,width:l,height:a,onChange:s})}),xe=(r,e,o,i,l,a,d)=>{const u=U(d),s=d.width,c=d.height-oe(u);if(A(o))return t.jsx(me,{detailsId:r,width:s,height:c});if($(i)&&e!==void 0)return t.jsx(ge,{detailsId:r,fileName:e,contentStatus:l,isEditing:a,width:s,height:c});if(G(o)&&e!==void 0)return t.jsx(ce,{detailsId:r,fileName:e,contentStatus:l,width:s,height:c})},be=r=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none",...r},n.createElement("path",{fill:"#676F73",d:"m15.945 17.823 6.185 6.185c.5.5 1.31.5 1.81 0l.028-.028c.5-.5.5-1.31 0-1.81l-6.184-6.185 6.177-6.177c.5-.5.5-1.31 0-1.81l-.03-.03c-.5-.5-1.31-.5-1.81 0l-6.177 6.178L9.79 7.99c-.5-.5-1.31-.5-1.81 0l-.029.028c-.5.5-.5 1.31 0 1.81l6.155 6.155L7.95 22.14c-.5.5-.5 1.31 0 1.81l.03.03c.5.5 1.31.5 1.81 0l6.154-6.155Z"})),he=n.memo(({to:r})=>t.jsx(L,{to:r,className:f`
        display: flex;
        align-items: center;
      `,"aria-label":"Close",children:t.jsx(be,{})})),je=n.memo(({info:r})=>{const e=H(),{status:o,fileName:i,fileModified:l,isEditing:a,contentStatus:d,saveStatus:u,isDirty:s,error:c}=r,m=o.type==="Loading"||d.type==="Loading",p=u.type==="Loading";return t.jsxs("div",{className:f`
        display: flex;
        flex-direction: column;
      `,children:[t.jsx("div",{className:f`
          font-weight: 600;
        `,"aria-label":"File name",children:i}),m?t.jsx("div",{className:f`
            font-size: 10px;
            font-weight: normal;
          `,children:"Loading..."}):p?t.jsx("div",{className:f`
            font-size: 10px;
            font-weight: normal;
          `,children:"Saving..."}):c!==void 0?t.jsx("div",{className:f`
            font-size: 10px;
            font-weight: 600;
            color: ${e.colors.destructive};
          `,"aria-label":"File error",children:c}):a?t.jsxs("div",{className:f`
            display: flex;
            flex-direction: row;
            align-items: center;
          `,"aria-label":"File info",children:[t.jsxs("span",{className:f`
              font-size: 10px;
              font-weight: normal;
            `,children:["Changes are saved automatically."," ",l!==void 0?t.jsxs(t.Fragment,{children:["Last saved ",t.jsx(W,{value:l})]}):null]}),t.jsx("span",{className:b(f`
                margin-left: 10px;
                width: 8px;
                height: 8px;
                border-radius: 4px;
                background-color: ${e.colors.successful};
              `,s&&f`
                  background-color: ${e.colors.warning};
                `),"aria-label":s?"File modified":"File unchanged"})]}):null]})}),we=le.nav`
  display: flex;
  align-items: center;
  margin-right: -8px;
`;function x({...r}){return t.jsx(Z,{...r,textClassName:b(f`
          font-size: 12px;
        `,r.textClassName),className:b(f`
          margin: 0;
        `,r.className)})}const ye=n.memo(({detailsId:r,info:e})=>{const o=P(),i=g();return t.jsx(we,{children:e.isEditing?t.jsx(t.Fragment,{children:t.jsx(x,{icon:t.jsx(F,{role:"img"}),iconHover:t.jsx(D,{role:"img"}),onClick:()=>{i.repoFilesDetailsSave(r)},disabled:!e.canSave,children:"Save"})}):e.fileExists?t.jsxs(t.Fragment,{children:[q(e.fileCategory)&&e.repoId!==void 0&&e.path!==void 0?t.jsx(x,{as:L,to:y(e.repoId,e.path,!0),icon:t.jsx(J,{role:"img"}),iconHover:t.jsx(O,{role:"img"}),children:"Edit"}):null,t.jsx(x,{icon:t.jsx(Q,{role:"img"}),iconHover:t.jsx(X,{role:"img"}),onClick:()=>{e.repoId!==void 0&&e.path!==void 0&&Y(i,e.repoId,e.path,o)},children:"Download"}),t.jsx(x,{icon:t.jsx(F,{role:"img"}),iconHover:t.jsx(D,{role:"img"}),onClick:()=>{e.repoId!==void 0&&e.path!==void 0&&i.repoFilesRenameFile(e.repoId,e.path)},children:"Rename"}),t.jsx(x,{icon:t.jsx(ee,{role:"img"}),iconHover:t.jsx(re,{role:"img"}),onClick:()=>{i.repoFilesDetailsDelete(r)},children:"Delete"})]}):null})}),Fe=r=>r.isEditing&&r.repoId!==void 0&&r.path!==void 0?y(r.repoId,r.path,!1):r.repoId!==void 0?S(r.repoId,r.parentPath??"/"):"/",De=n.memo(({detailsId:r,info:e})=>t.jsx(ie,{header:t.jsx(je,{info:e}),right:t.jsx(he,{to:Fe(e)}),nav:t.jsx(ye,{detailsId:r,info:e}),noShadow:!0}));function Ee(r,e,o,i){const l=g(),a=n.useMemo(()=>l.repoFilesDetailsCreate(r,e,o,{loadContent:{categories:["Text","Code"],exts:[]},autosaveIntervalMs:i??2e4}),[l]);n.useEffect(()=>()=>{l.repoFilesDetailsDestroy(a)},[l,a]);const d=n.useRef(0);return n.useEffect(()=>{d.current>0&&(o?l.repoFilesDetailsEdit(a):l.repoFilesDetailsEditCancel(a)),d.current+=1},[l,a,o]),a}var j={exports:{}};(function(r,e){function o(s){if(s&&typeof s=="object"){var c=s.which||s.keyCode||s.charCode;c&&(s=c)}if(typeof s=="number")return d[s];var m=String(s),p=i[m.toLowerCase()];if(p)return p;var p=l[m.toLowerCase()];if(p)return p;if(m.length===1)return m.charCodeAt(0)}o.isEventKey=function(c,m){if(c&&typeof c=="object"){var p=c.which||c.keyCode||c.charCode;if(p==null)return!1;if(typeof m=="string"){var v=i[m.toLowerCase()];if(v)return v===p;var v=l[m.toLowerCase()];if(v)return v===p}else if(typeof m=="number")return m===p;return!1}},e=r.exports=o;var i=e.code=e.codes={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,"pause/break":19,"caps lock":20,esc:27,space:32,"page up":33,"page down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46,command:91,"left command":91,"right command":93,"numpad *":106,"numpad +":107,"numpad -":109,"numpad .":110,"numpad /":111,"num lock":144,"scroll lock":145,"my computer":182,"my calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},l=e.aliases={windows:91,"⇧":16,"⌥":18,"⌃":17,"⌘":91,ctl:17,control:17,option:18,pause:19,break:19,caps:20,return:13,escape:27,spc:32,spacebar:32,pgup:33,pgdn:34,ins:45,del:46,cmd:91};/*!
 * Programatically add the following
 */for(a=97;a<123;a++)i[String.fromCharCode(a)]=a-32;for(var a=48;a<58;a++)i[a-48]=a;for(a=1;a<13;a++)i["f"+a]=a+111;for(a=0;a<10;a++)i["numpad "+a]=a+96;var d=e.names=e.title={};for(a in i)d[i[a]]=a;for(var u in l)i[u]=l[u]})(j,j.exports);var Ce=j.exports;const Le=V(Ce);function C(r,e,{altKey:o=!1,ctrlKey:i=!1,metaKey:l=!1,shiftKey:a=!1}){return Le.isEventKey(r,e)&&r.altKey===o&&r.ctrlKey===i&&r.metaKey===l&&r.shiftKey===a}function Ne(r,e){const o=g();n.useEffect(()=>{const i=l=>{(E&&C(l,"s",{metaKey:!0})||!E&&C(l,"s",{ctrlKey:!0}))&&(l.preventDefault(),e.current!==void 0&&e.current.canSave&&o.repoFilesDetailsSave(r))};return document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i)}},[o,r,e])}const Se=n.memo(({repo:r,path:e,isEditing:o,autosaveIntervalMs:i,expectedNewPath:l})=>{const a=g(),d=K(),u=Ee(r.id,e,o,i),[s,c]=w((v,k)=>v.repoFilesDetailsInfoSubscribe(u,k),v=>v.repoFilesDetailsInfoData,[u]);M(s==null?void 0:s.fileName),n.useEffect(()=>{s!==void 0&&s.repoId!==void 0&&s.path!==void 0&&(s.shouldDestroy?d(S(s.repoId,s.parentPath??"/",s.fileName)):s.path!==e&&(l.current=s.path,d(y(s.repoId,s.path,s.isEditing,i),{replace:!0})))},[s,e,i,d,l]),Ne(u,c),_((s==null?void 0:s.isDirty)??!1);const m=I();if(s===void 0)return null;const p=xe(u,s.fileName,s.fileExt,s.fileCategory,s.contentStatus,s.isEditing,m);return t.jsxs(t.Fragment,{children:[t.jsx(De,{detailsId:u,info:s}),t.jsx("main",{className:f`
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        `,children:s.status.type==="Error"&&!s.isDirty?t.jsx(N,{error:s.status.error,onRetry:()=>{a.repoFilesDetailsLoadFile(u)}}):p!==void 0?p:s.status.type==="Loading"?t.jsx(h,{}):null}),t.jsx(se,{})]})});function Re(r){const e=r.get("autosave");if(e===null||e==="")return;const o=parseInt(e,10);if(!Number.isNaN(o))return o}const ke=n.memo(({repo:r})=>{const[e]=B(),o=e.get("path")??"/",i=e.get("editing")==="true";let l=Re(e);const[a,d]=n.useState(o),u=n.useRef(),[s,c]=n.useState(0);return o!==a&&(d(o),o!==u.current&&c(m=>m+1),u.current=void 0),t.jsx(Se,{repo:r,path:o,isEditing:i,autosaveIntervalMs:l,expectedNewPath:u},s)}),Je=n.memo(()=>{const e=z().repoId;return e===void 0?null:t.jsx(te,{repoId:e,component:ke})});export{Je as RepoFilesDetailsPage};

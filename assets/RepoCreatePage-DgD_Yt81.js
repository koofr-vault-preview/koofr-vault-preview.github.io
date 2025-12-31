import{r as i,u as g,j as e,a as y}from"./DynamicThemeProvider-MqskYVZg.js";import{M as V,b as H,c as q,d as A,e as K,f as G,g as I,h as C,a as k,i as v,T as j,u as O}from"./mainWebAuthenticated-DLAW-ALe.js";import{D as U}from"./DashboardLayout-BNZW30IV.js";import{N as W,u as Y}from"./DashboardNavbar-CRMyAqAb.js";import{u as _}from"./useDocumentTitle-D3L4F_h2.js";import{u as J,c as o,a as b}from"./emotion-css.esm-D9bkNW-b.js";import{B as p,b as Q,s as w}from"./Button-D3442RQe.js";import{R as X}from"./RepoConfigInfo-CQSjbBW8.js";import{P as Z}from"./PasswordInput-BafEWR_3.js";import{D as ee}from"./DirPicker-DCcp9uAn.js";import"./NavbarSticky-ClW7pS7A.js";import"./index-DdzVGsMq.js";import"./GitRevision-CA14zXzz.js";import"./Navbar-D-Wj6WD0.js";import"./range-C_F9C9Kt.js";const N=i.memo(({created:a})=>{const r=g(),s=J(),[n,t]=i.useState(!1),l=i.useCallback(()=>{a!==void 0&&s(`/repos/${a.repoId}`)},[s,a]);return e.jsxs("div",{children:[e.jsx("h1",{className:o`
            font-size: 28px;
            font-weight: normal;
            margin: 0 0 20px;
          `,children:"Your Safe Box has been created."}),e.jsx("p",{className:o`
            margin: 0 0 20px;
          `,children:"Before you start using your Safe Box please safely store the configuration."}),e.jsx("div",{className:o`
            border-bottom: 1px solid ${r.colors.border};
            margin-bottom: 25px;
          `}),e.jsx("div",{className:o`
            margin-bottom: 25px;
          `,onMouseDown:()=>t(!0),children:e.jsx(X,{config:a.config})}),e.jsx("div",{className:o`
            border-bottom: 1px solid ${r.colors.border};
            margin-bottom: 25px;
          `}),e.jsx(p,{type:"button",variant:n?"primary":"disabled",disabled:!n,onClick:l,children:"Continue"})]})});N.displayName="RepoCreateCreatedComponent";const S=i.memo(({breadcrumbs:a})=>{const r=i.useMemo(()=>a.map((s,n)=>({id:s.id,name:s.name,isClickable:!1,hasCaret:!1,isLast:n===a.length-1})),[a]);return e.jsx(W,{breadcrumbs:r})});S.displayName="RemoteFilesBreadcrumbs";const D=i.memo(({dirPickerId:a,onClick:r,canSelect:s,select:n,cancel:t,createDirEnabled:l,createDir:d})=>{const m=y(),x=g();return e.jsxs(e.Fragment,{children:[e.jsx(H,{children:e.jsx(q,{children:"Select a folder"})}),e.jsx(A,{className:o`
            padding-bottom: 0;
            overflow: hidden;
          `,children:e.jsx("div",{className:b(o`
                border: 1px solid ${x.colors.borderDarker};
                border-radius: 3px;
                overflow-y: scroll;
                overflow-x: hidden;
              `,m?o`
                    flex-grow: 1;
                  `:o`
                    height: 300px;
                  `),children:e.jsx(ee,{pickerId:a,onClick:r})})}),e.jsxs(K,{children:[e.jsx(G,{children:e.jsx(p,{type:"button",disabled:!l,onClick:d,children:"Create folder"})}),e.jsxs(I,{children:[e.jsx(C,{type:"button",onClick:t,children:"Cancel"}),e.jsx(C,{type:"button",variant:s?"primary":"disabled",disabled:!s,onClick:n,children:"Select"})]})]})]})});D.displayName="RemoteFilesDirPickerModalContent";const R=i.memo(({dirPickerId:a,onClick:r,canSelect:s,select:n,cancel:t,createDirEnabled:l,createDir:d})=>e.jsx(V,{show:a!==void 0,onHide:t,children:a!==void 0?e.jsx(D,{dirPickerId:a,onClick:r,canSelect:s,select:n,cancel:t,createDirEnabled:l,createDir:d}):e.jsx(e.Fragment,{})}));R.displayName="RemoteFilesDirPickerModal";const u=w.label`
  display: inline-block;
  display: inline-block;
  font-weight: 600;
  font-size: 13px;
  margin-bottom: 2px;
`,h=w.div`
  margin-bottom: 10px;
`,oe=`Format:

[name]
type=crypt
remote=rcloneremote:/path
password=obscured password
password2=obscured salt`,F=i.memo(({createId:a,form:r})=>{const s=y(),n=g(),t=k(),[l,d]=i.useState(!1),[m,x]=i.useState(""),M=i.useCallback((c,T,$)=>t.repoCreateLocationDirPickerClick(a,T,$),[t,a]),B=i.useCallback(()=>{t.repoCreateLocationDirPickerSelect(a)},[t,a]),L=i.useCallback(()=>{t.repoCreateLocationDirPickerCancel(a)},[t,a]),z=i.useCallback(()=>{t.repoCreateLocationDirPickerCreateDir(a)},[t,a]),E=i.useCallback(c=>{c.preventDefault(),t.repoCreateCreateRepo(a)},[t,a]),f=r.canCreate&&r.createRepoStatus.type!=="Loading";return r.createLoadStatus.type==="Initial"||r.createLoadStatus.type==="Loading"?e.jsx(v,{}):e.jsxs("div",{className:s?o`
              padding: 0 15px;
            `:void 0,children:[e.jsx("h1",{className:o`
          font-size: 32px;
          font-weight: normal;
          margin: 0 0 20px;
        `,children:"Create a new Safe Box"}),e.jsx("form",{onSubmit:E,children:e.jsxs("div",{className:b(o`
              display: flex;
            `,s?o`
                  flex-direction: column;
                `:o`
                  flex-direction: row;
                `),children:[e.jsxs("div",{className:b(o`
                flex-shrink: 0;
              `,s?o`
                    width: 100%;
                  `:o`
                    width: 370px;
                    margin-right: 70px;
                  `),children:[r.createRepoStatus.type==="Error"?e.jsx("div",{className:o`
                  background-color: #fbedeb;
                  padding: 6px 15px;
                  border-radius: 3px;
                  margin-bottom: 15px;
                `,children:r.createRepoStatus.error}):null,e.jsxs(h,{children:[e.jsx(u,{children:"Location"}),e.jsx("button",{type:"button",className:o`
                  ${Q}
                  text-align: left;
                  border: 1px solid ${n.colors.borderDark};
                  border-radius: 3px;
                  display: inline-block;
                  padding: 9px 10px 8px;
                  font-size: 14px;
                  width: 100%;
                  cursor: pointer;

                  &:focus {
                    border-color: ${n.colors.primary};
                  }
                `,onClick:()=>{t.repoCreateLocationDirPickerShow(a)},children:r.locationBreadcrumbs.length>0?e.jsx(S,{breadcrumbs:r.locationBreadcrumbs}):e.jsx("span",{children:"Select a folder"})})]}),e.jsxs(h,{children:[e.jsx(u,{htmlFor:"password",className:o`
                  margin-bottom: 5px;
                  display: inline-block;
                `,children:"Safe Key"}),e.jsx(Z,{value:r.password,placeholder:"Must be at least 8 characters long",onChange:c=>t.repoCreateSetPassword(a,c),inputClassName:o`
                  display: block;
                  width: 100%;
                  font-size: 14px;
                `,inputId:"password"})]}),l?e.jsxs(h,{children:[e.jsx(u,{htmlFor:"salt",className:o`
                    margin-bottom: 5px;
                    display: inline-block;
                  `,children:"Salt"}),e.jsx(j,{as:"textarea",id:"salt",value:r.salt??"",className:o`
                    display: block;
                    width: 100%;
                    height: 180px;
                    margin-bottom: 10px;
                  `,onChange:c=>t.repoCreateSetSalt(a,c.currentTarget.value.length>0?c.currentTarget.value.trim():void 0)}),e.jsxs("div",{className:o`
                    background-color: #d1ecf1;
                    border-radius: 3px;
                    padding: 12px 15px;
                    font-size: 13px;
                    margin-bottom: 15px;
                  `,children:[e.jsx("p",{className:o`
                      margin: 0 0 15px;
                    `,children:"Salt is used in the key derivation process to create a unique encryption key and helps to protect against potential attacks. It will be stored on the Koofr servers in a secure manner."}),e.jsx("p",{className:o`
                      margin: 0 0 15px;
                    `,children:"A random Salt has been generated for you. If you prefer, you can leave the Salt field empty, and the default salt will be used (same as in rclone). However, it is recommended to use a unique salt for enhanced security. Using a unique salt helps to increase the complexity of the encryption process, making it more difficult for potential attackers to access the encrypted data."}),e.jsx("p",{className:o`
                      margin: 0;
                    `,children:"If you wish to transfer the encrypted files to another service, it is necessary to also export the salt, otherwise you won't be able to decrypt your files."})]})]}):null,e.jsx("div",{className:o`
                margin: 15px 0 25px;
              `,children:e.jsx(p,{type:"submit",variant:f?"primary":"disabled",disabled:!f,children:"Create"})}),l?null:e.jsx("div",{children:e.jsx(p,{type:"button",variant:"primary-inline",className:o`
                    padding: 0;
                  `,onClick:()=>d(!0),children:"Show advanced settings"})})]}),l?e.jsxs("div",{className:s?o`
                      width: 100%;
                    `:o`
                      width: 400px;
                    `,children:[e.jsx("h3",{className:o`
                  font-size: 28px;
                  font-weight: normal;
                  margin: 23px 0 20px;
                `,children:"From rclone config"}),e.jsx("pre",{className:o`
                  background-color: #f8f8f8;
                  color: ${n.colors.textLight};
                  border-radius: 3px;
                  font-size: 13px;
                  padding: 6px 15px;
                `,children:e.jsx("code",{children:oe})}),r.fillFromRcloneConfigError!==void 0?e.jsx("div",{className:o`
                    background-color: #fbedeb;
                    padding: 6px 15px;
                    border-radius: 3px;
                    margin-bottom: 15px;
                  `,children:r.fillFromRcloneConfigError}):null,e.jsx("div",{className:o`
                  margin-bottom: 15px;
                `,children:e.jsx(j,{as:"textarea",value:m,className:o`
                    display: block;
                    width: 100%;
                    height: 250px;
                    font-size: 13px;
                  `,onChange:c=>x(c.currentTarget.value)})}),e.jsx(p,{type:"button",variant:"primary",onClick:()=>{t.repoCreateFillFromRcloneConfig(a,m)},children:"Fill"})]}):null]})}),e.jsx(R,{dirPickerId:r.locationDirPickerId,onClick:M,canSelect:r.locationDirPickerCanSelect,select:B,cancel:L,createDirEnabled:r.locationDirPickerCreateDirEnabled,createDir:z})]})});F.displayName="RepoCreateFormComponent";const P=i.memo(()=>{const a=k(),r=i.useMemo(()=>a.repoCreateCreate(),[a]),[s]=O((t,l)=>t.repoCreateInfoSubscribe(r,l),t=>t.repoCreateInfoData,[]);i.useEffect(()=>()=>{a.repoCreateDestroy(r)},[a,r]);const n=Y("Create a new Safe Box");return _("Create a new Safe Box"),e.jsx(U,{navbarHeader:n,children:s?.type==="Form"?e.jsx(F,{createId:r,form:s}):s?.type==="Created"?e.jsx(N,{created:s}):e.jsx(v,{})})});P.displayName="RepoCreate";const ae=i.memo(()=>e.jsx(P,{}));ae.displayName="RepoCreatePage";export{ae as RepoCreatePage};

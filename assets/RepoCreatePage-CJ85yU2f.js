import{r as i,u as g,j as e,a as y}from"./DynamicThemeProvider-CxehgrR0.js";import{M as B,b as L,c as z,d as E,e as T,f as $,g as C,h as V,a as k,i as v,T as j,u as H}from"./mainWebAuthenticated-BUokeWIF.js";import{D as q}from"./DashboardLayout-y1QZPwdG.js";import{N as A,u as K}from"./DashboardNavbar-Chjsjb8Z.js";import{u as G}from"./useDocumentTitle-D3L4F_h2.js";import{u as I,c as o,a as b}from"./emotion-css.esm-CiHGz3gB.js";import{B as p,n as w,b as O}from"./Button-Dt6jELX4.js";import{R as U}from"./RepoConfigInfo-Btv7GF_R.js";import{P as W}from"./PasswordInput-DMAEQf6X.js";import{D as Y}from"./DirPicker-CE3LZDyR.js";import"./NavbarSticky-DuO2swp8.js";import"./index-Bd7ycyX3.js";import"./GitRevision-Rqm_P8y6.js";import"./Navbar-D0t0rxK0.js";import"./range-CCYNKz74.js";const _=i.memo(({created:a})=>{const r=g(),s=I(),[n,t]=i.useState(!1),l=i.useCallback(()=>{a!==void 0&&s(`/repos/${a.repoId}`)},[s,a]);return e.jsxs("div",{children:[e.jsx("h1",{className:o`
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
          `,onMouseDown:()=>t(!0),children:e.jsx(U,{config:a.config})}),e.jsx("div",{className:o`
            border-bottom: 1px solid ${r.colors.border};
            margin-bottom: 25px;
          `}),e.jsx(p,{type:"button",variant:n?"primary":"disabled",disabled:!n,onClick:l,children:"Continue"})]})}),J=i.memo(({breadcrumbs:a})=>{const r=i.useMemo(()=>a.map((s,n)=>({id:s.id,name:s.name,isClickable:!1,hasCaret:!1,isLast:n===a.length-1})),[a]);return e.jsx(A,{breadcrumbs:r})}),Q=i.memo(({dirPickerId:a,onClick:r,canSelect:s,select:n,cancel:t,createDirEnabled:l,createDir:d})=>{const m=y(),x=g();return e.jsxs(e.Fragment,{children:[e.jsx(B,{children:e.jsx(L,{children:"Select a folder"})}),e.jsx(z,{className:o`
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
                  `),children:e.jsx(Y,{pickerId:a,onClick:r})})}),e.jsxs(E,{children:[e.jsx(T,{children:e.jsx(p,{type:"button",disabled:!l,onClick:d,children:"Create folder"})}),e.jsxs($,{children:[e.jsx(C,{type:"button",onClick:t,children:"Cancel"}),e.jsx(C,{type:"button",variant:s?"primary":"disabled",disabled:!s,onClick:n,children:"Select"})]})]})]})}),X=i.memo(({dirPickerId:a,onClick:r,canSelect:s,select:n,cancel:t,createDirEnabled:l,createDir:d})=>e.jsx(V,{show:a!==void 0,onHide:t,children:a!==void 0?e.jsx(Q,{dirPickerId:a,onClick:r,canSelect:s,select:n,cancel:t,createDirEnabled:l,createDir:d}):e.jsx(e.Fragment,{})})),u=w.label`
  display: inline-block;
  display: inline-block;
  font-weight: 600;
  font-size: 13px;
  margin-bottom: 2px;
`,h=w.div`
  margin-bottom: 10px;
`,Z=`Format:

[name]
type=crypt
remote=rcloneremote:/path
password=obscured password
password2=obscured salt`,ee=i.memo(({createId:a,form:r})=>{const s=y(),n=g(),t=k(),[l,d]=i.useState(!1),[m,x]=i.useState(""),S=i.useCallback((c,M,P)=>t.repoCreateLocationDirPickerClick(a,M,P),[t,a]),N=i.useCallback(()=>{t.repoCreateLocationDirPickerSelect(a)},[t,a]),D=i.useCallback(()=>{t.repoCreateLocationDirPickerCancel(a)},[t,a]),F=i.useCallback(()=>{t.repoCreateLocationDirPickerCreateDir(a)},[t,a]),R=i.useCallback(c=>{c.preventDefault(),t.repoCreateCreateRepo(a)},[t,a]),f=r.canCreate&&r.createRepoStatus.type!=="Loading";return r.createLoadStatus.type==="Initial"||r.createLoadStatus.type==="Loading"?e.jsx(v,{}):e.jsxs("div",{className:s?o`
              padding: 0 15px;
            `:void 0,children:[e.jsx("h1",{className:o`
          font-size: 32px;
          font-weight: normal;
          margin: 0 0 20px;
        `,children:"Create a new Safe Box"}),e.jsx("form",{onSubmit:R,children:e.jsxs("div",{className:b(o`
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
                  ${O}
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
                `,onClick:()=>{t.repoCreateLocationDirPickerShow(a)},children:r.locationBreadcrumbs.length>0?e.jsx(J,{breadcrumbs:r.locationBreadcrumbs}):e.jsx("span",{children:"Select a folder"})})]}),e.jsxs(h,{children:[e.jsx(u,{htmlFor:"password",className:o`
                  margin-bottom: 5px;
                  display: inline-block;
                `,children:"Safe Key"}),e.jsx(W,{value:r.password,placeholder:"Must be at least 8 characters long",onChange:c=>t.repoCreateSetPassword(a,c),inputClassName:o`
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
                `,children:e.jsx("code",{children:Z})}),r.fillFromRcloneConfigError!==void 0?e.jsx("div",{className:o`
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
                  `,onChange:c=>x(c.currentTarget.value)})}),e.jsx(p,{type:"button",variant:"primary",onClick:()=>{t.repoCreateFillFromRcloneConfig(a,m)},children:"Fill"})]}):null]})}),e.jsx(X,{dirPickerId:r.locationDirPickerId,onClick:S,canSelect:r.locationDirPickerCanSelect,select:N,cancel:D,createDirEnabled:r.locationDirPickerCreateDirEnabled,createDir:F})]})}),oe=i.memo(()=>{const a=k(),r=i.useMemo(()=>a.repoCreateCreate(),[a]),[s]=H((t,l)=>t.repoCreateInfoSubscribe(r,l),t=>t.repoCreateInfoData,[]);i.useEffect(()=>()=>{a.repoCreateDestroy(r)},[a,r]);const n=K("Create a new Safe Box");return G("Create a new Safe Box"),e.jsx(q,{navbarHeader:n,children:(s==null?void 0:s.type)==="Form"?e.jsx(ee,{createId:r,form:s}):(s==null?void 0:s.type)==="Created"?e.jsx(_,{created:s}):e.jsx(v,{})})}),ge=i.memo(()=>e.jsx(oe,{}));export{ge as RepoCreatePage};

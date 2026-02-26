import{r as s,a as g,j as e,b as w,u as k}from"./DynamicThemeProvider-4BQuZolX.js";import{M as K,b as q,c as I,d as A,e as G,f as O,g as U,h as C,a as v,i as S,T as y,u as W}from"./mainWebAuthenticated-hdCLwcmo.js";import{D as Y}from"./DashboardLayout-DWFaO-ku.js";import{N as J,u as Q}from"./DashboardNavbar-B5wD590E.js";import{u as X}from"./useDocumentTitle-D3L4F_h2.js";import{u as Z,M as l,c as t,a as h}from"./emotion-css.esm-9QbHV8nv.js";import{B as x,h as ee,s as M}from"./Button-CJ4fGdXT.js";import{R as te}from"./RepoConfigInfo-C7BxAvx8.js";import{P as oe}from"./PasswordInput-CrenjYQT.js";import{D as ae}from"./DirPicker-mEuo7Pul.js";import"./NavbarSticky-CvwZKpMB.js";import"./index-Bwqyi5tP.js";import"./LanguagePickerDropdown-CNnY3O1A.js";import"./useMenuUpdate-DaK7Jj7t.js";import"./Navbar-DmkHxDZO.js";import"./range-C8iCH3h6.js";const N=s.memo(({created:o})=>{const a=g(),i=Z(),[n,c]=s.useState(!1),r=s.useCallback(()=>{o!==void 0&&i(`/repos/${o.repoId}`)},[i,o]);return e.jsxs("div",{children:[e.jsx("h1",{className:t`
            font-size: 28px;
            font-weight: normal;
            margin: 0 0 20px;
          `,children:e.jsx(l,{id:"web.repo_create.created.title",description:"Success headline shown after a Safe Box is created.",defaultMessage:"Your Safe Box has been created"})}),e.jsx("p",{className:t`
            margin: 0 0 20px;
          `,children:e.jsx(l,{id:"web.repo_create.created.description",description:"Instruction text prompting users to save the Safe Box configuration before continuing.",defaultMessage:"Before you start using your Safe Box please safely store the configuration."})}),e.jsx("div",{className:t`
            border-bottom: 1px solid ${a.colors.border};
            margin-bottom: 25px;
          `}),e.jsx("div",{className:t`
            margin-bottom: 25px;
          `,onMouseDown:()=>c(!0),children:e.jsx(te,{config:o.config})}),e.jsx("div",{className:t`
            border-bottom: 1px solid ${a.colors.border};
            margin-bottom: 25px;
          `}),e.jsx(x,{type:"button",variant:n?"primary":"disabled",disabled:!n,onClick:r,children:e.jsx(l,{id:"web.repo_create.created.continue.button",description:"Button label on the create-success screen to continue to the Safe Box.",defaultMessage:"Continue"})})]})});N.displayName="RepoCreateCreatedComponent";const _=s.memo(({breadcrumbs:o})=>{const a=s.useMemo(()=>o.map((i,n)=>({id:i.id,name:i.name,isClickable:!1,hasCaret:!1,isLast:n===o.length-1})),[o]);return e.jsx(J,{breadcrumbs:a})});_.displayName="RemoteFilesBreadcrumbs";const B=s.memo(({dirPickerId:o,onClick:a,canSelect:i,select:n,cancel:c,createDirEnabled:r,createDir:d})=>{const u=w(),m=g();return e.jsxs(e.Fragment,{children:[e.jsx(q,{children:e.jsx(I,{children:e.jsx(l,{id:"web.remote_files_dir_picker.title",description:"Modal title for choosing a destination folder in remote files.",defaultMessage:"Select a folder"})})}),e.jsx(A,{className:t`
            padding-bottom: 0;
            overflow: hidden;
          `,children:e.jsx("div",{className:h(t`
                border: 1px solid ${m.colors.borderDarker};
                border-radius: 3px;
                overflow-y: scroll;
                overflow-x: hidden;
              `,u?t`
                    flex-grow: 1;
                  `:t`
                    height: 300px;
                  `),children:e.jsx(ae,{pickerId:o,onClick:a})})}),e.jsxs(G,{children:[e.jsx(O,{children:e.jsx(x,{type:"button",disabled:!r,onClick:d,children:e.jsx(l,{id:"web.remote_files_dir_picker.create_folder.button",description:"Button label to create a new folder in the remote folder picker.",defaultMessage:"Create folder"})})}),e.jsxs(U,{children:[e.jsx(C,{type:"button",onClick:c,children:e.jsx(l,{id:"web.remote_files_dir_picker.cancel.button",description:"Cancel button in the remote folder picker modal.",defaultMessage:"Cancel"})}),e.jsx(C,{type:"button",variant:i?"primary":"disabled",disabled:!i,onClick:n,children:e.jsx(l,{id:"web.remote_files_dir_picker.select.button",description:"Confirm button in the remote folder picker modal.",defaultMessage:"Select"})})]})]})]})});B.displayName="RemoteFilesDirPickerModalContent";const D=s.memo(({dirPickerId:o,onClick:a,canSelect:i,select:n,cancel:c,createDirEnabled:r,createDir:d})=>e.jsx(K,{show:o!==void 0,onHide:c,children:o!==void 0?e.jsx(B,{dirPickerId:o,onClick:a,canSelect:i,select:n,cancel:c,createDirEnabled:r,createDir:d}):e.jsx(e.Fragment,{})}));D.displayName="RemoteFilesDirPickerModal";const f=M.label`
  display: inline-block;
  display: inline-block;
  font-weight: 600;
  font-size: 13px;
  margin-bottom: 2px;
`,b=M.div`
  margin-bottom: 10px;
`,re=`[name]
type=crypt
remote=rcloneremote:/path
password=obscured password
password2=obscured salt`,R=s.memo(({createId:o,form:a})=>{const i=k(),n=w(),c=g(),r=v(),[d,u]=s.useState(!1),[m,P]=s.useState(""),L=s.useCallback((p,V,H)=>r.repoCreateLocationDirPickerClick(o,V,H),[r,o]),T=s.useCallback(()=>{r.repoCreateLocationDirPickerSelect(o)},[r,o]),z=s.useCallback(()=>{r.repoCreateLocationDirPickerCancel(o)},[r,o]),E=s.useCallback(()=>{r.repoCreateLocationDirPickerCreateDir(o)},[r,o]),$=s.useCallback(p=>{p.preventDefault(),r.repoCreateCreateRepo(o)},[r,o]),j=a.canCreate&&a.createRepoStatus.type!=="Loading";return a.createLoadStatus.type==="Initial"||a.createLoadStatus.type==="Loading"?e.jsx(S,{}):e.jsxs("div",{className:n?t`
              padding: 0 15px;
            `:void 0,children:[e.jsx("h1",{className:t`
          font-size: 32px;
          font-weight: normal;
          margin: 0 0 20px;
        `,children:e.jsx(l,{id:"web.repo_create.title",description:"Title for the Safe Box creation page.",defaultMessage:"Create a new Safe Box"})}),e.jsx("form",{onSubmit:$,children:e.jsxs("div",{className:h(t`
              display: flex;
            `,n?t`
                  flex-direction: column;
                `:t`
                  flex-direction: row;
                `),children:[e.jsxs("div",{className:h(t`
                flex-shrink: 0;
              `,n?t`
                    width: 100%;
                  `:t`
                    width: 370px;
                    margin-right: 70px;
                  `),children:[a.createRepoStatus.type==="Error"?e.jsx("div",{className:t`
                  background-color: #fbedeb;
                  padding: 6px 15px;
                  border-radius: 3px;
                  margin-bottom: 15px;
                `,children:a.createRepoStatus.error}):null,e.jsxs(b,{children:[e.jsx(f,{children:e.jsx(l,{id:"web.repo_create.form.location.label",description:"Label for the storage location field in the Safe Box creation form.",defaultMessage:"Location"})}),e.jsx("button",{type:"button",className:t`
                  ${ee}
                  text-align: left;
                  border: 1px solid ${c.colors.borderDark};
                  border-radius: 3px;
                  display: inline-block;
                  padding: 9px 10px 8px;
                  font-size: 14px;
                  width: 100%;
                  cursor: pointer;

                  &:focus {
                    border-color: ${c.colors.primary};
                  }
                `,onClick:()=>{r.repoCreateLocationDirPickerShow(o)},children:a.locationBreadcrumbs.length>0?e.jsx(_,{breadcrumbs:a.locationBreadcrumbs}):e.jsx("span",{children:e.jsx(l,{id:"web.repo_create.form.location.select_folder.button",description:"Placeholder text prompting the user to choose a storage folder.",defaultMessage:"Select a folder"})})})]}),e.jsxs(b,{children:[e.jsx(f,{htmlFor:"password",className:t`
                  margin-bottom: 5px;
                  display: inline-block;
                `,children:e.jsx(l,{id:"web.repo_create.form.password.label",description:"Label for the Safe Key input in the Safe Box creation form.",defaultMessage:"Safe Key"})}),e.jsx(oe,{value:a.password,placeholder:i.formatMessage({id:"web.repo_create.form.password.placeholder",description:"Placeholder text describing the minimum Safe Key length.",defaultMessage:"Must be at least 8 characters long"}),onChange:p=>r.repoCreateSetPassword(o,p),inputClassName:t`
                  display: block;
                  width: 100%;
                  font-size: 14px;
                `,inputId:"password"})]}),d?e.jsxs(b,{children:[e.jsx(f,{htmlFor:"salt",className:t`
                    margin-bottom: 5px;
                    display: inline-block;
                  `,children:e.jsx(l,{id:"web.repo_create.form.salt.label",description:"Label for the optional salt field in advanced Safe Box settings.",defaultMessage:"Salt"})}),e.jsx(y,{as:"textarea",id:"salt",value:a.salt??"",className:t`
                    display: block;
                    width: 100%;
                    height: 180px;
                    margin-bottom: 10px;
                  `,onChange:p=>r.repoCreateSetSalt(o,p.currentTarget.value.length>0?p.currentTarget.value.trim():void 0)}),e.jsx("div",{className:t`
                    background-color: #d1ecf1;
                    border-radius: 3px;
                    padding: 8px 15px;
                    font-size: 13px;
                    margin-bottom: 15px;
                    display: flex;
                    flex-direction: column;
                  `,children:e.jsx(l,{id:"web.repo_create.form.salt.description",description:"Text explaining what a salt is in Safe Box creation.",defaultMessage:"<p>Salt is used in the key derivation process to create a unique encryption key and helps to protect against potential attacks. It will be stored on the Koofr servers in a secure manner.</p><p>A random Salt has been generated for you. If you prefer, you can leave the Salt field empty, and the default salt will be used (same as in rclone). However, it is recommended to use a unique salt for enhanced security. Using a unique salt helps to increase the complexity of the encryption process, making it more difficult for potential attackers to access the encrypted data.</p><p>If you wish to transfer the encrypted files to another service, it is necessary to also export the salt, otherwise you won't be able to decrypt your files.</p>",values:{p:p=>e.jsx("p",{className:t`
                            margin: 7px 0;
                          `,children:p})}})})]}):null,e.jsx("div",{className:t`
                margin: 15px 0 25px;
              `,children:e.jsx(x,{type:"submit",variant:j?"primary":"disabled",disabled:!j,children:e.jsx(l,{id:"web.repo_create.form.create.button",description:"Primary button to create a new Safe Box.",defaultMessage:"Create"})})}),d?null:e.jsx("div",{children:e.jsx(x,{type:"button",variant:"primary-inline",className:t`
                    padding: 0;
                  `,onClick:()=>u(!0),children:e.jsx(l,{id:"web.repo_create.form.show_advanced_settings.button",description:"Button label that reveals advanced settings in the Safe Box creation form.",defaultMessage:"Show advanced settings"})})})]}),d?e.jsxs("div",{className:n?t`
                      width: 100%;
                    `:t`
                      width: 400px;
                    `,children:[e.jsx("h3",{className:t`
                  font-size: 28px;
                  font-weight: normal;
                  margin: 23px 0 20px;
                `,children:e.jsx(l,{id:"web.repo_create.form.rclone_config.title",description:"Section title for importing settings from an rclone config.",defaultMessage:"From rclone config"})}),e.jsx("pre",{className:t`
                  background-color: #f8f8f8;
                  color: ${c.colors.textLight};
                  border-radius: 3px;
                  font-size: 13px;
                  padding: 6px 15px;
                `,children:e.jsx("code",{children:i.formatMessage({id:"web.repo_create.form.rclone_config.format.label",description:"Label shown above the rclone config format example.",defaultMessage:"Format:"})+`

`+re})}),a.fillFromRcloneConfigError!==void 0?e.jsx("div",{className:t`
                    background-color: #fbedeb;
                    padding: 6px 15px;
                    border-radius: 3px;
                    margin-bottom: 15px;
                  `,children:a.fillFromRcloneConfigError}):null,e.jsx("div",{className:t`
                  margin-bottom: 15px;
                `,children:e.jsx(y,{as:"textarea",value:m,className:t`
                    display: block;
                    width: 100%;
                    height: 250px;
                    font-size: 13px;
                  `,onChange:p=>P(p.currentTarget.value)})}),e.jsx(x,{type:"button",variant:m.trim().length===0?"disabled":"primary",onClick:()=>{r.repoCreateFillFromRcloneConfig(o,m)},disabled:m.trim().length===0,children:e.jsx(l,{id:"web.repo_create.form.rclone_config.fill.button",description:"Button label to parse the rclone config and fill the form.",defaultMessage:"Fill"})})]}):null]})}),e.jsx(D,{dirPickerId:a.locationDirPickerId,onClick:L,canSelect:a.locationDirPickerCanSelect,select:T,cancel:z,createDirEnabled:a.locationDirPickerCreateDirEnabled,createDir:E})]})});R.displayName="RepoCreateFormComponent";const F=s.memo(()=>{const o=k(),a=v(),i=s.useMemo(()=>a.repoCreateCreate(),[a]),[n]=W((d,u)=>d.repoCreateInfoSubscribe(i,u),d=>d.repoCreateInfoData,[]);s.useEffect(()=>()=>{a.repoCreateDestroy(i)},[a,i]);const c=o.formatMessage({id:"web.repo_create.title",description:"Title for the Safe Box creation page.",defaultMessage:"Create a new Safe Box"}),r=Q(c);return X(c),e.jsx(Y,{navbarHeader:r,children:n?.type==="Form"?e.jsx(R,{createId:i,form:n}):n?.type==="Created"?e.jsx(N,{created:n}):e.jsx(S,{})})});F.displayName="RepoCreate";const se=s.memo(()=>e.jsx(F,{}));se.displayName="RepoCreatePage";export{se as RepoCreatePage};

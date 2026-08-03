import{r as e}from"./chunk-DECur_0Z.js";import{o as t}from"./emotion-react.browser.esm-B6XXdZtW.js";import{n,t as r}from"./emotion-css.esm-Qs1dyEi9.js";import{n as i,t as a}from"./jsx-runtime-BA9giqqw.js";import"./injectIntl-DcBbzoym.js";import{t as o}from"./useIntl-uVUnHosr.js";import{s,u as c}from"./chunk-LFPYN7LY-B2CZzQGY.js";import{t as l}from"./LoadingCircle-CpCWIKmp.js";import{i as u,s as d}from"./Button-CQrJ5P7o.js";import"./range-BV9ivzFC.js";import{a as f,c as p,d as m,n as h,o as g,s as _,t as v,u as y}from"./Modal-Da-uY4z-.js";import"./react-dom-D7VaEYON.js";import{r as b}from"./Button-BJg7TgNL.js";import"./useClickOutside-DDfmGtM1.js";import{n as x}from"./useIsMobile-Dv4RoKy5.js";import{t as S}from"./useWebVault-BDONIKNF.js";import"./DocumentScroll-BSm_K0jh.js";import"./FileIcon-Qu8Xuhdn.js";import"./NavbarSticky-OZG2b-qJ.js";import{t as C}from"./useSubscribe-Dq--lJhj.js";import{t as w}from"./TextInput-DCPMUd7R.js";import"./IntlLocalesContext-CX3kKNf2.js";import"./Navbar-Dr_M6bzl.js";import{t as T}from"./useDocumentTitle--9KSRPbr.js";import{a as E,i as D}from"./DashboardNavbar-DDEd6y8U.js";import"./useMenuUpdate-uUH7xBSR.js";import{t as O}from"./DashboardLayout-TRfoQNvg.js";import"./GitRevision-9vDDMbQy.js";import{t as k}from"./RepoConfigInfo-2FJ-Jl3B.js";import{n as A}from"./PasswordInput-Ctoorx5m.js";import{t as j}from"./DirPicker-B14wX_zS.js";var M=e(i(),1),N=a(),P=(0,M.memo)(({created:e})=>{let n=t(),i=s(),[a,o]=(0,M.useState)(!1),l=(0,M.useCallback)(()=>{e!==void 0&&i(`/repos/${e.repoId}`)},[i,e]);return(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h1`,{className:r`
            font-size: 28px;
            font-weight: normal;
            margin: 0 0 20px;
          `,children:(0,N.jsx)(c,{id:`web.repo_create.created.title`,description:`Success headline shown after a Safe Box is created.`,defaultMessage:`Your Safe Box has been created`})}),(0,N.jsx)(`p`,{className:r`
            margin: 0 0 20px;
          `,children:(0,N.jsx)(c,{id:`web.repo_create.created.description`,description:`Instruction text prompting users to save the Safe Box configuration before continuing.`,defaultMessage:`Before you start using your Safe Box please safely store the configuration.`})}),(0,N.jsx)(`div`,{className:r`
            border-bottom: 1px solid ${n.colors.border};
            margin-bottom: 25px;
          `}),(0,N.jsx)(`div`,{className:r`
            margin-bottom: 25px;
          `,onMouseDown:()=>o(!0),children:(0,N.jsx)(k,{config:e.config})}),(0,N.jsx)(`div`,{className:r`
            border-bottom: 1px solid ${n.colors.border};
            margin-bottom: 25px;
          `}),(0,N.jsx)(b,{type:`button`,variant:a?`primary`:`disabled`,disabled:!a,onClick:l,children:(0,N.jsx)(c,{id:`web.repo_create.created.continue.button`,description:`Button label on the create-success screen to continue to the Safe Box.`,defaultMessage:`Continue`})})]})});P.displayName=`RepoCreateCreatedComponent`;var F=(0,M.memo)(({breadcrumbs:e})=>(0,N.jsx)(E,{breadcrumbs:(0,M.useMemo)(()=>e.map((t,n)=>({id:t.id,name:t.name,isClickable:!1,hasCaret:!1,isLast:n===e.length-1})),[e])}));F.displayName=`RemoteFilesBreadcrumbs`;var I=(0,M.memo)(({dirPickerId:e,onClick:i,canSelect:a,select:o,cancel:s,createDirEnabled:l,createDir:u})=>{let d=x(),v=t();return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(y,{children:(0,N.jsx)(m,{children:(0,N.jsx)(c,{id:`web.remote_files_dir_picker.title`,description:`Modal title for choosing a destination folder in remote files.`,defaultMessage:`Select a folder`})})}),(0,N.jsx)(h,{className:r`
            padding-bottom: 0;
            overflow: hidden;
          `,children:(0,N.jsx)(`div`,{className:n(r`
                border: 1px solid ${v.colors.borderDarker};
                border-radius: 3px;
                overflow-y: scroll;
                overflow-x: hidden;
              `,d?r`
                    flex-grow: 1;
                  `:r`
                    height: 300px;
                  `),children:(0,N.jsx)(j,{pickerId:e,onClick:i})})}),(0,N.jsxs)(f,{children:[(0,N.jsx)(p,{children:(0,N.jsx)(b,{type:`button`,disabled:!l,onClick:u,children:(0,N.jsx)(c,{id:`web.remote_files_dir_picker.create_folder.button`,description:`Button label to create a new folder in the remote folder picker.`,defaultMessage:`Create folder`})})}),(0,N.jsxs)(_,{children:[(0,N.jsx)(g,{type:`button`,onClick:s,children:(0,N.jsx)(c,{id:`web.remote_files_dir_picker.cancel.button`,description:`Cancel button in the remote folder picker modal.`,defaultMessage:`Cancel`})}),(0,N.jsx)(g,{type:`button`,variant:a?`primary`:`disabled`,disabled:!a,onClick:o,children:(0,N.jsx)(c,{id:`web.remote_files_dir_picker.select.button`,description:`Confirm button in the remote folder picker modal.`,defaultMessage:`Select`})})]})]})]})});I.displayName=`RemoteFilesDirPickerModalContent`;var L=(0,M.memo)(({dirPickerId:e,onClick:t,canSelect:n,select:r,cancel:i,createDirEnabled:a,createDir:o})=>(0,N.jsx)(v,{show:e!==void 0,onHide:i,children:e===void 0?(0,N.jsx)(N.Fragment,{}):(0,N.jsx)(I,{dirPickerId:e,onClick:t,canSelect:n,select:r,cancel:i,createDirEnabled:a,createDir:o})}));L.displayName=`RemoteFilesDirPickerModal`;var R=d.label`
  display: inline-block;
  display: inline-block;
  font-weight: 600;
  font-size: 13px;
  margin-bottom: 2px;
`,z=d.div`
  margin-bottom: 10px;
`,B=`[name]
type=crypt
remote=rcloneremote:/path
password=obscured password
password2=obscured salt`,V=(0,M.memo)(({createId:e,form:i})=>{let a=o(),s=x(),d=t(),f=S(),[p,m]=(0,M.useState)(!1),[h,g]=(0,M.useState)(``),_=(0,M.useCallback)((t,n,r)=>f.repoCreateLocationDirPickerClick(e,n,r),[f,e]),v=(0,M.useCallback)(()=>{f.repoCreateLocationDirPickerSelect(e)},[f,e]),y=(0,M.useCallback)(()=>{f.repoCreateLocationDirPickerCancel(e)},[f,e]),C=(0,M.useCallback)(()=>{f.repoCreateLocationDirPickerCreateDir(e)},[f,e]),T=(0,M.useCallback)(t=>{t.preventDefault(),f.repoCreateCreateRepo(e)},[f,e]),E=i.canCreate&&i.createRepoStatus.type!==`Loading`;return i.createLoadStatus.type===`Initial`||i.createLoadStatus.type===`Loading`?(0,N.jsx)(l,{}):(0,N.jsxs)(`div`,{className:s?r`
              padding: 0 15px;
            `:void 0,children:[(0,N.jsx)(`h1`,{className:r`
          font-size: 32px;
          font-weight: normal;
          margin: 0 0 20px;
        `,children:(0,N.jsx)(c,{id:`web.repo_create.title`,description:`Title for the Safe Box creation page.`,defaultMessage:`Create a new Safe Box`})}),(0,N.jsx)(`form`,{onSubmit:T,children:(0,N.jsxs)(`div`,{className:n(r`
              display: flex;
            `,s?r`
                  flex-direction: column;
                `:r`
                  flex-direction: row;
                `),children:[(0,N.jsxs)(`div`,{className:n(r`
                flex-shrink: 0;
              `,s?r`
                    width: 100%;
                  `:r`
                    width: 370px;
                    margin-right: 70px;
                  `),children:[i.createRepoStatus.type===`Error`?(0,N.jsx)(`div`,{className:r`
                  background-color: #fbedeb;
                  padding: 6px 15px;
                  border-radius: 3px;
                  margin-bottom: 15px;
                `,children:i.createRepoStatus.error}):null,(0,N.jsxs)(z,{children:[(0,N.jsx)(R,{children:(0,N.jsx)(c,{id:`web.repo_create.form.location.label`,description:`Label for the storage location field in the Safe Box creation form.`,defaultMessage:`Location`})}),(0,N.jsx)(`button`,{type:`button`,className:r`
                  ${u}
                  text-align: left;
                  border: 1px solid ${d.colors.borderDark};
                  border-radius: 3px;
                  display: inline-block;
                  padding: 9px 10px 8px;
                  font-size: 14px;
                  width: 100%;
                  cursor: pointer;

                  &:focus {
                    border-color: ${d.colors.primary};
                  }
                `,onClick:()=>{f.repoCreateLocationDirPickerShow(e)},children:i.locationBreadcrumbs.length>0?(0,N.jsx)(F,{breadcrumbs:i.locationBreadcrumbs}):(0,N.jsx)(`span`,{children:(0,N.jsx)(c,{id:`web.repo_create.form.location.select_folder.button`,description:`Placeholder text prompting the user to choose a storage folder.`,defaultMessage:`Select a folder`})})})]}),(0,N.jsxs)(z,{children:[(0,N.jsx)(R,{htmlFor:`password`,className:r`
                  margin-bottom: 5px;
                  display: inline-block;
                `,children:(0,N.jsx)(c,{id:`web.repo_create.form.password.label`,description:`Label for the Safe Key input in the Safe Box creation form.`,defaultMessage:`Safe Key`})}),(0,N.jsx)(A,{value:i.password,placeholder:a.formatMessage({id:`web.repo_create.form.password.placeholder`,description:`Placeholder text describing the minimum Safe Key length.`,defaultMessage:`Must be at least 8 characters long`}),onChange:t=>f.repoCreateSetPassword(e,t),inputClassName:r`
                  display: block;
                  width: 100%;
                  font-size: 14px;
                `,inputId:`password`})]}),p?(0,N.jsxs)(z,{children:[(0,N.jsx)(R,{htmlFor:`salt`,className:r`
                    margin-bottom: 5px;
                    display: inline-block;
                  `,children:(0,N.jsx)(c,{id:`web.repo_create.form.salt.label`,description:`Label for the optional salt field in advanced Safe Box settings.`,defaultMessage:`Salt`})}),(0,N.jsx)(w,{as:`textarea`,id:`salt`,value:i.salt??``,className:r`
                    display: block;
                    width: 100%;
                    height: 180px;
                    margin-bottom: 10px;
                  `,onChange:t=>f.repoCreateSetSalt(e,t.currentTarget.value.length>0?t.currentTarget.value.trim():void 0)}),(0,N.jsx)(`div`,{className:r`
                    background-color: #d1ecf1;
                    border-radius: 3px;
                    padding: 8px 15px;
                    font-size: 13px;
                    margin-bottom: 15px;
                    display: flex;
                    flex-direction: column;
                  `,children:(0,N.jsx)(c,{id:`web.repo_create.form.salt.description`,description:`Text explaining what a salt is in Safe Box creation.`,defaultMessage:`<p>Salt is used in the key derivation process to create a unique encryption key and helps to protect against potential attacks. It will be stored on the Koofr servers in a secure manner.</p><p>A random Salt has been generated for you. If you prefer, you can leave the Salt field empty, and the default salt will be used (same as in rclone). However, it is recommended to use a unique salt for enhanced security. Using a unique salt helps to increase the complexity of the encryption process, making it more difficult for potential attackers to access the encrypted data.</p><p>If you wish to transfer the encrypted files to another service, it is necessary to also export the salt, otherwise you won't be able to decrypt your files.</p>`,values:{p:e=>(0,N.jsx)(`p`,{className:r`
                            margin: 7px 0;
                          `,children:e})}})})]}):null,(0,N.jsx)(`div`,{className:r`
                margin: 15px 0 25px;
              `,children:(0,N.jsx)(b,{type:`submit`,variant:E?`primary`:`disabled`,disabled:!E,children:(0,N.jsx)(c,{id:`web.repo_create.form.create.button`,description:`Primary button to create a new Safe Box.`,defaultMessage:`Create`})})}),p?null:(0,N.jsx)(`div`,{children:(0,N.jsx)(b,{type:`button`,variant:`primary-inline`,className:r`
                    padding: 0;
                  `,onClick:()=>m(!0),children:(0,N.jsx)(c,{id:`web.repo_create.form.show_advanced_settings.button`,description:`Button label that reveals advanced settings in the Safe Box creation form.`,defaultMessage:`Show advanced settings`})})})]}),p?(0,N.jsxs)(`div`,{className:s?r`
                      width: 100%;
                    `:r`
                      width: 400px;
                    `,children:[(0,N.jsx)(`h3`,{className:r`
                  font-size: 28px;
                  font-weight: normal;
                  margin: 23px 0 20px;
                `,children:(0,N.jsx)(c,{id:`web.repo_create.form.rclone_config.title`,description:`Section title for importing settings from an rclone config.`,defaultMessage:`From rclone config`})}),(0,N.jsx)(`pre`,{className:r`
                  background-color: #f8f8f8;
                  color: ${d.colors.textLight};
                  border-radius: 3px;
                  font-size: 13px;
                  padding: 6px 15px;
                `,children:(0,N.jsx)(`code`,{children:a.formatMessage({id:`web.repo_create.form.rclone_config.format.label`,description:`Label shown above the rclone config format example.`,defaultMessage:`Format:`})+`

`+B})}),i.fillFromRcloneConfigError===void 0?null:(0,N.jsx)(`div`,{className:r`
                    background-color: #fbedeb;
                    padding: 6px 15px;
                    border-radius: 3px;
                    margin-bottom: 15px;
                  `,children:i.fillFromRcloneConfigError}),(0,N.jsx)(`div`,{className:r`
                  margin-bottom: 15px;
                `,children:(0,N.jsx)(w,{as:`textarea`,value:h,className:r`
                    display: block;
                    width: 100%;
                    height: 250px;
                    font-size: 13px;
                  `,onChange:e=>g(e.currentTarget.value)})}),(0,N.jsx)(b,{type:`button`,variant:h.trim().length===0?`disabled`:`primary`,onClick:()=>{f.repoCreateFillFromRcloneConfig(e,h)},disabled:h.trim().length===0,children:(0,N.jsx)(c,{id:`web.repo_create.form.rclone_config.fill.button`,description:`Button label to parse the rclone config and fill the form.`,defaultMessage:`Fill`})})]}):null]})}),(0,N.jsx)(L,{dirPickerId:i.locationDirPickerId,onClick:_,canSelect:i.locationDirPickerCanSelect,select:v,cancel:y,createDirEnabled:i.locationDirPickerCreateDirEnabled,createDir:C})]})});V.displayName=`RepoCreateFormComponent`;var H=(0,M.memo)(()=>{let e=o(),t=S(),n=(0,M.useMemo)(()=>t.repoCreateCreate(),[t]),[r]=C((e,t)=>e.repoCreateInfoSubscribe(n,t),e=>e.repoCreateInfoData,[]);(0,M.useEffect)(()=>()=>{t.repoCreateDestroy(n)},[t,n]);let i=e.formatMessage({id:`web.repo_create.title`,description:`Title for the Safe Box creation page.`,defaultMessage:`Create a new Safe Box`}),a=D(i);return T(i),(0,N.jsx)(O,{navbarHeader:a,children:r?.type===`Form`?(0,N.jsx)(V,{createId:n,form:r}):r?.type===`Created`?(0,N.jsx)(P,{created:r}):(0,N.jsx)(l,{})})});H.displayName=`RepoCreate`;var U=(0,M.memo)(()=>(0,N.jsx)(H,{}));U.displayName=`RepoCreatePage`;export{U as RepoCreatePage};
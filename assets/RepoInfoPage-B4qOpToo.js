import{r as c,a as v,u as S,j as e,b as N}from"./DynamicThemeProvider-4BQuZolX.js";import{M as r,c as o,u as L,e as B}from"./emotion-css.esm-9QbHV8nv.js";import{f as C}from"./format-DzxagjtB.js";import{B as x,L as R}from"./Button-CJ4fGdXT.js";import{D}from"./DashboardError-CH3NXwKZ.js";import{u as I,D as A}from"./DashboardLayout-D5TMtfVF.js";import{D as F}from"./DashboardLoading-niaVTc4-.js";import{u as U}from"./DashboardNavbar-BO3aYR20.js";import{u as E}from"./useDocumentTitle-D3L4F_h2.js";import{a as h,M as z,u as g,b as H,c as P,d as T,e as V,g as K,h as b,l as $}from"./mainWebAuthenticated-D99KiaU6.js";import{C as q}from"./Checkbox-LRr_6R4N.js";import{A as J}from"./PasswordInput-Sb7eR0Nz.js";import"./error-icon@2x-BzFHMFnI.js";import"./LanguagePickerDropdown-EH7nZXGW.js";import"./useMenuUpdate-DaK7Jj7t.js";import"./index-PcNnkkNc.js";import"./Navbar-DmkHxDZO.js";import"./NavbarSticky-CvwZKpMB.js";const k=c.memo(({repo:t})=>{const n=v(),a=S(),s=h(),i=t.autoLock,l=[{value:"NoLimit",label:a.formatMessage({id:"web.repo_lock.lock_after_options.no_limit",description:"Auto-lock dropdown option meaning no time limit. Full text: Lock after<new line>No time limit",defaultMessage:"No time limit"})},{value:"Inactive1Minute",label:a.formatMessage({id:"web.repo_lock.lock_after_options.inactive_1_minute",description:"Auto-lock dropdown option for 1 minute of inactivity. Full text: Lock after<new line>1 minute of inactivity",defaultMessage:"1 minute of inactivity"})},{value:"Inactive5Mininutes",label:a.formatMessage({id:"web.repo_lock.lock_after_options.inactive_5_minutes",description:"Auto-lock dropdown option for 5 minutes of inactivity. Full text: Lock after<new line>5 minutes of inactivity",defaultMessage:"5 minutes of inactivity"})},{value:"Inactive10Minutes",label:a.formatMessage({id:"web.repo_lock.lock_after_options.inactive_10_minutes",description:"Auto-lock dropdown option for 10 minutes of inactivity. Full text: Lock after<new line>10 minutes of inactivity",defaultMessage:"10 minutes of inactivity"})},{value:"Inactive30Minutes",label:a.formatMessage({id:"web.repo_lock.lock_after_options.inactive_30_minutes",description:"Auto-lock dropdown option for 30 minutes of inactivity. Full text: Lock after<new line>30 minutes of inactivity",defaultMessage:"30 minutes of inactivity"})},{value:"Inactive1Hour",label:a.formatMessage({id:"web.repo_lock.lock_after_options.inactive_1_hour",description:"Auto-lock dropdown option for 1 hour of inactivity. Full text: Lock after<new line>1 hour of inactivity",defaultMessage:"1 hour of inactivity"})},{value:"Inactive2Hours",label:a.formatMessage({id:"web.repo_lock.lock_after_options.inactive_2_hours",description:"Auto-lock dropdown option for 2 hours of inactivity. Full text: Lock after<new line>2 hours of inactivity",defaultMessage:"2 hours of inactivity"})},{value:"Inactive4Hours",label:a.formatMessage({id:"web.repo_lock.lock_after_options.inactive_4_hours",description:"Auto-lock dropdown option for 4 hours of inactivity. Full text: Lock after<new line>4 hours of inactivity",defaultMessage:"4 hours of inactivity"})}];let p;i.after?.type==="Custom"&&(l.push({value:"Custom",label:a.formatMessage({id:"web.repo_lock.lock_after_options.custom",description:"Auto-lock dropdown option showing a custom number of inactivity seconds. Full text: Lock after<new line>Custom (N seconds)",defaultMessage:"Custom ({seconds, plural, one {# second} other {# seconds}})"},{seconds:i.after.seconds})}),p=i.after.seconds);const m=u=>{s.reposSetAutoLock(t.id,u)};return e.jsxs("div",{children:[e.jsx("h2",{className:o`
          font-size: 28px;
          font-weight: normal;
          margin: 0 0 10px;
        `,children:e.jsx(r,{id:"web.repo_lock.title",description:"Section header for Safe Box auto-lock settings.",defaultMessage:"Lock Safe Box"})}),e.jsxs("p",{className:o`
          font-size: 13px;
          font-weight: normal;
          margin: 0 0 10px;
        `,children:[e.jsx(r,{id:"web.repo_lock.lock_after.heading",description:"Label above the auto-lock timeout dropdown.",defaultMessage:"Lock after"}),":"]}),e.jsx("div",{className:o`
          display: flex;
          flex-direction: row;
          align-items: center;
          margin: 0 0 20px;
        `,children:e.jsx("select",{value:i.after.type,"aria-label":a.formatMessage({id:"web.repo_lock.lock_after_select.aria_label",description:"Accessibility label for the auto-lock timeout dropdown control.",defaultMessage:"Lock Safe Box after"}),onChange:u=>{const d=u.currentTarget.value;let f;d==="Custom"?f={type:"Custom",seconds:p}:f={type:d},m({...i,after:f})},className:o`
            border: 1px solid ${n.colors.borderDark};
            border-radius: 3px;
            height: 36px;
            width: 280px;
            padding: 0 7px;
          `,children:l.map(({value:u,label:d})=>e.jsx("option",{value:u,children:d},u))})}),e.jsxs("p",{className:o`
          font-size: 13px;
          font-weight: normal;
          margin: 0 0 10px;
        `,children:[e.jsx(r,{id:"web.repo_lock.lock_on.button",description:"Label above the lock condition checkboxes.",defaultMessage:"Lock on"}),":"]}),e.jsx("div",{children:e.jsxs("label",{className:o`
            display: flex;
            flex-direction: row;
            align-items: center;
          `,"aria-label":"Lock Safe Box on app hidden",children:[e.jsx(q,{value:i.onAppHidden?"checked":"unchecked",small:!0,onClick:()=>{m({...i,onAppHidden:!i.onAppHidden})}}),e.jsx("span",{className:o`
              margin-left: 8px;
            `,children:e.jsx(r,{id:"web.repo_lock.lock_on_app_hidden.text",description:"Checkbox label to lock the Safe Box when the app is hidden/backgrounded.",defaultMessage:"App hidden"})})]})}),t.state==="Unlocked"?e.jsx("div",{children:e.jsx(x,{type:"button",variant:"primary",onClick:()=>{s.reposLockRepo(t.id)},className:o`
              height: 36px;
              margin-top: 15px;
            `,children:e.jsx(r,{id:"web.repo_lock.lock_now.button",description:"Button label to immediately lock the Safe Box.",defaultMessage:"Lock now"})})}):null]})});k.displayName="RepoLock";const w=c.memo(({repoId:t,hide:n})=>{const a=h(),s=L(),i=c.useMemo(()=>a.repoRemoveCreate(t),[a,t]);c.useEffect(()=>()=>{a.repoRemoveDestroy(i)},[a,i]);const[l]=g((d,f)=>d.repoRemoveInfoSubscribe(i,f),d=>d.repoRemoveInfoData,[i]),[p,m]=c.useState(""),u=c.useCallback(d=>{d.preventDefault(),(async()=>await a.repoRemoveRemove(i,p)&&await s("/"))()},[a,i,p,s]);return l===void 0?null:e.jsxs("form",{onSubmit:u,children:[e.jsx(H,{children:e.jsx(P,{children:e.jsx(r,{id:"web.repo_remove.title",description:"Modal title for the destructive action that removes a Safe Box configuration.",defaultMessage:"Destroy Safe Box"})})}),e.jsxs(T,{className:o`
          padding-bottom: 0;
        `,children:[e.jsx(r,{id:"web.repo_remove.message",description:"Body text in the destroy Safe Box modal explaining consequences and requesting the Safe Key.",defaultMessage:"<p>Do you really want to destroy Safe Box <b>{name}</b>?</p><p>Destroying the Safe Box will keep all the files on Koofr but remove the configuration so you won't be able to decrypt the files if you didn't save the configuration.</p><p><b>This action cannot be undone.</b></p><p>Enter your Safe Key to confirm the removal:</p>",values:{name:l.repoName,b:d=>e.jsx("strong",{className:o`
                  font-weight: 600;
                `,children:d}),p:d=>e.jsx("p",{className:o`
                  margin: 0 0 20px;
                `,children:d})}}),l.status.type==="Error"?e.jsx("div",{className:o`
              background-color: #fbedeb;
              padding: 6px 15px;
              border-radius: 3px;
              margin: 0 0 15px;
            `,children:l.status.error}):null,e.jsx("div",{className:o`
            display: flex;
            flex-direction: row;
          `,children:e.jsx(J,{value:p,onChange:m})})]}),e.jsx(V,{children:e.jsxs(K,{children:[e.jsx(b,{type:"button",onClick:n,children:e.jsx(r,{id:"web.repo_remove.cancel.button",description:"Cancel button in the destroy Safe Box modal.",defaultMessage:"Cancel"})}),e.jsx(b,{type:"submit",variant:l.status.type==="Loading"?"disabled":"destructive",disabled:l.status.type==="Loading",children:e.jsx(r,{id:"web.repo_remove.confirm.button",description:"Destructive confirmation button in the destroy Safe Box modal.",defaultMessage:"Destroy"})})]})})]})});w.displayName="RepoRemoveModalContent";const y=c.memo(({repoId:t,hide:n})=>e.jsx(z,{show:t!==void 0,onHide:n,children:t!==void 0?e.jsx(w,{repoId:t,hide:n}):e.jsx(e.Fragment,{})}));y.displayName="RepoRemoveModal";const _=c.memo(({repoId:t})=>{const n=h(),a=c.useMemo(()=>n.repoSpaceUsageCreate(t),[n,t]);c.useEffect(()=>()=>{n.repoSpaceUsageDestroy(a)},[n,a]);const[s]=g((l,p)=>l.repoSpaceUsageInfoSubscribe(a,p),l=>l.repoSpaceUsageInfoData,[a]),i=c.useCallback(l=>{l.preventDefault(),n.repoSpaceUsageCalculate(a)},[n,a]);return s===void 0?null:e.jsxs("div",{children:[e.jsx("h2",{className:o`
          font-size: 28px;
          font-weight: normal;
          margin: 0 0 20px;
        `,children:e.jsx(r,{id:"web.repo_space_usage.heading",description:"Section header for the Safe Box space usage view.",defaultMessage:"Space used"})}),s.status.type==="Error"?e.jsx("div",{className:o`
            background-color: #fbedeb;
            padding: 6px 15px;
            border-radius: 3px;
            margin: 0 0 15px;
          `,children:s.status.error}):null,s.status.type==="Initial"||s.status.type==="Error"?e.jsx(x,{type:"button",variant:"primary",onClick:i,className:o`
            height: 36px;
          `,children:e.jsx(r,{id:"web.repo_space_usage.calculate.button",description:"Button label to calculate or refresh space usage.",defaultMessage:"Calculate"})}):null,s.status.type==="Loading"?e.jsx("div",{className:o`
            height: 36px;
          `,children:e.jsx(r,{id:"web.repo_space_usage.loading.text",description:"Status text shown while space usage is being calculated.",defaultMessage:"Loading…"})}):null,s.spaceUsedDisplay!==void 0?e.jsx("div",{className:o`
            height: 36px;
          `,children:s.spaceUsedDisplay}):null]})});_.displayName="RepoSpaceUsage";const j=c.memo(({repo:t})=>{const n=v(),a=$(),s=N(),i=I(),l=i.show,p=c.useCallback(()=>{l(t)},[l,t]),m=U(t.name);return E(t.name),e.jsxs(A,{navbarHeader:m,children:[e.jsxs("div",{className:s?o`
                padding: 0 15px;
              `:void 0,children:[e.jsxs("div",{children:[e.jsx("h1",{className:o`
              display: inline;
              font-size: 32px;
              font-weight: normal;
              margin: 0;
            `,children:t.name}),e.jsx("small",{className:o`
              font-size: 13px;
              font-weight: normal;
              color: ${n.colors.textLight};
              margin-left: 10px;
              text-transform: uppercase;
            `,children:t.state==="Locked"?e.jsx(r,{id:"web.repo_info.locked.text",description:"Status label shown next to the Safe Box name when it is locked.",defaultMessage:"Locked"}):e.jsx(r,{id:"web.repo_info.unlocked.text",description:"Status label shown next to the Safe Box name when it is unlocked.",defaultMessage:"Unlocked"})})]}),e.jsx("p",{className:o`
            margin: 0 0 25px;
            font-size: 12px;
          `,children:e.jsx(r,{id:"web.repo_info.created_at.text",description:"Line showing the Safe Box creation date on the info page (e.g. 'Created Saturday, January 1, 2022 at 12:00:00').",defaultMessage:"Created {created}",values:{created:C(t.added,"PPPPpp",{locale:a})}})}),e.jsxs("div",{className:s?o`
                  display: flex;
                  flex-direction: column;
                  margin-bottom: 40px;
                `:o`
                  display: flex;
                  flex-direction: row;
                  margin-bottom: 50px;
                `,children:[e.jsx(x,{variant:"primary",href:t.webUrl,target:"_blank",rel:"noreferrer",className:s?o`
                    width: 100%;
                    margin-bottom: 15px;
                  `:o`
                    width: 200px;
                    margin-right: 20px;
                  `,children:e.jsx(r,{id:"web.repo_info.open_repo_in_remote.button",description:"Button label to open the Safe Box in Koofr.",defaultMessage:"Open in Koofr"})}),e.jsx(x,{type:"button",variant:"destructive",className:s?o`
                    width: 100%;
                  `:o`
                    width: 200px;
                  `,onClick:p,children:e.jsx(r,{id:"web.repo_info.destroy_repo.button",description:"Destructive button label to open the destroy Safe Box dialog.",defaultMessage:"Destroy Safe Box…"})})]}),e.jsx("div",{className:o`
            margin-bottom: 50px;
          `,children:e.jsx(k,{repo:t})}),e.jsx("div",{className:o`
            margin-bottom: 50px;
          `,children:e.jsx(_,{repoId:t.id})}),e.jsxs("div",{className:o``,children:[e.jsx("h2",{className:o`
              font-size: 28px;
              font-weight: normal;
              margin: 0 0 20px;
            `,children:e.jsx(r,{id:"web.repo_info.backup_config.heading",description:"Section header for the Safe Box configuration backup area.",defaultMessage:"Backup config"})}),e.jsx(R,{to:`/repos/${t.id}/configbackup`,variant:"primary",children:e.jsx(r,{id:"web.repo_info.backup_config.button",description:"Button label to navigate to the config backup screen.",defaultMessage:"Backup the Safe Box config"})})]})]}),e.jsx(y,{repoId:i.isVisible?t.id:void 0,hide:i.hide})]})});j.displayName="RepoInfoComponentRepo";const M=c.memo(({repoId:t})=>{const n=h(),[a]=g((s,i)=>s.reposRepoSubscribe(t,i),s=>s.reposRepoData,[t]);return a?.status.type==="Error"?e.jsx(D,{error:a.status.error,onRetry:()=>n.load()}):a?.repo!==void 0?e.jsx(j,{repo:a.repo}):e.jsx(F,{})});M.displayName="RepoInfoComponent";const O=c.memo(()=>{const n=B().repoId;return n===void 0?null:e.jsx(M,{repoId:n},n)});O.displayName="RepoInfoPage";export{O as RepoInfoPage};

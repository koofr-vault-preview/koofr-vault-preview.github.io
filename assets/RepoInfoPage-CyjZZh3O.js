import{r as e}from"./chunk-DECur_0Z.js";import{o as t}from"./emotion-react.browser.esm-B6XXdZtW.js";import{t as n}from"./emotion-css.esm-Qs1dyEi9.js";import{n as r,t as i}from"./jsx-runtime-BA9giqqw.js";import"./injectIntl-DcBbzoym.js";import{t as a}from"./useIntl-uVUnHosr.js";import{c as o,s,u as c}from"./chunk-LFPYN7LY-qir83jfO.js";import"./LoadingCircle-CpCWIKmp.js";import"./Button-CQrJ5P7o.js";import{a as l,d as u,n as d,o as f,s as p,t as m,u as h}from"./Modal-OBKAh9Rf.js";import"./react-dom-D7VaEYON.js";import{i as g,r as _}from"./Button-D09ZlRdY.js";import"./useClickOutside-DDfmGtM1.js";import{n as v}from"./useIsMobile-Dv4RoKy5.js";import{t as y}from"./useWebVault-BDONIKNF.js";import"./DocumentScroll-BSm_K0jh.js";import"./FileIcon-Qu8Xuhdn.js";import"./NavbarSticky-OZG2b-qJ.js";import{t as b}from"./useSubscribe-Dq--lJhj.js";import"./TextInput-DCPMUd7R.js";import{n as x}from"./DateFnsLocaleContext-CNlYEmI1.js";import"./IntlLocalesContext-CX3kKNf2.js";import"./Navbar-PrhE56j5.js";import{t as S}from"./useDocumentTitle--9KSRPbr.js";import{i as C}from"./DashboardNavbar-BOgt6CxG.js";import"./useMenuUpdate-uUH7xBSR.js";import{t as w}from"./DashboardLoading-Bc1GPRes.js";import{t as T}from"./DashboardError-B-UWagLf.js";import{n as E,t as D}from"./DashboardLayout-SN0ler5Y.js";import"./GitRevision-Rs1j-ZuA.js";import{t as O}from"./PasswordInput-Ctoorx5m.js";import{t as k}from"./format-CUpJdD--.js";import{t as A}from"./Checkbox-E0KliRsx.js";var j=e(r(),1),M=i(),N=(0,j.memo)(({repo:e})=>{let r=t(),i=a(),o=y(),s=e.autoLock,l=[{value:`NoLimit`,label:i.formatMessage({id:`web.repo_lock.lock_after_options.no_limit`,description:`Auto-lock dropdown option meaning no time limit. Full text: Lock after<new line>No time limit`,defaultMessage:`No time limit`})},{value:`Inactive1Minute`,label:i.formatMessage({id:`web.repo_lock.lock_after_options.inactive_1_minute`,description:`Auto-lock dropdown option for 1 minute of inactivity. Full text: Lock after<new line>1 minute of inactivity`,defaultMessage:`1 minute of inactivity`})},{value:`Inactive5Mininutes`,label:i.formatMessage({id:`web.repo_lock.lock_after_options.inactive_5_minutes`,description:`Auto-lock dropdown option for 5 minutes of inactivity. Full text: Lock after<new line>5 minutes of inactivity`,defaultMessage:`5 minutes of inactivity`})},{value:`Inactive10Minutes`,label:i.formatMessage({id:`web.repo_lock.lock_after_options.inactive_10_minutes`,description:`Auto-lock dropdown option for 10 minutes of inactivity. Full text: Lock after<new line>10 minutes of inactivity`,defaultMessage:`10 minutes of inactivity`})},{value:`Inactive30Minutes`,label:i.formatMessage({id:`web.repo_lock.lock_after_options.inactive_30_minutes`,description:`Auto-lock dropdown option for 30 minutes of inactivity. Full text: Lock after<new line>30 minutes of inactivity`,defaultMessage:`30 minutes of inactivity`})},{value:`Inactive1Hour`,label:i.formatMessage({id:`web.repo_lock.lock_after_options.inactive_1_hour`,description:`Auto-lock dropdown option for 1 hour of inactivity. Full text: Lock after<new line>1 hour of inactivity`,defaultMessage:`1 hour of inactivity`})},{value:`Inactive2Hours`,label:i.formatMessage({id:`web.repo_lock.lock_after_options.inactive_2_hours`,description:`Auto-lock dropdown option for 2 hours of inactivity. Full text: Lock after<new line>2 hours of inactivity`,defaultMessage:`2 hours of inactivity`})},{value:`Inactive4Hours`,label:i.formatMessage({id:`web.repo_lock.lock_after_options.inactive_4_hours`,description:`Auto-lock dropdown option for 4 hours of inactivity. Full text: Lock after<new line>4 hours of inactivity`,defaultMessage:`4 hours of inactivity`})}],u;s.after?.type===`Custom`&&(l.push({value:`Custom`,label:i.formatMessage({id:`web.repo_lock.lock_after_options.custom`,description:`Auto-lock dropdown option showing a custom number of inactivity seconds. Full text: Lock after<new line>Custom (N seconds)`,defaultMessage:`Custom ({seconds, plural, one {# second} other {# seconds}})`},{seconds:s.after.seconds})}),u=s.after.seconds);let d=t=>{o.reposSetAutoLock(e.id,t)};return(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h2`,{className:n`
          font-size: 28px;
          font-weight: normal;
          margin: 0 0 10px;
        `,children:(0,M.jsx)(c,{id:`web.repo_lock.title`,description:`Section header for Safe Box auto-lock settings.`,defaultMessage:`Lock Safe Box`})}),(0,M.jsxs)(`p`,{className:n`
          font-size: 13px;
          font-weight: normal;
          margin: 0 0 10px;
        `,children:[(0,M.jsx)(c,{id:`web.repo_lock.lock_after.heading`,description:`Label above the auto-lock timeout dropdown.`,defaultMessage:`Lock after`}),`:`]}),(0,M.jsx)(`div`,{className:n`
          display: flex;
          flex-direction: row;
          align-items: center;
          margin: 0 0 20px;
        `,children:(0,M.jsx)(`select`,{value:s.after.type,"aria-label":i.formatMessage({id:`web.repo_lock.lock_after_select.aria_label`,description:`Accessibility label for the auto-lock timeout dropdown control.`,defaultMessage:`Lock Safe Box after`}),onChange:e=>{let t=e.currentTarget.value,n;n=t===`Custom`?{type:`Custom`,seconds:u}:{type:t},d({...s,after:n})},className:n`
            border: 1px solid ${r.colors.borderDark};
            border-radius: 3px;
            height: 36px;
            width: 280px;
            padding: 0 7px;
          `,children:l.map(({value:e,label:t})=>(0,M.jsx)(`option`,{value:e,children:t},e))})}),(0,M.jsxs)(`p`,{className:n`
          font-size: 13px;
          font-weight: normal;
          margin: 0 0 10px;
        `,children:[(0,M.jsx)(c,{id:`web.repo_lock.lock_on.button`,description:`Label above the lock condition checkboxes.`,defaultMessage:`Lock on`}),`:`]}),(0,M.jsx)(`div`,{children:(0,M.jsxs)(`label`,{className:n`
            display: flex;
            flex-direction: row;
            align-items: center;
          `,"aria-label":`Lock Safe Box on app hidden`,children:[(0,M.jsx)(A,{value:s.onAppHidden?`checked`:`unchecked`,small:!0,onClick:()=>{d({...s,onAppHidden:!s.onAppHidden})}}),(0,M.jsx)(`span`,{className:n`
              margin-left: 8px;
            `,children:(0,M.jsx)(c,{id:`web.repo_lock.lock_on_app_hidden.text`,description:`Checkbox label to lock the Safe Box when the app is hidden/backgrounded.`,defaultMessage:`App hidden`})})]})}),e.state===`Unlocked`?(0,M.jsx)(`div`,{children:(0,M.jsx)(_,{type:`button`,variant:`primary`,onClick:()=>{o.reposLockRepo(e.id)},className:n`
              height: 36px;
              margin-top: 15px;
            `,children:(0,M.jsx)(c,{id:`web.repo_lock.lock_now.button`,description:`Button label to immediately lock the Safe Box.`,defaultMessage:`Lock now`})})}):null]})});N.displayName=`RepoLock`;var P=(0,j.memo)(({repoId:e,hide:t})=>{let r=y(),i=s(),a=(0,j.useMemo)(()=>r.repoRemoveCreate(e),[r,e]);(0,j.useEffect)(()=>()=>{r.repoRemoveDestroy(a)},[r,a]);let[o]=b((e,t)=>e.repoRemoveInfoSubscribe(a,t),e=>e.repoRemoveInfoData,[a]),[m,g]=(0,j.useState)(``),_=(0,j.useCallback)(e=>{e.preventDefault(),(async()=>{await r.repoRemoveRemove(a,m)&&await i(`/`)})()},[r,a,m,i]);return o===void 0?null:(0,M.jsxs)(`form`,{onSubmit:_,children:[(0,M.jsx)(h,{children:(0,M.jsx)(u,{children:(0,M.jsx)(c,{id:`web.repo_remove.title`,description:`Modal title for the destructive action that removes a Safe Box configuration.`,defaultMessage:`Destroy Safe Box`})})}),(0,M.jsxs)(d,{className:n`
          padding-bottom: 0;
        `,children:[(0,M.jsx)(c,{id:`web.repo_remove.message`,description:`Body text in the destroy Safe Box modal explaining consequences and requesting the Safe Key.`,defaultMessage:`<p>Do you really want to destroy Safe Box <b>{name}</b>?</p><p>Destroying the Safe Box will keep all the files on Koofr but remove the configuration so you won't be able to decrypt the files if you didn't save the configuration.</p><p><b>This action cannot be undone.</b></p><p>Enter your Safe Key to confirm the removal:</p>`,values:{name:o.repoName,b:e=>(0,M.jsx)(`strong`,{className:n`
                  font-weight: 600;
                `,children:e}),p:e=>(0,M.jsx)(`p`,{className:n`
                  margin: 0 0 20px;
                `,children:e})}}),o.status.type===`Error`?(0,M.jsx)(`div`,{className:n`
              background-color: #fbedeb;
              padding: 6px 15px;
              border-radius: 3px;
              margin: 0 0 15px;
            `,children:o.status.error}):null,(0,M.jsx)(`div`,{className:n`
            display: flex;
            flex-direction: row;
          `,children:(0,M.jsx)(O,{value:m,onChange:g})})]}),(0,M.jsx)(l,{children:(0,M.jsxs)(p,{children:[(0,M.jsx)(f,{type:`button`,onClick:t,children:(0,M.jsx)(c,{id:`web.repo_remove.cancel.button`,description:`Cancel button in the destroy Safe Box modal.`,defaultMessage:`Cancel`})}),(0,M.jsx)(f,{type:`submit`,variant:o.status.type===`Loading`?`disabled`:`destructive`,disabled:o.status.type===`Loading`,children:(0,M.jsx)(c,{id:`web.repo_remove.confirm.button`,description:`Destructive confirmation button in the destroy Safe Box modal.`,defaultMessage:`Destroy`})})]})})]})});P.displayName=`RepoRemoveModalContent`;var F=(0,j.memo)(({repoId:e,hide:t})=>(0,M.jsx)(m,{show:e!==void 0,onHide:t,children:e===void 0?(0,M.jsx)(M.Fragment,{}):(0,M.jsx)(P,{repoId:e,hide:t})}));F.displayName=`RepoRemoveModal`;var I=(0,j.memo)(({repoId:e})=>{let t=y(),r=(0,j.useMemo)(()=>t.repoSpaceUsageCreate(e),[t,e]);(0,j.useEffect)(()=>()=>{t.repoSpaceUsageDestroy(r)},[t,r]);let[i]=b((e,t)=>e.repoSpaceUsageInfoSubscribe(r,t),e=>e.repoSpaceUsageInfoData,[r]),a=(0,j.useCallback)(e=>{e.preventDefault(),t.repoSpaceUsageCalculate(r)},[t,r]);return i===void 0?null:(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h2`,{className:n`
          font-size: 28px;
          font-weight: normal;
          margin: 0 0 20px;
        `,children:(0,M.jsx)(c,{id:`web.repo_space_usage.heading`,description:`Section header for the Safe Box space usage view.`,defaultMessage:`Space used`})}),i.status.type===`Error`?(0,M.jsx)(`div`,{className:n`
            background-color: #fbedeb;
            padding: 6px 15px;
            border-radius: 3px;
            margin: 0 0 15px;
          `,children:i.status.error}):null,i.status.type===`Initial`||i.status.type===`Error`?(0,M.jsx)(_,{type:`button`,variant:`primary`,onClick:a,className:n`
            height: 36px;
          `,children:(0,M.jsx)(c,{id:`web.repo_space_usage.calculate.button`,description:`Button label to calculate or refresh space usage.`,defaultMessage:`Calculate`})}):null,i.status.type===`Loading`?(0,M.jsx)(`div`,{className:n`
            height: 36px;
          `,children:(0,M.jsx)(c,{id:`web.repo_space_usage.loading.text`,description:`Status text shown while space usage is being calculated.`,defaultMessage:`Loading…`})}):null,i.spaceUsedDisplay===void 0?null:(0,M.jsx)(`div`,{className:n`
            height: 36px;
          `,children:i.spaceUsedDisplay})]})});I.displayName=`RepoSpaceUsage`;var L=(0,j.memo)(({repo:e})=>{let r=t(),i=x(),a=v(),o=E(),s=o.show,l=(0,j.useCallback)(()=>{s(e)},[s,e]),u=C(e.name);return S(e.name),(0,M.jsxs)(D,{navbarHeader:u,children:[(0,M.jsxs)(`div`,{className:a?n`
                padding: 0 15px;
              `:void 0,children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h1`,{className:n`
              display: inline;
              font-size: 32px;
              font-weight: normal;
              margin: 0;
            `,children:e.name}),(0,M.jsx)(`small`,{className:n`
              font-size: 13px;
              font-weight: normal;
              color: ${r.colors.textLight};
              margin-left: 10px;
              text-transform: uppercase;
            `,children:e.state===`Locked`?(0,M.jsx)(c,{id:`web.repo_info.locked.text`,description:`Status label shown next to the Safe Box name when it is locked.`,defaultMessage:`Locked`}):(0,M.jsx)(c,{id:`web.repo_info.unlocked.text`,description:`Status label shown next to the Safe Box name when it is unlocked.`,defaultMessage:`Unlocked`})})]}),(0,M.jsx)(`p`,{className:n`
            margin: 0 0 25px;
            font-size: 12px;
          `,children:(0,M.jsx)(c,{id:`web.repo_info.created_at.text`,description:`Line showing the Safe Box creation date on the info page (e.g. 'Created Saturday, January 1, 2022 at 12:00:00').`,defaultMessage:`Created {created}`,values:{created:k(e.added,`PPPPpp`,{locale:i})}})}),(0,M.jsxs)(`div`,{className:a?n`
                  display: flex;
                  flex-direction: column;
                  margin-bottom: 40px;
                `:n`
                  display: flex;
                  flex-direction: row;
                  margin-bottom: 50px;
                `,children:[(0,M.jsx)(_,{variant:`primary`,href:e.webUrl,target:`_blank`,rel:`noreferrer`,className:a?n`
                    width: 100%;
                    margin-bottom: 15px;
                  `:n`
                    width: 200px;
                    margin-right: 20px;
                  `,children:(0,M.jsx)(c,{id:`web.repo_info.open_repo_in_remote.button`,description:`Button label to open the Safe Box in Koofr.`,defaultMessage:`Open in Koofr`})}),(0,M.jsx)(_,{type:`button`,variant:`destructive`,className:a?n`
                    width: 100%;
                  `:n`
                    width: 200px;
                  `,onClick:l,children:(0,M.jsx)(c,{id:`web.repo_info.destroy_repo.button`,description:`Destructive button label to open the destroy Safe Box dialog.`,defaultMessage:`Destroy Safe Box…`})})]}),(0,M.jsx)(`div`,{className:n`
            margin-bottom: 50px;
          `,children:(0,M.jsx)(N,{repo:e})}),(0,M.jsx)(`div`,{className:n`
            margin-bottom: 50px;
          `,children:(0,M.jsx)(I,{repoId:e.id})}),(0,M.jsxs)(`div`,{className:n``,children:[(0,M.jsx)(`h2`,{className:n`
              font-size: 28px;
              font-weight: normal;
              margin: 0 0 20px;
            `,children:(0,M.jsx)(c,{id:`web.repo_info.backup_config.heading`,description:`Section header for the Safe Box configuration backup area.`,defaultMessage:`Backup config`})}),(0,M.jsx)(g,{to:`/repos/${e.id}/configbackup`,variant:`primary`,children:(0,M.jsx)(c,{id:`web.repo_info.backup_config.button`,description:`Button label to navigate to the config backup screen.`,defaultMessage:`Backup the Safe Box config`})})]})]}),(0,M.jsx)(F,{repoId:o.isVisible?e.id:void 0,hide:o.hide})]})});L.displayName=`RepoInfoComponentRepo`;var R=(0,j.memo)(({repoId:e})=>{let t=y(),[n]=b((t,n)=>t.reposRepoSubscribe(e,n),e=>e.reposRepoData,[e]);return n?.status.type===`Error`?(0,M.jsx)(T,{error:n.status.error,onRetry:()=>t.load()}):n?.repo===void 0?(0,M.jsx)(w,{}):(0,M.jsx)(L,{repo:n.repo})});R.displayName=`RepoInfoComponent`;var z=(0,j.memo)(()=>{let e=o().repoId;return e===void 0?null:(0,M.jsx)(R,{repoId:e},e)});z.displayName=`RepoInfoPage`;export{z as RepoInfoPage};
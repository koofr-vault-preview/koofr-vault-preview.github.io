import{r,u as g,j as e,a as C}from"./DynamicThemeProvider-MqskYVZg.js";import{c as a,u as R,e as S}from"./emotion-css.esm-D9bkNW-b.js";import{f as L}from"./format-a-hYJmZ8.js";import{B as x,L as D}from"./Button-D3442RQe.js";import{D as M}from"./DashboardError-DequXBb6.js";import{u as I,D as B}from"./DashboardLayout-Ljf5x_Tc.js";import{D as E}from"./DashboardLoading-TPfUkMWq.js";import{u as U}from"./DashboardNavbar-BiBpbZil.js";import{u as A}from"./useDocumentTitle-D3L4F_h2.js";import{a as f,M as H,u as h,b as P,c as z,d as T,e as V,g as F,h as v}from"./mainWebAuthenticated-OoemftV8.js";import{C as K}from"./Checkbox-5Dzeg3U_.js";import{A as $}from"./PasswordInput-B_Y0Lhkz.js";import"./error-icon@2x-BzFHMFnI.js";import"./GitRevision-DuC4owbd.js";import"./index-CuwaZ00B.js";import"./Navbar-D-Wj6WD0.js";import"./NavbarSticky-ClW7pS7A.js";const b=r.memo(({repo:o})=>{const i=g(),t=f(),[s,l]=r.useState(o.autoLock),n=[{value:"NoLimit",label:"No time limit"},{value:"Inactive1Minute",label:"1 minute of inactivity"},{value:"Inactive5Mininutes",label:"5 minutes of inactivity"},{value:"Inactive10Minutes",label:"10 minutes of inactivity"},{value:"Inactive30Minutes",label:"30 minutes of inactivity"},{value:"Inactive1Hour",label:"1 hour of inactivity"},{value:"Inactive2Hours",label:"2 hours of inactivity"},{value:"Inactive4Hours",label:"4 hours of inactivity"}];let c;s.after?.type==="Custom"&&(n.push({value:"Custom",label:`Custom (${s.after.seconds} seconds)`}),c=s.after.seconds);const u=p=>{l(p),t.reposSetAutoLock(o.id,p)};return e.jsxs("div",{children:[e.jsx("h2",{className:a`
          font-size: 28px;
          font-weight: normal;
          margin: 0 0 10px;
        `,children:"Lock Safe Box"}),e.jsx("p",{className:a`
          font-size: 13px;
          font-weight: normal;
          margin: 0 0 10px;
        `,children:"Lock after:"}),e.jsx("div",{className:a`
          display: flex;
          flex-direction: row;
          align-items: center;
          margin: 0 0 20px;
        `,children:e.jsx("select",{value:s.after.type,"aria-label":"Lock Safe Box after",onChange:p=>{const d=p.currentTarget.value;let m;d==="Custom"?m={type:"Custom",seconds:c}:m={type:d},u({...s,after:m})},className:a`
            border: 1px solid ${i.colors.borderDark};
            border-radius: 3px;
            height: 36px;
            width: 280px;
            padding: 0 7px;
          `,children:n.map(({value:p,label:d})=>e.jsx("option",{value:p,children:d},p))})}),e.jsx("p",{className:a`
          font-size: 13px;
          font-weight: normal;
          margin: 0 0 10px;
        `,children:"Lock on:"}),e.jsx("div",{className:a`
          //
        `,children:e.jsxs("label",{className:a`
            display: flex;
            flex-direction: row;
            align-items: center;
          `,"aria-label":"Lock Safe Box on app hidden",children:[e.jsx(K,{value:s.onAppHidden?"checked":"unchecked",small:!0,onClick:()=>{u({...s,onAppHidden:!s.onAppHidden})}}),e.jsx("span",{className:a`
              margin-left: 8px;
            `,children:"App hidden"})]})}),o.state==="Unlocked"?e.jsx("div",{className:a``,children:e.jsx(x,{type:"button",variant:"primary",onClick:()=>{t.reposLockRepo(o.id)},className:a`
              height: 36px;
              margin-top: 15px;
            `,children:"Lock now"})}):null]})});b.displayName="RepoLock";const y=r.memo(({repoId:o,hide:i})=>{const t=f(),s=R(),l=r.useMemo(()=>t.repoRemoveCreate(o),[t,o]);r.useEffect(()=>()=>{t.repoRemoveDestroy(l)},[t,l]);const[n]=h((d,m)=>d.repoRemoveInfoSubscribe(l,m),d=>d.repoRemoveInfoData,[l]),[c,u]=r.useState(""),p=r.useCallback(d=>{d.preventDefault(),(async()=>await t.repoRemoveRemove(l,c)&&await s("/"))()},[t,l,c,s]);return n===void 0?null:e.jsxs("form",{onSubmit:p,children:[e.jsx(P,{children:e.jsx(z,{children:"Destroy Safe Box"})}),e.jsxs(T,{className:a`
          padding-bottom: 0;
        `,children:[e.jsxs("p",{className:a`
            margin: 0 0 20px;
          `,children:["Do you really want to destroy Safe Box"," ",e.jsx("strong",{className:a`
              font-weight: 600;
            `,children:n.repoName}),"?"]}),e.jsx("p",{className:a`
            margin: 0 0 20px;
          `,children:"Destroying the Safe Box will keep all the files on Koofr but remove the configuration so you won't be able to decrypt the files if you didn't save the configuration."}),e.jsx("p",{className:a`
            margin: 0 0 20px;
            font-weight: 600;
          `,children:"This action cannot be undone."}),e.jsx("p",{className:a`
            margin: 0 0 20px;
          `,children:"Enter your Safe Key to confirm the removal:"}),n.status.type==="Error"?e.jsx("div",{className:a`
              background-color: #fbedeb;
              padding: 6px 15px;
              border-radius: 3px;
              margin: 0 0 15px;
            `,children:n.status.error}):null,e.jsx("div",{className:a`
            display: flex;
            flex-direction: row;
          `,children:e.jsx($,{value:c,onChange:u})})]}),e.jsx(V,{children:e.jsxs(F,{children:[e.jsx(v,{type:"button",onClick:i,children:"Cancel"}),e.jsx(v,{type:"submit",variant:n.status.type==="Loading"?"disabled":"destructive",disabled:n.status.type==="Loading",children:"Destroy"})]})})]})});y.displayName="RepoRemoveModalContent";const j=r.memo(({repoId:o,hide:i})=>e.jsx(H,{show:o!==void 0,onHide:i,children:o!==void 0?e.jsx(y,{repoId:o,hide:i}):e.jsx(e.Fragment,{})}));j.displayName="RepoRemoveModal";const N=r.memo(({repoId:o})=>{const i=f(),t=r.useMemo(()=>i.repoSpaceUsageCreate(o),[i,o]);r.useEffect(()=>()=>{i.repoSpaceUsageDestroy(t)},[i,t]);const[s]=h((n,c)=>n.repoSpaceUsageInfoSubscribe(t,c),n=>n.repoSpaceUsageInfoData,[t]),l=r.useCallback(n=>{n.preventDefault(),i.repoSpaceUsageCalculate(t)},[i,t]);return s===void 0?null:e.jsxs("div",{children:[e.jsx("h2",{className:a`
          font-size: 28px;
          font-weight: normal;
          margin: 0 0 20px;
        `,children:"Space used"}),s.status.type==="Error"?e.jsx("div",{className:a`
            background-color: #fbedeb;
            padding: 6px 15px;
            border-radius: 3px;
            margin: 0 0 15px;
          `,children:s.status.error}):null,s.status.type==="Initial"||s.status.type==="Error"?e.jsx(x,{type:"button",variant:"primary",onClick:l,className:a`
            height: 36px;
          `,children:"Calculate"}):null,s.status.type==="Loading"?e.jsx("div",{className:a`
            height: 36px;
          `,children:"Loading..."}):null,s.spaceUsedDisplay!==void 0?e.jsx("div",{className:a`
            height: 36px;
          `,children:s.spaceUsedDisplay}):null]})});N.displayName="RepoSpaceUsage";const k=r.memo(({repo:o})=>{const i=g(),t=C(),s=I(),l=s.show,n=r.useCallback(()=>{l(o)},[l,o]),c=U(o.name);return A(o.name),e.jsxs(B,{navbarHeader:c,children:[e.jsxs("div",{className:t?a`
                padding: 0 15px;
              `:void 0,children:[e.jsxs("div",{children:[e.jsx("h1",{className:a`
              display: inline;
              font-size: 32px;
              font-weight: normal;
              margin: 0;
            `,children:o.name}),e.jsx("small",{className:a`
              font-size: 13px;
              font-weight: normal;
              color: ${i.colors.textLight};
              margin-left: 10px;
            `,children:o.state==="Locked"?"LOCKED":"UNLOCKED"})]}),e.jsxs("p",{className:a`
            margin: 0 0 25px;
            font-size: 12px;
          `,children:["Created ",L(o.added,"PPPPpp")]}),e.jsxs("div",{className:t?a`
                  display: flex;
                  flex-direction: column;
                  margin-bottom: 40px;
                `:a`
                  display: flex;
                  flex-direction: row;
                  margin-bottom: 50px;
                `,children:[e.jsx(x,{variant:"primary",href:o.webUrl,target:"_blank",rel:"noreferrer",className:t?a`
                    width: 100%;
                    margin-bottom: 15px;
                  `:a`
                    width: 200px;
                    margin-right: 20px;
                  `,children:"Open in Koofr"}),e.jsx(x,{type:"button",variant:"destructive",className:t?a`
                    width: 100%;
                  `:a`
                    width: 200px;
                  `,onClick:n,children:"Destroy Safe Box..."})]}),e.jsx("div",{className:a`
            margin-bottom: 50px;
          `,children:e.jsx(b,{repo:o})}),e.jsx("div",{className:a`
            margin-bottom: 50px;
          `,children:e.jsx(N,{repoId:o.id})}),e.jsxs("div",{className:a``,children:[e.jsx("h2",{className:a`
              font-size: 28px;
              font-weight: normal;
              margin: 0 0 20px;
            `,children:"Backup config"}),e.jsx(D,{to:`/repos/${o.id}/configbackup`,variant:"primary",children:"Backup the Safe Box config"})]})]}),e.jsx(j,{repoId:s.isVisible?o.id:void 0,hide:s.hide})]})});k.displayName="RepoInfoComponentRepo";const w=r.memo(({repoId:o})=>{const i=f(),[t]=h((s,l)=>s.reposRepoSubscribe(o,l),s=>s.reposRepoData,[o]);return t?.status.type==="Error"?e.jsx(M,{error:t.status.error,onRetry:()=>i.load()}):t?.repo!==void 0?e.jsx(k,{repo:t.repo}):e.jsx(E,{})});w.displayName="RepoInfoComponent";const O=r.memo(()=>{const i=S().repoId;return i===void 0?null:e.jsx(w,{repoId:i},i)});O.displayName="RepoInfoPage";export{O as RepoInfoPage};

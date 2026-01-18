import{r as o,j as e,a as f}from"./DynamicThemeProvider-MqskYVZg.js";import{c as i,a as g,e as x}from"./emotion-css.esm-D9bkNW-b.js";import{u as b,a as h,T as j}from"./mainWebAuthenticated-BLrysYK4.js";import{D as k}from"./DashboardError-CWMC7Px8.js";import{D as R}from"./DashboardLayout-lSAZdAAB.js";import{D as C}from"./DashboardLoading-B88-7_AC.js";import{N as y}from"./DashboardNavbar-Dan82nwN.js";import{u as v}from"./useDocumentTitle-D3L4F_h2.js";import{R as B}from"./RepoConfigInfo-CQSjbBW8.js";import"./NavbarSticky-ClW7pS7A.js";import"./Button-D3442RQe.js";import"./index-Cto6cTBp.js";import"./error-icon@2x-BzFHMFnI.js";import"./GitRevision-Bq_cgbwC.js";import"./Navbar-D-Wj6WD0.js";const m=o.memo(({repo:s})=>{const a=s.id,r=f(),t=h(),[p,u]=o.useState(""),n=o.useMemo(()=>t.reposGetRepoConfig(a,p),[t,a,p]),l=o.useMemo(()=>[{id:s.id,name:s.name,link:`/repos/${s.id}`,isClickable:!0,hasCaret:!1,isLast:!1},{id:"configbackup",name:"Backup config",isClickable:!1,hasCaret:!1,isLast:!0}],[s]);return v("Backup config"),e.jsx(R,{navbarHeader:e.jsx(y,{breadcrumbs:l}),children:n!==void 0?e.jsxs("div",{className:r?i`
                  padding: 0 15px;
                `:void 0,children:[e.jsx("h1",{className:i`
              font-size: 32px;
              font-weight: normal;
              margin: 0 0 20px;
            `,children:"Backup config"}),e.jsxs("div",{className:i`
              margin: 0 0 40px;
            `,children:[e.jsx("div",{className:i`
                margin: 0 0 10px;
              `,children:"To generate your rclone config, please type your Safe Key. Make sure it's correct."}),e.jsx(j,{type:"text",name:"password",value:p,placeholder:"Your Safe Key",onChange:d=>u(d.currentTarget.value),className:g(i`
                font-size: 16px;
                width: 250px;
                padding-right: 38px;
              `),"aria-label":"Safe Key"})]}),e.jsx(B,{config:n})]}):null})});m.displayName="RepoConfigBackupRepo";const c=o.memo(({repoId:s})=>{const[a]=b((r,t)=>r.reposRepoSubscribe(s,t),r=>r.reposRepoData,[s]);return a?.status.type==="Error"?e.jsx(k,{error:a.status.error}):a?.repo!==void 0?e.jsx(m,{repo:a.repo}):e.jsx(C,{})});c.displayName="RepoConfigBackup";const N=o.memo(()=>{const a=x().repoId;return a===void 0?null:e.jsx(c,{repoId:a},a)});N.displayName="RepoConfigBackupPage";export{N as RepoConfigBackupPage};

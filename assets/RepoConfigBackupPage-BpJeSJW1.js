import{r,a as l,j as s}from"./DynamicThemeProvider-CxehgrR0.js";import{c as t,a as d,e as f}from"./emotion-css.esm-CiHGz3gB.js";import{a as x,T as g,u as b}from"./mainWebAuthenticated-BbFf5Si6.js";import{D as h}from"./DashboardError-BUoBECdj.js";import{D as j}from"./DashboardLayout-BrY_zGCO.js";import{D as k}from"./DashboardLoading-BsIiloLd.js";import{N as v}from"./DashboardNavbar-Du5k1ve-.js";import{u as C}from"./useDocumentTitle-D3L4F_h2.js";import{R}from"./RepoConfigInfo-BagmUk8X.js";import"./NavbarSticky-DuO2swp8.js";import"./Button-Dt6jELX4.js";import"./index-COhFu3E_.js";import"./error-icon@2x-BzFHMFnI.js";import"./GitRevision-BRjvHrCf.js";import"./Navbar-D0t0rxK0.js";const y=r.memo(({repo:a})=>{const e=a.id,o=l(),i=x(),[n,m]=r.useState(""),p=r.useMemo(()=>i.reposGetRepoConfig(e,n),[i,e,n]),c=r.useMemo(()=>[{id:a.id,name:a.name,link:`/repos/${a.id}`,isClickable:!0,hasCaret:!1,isLast:!1},{id:"configbackup",name:"Backup config",isClickable:!1,hasCaret:!1,isLast:!0}],[a]);return C("Backup config"),s.jsx(j,{navbarHeader:s.jsx(v,{breadcrumbs:c}),children:p!==void 0?s.jsxs("div",{className:o?t`
                  padding: 0 15px;
                `:void 0,children:[s.jsx("h1",{className:t`
              font-size: 32px;
              font-weight: normal;
              margin: 0 0 20px;
            `,children:"Backup config"}),s.jsxs("div",{className:t`
              margin: 0 0 40px;
            `,children:[s.jsx("div",{className:t`
                margin: 0 0 10px;
              `,children:"To generate your rclone config, please type your Safe Key. Make sure it's correct."}),s.jsx(g,{type:"text",name:"password",value:n,placeholder:"Your Safe Key",onChange:u=>m(u.currentTarget.value),className:d(t`
                font-size: 16px;
                width: 250px;
                padding-right: 38px;
              `),"aria-label":"Safe Key"})]}),s.jsx(R,{config:p})]}):null})}),D=r.memo(({repoId:a})=>{const[e]=b((o,i)=>o.reposRepoSubscribe(a,i),o=>o.reposRepoData,[a]);return(e==null?void 0:e.status.type)==="Error"?s.jsx(h,{error:e.status.error}):(e==null?void 0:e.repo)!==void 0?s.jsx(y,{repo:e.repo}):s.jsx(k,{})}),W=r.memo(()=>{const e=f().repoId;return e===void 0?null:s.jsx(D,{repoId:e},e)});export{W as RepoConfigBackupPage};

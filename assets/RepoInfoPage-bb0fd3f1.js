import{r as i,j as e,b as s,a as b}from"./DynamicThemeProvider-8db021c0.js";import{f as v}from"./index-8c64d985.js";import{B as m,L as j}from"./Button-0a845b25.js";import{A as y,u as w,D as N}from"./PasswordInput-b4462587.js";import{D as R}from"./DashboardLoading-2b60918b.js";import{u as S}from"./DashboardNavbar-76557c1e.js";import{u as D}from"./useDocumentTitle-2cb3b118.js";import{a as p,u,M,b as C,c as k,d as B,f as I,g as f,h as E}from"./mainAuthenticated-da65d0b7.js";import{u as U,b as L}from"./index-785e270c.js";import{R as P}from"./RepoError-de2c233d.js";import"./GitRevision-b7397e1d.js";import"./index-94b5b978.js";import"./Navbar-214aa63a.js";import"./NavbarSticky-e92eb122.js";import"./error-icon@2x-ffa05ea5.js";const F=i.memo(({repoId:o,hide:a})=>{const r=p(),t=U(),l=i.useMemo(()=>r.repoRemoveCreate(o),[r,o]);i.useEffect(()=>()=>{r.repoRemoveDestroy(l)},[r,l]);const[n]=u((d,x)=>d.repoRemoveInfoSubscribe(l,x),d=>d.repoRemoveInfoData,[l]),[c,h]=i.useState(""),g=i.useCallback(d=>{d.preventDefault(),(async()=>await r.repoRemoveRemove(l,c)&&t("/"))()},[r,l,c,t]);return n===void 0?null:e.jsxs("form",{onSubmit:g,children:[e.jsx(M,{children:e.jsx(C,{children:"Destroy Safe Box"})}),e.jsxs(k,{className:s`
          padding-bottom: 0;
        `,children:[e.jsxs("p",{className:s`
            margin: 0 0 20px;
          `,children:["Do you really want to destroy Safe Box"," ",e.jsx("strong",{className:s`
              font-weight: 600;
            `,children:n.repoName}),"?"]}),e.jsx("p",{className:s`
            margin: 0 0 20px;
          `,children:"Destroying the Safe Box will keep all the files on Koofr but remove the configuration so you won't be able to decrypt the files if you didn't save the configuration."}),e.jsx("p",{className:s`
            margin: 0 0 20px;
            font-weight: 600;
          `,children:"This action cannot be undone."}),e.jsx("p",{className:s`
            margin: 0 0 20px;
          `,children:"Enter your Safe Key to confirm the removal:"}),n.status.type==="Error"?e.jsx("div",{className:s`
              background-color: #fbedeb;
              padding: 6px 15px;
              border-radius: 3px;
              margin: 0 0 15px;
            `,children:n.status.error}):null,e.jsx("div",{className:s`
            display: flex;
            flex-direction: row;
          `,children:e.jsx(y,{value:c,onChange:h})})]}),e.jsx(B,{children:e.jsxs(I,{children:[e.jsx(f,{type:"button",onClick:a,children:"Cancel"}),e.jsx(f,{type:"submit",variant:n.status.type==="Loading"?"disabled":"destructive",disabled:n.status.type==="Loading",children:"Destroy"})]})})]})}),V=i.memo(({repoId:o,hide:a})=>e.jsx(E,{show:o!==void 0,onHide:a,children:o!==void 0?e.jsx(F,{repoId:o,hide:a}):e.jsx(e.Fragment,{})})),z=i.memo(({repoId:o})=>{const a=p(),r=i.useMemo(()=>a.repoSpaceUsageCreate(o),[a,o]);i.useEffect(()=>()=>{a.repoSpaceUsageDestroy(r)},[a,r]);const[t]=u((n,c)=>n.repoSpaceUsageInfoSubscribe(r,c),n=>n.repoSpaceUsageInfoData,[r]),l=i.useCallback(n=>{n.preventDefault(),a.repoSpaceUsageCalculate(r)},[a,r]);return t===void 0?null:e.jsxs("div",{children:[e.jsx("h2",{className:s`
          font-size: 28px;
          font-weight: normal;
          margin: 0 0 20px;
        `,children:"Space used"}),t.status.type==="Error"?e.jsx("div",{className:s`
            background-color: #fbedeb;
            padding: 6px 15px;
            border-radius: 3px;
            margin: 0 0 15px;
          `,children:t.status.error}):null,t.status.type==="Initial"||t.status.type==="Error"?e.jsx(m,{type:"button",variant:"primary",onClick:l,className:s`
            height: 36px;
          `,children:"Calculate"}):null,t.status.type==="Loading"?e.jsx("div",{className:s`
            height: 36px;
          `,children:"Loading..."}):null,t.spaceUsedDisplay!==void 0?e.jsx("div",{className:s`
            height: 36px;
          `,children:t.spaceUsedDisplay}):null]})}),H=i.memo(({repo:o})=>{const a=b(),r=w(),t=r.show,l=i.useCallback(async()=>{t(o)},[t,o]),n=S(o.name);return D(o.name),e.jsxs(N,{navbarHeader:n,children:[e.jsxs("div",{className:a?s`
                padding: 0 15px;
              `:void 0,children:[e.jsx("h1",{className:s`
            font-size: 32px;
            font-weight: normal;
            margin: 0;
          `,children:o.name}),e.jsxs("p",{className:s`
            margin: 0 0 25px;
            font-size: 12px;
          `,children:["Created ",v(o.added,"PPPPpp")]}),e.jsxs("div",{className:a?s`
                  display: flex;
                  flex-direction: column;
                  margin-bottom: 40px;
                `:s`
                  display: flex;
                  flex-direction: row;
                  margin-bottom: 50px;
                `,children:[e.jsx(m,{variant:"primary",href:o.webUrl,target:"_blank",rel:"noreferrer",className:a?s`
                    width: 100%;
                    margin-bottom: 15px;
                  `:s`
                    width: 200px;
                    margin-right: 20px;
                  `,children:"Open in Koofr"}),e.jsx(m,{type:"button",variant:"destructive",className:a?s`
                    width: 100%;
                  `:s`
                    width: 200px;
                  `,onClick:l,children:"Destroy Safe Box..."})]}),e.jsx("div",{className:s`
            margin-bottom: 50px;
          `,children:e.jsx(z,{repoId:o.id})}),e.jsxs("div",{className:s``,children:[e.jsx("h2",{className:s`
              font-size: 28px;
              font-weight: normal;
              margin: 0 0 20px;
            `,children:"Backup config"}),e.jsx(j,{to:`/repos/${o.id}/configbackup`,variant:"primary",children:"Backup the Safe Box config"})]})]}),e.jsx(V,{repoId:r.isVisible?o.id:void 0,hide:r.hide})]})}),K=i.memo(({repoId:o})=>{const a=p(),[r]=u((t,l)=>t.reposRepoSubscribe(o,l),t=>t.reposRepoData,[o]);return r.status.type==="Error"?e.jsx(P,{error:r.status.error,onRetry:()=>a.load()}):r.repo!==void 0?e.jsx(H,{repo:r.repo}):e.jsx(R,{})}),oe=i.memo(()=>{const a=L().repoId;return a===void 0?null:e.jsx(K,{repoId:a},a)});export{oe as RepoInfoPage};

import{r,u as b,j as e,b as s,a as j}from"./DynamicThemeProvider-71c37830.js";import{f as y}from"./index-8c64d985.js";import{B as x,L as N}from"./Button-d7c59dae.js";import{D as k}from"./DashboardError-2ebdff07.js";import{u as w,D as C}from"./DashboardLayout-c7d1178c.js";import{D as S}from"./DashboardLoading-6844cc2b.js";import{u as L}from"./DashboardNavbar-dbb9de79.js";import{u as D}from"./useDocumentTitle-2cb3b118.js";import{a as h,u as v,M as R,b as M,c as I,d as B,f as E,g,h as U}from"./mainAuthenticated-0c94f053.js";import{C as A}from"./Checkbox-d081d1a7.js";import{A as H}from"./PasswordInput-9162d51c.js";import{u as z,b as P}from"./index-6ac7cbed.js";import"./error-icon@2x-ffa05ea5.js";import"./GitRevision-8cc4b56c.js";import"./index-2f0b76f8.js";import"./Navbar-47732754.js";import"./NavbarSticky-315264f4.js";const T=r.memo(({repo:a})=>{var u;const i=b(),t=h(),[o,l]=r.useState(a.autoLock);let n=[{value:"NoLimit",label:"No time limit"},{value:"Inactive1Minute",label:"1 minute of inactivity"},{value:"Inactive5Mininutes",label:"5 minutes of inactivity"},{value:"Inactive10Minutes",label:"10 minutes of inactivity"},{value:"Inactive30Minutes",label:"30 minutes of inactivity"},{value:"Inactive1Hour",label:"1 hour of inactivity"},{value:"Inactive2Hours",label:"2 hours of inactivity"},{value:"Inactive4Hours",label:"4 hours of inactivity"}],d;((u=o.after)==null?void 0:u.type)==="Custom"&&(n.push({value:"Custom",label:`Custom (${o.after.seconds} seconds)`}),d=o.after.seconds);const p=c=>{l(c),t.reposSetAutoLock(a.id,c)};return e.jsxs("div",{children:[e.jsx("h2",{className:s`
          font-size: 28px;
          font-weight: normal;
          margin: 0 0 10px;
        `,children:"Lock Safe Box"}),e.jsx("p",{className:s`
          font-size: 13px;
          font-weight: normal;
          margin: 0 0 10px;
        `,children:"Lock after:"}),e.jsx("div",{className:s`
          display: flex;
          flex-direction: row;
          align-items: center;
          margin: 0 0 20px;
        `,children:e.jsx("select",{value:o.after.type,"aria-label":"Lock Safe Box after",onChange:c=>{const m=c.currentTarget.value;let f;m==="Custom"?f={type:"Custom",seconds:d}:f={type:m},p({...o,after:f})},className:s`
            border: 1px solid ${i.colors.borderDark};
            border-radius: 3px;
            height: 36px;
            width: 280px;
            padding: 0 7px;
          `,children:n.map(({value:c,label:m})=>e.jsx("option",{value:c,children:m},c))})}),e.jsx("p",{className:s`
          font-size: 13px;
          font-weight: normal;
          margin: 0 0 10px;
        `,children:"Lock on:"}),e.jsx("div",{className:s`
          //
        `,children:e.jsxs("label",{className:s`
            display: flex;
            flex-direction: row;
            align-items: center;
          `,"aria-label":"Lock Safe Box on app hidden",children:[e.jsx(A,{value:o.onAppHidden?"checked":"unchecked",small:!0,onClick:()=>{p({...o,onAppHidden:!o.onAppHidden})}}),e.jsx("span",{className:s`
              margin-left: 8px;
            `,children:"App hidden"})]})}),a.state==="Unlocked"?e.jsx("div",{className:s``,children:e.jsx(x,{type:"button",variant:"primary",onClick:()=>{t.reposLockRepo(a.id)},className:s`
              height: 36px;
              margin-top: 15px;
            `,children:"Lock now"})}):null]})}),V=r.memo(({repoId:a,hide:i})=>{const t=h(),o=z(),l=r.useMemo(()=>t.repoRemoveCreate(a),[t,a]);r.useEffect(()=>()=>{t.repoRemoveDestroy(l)},[t,l]);const[n]=v((c,m)=>c.repoRemoveInfoSubscribe(l,m),c=>c.repoRemoveInfoData,[l]),[d,p]=r.useState(""),u=r.useCallback(c=>{c.preventDefault(),(async()=>await t.repoRemoveRemove(l,d)&&o("/"))()},[t,l,d,o]);return n===void 0?null:e.jsxs("form",{onSubmit:u,children:[e.jsx(R,{children:e.jsx(M,{children:"Destroy Safe Box"})}),e.jsxs(I,{className:s`
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
          `,children:e.jsx(H,{value:d,onChange:p})})]}),e.jsx(B,{children:e.jsxs(E,{children:[e.jsx(g,{type:"button",onClick:i,children:"Cancel"}),e.jsx(g,{type:"submit",variant:n.status.type==="Loading"?"disabled":"destructive",disabled:n.status.type==="Loading",children:"Destroy"})]})})]})}),F=r.memo(({repoId:a,hide:i})=>e.jsx(U,{show:a!==void 0,onHide:i,children:a!==void 0?e.jsx(V,{repoId:a,hide:i}):e.jsx(e.Fragment,{})})),K=r.memo(({repoId:a})=>{const i=h(),t=r.useMemo(()=>i.repoSpaceUsageCreate(a),[i,a]);r.useEffect(()=>()=>{i.repoSpaceUsageDestroy(t)},[i,t]);const[o]=v((n,d)=>n.repoSpaceUsageInfoSubscribe(t,d),n=>n.repoSpaceUsageInfoData,[t]),l=r.useCallback(n=>{n.preventDefault(),i.repoSpaceUsageCalculate(t)},[i,t]);return o===void 0?null:e.jsxs("div",{children:[e.jsx("h2",{className:s`
          font-size: 28px;
          font-weight: normal;
          margin: 0 0 20px;
        `,children:"Space used"}),o.status.type==="Error"?e.jsx("div",{className:s`
            background-color: #fbedeb;
            padding: 6px 15px;
            border-radius: 3px;
            margin: 0 0 15px;
          `,children:o.status.error}):null,o.status.type==="Initial"||o.status.type==="Error"?e.jsx(x,{type:"button",variant:"primary",onClick:l,className:s`
            height: 36px;
          `,children:"Calculate"}):null,o.status.type==="Loading"?e.jsx("div",{className:s`
            height: 36px;
          `,children:"Loading..."}):null,o.spaceUsedDisplay!==void 0?e.jsx("div",{className:s`
            height: 36px;
          `,children:o.spaceUsedDisplay}):null]})}),$=r.memo(({repo:a})=>{const i=b(),t=j(),o=w(),l=o.show,n=r.useCallback(async()=>{l(a)},[l,a]),d=L(a.name);return D(a.name),e.jsxs(C,{navbarHeader:d,children:[e.jsxs("div",{className:t?s`
                padding: 0 15px;
              `:void 0,children:[e.jsxs("div",{children:[e.jsx("h1",{className:s`
              display: inline;
              font-size: 32px;
              font-weight: normal;
              margin: 0;
            `,children:a.name}),e.jsx("small",{className:s`
              font-size: 13px;
              font-weight: normal;
              color: ${i.colors.textLight};
              margin-left: 10px;
            `,children:a.state==="Locked"?"LOCKED":"UNLOCKED"})]}),e.jsxs("p",{className:s`
            margin: 0 0 25px;
            font-size: 12px;
          `,children:["Created ",y(a.added,"PPPPpp")]}),e.jsxs("div",{className:t?s`
                  display: flex;
                  flex-direction: column;
                  margin-bottom: 40px;
                `:s`
                  display: flex;
                  flex-direction: row;
                  margin-bottom: 50px;
                `,children:[e.jsx(x,{variant:"primary",href:a.webUrl,target:"_blank",rel:"noreferrer",className:t?s`
                    width: 100%;
                    margin-bottom: 15px;
                  `:s`
                    width: 200px;
                    margin-right: 20px;
                  `,children:"Open in Koofr"}),e.jsx(x,{type:"button",variant:"destructive",className:t?s`
                    width: 100%;
                  `:s`
                    width: 200px;
                  `,onClick:n,children:"Destroy Safe Box..."})]}),e.jsx("div",{className:s`
            margin-bottom: 50px;
          `,children:e.jsx(T,{repo:a})}),e.jsx("div",{className:s`
            margin-bottom: 50px;
          `,children:e.jsx(K,{repoId:a.id})}),e.jsxs("div",{className:s``,children:[e.jsx("h2",{className:s`
              font-size: 28px;
              font-weight: normal;
              margin: 0 0 20px;
            `,children:"Backup config"}),e.jsx(N,{to:`/repos/${a.id}/configbackup`,variant:"primary",children:"Backup the Safe Box config"})]})]}),e.jsx(F,{repoId:o.isVisible?a.id:void 0,hide:o.hide})]})}),O=r.memo(({repoId:a})=>{const i=h(),[t]=v((o,l)=>o.reposRepoSubscribe(a,l),o=>o.reposRepoData,[a]);return t.status.type==="Error"?e.jsx(k,{error:t.status.error,onRetry:()=>i.load()}):t.repo!==void 0?e.jsx($,{repo:t.repo}):e.jsx(S,{})}),le=r.memo(()=>{const i=P().repoId;return i===void 0?null:e.jsx(O,{repoId:i},i)});export{le as RepoInfoPage};

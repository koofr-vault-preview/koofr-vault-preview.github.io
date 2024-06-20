import{r,u as b,j as e,a as j}from"./DynamicThemeProvider-CxehgrR0.js";import{c as s,u as y,e as N}from"./emotion-css.esm-CiHGz3gB.js";import{f as k}from"./index-CrWxlqLP.js";import{B as x,L as w}from"./Button-Dt6jELX4.js";import{D as C}from"./DashboardError-BWxKElZ0.js";import{u as S,D as L}from"./DashboardLayout-ld4ZQYMk.js";import{D}from"./DashboardLoading-Dj1H3d-l.js";import{u as R}from"./DashboardNavbar-DmiQf-Bq.js";import{u as M}from"./useDocumentTitle-D3L4F_h2.js";import{a as h,u as v,M as I,b as B,c as E,d as U,f as A,g,h as H}from"./mainWebAuthenticated-DyVN5t5q.js";import{C as z}from"./Checkbox-B60T99_6.js";import{A as P}from"./PasswordInput-Dx4bnjQ_.js";import"./error-icon@2x-BzFHMFnI.js";import"./GitRevision-DoBHWnD7.js";import"./index-DJ_YTNa1.js";import"./Navbar-D0t0rxK0.js";import"./NavbarSticky-DuO2swp8.js";const T=r.memo(({repo:a})=>{var u;const i=b(),o=h(),[t,l]=r.useState(a.autoLock);let n=[{value:"NoLimit",label:"No time limit"},{value:"Inactive1Minute",label:"1 minute of inactivity"},{value:"Inactive5Mininutes",label:"5 minutes of inactivity"},{value:"Inactive10Minutes",label:"10 minutes of inactivity"},{value:"Inactive30Minutes",label:"30 minutes of inactivity"},{value:"Inactive1Hour",label:"1 hour of inactivity"},{value:"Inactive2Hours",label:"2 hours of inactivity"},{value:"Inactive4Hours",label:"4 hours of inactivity"}],d;((u=t.after)==null?void 0:u.type)==="Custom"&&(n.push({value:"Custom",label:`Custom (${t.after.seconds} seconds)`}),d=t.after.seconds);const p=c=>{l(c),o.reposSetAutoLock(a.id,c)};return e.jsxs("div",{children:[e.jsx("h2",{className:s`
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
        `,children:e.jsx("select",{value:t.after.type,"aria-label":"Lock Safe Box after",onChange:c=>{const m=c.currentTarget.value;let f;m==="Custom"?f={type:"Custom",seconds:d}:f={type:m},p({...t,after:f})},className:s`
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
          `,"aria-label":"Lock Safe Box on app hidden",children:[e.jsx(z,{value:t.onAppHidden?"checked":"unchecked",small:!0,onClick:()=>{p({...t,onAppHidden:!t.onAppHidden})}}),e.jsx("span",{className:s`
              margin-left: 8px;
            `,children:"App hidden"})]})}),a.state==="Unlocked"?e.jsx("div",{className:s``,children:e.jsx(x,{type:"button",variant:"primary",onClick:()=>{o.reposLockRepo(a.id)},className:s`
              height: 36px;
              margin-top: 15px;
            `,children:"Lock now"})}):null]})}),V=r.memo(({repoId:a,hide:i})=>{const o=h(),t=y(),l=r.useMemo(()=>o.repoRemoveCreate(a),[o,a]);r.useEffect(()=>()=>{o.repoRemoveDestroy(l)},[o,l]);const[n]=v((c,m)=>c.repoRemoveInfoSubscribe(l,m),c=>c.repoRemoveInfoData,[l]),[d,p]=r.useState(""),u=r.useCallback(c=>{c.preventDefault(),(async()=>await o.repoRemoveRemove(l,d)&&t("/"))()},[o,l,d,t]);return n===void 0?null:e.jsxs("form",{onSubmit:u,children:[e.jsx(I,{children:e.jsx(B,{children:"Destroy Safe Box"})}),e.jsxs(E,{className:s`
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
          `,children:e.jsx(P,{value:d,onChange:p})})]}),e.jsx(U,{children:e.jsxs(A,{children:[e.jsx(g,{type:"button",onClick:i,children:"Cancel"}),e.jsx(g,{type:"submit",variant:n.status.type==="Loading"?"disabled":"destructive",disabled:n.status.type==="Loading",children:"Destroy"})]})})]})}),F=r.memo(({repoId:a,hide:i})=>e.jsx(H,{show:a!==void 0,onHide:i,children:a!==void 0?e.jsx(V,{repoId:a,hide:i}):e.jsx(e.Fragment,{})})),K=r.memo(({repoId:a})=>{const i=h(),o=r.useMemo(()=>i.repoSpaceUsageCreate(a),[i,a]);r.useEffect(()=>()=>{i.repoSpaceUsageDestroy(o)},[i,o]);const[t]=v((n,d)=>n.repoSpaceUsageInfoSubscribe(o,d),n=>n.repoSpaceUsageInfoData,[o]),l=r.useCallback(n=>{n.preventDefault(),i.repoSpaceUsageCalculate(o)},[i,o]);return t===void 0?null:e.jsxs("div",{children:[e.jsx("h2",{className:s`
          font-size: 28px;
          font-weight: normal;
          margin: 0 0 20px;
        `,children:"Space used"}),t.status.type==="Error"?e.jsx("div",{className:s`
            background-color: #fbedeb;
            padding: 6px 15px;
            border-radius: 3px;
            margin: 0 0 15px;
          `,children:t.status.error}):null,t.status.type==="Initial"||t.status.type==="Error"?e.jsx(x,{type:"button",variant:"primary",onClick:l,className:s`
            height: 36px;
          `,children:"Calculate"}):null,t.status.type==="Loading"?e.jsx("div",{className:s`
            height: 36px;
          `,children:"Loading..."}):null,t.spaceUsedDisplay!==void 0?e.jsx("div",{className:s`
            height: 36px;
          `,children:t.spaceUsedDisplay}):null]})}),$=r.memo(({repo:a})=>{const i=b(),o=j(),t=S(),l=t.show,n=r.useCallback(async()=>{l(a)},[l,a]),d=R(a.name);return M(a.name),e.jsxs(L,{navbarHeader:d,children:[e.jsxs("div",{className:o?s`
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
          `,children:["Created ",k(a.added,"PPPPpp")]}),e.jsxs("div",{className:o?s`
                  display: flex;
                  flex-direction: column;
                  margin-bottom: 40px;
                `:s`
                  display: flex;
                  flex-direction: row;
                  margin-bottom: 50px;
                `,children:[e.jsx(x,{variant:"primary",href:a.webUrl,target:"_blank",rel:"noreferrer",className:o?s`
                    width: 100%;
                    margin-bottom: 15px;
                  `:s`
                    width: 200px;
                    margin-right: 20px;
                  `,children:"Open in Koofr"}),e.jsx(x,{type:"button",variant:"destructive",className:o?s`
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
            `,children:"Backup config"}),e.jsx(w,{to:`/repos/${a.id}/configbackup`,variant:"primary",children:"Backup the Safe Box config"})]})]}),e.jsx(F,{repoId:t.isVisible?a.id:void 0,hide:t.hide})]})}),O=r.memo(({repoId:a})=>{const i=h(),[o]=v((t,l)=>t.reposRepoSubscribe(a,l),t=>t.reposRepoData,[a]);return(o==null?void 0:o.status.type)==="Error"?e.jsx(C,{error:o.status.error,onRetry:()=>i.load()}):(o==null?void 0:o.repo)!==void 0?e.jsx($,{repo:o.repo}):e.jsx(D,{})}),le=r.memo(()=>{const i=N().repoId;return i===void 0?null:e.jsx(O,{repoId:i},i)});export{le as RepoInfoPage};

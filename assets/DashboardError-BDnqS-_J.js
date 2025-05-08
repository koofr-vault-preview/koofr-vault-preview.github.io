import{r as e,u as i,j as r}from"./DynamicThemeProvider-CxehgrR0.js";import{c as t}from"./emotion-css.esm-CiHGz3gB.js";import{e as m}from"./error-icon@2x-BzFHMFnI.js";import{B as n}from"./Button-Dt6jELX4.js";import{D as c}from"./DashboardLayout-CwrgpXzL.js";import{u as l}from"./useDocumentTitle-D3L4F_h2.js";const p=e.memo(({error:s,onRetry:o})=>{const a=i();return r.jsxs("div",{className:t`
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 80px 0 0;
        `,children:[r.jsx("img",{src:m,alt:"",className:t`
            display: block;
            width: 290px;
            height: 194px;
          `}),r.jsx("h3",{className:t`
            font-size: 14px;
            color: ${a.colors.text};
            font-weight: 600;
            margin: 0 0 20px;
          `,children:s}),o!==void 0?r.jsx(n,{type:"button",variant:"primary",onClick:o,children:"Try again"}):null]})}),j=e.memo(({error:s,onRetry:o})=>(l("Error"),r.jsx(c,{children:r.jsx(p,{error:s,onRetry:o})})));export{j as D,p as E};

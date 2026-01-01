import{r as e,u as m,j as r}from"./DynamicThemeProvider-MqskYVZg.js";import{c as a}from"./emotion-css.esm-D9bkNW-b.js";import{e as n}from"./error-icon@2x-BzFHMFnI.js";import{B as c}from"./Button-D3442RQe.js";import{D as l}from"./DashboardLayout-DwyiMuzD.js";import{u as p}from"./useDocumentTitle-D3L4F_h2.js";const t=e.memo(({error:s,onRetry:o})=>{const i=m();return r.jsxs("div",{className:a`
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 80px 0 0;
        `,children:[r.jsx("img",{src:n,alt:"",className:a`
            display: block;
            width: 290px;
            height: 194px;
          `}),r.jsx("h3",{className:a`
            font-size: 14px;
            color: ${i.colors.text};
            font-weight: 600;
            margin: 0 0 20px;
          `,children:s}),o!==void 0?r.jsx(c,{type:"button",variant:"primary",onClick:o,children:"Try again"}):null]})});t.displayName="ErrorComponent";const x=e.memo(({error:s,onRetry:o})=>(p("Error"),r.jsx(l,{children:r.jsx(t,{error:s,onRetry:o})})));x.displayName="DashboardError";export{x as D,t as E};

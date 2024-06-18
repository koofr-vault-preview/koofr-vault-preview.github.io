import{r as t,u as i,j as r,b as e}from"./DynamicThemeProvider-71c37830.js";import{e as m}from"./error-icon@2x-ffa05ea5.js";import{B as n}from"./Button-d7c59dae.js";import{D as c}from"./DashboardLayout-796159a3.js";import{u as l}from"./useDocumentTitle-2cb3b118.js";const p=t.memo(({error:s,onRetry:o})=>{const a=i();return r.jsxs("div",{className:e`
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 80px 0 0;
        `,children:[r.jsx("img",{src:m,alt:"",className:e`
            display: block;
            width: 290px;
            height: 194px;
          `}),r.jsx("h3",{className:e`
            font-size: 14px;
            color: ${a.colors.text};
            font-weight: 600;
            margin: 0 0 20px;
          `,children:s}),o!==void 0?r.jsx(n,{type:"button",variant:"primary",onClick:o,children:"Try again"}):null]})}),g=t.memo(({error:s,onRetry:o})=>(l("Error"),r.jsx(c,{children:r.jsx(p,{error:s,onRetry:o})})));export{g as D,p as E};

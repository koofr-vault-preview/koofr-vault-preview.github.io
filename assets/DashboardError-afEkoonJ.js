import{r as a,a as n,j as r,u as m}from"./DynamicThemeProvider-4BQuZolX.js";import{c as s,M as c}from"./emotion-css.esm-9QbHV8nv.js";import{e as l}from"./error-icon@2x-BzFHMFnI.js";import{B as d}from"./Button-CJ4fGdXT.js";import{D as p}from"./DashboardLayout-CiCy3sR7.js";import{u}from"./useDocumentTitle-D3L4F_h2.js";const i=a.memo(({error:o,onRetry:e})=>{const t=n();return r.jsxs("div",{className:s`
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 80px 0 0;
        `,children:[r.jsx("img",{src:l,alt:"",className:s`
            display: block;
            width: 290px;
            height: 194px;
          `}),r.jsx("h3",{className:s`
            font-size: 14px;
            color: ${t.colors.text};
            font-weight: 600;
            margin: 0 0 20px;
          `,children:o}),e!==void 0?r.jsx(d,{type:"button",variant:"primary",onClick:e,children:r.jsx(c,{id:"web.error_component.try_again.button",description:"Button label on the generic error state to retry the failed action.",defaultMessage:"Try again"})}):null]})});i.displayName="ErrorComponent";const h=a.memo(({error:o,onRetry:e})=>{const t=m();return u(t.formatMessage({id:"web.dashboard_error.title",description:"Document title shown when an error occurs.",defaultMessage:"Error"})),r.jsx(p,{children:r.jsx(i,{error:o,onRetry:e})})});h.displayName="DashboardError";export{h as D,i as E};

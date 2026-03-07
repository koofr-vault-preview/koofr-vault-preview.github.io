import{r as a,u as i,j as e}from"./DynamicThemeProvider-4BQuZolX.js";import{a as n}from"./NavbarSticky-CvwZKpMB.js";import{mainUnauthenticated as p}from"./mainWebUnauthenticated-D9EXs8kv.js";import{c as t,M as m,b as d}from"./emotion-css.esm-9QbHV8nv.js";import{e as c}from"./error-icon@2x-BzFHMFnI.js";import{N as l}from"./Navbar-DmkHxDZO.js";import"./LandingPage-DRSSqo0K.js";import"./index-Cmtiu6kJ.js";const o=a.memo(()=>{const r=i().formatMessage({id:"web.not_supported_page.title",description:"Document title for the browser not supported page.",defaultMessage:"Not supported"});return e.jsxs(e.Fragment,{children:[e.jsx(l,{header:e.jsx("span",{className:t`
              font-weight: 600;
            `,children:r})}),e.jsxs("div",{className:t`
          display: flex;
          flex-direction: column;
          align-items: center;
        `,children:[e.jsx("img",{src:c,alt:r,className:t`
            display: block;
            width: 252px;
            height: 186px;
            margin: 0 0 30px;
          `}),e.jsx("h2",{className:t`
            font-size: 32px;
            font-weight: normal;
            margin: 0 0 30px;
            max-width: 500px;
            text-align: center;
          `,children:e.jsx(m,{id:"web.not_supported_page.description",description:"Message shown when the current browser is not supported.",defaultMessage:"Your browser is not supported. Please open this page in a modern browser on a computer."})})]})]})});o.displayName="NotSupportedPage";const b=async()=>{const s=d([{path:"*",element:e.jsx(o,{})}]);await p(e.jsx(n,{router:s}))};export{b as mainNotSupported};

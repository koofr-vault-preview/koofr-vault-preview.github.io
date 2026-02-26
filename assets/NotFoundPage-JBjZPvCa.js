import{r as o,u as s,j as e}from"./DynamicThemeProvider-4BQuZolX.js";import{c as a,M as r}from"./emotion-css.esm-9QbHV8nv.js";import{e as i}from"./error-icon@2x-BzFHMFnI.js";import{L as n}from"./Button-CJ4fGdXT.js";import{N as m}from"./Navbar-DmkHxDZO.js";import{u as d}from"./useDocumentTitle-D3L4F_h2.js";import"./NavbarSticky-CvwZKpMB.js";const l=o.memo(()=>{const t=s().formatMessage({id:"web.not_found_page.title",description:"Document title and main heading for the 404 page.",defaultMessage:"Page not found"});return d(t),e.jsxs(e.Fragment,{children:[e.jsx(m,{header:e.jsx("span",{className:a`
              font-weight: 600;
            `,children:t})}),e.jsxs("div",{className:a`
          display: flex;
          flex-direction: column;
          align-items: center;
        `,children:[e.jsx("img",{src:i,alt:t,className:a`
            display: block;
            width: 252px;
            height: 186px;
            margin: 0 0 30px;
          `}),e.jsx("h2",{className:a`
            font-size: 32px;
            font-weight: normal;
            margin: 0 0 30px;
          `,children:t}),e.jsx(n,{to:"/",variant:"primary",children:e.jsx(r,{id:"web.not_found_page.go_to_dashboard.button",description:"Primary button on the 404 page that returns the user to the dashboard.",defaultMessage:"Go to dashboard"})})]})]})});l.displayName="NotFoundPage";export{l as NotFoundPage};

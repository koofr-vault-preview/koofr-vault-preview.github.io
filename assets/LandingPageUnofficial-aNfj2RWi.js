import{r as s,j as i}from"./DynamicThemeProvider-4BQuZolX.js";import{c as e,M as n,a as o}from"./emotion-css.esm-9QbHV8nv.js";import{S as l}from"./logo-CF5GKqjA.js";import{i as r,j as x,k as p}from"./Button-CJ4fGdXT.js";import{G as m,a as g,L as c}from"./LanguagePickerDropdown-nNIr80m5.js";import{u as f}from"./useDocumentTitle-D3L4F_h2.js";import"./useMenuUpdate-DaK7Jj7t.js";const h=x("#1683fb","#1683fb","#ffffff","#0576f1","#0576f1","#ffffff"),a={smMaxWidth:767,mdMinWidth:768,mdMaxWidth:1048,lgMinWidth:1049,lgMaxWidth:1365,xlMinWidth:1366},t={sm:`@media (max-width: ${a.smMaxWidth}px)`,smmd:`@media (max-width: ${a.mdMaxWidth}px)`,md:`@media (min-width: ${a.mdMinWidth}px) and (max-width: ${a.mdMaxWidth}px)`,mdlg:`@media (min-width: ${a.mdMinWidth}px) and (max-width: ${a.lgMaxWidth}px)`,lgxl:`@media (min-width: ${a.lgMinWidth}px)`,xl:`@media (min-width: ${a.xlMinWidth}px)`},u=s.memo(()=>(f(),i.jsxs("div",{className:e`
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
      `,children:[i.jsx("div",{className:e`
          width: 100%;
          padding-top: 20px;
          padding-bottom: 20px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin-bottom: 30px;
          flex-shrink: 0;

          ${t.sm} {
            padding-left: 15px;
            padding-right: 15px;
            padding-top: 7px;
            padding-bottom: 15px;
          }

          ${t.md} {
            padding-top: 20px;
          }

          ${t.mdlg} {
            padding-left: 28px;
            padding-right: 28px;
          }

          ${t.xl} {
            width: 1280px;
          }
        `,children:i.jsx(l,{})}),i.jsx("div",{className:e`
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-grow: 1;

          ${t.sm} {
            padding-left: 15px;
            padding-right: 15px;
          }

          ${t.smmd} {
            margin: 0 0 60px;
          }

          ${t.lgxl} {
            margin: 0 0 111px;
          }
        `,children:i.jsxs("div",{className:e`
            display: flex;
            flex-direction: column;
            max-width: 500px;
          `,children:[i.jsx("h1",{className:e`
              font-size: 64px;
              font-weight: 700;
              color: #011722;
              flex-grow: 1;
              margin: 0 0 22px;
              text-align: center;
            `,children:"Koofr Vault"}),i.jsx("p",{className:e`
              font-size: 18px;
              color: #011722;
              margin: 0 0 38px;
              text-align: center;
            `,children:i.jsx(n,{id:"web.landing_page_unofficial.warning",description:"Warning text on the unofficial landing page informing users it's not an official site.",defaultMessage:"This is an unofficial Koofr Vault page. Use at your own risk."})}),i.jsx(r,{href:"/login",className:o(h,e`
                width: 100%;
                font-size: 18px;
                padding: 9px 21px;
                font-weight: 700;
              `),children:i.jsx(n,{id:"web.landing_page.get_started.button",description:"Primary call-to-action button on the landing page that starts login.",defaultMessage:"Get started"})})]})}),i.jsx("div",{className:e`
          width: 100%;
          border-bottom: 1px solid #d4d6d7;
        `}),i.jsxs("div",{className:e`
          ${t.smmd} {
            padding: 30px 28px;
          }

          ${t.lgxl} {
            padding: 40px 28px;
          }
        `,children:[i.jsx("p",{className:e`
            font-size: 14px;
            color: #011722;
            text-align: center;
            margin: 0 0 15px;
          `,children:i.jsx(n,{id:"web.landing_page.copyright.text",description:"Footer copyright line on the landing page with company link and current year.",defaultMessage:"© {year}. <a>Koofr d.o.o.</a> all rights reserved.",values:{year:new Date().getFullYear(),a:d=>i.jsx("a",{href:"https://koofr.eu",target:"_blank",rel:"noopener",className:e`
                    font-weight: 600;
                    ${p} {
                      color: #011722;
                      text-decoration: none;
                    }
                  `,children:d})}})}),i.jsxs("div",{className:e`
            font-size: 13px;
            color: #011722;
            text-align: center;
          `,children:[i.jsx(m,{}),i.jsx(g,{})]}),i.jsx(c,{})]})]})));u.displayName="LandingPageUnofficial";export{u as LandingPageUnofficial};

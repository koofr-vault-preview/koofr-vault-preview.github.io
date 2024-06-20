import{r as l,m as s,j as e}from"./DynamicThemeProvider-CxehgrR0.js";import{d as p,c as a}from"./emotion-css.esm-CiHGz3gB.js";import{R as o,g as m,a as g,b as c,c as x}from"./RetinaImage-DVd0Vk_J.js";import{L as h}from"./Button-Dt6jELX4.js";import{N as d}from"./Navbar-D0t0rxK0.js";import{u as f}from"./useDocumentTitle-D3L4F_h2.js";import"./NavbarSticky-DuO2swp8.js";const I=l.memo(()=>{f("Open in Vault mobile app");const r=s(),i=p(),t=i.pathname.replace(/^\/mobile/,""),n=(t!==""?t:"/")+i.search;return e.jsxs(e.Fragment,{children:[e.jsx(d,{header:e.jsx("span",{className:a`
              font-weight: 600;
            `,children:"Open in mobile app"})}),e.jsxs("div",{className:a`
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 15px;
        `,children:[e.jsx("h2",{className:a`
            font-size: 32px;
            font-weight: normal;
            margin: 40px 0 30px;
            text-align: center;
          `,children:"Open in Vault mobile app"}),e.jsx("p",{className:a`
            font-size: 18px;
            font-weight: normal;
            margin: 0 0 15px;
            text-align: center;
          `,children:"It looks like you don't have Koofr Vault mobile app installed."}),e.jsx("p",{className:a`
            font-size: 18px;
            font-weight: normal;
            margin: 0 0 15px;
            text-align: center;
          `,children:"Install the mobile app"}),r.appStoreUrl!==void 0||r.googlePlayUrl!==void 0?e.jsxs("div",{className:a`
              display: flex;
              flex-direction: row;
              margin: 0 0 30px;
            `,children:[r.googlePlayUrl!==void 0?e.jsx("a",{href:r.googlePlayUrl,target:"_blank",rel:"noreferrer",className:a`
                  margin-right: 20px;
                `,children:e.jsx(o,{image:m,image2x:g,width:122,height:36})}):null,r.appStoreUrl!==void 0?e.jsx("a",{href:r.appStoreUrl,target:"_blank",rel:"noreferrer",children:e.jsx(o,{image:c,image2x:x,width:117,height:36})}):null]}):null,e.jsx(h,{to:n,variant:"primary",children:"Or continue using the web app"})]})]})});export{I as MobilePage};

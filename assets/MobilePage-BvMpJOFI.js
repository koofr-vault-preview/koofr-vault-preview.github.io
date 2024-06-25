import{r as n,m as s,j as e}from"./DynamicThemeProvider-CxehgrR0.js";import{d as m,c as r}from"./emotion-css.esm-CiHGz3gB.js";import{R as i,g as p,a as g,b as c,c as x,f as d,d as h}from"./RetinaImage-C1tj6ORK.js";import{L as f}from"./Button-Dt6jELX4.js";import{N as u}from"./Navbar-D0t0rxK0.js";import{u as j}from"./useDocumentTitle-D3L4F_h2.js";import"./NavbarSticky-DuO2swp8.js";const k=n.memo(()=>{j("Open in Vault mobile app");const a=s(),o=m(),t=o.pathname.replace(/^\/mobile/,""),l=(t!==""?t:"/")+o.search;return e.jsxs(e.Fragment,{children:[e.jsx(u,{header:e.jsx("span",{className:r`
              font-weight: 600;
            `,children:"Open in mobile app"})}),e.jsxs("div",{className:r`
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 15px;
        `,children:[e.jsx("h2",{className:r`
            font-size: 32px;
            font-weight: normal;
            margin: 40px 0 30px;
            text-align: center;
          `,children:"Open in Vault mobile app"}),e.jsx("p",{className:r`
            font-size: 18px;
            font-weight: normal;
            margin: 0 0 15px;
            text-align: center;
          `,children:"It looks like you don't have Koofr Vault mobile app installed."}),e.jsx("p",{className:r`
            font-size: 18px;
            font-weight: normal;
            margin: 0 0 15px;
            text-align: center;
          `,children:"Install the mobile app"}),a.appStoreUrl!==void 0||a.googlePlayUrl!==void 0||a.fDroidUrl!==void 0?e.jsxs("div",{className:r`
              display: flex;
              flex-direction: column;
              margin: 0 0 20px;
            `,children:[a.googlePlayUrl!==void 0?e.jsx("a",{href:a.googlePlayUrl,target:"_blank",rel:"noreferrer",className:r`
                  margin-bottom: 15px;
                `,children:e.jsx(i,{image:p,image2x:g,width:122,height:36})}):null,a.appStoreUrl!==void 0?e.jsx("a",{href:a.appStoreUrl,target:"_blank",rel:"noreferrer",className:r`
                  margin-bottom: 15px;
                `,children:e.jsx(i,{image:c,image2x:x,width:117,height:36})}):null,a.fDroidUrl!==void 0?e.jsx("a",{href:a.fDroidUrl,target:"_blank",rel:"noreferrer",children:e.jsx(i,{image:d,image2x:h,width:123,height:36})}):null]}):null,e.jsx(f,{to:l,variant:"primary",children:"Or continue using the web app"})]})]})});export{k as MobilePage};

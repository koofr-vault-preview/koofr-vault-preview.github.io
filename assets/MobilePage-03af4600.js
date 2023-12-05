import{r as l,p as s,j as e,b as a}from"./DynamicThemeProvider-852093d9.js";import{R as o,g as p,a as m,b as g,c}from"./RetinaImage-be7424cc.js";import{L as x}from"./Button-5863cf9e.js";import{N as h}from"./Navbar-0277b8dc.js";import{u as d}from"./useDocumentTitle-2cb3b118.js";import{a as f}from"./index-1ee9421e.js";import"./NavbarSticky-96fb8002.js";const I=l.memo(()=>{d("Open in Vault mobile app");const r=s(),i=f(),t=i.pathname.replace(/^\/mobile/,""),n=(t!==""?t:"/")+i.search;return e.jsxs(e.Fragment,{children:[e.jsx(h,{header:e.jsx("span",{className:a`
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
                `,children:e.jsx(o,{image:p,image2x:m,width:122,height:36})}):null,r.appStoreUrl!==void 0?e.jsx("a",{href:r.appStoreUrl,target:"_blank",rel:"noreferrer",children:e.jsx(o,{image:g,image2x:c,width:117,height:36})}):null]}):null,e.jsx(x,{to:n,variant:"primary",children:"Or continue using the web app"})]})]})});export{I as MobilePage};

import{r as p,u as m,s as g,j as e}from"./DynamicThemeProvider-4BQuZolX.js";import{d,M as i,c as t}from"./emotion-css.esm-9QbHV8nv.js";import{R as o,g as c,a as x,b as h,c as f,f as u,d as b}from"./RetinaImage-BgyCGNAx.js";import{L as j}from"./Button-CJ4fGdXT.js";import{N as w}from"./Navbar-DmkHxDZO.js";import{u as v}from"./useDocumentTitle-D3L4F_h2.js";import"./NavbarSticky-CvwZKpMB.js";const I=p.memo(()=>{const l=m().formatMessage({id:"web.mobile_page.title",description:"Document title for the page that prompts users to open the mobile app.",defaultMessage:"Open in Koofr Vault mobile app"});v(l);const a=g(),n=d(),s=n.pathname.replace(/^\/mobile/,""),r=(s!==""?s:"/")+n.search;return e.jsxs(e.Fragment,{children:[e.jsx(w,{header:e.jsx("span",{className:t`
              font-weight: 600;
            `,children:e.jsx(i,{id:"web.mobile_page.header",description:"Navbar title on the page prompting users to open the mobile app.",defaultMessage:"Open in mobile app"})})}),e.jsxs("div",{className:t`
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 15px;
        `,children:[e.jsx("h2",{className:t`
            font-size: 32px;
            font-weight: normal;
            margin: 40px 0 30px;
            text-align: center;
          `,children:l}),e.jsx("p",{className:t`
            font-size: 18px;
            font-weight: normal;
            margin: 0 0 15px;
            text-align: center;
          `,children:e.jsx(i,{id:"web.mobile_page.description",description:"Informational text stating the mobile app is not installed.",defaultMessage:"It looks like you don't have Koofr Vault mobile app installed."})}),e.jsx("p",{className:t`
            font-size: 18px;
            font-weight: normal;
            margin: 0 0 15px;
            text-align: center;
          `,children:e.jsx(i,{id:"web.mobile_page.install_app.button",description:"Instruction line encouraging users to install the mobile app.",defaultMessage:"Install the mobile app"})}),a.appStoreUrl!==void 0||a.googlePlayUrl!==void 0||a.fDroidUrl!==void 0?e.jsxs("div",{className:t`
              display: flex;
              flex-direction: column;
              margin: 0 0 20px;
            `,children:[a.googlePlayUrl!==void 0?e.jsx("a",{href:a.googlePlayUrl,target:"_blank",rel:"noreferrer",className:t`
                  margin-bottom: 15px;
                `,children:e.jsx(o,{image:x,image2x:c,width:122,height:36})}):null,a.appStoreUrl!==void 0?e.jsx("a",{href:a.appStoreUrl,target:"_blank",rel:"noreferrer",className:t`
                  margin-bottom: 15px;
                `,children:e.jsx(o,{image:f,image2x:h,width:117,height:36})}):null,a.fDroidUrl!==void 0?e.jsx("a",{href:a.fDroidUrl,target:"_blank",rel:"noreferrer",children:e.jsx(o,{image:b,image2x:u,width:123,height:36})}):null]}):null,e.jsx(j,{to:r,variant:"primary",children:e.jsx(i,{id:"web.mobile_page.continue_with_web_app.button",description:"Button label that continues in the web app instead of installing the mobile app.",defaultMessage:"Or continue using the web app"})})]})]})});I.displayName="MobilePage";export{I as MobilePage};

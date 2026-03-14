import{r as e}from"./chunk-DECur_0Z.js";import"./emotion-react.browser.esm-B6XXdZtW.js";import{t}from"./emotion-css.esm-Qs1dyEi9.js";import{n,t as r}from"./jsx-runtime-BA9giqqw.js";import"./injectIntl-DcBbzoym.js";import{t as i}from"./useIntl-uVUnHosr.js";import{o as a,u as o}from"./chunk-LFPYN7LY-BzzIMYPi.js";import"./Button-CQrJ5P7o.js";import{a as s,c,i as l,o as u,r as d,s as f,t as p}from"./RetinaImage-Cxz0cO5n.js";import{r as m}from"./config-D41TpNeF.js";import{i as h}from"./Button-DeCk-xKl.js";import"./useIsMobile-Dv4RoKy5.js";import"./DocumentScroll-BSm_K0jh.js";import"./NavbarSticky-OZG2b-qJ.js";import{t as g}from"./Navbar-7jDD-rVm.js";import{t as _}from"./useDocumentTitle--9KSRPbr.js";var v=e(n(),1),y=r(),b=(0,v.memo)(()=>{let e=i().formatMessage({id:`web.mobile_page.title`,description:`Document title for the page that prompts users to open the mobile app.`,defaultMessage:`Open in Koofr Vault mobile app`});_(e);let n=m(),r=a(),v=r.pathname.replace(/^\/mobile/,``),b=(v===``?`/`:v)+r.search;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(g,{header:(0,y.jsx)(`span`,{className:t`
              font-weight: 600;
            `,children:(0,y.jsx)(o,{id:`web.mobile_page.header`,description:`Navbar title on the page prompting users to open the mobile app.`,defaultMessage:`Open in mobile app`})})}),(0,y.jsxs)(`div`,{className:t`
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 15px;
        `,children:[(0,y.jsx)(`h2`,{className:t`
            font-size: 32px;
            font-weight: normal;
            margin: 40px 0 30px;
            text-align: center;
          `,children:e}),(0,y.jsx)(`p`,{className:t`
            font-size: 18px;
            font-weight: normal;
            margin: 0 0 15px;
            text-align: center;
          `,children:(0,y.jsx)(o,{id:`web.mobile_page.description`,description:`Informational text stating the mobile app is not installed.`,defaultMessage:`It looks like you don't have Koofr Vault mobile app installed.`})}),(0,y.jsx)(`p`,{className:t`
            font-size: 18px;
            font-weight: normal;
            margin: 0 0 15px;
            text-align: center;
          `,children:(0,y.jsx)(o,{id:`web.mobile_page.install_app.button`,description:`Instruction line encouraging users to install the mobile app.`,defaultMessage:`Install the mobile app`})}),n.appStoreUrl!==void 0||n.googlePlayUrl!==void 0||n.fDroidUrl!==void 0?(0,y.jsxs)(`div`,{className:t`
              display: flex;
              flex-direction: column;
              margin: 0 0 20px;
            `,children:[n.googlePlayUrl===void 0?null:(0,y.jsx)(`a`,{href:n.googlePlayUrl,target:`_blank`,rel:`noreferrer`,className:t`
                  margin-bottom: 15px;
                `,children:(0,y.jsx)(p,{image:l,image2x:d,width:122,height:36})}),n.appStoreUrl===void 0?null:(0,y.jsx)(`a`,{href:n.appStoreUrl,target:`_blank`,rel:`noreferrer`,className:t`
                  margin-bottom: 15px;
                `,children:(0,y.jsx)(p,{image:c,image2x:f,width:117,height:36})}),n.fDroidUrl===void 0?null:(0,y.jsx)(`a`,{href:n.fDroidUrl,target:`_blank`,rel:`noreferrer`,children:(0,y.jsx)(p,{image:u,image2x:s,width:123,height:36})})]}):null,(0,y.jsx)(h,{to:b,variant:`primary`,children:(0,y.jsx)(o,{id:`web.mobile_page.continue_with_web_app.button`,description:`Button label that continues in the web app instead of installing the mobile app.`,defaultMessage:`Or continue using the web app`})})]})]})});b.displayName=`MobilePage`;export{b as MobilePage};
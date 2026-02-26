import{r as l,u as d,j as e,a as b}from"./DynamicThemeProvider-4BQuZolX.js";import{L as v,c as r,a as n}from"./emotion-css.esm-9QbHV8nv.js";import{u}from"./NavbarSticky-CvwZKpMB.js";const N=s=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,...s},l.createElement("g",{fill:"none",fillRule:"evenodd"},l.createElement("circle",{cx:16,cy:16,r:16,fill:"#72ba04"}),l.createElement("path",{fill:"#fff",fillRule:"nonzero",d:"M16 3.724C9.22 3.724 3.724 9.22 3.724 16S9.22 28.276 16 28.276 28.276 22.78 28.276 16 22.78 3.724 16 3.724m0 1.28c6.073 0 10.996 4.923 10.996 10.996S22.073 26.996 16 26.996 5.004 22.073 5.004 16 9.927 5.004 16 5.004"}),l.createElement("path",{fill:"#fff",d:"M16 10.91a2.9 2.9 0 0 1 2.057.851 2.9 2.9 0 0 1 .852 2.057 2.9 2.9 0 0 1-1.454 2.52v3.298a1.455 1.455 0 1 1-2.91 0v-3.298A2.91 2.91 0 0 1 16 10.909Z"}))),x=l.memo(()=>{const s=d();return e.jsx(v,{to:"/",className:r`
        display: flex;
        align-items: center;
      `,children:e.jsx(N,{role:"img","aria-label":s.formatMessage({id:"web.navbar_logo.aria_label",description:"Accessibility label for the Koofr Vault logo in the navbar.",defaultMessage:"Koofr Vault logo"})})})});x.displayName="NavbarLogo";const M=70,w=60,g=s=>s?w:M,h=l.memo(({left:s,header:t,nav:i,right:m,isSticky:p,noShadow:c})=>{const o=d(),a=b();return e.jsxs("header",{className:n(r`
          display: flex;
          align-items: center;
          position: sticky;
          width: 100%;
          top: 0;
          z-index: ${a.zindex.navbarMain};
          background-color: ${a.colors.navbarBg};
          box-shadow: ${c?"none":`0 1px 3px 0 ${a.colors.border}`};
          border-bottom: 1px solid
            ${c?a.colors.border:"transparent"};
          height: ${g(a.isMobile)}px;
          padding: 0 ${a.isMobile?a.gutterMobile:a.gutter};
          overflow: hidden;
        `,p?r`
              box-shadow: none;
              border-bottom: 1px solid ${a.colors.borderLight};
            `:void 0),"aria-label":o.formatMessage({id:"web.navbar.aria_label",description:"Accessibility label for the main top navigation bar.",defaultMessage:"Navbar"}),children:[e.jsx("div",{className:r`
          display: flex;
          align-items: center;
          flex-shrink: 0;
          width: 32px;
          height: 32px;
        `,"aria-label":o.formatMessage({id:"web.navbar_left.aria_label",description:"Accessibility label for the left section of the navbar.",defaultMessage:"Navbar left"}),children:s??e.jsx(x,{})}),e.jsx("div",{className:r`
          width: 0px;
          height: 30px;
          border-right: 1px solid ${a.colors.navbarVerticalLine};
          margin: 0 ${a.isMobile?a.gutterMobile:a.gutter};
        `}),e.jsxs("div",{className:n(r`
          flex-grow: 1;
          display: flex;
          align-items: center;
          overflow-x: auto;
        `),children:[e.jsx("div",{className:r`
            font-size: 14px;
            font-weight: normal;
            color: ${a.colors.text};
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            flex-grow: 1;
            flex-shrink: 0;
          `,"aria-label":o.formatMessage({id:"web.navbar_header.aria_label",description:"Accessibility label for the navbar header/title area.",defaultMessage:"Navbar header"}),children:t}),i!==void 0?e.jsx("div",{className:r`
              flex-shrink: 0;
              display: flex;
              align-items: center;
            `,"aria-label":o.formatMessage({id:"web.navbar_nav.aria_label",description:"Accessibility label for the navbar action area.",defaultMessage:"Navbar nav"}),children:i}):null]}),e.jsx("div",{className:r`
          width: 0px;
          height: 30px;
          border-right: 1px solid ${a.colors.navbarVerticalLine};
          margin: 0 ${a.isMobile?a.gutterMobile:a.gutter};
        `}),e.jsx("div",{className:r`
          display: flex;
          align-items: center;
          flex-shrink: 0;
          width: 32px;
          height: 32px;
        `,"aria-label":o.formatMessage({id:"web.navbar_right.aria_label",description:"Accessibility label for the right section of the navbar.",defaultMessage:"Navbar right"}),children:m})]})});h.displayName="NavbarMain";const f=l.memo(({isSticky:s,children:t})=>{const i=b();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:r`
            height: ${i.isMobile?"0":"25px"};
          `}),e.jsx("div",{className:n(r`
              position: sticky;
              top: ${g(i.isMobile)}px;
              padding: 0 ${i.isMobile?i.gutterMobile:i.gutter};
              height: 45px;
              display: flex;
              align-items: center;
            `,s?r`
                  box-shadow: 0 1px 3px 0 ${i.colors.border};
                  background-color: #fff;
                  z-index: ${i.zindex.navbarExtra};
                  // TODO searchbox
                  padding-left: ${i.isMobile?"15px":"275px"};
                `:r`
                  // TODO searchbox
                  margin-left: ${i.isMobile?"0":"250px"};
                `,i.isMobile?r`
                  overflow-x: auto;
                `:r``),children:t})]})});f.displayName="NavbarExtra";const y=l.memo(({extra:s,...t})=>{const i=u();return e.jsxs(e.Fragment,{children:[e.jsx(h,{...t,isSticky:i}),s!==void 0?e.jsx(f,{isSticky:i,children:s}):void 0]})});y.displayName="Navbar";export{y as N,x as a,g};

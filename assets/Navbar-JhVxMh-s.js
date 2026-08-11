import{r as e}from"./chunk-DECur_0Z.js";import{o as t}from"./emotion-react.browser.esm-B6XXdZtW.js";import{n,t as r}from"./emotion-css.esm-Qs1dyEi9.js";import{n as i,t as a}from"./jsx-runtime-BA9giqqw.js";import{t as o}from"./useIntl-uVUnHosr.js";import{t as s}from"./chunk-LFPYN7LY-Fn0rpULT.js";import{n as c}from"./NavbarSticky-OZG2b-qJ.js";var l=e(i()),u=a(),d=e=>(0,u.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:32,height:32,...e,children:(0,u.jsxs)(`g`,{fill:`none`,fillRule:`evenodd`,children:[(0,u.jsx)(`circle`,{cx:16,cy:16,r:16,fill:`#72ba04`}),(0,u.jsx)(`path`,{fill:`#fff`,fillRule:`nonzero`,d:`M16 3.724C9.22 3.724 3.724 9.22 3.724 16S9.22 28.276 16 28.276 28.276 22.78 28.276 16 22.78 3.724 16 3.724m0 1.28c6.073 0 10.996 4.923 10.996 10.996S22.073 26.996 16 26.996 5.004 22.073 5.004 16 9.927 5.004 16 5.004`}),(0,u.jsx)(`path`,{fill:`#fff`,d:`M16 10.91a2.9 2.9 0 0 1 2.057.851 2.9 2.9 0 0 1 .852 2.057 2.9 2.9 0 0 1-1.454 2.52v3.298a1.455 1.455 0 1 1-2.91 0v-3.298A2.91 2.91 0 0 1 16 10.909Z`})]})}),f=(0,l.memo)(()=>{let e=o();return(0,u.jsx)(s,{to:`/`,className:r`
        display: flex;
        align-items: center;
      `,children:(0,u.jsx)(d,{role:`img`,"aria-label":e.formatMessage({id:`web.navbar_logo.aria_label`,description:`Accessibility label for the Koofr Vault logo in the navbar.`,defaultMessage:`Koofr Vault logo`})})})});f.displayName=`NavbarLogo`;var p=e=>e?60:70,m=(0,l.memo)(({left:e,header:i,nav:a,right:s,isSticky:c,noShadow:l})=>{let d=o(),m=t();return(0,u.jsxs)(`header`,{className:n(r`
          display: flex;
          align-items: center;
          position: sticky;
          width: 100%;
          top: 0;
          z-index: ${m.zindex.navbarMain};
          background-color: ${m.colors.navbarBg};
          box-shadow: ${l?`none`:`0 1px 3px 0 ${m.colors.border}`};
          border-bottom: 1px solid
            ${l?m.colors.border:`transparent`};
          height: ${p(m.isMobile)}px;
          padding: 0 ${m.isMobile?m.gutterMobile:m.gutter};
          overflow: hidden;
        `,c?r`
              box-shadow: none;
              border-bottom: 1px solid ${m.colors.borderLight};
            `:void 0),"aria-label":d.formatMessage({id:`web.navbar.aria_label`,description:`Accessibility label for the main top navigation bar.`,defaultMessage:`Navbar`}),children:[(0,u.jsx)(`div`,{className:r`
          display: flex;
          align-items: center;
          flex-shrink: 0;
          width: 32px;
          height: 32px;
        `,"aria-label":d.formatMessage({id:`web.navbar_left.aria_label`,description:`Accessibility label for the left section of the navbar.`,defaultMessage:`Navbar left`}),children:e??(0,u.jsx)(f,{})}),(0,u.jsx)(`div`,{className:r`
          width: 0px;
          height: 30px;
          border-right: 1px solid ${m.colors.navbarVerticalLine};
          margin: 0 ${m.isMobile?m.gutterMobile:m.gutter};
        `}),(0,u.jsxs)(`div`,{className:n(r`
          flex-grow: 1;
          display: flex;
          align-items: center;
          overflow-x: auto;
        `),children:[(0,u.jsx)(`div`,{className:r`
            font-size: 14px;
            font-weight: normal;
            color: ${m.colors.text};
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            flex-grow: 1;
            flex-shrink: 0;
          `,"aria-label":d.formatMessage({id:`web.navbar_header.aria_label`,description:`Accessibility label for the navbar header/title area.`,defaultMessage:`Navbar header`}),children:i}),a===void 0?null:(0,u.jsx)(`div`,{className:r`
              flex-shrink: 0;
              display: flex;
              align-items: center;
            `,"aria-label":d.formatMessage({id:`web.navbar_nav.aria_label`,description:`Accessibility label for the navbar action area.`,defaultMessage:`Navbar nav`}),children:a})]}),(0,u.jsx)(`div`,{className:r`
          width: 0px;
          height: 30px;
          border-right: 1px solid ${m.colors.navbarVerticalLine};
          margin: 0 ${m.isMobile?m.gutterMobile:m.gutter};
        `}),(0,u.jsx)(`div`,{className:r`
          display: flex;
          align-items: center;
          flex-shrink: 0;
          width: 32px;
          height: 32px;
        `,"aria-label":d.formatMessage({id:`web.navbar_right.aria_label`,description:`Accessibility label for the right section of the navbar.`,defaultMessage:`Navbar right`}),children:s})]})});m.displayName=`NavbarMain`;var h=(0,l.memo)(({isSticky:e,children:i})=>{let a=t();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`div`,{className:r`
            height: ${a.isMobile?`0`:`25px`};
          `}),(0,u.jsx)(`div`,{className:n(r`
              position: sticky;
              top: ${p(a.isMobile)}px;
              padding: 0 ${a.isMobile?a.gutterMobile:a.gutter};
              height: 45px;
              display: flex;
              align-items: center;
            `,e?r`
                  box-shadow: 0 1px 3px 0 ${a.colors.border};
                  background-color: #fff;
                  z-index: ${a.zindex.navbarExtra};
                  // TODO searchbox
                  padding-left: ${a.isMobile?`15px`:`275px`};
                `:r`
                  // TODO searchbox
                  margin-left: ${a.isMobile?`0`:`250px`};
                `,a.isMobile?r`
                  overflow-x: auto;
                `:r``),children:i})]})});h.displayName=`NavbarExtra`;var g=(0,l.memo)(({extra:e,...t})=>{let n=c();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(m,{...t,isSticky:n}),e===void 0?void 0:(0,u.jsx)(h,{isSticky:n,children:e})]})});g.displayName=`Navbar`;export{p as n,f as r,g as t};
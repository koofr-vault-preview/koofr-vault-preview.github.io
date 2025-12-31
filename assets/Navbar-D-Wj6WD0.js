import{r as s,j as e,u as d}from"./DynamicThemeProvider-MqskYVZg.js";import{L as g,c as r,a as t}from"./emotion-css.esm-D9bkNW-b.js";import{u as v}from"./NavbarSticky-ClW7pS7A.js";const f=l=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,...l},s.createElement("g",{fill:"none",fillRule:"evenodd"},s.createElement("circle",{cx:16,cy:16,r:16,fill:"#72ba04"}),s.createElement("path",{fill:"#fff",fillRule:"nonzero",d:"M16 3.724C9.22 3.724 3.724 9.22 3.724 16S9.22 28.276 16 28.276 28.276 22.78 28.276 16 22.78 3.724 16 3.724m0 1.28c6.073 0 10.996 4.923 10.996 10.996S22.073 26.996 16 26.996 5.004 22.073 5.004 16 9.927 5.004 16 5.004"}),s.createElement("path",{fill:"#fff",d:"M16 10.91a2.9 2.9 0 0 1 2.057.851 2.9 2.9 0 0 1 .852 2.057 2.9 2.9 0 0 1-1.454 2.52v3.298a1.455 1.455 0 1 1-2.91 0v-3.298A2.91 2.91 0 0 1 16 10.909Z"}))),x=s.memo(()=>e.jsx(g,{to:"/",className:r`
        display: flex;
        align-items: center;
      `,children:e.jsx(f,{role:"img","aria-label":"Koofr Vault logo"})}));x.displayName="NavbarLogo";const N=70,u=60,c=l=>l?u:N,b=s.memo(({left:l,header:o,nav:i,right:m,isSticky:p,noShadow:n})=>{const a=d();return e.jsxs("header",{className:t(r`
          display: flex;
          align-items: center;
          position: sticky;
          width: 100%;
          top: 0;
          z-index: ${a.zindex.navbarMain};
          background-color: ${a.colors.navbarBg};
          box-shadow: ${n?"none":`0 1px 3px 0 ${a.colors.border}`};
          border-bottom: 1px solid
            ${n?a.colors.border:"transparent"};
          height: ${c(a.isMobile)}px;
          padding: 0 ${a.isMobile?a.gutterMobile:a.gutter};
          overflow: hidden;
        `,p?r`
              box-shadow: none;
              border-bottom: 1px solid ${a.colors.borderLight};
            `:void 0),"aria-label":"Navbar",children:[e.jsx("div",{className:r`
          display: flex;
          align-items: center;
          flex-shrink: 0;
          width: 32px;
          height: 32px;
        `,"aria-label":"Navbar left",children:l??e.jsx(x,{})}),e.jsx("div",{className:r`
          width: 0px;
          height: 30px;
          border-right: 1px solid ${a.colors.navbarVerticalLine};
          margin: 0 ${a.isMobile?a.gutterMobile:a.gutter};
        `}),e.jsxs("div",{className:t(r`
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
          `,"aria-label":"Navbar header",children:o}),i!==void 0?e.jsx("div",{className:r`
              flex-shrink: 0;
              display: flex;
              align-items: center;
            `,"aria-label":"Navbar nav",children:i}):null]}),e.jsx("div",{className:r`
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
        `,"aria-label":"Navbar right",children:m})]})});b.displayName="NavbarMain";const h=s.memo(({isSticky:l,children:o})=>{const i=d();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:r`
            height: ${i.isMobile?"0":"25px"};
          `}),e.jsx("div",{className:t(r`
              position: sticky;
              top: ${c(i.isMobile)}px;
              padding: 0 ${i.isMobile?i.gutterMobile:i.gutter};
              height: 45px;
              display: flex;
              align-items: center;
            `,l?r`
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
                `:r``),children:o})]})});h.displayName="NavbarExtra";const w=s.memo(({extra:l,...o})=>{const i=v();return e.jsxs(e.Fragment,{children:[e.jsx(b,{...o,isSticky:i}),l!==void 0?e.jsx(h,{isSticky:i,children:l}):void 0]})});w.displayName="Navbar";export{w as N,x as a,c as g};

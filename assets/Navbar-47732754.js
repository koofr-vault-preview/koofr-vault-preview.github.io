import{r as o,j as e,b as r,u as c,d as t}from"./DynamicThemeProvider-71c37830.js";import{L as b}from"./index-6ac7cbed.js";import{u as g}from"./NavbarSticky-315264f4.js";const m=l=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,...l},o.createElement("g",{fill:"none",fillRule:"evenodd"},o.createElement("circle",{cx:16,cy:16,r:16,fill:"#72BA04"}),o.createElement("path",{fill:"#FFF",fillRule:"nonzero",d:"M16 3.724C9.22 3.724 3.724 9.22 3.724 16c0 6.78 5.496 12.276 12.276 12.276 6.78 0 12.276-5.496 12.276-12.276C28.276 9.22 22.78 3.724 16 3.724Zm0 1.28c6.073 0 10.996 4.923 10.996 10.996S22.073 26.996 16 26.996 5.004 22.073 5.004 16 9.927 5.004 16 5.004Z"}),o.createElement("path",{fill:"#FFF",d:"M16 10.91a2.9 2.9 0 0 1 2.057.851 2.9 2.9 0 0 1 .852 2.057 2.9 2.9 0 0 1-1.454 2.52v3.298a1.455 1.455 0 1 1-2.91 0v-3.298A2.91 2.91 0 0 1 16 10.909Z"}))),p=o.memo(()=>e.jsx(b,{to:"/",className:r`
        display: flex;
        align-items: center;
      `,children:e.jsx(m,{role:"img","aria-label":"Koofr Vault logo"})})),v=70,f=60,x=l=>l?f:v,u=o.memo(({left:l,header:s,nav:a,right:d,isSticky:h,noShadow:n})=>{const i=c();return e.jsxs("header",{className:t(r`
          display: flex;
          align-items: center;
          position: sticky;
          width: 100%;
          top: 0;
          z-index: ${i.zindex.navbarMain};
          background-color: ${i.colors.navbarBg};
          box-shadow: ${n?"none":`0 1px 3px 0 ${i.colors.border}`};
          border-bottom: 1px solid
            ${n?i.colors.border:"transparent"};
          height: ${x(i.isMobile)}px;
          padding: 0 ${i.isMobile?i.gutterMobile:i.gutter};
          overflow: hidden;
        `,h?r`
              box-shadow: none;
              border-bottom: 1px solid ${i.colors.borderLight};
            `:void 0),"aria-label":"Navbar",children:[e.jsx("div",{className:r`
          display: flex;
          align-items: center;
          flex-shrink: 0;
          width: 32px;
          height: 32px;
        `,"aria-label":"Navbar left",children:l??e.jsx(p,{})}),e.jsx("div",{className:r`
          width: 0px;
          height: 30px;
          border-right: 1px solid ${i.colors.navbarVerticalLine};
          margin: 0 ${i.isMobile?i.gutterMobile:i.gutter};
        `}),e.jsxs("div",{className:t(r`
          flex-grow: 1;
          display: flex;
          align-items: center;
          overflow-x: auto;
        `),children:[e.jsx("div",{className:r`
            font-size: 14px;
            font-weight: normal;
            color: ${i.colors.text};
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            flex-grow: 1;
            flex-shrink: 0;
          `,"aria-label":"Navbar header",children:s}),a!==void 0?e.jsx("div",{className:r`
              flex-shrink: 0;
              display: flex;
              align-items: center;
            `,"aria-label":"Navbar nav",children:a}):null]}),e.jsx("div",{className:r`
          width: 0px;
          height: 30px;
          border-right: 1px solid ${i.colors.navbarVerticalLine};
          margin: 0 ${i.isMobile?i.gutterMobile:i.gutter};
        `}),e.jsx("div",{className:r`
          display: flex;
          align-items: center;
          flex-shrink: 0;
          width: 32px;
          height: 32px;
        `,"aria-label":"Navbar right",children:d})]})}),N=o.memo(({isSticky:l,children:s})=>{const a=c();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:r`
            height: ${a.isMobile?"0":"25px"};
          `}),e.jsx("div",{className:t(r`
              position: sticky;
              top: ${x(a.isMobile)}px;
              padding: 0 ${a.isMobile?a.gutterMobile:a.gutter};
              height: 45px;
              display: flex;
              align-items: center;
            `,l?r`
                  box-shadow: 0 1px 3px 0 ${a.colors.border};
                  background-color: #fff;
                  z-index: ${a.zindex.navbarExtra};
                  // TODO searchbox
                  padding-left: ${a.isMobile?"15px":"275px"};
                `:r`
                  // TODO searchbox
                  margin-left: ${a.isMobile?"0":"250px"};
                `,a.isMobile?r`
                  overflow-x: auto;
                `:r``),children:s})]})}),M=o.memo(({extra:l,...s})=>{const a=g();return e.jsxs(e.Fragment,{children:[e.jsx(u,{...s,isSticky:a}),l!==void 0?e.jsx(N,{isSticky:a,children:l}):void 0]})});export{M as N,p as a,x as g};

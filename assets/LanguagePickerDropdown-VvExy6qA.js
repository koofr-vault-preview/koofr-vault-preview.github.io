import{r as e,j as l,a as d,L as h}from"./DynamicThemeProvider-4BQuZolX.js";import{M as v,c as i,a as m}from"./emotion-css.esm-9QbHV8nv.js";import{k as x}from"./Button-CJ4fGdXT.js";import{d as w,u as z,a as M,M as j,c as E,D as R}from"./useMenuUpdate-DaK7Jj7t.js";const k=e.memo(({className:a})=>null);k.displayName="GitRelease";const L=e.memo(({className:a})=>{const t="1ea8a49";return l.jsx("div",{className:a,children:l.jsx(v,{id:"web.git_revision.text",description:"Footer label showing the git commit hash with a link to the commit on GitHub.",defaultMessage:"Git revision: {git_revision}",values:{git_revision:l.jsx("a",{href:`https://github.com/koofr/vault/commit/${t}`,target:"_blank",rel:"noreferrer",className:i`
                ${x} {
                  color: inherit;
                }
              `,children:t})}})})});L.displayName="GitRevision";const N=a=>e.createElement("svg",{width:18,height:18,xmlns:"http://www.w3.org/2000/svg",...a},e.createElement("g",{fill:"none",fillRule:"evenodd"},e.createElement("path",{d:"M0 0h18v18H0z"}),e.createElement("path",{d:"M15.98 9A6.98 6.98 0 102.02 9a6.98 6.98 0 0013.96 0zM.557 9a8.442 8.442 0 1116.884 0A8.442 8.442 0 01.558 9z",fill:"#263238",fillRule:"nonzero"}),e.createElement("path",{d:"M4.129 8.886c0 3.289 1.45 6.343 3.915 8.423l.943-1.117a9.532 9.532 0 01-3.396-7.306 9.528 9.528 0 013.161-7.1L7.772.698A10.99 10.99 0 004.13 8.886zm8.263 0c0 2.853-1.257 5.5-3.396 7.306l.944 1.117a10.994 10.994 0 003.915-8.423c0-3.163-1.34-6.111-3.644-8.187l-.98 1.086a9.528 9.528 0 013.161 7.1z",fill:"#263238",fillRule:"nonzero"}),e.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"M8.28 16.524v.731h1.463V.754H8.28v.731z"}),e.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"M16.65 9.725h.731V8.262H.62v1.463h.731z"}))),y=a=>e.createElement("svg",{width:18,height:18,xmlns:"http://www.w3.org/2000/svg",...a},e.createElement("g",{fill:"none",fillRule:"evenodd"},e.createElement("path",{d:"M0 0h18v18H0z"}),e.createElement("path",{d:"M15.98 9A6.98 6.98 0 102.02 9a6.98 6.98 0 0013.96 0zM.557 9a8.442 8.442 0 1116.884 0A8.442 8.442 0 01.558 9z",fill:"#4A5257",fillRule:"nonzero"}),e.createElement("path",{d:"M4.129 8.886c0 3.289 1.45 6.343 3.915 8.423l.943-1.117a9.532 9.532 0 01-3.396-7.306 9.528 9.528 0 013.161-7.1L7.772.698A10.99 10.99 0 004.13 8.886zm8.263 0c0 2.853-1.257 5.5-3.396 7.306l.944 1.117a10.994 10.994 0 003.915-8.423c0-3.163-1.34-6.111-3.644-8.187l-.98 1.086a9.528 9.528 0 013.161 7.1z",fill:"#4A5257",fillRule:"nonzero"}),e.createElement("path",{fill:"#4A5257",fillRule:"nonzero",d:"M8.28 16.524v.731h1.463V.754H8.28v.731z"}),e.createElement("path",{fill:"#4A5257",fillRule:"nonzero",d:"M16.65 9.725h.731V8.262H.62v1.463h.731z"}))),p=e.memo(({size:a,dropdownToggleClassName:t})=>{const[n]=w(),o=d(),{currentLocale:s}=h();return s===void 0?null:l.jsx("div",{className:i`
          display: flex;
          flex-direction: column;
          align-items: center;
        `,children:l.jsxs("div",{...n,className:m(i`
              display: flex;
              flex-direction: row;
              align-items: center;
              cursor: pointer;
            `,t),children:[l.jsxs("div",{className:i`
              display: flex;
              width: 32px;
              height: 32px;
              padding: 7px 7px;
              flex-shrink: 0;
            `,children:[l.jsx(y,{className:i`
                div:hover > & {
                  display: none;
                }
              `,role:"img"}),l.jsx(N,{className:i`
                display: none;

                div:hover > & {
                  display: inline;
                }
              `,role:"img"})]}),l.jsx("div",{className:m(i`
                font-weight: normal;
                color: ${o.colors.text};
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
              `,a==="small"&&i`
                  font-size: 12px;
                `,a==="large"&&i`
                  font-size: 16px;
                `),children:s.name})]})})});p.displayName="LanguagePicker";const g=e.memo(()=>{const a=d(),[t,{show:n,popper:o,toggle:s}]=z();M(n,o);const{locales:r,changeLocale:u}=h();return r===void 0?null:l.jsx(j,{isVisible:n,...t,className:i`
        width: 214px;
        z-index: ${a.zindex.languagePickerMenu};
        overflow-y: auto;
      `,children:r.map(c=>l.jsx(E,{onClick:f=>{s?.(!1,f),u(c.locale)},children:c.name},c.locale))})});g.displayName="LanguagePickerMenu";const A=e.memo(({size:a="small",placement:t="top",dropdownToggleClassName:n})=>{const[o,s]=e.useState(!1);return l.jsxs(R,{show:o,onToggle:r=>s(r),placement:t,children:[l.jsx(p,{size:a,dropdownToggleClassName:n}),l.jsx(g,{})]})});A.displayName="LanguagePickerDropdown";export{k as G,A as L,L as a};

import{r as e,j as l,a as d,L as h}from"./DynamicThemeProvider-4BQuZolX.js";import{M as p,c as i,a as m}from"./emotion-css.esm-9QbHV8nv.js";import{k as g}from"./Button-CJ4fGdXT.js";import{d as w,u as z,a as M,M as j,c as k,D as R}from"./useMenuUpdate-DaK7Jj7t.js";const E=e.memo(({className:t})=>{const a="v0.1.25";return l.jsx("div",{className:t,children:l.jsx(p,{id:"web.version.text",description:"Footer label showing the app release version with a link to the GitHub release.",defaultMessage:"Version: {version}",values:{version:l.jsx("a",{href:`https://github.com/koofr/vault/releases/tag/${a}`,target:"_blank",rel:"noreferrer",className:i`
                ${g} {
                  color: inherit;
                }
              `,children:a})}})})});E.displayName="GitRelease";const L=e.memo(({className:t})=>{const a="0cf957b";return l.jsx("div",{className:t,children:l.jsx(p,{id:"web.git_revision.text",description:"Footer label showing the git commit hash with a link to the commit on GitHub.",defaultMessage:"Git revision: {git_revision}",values:{git_revision:l.jsx("a",{href:`https://github.com/koofr/vault/commit/${a}`,target:"_blank",rel:"noreferrer",className:i`
                ${g} {
                  color: inherit;
                }
              `,children:a})}})})});L.displayName="GitRevision";const b=t=>e.createElement("svg",{width:18,height:18,xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("g",{fill:"none",fillRule:"evenodd"},e.createElement("path",{d:"M0 0h18v18H0z"}),e.createElement("path",{d:"M15.98 9A6.98 6.98 0 102.02 9a6.98 6.98 0 0013.96 0zM.557 9a8.442 8.442 0 1116.884 0A8.442 8.442 0 01.558 9z",fill:"#263238",fillRule:"nonzero"}),e.createElement("path",{d:"M4.129 8.886c0 3.289 1.45 6.343 3.915 8.423l.943-1.117a9.532 9.532 0 01-3.396-7.306 9.528 9.528 0 013.161-7.1L7.772.698A10.99 10.99 0 004.13 8.886zm8.263 0c0 2.853-1.257 5.5-3.396 7.306l.944 1.117a10.994 10.994 0 003.915-8.423c0-3.163-1.34-6.111-3.644-8.187l-.98 1.086a9.528 9.528 0 013.161 7.1z",fill:"#263238",fillRule:"nonzero"}),e.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"M8.28 16.524v.731h1.463V.754H8.28v.731z"}),e.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"M16.65 9.725h.731V8.262H.62v1.463h.731z"}))),N=t=>e.createElement("svg",{width:18,height:18,xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("g",{fill:"none",fillRule:"evenodd"},e.createElement("path",{d:"M0 0h18v18H0z"}),e.createElement("path",{d:"M15.98 9A6.98 6.98 0 102.02 9a6.98 6.98 0 0013.96 0zM.557 9a8.442 8.442 0 1116.884 0A8.442 8.442 0 01.558 9z",fill:"#4A5257",fillRule:"nonzero"}),e.createElement("path",{d:"M4.129 8.886c0 3.289 1.45 6.343 3.915 8.423l.943-1.117a9.532 9.532 0 01-3.396-7.306 9.528 9.528 0 013.161-7.1L7.772.698A10.99 10.99 0 004.13 8.886zm8.263 0c0 2.853-1.257 5.5-3.396 7.306l.944 1.117a10.994 10.994 0 003.915-8.423c0-3.163-1.34-6.111-3.644-8.187l-.98 1.086a9.528 9.528 0 013.161 7.1z",fill:"#4A5257",fillRule:"nonzero"}),e.createElement("path",{fill:"#4A5257",fillRule:"nonzero",d:"M8.28 16.524v.731h1.463V.754H8.28v.731z"}),e.createElement("path",{fill:"#4A5257",fillRule:"nonzero",d:"M16.65 9.725h.731V8.262H.62v1.463h.731z"}))),u=e.memo(({size:t,dropdownToggleClassName:a})=>{const[s]=w(),o=d(),{currentLocale:n}=h();return n===void 0?null:l.jsx("div",{className:i`
          display: flex;
          flex-direction: column;
          align-items: center;
        `,children:l.jsxs("div",{...s,className:m(i`
              display: flex;
              flex-direction: row;
              align-items: center;
              cursor: pointer;
            `,a),children:[l.jsxs("div",{className:i`
              display: flex;
              width: 32px;
              height: 32px;
              padding: 7px 7px;
              flex-shrink: 0;
            `,children:[l.jsx(N,{className:i`
                div:hover > & {
                  display: none;
                }
              `,role:"img"}),l.jsx(b,{className:i`
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
              `,t==="small"&&i`
                  font-size: 12px;
                `,t==="large"&&i`
                  font-size: 16px;
                `),children:n.name})]})})});u.displayName="LanguagePicker";const f=e.memo(()=>{const t=d(),[a,{show:s,popper:o,toggle:n}]=z();M(s,o);const{locales:r,changeLocale:v}=h();return r===void 0?null:l.jsx(j,{isVisible:s,...a,className:i`
        width: 214px;
        z-index: ${t.zindex.languagePickerMenu};
        overflow-y: auto;
      `,children:r.map(c=>l.jsx(k,{onClick:x=>{n?.(!1,x),v(c.locale)},children:c.name},c.locale))})});f.displayName="LanguagePickerMenu";const y=e.memo(({size:t="small",placement:a="top",dropdownToggleClassName:s})=>{const[o,n]=e.useState(!1);return l.jsxs(R,{show:o,onToggle:r=>n(r),placement:a,children:[l.jsx(u,{size:t,dropdownToggleClassName:s}),l.jsx(f,{})]})});y.displayName="LanguagePickerDropdown";export{E as G,y as L,L as a};

import{r as e}from"./chunk-DECur_0Z.js";import{o as t}from"./emotion-react.browser.esm-B6XXdZtW.js";import{n,t as r}from"./emotion-css.esm-Qs1dyEi9.js";import{n as i,t as a}from"./jsx-runtime-BA9giqqw.js";import{u as o}from"./chunk-LFPYN7LY-BzzIMYPi.js";import{o as s}from"./Button-CQrJ5P7o.js";import{n as c}from"./IntlLocalesContext-CX3kKNf2.js";import{a as l,c as u,n as d,o as f,s as p,t as m}from"./useMenuUpdate-uUH7xBSR.js";var h=e(i()),g=a(),_=e=>(0,g.jsx)(`svg`,{width:18,height:18,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,g.jsxs)(`g`,{fill:`none`,fillRule:`evenodd`,children:[(0,g.jsx)(`path`,{d:`M0 0h18v18H0z`}),(0,g.jsx)(`path`,{d:`M15.98 9A6.98 6.98 0 102.02 9a6.98 6.98 0 0013.96 0zM.557 9a8.442 8.442 0 1116.884 0A8.442 8.442 0 01.558 9z`,fill:`#263238`,fillRule:`nonzero`}),(0,g.jsx)(`path`,{d:`M4.129 8.886c0 3.289 1.45 6.343 3.915 8.423l.943-1.117a9.532 9.532 0 01-3.396-7.306 9.528 9.528 0 013.161-7.1L7.772.698A10.99 10.99 0 004.13 8.886zm8.263 0c0 2.853-1.257 5.5-3.396 7.306l.944 1.117a10.994 10.994 0 003.915-8.423c0-3.163-1.34-6.111-3.644-8.187l-.98 1.086a9.528 9.528 0 013.161 7.1z`,fill:`#263238`,fillRule:`nonzero`}),(0,g.jsx)(`path`,{fill:`#263238`,fillRule:`nonzero`,d:`M8.28 16.524v.731h1.463V.754H8.28v.731z`}),(0,g.jsx)(`path`,{fill:`#263238`,fillRule:`nonzero`,d:`M16.65 9.725h.731V8.262H.62v1.463h.731z`})]})}),v=e=>(0,g.jsx)(`svg`,{width:18,height:18,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,g.jsxs)(`g`,{fill:`none`,fillRule:`evenodd`,children:[(0,g.jsx)(`path`,{d:`M0 0h18v18H0z`}),(0,g.jsx)(`path`,{d:`M15.98 9A6.98 6.98 0 102.02 9a6.98 6.98 0 0013.96 0zM.557 9a8.442 8.442 0 1116.884 0A8.442 8.442 0 01.558 9z`,fill:`#4A5257`,fillRule:`nonzero`}),(0,g.jsx)(`path`,{d:`M4.129 8.886c0 3.289 1.45 6.343 3.915 8.423l.943-1.117a9.532 9.532 0 01-3.396-7.306 9.528 9.528 0 013.161-7.1L7.772.698A10.99 10.99 0 004.13 8.886zm8.263 0c0 2.853-1.257 5.5-3.396 7.306l.944 1.117a10.994 10.994 0 003.915-8.423c0-3.163-1.34-6.111-3.644-8.187l-.98 1.086a9.528 9.528 0 013.161 7.1z`,fill:`#4A5257`,fillRule:`nonzero`}),(0,g.jsx)(`path`,{fill:`#4A5257`,fillRule:`nonzero`,d:`M8.28 16.524v.731h1.463V.754H8.28v.731z`}),(0,g.jsx)(`path`,{fill:`#4A5257`,fillRule:`nonzero`,d:`M16.65 9.725h.731V8.262H.62v1.463h.731z`})]})}),y=(0,h.memo)(({size:e,dropdownToggleClassName:i})=>{let[a]=p(),o=t(),{currentLocale:s}=c();return s===void 0?null:(0,g.jsx)(`div`,{className:r`
          display: flex;
          flex-direction: column;
          align-items: center;
        `,children:(0,g.jsxs)(`div`,{...a,className:n(r`
              display: flex;
              flex-direction: row;
              align-items: center;
              cursor: pointer;
            `,i),children:[(0,g.jsxs)(`div`,{className:r`
              display: flex;
              width: 32px;
              height: 32px;
              padding: 7px 7px;
              flex-shrink: 0;
            `,children:[(0,g.jsx)(v,{className:r`
                div:hover > & {
                  display: none;
                }
              `,role:`img`}),(0,g.jsx)(_,{className:r`
                display: none;

                div:hover > & {
                  display: inline;
                }
              `,role:`img`})]}),(0,g.jsx)(`div`,{className:n(r`
                font-weight: normal;
                color: ${o.colors.text};
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
              `,e===`small`&&r`
                  font-size: 12px;
                `,e===`large`&&r`
                  font-size: 16px;
                `),children:s.name})]})})});y.displayName=`LanguagePicker`;var b=(0,h.memo)(()=>{let e=t(),[n,{show:i,popper:a,toggle:o}]=u();m(i,a);let{locales:s,changeLocale:f}=c();return s===void 0?null:(0,g.jsx)(d,{isVisible:i,...n,className:r`
        width: 214px;
        z-index: ${e.zindex.languagePickerMenu};
        overflow-y: auto;
      `,children:s.map(e=>(0,g.jsx)(l,{onClick:t=>{o?.(!1,t),f(e.locale)},children:e.name},e.locale))})});b.displayName=`LanguagePickerMenu`;var x=(0,h.memo)(({size:e=`small`,placement:t=`top`,dropdownToggleClassName:n})=>{let[r,i]=(0,h.useState)(!1);return(0,g.jsxs)(f,{show:r,onToggle:e=>i(e),placement:t,children:[(0,g.jsx)(y,{size:e,dropdownToggleClassName:n}),(0,g.jsx)(b,{})]})});x.displayName=`LanguagePickerDropdown`;var S=(0,h.memo)(({className:e})=>null);S.displayName=`GitRelease`;var C=(0,h.memo)(({className:e})=>{let t=`17c9591`;return t==null||t===``?null:(0,g.jsx)(`div`,{className:e,children:(0,g.jsx)(o,{id:`web.git_revision.text`,description:`Footer label showing the git commit hash with a link to the commit on GitHub.`,defaultMessage:`Git revision: {git_revision}`,values:{git_revision:(0,g.jsx)(`a`,{href:`https://github.com/koofr/vault/commit/${t}`,target:`_blank`,rel:`noreferrer`,className:r`
                ${s} {
                  color: inherit;
                }
              `,children:t})}})})});C.displayName=`GitRevision`;export{S as n,x as r,C as t};
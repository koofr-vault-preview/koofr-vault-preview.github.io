import{r as e}from"./chunk-DECur_0Z.js";import{o as t}from"./emotion-react.browser.esm-B6XXdZtW.js";import{n,t as r}from"./emotion-css.esm-Qs1dyEi9.js";import{n as i,t as a}from"./jsx-runtime-BA9giqqw.js";import{t as o}from"./chunk-LFPYN7LY-B2CZzQGY.js";import{a as s,i as c,n as l,r as u,s as d,t as f}from"./Button-CQrJ5P7o.js";var p=e(i(),1),m=a(),h=d(f)`
  ${c}
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  text-align: center;
  display: inline-block;
  font-weight: 600;
  font-size: 13px;
  padding: 8px 15px 8px;
  line-height: ${e=>e.theme.lineHeightBase};
  flex-shrink: 0;

  &:hover,
  &:focus {
    transition: ${l};
  }
`,g=h.withComponent(o),_=h.withComponent(`a`);function v(e,t){switch(e){case`inline`:return u(t.colors.text,t.colors.text);case`primary`:return s(t.colors.primary,t.colors.primary,t.colors.textInverse,t.colors.primaryHover,t.colors.primaryHover,t.colors.textInverse);case`primary-inline`:return u(t.colors.primary,t.colors.primaryHover);case`destructive`:return s(t.colors.destructive,t.colors.destructive,t.colors.textInverse,t.colors.destructiveHover,t.colors.destructiveHover,t.colors.textInverse);case`destructive-inline`:return u(t.colors.destructive,t.colors.destructiveHover);case`disabled`:return n(s(t.colors.disabled,t.colors.disabled,t.colors.textInverse,t.colors.disabled,t.colors.disabled,t.colors.textInverse),r`
          cursor: default;
        `);case`disabled-inline`:return u(t.colors.disabled,t.colors.disabled);default:return s(`transparent`,t.colors.borderDarker,t.colors.text,`transparent`,t.colors.text,t.colors.text)}}var y=(0,p.memo)(({variant:e,className:r,...i})=>(0,m.jsx)(h,{className:n(v(e,t()),r),...i}));y.displayName=`Button`;var b=(0,p.memo)(({variant:e,className:r,...i})=>(0,m.jsx)(g,{className:n(v(e,t()),r),...i}));b.displayName=`LinkButton`;export{b as i,h as n,y as r,_ as t};
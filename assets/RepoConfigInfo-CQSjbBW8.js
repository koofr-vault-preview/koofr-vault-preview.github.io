import{r as s,j as e}from"./DynamicThemeProvider-MqskYVZg.js";import{c as t}from"./emotion-css.esm-D9bkNW-b.js";import{B as d}from"./Button-D3442RQe.js";const p=s.memo(({config:r})=>{const o=s.useRef(null),[a,i]=s.useState(!1),l=s.useCallback(()=>{if(o.current!==null){const c=document.createRange();c.selectNode(o.current);const n=window.getSelection();n!==null&&(n.removeAllRanges(),n.addRange(c),document.execCommand("copy"),n.removeAllRanges(),i(!0))}},[]);return e.jsxs("div",{children:[e.jsxs("div",{className:t`
          margin-bottom: 20px;

          & p {
            margin: 0 0 15px;
          }

          & strong {
            font-weight: 600;
          }
        `,ref:o,children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Location:"})," ",r.location.path]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Filename encryption:"})," standard"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Encrypt directory names:"})," true"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Salt (password2):"})," ",r.salt]}),e.jsx("p",{children:e.jsx("strong",{children:"rclone config:"})}),e.jsx("pre",{className:t`
            word-break: break-all;
            white-space: pre-wrap;
          `,children:e.jsx("code",{children:r.rcloneConfig})}),e.jsx("p",{className:t`
            margin: 0;
          `})]}),e.jsx(d,{type:"button",variant:"primary",onClick:l,children:a?"Copied":"Copy"})]})});p.displayName="RepoConfigInfo";export{p as R};

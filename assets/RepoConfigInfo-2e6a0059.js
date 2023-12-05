import{r,j as e,b as t}from"./DynamicThemeProvider-852093d9.js";import{B as d}from"./Button-5863cf9e.js";const m=r.memo(({config:s})=>{const o=r.useRef(null),[a,l]=r.useState(!1),i=r.useCallback(()=>{if(o.current!==null){const c=document.createRange();c.selectNode(o.current);const n=window.getSelection();n!==null&&(n.removeAllRanges(),n.addRange(c),document.execCommand("copy"),n.removeAllRanges(),l(!0))}},[]);return e.jsxs("div",{children:[e.jsxs("div",{className:t`
          margin-bottom: 20px;

          & p {
            margin: 0 0 15px;
          }

          & strong {
            font-weight: 600;
          }
        `,ref:o,children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Location:"})," ",s.location.path]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Filename encryption:"})," standard"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Encrypt directory names:"})," true"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Safe Key (password):"})," ",s.password]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Salt (password2):"})," ",s.salt]}),e.jsx("p",{children:e.jsx("strong",{children:"rclone config:"})}),e.jsx("pre",{className:t`
            word-break: break-all;
            white-space: pre-wrap;
          `,children:e.jsx("code",{children:s.rcloneConfig})}),e.jsx("p",{className:t`
            margin: 0;
          `})]}),e.jsx(d,{type:"button",variant:"primary",onClick:i,children:a?"Copied":"Copy"})]})});export{m as R};

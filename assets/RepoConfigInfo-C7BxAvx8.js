import{r as i,j as e}from"./DynamicThemeProvider-4BQuZolX.js";import{M as n,c as a}from"./emotion-css.esm-9QbHV8nv.js";import{B as p}from"./Button-CJ4fGdXT.js";const f=i.memo(({config:s})=>{const r=i.useRef(null),[c,l]=i.useState(!1),d=i.useCallback(()=>{if(r.current!==null){const o=document.createRange();o.selectNode(r.current);const t=window.getSelection();t!==null&&(t.removeAllRanges(),t.addRange(o),document.execCommand("copy"),t.removeAllRanges(),l(!0))}},[]);return e.jsxs("div",{children:[e.jsxs("div",{className:a`
          margin-bottom: 20px;

          & p {
            margin: 0 0 15px;
          }

          & strong {
            font-weight: 600;
          }
        `,ref:r,children:[e.jsx("p",{children:e.jsx(n,{id:"web.repo_config_info.location",description:"Label for the storage location line in the Safe Box config summary.",defaultMessage:"<b>Location</b>: {location}",values:{location:s.location.path,b:o=>e.jsx("strong",{children:o})}})}),e.jsx("p",{children:e.jsx(n,{id:"web.repo_config_info.filename_encryption",description:"Label for the filename encryption setting in the Safe Box config summary.",defaultMessage:"<b>Filename encryption</b>: {filename_encryption}",values:{filename_encryption:"standard",b:o=>e.jsx("strong",{children:o})}})}),e.jsx("p",{children:e.jsx(n,{id:"web.repo_config_info.encrypt_directory_names",description:"Label for the directory name encryption setting in the Safe Box config summary.",defaultMessage:"<b>Encrypt directory names</b>: {encrypt_directory_names}",values:{encrypt_directory_names:"true",b:o=>e.jsx("strong",{children:o})}})}),e.jsx("p",{children:e.jsx(n,{id:"web.repo_config_info.salt",description:"Label for the salt (password2) line in the Safe Box config summary.",defaultMessage:"<b>Salt (password2)</b>: {salt}",values:{salt:s.salt,b:o=>e.jsx("strong",{children:o})}})}),e.jsx("p",{children:e.jsx(n,{id:"web.repo_config_info.rclone_config",description:"Label preceding the raw rclone config block in the Safe Box config summary.",defaultMessage:"<b>rclone config</b>:",values:{b:o=>e.jsx("strong",{children:o})}})}),e.jsx("pre",{className:a`
            word-break: break-all;
            white-space: pre-wrap;
          `,children:e.jsx("code",{children:s.rcloneConfig})}),e.jsx("p",{className:a`
            margin: 0;
          `})]}),e.jsx(p,{type:"button",variant:"primary",onClick:d,children:c?e.jsx(n,{id:"web.repo_config_info.copy.button.copied",description:"Button label after the config has been copied to the clipboard.",defaultMessage:"Copied"}):e.jsx(n,{id:"web.repo_config_info.copy.button",description:"Button label to copy the config summary to the clipboard.",defaultMessage:"Copy"})})]})});f.displayName="RepoConfigInfo";export{f as R};

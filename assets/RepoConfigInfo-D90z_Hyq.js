import{r as e}from"./chunk-DECur_0Z.js";import{t}from"./emotion-css.esm-Qs1dyEi9.js";import{n,t as r}from"./jsx-runtime-BA9giqqw.js";import{u as i}from"./chunk-LFPYN7LY-B7NbF_E3.js";import{r as a}from"./Button-DVmf_mFn.js";var o=e(n(),1),s=r(),c=(0,o.memo)(({config:e})=>{let n=(0,o.useRef)(null),[r,c]=(0,o.useState)(!1),l=(0,o.useCallback)(()=>{if(n.current!==null){let e=document.createRange();e.selectNode(n.current);let t=window.getSelection();t!==null&&(t.removeAllRanges(),t.addRange(e),document.execCommand(`copy`),t.removeAllRanges(),c(!0))}},[]);return(0,s.jsxs)(`div`,{children:[(0,s.jsxs)(`div`,{className:t`
          margin-bottom: 20px;

          & p {
            margin: 0 0 15px;
          }

          & strong {
            font-weight: 600;
          }
        `,ref:n,children:[(0,s.jsx)(`p`,{children:(0,s.jsx)(i,{id:`web.repo_config_info.location`,description:`Label for the storage location line in the Safe Box config summary.`,defaultMessage:`<b>Location</b>: {location}`,values:{location:e.location.path,b:e=>(0,s.jsx)(`strong`,{children:e})}})}),(0,s.jsx)(`p`,{children:(0,s.jsx)(i,{id:`web.repo_config_info.filename_encryption`,description:`Label for the filename encryption setting in the Safe Box config summary.`,defaultMessage:`<b>Filename encryption</b>: {filename_encryption}`,values:{filename_encryption:`standard`,b:e=>(0,s.jsx)(`strong`,{children:e})}})}),(0,s.jsx)(`p`,{children:(0,s.jsx)(i,{id:`web.repo_config_info.encrypt_directory_names`,description:`Label for the directory name encryption setting in the Safe Box config summary.`,defaultMessage:`<b>Encrypt directory names</b>: {encrypt_directory_names}`,values:{encrypt_directory_names:`true`,b:e=>(0,s.jsx)(`strong`,{children:e})}})}),(0,s.jsx)(`p`,{children:(0,s.jsx)(i,{id:`web.repo_config_info.salt`,description:`Label for the salt (password2) line in the Safe Box config summary.`,defaultMessage:`<b>Salt (password2)</b>: {salt}`,values:{salt:e.salt,b:e=>(0,s.jsx)(`strong`,{children:e})}})}),(0,s.jsx)(`p`,{children:(0,s.jsx)(i,{id:`web.repo_config_info.rclone_config`,description:`Label preceding the raw rclone config block in the Safe Box config summary.`,defaultMessage:`<b>rclone config</b>:`,values:{b:e=>(0,s.jsx)(`strong`,{children:e})}})}),(0,s.jsx)(`pre`,{className:t`
            word-break: break-all;
            white-space: pre-wrap;
          `,children:(0,s.jsx)(`code`,{children:e.rcloneConfig})}),(0,s.jsx)(`p`,{className:t`
            margin: 0;
          `})]}),(0,s.jsx)(a,{type:`button`,variant:`primary`,onClick:l,children:r?(0,s.jsx)(i,{id:`web.repo_config_info.copy.button.copied`,description:`Button label after the config has been copied to the clipboard.`,defaultMessage:`Copied`}):(0,s.jsx)(i,{id:`web.repo_config_info.copy.button`,description:`Button label to copy the config summary to the clipboard.`,defaultMessage:`Copy`})})]})});c.displayName=`RepoConfigInfo`;export{c as t};
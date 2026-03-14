import{r as e}from"./chunk-DECur_0Z.js";import{o as t}from"./emotion-react.browser.esm-B6XXdZtW.js";import{n,t as r}from"./emotion-css.esm-Qs1dyEi9.js";import{n as i,t as a}from"./jsx-runtime-BA9giqqw.js";import{i as o}from"./Button-CQrJ5P7o.js";var s=e(i()),c=a(),l=e=>(0,c.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:9,height:7,fill:`none`,...e,children:(0,c.jsx)(`path`,{fill:`currentColor`,d:`M2.887 5.115 1.308 3.537A.731.731 0 0 0 .274 4.57l2.082 2.082a.75.75 0 0 0 1.058 0L8.72 1.37A.731.731 0 1 0 7.687.333z`})}),u=e=>(0,c.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:8,height:2,fill:`none`,...e,children:(0,c.jsx)(`path`,{fill:`currentColor`,d:`M1.051.27a.731.731 0 1 0 0 1.462h5.887a.731.731 0 1 0 0-1.462z`})}),d=(0,s.memo)(({value:e,small:i,onClick:a})=>{let s=t();return(0,c.jsx)(`button`,{type:`button`,role:`checkbox`,"aria-checked":e===`checked`?`true`:e===`indeterminate`?`mixed`:`false`,className:n(r`
          ${o}
          width: ${i===!0?`15px`:`32px`};
          height: ${i===!0?`15px`:`32px`};
          transition: color;
        `,e===`checked`?r`
              color: #566bb8;
            `:r`
              color: ${s.colors.textLight};

              &:hover {
                color: ${s.colors.text};
              }
            `),onClick:a,children:(0,c.jsx)(`div`,{className:r`
          display: flex;
          justify-content: center;
          align-items: center;
        `,children:(0,c.jsxs)(`div`,{className:r`
            width: 15px;
            height: 15px;
            border: 1.5px solid currentColor;
            border-radius: 3px;
            position: relative;

            button:focus > div > & {
              outline: 0;
              box-shadow: 0 0 2px 1px rgb(13 110 253 / 25%);
            }
          `,children:[(0,c.jsx)(`div`,{className:n(r`
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                transition: opacity 0.2s ease-out;
                opacity: 0;
              `,e===`checked`&&r`
                  opacity: 1;
                `),children:(0,c.jsx)(l,{})}),(0,c.jsx)(`div`,{className:n(r`
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                transition: opacity 0.2s ease-out;
                opacity: 0;
              `,e===`indeterminate`&&r`
                  opacity: 1;
                `),children:(0,c.jsx)(u,{})})]})})})});d.displayName=`Checkbox`;export{d as t};
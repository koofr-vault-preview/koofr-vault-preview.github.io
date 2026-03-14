import{r as e}from"./chunk-DECur_0Z.js";import{o as t}from"./emotion-react.browser.esm-B6XXdZtW.js";import{n,t as r}from"./emotion-css.esm-Qs1dyEi9.js";import{n as i,t as a}from"./jsx-runtime-BA9giqqw.js";var o=e(i(),1),s=a(),c=(0,o.memo)((0,o.forwardRef)(({isActive:e,isAllowed:i,isOver:a},o)=>{let c=t(),l=n(r`
          position: fixed;
          display: none;
          z-index: ${c.zindex.dropZoneLines};
          background-color: ${c.colors.border};
        `,e&&r`
            display: block;
          `,a&&(i?r`
                background-color: ${c.colors.successful};
              `:r`
                background-color: ${c.colors.destructive};
              `));return(0,s.jsxs)(`div`,{ref:o,className:r`
            display: flex;
            flex-direction: column;
            flex-grow: 1;
          `,children:[(0,s.jsx)(`div`,{className:n(l,r`
                top: 0;
                left: 5px;
                right: 0;
                height: 5px;
              `)}),(0,s.jsx)(`div`,{className:n(l,r`
                top: 5px;
                bottom: 0;
                right: 0;
                width: 5px;
              `)}),(0,s.jsx)(`div`,{className:n(l,r`
                bottom: 0;
                left: 0;
                right: 5px;
                height: 5px;
              `)}),(0,s.jsx)(`div`,{className:n(l,r`
                top: 0;
                bottom: 5px;
                left: 0;
                width: 5px;
              `)})]})}));c.displayName=`DropZone`;var l=(0,o.createContext)(void 0);function u(){return(0,o.useContext)(l)}export{u as n,c as r,l as t};
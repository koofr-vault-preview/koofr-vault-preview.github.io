import{r as i,u as a,j as o,d as s,b as e}from"./DynamicThemeProvider-71c37830.js";import{b as l}from"./Button-d7c59dae.js";const h=t=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:9,height:7,fill:"none",...t},i.createElement("path",{fill:"currentColor",d:"M2.887 5.115 1.308 3.537A.731.731 0 0 0 .274 4.57l2.082 2.082a.75.75 0 0 0 1.058 0L8.72 1.37A.731.731 0 1 0 7.687.333l-4.8 4.782Z"})),x=t=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:8,height:2,fill:"none",...t},i.createElement("path",{fill:"currentColor",d:"M1.051.27a.731.731 0 1 0 0 1.462h5.887a.731.731 0 1 0 0-1.462H1.051Z"})),m=i.memo(({value:t,small:r,onClick:n})=>{const c=a();return o.jsx("button",{type:"button",role:"checkbox","aria-checked":t==="checked"?"true":t==="indeterminate"?"mixed":"false",className:s(e`
          ${l}
          width: ${r===!0?"15px":"32px"};
          height: ${r===!0?"15px":"32px"};
          transition: color;
        `,t==="checked"?e`
              color: #566bb8;
            `:e`
              color: ${c.colors.textLight};

              &:hover {
                color: ${c.colors.text};
              }
            `),onClick:n,children:o.jsx("div",{className:e`
          display: flex;
          justify-content: center;
          align-items: center;
        `,children:o.jsxs("div",{className:e`
            width: 15px;
            height: 15px;
            border: 1.5px solid currentColor;
            border-radius: 3px;
            position: relative;

            button:focus > div > & {
              outline: 0;
              box-shadow: 0 0 2px 1px rgb(13 110 253 / 25%);
            }
          `,children:[o.jsx("div",{className:s(e`
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
              `,t==="checked"&&e`
                  opacity: 1;
                `),children:o.jsx(h,{})}),o.jsx("div",{className:s(e`
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
              `,t==="indeterminate"&&e`
                  opacity: 1;
                `),children:o.jsx(x,{})})]})})})});export{m as C};

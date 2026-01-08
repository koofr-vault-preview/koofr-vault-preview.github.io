const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/IntroModal-uUN2R4yZ.js","assets/DynamicThemeProvider-MqskYVZg.js","assets/emotion-css.esm-D9bkNW-b.js","assets/Button-D3442RQe.js","assets/range-BRsKrbU2.js","assets/mainWebAuthenticated-BMRPHLJ4.js","assets/NavbarSticky-ClW7pS7A.js","assets/index-But9QDDi.js","assets/index-ulgnFFAK.css","assets/RetinaImage-TZMvYiRS.js"])))=>i.map(i=>d[i]);
import{r as s,u as x,j as e,a as N}from"./DynamicThemeProvider-MqskYVZg.js";import{c as l,a as d,d as C,e as le,L as g}from"./emotion-css.esm-D9bkNW-b.js";import{a as y,u,F as se}from"./mainWebAuthenticated-BMRPHLJ4.js";import{B as v,b as z,d as b}from"./Button-D3442RQe.js";import{D as te}from"./DashboardNavbar-D0Zf3ZwB.js";import{G as ae,a as ne}from"./GitRevision-2tlf2Zij.js";import{_ as ie}from"./index-But9QDDi.js";const re=t=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...t},s.createElement("g",{fill:"none",fillRule:"evenodd"},s.createElement("path",{d:"M0 0h18v18H0z"}),s.createElement("path",{fill:"#676f73",fillRule:"nonzero",d:"M11.279 3.006C14.987 3.006 18 5.978 18 9.652c0 3.638-2.953 6.587-6.61 6.646H5.181C2.323 16.299 0 14.009 0 11.173 0 8.365 2.277 6.09 5.095 6.045h.541l.004-.007c.013-.026.08-.143.32-.45a6.74 6.74 0 0 1 5.319-2.582m0 1.458a5.29 5.29 0 0 0-4.17 2.022l-.036.046a5 5 0 0 0-.139.187l-.007.01-.35.774H5.182c-2.059 0-3.723 1.645-3.723 3.669 0 2.003 1.631 3.636 3.661 3.668h6.16c2.91 0 5.263-2.325 5.263-5.188s-2.354-5.188-5.263-5.188z"}),s.createElement("path",{fill:"#676f73",fillRule:"nonzero",d:"M12.229 3.5v5.271h5.53l.019 1.458H10.77V3.5z"}))),k=s.memo(({percentage:t,severity:a="Normal"})=>{const n=x(),i=a==="Critical"?n.colors.destructive:a==="Warn"?n.colors.warning:n.colors.successful;return e.jsx("div",{className:l`
        width: 100%;
        height: 1px;
        background: ${n.colors.border};
        margin-top: 2px;
        margin-bottom: 2px;
      `,children:e.jsx("div",{className:l`
          width: 0;
          height: 5px;
          position: relative;
          top: -2px;
        `,style:{width:`${Math.min(t,100)}%`,backgroundColor:i}})})});k.displayName="Progress";const oe=t=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...t},s.createElement("g",{fill:"#df533e"},s.createElement("path",{d:"M2.579 13.866c0 .85.688 1.537 1.537 1.537h9.75c.85 0 1.537-.688 1.537-1.537V4.134c0-.85-.688-1.538-1.537-1.538h-9.75c-.85 0-1.537.689-1.537 1.538zM4.115 1.134h9.75a3 3 0 0 1 3 3v9.732a3 3 0 0 1-3 3h-9.75a3 3 0 0 1-3-3V4.134a3 3 0 0 1 3-3"}),s.createElement("path",{d:"M8.262 10.836a.731.731 0 1 0 1.462 0V4.572a.731.731 0 1 0-1.462 0zM9 14.256a.81.81 0 1 0 0-1.62.81.81 0 0 0 0 1.62"}))),ce=t=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...t},s.createElement("g",{fill:"#676f73"},s.createElement("path",{d:"m10.1 2.029.042.035-.08-.03c.023.003.04.004.063.004H2.902v13.923h12.195V6.573l.005.071a.3.3 0 0 0 .055.064zm6.05 3.606c.227.21.41.63.41.938v10.292c0 .309-.25.559-.559.559H2a.56.56 0 0 1-.559-.559V1.135c0-.309.25-.559.559-.559h8.126c.309 0 .742.17.969.38l5.056 4.68Z"}),s.createElement("path",{d:"M9.758 1.714v5.39h6.245V5.64h-4.79V1.707z"}))),$=48,A=s.memo(({areDetailsVisible:t,toggleDetailsVisible:a})=>{const n=x(),i=y(),[o]=u((h,j)=>h.transfersSummarySubscribe(j),h=>h.transfersSummaryData,[]),[r,c]=s.useState(!1),[m,f]=s.useState(!1),w=s.useCallback(h=>{h.stopPropagation(),i.transfersAbortAll()},[i]),p=s.useCallback(h=>{h.stopPropagation(),i.transfersRetryAll()},[i]),Z=s.useCallback(h=>{h.stopPropagation(),c(j=>!j)},[]),B=s.useCallback(h=>{h.stopPropagation(),f(j=>!j)},[]);if(o===void 0)return null;const{totalCount:G,doneCount:W,failedCount:O,sizeProgressDisplay:K,percentage:Y,remainingTimeDisplay:q,speedDisplay:J,isTransferring:E,isAllDone:Q,canRetryAll:X,canAbortAll:ee}=o;return e.jsxs("div",{className:d(l`
          height: ${$}px;
          cursor: pointer;
          display: flex;
          align-items: center;
        `,n.isMobile?l`
              padding: 0 7px;
            `:l`
              padding: 0 25px;
            `,t&&l`
            box-shadow: ${n.boxShadow};
          `),onClick:a,children:[e.jsx("div",{className:d(l`
            flex-grow: 1;
            flex-basis: 0;
          `,n.isMobile?l`
                display: none;
              `:l`
                display: flex;
              `)}),e.jsxs("div",{className:l`
          max-width: 840px;
          margin: auto;
          display: flex;
          align-items: center;
          flex-grow: 3;
          font-size: 13px;
        `,children:[e.jsxs("div",{className:d(l`
              display: flex;
              align-items: center;
            `,n.isMobile?l`
                  margin-right: 5px;
                `:l`
                  width: 160px;
                `),children:[e.jsx("div",{className:l`
              width: 32px;
              height: 32px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-right: 8px;
            `,children:O>0?e.jsx(oe,{role:"img"}):e.jsx(ce,{role:"img"})}),e.jsx("div",{className:l`
              font-size: 13px;
              font-weight: normal;
              color: ${n.colors.text};
            `,onClick:Z,children:r?e.jsx("span",{className:l`
                  font-weight: 600;
                `,children:K}):e.jsxs("span",{children:[e.jsxs("span",{className:l`
                    font-weight: 600;
                  `,children:[W," / ",G]})," ","done"]})})]}),e.jsx("div",{className:l`
            flex-grow: 1;
            margin: -4px 0 0;
          `,children:e.jsx("div",{className:l`
              padding-top: 4px;
              width: 100%;
            `,children:e.jsx(k,{percentage:Y})})}),e.jsxs("div",{className:d(l`
              display: flex;
              justify-content: flex-end;
              align-items: center;
            `,n.isMobile?l`
                  margin-left: 5px;
                `:l`
                  width: 160px;
                `),children:[E?e.jsx("div",{className:l`
                display: flex;
                flex-direction: column;
                font-size: 13px;
                font-weight: normal;
                color: ${n.colors.text};
              `,onClick:B,children:m?e.jsx("span",{className:l`
                    font-weight: 600;
                  `,children:J}):e.jsxs("span",{children:[e.jsx("span",{className:l`
                      font-weight: 600;
                    `,children:q})," ","remaining"]})}):null,E?null:e.jsx(v,{type:"button",variant:"primary-inline",children:t?"Hide details":"Show details"})]})]}),e.jsxs("div",{className:d(l`
            display: flex;
            justify-content: flex-end;
          `,n.isMobile?l`
                margin-left: 5px;
              `:l`
                flex-grow: 1;
                flex-basis: 0;
              `),children:[X?e.jsx(v,{type:"button",variant:"primary-inline",className:l`
              flex-shrink: 0;
              margin-right: 15px;
            `,onClick:p,title:"Retry failed transfers",children:"Retry"}):null,ee?Q?e.jsx(v,{type:"button",variant:"inline",className:l`
                flex-shrink: 0;
              `,onClick:w,title:"Clear all transfers",children:"Clear"}):e.jsx(v,{type:"button",variant:"destructive-inline",className:l`
                flex-shrink: 0;
              `,onClick:w,title:"Cancel all transfers",children:"Cancel"}):null]})]})});A.displayName="TransfersSummary";const H=s.memo(()=>{const t=N(),a=x(),[n]=u((r,c)=>r.spaceUsageSubscribe(c),r=>r.spaceUsageData,[]),[i]=u((r,c)=>r.transfersIsActiveSubscribe(c),r=>r.transfersIsActiveData,[]),o=i?$:0;return n===void 0?null:e.jsx("div",{className:d(l`
          position: fixed;
          left: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          box-shadow: 1px -1px 3px 0 rgb(212, 214, 215);
          background-color: #fff;
          padding: 9px 15px 9px 25px;
          z-index: ${a.zindex.spaceUsage};
        `,t?l`
              width: 100%;
            `:l`
              width: 225px;
            `),style:{bottom:`${o}px`},children:e.jsxs("div",{className:l`
          display: flex;
          flex-direction: row;
          align-items: center;
        `,children:[e.jsx("div",{className:l`
            width: 32px;
            height: 32px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
            margin-right: 7px;
          `,children:e.jsx(re,{role:"img"})}),e.jsxs("div",{className:l`
            display: flex;
            flex-direction: column;
            flex-grow: 1;
          `,children:[e.jsxs("div",{className:l`
              font-size: 11px;
              font-weight: normal;
              color: ${a.colors.textLight};
              margin-bottom: 5px;
            `,children:[n.usedDisplay," of ",n.totalDisplay," used"]}),e.jsx("div",{className:l`
              margin-bottom: 2px;
            `,children:e.jsx(k,{percentage:n.percentage,severity:n.severity})})]})]})})});H.displayName="SpaceUsage";const de=t=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...t},s.createElement("path",{fill:"#263238",d:"m8.97 10.026 3.478 3.479a.72.72 0 0 0 1.018 0l.016-.016a.72.72 0 0 0 0-1.018l-3.479-3.48 3.475-3.474a.72.72 0 0 0 0-1.018l-.016-.017a.72.72 0 0 0-1.018 0L8.969 7.957 5.507 4.495a.72.72 0 0 0-1.018 0l-.016.016a.72.72 0 0 0 0 1.018l3.462 3.462-3.462 3.462a.72.72 0 0 0 0 1.018l.016.017a.72.72 0 0 0 1.018 0z"})),he=t=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...t},s.createElement("path",{fill:"#676f73",d:"m8.97 10.026 3.478 3.479a.72.72 0 0 0 1.018 0l.016-.016a.72.72 0 0 0 0-1.018l-3.479-3.48 3.475-3.474a.72.72 0 0 0 0-1.018l-.016-.017a.72.72 0 0 0-1.018 0L8.969 7.957 5.507 4.495a.72.72 0 0 0-1.019 0l-.015.016a.72.72 0 0 0 0 1.018l3.462 3.462-3.462 3.462a.72.72 0 0 0 0 1.018l.016.017a.72.72 0 0 0 1.018 0z"})),L=s.memo(({transfer:t})=>{const{id:a,name:n,fileIconAttrs:i,state:o}=t,r=x(),c=y(),m=s.useCallback(()=>{c.transfersRetry(a)},[c,a]),f=s.useCallback(()=>{c.transfersAbort(a)},[c,a]),w=s.useCallback(()=>{c.transfersOpen(a)},[c,a]);let p="";switch(o.type){case"Waiting":p="is waiting to be transferred.";break;case"Processing":p="is being processed.";break;case"Transferring":p="is being transferred.";break;case"Failed":p=`failed. ${o.error}`;break;case"Done":p="has been transferred.";break}return e.jsx("div",{className:l`
          border-bottom: 1px solid ${r.colors.borderLight};
          padding: ${r.isMobile?"0 7px 0 15px":"0"};
          margin: ${r.isMobile?"0":"0 25px"};
        `,children:e.jsxs("div",{className:l`
            max-width: 840px;
            display: flex;
            align-items: center;
            padding: 9px 0 8px;
            margin: auto;
          `,children:[e.jsx("div",{className:l`
              width: 26px;
              height: 29px;
              margin-right: 15px;
              flex-shrink: 0;
            `,children:e.jsx(se,{size:"Sm",attrs:i})}),e.jsx("div",{className:l`
              font-size: 13px;
              font-weight: normal;
              color: ${r.colors.text};
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            `,children:n}),e.jsx("div",{className:l`
              font-size: 13px;
              font-weight: normal;
              color: ${r.colors.text};
              flex-grow: 1;
              flex-shrink: 0;
              margin-left: 5px;
            `,children:p}),t.canOpen?e.jsx(v,{type:"button",variant:"primary-inline",className:l`
                flex-shrink: 0;
              `,onClick:w,children:"Open"}):null,t.canRetry?e.jsx(v,{type:"button",variant:"primary-inline",className:l`
                flex-shrink: 0;
              `,onClick:m,children:"Retry"}):null,t.state.type==="Done"?e.jsx("button",{type:"button",className:l`
                ${z}
                width: 32px;
                height: 32px;
                flex-shrink: 0;
              `,onClick:f,"aria-label":"Clear",children:e.jsxs("div",{className:l`
                  display: flex;
                  justify-content: center;
                  align-items: center;
                `,children:[e.jsx(he,{className:l`
                    button:hover > div > & {
                      display: none;
                    }
                  `,role:"img"}),e.jsx(de,{className:l`
                    display: none;

                    button:hover > div > & {
                      display: inline;
                    }
                  `,role:"img"})]})}):e.jsx(v,{type:"button",variant:"destructive-inline",className:l`
                flex-shrink: 0;
              `,onClick:f,children:"Cancel"})]})})});L.displayName="TransfersListTransfer";const V=s.memo(()=>{const[t]=u((a,n)=>a.transfersListSubscribe(n),a=>a.transfersListData,[]);return e.jsx("div",{className:l`
        display: flex;
        flex-direction: column;
      `,children:t?.transfers.map(a=>e.jsx(L,{transfer:a},a.id))})});V.displayName="TransfersList";const I=s.memo(()=>{const t=x(),[a,n]=s.useState(!1),i=s.useCallback(()=>n(r=>!r),[]),[o]=u((r,c)=>r.transfersIsActiveSubscribe(c),r=>r.transfersIsActiveData,[]);return o?e.jsxs("div",{className:l`
        display: block;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: ${t.zindex.transfers};
        border-top: 1px solid ${t.colors.border};
        background-color: #fff;
      `,children:[e.jsx(A,{areDetailsVisible:a,toggleDetailsVisible:i}),e.jsx("div",{className:d(l`
            height: 0px;
            transition: height 0.3s ease-out;
            padding: 2px 0 0;
          `,a&&l`
              height: 191px;
              overflow-y: auto;
            `),children:a?e.jsx(V,{}):null})]}):null});I.displayName="Transfers";const me=t=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...t},s.createElement("g",{fill:"none",fillRule:"evenodd"},s.createElement("path",{d:"M0 0h18v18H0z"}),s.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"M8.991 4.325c.404 0 .732.328.732.732l-.001 3.211h3.213c.37 0 .676.276.725.633l.006.099a.73.73 0 0 1-.731.731H9.722v3.212a.73.73 0 0 1-.631.725l-.1.007a.73.73 0 0 1-.73-.732L8.26 9.73l-3.212.001a.73.73 0 0 1-.725-.632L4.317 9a.73.73 0 0 1 .731-.731H8.26V5.056c0-.37.275-.677.632-.725Z"}),s.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"M15.98 9A6.98 6.98 0 1 0 2.02 9a6.98 6.98 0 0 0 13.96 0M.557 9a8.442 8.442 0 1 1 16.884 0A8.442 8.442 0 0 1 .558 9Z"}))),pe=t=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...t},s.createElement("g",{fill:"none",fillRule:"evenodd"},s.createElement("path",{d:"M0 0h18v18H0z"}),s.createElement("path",{fill:"#676f73",fillRule:"nonzero",d:"M8.991 4.325c.404 0 .732.328.732.732l-.001 3.211h3.213c.37 0 .676.276.725.633l.006.099a.73.73 0 0 1-.731.731H9.722v3.212a.73.73 0 0 1-.631.725l-.1.007a.73.73 0 0 1-.73-.732L8.26 9.73l-3.212.001a.73.73 0 0 1-.725-.632L4.317 9a.73.73 0 0 1 .731-.731H8.26V5.056c0-.37.275-.677.632-.725Z"}),s.createElement("path",{fill:"#676f73",fillRule:"nonzero",d:"M15.98 9A6.98 6.98 0 1 0 2.02 9a6.98 6.98 0 0 0 13.96 0M.557 9a8.442 8.442 0 1 1 16.884 0A8.442 8.442 0 0 1 .558 9Z"}))),M=t=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...t},s.createElement("g",{fill:"#263238"},s.createElement("path",{d:"M9.738 7.686a.731.731 0 1 0-1.462 0v5.31a.731.731 0 1 0 1.462 0zM9 4.266a.81.81 0 1 0 0 1.62.81.81 0 0 0 0-1.62"}),s.createElement("path",{d:"M15.98 9A6.98 6.98 0 1 0 2.02 9a6.98 6.98 0 0 0 13.96 0M.557 9a8.442 8.442 0 1 1 16.884 0A8.442 8.442 0 0 1 .558 9Z"}))),xe=t=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...t},s.createElement("g",{fill:"#676f73"},s.createElement("path",{d:"M9.738 7.686a.731.731 0 1 0-1.462 0v5.31a.731.731 0 1 0 1.462 0zM9 4.266a.81.81 0 1 0 0 1.62.81.81 0 0 0 0-1.62"}),s.createElement("path",{d:"M15.98 9A6.98 6.98 0 1 0 2.02 9a6.98 6.98 0 0 0 13.96 0M.557 9a8.442 8.442 0 1 1 16.884 0A8.442 8.442 0 0 1 .558 9Z"}))),fe=t=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...t},s.createElement("g",{fill:"none",fillRule:"evenodd"},s.createElement("path",{d:"M0 0h18v18H0z"}),s.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"m8.713 12.378-.144.97a.495.495 0 0 0 .502.574h.09a.49.49 0 0 0 .502-.575l-.145-.969zm0-1.46h2.067l.185 1.245.145.97a1.952 1.952 0 0 1-1.95 2.249h-.089a1.955 1.955 0 0 1-1.949-2.25l.144-.969.186-1.245z"}),s.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"M9 .565a5.23 5.23 0 0 1 5.227 5.015l.004.216v.287h1.234c.605 0 1.095.495 1.095 1.094v9.084c0 .642-.52 1.163-1.163 1.163H2.603c-.642 0-1.163-.52-1.163-1.163V7.246c0-.642.52-1.163 1.163-1.163h1.165v-.287A5.23 5.23 0 0 1 8.785.569zm6.096 9.628h-8.1c-.17 0-.481.148-.59.28l-.463.568c-.457.56-1.33.975-2.053.975h-.987l.001 3.945h12.194zm.001-2.648-12.194.001v3.007h.987c.248 0 .63-.166.84-.355l.08-.082.463-.567c.387-.473 1.113-.818 1.724-.818h8.099zM9 2.027a3.77 3.77 0 0 0-3.764 3.575l-.005.194v.287h7.537v-.287a3.77 3.77 0 0 0-3.574-3.764z"}))),ge=t=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...t},s.createElement("g",{fill:"none",fillRule:"evenodd"},s.createElement("path",{d:"M0 0h18v18H0z"}),s.createElement("path",{fill:"#676f73",fillRule:"nonzero",d:"m8.713 12.378-.144.97a.495.495 0 0 0 .502.574h.09a.49.49 0 0 0 .502-.575l-.145-.969zm0-1.46h2.067l.185 1.245.145.97a1.952 1.952 0 0 1-1.95 2.249h-.089a1.955 1.955 0 0 1-1.949-2.25l.144-.969.186-1.245z"}),s.createElement("path",{fill:"#676f73",fillRule:"nonzero",d:"M9 .565a5.23 5.23 0 0 1 5.231 5.231v.287h1.234c.605 0 1.095.495 1.095 1.094v9.084c0 .642-.52 1.163-1.163 1.163H2.603c-.642 0-1.163-.52-1.163-1.163V7.246c0-.642.52-1.163 1.163-1.163h1.165v-.287A5.23 5.23 0 0 1 8.785.569Zm6.097 9.628h-8.1c-.147 0-.396.109-.533.223l-.058.058-.463.567c-.422.517-1.199.91-1.884.968l-.17.007h-.986l.001 3.945h12.194zm0-2.647H2.903v3.007h.987c.248 0 .63-.166.84-.355l.08-.082.463-.567c.355-.434.994-.76 1.569-.81l.155-.008h8.1zM9 2.027a3.77 3.77 0 0 0-3.769 3.769v.287h7.537v-.287a3.77 3.77 0 0 0-3.574-3.764Z"}))),S=t=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...t},s.createElement("g",{fill:"#263238"},s.createElement("path",{d:"M15.98 9A6.98 6.98 0 1 0 2.02 9a6.98 6.98 0 0 0 13.96 0M.557 9a8.442 8.442 0 1 1 16.884 0A8.442 8.442 0 0 1 .558 9"}),s.createElement("path",{d:"M8.32 8.34H5.436a.731.731 0 1 0 0 1.463h4.346v-5.95a.731.731 0 1 0-1.462 0z"}))),ve=t=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...t},s.createElement("g",{fill:"#676f73"},s.createElement("path",{d:"M15.98 9A6.98 6.98 0 1 0 2.02 9a6.98 6.98 0 0 0 13.96 0M.557 9a8.442 8.442 0 1 1 16.884 0A8.442 8.442 0 0 1 .558 9"}),s.createElement("path",{d:"M8.32 8.34H5.436a.731.731 0 1 0 0 1.463h4.346v-5.95a.731.731 0 1 0-1.462 0z"}))),ue=t=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...t},s.createElement("g",{fill:"none",fillRule:"evenodd"},s.createElement("path",{d:"M0 0h18v18H0z"}),s.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"m8.713 12.378-.144.97a.495.495 0 0 0 .502.574h.09a.49.49 0 0 0 .502-.575l-.145-.969zm0-1.46h2.067l.185 1.245.145.97a1.952 1.952 0 0 1-1.95 2.249h-.089a1.955 1.955 0 0 1-1.949-2.25l.144-.969.186-1.245z"}),s.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"M15.465 6.083c.605 0 1.095.495 1.095 1.094v9.084c0 .642-.52 1.163-1.163 1.163H2.603c-.642 0-1.163-.52-1.163-1.163V7.246c0-.642.52-1.163 1.163-1.163zm-.368 4.11h-8.1c-.172 0-.482.148-.59.28l-.464.568c-.457.56-1.33.975-2.053.975h-.987l.001 3.945h12.194zm0-2.647H2.903v3.007h.987c.248 0 .63-.166.84-.355l.08-.082.463-.567c.387-.473 1.113-.818 1.724-.818h8.1z"}),s.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"M12.528 5.231a3.769 3.769 0 0 0-6.556-2.537.731.731 0 1 1-1.081-.984 5.231 5.231 0 0 1 9.1 3.522v1.447a.731.731 0 0 1-1.463 0z"}))),we=t=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...t},s.createElement("g",{fill:"none",fillRule:"evenodd"},s.createElement("path",{d:"M0 0h18v18H0z"}),s.createElement("path",{fill:"#676f73",fillRule:"nonzero",d:"m8.713 12.378-.144.97a.495.495 0 0 0 .502.574h.09a.49.49 0 0 0 .502-.575l-.145-.969zm0-1.46h2.067l.185 1.245.145.97a1.952 1.952 0 0 1-1.95 2.249h-.089a1.955 1.955 0 0 1-1.949-2.25l.144-.969.186-1.245z"}),s.createElement("path",{fill:"#676f73",fillRule:"nonzero",d:"M15.465 6.083c.605 0 1.095.495 1.095 1.094v9.084c0 .642-.52 1.163-1.163 1.163H2.603c-.642 0-1.163-.52-1.163-1.163V7.246c0-.642.52-1.163 1.163-1.163zm-.368 4.11h-8.1c-.172 0-.482.148-.59.28l-.464.568c-.457.56-1.33.975-2.053.975h-.987l.001 3.945h12.194zm0-2.647H2.903v3.007h.987c.248 0 .63-.166.84-.355l.08-.082.463-.567c.387-.473 1.113-.818 1.724-.818h8.1z"}),s.createElement("path",{fill:"#676f73",fillRule:"nonzero",d:"M12.528 5.231a3.769 3.769 0 0 0-6.556-2.537.731.731 0 1 1-1.081-.984 5.231 5.231 0 0 1 9.1 3.522v1.447a.731.731 0 0 1-1.463 0z"}))),D=s.memo(({repo:t,isActive:a})=>{const n=C(),i=x(),o=y(),r=s.useCallback(w=>{o.reposLockRepo(w.id)},[o]),c=a&&n.pathname.endsWith("/recent"),m=a&&n.pathname.endsWith("/info"),f=a&&!c;return e.jsxs("li",{children:[e.jsxs("div",{className:d(l`
              display: flex;
              align-items: center;
              height: 36px;
              padding: 0 0 0 25px;

              &:hover {
                background-color: ${i.colors.hover};
              }
            `,f&&l`
                background-color: ${i.colors.hover};
              `),children:[t.state==="Locked"?e.jsxs(g,{to:`/repos/${t.id}`,className:l`
                width: 36px;
                height: 36px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-shrink: 0;
                margin-right: 7px;
              `,"aria-label":"Safe Box locked",children:[e.jsx(ge,{className:l`
                  a:hover > & {
                    display: none;
                  }
                `,role:"img"}),e.jsx(fe,{className:l`
                  display: none;

                  a:hover > & {
                    display: inline;
                  }
                `,role:"img"})]}):e.jsx("button",{className:l`
                ${z}
                width: 36px;
                height: 36px;
                flex-shrink: 0;
                margin-right: 7px;
              `,onClick:()=>r(t),"aria-label":"Safe Box unlocked",children:e.jsxs("div",{className:l`
                  display: flex;
                  justify-content: center;
                  align-items: center;
                `,children:[e.jsx(we,{className:l`
                    button:hover > div > & {
                      display: none;
                    }
                  `,role:"img"}),e.jsx(ue,{className:l`
                    display: none;

                    button:hover > div > & {
                      display: inline;
                    }
                  `,role:"img"})]})}),e.jsx(g,{to:`/repos/${t.id}`,className:d(l`
                text-decoration: none;
                flex-grow: 1;
                font-size: 14px;
                font-weight: normal;
                height: 32px;
                display: flex;
                flex-direction: row;
                align-items: center;
                overflow: hidden;

                ${b} {
                  color: ${i.colors.text};
                  text-decoration: none;
                }
              `,f&&l`
                  font-weight: 600;
                `),children:e.jsx("span",{className:l`
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
              `,children:t.name})}),e.jsx(g,{to:`/repos/${t.id}/info`,className:l`
              width: 36px;
              height: 36px;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-shrink: 0;
            `,"aria-label":"Safe Box info",children:m?e.jsx(M,{role:"img"}):e.jsxs(e.Fragment,{children:[e.jsx(xe,{className:l`
                    a:hover > & {
                      display: none;
                    }
                  `,role:"img"}),e.jsx(M,{className:l`
                    display: none;

                    a:hover > & {
                      display: inline;
                    }
                  `,role:"img"})]})})]}),a?e.jsx("ul",{className:l`
              list-style: none;
              margin: 0;
              padding: 0;
              transition: height 0.3s ease-out;
              overflow: hidden;
            `,children:e.jsx("li",{children:e.jsxs("div",{className:d(l`
                    display: flex;
                    align-items: center;
                    height: 36px;
                    padding: 0 0 0 35px;

                    &:hover {
                      background-color: ${i.colors.hover};
                    }
                  `,c&&l`
                      background-color: ${i.colors.hover};
                    `),children:[e.jsx(g,{to:`/repos/${t.id}/recent`,className:l`
                    width: 36px;
                    height: 36px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-shrink: 0;
                    margin-right: 7px;
                  `,"aria-label":"Recent",children:c?e.jsx(S,{role:"img"}):e.jsxs(e.Fragment,{children:[e.jsx(ve,{className:l`
                          a:hover > & {
                            display: none;
                          }
                        `,role:"img"}),e.jsx(S,{className:l`
                          display: none;

                          a:hover > & {
                            display: inline;
                          }
                        `,role:"img"})]})}),e.jsx(g,{to:`/repos/${t.id}/recent`,className:d(l`
                      text-decoration: none;
                      flex-grow: 1;
                      font-size: 14px;
                      font-weight: normal;
                      height: 32px;
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      overflow: hidden;

                      ${b} {
                        color: ${i.colors.text};
                        text-decoration: none;
                      }
                    `,c&&l`
                        font-weight: 600;
                      `),children:e.jsx("span",{className:l`
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      overflow: hidden;
                    `,children:"Recent"})})]})})}):null]})});D.displayName="RepoItem";const T=s.memo(({isActive:t})=>{const a=x();return e.jsx("li",{children:e.jsxs(g,{to:"/repos/create",className:d(l`
            display: flex;
            align-items: center;
            height: 36px;
            padding: 0 0 0 25px;

            ${b} {
              color: ${a.colors.text};
              text-decoration: none;
            }

            &:hover {
              background-color: ${a.colors.hover};
            }
          `,t&&l`
              background-color: ${a.colors.hover};
            `),children:[e.jsxs("div",{className:l`
            width: 36px;
            height: 36px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
            margin-right: 7px;
          `,children:[e.jsx(pe,{className:l`
              div:hover > & {
                display: none;
              }
            `,role:"img"}),e.jsx(me,{className:l`
              display: none;

              div:hover > & {
                display: inline;
              }
            `,role:"img"})]}),e.jsx("div",{className:d(l`
              text-decoration: none;
              font-size: 14px;
              flex-grow: 1;
              font-weight: normal;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            `,t&&l`
                font-weight: 600;
              `),children:"Create new"})]})})});T.displayName="RepoCreateItem";const U=s.memo(()=>{const t=C(),n=le().repoId,[i]=u((o,r)=>o.reposSubscribe(r),o=>o.reposData,[]);return e.jsx("aside",{"aria-label":"Safe Boxes navigation",children:e.jsxs("ul",{className:l`
          list-style: none;
          margin: 0 0 30px;
          padding: 0;
        `,children:[i?.repos.map(o=>e.jsx(D,{repo:o,isActive:n!==void 0&&o.id===n},o.id)),e.jsx(T,{isActive:t.pathname==="/repos/create"})]})})});U.displayName="Repos";const be=s.lazy(()=>ie(()=>import("./IntroModal-uUN2R4yZ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(t=>({default:t.IntroModal}))),_=s.memo(({isVisible:t,hide:a})=>t?e.jsx(be,{isVisible:t,hide:a}):null);_.displayName="IntroModalLazy";function je(){const[t,a]=s.useState({isVisible:!1,payload:void 0}),n=s.useCallback(o=>a({isVisible:!0,payload:o}),[]),i=s.useCallback(()=>a({isVisible:!1,payload:void 0}),[]);return{isVisible:t.isVisible,payload:t.payload,show:n,hide:i}}const R="vaultIntroSeen",ye=()=>{const t=je(),a=t.show,[n]=u((i,o)=>i.reposSubscribe(o),i=>i.reposData,[]);return s.useEffect(()=>{if(n?.status.type==="Loaded"&&n.repos.length===0)try{localStorage.getItem(R)!=="true"&&(a(),localStorage.setItem(R,"true"))}catch{}},[n,a]),t},P=s.memo(()=>{const t=x(),n=y().configGetBaseUrl(),i=ye();return e.jsxs(e.Fragment,{children:[e.jsxs("footer",{className:l`
          margin: 0 0 0 25px;
        `,children:[e.jsxs("div",{className:l`
            margin: 0 0 15px;
            font-size: 12px;
            color: ${t.colors.text};
            text-align: center;
          `,children:[e.jsx("a",{href:"https://koofr.eu/help/koofr-vault/",target:"_blank",rel:"noreferrer",className:l`
              ${b} {
                color: ${t.colors.text};
              }
            `,children:"Help and support"}),e.jsx("span",{"aria-hidden":!0,children:" · "}),e.jsx("button",{type:"button",className:l`
              ${z}
              color: ${t.colors.text};
            `,onClick:()=>{i.show()},children:"Intro"}),e.jsx("span",{"aria-hidden":!0,children:" · "}),e.jsx("a",{href:`${n}/legal`,target:"_blank",rel:"noreferrer",className:l`
              ${b} {
                color: ${t.colors.text};
              }
            `,children:"Legal"}),e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx(g,{to:"/landing",className:l`
                  ${b} {
                    color: ${t.colors.text};
                  }
                `,children:"Landing page"})]})]}),e.jsxs("div",{className:l`
            font-size: 12px;
            text-align: center;
          `,children:[e.jsx(ae,{}),e.jsx(ne,{})]})]}),e.jsx(s.Suspense,{children:e.jsx(_,{isVisible:i.isVisible,hide:i.hide})})]})});P.displayName="DashboardSidenavLinks";const F=s.memo(({className:t})=>{const a=N();return e.jsxs("div",{className:d(l``,a?l`
                width: 100%;
                margin: 0;
              `:l`
                width: 225px;
                flex-grow: 0;
                flex-shrink: 0;
                margin: 0 50px 0 0;
                overflow: hidden;
              `,t),children:[e.jsx(U,{}),e.jsx(P,{})]})});F.displayName="DashboardSidenav";const Ne=s.memo(({navbarLeft:t,navbarHeader:a,navbarNav:n,navbarExtra:i,className:o,sidenavClassName:r,children:c})=>{const m=N();return e.jsxs(e.Fragment,{children:[e.jsx(te,{left:t,header:a,nav:n,extra:i}),e.jsxs("div",{className:d(l`
              display: flex;
            `,m?l`
                  flex-direction: column-reverse;
                  padding: 30px 0 75px;
                `:l`
                  flex-direction: row;
                  flex-grow: 1;
                  padding: 30px 25px 75px 0;
                `,o),children:[e.jsx(F,{className:r}),e.jsx("main",{className:d(l`
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                overflow-x: hidden;
              `,m?l`
                    margin: 0 0 32px;
                  `:l`
                    margin: 0 32px 0 0;
                  `),children:c})]}),e.jsx(I,{}),e.jsx(H,{})]})});Ne.displayName="DashboardLayout";export{Ne as D,M as S,I as T,$ as a,xe as b,je as u};

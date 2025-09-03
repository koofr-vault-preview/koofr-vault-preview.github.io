const __vite__fileDeps=["assets/IntroModal-CNd_Ie1S.js","assets/DynamicThemeProvider-CxehgrR0.js","assets/emotion-css.esm-CiHGz3gB.js","assets/Button-Dt6jELX4.js","assets/range-uHCkqjRl.js","assets/mainWebAuthenticated-CnuyUC0b.js","assets/NavbarSticky-DuO2swp8.js","assets/index-C4JoeLWg.js","assets/index-DxkFTwjz.css","assets/RetinaImage-C1tj6ORK.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as t,u as p,j as e,a as N}from"./DynamicThemeProvider-CxehgrR0.js";import{c as l,a as d,d as z,L as f,e as B}from"./emotion-css.esm-CiHGz3gB.js";import{a as y,u,F as G}from"./mainWebAuthenticated-CnuyUC0b.js";import{B as v,b as k,d as b}from"./Button-Dt6jELX4.js";import{D as W}from"./DashboardNavbar-s8GXp9xa.js";import{G as O,a as K}from"./GitRevision-BJZb5Tzu.js";import{_ as Y}from"./index-C4JoeLWg.js";const q=s=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...s},t.createElement("g",{fill:"none",fillRule:"evenodd"},t.createElement("path",{d:"M0 0h18v18H0z"}),t.createElement("path",{fill:"#676F73",fillRule:"nonzero",d:"M11.279 3.006C14.987 3.006 18 5.978 18 9.652c0 3.638-2.953 6.587-6.61 6.646H5.181C2.323 16.299 0 14.009 0 11.173 0 8.365 2.277 6.09 5.095 6.045h.541l.004-.007c.013-.026.08-.143.32-.45a6.743 6.743 0 0 1 5.319-2.582zm0 1.458a5.285 5.285 0 0 0-4.17 2.022l-.036.046a5.32 5.32 0 0 0-.139.187l-.007.01-.35.774H5.182c-2.059 0-3.723 1.645-3.723 3.669 0 2.003 1.631 3.636 3.661 3.668h6.16c2.91 0 5.263-2.325 5.263-5.188 0-2.862-2.354-5.188-5.263-5.188z"}),t.createElement("path",{fill:"#676F73",fillRule:"nonzero",d:"M12.229 3.5v5.271h5.53l.019 1.458H10.77V3.5z"}))),C=t.memo(({percentage:s,severity:a="Normal"})=>{const n=p(),i=a==="Critical"?n.colors.destructive:a==="Warn"?n.colors.warning:n.colors.successful;return e.jsx("div",{className:l`
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
        `,style:{width:`${Math.min(s,100)}%`,backgroundColor:i}})})}),J=s=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...s},t.createElement("g",{fill:"#DF533E"},t.createElement("path",{d:"M2.579 13.866c0 .85.688 1.537 1.537 1.537h9.75c.85 0 1.537-.688 1.537-1.537V4.134c0-.85-.688-1.538-1.537-1.538h-9.75c-.85 0-1.537.689-1.537 1.538v9.732ZM4.115 1.134h9.75a3 3 0 0 1 3 3v9.732a3 3 0 0 1-3 3h-9.75a3 3 0 0 1-3-3V4.134a3 3 0 0 1 3-3Z"}),t.createElement("path",{d:"M8.262 10.836a.731.731 0 1 0 1.462 0V4.572a.731.731 0 1 0-1.462 0v6.264ZM9 14.256a.81.81 0 1 0 0-1.62.81.81 0 0 0 0 1.62Z"}))),Q=s=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...s},t.createElement("g",{fill:"#676F73"},t.createElement("path",{d:"m10.1 2.029.042.035a.55.55 0 0 0-.08-.03c.023.003.04.004.063.004H2.902v13.923h12.195V6.573a.54.54 0 0 0 .005.071.31.31 0 0 0 .055.064L10.1 2.028Zm6.05 3.606c.227.21.41.63.41.938v10.292c0 .309-.25.559-.559.559H2a.559.559 0 0 1-.559-.559V1.135c0-.309.25-.559.559-.559h8.126c.309 0 .742.17.969.38l5.056 4.68Z"}),t.createElement("path",{d:"M9.758 1.714v5.39h6.245V5.64h-4.79V1.707l-1.455.007Z"}))),Z=48,X=t.memo(({areDetailsVisible:s,toggleDetailsVisible:a})=>{const n=p(),i=y(),[o]=u((h,j)=>h.transfersSummarySubscribe(j),h=>h.transfersSummaryData,[]);let[r,c]=t.useState(!1),[m,g]=t.useState(!1);const w=t.useCallback(h=>{h.stopPropagation(),i.transfersAbortAll()},[i]),x=t.useCallback(h=>{h.stopPropagation(),i.transfersRetryAll()},[i]),$=t.useCallback(h=>{h.stopPropagation(),c(j=>!j)},[]),V=t.useCallback(h=>{h.stopPropagation(),g(j=>!j)},[]);if(o===void 0)return null;const{totalCount:A,doneCount:H,failedCount:L,sizeProgressDisplay:D,percentage:I,remainingTimeDisplay:F,speedDisplay:T,isTransferring:E,isAllDone:_,canRetryAll:U,canAbortAll:P}=o;return e.jsxs("div",{className:d(l`
          height: ${Z}px;
          cursor: pointer;
          display: flex;
          align-items: center;
        `,n.isMobile?l`
              padding: 0 7px;
            `:l`
              padding: 0 25px;
            `,s&&l`
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
            `,children:L>0?e.jsx(J,{role:"img"}):e.jsx(Q,{role:"img"})}),e.jsx("div",{className:l`
              font-size: 13px;
              font-weight: normal;
              color: ${n.colors.text};
            `,onClick:$,children:r?e.jsx("span",{className:l`
                  font-weight: 600;
                `,children:D}):e.jsxs("span",{children:[e.jsxs("span",{className:l`
                    font-weight: 600;
                  `,children:[H," / ",A]})," ","done"]})})]}),e.jsx("div",{className:l`
            flex-grow: 1;
            margin: -4px 0 0;
          `,children:e.jsx("div",{className:l`
              padding-top: 4px;
              width: 100%;
            `,children:e.jsx(C,{percentage:I})})}),e.jsxs("div",{className:d(l`
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
              `,onClick:V,children:m?e.jsx("span",{className:l`
                    font-weight: 600;
                  `,children:T}):e.jsxs("span",{children:[e.jsx("span",{className:l`
                      font-weight: 600;
                    `,children:F})," ","remaining"]})}):null,E?null:e.jsx(v,{type:"button",variant:"primary-inline",children:s?"Hide details":"Show details"})]})]}),e.jsxs("div",{className:d(l`
            display: flex;
            justify-content: flex-end;
          `,n.isMobile?l`
                margin-left: 5px;
              `:l`
                flex-grow: 1;
                flex-basis: 0;
              `),children:[U?e.jsx(v,{type:"button",variant:"primary-inline",className:l`
              flex-shrink: 0;
              margin-right: 15px;
            `,onClick:x,title:"Retry failed transfers",children:"Retry"}):null,P?_?e.jsx(v,{type:"button",variant:"inline",className:l`
                flex-shrink: 0;
              `,onClick:w,title:"Clear all transfers",children:"Clear"}):e.jsx(v,{type:"button",variant:"destructive-inline",className:l`
                flex-shrink: 0;
              `,onClick:w,title:"Cancel all transfers",children:"Cancel"}):null]})]})}),ee=t.memo(()=>{const s=N(),a=p(),[n]=u((r,c)=>r.spaceUsageSubscribe(c),r=>r.spaceUsageData,[]),[i]=u((r,c)=>r.transfersIsActiveSubscribe(c),r=>r.transfersIsActiveData,[]),o=i?Z:0;return n===void 0?null:e.jsx("div",{className:d(l`
          position: fixed;
          left: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          box-shadow: 1px -1px 3px 0 rgb(212, 214, 215);
          background-color: #fff;
          padding: 9px 15px 9px 25px;
          z-index: ${a.zindex.spaceUsage};
        `,s?l`
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
          `,children:e.jsx(q,{role:"img"})}),e.jsxs("div",{className:l`
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
            `,children:e.jsx(C,{percentage:n.percentage,severity:n.severity})})]})]})})}),le=s=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...s},t.createElement("path",{fill:"#263238",d:"m8.97 10.026 3.478 3.479a.72.72 0 0 0 1.018 0l.016-.016a.72.72 0 0 0 0-1.018l-3.479-3.48 3.475-3.474a.72.72 0 0 0 0-1.018l-.016-.017a.72.72 0 0 0-1.018 0L8.969 7.957 5.507 4.495a.72.72 0 0 0-1.018 0l-.016.016a.72.72 0 0 0 0 1.018l3.462 3.462-3.462 3.462a.72.72 0 0 0 0 1.018l.016.017a.72.72 0 0 0 1.018 0l3.462-3.462Z"})),te=s=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...s},t.createElement("path",{fill:"#676F73",d:"m8.97 10.026 3.478 3.479a.72.72 0 0 0 1.018 0l.016-.016a.72.72 0 0 0 0-1.018l-3.479-3.48 3.475-3.474a.72.72 0 0 0 0-1.018l-.016-.017a.72.72 0 0 0-1.018 0L8.969 7.957 5.507 4.495a.72.72 0 0 0-1.019 0l-.015.016a.72.72 0 0 0 0 1.018l3.462 3.462-3.462 3.462a.72.72 0 0 0 0 1.018l.016.017a.72.72 0 0 0 1.018 0l3.462-3.462Z"})),se=t.memo(({transfer:s})=>{const{id:a,name:n,fileIconAttrs:i,state:o}=s,r=p(),c=y(),m=t.useCallback(()=>{c.transfersRetry(a)},[c,a]),g=t.useCallback(()=>{c.transfersAbort(a)},[c,a]),w=t.useCallback(()=>{c.transfersOpen(a)},[c,a]);let x="";switch(o.type){case"Waiting":x="is waiting to be transferred.";break;case"Processing":x="is being processed.";break;case"Transferring":x="is being transferred.";break;case"Failed":x=`failed. ${o.error}`;break;case"Done":x="has been transferred.";break}return e.jsx("div",{className:l`
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
            `,children:e.jsx(G,{size:"Sm",attrs:i})}),e.jsx("div",{className:l`
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
            `,children:x}),s.canOpen?e.jsx(v,{type:"button",variant:"primary-inline",className:l`
                flex-shrink: 0;
              `,onClick:w,children:"Open"}):null,s.canRetry?e.jsx(v,{type:"button",variant:"primary-inline",className:l`
                flex-shrink: 0;
              `,onClick:m,children:"Retry"}):null,s.state.type==="Done"?e.jsx("button",{type:"button",className:l`
                ${k}
                width: 32px;
                height: 32px;
                flex-shrink: 0;
              `,onClick:g,"aria-label":"Clear",children:e.jsxs("div",{className:l`
                  display: flex;
                  justify-content: center;
                  align-items: center;
                `,children:[e.jsx(te,{className:l`
                    button:hover > div > & {
                      display: none;
                    }
                  `,role:"img"}),e.jsx(le,{className:l`
                    display: none;

                    button:hover > div > & {
                      display: inline;
                    }
                  `,role:"img"})]})}):e.jsx(v,{type:"button",variant:"destructive-inline",className:l`
                flex-shrink: 0;
              `,onClick:g,children:"Cancel"})]})})}),ae=t.memo(()=>{const[s]=u((a,n)=>a.transfersListSubscribe(n),a=>a.transfersListData,[]);return e.jsx("div",{className:l`
        display: flex;
        flex-direction: column;
      `,children:s==null?void 0:s.transfers.map(a=>e.jsx(se,{transfer:a},a.id))})}),ne=t.memo(()=>{const s=p(),[a,n]=t.useState(!1),i=t.useCallback(()=>n(r=>!r),[]),[o]=u((r,c)=>r.transfersIsActiveSubscribe(c),r=>r.transfersIsActiveData,[]);return o?e.jsxs("div",{className:l`
        display: block;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: ${s.zindex.transfers};
        border-top: 1px solid ${s.colors.border};
        background-color: #fff;
      `,children:[e.jsx(X,{areDetailsVisible:a,toggleDetailsVisible:i}),e.jsx("div",{className:d(l`
            height: 0px;
            transition: height 0.3s ease-out;
            padding: 2px 0 0;
          `,a&&l`
              height: 191px;
              overflow-y: auto;
            `),children:a?e.jsx(ae,{}):null})]}):null}),ie=s=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...s},t.createElement("g",{fill:"none",fillRule:"evenodd"},t.createElement("path",{d:"M0 0h18v18H0z"}),t.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"M8.991 4.325c.404 0 .732.328.732.732l-.001 3.211h3.213c.37 0 .676.276.725.633l.006.099a.731.731 0 0 1-.731.731H9.722v3.212a.73.73 0 0 1-.631.725l-.1.007a.731.731 0 0 1-.73-.732L8.26 9.73l-3.212.001a.731.731 0 0 1-.725-.632L4.317 9a.73.73 0 0 1 .731-.731H8.26V5.056c0-.37.275-.677.632-.725Z"}),t.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"M15.98 9A6.98 6.98 0 1 0 2.02 9a6.98 6.98 0 0 0 13.96 0ZM.557 9a8.442 8.442 0 1 1 16.884 0A8.442 8.442 0 0 1 .558 9Z"}))),re=s=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...s},t.createElement("g",{fill:"none",fillRule:"evenodd"},t.createElement("path",{d:"M0 0h18v18H0z"}),t.createElement("path",{fill:"#676F73",fillRule:"nonzero",d:"M8.991 4.325c.404 0 .732.328.732.732l-.001 3.211h3.213c.37 0 .676.276.725.633l.006.099a.731.731 0 0 1-.731.731H9.722v3.212a.73.73 0 0 1-.631.725l-.1.007a.731.731 0 0 1-.73-.732L8.26 9.73l-3.212.001a.731.731 0 0 1-.725-.632L4.317 9a.73.73 0 0 1 .731-.731H8.26V5.056c0-.37.275-.677.632-.725Z"}),t.createElement("path",{fill:"#676F73",fillRule:"nonzero",d:"M15.98 9A6.98 6.98 0 1 0 2.02 9a6.98 6.98 0 0 0 13.96 0ZM.557 9a8.442 8.442 0 1 1 16.884 0A8.442 8.442 0 0 1 .558 9Z"}))),M=s=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...s},t.createElement("g",{fill:"#263238"},t.createElement("path",{d:"M9.738 7.686a.731.731 0 1 0-1.462 0v5.31a.731.731 0 1 0 1.462 0v-5.31ZM9 4.266a.81.81 0 1 0 0 1.62.81.81 0 0 0 0-1.62Z"}),t.createElement("path",{d:"M15.98 9A6.98 6.98 0 1 0 2.02 9a6.98 6.98 0 0 0 13.96 0ZM.557 9a8.442 8.442 0 1 1 16.884 0A8.442 8.442 0 0 1 .558 9Z"}))),oe=s=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...s},t.createElement("g",{fill:"#676F73"},t.createElement("path",{d:"M9.738 7.686a.731.731 0 1 0-1.462 0v5.31a.731.731 0 1 0 1.462 0v-5.31ZM9 4.266a.81.81 0 1 0 0 1.62.81.81 0 0 0 0-1.62Z"}),t.createElement("path",{d:"M15.98 9A6.98 6.98 0 1 0 2.02 9a6.98 6.98 0 0 0 13.96 0ZM.557 9a8.442 8.442 0 1 1 16.884 0A8.442 8.442 0 0 1 .558 9Z"}))),ce=s=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...s},t.createElement("g",{fill:"none",fillRule:"evenodd"},t.createElement("path",{d:"M0 0h18v18H0z"}),t.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"m8.713 12.378-.144.97a.495.495 0 0 0 .502.574h.09a.491.491 0 0 0 .502-.575l-.145-.969h-.805Zm0-1.46h2.067l.185 1.245.145.97a1.952 1.952 0 0 1-1.95 2.249h-.089a1.955 1.955 0 0 1-1.949-2.25l.144-.969.186-1.245h1.261Z"}),t.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"M9 .565a5.231 5.231 0 0 1 5.227 5.015l.004.216v.287h1.234c.605 0 1.095.495 1.095 1.094v9.084c0 .642-.52 1.163-1.163 1.163H2.603c-.642 0-1.163-.52-1.163-1.163V7.246c0-.642.52-1.163 1.163-1.163h1.165v-.287A5.231 5.231 0 0 1 8.785.569L9 .565Zm6.096 9.628h-8.1c-.17 0-.481.148-.59.28l-.463.568c-.457.56-1.33.975-2.053.975h-.987l.001 3.945h12.194l-.002-5.768Zm.001-2.648-12.194.001v3.007h.987c.248 0 .63-.166.84-.355l.08-.082.463-.567c.387-.473 1.113-.818 1.724-.818h8.099l.001-1.186ZM9 2.027a3.769 3.769 0 0 0-3.764 3.575l-.005.194v.287h7.537v-.287a3.769 3.769 0 0 0-3.574-3.764L9 2.027Z"}))),de=s=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...s},t.createElement("g",{fill:"none",fillRule:"evenodd"},t.createElement("path",{d:"M0 0h18v18H0z"}),t.createElement("path",{fill:"#676F73",fillRule:"nonzero",d:"m8.713 12.378-.144.97a.495.495 0 0 0 .502.574h.09a.491.491 0 0 0 .502-.575l-.145-.969h-.805Zm0-1.46h2.067l.185 1.245.145.97a1.952 1.952 0 0 1-1.95 2.249h-.089a1.955 1.955 0 0 1-1.949-2.25l.144-.969.186-1.245h1.261Z"}),t.createElement("path",{fill:"#676F73",fillRule:"nonzero",d:"M9 .565a5.231 5.231 0 0 1 5.231 5.231v.287h1.234c.605 0 1.095.495 1.095 1.094v9.084c0 .642-.52 1.163-1.163 1.163H2.603c-.642 0-1.163-.52-1.163-1.163V7.246c0-.642.52-1.163 1.163-1.163h1.165v-.287A5.231 5.231 0 0 1 8.785.569Zm6.097 9.628h-8.1c-.147 0-.396.109-.533.223l-.058.058-.463.567c-.422.517-1.199.91-1.884.968l-.17.007h-.986l.001 3.945h12.194l-.001-5.768Zm0-2.647H2.903v3.007h.987c.248 0 .63-.166.84-.355l.08-.082.463-.567c.355-.434.994-.76 1.569-.81l.155-.008h8.1V7.546ZM9 2.027a3.769 3.769 0 0 0-3.769 3.769v.287h7.537v-.287a3.769 3.769 0 0 0-3.574-3.764Z"}))),S=s=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...s},t.createElement("g",{fill:"#263238"},t.createElement("path",{d:"M15.98 9A6.98 6.98 0 1 0 2.02 9a6.98 6.98 0 0 0 13.96 0M.557 9a8.442 8.442 0 1 1 16.884 0A8.442 8.442 0 0 1 .558 9"}),t.createElement("path",{d:"M8.32 8.34H5.436a.731.731 0 1 0 0 1.463h4.346v-5.95a.731.731 0 1 0-1.462 0z"}))),he=s=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...s},t.createElement("g",{fill:"#676F73"},t.createElement("path",{d:"M15.98 9A6.98 6.98 0 1 0 2.02 9a6.98 6.98 0 0 0 13.96 0M.557 9a8.442 8.442 0 1 1 16.884 0A8.442 8.442 0 0 1 .558 9"}),t.createElement("path",{d:"M8.32 8.34H5.436a.731.731 0 1 0 0 1.463h4.346v-5.95a.731.731 0 1 0-1.462 0z"}))),me=s=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...s},t.createElement("g",{fill:"none",fillRule:"evenodd"},t.createElement("path",{d:"M0 0h18v18H0z"}),t.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"m8.713 12.378-.144.97a.495.495 0 0 0 .502.574h.09a.491.491 0 0 0 .502-.575l-.145-.969h-.805Zm0-1.46h2.067l.185 1.245.145.97a1.952 1.952 0 0 1-1.95 2.249h-.089a1.955 1.955 0 0 1-1.949-2.25l.144-.969.186-1.245h1.261Z"}),t.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"M15.465 6.083c.605 0 1.095.495 1.095 1.094v9.084c0 .642-.52 1.163-1.163 1.163H2.603c-.642 0-1.163-.52-1.163-1.163V7.246c0-.642.52-1.163 1.163-1.163h12.862Zm-.368 4.11h-8.1c-.172 0-.482.148-.59.28l-.464.568c-.457.56-1.33.975-2.053.975h-.987l.001 3.945h12.194l-.001-5.768Zm0-2.647H2.903v3.007h.987c.248 0 .63-.166.84-.355l.08-.082.463-.567c.387-.473 1.113-.818 1.724-.818h8.1V7.546Z"}),t.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"M12.528 5.231a3.769 3.769 0 0 0-6.556-2.537.731.731 0 1 1-1.081-.984 5.231 5.231 0 0 1 9.1 3.522v1.447a.731.731 0 0 1-1.463 0V5.23Z"}))),xe=s=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...s},t.createElement("g",{fill:"none",fillRule:"evenodd"},t.createElement("path",{d:"M0 0h18v18H0z"}),t.createElement("path",{fill:"#676F73",fillRule:"nonzero",d:"m8.713 12.378-.144.97a.495.495 0 0 0 .502.574h.09a.491.491 0 0 0 .502-.575l-.145-.969h-.805Zm0-1.46h2.067l.185 1.245.145.97a1.952 1.952 0 0 1-1.95 2.249h-.089a1.955 1.955 0 0 1-1.949-2.25l.144-.969.186-1.245h1.261Z"}),t.createElement("path",{fill:"#676F73",fillRule:"nonzero",d:"M15.465 6.083c.605 0 1.095.495 1.095 1.094v9.084c0 .642-.52 1.163-1.163 1.163H2.603c-.642 0-1.163-.52-1.163-1.163V7.246c0-.642.52-1.163 1.163-1.163h12.862Zm-.368 4.11h-8.1c-.172 0-.482.148-.59.28l-.464.568c-.457.56-1.33.975-2.053.975h-.987l.001 3.945h12.194l-.001-5.768Zm0-2.647H2.903v3.007h.987c.248 0 .63-.166.84-.355l.08-.082.463-.567c.387-.473 1.113-.818 1.724-.818h8.1V7.546Z"}),t.createElement("path",{fill:"#676F73",fillRule:"nonzero",d:"M12.528 5.231a3.769 3.769 0 0 0-6.556-2.537.731.731 0 1 1-1.081-.984 5.231 5.231 0 0 1 9.1 3.522v1.447a.731.731 0 0 1-1.463 0V5.23Z"}))),pe=t.memo(({repo:s,isActive:a})=>{const n=z(),i=p(),o=y(),r=t.useCallback(w=>{o.reposLockRepo(w.id)},[o]),c=a&&n.pathname.endsWith("/recent"),m=a&&n.pathname.endsWith("/info"),g=a&&!c;return e.jsxs("li",{children:[e.jsxs("div",{className:d(l`
              display: flex;
              align-items: center;
              height: 36px;
              padding: 0 0 0 25px;

              &:hover {
                background-color: ${i.colors.hover};
              }
            `,g&&l`
                background-color: ${i.colors.hover};
              `),children:[s.state==="Locked"?e.jsxs(f,{to:`/repos/${s.id}`,className:l`
                width: 36px;
                height: 36px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-shrink: 0;
                margin-right: 7px;
              `,"aria-label":"Safe Box locked",children:[e.jsx(de,{className:l`
                  a:hover > & {
                    display: none;
                  }
                `,role:"img"}),e.jsx(ce,{className:l`
                  display: none;

                  a:hover > & {
                    display: inline;
                  }
                `,role:"img"})]}):e.jsx("button",{className:l`
                ${k}
                width: 36px;
                height: 36px;
                flex-shrink: 0;
                margin-right: 7px;
              `,onClick:()=>r(s),"aria-label":"Safe Box unlocked",children:e.jsxs("div",{className:l`
                  display: flex;
                  justify-content: center;
                  align-items: center;
                `,children:[e.jsx(xe,{className:l`
                    button:hover > div > & {
                      display: none;
                    }
                  `,role:"img"}),e.jsx(me,{className:l`
                    display: none;

                    button:hover > div > & {
                      display: inline;
                    }
                  `,role:"img"})]})}),e.jsx(f,{to:`/repos/${s.id}`,className:d(l`
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
              `,g&&l`
                  font-weight: 600;
                `),children:e.jsx("span",{className:l`
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
              `,children:s.name})}),e.jsx(f,{to:`/repos/${s.id}/info`,className:l`
              width: 36px;
              height: 36px;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-shrink: 0;
            `,"aria-label":"Safe Box info",children:m?e.jsx(M,{role:"img"}):e.jsxs(e.Fragment,{children:[e.jsx(oe,{className:l`
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
                    `),children:[e.jsx(f,{to:`/repos/${s.id}/recent`,className:l`
                    width: 36px;
                    height: 36px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-shrink: 0;
                    margin-right: 7px;
                  `,"aria-label":"Recent",children:c?e.jsx(S,{role:"img"}):e.jsxs(e.Fragment,{children:[e.jsx(he,{className:l`
                          a:hover > & {
                            display: none;
                          }
                        `,role:"img"}),e.jsx(S,{className:l`
                          display: none;

                          a:hover > & {
                            display: inline;
                          }
                        `,role:"img"})]})}),e.jsx(f,{to:`/repos/${s.id}/recent`,className:d(l`
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
                    `,children:"Recent"})})]})})}):null]})}),ge=t.memo(({isActive:s})=>{const a=p();return e.jsx("li",{children:e.jsxs(f,{to:"/repos/create",className:d(l`
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
          `,s&&l`
              background-color: ${a.colors.hover};
            `),children:[e.jsxs("div",{className:l`
            width: 36px;
            height: 36px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
            margin-right: 7px;
          `,children:[e.jsx(re,{className:l`
              div:hover > & {
                display: none;
              }
            `,role:"img"}),e.jsx(ie,{className:l`
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
            `,s&&l`
                font-weight: 600;
              `),children:"Create new"})]})})}),fe=t.memo(()=>{const s=z(),n=B().repoId,[i]=u((o,r)=>o.reposSubscribe(r),o=>o.reposData,[]);return e.jsx("aside",{"aria-label":"Safe Boxes navigation",children:e.jsxs("ul",{className:l`
          list-style: none;
          margin: 0 0 30px;
          padding: 0;
        `,children:[i==null?void 0:i.repos.map(o=>e.jsx(pe,{repo:o,isActive:n!==void 0&&o.id===n},o.id)),e.jsx(ge,{isActive:s.pathname==="/repos/create"})]})})}),ve=t.lazy(()=>Y(()=>import("./IntroModal-CNd_Ie1S.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(s=>({default:s.IntroModal}))),ue=t.memo(({isVisible:s,hide:a})=>s?e.jsx(ve,{isVisible:s,hide:a}):null);function we(){const[s,a]=t.useState({isVisible:!1,payload:void 0}),n=t.useCallback(o=>a({isVisible:!0,payload:o}),[]),i=t.useCallback(()=>a({isVisible:!1,payload:void 0}),[]);return{isVisible:s.isVisible,payload:s.payload,show:n,hide:i}}const R="vaultIntroSeen",be=()=>{const s=we(),a=s.show,[n]=u((i,o)=>i.reposSubscribe(o),i=>i.reposData,[]);return t.useEffect(()=>{if((n==null?void 0:n.status.type)==="Loaded"&&n.repos.length===0)try{localStorage.getItem(R)!=="true"&&(a(),localStorage.setItem(R,"true"))}catch{}},[n,a]),s},je=t.memo(()=>{const s=p(),n=y().configGetBaseUrl(),i=be();return e.jsxs(e.Fragment,{children:[e.jsxs("footer",{className:l`
          margin: 0 0 0 25px;
        `,children:[e.jsxs("div",{className:l`
            margin: 0 0 15px;
            font-size: 12px;
            color: ${s.colors.text};
            text-align: center;
          `,children:[e.jsx("a",{href:"https://koofr.eu/help/koofr-vault/",target:"_blank",rel:"noreferrer",className:l`
              ${b} {
                color: ${s.colors.text};
              }
            `,children:"Help and support"}),e.jsx("span",{"aria-hidden":!0,children:" · "}),e.jsx("button",{type:"button",className:l`
              ${k}
              color: ${s.colors.text};
            `,onClick:()=>{i.show()},children:"Intro"}),e.jsx("span",{"aria-hidden":!0,children:" · "}),e.jsx("a",{href:`${n}/legal`,target:"_blank",rel:"noreferrer",className:l`
              ${b} {
                color: ${s.colors.text};
              }
            `,children:"Legal"}),e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx(f,{to:"/landing",className:l`
                  ${b} {
                    color: ${s.colors.text};
                  }
                `,children:"Landing page"})]})]}),e.jsxs("div",{className:l`
            font-size: 12px;
            text-align: center;
          `,children:[e.jsx(O,{}),e.jsx(K,{})]})]}),e.jsx(t.Suspense,{children:e.jsx(ue,{isVisible:i.isVisible,hide:i.hide})})]})}),ye=t.memo(({className:s})=>{const a=N();return e.jsxs("div",{className:d(l``,a?l`
                width: 100%;
                margin: 0;
              `:l`
                width: 225px;
                flex-grow: 0;
                flex-shrink: 0;
                margin: 0 50px 0 0;
                overflow: hidden;
              `,s),children:[e.jsx(fe,{}),e.jsx(je,{})]})}),Ce=t.memo(({navbarLeft:s,navbarHeader:a,navbarNav:n,navbarExtra:i,className:o,sidenavClassName:r,children:c})=>{const m=N();return e.jsxs(e.Fragment,{children:[e.jsx(W,{left:s,header:a,nav:n,extra:i}),e.jsxs("div",{className:d(l`
              display: flex;
            `,m?l`
                  flex-direction: column-reverse;
                  padding: 30px 0 75px;
                `:l`
                  flex-direction: row;
                  flex-grow: 1;
                  padding: 30px 25px 75px 0;
                `,o),children:[e.jsx(ye,{className:r}),e.jsx("main",{className:d(l`
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                overflow-x: hidden;
              `,m?l`
                    margin: 0 0 32px;
                  `:l`
                    margin: 0 32px 0 0;
                  `),children:c})]}),e.jsx(ne,{}),e.jsx(ee,{})]})});export{Ce as D,oe as S,ne as T,Z as a,M as b,we as u};

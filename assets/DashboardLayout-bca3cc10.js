import{r as l,u as x,j as e,b as t,d,a as y,l as F}from"./DynamicThemeProvider-71c37830.js";import{a as b,u as p,F as T}from"./mainAuthenticated-b8ffc429.js";import{B as v,b as E,d as u}from"./Button-d7c59dae.js";import{D as _}from"./DashboardNavbar-1dfe0e24.js";import{L as w,a as U,b as P}from"./index-6ac7cbed.js";import{G as B,a as G}from"./GitRevision-87d517fc.js";import{_ as W}from"./index-4a786a98.js";const K=s=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...s},l.createElement("g",{fill:"none",fillRule:"evenodd"},l.createElement("path",{d:"M0 0h18v18H0z"}),l.createElement("path",{fill:"#676F73",fillRule:"nonzero",d:"M11.279 3.006C14.987 3.006 18 5.978 18 9.652c0 3.638-2.953 6.587-6.61 6.646H5.181C2.323 16.299 0 14.009 0 11.173 0 8.365 2.277 6.09 5.095 6.045h.541l.004-.007c.013-.026.08-.143.32-.45a6.743 6.743 0 0 1 5.319-2.582zm0 1.458a5.285 5.285 0 0 0-4.17 2.022l-.036.046a5.32 5.32 0 0 0-.139.187l-.007.01-.35.774H5.182c-2.059 0-3.723 1.645-3.723 3.669 0 2.003 1.631 3.636 3.661 3.668h6.16c2.91 0 5.263-2.325 5.263-5.188 0-2.862-2.354-5.188-5.263-5.188z"}),l.createElement("path",{fill:"#676F73",fillRule:"nonzero",d:"M12.229 3.5v5.271h5.53l.019 1.458H10.77V3.5z"}))),M=l.memo(({percentage:s,severity:n="Normal"})=>{const a=x(),i=n==="Critical"?a.colors.destructive:n==="Warn"?a.colors.warning:a.colors.successful;return e.jsx("div",{className:t`
        width: 100%;
        height: 1px;
        background: ${a.colors.border};
        margin-top: 2px;
        margin-bottom: 2px;
      `,children:e.jsx("div",{className:t`
          width: 0;
          height: 5px;
          position: relative;
          top: -2px;
        `,style:{width:`${Math.min(s,100)}%`,backgroundColor:i}})})}),O=s=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...s},l.createElement("g",{fill:"#DF533E"},l.createElement("path",{d:"M2.579 13.866c0 .85.688 1.537 1.537 1.537h9.75c.85 0 1.537-.688 1.537-1.537V4.134c0-.85-.688-1.538-1.537-1.538h-9.75c-.85 0-1.537.689-1.537 1.538v9.732ZM4.115 1.134h9.75a3 3 0 0 1 3 3v9.732a3 3 0 0 1-3 3h-9.75a3 3 0 0 1-3-3V4.134a3 3 0 0 1 3-3Z"}),l.createElement("path",{d:"M8.262 10.836a.731.731 0 1 0 1.462 0V4.572a.731.731 0 1 0-1.462 0v6.264ZM9 14.256a.81.81 0 1 0 0-1.62.81.81 0 0 0 0 1.62Z"}))),Y=s=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...s},l.createElement("g",{fill:"#676F73"},l.createElement("path",{d:"m10.1 2.029.042.035a.55.55 0 0 0-.08-.03c.023.003.04.004.063.004H2.902v13.923h12.195V6.573a.54.54 0 0 0 .005.071.31.31 0 0 0 .055.064L10.1 2.028Zm6.05 3.606c.227.21.41.63.41.938v10.292c0 .309-.25.559-.559.559H2a.559.559 0 0 1-.559-.559V1.135c0-.309.25-.559.559-.559h8.126c.309 0 .742.17.969.38l5.056 4.68Z"}),l.createElement("path",{d:"M9.758 1.714v5.39h6.245V5.64h-4.79V1.707l-1.455.007Z"}))),S=48,q=l.memo(({areDetailsVisible:s,toggleDetailsVisible:n})=>{const a=x(),i=b(),[{totalCount:r,doneCount:o,failedCount:c,sizeProgressDisplay:f,percentage:j,remainingTimeDisplay:m,speedDisplay:z,isTransferring:N,canRetryAll:R,canAbortAll:Z}]=p((h,g)=>h.transfersSummarySubscribe(g),h=>h.transfersSummaryData,[]);let[C,$]=l.useState(!1),[V,H]=l.useState(!1);const A=l.useCallback(h=>{h.stopPropagation(),i.transfersAbortAll()},[i]),L=l.useCallback(h=>{h.stopPropagation(),i.transfersRetryAll()},[i]),I=l.useCallback(h=>{h.stopPropagation(),$(g=>!g)},[]),D=l.useCallback(h=>{h.stopPropagation(),H(g=>!g)},[]);return e.jsxs("div",{className:d(t`
          height: ${S}px;
          cursor: pointer;
          display: flex;
          align-items: center;
        `,a.isMobile?t`
              padding: 0 7px;
            `:t`
              padding: 0 25px;
            `,s&&t`
            box-shadow: ${a.boxShadow};
          `),onClick:n,children:[e.jsx("div",{className:d(t`
            flex-grow: 1;
            flex-basis: 0;
          `,a.isMobile?t`
                display: none;
              `:t`
                display: flex;
              `)}),e.jsxs("div",{className:t`
          max-width: 840px;
          margin: auto;
          display: flex;
          align-items: center;
          flex-grow: 3;
          font-size: 13px;
        `,children:[e.jsxs("div",{className:d(t`
              display: flex;
              align-items: center;
            `,a.isMobile?t`
                  margin-right: 5px;
                `:t`
                  width: 160px;
                `),children:[e.jsx("div",{className:t`
              width: 32px;
              height: 32px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-right: 8px;
            `,children:c>0?e.jsx(O,{role:"img"}):e.jsx(Y,{role:"img"})}),e.jsx("div",{className:t`
              font-size: 13px;
              font-weight: normal;
              color: ${a.colors.text};
            `,onClick:I,children:C?e.jsx("span",{className:t`
                  font-weight: 600;
                `,children:f}):e.jsxs("span",{children:[e.jsxs("span",{className:t`
                    font-weight: 600;
                  `,children:[o," / ",r]})," ","done"]})})]}),e.jsx("div",{className:t`
            flex-grow: 1;
            margin: -4px 0 0;
          `,children:e.jsx("div",{className:t`
              padding-top: 4px;
              width: 100%;
            `,children:e.jsx(M,{percentage:j})})}),e.jsxs("div",{className:d(t`
              display: flex;
              justify-content: flex-end;
              align-items: center;
            `,a.isMobile?t`
                  margin-left: 5px;
                `:t`
                  width: 160px;
                `),children:[N?e.jsx("div",{className:t`
                display: flex;
                flex-direction: column;
                font-size: 13px;
                font-weight: normal;
                color: ${a.colors.text};
              `,onClick:D,children:V?e.jsx("span",{className:t`
                    font-weight: 600;
                  `,children:z}):e.jsxs("span",{children:[e.jsx("span",{className:t`
                      font-weight: 600;
                    `,children:m})," ","remaining"]})}):null,N?null:e.jsx(v,{type:"button",variant:"primary-inline",children:s?"Hide details":"Show details"})]})]}),e.jsxs("div",{className:d(t`
            display: flex;
            justify-content: flex-end;
          `,a.isMobile?t`
                margin-left: 5px;
              `:t`
                flex-grow: 1;
                flex-basis: 0;
              `),children:[R?e.jsx(v,{type:"button",variant:"primary-inline",className:t`
              flex-shrink: 0;
              margin-right: 15px;
            `,onClick:L,title:"Retry failed transfers",children:"Retry"}):null,Z?e.jsx(v,{type:"button",variant:"destructive-inline",className:t`
              flex-shrink: 0;
            `,onClick:A,title:"Cancel all transfers",children:"Cancel"}):null]})]})}),J=l.memo(()=>{const s=y(),n=x(),[a]=p((o,c)=>o.spaceUsageSubscribe(c),o=>o.spaceUsageData,[]),[i]=p((o,c)=>o.transfersIsActiveSubscribe(c),o=>o.transfersIsActiveData,[]),r=i?S:0;return a===void 0?null:e.jsx("div",{className:d(t`
          position: fixed;
          left: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          box-shadow: 1px -1px 3px 0 rgb(212, 214, 215);
          background-color: #fff;
          padding: 9px 15px 9px 25px;
          z-index: ${n.zindex.spaceUsage};
        `,s?t`
              width: 100%;
            `:t`
              width: 225px;
            `),style:{bottom:`${r}px`},children:e.jsxs("div",{className:t`
          display: flex;
          flex-direction: row;
          align-items: center;
        `,children:[e.jsx("div",{className:t`
            width: 32px;
            height: 32px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
            margin-right: 7px;
          `,children:e.jsx(K,{role:"img"})}),e.jsxs("div",{className:t`
            display: flex;
            flex-direction: column;
            flex-grow: 1;
          `,children:[e.jsxs("div",{className:t`
              font-size: 11px;
              font-weight: normal;
              color: ${n.colors.textLight};
              margin-bottom: 5px;
            `,children:[a.usedDisplay," of ",a.totalDisplay," used"]}),e.jsx("div",{className:t`
              margin-bottom: 2px;
            `,children:e.jsx(M,{percentage:a.percentage,severity:a.severity})})]})]})})}),Q=l.memo(({transfer:s})=>{const{id:n,name:a,fileIconAttrs:i,state:r}=s,o=x(),c=b(),f=l.useCallback(()=>{c.transfersRetry(n)},[c,n]),j=l.useCallback(()=>{c.transfersAbort(n)},[c,n]);let m="";switch(r.type){case"Waiting":m="is waiting to be transferred.";break;case"Processing":m="is being processed.";break;case"Transferring":m="is being transferred.";break;case"Failed":m=`failed. ${r.error}`;break;case"Done":m="has been transferred.";break}return e.jsx("div",{className:t`
          border-bottom: 1px solid ${o.colors.borderLight};
          padding: ${o.isMobile?"0 7px 0 15px":"0"};
          margin: ${o.isMobile?"0":"0 25px"};
        `,children:e.jsxs("div",{className:t`
            max-width: 840px;
            display: flex;
            align-items: center;
            padding: 9px 0 8px;
            margin: auto;
          `,children:[e.jsx("div",{className:t`
              width: 26px;
              height: 29px;
              margin-right: 15px;
              flex-shrink: 0;
            `,children:e.jsx(T,{size:"Sm",attrs:i})}),e.jsx("div",{className:t`
              font-size: 13px;
              font-weight: normal;
              color: ${o.colors.text};
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            `,children:a}),e.jsx("div",{className:t`
              font-size: 13px;
              font-weight: normal;
              color: ${o.colors.text};
              flex-grow: 1;
              flex-shrink: 0;
              margin-left: 5px;
            `,children:m}),s.canRetry?e.jsx(v,{type:"button",variant:"primary-inline",className:t`
                flex-shrink: 0;
              `,onClick:f,children:"Retry"}):null,e.jsx(v,{type:"button",variant:"destructive-inline",className:t`
              flex-shrink: 0;
            `,onClick:j,children:"Cancel"})]})})}),X=l.memo(()=>{const[s]=p((n,a)=>n.transfersListSubscribe(a),n=>n.transfersListData,[]);return e.jsx("div",{className:t`
        display: flex;
        flex-direction: column;
      `,children:s.transfers.map(n=>e.jsx(Q,{transfer:n},n.id))})}),ee=l.memo(()=>{const s=x(),[n,a]=l.useState(!1),i=l.useCallback(()=>a(o=>!o),[]),[r]=p((o,c)=>o.transfersIsActiveSubscribe(c),o=>o.transfersIsActiveData,[]);return r?e.jsxs("div",{className:t`
        display: block;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: ${s.zindex.transfers};
        border-top: 1px solid ${s.colors.border};
        background-color: #fff;
      `,children:[e.jsx(q,{areDetailsVisible:n,toggleDetailsVisible:i}),e.jsx("div",{className:d(t`
            height: 0px;
            transition: height 0.3s ease-out;
            padding: 2px 0 0;
          `,n&&t`
              height: 191px;
              overflow-y: auto;
            `),children:n?e.jsx(X,{}):null})]}):null}),te=s=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...s},l.createElement("g",{fill:"none",fillRule:"evenodd"},l.createElement("path",{d:"M0 0h18v18H0z"}),l.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"M8.991 4.325c.404 0 .732.328.732.732l-.001 3.211h3.213c.37 0 .676.276.725.633l.006.099a.731.731 0 0 1-.731.731H9.722v3.212a.73.73 0 0 1-.631.725l-.1.007a.731.731 0 0 1-.73-.732L8.26 9.73l-3.212.001a.731.731 0 0 1-.725-.632L4.317 9a.73.73 0 0 1 .731-.731H8.26V5.056c0-.37.275-.677.632-.725Z"}),l.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"M15.98 9A6.98 6.98 0 1 0 2.02 9a6.98 6.98 0 0 0 13.96 0ZM.557 9a8.442 8.442 0 1 1 16.884 0A8.442 8.442 0 0 1 .558 9Z"}))),le=s=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...s},l.createElement("g",{fill:"none",fillRule:"evenodd"},l.createElement("path",{d:"M0 0h18v18H0z"}),l.createElement("path",{fill:"#676F73",fillRule:"nonzero",d:"M8.991 4.325c.404 0 .732.328.732.732l-.001 3.211h3.213c.37 0 .676.276.725.633l.006.099a.731.731 0 0 1-.731.731H9.722v3.212a.73.73 0 0 1-.631.725l-.1.007a.731.731 0 0 1-.73-.732L8.26 9.73l-3.212.001a.731.731 0 0 1-.725-.632L4.317 9a.73.73 0 0 1 .731-.731H8.26V5.056c0-.37.275-.677.632-.725Z"}),l.createElement("path",{fill:"#676F73",fillRule:"nonzero",d:"M15.98 9A6.98 6.98 0 1 0 2.02 9a6.98 6.98 0 0 0 13.96 0ZM.557 9a8.442 8.442 0 1 1 16.884 0A8.442 8.442 0 0 1 .558 9Z"}))),se=s=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...s},l.createElement("g",{fill:"#263238"},l.createElement("path",{d:"M9.738 7.686a.731.731 0 1 0-1.462 0v5.31a.731.731 0 1 0 1.462 0v-5.31ZM9 4.266a.81.81 0 1 0 0 1.62.81.81 0 0 0 0-1.62Z"}),l.createElement("path",{d:"M15.98 9A6.98 6.98 0 1 0 2.02 9a6.98 6.98 0 0 0 13.96 0ZM.557 9a8.442 8.442 0 1 1 16.884 0A8.442 8.442 0 0 1 .558 9Z"}))),ae=s=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...s},l.createElement("g",{fill:"#676F73"},l.createElement("path",{d:"M9.738 7.686a.731.731 0 1 0-1.462 0v5.31a.731.731 0 1 0 1.462 0v-5.31ZM9 4.266a.81.81 0 1 0 0 1.62.81.81 0 0 0 0-1.62Z"}),l.createElement("path",{d:"M15.98 9A6.98 6.98 0 1 0 2.02 9a6.98 6.98 0 0 0 13.96 0ZM.557 9a8.442 8.442 0 1 1 16.884 0A8.442 8.442 0 0 1 .558 9Z"}))),ne=s=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...s},l.createElement("g",{fill:"none",fillRule:"evenodd"},l.createElement("path",{d:"M0 0h18v18H0z"}),l.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"m8.713 12.378-.144.97a.495.495 0 0 0 .502.574h.09a.491.491 0 0 0 .502-.575l-.145-.969h-.805Zm0-1.46h2.067l.185 1.245.145.97a1.952 1.952 0 0 1-1.95 2.249h-.089a1.955 1.955 0 0 1-1.949-2.25l.144-.969.186-1.245h1.261Z"}),l.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"M9 .565a5.231 5.231 0 0 1 5.227 5.015l.004.216v.287h1.234c.605 0 1.095.495 1.095 1.094v9.084c0 .642-.52 1.163-1.163 1.163H2.603c-.642 0-1.163-.52-1.163-1.163V7.246c0-.642.52-1.163 1.163-1.163h1.165v-.287A5.231 5.231 0 0 1 8.785.569L9 .565Zm6.096 9.628h-8.1c-.17 0-.481.148-.59.28l-.463.568c-.457.56-1.33.975-2.053.975h-.987l.001 3.945h12.194l-.002-5.768Zm.001-2.648-12.194.001v3.007h.987c.248 0 .63-.166.84-.355l.08-.082.463-.567c.387-.473 1.113-.818 1.724-.818h8.099l.001-1.186ZM9 2.027a3.769 3.769 0 0 0-3.764 3.575l-.005.194v.287h7.537v-.287a3.769 3.769 0 0 0-3.574-3.764L9 2.027Z"}))),ie=s=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...s},l.createElement("g",{fill:"none",fillRule:"evenodd"},l.createElement("path",{d:"M0 0h18v18H0z"}),l.createElement("path",{fill:"#676F73",fillRule:"nonzero",d:"m8.713 12.378-.144.97a.495.495 0 0 0 .502.574h.09a.491.491 0 0 0 .502-.575l-.145-.969h-.805Zm0-1.46h2.067l.185 1.245.145.97a1.952 1.952 0 0 1-1.95 2.249h-.089a1.955 1.955 0 0 1-1.949-2.25l.144-.969.186-1.245h1.261Z"}),l.createElement("path",{fill:"#676F73",fillRule:"nonzero",d:"M9 .565a5.231 5.231 0 0 1 5.231 5.231v.287h1.234c.605 0 1.095.495 1.095 1.094v9.084c0 .642-.52 1.163-1.163 1.163H2.603c-.642 0-1.163-.52-1.163-1.163V7.246c0-.642.52-1.163 1.163-1.163h1.165v-.287A5.231 5.231 0 0 1 8.785.569Zm6.097 9.628h-8.1c-.147 0-.396.109-.533.223l-.058.058-.463.567c-.422.517-1.199.91-1.884.968l-.17.007h-.986l.001 3.945h12.194l-.001-5.768Zm0-2.647H2.903v3.007h.987c.248 0 .63-.166.84-.355l.08-.082.463-.567c.355-.434.994-.76 1.569-.81l.155-.008h8.1V7.546ZM9 2.027a3.769 3.769 0 0 0-3.769 3.769v.287h7.537v-.287a3.769 3.769 0 0 0-3.574-3.764Z"}))),oe=s=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...s},l.createElement("g",{fill:"none",fillRule:"evenodd"},l.createElement("path",{d:"M0 0h18v18H0z"}),l.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"m8.713 12.378-.144.97a.495.495 0 0 0 .502.574h.09a.491.491 0 0 0 .502-.575l-.145-.969h-.805Zm0-1.46h2.067l.185 1.245.145.97a1.952 1.952 0 0 1-1.95 2.249h-.089a1.955 1.955 0 0 1-1.949-2.25l.144-.969.186-1.245h1.261Z"}),l.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"M15.465 6.083c.605 0 1.095.495 1.095 1.094v9.084c0 .642-.52 1.163-1.163 1.163H2.603c-.642 0-1.163-.52-1.163-1.163V7.246c0-.642.52-1.163 1.163-1.163h12.862Zm-.368 4.11h-8.1c-.172 0-.482.148-.59.28l-.464.568c-.457.56-1.33.975-2.053.975h-.987l.001 3.945h12.194l-.001-5.768Zm0-2.647H2.903v3.007h.987c.248 0 .63-.166.84-.355l.08-.082.463-.567c.387-.473 1.113-.818 1.724-.818h8.1V7.546Z"}),l.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"M12.528 5.231a3.769 3.769 0 0 0-6.556-2.537.731.731 0 1 1-1.081-.984 5.231 5.231 0 0 1 9.1 3.522v1.447a.731.731 0 0 1-1.463 0V5.23Z"}))),re=s=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...s},l.createElement("g",{fill:"none",fillRule:"evenodd"},l.createElement("path",{d:"M0 0h18v18H0z"}),l.createElement("path",{fill:"#676F73",fillRule:"nonzero",d:"m8.713 12.378-.144.97a.495.495 0 0 0 .502.574h.09a.491.491 0 0 0 .502-.575l-.145-.969h-.805Zm0-1.46h2.067l.185 1.245.145.97a1.952 1.952 0 0 1-1.95 2.249h-.089a1.955 1.955 0 0 1-1.949-2.25l.144-.969.186-1.245h1.261Z"}),l.createElement("path",{fill:"#676F73",fillRule:"nonzero",d:"M15.465 6.083c.605 0 1.095.495 1.095 1.094v9.084c0 .642-.52 1.163-1.163 1.163H2.603c-.642 0-1.163-.52-1.163-1.163V7.246c0-.642.52-1.163 1.163-1.163h12.862Zm-.368 4.11h-8.1c-.172 0-.482.148-.59.28l-.464.568c-.457.56-1.33.975-2.053.975h-.987l.001 3.945h12.194l-.001-5.768Zm0-2.647H2.903v3.007h.987c.248 0 .63-.166.84-.355l.08-.082.463-.567c.387-.473 1.113-.818 1.724-.818h8.1V7.546Z"}),l.createElement("path",{fill:"#676F73",fillRule:"nonzero",d:"M12.528 5.231a3.769 3.769 0 0 0-6.556-2.537.731.731 0 1 1-1.081-.984 5.231 5.231 0 0 1 9.1 3.522v1.447a.731.731 0 0 1-1.463 0V5.23Z"}))),ce=l.memo(({repo:s,isActive:n})=>{const a=x(),i=b(),r=l.useCallback(o=>{i.reposLockRepo(o.id)},[i]);return e.jsx("li",{children:e.jsxs("div",{className:d(t`
              display: flex;
              align-items: center;
              height: 36px;
              padding: 0 0 0 25px;

              &:hover {
                background-color: ${a.colors.hover};
              }
            `,n&&t`
                background-color: ${a.colors.hover};
              `),children:[s.state==="Locked"?e.jsxs(w,{to:`/repos/${s.id}`,className:t`
                width: 36px;
                height: 36px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-shrink: 0;
                margin-right: 7px;
              `,"aria-label":"Safe Box locked",children:[e.jsx(ie,{className:t`
                  a:hover > & {
                    display: none;
                  }
                `,role:"img"}),e.jsx(ne,{className:t`
                  display: none;

                  a:hover > & {
                    display: inline;
                  }
                `,role:"img"})]}):e.jsx("button",{className:t`
                ${E}
                width: 36px;
                height: 36px;
                flex-shrink: 0;
                margin-right: 7px;
              `,onClick:()=>r(s),"aria-label":"Safe Box unlocked",children:e.jsxs("div",{className:t`
                  display: flex;
                  justify-content: center;
                  align-items: center;
                `,children:[e.jsx(re,{className:t`
                    button:hover > div > & {
                      display: none;
                    }
                  `,role:"img"}),e.jsx(oe,{className:t`
                    display: none;

                    button:hover > div > & {
                      display: inline;
                    }
                  `,role:"img"})]})}),e.jsx(w,{to:`/repos/${s.id}`,className:d(t`
                text-decoration: none;
                flex-grow: 1;
                font-size: 14px;
                font-weight: normal;
                height: 32px;
                display: flex;
                flex-direction: row;
                align-items: center;
                overflow: hidden;

                ${u} {
                  color: ${a.colors.text};
                  text-decoration: none;
                }
              `,n&&t`
                  font-weight: 600;
                `),children:e.jsx("span",{className:t`
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
              `,children:s.name})}),e.jsxs(w,{to:`/repos/${s.id}/info`,className:t`
              width: 36px;
              height: 36px;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-shrink: 0;
            `,"aria-label":"Safe Box info",children:[e.jsx(ae,{className:t`
                a:hover > & {
                  display: none;
                }
              `,role:"img"}),e.jsx(se,{className:t`
                display: none;

                a:hover > & {
                  display: inline;
                }
              `,role:"img"})]})]})})}),de=l.memo(({isActive:s})=>{const n=x();return e.jsx("li",{children:e.jsxs(w,{to:"/repos/create",className:d(t`
            display: flex;
            align-items: center;
            height: 36px;
            padding: 0 0 0 25px;

            ${u} {
              color: ${n.colors.text};
              text-decoration: none;
            }

            &:hover {
              background-color: ${n.colors.hover};
            }
          `,s&&t`
              background-color: ${n.colors.hover};
            `),children:[e.jsxs("div",{className:t`
            width: 36px;
            height: 36px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
            margin-right: 7px;
          `,children:[e.jsx(le,{className:t`
              div:hover > & {
                display: none;
              }
            `,role:"img"}),e.jsx(te,{className:t`
              display: none;

              div:hover > & {
                display: inline;
              }
            `,role:"img"})]}),e.jsx("div",{className:d(t`
              text-decoration: none;
              font-size: 14px;
              flex-grow: 1;
              font-weight: normal;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            `,s&&t`
                font-weight: 600;
              `),children:"Create new"})]})})}),he=l.memo(()=>{const s=U(),a=P().repoId,[i]=p((r,o)=>r.reposSubscribe(o),r=>r.reposData,[]);return e.jsx("aside",{"aria-label":"Safe Boxes navigation",children:e.jsxs("ul",{className:t`
          list-style: none;
          margin: 0 0 30px;
          padding: 0;
        `,children:[i.repos.map(r=>e.jsx(ce,{repo:r,isActive:a!==void 0&&r.id===a},r.id)),e.jsx(de,{isActive:s.pathname==="/repos/create"})]})})}),me=F(()=>W(()=>import("./IntroModal-b0eecda1.js"),["assets/IntroModal-b0eecda1.js","assets/DynamicThemeProvider-71c37830.js","assets/Button-d7c59dae.js","assets/index-6ac7cbed.js","assets/range-13dd74cf.js","assets/mainAuthenticated-b8ffc429.js","assets/NavbarSticky-315264f4.js","assets/index-4a786a98.js","assets/index-9d9ae4af.css","assets/RetinaImage-adf244fe.js"]).then(s=>s.IntroModal),!1),xe=l.memo(({isVisible:s,hide:n})=>{const[a,i]=l.useState();return s&&a===void 0&&i(()=>me),a!==void 0?e.jsx(a,{isVisible:s,hide:n}):null});function pe(){const[s,n]=l.useState({isVisible:!1,payload:void 0}),a=l.useCallback(r=>n({isVisible:!0,payload:r}),[]),i=l.useCallback(()=>n({isVisible:!1,payload:void 0}),[]);return{isVisible:s.isVisible,payload:s.payload,show:a,hide:i}}const k="vaultIntroSeen",fe=()=>{const s=pe(),n=s.show,[a]=p((i,r)=>i.reposSubscribe(r),i=>i.reposData,[]);return l.useEffect(()=>{if(a.status.type==="Loaded"&&a.repos.length===0)try{localStorage.getItem(k)!=="true"&&(n(),localStorage.setItem(k,"true"))}catch{}},[a,n]),s},ge=l.memo(()=>{const s=x(),a=b().configGetBaseUrl(),i=fe();return e.jsxs(e.Fragment,{children:[e.jsxs("footer",{className:t`
          margin: 0 0 0 25px;
        `,children:[e.jsxs("div",{className:t`
            margin: 0 0 15px;
            font-size: 12px;
            color: ${s.colors.text};
            text-align: center;
          `,children:[e.jsx("a",{href:"https://koofr.eu/help/koofr-vault/",target:"_blank",rel:"noreferrer",className:t`
              ${u} {
                color: ${s.colors.text};
              }
            `,children:"Help and support"}),e.jsx("span",{"aria-hidden":!0,children:" · "}),e.jsx("button",{type:"button",className:t`
              ${E}
              color: ${s.colors.text};
            `,onClick:()=>{i.show()},children:"Intro"}),e.jsx("span",{"aria-hidden":!0,children:" · "}),e.jsx("a",{href:`${a}/legal`,target:"_blank",rel:"noreferrer",className:t`
              ${u} {
                color: ${s.colors.text};
              }
            `,children:"Legal"}),e.jsx("br",{}),e.jsx(w,{to:"/landing",className:t`
              ${u} {
                color: ${s.colors.text};
              }
            `,children:"Landing page"})]}),e.jsxs("div",{className:t`
            font-size: 12px;
            text-align: center;
          `,children:[e.jsx(B,{}),e.jsx(G,{})]})]}),e.jsx(xe,{isVisible:i.isVisible,hide:i.hide})]})}),ve=l.memo(({className:s})=>{const n=y();return e.jsxs("div",{className:d(t``,n?t`
                width: 100%;
                margin: 0;
              `:t`
                width: 225px;
                flex-grow: 0;
                flex-shrink: 0;
                margin: 0 50px 0 0;
                overflow: hidden;
              `,s),children:[e.jsx(he,{}),e.jsx(ge,{})]})}),Ee=l.memo(({navbarLeft:s,navbarHeader:n,navbarNav:a,navbarExtra:i,className:r,sidenavClassName:o,children:c})=>{const f=y();return e.jsxs(e.Fragment,{children:[e.jsx(_,{left:s,header:n,nav:a,extra:i}),e.jsxs("div",{className:d(t`
              display: flex;
            `,f?t`
                  flex-direction: column-reverse;
                  padding: 30px 0 75px;
                `:t`
                  flex-direction: row;
                  flex-grow: 1;
                  padding: 30px 25px 75px 0;
                `,r),children:[e.jsx(ve,{className:o}),e.jsx("main",{className:d(t`
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                overflow-x: hidden;
              `,f?t`
                    margin: 0 0 32px;
                  `:t`
                    margin: 0 32px 0 0;
                  `),children:c})]}),e.jsx(ee,{}),e.jsx(J,{})]})});export{Ee as D,ae as S,ee as T,se as a,pe as u};

import{r as e,u as x,j as l,b as t,d as c,a as z,l as D}from"./DynamicThemeProvider-852093d9.js";import{a as y,u as f,F as P,T}from"./mainAuthenticated-df4ea9c9.js";import{B as w,b as N,d as b}from"./Button-5863cf9e.js";import{D as _}from"./DashboardNavbar-28681a18.js";import{L as j,a as U,b as B}from"./index-1ee9421e.js";import{G,a as W}from"./GitRevision-489c9829.js";import{_ as K}from"./index-e81b4117.js";const O=s=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...s},e.createElement("g",{fill:"none",fillRule:"evenodd"},e.createElement("path",{d:"M0 0h18v18H0z"}),e.createElement("path",{fill:"#676F73",fillRule:"nonzero",d:"M11.279 3.006C14.987 3.006 18 5.978 18 9.652c0 3.638-2.953 6.587-6.61 6.646H5.181C2.323 16.299 0 14.009 0 11.173 0 8.365 2.277 6.09 5.095 6.045h.541l.004-.007c.013-.026.08-.143.32-.45a6.743 6.743 0 0 1 5.319-2.582zm0 1.458a5.285 5.285 0 0 0-4.17 2.022l-.036.046a5.32 5.32 0 0 0-.139.187l-.007.01-.35.774H5.182c-2.059 0-3.723 1.645-3.723 3.669 0 2.003 1.631 3.636 3.661 3.668h6.16c2.91 0 5.263-2.325 5.263-5.188 0-2.862-2.354-5.188-5.263-5.188z"}),e.createElement("path",{fill:"#676F73",fillRule:"nonzero",d:"M12.229 3.5v5.271h5.53l.019 1.458H10.77V3.5z"}))),M=e.memo(({percentage:s,severity:a="Normal"})=>{const n=x(),i=a==="Critical"?n.colors.destructive:a==="Warn"?n.colors.warning:n.colors.successful;return l.jsx("div",{className:t`
        width: 100%;
        height: 1px;
        background: ${n.colors.border};
        margin-top: 2px;
        margin-bottom: 2px;
      `,children:l.jsx("div",{className:t`
          width: 0;
          height: 5px;
          position: relative;
          top: -2px;
        `,style:{width:`${Math.min(s,100)}%`,backgroundColor:i}})})}),Y=s=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...s},e.createElement("g",{fill:"#DF533E"},e.createElement("path",{d:"M2.579 13.866c0 .85.688 1.537 1.537 1.537h9.75c.85 0 1.537-.688 1.537-1.537V4.134c0-.85-.688-1.538-1.537-1.538h-9.75c-.85 0-1.537.689-1.537 1.538v9.732ZM4.115 1.134h9.75a3 3 0 0 1 3 3v9.732a3 3 0 0 1-3 3h-9.75a3 3 0 0 1-3-3V4.134a3 3 0 0 1 3-3Z"}),e.createElement("path",{d:"M8.262 10.836a.731.731 0 1 0 1.462 0V4.572a.731.731 0 1 0-1.462 0v6.264ZM9 14.256a.81.81 0 1 0 0-1.62.81.81 0 0 0 0 1.62Z"}))),q=s=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...s},e.createElement("g",{fill:"#676F73"},e.createElement("path",{d:"m10.1 2.029.042.035a.55.55 0 0 0-.08-.03c.023.003.04.004.063.004H2.902v13.923h12.195V6.573a.54.54 0 0 0 .005.071.31.31 0 0 0 .055.064L10.1 2.028Zm6.05 3.606c.227.21.41.63.41.938v10.292c0 .309-.25.559-.559.559H2a.559.559 0 0 1-.559-.559V1.135c0-.309.25-.559.559-.559h8.126c.309 0 .742.17.969.38l5.056 4.68Z"}),e.createElement("path",{d:"M9.758 1.714v5.39h6.245V5.64h-4.79V1.707l-1.455.007Z"}))),S=48,J=e.memo(({areDetailsVisible:s,toggleDetailsVisible:a})=>{const n=x(),i=y(),[{totalCount:r,doneCount:o,failedCount:d,sizeProgressDisplay:p,percentage:g,remainingTimeDisplay:m,speedDisplay:E,isTransferring:v,canRetryAll:R,canAbortAll:C}]=f((h,u)=>h.transfersSummarySubscribe(u),h=>h.transfersSummaryData,[]);let[Z,L]=e.useState(!1),[V,H]=e.useState(!1);const $=e.useCallback(h=>{h.stopPropagation(),i.transfersAbortAll()},[i]),A=e.useCallback(h=>{h.stopPropagation(),i.transfersRetryAll()},[i]),I=e.useCallback(h=>{h.stopPropagation(),L(u=>!u)},[]),F=e.useCallback(h=>{h.stopPropagation(),H(u=>!u)},[]);return l.jsxs("div",{className:c(t`
          height: ${S}px;
          cursor: pointer;
          display: flex;
          align-items: center;
        `,n.isMobile?t`
              padding: 0 7px;
            `:t`
              padding: 0 25px;
            `,s&&t`
            box-shadow: ${n.boxShadow};
          `),onClick:a,children:[l.jsx("div",{className:c(t`
            flex-grow: 1;
            flex-basis: 0;
          `,n.isMobile?t`
                display: none;
              `:t`
                display: flex;
              `)}),l.jsxs("div",{className:t`
          max-width: 840px;
          margin: auto;
          display: flex;
          align-items: center;
          flex-grow: 3;
          font-size: 13px;
        `,children:[l.jsxs("div",{className:c(t`
              display: flex;
              align-items: center;
            `,n.isMobile?t`
                  margin-right: 5px;
                `:t`
                  width: 160px;
                `),children:[l.jsx("div",{className:t`
              width: 32px;
              height: 32px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-right: 8px;
            `,children:d>0?l.jsx(Y,{role:"img"}):l.jsx(q,{role:"img"})}),l.jsx("div",{className:t`
              font-size: 13px;
              font-weight: normal;
              color: ${n.colors.text};
            `,onClick:I,children:Z?l.jsx("span",{className:t`
                  font-weight: 600;
                `,children:p}):l.jsxs("span",{children:[l.jsxs("span",{className:t`
                    font-weight: 600;
                  `,children:[o," / ",r]})," ","done"]})})]}),l.jsx("div",{className:t`
            flex-grow: 1;
            margin: -4px 0 0;
          `,children:l.jsx("div",{className:t`
              padding-top: 4px;
              width: 100%;
            `,children:l.jsx(M,{percentage:g})})}),l.jsxs("div",{className:c(t`
              display: flex;
              justify-content: flex-end;
              align-items: center;
            `,n.isMobile?t`
                  margin-left: 5px;
                `:t`
                  width: 160px;
                `),children:[v?l.jsx("div",{className:t`
                display: flex;
                flex-direction: column;
                font-size: 13px;
                font-weight: normal;
                color: ${n.colors.text};
              `,onClick:F,children:V?l.jsx("span",{className:t`
                    font-weight: 600;
                  `,children:E}):l.jsxs("span",{children:[l.jsx("span",{className:t`
                      font-weight: 600;
                    `,children:m})," ","remaining"]})}):null,v?null:l.jsx(w,{type:"button",variant:"primary-inline",children:s?"Hide details":"Show details"})]})]}),l.jsxs("div",{className:c(t`
            display: flex;
            justify-content: flex-end;
          `,n.isMobile?t`
                margin-left: 5px;
              `:t`
                flex-grow: 1;
                flex-basis: 0;
              `),children:[R?l.jsx(w,{type:"button",variant:"primary-inline",className:t`
              flex-shrink: 0;
              margin-right: 15px;
            `,onClick:A,title:"Retry failed transfers",children:"Retry"}):null,C?l.jsx(w,{type:"button",variant:"destructive-inline",className:t`
              flex-shrink: 0;
            `,onClick:$,title:"Cancel all transfers",children:"Cancel"}):null]})]})}),Q=e.memo(()=>{const s=z(),a=x(),[n]=f((o,d)=>o.spaceUsageSubscribe(d),o=>o.spaceUsageData,[]),[i]=f((o,d)=>o.transfersIsActiveSubscribe(d),o=>o.transfersIsActiveData,[]),r=i?S:0;return n===void 0?null:l.jsx("div",{className:c(t`
          position: fixed;
          left: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          box-shadow: 1px -1px 3px 0 rgb(212, 214, 215);
          background-color: #fff;
          padding: 9px 15px 9px 25px;
          z-index: ${a.zindex.spaceUsage};
        `,s?t`
              width: 100%;
            `:t`
              width: 225px;
            `),style:{bottom:`${r}px`},children:l.jsxs("div",{className:t`
          display: flex;
          flex-direction: row;
          align-items: center;
        `,children:[l.jsx("div",{className:t`
            width: 32px;
            height: 32px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
            margin-right: 7px;
          `,children:l.jsx(O,{role:"img"})}),l.jsxs("div",{className:t`
            display: flex;
            flex-direction: column;
            flex-grow: 1;
          `,children:[l.jsxs("div",{className:t`
              font-size: 11px;
              font-weight: normal;
              color: ${a.colors.textLight};
              margin-bottom: 5px;
            `,children:[n.usedDisplay," of ",n.totalDisplay," used"]}),l.jsx("div",{className:t`
              margin-bottom: 2px;
            `,children:l.jsx(M,{percentage:n.percentage,severity:n.severity})})]})]})})}),X=e.memo(({transfer:s})=>{const{id:a,name:n,fileIconAttrs:i,state:r}=s,o=x(),d=y(),p=e.useCallback(()=>{d.transfersRetry(a)},[d,a]),g=e.useCallback(()=>{d.transfersAbort(a)},[d,a]);let m="";switch(r.type){case"Waiting":m="is waiting to be transferred.";break;case"Processing":m="is being processed.";break;case"Transferring":m="is being transferred.";break;case"Failed":m=`failed. ${r.error}`;break;case"Done":m="has been transferred.";break}return l.jsx("div",{className:t`
          border-bottom: 1px solid ${o.colors.borderLight};
          padding: ${o.isMobile?"0 7px 0 15px":"0"};
          margin: ${o.isMobile?"0":"0 25px"};
        `,children:l.jsxs("div",{className:t`
            max-width: 840px;
            display: flex;
            align-items: center;
            padding: 9px 0 8px;
            margin: auto;
          `,children:[l.jsx("div",{className:t`
              width: 26px;
              height: 29px;
              margin-right: 15px;
              flex-shrink: 0;
            `,children:l.jsx(P,{size:"Sm",attrs:i})}),l.jsx("div",{className:t`
              font-size: 13px;
              font-weight: normal;
              color: ${o.colors.text};
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            `,children:n}),l.jsx("div",{className:t`
              font-size: 13px;
              font-weight: normal;
              color: ${o.colors.text};
              flex-grow: 1;
              flex-shrink: 0;
              margin-left: 5px;
            `,children:m}),s.canRetry?l.jsx(w,{type:"button",variant:"primary-inline",className:t`
                flex-shrink: 0;
              `,onClick:p,children:"Retry"}):null,l.jsx(w,{type:"button",variant:"destructive-inline",className:t`
              flex-shrink: 0;
            `,onClick:g,children:"Cancel"})]})})}),ee=e.memo(()=>{const[s]=f((a,n)=>a.transfersListSubscribe(n),a=>a.transfersListData,[]);return l.jsx("div",{className:t`
        display: flex;
        flex-direction: column;
      `,children:s.transfers.map(a=>l.jsx(X,{transfer:a},a.id))})}),le=e.memo(()=>{const s=x(),[a,n]=e.useState(!1),i=e.useCallback(()=>n(o=>!o),[]),[r]=f((o,d)=>o.transfersIsActiveSubscribe(d),o=>o.transfersIsActiveData,[]);return r?l.jsxs("div",{className:t`
        display: block;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: ${s.zindex.transfers};
        border-top: 1px solid ${s.colors.border};
        background-color: #fff;
      `,children:[l.jsx(J,{areDetailsVisible:a,toggleDetailsVisible:i}),l.jsx("div",{className:c(t`
            height: 0px;
            transition: height 0.3s ease-out;
            padding: 2px 0 0;
          `,a&&t`
              height: 191px;
              overflow-y: auto;
            `),children:a?l.jsx(ee,{}):null})]}):null}),te=s=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...s},e.createElement("g",{fill:"none",fillRule:"evenodd"},e.createElement("path",{d:"M0 0h18v18H0z"}),e.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"M8.991 4.325c.404 0 .732.328.732.732l-.001 3.211h3.213c.37 0 .676.276.725.633l.006.099a.731.731 0 0 1-.731.731H9.722v3.212a.73.73 0 0 1-.631.725l-.1.007a.731.731 0 0 1-.73-.732L8.26 9.73l-3.212.001a.731.731 0 0 1-.725-.632L4.317 9a.73.73 0 0 1 .731-.731H8.26V5.056c0-.37.275-.677.632-.725Z"}),e.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"M15.98 9A6.98 6.98 0 1 0 2.02 9a6.98 6.98 0 0 0 13.96 0ZM.557 9a8.442 8.442 0 1 1 16.884 0A8.442 8.442 0 0 1 .558 9Z"}))),se=s=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...s},e.createElement("g",{fill:"none",fillRule:"evenodd"},e.createElement("path",{d:"M0 0h18v18H0z"}),e.createElement("path",{fill:"#676F73",fillRule:"nonzero",d:"M8.991 4.325c.404 0 .732.328.732.732l-.001 3.211h3.213c.37 0 .676.276.725.633l.006.099a.731.731 0 0 1-.731.731H9.722v3.212a.73.73 0 0 1-.631.725l-.1.007a.731.731 0 0 1-.73-.732L8.26 9.73l-3.212.001a.731.731 0 0 1-.725-.632L4.317 9a.73.73 0 0 1 .731-.731H8.26V5.056c0-.37.275-.677.632-.725Z"}),e.createElement("path",{fill:"#676F73",fillRule:"nonzero",d:"M15.98 9A6.98 6.98 0 1 0 2.02 9a6.98 6.98 0 0 0 13.96 0ZM.557 9a8.442 8.442 0 1 1 16.884 0A8.442 8.442 0 0 1 .558 9Z"}))),ae=s=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...s},e.createElement("g",{fill:"#263238"},e.createElement("path",{d:"M9.738 7.686a.731.731 0 1 0-1.462 0v5.31a.731.731 0 1 0 1.462 0v-5.31ZM9 4.266a.81.81 0 1 0 0 1.62.81.81 0 0 0 0-1.62Z"}),e.createElement("path",{d:"M15.98 9A6.98 6.98 0 1 0 2.02 9a6.98 6.98 0 0 0 13.96 0ZM.557 9a8.442 8.442 0 1 1 16.884 0A8.442 8.442 0 0 1 .558 9Z"}))),ne=s=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...s},e.createElement("g",{fill:"#676F73"},e.createElement("path",{d:"M9.738 7.686a.731.731 0 1 0-1.462 0v5.31a.731.731 0 1 0 1.462 0v-5.31ZM9 4.266a.81.81 0 1 0 0 1.62.81.81 0 0 0 0-1.62Z"}),e.createElement("path",{d:"M15.98 9A6.98 6.98 0 1 0 2.02 9a6.98 6.98 0 0 0 13.96 0ZM.557 9a8.442 8.442 0 1 1 16.884 0A8.442 8.442 0 0 1 .558 9Z"}))),ie=s=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...s},e.createElement("g",{fill:"none",fillRule:"evenodd"},e.createElement("path",{d:"M0 0h18v18H0z"}),e.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"m8.713 12.378-.144.97a.495.495 0 0 0 .502.574h.09a.491.491 0 0 0 .502-.575l-.145-.969h-.805Zm0-1.46h2.067l.185 1.245.145.97a1.952 1.952 0 0 1-1.95 2.249h-.089a1.955 1.955 0 0 1-1.949-2.25l.144-.969.186-1.245h1.261Z"}),e.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"M9 .565a5.231 5.231 0 0 1 5.227 5.015l.004.216v.287h1.234c.605 0 1.095.495 1.095 1.094v9.084c0 .642-.52 1.163-1.163 1.163H2.603c-.642 0-1.163-.52-1.163-1.163V7.246c0-.642.52-1.163 1.163-1.163h1.165v-.287A5.231 5.231 0 0 1 8.785.569L9 .565Zm6.096 9.628h-8.1c-.17 0-.481.148-.59.28l-.463.568c-.457.56-1.33.975-2.053.975h-.987l.001 3.945h12.194l-.002-5.768Zm.001-2.648-12.194.001v3.007h.987c.248 0 .63-.166.84-.355l.08-.082.463-.567c.387-.473 1.113-.818 1.724-.818h8.099l.001-1.186ZM9 2.027a3.769 3.769 0 0 0-3.764 3.575l-.005.194v.287h7.537v-.287a3.769 3.769 0 0 0-3.574-3.764L9 2.027Z"}))),oe=s=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...s},e.createElement("g",{fill:"none",fillRule:"evenodd"},e.createElement("path",{d:"M0 0h18v18H0z"}),e.createElement("path",{fill:"#676F73",fillRule:"nonzero",d:"m8.713 12.378-.144.97a.495.495 0 0 0 .502.574h.09a.491.491 0 0 0 .502-.575l-.145-.969h-.805Zm0-1.46h2.067l.185 1.245.145.97a1.952 1.952 0 0 1-1.95 2.249h-.089a1.955 1.955 0 0 1-1.949-2.25l.144-.969.186-1.245h1.261Z"}),e.createElement("path",{fill:"#676F73",fillRule:"nonzero",d:"M9 .565a5.231 5.231 0 0 1 5.231 5.231v.287h1.234c.605 0 1.095.495 1.095 1.094v9.084c0 .642-.52 1.163-1.163 1.163H2.603c-.642 0-1.163-.52-1.163-1.163V7.246c0-.642.52-1.163 1.163-1.163h1.165v-.287A5.231 5.231 0 0 1 8.785.569Zm6.097 9.628h-8.1c-.147 0-.396.109-.533.223l-.058.058-.463.567c-.422.517-1.199.91-1.884.968l-.17.007h-.986l.001 3.945h12.194l-.001-5.768Zm0-2.647H2.903v3.007h.987c.248 0 .63-.166.84-.355l.08-.082.463-.567c.355-.434.994-.76 1.569-.81l.155-.008h8.1V7.546ZM9 2.027a3.769 3.769 0 0 0-3.769 3.769v.287h7.537v-.287a3.769 3.769 0 0 0-3.574-3.764Z"}))),re=s=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...s},e.createElement("g",{fill:"none",fillRule:"evenodd"},e.createElement("path",{d:"M0 0h18v18H0z"}),e.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"m8.713 12.378-.144.97a.495.495 0 0 0 .502.574h.09a.491.491 0 0 0 .502-.575l-.145-.969h-.805Zm0-1.46h2.067l.185 1.245.145.97a1.952 1.952 0 0 1-1.95 2.249h-.089a1.955 1.955 0 0 1-1.949-2.25l.144-.969.186-1.245h1.261Z"}),e.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"M15.465 6.083c.605 0 1.095.495 1.095 1.094v9.084c0 .642-.52 1.163-1.163 1.163H2.603c-.642 0-1.163-.52-1.163-1.163V7.246c0-.642.52-1.163 1.163-1.163h12.862Zm-.368 4.11h-8.1c-.172 0-.482.148-.59.28l-.464.568c-.457.56-1.33.975-2.053.975h-.987l.001 3.945h12.194l-.001-5.768Zm0-2.647H2.903v3.007h.987c.248 0 .63-.166.84-.355l.08-.082.463-.567c.387-.473 1.113-.818 1.724-.818h8.1V7.546Z"}),e.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"M12.528 5.231a3.769 3.769 0 0 0-6.556-2.537.731.731 0 1 1-1.081-.984 5.231 5.231 0 0 1 9.1 3.522v1.447a.731.731 0 0 1-1.463 0V5.23Z"}))),ce=s=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...s},e.createElement("g",{fill:"none",fillRule:"evenodd"},e.createElement("path",{d:"M0 0h18v18H0z"}),e.createElement("path",{fill:"#676F73",fillRule:"nonzero",d:"m8.713 12.378-.144.97a.495.495 0 0 0 .502.574h.09a.491.491 0 0 0 .502-.575l-.145-.969h-.805Zm0-1.46h2.067l.185 1.245.145.97a1.952 1.952 0 0 1-1.95 2.249h-.089a1.955 1.955 0 0 1-1.949-2.25l.144-.969.186-1.245h1.261Z"}),e.createElement("path",{fill:"#676F73",fillRule:"nonzero",d:"M15.465 6.083c.605 0 1.095.495 1.095 1.094v9.084c0 .642-.52 1.163-1.163 1.163H2.603c-.642 0-1.163-.52-1.163-1.163V7.246c0-.642.52-1.163 1.163-1.163h12.862Zm-.368 4.11h-8.1c-.172 0-.482.148-.59.28l-.464.568c-.457.56-1.33.975-2.053.975h-.987l.001 3.945h12.194l-.001-5.768Zm0-2.647H2.903v3.007h.987c.248 0 .63-.166.84-.355l.08-.082.463-.567c.387-.473 1.113-.818 1.724-.818h8.1V7.546Z"}),e.createElement("path",{fill:"#676F73",fillRule:"nonzero",d:"M12.528 5.231a3.769 3.769 0 0 0-6.556-2.537.731.731 0 1 1-1.081-.984 5.231 5.231 0 0 1 9.1 3.522v1.447a.731.731 0 0 1-1.463 0V5.23Z"}))),de=e.memo(({repo:s,isActive:a})=>{const n=x(),i=y(),r=e.useCallback(o=>{i.reposLockRepo(o.id)},[i]);return l.jsx("li",{children:l.jsxs("div",{className:c(t`
              display: flex;
              align-items: center;
              height: 36px;
              padding: 0 0 0 25px;

              &:hover {
                background-color: ${n.colors.hover};
              }
            `,a&&t`
                background-color: ${n.colors.hover};
              `),children:[s.state==="Locked"?l.jsxs(j,{to:`/repos/${s.id}`,className:t`
                width: 36px;
                height: 36px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-shrink: 0;
                margin-right: 7px;
              `,"aria-label":"Safe Box locked",children:[l.jsx(oe,{className:t`
                  a:hover > & {
                    display: none;
                  }
                `,role:"img"}),l.jsx(ie,{className:t`
                  display: none;

                  a:hover > & {
                    display: inline;
                  }
                `,role:"img"})]}):l.jsx("button",{className:t`
                ${N}
                width: 36px;
                height: 36px;
                flex-shrink: 0;
                margin-right: 7px;
              `,onClick:()=>r(s),"aria-label":"Safe Box unlocked",children:l.jsxs("div",{className:t`
                  display: flex;
                  justify-content: center;
                  align-items: center;
                `,children:[l.jsx(ce,{className:t`
                    button:hover > div > & {
                      display: none;
                    }
                  `,role:"img"}),l.jsx(re,{className:t`
                    display: none;

                    button:hover > div > & {
                      display: inline;
                    }
                  `,role:"img"})]})}),l.jsx(j,{to:`/repos/${s.id}`,className:c(t`
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
                  color: ${n.colors.text};
                  text-decoration: none;
                }
              `,a&&t`
                  font-weight: 600;
                `),children:l.jsx("span",{className:t`
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
              `,children:s.name})}),l.jsxs(j,{to:`/repos/${s.id}/info`,className:t`
              width: 36px;
              height: 36px;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-shrink: 0;
            `,"aria-label":"Safe Box info",children:[l.jsx(ne,{className:t`
                a:hover > & {
                  display: none;
                }
              `,role:"img"}),l.jsx(ae,{className:t`
                display: none;

                a:hover > & {
                  display: inline;
                }
              `,role:"img"})]})]})})}),he=e.memo(({isActive:s})=>{const a=x();return l.jsx("li",{children:l.jsxs(j,{to:"/repos/create",className:c(t`
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
          `,s&&t`
              background-color: ${a.colors.hover};
            `),children:[l.jsxs("div",{className:t`
            width: 36px;
            height: 36px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
            margin-right: 7px;
          `,children:[l.jsx(se,{className:t`
              div:hover > & {
                display: none;
              }
            `,role:"img"}),l.jsx(te,{className:t`
              display: none;

              div:hover > & {
                display: inline;
              }
            `,role:"img"})]}),l.jsx("div",{className:c(t`
              text-decoration: none;
              font-size: 14px;
              flex-grow: 1;
              font-weight: normal;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            `,s&&t`
                font-weight: 600;
              `),children:"Create new"})]})})}),me=e.memo(()=>{const s=U(),n=B().repoId,[i]=f((r,o)=>r.reposSubscribe(o),r=>r.reposData,[]);return l.jsx("aside",{"aria-label":"Safe Boxes navigation",children:l.jsxs("ul",{className:t`
          list-style: none;
          margin: 0 0 30px;
          padding: 0;
        `,children:[i.repos.map(r=>l.jsx(de,{repo:r,isActive:n!==void 0&&r.id===n},r.id)),l.jsx(he,{isActive:s.pathname==="/repos/create"})]})})}),pe=D(()=>K(()=>import("./IntroModal-736088f8.js"),["assets/IntroModal-736088f8.js","assets/DynamicThemeProvider-852093d9.js","assets/Button-5863cf9e.js","assets/index-1ee9421e.js","assets/range-aff3abea.js","assets/mainAuthenticated-df4ea9c9.js","assets/NavbarSticky-96fb8002.js","assets/index-e81b4117.js","assets/index-9d9ae4af.css","assets/RetinaImage-be7424cc.js"]).then(s=>s.IntroModal),!1),xe=e.memo(({isVisible:s,hide:a})=>{const[n,i]=e.useState();return s&&n===void 0&&i(()=>pe),n!==void 0?l.jsx(n,{isVisible:s,hide:a}):null});function fe(){const[s,a]=e.useState({isVisible:!1,payload:void 0}),n=e.useCallback(r=>a({isVisible:!0,payload:r}),[]),i=e.useCallback(()=>a({isVisible:!1,payload:void 0}),[]);return{isVisible:s.isVisible,payload:s.payload,show:n,hide:i}}const k="vaultIntroSeen",ge=()=>{const s=fe(),a=s.show,[n]=f((i,r)=>i.reposSubscribe(r),i=>i.reposData,[]);return e.useEffect(()=>{if(n.status.type==="Loaded"&&n.repos.length===0)try{localStorage.getItem(k)!=="true"&&(a(),localStorage.setItem(k,"true"))}catch{}},[n,a]),s},ve=e.memo(()=>{const s=x(),n=y().configGetBaseUrl(),i=ge();return l.jsxs(l.Fragment,{children:[l.jsxs("footer",{className:t`
          margin: 0 0 0 25px;
        `,children:[l.jsxs("div",{className:t`
            margin: 0 0 15px;
            font-size: 12px;
            color: ${s.colors.text};
            text-align: center;
          `,children:[l.jsx("a",{href:"https://koofr.eu/help/koofr-vault/",target:"_blank",rel:"noreferrer",className:t`
              ${b} {
                color: ${s.colors.text};
              }
            `,children:"Help and support"}),l.jsx("span",{"aria-hidden":!0,children:" · "}),l.jsx("button",{type:"button",className:t`
              ${N}
              color: ${s.colors.text};
            `,onClick:()=>{i.show()},children:"Intro"}),l.jsx("span",{"aria-hidden":!0,children:" · "}),l.jsx("a",{href:`${n}/legal`,target:"_blank",rel:"noreferrer",className:t`
              ${b} {
                color: ${s.colors.text};
              }
            `,children:"Legal"}),l.jsx("br",{}),l.jsx(j,{to:"/landing",className:t`
              ${b} {
                color: ${s.colors.text};
              }
            `,children:"Landing page"})]}),l.jsxs("div",{className:t`
            font-size: 12px;
            text-align: center;
          `,children:[l.jsx(G,{}),l.jsx(W,{})]})]}),l.jsx(xe,{isVisible:i.isVisible,hide:i.hide})]})}),ue=e.memo(({className:s})=>{const a=z();return l.jsxs("div",{className:c(t``,a?t`
                width: 100%;
                margin: 0;
              `:t`
                width: 225px;
                flex-grow: 0;
                flex-shrink: 0;
                margin: 0 50px 0 0;
                overflow: hidden;
              `,s),children:[l.jsx(me,{}),l.jsx(ve,{})]})}),Ve=e.memo(({navbarLeft:s,navbarHeader:a,navbarNav:n,navbarExtra:i,className:r,sidenavClassName:o,children:d})=>{const p=z();return l.jsxs(l.Fragment,{children:[l.jsx(_,{left:s,header:a,nav:n,extra:i}),l.jsxs("div",{className:c(t`
              display: flex;
            `,p?t`
                  flex-direction: column-reverse;
                  padding: 30px 0 75px;
                `:t`
                  flex-direction: row;
                  flex-grow: 1;
                  padding: 30px 25px 75px 0;
                `,r),children:[l.jsx(ue,{className:o}),l.jsx("main",{className:c(t`
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                overflow-x: hidden;
              `,p?t`
                    margin: 0 0 32px;
                  `:t`
                    margin: 0 32px 0 0;
                  `),children:d})]}),l.jsx(le,{}),l.jsx(Q,{})]})});function we(){const s=e.useRef(null);return e.useEffect(()=>{var a;(a=s.current)==null||a.focus()},[s]),s}const be=s=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...s},e.createElement("g",{fill:"none",fillRule:"evenodd"},e.createElement("path",{d:"M0 0h18v18H0z"}),e.createElement("path",{fill:"#263238",d:"M9 3c3.314 0 6.314 2 9 6-2.686 4-5.686 6-9 6s-6.314-2-9-6c2.686-4 5.686-6 9-6zm0 1.46c-2.506 0-4.863 1.415-7.098 4.383L1.785 9l.117.157c2.158 2.865 4.43 4.284 6.84 4.378L9 13.54c2.506 0 4.863-1.415 7.098-4.383L16.214 9l-.116-.157c-2.158-2.865-4.43-4.284-6.84-4.378L9 4.46z"}),e.createElement("path",{fill:"#263238",d:"M9 5.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm0 1.46a2.04 2.04 0 1 0 0 4.08 2.04 2.04 0 0 0 0-4.08z"}),e.createElement("path",{fill:"#263238",d:"M14.213 15.247a.724.724 0 0 0 1.02.01l.024-.024a.713.713 0 0 0-.01-1.02L3.55 2.515a.724.724 0 0 0-1.02-.01l-.024.024a.713.713 0 0 0 .01 1.02l11.698 11.698z"}))),je=s=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...s},e.createElement("g",{fill:"none",fillRule:"evenodd"},e.createElement("path",{fill:"#676F73",fillRule:"nonzero",d:"M9 3c3.314 0 6.314 2 9 6-2.686 4-5.686 6-9 6s-6.314-2-9-6c2.686-4 5.686-6 9-6zm0 1.46c-2.506 0-4.863 1.415-7.098 4.383L1.785 9l.117.157c2.158 2.865 4.43 4.284 6.84 4.378L9 13.54c2.506 0 4.863-1.415 7.098-4.383L16.214 9l-.116-.157c-2.158-2.865-4.43-4.284-6.84-4.378L9 4.46z"}),e.createElement("path",{fill:"#676F73",fillRule:"nonzero",d:"M9 5.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm0 1.46a2.04 2.04 0 1 0 0 4.08 2.04 2.04 0 0 0 0-4.08z"}),e.createElement("path",{d:"M0 0h18v18H0z"}),e.createElement("path",{fill:"#676F73",fillRule:"nonzero",d:"M14.213 15.247a.724.724 0 0 0 1.02.01l.024-.024a.713.713 0 0 0-.01-1.02L3.55 2.515a.724.724 0 0 0-1.02-.01l-.024.024a.713.713 0 0 0 .01 1.02l11.698 11.698z"}))),ye=s=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...s},e.createElement("g",{fill:"none",fillRule:"evenodd"},e.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"M9 3c3.314 0 6.314 2 9 6-2.686 4-5.686 6-9 6s-6.314-2-9-6c2.686-4 5.686-6 9-6zm0 1.55c-2.475 0-4.809 1.401-7.028 4.35l-.075.1.075.1c2.143 2.847 4.392 4.252 6.772 4.345L9 13.45c2.475 0 4.809-1.401 7.028-4.35l.074-.1-.074-.1c-2.143-2.847-4.392-4.252-6.772-4.345L9 4.55z"}),e.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"M9 5.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm0 1.55a1.95 1.95 0 1 0 0 3.9 1.95 1.95 0 0 0 0-3.9z"}),e.createElement("path",{d:"M0 0h18v18H0z"}))),Ee=s=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...s},e.createElement("g",{fill:"none",fillRule:"evenodd"},e.createElement("path",{fill:"#676F73",fillRule:"nonzero",d:"M9 3c3.314 0 6.314 2 9 6-2.686 4-5.686 6-9 6s-6.314-2-9-6c2.686-4 5.686-6 9-6zm0 1.55c-2.475 0-4.809 1.401-7.028 4.35l-.075.1.075.1c2.143 2.847 4.392 4.252 6.772 4.345L9 13.45c2.475 0 4.809-1.401 7.028-4.35l.074-.1-.074-.1c-2.143-2.847-4.392-4.252-6.772-4.345L9 4.55z"}),e.createElement("path",{fill:"#676F73",fillRule:"nonzero",d:"M9 5.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm0 1.55a1.95 1.95 0 1 0 0 3.9 1.95 1.95 0 0 0 0-3.9z"}),e.createElement("path",{d:"M0 0h18v18H0z"}))),ze=e.memo(({value:s,onClick:a})=>l.jsx("button",{type:"button",className:t`
        ${N}
        cursor: pointer;
        width: 24px;
        height: 24px;
        position: absolute;
        right: 10px;

        &:focus {
          outline: none;
        }
      `,tabIndex:-1,onClick:a,"aria-label":s?"Hide password":"Show password",children:l.jsxs("div",{className:t`
          display: flex;
          justify-content: center;
          align-items: center;
        `,children:[l.jsx(Ee,{className:c(s?t`
                  display: block;

                  button:hover > div > & {
                    display: none;
                  }
                `:t`
                  display: none;
                `),role:"img"}),l.jsx(ye,{className:c(s?t`
                  display: none;

                  button:hover > div > & {
                    display: block;
                  }
                `:t`
                  display: none;
                `),role:"img"}),l.jsx(je,{className:c(s?t`
                  display: none;
                `:t`
                  display: block;

                  button:hover > div > & {
                    display: none;
                  }
                `),role:"img"}),l.jsx(be,{className:c(s?t`
                  display: none;
                `:t`
                  display: none;

                  button:hover > div > & {
                    display: block;
                  }
                `),role:"img"})]})})),Ne=e.memo(({value:s,placeholder:a,onChange:n,className:i,inputRef:r,inputClassName:o,inputId:d,inputAriaLabel:p})=>{const[g,m]=e.useState(!1),E=e.useCallback(()=>m(v=>!v),[]);return l.jsxs("div",{className:c(t`
            display: flex;
            flex-direction: row;
            position: relative;
            align-items: center;
          `,i),children:[l.jsx(T,{type:g?"text":"password",id:d,name:"password",value:s,placeholder:a,onChange:v=>n(v.currentTarget.value),ref:r,className:c(t`
              font-size: 16px;
              width: 250px;
              padding-right: 38px;
            `,o),"aria-label":p}),l.jsx(ze,{value:g,onClick:E})]})}),He=e.memo(s=>{const a=we();return l.jsx(Ne,{...s,inputRef:a})});export{He as A,Ve as D,Ne as P,ne as S,le as T,ae as a,fe as u};

const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/IntroModal-Dtrycx1b.js","assets/DynamicThemeProvider-4BQuZolX.js","assets/emotion-css.esm-9QbHV8nv.js","assets/Button-CJ4fGdXT.js","assets/range-C8iCH3h6.js","assets/mainWebAuthenticated-hdCLwcmo.js","assets/NavbarSticky-CvwZKpMB.js","assets/index-Bwqyi5tP.js","assets/index-ulgnFFAK.css","assets/RetinaImage-BgyCGNAx.js"])))=>i.map(i=>d[i]);
import{r as t,a as x,j as e,u as S,b as R}from"./DynamicThemeProvider-4BQuZolX.js";import{c as s,a as m,M as c,d as V,e as le,L as v}from"./emotion-css.esm-9QbHV8nv.js";import{a as z,u as y,F as ne}from"./mainWebAuthenticated-hdCLwcmo.js";import{B as w,h as C,k as M}from"./Button-CJ4fGdXT.js";import{D as ie}from"./DashboardNavbar-B5wD590E.js";import{G as re,a as oe,L as ce}from"./LanguagePickerDropdown-CNnY3O1A.js";import{_ as de}from"./index-Bwqyi5tP.js";const he=a=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...a},t.createElement("g",{fill:"none",fillRule:"evenodd"},t.createElement("path",{d:"M0 0h18v18H0z"}),t.createElement("path",{fill:"#676f73",fillRule:"nonzero",d:"M11.279 3.006C14.987 3.006 18 5.978 18 9.652c0 3.638-2.953 6.587-6.61 6.646H5.181C2.323 16.299 0 14.009 0 11.173 0 8.365 2.277 6.09 5.095 6.045h.541l.004-.007c.013-.026.08-.143.32-.45a6.74 6.74 0 0 1 5.319-2.582m0 1.458a5.29 5.29 0 0 0-4.17 2.022l-.036.046a5 5 0 0 0-.139.187l-.007.01-.35.774H5.182c-2.059 0-3.723 1.645-3.723 3.669 0 2.003 1.631 3.636 3.661 3.668h6.16c2.91 0 5.263-2.325 5.263-5.188s-2.354-5.188-5.263-5.188z"}),t.createElement("path",{fill:"#676f73",fillRule:"nonzero",d:"M12.229 3.5v5.271h5.53l.019 1.458H10.77V3.5z"}))),$=t.memo(({percentage:a,severity:l="Normal"})=>{const n=x(),i=l==="Critical"?n.colors.destructive:l==="Warn"?n.colors.warning:n.colors.successful;return e.jsx("div",{className:s`
        width: 100%;
        height: 1px;
        background: ${n.colors.border};
        margin-top: 2px;
        margin-bottom: 2px;
      `,children:e.jsx("div",{className:s`
          width: 0;
          height: 5px;
          position: relative;
          top: -2px;
        `,style:{width:`${Math.min(a,100)}%`,backgroundColor:i}})})});$.displayName="Progress";const me=a=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...a},t.createElement("g",{fill:"#df533e"},t.createElement("path",{d:"M2.579 13.866c0 .85.688 1.537 1.537 1.537h9.75c.85 0 1.537-.688 1.537-1.537V4.134c0-.85-.688-1.538-1.537-1.538h-9.75c-.85 0-1.537.689-1.537 1.538zM4.115 1.134h9.75a3 3 0 0 1 3 3v9.732a3 3 0 0 1-3 3h-9.75a3 3 0 0 1-3-3V4.134a3 3 0 0 1 3-3"}),t.createElement("path",{d:"M8.262 10.836a.731.731 0 1 0 1.462 0V4.572a.731.731 0 1 0-1.462 0zM9 14.256a.81.81 0 1 0 0-1.62.81.81 0 0 0 0 1.62"}))),fe=a=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...a},t.createElement("g",{fill:"#676f73"},t.createElement("path",{d:"m10.1 2.029.042.035-.08-.03c.023.003.04.004.063.004H2.902v13.923h12.195V6.573l.005.071a.3.3 0 0 0 .055.064zm6.05 3.606c.227.21.41.63.41.938v10.292c0 .309-.25.559-.559.559H2a.56.56 0 0 1-.559-.559V1.135c0-.309.25-.559.559-.559h8.126c.309 0 .742.17.969.38l5.056 4.68Z"}),t.createElement("path",{d:"M9.758 1.714v5.39h6.245V5.64h-4.79V1.707z"}))),T=48,I=t.memo(({areDetailsVisible:a,toggleDetailsVisible:l})=>{const n=S(),i=x(),r=z(),[o]=y((f,N)=>f.transfersSummarySubscribe(N),f=>f.transfersSummaryData,[]),[d,h]=t.useState(!1),[k,g]=t.useState(!1),j=t.useCallback(f=>{f.stopPropagation(),r.transfersAbortAll()},[r]),u=t.useCallback(f=>{f.stopPropagation(),r.transfersRetryAll()},[r]),b=t.useCallback(f=>{f.stopPropagation(),h(N=>!N)},[]),p=t.useCallback(f=>{f.stopPropagation(),g(N=>!N)},[]);if(o===void 0)return null;const{totalCount:E,doneCount:q,failedCount:Y,sizeProgressDisplay:J,percentage:Q,remainingTimeDisplay:X,speedDisplay:ee,isTransferring:_,isAllDone:se,canRetryAll:te,canAbortAll:ae}=o;return e.jsxs("div",{className:m(s`
          height: ${T}px;
          cursor: pointer;
          display: flex;
          align-items: center;
        `,i.isMobile?s`
              padding: 0 7px;
            `:s`
              padding: 0 25px;
            `,a&&s`
            box-shadow: ${i.boxShadow};
          `),onClick:l,children:[e.jsx("div",{className:m(s`
            flex-grow: 1;
            flex-basis: 0;
          `,i.isMobile?s`
                display: none;
              `:s`
                display: flex;
              `)}),e.jsxs("div",{className:s`
          max-width: 840px;
          margin: auto;
          display: flex;
          align-items: center;
          flex-grow: 3;
          font-size: 13px;
        `,children:[e.jsxs("div",{className:m(s`
              display: flex;
              align-items: center;
            `,i.isMobile?s`
                  margin-right: 5px;
                `:s`
                  width: 160px;
                `),children:[e.jsx("div",{className:s`
              width: 32px;
              height: 32px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-right: 8px;
            `,children:Y>0?e.jsx(me,{role:"img"}):e.jsx(fe,{role:"img"})}),e.jsx("div",{className:s`
              font-size: 13px;
              font-weight: normal;
              color: ${i.colors.text};
            `,onClick:b,children:d?e.jsx("span",{className:s`
                  font-weight: 600;
                `,children:J}):e.jsx(c,{id:"web.transfers.summary.progress.text",description:"Status line in the transfers summary bar showing completed versus total transfer count.",defaultMessage:"<b>{done_count} / {total_count}</b> done",values:{done_count:q,total_count:E,b:f=>e.jsx("span",{className:s`
                        font-weight: 600;
                      `,children:f})}})})]}),e.jsx("div",{className:s`
            flex-grow: 1;
            margin: -4px 0 0;
          `,children:e.jsx("div",{className:s`
              padding-top: 4px;
              width: 100%;
            `,children:e.jsx($,{percentage:Q})})}),e.jsxs("div",{className:m(s`
              display: flex;
              justify-content: flex-end;
              align-items: center;
            `,i.isMobile?s`
                  margin-left: 5px;
                `:s`
                  width: 160px;
                `),children:[_?e.jsx("div",{className:s`
                display: flex;
                flex-direction: column;
                font-size: 13px;
                font-weight: normal;
                color: ${i.colors.text};
              `,onClick:p,children:k?e.jsx("span",{className:s`
                    font-weight: 600;
                  `,children:ee}):e.jsx("span",{children:e.jsx(c,{id:"web.transfers.summary.remaining_time.text",description:"Status line in the transfers summary bar showing estimated remaining time (e.g. '1 minute remaining').",defaultMessage:"<b>{time}</b> remaining",values:{time:X,b:f=>e.jsx("span",{className:s`
                            font-weight: 600;
                          `,children:f})}})})}):null,_?null:e.jsx(w,{type:"button",variant:"primary-inline",children:a?e.jsx(c,{id:"web.transfers.summary.hide_details.button",description:"Button label in the transfers summary bar to collapse the transfer details list.",defaultMessage:"Hide details"}):e.jsx(c,{id:"web.transfers.summary.show_details.button",description:"Button label in the transfers summary bar to expand the transfer details list.",defaultMessage:"Show details"})})]})]}),e.jsxs("div",{className:m(s`
            display: flex;
            justify-content: flex-end;
          `,i.isMobile?s`
                margin-left: 5px;
              `:s`
                flex-grow: 1;
                flex-basis: 0;
              `),children:[te?e.jsx(w,{type:"button",variant:"primary-inline",className:s`
              flex-shrink: 0;
              margin-right: 15px;
            `,onClick:u,title:n.formatMessage({id:"web.transfers.summary.retry_all.tooltip",description:"Tooltip for the Retry button in the transfers summary bar that retries all failed transfers.",defaultMessage:"Retry failed transfers"}),children:e.jsx(c,{id:"web.transfers.summary.retry_all.button",description:"Button label in the transfers summary bar to retry all failed transfers.",defaultMessage:"Retry"})}):null,ae?se?e.jsx(w,{type:"button",variant:"inline",className:s`
                flex-shrink: 0;
              `,onClick:j,title:n.formatMessage({id:"web.transfers.summary.clear_all.tooltip",description:"Tooltip for the Clear button in the transfers summary bar to clear the completed transfer list.",defaultMessage:"Clear all transfers"}),children:e.jsx(c,{id:"web.transfers.summary.clear_all.button",description:"Button label in the transfers summary bar to clear all finished transfers.",defaultMessage:"Clear"})}):e.jsx(w,{type:"button",variant:"destructive-inline",className:s`
                flex-shrink: 0;
              `,onClick:j,title:n.formatMessage({id:"web.transfers.summary.cancel_all.tooltip",description:"Tooltip for the Cancel button in the transfers summary bar to cancel all active transfers.",defaultMessage:"Cancel all transfers"}),children:e.jsx(c,{id:"web.transfers.summary.cancel_all.button",description:"Button label in the transfers summary bar to cancel all active transfers.",defaultMessage:"Cancel"})}):null]})]})});I.displayName="TransfersSummary";const D=t.memo(()=>{const a=R(),l=x(),[n]=y((o,d)=>o.spaceUsageSubscribe(d),o=>o.spaceUsageData,[]),[i]=y((o,d)=>o.transfersIsActiveSubscribe(d),o=>o.transfersIsActiveData,[]),r=i?T:0;return n===void 0?null:e.jsx("div",{className:m(s`
          position: fixed;
          left: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          box-shadow: 1px -1px 3px 0 rgb(212, 214, 215);
          background-color: #fff;
          padding: 9px 15px 9px 25px;
          z-index: ${l.zindex.spaceUsage};
        `,a?s`
              width: 100%;
            `:s`
              width: 225px;
            `),style:{bottom:`${r}px`},children:e.jsxs("div",{className:s`
          display: flex;
          flex-direction: row;
          align-items: center;
        `,children:[e.jsx("div",{className:s`
            width: 32px;
            height: 32px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
            margin-right: 7px;
          `,children:e.jsx(he,{role:"img"})}),e.jsxs("div",{className:s`
            display: flex;
            flex-direction: column;
            flex-grow: 1;
          `,children:[e.jsx("div",{className:s`
              font-size: 11px;
              font-weight: normal;
              color: ${l.colors.textLight};
              margin-bottom: 5px;
            `,children:e.jsx(c,{id:"web.space_usage.text",description:"Status line in the space usage widget showing used and total storage (e.g. '100 MB of 10 GB used').",defaultMessage:"{used} of {total} used",values:{used:n.usedDisplay,total:n.totalDisplay}})}),e.jsx("div",{className:s`
              margin-bottom: 2px;
            `,children:e.jsx($,{percentage:n.percentage,severity:n.severity})})]})]})})});D.displayName="SpaceUsage";const pe=a=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...a},t.createElement("path",{fill:"#263238",d:"m8.97 10.026 3.478 3.479a.72.72 0 0 0 1.018 0l.016-.016a.72.72 0 0 0 0-1.018l-3.479-3.48 3.475-3.474a.72.72 0 0 0 0-1.018l-.016-.017a.72.72 0 0 0-1.018 0L8.969 7.957 5.507 4.495a.72.72 0 0 0-1.018 0l-.016.016a.72.72 0 0 0 0 1.018l3.462 3.462-3.462 3.462a.72.72 0 0 0 0 1.018l.016.017a.72.72 0 0 0 1.018 0z"})),xe=a=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...a},t.createElement("path",{fill:"#676f73",d:"m8.97 10.026 3.478 3.479a.72.72 0 0 0 1.018 0l.016-.016a.72.72 0 0 0 0-1.018l-3.479-3.48 3.475-3.474a.72.72 0 0 0 0-1.018l-.016-.017a.72.72 0 0 0-1.018 0L8.969 7.957 5.507 4.495a.72.72 0 0 0-1.019 0l-.015.016a.72.72 0 0 0 0 1.018l3.462 3.462-3.462 3.462a.72.72 0 0 0 0 1.018l.016.017a.72.72 0 0 0 1.018 0z"})),B=t.memo(({transfer:a})=>{const l=S(),{id:n,name:i,fileIconAttrs:r,state:o}=a,d=x(),h=z(),k=t.useCallback(()=>{h.transfersRetry(n)},[h,n]),g=t.useCallback(()=>{h.transfersAbort(n)},[h,n]),j=t.useCallback(()=>{h.transfersOpen(n)},[h,n]),u=e.jsx("div",{className:s`
          font-size: 13px;
          font-weight: normal;
          color: ${d.colors.text};
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        `,children:i}),b=E=>e.jsx("div",{className:s`
          font-size: 13px;
          font-weight: normal;
          color: ${d.colors.text};
          flex-grow: 1;
          flex-shrink: 0;
          margin-left: 5px;
        `,children:E});let p;switch(o.type){case"Waiting":p=e.jsx(c,{id:"web.transfers.transfer.message.waiting",description:"Transfer row status when a file is queued and waiting to start.",defaultMessage:"{name}<status> is waiting to be transferred</status>",values:{name:u,status:b}});break;case"Processing":p=e.jsx(c,{id:"web.transfers.transfer.message.processing",description:"Transfer row status when a file is being prepared before upload/download.",defaultMessage:"{name}<status> is being processed</status>",values:{name:u,status:b}});break;case"Transferring":p=e.jsx(c,{id:"web.transfers.transfer.message.transferring",description:"Transfer row status when a file is actively transferring.",defaultMessage:"{name}<status> is being transferred</status>",values:{name:u,status:b}});break;case"Failed":p=e.jsx(c,{id:"web.transfers.transfer.message.failed",description:"Transfer row status when a file transfer failed, including error details.",defaultMessage:"{name}<status> failed. {error}</status>",values:{name:u,status:b,error:o.error}});break;case"Done":p=e.jsx(c,{id:"web.transfers.transfer.message.done",description:"Transfer row status when a file has completed transferring.",defaultMessage:"{name}<status> has been transferred</status>",values:{name:u,status:b}});break}return e.jsx("div",{className:s`
          border-bottom: 1px solid ${d.colors.borderLight};
          padding: ${d.isMobile?"0 7px 0 15px":"0"};
          margin: ${d.isMobile?"0":"0 25px"};
        `,children:e.jsxs("div",{className:s`
            max-width: 840px;
            display: flex;
            align-items: center;
            padding: 9px 0 8px;
            margin: auto;
          `,children:[e.jsx("div",{className:s`
              width: 26px;
              height: 29px;
              margin-right: 15px;
              flex-shrink: 0;
            `,children:e.jsx(ne,{size:"Sm",attrs:r})}),p,a.canOpen?e.jsx(w,{type:"button",variant:"primary-inline",className:s`
                flex-shrink: 0;
              `,onClick:j,children:e.jsx(c,{id:"web.transfers.transfer.open.button",description:"Button label in a transfer row to open the transferred item.",defaultMessage:"Open"})}):null,a.canRetry?e.jsx(w,{type:"button",variant:"primary-inline",className:s`
                flex-shrink: 0;
              `,onClick:k,children:e.jsx(c,{id:"web.transfers.transfer.retry.button",description:"Button label in a transfer row to retry a failed transfer.",defaultMessage:"Retry"})}):null,a.state.type==="Done"?e.jsx("button",{type:"button",className:s`
                ${C}
                width: 32px;
                height: 32px;
                flex-shrink: 0;
              `,onClick:g,"aria-label":l.formatMessage({id:"web.transfers.transfer.clear.aria_label",description:"Accessibility label for the icon button that clears a completed transfer row.",defaultMessage:"Clear"}),children:e.jsxs("div",{className:s`
                  display: flex;
                  justify-content: center;
                  align-items: center;
                `,children:[e.jsx(xe,{className:s`
                    button:hover > div > & {
                      display: none;
                    }
                  `,role:"img"}),e.jsx(pe,{className:s`
                    display: none;

                    button:hover > div > & {
                      display: inline;
                    }
                  `,role:"img"})]})}):e.jsx(w,{type:"button",variant:"destructive-inline",className:s`
                flex-shrink: 0;
              `,onClick:g,children:e.jsx(c,{id:"web.transfers.transfer.cancel.button",description:"Button label in a transfer row to cancel an in-progress transfer.",defaultMessage:"Cancel"})})]})})});B.displayName="TransfersListTransfer";const F=t.memo(()=>{const[a]=y((l,n)=>l.transfersListSubscribe(n),l=>l.transfersListData,[]);return e.jsx("div",{className:s`
        display: flex;
        flex-direction: column;
      `,children:a?.transfers.map(l=>e.jsx(B,{transfer:l},l.id))})});F.displayName="TransfersList";const P=t.memo(()=>{const a=x(),[l,n]=t.useState(!1),i=t.useCallback(()=>n(o=>!o),[]),[r]=y((o,d)=>o.transfersIsActiveSubscribe(d),o=>o.transfersIsActiveData,[]);return r?e.jsxs("div",{className:s`
        display: block;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: ${a.zindex.transfers};
        border-top: 1px solid ${a.colors.border};
        background-color: #fff;
      `,children:[e.jsx(I,{areDetailsVisible:l,toggleDetailsVisible:i}),e.jsx("div",{className:m(s`
            height: 0px;
            transition: height 0.3s ease-out;
            padding: 2px 0 0;
          `,l&&s`
              height: 191px;
              overflow-y: auto;
            `),children:l?e.jsx(F,{}):null})]}):null});P.displayName="Transfers";const ge=a=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...a},t.createElement("g",{fill:"none",fillRule:"evenodd"},t.createElement("path",{d:"M0 0h18v18H0z"}),t.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"M8.991 4.325c.404 0 .732.328.732.732l-.001 3.211h3.213c.37 0 .676.276.725.633l.006.099a.73.73 0 0 1-.731.731H9.722v3.212a.73.73 0 0 1-.631.725l-.1.007a.73.73 0 0 1-.73-.732L8.26 9.73l-3.212.001a.73.73 0 0 1-.725-.632L4.317 9a.73.73 0 0 1 .731-.731H8.26V5.056c0-.37.275-.677.632-.725Z"}),t.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"M15.98 9A6.98 6.98 0 1 0 2.02 9a6.98 6.98 0 0 0 13.96 0M.557 9a8.442 8.442 0 1 1 16.884 0A8.442 8.442 0 0 1 .558 9Z"}))),ue=a=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...a},t.createElement("g",{fill:"none",fillRule:"evenodd"},t.createElement("path",{d:"M0 0h18v18H0z"}),t.createElement("path",{fill:"#676f73",fillRule:"nonzero",d:"M8.991 4.325c.404 0 .732.328.732.732l-.001 3.211h3.213c.37 0 .676.276.725.633l.006.099a.73.73 0 0 1-.731.731H9.722v3.212a.73.73 0 0 1-.631.725l-.1.007a.73.73 0 0 1-.73-.732L8.26 9.73l-3.212.001a.73.73 0 0 1-.725-.632L4.317 9a.73.73 0 0 1 .731-.731H8.26V5.056c0-.37.275-.677.632-.725Z"}),t.createElement("path",{fill:"#676f73",fillRule:"nonzero",d:"M15.98 9A6.98 6.98 0 1 0 2.02 9a6.98 6.98 0 0 0 13.96 0M.557 9a8.442 8.442 0 1 1 16.884 0A8.442 8.442 0 0 1 .558 9Z"}))),A=a=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...a},t.createElement("g",{fill:"#263238"},t.createElement("path",{d:"M9.738 7.686a.731.731 0 1 0-1.462 0v5.31a.731.731 0 1 0 1.462 0zM9 4.266a.81.81 0 1 0 0 1.62.81.81 0 0 0 0-1.62"}),t.createElement("path",{d:"M15.98 9A6.98 6.98 0 1 0 2.02 9a6.98 6.98 0 0 0 13.96 0M.557 9a8.442 8.442 0 1 1 16.884 0A8.442 8.442 0 0 1 .558 9Z"}))),be=a=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...a},t.createElement("g",{fill:"#676f73"},t.createElement("path",{d:"M9.738 7.686a.731.731 0 1 0-1.462 0v5.31a.731.731 0 1 0 1.462 0zM9 4.266a.81.81 0 1 0 0 1.62.81.81 0 0 0 0-1.62"}),t.createElement("path",{d:"M15.98 9A6.98 6.98 0 1 0 2.02 9a6.98 6.98 0 0 0 13.96 0M.557 9a8.442 8.442 0 1 1 16.884 0A8.442 8.442 0 0 1 .558 9Z"}))),ve=a=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...a},t.createElement("g",{fill:"none",fillRule:"evenodd"},t.createElement("path",{d:"M0 0h18v18H0z"}),t.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"m8.713 12.378-.144.97a.495.495 0 0 0 .502.574h.09a.49.49 0 0 0 .502-.575l-.145-.969zm0-1.46h2.067l.185 1.245.145.97a1.952 1.952 0 0 1-1.95 2.249h-.089a1.955 1.955 0 0 1-1.949-2.25l.144-.969.186-1.245z"}),t.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"M9 .565a5.23 5.23 0 0 1 5.227 5.015l.004.216v.287h1.234c.605 0 1.095.495 1.095 1.094v9.084c0 .642-.52 1.163-1.163 1.163H2.603c-.642 0-1.163-.52-1.163-1.163V7.246c0-.642.52-1.163 1.163-1.163h1.165v-.287A5.23 5.23 0 0 1 8.785.569zm6.096 9.628h-8.1c-.17 0-.481.148-.59.28l-.463.568c-.457.56-1.33.975-2.053.975h-.987l.001 3.945h12.194zm.001-2.648-12.194.001v3.007h.987c.248 0 .63-.166.84-.355l.08-.082.463-.567c.387-.473 1.113-.818 1.724-.818h8.099zM9 2.027a3.77 3.77 0 0 0-3.764 3.575l-.005.194v.287h7.537v-.287a3.77 3.77 0 0 0-3.574-3.764z"}))),we=a=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...a},t.createElement("g",{fill:"none",fillRule:"evenodd"},t.createElement("path",{d:"M0 0h18v18H0z"}),t.createElement("path",{fill:"#676f73",fillRule:"nonzero",d:"m8.713 12.378-.144.97a.495.495 0 0 0 .502.574h.09a.49.49 0 0 0 .502-.575l-.145-.969zm0-1.46h2.067l.185 1.245.145.97a1.952 1.952 0 0 1-1.95 2.249h-.089a1.955 1.955 0 0 1-1.949-2.25l.144-.969.186-1.245z"}),t.createElement("path",{fill:"#676f73",fillRule:"nonzero",d:"M9 .565a5.23 5.23 0 0 1 5.231 5.231v.287h1.234c.605 0 1.095.495 1.095 1.094v9.084c0 .642-.52 1.163-1.163 1.163H2.603c-.642 0-1.163-.52-1.163-1.163V7.246c0-.642.52-1.163 1.163-1.163h1.165v-.287A5.23 5.23 0 0 1 8.785.569Zm6.097 9.628h-8.1c-.147 0-.396.109-.533.223l-.058.058-.463.567c-.422.517-1.199.91-1.884.968l-.17.007h-.986l.001 3.945h12.194zm0-2.647H2.903v3.007h.987c.248 0 .63-.166.84-.355l.08-.082.463-.567c.355-.434.994-.76 1.569-.81l.155-.008h8.1zM9 2.027a3.77 3.77 0 0 0-3.769 3.769v.287h7.537v-.287a3.77 3.77 0 0 0-3.574-3.764Z"}))),H=a=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...a},t.createElement("g",{fill:"#263238"},t.createElement("path",{d:"M15.98 9A6.98 6.98 0 1 0 2.02 9a6.98 6.98 0 0 0 13.96 0M.557 9a8.442 8.442 0 1 1 16.884 0A8.442 8.442 0 0 1 .558 9"}),t.createElement("path",{d:"M8.32 8.34H5.436a.731.731 0 1 0 0 1.463h4.346v-5.95a.731.731 0 1 0-1.462 0z"}))),ye=a=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...a},t.createElement("g",{fill:"#676f73"},t.createElement("path",{d:"M15.98 9A6.98 6.98 0 1 0 2.02 9a6.98 6.98 0 0 0 13.96 0M.557 9a8.442 8.442 0 1 1 16.884 0A8.442 8.442 0 0 1 .558 9"}),t.createElement("path",{d:"M8.32 8.34H5.436a.731.731 0 1 0 0 1.463h4.346v-5.95a.731.731 0 1 0-1.462 0z"}))),je=a=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...a},t.createElement("g",{fill:"none",fillRule:"evenodd"},t.createElement("path",{d:"M0 0h18v18H0z"}),t.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"m8.713 12.378-.144.97a.495.495 0 0 0 .502.574h.09a.49.49 0 0 0 .502-.575l-.145-.969zm0-1.46h2.067l.185 1.245.145.97a1.952 1.952 0 0 1-1.95 2.249h-.089a1.955 1.955 0 0 1-1.949-2.25l.144-.969.186-1.245z"}),t.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"M15.465 6.083c.605 0 1.095.495 1.095 1.094v9.084c0 .642-.52 1.163-1.163 1.163H2.603c-.642 0-1.163-.52-1.163-1.163V7.246c0-.642.52-1.163 1.163-1.163zm-.368 4.11h-8.1c-.172 0-.482.148-.59.28l-.464.568c-.457.56-1.33.975-2.053.975h-.987l.001 3.945h12.194zm0-2.647H2.903v3.007h.987c.248 0 .63-.166.84-.355l.08-.082.463-.567c.387-.473 1.113-.818 1.724-.818h8.1z"}),t.createElement("path",{fill:"#263238",fillRule:"nonzero",d:"M12.528 5.231a3.769 3.769 0 0 0-6.556-2.537.731.731 0 1 1-1.081-.984 5.231 5.231 0 0 1 9.1 3.522v1.447a.731.731 0 0 1-1.463 0z"}))),Me=a=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...a},t.createElement("g",{fill:"none",fillRule:"evenodd"},t.createElement("path",{d:"M0 0h18v18H0z"}),t.createElement("path",{fill:"#676f73",fillRule:"nonzero",d:"m8.713 12.378-.144.97a.495.495 0 0 0 .502.574h.09a.49.49 0 0 0 .502-.575l-.145-.969zm0-1.46h2.067l.185 1.245.145.97a1.952 1.952 0 0 1-1.95 2.249h-.089a1.955 1.955 0 0 1-1.949-2.25l.144-.969.186-1.245z"}),t.createElement("path",{fill:"#676f73",fillRule:"nonzero",d:"M15.465 6.083c.605 0 1.095.495 1.095 1.094v9.084c0 .642-.52 1.163-1.163 1.163H2.603c-.642 0-1.163-.52-1.163-1.163V7.246c0-.642.52-1.163 1.163-1.163zm-.368 4.11h-8.1c-.172 0-.482.148-.59.28l-.464.568c-.457.56-1.33.975-2.053.975h-.987l.001 3.945h12.194zm0-2.647H2.903v3.007h.987c.248 0 .63-.166.84-.355l.08-.082.463-.567c.387-.473 1.113-.818 1.724-.818h8.1z"}),t.createElement("path",{fill:"#676f73",fillRule:"nonzero",d:"M12.528 5.231a3.769 3.769 0 0 0-6.556-2.537.731.731 0 1 1-1.081-.984 5.231 5.231 0 0 1 9.1 3.522v1.447a.731.731 0 0 1-1.463 0z"}))),U=t.memo(({repo:a,isActive:l})=>{const n=S(),i=V(),r=x(),o=z(),d=t.useCallback(j=>{o.reposLockRepo(j.id)},[o]),h=l&&i.pathname.endsWith("/recent"),k=l&&i.pathname.endsWith("/info"),g=l&&!h;return e.jsxs("li",{children:[e.jsxs("div",{className:m(s`
              display: flex;
              align-items: center;
              height: 36px;
              padding: 0 0 0 25px;

              &:hover {
                background-color: ${r.colors.hover};
              }
            `,g&&s`
                background-color: ${r.colors.hover};
              `),children:[a.state==="Locked"?e.jsxs(v,{to:`/repos/${a.id}`,className:s`
                width: 36px;
                height: 36px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-shrink: 0;
                margin-right: 7px;
              `,"aria-label":n.formatMessage({id:"web.repos.repo.locked.aria_label",description:"Accessibility label for the locked Safe Box icon in the sidebar list.",defaultMessage:"Safe Box locked"}),children:[e.jsx(we,{className:s`
                  a:hover > & {
                    display: none;
                  }
                `,role:"img"}),e.jsx(ve,{className:s`
                  display: none;

                  a:hover > & {
                    display: inline;
                  }
                `,role:"img"})]}):e.jsx("button",{className:s`
                ${C}
                width: 36px;
                height: 36px;
                flex-shrink: 0;
                margin-right: 7px;
              `,onClick:()=>d(a),"aria-label":n.formatMessage({id:"web.repos.repo.unlocked.aria_label",description:"Accessibility label for the unlocked Safe Box in the sidebar list.",defaultMessage:"Safe Box unlocked"}),children:e.jsxs("div",{className:s`
                  display: flex;
                  justify-content: center;
                  align-items: center;
                `,children:[e.jsx(Me,{className:s`
                    button:hover > div > & {
                      display: none;
                    }
                  `,role:"img"}),e.jsx(je,{className:s`
                    display: none;

                    button:hover > div > & {
                      display: inline;
                    }
                  `,role:"img"})]})}),e.jsx(v,{to:`/repos/${a.id}`,className:m(s`
                text-decoration: none;
                flex-grow: 1;
                font-size: 14px;
                font-weight: normal;
                height: 32px;
                display: flex;
                flex-direction: row;
                align-items: center;
                overflow: hidden;

                ${M} {
                  color: ${r.colors.text};
                  text-decoration: none;
                }
              `,g&&s`
                  font-weight: 600;
                `),children:e.jsx("span",{className:s`
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
              `,children:a.name})}),e.jsx(v,{to:`/repos/${a.id}/info`,className:s`
              width: 36px;
              height: 36px;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-shrink: 0;
            `,"aria-label":n.formatMessage({id:"web.repos.repo.info.aria_label",description:"Accessibility label for the info icon linking to Safe Box settings.",defaultMessage:"Safe Box info"}),children:k?e.jsx(A,{role:"img"}):e.jsxs(e.Fragment,{children:[e.jsx(be,{className:s`
                    a:hover > & {
                      display: none;
                    }
                  `,role:"img"}),e.jsx(A,{className:s`
                    display: none;

                    a:hover > & {
                      display: inline;
                    }
                  `,role:"img"})]})})]}),l?e.jsx("ul",{className:s`
              list-style: none;
              margin: 0;
              padding: 0;
              transition: height 0.3s ease-out;
              overflow: hidden;
            `,children:e.jsx("li",{children:e.jsxs("div",{className:m(s`
                    display: flex;
                    align-items: center;
                    height: 36px;
                    padding: 0 0 0 35px;

                    &:hover {
                      background-color: ${r.colors.hover};
                    }
                  `,h&&s`
                      background-color: ${r.colors.hover};
                    `),children:[e.jsx(v,{to:`/repos/${a.id}/recent`,className:s`
                    width: 36px;
                    height: 36px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-shrink: 0;
                    margin-right: 7px;
                  `,"aria-label":n.formatMessage({id:"web.repos.repo.recent.button.aria_label",description:"Accessibility label for the recent files entry in the Safe Box sidebar.",defaultMessage:"Recent files"}),children:h?e.jsx(H,{role:"img"}):e.jsxs(e.Fragment,{children:[e.jsx(ye,{className:s`
                          a:hover > & {
                            display: none;
                          }
                        `,role:"img"}),e.jsx(H,{className:s`
                          display: none;

                          a:hover > & {
                            display: inline;
                          }
                        `,role:"img"})]})}),e.jsx(v,{to:`/repos/${a.id}/recent`,className:m(s`
                      text-decoration: none;
                      flex-grow: 1;
                      font-size: 14px;
                      font-weight: normal;
                      height: 32px;
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      overflow: hidden;

                      ${M} {
                        color: ${r.colors.text};
                        text-decoration: none;
                      }
                    `,h&&s`
                        font-weight: 600;
                      `),children:e.jsx("span",{className:s`
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      overflow: hidden;
                    `,children:e.jsx(c,{id:"web.repos.repo.recent.button",description:"Sidebar label for the recent files entry under a Safe Box.",defaultMessage:"Recent files"})})})]})})}):null]})});U.displayName="RepoItem";const Z=t.memo(({isActive:a})=>{const l=x();return e.jsx("li",{children:e.jsxs(v,{to:"/repos/create",className:m(s`
            display: flex;
            align-items: center;
            height: 36px;
            padding: 0 0 0 25px;

            ${M} {
              color: ${l.colors.text};
              text-decoration: none;
            }

            &:hover {
              background-color: ${l.colors.hover};
            }
          `,a&&s`
              background-color: ${l.colors.hover};
            `),children:[e.jsxs("div",{className:s`
            width: 36px;
            height: 36px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
            margin-right: 7px;
          `,children:[e.jsx(ue,{className:s`
              div:hover > & {
                display: none;
              }
            `,role:"img"}),e.jsx(ge,{className:s`
              display: none;

              div:hover > & {
                display: inline;
              }
            `,role:"img"})]}),e.jsx("div",{className:m(s`
              text-decoration: none;
              font-size: 14px;
              flex-grow: 1;
              font-weight: normal;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            `,a&&s`
                font-weight: 600;
              `),children:e.jsx(c,{id:"web.repos.create.button",description:"Sidebar link label to create a new Safe Box.",defaultMessage:"Create new"})})]})})});Z.displayName="RepoCreateItem";const G=t.memo(()=>{const a=V(),n=le().repoId,[i]=y((r,o)=>r.reposSubscribe(o),r=>r.reposData,[]);return e.jsx("aside",{"aria-label":"Safe Boxes navigation",children:e.jsxs("ul",{className:s`
          list-style: none;
          margin: 0 0 30px;
          padding: 0;
        `,children:[i?.repos.map(r=>e.jsx(U,{repo:r,isActive:n!==void 0&&r.id===n},r.id)),e.jsx(Z,{isActive:a.pathname==="/repos/create"})]})})});G.displayName="Repos";const ke=t.lazy(()=>de(()=>import("./IntroModal-Dtrycx1b.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(a=>({default:a.IntroModal}))),W=t.memo(({isVisible:a,hide:l})=>a?e.jsx(ke,{isVisible:a,hide:l}):null);W.displayName="IntroModalLazy";function Ne(){const[a,l]=t.useState({isVisible:!1,payload:void 0}),n=t.useCallback(r=>l({isVisible:!0,payload:r}),[]),i=t.useCallback(()=>l({isVisible:!1,payload:void 0}),[]);return{isVisible:a.isVisible,payload:a.payload,show:n,hide:i}}const L="vaultIntroSeen",ze=()=>{const a=Ne(),l=a.show,[n]=y((i,r)=>i.reposSubscribe(r),i=>i.reposData,[]);return t.useEffect(()=>{if(n?.status.type==="Loaded"&&n.repos.length===0)try{localStorage.getItem(L)!=="true"&&(l(),localStorage.setItem(L,"true"))}catch{}},[n,l]),a},O=t.memo(()=>{const a=x(),n=z().configGetBaseUrl(),i=ze();return e.jsxs(e.Fragment,{children:[e.jsxs("footer",{className:s`
          margin: 0 0 0 25px;
        `,children:[e.jsxs("div",{className:s`
            margin: 0 0 5px;
            font-size: 12px;
            color: ${a.colors.text};
            text-align: center;
          `,children:[e.jsx("a",{href:"https://koofr.eu/help/koofr-vault/",target:"_blank",rel:"noreferrer",className:s`
              ${M} {
                color: ${a.colors.text};
              }
            `,children:e.jsx(c,{id:"web.dashboard_sidenav_links.help_and_support.link",description:"Footer link label to Koofr Vault help and support.",defaultMessage:"Help and support"})}),e.jsx("span",{"aria-hidden":!0,children:" · "}),e.jsx("button",{type:"button",className:s`
              ${C}
              color: ${a.colors.text};
            `,onClick:()=>{i.show()},children:e.jsx(c,{id:"web.dashboard_sidenav_links.intro.link",description:"Footer button label to open the intro walkthrough modal.",defaultMessage:"Intro"})}),e.jsx("span",{"aria-hidden":!0,children:" · "}),e.jsx("a",{href:`${n}/legal`,target:"_blank",rel:"noreferrer",className:s`
              ${M} {
                color: ${a.colors.text};
              }
            `,children:e.jsx(c,{id:"web.dashboard_sidenav_links.legal.link",description:"Footer link label to the legal page.",defaultMessage:"Legal"})}),e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx(v,{to:"/landing",className:s`
                  ${M} {
                    color: ${a.colors.text};
                  }
                `,children:e.jsx(c,{id:"web.dashboard_sidenav_links.landing_page.link",description:"Footer link label to the landing page.",defaultMessage:"Landing page"})})]})]}),e.jsxs("div",{className:s`
            font-size: 12px;
            text-align: center;
          `,children:[e.jsx(re,{}),e.jsx(oe,{})]})]}),e.jsx(t.Suspense,{children:e.jsx(W,{isVisible:i.isVisible,hide:i.hide})})]})});O.displayName="DashboardSidenavLinks";const K=t.memo(({className:a})=>{const l=R();return e.jsxs("div",{className:m(s``,l?s`
                width: 100%;
                margin: 0;
              `:s`
                width: 225px;
                flex-grow: 0;
                flex-shrink: 0;
                margin: 0 50px 0 0;
                overflow: hidden;
              `,a),children:[e.jsx(G,{}),e.jsx(O,{}),e.jsx(ce,{})]})});K.displayName="DashboardSidenav";const Ee=t.memo(({navbarLeft:a,navbarHeader:l,navbarNav:n,navbarExtra:i,className:r,sidenavClassName:o,children:d})=>{const h=R();return e.jsxs(e.Fragment,{children:[e.jsx(ie,{left:a,header:l,nav:n,extra:i}),e.jsxs("div",{className:m(s`
              display: flex;
            `,h?s`
                  flex-direction: column-reverse;
                  padding: 30px 0 75px;
                `:s`
                  flex-direction: row;
                  flex-grow: 1;
                  padding: 30px 25px 75px 0;
                `,r),children:[e.jsx(K,{className:o}),e.jsx("main",{className:m(s`
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                overflow-x: hidden;
              `,h?s`
                    margin: 0 0 32px;
                  `:s`
                    margin: 0 32px 0 0;
                  `),children:d})]}),e.jsx(P,{}),e.jsx(D,{})]})});Ee.displayName="DashboardLayout";export{Ee as D,A as S,P as T,T as a,be as b,Ne as u};

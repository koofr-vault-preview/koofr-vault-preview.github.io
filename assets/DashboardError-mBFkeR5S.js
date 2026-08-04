import{r as e}from"./chunk-DECur_0Z.js";import{o as t}from"./emotion-react.browser.esm-B6XXdZtW.js";import{t as n}from"./emotion-css.esm-Qs1dyEi9.js";import{n as r,t as i}from"./jsx-runtime-BA9giqqw.js";import{t as a}from"./useIntl-uVUnHosr.js";import{u as o}from"./chunk-LFPYN7LY-JR5T8hsc.js";import{r as s}from"./Button-QQQJxeoZ.js";import{t as c}from"./error-icon@2x-MthBeAQr.js";import{t as l}from"./useDocumentTitle--9KSRPbr.js";import{t as u}from"./DashboardLayout-CvzFhMbq.js";var d=e(r(),1),f=i(),p=(0,d.memo)(({error:e,onRetry:r})=>{let i=t();return(0,f.jsxs)(`div`,{className:n`
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 80px 0 0;
        `,children:[(0,f.jsx)(`img`,{src:c,alt:``,className:n`
            display: block;
            width: 290px;
            height: 194px;
          `}),(0,f.jsx)(`h3`,{className:n`
            font-size: 14px;
            color: ${i.colors.text};
            font-weight: 600;
            margin: 0 0 20px;
          `,children:e}),r===void 0?null:(0,f.jsx)(s,{type:`button`,variant:`primary`,onClick:r,children:(0,f.jsx)(o,{id:`web.error_component.try_again.button`,description:`Button label on the generic error state to retry the failed action.`,defaultMessage:`Try again`})})]})});p.displayName=`ErrorComponent`;var m=(0,d.memo)(({error:e,onRetry:t})=>(l(a().formatMessage({id:`web.dashboard_error.title`,description:`Document title shown when an error occurs.`,defaultMessage:`Error`})),(0,f.jsx)(u,{children:(0,f.jsx)(p,{error:e,onRetry:t})})));m.displayName=`DashboardError`;export{p as n,m as t};
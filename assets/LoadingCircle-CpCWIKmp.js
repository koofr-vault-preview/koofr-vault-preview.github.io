import{r as e}from"./chunk-DECur_0Z.js";import{o as t}from"./emotion-react.browser.esm-B6XXdZtW.js";import{r as n,t as r}from"./emotion-css.esm-Qs1dyEi9.js";import{n as i,t as a}from"./jsx-runtime-BA9giqqw.js";import{t as o}from"./useIntl-uVUnHosr.js";var s=e(i(),1),c=a(),l=n`
  0%,
  100% {
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
  }
  50% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`,u=(0,s.memo)(()=>{let e=o(),n=t();return(0,c.jsx)(`div`,{className:r`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        margin-bottom: 70px + 35px; // navbar height + half circle height
      `,"aria-label":e.formatMessage({id:`web.loading_circle.aria_label`,description:`Accessibility label for the loading animation.`,defaultMessage:`Loading…`}),children:(0,c.jsx)(`div`,{className:r`
          width: 70px;
          height: 70px;
          background-color: ${n.colors.primary};
          border-radius: 100%;
          animation: ${l} 2s infinite ease-out both;

          @media (max-width: 768px) {
            width: 60px;
            height: 60px;
          }
        `})})});u.displayName=`LoadingCircle`;export{u as t};
import{r as s,j as a}from"./DynamicThemeProvider-CxehgrR0.js";import{D as i}from"./DashboardLoading-CuCxS8_5.js";import{a as c}from"./mainWebAuthenticated-CsofEDA6.js";import{g as m,r as n}from"./loginRedirect-Cv2UE5L0.js";import{u as p}from"./emotion-css.esm-CiHGz3gB.js";import"./useDocumentTitle-D3L4F_h2.js";import"./DashboardNavbar-D5FkUPs1.js";import"./Navbar-D0t0rxK0.js";import"./NavbarSticky-DuO2swp8.js";import"./Button-Dt6jELX4.js";import"./index-xW_X6rVy.js";const E=()=>{const o=c(),t=p(),r=document.location.href;return s.useEffect(()=>{(async()=>{if(await o.oauth2FinishFlowUrl(r)){const e=m();n(),t(e??"/",{replace:!0})}else t("/",{replace:!0})})()},[o,r,t]),a.jsx(i,{})};export{E as OAuth2CallbackPage};
import{r as e,j as i}from"./DynamicThemeProvider-71c37830.js";import{D as u}from"./DashboardLoading-46aaae0f.js";import{a as m,u as p}from"./mainAuthenticated-f089bf06.js";import{u as n}from"./index-6ac7cbed.js";import"./useDocumentTitle-2cb3b118.js";import"./DashboardNavbar-3e775b4a.js";import"./Navbar-47732754.js";import"./NavbarSticky-315264f4.js";import"./Button-d7c59dae.js";import"./index-41e09f3b.js";const j=()=>{const o=m(),a=n(),[r]=p((t,s)=>t.oauth2StatusSubscribe(s),t=>t.oauth2StatusData,[]);return e.useEffect(()=>{if(r.type==="Loaded")a("/",{replace:!0});else{const t=o.oauth2StartLoginFlow();t!==void 0&&(document.location.href=t)}},[o,r,a]),i.jsx(u,{})};export{j as LoginPage};
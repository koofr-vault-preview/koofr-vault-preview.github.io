import{r as a,j as e,a as h,u as D}from"./DynamicThemeProvider-4BQuZolX.js";import{N as P}from"./Navbar-DmkHxDZO.js";import{c as l,a as _,L as $,M as U}from"./emotion-css.esm-9QbHV8nv.js";import{k as H}from"./Button-CJ4fGdXT.js";import{u as C,a as A,M as R,b as y,c as k,e as T,D as G,d as F}from"./useMenuUpdate-DaK7Jj7t.js";import{u as f,a as b}from"./mainWebAuthenticated-D99KiaU6.js";const K=s=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:10,height:10,fill:"none",...s},a.createElement("path",{fill:"#263238",fillRule:"evenodd",d:"M2.886 8.52a.405.405 0 0 0-.051.57c.144.172.4.195.572.052l4.268-4.135L3.407.864a.407.407 0 0 0-.572.051.405.405 0 0 0 .05.571l3.528 3.516z",clipRule:"evenodd"})),v=a.memo(()=>e.jsx("div",{className:l`
      display: inline;
      flex-grow: 0;
      flex-shrink: 0;
      width: 10px;
      height: 10px;
      margin: 5px 4px 0;
    `,children:e.jsx(K,{role:"img"})}));v.displayName="NavbarBreadcrumbsSeparator";const g=a.memo(({breadcrumb:s,separator:r,onClick:t,onCaretClick:i})=>{const{name:o,link:n,isClickable:c,hasCaret:d,isLast:m}=s,u=h(),x=a.useCallback(p=>{n===void 0&&p.preventDefault(),t!==void 0&&c&&t(p,s)},[n,t,c,s]),N=a.useCallback(p=>{i!==void 0&&i(p,s)},[i,s]),M=l`
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;

      ${H} {
        color: ${u.colors.text};
        text-decoration: none;
      }

      &:hover {
        text-decoration: underline;
      }
    `;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:_(l`
              display: inline;
              font-size: 14px;
              font-weight: normal;
            `,m&&l`
                font-weight: 600;
              `),children:[n!==void 0?e.jsx($,{to:n,className:M,onClick:x,"aria-current":m?"page":void 0,children:o}):c?e.jsx("span",{className:M,role:"button",onClick:x,"aria-current":m?"page":void 0,children:o}):e.jsx("span",{onClick:x,children:o}),d&&N!==void 0?e.jsx("div",{className:l`
                display: inline-block;
                width: 10px;
                height: 10px;
                padding: 8px 10px 8px 1px;
                margin-left: 7px;
                cursor: pointer;

                &:after {
                  content: '';
                  display: block;
                  width: 0;
                  height: 0;
                  border-top: 4px solid ${u.colors.textLight};
                  border-top-color: ${u.colors.textLight};
                  border-right: 4px solid transparent;
                  border-left: 4px solid transparent;
                }
              `,onClick:N}):null]}),r?e.jsx(v,{}):null]})});g.displayName="NavbarBreadcrumb";const I=a.memo(({breadcrumbs:s,onClick:r,onCaretClick:t})=>{const i=D(),o=s.slice(0,s.length-2),n=s.slice(Math.max(s.length-2,0)),c=s.length>2;return e.jsxs("div",{className:l`
          margin: 0;
          padding: 0;
          display: flex;
        `,"aria-label":i.formatMessage({id:"web.navbar_breadcrumbs.aria_label",description:"Accessibility label for the breadcrumb navigation.",defaultMessage:"Breadcrumb"}),children:[c?e.jsx("div",{className:l`
              display: flex;
              flex-grow: 0;
              flex-shrink: 1;
              overflow: hidden;
            `,children:e.jsx("div",{className:l`
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
              `,children:o.map((d,m)=>e.jsx(g,{breadcrumb:d,separator:m<o.length-1,onClick:r,onCaretClick:t},d.id))})}):null,c?e.jsx("div",{className:l`
              flex-shrink: 0;
            `,children:e.jsx(v,{})}):null,e.jsx("div",{className:l`
            flex-shrink: 0;
          `,children:n.map((d,m)=>e.jsx(g,{breadcrumb:d,separator:m<n.length-1,onClick:r,onCaretClick:t},d.id))})]})});I.displayName="NavbarBreadcrumbs";function O(s){const r=a.useMemo(()=>[{id:"breadcrumb",name:s,isClickable:!1,hasCaret:!1,isLast:!0}],[s]);return e.jsx(I,{breadcrumbs:r})}const w=a.memo(()=>{const s=h();return e.jsx("div",{className:l`
        width: 32px;
        height: 32px;
        border-radius: 3px;
        background-color: ${s.colors.hover};
      `})});w.displayName="UserIconLoading";const L=a.memo(({user:s})=>{const r=h(),t=s.fullName.length>0?s.fullName[0].toUpperCase():"";return e.jsx("div",{className:l`
        width: 32px;
        height: 32px;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        font-weight: 600;
        background-color: ${r.colors.border};
        color: ${r.colors.textLight};
      `,children:t})});L.displayName="UserIconFallback";const V=a.memo(({user:s})=>{const r=b();a.useMemo(()=>r.userEnsureProfilePicture(),[r]);const[t]=f((o,n)=>o.userProfilePictureLoadedSubscribe(n),o=>o.userProfilePictureLoadedData,[]),i=a.useMemo(()=>{if(t){const o=r.userGetProfilePicture();return o===void 0?void 0:URL.createObjectURL(new Blob([o]))}else return},[r,t]);return t?i?e.jsx("img",{src:i,alt:s.fullName,className:l`
        width: 32px;
        height: 32px;
        border-radius: 3px;
      `}):e.jsx(L,{user:s}):e.jsx(w,{})});V.displayName="UserIconUser";const j=a.memo(()=>{const[s]=f((r,t)=>r.userSubscribe(t),r=>r.userData,[]);return s!==void 0?e.jsx(V,{user:s},s.id):e.jsx(w,{})});j.displayName="UserIcon";const W=s=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...s},a.createElement("path",{fill:"#71ba05",d:"M4.712 10.886a3.93 3.93 0 0 1 3.932 3.932V17H1v-6.114zm12.288 0V17H9.356v-2.182a3.93 3.93 0 0 1 3.932-3.932zM11.318 1c.334.026.771.154 1.151.522.275.266.406.553.474.897l.025.151.01.323V4.06H17v6.115h-3.712a3.93 3.93 0 0 1-3.932-3.932l-.001-1.47v.001-1.997h-.71L8.642 4.06h.001v2.183a3.93 3.93 0 0 1-3.932 3.932H1V4.06l4.042-.001V2.893l.011-.323c.059-.413.185-.744.5-1.048.38-.368.816-.496 1.15-.522z"})),q=s=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,...s},a.createElement("path",{fill:"#676f73",d:"M4.712 10.886a3.93 3.93 0 0 1 3.932 3.932V17H1v-6.114zm12.288 0V17H9.356v-2.182a3.93 3.93 0 0 1 3.932-3.932zM11.318 1c.334.026.771.154 1.151.522.275.266.406.553.474.897l.025.151.01.323V4.06H17v6.115h-3.712a3.93 3.93 0 0 1-3.932-3.932l-.001-1.47v.001-1.997h-.71L8.642 4.06h.001v2.183a3.93 3.93 0 0 1-3.932 3.932H1V4.06l4.042-.001V2.893l.011-.323c.059-.413.185-.744.5-1.048.38-.368.816-.496 1.15-.522z"})),J=s=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...s},a.createElement("g",{fill:"#263238"},a.createElement("path",{d:"M15.41 13.827c-.055 1.02-.667 1.588-1.72 1.588H4.293c-1.101 0-1.725-.624-1.725-1.726V4.311c0-1.101.625-1.726 1.726-1.726h9.396c1.101 0 1.724.623 1.724 1.725l.008.315a.731.731 0 0 0 1.462-.04l-.008-.295c0-1.89-1.277-3.167-3.186-3.167H4.294c-1.91 0-3.189 1.28-3.189 3.188v9.378c0 1.91 1.28 3.188 3.188 3.188h9.397c1.823 0 3.083-1.169 3.18-2.96.002-.042.006-.474.006-.49a.736.736 0 0 0-.728-.756.73.73 0 0 0-.734.729z"}),a.createElement("path",{d:"M11.934 9.725a.731.731 0 1 0 0-1.463H4.896a.731.731 0 1 0 0 1.463z"}),a.createElement("path",{d:"m14.471 9.009-3.09-3.091a.731.731 0 1 0-1.035 1.034l2.057 2.057-2.057 2.057A.731.731 0 0 0 11.38 12.1z"}))),Q=s=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...s},a.createElement("g",{fill:"#676f73"},a.createElement("path",{d:"M15.41 13.827c-.055 1.02-.667 1.588-1.72 1.588H4.293c-1.101 0-1.725-.624-1.725-1.726V4.311c0-1.101.625-1.726 1.726-1.726h9.396c1.101 0 1.724.623 1.724 1.725l.008.315a.731.731 0 0 0 1.462-.04l-.008-.295c0-1.89-1.277-3.167-3.186-3.167H4.294c-1.91 0-3.189 1.28-3.189 3.188v9.378c0 1.91 1.28 3.188 3.188 3.188h9.397c1.823 0 3.083-1.169 3.18-2.96.002-.042.006-.474.006-.49a.736.736 0 0 0-.728-.756.73.73 0 0 0-.734.729z"}),a.createElement("path",{d:"M11.934 9.725a.731.731 0 1 0 0-1.463H4.896a.731.731 0 1 0 0 1.463z"}),a.createElement("path",{d:"m14.471 9.009-3.09-3.091a.731.731 0 1 0-1.035 1.034l2.057 2.057-2.057 2.057A.731.731 0 0 0 11.38 12.1z"}))),z=a.memo(()=>{const s=h(),t=b().configGetBaseUrl(),[i]=f((o,n)=>o.userSubscribe(n),o=>o.userData,[]);return i===void 0?null:e.jsx(T,{children:e.jsxs("a",{href:`${t}/app/admin/preferences`,target:"_blank",rel:"noreferrer",className:l`
          display: flex;
          align-items: center;
          padding: 5px 12px;

          ${H} {
            color: ${s.colors.text};
            text-decoration: none;
          }
        `,children:[e.jsx("div",{className:l`
            display: flex;
            margin-right: 10px;
          `,children:e.jsx(j,{})}),e.jsx("div",{className:l`
            display: block;
            overflow: hidden;
          `,children:e.jsx("div",{className:l`
              font-size: 14px;
              font-weight: normal;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            `,children:i.fullName})})]})})});z.displayName="DashboardMenuUserInfoItem";const E=a.memo(()=>{const s=h(),r=b(),t=r.configGetBaseUrl(),[i,{show:o,popper:n}]=C({fixed:!0,offset:[15,12]});A(o,n);const c=a.useCallback(()=>{{const d=r.oauth2StartLogoutFlow();d!==void 0&&(document.location.href=d)}},[r]);return e.jsxs(R,{isVisible:o,...i,className:l`
        width: 214px;
        z-index: ${s.zindex.dashboardMenu};
        overflow-y: auto;
      `,children:[e.jsx(z,{}),e.jsx(y,{}),e.jsx(k,{icon:e.jsx(q,{role:"img"}),iconHover:e.jsx(W,{role:"img"}),textClassName:l`
          font-weight: normal;
        `,href:t,target:"_blank",rel:"noreferrer",children:e.jsx(U,{id:"web.dashboard_menu.open_remote.menu_item",description:"User menu item to open Koofr in a new tab.",defaultMessage:"Open Koofr"})}),e.jsx(y,{}),e.jsx(k,{icon:e.jsx(Q,{role:"img"}),iconHover:e.jsx(J,{role:"img"}),textClassName:l`
          font-weight: normal;
        `,onClick:c,children:e.jsx(U,{id:"web.dashboard_menu.logout.menu_item",description:"User menu item to log out of the app.",defaultMessage:"Logout"})})]})});E.displayName="DashboardMenu";const S=a.memo(()=>{const s=D(),[r]=F();return e.jsx("div",{role:"button",className:l`
        cursor: pointer;
      `,"aria-label":s.formatMessage({id:"web.dashboard_user_icon.aria_label",description:"Accessibility label for the user account menu button.",defaultMessage:"User menu"}),...r,children:e.jsx(j,{})})});S.displayName="DashboardUserIcon";const B=a.memo(()=>{const[s,r]=a.useState(!1);return e.jsxs(G,{show:s,onToggle:t=>r(t),placement:"bottom-end",children:[e.jsx(S,{}),e.jsx(E,{})]})});B.displayName="DashboardUserIconDropdown";const X=a.memo(({left:s,header:r,nav:t,right:i,extra:o,noShadow:n})=>{const c=O("Vault");return e.jsx(P,{left:s,header:r??c,nav:t,right:i??e.jsx(B,{}),extra:o,noShadow:n})});X.displayName="DashboardNavbar";export{X as D,I as N,q as S,W as a,O as u};

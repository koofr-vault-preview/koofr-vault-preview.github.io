import{r as e}from"./chunk-DECur_0Z.js";import{o as t}from"./emotion-react.browser.esm-B6XXdZtW.js";import{n,t as r}from"./emotion-css.esm-Qs1dyEi9.js";import{n as i,t as a}from"./jsx-runtime-BA9giqqw.js";import{t as o}from"./useIntl-uVUnHosr.js";import{t as s,u as c}from"./chunk-LFPYN7LY-qir83jfO.js";import{o as l}from"./Button-CQrJ5P7o.js";import{t as u}from"./useWebVault-BDONIKNF.js";import{t as d}from"./useSubscribe-Dq--lJhj.js";import{t as f}from"./Navbar-PrhE56j5.js";import{a as p,c as m,i as h,n as g,o as _,r as v,s as y,t as b}from"./useMenuUpdate-uUH7xBSR.js";var x=e(i()),S=a(),C=e=>(0,S.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:10,height:10,fill:`none`,...e,children:(0,S.jsx)(`path`,{fill:`#263238`,fillRule:`evenodd`,d:`M2.886 8.52a.405.405 0 0 0-.051.57c.144.172.4.195.572.052l4.268-4.135L3.407.864a.407.407 0 0 0-.572.051.405.405 0 0 0 .05.571l3.528 3.516z`,clipRule:`evenodd`})}),w=(0,x.memo)(()=>(0,S.jsx)(`div`,{className:r`
      display: inline;
      flex-grow: 0;
      flex-shrink: 0;
      width: 10px;
      height: 10px;
      margin: 5px 4px 0;
    `,children:(0,S.jsx)(C,{role:`img`})}));w.displayName=`NavbarBreadcrumbsSeparator`;var T=(0,x.memo)(({breadcrumb:e,separator:i,onClick:a,onCaretClick:o})=>{let{name:c,link:u,isClickable:d,hasCaret:f,isLast:p}=e,m=t(),h=(0,x.useCallback)(t=>{u===void 0&&t.preventDefault(),a!==void 0&&d&&a(t,e)},[u,a,d,e]),g=(0,x.useCallback)(t=>{o!==void 0&&o(t,e)},[o,e]),_=r`
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;

      ${l} {
        color: ${m.colors.text};
        text-decoration: none;
      }

      &:hover {
        text-decoration: underline;
      }
    `;return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(`div`,{className:n(r`
              display: inline;
              font-size: 14px;
              font-weight: normal;
            `,p&&r`
                font-weight: 600;
              `),children:[u===void 0?d?(0,S.jsx)(`span`,{className:_,role:`button`,onClick:h,"aria-current":p?`page`:void 0,children:c}):(0,S.jsx)(`span`,{onClick:h,children:c}):(0,S.jsx)(s,{to:u,className:_,onClick:h,"aria-current":p?`page`:void 0,children:c}),f&&g!==void 0?(0,S.jsx)(`div`,{className:r`
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
                  border-top: 4px solid ${m.colors.textLight};
                  border-top-color: ${m.colors.textLight};
                  border-right: 4px solid transparent;
                  border-left: 4px solid transparent;
                }
              `,onClick:g}):null]}),i?(0,S.jsx)(w,{}):null]})});T.displayName=`NavbarBreadcrumb`;var E=(0,x.memo)(({breadcrumbs:e,onClick:t,onCaretClick:n})=>{let i=o(),a=e.slice(0,e.length-2),s=e.slice(Math.max(e.length-2,0)),c=e.length>2;return(0,S.jsxs)(`div`,{className:r`
          margin: 0;
          padding: 0;
          display: flex;
        `,"aria-label":i.formatMessage({id:`web.navbar_breadcrumbs.aria_label`,description:`Accessibility label for the breadcrumb navigation.`,defaultMessage:`Breadcrumb`}),children:[c?(0,S.jsx)(`div`,{className:r`
              display: flex;
              flex-grow: 0;
              flex-shrink: 1;
              overflow: hidden;
            `,children:(0,S.jsx)(`div`,{className:r`
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
              `,children:a.map((e,r)=>(0,S.jsx)(T,{breadcrumb:e,separator:r<a.length-1,onClick:t,onCaretClick:n},e.id))})}):null,c?(0,S.jsx)(`div`,{className:r`
              flex-shrink: 0;
            `,children:(0,S.jsx)(w,{})}):null,(0,S.jsx)(`div`,{className:r`
            flex-shrink: 0;
          `,children:s.map((e,r)=>(0,S.jsx)(T,{breadcrumb:e,separator:r<s.length-1,onClick:t,onCaretClick:n},e.id))})]})});E.displayName=`NavbarBreadcrumbs`;function D(e){return(0,S.jsx)(E,{breadcrumbs:(0,x.useMemo)(()=>[{id:`breadcrumb`,name:e,isClickable:!1,hasCaret:!1,isLast:!0}],[e])})}var O=(0,x.memo)(()=>(0,S.jsx)(`div`,{className:r`
        width: 32px;
        height: 32px;
        border-radius: 3px;
        background-color: ${t().colors.hover};
      `}));O.displayName=`UserIconLoading`;var k=(0,x.memo)(({user:e})=>{let n=t(),i=e.fullName.length>0?e.fullName[0].toUpperCase():``;return(0,S.jsx)(`div`,{className:r`
        width: 32px;
        height: 32px;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        font-weight: 600;
        background-color: ${n.colors.border};
        color: ${n.colors.textLight};
      `,children:i})});k.displayName=`UserIconFallback`;var A=(0,x.memo)(({user:e})=>{let t=u();(0,x.useMemo)(()=>t.userEnsureProfilePicture(),[t]);let[n]=d((e,t)=>e.userProfilePictureLoadedSubscribe(t),e=>e.userProfilePictureLoadedData,[]),i=(0,x.useMemo)(()=>{if(n){let e=t.userGetProfilePicture();return e===void 0?void 0:URL.createObjectURL(new Blob([e]))}else return},[t,n]);return n?i?(0,S.jsx)(`img`,{src:i,alt:e.fullName,className:r`
        width: 32px;
        height: 32px;
        border-radius: 3px;
      `}):(0,S.jsx)(k,{user:e}):(0,S.jsx)(O,{})});A.displayName=`UserIconUser`;var j=(0,x.memo)(()=>{let[e]=d((e,t)=>e.userSubscribe(t),e=>e.userData,[]);return e===void 0?(0,S.jsx)(O,{}):(0,S.jsx)(A,{user:e},e.id)});j.displayName=`UserIcon`;var M=e=>(0,S.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:18,height:18,...e,children:(0,S.jsx)(`path`,{fill:`#71ba05`,d:`M4.712 10.886a3.93 3.93 0 0 1 3.932 3.932V17H1v-6.114zm12.288 0V17H9.356v-2.182a3.93 3.93 0 0 1 3.932-3.932zM11.318 1c.334.026.771.154 1.151.522.275.266.406.553.474.897l.025.151.01.323V4.06H17v6.115h-3.712a3.93 3.93 0 0 1-3.932-3.932l-.001-1.47v.001-1.997h-.71L8.642 4.06h.001v2.183a3.93 3.93 0 0 1-3.932 3.932H1V4.06l4.042-.001V2.893l.011-.323c.059-.413.185-.744.5-1.048.38-.368.816-.496 1.15-.522z`})}),N=e=>(0,S.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:18,height:18,...e,children:(0,S.jsx)(`path`,{fill:`#676f73`,d:`M4.712 10.886a3.93 3.93 0 0 1 3.932 3.932V17H1v-6.114zm12.288 0V17H9.356v-2.182a3.93 3.93 0 0 1 3.932-3.932zM11.318 1c.334.026.771.154 1.151.522.275.266.406.553.474.897l.025.151.01.323V4.06H17v6.115h-3.712a3.93 3.93 0 0 1-3.932-3.932l-.001-1.47v.001-1.997h-.71L8.642 4.06h.001v2.183a3.93 3.93 0 0 1-3.932 3.932H1V4.06l4.042-.001V2.893l.011-.323c.059-.413.185-.744.5-1.048.38-.368.816-.496 1.15-.522z`})}),P=e=>(0,S.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:18,height:18,fill:`none`,...e,children:(0,S.jsxs)(`g`,{fill:`#263238`,children:[(0,S.jsx)(`path`,{d:`M15.41 13.827c-.055 1.02-.667 1.588-1.72 1.588H4.293c-1.101 0-1.725-.624-1.725-1.726V4.311c0-1.101.625-1.726 1.726-1.726h9.396c1.101 0 1.724.623 1.724 1.725l.008.315a.731.731 0 0 0 1.462-.04l-.008-.295c0-1.89-1.277-3.167-3.186-3.167H4.294c-1.91 0-3.189 1.28-3.189 3.188v9.378c0 1.91 1.28 3.188 3.188 3.188h9.397c1.823 0 3.083-1.169 3.18-2.96.002-.042.006-.474.006-.49a.736.736 0 0 0-.728-.756.73.73 0 0 0-.734.729z`}),(0,S.jsx)(`path`,{d:`M11.934 9.725a.731.731 0 1 0 0-1.463H4.896a.731.731 0 1 0 0 1.463z`}),(0,S.jsx)(`path`,{d:`m14.471 9.009-3.09-3.091a.731.731 0 1 0-1.035 1.034l2.057 2.057-2.057 2.057A.731.731 0 0 0 11.38 12.1z`})]})}),F=e=>(0,S.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:18,height:18,fill:`none`,...e,children:(0,S.jsxs)(`g`,{fill:`#676f73`,children:[(0,S.jsx)(`path`,{d:`M15.41 13.827c-.055 1.02-.667 1.588-1.72 1.588H4.293c-1.101 0-1.725-.624-1.725-1.726V4.311c0-1.101.625-1.726 1.726-1.726h9.396c1.101 0 1.724.623 1.724 1.725l.008.315a.731.731 0 0 0 1.462-.04l-.008-.295c0-1.89-1.277-3.167-3.186-3.167H4.294c-1.91 0-3.189 1.28-3.189 3.188v9.378c0 1.91 1.28 3.188 3.188 3.188h9.397c1.823 0 3.083-1.169 3.18-2.96.002-.042.006-.474.006-.49a.736.736 0 0 0-.728-.756.73.73 0 0 0-.734.729z`}),(0,S.jsx)(`path`,{d:`M11.934 9.725a.731.731 0 1 0 0-1.463H4.896a.731.731 0 1 0 0 1.463z`}),(0,S.jsx)(`path`,{d:`m14.471 9.009-3.09-3.091a.731.731 0 1 0-1.035 1.034l2.057 2.057-2.057 2.057A.731.731 0 0 0 11.38 12.1z`})]})}),I=(0,x.memo)(()=>{let e=t(),n=u().configGetBaseUrl(),[i]=d((e,t)=>e.userSubscribe(t),e=>e.userData,[]);return i===void 0?null:(0,S.jsx)(v,{children:(0,S.jsxs)(`a`,{href:`${n}/app/admin/preferences`,target:`_blank`,rel:`noreferrer`,className:r`
          display: flex;
          align-items: center;
          padding: 5px 12px;

          ${l} {
            color: ${e.colors.text};
            text-decoration: none;
          }
        `,children:[(0,S.jsx)(`div`,{className:r`
            display: flex;
            margin-right: 10px;
          `,children:(0,S.jsx)(j,{})}),(0,S.jsx)(`div`,{className:r`
            display: block;
            overflow: hidden;
          `,children:(0,S.jsx)(`div`,{className:r`
              font-size: 14px;
              font-weight: normal;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            `,children:i.fullName})})]})})});I.displayName=`DashboardMenuUserInfoItem`;var L=(0,x.memo)(()=>{let e=t(),n=u(),i=n.configGetBaseUrl(),[a,{show:o,popper:s}]=m({fixed:!0,offset:[15,12]});b(o,s);let l=(0,x.useCallback)(()=>{{let e=n.oauth2StartLogoutFlow();e!==void 0&&(document.location.href=e)}},[n]);return(0,S.jsxs)(g,{isVisible:o,...a,className:r`
        width: 214px;
        z-index: ${e.zindex.dashboardMenu};
        overflow-y: auto;
      `,children:[(0,S.jsx)(I,{}),(0,S.jsx)(h,{}),(0,S.jsx)(p,{icon:(0,S.jsx)(N,{role:`img`}),iconHover:(0,S.jsx)(M,{role:`img`}),textClassName:r`
          font-weight: normal;
        `,href:i,target:`_blank`,rel:`noreferrer`,children:(0,S.jsx)(c,{id:`web.dashboard_menu.open_remote.menu_item`,description:`User menu item to open Koofr in a new tab.`,defaultMessage:`Open Koofr`})}),(0,S.jsx)(h,{}),(0,S.jsx)(p,{icon:(0,S.jsx)(F,{role:`img`}),iconHover:(0,S.jsx)(P,{role:`img`}),textClassName:r`
          font-weight: normal;
        `,onClick:l,children:(0,S.jsx)(c,{id:`web.dashboard_menu.logout.menu_item`,description:`User menu item to log out of the app.`,defaultMessage:`Logout`})})]})});L.displayName=`DashboardMenu`;var R=(0,x.memo)(()=>{let e=o(),[t]=y();return(0,S.jsx)(`div`,{role:`button`,className:r`
        cursor: pointer;
      `,"aria-label":e.formatMessage({id:`web.dashboard_user_icon.aria_label`,description:`Accessibility label for the user account menu button.`,defaultMessage:`User menu`}),...t,children:(0,S.jsx)(j,{})})});R.displayName=`DashboardUserIcon`;var z=(0,x.memo)(()=>{let[e,t]=(0,x.useState)(!1);return(0,S.jsxs)(_,{show:e,onToggle:e=>t(e),placement:`bottom-end`,children:[(0,S.jsx)(R,{}),(0,S.jsx)(L,{})]})});z.displayName=`DashboardUserIconDropdown`;var B=(0,x.memo)(({left:e,header:t,nav:n,right:r,extra:i,noShadow:a})=>{let o=D(`Vault`);return(0,S.jsx)(f,{left:e,header:t??o,nav:n,right:r??(0,S.jsx)(z,{}),extra:i,noShadow:a})});B.displayName=`DashboardNavbar`;export{E as a,D as i,N as n,M as r,B as t};
import{r as o,j as p,g as M,u as S,d as y,b as h,c as g}from"./DynamicThemeProvider-71c37830.js";import{D as F}from"./DashboardError-ca6c7871.js";import{D as H}from"./DashboardLoading-5898b560.js";import{a as E,u as U,s as A}from"./mainAuthenticated-157f8d64.js";import{D as C}from"./DashboardLayout-e5b10ae1.js";import{u as B}from"./DashboardNavbar-f1272834.js";import{u as K}from"./useDocumentTitle-2cb3b118.js";import{R as N}from"./RepoUnlockForm-06724d01.js";import{f as O}from"./index-8c64d985.js";import{n as $,b as P,e as z}from"./Button-d7c59dae.js";const ue=(e,a,n)=>{const t=new URLSearchParams;return a!==void 0&&t.set("path",a),n!==void 0&&t.set("name",n),{pathname:`/repos/${e}`,search:t.toString()}},pe=(e,a,n,t)=>{const c=new URLSearchParams({path:a});return n&&c.set("editing","true"),t!==void 0&&c.set("autosave",`${t}`),{pathname:`/repos/${e}/details`,search:c.toString()}},G=e=>e==="pdf",j=e=>e==="Text"||e==="Code",_=e=>e==="jpg"||e==="jpeg"||e==="gif"||e==="png"||e==="svg",ve=e=>e.nameError===void 0&&(G(e.ext)||j(e.category)||_(e.ext)),W=e=>j(e),he=e=>e.nameError===void 0&&W(e.category),q=o.memo(({repoId:e})=>{const a=E();let n=o.useMemo(()=>a.repoUnlockCreate(e,{mode:"Unlock"}),[a,e]);o.useEffect(()=>()=>{a.repoUnlockDestroy(n)},[a,n]);const[t]=U((m,v)=>m.repoUnlockInfoSubscribe(n,v),m=>m.repoUnlockInfoData,[n]),c=o.useCallback(m=>{a.repoUnlockUnlock(n,m)},[a,n]),r=B((t==null?void 0:t.repoName)??"");return K(t==null?void 0:t.repoName),t===void 0?null:p.jsx(C,{navbarHeader:r,children:t!==void 0?p.jsx(N,{info:t,onUnlock:c}):null})});var L={exports:{}};(function(e,a){function n(f){if(f&&typeof f=="object"){var l=f.which||f.keyCode||f.charCode;l&&(f=l)}if(typeof f=="number")return m[f];var s=String(f),d=t[s.toLowerCase()];if(d)return d;var d=c[s.toLowerCase()];if(d)return d;if(s.length===1)return s.charCodeAt(0)}n.isEventKey=function(l,s){if(l&&typeof l=="object"){var d=l.which||l.keyCode||l.charCode;if(d==null)return!1;if(typeof s=="string"){var i=t[s.toLowerCase()];if(i)return i===d;var i=c[s.toLowerCase()];if(i)return i===d}else if(typeof s=="number")return s===d;return!1}},a=e.exports=n;var t=a.code=a.codes={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,"pause/break":19,"caps lock":20,esc:27,space:32,"page up":33,"page down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46,command:91,"left command":91,"right command":93,"numpad *":106,"numpad +":107,"numpad -":109,"numpad .":110,"numpad /":111,"num lock":144,"scroll lock":145,"my computer":182,"my calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222},c=a.aliases={windows:91,"⇧":16,"⌥":18,"⌃":17,"⌘":91,ctl:17,control:17,option:18,pause:19,break:19,caps:20,return:13,escape:27,spc:32,spacebar:32,pgup:33,pgdn:34,ins:45,del:46,cmd:91};/*!
 * Programatically add the following
 */for(r=97;r<123;r++)t[String.fromCharCode(r)]=r-32;for(var r=48;r<58;r++)t[r-48]=r;for(r=1;r<13;r++)t["f"+r]=r+111;for(r=0;r<10;r++)t["numpad "+r]=r+96;var m=a.names=a.title={};for(r in t)m[t[r]]=r;for(var v in c)t[v]=c[v]})(L,L.exports);var X=L.exports;const J=M(X);function Q(e,a,{altKey:n=!1,ctrlKey:t=!1,metaKey:c=!1,shiftKey:r=!1}){return J.isEventKey(e,a)&&e.altKey===n&&e.ctrlKey===t&&e.metaKey===c&&e.shiftKey===r}function Y(e){const a=E();o.useEffect(()=>{const n=t=>{Q(t,"l",{altKey:!0,shiftKey:!0})&&(t.preventDefault(),a.reposLockRepo(e))};return document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}},[a,e])}const R=1e3;function I(e){const a=E(),n=o.useCallback(()=>{a.reposTouchRepo(e)},[a,e]),t=o.useMemo(()=>{let c=0,r;return function(){const m=new Date().getTime();clearTimeout(r),m-c>=R?(n(),c=m):r=setTimeout(()=>{n(),c=m},R)}},[n]);o.useEffect(()=>(window.addEventListener("mousemove",t),window.addEventListener("mousedown",t),window.addEventListener("keydown",t),()=>{window.removeEventListener("mousemove",t),window.removeEventListener("mousedown",t),window.removeEventListener("keydown",t)}),[t]),o.useEffect(()=>{n()},[n])}const ee=o.memo(({repoId:e,children:a})=>(Y(e),I(e),a)),we=o.memo(({repoId:e,repoStatus:a,isLocked:n,children:t})=>{const c=E();return a.type==="Initial"||a.type==="Loading"&&!a.loaded?p.jsx(H,{}):a.type==="Error"?p.jsx(F,{error:a.error,onRetry:()=>{c.load()}}):n?p.jsx(q,{repoId:e},e):p.jsx(ee,{repoId:e,children:t})}),ge=o.memo(({value:e,noTooltip:a})=>{const n=E(),[t,c]=o.useState(()=>n.relativeTime(Math.min(e,Date.now()),!0)),r=t.nextUpdate;return o.useEffect(()=>{if(r!==void 0){const m=setTimeout(()=>{c(n.relativeTime(Math.min(e,Date.now()),!0))},Math.max(r-Date.now(),0));return()=>{clearTimeout(m)}}},[n,e,r]),p.jsx("span",{title:a?void 0:O(e,"PPPPpp"),children:t.display})}),Ee=e=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},o.createElement("g",{fill:"#263238"},o.createElement("path",{fillRule:"evenodd",d:"m11.212 3.076 2.79 2.583h-2.79V3.076ZM5.526 15.98H2.903V2.056h6.854v5.065h6.803v-.53a1.46 1.46 0 0 0-.41-.938L11.094.973a1.643 1.643 0 0 0-.969-.379H1.999a.559.559 0 0 0-.56.559v15.73a.56.56 0 0 0 .56.559h3.527v-1.463Z",clipRule:"evenodd"}),o.createElement("path",{d:"M13.954 9.476 8.73 14.698a1.093 1.093 0 0 0-.164.326l-.109.763.762-.11a1.107 1.107 0 0 0 .327-.163l5.222-5.222-.816-.816Zm2.409.34a.672.672 0 0 1 0 .951l-5.787 5.787c-.263.262-.773.518-1.14.57l-2.037.293c-.368.052-.623-.203-.57-.57l.292-2.037c.053-.367.308-.878.57-1.14l5.787-5.787a.672.672 0 0 1 .95 0l1.935 1.934Z"}),o.createElement("path",{d:"m7.624 13.93 2.773 2.785 1.036-1.033-2.773-2.784-1.036 1.032Zm3.924-3.996 2.773 2.785 1.036-1.032-2.773-2.785-1.036 1.032Z"}))),ye=e=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},o.createElement("g",{fill:"#676F73"},o.createElement("path",{fillRule:"evenodd",d:"m11.212 3.076 2.79 2.583h-2.79V3.076ZM5.526 15.98H2.903V2.056h6.854v5.065h6.803v-.53a1.46 1.46 0 0 0-.41-.938L11.094.973a1.643 1.643 0 0 0-.969-.379H1.999a.559.559 0 0 0-.56.559v15.73a.56.56 0 0 0 .56.559h3.527v-1.463Z",clipRule:"evenodd"}),o.createElement("path",{d:"M13.954 9.476 8.73 14.698a1.093 1.093 0 0 0-.164.326l-.109.763.762-.11a1.107 1.107 0 0 0 .327-.163l5.222-5.222-.816-.816Zm2.409.34a.672.672 0 0 1 0 .951l-5.787 5.787c-.263.262-.773.518-1.14.57l-2.037.293c-.368.052-.623-.203-.57-.57l.292-2.037c.053-.367.308-.878.57-1.14l5.787-5.787a.672.672 0 0 1 .95 0l1.935 1.934Z"}),o.createElement("path",{d:"m7.624 13.93 2.773 2.785 1.036-1.033-2.773-2.784-1.036 1.032Zm3.924-3.996 2.773 2.785 1.036-1.032-2.773-2.785-1.036 1.032Z"}))),be=e=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},o.createElement("g",{fill:"#263238"},o.createElement("path",{d:"m12.742 2.55-1.819 1.82-7.513 7.513c-.211.21-.489.766-.53 1.06l-.353 2.538 2.527-.363c.295-.042.85-.32 1.06-.53l9.336-9.336-2.708-2.701Zm3.983 1.923a1.112 1.112 0 0 1 0 1.572l-9.577 9.577c-.434.434-1.278.857-1.886.944l-3.371.483c-.608.088-1.03-.334-.943-.942l.484-3.371c.087-.608.51-1.453.944-1.887l7.513-7.514 2.063-2.063a1.112 1.112 0 0 1 1.573 0l3.2 3.2Z"}),o.createElement("path",{d:"M5.501 15.86 2.66 13.017l-.517-.517 1.034-1.034.517.517 2.931 2.931-1.123.946Zm8.696-8.225L11.371 4.81l-.517-.517 1.034-1.034.517.517 2.786 2.785-.994 1.075Z"}))),xe=e=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},o.createElement("g",{fill:"#676F73"},o.createElement("path",{d:"m12.742 2.55-1.819 1.82-7.513 7.513c-.211.21-.489.766-.53 1.06l-.353 2.538 2.527-.363c.295-.042.85-.32 1.06-.53l9.336-9.336-2.708-2.701Zm3.983 1.923a1.112 1.112 0 0 1 0 1.572l-9.577 9.577c-.434.434-1.278.857-1.886.944l-3.371.483c-.608.088-1.03-.334-.943-.942l.483-3.371c.088-.608.51-1.453.944-1.887L9.89 3.335l2.063-2.063a1.112 1.112 0 0 1 1.573 0l3.2 3.2Z"}),o.createElement("path",{d:"M5.501 15.86 2.66 13.017l-.517-.517 1.034-1.034.517.517 2.931 2.931-1.123.946Zm8.696-8.225L11.37 4.81l-.517-.517 1.034-1.034.517.517 2.786 2.785-.994 1.075Z"}))),Le=e=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},o.createElement("path",{fill:"#263238",d:"m10.1 2.029.042.035a.547.547 0 0 0-.08-.03.466.466 0 0 0 .063.005H2.902V15.96h12.195V6.573c0 .028.002.052.005.071a.31.31 0 0 0 .055.065L10.1 2.029Zm6.05 3.606c.226.21.41.63.41.938v10.292c0 .309-.25.559-.559.559H2a.559.559 0 0 1-.56-.559V1.135A.56.56 0 0 1 2 .576h8.126c.308 0 .742.17.969.38l5.056 4.68Z"}),o.createElement("path",{fill:"#263238",d:"M9.757 1.714v5.39h6.246V5.64l-4.79.001V1.707l-1.456.007Z"}),o.createElement("path",{fill:"#DF533E",d:"M7.422 9.516a.731.731 0 0 0-1.034 1.034l4.194 4.194a.731.731 0 1 0 1.034-1.034L7.422 9.516Z"}),o.createElement("path",{fill:"#DF533E",d:"M6.388 13.71a.731.731 0 1 0 1.034 1.034l4.194-4.194a.731.731 0 1 0-1.034-1.034L6.388 13.71Z"})),Ze=e=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},o.createElement("g",{fill:"#676F73"},o.createElement("path",{d:"m10.1 2.029.042.035a.547.547 0 0 0-.08-.03.466.466 0 0 0 .063.005H2.902V15.96h12.195V6.573c0 .028.002.052.005.071a.31.31 0 0 0 .055.065L10.1 2.029Zm6.05 3.606c.226.21.41.63.41.938v10.292c0 .309-.25.559-.559.559H2a.559.559 0 0 1-.56-.559V1.135A.56.56 0 0 1 2 .576h8.126c.308 0 .742.17.969.38l5.056 4.68Z"}),o.createElement("path",{d:"M9.757 1.714v5.39h6.246V5.64l-4.79.001V1.707l-1.456.007ZM7.422 9.516a.731.731 0 1 0-1.034 1.034l4.194 4.194a.731.731 0 0 0 1.034-1.034L7.422 9.516Z"}),o.createElement("path",{d:"M6.388 13.71a.731.731 0 1 0 1.034 1.034l4.194-4.194a.731.731 0 1 0-1.034-1.034L6.388 13.71Z"}))),ke=e=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},o.createElement("path",{fill:"#263238",d:"m10.1 2.029.042.035a.547.547 0 0 0-.08-.03.466.466 0 0 0 .063.005H2.902V15.96h12.195V6.573c0 .028.002.052.005.071a.31.31 0 0 0 .055.065L10.1 2.029Zm6.05 3.606c.226.21.41.63.41.938v10.292c0 .309-.25.559-.559.559H2a.559.559 0 0 1-.56-.559V1.135A.56.56 0 0 1 2 .576h8.126c.308 0 .742.17.969.38l5.056 4.68Z"}),o.createElement("path",{fill:"#263238",d:"M9.757 1.714v5.39h6.246V5.64h-4.79V1.707l-1.456.007Z"}),o.createElement("path",{fill:"#71BA05",d:"M8.278 14.113a.731.731 0 1 0 1.462 0V9.558a.731.731 0 1 0-1.462 0v4.555Z"}),o.createElement("path",{fill:"#71BA05",d:"m8.994 13.629 2.056-2.057a.731.731 0 0 1 1.034 1.034L9.51 15.18l-.517.517-.517-.517-2.574-2.574a.731.731 0 0 1 1.034-1.034l2.058 2.057Z"})),Re=e=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",...e},o.createElement("g",{fill:"#676F73"},o.createElement("path",{d:"m10.1 2.029.042.035a.547.547 0 0 0-.08-.03.466.466 0 0 0 .063.005H2.902V15.96h12.195V6.573c0 .028.002.052.005.071a.31.31 0 0 0 .055.065L10.1 2.029Zm6.05 3.606c.226.21.41.63.41.938v10.292c0 .309-.25.559-.559.559H2a.559.559 0 0 1-.56-.559V1.135A.56.56 0 0 1 2 .576h8.126c.308 0 .742.17.969.38l5.056 4.68Z"}),o.createElement("path",{d:"M9.757 1.714v5.39h6.246V5.64h-4.79V1.707l-1.456.007ZM8.278 14.113a.731.731 0 1 0 1.462 0V9.558a.731.731 0 1 0-1.462 0v4.555Z"}),o.createElement("path",{d:"m8.994 13.629 2.056-2.057a.731.731 0 0 1 1.034 1.034L9.51 15.18l-.517.517-.517-.517-2.574-2.574a.731.731 0 0 1 1.034-1.034l2.058 2.057Z"}))),Se=$.nav`
  display: flex;
  align-items: center;
  margin: 0 -12px 0 auto;
`;function te({as:e,icon:a,iconHover:n,className:t,textClassName:c,children:r,...m}){const v=e||z,f=S();return p.jsx(v,{className:y(h`
          ${P}
          margin: 0 4px 0 12px;
          padding: 0 8px 0 0;
          text-align: left;

          &[disabled] {
            cursor: not-allowed;
            pointer-events: none;
            opacity: 0.7;
          }
        `,t),...m,children:p.jsxs("div",{className:h`
          display: flex;
          align-items: center;
        `,children:[a!==void 0?p.jsx("div",{className:y(h`
                display: flex;
                justify-content: center;
                align-items: center;
                width: 32px;
                height: 32px;
              `,n!==void 0&&h`
                  *:hover > * > & {
                    display: none;
                  }
                `),children:a}):null,n!==void 0?p.jsx("div",{className:h`
              display: none;
              justify-content: center;
              align-items: center;
              width: 32px;
              height: 32px;

              *:hover > * > & {
                display: flex;
              }
            `,children:n}):null,p.jsx("div",{className:y(h`
              font-size: 13px;
              font-weight: 600;
              color: ${f.colors.text};
            `,c),children:r})]})})}const je=o.memo(({textClassName:e,...a})=>{const n=S();return p.jsx(te,{textClassName:y(h`
            color: ${n.colors.destructive};
          `,e),...a,children:"Cancel"})});var T={exports:{}};(function(e,a){(function(n,t){t()})(g,function(){function n(l,s){return typeof s>"u"?s={autoBom:!1}:typeof s!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),s={autoBom:!s}),s.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(l.type)?new Blob(["\uFEFF",l],{type:l.type}):l}function t(l,s,d){var i=new XMLHttpRequest;i.open("GET",l),i.responseType="blob",i.onload=function(){f(i.response,s,d)},i.onerror=function(){console.error("could not download file")},i.send()}function c(l){var s=new XMLHttpRequest;s.open("HEAD",l,!1);try{s.send()}catch{}return 200<=s.status&&299>=s.status}function r(l){try{l.dispatchEvent(new MouseEvent("click"))}catch{var s=document.createEvent("MouseEvents");s.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),l.dispatchEvent(s)}}var m=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof g=="object"&&g.global===g?g:void 0,v=m.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),f=m.saveAs||(typeof window!="object"||window!==m?function(){}:"download"in HTMLAnchorElement.prototype&&!v?function(l,s,d){var i=m.URL||m.webkitURL,u=document.createElement("a");s=s||l.name||"download",u.download=s,u.rel="noopener",typeof l=="string"?(u.href=l,u.origin===location.origin?r(u):c(u.href)?t(l,s,d):r(u,u.target="_blank")):(u.href=i.createObjectURL(l),setTimeout(function(){i.revokeObjectURL(u.href)},4e4),setTimeout(function(){r(u)},0))}:"msSaveOrOpenBlob"in navigator?function(l,s,d){if(s=s||l.name||"download",typeof l!="string")navigator.msSaveOrOpenBlob(n(l,d),s);else if(c(l))t(l,s,d);else{var i=document.createElement("a");i.href=l,i.target="_blank",setTimeout(function(){r(i)})}}:function(l,s,d,i){if(i=i||open("","_blank"),i&&(i.document.title=i.document.body.innerText="downloading..."),typeof l=="string")return t(l,s,d);var u=l.type==="application/octet-stream",D=/constructor/i.test(m.HTMLElement)||m.safari,Z=/CriOS\/[\d]+/.test(navigator.userAgent);if((Z||u&&D||v)&&typeof FileReader<"u"){var b=new FileReader;b.onloadend=function(){var w=b.result;w=Z?w:w.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=w:location=w,i=null},b.readAsDataURL(l)}else{var k=m.URL||m.webkitURL,x=k.createObjectURL(l);i?i.location=x:location.href=x,i=null,setTimeout(function(){k.revokeObjectURL(x)},4e4)}});m.saveAs=f.saveAs=f,e.exports=f})})(T);var oe=T.exports;function V(e){if(e.stream!==void 0){const a=e.size.type==="Exact"?parseInt(e.size.size,10):void 0,n=A.createWriteStream(e.name,{size:a});e.stream.pipeTo(n).catch(()=>{})}else e.blob!==void 0&&oe.saveAs(e.blob,e.name)}const Te=async(e,a,n,t)=>{const c=t,r=await e.repoFilesGetFileStream(a,n,c);r!==void 0&&V(r)},Ve=async(e,a,n)=>{const t=n,c=await e.repoFilesBrowsersGetSelectedStream(a,t);c!==void 0&&V(c)},De=navigator.userAgentData!=null?navigator.userAgentData.platform==="macOS":navigator.platform.indexOf("Mac")!==-1;export{we as R,ge as S,te as T,j as a,_ as b,xe as c,be as d,W as e,G as f,ye as g,Ee as h,Re as i,ke as j,Te as k,Ze as l,Le as m,ue as n,De as o,Q as p,ve as q,pe as r,Se as s,Ve as t,he as u,je as v};
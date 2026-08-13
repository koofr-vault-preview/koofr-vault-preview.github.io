import{r as e,t}from"./chunk-DECur_0Z.js";import{o as n}from"./emotion-react.browser.esm-B6XXdZtW.js";import{n as r,t as i}from"./emotion-css.esm-Qs1dyEi9.js";import{n as a,t as o}from"./jsx-runtime-BA9giqqw.js";import{t as s}from"./useIntl-uVUnHosr.js";import{i as c,s as l}from"./Button-CQrJ5P7o.js";import{t as u}from"./react-dom-D7VaEYON.js";import{r as d}from"./Button-6IT_uasA.js";import{a as f,d as p,i as m,l as h,n as g,o as ee,r as _,s as v,t as y,u as te}from"./useClickOutside-DDfmGtM1.js";import{n as ne}from"./useIsMobile-Dv4RoKy5.js";var b=t(((e,t)=>{t.exports=typeof global==`object`&&global&&global.Object===Object&&global})),x=t(((e,t)=>{var n=b(),r=typeof self==`object`&&self&&self.Object===Object&&self;t.exports=n||r||Function(`return this`)()})),S=t(((e,t)=>{t.exports=x().Symbol})),C=t(((e,t)=>{var n=S(),r=Object.prototype,i=r.hasOwnProperty,a=r.toString,o=n?n.toStringTag:void 0;function s(e){var t=i.call(e,o),n=e[o];try{e[o]=void 0;var r=!0}catch{}var s=a.call(e);return r&&(t?e[o]=n:delete e[o]),s}t.exports=s})),re=t(((e,t)=>{var n=Object.prototype.toString;function r(e){return n.call(e)}t.exports=r})),w=t(((e,t)=>{var n=S(),r=C(),i=re(),a=`[object Null]`,o=`[object Undefined]`,s=n?n.toStringTag:void 0;function c(e){return e==null?e===void 0?o:a:s&&s in Object(e)?r(e):i(e)}t.exports=c})),T=t(((e,t)=>{function n(e){return typeof e==`object`&&!!e}t.exports=n})),E=t(((e,t)=>{var n=w(),r=T(),i=`[object Symbol]`;function a(e){return typeof e==`symbol`||r(e)&&n(e)==i}t.exports=a}));function D(e){e===void 0&&(e=p());try{var t=e.activeElement;return!t||!t.nodeName?null:t}catch{return e.body}}var O=e(a());function k(e){let t=(0,O.useRef)(e);return t.current=e,t}function ie(e){let t=k(e);(0,O.useEffect)(()=>()=>t.current(),[])}function ae(e){var t=p(e);return t&&t.defaultView||window}function oe(e,t){return ae(e).getComputedStyle(e,t)}var se=/([A-Z])/g;function ce(e){return e.replace(se,`-$1`).toLowerCase()}var A=/^ms-/;function j(e){return ce(e).replace(A,`-ms-`)}var le=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function M(e){return!!(e&&le.test(e))}function N(e,t){var n=``,r=``;if(typeof t==`string`)return e.style.getPropertyValue(j(t))||oe(e).getPropertyValue(j(t));Object.keys(t).forEach(function(i){var a=t[i];!a&&a!==0?e.style.removeProperty(j(i)):M(i)?r+=i+`(`+a+`) `:n+=j(i)+`: `+a+`;`}),r&&(n+=`transform: `+r+`;`),e.style.cssText+=`;`+n}function P(e=document){let t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}var F=_(`modal-open`),I=class{constructor({ownerDocument:e,handleContainerOverflow:t=!0,isRTL:n=!1}={}){this.handleContainerOverflow=t,this.isRTL=n,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return P(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){let t={overflow:`hidden`},n=this.isRTL?`paddingLeft`:`paddingRight`,r=this.getElement();e.style={overflow:r.style.overflow,[n]:r.style[n]},e.scrollBarWidth&&(t[n]=`${parseInt(N(r,n)||`0`,10)+e.scrollBarWidth}px`),r.setAttribute(F,``),N(r,t)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){let t=this.getElement();t.removeAttribute(F),Object.assign(t.style,e.style)}add(e){let t=this.modals.indexOf(e);return t!==-1||(t=this.modals.length,this.modals.push(e),this.setModalAttributes(e),t!==0)?t:(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state),t)}remove(e){let t=this.modals.indexOf(e);t!==-1&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}},L=(e,t)=>h?e==null?(t||p()).body:(typeof e==`function`&&(e=e()),e&&`current`in e&&(e=e.current),e&&(`nodeType`in e||e.getBoundingClientRect)?e:null):null;function ue(e,t){let n=g(),[r,i]=(0,O.useState)(()=>L(e,n?.document));if(!r){let t=L(e);t&&i(t)}return(0,O.useEffect)(()=>{t&&r&&t(r)},[t,r]),(0,O.useEffect)(()=>{let t=L(e);t!==r&&i(t)},[e,r]),r}var R=e=>!e||typeof e==`function`?e:t=>{e.current=t};function z(e,t){let n=R(e),r=R(t);return e=>{n&&n(e),r&&r(e)}}function B(e,t){return(0,O.useMemo)(()=>z(e,t),[e,t])}var V=typeof global<`u`&&global.navigator&&global.navigator.product===`ReactNative`,H=typeof document<`u`||V?O.useLayoutEffect:O.useEffect;function de(e){return e.code===`Escape`||e.keyCode===27}function U(){let e=`19.2.3`.split(`.`);return{major:+e[0],minor:+e[1],patch:+e[2]}}function W(e){if(!e||typeof e==`function`)return null;let{major:t}=U();return t>=19?e.props.ref:e.ref}function G({children:e,in:t,onExited:n,mountOnEnter:r,unmountOnExit:i}){let a=(0,O.useRef)(null),o=(0,O.useRef)(t),s=m(n);(0,O.useEffect)(()=>{t?o.current=!0:s(a.current)},[t,s]);let c=(0,O.cloneElement)(e,{ref:B(a,W(e))});return t?c:i||!o.current&&r?null:c}var K=[`onEnter`,`onEntering`,`onEntered`,`onExit`,`onExiting`,`onExited`,`addEndListener`,`children`];function fe(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function q(e){let{onEnter:t,onEntering:n,onEntered:r,onExit:i,onExiting:a,onExited:o,addEndListener:s,children:c}=e,l=fe(e,K),u=(0,O.useRef)(null),d=B(u,W(c)),f=e=>t=>{e&&u.current&&e(u.current,t)},p=(0,O.useCallback)(f(t),[t]),m=(0,O.useCallback)(f(n),[n]),h=(0,O.useCallback)(f(r),[r]),g=(0,O.useCallback)(f(i),[i]),ee=(0,O.useCallback)(f(a),[a]),_=(0,O.useCallback)(f(o),[o]),v=(0,O.useCallback)(f(s),[s]);return Object.assign({},l,{nodeRef:u},t&&{onEnter:p},n&&{onEntering:m},r&&{onEntered:h},i&&{onExit:g},a&&{onExiting:ee},o&&{onExited:_},s&&{addEndListener:v},{children:typeof c==`function`?(e,t)=>c(e,Object.assign({},t,{ref:d})):(0,O.cloneElement)(c,{ref:d})})}var J=o(),Y=[`component`];function X(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var pe=O.forwardRef((e,t)=>{let{component:n}=e,r=q(X(e,Y));return(0,J.jsx)(n,Object.assign({ref:t},r))});function me({in:e,onTransition:t}){let n=(0,O.useRef)(null),r=(0,O.useRef)(!0),i=m(t);return H(()=>{if(!n.current)return;let t=!1;return i({in:e,element:n.current,initial:r.current,isStale:()=>t}),()=>{t=!0}},[e,i]),H(()=>(r.current=!1,()=>{r.current=!0}),[]),n}function he({children:e,in:t,onExited:n,onEntered:r,transition:i}){let[a,o]=(0,O.useState)(!t);t&&a&&o(!1);let s=B(me({in:!!t,onTransition:e=>{Promise.resolve(i(e)).then(()=>{e.isStale()||(e.in?r?.(e.element,e.initial):(o(!0),n?.(e.element)))},t=>{throw e.in||o(!0),t})}}),W(e));return a&&!t?null:(0,O.cloneElement)(e,{ref:s})}function ge(e,t,n){return e?(0,J.jsx)(pe,Object.assign({},n,{component:e})):t?(0,J.jsx)(he,Object.assign({},n,{transition:t})):(0,J.jsx)(G,Object.assign({},n))}var _e=e(u()),ve=`show.role.className.style.children.backdrop.keyboard.onBackdropClick.onEscapeKeyDown.transition.runTransition.backdropTransition.runBackdropTransition.autoFocus.enforceFocus.restoreFocus.restoreFocusOptions.renderDialog.renderBackdrop.manager.container.onShow.onHide.onExit.onExited.onExiting.onEnter.onEntering.onEntered`.split(`.`);function ye(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var be;function xe(e){return be||=new I({ownerDocument:e?.document}),be}function Se(e){let t=g(),n=e||xe(t),r=(0,O.useRef)({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:(0,O.useCallback)(e=>{r.current.dialog=e},[]),setBackdropRef:(0,O.useCallback)(e=>{r.current.backdrop=e},[])})}var Ce=(0,O.forwardRef)((e,t)=>{let{show:n=!1,role:r=`dialog`,className:i,style:a,children:o,backdrop:s=!0,keyboard:c=!0,onBackdropClick:l,onEscapeKeyDown:u,transition:d,runTransition:p,backdropTransition:_,runBackdropTransition:y,autoFocus:ne=!0,enforceFocus:b=!0,restoreFocus:x=!0,restoreFocusOptions:S,renderDialog:C,renderBackdrop:re=e=>(0,J.jsx)(`div`,Object.assign({},e)),manager:w,container:T,onShow:E,onHide:k=()=>{},onExit:ae,onExited:oe,onExiting:se,onEnter:ce,onEntering:A,onEntered:j}=e,le=ye(e,ve),M=g(),N=ue(T),P=Se(w),F=ee(),I=f(n),[L,R]=(0,O.useState)(!n),z=(0,O.useRef)(null);(0,O.useImperativeHandle)(t,()=>P,[P]),h&&!I&&n&&(z.current=D(M?.document)),n&&L&&R(!1);let B=m(()=>{if(P.add(),K.current=v(document,`keydown`,W),G.current=v(document,`focus`,()=>setTimeout(H),!0),E&&E(),ne){let e=D(P.dialog?.ownerDocument??M?.document);P.dialog&&e&&!te(P.dialog,e)&&(z.current=e,P.dialog.focus())}}),V=m(()=>{if(P.remove(),K.current==null||K.current(),G.current==null||G.current(),x){var e;(e=z.current)==null||e.focus==null||e.focus(S),z.current=null}});(0,O.useEffect)(()=>{!n||!N||B()},[n,N,B]),(0,O.useEffect)(()=>{L&&V()},[L,V]),ie(()=>{V()});let H=m(()=>{if(!b||!F()||!P.isTopModal())return;let e=D(M?.document);P.dialog&&e&&!te(P.dialog,e)&&P.dialog.focus()}),U=m(e=>{e.target===e.currentTarget&&(l?.(e),s===!0&&k())}),W=m(e=>{c&&de(e)&&P.isTopModal()&&(u?.(e),e.defaultPrevented||k())}),G=(0,O.useRef)(),K=(0,O.useRef)(),fe=(...e)=>{R(!0),oe?.(...e)};if(!N)return null;let q=Object.assign({role:r,ref:P.setDialogRef,"aria-modal":r===`dialog`?!0:void 0},le,{style:a,className:i,tabIndex:-1}),Y=C?C(q):(0,J.jsx)(`div`,Object.assign({},q,{children:O.cloneElement(o,{role:`document`})}));Y=ge(d,p,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:ae,onExiting:se,onExited:fe,onEnter:ce,onEntering:A,onEntered:j,children:Y});let X=null;return s&&(X=re({ref:P.setBackdropRef,onClick:U}),X=ge(_,y,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:X})),(0,J.jsx)(J.Fragment,{children:_e.createPortal((0,J.jsxs)(J.Fragment,{children:[X,Y]}),N)})});Ce.displayName=`Modal`;var we=Object.assign(Ce,{Manager:I}),Te=t(((e,t)=>{function n(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}t.exports=n})),Ee=t(((e,t)=>{t.exports=Array.isArray})),De=t(((e,t)=>{var n=S(),r=Te(),i=Ee(),a=E(),o=1/0,s=n?n.prototype:void 0,c=s?s.toString:void 0;function l(e){if(typeof e==`string`)return e;if(i(e))return r(e,l)+``;if(a(e))return c?c.call(e):``;var t=e+``;return t==`0`&&1/e==-o?`-0`:t}t.exports=l})),Oe=t(((e,t)=>{var n=De();function r(e){return e==null?``:n(e)}t.exports=r})),ke=t(((e,t)=>{var n=Oe(),r=0;function i(e){var t=++r;return n(e)+t}t.exports=i})),Ae=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:18,height:18,fill:`none`,...e,children:(0,J.jsx)(`path`,{fill:`#263238`,d:`m8.97 10.026 3.478 3.479a.72.72 0 0 0 1.018 0l.016-.016a.72.72 0 0 0 0-1.018l-3.479-3.48 3.475-3.474a.72.72 0 0 0 0-1.018l-.016-.017a.72.72 0 0 0-1.018 0L8.969 7.957 5.507 4.495a.72.72 0 0 0-1.018 0l-.016.016a.72.72 0 0 0 0 1.018l3.462 3.462-3.462 3.462a.72.72 0 0 0 0 1.018l.016.017a.72.72 0 0 0 1.018 0z`})}),je=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:18,height:18,fill:`none`,...e,children:(0,J.jsx)(`path`,{fill:`#676f73`,d:`m8.97 10.026 3.478 3.479a.72.72 0 0 0 1.018 0l.016-.016a.72.72 0 0 0 0-1.018l-3.479-3.48 3.475-3.474a.72.72 0 0 0 0-1.018l-.016-.017a.72.72 0 0 0-1.018 0L8.969 7.957 5.507 4.495a.72.72 0 0 0-1.019 0l-.015.016a.72.72 0 0 0 0 1.018l3.462 3.462-3.462 3.462a.72.72 0 0 0 0 1.018l.016.017a.72.72 0 0 0 1.018 0z`})}),Me=(0,O.createContext)(void 0),Z=(0,O.memo)(({children:e})=>{let[t,n]=(0,O.useState)([]),r=(0,O.useCallback)(e=>{n(t=>t.indexOf(e)===-1?[...t,e]:t)},[]),i=(0,O.useCallback)(e=>{n(t=>{let n=t.indexOf(e);return n===-1?t:[...t.slice(0,n),...t.slice(n+1)]})},[]);return(0,J.jsx)(Me.Provider,{value:{topModal:t.length>0?t[t.length-1]:void 0,addModal:r,removeModal:i},children:e})});Z.displayName=`ModalsProvider`;var Ne=e(ke(),1),Pe=()=>{},Q=(0,O.createContext)(Pe),Fe=(0,O.memo)(({className:e,children:t,...a})=>{let o=n(),s=ne(),c=(0,O.useMemo)(Ne.default,[]),l=a.show||!1,{topModal:u,addModal:d,removeModal:f}=(0,O.useContext)(Me),p=(0,O.useRef)(!1);(0,O.useEffect)(()=>(l?(d(c),p.current=!0):(f(c),p.current=!1),()=>{f(c),p.current=!1}),[d,f,c,l]);let m=u===c||l&&!p.current;return(0,J.jsx)(we,{renderBackdrop:e=>(0,J.jsx)(`div`,{...e,className:i`
              display: ${m?`block`:`none`};
              position: fixed;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              z-index: ${o.zindex.modalBg};
              background-color: ${o.colors.backdropModal};
              opacity: ${o.colors.backdropModalAlpha};
            `}),className:r(i`
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: ${o.zindex.modal};
            display: ${m?`flex`:`none`};
            overflow: hidden;
            outline: 0;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
          `,e),...a,children:(0,J.jsx)(`div`,{className:r(i`
              position: relative;
              display: flex;
              flex-direction: column;
              overflow: hidden;
            `,s?i`
                  margin: 0;
                  width: 100%;
                  height: 100%;
                `:i`
                  padding: 15px;
                `),children:(0,J.jsx)(Q.Provider,{value:a.onHide??Pe,children:(0,J.jsx)(Ie,{isTopModal:m,children:t})})})})});Fe.displayName=`Modal`;var Ie=(0,O.memo)(({isTopModal:e,children:t})=>{let a=n(),o=(0,O.useRef)(null),s=(0,O.useContext)(Q);return y(o,(0,O.useCallback)(()=>{e&&s()},[s,e])),(0,J.jsx)(`div`,{ref:o,className:r(i`
            display: flex;
            flex-direction: column;
            position: relative;
            background-color: #fff;
            background-clip: padding-box;
            outline: 0;
            overflow: hidden;
          `,a.isMobile?i`
                width: 100%;
                height: 100%;
                box-shadow: none;
                border: none;
                border-radius: 0;
              `:i`
                width: 560px;
                margin: 15px;
                border: 1px solid rgba(0, 0, 0, 0.2);
                border-radius: 3px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
              `),children:t})});Ie.displayName=`ModalContent`;var $=(0,O.memo)(()=>{let e=s(),t=(0,O.useContext)(Q);return(0,J.jsx)(`button`,{type:`button`,className:i`
        ${c}
        width: 32px;
        height: 32px;
        flex-shrink: 0;
      `,onClick:t,"aria-label":e.formatMessage({id:`web.modal.close.aria_label`,description:`Accessibility label for the modal close button (X).`,defaultMessage:`Close`}),children:(0,J.jsxs)(`div`,{className:i`
          display: flex;
          justify-content: center;
          align-items: center;
        `,children:[(0,J.jsx)(je,{className:i`
            button:hover > div > & {
              display: none;
            }
          `,role:`img`}),(0,J.jsx)(Ae,{className:i`
            display: none;

            button:hover > div > & {
              display: inline;
            }
          `,role:`img`})]})})});$.displayName=`ModalClose`;var Le=l.div`
  padding: 8px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.borderLight};
  display: flex;
  flex-shrink: 0;
`,Re=(0,O.memo)(({children:e,...t})=>(0,J.jsxs)(Le,{...t,children:[e,(0,J.jsx)($,{})]}));Re.displayName=`ModalHeader`;var ze=l.h5`
  margin: 0;
  padding: 7px 17px;
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text};
  text-overflow: ellipsis;
  overflow: hidden;
  flex-grow: 1;
`,Be=l.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 23px 25px;
  flex-grow: 1;
  overflow: ${({theme:e})=>e.isMobile?`auto`:`visible`};
`,Ve=l.div`
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  padding: 15px 25px;
  border-top: 1px solid
    ${({theme:e})=>e.isMobile?e.colors.borderLight:`transparent`};
`,He=l.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  width: 33%;
  flex-grow: 1;
`,Ue=l.div`
  display: flex;
  width: 33%;
`,We=l.div`
  display: flex;
  margin-left: auto;
  width: 33%;
  flex-grow: 1;
  justify-content: flex-end;
`,Ge=l(d)`
  margin-left: 15px;
`;export{S as _,Ve as a,He as c,ze as d,Z as f,w as g,T as h,Q as i,Ue as l,E as m,Be as n,Ge as o,Ee as p,$ as r,We as s,Fe as t,Re as u,x as v,b as y};
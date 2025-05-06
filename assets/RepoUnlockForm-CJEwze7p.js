import{r,a as l,j as e}from"./DynamicThemeProvider-CxehgrR0.js";import{a as m,c as s}from"./emotion-css.esm-CiHGz3gB.js";import{B as x}from"./Button-Dt6jELX4.js";import{A as c}from"./PasswordInput-ABeQDeQB.js";const j=r.memo(({info:a,onUnlock:i})=>{const o=l(),[t,n]=r.useState(""),p=r.useCallback(d=>{d.preventDefault(),i(t)},[i,t]);return e.jsxs("div",{className:m(s`
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        `,o?s`
              padding: 0;
            `:s`
              padding: 50px 218px 0 0;

              @media (max-width: 1024px) {
                padding: 50px 0 0;
              }
            `),children:[e.jsx("h1",{className:s`
          font-size: 32px;
          line-height: 42px;
          font-weight: normal;
          margin: 0 0 25px;
        `,children:a==null?void 0:a.repoName}),e.jsx("h3",{className:s`
          font-size: 20px;
          line-height: 26px;
          font-weight: 300;
          margin: 0 0 30px;
        `,children:"Enter your Safe Key to continue"}),e.jsxs("form",{onSubmit:p,children:[a.status.type==="Error"?e.jsx("div",{className:s`
              background-color: #fbedeb;
              padding: 6px 15px;
              border-radius: 3px;
              margin-bottom: 15px;
            `,children:a.status.error}):null,e.jsx("div",{className:s`
            margin-bottom: 20px;
          `,children:e.jsx(c,{value:t,onChange:n,inputAriaLabel:"Safe Key"})}),e.jsx(x,{type:"submit",variant:a.status.type==="Loading"?"disabled":"primary",disabled:a.status.type==="Loading",className:s`
            font-size: 16px;
            width: 250px;
          `,children:"Continue"})]})]})});export{j as R};

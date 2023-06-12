import{j as g}from"./jsx-runtime-6eef64cc.js";import{a as ee}from"./index-08eb532b.js";import{r as p,R as t}from"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const re=p.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1});var ae=Object.defineProperty,u=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,v=(r,e,a)=>e in r?ae(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,w=(r,e)=>{for(var a in e||(e={}))N.call(e,a)&&v(r,a,e[a]);if(u)for(var a of u(e))W.call(e,a)&&v(r,a,e[a]);return r},E=(r,e)=>{var a={};for(var n in r)N.call(r,n)&&e.indexOf(n)<0&&(a[n]=r[n]);if(r!=null&&u)for(var n of u(r))e.indexOf(n)<0&&W.call(r,n)&&(a[n]=r[n]);return a};const $=p.forwardRef((r,e)=>{const a=r,{alt:n,color:h,size:o,weight:y,mirrored:q,children:G,weights:J}=a,K=E(a,["alt","color","size","weight","mirrored","children","weights"]),f=p.useContext(re),{color:Q="currentColor",size:b,weight:U="regular",mirrored:X=!1}=f,Y=E(f,["color","size","weight","mirrored"]);return t.createElement("svg",w(w({ref:e,xmlns:"http://www.w3.org/2000/svg",width:o??b,height:o??b,fill:h??Q,viewBox:"0 0 256 256",transform:q||X?"scale(-1, 1)":void 0},Y),K),!!n&&t.createElement("title",null,n),G,J.get(y??U))});$.displayName="IconBase";var te=Object.defineProperty,ne=Object.defineProperties,oe=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,le=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable,x=(r,e,a)=>e in r?te(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,ie=(r,e)=>{for(var a in e||(e={}))le.call(e,a)&&x(r,a,e[a]);if(O)for(var a of O(e))se.call(e,a)&&x(r,a,e[a]);return r},ce=(r,e)=>ne(r,oe(e));const de=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,128l-72,72V56Z",opacity:"0.2"}),t.createElement("path",{d:"M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"}))]]),k=p.forwardRef((r,e)=>t.createElement($,ce(ie({ref:e},r),{weights:de})));k.displayName="ArrowRight";const he={title:"Form/Button",tags:["autodocs"],args:{variant:"primary",size:"md",disabled:!1},argTypes:{variant:{description:"Button type",options:["primary","secondary","tertiary","cancel"],defaultValue:"primary",control:{type:"inline-radio"}},disabled:{control:{type:"boolean"}},size:{description:"Button size",options:["sm","md","full"],defaultValue:"md",control:{type:"inline-radio"}}},component:ee},l={args:{children:"Send"}},s={args:{children:"Create new",variant:"secondary"}},i={args:{children:"Cancel",variant:"tertiary"}},c={args:{children:"Small",size:"sm"}},d={args:{children:g.jsxs(g.Fragment,{children:["Próximo passo",g.jsx(k,{weight:"bold"})]})}},m={args:{children:"Disabled",disabled:!0}};var S,j,P;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Send'
  }
}`,...(P=(j=l.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var A,H,z;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: 'Create new',
    variant: 'secondary'
  }
}`,...(z=(H=s.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var C,L,M;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: 'Cancel',
    variant: 'tertiary'
  }
}`,...(M=(L=i.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var B,F,R;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'Small',
    size: 'sm'
  }
}`,...(R=(F=c.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var Z,I,V;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    children: <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
  }
}`,...(V=(I=d.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var D,T,_;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: 'Disabled',
    disabled: true
  }
}`,...(_=(T=m.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};const ye=["Primary","Secondary","Tertiary","Small","WithIcon","Disabled"];export{m as Disabled,l as Primary,s as Secondary,c as Small,i as Tertiary,d as WithIcon,ye as __namedExportsOrder,he as default};
//# sourceMappingURL=Button.stories-47f9f98d.js.map

import{_ as S}from"./iframe-dba21ff3.js";import{s as N}from"./index-d475d2ea.js";import"../sb-preview/runtime.js";var o="storybook/a11y",T=`${o}/result`,f=`${o}/request`,p=`${o}/running`,w=`${o}/error`,y=`${o}/manual`,a={RESULT:T,REQUEST:f,RUNNING:p,ERROR:w,MANUAL:y};const{addons:U}=__STORYBOOK_MODULE_PREVIEW_API__;var{document:d,window:g}=N,r=U.getChannel(),n=!1,l,A=async t=>{let{manual:e}=await s(t);e||await _(t)},_=async t=>{l=t;try{let e=await s(t);if(!n){n=!0,r.emit(a.RUNNING);let i=(await S(()=>import("./axe-49d45c1b.js").then(O=>O.a),["assets/axe-49d45c1b.js","assets/_commonjsHelpers-725317a4.js"])).default,{element:u="#storybook-root",config:R,options:E={}}=e,m=d.querySelector(u);if(!m)return;i.reset(),R&&i.configure(R);let c=await i.run(m,E);l===t?r.emit(a.RESULT,c):(n=!1,_(l))}}catch(e){r.emit(a.ERROR,e)}finally{n=!1}},s=async t=>{let{parameters:e}=await g.__STORYBOOK_STORY_STORE__.loadStory({storyId:t})||{};return e.a11y||{config:{},options:{}}};r.on(a.REQUEST,A);r.on(a.MANUAL,_);
//# sourceMappingURL=preview-d8f1cd9a.js.map

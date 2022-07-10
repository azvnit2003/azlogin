import{d as I,ae as O,ag as j,a2 as R,aJ as N,r as U,C as P,an as $,a3 as F,a4 as J,ah as _,a5 as i,aa as c,a9 as p,bG as V,ad as v,al as q,bH as H}from"./main.2046a1e9.js";import{_ as M}from"./Input.866ab710.js";import{_ as G}from"./FormItem.7a91dcd7.js";import{_ as W}from"./Checkbox.6ba8e010.js";import{_ as z}from"./Form.8d4e23b3.js";import{_ as Q}from"./Spin.1dac43b1.js";import{_ as X}from"./Space.0022c150.js";import"./Suffix.8c4bc0ef.js";import"./use-merged-state.82643886.js";import"./get.dca81cb3.js";import"./use-compitable.19f2c203.js";const h="SHA-256",k="SALT",x="PASSWORD",L=1e3,B=48,S=async(o,n,e,s,a)=>{const t=new TextEncoder("utf-8"),f=t.encode(e),y=await crypto.subtle.importKey("raw",f,"PBKDF2",!1,["deriveBits"]),g=t.encode(n),w={name:"PBKDF2",hash:o,salt:g,iterations:s};return await crypto.subtle.deriveBits(w,y,a*8)},A=async o=>{const e=o.slice(0,32),s=o.slice(32);return{key:await crypto.subtle.importKey("raw",e,{name:"AES-CBC"},!1,["encrypt","decrypt"]),iv:s}},Y=async(o,n)=>{const s=new TextEncoder("utf-8").encode(o);return await crypto.subtle.encrypt({name:"AES-CBC",iv:n.iv},n.key,s)},Z=async(o,n)=>{const e=new TextDecoder("utf-8"),s=await crypto.subtle.decrypt({name:"AES-CBC",iv:n.iv},n.key,o);return e.decode(s)},ee=async o=>{const n=await S(h,k,x,L,B),e=await A(n);return await Y(JSON.stringify(o),e)},te=async o=>{const n=await S(h,k,x,L,B),e=await A(n);return await Z(o,e)},ne=o=>{let n="";const e=new Uint8Array(o),s=e.byteLength;for(let a=0;a<s;a++)n+=String.fromCharCode(e[a]);return window.btoa(n)},oe=o=>{const n=window.atob(o),e=n.length,s=new Uint8Array(e);for(let a=0;a<e;a++)s[a]=n.charCodeAt(a);return s.buffer};var se="./assets/banner-logo.6a51ffb4.png";const ae={class:"login-wrapper"},re={class:"login-container"},ce=["src"],ie=v(" Keep me signed in "),pe=_("div",{class:"flex justify-end"},[_("a",{href:"",class:"text-gray-400"},"Forgot password?")],-1),ue={class:"block mt-2"},de=v(" Login "),le={class:"mt-5 flex justify-center"},_e=v(" Register "),me=I({setup(o){const n=O(),e=j(),{keepLoginInfo:s,keepLogin:a}=R(e),t=N({submitting:!1,username:"",password:"",keepLogin:a.value||!1}),f=U(null),y=async()=>{if(s.value){const u=oe(s.value),r=await te(u),d=JSON.parse(r),{username:l,password:b}=d;t.username=l,t.password=b}},g=async u=>{if(t.keepLogin){const r=await ee(u);e.$patch({keepLogin:!0,keepLoginInfo:ne(r)})}else e.$patch({keepLogin:!1,keepLoginInfo:null})};y();const w=async()=>{if(t.submitting)return;const u={username:t.username,password:t.password};try{t.submitting=!0;const r=await H(u),{data:{success:d,data:l}}=r;d&&(await g({username:t.username,password:t.password}),await e.setAuth(l),n.push({name:"main.home"}),window.$message.success("Login success"))}catch{}finally{t.submitting=!1}};return P(()=>{f.value.focus()}),(u,r)=>{const d=M,l=G,b=W,C=q,E=$("router-link"),K=X,T=z,D=Q;return F(),J("div",ae,[_("div",re,[_("img",{src:i(se),class:"logo"},null,8,ce),c(D,{show:i(t).submitting},{default:p(()=>[c(T,{id:"form-login",onSubmit:V(w,["prevent"])},{default:p(()=>[c(l,{label:"Email"},{default:p(()=>[c(d,{ref_key:"firstInputRef",ref:f,value:i(t).username,"onUpdate:value":r[0]||(r[0]=m=>i(t).username=m),required:"",placeholder:""},null,8,["value"])]),_:1}),c(l,{label:"Password"},{default:p(()=>[c(d,{value:i(t).password,"onUpdate:value":r[1]||(r[1]=m=>i(t).password=m),type:"password",required:""},null,8,["value"])]),_:1}),c(K,{vertical:""},{default:p(()=>[c(b,{checked:i(t).keepLogin,"onUpdate:checked":r[2]||(r[2]=m=>i(t).keepLogin=m)},{default:p(()=>[ie]),_:1},8,["checked"]),pe,_("div",ue,[c(C,{"attr-type":"submit",type:"primary",block:"",strong:"",disabled:i(t).submitting},{default:p(()=>[de]),_:1},8,["disabled"])]),_("div",le,[c(E,{to:"/register",class:"text-blue-500"},{default:p(()=>[_e]),_:1})])]),_:1})]),_:1},8,["onSubmit"])]),_:1},8,["show"])])])}}});var Se=me;export{Se as default};

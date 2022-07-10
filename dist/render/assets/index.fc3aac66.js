var se=Object.defineProperty,le=Object.defineProperties;var re=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var ie=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var M=(l,a,t)=>a in l?se(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t,S=(l,a)=>{for(var t in a||(a={}))ie.call(a,t)&&M(l,t,a[t]);if(V)for(var t of V(a))ue.call(a,t)&&M(l,t,a[t]);return l},b=(l,a)=>le(l,re(a));import{u as x,a as ce,_ as z}from"./ScriptOverview.a0ac7cd0.js";import{d as y,r as W,h as j,Y as G,a2 as k,a3 as m,a4 as I,aa as e,a9 as o,a5 as n,a6 as $,ae as _e,a8 as pe,c as me,c5 as P,ci as de,cB as fe,U as ve,ah as A,ad as d,c2 as ge,cb as he,al as we}from"./main.2046a1e9.js";import{_ as O}from"./Input.866ab710.js";import{b as Se,_ as C,c as be}from"./FormItem.7a91dcd7.js";import{_ as D}from"./InputNumber.26803364.js";import{g as ke,_ as H,b as ye,a as K}from"./Grid.73bd99ae.js";import{_ as Y}from"./Space.0022c150.js";import{f as $e,c as xe,e as Ce}from"./ipcRenderer.c05eeb53.js";import{c as Re,f as Ee}from"./firefox-icon.b1234872.js";import{_ as Ie}from"./Form.8d4e23b3.js";import{_ as Ue}from"./Divider.d0081d08.js";import{_ as Te}from"./Select.d3505bfe.js";import"./ScrollBar.07d6490a.js";import"./Suffix.8c4bc0ef.js";import"./use-merged-state.82643886.js";import"./get.dca81cb3.js";import"./Add.e57c7f6a.js";import"./next-frame-once.e0fd6a2a.js";import"./Tag.92553d15.js";import"./cssr.43c4be52.js";import"./use-compitable.19f2c203.js";const Ae=Object.assign(Object.assign({},ye),be);var Pe=y({__GRID_ITEM__:!0,name:"FormItemGridItem",alias:["FormItemGi"],props:Ae,setup(){const l=W(null);return{formItemInstRef:l,validate:(...r)=>{const{value:s}=l;if(s)return s.validate(...r)},restoreValidation:()=>{const{value:r}=l;if(r)return r.restoreValidation()}}},render(){return j(H,G(this.$.vnode.props||{},ke),{default:()=>{const l=G(this.$props,Se);return j(C,Object.assign({ref:"formItemInstRef"},l),this.$slots)}})}});const Oe={name:"NavigateToUrl"},Be=y(b(S({},Oe),{setup(l){const a=x(),{action:t}=k(a),r=s=>{a.$patch({action:{value:s}})};return(s,u)=>{const c=O,p=C;return m(),I("div",null,[e(p,{label:"Url","show-feedback":!1},{default:o(()=>[e(c,{value:n(t).value,"onUpdate:value":u[0]||(u[0]=_=>n(t).value=_),type:"text",autofocus:"",placeholder:"E.g: https://genlogin.com",onInput:r},null,8,["value"])]),_:1})])}}})),Ne={name:"Wait"},We=y(b(S({},Ne),{setup(l){const a=x(),{action:t}=k(a);return(r,s)=>{const u=D,c=C;return m(),I("div",null,[e(c,{"show-label":!1,"show-feedback":!1},{default:o(()=>[e(u,{value:n(t).value,"onUpdate:value":s[0]||(s[0]=p=>n(t).value=p),placeholder:"E.g: 1"},null,8,["value"])]),_:1})])}}})),qe={name:"WaitRandom"},Fe=y(b(S({},qe),{setup(l){const a=x(),{action:t}=k(a);return(r,s)=>{const u=D,c=Pe,p=K;return m(),I("div",null,[e(p,{span:12,"x-gap":12},{default:o(()=>[e(c,{span:6,label:"Min","show-feedback":!1,"show-require-mark":!1},{default:o(()=>[e(u,{value:n(t).value[0],"onUpdate:value":s[0]||(s[0]=_=>n(t).value[0]=_),clearable:"",placeholder:"E.g: 1",max:n(t).value[1]},null,8,["value","max"])]),_:1}),e(c,{span:6,label:"Max","show-feedback":!1,"show-require-mark":!1},{default:o(()=>[e(u,{value:n(t).value[1],"onUpdate:value":s[1]||(s[1]=_=>n(t).value[1]=_),clearable:"",placeholder:"E.g: 5",min:n(t).value[0]},null,8,["value","min"])]),_:1})]),_:1})])}}})),Ve={name:"Wait"},Me=y(b(S({},Ve),{setup(l){const a=x(),{action:t}=k(a);return(r,s)=>{const u=O,c=C,p=Y;return m(),$(p,{vertical:""},{default:o(()=>[e(c,{label:"Selector","show-feedback":!1},{default:o(()=>[e(u,{value:n(t).value[0],"onUpdate:value":s[0]||(s[0]=_=>n(t).value[0]=_),type:"textarea",autofocus:"",autosize:{minRows:3,maxRows:5},placeholder:"E.g: #search"},null,8,["value"])]),_:1}),e(c,{label:"Text","show-feedback":!1},{default:o(()=>[e(u,{value:n(t).value[1],"onUpdate:value":s[1]||(s[1]=_=>n(t).value[1]=_),type:"textarea",autofocus:"",autosize:{minRows:3,maxRows:5},placeholder:"E.g: https://genlogin.com"},null,8,["value"])]),_:1})]),_:1})}}})),je={name:"Click"},Ge=y(b(S({},je),{setup(l){const a=x(),{action:t}=k(a),r=s=>{a.$patch({action:{value:s}})};return(s,u)=>{const c=O,p=C;return m(),I("div",null,[e(p,{label:"Selector","show-feedback":!1},{default:o(()=>[e(c,{value:n(t).value,"onUpdate:value":u[0]||(u[0]=_=>n(t).value=_),type:"text",autofocus:"",placeholder:"E.g: #header",onInput:r},null,8,["value"])]),_:1})])}}})),ze=d("Actions"),De=d(" Add "),He=d(" Update "),Ke=d(" Cancel "),Ye={class:"flex justify-between"},Le=d(" Save "),Xe=d(" Update "),Je=d(" Back "),Qe=["src"],Ze=d(" Test Chrome "),et=["src"],tt=d(" Test Firefox "),ot=d(" Run "),nt={name:"ScriptEditor",components:{ScriptOverview:z,NavigateToUrl:Be,Wait:We,WaitRandom:Fe,TypeText:Me,Click:Ge},data(){return{browserTypes:P}}},at=y(b(S({},nt),{setup(l){const a=_e(),t=x(),{script:r,action:s,isEdit:u}=k(t),{addAction:c,cancelEditAction:p,updateAction:_,saveScript:L,updateScript:X}=t,B=W(null),J=v=>{t.resetActionState()},Q=async()=>{if(!r.value.name){window.$message.warning("Script name is required"),B.value.focus();return}await L(),a.push({name:"main.automation.runScript"}),window.$message.success("Script saved")},Z=async()=>{if(!r.value.name){window.$message.warning("Script name is required"),B.value.focus();return}await X(),a.push({name:"main.automation.runScript"}),window.$message.success("Script updated")},q=async v=>{await $e(ge(r.value),v)},ee=pe(),{profileList:te}=k(ee),oe=me(()=>te.value.map(v=>{const{id:i,profile_data:{name:E,browser:h}}=v;return h===P.CHROME?{label:E,value:i}:null}).filter(Boolean)),R=W(null),ne=async()=>{if(!R.value)return;const v=await he(R.value),{success:i,data:E}=v.data;if(i){const h=await xe(E,R.value,"true"),{success:U,error:N,wsEndpoint:T}=h;U&&await Ce(r.value,T)}};return de(()=>{t.setScript()}),(v,i)=>{const E=O,h=C,U=Ie,N=Ue,T=Te,f=we,w=Y,F=H,ae=K;return m(),$(w,{vertical:""},{default:o(()=>[e(ae,{"x-gap":"24",cols:5},{default:o(()=>[e(F,{span:"2"},{default:o(()=>[e(w,{vertical:""},{default:o(()=>[e(U,null,{default:o(()=>[e(h,{label:"Script name","show-feedback":!1},{default:o(()=>[e(E,{ref_key:"scriptNameRef",ref:B,value:n(r).name,"onUpdate:value":i[0]||(i[0]=g=>n(r).name=g),autofocus:"",placeholder:""},null,8,["value"])]),_:1})]),_:1}),e(N,null,{default:o(()=>[ze]),_:1}),e(U,null,{default:o(()=>[e(w,{vertical:""},{default:o(()=>[e(h,{label:"Action","show-feedback":!1},{default:o(()=>[e(T,{value:n(s).name,"onUpdate:value":[i[1]||(i[1]=g=>n(s).name=g),J],placeholder:"Select action",clearable:"",options:n(ce)},null,8,["value","options"])]),_:1}),(m(),$(fe(n(s).name))),e(w,null,{default:o(()=>[n(u)?(m(),I(ve,{key:1},[e(f,{type:"warning",onClick:n(_)},{default:o(()=>[He]),_:1},8,["onClick"]),e(f,{ghost:"",onClick:n(p)},{default:o(()=>[Ke]),_:1},8,["onClick"])],64)):(m(),$(f,{key:0,type:"primary",onClick:n(c)},{default:o(()=>[De]),_:1},8,["onClick"]))]),_:1})]),_:1})]),_:1}),e(N),A("div",Ye,[e(w,null,{default:o(()=>[n(r).id?(m(),$(f,{key:1,type:"warning",onClick:Z},{default:o(()=>[Xe]),_:1})):(m(),$(f,{key:0,type:"success",onClick:Q},{default:o(()=>[Le]),_:1})),e(f,{ghost:"",type:"tertiary",onClick:i[2]||(i[2]=g=>v.$router.push({name:"main.automation.runScript"}))},{default:o(()=>[Je]),_:1})]),_:1})])]),_:1})]),_:1}),e(F,{span:"3"},{default:o(()=>[e(w,{vertical:""},{default:o(()=>[A("div",null,[e(w,null,{default:o(()=>[e(f,{strong:"",secondary:"",onClick:i[3]||(i[3]=g=>q(n(P).CHROME))},{default:o(()=>[A("img",{src:n(Re),width:"18",class:"mr-2"},null,8,Qe),Ze]),_:1}),e(f,{strong:"",secondary:"",onClick:i[4]||(i[4]=g=>q(n(P).FIREFOX))},{default:o(()=>[A("img",{src:n(Ee),width:"18",class:"mr-2"},null,8,et),tt]),_:1})]),_:1})]),e(h,{"show-feedback":!1,label:"Run with profile (Chrome only)"},{default:o(()=>[e(T,{value:R.value,"onUpdate:value":i[5]||(i[5]=g=>R.value=g),placeholder:"",options:n(oe)},null,8,["value","options"]),e(f,{strong:"",secondary:"",class:"ml-2",onClick:ne},{default:o(()=>[ot]),_:1})]),_:1}),e(z,{editable:!0})]),_:1})]),_:1})]),_:1})]),_:1})}}}));var Rt=at;export{Rt as default};

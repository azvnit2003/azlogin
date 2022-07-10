import{c2 as Pn,b4 as Sn,ci as An,cv as G}from"./main.2046a1e9.js";var H,wn=new Uint8Array(16);function Rn(){if(!H&&(H=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!H))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return H(wn)}var In=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function vn(r){return typeof r=="string"&&In.test(r)}var u=[];for(var et=0;et<256;++et)u.push((et+256).toString(16).substr(1));function mn(r){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,f=(u[r[a+0]]+u[r[a+1]]+u[r[a+2]]+u[r[a+3]]+"-"+u[r[a+4]]+u[r[a+5]]+"-"+u[r[a+6]]+u[r[a+7]]+"-"+u[r[a+8]]+u[r[a+9]]+"-"+u[r[a+10]]+u[r[a+11]]+u[r[a+12]]+u[r[a+13]]+u[r[a+14]]+u[r[a+15]]).toLowerCase();if(!vn(f))throw TypeError("Stringified UUID is invalid");return f}function En(r,a,f){r=r||{};var c=r.random||(r.rng||Rn)();if(c[6]=c[6]&15|64,c[8]=c[8]&63|128,a){f=f||0;for(var _=0;_<16;++_)a[f+_]=c[_];return a}return mn(c)}var O=(r=>(r[r.SEND_MSG=8888]="SEND_MSG",r[r.START_PROFILE=8889]="START_PROFILE",r[r.STOP_PROFILE=8890]="STOP_PROFILE",r[r.UPLOAD_PROFILE=8891]="UPLOAD_PROFILE",r[r.DOWNLOAD_PROFILE=8892]="DOWNLOAD_PROFILE",r[r.REQUEST_TEST_SCRIPT_AUTOMATION=8893]="REQUEST_TEST_SCRIPT_AUTOMATION",r[r.REQUEST_TEST_SCRIPT_AUTOMATION_WITH_PROFILE=8894]="REQUEST_TEST_SCRIPT_AUTOMATION_WITH_PROFILE",r[r.REQUEST_EXPORT_PROFILE=8895]="REQUEST_EXPORT_PROFILE",r[r.REPLY_MSG=8896]="REPLY_MSG",r[r.PROFILE_STOPPED=8897]="PROFILE_STOPPED",r))(O||{});const{ipcRenderer:nt}=window.require("electron"),T={send:async(r,...a)=>{const f=a.map(_=>Pn(_)),c=await nt.invoke(r.toString(),...f);if(c.hasOwnProperty.call(c,"error"))throw c;return c},on:(r,a)=>{nt.on(r.toString(),(f,...c)=>{a(...c)}),Sn()&&An(()=>{nt.removeAllListeners(r.toString())})}};function xn(){return T}var rt={exports:{}};(function(r,a){var f=200,c="__lodash_hash_undefined__",_=9007199254740991,B="[object Arguments]",Jt="[object Array]",ot="[object Boolean]",at="[object Date]",Zt="[object Error]",W="[object Function]",it="[object GeneratorFunction]",C="[object Map]",st="[object Number]",q="[object Object]",ct="[object Promise]",ut="[object RegExp]",E="[object Set]",ft="[object String]",lt="[object Symbol]",Q="[object WeakMap]",pt="[object ArrayBuffer]",x="[object DataView]",dt="[object Float32Array]",_t="[object Float64Array]",ht="[object Int8Array]",gt="[object Int16Array]",yt="[object Int32Array]",Ot="[object Uint8Array]",Tt="[object Uint8ClampedArray]",bt="[object Uint16Array]",Pt="[object Uint32Array]",Nt=/[\\^$.*+?()[\]{}|]/g,zt=/\w*$/,kt=/^\[object .+?Constructor\]$/,Vt=/^(?:0|[1-9]\d*)$/,i={};i[B]=i[Jt]=i[pt]=i[x]=i[ot]=i[at]=i[dt]=i[_t]=i[ht]=i[gt]=i[yt]=i[C]=i[st]=i[q]=i[ut]=i[E]=i[ft]=i[lt]=i[Ot]=i[Tt]=i[bt]=i[Pt]=!0,i[Zt]=i[W]=i[Q]=!1;var te=typeof G=="object"&&G&&G.Object===Object&&G,ee=typeof self=="object"&&self&&self.Object===Object&&self,h=te||ee||Function("return this")(),St=a&&!a.nodeType&&a,At=St&&!0&&r&&!r.nodeType&&r,ne=At&&At.exports===St;function re(t,e){return t.set(e[0],e[1]),t}function oe(t,e){return t.add(e),t}function ae(t,e){for(var n=-1,o=t?t.length:0;++n<o&&e(t[n],n,t)!==!1;);return t}function ie(t,e){for(var n=-1,o=e.length,s=t.length;++n<o;)t[s+n]=e[n];return t}function wt(t,e,n,o){var s=-1,l=t?t.length:0;for(o&&l&&(n=t[++s]);++s<l;)n=e(n,t[s],s,t);return n}function se(t,e){for(var n=-1,o=Array(t);++n<t;)o[n]=e(n);return o}function ce(t,e){return t==null?void 0:t[e]}function Rt(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch{}return e}function It(t){var e=-1,n=Array(t.size);return t.forEach(function(o,s){n[++e]=[s,o]}),n}function $(t,e){return function(n){return t(e(n))}}function vt(t){var e=-1,n=Array(t.size);return t.forEach(function(o){n[++e]=o}),n}var ue=Array.prototype,fe=Function.prototype,L=Object.prototype,K=h["__core-js_shared__"],mt=function(){var t=/[^.]+$/.exec(K&&K.keys&&K.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Ct=fe.toString,y=L.hasOwnProperty,j=L.toString,le=RegExp("^"+Ct.call(y).replace(Nt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Et=ne?h.Buffer:void 0,xt=h.Symbol,Lt=h.Uint8Array,pe=$(Object.getPrototypeOf,Object),de=Object.create,_e=L.propertyIsEnumerable,he=ue.splice,jt=Object.getOwnPropertySymbols,ge=Et?Et.isBuffer:void 0,ye=$(Object.keys,Object),X=R(h,"DataView"),v=R(h,"Map"),Y=R(h,"Promise"),J=R(h,"Set"),Z=R(h,"WeakMap"),m=R(Object,"create"),Oe=S(X),Te=S(v),be=S(Y),Pe=S(J),Se=S(Z),Ut=xt?xt.prototype:void 0,Ft=Ut?Ut.valueOf:void 0;function b(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}function Ae(){this.__data__=m?m(null):{}}function we(t){return this.has(t)&&delete this.__data__[t]}function Re(t){var e=this.__data__;if(m){var n=e[t];return n===c?void 0:n}return y.call(e,t)?e[t]:void 0}function Ie(t){var e=this.__data__;return m?e[t]!==void 0:y.call(e,t)}function ve(t,e){var n=this.__data__;return n[t]=m&&e===void 0?c:e,this}b.prototype.clear=Ae,b.prototype.delete=we,b.prototype.get=Re,b.prototype.has=Ie,b.prototype.set=ve;function g(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}function me(){this.__data__=[]}function Ce(t){var e=this.__data__,n=U(e,t);if(n<0)return!1;var o=e.length-1;return n==o?e.pop():he.call(e,n,1),!0}function Ee(t){var e=this.__data__,n=U(e,t);return n<0?void 0:e[n][1]}function xe(t){return U(this.__data__,t)>-1}function Le(t,e){var n=this.__data__,o=U(n,t);return o<0?n.push([t,e]):n[o][1]=e,this}g.prototype.clear=me,g.prototype.delete=Ce,g.prototype.get=Ee,g.prototype.has=xe,g.prototype.set=Le;function A(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}function je(){this.__data__={hash:new b,map:new(v||g),string:new b}}function Ue(t){return F(this,t).delete(t)}function Fe(t){return F(this,t).get(t)}function Me(t){return F(this,t).has(t)}function De(t,e){return F(this,t).set(t,e),this}A.prototype.clear=je,A.prototype.delete=Ue,A.prototype.get=Fe,A.prototype.has=Me,A.prototype.set=De;function w(t){this.__data__=new g(t)}function Ge(){this.__data__=new g}function He(t){return this.__data__.delete(t)}function Be(t){return this.__data__.get(t)}function We(t){return this.__data__.has(t)}function qe(t,e){var n=this.__data__;if(n instanceof g){var o=n.__data__;if(!v||o.length<f-1)return o.push([t,e]),this;n=this.__data__=new A(o)}return n.set(t,e),this}w.prototype.clear=Ge,w.prototype.delete=He,w.prototype.get=Be,w.prototype.has=We,w.prototype.set=qe;function Qe(t,e){var n=k(t)||_n(t)?se(t.length,String):[],o=n.length,s=!!o;for(var l in t)(e||y.call(t,l))&&!(s&&(l=="length"||fn(l,o)))&&n.push(l);return n}function Mt(t,e,n){var o=t[e];(!(y.call(t,e)&&Bt(o,n))||n===void 0&&!(e in t))&&(t[e]=n)}function U(t,e){for(var n=t.length;n--;)if(Bt(t[n][0],e))return n;return-1}function $e(t,e){return t&&Dt(e,V(e),t)}function N(t,e,n,o,s,l,d){var p;if(o&&(p=l?o(t,s,l,d):o(t)),p!==void 0)return p;if(!M(t))return t;var Qt=k(t);if(Qt){if(p=sn(t),!e)return rn(t,p)}else{var I=P(t),$t=I==W||I==it;if(gn(t))return Ne(t,e);if(I==q||I==B||$t&&!l){if(Rt(t))return l?t:{};if(p=cn($t?{}:t),!e)return on(t,$e(p,t))}else{if(!i[I])return l?t:{};p=un(t,I,N,e)}}d||(d=new w);var Kt=d.get(t);if(Kt)return Kt;if(d.set(t,p),!Qt)var Xt=n?an(t):V(t);return ae(Xt||t,function(tt,D){Xt&&(D=tt,tt=t[D]),Mt(p,D,N(tt,e,n,o,D,t,d))}),p}function Ke(t){return M(t)?de(t):{}}function Xe(t,e,n){var o=e(t);return k(t)?o:ie(o,n(t))}function Ye(t){return j.call(t)}function Je(t){if(!M(t)||pn(t))return!1;var e=qt(t)||Rt(t)?le:kt;return e.test(S(t))}function Ze(t){if(!Ht(t))return ye(t);var e=[];for(var n in Object(t))y.call(t,n)&&n!="constructor"&&e.push(n);return e}function Ne(t,e){if(e)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}function z(t){var e=new t.constructor(t.byteLength);return new Lt(e).set(new Lt(t)),e}function ze(t,e){var n=e?z(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}function ke(t,e,n){var o=e?n(It(t),!0):It(t);return wt(o,re,new t.constructor)}function Ve(t){var e=new t.constructor(t.source,zt.exec(t));return e.lastIndex=t.lastIndex,e}function tn(t,e,n){var o=e?n(vt(t),!0):vt(t);return wt(o,oe,new t.constructor)}function en(t){return Ft?Object(Ft.call(t)):{}}function nn(t,e){var n=e?z(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}function rn(t,e){var n=-1,o=t.length;for(e||(e=Array(o));++n<o;)e[n]=t[n];return e}function Dt(t,e,n,o){n||(n={});for(var s=-1,l=e.length;++s<l;){var d=e[s],p=o?o(n[d],t[d],d,n,t):void 0;Mt(n,d,p===void 0?t[d]:p)}return n}function on(t,e){return Dt(t,Gt(t),e)}function an(t){return Xe(t,V,Gt)}function F(t,e){var n=t.__data__;return ln(e)?n[typeof e=="string"?"string":"hash"]:n.map}function R(t,e){var n=ce(t,e);return Je(n)?n:void 0}var Gt=jt?$(jt,Object):Tn,P=Ye;(X&&P(new X(new ArrayBuffer(1)))!=x||v&&P(new v)!=C||Y&&P(Y.resolve())!=ct||J&&P(new J)!=E||Z&&P(new Z)!=Q)&&(P=function(t){var e=j.call(t),n=e==q?t.constructor:void 0,o=n?S(n):void 0;if(o)switch(o){case Oe:return x;case Te:return C;case be:return ct;case Pe:return E;case Se:return Q}return e});function sn(t){var e=t.length,n=t.constructor(e);return e&&typeof t[0]=="string"&&y.call(t,"index")&&(n.index=t.index,n.input=t.input),n}function cn(t){return typeof t.constructor=="function"&&!Ht(t)?Ke(pe(t)):{}}function un(t,e,n,o){var s=t.constructor;switch(e){case pt:return z(t);case ot:case at:return new s(+t);case x:return ze(t,o);case dt:case _t:case ht:case gt:case yt:case Ot:case Tt:case bt:case Pt:return nn(t,o);case C:return ke(t,o,n);case st:case ft:return new s(t);case ut:return Ve(t);case E:return tn(t,o,n);case lt:return en(t)}}function fn(t,e){return e=e==null?_:e,!!e&&(typeof t=="number"||Vt.test(t))&&t>-1&&t%1==0&&t<e}function ln(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function pn(t){return!!mt&&mt in t}function Ht(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||L;return t===n}function S(t){if(t!=null){try{return Ct.call(t)}catch{}try{return t+""}catch{}}return""}function dn(t){return N(t,!0,!0)}function Bt(t,e){return t===e||t!==t&&e!==e}function _n(t){return hn(t)&&y.call(t,"callee")&&(!_e.call(t,"callee")||j.call(t)==B)}var k=Array.isArray;function Wt(t){return t!=null&&yn(t.length)&&!qt(t)}function hn(t){return On(t)&&Wt(t)}var gn=ge||bn;function qt(t){var e=M(t)?j.call(t):"";return e==W||e==it}function yn(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=_}function M(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function On(t){return!!t&&typeof t=="object"}function V(t){return Wt(t)?Qe(t):Ze(t)}function Tn(){return[]}function bn(){return!1}r.exports=dn})(rt,rt.exports);var Yt=rt.exports;async function Ln(r,a,f=""){return(await T.send(O.START_PROFILE,{payload:r,profile_id:a,automation:f})).data}async function jn(r){return(await T.send(O.STOP_PROFILE,r)).data}async function Un(r,a){return(await T.send(O.REQUEST_TEST_SCRIPT_AUTOMATION,{script:Yt(r),browserType:a})).data}async function Fn(r,a){return(await T.send(O.REQUEST_TEST_SCRIPT_AUTOMATION_WITH_PROFILE,{script:Yt(r),wsEndpoint:a})).data}async function Mn(r){return(await T.send(O.REQUEST_EXPORT_PROFILE,r)).data}async function Dn(r){return(await T.send(O.UPLOAD_PROFILE,r)).data}async function Gn(r){return(await T.send(O.DOWNLOAD_PROFILE,r)).data}export{O as E,Mn as a,Gn as b,Ln as c,jn as d,Fn as e,Un as f,Dn as r,xn as u,En as v};
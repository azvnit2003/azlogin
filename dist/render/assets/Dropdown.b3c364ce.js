import{N as de,p as ee,V as Se,a as ke,b as Ne,h as Re,r as Pe,c as Ke}from"./Tag.92553d15.js";import{aJ as Ce,aK as _e,aL as Ie,aM as De,aN as E,aO as Oe,aP as L,w as se,d as S,h as s,p as U,aQ as Te,r as T,c as w,j as oe,o as $,K as ne,W as B,E as $e,aA as le,S as H,aR as Ae,aS as Me,U as je,e as x,A as ze,a as re,g as P,Z as ie,i as _,t as O,m as Fe,aT as Ee,P as Y,s as I,v as Le,Y as Be}from"./main.2046a1e9.js";import{u as He}from"./get.dca81cb3.js";import{u as Ue}from"./use-merged-state.82643886.js";function qe(e){return n=>{n?e.value=n.$el:e.value=null}}function We(e={},n){const o=Ce({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:t}=e,c=u=>{switch(u.key){case"Control":o.ctrl=!0;break;case"Meta":o.command=!0,o.win=!0;break;case"Shift":o.shift=!0;break;case"Tab":o.tab=!0;break}r!==void 0&&Object.keys(r).forEach(y=>{if(y!==u.key)return;const v=r[y];if(typeof v=="function")v(u);else{const{stop:g=!1,prevent:k=!1}=v;g&&u.stopPropagation(),k&&u.preventDefault(),v.handler(u)}})},p=u=>{switch(u.key){case"Control":o.ctrl=!1;break;case"Meta":o.command=!1,o.win=!1;break;case"Shift":o.shift=!1;break;case"Tab":o.tab=!1;break}t!==void 0&&Object.keys(t).forEach(y=>{if(y!==u.key)return;const v=t[y];if(typeof v=="function")v(u);else{const{stop:g=!1,prevent:k=!1}=v;g&&u.stopPropagation(),k&&u.preventDefault(),v.handler(u)}})},h=()=>{(n===void 0||n.value)&&(L("keydown",document,c),L("keyup",document,p)),n!==void 0&&se(n,u=>{u?(L("keydown",document,c),L("keyup",document,p)):(E("keydown",document,c),E("keyup",document,p))})};return _e()?(Ie(h),De(()=>{(n===void 0||n.value)&&(E("keydown",document,c),E("keyup",document,p))})):h(),Oe(o)}var Ge=S({name:"ChevronRight",render(){return s("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}});const Ve=Object.assign(Object.assign({},ee),U.props);var lo=S({name:"Tooltip",props:Ve,__popover__:!0,setup(e){const n=U("Tooltip","-tooltip",void 0,Te,e),o=T(null);return Object.assign(Object.assign({},{syncPosition(){o.value.syncPosition()},setShow(t){o.value.setShow(t)}}),{popoverRef:o,mergedTheme:n,popoverThemeOverrides:w(()=>n.value.self)})},render(){const{mergedTheme:e,internalExtraClass:n}=this;return s(de,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:n.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),ue=S({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return s("div",{class:`${this.clsPrefix}-dropdown-divider`})}});const te=oe("n-dropdown-menu"),q=oe("n-dropdown"),ae=oe("n-dropdown-option");function X(e,n){return e.type==="submenu"||e.type===void 0&&e[n]!==void 0}function Ze(e){return e.type==="group"}function ce(e){return e.type==="divider"}function Je(e){return e.type==="render"}var pe=S({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object},setup(e){const n=$(q),{hoverKeyRef:o,keyboardKeyRef:r,lastToggledSubmenuKeyRef:t,pendingKeyPathRef:c,activeKeyPathRef:p,animatedRef:h,mergedShowRef:u,renderLabelRef:y,renderIconRef:v,labelFieldRef:g,childrenFieldRef:k}=n,D=$(ae,null),A=$(te),j=w(()=>e.tmNode.rawNode),N=w(()=>{const{value:i}=k;return X(e.tmNode.rawNode,i)}),W=w(()=>{const{disabled:i}=e.tmNode;return i}),G=w(()=>{if(!N.value)return!1;const{key:i,disabled:a}=e.tmNode;if(a)return!1;const{value:l}=o,{value:b}=r,{value:m}=t,{value:C}=c;return l!==null?C.includes(i):b!==null?C.includes(i)&&C[C.length-1]!==i:m!==null?C.includes(i):!1}),V=w(()=>r.value===null&&!h.value),Z=He(G,300,V),J=w(()=>!!(D!=null&&D.enteringSubmenuRef.value)),M=T(!1);ne(ae,{enteringSubmenuRef:M});function Q(){M.value=!0}function z(){M.value=!1}function K(){const{parentKey:i,tmNode:a}=e;!u.value||(t.value=i,r.value=null,o.value=a.key)}function F(){const{tmNode:i}=e;!u.value||o.value!==i.key&&K()}function R(i){if(!u.value)return;const{relatedTarget:a}=i;a&&!Re({target:a},"dropdownOption")&&(o.value=null)}function d(){const{value:i}=N,{tmNode:a}=e;!u.value||!i&&!a.disabled&&(n.doSelect(a.key,a.rawNode),n.doUpdateShow(!1))}return{labelField:g,renderLabel:y,renderIcon:v,siblingHasIcon:A.showIconRef,siblingHasSubmenu:A.hasSubmenuRef,animated:h,mergedShowSubmenu:w(()=>Z.value&&!J.value),rawNode:j,hasSubmenu:N,pending:B(()=>{const{value:i}=c,{key:a}=e.tmNode;return i.includes(a)}),childActive:B(()=>{const{value:i}=p,{key:a}=e.tmNode,l=i.findIndex(b=>a===b);return l===-1?!1:l<i.length-1}),active:B(()=>{const{value:i}=p,{key:a}=e.tmNode,l=i.findIndex(b=>a===b);return l===-1?!1:l===i.length-1}),mergedDisabled:W,handleClick:d,handleMouseMove:F,handleMouseEnter:K,handleMouseLeave:R,handleSubmenuBeforeEnter:Q,handleSubmenuAfterEnter:z}},render(){var e;const{animated:n,rawNode:o,mergedShowSubmenu:r,clsPrefix:t,siblingHasIcon:c,siblingHasSubmenu:p,renderLabel:h,renderIcon:u,props:y}=this,v=r?s(fe,{clsPrefix:t,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}):null,g={class:[`${t}-dropdown-option-body`,this.pending&&`${t}-dropdown-option-body--pending`,this.active&&`${t}-dropdown-option-body--active`,this.childActive&&`${t}-dropdown-option-body--child-active`,this.mergedDisabled&&`${t}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick};return s("div",{class:`${t}-dropdown-option`},s("div",le(g,y),[s("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__prefix`,c&&`${t}-dropdown-option-body__prefix--show-icon`]},[u?u(o):H(o.icon)]),s("div",{"data-dropdown-option":!0,class:`${t}-dropdown-option-body__label`},h?h(o):H((e=o[this.labelField])!==null&&e!==void 0?e:o.title)),s("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__suffix`,p&&`${t}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?s(Ae,null,{default:()=>s(Ge,null)}):null)]),this.hasSubmenu?s(Se,null,{default:()=>[s(ke,null,{default:()=>s("div",{class:`${t}-dropdown-offset-container`},s(Ne,{show:this.mergedShowSubmenu,placement:this.placement,teleportDisabled:!0},{default:()=>s("div",{class:`${t}-dropdown-menu-wrapper`},n?s($e,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>v}):v)}))})]}):null)}}),Qe=S({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:n}=$(te),{renderLabelRef:o,labelFieldRef:r}=$(q);return{labelField:r,showIcon:e,hasSubmenu:n,renderLabel:o}},render(){var e;const{clsPrefix:n,hasSubmenu:o,showIcon:r,renderLabel:t}=this,{rawNode:c}=this.tmNode;return s("div",{class:`${n}-dropdown-option`},s("div",{class:`${n}-dropdown-option-body ${n}-dropdown-option-body--group`},s("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__prefix`,r&&`${n}-dropdown-option-body__prefix--show-icon`]},H(c.icon)),s("div",{class:`${n}-dropdown-option-body__label`,"data-dropdown-option":!0},t?t(c):H((e=c.title)!==null&&e!==void 0?e:c[this.labelField])),s("div",{class:[`${n}-dropdown-option-body__suffix`,o&&`${n}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})))}}),Ye=S({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:n,clsPrefix:o}=this,{children:r}=e;return s(je,null,s(Qe,{clsPrefix:o,tmNode:e,key:e.key}),r==null?void 0:r.map(t=>ce(t.rawNode)?s(ue,{clsPrefix:o,key:t.key}):t.isGroup?(Me("dropdown","`group` node is not allowed to be put in `group` node."),null):s(pe,{clsPrefix:o,tmNode:t,parentKey:n,key:t.key})))}}),Xe=S({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:n}}=this.tmNode;return s("div",n,[e==null?void 0:e()])}}),fe=S({name:"DropdownMenu",props:{showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:o}=$(q);ne(te,{showIconRef:w(()=>{const r=n.value;return e.tmNodes.some(t=>{var c;if(t.isGroup)return(c=t.children)===null||c===void 0?void 0:c.some(({rawNode:h})=>r?r(h):h.icon);const{rawNode:p}=t;return r?r(p):p.icon})}),hasSubmenuRef:w(()=>{const{value:r}=o;return e.tmNodes.some(t=>{var c;if(t.isGroup)return(c=t.children)===null||c===void 0?void 0:c.some(({rawNode:h})=>X(h,r));const{rawNode:p}=t;return X(p,r)})})})},render(){const{parentKey:e,clsPrefix:n}=this;return s("div",{class:`${n}-dropdown-menu`},this.tmNodes.map(o=>{const{rawNode:r}=o;return Je(r)?s(Xe,{tmNode:o,key:o.key}):ce(r)?s(ue,{clsPrefix:n,key:o.key}):Ze(r)?s(Ye,{clsPrefix:n,tmNode:o,parentKey:e,key:o.key}):s(pe,{clsPrefix:n,tmNode:o,parentKey:e,key:o.key,props:r.props})}),this.showArrow?Pe({clsPrefix:n,arrowStyle:this.arrowStyle}):null)}}),eo=x("dropdown-menu",`
 transform-origin: inherit;
 padding: var(--n-padding);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[ze(),x("dropdown-option",`
 position: relative;
 `,[re("a",`
 text-decoration: none;
 color: inherit;
 `,[re("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),x("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `,[P("pending",[ie("disabled",{color:"var(--n-option-text-color-hover)",backgroundColor:"var(--n-option-color-hover)"}),_("prefix, suffix",{color:"var(--n-option-text-color-hover)"})]),P("active",[ie("disabled",{color:"var(--n-option-text-color-active)",backgroundColor:"var(--n-option-color-active)"}),_("prefix, suffix",{color:"var(--n-option-text-color-active)"})]),P("disabled",{cursor:"not-allowed",opacity:"var(--n-option-opacity-disabled)"}),P("child-active",{color:"var(--n-option-text-color-child-active)"},[_("prefix, suffix",{color:"var(--n-option-text-color-child-active)"})]),P("group",{fontSize:"calc(var(--n-font-size) - 1px)",color:"var(--n-group-header-text-color)"},[_("prefix",{width:"calc(var(--n-option-prefix-width) / 2)"},[P("show-icon",{width:"calc(var(--n-option-icon-prefix-width) / 2)"})])]),_("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 `,[P("show-icon",{width:"var(--n-option-icon-prefix-width)"}),x("icon",{fontSize:"var(--n-option-icon-size)"})]),_("label",{whiteSpace:"nowrap",flex:1}),_("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 `,[P("has-submenu",{width:"var(--n-option-icon-suffix-width)"}),x("icon",{fontSize:"var(--n-option-icon-size)"})]),x("dropdown-menu",{pointerEvents:"all"})]),x("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),x("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),x("dropdown-menu-wrapper",`
 transform-origin: inherit;
 width: fit-content;
 `)]);const oo={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},showArrow:Boolean,renderLabel:Function,renderIcon:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},no=Object.keys(ee),to=Object.assign(Object.assign(Object.assign({},ee),oo),U.props);var uo=S({name:"Dropdown",inheritAttrs:!1,props:to,setup(e){const n=T(!1),o=Ue(O(e,"show"),n),r=w(()=>{const{keyField:d,childrenField:i}=e;return Ke(e.options,{getKey(a){return a[d]},getDisabled(a){return a.disabled===!0},getIgnored(a){return a.type==="divider"||a.type==="render"},getChildren(a){return a[i]}})}),t=w(()=>r.value.treeNodes),c=T(null),p=T(null),h=T(null),u=w(()=>{var d,i,a;return(a=(i=(d=c.value)!==null&&d!==void 0?d:p.value)!==null&&i!==void 0?i:h.value)!==null&&a!==void 0?a:null}),y=w(()=>r.value.getPath(u.value).keyPath),v=w(()=>r.value.getPath(e.value).keyPath),g=B(()=>e.keyboard&&o.value);We({keydown:{ArrowUp:{prevent:!0,handler:J},ArrowRight:{prevent:!0,handler:Z},ArrowDown:{prevent:!0,handler:M},ArrowLeft:{prevent:!0,handler:V},Escape:G},keyup:{Enter:Q}},g);const{mergedClsPrefixRef:k,inlineThemeDisabled:D}=Fe(e),A=U("Dropdown","-dropdown",eo,Ee,e,k);ne(q,{labelFieldRef:O(e,"labelField"),childrenFieldRef:O(e,"childrenField"),renderLabelRef:O(e,"renderLabel"),renderIconRef:O(e,"renderIcon"),hoverKeyRef:c,keyboardKeyRef:p,lastToggledSubmenuKeyRef:h,pendingKeyPathRef:y,activeKeyPathRef:v,animatedRef:O(e,"animated"),mergedShowRef:o,doSelect:j,doUpdateShow:N}),se(o,d=>{d||W()});function j(d,i){const{onSelect:a}=e;a&&Y(a,d,i)}function N(d){const{"onUpdate:show":i,onUpdateShow:a}=e;i&&Y(i,d),a&&Y(a,d),n.value=d}function W(){c.value=null,p.value=null,h.value=null}function G(){N(!1)}function V(){K("left")}function Z(){K("right")}function J(){K("up")}function M(){K("down")}function Q(){const d=z();d!=null&&d.isLeaf&&(j(d.key,d.rawNode),N(!1))}function z(){var d;const{value:i}=r,{value:a}=u;return!i||a===null?null:(d=i.getNode(a))!==null&&d!==void 0?d:null}function K(d){const{value:i}=u,{value:{getFirstAvailableNode:a}}=r;let l=null;if(i===null){const b=a();b!==null&&(l=b.key)}else{const b=z();if(b){let m;switch(d){case"down":m=b.getNext();break;case"up":m=b.getPrev();break;case"right":m=b.getChild();break;case"left":m=b.getParent();break}m&&(l=m.key)}}l!==null&&(c.value=null,p.value=l)}const F=w(()=>{const{size:d,inverted:i}=e,{common:{cubicBezierEaseInOut:a},self:l}=A.value,{padding:b,dividerColor:m,borderRadius:C,optionOpacityDisabled:he,[I("optionIconSuffixWidth",d)]:ve,[I("optionSuffixWidth",d)]:we,[I("optionIconPrefixWidth",d)]:ye,[I("optionPrefixWidth",d)]:be,[I("fontSize",d)]:me,[I("optionHeight",d)]:ge,[I("optionIconSize",d)]:xe}=l,f={"--n-bezier":a,"--n-font-size":me,"--n-padding":b,"--n-border-radius":C,"--n-option-height":ge,"--n-option-prefix-width":be,"--n-option-icon-prefix-width":ye,"--n-option-suffix-width":we,"--n-option-icon-suffix-width":ve,"--n-option-icon-size":xe,"--n-divider-color":m,"--n-option-opacity-disabled":he};return i?(f["--n-color"]=l.colorInverted,f["--n-option-color-hover"]=l.optionColorHoverInverted,f["--n-option-color-active"]=l.optionColorActiveInverted,f["--n-option-text-color"]=l.optionTextColorInverted,f["--n-option-text-color-hover"]=l.optionTextColorHoverInverted,f["--n-option-text-color-active"]=l.optionTextColorActiveInverted,f["--n-option-text-color-child-active"]=l.optionTextColorChildActiveInverted,f["--n-prefix-color"]=l.prefixColorInverted,f["--n-suffix-color"]=l.suffixColorInverted,f["--n-group-header-text-color"]=l.groupHeaderTextColorInverted):(f["--n-color"]=l.color,f["--n-option-color-hover"]=l.optionColorHover,f["--n-option-color-active"]=l.optionColorActive,f["--n-option-text-color"]=l.optionTextColor,f["--n-option-text-color-hover"]=l.optionTextColorHover,f["--n-option-text-color-active"]=l.optionTextColorActive,f["--n-option-text-color-child-active"]=l.optionTextColorChildActive,f["--n-prefix-color"]=l.prefixColor,f["--n-suffix-color"]=l.suffixColor,f["--n-group-header-text-color"]=l.groupHeaderTextColor),f}),R=D?Le("dropdown",w(()=>`${e.size[0]}${e.inverted?"i":""}`),F,e):void 0;return{mergedClsPrefix:k,mergedTheme:A,tmNodes:t,mergedShow:o,doUpdateShow:N,cssVars:D?void 0:F,themeClass:R==null?void 0:R.themeClass,onRender:R==null?void 0:R.onRender}},render(){const e=(r,t,c,p,h)=>{var u;const{mergedClsPrefix:y}=this;(u=this.onRender)===null||u===void 0||u.call(this);const v={ref:qe(t),class:[r,`${y}-dropdown`,this.themeClass,this.trigger==="manual"&&`${y}-popover--manual-trigger`,this.showArrow&&`${y}-popover--show-arrow`],clsPrefix:y,tmNodes:this.tmNodes,style:[c,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,onMouseenter:p,onMouseleave:h};return s(fe,le(this.$attrs,v))},{mergedTheme:n}=this,o={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalRenderBody:e,onUpdateShow:this.doUpdateShow};return s(de,Object.assign({},Be(this.$props,no),o),{trigger:()=>{var r,t;return(t=(r=this.$slots).default)===null||t===void 0?void 0:t.call(r)}})}});export{Ge as C,uo as _,lo as a};

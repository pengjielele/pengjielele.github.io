/*! Last Build On Mon Feb 10 2020 11:13:17 GMT+0800 (GMT+08:00) */(function(t){function e(e){for(var a,s,o=e[0],u=e[1],c=e[2],l=0,p=[];l<o.length;l++)s=o[l],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var u=n[s];0!==i[u]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},r=[];function s(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"4fcae37e"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=a);var r,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=s(t);var c=new Error;r=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",c.name="ChunkLoadError",c.type=a,c.request=r,n[1](c)}i[t]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:u})}),12e4);u.onerror=u.onload=r,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"177d":function(t,e,n){},"25e3":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"nav"},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/ui"}},[t._v("UI")])],1),n("router-view")],1)},r=[],s=(n("5c0b"),n("2877")),o={},u=Object(s["a"])(o,i,r,!1,null,null,null),c=u.exports,l=(n("d3b7"),n("8c4f")),d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v("This is an home page")])])}],v={name:"home"},h=v,b=Object(s["a"])(h,d,p,!1,null,null,null),f=b.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"nav"},[n("router-link",{attrs:{to:"/ui/button"}},[t._v("button")])],1),n("router-view")],1)},y=[],m={},g=Object(s["a"])(m,_,y,!1,null,null,null),C=g.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"preview"},[n("div",{staticClass:"card"},[n("h3",{staticClass:"title"},[t._v("设置类型")]),n("div",{staticClass:"content"},[n("hi-button",[t._v("默认按钮")]),n("hi-button",{attrs:{type:"primary"}},[t._v("主要按钮")]),n("hi-button",{attrs:{type:"success"}},[t._v("成功按钮")]),n("hi-button",{attrs:{type:"info"}},[t._v("信息按钮")]),n("hi-button",{attrs:{type:"warning"}},[t._v("警告按钮")]),n("hi-button",{attrs:{type:"danger"}},[t._v("危险按钮")])],1)]),n("div",{staticClass:"card"},[n("h3",{staticClass:"title"},[t._v("设置圆角")]),n("div",{staticClass:"content"},[n("hi-button",{attrs:{radius:"5"}},[t._v("默认按钮")]),n("hi-button",{attrs:{type:"primary",radius:"5"}},[t._v("主要按钮")]),n("hi-button",{attrs:{type:"success",radius:"5"}},[t._v("成功按钮")]),n("hi-button",{attrs:{type:"info",radius:"5"}},[t._v("信息按钮")]),n("hi-button",{attrs:{type:"warning",radius:"5"}},[t._v("警告按钮")]),n("hi-button",{attrs:{type:"danger",radius:"5"}},[t._v("危险按钮")])],1)]),n("div",{staticClass:"card"},[n("h3",{staticClass:"title"},[t._v("设置块状")]),n("div",{staticClass:"content"},[n("hi-button",{attrs:{radius:"5",block:""}},[t._v("默认按钮")]),n("hi-button",{attrs:{type:"primary",radius:"5",block:""}},[t._v("主要按钮")]),n("hi-button",{attrs:{type:"success",radius:"5",block:""}},[t._v("成功按钮")]),n("hi-button",{attrs:{type:"info",radius:"5",block:""}},[t._v("信息按钮")]),n("hi-button",{attrs:{type:"warning",radius:"5",block:""}},[t._v("警告按钮")]),n("hi-button",{attrs:{type:"danger",radius:"5",block:""}},[t._v("危险按钮")])],1)]),n("div",{staticClass:"card"},[n("h3",{staticClass:"title"},[t._v("设置边框")]),n("div",{staticClass:"content"},[n("hi-button",{attrs:{radius:"5",plain:""}},[t._v("默认按钮")]),n("hi-button",{attrs:{type:"primary",radius:"5",plain:""}},[t._v("主要按钮")]),n("hi-button",{attrs:{type:"success",radius:"5",plain:""}},[t._v("成功按钮")]),n("hi-button",{attrs:{type:"info",radius:"5",plain:""}},[t._v("信息按钮")]),n("hi-button",{attrs:{type:"warning",radius:"5",plain:""}},[t._v("警告按钮")]),n("hi-button",{attrs:{type:"danger",radius:"5",plain:""}},[t._v("危险按钮")])],1)]),n("div",{staticClass:"card"},[n("h3",{staticClass:"title"},[t._v("设置尺寸")]),n("div",{staticClass:"content"},[n("hi-button",{attrs:{size:"mini"}},[t._v("mini")]),n("hi-button",{attrs:{type:"primary",size:"small"}},[t._v("small")]),n("hi-button",[t._v("default")]),n("hi-button",{attrs:{type:"success",size:"medium"}},[t._v("medium")]),n("hi-button",{attrs:{type:"info",size:"large"}},[t._v("large")])],1)]),n("div",{staticClass:"card"},[n("h3",{staticClass:"title"},[t._v("设置禁用")]),n("div",{staticClass:"content"},[n("hi-button",{attrs:{disabled:""}},[t._v("默认按钮")]),n("hi-button",{attrs:{type:"primary",disabled:""}},[t._v("主要按钮")]),n("hi-button",{attrs:{type:"success",disabled:""}},[t._v("成功按钮")]),n("hi-button",{attrs:{type:"info",disabled:""}},[t._v("信息按钮")]),n("hi-button",{attrs:{type:"warning",disabled:""}},[t._v("警告按钮")]),n("hi-button",{attrs:{type:"danger",disabled:""}},[t._v("危险按钮")])],1)]),n("div",{staticClass:"card"},[n("h3",{staticClass:"title"},[t._v("设置宽高")]),n("div",{staticClass:"content"},[n("hi-button",{attrs:{width:"200px",height:"30px"}},[t._v("默认按钮")]),n("hi-button",{attrs:{type:"primary"}},[t._v("主要按钮")]),n("hi-button",{attrs:{type:"success"}},[t._v("成功按钮")]),n("hi-button",{attrs:{type:"info"}},[t._v("信息按钮")]),n("hi-button",{attrs:{type:"warning"}},[t._v("警告按钮")]),n("hi-button",{attrs:{type:"danger"}},[t._v("危险按钮")])],1)]),n("div",{staticClass:"card"},[n("h3",{staticClass:"title"},[t._v("设置图标")]),n("div",{staticClass:"content"},[n("hi-button",[n("i",{staticClass:"fa fa-user-o"}),t._v("默认按钮")]),n("hi-button",{attrs:{type:"primary",icon:"fa-home"}},[t._v("主要按钮")]),n("hi-button",{attrs:{type:"success",icon:"fa-book"}},[t._v("成功按钮")]),n("hi-button",{attrs:{type:"info",icon:"fa-pencil"}},[t._v("信息按钮")]),n("hi-button",{attrs:{type:"warning",icon:"fa-cog"}},[t._v("警告按钮")]),n("hi-button",{attrs:{type:"danger",icon:"fa-square"}},[t._v("危险按钮")])],1)])])},k=[],j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:["hi-button","hi-button-"+t.type,"hi-button-size-"+t.size,{"is-plain":t.plain,"is-block":t.block}],style:{borderRadius:t.radius+"px",width:t.width,height:t.height},attrs:{disabled:t.disabled},on:{click:t.handleClick}},[t.icon?n("i",{class:["fa",t.icon]}):t._e(),t._t("default")],2)},O=[],x={name:"HiButton",props:{type:{type:String,default:"default"},size:{type:String,default:"default"},disabled:{type:Boolean,default:!1},radius:{type:String,default:"0"},plain:{type:Boolean,default:!1},block:{type:Boolean,default:!1},width:{type:String},height:{type:String},icon:{type:String}},methods:{handleClick:function(t){this.$emit("click",t)}},data:function(){return{title:"Button"}}},S=x,P=(n("c8ff"),Object(s["a"])(S,j,O,!1,null,"42a2fddd",null)),E=P.exports,$={name:"Preview",components:{HiButton:E}},z=$,B=Object(s["a"])(z,w,k,!1,null,null,null),T=B.exports;a["a"].use(l["a"]);var M=[{path:"/",name:"home",component:f},{path:"/ui",name:"UIIndex",component:C,children:[{path:"button",name:"button",component:T}]},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],H=new l["a"]({routes:M}),I=H,q=n("2f62");a["a"].use(q["a"]);var J=new q["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("25e3");a["a"].config.productionTip=!1,new a["a"]({router:I,store:J,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),i=n.n(a);i.a},"9c0c":function(t,e,n){},c8ff:function(t,e,n){"use strict";var a=n("177d"),i=n.n(a);i.a}});
//# sourceMappingURL=app.c3ff0e8d.js.map
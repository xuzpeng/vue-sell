(function(t){function s(s){for(var e,c,r=s[0],o=s[1],l=s[2],d=0,u=[];d<r.length;d++)c=r[d],i[c]&&u.push(i[c][0]),i[c]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);v&&v(s);while(u.length)u.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,s=0;s<n.length;s++){for(var a=n[s],e=!0,r=1;r<a.length;r++){var o=a[r];0!==i[o]&&(e=!1)}e&&(n.splice(s--,1),t=c(c.s=a[0]))}return t}var e={},i={app:0},n=[];function c(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=e,c.d=function(t,s,a){c.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,s){if(1&s&&(t=c(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)c.d(a,e,function(s){return t[s]}.bind(null,e));return a},c.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(s,"a",s),s},c.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=s,r=r.slice();for(var l=0;l<r.length;l++)s(r[l]);var v=o;n.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},1157:function(t,s,a){"use strict";var e=a("18ac"),i=a.n(e);i.a},1695:function(t,s,a){"use strict";var e=a("b64a"),i=a.n(e);i.a},"18ac":function(t,s,a){},"1f24":function(t,s,a){"use strict";var e=a("9fe7"),i=a.n(e);i.a},2726:function(t,s,a){"use strict";var e=a("e5f8"),i=a.n(e);i.a},"3a42":function(t,s,a){},"3a98":function(t,s,a){"use strict";var e=a("6285"),i=a.n(e);i.a},"3afe":function(t,s,a){},"3eca":function(t,s,a){"use strict";var e=a("3a42"),i=a.n(e);i.a},"52c7":function(t,s,a){},"56d7":function(t,s,a){"use strict";a.r(s);var e={};a.r(e),a.d(e,"changeLoginStatus",function(){return Pt});var i={};a.r(i),a.d(i,"changeLogin",function(){return It});var n={};a.r(n);a("cadf"),a("551c"),a("097d");var c=a("2b0e"),r=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("keep-alive",[t.$route.meta.keepAlive?a("router-view"):t._e()],1),t.$route.meta.keepAlive?t._e():a("router-view")],1)},o=[],l=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("router-view"),a("div",{staticClass:"menu-wrap"},t._l(t.links,function(s,e){return a("router-link",{key:e,staticClass:"menu-item",attrs:{tag:"div","exact-active-class":"active-menu",to:s.linkUrl}},[a("span",{staticClass:"iconfont",domProps:{innerHTML:t._s(s.ico)}}),t._v("\n      "+t._s(s.title)+"\n    ")])}))],1)},v=[],d=a("2f62"),u={name:"Menu",data:function(){return{links:[{ico:"&#xe722;",linkUrl:"/",title:"首页"},{ico:"&#xe60c;",linkUrl:"/find",title:"发现"},{ico:"&#xe637;",linkUrl:"/order",title:"订单"},{ico:"&#xe627;",linkUrl:"/mine",title:"我的"}]}}},p=u,m=(a("b61d"),a("2877")),f=Object(m["a"])(p,l,v,!1,null,"96c412ea",null);f.options.__file="Menu.vue";var h=f.exports,_={name:"app",components:{Menu:h}},g=_,C=(a("1f24"),Object(m["a"])(g,r,o,!1,null,"615c93a4",null));C.options.__file="App.vue";var b=C.exports,w=a("8c4f"),x=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("Header"),a("Content"),a("Banner"),a("Recommend",{ref:"recommend",attrs:{lists:t.lists}}),a("div",{class:{loading:t.loading}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"iconfont back-top",on:{click:t.handleBackTop}},[t._v("")])],1)},j=[],y=a("2909"),M=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"header"},[t._m(0),a("div",{staticClass:"search-wrap"},[a("input",{attrs:{type:"text",placeholder:"搜索饿了么商家、商品名称"},on:{input:t.handleInput}}),a("span",{ref:"searchEle",staticClass:"iconfont search-icon"},[t._v("")])])])},k=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"header-top"},[a("span",{staticClass:"iconfont current-pos"},[t._v("")]),t._v("\n    华一路华正科技园\n    "),a("span",{staticClass:"iconfont choose-pos"},[t._v("")])])}],A={name:"Header",methods:{handleInput:function(t){t.target.value?this.$refs.searchEle.style.display="none":this.$refs.searchEle.style.display="block"}}},E=A,S=(a("bf6b"),Object(m["a"])(E,M,k,!1,null,"b576297e",null));S.options.__file="Header.vue";var O=S.exports,L=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t.lists.length?a("swiper",{attrs:{options:t.swiperOption}},[t._l(t.lists,function(s,e){return a("swiper-slide",{key:e},[a("div",{staticClass:"list"},t._l(s,function(s){return a("div",{key:s.id,staticClass:"list-item"},[a("img",{attrs:{src:s.imgUrl,alt:""}}),a("div",{staticClass:"item-text"},[t._v(t._s(s.desc))])])}))])}),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e()],1)},$=[],T={name:"Content",data:function(){return{lists:[],swiperOption:{pagination:{el:".swiper-pagination"},loop:!0}}},created:function(){var t=this;this.axios.get("/api/list.json").then(function(s){if(200==s.status){for(var a=s.data,e=[],i=0;i<Math.ceil(a.length/10);i++)e.push(a.slice(10*i,10*(i+1)));t.lists=e}})}},z=T,H=(a("68a1"),Object(m["a"])(z,L,$,!1,null,"553739a6",null));H.options.__file="Content.vue";var V=H.exports,P=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[t._m(0),a("div",{staticClass:"banner-swiper"},[a("swiper",{attrs:{options:t.swiperOption}},[t._l(t.bannerList,function(t,s){return a("swiper-slide",{key:s},[a("div",{staticClass:"swiper-img"},[a("img",{attrs:{src:t,alt:""}})])])}),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},I=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"banner-wrap"},[a("div",{staticClass:"banner-item"},[a("h1",[t._v("品质套餐")]),a("p",[t._v("搭配齐全吃得好")]),a("a",{staticClass:"btn",attrs:{href:"#"}},[t._v("立即抢购 >")]),a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:"https://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/",alt:""}})])]),a("div",{staticClass:"banner-item"},[a("h1",{staticClass:"hot"},[t._v("限量抢购")]),a("p",[t._v("超值美味 9.9元起")]),a("a",{staticClass:"btn",attrs:{href:"#"}},[t._v("2617人正在抢 >")]),a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:"https://fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/",alt:""}})])])])}],R={name:"Banner",data:function(){return{bannerList:["https://fuss10.elemecdn.com/9/5e/74d619e8cbea1df9bafd9162cfc89jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/","https://fuss10.elemecdn.com/b/45/998aa07aa331b2653c0ec56172065jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/","https://fuss10.elemecdn.com/4/31/bf736feabc32b61888d0169497c79jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/","https://fuss10.elemecdn.com/3/c0/14bf784d75365a3e19cbd565e1d66jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/"],swiperOption:{pagination:{el:".swiper-pagination"},loop:!0,autoplay:!0}}}},J=R,B=(a("3a98"),Object(m["a"])(J,P,I,!1,null,"0a68ae1d",null));B.options.__file="Banner.vue";var G=B.exports,U=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"rec-wrap"},[a("div",{staticClass:"rec-header"},[t._v("\n    推荐商家\n  ")]),a("div",{staticClass:"res-merchant-list"},[t._m(0),t._l(t.lists,function(s,e){return a("router-link",{key:e,staticClass:"restaurant-item",attrs:{tag:"div",to:"/shop"}},[a("div",{staticClass:"restaurant-item-top new-res"},[a("div",{staticClass:"item-pic"},[a("img",{attrs:{src:s.imgUrl,alt:""}})]),a("div",{staticClass:"item-content"},[a("p",{staticClass:"item-t"},[t._v(t._s(s.title)),a("span",{staticClass:"item-t-right",on:{click:function(s){t.handleToggleMask(e)}}},[t._v("\b···")])]),a("p",{staticClass:"order-num"},[t._v(t._s(s["sale-desc"]))]),a("p",{staticClass:"price"},[a("span",[t._v(t._s(s["para-desc"]))]),a("span",{staticClass:"right"},[t._v(t._s(s["miles-time"]))])])])]),a("div",{class:["res-mask",{show:t.currentIdx==e}],on:{click:t.handleHideMask}},[a("div",{staticClass:"res-mask-txt",on:{click:function(s){t.handleRemoveItem(e)}}},[t._v("不喜欢")])])])})],2)])},F=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"title-wrap"},[a("div",{staticClass:"list-title"},[t._v("\n        综合排序\n        "),a("span",{staticClass:"iconfont"},[t._v("")])]),a("div",{staticClass:"list-title"},[t._v("距离最近")]),a("div",{staticClass:"list-title"},[t._v("品质联盟")]),a("div",{staticClass:"list-title"},[t._v("\n        筛选\n        "),a("span",{staticClass:"iconfont"},[t._v("")])])])}],N={name:"Recommend",data:function(){return{currentIdx:-1}},props:["lists"],methods:{handleToggleMask:function(t){this.currentIdx=t},handleHideMask:function(){this.currentIdx=-1},handleRemoveItem:function(t){this.lists.splice(t,1),this.currentIdx=-1}}},Q=N,W=(a("1157"),Object(m["a"])(Q,U,F,!1,null,"10a0755e",null));W.options.__file="Recommend.vue";var Y=W.exports,D={name:"Home",data:function(){return{isShow:!1,lists:[],loading:!1}},components:{Header:O,Content:V,Banner:G,Recommend:Y},created:function(){var t=this;window.addEventListener("scroll",this.handleScroll),this.axios.get("/api/recommend.json").then(function(s){var a=s.data;t.lists=a})},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=document.documentElement.scrollTop,s=parseInt(getComputedStyle(document.documentElement).height),a=window.innerHeight;t>400?(this.isShow=!0,t+a>=s&&(this.loading=!0,this.getAddRecommend())):this.isShow=!1},handleBackTop:function(){window.scrollTo({top:0,behavior:"smooth"})},getAddRecommend:function(){var t=this;this.axios.get("/api/addRecommend.json").then(function(s){var a,e=s.data;(a=t.lists).push.apply(a,Object(y["a"])(e)),t.loading=!1})}}},X=D,q=(a("9f5b"),Object(m["a"])(X,x,j,!1,null,"173e5318",null));q.options.__file="Home.vue";var K=q.exports,Z=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"find"},[a("common-header",{attrs:{headerTitle:t.headerTitle}}),a("img",{staticClass:"banner-pic",attrs:{src:"https://fuss10.elemecdn.com/9/41/253ca6a440ced6fa22044a96e6721jpeg.jpeg",alt:""}}),t._m(0),t._m(1),a("div",{staticClass:"loading-more"},[t._v("查看更多")])],1)},tt=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"section"},[a("div",{staticClass:"left-part"},[a("div",{staticClass:"txt"},[a("div",{staticClass:"title"},[t._v("金币商城")]),a("div",{staticClass:"desc"},[t._v("0元好物在这里")])]),a("img",{attrs:{src:"https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/",alt:""}})]),a("div",{staticClass:"right-part"},[a("div",{staticClass:"r-p-top"},[a("div",{staticClass:"txt"},[a("div",{staticClass:"title"},[t._v("推荐有奖")]),a("div",{staticClass:"desc"},[t._v("10元现金拿不停")])]),a("img",{attrs:{src:"https://fuss10.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?imageMogr/format/webp/",alt:""}})]),a("div",{staticClass:"r-p-bottom"},[a("div",{staticClass:"txt"},[a("div",{staticClass:"title"},[t._v("周边优惠")]),a("div",{staticClass:"desc"},[t._v("领取口碑好券")])]),a("img",{attrs:{src:"https://fuss10.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?imageMogr/format/webp/",alt:""}})])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"time-limited-gift"},[t._v("限时好礼")]),a("div",{staticClass:"content"},[a("div",{staticClass:"item"},[a("span",[t._v("限时优惠")]),a("img",{attrs:{src:"https://fuss10.elemecdn.com/c/66/89cc6ef54261bbd98b94deeff2546jpeg.jpeg?imageMogr/format/webp/",alt:""}}),a("div",{staticClass:"desc"},[t._v("3元饿了么红包")]),a("div",{staticClass:"coin"},[t._v("90金币")])]),a("div",{staticClass:"item"},[a("span",[t._v("限时优惠")]),a("img",{attrs:{src:"https://fuss10.elemecdn.com/5/78/5c1ca7ceca079926933ca418c9eb7jpeg.jpeg?imageMogr/format/webp/",alt:""}}),a("div",{staticClass:"desc"},[t._v("3元饿了么红包")]),a("div",{staticClass:"coin"},[t._v("90金币")])]),a("div",{staticClass:"item"},[a("span",[t._v("限时优惠")]),a("img",{attrs:{src:"https://fuss10.elemecdn.com/e/b5/605a11eae79849240113271dd1b94jpeg.jpeg?imageMogr/format/webp/",alt:""}}),a("div",{staticClass:"desc"},[t._v("3元饿了么红包")]),a("div",{staticClass:"coin"},[t._v("90金币")])])])])}],st=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"common-header"},[a("span",{staticClass:"iconfont"},[t._v("")]),t._v("\n  "+t._s(t.headerTitle)+"\n")])},at=[],et={name:"CommonHeader",props:["headerTitle"]},it=et,nt=(a("3eca"),Object(m["a"])(it,st,at,!1,null,"491d3d48",null));nt.options.__file="CommonHeader.vue";var ct=nt.exports,rt={name:"Find",components:{CommonHeader:ct},data:function(){return{headerTitle:"发现"}}},ot=rt,lt=(a("2726"),Object(m["a"])(ot,Z,tt,!1,null,"da12808c",null));lt.options.__file="Find.vue";var vt=lt.exports,dt=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"order-wrap"},[a("CommonHeader",{attrs:{headerTitle:t.headerTitle}}),t.isLogin?a("div",{staticClass:"order-list"},t._l(t.orderList,function(s){return a("div",{key:s.id,staticClass:"item"},[a("div",{staticClass:"top"},[a("img",{attrs:{src:s.imgUrl,alt:""}}),a("div",{staticClass:"desc"},[a("div",{staticClass:"title"},[t._v(t._s(s.title))]),a("div",{staticClass:"time"},[t._v(t._s(s.time))])]),a("div",{staticClass:"order-ok"},[t._v(t._s(s.orderOk))])]),a("div",{staticClass:"middle"},[a("div",{staticClass:"commodity"},[t._v(t._s(s.commodity))]),a("div",{staticClass:"price"},[t._v(t._s(s.price))])]),t._m(0,!0)])})):a("div",{staticClass:"login"},[a("img",{staticClass:"login-pic",attrs:{src:"//fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png",alt:""}}),a("div",[a("p",{staticClass:"desc"},[t._v("登录后查看外卖订单")]),a("router-link",{staticClass:"login-btn",attrs:{tag:"button",to:"/login"}},[t._v("立即登录")])],1)])],1)},ut=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"bottom"},[a("button",{staticClass:"btn-left"},[t._v("再来一单")]),a("button",{staticClass:"btn-right"},[t._v("评价得金币")])])}],pt={name:"Order",components:{CommonHeader:ct},data:function(){return{headerTitle:"订单",isLogin:this.$store.state.isLogin,orderList:[]}},created:function(){this.isLogin&&this.getOrderList()},methods:{getOrderList:function(){var t=this;this.axios.get("/api/orderList.json").then(function(s){var a=s.data;t.orderList=a})}}},mt=pt,ft=(a("cb88"),Object(m["a"])(mt,dt,ut,!1,null,"0dd98c9a",null));ft.options.__file="Order.vue";var ht=ft.exports,_t=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mine-wrap"},[a("CommonHeader",{attrs:{headerTitle:t.headerTitle}}),t.isLogin?a("div",{staticClass:"header"},[a("div",{staticClass:"header-left"},[a("img",{attrs:{src:"https://fuss10.elemecdn.com/c/62/7a2fb277f3a755acd201ef4df3accjpeg.jpeg?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/",alt:""}})]),a("div",{staticClass:"header-right"},[a("div",{staticClass:"login"},[t._v("十七岁丶0")]),a("div",{staticClass:"desc"},[t._v("186****6727")]),a("span",{staticClass:"iconfont"},[t._v("")])])]):a("router-link",{staticClass:"header",attrs:{tag:"div",to:"/login"}},[a("div",{staticClass:"header-left"},[a("img",{attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg==",alt:""}})]),a("div",{staticClass:"header-right"},[a("div",{staticClass:"login"},[t._v("登录/注册")]),a("div",{staticClass:"desc"},[t._v("登录后享受更多特权")]),a("span",{staticClass:"iconfont"},[t._v("")])])]),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5)],1)},gt=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"section"},[a("div",{staticClass:"sec-item"},[a("span",{staticClass:"iconfont"},[t._v("")]),t._v("\n      钱包\n    ")]),a("div",{staticClass:"sec-item"},[a("span",{staticClass:"iconfont"},[t._v("")]),t._v("\n      红包\n    ")]),a("div",{staticClass:"sec-item"},[a("span",{staticClass:"iconfont"},[t._v("")]),t._v("\n      金币\n    ")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"list-item"},[a("span",{staticClass:"iconfont",staticStyle:{color:"#03a9f4"}},[t._v("")]),a("span",{staticClass:"txt"},[t._v("我的地址")]),a("span",{staticClass:"iconfont right-icon"},[t._v("")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"list-item"},[a("span",{staticClass:"iconfont",staticStyle:{color:"#8bc34a"}},[t._v("")]),a("span",{staticClass:"txt"},[t._v("金币商城")]),a("span",{staticClass:"iconfont right-icon"},[t._v("")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"list-item list-item-new"},[a("span",{staticClass:"iconfont",staticStyle:{color:"#d65a84"}},[t._v("")]),a("span",{staticClass:"txt"},[t._v("分享拿10元现金")]),a("span",{staticClass:"iconfont right-icon"},[t._v("")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"list-item"},[a("span",{staticClass:"iconfont",staticStyle:{color:"#03a9f4"}},[t._v("")]),a("span",{staticClass:"txt"},[t._v("我的客服")]),a("span",{staticClass:"iconfont right-icon"},[t._v("")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"list-item list-item-new"},[a("span",{staticClass:"iconfont",staticStyle:{color:"#03a9f4"}},[t._v("")]),a("span",{staticClass:"txt"},[t._v("下载饿了么APP")]),a("span",{staticClass:"iconfont right-icon"},[t._v("")])])}],Ct={name:"Mine",components:{CommonHeader:ct},data:function(){return{headerTitle:"我的",isLogin:this.$store.state.isLogin}}},bt=Ct,wt=(a("f10c"),Object(m["a"])(bt,_t,gt,!1,null,"78c9ea26",null));wt.options.__file="Mine.vue";var xt=wt.exports,jt=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"title"},[a("svg",{attrs:{viewBox:"0 0 142 58",id:"logo",width:"100%",height:"100%"}},[a("g",{attrs:{fill:"#1B9DFF","fill-rule":"evenodd"}},[a("path",{attrs:{d:"M75.689 1.189h-1.306a.64.64 0 0 0-.641.638v2.592a.64.64 0 0 0 .64.638h2.612a.64.64 0 0 0 .64-.638V3.128a1.945 1.945 0 0 0-1.945-1.94M46.802 1.188h-2.888a.64.64 0 0 0-.641.638v4.842c0 .344.274.729.64.729h4.408c.485.02.982.363.999.979V12.9a.64.64 0 0 0 .641.638h2.359a.64.64 0 0 0 .64-.638V5.459a1.943 1.943 0 0 0-1.945-1.938h-3.573V1.826a.64.64 0 0 0-.64-.638"}}),a("path",{attrs:{d:"M50.076 30.517H48.29a.848.848 0 0 1-.848-.845V10.3a.64.64 0 0 0-.64-.638h-2.609a.64.64 0 0 0-.64.638v20.42a3.682 3.682 0 0 0 3.684 3.671h2.838a.64.64 0 0 0 .64-.638v-2.6a.64.64 0 0 0-.64-.637M123.349 1.64h-3.148a1.876 1.876 0 0 0-.248.016l-.08.012a1.92 1.92 0 0 0-.46.143l-.015.007a1.89 1.89 0 0 0-.5.34c-.11.128-12.315 14.334-12.504 14.578l-.01.013a.62.62 0 0 0 .454 1.05h3.149a2.166 2.166 0 0 0 .248-.017l.085-.013c.156-.028.31-.075.455-.141l.075-.036a1.906 1.906 0 0 0 .547-.42l12.415-14.49a.62.62 0 0 0-.463-1.042M86.132 34.37h7.843c2.143 0 3.886-1.737 3.886-3.872V17.316c0-.525.193-1.03.543-1.423.086-.101 9.336-10.882 9.448-11.01.019-.022.187-.183.187-.986v-.758c0-.77-.46-1.468-1.172-1.777l-.02-.01a2.184 2.184 0 0 0-.257-.085l-.07-.017-.034-.009a.423.423 0 0 0-.045-.007l-.094-.015-.056-.008h-.014l-.02-.001-.043-.002a1.57 1.57 0 0 0-.11-.007h-.059l-25.137.005a.677.677 0 0 0-.677.675v1.721c0 .55.293 1.05.747 1.273.176.086.405.141.723.174l.174.016.396.005h18.695a.433.433 0 0 1 .33.713L94.28 14.36a2.043 2.043 0 0 0-.523 1.363v13.78c0 .489-.4.887-.891.887l-5.944-.001c-.81 0-1.468.656-1.468 1.463v1.925c0 .348.28.592.678.592M132.984 2.03a1.94 1.94 0 0 0-.456.14l-.074.037a1.932 1.932 0 0 0-.547.419L108.393 30.13c-.193.249-.393.505-.393.877v1.097c0 1.069.873 1.939 1.946 1.939h27.495c2.105 0 3.818-1.707 3.818-3.805l-.001-.01v-4.754a.085.085 0 0 1 0-.018v-.528c0-.806-.66-1.463-1.469-1.463h-1.898a.664.664 0 0 0-.664.663v5.024a.876.876 0 0 1-.877.873l-21.11.001a.435.435 0 0 1-.423-.432c0-.103.036-.201.1-.277L137.292 3.04a.62.62 0 0 0 .163-.418.625.625 0 0 0-.625-.623h-3.513a2.014 2.014 0 0 0-.248.017l-.085.012zM71.04 34.392l5.953-.002a.64.64 0 0 0 .641-.639l-.007-1.851c0-.763-.623-1.384-1.388-1.384h-4.044a.965.965 0 0 1-.95-.95v-6.489h5.879a.51.51 0 0 0 .51-.508V19.71a.51.51 0 0 0-.51-.509h-5.88v-5.664h5.74a.64.64 0 0 0 .64-.637v-2.6a.64.64 0 0 0-.64-.638h-5.74V1.827a.64.64 0 0 0-.641-.638h-2.608a.64.64 0 0 0-.64.638v7.836h-5.452V5.064h1.874a.64.64 0 0 0 .641-.638V1.828a.64.64 0 0 0-.64-.638h-8.484a.64.64 0 0 0-.64.638v2.598a.64.64 0 0 0 .64.638h2.72v4.599h-2.72a.64.64 0 0 0-.64.638v2.598a.64.64 0 0 0 .64.639h2.72v5.664h-2.85a.51.51 0 0 0-.51.509v2.858c0 .28.228.508.51.508h2.85v6.57c0 .465-.38.845-.848.845h-1.872a.64.64 0 0 0-.64.638v2.598a.64.64 0 0 0 .64.639h2.925a3.682 3.682 0 0 0 3.684-3.672v-7.618h1.937a.51.51 0 0 0 .51-.508V19.71a.51.51 0 0 0-.51-.509h-1.937v-5.664h5.451v16.974c0 2.176 1.619 3.88 3.685 3.88M9.08 2.854C.864 8.17-1.472 19.118 3.864 27.304c5.335 8.188 16.322 10.514 24.538 5.197.476-.307.931-.635 1.367-.98a.973.973 0 0 0 .208-1.288l-.001-.002-.002-.002-.819-1.257a2.566 2.566 0 0 0-3.527-.759l-.015.009-.014.01c-5.844 3.77-13.649 2.114-17.441-3.706-3.796-5.824-2.135-13.612 3.71-17.394 4.727-3.059 10.742-2.561 14.878.822a.973.973 0 0 1-.1 1.56l-10.564 6.837a2.546 2.546 0 0 0-.753 3.53l.861 1.322c.295.452.9.58 1.354.287l16.583-10.73a.974.974 0 0 0 .344-1.25l-.02-.04c-.253-.48-.53-.954-.833-1.42C28.282-.135 17.296-2.462 9.08 2.855"}}),a("path",{attrs:{d:"M33.978 17.333l-3.322 2.15a.972.972 0 0 0-.287 1.347l2.157 3.31a.98.98 0 0 0 1.353.286l1.66-1.074a2.941 2.941 0 0 0 .87-4.078l-1.078-1.654a.98.98 0 0 0-1.353-.287M33.072 53.504v-1.088h-5.856v-4.112h4.992v-1.088h-4.992V43.2h5.856v-1.088H26v11.392h7.072zm7.856-7.872H39.68l-2.16 6.32-2.144-6.32h-1.248l2.88 7.872h1.024l2.896-7.872zm7.488 4.24h-5.312c0 1.728.816 2.72 2.32 2.72.912 0 1.44-.272 2.064-.896l.784.688c-.8.8-1.536 1.216-2.88 1.216-2.08 0-3.44-1.248-3.44-4.032 0-2.544 1.232-4.032 3.232-4.032 2.032 0 3.232 1.472 3.232 3.808v.528zm-1.152-.864c-.032-.64-.064-.88-.24-1.312-.304-.72-1.008-1.184-1.84-1.184-.832 0-1.536.464-1.84 1.184-.176.432-.208.672-.24 1.312h4.16zm8.848-2.736c-.56-.56-1.136-.736-1.888-.736-.912 0-1.776.4-2.208 1.056v-.96h-1.152v7.872h1.152v-4.832c0-1.2.736-2.112 1.888-2.112.608 0 .928.144 1.36.576l.848-.864zm7.024-.64h-1.248l-2.144 6.32-2.16-6.32h-1.248l2.832 7.712-.56 1.536c-.256.72-.496.976-1.296.976h-.352v1.024h.496c.56 0 1.12-.144 1.536-.544.224-.208.4-.496.56-.928l3.584-9.776zm4.64 7.872v-.992h-.608c-.736 0-1.072-.432-1.072-1.152v-4.8h1.68v-.88h-1.68v-2.464h-1.152v2.464h-.992v.88h.992v4.832c0 1.168.672 2.112 2.016 2.112h.816zm8.48 0v-5.056c0-1.776-1.056-2.912-2.832-2.912-.88 0-1.632.304-2.208.96v-4.384h-1.152v11.392h1.152V48.64c0-1.36.784-2.08 1.968-2.08s1.92.704 1.92 2.08v4.864h1.152zm3.952 0v-7.872h-1.152v7.872h1.152zm.08-10.112v-1.296h-1.296v1.296h1.296zm9.008 10.112v-5.04c0-.912-.256-1.648-.816-2.192-.48-.48-1.168-.736-2.016-.736-.88 0-1.648.32-2.208.96v-.864h-1.152v7.872h1.152v-4.848c0-1.376.768-2.096 1.952-2.096s1.936.704 1.936 2.096v4.848h1.152zm8.608.24c0 1.952-1.216 3.376-3.28 3.376-1.184 0-1.84-.304-2.672-1.056l.752-.736c.576.512.976.784 1.888.784 1.52 0 2.16-1.072 2.16-2.416v-1.232c-.64.816-1.36 1.024-2.208 1.024-.8 0-1.488-.288-1.904-.704-.784-.784-.96-2-.96-3.28 0-1.28.176-2.496.96-3.28.416-.416 1.12-.688 1.92-.688.864 0 1.568.192 2.208 1.024v-.928h1.136v8.112zm-1.152-4.24c0-1.472-.24-2.944-1.952-2.944s-1.968 1.472-1.968 2.944.256 2.944 1.968 2.944 1.952-1.472 1.952-2.944zm13.936.896c0-1.424-.592-2.352-1.744-2.784 1.024-.464 1.536-1.328 1.536-2.528 0-1.856-1.28-3.088-3.136-3.088-1.728 0-3.072 1.088-3.2 2.928h1.152c.112-1.168.848-1.904 2.048-1.904 1.104 0 1.984.72 1.984 2.08 0 1.28-.64 2.064-2.032 2.064h-.24v1.008h.24c1.552 0 2.24.832 2.24 2.208 0 1.392-.96 2.208-2.192 2.208-1.088 0-2.096-.56-2.192-1.984H104c.096 2.064 1.552 3.008 3.344 3.008 1.856 0 3.344-1.12 3.344-3.216zm8.288.064c0 1.888-1.344 3.136-3.12 3.136s-3.12-1.248-3.12-3.136v-5.312c0-1.888 1.344-3.136 3.12-3.136s3.12 1.248 3.12 3.136v5.312zm-1.152-.064v-5.184c0-1.248-.704-2.176-1.968-2.176s-1.968.928-1.968 2.176V50.4c0 1.248.704 2.176 1.968 2.176s1.968-.928 1.968-2.176zm5.008-6.944v-1.344h-1.392v2.608l1.392-1.264z"}})])])]),a("div",{staticClass:"form"},[a("input",{ref:"userAccount",attrs:{type:"text",placeholder:"手机号"}}),a("input",{ref:"userPassword",attrs:{type:"text",placeholder:"密码"}})]),t._m(0),a("button",{staticClass:"btn",on:{click:t.handleLogin}},[t._v("登录")]),a("a",{staticClass:"about-me desc",attrs:{href:"https://h5.ele.me/service/about/"}},[t._v("关于我们")])])},yt=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",{staticClass:"desc"},[t._v("新用户登录即自动注册，并表示已同意"),a("a",{attrs:{href:"#"}},[t._v("《用户服务协议》")])])}],Mt={name:"Login",methods:{handleLogin:function(){var t=this.$refs.userAccount.value,s=this.$refs.userPassword.value;this.$store.state.userAccount===t&&this.$store.state.password===s?(this.$store.dispatch({type:"changeLoginStatus",isLogin:!0}),this.$router.push("/")):alert("账号或者密码错误，请重新输入")}}},kt=Mt,At=(a("1695"),Object(m["a"])(kt,jt,yt,!1,null,"1064eb2d",null));At.options.__file="Login.vue";var Et=At.exports,St=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"shop-wrapper"},[a("div",{staticClass:"shop-header"},[a("div",{staticClass:"header-shadow"}),a("router-link",{staticClass:"iconfont",attrs:{to:"/",tag:"div"}},[t._v("")]),a("img",{staticClass:"shop-img",attrs:{src:"//fuss10.elemecdn.com/c/d9/1fb884f2d51545a7a9969e5daf025png.png?imageMogr/format/webp/thumbnail/150x/",alt:""}})],1),t._m(0)])},Ot=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"header-desc"},[a("h1",{staticClass:"desc-title"},[t._v("古槐里农家菜(梦想小镇店)")]),a("div",{staticClass:"desc-one"},[a("div",{staticClass:"rate"},[t._v("评价4.5")]),a("div",{staticClass:"sales"},[t._v("月售935单")]),a("div",{staticClass:"time"},[t._v("蜂鸟快送约32分钟")])]),a("div",{staticClass:"coupon-wrapper"},[a("div",{staticClass:"coupon-l"},[a("span",[t._v("￥7")]),a("span",{staticClass:"coupon-l-desc"},[t._v("无门槛")])]),a("div",{staticClass:"coupon-r"},[t._v("领取")])]),a("div",{staticClass:"desc-two"},[a("div",[t._v("满减")]),a("div",[t._v("满26减13，满65减21，满85减29，满130减42")])]),a("div",{staticClass:"desc-announcement"},[t._v("公告：新鲜食材，优厨现烧，古槐里农家炒菜，等你")])])}],Lt={name:"Shop"},$t=Lt,Tt=(a("f4fe"),Object(m["a"])($t,St,Ot,!1,null,"bb5f1fe6",null));Tt.options.__file="Shop.vue";var zt=Tt.exports;c["a"].use(w["a"]);var Ht=new w["a"]({routes:[{path:"/",component:h,children:[{path:"",component:K,meta:{keepAlive:!0}},{path:"find",component:vt},{path:"order",component:ht},{path:"mine",component:xt}]},{path:"/login",component:Et},{path:"/shop",component:zt}]}),Vt=Ht,Pt=function(t,s){t.commit("changeLogin",s)},It=function(t,s){t.isLogin=s},Rt={userAccount:"SSSSSSSev",password:"123456",isLogin:!1},Jt=Rt;c["a"].use(d["a"]);var Bt=new d["a"].Store({state:Jt,getters:n,actions:e,mutations:i}),Gt=Bt,Ut=a("fe3c"),Ft=a.n(Ut),Nt=a("bc3a"),Qt=a.n(Nt),Wt=a("7212"),Yt=a.n(Wt);a("3afe"),a("ab18"),a("499a"),a("dfa4");c["a"].config.productionTip=!1,Ft.a.attach(document.body),c["a"].prototype.axios=Qt.a,c["a"].use(Yt.a),new c["a"]({render:function(t){return t(b)},router:Vt,store:Gt}).$mount("#app")},6285:function(t,s,a){},"68a1":function(t,s,a){"use strict";var e=a("cceb"),i=a.n(e);i.a},"7eed":function(t,s,a){},8732:function(t,s,a){},"9f5b":function(t,s,a){"use strict";var e=a("c8ad"),i=a.n(e);i.a},"9fe7":function(t,s,a){},aaad:function(t,s,a){},ab18:function(t,s,a){},b61d:function(t,s,a){"use strict";var e=a("e5ea"),i=a.n(e);i.a},b64a:function(t,s,a){},bf6b:function(t,s,a){"use strict";var e=a("8732"),i=a.n(e);i.a},c8ad:function(t,s,a){},cb88:function(t,s,a){"use strict";var e=a("aaad"),i=a.n(e);i.a},cceb:function(t,s,a){},e5ea:function(t,s,a){},e5f8:function(t,s,a){},f10c:function(t,s,a){"use strict";var e=a("7eed"),i=a.n(e);i.a},f4fe:function(t,s,a){"use strict";var e=a("52c7"),i=a.n(e);i.a}});
//# sourceMappingURL=app.b9d14343.js.map
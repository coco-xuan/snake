(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-073df9b0"],{"0ab0":function(t,e,s){},"0d2b":function(t,e,s){},"12e0":function(t,e,s){},1781:function(t,e,s){},1816:function(t,e,s){},"2a67":function(t,e,s){"use strict";var i=s("1816"),n=s.n(i);n.a},"2fad":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"detial"}},[s("detial-nav-bar",{ref:"nav",on:{titClick:t.titClick}}),s("scroll",{ref:"scroll",staticClass:"content",attrs:{"probe-type":3},on:{scroll:t.detialScroll}},[s("detial-swiper",{attrs:{"top-images":t.topImages}}),s("detial-base-info",{attrs:{goods:t.goods}}),s("detial-shop-info",{attrs:{shop:t.shop}}),s("detial-goods-info",{attrs:{"detial-info":t.detialInfo},on:{imgLoad:t.imgLoad}}),s("detial-params",{ref:"params",attrs:{"param-info":t.itemParams}}),s("detial-comment-info",{ref:"comment",attrs:{"comment-info":t.commentInfo}}),s("goods-list",{ref:"list",attrs:{goods:t.recommends}})],1),s("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShowBackTop,expression:"isShowBackTop"}],nativeOn:{click:function(e){return t.backClick(e)}}}),s("detial-bottom",{on:{addCart:t.addCart}})],1)},n=[],a=(s("8e6e"),s("ac6a"),s("456d"),s("c5f6"),s("ade3")),o=s("f647"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("nav-bar",[i("div",{staticClass:"back",attrs:{slot:"left"},on:{click:t.backClick},slot:"left"},[i("img",{attrs:{src:s("7a74"),alt:""}})]),i("div",{staticClass:"title",attrs:{slot:"center"},slot:"center"},t._l(t.titles,(function(e,s){return i("div",{staticClass:"tit-item",class:{color:s===t.currentIndex},on:{click:function(e){return t.titClick(s)}}},[t._v("\n                "+t._s(e)+"\n            ")])})),0)])],1)},c=[],l=s("a7ac"),u={name:"DetialNavBar",components:{NavBar:l["a"]},data:function(){return{titles:["商品","参数","评论","推荐"],currentIndex:0}},methods:{titClick:function(t){this.currentIndex=t,this.$emit("titClick",t)},backClick:function(){this.$router.back()}}},d=u,f=(s("8716"),s("2877")),m=Object(f["a"])(d,r,c,!1,null,"bb89f244",null),h=m.exports;s("7f7f");function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var p=s("1bab");function b(t){return Object(p["a"])({url:"/detail",params:{iid:t}})}function g(){return Object(p["a"])({url:"/recommend"})}var A=function t(e,s,i){v(this,t),this.title=e.title,this.desc=e.desc,this.newPrice=e.price,this.oldPrice=e.oldPrice,this.discount=e.discountDesc,this.columns=s,this.services=i,this.realPrice=e.lowNowPrice},C=function t(e){v(this,t),this.logo=e.shopLogo,this.name=e.name,this.fans=e.cFans,this.sells=e.cSells,this.score=e.score,this.goodsCount=e.cGoods},I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("swiper",{staticClass:"swiper-ooo"},t._l(t.topImages,(function(t){return s("swiper-item",{key:t},[s("img",{attrs:{src:t,alt:""}})])})),1)},_=[],y=s("dc2c"),D={name:"DetialSwiper",props:{topImages:{type:Array,default:function(){return[]}}},components:{Swiper:y["a"],SwiperItem:y["b"]}},w=D,T=(s("2a67"),Object(f["a"])(w,I,_,!1,null,"296af194",null)),k=T.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.goods).length?s("div",{staticClass:"base-info"},[s("div",{staticClass:"info-title"},[t._v(t._s(t.goods.title))]),s("div",{staticClass:"info-price"},[s("span",{staticClass:"n-price"},[t._v(t._s(t.goods.newPrice))]),s("span",{staticClass:"o-price"},[t._v(t._s(t.goods.oldPrice))]),t.goods.discount?s("span",{staticClass:"discount"},[t._v(t._s(t.goods.discount))]):t._e()]),s("div",{staticClass:"info-other"},[s("span",[t._v(t._s(t.goods.columns[0]))]),s("span",[t._v(t._s(t.goods.columns[1]))]),s("span",[t._v(t._s(t.goods.services[t.goods.services.length-1].name))])]),s("div",{staticClass:"info-service"},t._l(t.goods.services.length-1,(function(e){return s("span",{key:e,staticClass:"info-service-item"},[s("img",{attrs:{src:t.goods.services[e-1].icon,alt:""}}),s("span",[t._v(t._s(t.goods.services[e-1].name))])])})),0)]):t._e()},P=[],x={name:"DetialBaseInfo",props:{goods:{type:Object,default:function(){return{}}}}},j=x,S=(s("7dac"),Object(f["a"])(j,O,P,!1,null,"d7460c10",null)),L=S.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shop-info"},[s("div",{staticClass:"shop-top"},[s("img",{attrs:{src:t.shop.logo,alt:""}}),s("span",{staticClass:"title"},[t._v(t._s(t.shop.name))])]),s("div",{staticClass:"shop-middle"},[s("div",{staticClass:"shop-middle-item shop-middle-left"},[s("div",{staticClass:"info-sells"},[s("div",{staticClass:"sells-count"},[t._v("\n                    "+t._s(t._f("sellCountFilter")(t.shop.sells))+"\n                ")]),s("div",{staticClass:"sells-text"},[t._v("总销量")])]),s("div",{staticClass:"info-goods"},[s("div",{staticClass:"goods-count"},[t._v("\n                    "+t._s(t.shop.goodsCount)+"\n                ")]),s("div",{staticClass:"goods-text"},[t._v("全部宝贝")])])]),s("div",{staticClass:"shop-middle-item shop-middle-right"},[s("table",t._l(t.shop.score,(function(e,i){return s("tr",{key:i},[s("td",[t._v(t._s(e.name))]),s("td",{staticClass:"score",class:{"score-better":e.isBetter}},[t._v(t._s(e.score))]),s("td",{staticClass:"better",class:{"better-more":e.isBetter}},[s("span",[t._v(t._s(e.isBetter?"高":"低"))])])])})),0)])]),t._m(0)])},z=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shop-bottom"},[s("div",{staticClass:"enter-shop"},[t._v("进店逛逛")])])}],H={name:"DetialShopInfo",props:{shop:{type:Object,default:function(){return{}}}},filters:{sellCountFilter:function(t){return t<1e4?t:(t/1e4).toFixed(1)+"万"}}},W=H,q=(s("d964"),Object(f["a"])(W,E,z,!1,null,"27738bec",null)),B=q.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.detialInfo).length?s("div",{staticClass:"goods-info"},[s("div",{staticClass:"info-desc clear-fix"},[s("div",{staticClass:"start"}),s("div",{staticClass:"desc"},[t._v(t._s(t.detialInfo.desc))]),s("div",{staticClass:"end"})]),t._l(t.detialInfo.detailImage,(function(e){return s("div",[s("div",{staticClass:"info-key"},[t._v(t._s(e.key))]),s("div",{staticClass:"info-list"},t._l(e.list,(function(e,i){return s("img",{key:i,attrs:{src:e,alt:""},on:{load:t.imgLoad}})})),0)])}))],2):t._e()},M=[],G={name:"DetialGoodsInfo",props:{detialInfo:{type:Object}},data:function(){return{counter:0,imagesLength:0}},methods:{imgLoad:function(){++this.counter===this.detialInfo.detailImage[0].list.length&&this.$emit("imgLoad")}},wathch:{detialInfo:function(){this.imagesLength=this.detialinfo.detailImage[0].list.length}}},F=G,V=(s("b929"),Object(f["a"])(F,N,M,!1,null,"7b86eb84",null)),X=V.exports,Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.paramInfo).length?s("div",{staticClass:"param-info"},[t._l(t.paramInfo.rule.tables,(function(e){return s("div",[s("table",t._l(e,(function(e,i){return s("tr",{key:i},t._l(e,(function(e,i){return s("td",{key:i},[t._v("\n                    "+t._s(e)+"\n                ")])})),0)})),0)])})),s("table",{staticClass:"info-param"},t._l(t.paramInfo.info.set,(function(e,i){return s("tr",[s("td",{staticClass:"info-param-key"},[t._v(t._s(e.key))]),s("td",{staticClass:"param-value"},[t._v(t._s(e.value))])])})),0),t.paramInfo.info.images?s("div",{staticClass:"info-img"},[s("img",{attrs:{src:t.paramInfo.info.images[0],alt:""}})]):t._e()],2):t._e()},R=[],U={name:"DetialParams",props:{paramInfo:{type:Object,default:function(){return{}}}}},Z=U,J=(s("aacf"),Object(f["a"])(Z,Y,R,!1,null,"229830df",null)),K=J.exports,Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.commentInfo).length?s("div",{staticClass:"comment-info"},[t._m(0),s("div",{staticClass:"info-user"},[s("img",{attrs:{src:t.commentInfo.user.avatar,alt:""}}),s("span",[t._v(t._s(t.commentInfo.user.name))])]),s("div",{staticClass:"info-detail"},[s("p",[t._v(t._s(t.commentInfo.content))]),s("div",{staticClass:"info-other"},[s("span",{staticClass:"date"},[t._v(" "+t._s(t._f("showDate")(t.commentInfo.created)))]),s("span",[t._v(t._s(t.commentInfo.style))])]),s("div",{staticClass:"info-imgs"},t._l(t.commentInfo.images,(function(t,e){return s("img",{key:e,attrs:{src:t,alt:""}})})),0)])]):t._e()},$=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"info-header"},[s("div",{staticClass:"header-title"},[t._v("用户评价")]),s("div",{staticClass:"header-more"},[t._v("\n            更多\n        ")])])}],tt=s("75ba"),et={name:"DetialCommentInfo",props:{commentInfo:{type:Object,default:function(){return{}}}},filters:{showDate:function(t){var e=new Date(1e3*t);return Object(tt["b"])(e,"yyyy-MM-dd")}}},st=et,it=(s("d114"),Object(f["a"])(st,Q,$,!1,null,"55bbb5a8",null)),nt=it.exports,at=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"detial-bottom"},[s("div",{staticClass:"bar-item bar-left"},[t._m(0),t._m(1),s("div",{on:{click:t.souChang}},[s("i",{staticClass:" icon",class:{activesou:t.isSou}}),s("span",{staticClass:"text"},[t._v("收藏")])])]),s("div",{staticClass:"bar-item bar-right"},[s("div",{staticClass:"cart",on:{click:t.addCart}},[t._v("加入购物车")]),s("div",{staticClass:"buy"},[t._v("购买")])])])},ot=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("i",{staticClass:"icon service"}),s("span",{staticClass:"text"},[t._v("客服")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("i",{staticClass:"icon shop"}),s("span",{staticClass:"text"},[t._v("店铺")])])}],rt={name:"DetialBottom",data:function(){return{isSou:!1}},methods:{addCart:function(){this.$emit("addCart")},souChang:function(){this.isSou=!this.isSou}}},ct=rt,lt=(s("4b14"),Object(f["a"])(ct,at,ot,!1,null,"148f7760",null)),ut=lt.exports,dt=s("fdd6"),ft=s("6d71"),mt=s("cc8f"),ht=s("2f62");function vt(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function pt(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?vt(Object(s),!0).forEach((function(e){Object(a["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):vt(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var bt={name:"Detial",mixins:[mt["b"],mt["a"]],data:function(){return{iid:null,topImages:[],goods:{},shop:{},detialInfo:{},itemParams:{},commentInfo:{},recommends:[],themsTopYs:[],getthemsTop:null,currentIndex:0}},components:{DetialNavBar:h,DetialSwiper:k,DetialBaseInfo:L,DetialShopInfo:B,Scroll:o["a"],DetialGoodsInfo:X,DetialParams:K,DetialCommentInfo:nt,GoodsList:ft["a"],DetialBottom:ut,BackTop:dt["a"]},methods:pt(pt({},Object(ht["b"])(["appCart"])),{},{imgLoad:function(){this.refresh(),this.getthemsTop()},titClick:function(t){this.$refs.scroll.scrollTo(0,-this.themsTopYs[t],300)},detialScroll:function(t){t.y<-1e3?this.isShowBackTop=!0:this.isShowBackTop=!1;for(var e=-t.y,s=0;s<this.themsTopYs.length-1;s++)this.currentIndex!==s&&e>=this.themsTopYs[s]&&e<this.themsTopYs[s+1]&&(this.currentIndex=s,this.$refs.nav.currentIndex=this.currentIndex)},addCart:function(){var t=this,e={};e.image=this.topImages[0],e.title=this.goods.title,e.desc=this.goods.desc,e.price=this.goods.realPrice,e.iid=this.iid,this.appCart(e).then((function(e){t.$toast.show(e)}))}}),created:function(){var t=this;this.iid=this.$route.params.iid,b(this.iid).then((function(e){var s=e.result;t.topImages=s.itemInfo.topImages,t.goods=new A(s.itemInfo,s.columns,s.shopInfo.services),t.shop=new C(s.shopInfo),t.detialInfo=s.detailInfo,t.itemParams=s.itemParams,0!==s.rate.cRate&&(t.commentInfo=s.rate.list[0])})),this.getthemsTop=Object(tt["a"])((function(){t.themsTopYs=[],t.themsTopYs.push(0),t.themsTopYs.push(t.$refs.params.$el.offsetTop),t.themsTopYs.push(t.$refs.comment.$el.offsetTop),t.themsTopYs.push(t.$refs.list.$el.offsetTop),t.themsTopYs.push(Number.MAX_VALUE)}),100),g().then((function(e){t.recommends=e.data.list}))},mounted:function(){},destroyed:function(){this.$bus.$off("loadOver",this.itemImagload)}},gt=bt,At=(s("ce79"),Object(f["a"])(gt,i,n,!1,null,"1fe8c438",null));e["default"]=At.exports},"456d":function(t,e,s){var i=s("4bf8"),n=s("0d58");s("5eda")("keys",(function(){return function(t){return n(i(t))}}))},4677:function(t,e,s){},"4b14":function(t,e,s){"use strict";var i=s("6a31"),n=s.n(i);n.a},"5a9c":function(t,e,s){},"5eda":function(t,e,s){var i=s("5ca1"),n=s("8378"),a=s("79e5");t.exports=function(t,e){var s=(n.Object||{})[t]||Object[t],o={};o[t]=e(s),i(i.S+i.F*a((function(){s(1)})),"Object",o)}},"60af":function(t,e,s){},"684a":function(t,e){t.exports="data:image/png;base64,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"},"6a31":function(t,e,s){},"6d71":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"goods"},t._l(t.goods,(function(t){return s("goods-list-item",{key:t.id,attrs:{"goods-item":t}})})),1)},n=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"goods-item",on:{click:t.itemClick}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.showImage,expression:"showImage"}],attrs:{alt:""},on:{load:t.loadOver}}),s("div",{staticClass:"goods-info"},[s("p",[t._v(t._s(t.goodsItem.title))]),s("span",{staticClass:"price"},[t._v(t._s(t.goodsItem.price))]),s("span",{staticClass:"collect"},[t._v(t._s(t.goodsItem.cfav))])])])},o=[],r={name:"GoodsListItem",props:{goodsItem:{type:Object,data:function(){return{}}}},computed:{showImage:function(){return this.goodsItem.image||this.goodsItem.show.img}},methods:{loadOver:function(){this.$bus.$emit("loadOver")},itemClick:function(){this.$router.push("/detial/"+this.goodsItem.iid)}}},c=r,l=(s("d48b"),s("2877")),u=Object(l["a"])(c,a,o,!1,null,"2fc22c59",null),d=u.exports,f={name:"GoodsList",props:{goods:{type:Array,data:function(){return[]}}},components:{GoodsListItem:d}},m=f,h=(s("ba74"),Object(l["a"])(m,i,n,!1,null,"a812f680",null));e["a"]=h.exports},"6f9a":function(t,e,s){"use strict";var i=s("c1c3"),n=s.n(i);n.a},"7a74":function(t,e,s){t.exports=s.p+"img/back.26df9036.svg"},"7af0":function(t,e,s){"use strict";var i=s("60af"),n=s.n(i);n.a},"7dac":function(t,e,s){"use strict";var i=s("bfc9"),n=s.n(i);n.a},"7f7f":function(t,e,s){var i=s("86cc").f,n=Function.prototype,a=/^\s*function ([^ (]*)/,o="name";o in n||s("9e1e")&&i(n,o,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},8716:function(t,e,s){"use strict";var i=s("12e0"),n=s.n(i);n.a},"8e6e":function(t,e,s){var i=s("5ca1"),n=s("990b"),a=s("6821"),o=s("11e9"),r=s("f1ae");i(i.S,"Object",{getOwnPropertyDescriptors:function(t){var e,s,i=a(t),c=o.f,l=n(i),u={},d=0;while(l.length>d)s=c(i,e=l[d++]),void 0!==s&&r(u,e,s);return u}})},"953c":function(t,e,s){"use strict";var i=s("0d2b"),n=s.n(i);n.a},"990b":function(t,e,s){var i=s("9093"),n=s("2621"),a=s("cb7c"),o=s("7726").Reflect;t.exports=o&&o.ownKeys||function(t){var e=i.f(a(t)),s=n.f;return s?e.concat(s(t)):e}},a276:function(t,e,s){},aacf:function(t,e,s){"use strict";var i=s("4677"),n=s.n(i);n.a},ac6a:function(t,e,s){for(var i=s("cadf"),n=s("0d58"),a=s("2aba"),o=s("7726"),r=s("32e9"),c=s("84f2"),l=s("2b4c"),u=l("iterator"),d=l("toStringTag"),f=c.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=n(m),v=0;v<h.length;v++){var p,b=h[v],g=m[b],A=o[b],C=A&&A.prototype;if(C&&(C[u]||r(C,u,f),C[d]||r(C,d,b),c[b]=f,g))for(p in i)C[p]||a(C,p,i[p],!0)}},b58c:function(t,e,s){},b929:function(t,e,s){"use strict";var i=s("bf1f"),n=s.n(i);n.a},ba74:function(t,e,s){"use strict";var i=s("0ab0"),n=s.n(i);n.a},bf1f:function(t,e,s){},bfc9:function(t,e,s){},c1c3:function(t,e,s){},ce79:function(t,e,s){"use strict";var i=s("1781"),n=s.n(i);n.a},d114:function(t,e,s){"use strict";var i=s("5a9c"),n=s.n(i);n.a},d48b:function(t,e,s){"use strict";var i=s("a276"),n=s.n(i);n.a},d964:function(t,e,s){"use strict";var i=s("b58c"),n=s.n(i);n.a},dc2c:function(t,e,s){"use strict";s.d(e,"a",(function(){return l})),s.d(e,"b",(function(){return v}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"hy-swiper"}},[s("div",{staticClass:"swiper",on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},[t._t("default")],2),t._t("indicator"),s("div",{staticClass:"indicator"},[t.showIndicator&&t.slideCount>1?t._t("indicator",t._l(t.slideCount,(function(e,i){return s("div",{key:i,staticClass:"indi-item",class:{active:i===t.currentIndex-1}})}))):t._e()],2)],2)},n=[],a=(s("c5f6"),{name:"Swiper",props:{interval:{type:Number,default:3e3},animDuration:{type:Number,default:300},moveRatio:{type:Number,default:.25},showIndicator:{type:Boolean,default:!0}},data:function(){return{slideCount:0,totalWidth:0,swiperStyle:{},currentIndex:1,scrolling:!1}},mounted:function(){var t=this;setTimeout((function(){t.handleDom(),t.startTimer()}),3e3)},methods:{startTimer:function(){var t=this;this.playTimer=window.setInterval((function(){t.currentIndex++,t.scrollContent(-t.currentIndex*t.totalWidth)}),this.interval)},stopTimer:function(){window.clearInterval(this.playTimer)},scrollContent:function(t){this.scrolling=!0,this.swiperStyle.transition="transform "+this.animDuration+"ms",this.setTransform(t),this.checkPosition(),this.scrolling=!1},checkPosition:function(){var t=this;window.setTimeout((function(){t.swiperStyle.transition="0ms",t.currentIndex>=t.slideCount+1?(t.currentIndex=1,t.setTransform(-t.currentIndex*t.totalWidth)):t.currentIndex<=0&&(t.currentIndex=t.slideCount,t.setTransform(-t.currentIndex*t.totalWidth)),t.$emit("transitionEnd",t.currentIndex-1)}),this.animDuration)},setTransform:function(t){this.swiperStyle.transform="translate3d(".concat(t,"px, 0, 0)"),this.swiperStyle["-webkit-transform"]="translate3d(".concat(t,"px), 0, 0"),this.swiperStyle["-ms-transform"]="translate3d(".concat(t,"px), 0, 0")},handleDom:function(){var t=document.querySelector(".swiper"),e=t.querySelectorAll(".slide");if(this.slideCount=e.length,this.slideCount>1){var s=e[0].cloneNode(!0),i=e[this.slideCount-1].cloneNode(!0);t.insertBefore(i,e[0]),t.appendChild(s),this.totalWidth=t.offsetWidth,this.swiperStyle=t.style}this.setTransform(-this.totalWidth)},touchStart:function(t){this.scrolling||(this.stopTimer(),this.startX=t.touches[0].pageX)},touchMove:function(t){this.currentX=t.touches[0].pageX,this.distance=this.currentX-this.startX;var e=-this.currentIndex*this.totalWidth,s=this.distance+e;this.setTransform(s)},touchEnd:function(t){var e=Math.abs(this.distance);0!==this.distance&&(this.distance>0&&e>this.totalWidth*this.moveRatio?this.currentIndex--:this.distance<0&&e>this.totalWidth*this.moveRatio&&this.currentIndex++,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer())},previous:function(){this.changeItem(-1)},next:function(){this.changeItem(1)},changeItem:function(t){this.stopTimer(),this.currentIndex+=t,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer()}}}),o=a,r=(s("6f9a"),s("2877")),c=Object(r["a"])(o,i,n,!1,null,"6e772c13",null),l=c.exports,u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slide"},[t._t("default")],2)},d=[],f={name:"Slide"},m=f,h=(s("7af0"),Object(r["a"])(m,u,d,!1,null,"c1be74b4",null)),v=h.exports},f1ae:function(t,e,s){"use strict";var i=s("86cc"),n=s("4630");t.exports=function(t,e,s){e in t?i.f(t,e,n(0,s)):t[e]=s}},fdd6:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"back-top"},[i("img",{attrs:{src:s("684a"),alt:""}})])}],a={name:"BackTop"},o=a,r=(s("953c"),s("2877")),c=Object(r["a"])(o,i,n,!1,null,"407f3988",null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-073df9b0.45830bfe.js.map
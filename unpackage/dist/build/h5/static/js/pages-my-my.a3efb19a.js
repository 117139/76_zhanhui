(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-my"],{"13c3":function(t,a,i){var e=i("4a4b");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("98367312",e,!0,{sourceMap:!1,shadowMode:!1})},"1a05":function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return s})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"minh100"},[e("v-uni-view",{staticClass:"my_box dis_flex aic  ju_c"},[t.hasLogin?e("v-uni-view",{staticClass:"my_box1 dis_flex aic ju_c"},[e("v-uni-image",{staticClass:"user_tximg",attrs:{src:t.getimg(t.loginDatas.avatarurl),mode:"aspectFill"}}),e("v-uni-view",{staticClass:"user_name flex_1"},[t._v(t._s(t.loginDatas.nickname))]),e("v-uni-text",{staticClass:"iconfont icon-next-m go_my"})],1):e("v-uni-view",{staticClass:"user_name"},[t._v("登录/注册")])],1),e("v-uni-view",{staticClass:"my_list"},[e("v-uni-image",{staticClass:"my_list_sj",attrs:{src:i("fb05"),mode:"widthFix"}}),e("v-uni-view",{staticClass:"my_li dis_flex ju_b aic"},[e("v-uni-view",[t._v("我的订单")]),e("v-uni-text",{staticClass:"iconfont icon-next-m"})],1),e("v-uni-view",{staticClass:"my_li dis_flex ju_b aic"},[e("v-uni-view",[t._v("我的评价")]),e("v-uni-text",{staticClass:"iconfont icon-next-m"})],1),e("v-uni-view",{staticClass:"my_li dis_flex ju_b aic"},[e("v-uni-view",[t._v("关于我们")]),e("v-uni-text",{staticClass:"iconfont icon-next-m"})],1)],1)],1)},s=[]},"1de5":function(t,a,i){"use strict";t.exports=function(t,a){return a||(a={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),a.hash&&(t+=a.hash),/["'() \t\n]/.test(t)||a.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"4a47":function(t,a,i){"use strict";i.r(a);var e=i("1a05"),n=i("d7b9");for(var s in n)"default"!==s&&function(t){i.d(a,t,(function(){return n[t]}))}(s);i("fa0f");var c,o=i("f0c5"),u=Object(o["a"])(n["default"],e["b"],e["c"],!1,null,"c96470fc",null,!1,e["a"],c);a["default"]=u.exports},"4a4b":function(t,a,i){var e=i("24fb"),n=i("1de5"),s=i("abeb");a=e(!1);var c=n(s);a.push([t.i,".minh100[data-v-c96470fc]{min-height:calc(100vh - 50px - env(safe-area-inset-bottom));background:#eee}.my_box[data-v-c96470fc]{width:100%;height:%?375?%;background-image:url("+c+");background-repeat:no-repeat;background-size:100% %?375?%;padding:0 %?30?%}.my_box1[data-v-c96470fc]{width:100%}.user_tximg[data-v-c96470fc]{width:%?118?%;height:%?118?%;background:#fff;border:%?2?% solid #cbb180;box-shadow:%?0?% %?0?% %?12?% %?0?% rgba(188,157,103,.2);border-radius:50%;-webkit-box-flex:0;-webkit-flex:none;flex:none;margin-right:%?15?%}.user_name[data-v-c96470fc]{font-size:%?36?%;color:#fff}.go_my[data-v-c96470fc]{color:#fff;font-size:%?30?%}.my_list[data-v-c96470fc]{width:100%;background:#fff;padding:0 %?30?%}.my_list_sj[data-v-c96470fc]{width:100%;margin-bottom:%?20?%}.my_li[data-v-c96470fc]{width:100%;font-size:%?30?%;color:#333;height:%?100?%}.my_li .icon-next-m[data-v-c96470fc]{color:#999;font-size:%?16?%}.my_li+.my_li[data-v-c96470fc]{border-top:1px solid #eee}",""]),t.exports=a},"6b66":function(t,a,i){"use strict";var e=i("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(i("5530")),s=(e(i("e143")),e(i("bdd1"))),c=i("2f62"),o={data:function(){return{nickname:"",avatar:"",status:0}},computed:(0,n.default)({},(0,c.mapState)(["hasLogin","userName","loginDatas"])),onLoad:function(){},methods:{getimg:function(t){return s.default.getimg(t)}}};a.default=o},abeb:function(t,a,i){t.exports=i.p+"static/img/my_bg_01.7de15716.jpg"},d7b9:function(t,a,i){"use strict";i.r(a);var e=i("6b66"),n=i.n(e);for(var s in e)"default"!==s&&function(t){i.d(a,t,(function(){return e[t]}))}(s);a["default"]=n.a},fa0f:function(t,a,i){"use strict";var e=i("13c3"),n=i.n(e);n.a},fb05:function(t,a,i){t.exports=i.p+"static/img/cwsj_03.ac3a0397.png"}}]);
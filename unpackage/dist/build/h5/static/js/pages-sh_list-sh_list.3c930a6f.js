(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-sh_list-sh_list"],{"336b":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'.minh100[data-v-5e448e54]{\nmin-height:calc(100vh - 50px);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\npadding-top:%?100?%}.list_tit[data-v-5e448e54]{width:100%;padding:0 %?25?%;height:%?100?%;position:fixed;top:0;z-index:100;background:#fff}.list_tit_li[data-v-5e448e54]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;font-size:%?30?%;font-family:PingFang SC;font-weight:500;color:#999;height:%?100?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;\n\t/* margin:0 15upx; */min-width:%?175?%}.list_tit_li.cur[data-v-5e448e54]{color:#000;position:relative}.list_tit_li.cur[data-v-5e448e54]::before{width:%?36?%;height:%?8?%;background:#fe8018;-webkit-border-radius:%?4?%;border-radius:%?4?%;position:absolute;content:"";bottom:%?8?%;left:50%;margin-left:%?-18?%}.scroll_list1[data-v-5e448e54]{position:absolute;top:%?100?%;left:0;right:0;bottom:0;\n\t/* height: calc(100vh - 100upx); */-webkit-box-flex:1;-webkit-flex:1;flex:1}.fl_list[data-v-5e448e54]{width:100%\n\t/* padding: 15upx; */\n\t/* display: flex;\n\tflex-wrap: wrap; */}.pthz_li_padd[data-v-5e448e54]{width:100%;padding:%?30?%}.pthz_li_padd+.pthz_li_padd[data-v-5e448e54]{border-top:%?12?% solid #f6f6f6}',""]),t.exports=e},"55f1":function(t,e,n){"use strict";var i=n("d589"),a=n.n(i);a.a},"601c":function(t,e,n){"use strict";var i=n("4ea4");n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,o=i(n("5530")),s=(i(n("e143")),i(n("bdd1"))),l=n("2f62"),c={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,htmlReset:-1,tabs:[],fw_cur:0,datas:[],page:1,size:15,data_last:!1,triggered:!0,show_num:0,ua:"",isWeixin:""}},computed:(0,o.default)((0,o.default)({},(0,l.mapState)(["hasLogin","userName","loginDatas"])),{},{style:function(){var t=this.StatusBar,e=this.CustomBar,n="height:".concat(e,"px;padding-top:").concat(t,"px;");return n},style1:function(){var t=this.StatusBar,e="top:".concat(t,"px;");return e}}),onPageScroll:function(t){console.log(t),this.PageScroll=t.scrollTop},onPullDownRefresh:function(){a.onRetry()},onReachBottom:function(){a.getdata()},onLoad:function(t){a=this,a.htmlReset=0,uni.getStorageSync("sh_type_id")&&(a.fw_cur=uni.getStorageSync("sh_type_id")),a.getcate()},onShow:function(){if(a.show_num>0){uni.getStorageSync("sh_type_id");a.getcate()}a.show_num++},onUnload:function(){uni.removeStorageSync("type_id")},watch:{hasLogin:function(){a.hasLogin&&a.onRetry()}},methods:(0,o.default)((0,o.default)({},(0,l.mapMutations)(["login","logindata","logout","setplatform"])),{},{call:function(t){s.default.call(t)},gettime:function(t){return s.default.gettime(t)},onRetry:function(){a.datas=[],a.data_last=!1,a.page=1,a.btn_kg=0,a.getdata()},fwcur_fuc:function(t){this.fw_cur=t,uni.setStorageSync("sh_type_id",t),this.onRetry()},onPulling:function(t){console.log("onpulling",t)},onRefresh:function(){var t=this,e=this;this._freshing||(this._freshing=!0,e.onRetry(),setTimeout((function(){t.triggered=!1,t._freshing=!1}),100))},onRestore:function(){this.triggered="restore",console.log("onRestore")},onAbort:function(){console.log("onAbort")},getcate:function(){var t={},e="/shops/get_shop_category";s.default.P_get(e,t).then((function(t){if(a.btn_kg=0,console.log(t),1==t.code){var e=t.data;if(console.log(typeof e),"string"==typeof e&&(e=JSON.parse(e)),a.tabs=e,0==a.fw_cur&&(a.fw_cur=e[0].id),a.onRetry(),e.length>0){var n=JSON.stringify(e);uni.setStorageSync("cate_list",n)}console.log(e)}else a.htmlReset=1,t.msg?uni.showToast({icon:"none",title:t.msg}):uni.showToast({icon:"none",title:"获取失败"})})).catch((function(t){a.btn_kg=0,a.htmlReset=1,console.log(t),uni.showToast({icon:"none",title:"获取数据失败"})}))},getdata:function(){console.log(a.$store.state.loginDatas);var t={token:a.$store.state.loginDatas.userToken||"",order_type:uni.getStorageSync("latitude")?1:2,lat:uni.getStorageSync("latitude")||"",lng:uni.getStorageSync("longitude")||"",page:a.page,limit:a.size,shop_category_id:a.fw_cur};if(1!=a.btn_kg){a.btn_kg=1;var e="/shops/get_shop_list";uni.showLoading({title:"正在获取数据",mask:!0});var n=a.page;s.default.P_get(e,t).then((function(t){if(a.btn_kg=0,console.log(t),1==t.code){var e=t.data;if(console.log(typeof e),"string"==typeof e&&(e=JSON.parse(e)),1==n)a.datas=e.data;else{if(0==e.data.length)return void(a.data_last=!0);a.data_last=!1,a.datas=a.datas.concat(e.data)}a.page++,console.log(e),a.htmlReset=0}else a.htmlReset=1,t.msg?uni.showToast({icon:"none",title:t.msg}):uni.showToast({icon:"none",title:"操作失败"})})).catch((function(t){a.btn_kg=0,a.htmlReset=1,console.log(t),uni.showToast({icon:"none",title:"获取数据失败"})}))}},jump:function(t){var e=this;1!=e.btn_kg&&(e.btn_kg=1,setTimeout((function(){e.btn_kg=0}),1e3),s.default.jump(t))},getimg:function(t){return s.default.getimg(t)}})};e.default=c},cfec:function(t,e,n){"use strict";n.r(e);var i=n("601c"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},d589:function(t,e,n){var i=n("336b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("6bda3433",i,!0,{sourceMap:!1,shadowMode:!1})},e15b:function(t,e,n){"use strict";n.r(e);var i=n("ed42"),a=n("cfec");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("55f1");var s,l=n("f0c5"),c=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"5e448e54",null,!1,i["a"],s);e["default"]=c.exports},ed42:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"minh100"},[1==t.htmlReset?i("v-uni-view",{staticClass:"zanwu",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onRetry.apply(void 0,arguments)}}},[t._v("请求失败，请点击重试")]):t._e(),-1==t.htmlReset?i("v-uni-view",{staticClass:"loading_def"},[i("v-uni-image",{staticClass:"loading_def_img",attrs:{src:n("3d91"),mode:""}})],1):t._e(),0==t.htmlReset?i("v-uni-view",[i("v-uni-scroll-view",{staticClass:"scroll_x list_tit",attrs:{"scroll-x":"true"}},t._l(t.tabs,(function(e,n){return i("v-uni-view",{staticClass:"list_tit_li",class:t.fw_cur==e.id?" cur":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.fwcur_fuc(e.id)}}},[t._v(t._s(e.category_name))])})),1),i("v-uni-view",{staticClass:"fl_list"},[t._l(t.datas,(function(t,e){return i("v-uni-view",{staticClass:"pthz_li_padd"},[i("shLi",{attrs:{datas:t}})],1)})),0==t.datas.length?i("v-uni-view",{staticClass:"zanwu"},[t._v("暂无数据")]):t._e(),t.data_last?i("v-uni-view",{staticClass:"data_last"},[t._v("我可是有底线的哟~")]):t._e()],2)],1):t._e()],1)},o=[]}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my_al_fabu-my_al_fabu"],{"08b2":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"minh100"},[i("v-uni-view",{staticClass:"box_box"},[i("v-uni-view",{staticClass:"box_main"},[i("v-uni-view",{staticClass:"box_tit"},[t._v("案例标题")]),i("v-uni-input",{staticClass:"box_int",attrs:{type:"text",placeholder:"请输入案例标题"},model:{value:t.datas.title,callback:function(e){t.$set(t.datas,"title",e)},expression:"datas.title"}}),t.array?i("v-uni-view",{staticClass:"box_tit"},[t._v("服务类型")]):t._e(),t.array?i("v-uni-picker",{attrs:{"data-type":"1",value:t.fw_index,range:t.array,"range-key":"category_name"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPickerChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"box_int ju_b"},[i("v-uni-view",[t._v(t._s(t.array[t.fw_index]?t.array[t.fw_index].category_name:"请选择服务类型"))]),i("v-uni-text",{staticClass:"iconfont icon-next-m"})],1)],1):t._e(),i("v-uni-view",{staticClass:"box_tit"},[t._v("案例内容")]),i("v-uni-textarea",{staticClass:"box_content",attrs:{placeholder:"请输入案例内容",maxlength:"-1"},model:{value:t.datas.content,callback:function(e){t.$set(t.datas,"content",e)},expression:"datas.content"}}),i("v-uni-view",{staticClass:"box_tit"},[t._v("案例照片")]),i("v-uni-view",{staticClass:"pz_imgs"},[t._l(t.sj_img2,(function(e,a){return t.sj_img2.length>0?i("v-uni-view",{staticClass:"pz_img"},[i("v-uni-image",{staticClass:"img_del",attrs:{src:"/static/images/img_del.png",mode:"aspectFill","data-idx":a,"data-type":"2"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.imgdel.apply(void 0,arguments)}}}),i("v-uni-image",{attrs:{mode:"aspectFill",src:t.getimg(e),"data-src":t.getimg(e)},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pveimg.apply(void 0,arguments)}}})],1):t._e()})),t.sj_img2.length<9?i("v-uni-view",{staticClass:"pz_img"},[i("v-uni-image",{attrs:{src:"/static/images/upimg.png",mode:"aspectFit","data-type":"2"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.upimg.apply(void 0,arguments)}}})],1):t._e()],2),i("v-uni-view",{staticClass:"sub_btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sub.apply(void 0,arguments)}}},[t._v("发布")])],1)],1)],1)},o=[]},1674:function(t,e,i){"use strict";i.r(e);var a=i("b2c5"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},2731:function(t,e,i){"use strict";var a=i("82d4"),n=i.n(a);n.a},"6b7b":function(t,e,i){"use strict";i.r(e);var a=i("08b2"),n=i("1674");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("2731");var s,d=i("f0c5"),l=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"56591bb6",null,!1,a["a"],s);e["default"]=l.exports},"82d4":function(t,e,i){var a=i("c0a3");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("6fad6db4",a,!0,{sourceMap:!1,shadowMode:!1})},b2c5:function(t,e,i){"use strict";var a=i("4ea4");i("a15b"),i("a434"),i("ac1f"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,o=a(i("5530")),s=a(i("e143")),d=a(i("bdd1")),l=(a(i("00b8")),i("2f62")),c={data:function(){return{fw_list:[],sj_img:[],sj_img2:[],array:[],fw_index:0,region_id:[1,35,36],region:["北京市","北京","东城区"],areaJson:{},datas:{title:"",category_id:"",content:"",thumbnail_img:""}}},computed:(0,o.default)({},(0,l.mapState)(["hasLogin","userName","loginDatas"])),onLoad:function(t){n=this,t.id?(uni.setNavigationBarTitle({title:"编辑案例"}),n.id=t.id,n.getdata()):n.getcate()},methods:(0,o.default)((0,o.default)({},(0,l.mapMutations)(["login","logindata","logout","setplatform"])),{},{getLocation_fuc:function(){console.log("chooseLocation"),wx.chooseLocation({success:function(t){console.log(t),s.default.set(n.datas,"address",t.address),s.default.set(n.datas,"lngs",t.longitude),s.default.set(n.datas,"lats",t.latitude)},fail:function(t){console.log(t);var e={address:"北京市海淀区万柳东路31号",distance:0,errMsg:"chooseLocation:ok",latitude:39.962044,longitude:116.301727,name:"万柳怡水园"};s.default.set(n.datas,"address",e.address),s.default.set(n.datas,"lngs",e.longitude),s.default.set(n.datas,"lats",e.latitude)}})},bindPickerChange:function(t){console.log(t.currentTarget.dataset.type);var e=t.currentTarget.dataset;1==e.type&&(n.fw_index=t.detail.value,s.default.set(n.datas,"category_id",n.array[n.fw_index].id))},getcate:function(){var t={},e="/content/get_shop_case_category";d.default.P_post(e,t).then((function(t){if(n.btn_kg=0,console.log(t),1==t.code){var e=t.data;if(console.log(typeof e),"string"==typeof e&&(e=JSON.parse(e)),n.array=e,n.datas.category_id){for(var i=0;i<e.length;i++)e[i].id==n.datas.category_id&&(n.fw_index=i);console.log(n.fw_index),console.log(n.array[n.fw_index])}else s.default.set(n.datas,"category_id",n.array[0].id);console.log(e)}else n.htmlReset=1,t.msg?uni.showToast({icon:"none",title:t.msg}):uni.showToast({icon:"none",title:"获取失败"})})).catch((function(t){n.btn_kg=0,n.htmlReset=1,console.log(t),uni.showToast({icon:"none",title:"获取数据失败"})}))},getdata:function(){var t="/content/get_update_info",e={id:n.id};uni.showLoading({title:"正在获取数据"}),d.default.P_post(t,e).then((function(t){if(n.btn_kg=0,console.log(t),1==t.code){var e=t.data;console.log(typeof e),"string"==typeof e&&(e=JSON.parse(e)),n.datas={id:e.id,title:e.title,category_id:e.category_id,content:e.content,thumbnail_img:e.thumbnail_img},n.sj_img2=n.datas.thumbnail_img.split(","),n.getcate()}else t.msg?uni.showToast({icon:"none",title:t.msg}):uni.showToast({icon:"none",title:"操作失败"})})).catch((function(t){n.btn_kg=0,console.log(t),uni.showToast({icon:"none",title:"获取数据失败"})}))},sub:function(){var t="/content/add_case";if(n.id&&(t="/content/edit_content"),1!=n.btn_kg){n.btn_kg=1;var e=n.datas;uni.showLoading({title:"正在提交"}),d.default.P_post(t,e).then((function(t){if(n.btn_kg=0,console.log(t),1==t.code){var e=t.data;console.log(typeof e),"string"==typeof e&&(e=JSON.parse(e)),uni.showToast({icon:"none",title:"提交成功"}),setTimeout((function(){uni.navigateBack({delta:1})}),1e3)}else t.msg?uni.showToast({icon:"none",title:t.msg}):uni.showToast({icon:"none",title:"操作失败"})})).catch((function(t){n.btn_kg=0,console.log(t),uni.showToast({icon:"none",title:"获取数据失败"})}))}},upimg:function(t){var e=this,i=t.currentTarget.dataset,a=1-e.sj_img.length;2==i.type&&(a=9-e.sj_img2.length),uni.showActionSheet({itemList:["拍照","相册"],success:function(t){console.log("选中了第"+(t.tapIndex+1)+"个按钮");var n=["camera","album"];n=0==t.tapIndex?["camera"]:["album"],uni.chooseImage({count:a,sizeType:["original","compressed"],sourceType:n,success:function(t){console.log(t);var a=t.tempFilePaths;e.upimg1(a,i.type,0)}})},fail:function(t){console.log(t.errMsg)}})},upimg1:function(t,e,i){var a=this;d.default.wx_upload(t[i]).then((function(n){if(a.btn_kg=0,console.log(n),1==n.code){var o,d=n.data.url;if(console.log(i),2==e){a.sj_img2.push(d),o=a.sj_img2.length;var l=a.sj_img2.join(",");s.default.set(a.datas,"thumbnail_img",l),o<9&&i<t.length-1&&(i++,a.upimg1(t,e,i))}else a.sj_img.push(d),o=a.sj_img.length,s.default.set(a.datas,"logo",d),o<1&&i<t.length-1&&(i++,a.upimg1(t,e,i))}else n.msg?uni.showToast({icon:"none",title:n.msg}):uni.showToast({icon:"none",title:"上传失败"})})).catch((function(t){a.btn_kg=0,console.log(t),uni.showToast({icon:"none",title:"操作失败"})}))},getimg:function(t){return d.default.getimg(t)},pveimg:function(t){d.default.pveimg(t)},imgdel:function(t){var e=this;console.log(t.currentTarget.dataset.idx);var i=t.currentTarget.dataset;uni.showModal({title:"提示",content:"确定要删除这张图片吗",success:function(a){if(a.confirm)if(console.log("用户点击确定",t.currentTarget.dataset.type),2==i.type){e.sj_img2.splice(i.idx,1);var n=e.sj_img2.join(",");e.sj_img2[0];s.default.set(e.datas,"thumbnail_img",n)}else e.sj_img.splice(i.idx,1),s.default.set(e.datas,"logo","");else a.cancel&&console.log("用户点击取消")}})}})};e.default=c},c0a3:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".box_box[data-v-56591bb6]{width:100%;position:relative;padding:%?0?% %?30?% 0}.bpx_bg[data-v-56591bb6]{width:100%;position:absolute;top:0;left:0;z-index:1}.box_main[data-v-56591bb6]{width:100%;background:#fff;-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,.25);box-shadow:0 2px 10px 0 rgba(0,0,0,.25);-webkit-border-radius:4px;border-radius:4px;position:relative;z-index:2;padding:0 %?30?% %?30?%}.box_tit[data-v-56591bb6]{width:100%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-weight:700}.box_int[data-v-56591bb6]{width:100%;height:%?76?%;background:#fff;border:1px solid #dedede;-webkit-border-radius:%?4?%;border-radius:%?4?%;font-size:%?30?%;color:#444;padding:0 %?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.box_int uni-text[data-v-56591bb6]{font-size:%?24?%}.pz_imgs[data-v-56591bb6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap\n\t/* padding-bottom: 30upx;\n\tborder-bottom: 1px solid #eee; */}.pz_img[data-v-56591bb6]{\n\t/* width: 180upx;\n\theight: 140upx; */width:%?174?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;margin-right:%?15?%;\n\t/* margin-bottom: 15upx; */position:relative}.pz_img uni-image[data-v-56591bb6]{\n\t/* width: 180upx;\n\theight: 140upx; */width:%?164?%;height:%?164?%}.pz_img .img_del[data-v-56591bb6]{width:%?30?%;height:%?30?%;\n\t/* background: #FF4B4B; */-webkit-border-radius:%?15?%;border-radius:%?15?%;position:absolute;top:%?-10?%;right:%?-10?%;z-index:10}.box_content[data-v-56591bb6]{width:100%;height:%?248?%;background:#fff;border:1px solid #dedede;-webkit-border-radius:%?4?%;border-radius:%?4?%;padding:%?25?%;font-size:%?30?%;color:#333}.sub_btn[data-v-56591bb6]{margin-top:%?40?%;width:100%;height:%?88?%;background:#fe8018;-webkit-border-radius:%?44?%;border-radius:%?44?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?32?%;color:#fff}",""]),t.exports=e}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my_msg-my_msg"],{"0ff3":function(t,i,e){"use strict";e.r(i);var n=e("cfdb"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},"1da1":function(t,i,e){"use strict";function n(t,i,e,n,a,s,o){try{var r=t[s](o),h=r.value}catch(c){return void e(c)}r.done?i(h):Promise.resolve(h).then(n,a)}function a(t){return function(){var i=this,e=arguments;return new Promise((function(a,s){var o=t.apply(i,e);function r(t){n(o,a,s,r,h,"next",t)}function h(t){n(o,a,s,r,h,"throw",t)}r(void 0)}))}}e("d3b7"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=a},"2a05":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-image",{staticClass:"my-avatar",style:[t.iS],attrs:{src:t.imgSrc.imgSrc},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fSelect.apply(void 0,arguments)}}}),e("v-uni-canvas",{staticClass:"my-canvas",style:{top:t.sT,height:t.csH},attrs:{"canvas-id":"avatar-canvas",id:"avatar-canvas","disable-scroll":"false"}}),e("v-uni-canvas",{staticClass:"oper-canvas",style:{top:t.sT,height:t.csH},attrs:{"canvas-id":"oper-canvas",id:"oper-canvas","disable-scroll":"false"},on:{touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.fStart.apply(void 0,arguments)},touchmove:function(i){arguments[0]=i=t.$handleEvent(i),t.fMove.apply(void 0,arguments)},touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.fEnd.apply(void 0,arguments)}}}),e("v-uni-canvas",{staticClass:"prv-canvas",style:{height:t.csH,top:t.pT},attrs:{"canvas-id":"prv-canvas",id:"prv-canvas","disable-scroll":"false"},on:{touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.fHideImg.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"oper-wrapper",style:{display:t.sD,top:t.tp}},[e("v-uni-view",{staticClass:"oper"},[t.sO?e("v-uni-view",{staticClass:"btn-wrapper"},[e("v-uni-view",{style:{width:t.bW},attrs:{"hover-class":"hover"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fSelect.apply(void 0,arguments)}}},[e("v-uni-text",[t._v("重选")])],1),e("v-uni-view",{style:{width:t.bW},attrs:{"hover-class":"hover"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fClose.apply(void 0,arguments)}}},[e("v-uni-text",[t._v("关闭")])],1),e("v-uni-view",{style:{width:t.bW,display:t.bD},attrs:{"hover-class":"hover"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fRotate.apply(void 0,arguments)}}},[e("v-uni-text",[t._v("旋转")])],1),e("v-uni-view",{style:{width:t.bW},attrs:{"hover-class":"hover"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fPreview.apply(void 0,arguments)}}},[e("v-uni-text",[t._v("预览")])],1),e("v-uni-view",{style:{width:t.bW},attrs:{"hover-class":"hover"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fUpload.apply(void 0,arguments)}}},[e("v-uni-text",[t._v("上传")])],1)],1):e("v-uni-view",{staticClass:"clr-wrapper"},[e("v-uni-slider",{staticClass:"my-slider",attrs:{"block-size":"25",value:"0",min:"-100",max:"100",activeColor:"red",backgroundColor:"green","block-color":"grey","show-value":!0},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.fColorChange.apply(void 0,arguments)}}}),e("v-uni-view",{style:{width:t.bW},attrs:{"hover-class":"hover"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fPrvUpload.apply(void 0,arguments)}}},[e("v-uni-text",[t._v("上传")])],1)],1)],1)],1)],1)},s=[]},"476c":function(t,i,e){"use strict";var n=e("4ea4");e("99af"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a,s=n(e("5530")),o=n(e("e143")),r=n(e("ea40")),h=n(e("bdd1")),c=e("2f62"),l={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,htmlReset:-1,data_last:!1,loginDatas_data:{}}},computed:(0,s.default)((0,s.default)({},(0,c.mapState)(["hasLogin","userName","loginDatas"])),{},{style:function(){var t=this.StatusBar,i=this.CustomBar,e="height:".concat(i,"px;padding-top:").concat(t,"px;");return e},style1:function(){var t=this.StatusBar,i="top:".concat(t,"px;");return i}}),onPageScroll:function(t){console.log(t),this.PageScroll=t.scrollTop},onPullDownRefresh:function(){uni.stopPullDownRefresh()},components:{avatar:r.default},onLoad:function(){a=this,a.htmlReset=0,this.loginDatas_data=JSON.parse(JSON.stringify(a.loginDatas))},methods:(0,s.default)((0,s.default)({},(0,c.mapMutations)(["login","logindata","logout","setplatform"])),{},{onRetry:function(){a.htmlReset=0},sub:function(){if(this.loginDatas_data.nickname){uni.showToast({icon:"none",title:"操作成功"});var t="/user/update_user_info",i={token:a.loginDatas.userToken||"",avatar:this.loginDatas_data.avatar,nickname:this.loginDatas_data.nickname};1!=this.btn_kg&&(this.btn_kg=1,console.log(i),h.default.P_post(t,i).then((function(t){if(a.btn_kg=0,console.log(t),1==t.code){var i=t.data;console.log(typeof i),"string"==typeof i&&(i=JSON.parse(i)),console.log(t),uni.showToast({icon:"none",title:"操作成功"}),h.default.login_tel("1"),setTimeout((function(){uni.navigateBack({delta:1})}),1e3)}else t.msg?uni.showToast({icon:"none",title:t.msg}):uni.showToast({icon:"none",title:"操作失败"})})).catch((function(t){a.btn_kg=0,console.log(t),uni.showToast({icon:"none",title:"获取数据失败，请检查您的网络连接"})})))}else uni.showToast({icon:"none",title:"请输入您的昵称"})},myUpload:function(t){var i=this,e=t.path;h.default.wx_upload(e).then((function(t){if(i.btn_kg=0,console.log(t),1==t.code){var e=t.data.url;o.default.set(i.loginDatas_data,"avatar",e)}else t.msg?uni.showToast({icon:"none",title:t.msg}):uni.showToast({icon:"none",title:"上传失败"})})).catch((function(t){i.btn_kg=0,console.log(t),uni.showToast({icon:"none",title:"操作失败"})}))},getbanner:function(){var t=this,i={},e="/entrance";uni.showLoading({title:"正在获取数据"}),h.default.P_get(e,i).then((function(i){if(t.btn_kg=0,console.log(i),1==i.code){var e=i.data;console.log(typeof e),"string"==typeof e&&(e=JSON.parse(e)),t.banner=e,console.log(e)}else i.msg?uni.showToast({icon:"none",title:i.msg}):uni.showToast({icon:"none",title:"操作失败"})})).catch((function(i){t.btn_kg=0,console.log(i),uni.showToast({icon:"none",title:"获取数据失败"})}))},jump:function(t){var i=this;1!=i.btn_kg&&(i.btn_kg=1,setTimeout((function(){i.btn_kg=0}),1e3),h.default.jump(t))},getimg:function(t){return h.default.getimg(t)}})};i.default=l},"6a17":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".minh100[data-v-ee12924e]{background:#f6f7f9;\n\t/* padding-top: 1px; */padding:%?30?%}.msg_box[data-v-ee12924e]{width:100%;-webkit-border-radius:%?10?%;border-radius:%?10?%;padding:0 %?30?%;background:#fff}.msg_li[data-v-ee12924e]{width:100%;height:%?125?%\n\t/* padding: 15upx 30upx; */}.msg_li+.msg_li[data-v-ee12924e]{border-top:1px solid #f4f4f4}.msg_li_name[data-v-ee12924e]{font-size:%?30?%;color:#444;width:100px}.msg_li_int[data-v-ee12924e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;min-width:0;text-align:right;font-size:%?28?%}.sub_btn[data-v-ee12924e]{margin:0 auto;width:%?690?%;height:%?79?%;\n\t/* background: linear-gradient(-90deg, #FC5534, #FFBE33);\n\tborder-radius: 40px; */background:#ff7029;-webkit-border-radius:%?10?%;border-radius:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?30?%;color:#fff;margin-top:%?100?%}",""]),t.exports=i},"71e1":function(t,i,e){var n=e("6a17");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("4c2dbd76",n,!0,{sourceMap:!1,shadowMode:!1})},"8cca":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"minh100"},[1==t.htmlReset?n("v-uni-view",{staticClass:"zanwu",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onRetry.apply(void 0,arguments)}}},[t._v("请求失败，请点击重试")]):t._e(),-1==t.htmlReset?n("v-uni-view",{staticClass:"loading_def"},[n("v-uni-image",{staticClass:"loading_def_img",attrs:{src:e("3d91"),mode:""}})],1):t._e(),0==t.htmlReset?n("v-uni-view",[n("v-uni-view",{staticClass:"msg_box"},[n("v-uni-view",{staticClass:"msg_li dis_flex aic ju_b",staticStyle:{"margin-bottom":"8upx"}},[n("v-uni-view",{staticClass:"msg_li_name"},[t._v("头像")]),n("avatar",{attrs:{stretch:"short",inner:"true",selWidth:"400upx",selHeight:"400upx",avatarSrc:t.getimg(t.loginDatas_data.avatar),avatarStyle:"width: 100upx; height: 100upx; border-radius: 100%;"},on:{upload:function(i){arguments[0]=i=t.$handleEvent(i),t.myUpload.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"msg_li dis_flex aic ju_b"},[n("v-uni-view",{staticClass:"msg_li_name"},[t._v("昵称")]),n("v-uni-input",{staticClass:"msg_li_int",attrs:{type:"text",placeholder:"请输入"},model:{value:t.loginDatas_data.nickname,callback:function(i){t.$set(t.loginDatas_data,"nickname",i)},expression:"loginDatas_data.nickname"}})],1)],1),n("v-uni-view",{staticClass:"sub_btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.sub.apply(void 0,arguments)}}},[t._v("保存")])],1):t._e()],1)},s=[]},"96cf":function(t,i){!function(i){"use strict";var e,n=Object.prototype,a=n.hasOwnProperty,s="function"===typeof Symbol?Symbol:{},o=s.iterator||"@@iterator",r=s.asyncIterator||"@@asyncIterator",h=s.toStringTag||"@@toStringTag",c="object"===typeof t,l=i.regeneratorRuntime;if(l)c&&(t.exports=l);else{l=i.regeneratorRuntime=c?t.exports:{},l.wrap=m;var u="suspendedStart",f="suspendedYield",d="executing",p="completed",v={},g={};g[o]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(P([])));b&&b!==n&&a.call(b,o)&&(g=b);var x=_.prototype=k.prototype=Object.create(g);S.prototype=x.constructor=_,_.constructor=S,_[h]=S.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var i="function"===typeof t&&t.constructor;return!!i&&(i===S||"GeneratorFunction"===(i.displayName||i.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,h in t||(t[h]="GeneratorFunction")),t.prototype=Object.create(x),t},l.awrap=function(t){return{__await:t}},I(T.prototype),T.prototype[r]=function(){return this},l.AsyncIterator=T,l.async=function(t,i,e,n){var a=new T(m(t,i,e,n));return l.isGeneratorFunction(i)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},I(x),x[h]="Generator",x[o]=function(){return this},x.toString=function(){return"[object Generator]"},l.keys=function(t){var i=[];for(var e in t)i.push(e);return i.reverse(),function e(){while(i.length){var n=i.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},l.values=P,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(R),!t)for(var i in this)"t"===i.charAt(0)&&a.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],i=t.completion;if("throw"===i.type)throw i.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var i=this;function n(n,a){return r.type="throw",r.arg=t,i.next=n,a&&(i.method="next",i.arg=e),!!a}for(var s=this.tryEntries.length-1;s>=0;--s){var o=this.tryEntries[s],r=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var h=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(h&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(h){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,i){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var s=n;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=i&&i<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=t,o.arg=i,s?(this.method="next",this.next=s.finallyLoc,v):this.complete(o)},complete:function(t,i){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&i&&(this.next=i),v},finish:function(t){for(var i=this.tryEntries.length-1;i>=0;--i){var e=this.tryEntries[i];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),R(e),v}},catch:function(t){for(var i=this.tryEntries.length-1;i>=0;--i){var e=this.tryEntries[i];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var a=n.arg;R(e)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,i,n){return this.delegate={iterator:P(t),resultName:i,nextLoc:n},"next"===this.method&&(this.arg=e),v}}}function m(t,i,e,n){var a=i&&i.prototype instanceof k?i:k,s=Object.create(a.prototype),o=new L(n||[]);return s._invoke=W(t,e,o),s}function y(t,i,e){try{return{type:"normal",arg:t.call(i,e)}}catch(n){return{type:"throw",arg:n}}}function k(){}function S(){}function _(){}function I(t){["next","throw","return"].forEach((function(i){t[i]=function(t){return this._invoke(i,t)}}))}function T(t){function i(e,n,s,o){var r=y(t[e],t,n);if("throw"!==r.type){var h=r.arg,c=h.value;return c&&"object"===typeof c&&a.call(c,"__await")?Promise.resolve(c.__await).then((function(t){i("next",t,s,o)}),(function(t){i("throw",t,s,o)})):Promise.resolve(c).then((function(t){h.value=t,s(h)}),(function(t){return i("throw",t,s,o)}))}o(r.arg)}var e;function n(t,n){function a(){return new Promise((function(e,a){i(t,n,e,a)}))}return e=e?e.then(a,a):a()}this._invoke=n}function W(t,i,e){var n=u;return function(a,s){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===a)throw s;return C()}e.method=a,e.arg=s;while(1){var o=e.delegate;if(o){var r=H(o,e);if(r){if(r===v)continue;return r}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===u)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=d;var h=y(t,i,e);if("normal"===h.type){if(n=e.done?p:f,h.arg===v)continue;return{value:h.arg,done:e.done}}"throw"===h.type&&(n=p,e.method="throw",e.arg=h.arg)}}}function H(t,i){var n=t.iterator[i.method];if(n===e){if(i.delegate=null,"throw"===i.method){if(t.iterator.return&&(i.method="return",i.arg=e,H(t,i),"throw"===i.method))return v;i.method="throw",i.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=y(n,t.iterator,i.arg);if("throw"===a.type)return i.method="throw",i.arg=a.arg,i.delegate=null,v;var s=a.arg;return s?s.done?(i[t.resultName]=s.value,i.next=t.nextLoc,"return"!==i.method&&(i.method="next",i.arg=e),i.delegate=null,v):s:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,v)}function D(t){var i={tryLoc:t[0]};1 in t&&(i.catchLoc=t[1]),2 in t&&(i.finallyLoc=t[2],i.afterLoc=t[3]),this.tryEntries.push(i)}function R(t){var i=t.completion||{};i.type="normal",delete i.arg,t.completion=i}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(D,this),this.reset(!0)}function P(t){if(t){var i=t[o];if(i)return i.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,s=function i(){while(++n<t.length)if(a.call(t,n))return i.value=t[n],i.done=!1,i;return i.value=e,i.done=!0,i};return s.next=s}}return{next:C}}function C(){return{value:e,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"98d4":function(t,i,e){"use strict";e.r(i);var n=e("8cca"),a=e("cd54");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("a1a7");var o,r=e("f0c5"),h=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"ee12924e",null,!1,n["a"],o);i["default"]=h.exports},a1a7:function(t,i,e){"use strict";var n=e("71e1"),a=e.n(n);a.a},ace1:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".my-canvas[data-v-6ef07ff9]{display:-webkit-box;display:-webkit-flex;display:flex;position:fixed!important;background:#000;left:0;z-index:100000;width:100%;min-height:100vh;height:100vh!important}.my-avatar[data-v-6ef07ff9]{width:%?150?%;height:%?150?%;-webkit-border-radius:100%;border-radius:100%}.oper-canvas[data-v-6ef07ff9]{display:-webkit-box;display:-webkit-flex;display:flex;position:fixed!important;left:0;z-index:100001;width:100%}.prv-canvas[data-v-6ef07ff9]{display:-webkit-box;display:-webkit-flex;display:flex;position:fixed!important;background:#000;left:0;z-index:200000;width:100%}.oper-wrapper[data-v-6ef07ff9]{height:50px;position:fixed!important;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid #f1f1f1;background:#fff;width:100%;left:0;bottom:0;z-index:100009;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.oper[data-v-6ef07ff9]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:%?10?% %?20?%;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-align-self:center;align-self:center}.btn-wrapper[data-v-6ef07ff9]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n\n\nheight:50px;\n-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn-wrapper uni-view[data-v-6ef07ff9]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:16px;color:#333;border:1px solid #f1f1f1;-webkit-border-radius:6%;border-radius:6%}.hover[data-v-6ef07ff9]{background:#f1f1f1;-webkit-border-radius:6%;border-radius:6%}.clr-wrapper[data-v-6ef07ff9]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1}.clr-wrapper uni-view[data-v-6ef07ff9]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:16px;color:#333;border:1px solid #f1f1f1;-webkit-border-radius:6%;border-radius:6%}.my-slider[data-v-6ef07ff9]{-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1}",""]),t.exports=i},cd54:function(t,i,e){"use strict";e.r(i);var n=e("476c"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},cfdb:function(t,i,e){"use strict";var n=e("4ea4");e("c975"),e("a15b"),e("ace4"),e("d3b7"),e("acd8"),e("e25e"),e("ac1f"),e("25f0"),e("3ca3"),e("466d"),e("1276"),e("498a"),e("5cc6"),e("8a59"),e("9a8c"),e("a975"),e("735e"),e("c1ac"),e("d139"),e("3a7b"),e("d5d6"),e("82f8"),e("e91f"),e("60bd"),e("5f96"),e("3280"),e("3fcc"),e("ca91"),e("25a1"),e("cd26"),e("3c5d"),e("2954"),e("649e"),e("219c"),e("170b"),e("b39a"),e("72f7"),e("ddb0"),e("2b3d"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("96cf");var a=n(e("1da1")),s=n(e("b85c")),o=50,r={name:"yq-avatar",data:function(){return{csH:"0px",sD:"none",sT:"-10000px",pT:"-10000px",iS:{},sS:{},sO:!0,bW:"19%",bD:"flex",tp:0,imgSrc:{imgSrc:""}}},watch:{avatarSrc:function(){this.imgSrc.imgSrc=this.avatarSrc}},props:{avatarSrc:"",avatarStyle:"",selWidth:"",selHeight:"",expWidth:"",expHeight:"",minScale:"",maxScale:"",canScale:"",canRotate:"",lockWidth:"",lockHeight:"",stretch:"",lock:"",fileType:"",noTab:"",inner:"",quality:"",index:"",bgImage:""},created:function(){var t=this;this.cc=uni.createCanvasContext("avatar-canvas",this),this.cco=uni.createCanvasContext("oper-canvas",this),this.ccp=uni.createCanvasContext("prv-canvas",this),this.qlty=parseFloat(this.quality)||1,this.imgSrc.imgSrc=this.avatarSrc,this.letRotate=!1===this.canRotate||!0===this.inner||"true"===this.inner||"false"===this.canRotate?0:1,this.letScale=!1===this.canScale||"false"===this.canScale?0:1,this.isin=!0===this.inner||"true"===this.inner?1:0,this.indx=this.index||void 0,this.mnScale=parseFloat(this.minScale)||.3,this.mxScale=parseFloat(this.maxScale)||4,this.noBar=!0===this.noTab||"true"===this.noTab?1:0,this.stc=this.stretch,this.lck=this.lock,this.fType="jpg"===this.fileType?"jpg":"png",this.isin||!this.letRotate?(this.bW="24%",this.bD="none"):(this.bW="19%",this.bD="flex"),this.noBar?this.fWindowResize():uni.showTabBar({fail:function(){t.noBar=1},success:function(){t.noBar=0},complete:function(i){t.fWindowResize()}})},methods:{fWindowResize:function(){var t=uni.getSystemInfoSync();this.platform=t.platform,this.wW=t.windowWidth,this.drawTop=t.windowTop,this.wH=t.windowHeight,this.noBar||(this.wH+=o),this.csH=this.wH-o+"px",this.tp=this.csH,this.tp=t.windowTop+parseInt(this.csH)+"px",this.pxRatio=this.wW/750;var i=this.avatarStyle;if(i&&!0!==i&&(i=i.trim())){i=i.split(";");var e,n={},a=(0,s.default)(i);try{for(a.s();!(e=a.n()).done;){var r=e.value;if(r){if(r=r.trim().split(":"),r[1].toString().indexOf("upx")>=0){var h=r[1].trim().split(" ");for(var c in h)h[c]&&h[c].toString().indexOf("upx")>=0&&(h[c]=parseFloat(h[c])*this.pxRatio+"px");r[1]=h.join(" ")}n[r[0].trim()]=r[1].trim()}}}catch(l){a.e(l)}finally{a.f()}this.iS=n}this.expWidth&&(this.eW=this.expWidth.toString().indexOf("upx")>=0?parseInt(this.expWidth)*this.pxRatio:parseInt(this.expWidth)),this.expHeight&&(this.eH=this.expHeight.toString().indexOf("upx")>=0?parseInt(this.expHeight)*this.pxRatio:parseInt(this.expHeight)),"flex"===this.sD&&this.fDrawInit(!0),this.fHideImg()},fSelect:function(){var t=this;this.fSelecting||(this.fSelecting=!0,setTimeout((function(){t.fSelecting=!1}),500),uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(i){uni.showLoading({title:"加载中...",mask:!0});var e=t.imgPath=i.tempFilePaths[0];uni.getImageInfo({src:e,success:function(i){if(t.imgWidth=i.width,t.imgHeight=i.height,t.path=e,!t.hasSel){var n=t.sS||{};if(!t.selWidth||!t.selHeight)return void uni.showModal({title:"裁剪框的宽或高没有设置",showCancel:!1});var a=t.selWidth.toString().indexOf("upx")>=0?parseInt(t.selWidth)*t.pxRatio:parseInt(t.selWidth),s=t.selHeight.toString().indexOf("upx")>=0?parseInt(t.selHeight)*t.pxRatio:parseInt(t.selHeight);n.width=a+"px",n.height=s+"px",n.top=(t.wH-s-o|0)/2+"px",n.left=(t.wW-a|0)/2+"px",t.sS=n}t.noBar?t.fDrawInit(!0):uni.hideTabBar({complete:function(){t.fDrawInit(!0)}})},fail:function(){uni.showToast({title:"请选择正确图片",duration:2e3})},complete:function(){uni.hideLoading()}})}}))},fUpload:function(){var t=this;if(!this.fUploading){this.fUploading=!0,setTimeout((function(){t.fUploading=!1}),1e3);var i=this.sS,e=parseInt(i.left),n=parseInt(i.top),a=parseInt(i.width),s=parseInt(i.height),o=this.eW||a*this.pixelRatio,r=this.eH||s*this.pixelRatio;uni.showLoading({title:"加载中...",mask:!0}),this.sD="none",this.sT="-10000px",this.hasSel=!1,this.fHideImg(),uni.canvasToTempFilePath({x:e,y:n,width:a,height:s,destWidth:o,destHeight:r,canvasId:"avatar-canvas",fileType:this.fType,quality:this.qlty,success:function(i){i=i.tempFilePath,t.btop(i).then((function(i){t.$emit("upload",{avatar:t.imgSrc,path:i,index:t.indx,data:t.rtn,base64:t.base64||null})}))},fail:function(t){uni.showToast({title:"error1",duration:2e3})},complete:function(){uni.hideLoading(),t.noBar||uni.showTabBar(),t.$emit("end")}},this)}},fPrvUpload:function(){var t=this;if(!this.fPrvUploading){this.fPrvUploading=!0,setTimeout((function(){t.fPrvUploading=!1}),1e3);var i=this.sS,e=(parseInt(i.width),parseInt(i.height),this.prvX),n=this.prvY,a=this.prvWidth,s=this.prvHeight,o=this.eW||parseInt(i.width)*this.pixelRatio,r=this.eH||parseInt(i.height)*this.pixelRatio;uni.showLoading({title:"加载中...",mask:!0}),this.sD="none",this.sT="-10000px",this.hasSel=!1,this.fHideImg(),uni.canvasToTempFilePath({x:e,y:n,width:a,height:s,destWidth:o,destHeight:r,canvasId:"prv-canvas",fileType:this.fType,quality:this.qlty,success:function(i){i=i.tempFilePath,t.btop(i).then((function(i){t.$emit("upload",{avatar:t.imgSrc,path:i,index:t.indx,data:t.rtn,base64:t.base64||null})}))},fail:function(){uni.showToast({title:"error_prv",duration:2e3})},complete:function(){uni.hideLoading(),t.noBar||uni.showTabBar(),t.$emit("end")}},this)}},fDrawInit:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.wW,n=this.wH,a=this.imgWidth,s=this.imgHeight,r=a/s,h=e-40,c=n-o-80,l=h/c,u=parseInt(this.sS.width),f=parseInt(this.sS.height);switch(this.fixWidth=0,this.fixHeight=0,this.lckWidth=0,this.lckHeight=0,this.stc){case"x":this.fixWidth=1;break;case"y":this.fixHeight=1;break;case"long":r>1?this.fixWidth=1:this.fixHeight=1;break;case"short":r>1?this.fixHeight=1:this.fixWidth=1;break;case"longSel":u>f?this.fixWidth=1:this.fixHeight=1;break;case"shortSel":u>f?this.fixHeight=1:this.fixWidth=1;break}switch(this.lck){case"x":this.lckWidth=1;break;case"y":this.lckHeight=1;break;case"long":r>1?this.lckWidth=1:this.lckHeight=1;break;case"short":r>1?this.lckHeight=1:this.lckWidth=1;break;case"longSel":u>f?this.lckWidth=1:this.lckHeight=1;break;case"shortSel":u>f?this.lckHeight=1:this.lckWidth=1;break}this.fixWidth?(h=u,c=h/r):this.fixHeight?(c=f,h=c*r):r<l?s<c?(h=a,c=s):h=c*r:a<h?(h=a,c=s):c=h/r,this.isin&&(h<u&&(h=u,c=h/r,this.lckHeight=0),c<f&&(c=f,h=c*r,this.lckWidth=0)),this.scaleSize=1,this.rotateDeg=0,this.posWidth=(e-h)/2|0,this.posHeight=(n-c-o)/2|0,this.useWidth=0|h,this.useHeight=0|c,this.centerX=this.posWidth+h/2,this.centerY=this.posHeight+c/2,this.focusX=0,this.focusY=0;var d=this.sS,p=parseInt(d.left),v=parseInt(d.top),g=parseInt(d.width),w=parseInt(d.height),b=(this.canvas,this.canvasOper,this.cc,this.cco);b.beginPath(),b.setLineWidth(3),b.setGlobalAlpha(1),b.setStrokeStyle("white"),b.strokeRect(p,v,g,w),b.setFillStyle("black"),b.setGlobalAlpha(.5),b.fillRect(0,0,this.wW,v),b.fillRect(0,v,p,w),b.fillRect(0,v+w,this.wW,this.wH-w-v-o),b.fillRect(p+g,v,this.wW-g-p,w),b.setGlobalAlpha(1),b.setStrokeStyle("red"),b.moveTo(p+15,v),b.lineTo(p,v),b.lineTo(p,v+15),b.moveTo(p+g-15,v),b.lineTo(p+g,v),b.lineTo(p+g,v+15),b.moveTo(p+15,v+w),b.lineTo(p,v+w),b.lineTo(p,v+w-15),b.moveTo(p+g-15,v+w),b.lineTo(p+g,v+w),b.lineTo(p+g,v+w-15),b.stroke(),b.draw(!1,(function(){i&&(t.sD="flex",t.sT=t.drawTop+"px",t.fDrawImage(!0))})),this.$emit("init")},fDrawImage:function(){var t=Date.now();if(!(t-this.drawTm<20)){this.drawTm=t;var i=this.cc,e=this.useWidth*this.scaleSize,n=this.useHeight*this.scaleSize;if(this.bgImage?i.drawImage(this.bgImage,0,0,this.wW,this.wH-o):i.fillRect(0,0,this.wW,this.wH-o),this.isin){var a=this.focusX*(this.scaleSize-1),s=this.focusY*(this.scaleSize-1);i.translate(this.centerX,this.centerY),i.rotate(this.rotateDeg*Math.PI/180),i.drawImage(this.imgPath,this.posWidth-this.centerX-a,this.posHeight-this.centerY-s,e,n)}else i.translate(this.posWidth+e/2,this.posHeight+n/2),i.rotate(this.rotateDeg*Math.PI/180),i.drawImage(this.imgPath,-e/2,-n/2,e,n);i.draw(!1)}},fPreview:function(){var t=this;if(!this.fPreviewing){this.fPreviewing=!0,setTimeout((function(){t.fPreviewing=!1}),1e3);var i=this.sS,e=parseInt(i.left),n=parseInt(i.top),a=parseInt(i.width),s=parseInt(i.height);uni.showLoading({title:"加载中...",mask:!0}),uni.canvasToTempFilePath({x:e,y:n,width:a,height:s,expWidth:a*this.pixelRatio,expHeight:s*this.pixelRatio,canvasId:"avatar-canvas",fileType:this.fType,quality:this.qlty,success:function(i){t.prvImgTmp=i=i.tempFilePath;var e=t.ccp,n=t.wW,a=parseInt(t.csH),s=parseInt(t.sS.width),o=parseInt(t.sS.height),r=n-40,h=a-80,c=r/s,l=o*c;l<h?(s=r,o=l):(c=h/o,s*=c,o=h),e.fillRect(0,0,n,a),t.prvX=n=(n-s)/2|0,t.prvY=a=(a-o)/2|0,t.prvWidth=s|=0,t.prvHeight=o|=0,e.drawImage(i,n,a,s,o),e.draw(!1),t.btop(i).then((function(i){t.sO=!1,t.pT=t.drawTop+"px"})),t.sO=!1,t.pT=t.drawTop+"px"},fail:function(){uni.showToast({title:"error2",duration:2e3})},complete:function(){uni.hideLoading()}},this)}},fChooseImg:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;if(i){var n=i.selWidth,a=i.selHeight,s=i.expWidth,r=i.expHeight,h=i.quality,c=i.canRotate,l=i.canScale,u=i.minScale,f=i.maxScale,d=i.stretch,p=i.fileType,v=i.inner,g=i.lock;s&&(this.eW=s.toString().indexOf("upx")>=0?parseInt(s)*this.pxRatio:parseInt(s)),r&&(this.eH=r.toString().indexOf("upx")>=0?parseInt(r)*this.pxRatio:parseInt(r)),this.letRotate=!1===c||!0===v||"true"===v||"false"===c?0:1,this.letScale=!1===l||"false"===l?0:1,this.qlty=parseFloat(h)||1,this.mnScale=parseFloat(u)||.3,this.mxScale=parseFloat(f)||4,this.stc=d,this.isin=!0===v||"true"===v?1:0,this.fType="jpg"===p?"jpg":"png",this.lck=g,this.isin||!this.letRotate?(this.bW="24%",this.bD="none"):(this.bW="19%",this.bD="flex"),n&&a&&(n=n.toString().indexOf("upx")>=0?parseInt(n)*this.pxRatio:parseInt(n),a=a.toString().indexOf("upx")>=0?parseInt(a)*this.pxRatio:parseInt(a),this.sS.width=n+"px",this.sS.height=a+"px",this.sS.top=(this.wH-a-o|0)/2+"px",this.sS.left=(this.wW-n|0)/2+"px",this.hasSel=!0)}this.rtn=e,this.indx=t,this.fSelect()},fRotate:function(){this.rotateDeg+=90-this.rotateDeg%90,this.fDrawImage()},fStart:function(t){var i=t.touches,e=i[0],n=i[1];if(this.touch0=e,this.touch1=n,n){var a=n.x-e.x,s=n.y-e.y;this.fgDistance=Math.sqrt(a*a+s*s)}},fMove:function(t){var i=t.touches,e=i[0],n=i[1];if(n){var a=n.x-e.x,s=n.y-e.y,o=Math.sqrt(a*a+s*s),r=.005*(o-this.fgDistance),h=this.scaleSize+r;do{if(!this.letScale)break;if(h<this.mnScale)break;if(h>this.mxScale)break;var c=this.useWidth*r/2,l=this.useHeight*r/2;if(this.isin){var u=this.useWidth*h,f=this.useHeight*h,d=(this.posWidth,this.posHeight,parseInt(this.sS.left)),p=parseInt(this.sS.top),v=parseInt(this.sS.width),g=parseInt(this.sS.height),w=d+v,b=p+g,x=void 0,m=void 0;if(u<=v||f<=g)break;this.cx=x=this.focusX*h-this.focusX,this.cy=m=this.focusY*h-this.focusY,this.posWidth-=c,this.posHeight-=l,this.posWidth-x>d&&(this.posWidth=d+x),this.posWidth+u-x<w&&(this.posWidth=w-u+x),this.posHeight-m>p&&(this.posHeight=p+m),this.posHeight+f-m<b&&(this.posHeight=b-f+m)}else this.posWidth-=c,this.posHeight-=l;this.scaleSize=h}while(0);this.fgDistance=o,n.x!==e.x&&this.letRotate&&(a=(this.touch1.y-this.touch0.y)/(this.touch1.x-this.touch0.x),s=(n.y-e.y)/(n.x-e.x),this.rotateDeg+=180*Math.atan((s-a)/(1+a*s))/Math.PI,this.touch0=e,this.touch1=n),this.fDrawImage()}else if(this.touch0){var y=e.x-this.touch0.x,k=e.y-this.touch0.y,S=this.posWidth+y,_=this.posHeight+k;if(this.isin){var I,T,W=this.useWidth*this.scaleSize,H=this.useHeight*this.scaleSize,D=S,R=_,L=D+W,P=R+H,C=parseInt(this.sS.left),E=parseInt(this.sS.top),j=C+parseInt(this.sS.width),O=E+parseInt(this.sS.height);this.cx=I=this.focusX*this.scaleSize-this.focusX,this.cy=T=this.focusY*this.scaleSize-this.focusY,!this.lckWidth&&Math.abs(y)<100&&(C<D-I?this.posWidth=C+I:j>L-I?this.posWidth=j-W+I:(this.posWidth=S,this.focusX-=y)),!this.lckHeight&&Math.abs(k)<100&&(E<R-T?(this.focusY-=E+T-this.posHeight,this.posHeight=E+T):O>P-T?(this.focusY-=O+T-(this.posHeight+H),this.posHeight=O-H+T):(this.posHeight=_,this.focusY-=k))}else Math.abs(y)<100&&!this.lckWidth&&(this.posWidth=S),Math.abs(k)<100&&!this.lckHeight&&(this.posHeight=_),this.focusX-=y,this.focusY-=k;this.touch0=e,this.fDrawImage()}},fEnd:function(t){var i=t.touches,e=i&&i[0];i&&i[1];e?this.touch0=e:(this.touch0=null,this.touch1=null)},fHideImg:function(){this.prvImg="",this.pT="-10000px",this.sO=!0,this.prvImgData=null,this.target=null},fClose:function(){this.sD="none",this.sT="-10000px",this.hasSel=!1,this.fHideImg(),this.noBar||uni.showTabBar(),this.$emit("end")},fGetImgData:function(){var t=this;return new Promise((function(i,e){var n=t.prvX,a=t.prvY,s=t.prvWidth,o=t.prvHeight;uni.canvasGetImageData({canvasId:"prv-canvas",x:n,y:a,width:s,height:o,success:function(t){i(t.data)},fail:function(t){e(t)}},t)}))},fColorChange:function(t){var i=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n,a,s,o,r,h,c,l,u,f,d,p,v,g,w,b,x,m,y,k,S,_,I,T,W,H,D;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=Date.now(),!(n-i.prvTm<100)){e.next=3;break}return e.abrupt("return");case 3:if(i.prvTm=n,uni.showLoading({title:"加载中...",mask:!0}),i.prvImgData){e.next=11;break}return e.next=8,i.fGetImgData().catch((function(){uni.showToast({title:"error_read",duration:2e3})}));case 8:if(i.prvImgData=e.sent){e.next=10;break}return e.abrupt("return");case 10:i.target=new Uint8ClampedArray(i.prvImgData.length);case 11:if(a=i.prvImgData,s=i.target,o=t.detail.value,0===o)s=a;else for(o=(o+100)/200,o<.005&&(o=0),o>.995&&(o=1),S=a.length-1;S>=0;S-=4)r=a[S-3]/255,h=a[S-2]/255,c=a[S-1]/255,b=Math.max(r,h,c),w=Math.min(r,h,c),p=b-w,b===w?u=0:b===r&&h>=c?u=(h-c)/p*60:b===r&&h<c?u=(h-c)/p*60+360:b===h?u=(c-r)/p*60+120:b===c&&(u=(r-h)/p*60+240),d=(b+w)/2,0===d||b===w?f=0:0<d&&d<=.5?f=p/(2*d):d>.5&&(f=p/(2-2*d)),a[S]&&(l=a[S]),o<.5?f=f*o/.5:o>.5&&(f=2*f+2*o-f*o/.5-1),0===f?r=h=c=Math.round(255*d):(d<.5?g=d*(1+f):d>=.5&&(g=d+f-d*f),v=2*d-g,x=u/360,m=x+1/3,y=x,k=x-1/3,_=function(t){return t<0?t+1:t>1?t-1:t},I=function(t){return t<1/6?v+6*(g-v)*t:t>=1/6&&t<.5?g:t>=.5&&t<2/3?v+6*(g-v)*(2/3-t):v},r=m=Math.round(255*I(_(m))),h=y=Math.round(255*I(_(y))),c=k=Math.round(255*I(_(k)))),l&&(s[S]=l),s[S-3]=r,s[S-2]=h,s[S-1]=c;T=i.prvX,W=i.prvY,H=i.prvWidth,D=i.prvHeight,uni.canvasPutImageData({canvasId:"prv-canvas",x:T,y:W,width:H,height:D,data:s,fail:function(){uni.showToast({title:"error_put",duration:2e3})},complete:function(){uni.hideLoading()}},i);case 15:case"end":return e.stop()}}),e)})))()},btop:function(t){return this.base64=t,new Promise((function(i,e){var n=t.split(","),a=n[0].match(/:(.*?);/)[1],s=atob(n[1]),o=s.length,r=new Uint8Array(o);while(o--)r[o]=s.charCodeAt(o);return i((window.URL||window.webkitURL).createObjectURL(new Blob([r],{type:a})))}))}}};i.default=r},ea40:function(t,i,e){"use strict";e.r(i);var n=e("2a05"),a=e("0ff3");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("f588");var o,r=e("f0c5"),h=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"6ef07ff9",null,!1,n["a"],o);i["default"]=h.exports},f568:function(t,i,e){var n=e("ace1");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("cd80bf24",n,!0,{sourceMap:!1,shadowMode:!1})},f588:function(t,i,e){"use strict";var n=e("f568"),a=e.n(n);a.a}}]);
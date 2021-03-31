import Vue from 'vue'
import App from './App'
import store from './store'
import event from 'common/event.js'
import con_base64 from 'common/base64.js'

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

import uParse from '@/components/gaoyia-parse/parse.vue'
Vue.component('u-parse',uParse)

import htmlLoading from '@/components/html_loading/html_loading.vue'
Vue.component('htmlLoading', htmlLoading)
import QSPopup from '@/components/QS-popup/QS-popup.vue'
Vue.component('QSPopup', QSPopup)


import uniPopup from '@/components/uni-popup/uni-popup.vue'
Vue.component('uniPopup', uniPopup)
import alLi from '@/components/an_li/an_li.vue'
Vue.component('alLi', alLi)
import shLi from '@/components/sh_li/sh_li.vue'
Vue.component('shLi', shLi)
/**
 * @description 地址三级联动  
 * @example   
 * regionPicker    
 * @author: wenxin  
 * @createTime: 2021-3-30 08:07:16  
 */
import regionPicker from "@/components/region-picker/region-picker.vue"
Vue.component('regionPicker', regionPicker)

/**
 * @description 列表侧滑  
 * @example   
 * <uni-swipe-action>
 * 		<uni-swipe-action-item :options="options" @click="onClick($event,index,item.id,item)" @change="change" v-for="(item,index) in datas" :data-id='item.id'></uni-swipe-action-item>
 * </uni-swipe-action>
 * @author: wenxin  
 * @createTime: 2021-3-30 08:08:33  
 */
import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
import uniSwipeActionItem from '@/components/uni-swipe-action-item/uni-swipe-action-item.vue'

Vue.component('uniSwipeAction', uniSwipeAction)
Vue.component('uniSwipeActionItem', uniSwipeActionItem)

import service from './service.js'
Vue.mixin(service)


Vue.config.productionTip = false

Vue.prototype.$store = store
// 封装弹框的方法
// uni.$showMsg = function(title="数据请求失败!",duration=1500){
//       uni.showToast({
//           title,
//           duration,
//           icon:'none'
//       })
//     }

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

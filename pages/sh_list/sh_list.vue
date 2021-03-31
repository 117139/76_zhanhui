<template>
	<view class="minh100">
		<view v-if="htmlReset==1" class="zanwu" @tap='onRetry'>请求失败，请点击重试</view>
		<view v-if="htmlReset==-1"  class="loading_def">
				<image class="loading_def_img" src="../../static/images/loading.gif" mode=""></image>
		</view>
		<view v-if="htmlReset==0">
			<scroll-view  scroll-x="true" class="scroll_x list_tit">
				<view class="list_tit_li" :class="fw_cur==item.id?' cur':''" @tap="fwcur_fuc(item.id)" v-for="(item,index) in tabs">{{item.category_name}}</view>
			</scroll-view>
			<!-- <scroll-view class="scroll_list1"   scroll-y="true" refresher-enabled='true' :refresher-triggered="triggered"
				 :refresher-threshold="100" @refresherpulling="onPulling" @refresherrefresh="onRefresh" @refresherrestore="onRestore"
				 @refresherabort="onAbort" @scrolltolower="getdata"> -->
				 <view class="fl_list">
					 <view class="pthz_li_padd" v-for="(item,i) in datas">
						<!-- <alLi  :datas="item"></alLi> -->
						<shLi :datas="item"></shLi>
						
					 </view>
					
					 <view v-if="datas.length==0" class="zanwu">暂无数据</view>
					 <view v-if="data_last" class="data_last">我可是有底线的哟~</view>
				 </view>
			<!-- </scroll-view> -->
		</view>
	</view>
</template>

<script>
	import Vue from 'vue'
	import service from '../../service.js';
	import {
		mapState,
		mapMutations
	} from 'vuex'
	var that
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				htmlReset:-1,
				tabs:[],
				fw_cur:0,
				
				
				
				datas:[],
				
				page: 1,
				size: 15,
				data_last:false,
				triggered: true, //设置当前下拉刷新状态
				show_num:0,
				ua:'',
				isWeixin:'',
			}
		},
		computed: {
			...mapState(['hasLogin',  'userName', 'loginDatas']),
			style() {
				var StatusBar = this.StatusBar;
				var CustomBar = this.CustomBar;
				var style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;
		
				return style
			},
		
			style1() {
				var StatusBar = this.StatusBar;
				var style = `top:${StatusBar}px;`;
		
				return style
			},
		},
		onPageScroll(e) {
			console.log(e)
			this.PageScroll = e.scrollTop
			// if(e.scrollTop>10){
			// 	uni.showToast({
			// 		title:e.scrollTop
			// 	})
			// }
		},
		onPullDownRefresh() {
			that.onRetry()
		},
		onReachBottom() {
			that.getdata()
		},
		onLoad(option) {
			that=this
			that.htmlReset=0
			
			
			
			if(uni.getStorageSync('sh_type_id')){
				that.fw_cur=uni.getStorageSync('sh_type_id')
			}
			that.getcate()
		},
		onShow() {
			
			if(that.show_num>0){
				var type_id=uni.getStorageSync('sh_type_id')||0
				that.getcate()
			}
			that.show_num++
			
		},
		onUnload() {
			uni.removeStorageSync('type_id')
		},
		watch:{
			hasLogin(){
				if(that.hasLogin){
					that.onRetry()
				}
			}
		},
		methods: {
			...mapMutations(['login','logindata','logout','setplatform']),
			call(e){
				service.call(e)
			},
			gettime(time){
				return service.gettime(time)
			},
			onRetry(){
				
				that.datas=[]
				that.data_last=false
				that.page=1
				that.btn_kg=0
				that.getdata()
			},
			fwcur_fuc(num){
				this.fw_cur=num
				uni.setStorageSync('sh_type_id',num)
				this.onRetry()
			},
			onPulling(e) {
				console.log("onpulling", e);
			},
			onRefresh() {
				var that =this
				if (this._freshing) return;
				this._freshing = true;
				that.onRetry()
				setTimeout(()=>{
					this.triggered=false
					this._freshing =false
				},100)
			},
			onRestore() {
				this.triggered = 'restore'; // 需要重置
				console.log("onRestore");
			},
			onAbort() {
				console.log("onAbort");
			},
			getcate(){
				 var data = {}
				 			
				 //selectSaraylDetailByUserCard
				 var jkurl = '/shops/get_shop_category'
				
				service.P_get(jkurl, data).then(res => {
				 	that.btn_kg = 0
				 	console.log(res)
				 	if (res.code == 1) {
				 		var datas = res.data
				 		console.log(typeof datas)
				 			
				 		if (typeof datas == 'string') {
				 			datas = JSON.parse(datas)
				 		}
				 			
				 		that.tabs = datas
						if(that.fw_cur==0){
							that.fw_cur=datas[0].id
						}
						that.onRetry()
						if(datas.length>0){
							var cate_list=JSON.stringify(datas)
							uni.setStorageSync('cate_list',cate_list)
						}
						
				 		console.log(datas)
				 			
				 			
				 	} else {
						that.htmlReset=1
				 		if (res.msg) {
				 			uni.showToast({
				 				icon: 'none',
				 				title: res.msg
				 			})
				 		} else {
				 			uni.showToast({
				 				icon: 'none',
				 				title: '获取失败'
				 			})
				 		}
				 	}
				}).catch(e => {
				 	that.btn_kg = 0
					that.htmlReset=1
				 	console.log(e)
				 	uni.showToast({
				 		icon: 'none',
				 		title: '获取数据失败'
				 	})
				})
			},
			
			getdata() {
				// uni.stopPullDownRefresh()
				// return
				///api/info/list
				// var that = this
				console.log(that.$store.state.loginDatas)
				var data = {
					token:that.$store.state.loginDatas.userToken||'',
					order_type:uni.getStorageSync('latitude')?1:2,                       //排序类型，1：距离排序（离最近），2：评分由高到低，3：评分由低到高 非必传，默认为1
					lat:uni.getStorageSync('latitude')||'',
					lng:uni.getStorageSync('longitude')||'',
					page:that.page,
					limit:that.size,
					shop_category_id:that.fw_cur
				}
				if(that.btn_kg==1){
					return
				}
				that.btn_kg=1
				//selectSaraylDetailByUserCard
				var jkurl = '/shops/get_shop_list'
				uni.showLoading({
					title: '正在获取数据',
					mask:true
				})
				// setTimeout(()=>{
				// 	uni.hideLoading()
				// },1000)
				// return
				var page_now=that.page
				service.P_get(jkurl, data).then(res => {
					that.btn_kg = 0
					console.log(res)
					if (res.code == 1) {
						var datas = res.data
						console.log(typeof datas)
			
						if (typeof datas == 'string') {
							datas = JSON.parse(datas)
						}
						if(page_now==1){
				
							that.datas = datas.data
							// that.datas=[
							// 	{
							// 		id:1,
							// 		time:1616220372
							// 	},
							// 	{
							// 		id:2,
							// 		time:1616221372
							// 	},
							// 	{
							// 		id:3,
							// 		time:1616222372
							// 	},
							// ]
						} else {
							if (datas.data.length == 0) {
								that.data_last = true
								return
							}
							that.data_last = false
							that.datas = that.datas.concat(datas.data)
						}
						that.page++
						console.log(datas)
						
						that.htmlReset=0
			
					} else {
						
						that.htmlReset=1
						if (res.msg) {
							uni.showToast({
								icon: 'none',
								title: res.msg
							})
						} else {
							uni.showToast({
								icon: 'none',
								title: '操作失败'
							})
						}
					}
				}).catch(e => {
					that.btn_kg = 0
					
					that.htmlReset=1
					console.log(e)
					uni.showToast({
						icon: 'none',
						title: '获取数据失败'
					})
				})
			},
			jump(e) {
				var that = this
			
				if (that.btn_kg == 1) {
					return
				} else {
					that.btn_kg = 1
					setTimeout(function() {
						that.btn_kg = 0
					}, 1000)
				}
			
				service.jump(e)
			},
			getimg(img) {
				return service.getimg(img)
			},
		}
	}
</script>

<style scoped>
	.minh100{
		/*  #ifdef H5  */
		min-height: calc(100vh - 50px);
		display: flex;
		flex-direction: column;
		/*  #endif  */
		padding-top: 100upx;
	}
	.list_tit{
		width: 100%;
		padding: 0 25upx;
		height: 100upx;
		position: fixed;
		top: 0;
		z-index: 100;
		background: #fff;
	}
	.list_tit_li{
		display: inline-flex;
		font-size: 30upx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
		height: 100upx;
		align-items: center;
		justify-content: center;
		/* margin:0 15upx; */
		min-width: 175upx;
	}
	
	.list_tit_li.cur{
		color: #000;
		position: relative;
	}
	.list_tit_li.cur::before{
		width: 36upx;
		height: 8upx;
		background: #FE8018;
		border-radius: 4upx;
		position: absolute;
		content: '';
		bottom: 8upx;
		left: 50%;
		margin-left: -18upx;
	}
	.scroll_list1{
		position: absolute;
		top: 100upx;
		left: 0;
		right: 0;
		bottom: 0;
		/* height: calc(100vh - 100upx); */
		flex: 1;
	}
	
	
	
	.fl_list{
		width: 100%;
		/* padding: 15upx; */
		/* display: flex;
		flex-wrap: wrap; */
	}
	.pthz_li_padd{
		width: 100%;
		padding: 30upx;
	}
	.pthz_li_padd+.pthz_li_padd{
		border-top: 12upx solid #f6f6f6;
	}
	
	
	
</style>

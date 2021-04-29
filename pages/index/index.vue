<template>
	<view class="minh100">
		<!-- <htmlLoading ref="htmlLoading" @Retry='onRetry' :bj_show="false"> -->
		<view v-if="htmlReset==1" class="zanwu" @tap='onRetry'>请求失败，请点击重试</view>
		<view v-if="htmlReset==-1"  class="loading_def">
				<image class="loading_def_img" src="../../static/images/loading.gif" mode=""></image>
		</view>
		<view v-if="htmlReset==0">
			<swiper class="swiper" :indicator-dots="indicatorDots"
				indicator-color="rgba(255,255,255,.6)" indicator-active-color="rgba(255,255,255,1)"  :current="current_swp"  
			 :autoplay="autoplay" :interval="interval" :duration="duration" circular='true' >
				<swiper-item v-for="(item,idx) in bannerData">
					<image class="swi_img" :src="getimg(item.img_url)" lazy-load="true" mode="aspectFill"></image>
				</swiper-item>
					
			</swiper>
			<view class="jp_box">
				<view class="jp_tit">
					<!-- <view class="jp_tit_tit">精品商户</view> -->
					<view class="jp_tit_tit">推荐</view>
					<view class="jp_tit_more" @tap="jump_more(1)">更多<text class="iconfont icon-next-m"></text></view>
				</view>
				<scroll-view scroll-x="true" class="jp_list_box scroll_x">
					<view class="jp_list">
						<view v-for="(item,index) in shopList" :key='index' class="jp_li"  @tap="jump" :data-url="'/pages/dp_xq/dp_xq?id='+item.id">
							<!-- 图片 -->
							<image :src="getimg(item.thumbnail_img)"  lazy-load="true" class="jp_img" mode="aspectFill"></image>
							<view class="jp_msg">
								<!-- 标题 -->
								<view class="jp_d1 oh2">{{item.shop_name}}</view>
								<!-- 手机地址 -->
								<view class="jp_d2 dis_flex aic">
									<text class="jp_tel" @tap.stop="call" :data-tel='item.phone'>
										<text class="icon-dianhua iconfont"></text>
									</text>
									<view class="dis_flex aic jp_address flex_1" style="max-width: 240upx;">
										<text class="iconfont icon-weizhi"></text>
										<text class="text-cut">{{item.address}}</text>
									</view>
								</view>
								<!-- 标签 -->
								<view class="jp_d3 ">
									<view v-if="i<2" v-for="(tag,i) in item.shop_type" :key='i' class="jp_d3_li">
										<text class="oh1">{{tag}}</text>
									</view>
								</view>
								
								
								<!-- 店铺名称 -->
								<view class="dis_flex aic jp_dp">
									<image :src="getimg(item.logo)" class="jp_dp_tx"	mode="aspectFill"></image>
									<text class="flex_1 text-cut jp_dp_name">{{item.shop_name}}</text>
									<view class="iconfont icon-next-m jp_next"></view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<view class="jp_box">
				<view class="jp_tit">
					<!-- <view class="jp_tit_tit">精品案例</view> -->
					<view class="jp_tit_tit">精选案例</view>
					<view class="jp_tit_more" @tap="jump_more(2)">更多<text class="iconfont icon-next-m"></text></view>
				</view>
				<alLi v-for="(item,i) in caseList" :datas="item"></alLi>
				<!-- <view class="dis_flex ju_b al_li" v-for="(item,i) in caseList">
					<view class="flex_1">
						<view class="oh2 an_tit">{{item.title}}</view>
						<view class="oh1 an_time"><text>{{item.shop_name}}</text><text>{{item.create_time}}</text></view>
					</view>
					<image v-if="item.thumbnail_img" class="al_li_img" :src="getimg(item.thumbnail_img)" mode="aspectFill"></image>
				</view> -->
				<view v-if="caseList.length==0" class="zanwu">暂无数据</view>
				<view v-if="data_last" class="data_last">我可是有底线的哟~</view>
			</view>
		</view>
		<!-- </htmlLoading> -->
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
				htmlReset:-1,
				indicatorDots: true,
				autoplay: true,
				interval: 3000,
				duration: 500,
				current_swp:0,
				swp_cur:0,
				bannerData:[],
				shopList:[],
				caseList:[],
				data_last:false
			}
		},
		computed: {
			...mapState(['hasLogin', 'userName', 'loginDatas']),
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
			// console.log(e)
			this.PageScroll = e.scrollTop
			// if(e.scrollTop>10){
			// 	uni.showToast({
			// 		title:e.scrollTop
			// 	})
			// }
		},
		onPullDownRefresh() {
			uni.stopPullDownRefresh()
		},
		onLoad() {
			that = this
			
		},
		mounted() {
			that.onRetry()
		},
		methods: {
			...mapMutations(['login', 'logindata', 'logout', 'setplatform']),
			call(e){
				service.call(e)
			},
			jump_more(num){
				if(num==1){
					uni.switchTab({
						url:'/pages/sh_list/sh_list'
					})
				}
				if(num==2){
					uni.switchTab({
						url:'/pages/al_list/al_list'
					})
				}
			},
			onRetry() {
				this.page = 1
				this.goods_list = []
				this.data_last = false
				this.getbanner()
				this.getdata()
				this.getcaseList()
			},
			getbanner() {
				
				
				var datas = {
				
					token: that.$store.state.loginDatas.userToken||'',
					
				}
				//selectSaraylDetailByUserCard
				var jkurl = '/index/banner_list'
				uni.showLoading({
					title: '正在获取数据',
					mask: true
				})
				service.P_post(jkurl, datas).then(res => {
					that.btn_kg = 0
					// that.$refs.htmlLoading.htmlReset_fuc(0)
					that.htmlReset=0
					console.log(res)
					if (res.code == 1) {
						that.htmlReset = 0
						var datas = res.data
						console.log(typeof datas)
				
						if (typeof datas == 'string') {
							datas = JSON.parse(datas)
						}
						console.log(res)
				
						that.bannerData=datas
				
					} else {
						that.htmlReset = 1
					// that.$refs.htmlLoading.htmlReset_fuc(1)
						if (res.msg) {
							uni.showToast({
								icon: 'none',
								title: res.msg
							})
						} else {
							uni.showToast({
								icon: 'none',
								title: '获取数据失败'
							})
						}
					}
				}).catch(e => {
					that.htmlReset=1
					that.btn_kg = 0
					console.log(e)
					uni.showToast({
						icon: 'none',
						title: '获取数据失败，请检查您的网络连接'
					})
				})
			
				
			},
			getdata(){
				//'/index/shop_list'
				var jkurl = '/index/shop_list'
				var datas={}
				uni.showLoading({
					title: '正在获取数据',
					mask: true
				})
				service.P_post(jkurl, datas).then(res => {
					that.btn_kg = 0
					// that.$refs.htmlLoading.htmlReset_fuc(0)
					that.htmlReset=0
					console.log(res)
					if (res.code == 1) {
						that.htmlReset = 0
						var datas = res.data
						console.log(typeof datas)
				
						if (typeof datas == 'string') {
							datas = JSON.parse(datas)
						}
						console.log(res)
				
						that.shopList=datas
				
					} else {
						that.htmlReset = 1
					// that.$refs.htmlLoading.htmlReset_fuc(1)
						if (res.msg) {
							uni.showToast({
								icon: 'none',
								title: res.msg
							})
						} else {
							uni.showToast({
								icon: 'none',
								title: '获取数据失败'
							})
						}
					}
				}).catch(e => {
					that.htmlReset=1
					that.btn_kg = 0
					console.log(e)
					uni.showToast({
						icon: 'none',
						title: '获取数据失败，请检查您的网络连接'
					})
				})
			},
			getcaseList(){
				//'/index/shop_list'
				var jkurl = '/index/shop_case_list'
				var datas={}
				uni.showLoading({
					title: '正在获取数据',
					mask: true
				})
				service.P_post(jkurl, datas).then(res => {
					that.btn_kg = 0
					// that.$refs.htmlLoading.htmlReset_fuc(0)
					that.htmlReset=0
					console.log(res)
					if (res.code == 1) {
						that.htmlReset = 0
						var datas = res.data
						console.log(typeof datas)
				
						if (typeof datas == 'string') {
							datas = JSON.parse(datas)
						}
						console.log(res)
				
						that.caseList=datas
				
					} else {
						that.htmlReset = 1
					// that.$refs.htmlLoading.htmlReset_fuc(1)
						if (res.msg) {
							uni.showToast({
								icon: 'none',
								title: res.msg
							})
						} else {
							uni.showToast({
								icon: 'none',
								title: '获取数据失败'
							})
						}
					}
				}).catch(e => {
					that.htmlReset=1
					that.btn_kg = 0
					console.log(e)
					uni.showToast({
						icon: 'none',
						title: '获取数据失败，请检查您的网络连接'
					})
				})
			},
			
			getimg(img) {
				// console.log(service.getimg(img))
				return service.getimg(img)
			},
			pveimg(e) {
				service.pveimg(e)
			},
			// cardSwiper
			cardSwiper(e) {
				// this.cardCur = e.detail.current
			},
			jump(e) {
				var that = this
				// if(!that.hasLogin){
				// 	uni.navigateTo({
				// 		url:'/pages/login/login'
				// 	})
				// 	return
				// }
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
		}
	}
</script>

<style scoped>
	.minh100{
		min-height: calc(100vh - 50px - env(safe-area-inset-bottom) - var(--top-window-height) - calc(44px + env(safe-area-inset-top)));
	}
	.swiper{
		
		width: 100%;
		height: 360upx;
		position: relative;
		z-index: 100!important;
	}
	.swi_img{
		width: 100%;
		height: 360upx;
	}
	.jp_box{
		width: 100%;
		padding: 0 30upx 20upx;
	}
	.jp_tit{
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 36upx;
		color: #000;
		height: 100upx;
	}
	.jp_tit_tit{
		font-weight: bold;
	}
	.jp_tit_more{
		font-size: 24upx;
		color: #999;
	}
	.jp_tit_more text{
		font-size: 24upx;
	}
	.jp_list_box{
		width: 100%;
		height: 540upx;
	}
	.jp_list{
		width: 100%;
		height: 540upx;
		padding: 10upx;
	}
	.jp_li{
		display: inline-flex;
		width: 317upx;
		height: 520upx;
		background: #FFFFFF;
		box-shadow: 0px 0px 10upx 0px rgba(0, 0, 0, 0.15);
		border-radius: 4upx;
		/* padding: 10upx; */
		flex-direction: column;
		position: relative;
	}
	.jp_li+.jp_li{
		margin-left: 25upx;
	}
	.jp_img{
		width: 100%;
		height: 254upx;
		border-radius: 4upx 4upx 0px 0px;
	}
	.jp_msg{
		padding: 12upx;
		width: 100%;
	}
	.jp_d1{
		font-size: 32upx;
		color: #333;
		line-height: 40upx;
		height: 80upx;
		white-space: pre-wrap;
	}
	.jp_d2{
		margin-top: 10upx;
		margin-bottom: 17upx;
	}
	.jp_tel .iconfont{
		font-size: 36upx;
		/* color: #555; */
		color: rgb(254, 126, 19);
		margin-right: 5upx;
	}
	.jp_address{
		font-size: 26upx;
		color: #999;
		padding-left: 13upx;
		border-left: 1px solid #DDDDDD;
		flex:0;
		height: 26upx;
		
	}
	.jp_address .iconfont{
		font-size: 26upx;
		color: #656565;
		margin-right: 8upx;
	}
	.jp_d3{
		display: flex;
		flex-wrap: wrap;
		height: 92upx;
		overflow: hidden;
	}
	.jp_d3_li{
		max-width: 5em;
		/* min-width: 118upx; */
		height: 36upx;
		background: #FDEBDD;
		border-radius: 4px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 15upx;
		margin-right: 11upx;
		font-size: 26upx;
		color: #DA9870;
		margin-top: 5upx;
		margin-bottom: 5upx;
	}
	.jp_dp{
		margin-top: 5upx;
	}
	.jp_dp_tx{
		width: 40upx;
		height: 40upx;
		border-radius: 50%;
		flex:none;
		margin-right: 8upx;
	}
	.jp_dp_name{
		font-size: 22upx;
		color: #333;
	}
	.jp_next{
		flex:none;
		font-size: 12upx;
		color: #999;
	}
	.al_li{
		width: 100%;
		padding: 30upx 0;
		border-bottom: 1px solid #F4F2F3;
	}
	.an_tit{
		font-size: 34upx;
		color: #000;
		font-weight: bold;
		line-height: 45upx;
		height: 90upx;
	}
	.an_time{
		font-size: 24upx;
		color: #999;
	}
	.an_time text+text{
		margin-left: 16upx;
		font-weight: bold;
	}
	.al_li_img{
		width: 222upx;
		height: 135upx;
		border-radius: 4upx;
	}
</style>

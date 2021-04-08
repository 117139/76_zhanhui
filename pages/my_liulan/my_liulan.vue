<template>
	<view class="minh100" :class="list_type==2?'minh1001':''">
		<view v-if="htmlReset==1" class="zanwu" @tap='onRetry'>请求失败，请点击重试</view>
		<view v-if="htmlReset==-1" class="loading_def">
			<image class="loading_def_img" src="../../static/images/loading.gif" mode=""></image>
		</view>
		<view v-if="htmlReset==0">
			<scroll-view v-if="list_type==1" scroll-x="true" class="scroll_x list_tit">
				<view class="list_tit_li" :class="fw_cur==item.id?' cur':''" @tap="fwcur_fuc(item.id)" v-for="(item,index) in tabs">{{item.category_name}}</view>
			</scroll-view>
			<!-- <scroll-view class="scroll_list1"   scroll-y="true" refresher-enabled='true' :refresher-triggered="triggered"
				 :refresher-threshold="100" @refresherpulling="onPulling" @refresherrefresh="onRefresh" @refresherrestore="onRestore"
				 @refresherabort="onAbort" @scrolltolower="getdata"> -->
			<view class="fl_list">
				<uni-swipe-action  style="width: 100%;">
					<uni-swipe-action-item  v-for="(item,index) in datas" style="margin-bottom: 12upx;"
					 :options="options" @click="onClick($event,index,item.id,item)" @change="change"  :data-id='item.id'>
					<view class="pthz_li_padd">
						<shLi :datas="item" :list_type="list_type"></shLi>
					</view>
					</uni-swipe-action-item>
				</uni-swipe-action>
				<view v-if="datas.length==0" class="data_null_box dis_flex_c aic ju_c">
					<image class="data_null_img" src="/static/images/data_null.png" mode="aspectFit"></image>
					<view  class="data_null_text">暂无内容</view>
				</view>
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
	var appid = 'wxebece1dbcc73be3d'
	var base_url = encodeURIComponent(service.imgurl + '#/pages/index/index') // 前端域名
	const wx_url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid + '&redirect_uri=' + base_url +
		'&response_type=code&scope=snsapi_base&state=123#wechat_redirect'


	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				htmlReset: -1,
				tabs: [{
						name: '高一',
						id: 1,
					},
					{
						name: '高二',
						id: 2,
					},
					{
						name: '高三',
						id: 3,
					},
				],
				fw_cur: 0,



				datas: [],

				page: 1,
				size: 15,
				data_last: false,
				triggered: true, //设置当前下拉刷新状态
				show_num: 0,
				ua: '',
				isWeixin: '',


				options: [{
					text: '删除',
					style: {
						color: '#ffffff',
						backgroundColor: '#F86060'
					}
				}],
				list_type:1
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
			that = this
			that.htmlReset = 0

			if(option.type){
				that.list_type=option.type
			}
			if(option.type==2){
				uni.setNavigationBarTitle({
					title:'我的评价'
				})
			}

			that.getcate()
		},
		onShow() {

			if (that.show_num > 0) {
				that.getcate()
			}
			that.show_num++

		},
		onUnload() {
			uni.removeStorageSync('al_type_id')
		},
		watch: {
			hasLogin() {
				if (that.hasLogin) {
					that.onRetry()
				}
			}
		},
		methods: {
			...mapMutations(['login', 'logindata', 'logout', 'setplatform']),
			onClick(e, idx, id, item) {
				console.log(e)
				console.log(idx)
				// console.log('当前点击的是第'+e.index+'个按钮，点击内容是'+e.content.text)
				if (e.index == 0) {
					console.log(item)
					this.sc_d_fuc(id)
				}
				if (e.index == 1) {
					this.sc_d_fuc(id)
				}
			},
			change(open) {
				console.log('当前开启状态：' + open)
			},
			sc_d_fuc(id) {
				var that = this
				uni.showModal({
				    title: '提示',
				    content: '确定删除该记录吗？',
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
							var datas = {
								id: id,
								// token: that.loginDatas.token,
							}
							console.log(datas)
							// return
							//selectSaraylDetailByUserCard
							var jkurl = '/user/user_browse_del'
							if(that.list_type==2){
								jkurl="/user/del_shop_evaluate"
							}
							service.P_post(jkurl, datas).then(res => {
								that.btn_kg = 0
								console.log(res)
								if (res.code == 1) {
									var datas = res.data
									console.log(typeof datas)
										
									if (typeof datas == 'string') {
										datas = JSON.parse(datas)
									}
									uni.showToast({
										icon: 'none',
										title: '操作成功'
									})
									setTimeout(()=>{
										
									that.onRetry()
									},1000)
										
										
								} else {
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
								console.log(e)
								uni.showToast({
									icon: 'none',
									title: '获取数据失败'
								})
							})
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
				 
			},
			onClose({
				detail
			}) {
				const {
					position,
					instance
				} = detail;
				switch (position) {
					case 'left':
						instance.close();
						break;
					case 'cell':
					case 'outside':
					case 'right':
						console.log('right')
						instance.close();
						break;
				}
			},
			gettime(time) {
				return service.gettime(time)
			},
			onRetry() {

				that.datas = []
				that.data_last = false
				that.page = 1
				that.btn_kg = 0
				that.getdata()
			},
			fwcur_fuc(num) {
				this.fw_cur = num
				this.onRetry()
			},
			onPulling(e) {
				console.log("onpulling", e);
			},
			onRefresh() {
				var that = this
				if (this._freshing) return;
				this._freshing = true;
				that.onRetry()
				setTimeout(() => {
					this.triggered = false
					this._freshing = false
				}, 100)
			},
			onRestore() {
				this.triggered = 'restore'; // 需要重置
				console.log("onRestore");
			},
			onAbort() {
				console.log("onAbort");
			},
			getcate() {
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
						if (that.fw_cur == 0) {
							that.fw_cur = datas[0].id
						}
						that.onRetry()
						

						console.log(datas)


					} else {
						that.htmlReset = 1
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
					that.htmlReset = 1
					console.log(e)
					uni.showToast({
						icon: 'none',
						title: '获取数据失败'
					})
				})
			},

			getdata() {

				///api/info/list
				// var that = this
				console.log(that.$store.state.loginDatas)
				var data = {
					// token: that.$store.state.loginDatas.userToken || '',
					page: that.page,
					limit: that.size,
					shop_category_id: that.fw_cur
				}
				if (that.btn_kg == 1) {
					return
				}
				that.btn_kg = 1
				//selectSaraylDetailByUserCard
				var jkurl = '/user/get_user_browse'
				if(that.list_type==2){
					jkurl='/user/user_shop_evaluate'
				}
				uni.showLoading({
					title: '正在获取数据',
					mask: true
				})
				// setTimeout(()=>{
				// 	uni.hideLoading()
				// },1000)
				// return
				var page_now = that.page
				service.P_post(jkurl, data).then(res => {
					that.btn_kg = 0
					console.log(res)
					if (res.code == 1) {
						var datas = res.data
						console.log(typeof datas)

						if (typeof datas == 'string') {
							datas = JSON.parse(datas)
						}
						if (page_now == 1) {

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

						that.htmlReset = 0

					} else {

						that.htmlReset = 1
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

					that.htmlReset = 1
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
	.minh100 {
		/*  #ifdef H5  */
		min-height: calc(100vh - 50px);
		display: flex;
		flex-direction: column;
		/*  #endif  */
		padding-top: 100upx;
		background: #F6F6F6;
	}
	.minh1001{
		padding-top: 0;
	}
	.list_tit {
		width: 100%;
		padding: 0 25upx;
		height: 100upx;
		position: fixed;
		top: 44px;
		z-index: 100;
		background: #fff;
	}

	.list_tit_li {
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

	.list_tit_li.cur {
		color: #000;
		position: relative;
	}

	.list_tit_li.cur::before {
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

	.scroll_list1 {
		position: absolute;
		top: 100upx;
		left: 0;
		right: 0;
		bottom: 0;
		/* height: calc(100vh - 100upx); */
		flex: 1;
	}

	.fl_list {
		width: 100%;
		/* padding: 15upx; */
		display: flex;
		flex-wrap: wrap;
	}

	.pthz_li_padd {
		width: 100%;
		padding:30upx;
	}



	.xk_li {
		width: 100%;
		height: 282upx;
		background: #FFFFFF;
		box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.1);
		border-radius: 15px;
		padding: 25upx;
		position: relative;
	}

	.xk_li_tit {
		font-size: 36upx;
		font-weight: bold;
		color: #333;
		display: flex;
		align-items: center;
	}

	.xk_li_img {
		width: 35upx;
		height: 35upx;
		margin-right: 5upx;
		flex: none;
	}

	.xk_li_d1 {
		font-size: 24upx;
		color: #999;
		display: flex;
		align-items: center;
		margin-top: 18upx;
	}

	.xk_li_d1 .xk_li_img {
		margin-right: 22upx;
	}

	.xk_li_d2 {
		margin-top: 20upx;
		height: 70upx;
		color: #999;
	}

	.bm_btn {
		font-size: 30upx;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 186upx;
		height: 67upx;
		background: #00B894;
		box-shadow: 0px 3upx 18upx 0px rgba(0, 0, 0, 0.1);
		border-radius: 34upx;
	}

	.bm_icon image {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 175upx;
		height: 175upx;
	}
	.my_fabu_btn{
		width: 108upx;
		height: 108upx;
		/* background: #FE8018; */
		box-shadow: 0px 3px 7upx 0px rgba(0, 0, 0, 0.35);
		border-radius: 50%;
		position: fixed;
		bottom: 100upx;
		right: 30upx;
	}
</style>

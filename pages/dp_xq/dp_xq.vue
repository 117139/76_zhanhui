<template>
	<scroll-view class="minh100" scroll-y :scroll-into-view="id_str" @scroll="scroll_fuc">
		<view class="head_box" :class="{'cur_H':PageScroll>10}">
			<view class="header_L" @tap="back">
				<text class="iconfont icon-prev"></text>
			</view>
			<view class="my_tit_box">
				<!-- 我的店铺 -->
			</view>
			<view  class="header_L"></view>
		</view>
		<view v-if="htmlReset==1" class="zanwu" @tap='onRetry'>请求失败，请点击重试</view>
		<view v-if="htmlReset==-1"  class="loading_def">
				<image class="loading_def_img" src="/static/images/loading.gif" mode=""></image>
		</view>
		<view v-if="htmlReset==0">
			<swiper class="swiper" :indicator-dots="indicatorDots"
				indicator-color="rgba(255,255,255,.6)" indicator-active-color="rgba(255,255,255,1)"
			 :autoplay="autoplay" :interval="interval" :duration="duration" circular='true' :current="current_swp" @change="sweiper_change">
					<swiper-item  v-for="(item,idx) in datas.banner">
							<image  class="swi_img" :src="getimg(item)" lazy-load="true" mode="aspectFill"></image>
							<!-- <image  class="swi_img" src="/static/images/mydpbg_02.jpg" lazy-load="true" mode="aspectFill"></image> -->
					</swiper-item>
					
			</swiper>
			<view class="index_box">
				<view class="swiper_dots">
					<view v-for="(item,idx) in datas.banner" :class="swp_cur==idx?'active':''" @tap="change_swp(idx)"></view>
				</view>
				
				<view class="dis_flex aic ">
					<view class="msg_l">
						<view class="shop_name">{{datas.shop_name}}</view>
						<view class="sh_box  dis_flex aic ">
							
							<view class="sh_box_tel"  @tap="call" :data-tel='datas.phone'>
							
								<text class="icon-dianhua iconfont"></text>
							</view>
							<view class="sh_box_add dis_flex aic">
								<text class="iconfont icon-weizhi"></text>
								<text class="text-cut " >{{datas.address}}</text>
							</view>
						</view>
					</view>
					<image class="shop_tx" :src="getimg(datas.logo)" mode="aspectFill"></image>
				</view>
				<view class="dis_flex aic ju_b dp_bq">
					<view class="pf_list">
						<view>{{datas.avg_fraction}}分</view>
						<text v-for="(item1,index1) in datas.shop_type">{{item1}}</text>
						<!-- <text>插画师</text> -->
					</view>
					<view class="bj_btn"  @tap="call" :data-tel='datas.phone'>联系商家</view>
				</view>
			</view>
			<view class="list_tit_box">
				<scroll-view  scroll-x="true" class="scroll_x list_tit" :class="{'list_tit_H':PageScroll>287}">
					<view class="list_tit_li" :class="dp_cur==item.id?' cur':''" @tap="fwcur_fuc(item.id,1)" v-for="(item,index) in tabs">{{item.name}}</view>
				</scroll-view>
			</view>
			<view  class="dp_jj">
				<view class="dp_miao" id="dp_jj"></view>
				<view class="dp_tit">店铺简介</view>
				<view class="dp_inr" v-html="datas_team.detail">	
					{{datas_team.detail}}
				</view>
			</view>
			<view  class="dp_jj">
				<view class="dp_miao" id="my_team"></view>
				<view class="dp_tit">我的团队</view>
				<view class="dp_inr" v-html="datas_team.team">	
					{{datas_team.team}}
				</view>
				<view class="dp_imgs">
					<view class="dp_img_box"  v-for="(item,index) in datas_team.arr_team_img">
						<image class="dp_img" :src="getimg(item)" :data-src="getimg(item)" mode="aspectFill" @tap="pveimg"></image>
					</view>
				</view>
			</view>
			<view  class="dp_jj">
				<view class="dp_miao" id="dp_fw"></view>
				<view class="dp_tit" style="margin-bottom: 0;">店铺服务</view>
			</view>	
			<view>
				<scroll-view  scroll-x="true" class="scroll_x list_tit list_tit1">
					<view class="list_tit_li" :class="fw_cur==item.id?' cur':''" @tap="fwcur_fuc(item.id,2)" v-for="(item,index) in fw_tabs">{{item.category_name}}</view>
				</scroll-view>
				<view class="fl_list">
				 <view class="pthz_li_padd" v-for="(item,i) in fw_datas">
					<alLi  :datas="item"  :type="2"></alLi>
				 </view>
					<view v-if="fw_datas.length==0" class="zanwu">暂无数据</view>
				</view>
			</view>
			<view  class="dp_jj">
				<view class="dp_miao" id="dp_al"></view>
				<view class="dp_tit" style="margin-bottom: 0;">店铺案例</view>
			</view>	
			<view>
				<scroll-view  scroll-x="true" class="scroll_x list_tit list_tit1">
					<view class="list_tit_li" :class="al_cur==item.id?' cur':''" @tap="fwcur_fuc(item.id,3)" v-for="(item,index) in al_tabs">{{item.category_name}}</view>
				</scroll-view>
				<view class="fl_list">
				 <view class="pthz_li_padd" v-for="(item,i) in al_datas">
					<alLi  :datas="item"  :type="1"></alLi>
				 </view>
					<view v-if="al_datas.length==0" class="zanwu">暂无数据</view>
				</view>
			</view>
		</view>
		<!-- //评价状态，0：可评价，1：不可评价 -->
		<view class="xq_box" v-if="datas.evaluate_status==0">
			<view class="xq_box xq_box1 dis_flex aic ju_b">
				<view class="dis_flex aic pj_lv">
					评价
					<text class="iconfont icon-five-pointed-star" :class="pj_lv>0?'cur':''" @tap="pj_lv=1"></text>
					<text class="iconfont icon-five-pointed-star" :class="pj_lv>1?'cur':''" @tap="pj_lv=2"></text>
					<text class="iconfont icon-five-pointed-star" :class="pj_lv>2?'cur':''" @tap="pj_lv=3"></text>
					<text class="iconfont icon-five-pointed-star" :class="pj_lv>3?'cur':''" @tap="pj_lv=4"></text>
					<text class="iconfont icon-five-pointed-star" :class="pj_lv>4?'cur':''" @tap="pj_lv=5"></text>
				</view>
				<view class="pj_btn" @tap="pj_sub">提交</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	import service from '../../service.js';
	var setTime_login
	import {
		mapState,
		mapMutations
	} from 'vuex'
	var that
	export default {
		data() {
			return {
				htmlReset:-1,
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				datas: '',
				indicatorDots: true,
				autoplay: true,
				interval: 3000,
				duration: 500,
				bannerData:[
					1,1,1
				],
				PageScroll:'',
				fk_show:false,
				current_swp:0,
				swp_cur:0,
				
				tabs:[
					{
						name:'店铺简介',
						id:'dp_jj',
					},
					{
						name:'我的团队',
						id:'my_team',
					},
					{
						name:'店铺服务',
						id:'dp_fw',
					},
					{
						name:'店铺案例',
						id:'dp_al',
					},
				],
				datas_team:'',
				dp_cur:'dp_jj',
				id_str:'',
				fw_tabs:[],
				fw_cur:0,
				fw_datas:[],
				fw_page:1,
				al_tabs:[],
				al_cur:0,
				al_datas:[],
				al_page:1,
				pj_lv:1,
				show_num:0
			}
		},
		onPageScroll(e){
			// console.log(e)
			this.PageScroll=e.scrollTop
			
		},
		computed: {
			...mapState(['hasLogin', 'forcedLogin', 'userName','loginDatas','relation_phone']),
			
			style0() {
				var StatusBar = this.StatusBar;
				var CustomBar = this.CustomBar;
				var padd_top = CustomBar
				var style = `padding-top:${padd_top}px;`;
				
				return style
			},
			style() {
				var StatusBar = this.StatusBar;
				var CustomBar = this.CustomBar;
				var style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;
		
				return style
			},
			
			style1(){
				var StatusBar = this.StatusBar;
				var style = `top:${StatusBar}px;`;
				
				return style
			},
			style2(){
				var StatusBar = this.StatusBar;
				var CustomBar = this.CustomBar;
				var style = `padding-top:${CustomBar}px;`;
				
				return style
			}
		},
		onLoad(opiton) {
			that=this
			that.id=opiton.id
			that.getdata()
		},
		onShow() {
			if(that.show_num>0){
				that.getdata()
			}
			that.show_num++
		},
		methods: {
			...mapMutations(['login','logindata','logout','setplatform']),
			pj_sub(){
				var that =this
				uni.showModal({
				    title: '提示',
				    content: '是否提交当前评价？',
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
										uni.showLoading({
											title:'正在提交',
											mask:true
										})
										
										var data = {
											shop_id:that.id,
											fraction:that.pj_lv
										}
										
										//selectSaraylDetailByUserCard
										var jkurl = '/shops/evaluate_shop'
										// uni.showLoading({
										// 	title: '正在获取数据'
										// })
										service.P_post(jkurl, data).then(res => {
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
													title: '提交成功'
												})
												setTimeout(()=>{
													that.getdata()
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
											console.log(e)
											uni.showToast({
												icon: 'none',
												title: '获取数据失败，请检查您的网络连接'
											})
										})
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			},
			scroll_fuc(e){
				// console.log(e)
				// console.log(e.detail.scrollTop)
				this.PageScroll=e.detail.scrollTop
			},
			getimg(img) {
				// console.log(service.getimg(img))
				return service.getimg(img)
			},
			pveimg(e){
				service.pveimg(e)
			},
			fwcur_fuc(num,type){
				if(type==1){
					this.dp_cur=num
					this.id_str=num
					console.log(this.id_str)
				}
				if(type==2){
					this.fw_cur=num
					
					that.fw_page=1
					that.fw_datas=[]
					that.get_fw()
				}
				if(type==3){
					this.al_cur=num
					that.al_page=1
					that.al_datas=[]
					that.get_al()
				}
				// uni.setStorageSync('al_type_id',num)
				// this.onRetry()
			},
			call(e){
				service.call(e)
			},
			
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			sweiper_change(e){
				// console.log(e.detail.current)
				this.swp_cur=e.detail.current
			},
			change_swp(num){
				this.current_swp=num
			},
			getdata(){
				// /shops/get_shop_detail
				var that =this
				var data = {
					shop_id:that.id
				}
				
				//selectSaraylDetailByUserCard
				var jkurl = '/shops/get_shop_detail'
				uni.showLoading({
					title: '正在获取数据'
				})
				service.P_get(jkurl, data).then(res => {
					that.btn_kg = 0
					that.htmlReset=0
					console.log(res)
					if (res.code == 1) {
						var datas = res.data
						console.log(typeof datas)
							
						if (typeof datas == 'string') {
							datas = JSON.parse(datas)
						}
						
						that.datas = datas
						that.get_team()
						that.getcate()
						that.getcate1()
						console.log(datas)
							
							
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
					that.htmlReset=1
					console.log(e)
					uni.showToast({
						icon: 'none',
						title: '获取数据失败，请检查您的网络连接'
					})
				})
			},
			getcate() {
				var data = {}
			
				//selectSaraylDetailByUserCard
				var jkurl = '/content/get_shop_service_category'
			
				service.P_get(jkurl, data).then(res => {
					that.btn_kg = 0
					console.log(res)
					if (res.code == 1) {
						var datas = res.data
						console.log(typeof datas)
			
						if (typeof datas == 'string') {
							datas = JSON.parse(datas)
						}
			
						that.fw_tabs = datas
						if (that.fw_cur == 0) {
							that.fw_cur = datas[0].id
						}
						that.get_fw()
			
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
			get_team(){
				///shops/get_shop_team
				var data = {
					shop_id:that.id
				}
				
				//selectSaraylDetailByUserCard
				var jkurl = '/shops/get_shop_team'
				uni.showLoading({
					title: '正在获取数据'
				})
				service.P_post(jkurl, data).then(res => {
					that.btn_kg = 0
					that.htmlReset=0
					console.log(res)
					if (res.code == 1) {
						var datas = res.data
						console.log(typeof datas)
							
						if (typeof datas == 'string') {
							datas = JSON.parse(datas)
						}
						
						that.datas_team = datas
						
							
							
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
					that.htmlReset=1
					console.log(e)
					uni.showToast({
						icon: 'none',
						title: '获取数据失败，请检查您的网络连接'
					})
				})
			},
			get_fw() {
				
				///api/info/list
				// var that = this
				console.log(that.$store.state.loginDatas)
				var data = {
					token:that.$store.state.loginDatas.token||'',
					// page:that.fw_page,
					// limit:100,
					shop_id:that.datas.id,
					category_id:that.fw_cur
				}
				// if(that.btn_kg==1){
				// 	return
				// }
				// that.btn_kg=1
				//selectSaraylDetailByUserCard
				var jkurl = '/shops/get_shop_service'
				uni.showLoading({
					title: '正在获取数据',
					mask:true
				})
				// setTimeout(()=>{
				// 	uni.hideLoading()
				// },1000)
				// return
				var page_now=that.fw_page
				service.P_get(jkurl, data).then(res => {
					that.btn_kg = 0
					console.log(res)
					if (res.code == 1) {
						var datas = res.data
						console.log(typeof datas)
			
						if (typeof datas == 'string') {
							datas = JSON.parse(datas)
						}
						that.fw_datas = datas
						return
						if(page_now==1){
				
							that.fw_datas = datas
							
						} else {
							if (datas.length == 0) {
								that.data_last = true
								return
							}
							that.data_last = false
							that.fw_datas = that.fw_datas.concat(datas)
						}
						that.fw_page++
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
			
			getcate1(){
				 var data = {}
				 			
				 //selectSaraylDetailByUserCard
				 var jkurl = '/content/get_shop_case_category'
				
				service.P_get(jkurl, data).then(res => {
				 	that.btn_kg = 0
				 	console.log(res)
				 	if (res.code == 1) {
				 		var datas = res.data
				 		console.log(typeof datas)
				 			
				 		if (typeof datas == 'string') {
				 			datas = JSON.parse(datas)
				 		}
				 			
				 		that.al_tabs = datas
						if(that.al_cur==0){
							that.al_cur=datas[0].id
						}
						that.get_al()
						
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
			get_al() {
				
				///api/info/list
				// var that = this
				console.log(that.$store.state.loginDatas)
				var data = {
					token:that.$store.state.loginDatas.userToken||'',
					page:that.al_page,
					limit:100,
					shop_id:that.datas.id,
					category_id:that.al_cur
				}
				// if(that.btn_kg==1){
				// 	return
				// }
				// that.btn_kg=1
				//selectSaraylDetailByUserCard
				var jkurl = '/shops/get_shop_case'
				uni.showLoading({
					title: '正在获取数据',
					mask:true
				})
				// setTimeout(()=>{
				// 	uni.hideLoading()
				// },1000)
				// return
				var page_now=that.al_page
				service.P_get(jkurl, data).then(res => {
					that.btn_kg = 0
					console.log(res)
					if (res.code == 1) {
						var datas = res.data
						console.log(typeof datas)
			
						if (typeof datas == 'string') {
							datas = JSON.parse(datas)
						}
						that.al_datas = datas
						return
						if(page_now==1){
				
							that.al_datas = datas
							
						} else {
							if (datas.length == 0) {
								that.data_last = true
								return
							}
							that.data_last = false
							that.al_datas = that.al_datas.concat(datas)
						}
						that.al_page++
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
			gettime(time){
				return service.gettime(time)
			},
		}
	}
</script>

<style scoped>
	.minh100{
		width: 100%;
		background: #F4F3F2;
		height: 100vh;
	}
	.head_box{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background: rgba(255,255,255,0);
		display: flex;
		align-items: center;
		justify-content: space-between;
		z-index: 900;
	}
	.header_L{
		width: 30px;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.header_L .iconfont{
		color: #fff;
		    font-size: 16px;
	
	}
	.my_tit_box{
		height: calc(44px + env(safe-area-inset-top));
		padding: 7px 3px;
		font-size: 16px;
		opacity: 1;
		font-weight: 700;
		font-size: 16px;
		line-height: 30px;
		text-align: center;
		color: #fff;		
	}
	.cur_H{
		background: rgba(255,255,255,1);
	}
	.cur_H .iconfont{
		color: #333;
	}
	.cur_H .my_tit_box{
		color: #333;
	}
	
	
	.swiper{
		
		width: 100%;
		height: 433upx;
		position: relative;
		z-index: 100!important;
	}
	.swi_img{
		width: 100%;
		height: 433upx;
	}
	.index_box{
		/* width: 723upx; */
		width: calc(100% - 30upx);
		
		background: #FFFFFF;
		border-radius: 10px;
		position: relative;
		top: -50upx;
		z-index: 800;
		padding: 30upx 25upx;
		margin: 0 auto -50upx;
	}
	.swiper_dots{
		width: 100%;
		position: absolute;
		top: -23upx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.swiper_dots view{
		width: 10upx;
		height: 10upx;
		background: #FFFFFF;
		border-radius: 10upx;
		margin: 0 10upx;
		transition: all .1s;
	}
	.swiper_dots view.active{
		width: 24upx;
	}
	.msg_l{
		width: calc(100% - 120upx);
	}
	.shop_name{
		font-size: 38upx;
		color: #333;
		font-weight: bold;
		margin-bottom: 10upx;
	}
	.sh_box_tel{
		font-size: 36upx;
		color: #555;
		padding-right: 30upx;
		border-right: 1px solid #ddd;
		margin-right: 30upx;
	}
	.sh_box_tel .iconfont{
		font-size: 50upx;
		/* color: #555; */
		color: rgb(254, 126, 19);
	}
	.sh_box_add{
		color: #999;
		font-size: 26upx;
		width: calc(100% - 125upx);
	}
	.sh_box_add text{
		margin-right: 8upx;
		
	}
	.sh_box_add .text-cut{
		width: calc(100% - 40upx);
	}
	.shop_tx{
		width: 86upx;
		height: 86upx;
		border-radius: 50%;
		flex:none;
	}
	.dp_bq{
		margin-top: 20upx;
	}
	.pf_list{
		width: 500upx;
		margin-top: 10upx;
		display: flex;
		flex-wrap: wrap;
	}
	.pf_list view{
		color: #FE8018;
		font-size: 30upx;
		margin-right: 10upx;
		font-weight: bold;
		height: 36upx;
		display: flex;
		align-items: center;
		margin-bottom: 10upx;
	}
	.pf_list text{
		color: #DA9870;
		font-size: 26upx;
		margin-right: 10upx;
		padding: 0 14upx;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #FDEBDD;
		height: 36upx;
		margin-bottom: 10upx;
	}
	.bj_btn{
		width: 153upx;
		height: 50upx;
		background: #FE8018;
		border-radius: 10upx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 26upx;
		color: #fff;
	}
	
	.list_tit_box{
		width: 100%;
		height: 100upx;
		margin-top: 18upx;
	}
	
	.list_tit{
		width: 100%;
		padding: 0 25upx;
		height: 100upx;
		/* position: fixed;
		top: 0;
		z-index: 100; */
		background: #fff;
	}
	.list_tit_H{
		position: fixed;
		top: 44px;
		z-index: 100;
		box-shadow: 1px 3px 10px 0px rgba(0, 0, 0, 0.1);
	}
	.list_tit_li{
		display: inline-flex;
		font-size: 32upx;
		font-weight: bold;
		color: #000;
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
	.dp_jj{
		width: 100%;
		background: #fff;
		padding: 30upx;
		margin-top: 20upx;
		position: relative;
	}
	.dp_miao{
		position: absolute;
		top: -188upx;
	}
	.dp_tit{
		width: 100%;
		height: 36upx;
		display: flex;
		align-items: center;
		font-weight: bold;
		padding-left: 20upx;
		position: relative;
		font-size: 32upx;
		margin-bottom: 35upx;
	}
	.dp_tit::before{
		content: '';
		position: absolute;
		top: 4upx;
		left: 0;
		width: 3upx;
		height: 28upx;
		background: #FE8018;
	}
	.dp_inr{
		font-size: 30upx;
		color: #444;
		text-indent: 2em;
		line-height: 45upx;
	}
	.dp_imgs{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.dp_img_box{
		width: 33.33%;
		max-width: 300upx;
		height: 240upx;
		padding: 15upx;
	}
	.dp_img{
		width: 100%;
		height: 100%;
	}
	.dp_jj1{
		width: 100%;
		padding:30upx 0;
	}
	.list_tit1{
		width: 100%;
		height: 79upx;
		border-top: 1px solid #F4F3F2;
		border-bottom: 1px solid #F4F3F2;
		margin-top: 0;
	}
	.list_tit1 .list_tit_li{
		height: 79upx;
		color: #999;
	}
	.list_tit1 .list_tit_li.cur{
		
		color: #333;
	}
	.list_tit1 .list_tit_li.cur::before {
		height: 5upx;
		bottom: 5upx;
	}
	.fl_list{
		width: 100%;
		padding: 15upx;
		display: flex;
		flex-wrap: wrap;
		background: #fff;
	}
	.pthz_li_padd{
		width: 100%;
		padding: 15upx;
	}
	.xq_box{
		width: 100%;
		height: 100upx;
	}
	.xq_box1{
		width: 100%;
		height: 100upx;
		position: fixed;
		bottom: 0;
		left: 0;
		background: #fff;
		z-index: 200;
		padding: 0 30upx;
		border: 1px solid #E1E1E1;
	}
	.pj_btn{
		font-size: 26upx;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 153upx;
		height: 50upx;
		background: #FE8018;
		border-radius: 10upx;
	}
	.pj_lv{
		font-size: 28upx;
	}
	.pj_lv .iconfont{
		font-size: 38upx;
		margin: 10upx;
		color: #EFEFEF;
	}
	.pj_lv .iconfont.cur{
		color: #FE8018;
	}
</style>

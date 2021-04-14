<template>
	<view class="minh100" >
		<view class="head_box" :class="{'cur_H':PageScroll>10}">
			<view class="header_L" @tap="back">
				<text class="iconfont icon-prev"></text>
			</view>
			<view class="my_tit_box">
				<!-- 我的店铺 -->
			</view>
			<view  class="header_L"></view>
		</view>
		<swiper v-if="bannerData.length>0" class="swiper" :indicator-dots="indicatorDots"
			indicator-color="rgba(255,255,255,.6)" indicator-active-color="rgba(255,255,255,1)"
		 :autoplay="autoplay" :interval="interval" :duration="duration" circular='true' :current="current_swp" @change="sweiper_change">
				<swiper-item  v-for="(item,idx) in bannerData">
						<image  class="swi_img" :src="getimg(item)" lazy-load="true" mode="aspectFill"></image>
						<!-- <image  class="swi_img" src="/static/images/mydpbg_02.jpg" lazy-load="true" mode="aspectFill"></image> -->
				</swiper-item>
				
		</swiper>
		<view class="index_box">
			<view class="swiper_dots">
				<view v-for="(item,idx) in bannerData" :class="swp_cur==idx?'active':''" @tap="change_swp(idx)"></view>
			</view>
			
			<view class="dis_flex aic ">
				<view class="msg_l">
					<view class="shop_name">{{datas.shop_name}}</view>
					<view class="sh_box  dis_flex aic ">
						
						<view class="sh_box_tel"  @tap="call" :data-tel='datas.phone'>
							{{datas.phone}}
							<!-- <text class="icon-dianhua iconfont"></text> -->
						</view>
						<view class="sh_box_add dis_flex aic">
							<text class="iconfont icon-weizhi"></text>
							<text class=" ">{{datas.address}}
							</text>
						</view>
					</view>
				</view>
				<image v-if="datas.logo" class="shop_tx" :src="getimg(datas.logo)" mode="aspectFill"></image>
			</view>
			<view class="dis_flex aic ju_b dp_bq">
				<view class="pf_list">
					<view>{{datas.avg_fraction}}分</view>
					<text v-for="(item1,index1) in datas.shop_type">{{item1}}</text>
					<!-- <text>插画师</text> -->
				</view>
				<view class="bj_btn" @tap="jump" data-url="/pages/cwsj_edit/cwsj_edit">编辑资料</view>
			</view>
		</view>
		<view class="dp_list">
			<view class="dp_li_box">
				<view class="dp_li" @tap="jump" data-url="/pages/my_team/my_team">
					<image class="dp_li_bg" src="/static/images/1.png" mode="aspectFill"></image>
					<view class="dp_li_msg">
						<image src="/static/images/myteam.png" mode="aspectFit"></image>
						<view class="dis_flex aic">我的团队<text class="iconfont icon-next-m"></text></view>
					</view>
				</view>
			</view>
			<view class="dp_li_box">
				<view class="dp_li" @tap="jump" data-url="/pages/my_fw_list/my_fw_list">
					<image class="dp_li_bg" src="/static/images/2.png" mode="aspectFill"></image>
					<view class="dp_li_msg">
						<image src="/static/images/myfuwu.png" mode="aspectFit"></image>
						<view class="dis_flex aic">我的服务<text class="iconfont icon-next-m"></text></view>
					</view>
				</view>
			</view>
			<view class="dp_li_box">
				<view class="dp_li"  @tap="jump" data-url="/pages/my_al_list/my_al_list">
					<image class="dp_li_bg" src="/static/images/3.png" mode="aspectFill"></image>
					<view class="dp_li_msg">
						<image src="/static/images/mycase.png" mode="aspectFit"></image>
						<view class="dis_flex aic">我的案例<text class="iconfont icon-next-m"></text></view>
					</view>
				</view>
			</view>
			<view class="dp_li_box">
				<view class="dp_li" @tap="jump" data-url="/pages/my_order_list_sh/my_order_list_sh">
					<image class="dp_li_bg" src="/static/images/1.png" mode="aspectFill"></image>
					<view class="dp_li_msg">
						<image src="/static/images/mycase.png" mode="aspectFit"></image>
						<view class="dis_flex aic">我的订单<text class="iconfont icon-next-m"></text></view>
					</view>
				</view>
			</view>
		</view>
	</view>
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
				show_num:0
			}
		},
		onPageScroll(e){
			console.log(e)
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
		onLoad() {
			that=this
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
			getdata(){
				///user/residence_info
				var jkurl="/user/get_user_shop_info"
				var datas={
					token:uni.getStorageSync('token')
				}
				uni.showLoading({
					title: '正在获取数据'
				})
				service.P_post(jkurl, datas).then(res => {
					that.btn_kg = 0
					console.log(res)
					if (res.code == 1) {
						var datas = res.data
						console.log(typeof datas)
							
						if (typeof datas == 'string') {
							datas = JSON.parse(datas)
						}
						that.datas=datas
						that.bannerData=datas.banner
							
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
			},
			
			getdata1111(){
				// /shops/get_shop_team
				var that =this
				var data = {
					shop_id:that.id
				}
				
				//selectSaraylDetailByUserCard
				var jkurl = '/shops/get_shop_team'
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
			call(e){
				service.call(e)
			},
			gettime(time){
				return service.gettime(time)
			},
			getimg(img) {
				// console.log(service.getimg(img))
				if(!img){
					return
				}
				return service.getimg(img)
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
			getcate(){
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
				 			
				 		that.tabs = datas
						if(that.fw_cur==0){
							that.fw_cur=datas[0].id
							uni.setStorageSync('al_type_id',datas[0].id)
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
		}
	}
</script>

<style scoped>
	.minh100{
		width: 100%;
		background: #F4F3F2;
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
	.cur_H text{
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
		width: 723upx;
		
		background: #FFFFFF;
		border-radius: 10px;
		position: relative;
		top: -50upx;
		z-index: 900;
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
		width: 580upx;
	}
	.shop_name{
		font-size: 38upx;
		color: #333;
		font-weight: bold;
		margin-bottom: 10upx;
	}
	.sh_box_tel{
		/* font-size: 36upx; */
		font-size: 24upx;
		color: #555;
		padding-right: 15upx;
		border-right: 1px solid #ddd;
		margin-right: 15upx;
		width: 180upx;
	}
	.sh_box_tel .iconfont{
		font-size: 50upx;
		/* color: #555; */
		color: rgb(254, 126, 19);
	}
	.sh_box_add{
		width: 380upx;
		color: #999;
		font-size: 26upx;
	}
	.sh_box_add text{
		margin-right: 8upx;
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
	.dp_list{
		width: 100%;
		padding: 15upx;
		display: flex;
		flex-wrap: wrap;
	}
	.dp_li_box{
		width: 50%;
		padding: 15upx;
	}
	.dp_li{
		width: 100%;
		height: 224upx;
		border-radius: 4px;
		position: relative;
	}
	.dp_li_bg{
		position: absolute;
		top: 0;
		z-index: 1;
		height: 224upx;
	}
	.dp_li_msg{
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		z-index: 10;
		font-size: 32upx;
		color: #fff;
	}
	.dp_li_msg text{
		font-size: 15upx;
	}
	.dp_li_msg image{
		width: 70upx;
		height: 70upx;
		margin-bottom: 20upx;
	}
</style>

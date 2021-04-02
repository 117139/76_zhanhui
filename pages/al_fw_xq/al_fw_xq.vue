<template>
	<view class="minh100">
		<view v-if="htmlReset==1" class="zanwu" @tap='onRetry'>请求失败，请点击重试</view>
		<view v-if="htmlReset==-1"  class="loading_def">
				<image class="loading_def_img" src="../../static/images/loading.gif" mode=""></image>
		</view>
		<view v-if="htmlReset==0">
			<view class="al_box">
				<view class="al_tit">{{datas.title}}</view>
				<view class="al_time">
					<text>{{datas.shop_name}}</text>
					<text>{{datas.create_time}}</text>
					<text class="flex_1"></text>
					<view v-if="datas.price" class="fw_pri">￥<text>{{datas.price}}</text></view>
				</view>
				<view class="al_inr">
					<view v-html="datas.content"></view>
				</view>
				<view class="al_footer">撰文｜{{datas.shop_name}}发布</view>
				
				<view v-if="datas.price" class="sub_btn" @tap="sub">下单</view>
			</view>
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
				htmlReset:-1,
				id:'',
				type:1,
				datas:''
			}
		},
		onLoad(option) {
			that=this
			that.id=option.id
			if(option.type){
				that.type=option.type
			}
			that.getdata()
		},
		methods: {
			getimg(img) {
				// console.log(service.getimg(img))
				return service.getimg(img)
			},
			sub(){
				var jkurl="/content/buy_service"
				var datas={
					service_id:that.id,
					// token:uni.getStorageSync('token')
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
						uni.showToast({
							icon: 'none',
							title: '下单成功'
						})
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
			getdata(keyword){
				
				///api/info/list
				var that =this
				var data = {
					case_id:that.id
				}
				
				//selectSaraylDetailByUserCard
				var jkurl = '/content/case_detail'
				if(that.type==2){
					jkurl = '/content/service_detail'
					data = {
						service_id:that.id
					}
				}
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
			}
		}
	}
</script>

<style scoped>
	.al_box{
		width: 100%;
		padding: 30upx;
	}
	.al_tit{
		font-size: 38upx;
		color: #000;
		line-height: 50upx;
		font-weight: bold;
		margin-bottom: 20upx;
	}
	.al_time{
		font-size: 26upx;
		color: #999;
		display: flex;
		align-items: center;
	}
	.al_time text{
		margin-right: 20upx;
	}
	.al_inr{
		font-size: 30upx;
		color: #444;
		padding-top: 30upx;
	}
	.fw_pri{
		color: #FF3535;
		font-size: 28upx;
	}
	.fw_pri text{
		font-size: 40upx;
	}
	.al_footer{
		font-size: 26upx;
		margin-top: 20upx;
		color: #999;
	}
	.sub_btn{
		margin-top: 40upx;
		width: 100%;
		height: 88upx;
		background: #FE8018;
		border-radius: 44upx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 32upx;
		color: #fff;
	}
</style>

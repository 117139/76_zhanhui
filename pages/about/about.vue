<template>
	<view class="minh100">
		<!-- <z_text></z_text> -->
		<view v-if="type=='fwsm'">
			
			<view v-if="datas" class="xieyi_main" v-html="datas.content"></view>
		</view>
		<view v-if="type=='about'" style="padding-top: 90upx;">
			<image class="logo" :src="getimg(datas.logo)" mode="aspectFit"></image>
			<!-- <view v-if="datas" class="xieyi_main" v-html="get_fwb(datas.content)"></view> -->
			<view v-if="datas" class="xieyi_main" v-html="datas.content"></view>
			<view class="about_text">
				<text v-if="datas.qq">QQ客服：{{datas.qq}}</text>
				<text v-if="datas.phone"><br>客服电话：{{datas.phone}}</text>
				<text v-if="datas.fixed_telephone"><br>固话：{{datas.fixed_telephone}}</text>
				<text v-if="datas.wechat"><br>微信公众号：{{datas.wechat}}</text>
				<text v-if="datas.address"><br>地址：{{datas.address}}</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	import service from '../../service.js';
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				title:'隐私协议',
				type:0,
				datas:''
			}
		},
		onLoad(Option) {
			var that =this
			console.log(Option)
			
			// fwsm
			if(Option.type=='fwsm'){
				that.type=Option.type
				that.title='fwsm'
				uni.setNavigationBarTitle({
					title:'服务声明'
				})
				this.getdata('/user/get_service_agreement')
			}
			if(Option.type=='ysxy'){
				that.type=Option.type
				that.title='隐私协议'
				uni.setNavigationBarTitle({
					title:'隐私协议'
				})
				this.getdata('ysxy')
			}
			if(Option.type=='yhxy'){
				that.type=Option.type
				that.title='用户协议'
				uni.setNavigationBarTitle({
					title:'用户协议'
				})
				this.getdata('yhxy')
			}
			if(Option.type=='about'){
				that.type=Option.type
				that.title='about'
				uni.setNavigationBarTitle({
					title:'关于我们'
				})
				this.getdata('/user/get_about_us')
				// that.datas=that.about_content
				// console.log(that.about_content)
			}
		
			// this.getdata()
		},
		computed: {
			...mapState(['hasLogin', 'forcedLogin', 'userName', 'loginDatas','about_content']),
		},
		
		methods: {
			get_fwb(str){
				return service.get_fwb(str)
			},
			getimg(img) {
				// console.log(service.getimg(img))
				return service.getimg(img)
			},
			getdata(keyword){
				
				///api/info/list
				var that =this
				var data = {}
				
				//selectSaraylDetailByUserCard
				var jkurl = keyword
				uni.showLoading({
					title: '正在获取数据'
				})
				service.P_get(jkurl, data).then(res => {
					that.btn_kg = 0
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
	.cu-custom{
		border-bottom: 1px solid #DBDBDB;
	}
	/* .minh100{
		padding-top: 90upx;
	} */
	.logo{
		width: 127upx;
		height: 127upx;
		margin: 0 auto;
		display: flex;
	}
	 .xieyi_main{
		 width: 100%;
		 padding: 30upx;
		 -webkit-box-sizing: border-box;
		 -moz-box-sizing: border-box;
		 box-sizing: border-box;
		 font-size: 28upx;
		 color: #333;
	 }
	 .xieyi_main image{
		 max-width: 100%!important;
	 }
	 .about_text{
		 padding: 0 30upx;
		 font-size: 28upx;
		 color: #333;
	 }
</style>

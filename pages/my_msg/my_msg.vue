<template>
	<view class="minh100">
		<!-- <z_text></z_text> -->
		<view v-if="htmlReset==1" class="zanwu" @tap='onRetry'>请求失败，请点击重试</view>
		<view v-if="htmlReset==-1"  class="loading_def">
				<image class="loading_def_img" src="../../static/images/loading.gif" mode=""></image>
		</view>
		<view v-if="htmlReset==0">
			<view class="msg_box">
				<view class="msg_li dis_flex aic ju_b" style="margin-bottom: 8upx;">
					<view class="msg_li_name">头像</view>
					<avatar stretch="short" inner="true" selWidth="400upx" selHeight="400upx" @upload="myUpload" :avatarSrc="getimg(loginDatas_data.avatar)"
					 avatarStyle="width: 100upx; height: 100upx; border-radius: 100%;">
					</avatar>
				</view>
				<view class="msg_li dis_flex aic ju_b">
					<view class="msg_li_name">昵称</view>
					<input class="msg_li_int" type="text" placeholder="请输入" v-model="loginDatas_data.nickname">
				</view>
			</view>
			<view class="sub_btn" @tap="sub">保存</view>
		</view>
	</view>
</template>

<script>
	import Vue from 'vue'
	import avatar from "../../components/yq-avatar/yq-avatar.vue";
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
				data_last:false,
				loginDatas_data:{}
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
			uni.stopPullDownRefresh()
		},
		components: {
			avatar
		},
		onLoad() {
			that =this
			that.htmlReset=0
			this.loginDatas_data=JSON.parse(JSON.stringify(that.loginDatas))
		},
		methods: {
			...mapMutations(['login','logindata','logout','setplatform']),
			onRetry(){
				that.htmlReset=0
				// that.getdata()
			},
			sub(){
				if(!this.loginDatas_data.nickname){
					uni.showToast({
						icon:'none',
						title:'请输入您的昵称'
					})
					return
				}
				uni.showToast({
					icon:'none',
					title:'操作成功'
				})
				// service.wxlogin()
				// setTimeout(()=>{
				// 	uni.navigateBack({
				// 		delta:1
				// 	})
				// },1000)
				// return
				var jkurl='/user/amendInfo'
				var datas={
					token: that.loginDatas.userToken || '',
					avatarurl:this.loginDatas_data.avatarurl,
					nickname:this.loginDatas_data.nickname,
				}
				if(this.btn_kg==1){
					return
				}
				this.btn_kg=1
				console.log(datas)
				service.P_post(jkurl, datas).then(res => {
					that.btn_kg=0
					console.log(res)
					if (res.code == 1) {
						var datas = res.data
						console.log(typeof datas)
					
						if (typeof datas == 'string') {
							datas = JSON.parse(datas)
						}
						console.log(res)
						
						uni.showToast({
							icon:'none',
							title:'操作成功'
						})
						service.wxlogin('token')
						setTimeout(()=>{
							uni.navigateBack({
								delta:1
							})
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
					that.btn_kg=0
					console.log(e)
					uni.showToast({
						icon: 'none',
						title: '获取数据失败，请检查您的网络连接'
					})
				})
				
				
			},
			myUpload(rsp) {
				var that = this
				var tximg = rsp.path; //更新头像方式一
				// Vue.set(that.loginDatas_data,'avatarurl',tximg)
				// return
				// #ifndef H5
				uni.uploadFile({
					url: service.IPurl + '/upload/streamImg', //仅为示例，非真实的接口地址
					filePath: tximg,
					name: 'file',
					formData: {
						token: that.loginDatas.userToken
					},
					success: (uploadFileRes) => {
						console.log(uploadFileRes.data);
						var ndata = JSON.parse(uploadFileRes.data)
						if (ndata.code == 1) {
							Vue.set(that.loginDatas_data,'avatarurl',ndata.msg)
			
						}
					}
				});
				// #endif
				// #ifdef H5
				uni.request({
						url: rsp.path,
						method: 'GET',
						responseType: 'arraybuffer',
						success: (res) => {
								let base64 = wx.arrayBufferToBase64(res.data); //把arraybuffer转成base64
								console.log('base64')
								base64 = 'data:image/jpeg;base64,' + base64; //不加上这串字符，在页面无法显示
								var datas={
									file:base64,
									type:1,
								}
								var jkurl='/upload/base64Img'
								console.log('h5 upload')
								// 单个请求
								service.P_post(jkurl, datas).then(res => {
									that.btn_kg=0
									console.log(res)
									if (res.code == 1) {
										Vue.set(that.loginDatas_data,'avatarurl',res.msg)
										
									} else {
										uni.showToast({
											icon: "none",
											title: "上传失败"
										})
									}
								}).catch(e => {
									that.btn_kg=0
									console.log(e)
									uni.showToast({
										icon: 'none',
										title: '获取数据失败'
									})
								})
						},
						fail: (err) => {
							console.log(err)
						}
				});
				// #endif
				//rsp.avatar.imgSrc = rsp.path; //更新头像方式二
			},
			getbanner() {
			
				///api/info/list
				var that = this
				var data = {}
			
				//selectSaraylDetailByUserCard
				var jkurl = '/entrance'
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
			
						that.banner = datas
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
		background: #F6F7F9;
		/* padding-top: 1px; */
		padding: 30upx;
	}
	.msg_box{
		width: 100%;
		border-radius: 10upx;
		padding: 0 30upx;
		background: #fff;
	}
	.msg_li{
		width: 100%;
		height: 125upx;
		/* padding: 15upx 30upx; */
	}
	.msg_li+.msg_li{
		border-top: 1px solid #F4F4F4;
	}
	.msg_li_name{
		font-size: 30upx;
		color: #444;
		width: 100px;
	}
	.msg_li_int{
		flex: 1;
		min-width: 0;
		text-align: right;
		font-size: 28upx;
	}
	.sub_btn{
		margin: 0 auto;
		width: 690upx;
		height: 79upx;
		/* background: linear-gradient(-90deg, #FC5534, #FFBE33);
		border-radius: 40px; */
		background: #FF7029;
		border-radius: 10upx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 30upx;
		color: #fff;
		margin-top: 100upx;
	}
</style>

<template>
	<view class="minh100">
		<view class="box_box">
			<view class="box_main">
				<view class="box_tit">团队简介</view>
				<textarea class="box_content" v-model="team" placeholder="输入团队简介" />
				<view class="box_tit">团队照片</view>
				<view class="pz_imgs">
					<view v-if="sj_img2.length>0" class="pz_img" v-for="(item,index) in sj_img2">
						<image class="img_del" src="/static/images/img_del.png" mode="aspectFill" @tap="imgdel" :data-idx="index"
						 data-type="2"></image>
						<image mode="aspectFill" :src="getimg(item)" @tap="pveimg" :data-src="getimg(item)"></image>
						<!-- <image mode="aspectFill" :src="item" @tap="pveimg" :data-src="item"></image> -->
					</view>
					<view class="pz_img" v-if="sj_img2.length<9">
						<image src="/static/images/upimg.png" @tap="upimg" mode="aspectFit" data-type="2"></image>
					</view>
				</view>
			
				
				
				
				<view class="sub_btn" @tap="sub">提交</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Vue from 'vue'
	import service from '../../service.js';
	import area from '../../common/area.js';
	import {
		mapState,
		mapMutations
	} from 'vuex'
	var that
	export default {
		data() {
			return {
				team:'',
				sj_img2:[],
				shop_id:'',
				datas:{}
			}
		},
		computed: {
			...mapState(['hasLogin', 'userName', 'loginDatas']),
		},
		onLoad() {
			that=this
			that.getdata()
			that.areaJson=area.area
		},
		methods: {
			...mapMutations(['login','logindata','logout','setplatform']),
			///user/get_my_team
			getdata(){
				///user/residence_info
				var jkurl="/user/get_my_team"
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
						that.team=datas.team
						that.sj_img2=datas.arr_team_img
						that.shop_id=datas.shop_id	
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
			
			
			sub(){
				var datas={
					team:that.team,
					team_img:that.sj_img2.join(','),
					shop_id:that.shop_id,
				}
				var jkurl="/user/update_my_team"
				if(that.btn_kg==1){
					return
					
				}
				that.btn_kg=1
				
				uni.showLoading({
					title: '正在提交'
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
							icon:'none',
							title:'提交成功'
						})
						setTimeout(function(){
							// that.show_tk=true
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
					that.btn_kg = 0
					console.log(e)
					uni.showToast({
						icon: 'none',
						title: '获取数据失败'
					})
				})
			},
			upimg(e) {
				var that = this
				var datas = e.currentTarget.dataset
				// 从相册选择1张图
				var z_count =9 - that.sj_img2.length
				
				uni.showActionSheet({
					itemList: ['拍照', '相册'],
					success: function(res) {
						console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
						var sourceType = ['camera', 'album']
						if (res.tapIndex == 0) {
							sourceType = ['camera']
						} else {
							sourceType = ['album']
						}
						uni.chooseImage({
							count: z_count,
							sizeType: ['original', 'compressed'],
							sourceType: sourceType,
							success: function(res) {
								console.log(res)
								const tempFilePaths = res.tempFilePaths
			
			
								// if(datas.type==2){
								// 	that.sj_img2=that.sj_img2.concat(res.tempFilePaths).slice(0,9)
								// }else{
								// 	that.sj_img=that.sj_img.concat(res.tempFilePaths).slice(0,9)
								// }
			
								// return
								// that.upimg1(tempFilePaths, 0, datas.type)
								that.upimg1(tempFilePaths,datas.type, 0)
								
							}
						});
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			
			
			},
			upimg1(imgs, type, i) {
				var that = this
				service.wx_upload(imgs[i]).then(res => {
			
					that.btn_kg = 0
					console.log(res)
					if (res.code == 1) {
						var datas = res.data.url
						console.log(i)
						var newdata
						if (type == 2) {
							that.sj_img2.push(datas)
							newdata = that.sj_img2.length
							var shop_banne=that.sj_img2.join(',')
							Vue.set(that.datas,'shop_banner',shop_banne)
						} else {
							that.sj_img.push(datas)
							newdata = that.sj_img.length
							Vue.set(that.datas,'logo',datas)
						}
			
			
						console.log(newdata < 1 && i < imgs.length - 1)
						if (newdata < 9 && i < imgs.length - 1) {
							i++
							that.upimg1(imgs, type, i)
						}
					} else {
						if (res.msg) {
							uni.showToast({
								icon: 'none',
								title: res.msg
							})
						} else {
							uni.showToast({
								icon: "none",
								title: "上传失败"
							})
						}
					}
				}).catch(e => {
					that.btn_kg = 0
					console.log(e)
					uni.showToast({
						icon: 'none',
						title: '操作失败'
					})
				})
			},
			getimg(img){
				return service.getimg(img)
			},
			pveimg(e) {
				service.pveimg(e)
			},
			imgdel(e) {
				var that = this
				console.log(e.currentTarget.dataset.idx)
				var datas = e.currentTarget.dataset
				uni.showModal({
					title: '提示',
					content: '确定要删除这张图片吗',
					success(res) {
						if (res.confirm) {
							console.log('用户点击确定', e.currentTarget.dataset.type)
							if (datas.type == 2) {
								that.sj_img2.splice(datas.idx, 1)
								var shop_banne=that.sj_img2.join(',')
								var thum=that.sj_img2[0]||''
								Vue.set(that.datas,'thumbnail_img',thum)
								Vue.set(that.datas,'shop_banner',shop_banne)
							} else {
								that.sj_img.splice(datas.idx, 1)
								Vue.set(that.datas,'logo','')
							}
			
						} else if (res.cancel) {
							console.log('用户点击取消')
						}
					}
				})
			}
		}
	}
</script>

<style scoped>
	.box_box{
		width: 100%;
		position: relative;
		padding: 0 30upx 0;
		
	}
	
	.box_main{
		width: 100%;
		background: #FFFFFF;
		box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
		border-radius: 4px;
		position: relative;
		z-index: 2;
		padding:0 30upx 30upx;
	}
	.box_tit{
		width: 100%;
		height: 100upx;
		display: flex;
		align-items: center;
		font-weight: bold;
	}
	.box_int{
		width: 100%;
		height: 76upx;
		background: #FFFFFF;
		border: 1px solid #DEDEDE;
		border-radius: 4upx;
		font-size: 30upx;
		color: #444;
		padding: 0 20upx;
		display: flex;
		align-items: center;
	}
	.box_int text{
		font-size: 24upx;
	}
	
	.pz_imgs {
		display: flex;
		flex-wrap: wrap;
		/* padding-bottom: 30upx;
		border-bottom: 1px solid #eee; */
	}
	
	.pz_img {
		/* width: 180upx;
		height: 140upx; */
		width: 174upx;
		border-radius: 10upx;
		margin-right: 15upx;
		/* margin-bottom: 15upx; */
		position: relative;
	}
	
	.pz_img image {
		/* width: 180upx;
		height: 140upx; */
		width: 164upx;
		height: 164upx;
	}
	
	.pz_img .img_del {
		width: 30upx;
		height: 30upx;
		/* background: #FF4B4B; */
		border-radius: 15upx;
		position: absolute;
		top: -10upx;
		right: -10upx;
		z-index: 10;
	}
	.box_content{
		width: 100%;
		height: 248upx;
		background: #FFFFFF;
		border: 1px solid #DEDEDE;
		border-radius: 4upx;
		padding: 25upx;
		font-size: 30upx;
		color: #333;
	}
	.sub_btn{
		margin-top: 240upx;
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

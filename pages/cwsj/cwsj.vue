<template>
	<view class="minh100">
		<view class="box_box">
			<image class="bpx_bg" src="../../static/images/cwsj_02.jpg" mode="widthFix"></image>
			<view class="box_main">
				<view class="box_tit">店铺名称</view>
				<input class="box_int" type="text" v-model="datas.shop_name" placeholder="请输入店铺名称">
				<view class="box_tit">LOGO设置</view>
				<view class="pz_imgs">
					<view v-if="sj_img.length>0" class="pz_img" v-for="(item,index) in sj_img">
						<image class="img_del" src="/static/images/img_del.png" mode="aspectFill" @tap="imgdel" :data-idx="index"
						 data-type="1"></image>
						<image mode="aspectFill" :src="getimg(item)" @tap="pveimg" :data-src="getimg(item)"></image>
						<!-- <image mode="aspectFill" :src="item" @tap="pveimg" :data-src="item"></image> -->
					</view>
					<view class="pz_img" v-if="sj_img.length<1">
						<image src="/static/images/upimg.png" @tap="upimg" mode="aspectFit" data-type="1"></image>
					</view>
				</view>
				<view class="box_tit">店铺背景图</view>
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
				<view  v-if="array" class="box_tit">服务类型</view>
				<picker v-if="array" @change="bindPickerChange"  data-type="1" :value="fw_index" :range="array" range-key="category_name">
					<view class="box_int ju_b">
						<view>{{array[fw_index]?array[fw_index].category_name:'请选择服务类型'}}</view>
						<text class="iconfont icon-next-m"></text>
					</view>
				</picker>
				<view class="box_tit">店铺标签</view>
				<!-- <input class="box_int" type="text" v-model="datas.shop_type" placeholder="请输入店铺标签"> -->
				<textarea class="box_int box_textarea" value=""  v-model="datas.shop_type" placeholder="请输入店铺标签,每个标签以回车区分"  maxlength="-1" />
				<view class="box_tit">联系人姓名</view>
				<input class="box_int" type="text" v-model="datas.user_name" placeholder="请输入联系人姓名">
				<view class="box_tit">联系人电话</view>
				<input class="box_int" type="number" v-model="datas.phone" placeholder="请输入联系人电话">
				<view class="box_tit">店铺地址</view>
				
					<view class="box_int ju_b">
						<!-- <region-picker class="addmsg" mode="region" :jsonData="areaJson" @change="bindRegionChange" :value="region">
								<view class="dis_flex aic" style="width: 500upx;">
									<view class="flex_1">{{region[0]+region[1]+region[2]}}</view>
									<text class="iconfont icon-off" ></text>
								</view>
								
						</region-picker> -->
						<view class="dis_flex aic" style="width: 500upx;">
							<view class="flex_1 text-cut">{{datas.address?datas.address:'请选择店铺地址'}}</view>
							<!-- <text class="iconfont icon-off" ></text> -->
						</view>
						<text @tap="getLocation_fuc" class="iconfont icon-adress" style="color: #4AA3FF;font-size: 35upx;"></text>
					</view>
				
				<view class="box_tit">店铺简介</view>
				<textarea class="box_content" v-model="datas.detail" placeholder=""  maxlength="-1"/>
				
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
				fw_list:[],
				sj_img:[],
				sj_img2:[],
				array:[],
				fw_index:0,
				
				region_id:[1, 35, 36],
				region: ['北京市', '北京', '东城区'],
				areaJson:{},
				datas:{
					shop_name:'',        //	是	string	店铺名称
					logo:'',             //	是	string	logo
					thumbnail_img:'',    //	是	string	商户缩略图
					shop_banner:'',       //	是	array	店铺背景图（一维数组）
					shop_category_id:'', //	是	string	服务类型
					shop_type:'',        //	是	array	店铺标签（一维数组）
					user_name:'',        //	是	string	联系人姓名
					phone:'',            //	是	string	联系人电话
					address:'',          //	是	string	店铺地址
					lats:'',             //	是	string	经度
					lngs:'',             //	是	string	纬度
					detail:'',           //	是	string	店铺简介
				}
			}
		},
		computed: {
			...mapState(['hasLogin', 'userName', 'loginDatas']),
		},
		onLoad() {
			that=this
			that.getdata()
			that.getcate()
			that.areaJson=area.area
		},
		methods: {
			...mapMutations(['login','logindata','logout','setplatform']),
			getLocation_fuc(){
				console.log('chooseLocation')
				wx.chooseLocation({
				  success: function (res) {
				    console.log(res);
						 
				    
				    // that.datas.address=res.address
				    // that.datas.lngs=res.longitude
				    // that.datas.lats=res.latitude
						
						Vue.set(that.datas,'address',res.address)
						Vue.set(that.datas,'lngs',res.longitude)
						Vue.set(that.datas,'lats',res.latitude)
				  },
				  fail: function (err) {
				    console.log(err)
						// var res={
						// 	address: "北京市海淀区万柳东路31号",
						// 	distance: 0,
						// 	errMsg: "chooseLocation:ok",
						// 	latitude: 39.962044,
						// 	longitude: 116.301727,
						// 	name: "万柳怡水园"
						// }
						// Vue.set(that.datas,'address',res.address)
						// Vue.set(that.datas,'lngs',res.longitude)
						// Vue.set(that.datas,'lats',res.latitude)
				  }
				});
			},
			bindPickerChange(e){
				console.log(e.currentTarget.dataset.type)
				var datas=e.currentTarget.dataset
				if(datas.type==1){
					that.fw_index=e.detail.value
					Vue.set(that.datas,'shop_category_id',that.array[that.fw_index].id)
				}
			},
			getcate(){
				 var data = {}
				 			
				 //selectSaraylDetailByUserCard
				 // var jkurl = '/content/get_shop_service_category'
				 var jkurl = '/shops/get_shop_category'
				service.P_post(jkurl, data).then(res => {
				 	that.btn_kg = 0
				 	console.log(res)
				 	if (res.code == 1) {
				 		var datas = res.data
				 		console.log(typeof datas)
				 			
				 		if (typeof datas == 'string') {
				 			datas = JSON.parse(datas)
				 		}
				 			
				 		that.array=datas
						Vue.set(that.datas,'shop_category_id',that.array[0].id)
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
			
			getdata(){
				///user/residence_info
				var jkurl="/user/residence_info"
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
						// that.datas=datas
						if(datas.status==3){
							if(datas.refusal_reasons){
								uni.showToast({
									icon: 'none',
									title: datas.refusal_reasons
								})
							}else{
								uni.showToast({
									icon: 'none',
									title: '审核失败'
								})
							}
						}	
					} else {
						// if (res.msg) {
						// 	uni.showToast({
						// 		icon: 'none',
						// 		title: res.msg
						// 	})
						// } else {
						// 	uni.showToast({
						// 		icon: 'none',
						// 		title: '操作失败'
						// 	})
						// }
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
				if (!that.datas.phone) {
					uni.showToast({
						icon: 'none',
						title: '请输入联系人电话'
					});
					return;
				}
				///user/residence_info
				var jkurl="/user/user_residence"
				
				var newxz=that.datas.shop_type.split(/\n/).join(',')
				Vue.set(that.datas,'shop_type',newxz)
				console.log(that.datas)
				// return
				if(that.btn_kg==1){
					return
					
				}
				that.btn_kg=1
				var datas=that.datas
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
						service.login_tel('1')
						setTimeout(function(){
							// that.show_tk=true
							that.datas={
								shop_name:'',        //	是	string	店铺名称
								logo:'',             //	是	string	logo
								thumbnail_img:'',    //	是	string	商户缩略图
								shop_banner:'',       //	是	array	店铺背景图（一维数组）
								shop_category_id:'', //	是	string	服务类型
								shop_type:'',        //	是	array	店铺标签（一维数组）
								user_name:'',        //	是	string	联系人姓名
								phone:'',            //	是	string	联系人电话
								address:'',          //	是	string	店铺地址
								lats:'',             //	是	string	经度
								lngs:'',             //	是	string	纬度
								detail:'',           //	是	string	店铺简介
							}
							that.sj_img=''
							that.sj_img2=''
						},1000)
							
							
					} else {
						var shop_type1=that.datas.shop_type.join('\n')
						Vue.set(that.datas,'shop_type',shop_type1)
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
					var shop_type1=that.datas.shop_type.join('\n')
					Vue.set(that.datas,'shop_type',shop_type1)
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
				var z_count = 1 - that.sj_img.length
				if (datas.type == 2) {
					z_count = 9 - that.sj_img2.length
				}
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
							Vue.set(that.datas,'thumbnail_img',that.sj_img2[0])
							Vue.set(that.datas,'shop_banner',shop_banne)
							if (newdata < 9 && i < imgs.length - 1) {
								i++
								that.upimg1(imgs, type, i)
							}
						} else {
							that.sj_img.push(datas)
							newdata = that.sj_img.length
							Vue.set(that.datas,'logo',datas)
							if (newdata < 1 && i < imgs.length - 1) {
								i++
								that.upimg1(imgs, type, i)
							}
						}
			
			
						// console.log(newdata < 1)
						// console.log(i < imgs.length - 1)
						// console.log(newdata < 1 && i < imgs.length - 1)
						// if (newdata < 1 && i < imgs.length - 1) {
						// 	i++
						// 	that.upimg1(imgs, type, i)
						// }
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
		padding: 150upx 30upx 0;
		
	}
	.bpx_bg{
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
	}
	.box_main{
		width: 100%;
		background: #FFFFFF;
		box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.25);
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
	.box_textarea{
		height: 200upx;
		padding: 15upx;
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

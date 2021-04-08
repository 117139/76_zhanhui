<template>
	<view class="minh100">
		<view v-if="htmlReset==1" class="zanwu" @tap='onRetry'>请求失败，请点击重试</view>
		<view v-if="htmlReset==-1"  class="loading_def">
				<image class="loading_def_img" src="../../static/images/loading.gif" mode=""></image>
		</view>
		<view v-if="htmlReset==0">
			<view class="fp_box">
				<picker v-if="array" @change="bindPickerChange"  data-type="1" :value="fw_index" :range="array" range-key="name">
					<view class="box_int ju_b">
						<view class="box_int_name">发票</view>
						<view>{{array[fw_index]?array[fw_index].name:'请选择发票类型'}}</view>
						<text class="iconfont icon-next-m"></text>
					</view>
				</picker>
				<picker v-if="array" @change="bindPickerChange"  data-type="2" :value="tt_index" :range="array_tt" range-key="name">
					<view class="box_int ju_b">
						<view class="box_int_name">抬头类型</view>
						<view>{{array_tt[tt_index]?array_tt[tt_index].name:'请选择抬头类型'}}</view>
						<text class="iconfont icon-next-m"></text>
					</view>
				</picker>
				<view class="box_int ju_b">
					<view class="box_int_name">发票抬头</view>
					<input class="flex_1" type="text" v-model="fp_name" placeholder="请输入发票抬头">
				</view>
				<block v-if="tt_index==1">
					<view class="box_int ju_b">
						<view class="box_int_name">税号</view>
						<input class="flex_1" type="text" v-model="fp_sh" placeholder="请输入税号">
					</view>
					<view class="box_int ju_b">
						<view class="box_int_name">开户银行</view>
						<input class="flex_1" type="text" v-model="fp_khh" placeholder="请输入开户银行">
					</view>
					<view class="box_int ju_b">
						<view class="box_int_name">银行账号</view>
						<input class="flex_1" type="text" v-model="fp_yhzh" placeholder="请输入银行账号">
					</view>
					<view class="box_int ju_b">
						<view class="box_int_name">企业地址</view>
						<input class="flex_1" type="text" v-model="fp_qydz" placeholder="请输入企业地址">
					</view>
					<view class="box_int ju_b">
						<view class="box_int_name">企业电话</view>
						<input class="flex_1" type="text" v-model="fp_qydh" placeholder="请输入企业电话">
					</view>
				</block>
				<view class="sub_btn" @tap="sub">提交</view>
				<view class="sub_btn" @tap="sub" style="background: #888;">不开发票</view>
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
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				htmlReset:-1,
				data_last:false,
				array:[
					{
						name:'纸质发票'
					},
					{
						name:'电子发票'
					},
				],
				fw_index:0,
				array_tt:[
					{
						name:'个人或事业单位'
					},
					{
						name:'企业'
					},
				],
				tt_index:0,
				fp_name:'',
				fp_sh:'',
				fp_khh:'',
				fp_yhzh:'',
				fp_qydz:'',
				fp_qydh:'',
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
		onLoad() {
			that=this
			that.onRetry()
		},
		methods: {
			...mapMutations(['login','logindata','logout','setplatform']),
			bindPickerChange(e){
				console.log(e.currentTarget.dataset.type)
				var datas=e.currentTarget.dataset
				if(datas.type==1){
					that.fw_index=e.detail.value
					// Vue.set(that.datas,'shop_category_id',that.array[that.fw_index].id)
				}
				if(datas.type==2){
					that.tt_index=e.detail.value
					// Vue.set(that.datas,'shop_category_id',that.array[that.tt_index].id)
				}
			},
			onRetry(){
				that.htmlReset=0
				// that.getdata()
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
		width: 100%;
		padding: 30upx;
		background: #f7f7f7;
	}
	.fp_box{
		width: 100%;
		padding: 0 30upx 30upx;
		background: #FFFFFF;
		border-radius: 8upx;
	}
	.box_int{
		width: 100%;
		height: 96upx;
		background: #FFFFFF;
		/* border: 1px solid #DEDEDE; */
		border-radius: 4upx;
		font-size: 30upx;
		color: #444;
		padding: 0 0upx;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #dedede;
	}
	.box_int_name{
		width: 6em;
	}
	.box_int text{
		font-size: 24upx;
	}
	.box_int input{
		height: 100%;
		font-size: 30upx;
		color: #444;
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

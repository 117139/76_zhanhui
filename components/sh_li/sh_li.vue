<template>
	<view>
		<view class="sh_li"  @tap="jump" :data-url="'/pages/dp_xq/dp_xq?id='+datas.id">
			<image class="sh_li_img" :src="getimg(datas.thumbnail_img)" mode="aspectFill"></image>
			<view class="flex_1">
				<view class="sh_name text-cut">{{datas.shop_name}}</view>
				<view class="sh_box  dis_flex aic ju_b">
					<view class="sh_box_add dis_flex aic">
						<text class="iconfont icon-weizhi"></text>
						<text class="text-cut ">{{datas.address}}</text>
					</view>
					<view class="sh_box_tel"  @tap="call" :data-tel='datas.phone'>
					
						<text class="icon-dianhua iconfont"></text>
					</view>
				</view>
				<view class="pf_list">
					<view>{{datas.avg_fraction?datas.avg_fraction:0}}分</view>
					<text v-for="(item1,index1) in datas.shop_type">{{item1}}</text>
					<!-- <text>插画师</text> -->
				</view>
				<view class="sh_msg">
					<image class="sh_img" :src="getimg(datas.logo)" mode="aspectFill"></image>
					<view class="flex_1 text-cut">{{datas.shop_name}}</view>
					<text class="icnfont icon-next-m"></text>
				</view>
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
		name:"sh_li",
		props: {
			datas: '',
		},
		data() {
			return {
				
			};
		},
		computed: {
			...mapState(['hasLogin',  'userName', 'loginDatas']),
		},
		methods:{
			...mapMutations(['login','logindata','logout','setplatform']),
			
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
			call(e){
				service.call(e)
			},
			gettime(time){
				return service.gettime(time)
			},
		}
	}
</script>

<style scoped>
	.sh_li{
		width: 100%;
		display: flex;
	}
	.sh_li_img{
		width: 199upx;
		height: 199upx;
		border-radius: 10upx;
		margin-right: 15upx;
		flex:none;
	}
	.sh_name{
		width: 450upx;
		font-size: 32upx;
		color: #333;
		font-weight: bold;
		margin-bottom: 20upx;
	}
	.sh_box{
		width: 100%;
	}
	.sh_box_add{
		font-size: 26upx;
		color: #999;
		width: 400upx;
	}
	.sh_box_tel{
		font-size: 36upx;
		color: #555;
		padding-left: 30upx;
		border-left: 1px solid #ddd;
	}
	.sh_box_tel .iconfont{
		font-size: 36upx;
		/* color: #555; */
		color: rgb(254, 126, 19);
	}
	.pf_list{
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
	.sh_msg{
		font-size: 22upx;
		color: #333;
		display: flex;
		align-items: center;
		margin-top: 10upx;
	}
	.sh_msg image{
		width: 38upx;
		height: 38upx;
		border-radius: 50%;
		margin-right: 10upx;
		flex: none;
	}
	.sh_msg text{
		font-size: 16upx;
		color: #999;
		flex: none;
	}
</style>

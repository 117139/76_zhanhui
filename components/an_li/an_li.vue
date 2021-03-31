<template>
	<view>
		<view class="dis_flex ju_b al_li" @tap="jump" :data-url="'/pages/al_fw_xq/al_fw_xq?id='+datas.id+'&type='+type">
			<view class="flex_1">
				<view class="oh2 an_tit">{{datas.title}}</view>
				<view class=" dis_flex aic an_time">
					<text  v-if="datas.shop_name" class="oh1" style="max-width: 50%;">{{datas.shop_name}}发布</text>
					<text  v-else >官方发布</text>
					<text class="flex_1">{{datas.create_time}}</text>
					<view v-if="datas.price" class="fw_pri">￥<text>{{datas.price*1}}</text></view></view>
			</view>
			<image v-if="datas.thumbnail_img" class="al_li_img" :src="getimg(datas.thumbnail_img)" mode="aspectFill"></image>
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
		name:"an_li",
		props: {
			datas: '',
			type:''
		},
		data() {
			return {
				
			};
		},
		methods:{
			getimg(img) {
				// console.log(service.getimg(img))
				return service.getimg(img)
			},
			jump(e) {
				var that = this
				// if(!that.hasLogin){
				// 	uni.navigateTo({
				// 		url:'/pages/login/login'
				// 	})
				// 	return
				// }
				if (that.btn_kg == 1) {
					return
				} else {
					that.btn_kg = 1
					setTimeout(function() {
						that.btn_kg = 0
					}, 1000)
				}
			
				service.jump(e)
			}
		}
	}
</script>

<style scoped>
	.al_li{
		width: 100%;
		padding: 30upx 0;
		border-bottom: 1px solid #F4F2F3;
	}
	.an_tit{
		font-size: 34upx;
		color: #000;
		font-weight: bold;
		line-height: 45upx;
		height: 90upx;
	}
	.an_time{
		font-size: 24upx;
		color: #999;
		margin-top: 5upx;
	}
	.an_time text+text{
		margin-left: 16upx;
		font-weight: bold;
	}
	.al_li_img{
		width: 222upx;
		height: 135upx;
		border-radius: 4upx;
		margin-left: 10upx;
	}
	.fw_pri{
		flex: none;
		color: #FF1212;
		font-size: 28upx;
		margin-left: 10upx;
	}
	.fw_pri text{
		font-size: 36upx;
	}
</style>

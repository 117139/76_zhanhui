<template>
	<view>
		<view class="dis_flex ju_b al_li" >
			<view class="flex_1">
				<view class="oh2 an_tit">{{datas.title}}</view>
				<view class="oh1 an_time"><text>{{datas.shop_name}}</text><text>{{datas.create_time}}</text></view>
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
	}
	.an_time text+text{
		margin-left: 16upx;
		font-weight: bold;
	}
	.al_li_img{
		width: 222upx;
		height: 135upx;
		border-radius: 4upx;
	}
</style>

<template>
	<view class="minh100">
    <view class="my_box dis_flex aic  ju_c">
			<view v-if="hasLogin" class="my_box1 dis_flex aic ju_c"  @tap="jump" data-url='/pages/my_msg/my_msg'  :data-login='false' :data-haslogin='hasLogin'>
				<!-- <text class="iconfont icon-sangedian my_set" @tap="jump" data-url='/pages/my_msg/my_msg'  :data-login='false' :data-haslogin='hasLogin'></text> -->
				<image class="user_tximg" :src="getimg(loginDatas.avatar)" mode="aspectFill"></image>
				<view class="user_name flex_1">{{loginDatas.nickname}}</view>
				<text class="iconfont icon-next-m go_my"></text>
			</view>
			<view v-else class="user_name" @tap="jump" data-url='/pages/login/login'>登录/注册</view>
    </view>
    <view class="my_list">
			<image class="my_list_sj" @tap="jump" data-url='/pages/cwsj/cwsj'  :data-login='false' :data-haslogin='hasLogin' src="../../static/images/cwsj_03.png" mode="widthFix"></image>
			<image class="my_list_sj" @tap="jump" data-url='/pages/my_dp_index/my_dp_index'  :data-login='false' :data-haslogin='hasLogin' src="../../static/images/cwsj1_03.png" mode="widthFix"></image>
			<view class="my_li dis_flex ju_b aic">
				<view>我的订单</view>
				<text class="iconfont icon-next-m"></text>
			</view><view class="my_li dis_flex ju_b aic">
				<view>我的电话订单</view>
				<text class="iconfont icon-next-m"></text>
			</view>
			<view class="my_li dis_flex ju_b aic">
				<view>我的评价</view>
				<text class="iconfont icon-next-m"></text>
			</view>
			<view class="my_li dis_flex ju_b aic" @tap="jump" data-url="/pages/about/about?type=about">
				<view>关于我们</view>
				<text class="iconfont icon-next-m"></text>
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
                nickname:'',
                avatar:'',
                status:0,
			
			}
		},
		computed: {
			...mapState(['hasLogin', 'userName', 'loginDatas']),
		},
		onLoad() {
		   
		
	 },
		methods: {
      getimg(img) {
      	// console.log(service.getimg(img))
      	return service.getimg(img)
      },
			jump(e) {
				var that = this
			
				if (that.btnkg == 1) {
					return
				} else {
					that.btnkg = 1
					setTimeout(function() {
						that.btnkg = 0
					}, 1000)
				}
			
				service.jump(e)
			},
		},
        
        
	}
</script>

<style scoped>
	.minh100{
		min-height: calc(100vh - 50px - env(safe-area-inset-bottom));
		background: #EEEEEE;
	}
	.my_box{
		width: 100%;
		height: 375upx;
		background-image: url(../../static/images/my_bg_01.jpg);
		background-repeat: no-repeat;
		background-size: 100% 375upx;
		padding: 0 30upx;
		position: relative;
	}
	.my_set{
		position: absolute;
		top: 30upx;
		right: 30upx;
		font-size: 35upx;
		color: #333;
	}
	.my_box1{
		width: 100%;
	}
	.user_tximg {
		width: 118upx;
		height: 118upx;
		background: #FFFFFF;
		border: 2upx solid #CBB180;
		box-shadow: 0upx 0upx 12upx 0upx rgba(188, 157, 103, 0.2);
		border-radius: 50%;
		flex: none;
		margin-right: 15upx;
	}
	.user_name{
		font-size: 36upx;
		color: #fff;
	}
	.go_my{
		color: #fff;
		font-size: 30upx;
	}
	.my_list{
		width: 100%;
		background: #fff;
		padding: 0 30upx;
	}
	.my_list_sj{
		width: 100%;
		margin-bottom: 20upx;
	}
	.my_li{
		width: 100%;
		font-size: 30upx;
		color: #333;
		height: 100upx;
	}
	.my_li .icon-next-m{
		color: #999;
		font-size: 16upx;
	}
	.my_li+.my_li{
		border-top: 1px solid #EEEEEE;
	}
</style>

<template>
	<view class="">
		<view v-if="htmlReset==1" class="zanwu minh100" @tap='onRetry'>请求失败，请点击重试</view>
		<view v-if="htmlReset==-1"  class="loading_def minh100">
				<image class="loading_def_img" src="../../static/images/loading.gif" mode=""></image>
		</view>
		<view v-show="htmlReset==0">
			<view>
				<slot></slot>
			</view>
			
			
		</view>
		<!-- 其他公共组件 -->
		<!-- <bao-jing v-if="bj_show"></bao-jing> -->
	</view>
</template>

<script>
	export default {
		props: {
			bj_show:{
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				htmlReset: -1
			}
		},
		methods: {
			onRetry(e){
				this.$emit('Retry', e);
			},
			htmlReset_fuc(num) {
				this.htmlReset=num
				console.log('this.htmlReset-----------?>')
				console.log(this.htmlReset)
			},
			maskHide() {
				if(this.tapMaskHide) this.hide();
			},
			hide() {
				this.showBl = false;
			},
			voidFc() {}
		}
	}
</script>

<style scoped>
	.minh100{
		position: relative;
		/* z-index: 900; */
	}
	.zanwu{
		width: 100%;
		line-height: 240rpx;
		text-align: center;
		font-size: 28rpx;
		color: #999;
	}
	.loading_def{
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #fff;
		z-index: 900;
	}
	.loading_def_img{
		width: 200rpx!important;
		height: 200rpx!important
	}
</style>

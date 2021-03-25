<template>
	<view>
		<view class="cu-custom" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar fixed" :style="style" :class="[bgImage!=''?'none-bg text-white bg-img':'',bgColor]" style="overflow: hidden;">
				<!-- <image class="cu-bar_image" v-if="bgImage!=''" :src="bgImage" mode="aspectFill" :style="[{height:CustomBar + 'px'}]"></image> -->
				<image class="cu-bar_image" v-if="bgImage!=''" :src="bgImage" mode="widthFix" :style="[{height:CustomBar + 'px'}]"></image>
				<view class="action" @tap="BackPage" v-if="isBack">
					<text class="cuIcon-back iconfont iconicon-test"></text>
					<slot name="backText"></slot>
				</view>
				<view class="content" :style="[{top:StatusBar + 'px'}]">
					<slot name="content"></slot>
				</view>
				<view class="nav_right">
					<slot name="right"></slot>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar
			};
		},
		name: 'cu-custom',
		computed: {
			style() {
				var StatusBar= this.StatusBar;
				var CustomBar= this.CustomBar;
				var bgImage = this.bgImage;
				var style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;
				if (this.bgImage) {
					style = `${style}background-image:url(${bgImage});`;
				}
				return style
			}
		},
		props: {
			bgColor: {
				type: String,
				default: ''
			},
			isBack: {
				type: [Boolean, String],
				default: false
			},
			bgImage: {
				type: String,
				default: ''
			},
		},
		methods: {
			BackPage() {
				if (getCurrentPages().length < 2 && 'undefined' !== typeof __wxConfig) {
					let url = '/' + __wxConfig.pages[0]
					return uni.redirectTo({url})
				}
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style scoped>
	.cu-custom{
		overflow: hidden;
	}
	.cu-bar_image{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		z-index: 99999;
	}
	.action{
		z-index: 99999999;
		color: #333;
	}
	.content{
		z-index: 99999999;
	}
	.nav_right{
		z-index: 99999999;
	}
</style>

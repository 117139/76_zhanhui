<template>
	<view v-if="share_off" class="tx_share">
		<image class="tx_share_bg" src="../../static/images/tx_share_02.jpg" mode="widthFix"></image>
		<view class="share_btn">
			<button type="default" open-type="share" ></button>
		</view>
		<view class="share_off" @tap="off_fuc"></view>
	</view>
</template>

<script>
	var that
	var djs_fuc
	export default {
		data() {
			return {
				bj_time:10,
				share_off:true				
			};
		},
		
		onShareAppMessage(res) {
			if (res.from === 'button') {
				console.log('/pages/index/index?pid='+that.$store.state.loginDatas.id)
				uni.setStorageSync('jianmian',2)
				that.share_off=false
				// this.setData({
				// 	sharetype:'share'
				// })
			}
			return {
			  title: '爱心筹',
			  path: '/pages/index/index?pid='+that.$store.state.loginDatas.id,
			  success: function (res) {
			    console.log('成功', res)
					console.log('/pages/index/index?pid='+that.$store.state.loginDatas.id)
			  }
			}
		},
		methods: {
			off_fuc(){
				this.share_off=false
				uni.setStorageSync('jianmian',1)
			},
			baojing_fuc(){
				var that=this
				this.baojing=true
				that.bj_time=10
				djs_fuc=setInterval(function () {
				  if(that.bj_time==0){
						// uni.showToast({
						// 	icon:'none',
						// 	title:'警报操作'
						// })
						console.log(0)
						clearInterval(djs_fuc)
						that.bj_time='!'
					}else{
						that.bj_time--
					}
				  // console.log(that.djs())
				}, 1000);
			},
			baojing_del(){
				var that=this
				clearInterval(djs_fuc)
				this.bj_time=10
				this.baojing=false
			},
			getimg(img) {
				return service.getimg(img)
			},
		}
	}
</script>

<style scoped>
	.tx_share{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 900;
		background: #FF9541;
	}
	.tx_share_bg{
		width: 100%;
	}
	.share_btn{
		width: 450upx;
		height: 67upx;
		/* background: #CF3127; */
		border-radius: 34px;
		position: absolute;
		top: 923upx;
		left: 152upx;
	}
	.share_btn button{
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		z-index: 990;
	}
	.share_off{
		width: 450upx;
		height: 67upx;
		/* background: #CF3127; */
		border-radius: 34px;
		position: absolute;
		top: 1077upx;
		left: 152upx;
	}
</style>

<template>
	<view>
			<view class="bj_box">
				<!-- <image @tap="baojing_fuc" class="bj_box_img" src="../../static/images/baojing1.png" mode="aspectFit"></image> -->
				<view v-if="baojing" @tap="baojing_del" class="bj_main">
					
					<view class="bj_cnum">
						<view class="bj_cnum_1">
							<view class="bj_cnum_num">{{bj_time}}</view>
						</view>
					</view>
					<view class="bj_tip">10秒钟内触摸屏幕取消</view>
				</view>
			</view>
	</view>
</template>

<script>
	var that
	var djs_fuc
	export default {
		data() {
			return {
				bj_time:10,
				baojing:false
				
			};
		},
		methods: {
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

<style>

</style>

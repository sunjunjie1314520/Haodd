<template>
	<view class="app" :style="{'min-height': windowHeight + 'px'}">
		<view class="logistics-page">
			
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				config:{
					
				}
			}
		},
		created() {
			
		},
		onLoad(e) {
			this.config = e
			this.getNetData()
		},
		methods: {
			getNetData(order_number){
				this.$api.shop.order_delivery(this.config)
				.then(res=>{
					console.log(res);
				})
			}
		}
	}
</script>

<style>
</style>

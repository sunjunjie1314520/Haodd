<template>
	<view class="app" :style="{'min-height': windowHeight + 'px'}">
		<web-view src="../../hybrid/html/index.html"></web-view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	web-view{
		height: 100%;
	}
</style>

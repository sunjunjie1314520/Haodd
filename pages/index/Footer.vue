<template>
	<view class="footer">
		<view class="ul">
			<view @tap="change(0)" :class="['li', {active: tabs==0}]">
				<text class="ico i1"></text>
				<text class="span">首页</text>
			</view>
			<view @tap="change(1)" :class="['li', {active: tabs==1}]">
				<text class="ico i2"></text>
				<text class="span">商城</text>
			</view>
			<view @tap="change(2)" :class="['li', {active: tabs==2}]">
				<text class="cirl"></text>
			</view>
			<view @tap="change(3)" :class="['li', {active: tabs==3}]">
				<text class="ico i3"></text>
				<text class="span">任务中心</text>
			</view>
			<view @tap="change(4)" :class="['li', {active: tabs==4}]">
				<text class="ico i4"></text>
				<text class="span">我的</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				tabs: 0,
			}
		},
		methods:{
			change(id){
				this.tabs = id
				this.$emit('change', id)
				
				// #ifdef APP-PLUS
					if (id === 3){
						plus.navigator.setStatusBarStyle('dark'); // 黑
					}else{
						plus.navigator.setStatusBarStyle('light'); // 白
					}
				// #endif
			}
		}
	}
</script>

<style>
</style>

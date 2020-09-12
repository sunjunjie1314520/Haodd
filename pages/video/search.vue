<template>
	<view class="app" :style="{'min-height': windowHeight + 'px'}">
		<view class="search-page">
			<input class="input" v-model="user_id" type="text" placeholder="请输入用户ID" placeholder-class="placeholder-class">
			<text class="btn" @click="gotoLink">搜索</text>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				user_id: ''
			}
		},
		methods: {
			// 头像跳转
			gotoLink(){
				uni.navigateTo({
					url: '../user/video?id=' + this.user_id
				})
			},
		}
	}
</script>

<style>
</style>

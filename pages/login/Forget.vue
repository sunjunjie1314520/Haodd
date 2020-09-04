<template>
	<view class="app">
		<view class="forget-page" :style="{height: windowHeight + 'px'}">
			<view class="ul">
				<view class="li">
					<input v-model="confirm.phone" type="text" value="" placeholder="请输入手机号" />
				</view>
				<view class="li">
					<input v-model="config.verity_code" type="text" value="" placeholder="请输入验证码" />
					<text class="get-code">获取验证码</text>
				</view>
				<view class="li">
					<input v-model="password" type="password" value="" placeholder="请输入密码" />
				</view>
			</view>
			<view class="pub-button mt40">
				<text @click="confirm" class="btn">确认修改</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				config: {
					phone: '',
					verity_code: '',
					password: '',
				},
				password: '',
			}
		},
		methods: {
			confirm(){
				console.log(111);
				this.$api.personal.forgot(this.config)
				.then(res=>{
					console.log(res);
				})
			}
		}
	}
</script>

<style>
</style>

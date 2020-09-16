<template>
	<view class="app">
		<view class="forget-page" :style="{height: windowHeight + 'px'}">
			<view class="ul">
				<view class="li">
					<input maxlength="11" v-model="config.phone" type="number" value="" placeholder="请输入手机号" />
				</view>
				<view class="li">
					<input v-model="config.verity_code" maxlength="6" type="number" value="" placeholder="请输入验证码" />
					<text class="get-code" v-if="code_config.down == 0" @click="sendCode(config.phone)">获取验证码</text>
					<text class="get-code" v-else>({{code_config.down}})s</text>
				</view>
				<view class="li">
					<input maxlength="20" v-model="password" type="password" value="" placeholder="请输入密码" />
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

				let yz = [
					{
						type: 'phone',
						val: this.config.phone,
					},
					{
						type: 'len',
						val: this.config.verity_code,
						field: '验证码',
						min: 6,
					},
					{
						type: 'len',
						val: this.password,
						field: '密码',
						min: 6,
					},
				]
				
				if(!this.$assist.ver(yz)){
					return false;
				}				
				
				this.config.password = this.$md5(this.password);

				this.$api.personal.forgot(this.config)
				.then(res=>{
					console.log(res);
					this.$assist.msg(res, '修改成功', true)
				})
			}
		}
	}
</script>

<style>
	
</style>

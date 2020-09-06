<template>
    <view class="app" :style="{'height': windowHeight + 'px'}">
        <view class="login-page">
				
				<view class="logo">
					<image src="../../src/static/img/e97dba_1037x9031.png" mode=""></image>
				</view>
				
				<view class="tabs-login">
					<text :class="{active: tabs==0}" @tap="tabs=0">账号登录</text>
					<text :class="{active: tabs==1}" @tap="tabs=1">验证码登录</text>
				</view>
				
				<!-- 账号登录 -->
				<view class="ul" v-if="tabs==0">
					<view class="li">
						<input type="number" v-model="config.username" maxlength="11" placeholder-class="placeholder-class" value="" placeholder="请输入您的手机号" />
					</view>
					<view class="li">
						<input type="password" v-model="password" maxlength="20" placeholder-class="placeholder-class" value="" placeholder="请输入密码" />
					</view>
					<view class="li">
						<text @tap="userLogin" class="button2">登录</text>
					</view>
					<view class="li">
						<navigator class="navig" url="./Forget" hover-class="hover-class">忘记密码</navigator>
					</view>
				</view>
				
				<!-- 验证码登录 -->
				<view class="ul" v-if="tabs==1">
					<view class="li">
						<input type="number" maxlength="11" v-model="config1.phone" placeholder-class="placeholder-class" value="" placeholder="请输入您的手机号" />
					</view>
					<view class="li">
						<input class="short" maxlength="6" v-model="config1.verity_code" type="text" placeholder-class="placeholder-class" value="" placeholder="请输入密码" />
						<text class="get-code" @click="sendCode(config1.phone)">获取验证码</text>
					</view>
					<view class="li">
						<text class="button2" @click="UserPhoneLogin">登录</text>
					</view>
				</view>
				
			
			<view class="other-user">
				<navigator url="../register/register" hover-class="hover-class">还没有账号？立即注册</navigator>
			</view>
			<view class="back">
				<image src="../../src/static/img/9d0552_697x977.jpg" mode=""></image>
			</view>
        </view>
    </view>
</template>

<script>
	export default {
		data(){
			return {
				tabs: 0,
				config: {
					username: '',
					password: '',
		
				},
				password: '',
				
				config1: {
					phone: '',
					verity_code: ''
				}
			}
		},
		created() {
			// var a = plus.navigator.getCookie('pid')
			// console.log(a);
		},
		methods: {
			userLogin(){
				
				let yz = [
					{
						type: 'phone',
						val: this.config.username,
					},
					{
						type: 'len',
						val: this.password,
						field: '密码',
						min: 6,
					}
				]
				
				if(!this.$assist.ver(yz)){
					return false;
				}
				
				this.config.password = this.$md5(this.password)
				this.$api.login.sign(this.config)
				.then(res=>{
					console.log(res);
					if(res.code === 1){
						this.toast(res.msg, 'success')
						this.success(res.data);
					}
				})
				
			},
			UserPhoneLogin(){
				let yz = [
					{
						type: 'phone',
						val: this.config1.phone,
					},
					{
						type: 'len',
						val: this.config1.verity_code,
						field: '验证码',
						min: 6,
					}
				]
				
				if(!this.$assist.ver(yz)){
					return false;
				}
				
				this.$api.login.sign(this.config1)
				.then(res=>{
					console.log(res);
					if(res.code === 1){
						this.toast(res.msg, 'success')
						this.success(res.data);
					}
				})
			},
			success(token){
				setTimeout(()=>{
					uni.setStorageSync('token', token);
					uni.redirectTo({
						url:'../index1/Index'
					})
				}, 1600)
			}
		}
	}
</script>

<style>

</style>
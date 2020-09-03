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
				
				<view class="ul" v-if="tabs==0">
					<view class="li">
						<input type="text" placeholder-class="placeholder-class1" value="" placeholder="请输入您的手机号" />
					</view>
					<view class="li">
						<input type="text" placeholder-class="placeholder-class1" value="" placeholder="请输入密码" />
					</view>
					<view class="li">
						<text @tap="userLogin" class="button">登录</text>
					</view>
					<view class="li">
						<navigator class="navig" url="./Forget" hover-class="hover-class">忘记密码</navigator>
					</view>
				</view>
				
				<view class="ul" v-if="tabs==1">
					<view class="li">
						<input type="text" placeholder-class="placeholder-class1" value="" placeholder="请输入您的手机号" />
					</view>
					<view class="li">
						<input class="short" type="text" placeholder-class="placeholder-class1" value="" placeholder="请输入密码" />
						<text class="get-code">获取验证码</text>
					</view>
					<view class="li">
						<text class="button">登录</text>
					</view>
<!-- 					<view class="li">
						<navigator class="navig" url="../register/register">忘记密码</navigator>
					</view> -->
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
			}
		},
		created() {
			// var a = plus.navigator.getCookie('pid')
			// console.log(a);
		},
		methods: {
			userLogin(){
				uni.switchTab({
					url: '../index/Home'
				})
			}
		}
	}
</script>

<style>

</style>
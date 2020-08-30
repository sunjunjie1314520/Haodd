<template>
	<view class="app">
		<view class="forget-page" :style="{height: windowHeight + 'px'}">
			<view class="ul">
				<view class="li">
					<input type="text" value="" placeholder="请输入手机号" />
				</view>
				<view class="li">
					<input type="text" value="" placeholder="请输入验证码" />
					<text class="get-code">获取验证码</text>
				</view>
				<view class="li">
					<input type="password" value="" placeholder="请输入密码" />
				</view>
			</view>
			<view class="pub-button mt40">
				<text class="btn">确认修改</text>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
</style>

<template>
	<view class="app" :style="{'height': windowHeight + 'px'}">
		<view class="setpass-page">
			<view class="ul">
				<view class="li">
					<input type="password" maxlength="20" value="" placeholder="请输入交易密码" placeholder-class="placeholder-class" />
				</view>
				<view class="li">
					<input type="password" maxlength="20" value="" placeholder="确认交易密码" placeholder-class="placeholder-class" />
				</view>
				<view class="li">
					<input class="short" type="text" maxlength="6" value="" placeholder="请输入验证码" placeholder-class="placeholder-class" />
					<text class="get-code">获取验证码</text>
				</view>
			</view>
			<view class="pub-button">
				<text class="btn">确定</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		
	}
</script>

<style>
</style>

<template>
	<view class="app" :style="{'height': windowHeight + 'px'}">
		<view class="setpass-page">
			<view class="ul">
				<view class="li">
					<input type="password" value="" placeholder="请输入旧密码, 默认旧密码为111111" placeholder-class="placeholder-class" />
				</view>
				<view class="li">
					<input type="password" value="" placeholder="请输入新密码" placeholder-class="placeholder-class" />
				</view>
				<view class="li">
					<input type="password" value="" placeholder="确认输入新密码" placeholder-class="placeholder-class" />
				</view>
			</view>
			<view class="pub-button">
				<text class="btn">确认修改</text>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
</style>

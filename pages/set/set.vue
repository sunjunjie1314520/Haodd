<template>
	<view class="app" :style="{'height': windowHeight + 'px'}">
		<view class="set-page">
			<view class="ul">
				<view class="li">
					<text class="span">版本</text>
					<view class="fr">
						<text class="sp1">1.0</text>
					</view>
				</view>
				<view class="li">
					<text class="span">手机号</text>
					<view class="fr">
						<text class="sp1">19871455054</text>
					</view>
				</view>
				<view class="li more">
					<text class="span">用户名</text>
					<view class="fr">
						<navigator hover-class="hover-class" class="sp1" url="../user/modify">198****5054</navigator>
					</view>
				</view>
				<view class="li more">
					<navigator hover-class="hover-class" class="sp1" url="../user/setpass">
						<text class="span">设置登录密码</text>
						<view class="fr">
						</view>
					</navigator>
				</view>
				<view class="li more">
					<navigator hover-class="hover-class" class="sp1" url="../user/binddata">
						<text class="span">绑定提现资料</text>
						<view class="fr">
							
						</view>
					</navigator>
				</view>
				<view class="li more">
					<navigator hover-class="hover-class" class="sp1" url="../user/settrans">
						<text class="span">设置交易密码</text>
						<view class="fr">
							
						</view>
					</navigator>
				</view>
			</view>
			<view class="ul">
				<view class="li">
					<text class="span">退出登录</text>
					<view class="fr">
						
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>

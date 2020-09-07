<template>
	<view class="app" :style="{'height': windowHeight + 'px'}">
		<view class="set-page">
			<view class="ul">
				<view class="li">
					<text class="span">版本</text>
					<view class="fr">
						<text class="sp1">{{$user.version}}</text>
					</view>
				</view>
				<view class="li">
					<text class="span">手机号</text>
					<view class="fr">
						<text class="sp1">{{$user.phone}}</text>
					</view>
				</view>
				<view class="li more">
					<text class="span">用户名</text>
					<view class="fr">
						<navigator hover-class="hover-class" class="sp1" url="../user/modify">{{$user.phone | phone}}</navigator>
					</view>
				</view>
				<view class="li more">
					<navigator hover-class="hover-class" class="sp1" url="../user/setpass">
						<text class="span">修改登录密码</text>
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
						<text class="span">修改交易密码</text>
						<view class="fr">
							
						</view>
					</navigator>
				</view>
			</view>
			<view class="ul">
				<view class="li" @click="quit">
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
			quit(){
				uni.clearStorageSync();
				uni.reLaunch({
					url: '../login/login'
				})
			}
		}
	}
</script>

<style>

</style>

<template>
    <view class="app" :style="{'height': windowHeight + 'px'}">
        <view class="register-page">
            <view class="ul">
                <view class="li">
					<input type="number" maxlength="15" value="" placeholder="请输入手机号码" />
                </view>
				<view class="li">
					<input type="number" maxlength="6" value="" placeholder="请输入验证码" />
					<text class="fr get-code">获取验证码</text>
                </view><view class="li">
					<input type="password" maxlength="20" value="" placeholder="请输入密码" />
					<text class="fr desc">密码由6-20位数字和字母组成</text>
                </view>
            </view>
			<view class="button">
				<text @tap="registerFun" class="btn">确定</text>
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
		created() {
			
		},
		methods:{
			registerFun(){
				uni.navigateTo({
					url:'./setinfo'
				})
			}
		}
	}
</script>

<style>

</style>
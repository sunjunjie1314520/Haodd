<template>
    <view class="app" :style="{'height': windowHeight + 'px'}">
        <view class="register-page">
            <view class="ul">
                <view class="li">
					<input type="number" maxlength="15" value="" placeholder="请输入手机号码" v-model="config.phone" />
                </view>
				<view class="li">
					<input type="number" maxlength="6" value="" placeholder="请输入验证码" v-model="config.verity_code" />
					<text class="fr get-code" @click="sendCode(config.phone)">获取验证码</text>
                </view>
				<view class="li">
					<input type="password" maxlength="20" value="" placeholder="请输入密码" v-model="config.password" />
					<text class="fr desc">密码由6-20位数字和字母组成</text>
                </view>
            </view>
			<view class="button">
				<text @tap="registerFun" class="btn active">确定</text>
			</view>
        </view>
    </view>
</template>

<script>
	export default {
		data(){
			return {
				config: {
					phone:'',
					verity_code:'',
					password: '',
					// username: '',
				}
			}
		},
		created() {
			
		},
		methods:{
			registerFun(){
				this.$api.login.register(this.config)
				.then(res=>{
					console.log(res);
					if(res.code == 1){
						uni.navigateTo({
							url:'./setinfo'
						})
					}else{
						this.toast(res.msg)
					}
				})
			}
		}
	}
</script>

<style>

</style>
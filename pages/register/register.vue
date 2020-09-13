<template>
    <view class="app" :style="{'height': windowHeight + 'px'}">
        <view class="register-page">
            <view class="ul">
                <view class="li">
					<input type="number" maxlength="11" value="" placeholder="请输入手机号码" v-model="config.phone" />
                </view>
				<view class="li">
					<input type="number" maxlength="6" value="" placeholder="请输入验证码" v-model="config.verity_code" />
					<text class="fr get-code" @click="sendCode(config.phone)">获取验证码</text>
                </view>
				<view class="li">
					<input type="password" maxlength="20" value="" placeholder="请输入密码" v-model="password" />
					<text class="fr desc">密码由6-20位数字和字母组成</text>
                </view>
				<view class="li">
					<input type="text" :disabled="qing" maxlength="10" value="" placeholder="请输入邀请码" v-model="config.pid" />
					<text class="fr desc">邀请码</text>
                </view>
            </view>
			<view class="button">
				<text @tap="registerFun" class="btn active">确定</text>
			</view>
        </view>
    </view>
</template>

<script>
	//引入插件
	const sharetrace = uni.requireNativePlugin('shoot-sharetrace');
	export default {
		data(){
			return {
				config: {
					phone:'',
					verity_code:'',
					password: '',
					pid:''
				},
				password: '',
				qing: false,
			}
		},
		onReady() {
			//获取安装携带参数
			sharetrace.getInstallTrace( data => {
				// this.showResult(JSON.stringify(data.data.paramsData));
				var str = data.data.paramsData
				if(str){
					this.qing = true;
					let arr = str.split('=')
					this.config.pid = arr[1]
				}
			});
		},
		created() {
			
		},
		methods:{
			showResult(data) {
				uni.showModal({
					title: 'ShareTrace',
					content: data,
					showCancel:false,
					success: function (res) {

					}
				});
			},
			registerFun(){
				let yz = [
					{
						type: 'phone',
						val: this.config.phone
					},
					{
						type: 'len',
						val: this.config.verity_code,
						field: '验证码',
						min: 6
					},
					{
						type: 'len',
						val: this.password,
						field: '密码',
						min: 6
					},
					{
						type: 'len',
						val: this.config.pid,
						field: '邀请码',
						min: 8
					},
				]
				
				if(!this.$assist.ver(yz)){
					return false;
				}
				
				this.config.password = this.$md5(this.password)
				this.$api.login.register(this.config)
				.then(res=>{
					console.log(res);
					if(res.code == 1){
						this.toast(res.msg, 'success')
						this.success(res.data)
					}
				})
			},
			success(token){
				setTimeout(()=>{
					uni.setStorageSync('token', token);
					uni.redirectTo({
						url:'./setinfo'
					})
				}, 1600)
			}
		}
	}
</script>

<style>

</style>
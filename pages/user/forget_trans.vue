<template>
    <view class="app" :style="{'height': windowHeight + 'px'}">
    	<view class="setpass-page">
    		<view class="ul">
    			<view class="li">
    				<input v-model="config.verity_code" class="short" type="text" maxlength="6" value="" placeholder="请输入验证码" placeholder-class="placeholder-class" />
    				<text class="get-code" v-if="code_config.down == 0" @click="sendCode($user.phone)">获取验证码</text>
    				<text class="get-code" v-else>({{code_config.down}})s</text>
    			</view>
    		</view>
    		<view class="pub-button">
    			<text class="btn" @click="submit">确定</text>
    		</view>
			<view class="forget-tips">
				<text class="h2">提示</text>
				<text class="p">找回的密码会以短信的方式发送到你的手机上!</text>
			</view>
    	</view>
    </view>
</template>

<script>
	export default {
		data(){
			return {
				config: {
					verity_code:''
				},
			}
		},
		methods:{
			submit(){
				let yz = [
					{
						type: 'len',
						val: this.config.verity_code,
						field: '验证码',
						min:6,
					}
				]
				
				if(!this.$assist.ver(yz)){
					return false;
				}
				
				this.$api.personal.reset_safe_code(this.config)
				.then(res=>{
					this.$assist.msg(res, true, true);
				})
			}
		}
	}
</script>

<style>

</style>
<template>
	<view class="app" :style="{'height': windowHeight + 'px'}">
		<view class="setpass-page">
			<view class="ul">
				<view class="li">
					<input v-model="p1" type="password" maxlength="20" value="" placeholder="请输入旧的交易密码" placeholder-class="placeholder-class" />
				</view>
				<view class="li">
					<input v-model="p2" type="password" maxlength="20" value="" placeholder="请输入新的交易密码" placeholder-class="placeholder-class" />
				</view>
				<view class="li">
					<input v-model="config.verity_code" class="short" type="text" maxlength="6" value="" placeholder="请输入验证码" placeholder-class="placeholder-class" />
					<text class="get-code" v-if="code_config.down == 0" @click="sendCode($user.phone)">获取验证码</text>
					<text class="get-code" v-else>({{code_config.down}})s</text>
				</view>
			</view>
			<view class="pub-button">
				<text class="btn" @click="submit">确定</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				config: {
					old_password: '',
					new_password: '',
					verity_code:''
				},
				p1:'',
				p2:'',
			}
		},
		methods: {
			submit(){
				
				let yz = [
					{
						type: 'len',
						field: '旧密码',
						val: this.p1,
						min:6,
					},
					{
						type: 'len',
						val: this.p2,
						field: '新密码',
						min:6,
					},
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
				this.config.old_password = this.$md5(this.p1);
				this.config.new_password = this.$md5(this.p2);
				this.$api.personal.upd_pwd(this.config)
				.then(res=>{
					console.log(res);
					this.$assist.msg(res, true, true)
				})
			}
		}
	}
</script>

<style>
</style>

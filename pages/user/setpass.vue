<template>
	<view class="app" :style="{'height': windowHeight + 'px'}">
		<view class="setpass-page">
			<view class="ul">
				<view class="li">
					<input type="password" v-model="p1" maxlength="20" value="" placeholder="请输入旧密码, 默认旧密码为111111" placeholder-class="placeholder-class" />
				</view>
				<view class="li">
					<input type="password" v-model="p2" maxlength="20" value="" placeholder="请输入新密码" placeholder-class="placeholder-class" />
				</view>
				<view class="li">
					<input type="password" v-model="p3" maxlength="20" value="" placeholder="确认输入新密码" placeholder-class="placeholder-class" />
				</view>
			</view>
			<view class="pub-button">
				<text class="btn" @click="submit">确认修改</text>
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
					new_password: ''
				},
				p1: '', // 原密码
				p2:'',
				p3: '',
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
						type: 'password',
						val1: this.p2,
						val2: this.p3,
						field: '新密码',
						min:6,
					}
				]
				
				if(!this.$assist.ver(yz)){
					return false;
				}
				this.config.old_password = this.$md5(this.p1);
				this.config.new_password = this.$md5(this.p2);
				this.$api.personal.upd_safe(this.config)
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

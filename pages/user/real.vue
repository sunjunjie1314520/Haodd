<template>
	<view class="app" :style="{'height': windowHeight + 'px'}">
		<view class="binddata-page">
			<view class="ul">
				<view class="li">
					<text class="span">姓名:</text>
					<view class="fr">
						<input type="text" v-model="config.card_name" maxlength="3" value="" placeholder="请输入身份证姓名" placeholder-class="placeholder-class" />
					</view>
				</view>
				<view class="li">
					<text class="span">身份证号码:</text>
					<view class="fr">
						<input type="text" v-model="config.card_number" value="" maxlength="18" placeholder="请输入18位身份证号码" placeholder-class="placeholder-class" />
					</view>
				</view>
			</view>
			<view class="pub-button">
				<text :class="['btn', {'active': !click}]" @click="pay">{{click ? '确定' : '(' + second + ')秒后重试'}}</text>
			</view>
			<view class="tips">
				<text class="p">第一步：请填写个人姓名和身份证号码</text>
				<text class="p">第二步：请支付1.5元认证费完成认证</text>
				<text class="p">注：支付宝账户与实名身份信息不一致将会影响交易</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				config:{
					card_name: '',
					card_number:'',
				},
				init: 5 * 60, // 默认的时间
				click: true,
				second: 0,
				time: null,
			}
		},
		created() {
			
		},
		onLoad() {
			
		},
		methods: {
			pay(){
				if(this.click){
					this.second = this.init;
					let yz = [
						{
							type: 'name',
							val: this.config.card_name,
						},
						{
							type: 'len',
							val: this.config.card_number,
							field: '身份证号码',
							min: 18,
						}
					]
					
					if(!this.$assist.ver(yz)){
						return false;
					}
					
					this.click = false;
					
					var token = uni.getStorageSync('token');
					var payData = {
						app_id: "41770ae0-c3d2-4410-8d7e-b3086557ba80",
						channel: 'ALI_APP',
						title: "实名认证",
						total_fee: 1.5 * 100,
						bill_no: this.$assist.genBillNo(),
						optional: {
							"x2-token": token, // 要开通的实名的账户token
							...this.config,
							// "card_name": '', // 身份名字
							// "card_number": '', // 身份号码
							"card": 1, // 代表开通是实名的
						},
						bill_timeout: 360
					};
					this.$store.commit('payReq', payData)
					
					this.time = setInterval(()=>{
						this.second = this.second - 1
						
						if(this.second <= 0){
							this.click = true;
							clearInterval(this.time);
							this.second = this.init;
						}
					}, 1000)
				}else{
					this.toast('请在'+this.second+'秒后重试!')
				}
			}
		}
	}
</script>

<style>
</style>
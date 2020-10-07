<template>
	<view class="app" :style="{'height': windowHeight + 'px'}">
		<view class="binddata-page">
			<view class="ul">
				<view class="li">
					<text class="span">姓名:</text>
					<view class="fr">
						<input type="text" confirm-type="next" v-model="config.card_name" maxlength="12" value="" placeholder="请输入身份证姓名" placeholder-class="placeholder-class" />
					</view>
				</view>
				<view class="li">
					<text class="span">身份证号码:</text>
					<view class="fr">
						<input type="text" confirm-type="done" v-model="config.card_number" value="" maxlength="18" placeholder="请输入18位身份证号码" placeholder-class="placeholder-class" />
					</view>
				</view>
			</view>
			<view class="pub-button">
				<text :class="['btn', {'active': !click}]" @click="pay">{{click ? '确定' : '(' + second + ')秒后重试'}}</text>
			</view>
			<view class="tips">
				<text class="h2">提示：</text>
				<text class="p">第一步：请填写个人姓名和身份证号码</text>
				<text class="p">第二步：校验真实性这过程中会产生费用，一次费用1.5元，请确保无误后再进行操作</text>
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
					// card_name: '孙俊杰',
					// card_number:'421126199309146016',
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
				const _this = this;
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
					
					this.$api.personal.user_card({card_number: this.config.card_number})
					.then(res=>{
						console.log(res);
						if(res.code){
							this.click = false;
							this.second = this.second - 1
							this.time = setInterval(()=>{
								this.second = this.second - 1
								if(this.second <= 0){
									this.click = true;
									clearInterval(this.time);
									this.second = this.init;
								}
							}, 1000)
							this.callpay();
						}
					})
					
				}else{
					this.toast('请在'+this.second+'秒后重试!')
				}
			},
			callpay(){
				const _this = this;
				var token = uni.getStorageSync('token');
				var payData = {
					app_id: "41770ae0-c3d2-4410-8d7e-b3086557ba80",
					channel: 'ALI_APP',
					title: `好逗短视频-实名认证-${this.$aes.id}`,
					total_fee: _this.$pay.auth * 100,
					bill_no: this.$assist.genBillNo(),
					optional: {
						"x2-token": token, // 要开通的实名的账户token
						...this.config,
						"card": 1, // 代表开通是实名的
					},
					bill_timeout: 360
				};
				this.$store.commit('payReq', {data:payData, callback(){
					_this.$api.personal.aliyun_check_log()
					.then(res=>{
						console.log(res);
						if(res.code){
							uni.navigateBack({
								delta: 1,
							})
						}else{
							// _this.toast(res.msg)
						}
					})
					
				}})
			}
		}
	}
</script>

<style>
</style>
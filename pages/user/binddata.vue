<template>
	<view class="app" :style="{'height': windowHeight + 'px'}">
		<view class="binddata-page">
			<view class="ul">
				<view class="li">
					<text class="span">开户人:</text>
					<view class="fr">
						<input maxlength="10" v-model="config.bank_name" type="text" value="" placeholder="请输入开户人姓名(必填)" placeholder-class="placeholder-class" />
					</view>
				</view>
				<view class="li">
					<text class="span">籍贯:</text>
					<view class="fr">
						<input maxlength="30" v-model="config.native_place" type="text" value="" placeholder="请输入籍贯" placeholder-class="placeholder-class" />
					</view>
				</view>
				<view class="li">
					<text class="span">开户银行类型:</text>
					<view class="fr">
						<picker @change="bindPickerChange" :value="index" :range="array">
							<text class="picker-type">{{array[index]}}</text>
						</picker>
					</view>
				</view>
				<view class="li">
					<text class="span">详细支行:</text>
					<view class="fr">
						<input maxlength="30" v-model="config.bank_address" type="text" value="" placeholder="请输入详细支行" placeholder-class="placeholder-class" />
					</view>
				</view>
				<view class="li">
					<text class="span">银行账户:</text>
					<view class="fr">
						<input maxlength="19" v-model="config.bank_number" type="number" value="" placeholder="请输入银行账户" placeholder-class="placeholder-class" />
					</view>
				</view>
				<view class="li">
					<text class="span">支付宝账号:</text>
					<view class="fr">
						<input maxlength="20" v-model="config.zfb_number" type="text" value="" placeholder="请输入支付宝账号" placeholder-class="placeholder-class" />
					</view>
				</view>
				<view class="li">
					<text class="span">微信账号:</text>
					<view class="fr">
						<input maxlength="20" v-model="config.wx_number" type="text" value="" placeholder="请输入微信账号" placeholder-class="placeholder-class" />
					</view>
				</view>
			</view>
			<view class="pub-button">
				<text class="btn" @click="submit">{{config.bank_name ? '修改':'确定'}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				array: ['建设银行', '农业银行', '招商银行', '中国银行', '工商银行', '邮政银行'],
				index: 0,
				config: {
					bank_name: '',
					bank_number:'',
					bank_type:'',
					wx_name:'微信图片',
					wx_number:'',
					zfb_name:'支付宝图片',
					zfb_number:'',
					bank_address:'',
					native_place:'',
				}
			}
		},
		created() {
			this.getData();
		},
		methods: {
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			getData(){
				this.$api.personal.bank_index()
				.then(res=>{
					console.log(res);
					this.config.bank_name = res.data.bank_name
					this.config.bank_number = res.data.bank_number
					this.config.bank_type = res.data.bank_type
					this.config.wx_name = res.data.wx_name
					this.config.wx_number = res.data.wx_number
					this.config.zfb_name = res.data.zfb_name
					this.config.zfb_number = res.data.zfb_number
					this.config.bank_address = res.data.bank_address
					this.config.native_place = res.data.native_place
					
					this.array.forEach((item, index)=>{
						if(item === res.data.bank_type){
							this.index = index
						}
					})
				})
			},
			submit(){
				let yz = [
					{
						type: 'null',
						val: this.config.bank_name,
						field: '银行开户姓名'
					},
					{
						type: 'null',
						val: this.config.bank_number,
						field: '银行卡号'
					},
					{
						type: 'null',
						val: this.config.bank_address,
						field: '支行地址'
					},
					{
						type: 'null',
						val: this.config.native_place,
						field: '籍贯'
					},
				]
				
				if(!this.$assist.ver(yz)){
					return false;
				}
				this.config.bank_type = this.array[this.index]
				this.$api.personal.add_bank(this.config)
				.then(res=>{
					console.log(res);
					this.$assist.msg(res, true, true);
				})
			}
		}
	}
</script>

<style>
</style>
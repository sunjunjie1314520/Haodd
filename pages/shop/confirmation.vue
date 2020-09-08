<template>
	<view class="app">
		<view class="confirmation-page" :style="{'height': windowHeight + 'px'}">
			<view class="add-ress">
				<view class="wrap1" v-if="address" @click="SelectAddress">
					<view class="ico">
					</view>
					<view class="select">
						<view class="name">
							<text class="h2">{{address.consignee}}</text>
							<text class="b">{{address.consignee_phone}}</text>
						</view>
						<text class="p">{{address.province + address.city + address.area + address.address}}</text>
					</view>
				</view>
				<view class="wrap" v-else>
					<text @click="SelectAddress" class="select-address">请选择收货地址</text>
				</view>
			</view>
			<view class="ul">
				<view class="li">
					<view class="box1">
						<view class="pict">
							<image src="https://img.alicdn.com/imgextra/i4/2616970884/TB2qnh1tVooBKNjSZPhXXc2CXXa_!!2616970884.jpg_2200x2200Q90.jpg_.webp" mode="widthFix"></image>
						</view>
						<view class="text">
							<text class="h3">伊拉牧场手撕牛肉</text>
							<text class="p">单位：件</text>
							<view class="b">
								<text class="red">10.00音豆</text>
								<text class="gray">x1</text>
							</view>
						</view>
					</view>
					<view class="box3">
						<text class="s1">共1件　小计：</text>
						<text class="s2">10.00音豆</text>
					</view>
				</view>
			</view>
			<view class="box2-mark">
				<text>商品备注</text>
				<input type="text" value="" v-model="mark" placeholder="选填:留言" placeholder-class="placeholder-class" />
			</view>
		</view>
		<view class="pub-button fixed">
		    <text @click="sub1" class="btn">提交订单</text>
		</view>
		<view class="alert-yaoyi" v-if="show">
			<view class="layout">
				<text class="h2">提示</text>
				<input type="password" maxlength="18" v-model="safe_code" value="" placeholder="请输入交易密码" />
				<view class="btn">
					<text class="s1" @click="show=false">取消</text>
					<text class="s2" @click="confirm">确定</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		components:{
			
		},
		data(){
			return {
				address: false,
				mark: '',
				show: true,
				safe_code:''
			}
		},
		methods: {
			sub1(){
				if(!this.address){
					this.toast('请先选择收货地址')
					return false
				}
				this.show = true;
			},
			confirm(){
				this.show = false;
				this.submitFun()
			},

			submitFun(){
				let data = {
					user_con_id: this.address.id,
					safe_code: this.safe_code,
					mark: this.mark || '无',
					order: [
						{
							"product_id": 15,
							"buy_number": 1
						}
					]
				}
				this.$api.shop.add_order(data)
				.then(res=>{
					console.log(res);
					this.safe_code = ''
				})
			},
			SelectAddress(){
				uni.navigateTo({
					url: '../order/address_manage?select=ture'
				})
			}
			
		}
	}
</script>

<style>
</style>

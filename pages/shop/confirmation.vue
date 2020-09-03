<template>
	<view class="app">
		<view class="confirmation-page" :style="{'height': windowHeight + 'px'}">
			<view class="add-ress">
				<view class="wrap1" v-if="address" @click="SelectAddress">
					<view class="ico">
					</view>
					<view class="select">
						<view class="name">
							<text class="h2">{{address.name}}</text>
							<text class="b">{{address.phone}}</text>
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
					<view class="box2">
						<text>商品备注</text>
						<input type="text" value="" placeholder="选填:留言" placeholder-class="placeholder-class" />
					</view>
					<view class="box3">
						<text class="s1">共1件　小计：</text>
						<text class="s2">10.00音豆</text>
					</view>
				</view>
			</view>
		</view>
		<view class="pub-button fixed">
		    <text @click="submitFun" class="btn">提交订单</text>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				address: false
			}
		},
		methods: {
			submitFun(){
				this.toast('正在调用支付,请稍等...')
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

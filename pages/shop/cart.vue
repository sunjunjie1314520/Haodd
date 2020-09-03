<template>
	<view class="app">
		<view class="cart-page" :style="{'min-height': windowHeight + 'px'}">
			<view class="ul">
				<view class="li">
					<view :class="['check', {active: check}]" @click="checkHandle">
						<text class="ico"></text>
					</view>
					<view class="pict">
						<image src="https://img.alicdn.com/imgextra/i2/268451883/TB2SHS4qWAoBKNjSZSyXXaHAVXa_!!268451883.jpg_2200x2200Q90.jpg_.webp" mode="widthFix"></image>
					</view>
					<view class="text">
						<text class="h3">伊拉牧场手撕牛肉</text>
						<text class="p">单位:件</text>
						<view class="price">
							<view class="pb">
								<text class="d font">50.00</text>
								<text class="b">音豆</text>
							</view>
							<text class="b">x1</text>
						</view>
					</view>
					<view class="count">
						<text class="p">合计: 0.00</text>
					</view>
				</view>
			</view>
		</view>
		<view class="cart-fixed-bottom">
			<view class="fl" @click="allCheckBox">
				<text :class="['ico', {'active': all}]"></text>
				<text class="sp1">全选</text>
			</view>
			<view class="fr">
				<view class="box1">
					<text class="s1">总计：</text>
					<text class="s2">0.00</text>
				</view>
				<view class="btn">结算(0)</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				check: true,
				all: true,
			}
		},
		methods: {
			checkHandle(){
				this.check = !this.check
			},
			allCheckBox(){
				
				this.all = !this.all
				if(this.all){
					this.check =  true
				}else{
					this.check =  false
				}
			}
		}
	}
</script>

<style>
</style>

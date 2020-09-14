<template>
	<view class="app">
		<view class="cart-page" :style="{'min-height': windowHeight + 'px'}">
			<view class="ul" v-for="(item, index) in list" :key="item.id">
				<view :class="['check', {active: item.check}]" @click="checkHandle(index)">
					<text class="ico"></text>
				</view>
				<view class="wrap">
					<view class="li" v-for="(item1, index1) in item.CartDetail">
						<view class="pict">
							<image :src="qiniuURL + item1.thumb" mode=""></image>
						</view>
						<view class="text">
							<text class="h3">{{item1.pro_name}}</text>
							<text class="p">单位:{{item1.pro_unit}}</text>
							<view class="price">
								<view class="pb">
									<text class="d font">{{item1.amount}}.00</text>
									<text class="b">音豆</text>
								</view>
								<text class="b">x{{item1.buy_number}}</text>
							</view>
						</view>
					</view>
				</view>
				
				<view class="count">
					<text class="del-btn" @click="cartDelete(item.id)">删除</text>
					<text class="p">合计: {{item.total_amount}}.00</text>
				</view>
			</view>
			<view class="cart-page-null"></view>
		</view>
		<view class="cart-fixed-bottom">
			<view class="fl" @click="allCheckBox">
				<text :class="['ico', {'active': all}]"></text>
				<text class="sp1">全选</text>
			</view>
			<view class="fr">
				<view class="box1">
					<text class="s1">总计：</text>
					<text class="s2">{{sum}}.00</text>
				</view>
				<view class="btn" @click="settlement">结算</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				all: false,
				
				pageData: false,
				
				size: 10,
				next: true,
				page: 1,
				list: [],
			}
		},
		computed:{
			count(){
				var arr = []
				this.list.forEach(item=>{
					if(item.check){
						item.CartDetail.forEach(item1=>{
							arr.push(item1);
						})
					}
				})
				return arr
			},
			sum(){
				var sum = 0;
				this.list.forEach(item=>{
					if(item.check){
						sum += item.total_amount
					}
				})
				return sum
			}
		},
		created() {
			this.getNetData();
		},
		methods: {
			cartDelete(id){
				this.page = 1;
				let data = {
					id: id,
				}
				this.$api.shop.cart_delete(data)
				.then(res=>{
					this.toast(res.msg, 'success')
					this.list = []
					this.pageData = false
					this.next = true
					this.page = 1
					this.getNetData();
				})
			},
			// 单选
			checkHandle(index,){
				console.log(this.list[index])
				this.$set(this.list[index], 'check', !this.list[index].check)
			},
			// 全选
			allCheckBox(){
				this.all = !this.all
				this.list.forEach(item=>{
					item.check = this.all;
				})
			},
			// 获取数据
			getNetData(){
				let data = {
					page: this.page,
				}
				this.$api.shop.cart_index(data)
				.then(res=>{
					let modify = res.data;
					modify.forEach(item=>{
						item.check = this.all;
					})
					this.pageData = res;
					setTimeout(()=>{
						this.store(modify, res.count)
					}, 50)
				})
			},
			// 结算
			settlement(){
				if(this.count.length == 0){
					this.toast('请先选中结算商品');
					return;
				}
				this.$store.commit('Shop/SET_CONFIRM', this.count);
				uni.navigateTo({
					url: '../shop/confirmation'
				})
			}
		}
	}
</script>

<style>
</style>

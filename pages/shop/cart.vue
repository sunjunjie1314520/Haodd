<template>
	<view class="app">
		<view class="cart-page" :style="{'min-height': windowHeight + 'px'}">
			<view class="ul" v-for="(item, index) in list" :key="item.id">
				<view class="li" v-for="(item1, index1) in item.CartDetail">
					<view :class="['check', {active: item1.check}]" @click="checkHandle(index, index1)">
						<text class="ico"></text>
					</view>
					<view class="pict">
						<image src="https://img.alicdn.com/imgextra/i2/268451883/TB2SHS4qWAoBKNjSZSyXXaHAVXa_!!268451883.jpg_2200x2200Q90.jpg_.webp" mode="widthFix"></image>
					</view>
					<view class="text">
						<text class="h3">{{item1.pro_name}}</text>
						<text class="p">单位:{{item1.pro_unit}}</text>
						<view class="price">
							<view class="pb">
								<text class="d font">50.00</text>
								<text class="b">音豆</text>
							</view>
							<text class="b">x1</text>
						</view>
					</view>
				</view>
				<view class="count">
					<text class="p">合计: 0.00</text>
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
					<text class="s2">0.00</text>
				</view>
				<view class="btn" @click="settlement">结算(0)</view>
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
				
				
				next: true,
				page: 1,
				list: [],
			}
		},
		computed:{
			count(){
				var arr = []
				this.list.forEach(item=>{
					item.CartDetail.forEach(item1=>{
						if(item1.check){
							let obj = {
								...item1,
								num: 10,
							}
							arr.push(obj);
						}
					})
				})
				return arr
			}
		},
		created() {
			this.getNetData();
		},
		methods: {
			// 单选
			checkHandle(index, index1){
				console.log(this.list[index].CartDetail[index1])
				this.$set(this.list[index].CartDetail[index1], 'check', !this.list[index].CartDetail[index1].check)
			},
			// 全选
			allCheckBox(){
				this.all = !this.all
				this.list.forEach(item=>{
					item.CartDetail.forEach(item1=>{
						item1.check = this.all;
					})
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
						item.CartDetail.forEach(item1=>{
							item1.check = this.all;
						})
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

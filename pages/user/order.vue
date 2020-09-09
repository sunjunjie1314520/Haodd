<template>
	<view class="app">
		<view class="order-page" :style="{'min-height': windowHeight + 'px'}">
			<view class="tabs">
				<text :class="['txt', {'active': tabs==0}]" @tap="tabs=0">全部</text>
				<text :class="['txt', {'active': tabs==1}]" @tap="tabs=1">待付款</text>
				<text :class="['txt', {'active': tabs==2}]" @tap="tabs=2">待发货</text>
				<text :class="['txt', {'active': tabs==3}]" @tap="tabs=3">待收货</text>
				<text :class="['txt', {'active': tabs==4}]" @tap="tabs=4">已完成</text>
			</view>
			<view class="ul">
				<view class="li">
					<view class="one">
						<view class="pict">
							<image src="https://img.alicdn.com/imgextra/i3/883737303/O1CN019CHHUJ23op5QuSYc9_!!883737303.jpg_600x600Q90.jpg" mode="widthFix"></image>
						</view>
						<view class="text">
							<text class="h2">【包邮】名创优品优雅夏花无火藤条香薰精油180mL室内持久香氛</text>
							<view class="price">
								<text class="del">原价：￥503.00</text>
								<view class="p">实付款：<text>200</text>音豆</view>
							</view>
						</view>
					</view>
					<view class="two">
						<view class="btn">
							<text>删除订单</text>
							<text>确认收货</text>
							<text>查看物流</text>
						</view>
					</view>
				</view>
				<view class="li">
					<view class="one">
						<view class="pict">
							<image src="https://img.alicdn.com/imgextra/i4/2616970884/O1CN01eUiHyH1IOujyBEVhA_!!2616970884.jpg_600x600Q90.jpg_.webp" mode="widthFix"></image>
						</view>
						<view class="text">
							<text class="h2">【包邮】名创优品优雅夏花无火藤条香薰精油180mL室内持久香氛</text>
							<view class="price">
								<text class="del">原价：￥503.00</text>
								<view class="p">实付款：<text>200</text>音豆</view>
							</view>
						</view>
					</view>
					<view class="two">
						<view class="btn">
							<text>删除订单</text>
							<text>确认收货</text>
							<text>查看物流</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				tabs: 0,
				
				first: false,
				
				next: true,
				page: 1,
				list: []
			}
		},
		created() {
			this.getNetData();
		},
		methods: {
			getNetData(){
				let data = {
					page: this.page,
				}
				this.$api.shop.order_index(data)
				.then(res=>{
					console.log(res);
				})
			}
		}
	}
</script>

<style>
</style>

<template>
	<view class="app" :style="{'min-height': windowHeight + 'px'}">
		<view class="detail-page" v-if="pageData">
			<view class="banner">
				<view class="ul">
					<swiper @change="change" class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
						<swiper-item class="li" v-for="item in pageData.ProductImage" :key="item.id">
							<image :src="qiniuURL + item.image_url" mode="aspectFill"></image>
						</swiper-item>
					</swiper>
				</view>
				<view class="paging">
					{{current+1}}/{{pageData.ProductImage.length}}
				</view>
			</view>
			<view class="title">
				<text class="h2">{{pageData.name}}</text>
				<view class="price">
					<text class="p">￥{{pageData.amount}}音豆</text>
					<text class="b">￥{{pageData.old_amount.toFixed(2)}}</text>
				</view>
			</view>
			<view class="guige">
				<view class="ul">
					<view class="li">
						<text>已售：{{pageData.sales_count}}{{pageData.unit}}</text>
					</view>
					<view class="li">
						<text class="more" @click="show=true">参数：选择规格</text>
					</view>
				</view>
			</view>
			<view class="context">
				<view class="tt">
					<text class="line"></text>
					<text class="h2">图文详情</text>
					<text class="line"></text>
				</view>
				<view class="context-wrap">
					<rich-text style="color: #fff;" :nodes="pageData.context"></rich-text>
					<!-- <image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598888672108&di=b0a20311eccec4cb70cdead7c4b7fc1d&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fbba1cd11728b4710dc8f9f8bc8cec3fdfd0323d0.jpg" mode="widthFix"></image> -->
					<!-- <image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598888672108&di=0822310e1878dfbb073eae805eac9dd2&imgtype=0&src=http%3A%2F%2Fdownza.img.zz314.com%2Fnews%2Fapple%2Frdzx-1029%2F2016-12-03%2F5f45c97553684803633a5a62ab8dc788.jpg" mode="widthFix"></image> -->
				</view>
			</view>
		
			<view :class="['params-alert', {'active': show}]">
				<view class="layout">
					<view class="close" @click="show=false">
			
					</view>
					<view class="pict-wrap">
						<view class="pict">
							<image :src="qiniuURL + pageData.thumb" mode="widthFix"></image>
						</view>
						<view class="text">
							<text class="h2">￥{{pageData.amount}}音豆</text>
							<text class="p">剩余{{pageData.stock_count}}件</text>
							<text class="p">已选："{{pageData.unit}}"</text>
						</view>
					</view>
					<view class="params-wrap">
						<view class="ul">
							<view class="li">
								<text class="b">单位</text>
								<text class="p">{{pageData.unit}}</text>
							</view>
							<view class="li row">
								<text class="b">数量</text>
								<view class="pub-add">
									<text class="jian" @click="num > 1 ? num-- : 1">-</text>
									<text class="num">{{num}}</text>
									<text class="jia" @click="num < pageData.stock_count ? num++ : num=pageData.stock_count">+</text>
								</view>
							</view>
						</view>
					</view>
					<view class="pub-button">
						<text class="btn" @click="confirm">确定</text>
					</view>
				</view>
			</view>
		</view>
		
		<uni-loadding v-else></uni-loadding>
		
		<view class="detail-bottom">
			<text class="fl" @click="joinShop">加入购物车</text>
			<text class="fr" @click="gouShop">立即购买</text>
		</view>
		
	</view>
</template>

<script>
	export default {
		data(){
			return {
				indicatorDots: false,
				autoplay: true,
				interval: 2000,
				duration: 500,
				
				current: 0,
				
				show: false,
				
				num: 1,
				pageData: false,
				params: {}
			}
		},
		onLoad(e) {
			this.params = e;
			this.getNetData();
		},
		methods: {
			getNetData(){
				this.$api.shop.product_detail(this.params)
				.then(res=>{
					console.log(res.data);
					this.pageData = res.data
				})
			},
			change(e){
				this.current = e.detail.current
			},
			confirm(){
				console.log(this.num);
				this.show = false;
			},
			joinShop(){
				let data = {
					cart: [
						{
							"product_id": this.pageData.id,
							"buy_number": this.num
						},
					]
				}
				this.$api.shop.add_cart(data)
				.then(res=>{
					console.log(res);
					this.$assist.msg(res, true)
				})
				// setTimeout(()=>{
				// 	uni.navigateTo({
				// 		url:'../shop/cart'
				// 	})
				// }, 1500)
			},
			gouShop(){
				if(this.pageData.stock_count == 0){
					this.toast('库存不够')
					return false;
				}
				let data = [{
					...this.pageData,
					pro_name: this.pageData.name,
					pro_unit: this.pageData.unit,
					buy_amount: this.pageData.amount,
					buy_number: this.num,
				}]
				this.$store.commit('Shop/SET_CONFIRM', data);
				uni.navigateTo({
					url: '../shop/confirmation'
				})
			}
		}
	}
</script>

<style>
</style>

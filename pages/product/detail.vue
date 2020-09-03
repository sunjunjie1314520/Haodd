<template>
	<view class="app">
		<view class="detail-page" :style="{'min-height': windowHeight + 'px'}">
			<view class="banner">
				<view class="ul">
					<swiper @change="change" class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
						<swiper-item class="li">
							<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598888672108&di=b0a20311eccec4cb70cdead7c4b7fc1d&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fbba1cd11728b4710dc8f9f8bc8cec3fdfd0323d0.jpg" mode="aspectFill"></image>
						</swiper-item>
						<swiper-item class="li">
							<image src="https://gw.alicdn.com/imgextra/i4/1209780/O1CN01nM4jxa2M7I8QHfyTC_!!1209780-0-lubanu.jpg_790x10000Q75.jpg_.webp" mode="aspectFill"></image>
						</swiper-item>
						<swiper-item class="li">
							<image src="https://gw.alicdn.com/imgextra/i1/1414079/O1CN01QMAlZt1g0EAE7soAi_!!1414079-0-lubanu.jpg_790x10000Q75.jpg_.webp" mode="aspectFill"></image>
						</swiper-item>
					</swiper>
				</view>
				<view class="paging">
					{{current+1}}/3
				</view>
			</view>
			<view class="title">
				<text class="h2">商品名称</text>
				<view class="price">
					<text class="p">16.05音豆</text>
					<text class="b">￥30.00</text>
				</view>
			</view>
			<view class="guige">
				<view class="ul">
					<view class="li">
						<text>已售：200件</text>
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
					<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598888672108&di=b0a20311eccec4cb70cdead7c4b7fc1d&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fbba1cd11728b4710dc8f9f8bc8cec3fdfd0323d0.jpg" mode="widthFix"></image>
					<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598888672108&di=0822310e1878dfbb073eae805eac9dd2&imgtype=0&src=http%3A%2F%2Fdownza.img.zz314.com%2Fnews%2Fapple%2Frdzx-1029%2F2016-12-03%2F5f45c97553684803633a5a62ab8dc788.jpg" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<view class="detail-bottom">
			<text class="fl" @click="joinShop">加入购物车</text>
			<text class="fr" @click="gouShop">立即购买</text>
		</view>
		
		<view :class="['params-alert', {'active': show}]">
			<view class="layout">
				<view class="close" @click="show=false">

				</view>
				<view class="pict-wrap">
					<view class="pict">
						<image src="https://img.alicdn.com/imgextra/i2/1714128138/TB2yEmBsRjTBKNjSZFNXXasFXXa_!!1714128138.jpg_2200x2200Q90.jpg_.webp" mode="widthFix"></image>
					</view>
					<view class="text">
						<text class="h2">￥0.00</text>
						<text class="p">剩余0件</text>
						<text class="p">已选："件"</text>
					</view>
				</view>
				<view class="params-wrap">
					<view class="ul">
						<view class="li">
							<text class="b">单位</text>
							<text class="p">件</text>
						</view>
						<view class="li row">
							<text class="b">数量</text>
							<view class="pub-add">
								<text class="jian" @click="num > 1 ? num-- : 1">-</text>
								<text class="num">{{num}}</text>
								<text class="jia" @click="num++">+</text>
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
			}
		},
		methods: {
			change(e){
				this.current = e.detail.current
			},
			confirm(){
				console.log(this.num);
				this.show = false;
			},
			joinShop(){
				this.toast('加入购物车成功', 'success')
				setTimeout(()=>{
					uni.navigateTo({
						url:'../shop/cart'
					})
				}, 1500)
			},
			gouShop(){
				uni.navigateTo({
					url: '../shop/confirmation'
				})
			}
		}
	}
</script>

<style>
</style>

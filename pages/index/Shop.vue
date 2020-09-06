<template>
	<view class="shop-tabs flex">
		
		<div class="status-app" :style="{'height': statusBarHeight + 'px'}"></div>
		
		<div class="shop-keys-search">
			<input type="text" value="" placeholder="请输入关键字" />
			<text class="search">搜索</text>
		</div>
		
		<view class="shop-keys-tabs">
			<view class="ul">
				<view @tap="tabs=0" :class="['li', {active: tabs==0}]">家居百货</view>
				<view @tap="tabs=1" :class="['li', {active: tabs==1}]">家用电器</view>
				<view @tap="tabs=2" :class="['li', {active: tabs==2}]">美妆护肤</view>
				<view @tap="tabs=3" :class="['li', {active: tabs==3}]">服装配饰</view>
				<view @tap="tabs=4" :class="['li', {active: tabs==4}]">手机数码</view>
				<view @tap="tabs=5" :class="['li', {active: tabs==5}]">母婴用品</view>
				<view @tap="tabs=6" :class="['li', {active: tabs==6}]">食品酒水</view>
			</view>
		</view>
		
		<view class="banner">
			<view class="ul">
				<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
					<swiper-item class="li">
						<image src="https://gw.alicdn.com/tfs/TB17emto4n1gK0jSZKPXXXvUXXa-1035-390.png_790x10000.jpg_.webp" mode="aspectFill"></image>
					</swiper-item>
					<swiper-item class="li">
						<image src="https://gw.alicdn.com/imgextra/i4/1209780/O1CN01nM4jxa2M7I8QHfyTC_!!1209780-0-lubanu.jpg_790x10000Q75.jpg_.webp" mode="aspectFill"></image>
					</swiper-item>
					<swiper-item class="li">
						<image src="https://gw.alicdn.com/imgextra/i1/1414079/O1CN01QMAlZt1g0EAE7soAi_!!1414079-0-lubanu.jpg_790x10000Q75.jpg_.webp" mode="aspectFill"></image>
					</swiper-item>
				</swiper>
			</view>
		</view>
		
		<view class="out-link">
			<view class="ul">
				<view class="li" @click="gotoLink('https://main.m.taobao.com/?sprefer=sypc00')">
					<image src="../../src/static/img/a6a555_200x200.png" mode=""></image>
					<text>淘宝</text>
				</view>
				<view class="li" @click="gotoLink('https://m.jd.com/')">
					<image src="../../src/static/img/b6e2b1_80x80.png" mode=""></image>
					<text>京东</text>
				</view>
				<view class="li" @click="gotoLink('https://www.tmall.com/')">
					<image src="../../src/static/img/def8ce_121x121.png" mode=""></image>
					<text>天猫</text>
				</view>
				<view class="li" @click="gotoLink('https://m.pinduoduo.com/home/')">
					<image src="../../src/static/img/e95379_126x126.png" mode=""></image>
					<text>拼多多</text>
				</view>
			</view>
		</view>
		
		<view class="shop-sort">
			<view class="ul">
				<view class="li active">
					<text>综合</text>
				</view>
				<view class="li">
					<text>销量</text>
				</view>
				<view class="li">
					<text>最新</text>
				</view>
				<view class="li down">
					<text>价格</text>
				</view>
			</view>
		</view>
		
		<view class="product">
			<view class="ul">
				<view class="li" @click="gotoDetail(1)">
					<view class="pict">
						<image src="https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i2/457630161/O1CN01mV8PUC1D3mLo7U905_!!0-saturn_solar.jpg_250x250.jpg_.webp" mode="widthFix"></image>
					</view>
					<view class="info-text">
						<view class="price">
							<text class="t1">￥</text>
							<text class="t2">0.0</text>
						</view>
						<text class="h2">出口日本蚕丝被100%桑蚕丝夏凉被空调被春秋被子冬被子母被芯双人</text>
						<view class="sell-number">
							<text class="b">已售 | 200</text>
						</view>
					</view>
				</view>
				<view class="li" @click="gotoDetail(1)">
					<view class="pict">
						<image src="https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/1621502511/O1CN01ex7D9I1UQ54cYHhfb_!!0-item_pic.jpg_250x250.jpg_.webp" mode="widthFix"></image>
					</view>
					<view class="info-text">
						<view class="price">
							<text class="t1">￥</text>
							<text class="t2">0.0</text>
						</view>
						<text class="h2">初秋轻熟御姐女神范衣服连衣裙子2020新款成熟风女装气质高端显瘦</text>
						<view class="sell-number">
							<text class="b">已售 | 200</text>
						</view>
					</view>
				</view>
				<view class="li" @click="gotoDetail(1)">
					<view class="pict">
						<image src="https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/2845660845/O1CN01sWR1d91I73HV6qrke_!!0-item_pic.jpg_250x250.jpg_.webp" mode="widthFix"></image>
					</view>
					<view class="info-text">
						<view class="price">
							<text class="t1">￥</text>
							<text class="t2">0.0</text>
						</view>
						<text class="h2">初秋季2020年新款女装连衣裙子仙女裙收腰显瘦高端名媛气质女神范</text>
						<view class="sell-number">
							<text class="b">已售 | 200</text>
						</view>
					</view>
				</view>
				<view class="li" @click="gotoDetail(1)">
					<view class="pict">
						<image src="https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/3142422799/O1CN01kGzRZ71WXzBJg0V6M_!!3142422799.jpg_250x250.jpg_.webp" mode="widthFix"></image>
					</view>
					<view class="info-text">
						<view class="price">
							<text class="t1">￥</text>
							<text class="t2">0.0</text>
						</view>
						<text class="h2">出口日本蚕丝被100%桑蚕丝夏凉被空调被春秋被子冬被子母被芯双人</text>
						<view class="sell-number">
							<text class="b">已售 | 200</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<!-- #ifdef H5 -->
			<view class="pub-button-null1"></view>
		<!-- #endif -->
	</view>
</template>

<script>
	const { windowWidth, windowHeight, statusBarHeight } = uni.getSystemInfoSync();
	export default {
		data(){
			return {
				statusBarHeight: statusBarHeight,
				tabs: 0,
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		methods:{
			gotoLink(url){
				uni.navigateTo({
					url:'../webBrowser/index?url=' + url
				})
			},
			gotoDetail(id){
				uni.navigateTo({
					url:'../product/detail?id=' + id
				})
			}
		}
		
	}
</script>

<style>
	
</style>

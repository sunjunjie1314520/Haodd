<template>
	<view class="shop-tabs">
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
		<view class="trade">
			<view class="ul">
				<view class="li">
					<view class="pict">
						<image src="../../src/static/img/i1.webp" mode=""></image>
					</view>
					<text class="h2">YTC</text>
				</view>
				<view class="li">
					<view class="pict">
						<image src="../../src/static/img/12649c_40x40.png" mode=""></image>
					</view>
					<text class="h2">天猫</text>
				</view>
				<view class="li">
					<view class="pict">
						<image src="../../src/static/img/12649c_40x40.png" mode=""></image>
					</view>
					<text class="h2">天猫</text>
				</view>
				<view class="li">
					<view class="pict">
						<image src="../../src/static/img/12649c_40x40.png" mode=""></image>
					</view>
					<text class="h2">天猫</text>
				</view>
				<view class="li">
					<view class="pict">
						<image src="../../src/static/img/12649c_40x40.png" mode=""></image>
					</view>
					<text class="h2">天猫</text>
				</view>
				<view class="li">
					<view class="pict">
						<image src="../../src/static/img/12649c_40x40.png" mode=""></image>
					</view>
					<text class="h2">天猫</text>
				</view>
				<view class="li">
					<view class="pict">
						<image src="../../src/static/img/12649c_40x40.png" mode=""></image>
					</view>
					<text class="h2">天猫</text>
				</view>
				<view class="li">
					<view class="pict">
						<image src="../../src/static/img/12649c_40x40.png" mode=""></image>
					</view>
					<text class="h2">天猫</text>
				</view>
				<view class="li">
					<view class="pict">
						<image src="../../src/static/img/12649c_40x40.png" mode=""></image>
					</view>
					<text class="h2">天猫</text>
				</view>
				<view class="li">
					<view class="pict">
						<image src="../../src/static/img/12649c_40x40.png" mode=""></image>
					</view>
					<text class="h2">天猫</text>
				</view>
			</view>
		</view>
		
		<view class="product">
			<view class="ul">
				<view class="li">
					<view class="pict">
						<image src="https://img.alicdn.com/imgextra/i1/1770991118/TB2.8ggcpXXXXavXXXXXXXXXXXX_!!1770991118.jpg" mode=""></image>
					</view>
					<text class="h2">某某产品</text>
				</view>
				<view class="li">
					<view class="pict">
						<image src="https://img.alicdn.com/tps/i1/T1iT_5FgdeXXX9hhfo-80-80.jpg" mode=""></image>
					</view>
					<text class="h2">某某产品</text>
				</view>
				<view class="li">
					<view class="pict">
						<image src="https://img.alicdn.com/tps/i1/T1cXNsFD8eXXX9hhfo-80-80.jpg" mode=""></image>
					</view>
					<text class="h2">某某产品</text>
				</view>
				<view class="li">
					<view class="pict">
						<image src="https://img.alicdn.com/tps/i1/T1EGIZFf8dXXX9hhfo-80-80.jpg" mode=""></image>
					</view>
					<text class="h2">某某产品</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		methods:{
			
		}
		
	}
</script>

<style>
</style>

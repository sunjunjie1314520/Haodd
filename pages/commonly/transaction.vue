<template>
	<view class="app">
		<view class="transaction" :style="{'min-height': windowHeight + 'px'}">
			<view class="tabs">
				<text @tap="tabs=0" :class="['span', {active: tabs==0}]">音豆收入</text>
				<text @tap="tabs=1" :class="['span', {active: tabs==1}]">音豆支出</text>
				<text @tap="tabs=2" :class="['span', {active: tabs==2}]">HDC收入</text>
				<text @tap="tabs=3" :class="['span', {active: tabs==3}]">支出</text>
			</view>
			<view class="ul">
				<view class="li">
					<view class="h2">来自订单的退款[红冲]</view>
					<view class="dou">
						<text class="fl">-1.6667音豆</text>
						<text class="fr">2020-08-20 22:55:01</text>
					</view>
				</view>
				<view class="li">
					<view class="h2">来自订单的退款[红冲]</view>
					<view class="dou">
						<text class="fl">-1.6667音豆</text>
						<text class="fr">2020-08-20 22:55:01</text>
					</view>
				</view>
				<view class="li">
					<view class="h2">来自订单的退款[红冲]</view>
					<view class="dou">
						<text class="fl">-1.6667音豆</text>
						<text class="fr">2020-08-20 22:55:01</text>
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
			}
		}
	}
</script>

<style>
</style>

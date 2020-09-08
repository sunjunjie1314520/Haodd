<template>
	<view class="app">
		<view class="transaction" :style="{'min-height': windowHeight + 'px'}">
			<view class="tabs">
				<text @tap="tabs=0" :class="['span', {active: tabs==0}]">音豆支出</text>
				<text @tap="tabs=1" :class="['span', {active: tabs==1}]">音豆收入</text>
				<!-- <text @tap="tabs=2" :class="['span', {active: tabs==2}]">HDC收入</text> -->
				<!-- <text @tap="tabs=3" :class="['span', {active: tabs==3}]">支出</text> -->
			</view>
			<view class="ul" v-if="list">
				<view class="li" v-for="item in list" :key="item.id">
					<view class="h2">{{item.mark || '音豆收入'}}</view>
					<view class="dou">
						<text class="fl">{{item.amount}}音豆</text>
						<text class="fr">{{item.create_time}}</text>
					</view>
				</view>
			</view>
			<view class="ul" v-else>
				<uni-loadding></uni-loadding>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				tabs: 0,
				page: 1,
				list: false,
			}
		},
		watch:{
			tabs(){
				this.page = 1;
				this.list = false;
				setTimeout(()=>{
					this.getNetWord();
				}, 300)
			}
		},
		created() {
			this.getNetWord();
		},
		methods: {
			getNetWord(){
				let data = {
					page: this.page,
					type: this.tabs,
				}
				this.$api.personal.amount_detail(data)
				.then(res=>{
					console.log(res);
					this.list = res.data
				})
			}
		}
	}
</script>

<style>
</style>

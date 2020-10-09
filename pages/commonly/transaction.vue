<template>
	<view class="app">
		<view class="transaction" :style="{'min-height': windowHeight + 'px'}">
			<view class="tabs">
				<text @tap="tabs=0" :class="['span', {active: tabs==0}]">音豆支出</text>
				<text @tap="tabs=1" :class="['span', {active: tabs==1}]">音豆收入</text>
				<!-- <text @tap="tabs=2" :class="['span', {active: tabs==2}]">HDC收入</text> -->
				<!-- <text @tap="tabs=3" :class="['span', {active: tabs==3}]">支出</text> -->
			</view>
			<view class="ul" v-if="pageData">
				<view class="li" v-for="item in list" :key="item.id">
					<view class="h2">{{item.mark || '音豆收入'}}</view>
					<view class="dou">
						<text class="fl">{{item.amount}}音豆</text>
						<text class="fr">{{item.create_time}}</text>
					</view>
				</view>
				<view class="null-data" v-if="list.length == 0">
					没有任何记录
				</view>
				
				<view class="null-data border-top" v-if="next">
					加载中...
				</view>
				<view class="null-data border-top" v-else>
					没有更多的记录了
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
				pageData: false,
				
				page: 1,
				list: [],
				next: true,
			}
		},
		watch:{
			tabs(){
				this.page = 1;
				this.pageData = false;
				this.list = [];
				this.next = true;
				
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
					this.pageData = res;
					this.store(res.data, res.count);
				})
			}
		},
		onReachBottom(e) {
			if(this.next){
				console.log(this.page);
				this.getNetWord();
			}
		}
	}
</script>

<style>
	.border-top{
		border-top: solid .5px rgba(255, 255, 255, .2);
	}
	.null-data{
		float: left;
		width: 100%;
	}
</style>

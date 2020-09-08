<template>
	<view class="task-tabs" :style="{'min-height': windowHeight + 'px'}">
		<view class="notice">
			<view class="ul">
				<view class="li">
					<image src="../../src/static/img/bdef99_145x80.png" mode=""></image>
				</view>
				<view class="li">
					<image src="../../src/static/img/d07013_145x80.png" mode=""></image>
				</view>
				<view class="li">
					<image src="../../src/static/img/eb3eb6_145x80.png" mode=""></image>
				</view>
				<view class="li">
					<image src="../../src/static/img/21f879_145x80.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="list" v-if="paegData">
			<view class="ul">
				<view :class="['li', 'bg' + (index+1)]" v-for="(item, index) in list" :key="item.id">
					<text class="h2">{{item.name}}</text>
					<view class="layout">
						<view class="fl">
							<text class="span">兑换所需：{{item.price}}音豆</text>
							<text class="span">周期：{{item.cycle}}天 收益率：{{item.yield / item.cycle | toFixed(2)}}/天</text>
							<text class="span">总产量：{{item.yield}}音豆</text>
						</view>
						<view class="fr">
							<text class="span" @click="convert(item.id)">兑换</text>
						</view>
					</view>
					<view class="activity">
						<text>基础活跃度：{{item.active_value}}</text>
						<text>当前拥有：{{item.user_mineral_count}}个</text>
						<text>购买上限：{{item.purchase_limit}}个</text>
					</view>
				</view>
			</view>
		</view>
		<view class="list" v-else>
			<uni-loadding></uni-loadding>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				paegData: false,
				
				size: 10,
				page: 1,
				next: true,
				list: []
			}
		},
		created() {
			this.getNetData();
		},
		methods: {
			getNetData(){
				let data = {
					page: this.page
				}
				this.$api.personal.mineral(data)
				.then(res=>{
					console.log(res);
					this.paegData = res;
					this.store(res.data.reverse(), res.count);
				})
			},
			convert(mineral_id){
				this.$api.personal.add_mineral({mineral_id})
				.then(res=>{
					console.log(res);
					this.$assist.msg(res, true)
				})
			}
		}
	}
</script>

<style>
</style>

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
							<text class="span" @click="duihuan(item)">兑换</text>
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
		
		<uni-keyboard @close="show=false" @confirm="confirm" v-if="show"></uni-keyboard>
		
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
				list: [],
				
				show: false,
				safe_code: '',
				mineral_id: ''
			}
		},
		created() {
			this.getNetData();
		},
		methods: {
			duihuan(item){
				if(this.$user.amount >= item.price){
					this.show = true;
					this.mineral_id = item.id;
				}else{
					this.toast('您的音豆不足，无法兑换!');
				}
			},
			confirm(safe_code){
				console.log(safe_code);
				this.safe_code = safe_code;
				this.show = false;
				setTimeout(()=>{
					this.convert();
				}, 500)
			},
			getNetData(){
				let data = {
					page: this.page,
				}
				this.$api.personal.mineral(data)
				.then(res=>{
					console.log(res);
					this.paegData = res;
					this.store(res.data.reverse(), res.count);
				})
			},
			convert(){
				let data = {
					mineral_id: this.mineral_id,
					safe_code: this.$md5(this.safe_code),
				}
				this.$api.personal.add_mineral(data)
				.then(res=>{
					console.log(res);
					this.$assist.msg(res, true)
					this.$store.dispatch('Personal/me');
					
				})
			}
		}
	}
</script>

<style>
</style>

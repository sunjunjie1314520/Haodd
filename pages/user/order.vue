<template>
	<view class="app" :style="{'min-height': windowHeight + 'px'}">
		<view class="order-page">
			<view class="tabs">
				<text :class="['txt', {'active': tabs===''}]" @tap="tabs=''">全部</text>
				<text :class="['txt', {'active': tabs===0}]" @tap="tabs=0">待付款</text>
				<text :class="['txt', {'active': tabs==1}]" @tap="tabs=1">待发货</text>
				<text :class="['txt', {'active': tabs==2}]" @tap="tabs=2">待收货</text>
				<text :class="['txt', {'active': tabs==3}]" @tap="tabs=3">已完成</text>
			</view>
			<view class="tabs-wrap" v-if="first">
				<view class="ul" v-if="list.length > 0">
					<view class="li" v-for="item in list" :key="item.id">
						<view class="wrap">
							<view class="one" v-for="item1 in item.OrderDetail" :key="item1.id">
								<view class="pict">
									<image :src=" qiniuURL + item1.thumb" mode="widthFix"></image>
								</view>
								<view class="text">
									<text class="h2">{{item1.pro_name}}</text>
									<view class="price">
										<text class="del">原价：￥{{item1.old_amount}}.00</text>
										<view class="p">实付款：<text>{{item1.amount}}</text>音豆</view>
									</view>
									<view class="span">数量：<text>x{{item1.buy_number}}</text></view>
								</view>
							</view>
						</view>
						<view class="two">
							<view class="btn">
								<text v-if="item.status==0 || item.status==1 || item.status==2" @click="confirm(item)">{{item.status | status}}</text>
								<text @click="delete_order(item.id)" v-if="item.status==4">删除订单</text>
								<text @click="confirm_order(item.order_number)" v-if="item.status==3">确认收货</text>
								<text @click="look_order(item.order_number)" v-if="item.status==3">查看物流</text>
							</view>
						</view>
					</view>
				</view>
				<view class="null-data" v-else>
					您还没有任何订单记录
				</view>
			</view>
			<uni-loadding v-else></uni-loadding>
		</view>
		
		<view class="alert-yaoyi" v-if="show">
			<view class="layout">
				<text class="h2">提示</text>
				<input type="password" maxlength="18" v-model="safe_code" value="" placeholder="请输入交易密码" />
				<view class="btn">
					<text class="s1" @click="show=false;safe_code=''">取消</text>
					<text class="s2" @click="handle">确定</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				show: false,
				tabs: 0,
				
				first: false,
				
				size: 10,
				next: true,
				page: 1,
				list: [],
				
				safe_code:'',
				item: {},
			}
		},
		watch:{
			tabs(n){
				this.first = false
				this.list = []
				this.next = true
				this.page = 1
				setTimeout(()=>{
					this.getNetData();
				}, 300)
			}
		},
		created() {
			setTimeout(()=>{
				this.getNetData();
			}, 300)
		},
		methods: {
			getNetData(){
				let data = {
					page: this.page,
				}
				if(this.tabs!==''){
					data.status=this.tabs
				}
				this.$api.shop.order_index(data)
				.then(res=>{
					this.first = res;
					this.store(res.data, res.count)
				})
			},
			// 删除订单
			delete_order(id){
				this.$api.shop.order_delete({id: id})
				.then(res=>{
					console.log(res);
				})
			},
			// 确定收货
			confirm_order(order_number){
				this.$api.shop.confim_status({order_number: order_number})
				.then(res=>{
					console.log(res);
				})
			},
			// 查询物流
			look_order(order_number){
				uni.navigateTo({
					url: '../order/logistics?order_number=' + order_number
				})
			},
			confirm(item){
				this.item = item;
				switch(item.status){
					case 0:
						this.show = true;
						break;
					default:
						break;
				}
			},
			handle(){
				if(!this.safe_code){
					this.toast('请输入交易密码');
					return false;
				}
				var item = this.item
				switch(item.status){
					case 0:
						let data = {
							order_number: item.order_number,
							safe_code: this.$md5(this.safe_code),
						}
						this.$api.shop.confim_pay(data)
						.then(res=>{
							console.log(res);
							this.show = false;
							this.safe_code = '';
						})
						break;
					default:
						break;
				}
			}
		},
		filters:{
			status(data){
				switch (data){
					case 0:
						return '去付款'
					case 1:
						return '已付款'
					case 2:
						return '待发货'
				}
			}
		}
	}
</script>

<style>
</style>

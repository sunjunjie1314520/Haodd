<template>
	<view class="app" :style="{'min-height': windowHeight + 'px'}">
		<view class="reel-tabs">
			<text @click="status=0" :class="{'active': status==0}">进行中</text>
			<text @click="status=1" :class="{'active': status==1}">已完成</text>
		</view>
		<view class="reel-page" v-if="paegData">
			<view class="ul">
				<view class="li" v-for="item in list" :key="item.id">
					<view class="pict">
						<image :src="importHandle(item.mineral_id)" mode=""></image>
					</view>
					<view class="text">
						<view class="juan">
							<text class="fl">{{item.mineral_name}}</text>
							<text class="fr">基础活跃度{{item.mineral_active_value}}</text>
						</view>
						<view class="huo">
							<text class="p">活跃度有效期：{{item.expired}}天后过期</text>
							<view class="wrap">
								<text class="fl">领取时间：{{item.create_time}}</text>
								<text class="fr">{{item.expired}}天后过期</text>
							</view>
						</view>
						<view class="progress">
							<view class="wrap">
								<text :style="{'width': item.progress + '%'}"></text>
							</view>
							<text class="span">已产出{{item.progress}}%</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="reel-page" v-else>
			<uni-loadding></uni-loadding>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				paegData: false,
				status:0,
				
				size: 10,
				page: 1,
				next: true,
				list: []
			}
		},
		watch:{
			status(){
				this.paegData = false
				this.page = 1
				this.next = true
				this.list = []
				setTimeout(()=>{
					this.getNetData()
				}, 300)
			}
		},
		created() {
			this.getNetData();
		},
		methods: {
			getNetData(){
				if(!this.next){
					return false;
				}
				let data = {
					page: this.page,
					status: this.status,
				}
				this.$api.personal.usermineral(data)
				.then(res=>{
					console.log(res);
					this.paegData = res;
					this.store(res.data, res.count);
				})
			},
			importHandle(id){
				switch(id){
					case 1:
						return require('../../src/static/img/059411_166x166.png')
					case 2:
						return require('../../src/static/img/ad7a7e_166x166.png')
					default:
						return require('../../src/static/img/fb4e1e_166x166.png')
				}
			}
		},
		onReachBottom() {
			this.getNetData();
		}
	}
</script>

<style>
</style>

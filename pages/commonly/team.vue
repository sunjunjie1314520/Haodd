<template>
	<view class="app" :style="{'min-height': windowHeight + 'px'}">
		<view class="team-page" v-if="pageData">
			<view class="team-title">
				<view class="wrap">
					<view class="people">
						<text class="b">团队人数</text>
						<text class="p font">{{pageData.team_count}}</text>
					</view>
					<view class="info">
						<view class="ul">
							<view class="li">
								<text class="b">直推人数</text>
								<text class="p font">{{pageData.team_child_count}}</text>
							</view>
							<view class="li">
								<text class="b">总活跃度</text>
								<text class="p font">{{pageData.team_basc_value}}</text>
							</view>
							<view class="li">
								<text class="b">联盟活跃度</text>
								<text class="p font">{{pageData.team_league_value}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="list">
				<view class="ul" v-if="list.length > 0">
					<view class="li" v-for="item in list" :key="item.user_id">
						<view class="fl-layout">
							<view class="pict-wrap">
								<view class="pict">
									<image v-if="item.avatar === '0'" src="../../src/static/img/116836_130x130.png" mode=""></image>
									<image v-else :src="qiniuURL + item.avatar" mode=""></image>
								</view>
								<view class="leval1" v-if="item.group_name">
									<text class="font">{{item.group_name}}</text>
								</view>
							</view>
							<text class="label label-1" v-if="item.card_id">已认证</text>
							<text class="label label-0" v-else>未认证</text>
						</view>
						<view class="text">
							<text class="h2">{{item.nickname || '昵称未填写'}}</text>
							<view class="phone">
								<text class="id font">ID:</text>
								<text class="number font">{{item.user_id}}</text>
							</view>
							
							<view class="time">
								<text class="p1">注册时间</text>
								<text class="p2 font">{{item.create_time.substring(0, 10)}}</text>
							</view>
							
							<view class="yue">
								<text class="b font">团队活跃度: {{item.team_basc_value}}</text>
								<text class="b ml font">基础活跃度: {{item.base_value}}</text>
							</view>
							
						</view>
					</view>
					<view class="loadding-text" v-if="next">正在加载中...</view>
				</view>
				<view class="null-data" v-else>您还没有任何队员</view>
			</view>
		</view>
		<view v-else class="load">
			<uni-loadding></uni-loadding>
		</view>
	</view>
</template>

<script>
	import { qiniuURL } from '@/tool/common/config.js'
	export default {
		data(){
			return {
				pageData: false,
				
				page: 1,
				size:10,
				next: true,
				list:[],
			}
		},
		created(){
			this.getNetData();
		},
		methods: {
			getNetData(){
				if(!this.next){
					return false;
				}
				let data = {
					page: this.page
				}
				this.$api.personal.user_team(data)
				.then(res=>{
					console.log(res);
					if(res.code){
						this.pageData = res.data
						this.store(res.data.list, res.data.list_count)
					}else{
						this.next = false;
					}
				})
			}
		},
		onReachBottom(){
			
			this.getNetData();
		}
	}
</script>

<style>
</style>

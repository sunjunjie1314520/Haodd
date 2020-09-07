<template>
	<view class="app">
		<view class="team-page" :style="{'height': windowHeight + 'px'}">
			<view class="team-title">
				<view class="wrap">
					<view class="people">
						<text class="b">团队人数</text>
						<text class="p font">10</text>
					</view>
					<view class="info">
						<view class="ul">
							<view class="li">
								<text class="b">直推人数</text>
								<text class="p font">10</text>
							</view>
							<view class="li">
								<text class="b">总活跃度</text>
								<text class="p font">32626</text>
							</view>
							<view class="li">
								<text class="b">联盟活跃度</text>
								<text class="p font">2209</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="list">
				<view class="ul">
					<view class="li">
						<view class="fl-layout">
							<view class="pict-wrap">
								<view class="pict">
									<image src="../../src/static/img/116836_130x130.png" mode=""></image>
								</view>
								<view class="leval">
									<text>V3</text>
								</view>
							</view>
							<text class="label">已认证</text>
						</view>
						<view class="text">
							<text class="h2">阳光明媚</text>
							
							
							<view class="phone">
								<text class="id font">ID:</text>
								<text class="number font">62379050</text>
							</view>
							
							<view class="time">
								<text class="p1">注册时间</text>
								<text class="p2 font">2020-07-08</text>
							</view>
							
							<view class="yue">
								<text class="b">团队: 46464</text>
								<text class="b ml">基础: 3</text>
							</view>
							
						</view>
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
				page: 1,
			}
		},
		created(){
			this.getNetData();
		},
		methods: {
			getNetData(){
				let data = {
					page: this.page
				}
				this.$api.personal.user_team(data)
				.then(res=>{
					console.log(res);
				})
			}
		}
	}
</script>

<style>
</style>

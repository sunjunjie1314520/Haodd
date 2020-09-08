<template>
	<view class="app">
		<view class="video-page" :style="{'min-height': windowHeight + 'px'}">
			<view class="video-layout">
				<view class="pict">
					<image src="../../src/static/img/116836_130x130.png" mode=""></image>
				</view>
				<view class="text">
					<text class="p font">ID:62401267</text>
					<text class="span">他很懒什么都没说</text>
					<navigator url="../user/personal" class="modify">修改资料</navigator>
				</view>
			</view>
			<view class="number">
				<view class="ul">
					<view class="li">
						<text class="h2 font">2692</text>
						<text class="span">获赞</text>
					</view>
					<view class="li">
						<text class="h2 font">24</text>
						<text class="span">关注</text>
					</view>
					<view class="li">
						<text class="h2 font">1132</text>
						<text class="span">粉丝</text>
					</view>
					<view class="li">
						<text class="h2 font">7</text>
						<text class="span">朋友</text>
					</view>
				</view>
			</view>
			<view class="video-tabs1">
				<text @tap="tabsToggle(0)" :class="{'active': tabs==0}">作品 1</text>
				<text @tap="tabsToggle(1)" :class="{'active': tabs==1}">喜欢 0</text>
			</view>
			<view class="video-list">
				<view class="ul">
					<view class="li">
						<image src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1783209632,1526904456&fm=26&gp=0.jpg" mode=""></image>
						<text class="play">2.1w</text>
					</view>
					<view class="li">
						<image src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3202856619,3789906183&fm=26&gp=0.jpg" mode=""></image>
						<text class="play">2.1w</text>
					</view>
					<view class="li">
						<image src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=363637414,3913883749&fm=26&gp=0.jpg" mode=""></image>
						<text class="play">2.1w</text>
					</view>
				</view>
				<view class="no-more">
					暂时没有更多了
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
		},
		methods: {
			tabsToggle(index){
				this.tabs = index
			}
		}
	}
</script>

<style>
</style>

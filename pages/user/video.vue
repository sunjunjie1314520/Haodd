<template>
	<view class="app" :style="{'min-height': windowHeight + 'px'}">
		<view class="video-page" v-if="pageData">
			<view class="video-layout">
				<view class="pict">
					<image :src="qiniuURL + $user.avatar" mode=""></image>
				</view>
				<view class="text">
					<text class="p font">ID:{{$aes.id}}</text>
					<text class="span">{{$user.des}}</text>
					<navigator url="../user/personal" class="modify">修改资料</navigator>
				</view>
			</view>
			<view class="number">
				<view class="ul">
					<view class="li">
						<text class="h2 font">{{pageData.praised}}</text>
						<text class="span">获赞</text>
					</view>
					<view class="li">
						<text class="h2 font">{{pageData.follow}}</text>
						<text class="span">关注</text>
					</view>
					<view class="li">
						<text class="h2 font">{{pageData.fans}}</text>
						<text class="span">粉丝</text>
					</view>
				</view>
			</view>
			<view class="video-tabs1">
				<text @tap="tabsToggle(0)" :class="{'active': tabs==0}">作品 {{pageData.my_creation_count}}</text>
				<text @tap="tabsToggle(1)" :class="{'active': tabs==1}">喜欢 {{pageData.my_love_count}}</text>
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
				
				pageData: false,
				next: true,
				page:1,
				list:[]
			}
		},
		created() {
			this.getNetData();
		},
		methods: {
			tabsToggle(index){
				this.tabs = index
			},
			getNetData(){
				let data = {
					page: this.page,
					id:'',
				}
				this.$api.video.video_home(data)
				.then(res=>{
					console.log(res);
					this.pageData = res.data
					// this.store(res.data, res.count)
				})
			}
		}
	}
</script>

<style>
</style>

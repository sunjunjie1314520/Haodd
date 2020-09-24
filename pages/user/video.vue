<template>
	<view class="app" :style="{'min-height': windowHeight + 'px'}">
		<view class="video-page" v-if="pageData">
			<view class="video-layout" v-if="id">
				<view class="pict">
					<image :src="qiniuURL + pageData.about_man.avatar" mode=""></image>
				</view>
				<view class="text">
					<text class="p font">ID:{{pageData.about_man.id}}</text>
					<text class="span">{{pageData.about_man.des}}</text>
					<view class="jubao">
						<text>举报</text>
						<text v-if="pageData.is_follow" @click="unfollow" class="cancel">取消关注</text>
						<text v-else @click="unfollow">关注</text>
					</view>
				</view>
			</view>
			<view class="video-layout" v-else>
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
			<!-- 作品 -->
			<view class="video-list" v-if="tabs==0">
				<view class="ul">
					<view class="li" v-for="item in list" :key="item.id">
						<!-- <image :src="qiniuURL + 'lssLc2AFKPMH_PTT0ftaN4_ZjEMs'" mode=""></image> -->
						<video
						:src="qiniuURL + item.video_src"
						:poster="qiniuURL + item.video_src + '?vframe/jpg/offset/1'"
						></video>
						<text class="play">{{item.number_of_comments}}</text>
					</view>
				</view>
				<view class="no-more">
					暂时没有更多了
				</view>
			</view>
			<!-- 喜欢 -->
			<view class="video-list" v-if="tabs==1">
				<view class="ul">
					<view class="li" v-for="item in list1" :key="item.id">
						<!-- <image :src="qiniuURL + 'lssLc2AFKPMH_PTT0ftaN4_ZjEMs'" mode=""></image> -->
						<video
						:src="qiniuURL + item.video_src"
						:poster="qiniuURL + item.video_src + '?vframe/jpg/offset/1'"
						></video>
						<text class="play">{{item.number_of_comments}}</text>
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
				
				size: 10,
				pageData: false,
				next: true,
				page:1,
				
				list:[],
				list1:[],
				
				id: '',
			}
		},
		onLoad(e) {
			// console.log(e);
			if(e.id){
				this.id = e.id
			}
			this.getNetData();
		},
		methods: {
			unfollow(){
				this.$api.video.follow_add({to_from_id: this.id})
				.then(res=>{
					this.toast(res.msg, 'success');
					this.getNetData();
				})
			},
			tabsToggle(index){
				this.tabs = index
			},
			getNetData(){
				let data = {
					page: this.page,
					id: this.id,
				}
				this.$api.video.video_home(data)
				.then(res=>{
					console.log(res);
					this.pageData = res.data
					this.list = this.pageData.my_creation
					this.list1 = this.pageData.my_love
					// this.store(res.data, res.count)
				})
			}
		}
	}
</script>

<style>
</style>

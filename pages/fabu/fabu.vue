<template>
	<view class="app" :style="{'height': windowHeight + 'px'}">
		<view class="fabu-page1">
			<textarea value=""  v-model="config.video_des" placeholder="写标题并使用合适的话题，能让更多人看到" />
			<view class="label-group">
				<text @click="setText(' #今日话题#')"># 添加话题</text>
				<text @click="setText(' @ 好逗小助手')">@ 好逗小助手</text>
			</view>
			<view class="fabu-wrap">
				<view class="pub-upload" @click="uploadFile">
					<image v-if="config.video_src" :src="qiniuURL + config.video_src  + '?vframe/jpg/offset/0.0001'" mode=""></image>
				</view>
			</view>
			<view class="fa-bu">
				<view class="ul">
					<view class="li">
						<text class="sp sp1">你在哪里</text>
						<view class="fr">
						</view>
					</view>
					<view class="li">
						<text class="sp sp2">谁可以看</text>
						<view class="fr">
							<text class="b">公开</text>
						</view>
					</view>
				</view>
			</view>
			<view class="pub-button fixed">
				<text class="btn" @click="submit">确定发布</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				config: {
					video_src: '',
					video_des: '',
				}
			}
		},
		methods:{
			submit(){
				if(!this.config.video_des){
					this.toast('请输入内容')
					return false;
				}
				if(!this.config.video_src){
					this.toast('请选择视频')
					return false;
				}
				this.$api.video.video_upload(this.config)
				.then(res2=>{
					console.log(res2);
					this.$assist.msg(res2, true, true)
				})
			},
			uploadFile() {
				const _this = this;
			    this.$api.upload.qiniu()
			    .then(res => {
			        console.log(res);
			        this.$api.upload.video([], res.token)
					.then(res1=>{
						console.log(res1);
						_this.config.video_src = res1.key;
					})
			    })
			},
			setText(text){
				this.config.video_des = this.config.video_des + text
			}
		}
	}
</script>

<style>
	
</style>

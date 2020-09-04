<template>
    <view class="app" :style="{'min-height': windowHeight + 'px'}">
        <view class="set-info">
			<view class="title">
				<text>设置你的形象</text>
				<text>让大家更好的认识你</text>
			</view>
            <view class="ul">
                <view class="li">
					<text>你的头像</text>
					<view class="pict" @click="uploadImg">
						<image v-if="avatar" :src="qiniuURL + avatar" mode="widthFix"></image>
						<image v-else src="../../src/static/img/dad94e_122x122.png" mode="widthFix"></image>
					</view>
                </view>
				<view class="li">
					<text>取个名称吧</text>
					<view class="wrap">
						<input type="text" v-model="username" placeholder-class="placeholder-class" value="" placeholder="请输入名称" />
					</view>
                </view>
				<view class="li">
					<text>出生日期</text>
					<view class="wrap" @click="show=true">
						<input type="text" :value="birth" disabled="" placeholder="请选择日期" placeholder-class="placeholder-class" />
						<text class="ico-down"></text>
					</view>
                </view>
				<view class="li">
					<text>你的性别</text>
					<view class="box">
						<view @tap="sex=0" :class="['item', {active: sex==0}]">
							<view class="gender">
								<image src="../../src/static/img/cf2cf4_124x124.png" mode="widthFix"></image>
							</view>
							<text>男生</text>
						</view>
						<view @tap="sex=1" :class="['item', {active: sex==1}]">
							<view class="gender">
								<image src="../../src/static/img/fd3aaa_124x124.png" mode="widthFix"></image>
							</view>
							<text>女生</text>
						</view>
					</view>
				</view>
            </view>
			<view class="button">
				<text class="btn">下一步</text>
			</view>
        </view>
		
		<birthTime :class="{active: show}" @confirm="confirm" @cancel="show=false"></birthTime>
		
    </view>
</template>

<script>
	import birthTime from '@/components/BirthTime/index.vue'
	import { qiniuURL } from '@/tool/common/config.js'
	export default {
		data(){
			return {
				show: false,
				
				qiniuURL: qiniuURL,
				
				sex: 0,
				username:'',
				birth: '',
				avatar:'',
			}
		},
		created() {
			
		},
		methods: {
			confirm(date){
				this.show=false;
				this.birth = date;
			},
			uploadImg(){
				this.$api.upload.qiniu()
				.then(res=>{
					console.log(res);
					this.$api.upload.image(['album ', 'camera'], res.token)
					.then(res=>{
						console.log(res);
						this.avatar = res[0]
					})
				})
			},
			submitFun(){
				var data = {
					sex: this.sex,
					avatar: this.avatar,
					birth: this.birth,
					username: this.username
				}
				this.$api.personal.save(data)
				.then(res=>{
					console.log(res);
				})
			}
		},
		components: {
			birthTime,
		}
	}
</script>

<style>

</style>
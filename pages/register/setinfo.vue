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
						<image src="../../src/static/img/dad94e_122x122.png" mode="widthFix"></image>
					</view>
                </view>
				<view class="li">
					<text>取个名称吧</text>
					<view class="wrap">
						<input type="text" placeholder-class="placeholder-class" value="" placeholder="请输入名称" />
					</view>
                </view>
				<view class="li">
					<text>出生日期</text>
					<view class="wrap">
						<input type="text" value="" placeholder="请选择日期" placeholder-class="placeholder-class" />
						<text class="ico-down"></text>
					</view>
                </view>
				<view class="li">
					<text>你的性别</text>
					<view class="box">
						<view @tap="tabs=0" :class="['item', {active: tabs==0}]">
							<view class="gender">
								<image src="../../src/static/img/fd3aaa_124x124.png" mode="widthFix"></image>
							</view>
							<text>女生</text>
						</view>
						<view @tap="tabs=1" :class="['item', {active: tabs==1}]">
							<view class="gender">
								<image src="../../src/static/img/cf2cf4_124x124.png" mode="widthFix"></image>
							</view>
							<text>男生</text>
						</view>
					</view>
				</view>
            </view>
			<view class="button">
				<text class="btn">下一步</text>
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
		created() {
			
		},
		methods: {
			uploadImg(){
				this.$api.upload.image()
				.then(res=>{
					
				})
			}
		}
	}
</script>

<style>

</style>
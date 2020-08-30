<template>
	<view class="app">
		<view class="opening-page" :style="{'min-height': windowHeight + 'px'}">
			
			<view class="title">
				<view class="title-box">
					<text class="h2">经纪商</text>
					<text class="p">￥699/永久</text>
				</view>
				<view class="back">
					<image src="../../src/static/img/80d389_572x329.png" mode=""></image>
				</view>
			</view>
			
			<view class="text-page">
				<text class="h1">经纪商权益说明</text>
				<text class="p">1、开通经纪商，即视为平台权益合伙人，公司只招募5000名经纪商，永久锁定永不增加。</text>
				<text class="p">2、成为经纪商将获得平台赠送白银卷轴，=值100音豆奖励。</text>
				<text class="p">3、成为经纪商将有权限.上架自己的商品至平台商城享受流量扶持带货。</text>
				<text class="p">4、成为经纪商将享受全平台广告收益的50%红利。</text>
				<text class="p">5、成为经纪商将有权限对接广告商，所获广告费的50%，归经纪商所有。</text>
				<text class="p">6、成为经纪商将有优先资格成为地方区域城市合伙人</text>
				<text class="p">7、成功推荐一名经济商，即获得一个新手卷轴奖励。</text>
				<text class="p">8、平台所有活动、以及新功能经纪商都有优先体检与参与资格。</text>
			</view>
			
			<view class="open-wrap" v-if="false">
				<!-- <text>总价￥699/永久</text> -->
			</view>
			
			<view class="pub-button-null">
				
			</view>
			<view class="pub-button fixed two">
				<text class="btn">立即开通</text>
				<text class="btn" @tap="myLink">我的经纪商</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			myLink(){
				uni.navigateTo({
					url: '../invitation/invitation'
				})
			}
		}
		
	}
</script>

<style>
</style>

<template>
	<view class="center-tabs">
		<view class="status-bar fixed">
			
		</view>
		<view class="user-layout">
			<view class="pict-wrap">
				<view class="leval"><text>V1</text></view>
				<view class="pict">
					<image src="../../src/static/img/c790d4_1200x1200.jpg" mode=""></image>
				</view>
				<view class="vip">经纪商</view>
			</view>
			<view class="text">
				<view class="phone">
					<text class="h1 font">198****5054</text>
					<text class="wei">未实名</text>
				</view>
				<view class="wrap">
					<text class="id font">ID: 62391491</text>
					<view class="xin">
						<text></text>
						<text></text>
						<text></text>
						<text></text>
					</view>
					<view class="desc">四星达人</view>
				</view>
			</view>
			<view class="set">
				<navigator class="ico i1" url="../user/code"></navigator>
				<navigator class="ico i2" url="../set/set"></navigator>
			</view>
			<view class="dou">
				<view class="left">
					<text class="h3">当前音豆</text>
					<view class="number">
						<text class="sp1">0.0000</text>
						<text class="sp2">个</text>
					</view>
				</view>
				<view class="right">
					<text>手续费：100%</text>
				</view>
			</view>
		</view>
		
		<view class="liveness">
			<view class="ul">
				<view class="li">
					<text class="h2">+0.00</text>
					<text class="p">加成活跃度</text>
				</view>
				<view class="li">
					<text class="h2">+0.00</text>
					<text class="p">基础活跃度</text>
				</view>
				<view class="li">
					<text class="h2">+0.00</text>
					<text class="p">锁定音豆</text>
				</view>
				<view class="li">
					<text class="h2">+0.00</text>
					<text class="p">HDC</text>
				</view>
			</view>
		</view>
		
		<view class="scroll-new">
			<view class="layout">
				<text class="h3">最新公告</text>
				<view class="content">
					<text>俄罗斯首支新冠疫苗已经注册，免疫力可持续两年，普京女儿已接种</text>
				</view>
				<text class="more">更多</text>
			</view>
		</view>
		
		<view class="list-menu list-menu-1">
			<view class="layout">
				<text class="h3">常用工具</text>
				<view class="ul">
					<view class="li">
						<navigator url="../user/real" hover-class="hover-class">
							<image src="../../src/static/img/812afe_108x108.png" mode=""></image>
							<text>实名认证</text>
						</navigator>
					</view>
					<view class="li">
						<navigator url="../commonly/team" hover-class="hover-class">
							<image src="../../src/static/img/8588dc_90x90.png" mode=""></image>
							<text>我的团队</text>
						</navigator>
					</view>
					<view class="li" @click="invitation">
						<image src="../../src/static/img/28567a_85x85.png" mode=""></image>
						<text>经纪商</text>
					</view>
					<view class="li">
						<navigator url="../commonly/agent" hover-class="hover-class">
							<image src="../../src/static/img/f4810a_90x90.png" mode=""></image>
							<text>区域代理</text>
						</navigator>
					</view>
				</view>
			</view>
		</view>
		
		<view class="center-box-img w">
			<view class="box">
				<image src="../../src/static/img/43bfff_854x123.jpg" mode="widthFix"></image>
			</view>
		</view>
		
		<view class="my-task">
			<view class="ul">
				<view class="li">
					<view class="ico">
						<image src="../../src/static/img/c4f59a_128x128.png" mode=""></image>
					</view>
					<view class="text">
						<text class="h2">点赞(0/5)</text>
						<text class="p">点赞喜欢的视频</text>
					</view>
					<view class="fr">
						<text>未完成</text>
					</view>
				</view>
				<view class="li">
					<view class="ico">
						<image src="../../src/static/img/f3ffc8_128x128.png" mode=""></image>
					</view>
					<view class="text">
						<text class="h2">评论(0/5)</text>
						<text class="p">点赞评论的视频</text>
					</view>
					<view class="fr">
						<text>未完成</text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="list-menu list-menu-2">
			<view class="layout">
				<text class="h3">视频</text>
				<view class="ul">
					<view class="li">
						<navigator url="../user/real" hover-class="hover-class">
							<text class="ico i1"></text>
							<text class="p">我的视频</text>
						</navigator>
					</view>

					<view class="li">
						<navigator url="../task/Task" hover-class="hover-class">
							<text class="ico i3"></text>
							<text class="p">个人资料</text>
						</navigator>
					</view>
					<view class="li">
						<navigator url="../task/Task" hover-class="hover-class">
							<text class="ico i4"></text>
							<text class="p">任务中心</text>
						</navigator>
					</view>
					<view class="li">
						<navigator url="../commonly/reel" hover-class="hover-class">
							<text class="ico i11"></text>
							<text class="p">我的卷轴</text>
						</navigator>
					</view>
					<view class="li">
						<navigator url="../commonly/transaction" hover-class="hover-class">
							<text class="ico i10"></text>
							<text class="p">收支明细</text>
						</navigator>
					</view>
				</view>
			</view>
		</view>
		
		<view class="list-menu list-menu-2">
			<view class="layout">
				<text class="h3">商城</text>
				<view class="ul">
					<view class="li">
						<navigator url="../shop/AddressList" hover-class="hover-class">
							<text class="ico i6"></text>
							<text class="p">收货地址</text>
						</navigator>
					</view>
					<view class="li">
						<navigator url="../shop/AddressList" hover-class="hover-class">
							<text class="ico i7"></text>
							<text class="p">我的订单</text>
						</navigator>
					</view>
					<view class="li">
						<navigator url="../shop/AddressList" hover-class="hover-class">
							<text class="ico i8"></text>
							<text class="p">我是商家</text>
						</navigator>
					</view>
					<view class="li">
						<navigator url="../shop/AddressList" hover-class="hover-class">
							<text class="ico i12"></text>
							<text class="p">我的客服</text>
						</navigator>
					</view>
				</view>
			</view>
		</view>
		
		<!-- #ifdef H5 -->
			<view class="pub-button-null1"></view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data (){
			return{
				state: 2
			}
		},
		methods: {
			invitation(){
				if(this.state == 1){
					uni.navigateTo({
						url: '../invitation/invitation'
					})
				}else{
					uni.navigateTo({
						url: '../invitation/Opening'
					})
				}
			}
		}
	}
</script>

<style>
</style>

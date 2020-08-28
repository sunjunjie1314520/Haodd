<template>
	<view class="center-tabs bg-one">
		<view class="user-layout">
			<view class="pict">
				<image src="../../src/static/img/c790d4_1200x1200.jpg" mode=""></image>
			</view>
			<view class="text">
				<text class="h1">198****5054</text>
				<text>ID: 62391491</text>
			</view>
			<view class="set">
				<navigator class="ico i1" url="../set/set"></navigator>
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
				<view class="right" v-if="false">
					<text>达人级别：暂无 手续费：100%</text>
					<text>实名：未实名 级别：L0</text>
				</view>
			</view>
		</view>
		
		<view class="liveness">
			<view class="ul">
				<view class="li">
					<text class="h2">+0.0000</text>
					<text class="p">加成活跃度</text>
				</view>
				<view class="li">
					<text class="h2">+0.0000</text>
					<text class="p">基础活跃度</text>
				</view>
				<view class="li">
					<text class="h2">+0.0000</text>
					<text class="p">锁定音豆</text>
				</view>
				<view class="li">
					<text class="h2">+0.0000</text>
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
						<image src="../../src/static/img/812afe_108x108.png" mode=""></image>
						<text>我的等级</text>
					</view>
					<view class="li">
						<image src="../../src/static/img/8588dc_90x90.png" mode=""></image>
						<text>我的团队</text>
					</view>
					<view class="li">
						<image src="../../src/static/img/28567a_85x85.png" mode=""></image>
						<text>经纪商</text>
					</view>
					<view class="li">
						<image src="../../src/static/img/f4810a_90x90.png" mode=""></image>
						<text>区域代理</text>
					</view>
				</view>
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
						<navigator url="../user/real" hover-class="hover-class">
							<text class="ico i2"></text>
							<text class="p">实名认证</text>
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
						<navigator url="../task/Task" hover-class="hover-class">
							<text class="ico i11"></text>
							<text class="p">我的卷轴</text>
						</navigator>
					</view>
					<view class="li">
						<navigator url="../task/Task" hover-class="hover-class">
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
							<text class="ico i9"></text>
							<text class="p">游戏中心</text>
						</navigator>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
</script>

<style>
</style>

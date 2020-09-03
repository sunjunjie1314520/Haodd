<template>
	<view class="app">
		<view class="businessman-page" :style="{'min-Height': windowHeight + 'px'}">
			<view class="ul">
				<view class="li">
					<input type="text" value="" placeholder="请输入商品名称" placeholder-class="placeholder-class" />
				</view>
				<view class="li">
					<input type="text" value="" placeholder="请输入名称" placeholder-class="placeholder-class" />
				</view>
				<view class="li">
					<input type="text" value="" placeholder="请输入店铺电话" placeholder-class="placeholder-class" />
				</view>
				<view class="li">
					<input type="text" value="" placeholder="请输入店铺介绍" placeholder-class="placeholder-class" />
				</view>
				<view class="li">
					<text class="type">请选择店铺分类</text>
				</view>
				<view class="li">
					<text class="type">请选择店铺地址</text>
				</view>
				<view class="li">
					<input type="text" value="" placeholder="请输入店铺详细地址" placeholder-class="placeholder-class" />
				</view>
			</view>
			
			<view class="ul1">
				<view class="li">
					<text class="h2">法人信息</text>
					<view class="input">
						<input type="text" value="" placeholder="请输入法人姓名" placeholder-class="placeholder-class"  />
					</view>
					<view class="input">
						<input type="text" value="" placeholder="请输入法人身份证号" placeholder-class="placeholder-class" />
					</view>
				</view>
				<view class="li">
					<text class="h2">上传证件</text>
					<view class="upload-area">
						<view class="pict">
							<image src="" mode=""></image>
						</view>
						<text class="h3">上传营业执照</text>
						<text class="desc">不接受电子版执照，保证所有信息清晰完整</text>
					</view>
					<view class="upload-area">
						<view class="pict">
							<image src="" mode=""></image>
						</view>
						<text class="h3">上传门店照片</text>
					</view>
					<view class="upload-area">
						<view class="pict">
							<image src="" mode=""></image>
						</view>
						<text class="h3">法人代表(授权人)身份证正面</text>
					</view>
					<view class="upload-area">
						<view class="pict">
							<image src="" mode=""></image>
						</view>
						<text class="h3">法人代表( 授权人)身份证反面</text>
					</view>
				</view>
			</view>
			
			<view class="pub-button mt40">
				<view class="btn">提交</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
</style>

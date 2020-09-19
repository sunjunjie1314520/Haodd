<template>
	<view class="app">
		<view class="news-page" :style="{'min-height': windowHeight + 'px'}">
			<view class="title">
				<text class="h2">{{$current_new.title}}</text>
				<text class="p font">发布时间：{{$current_new.create_time}}</text>
			</view>
			<view class="content">
				<!-- <image src="../../src/static/img/ad.jpeg" mode="widthFix"></image> -->
				<text class="p"></text>
				<rich-text :nodes="$current_new.content"></rich-text>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
</style>

<template>
	<view class="app" :style="{'height': windowHeight + 'px'}">
		<view class="my-code">
			<view class="picture">
				<canvas canvas-id="myCanvas" id='sss'></canvas>
				<ourLoading :active="yijing" text="loading..." />
				<!-- <image class="back" :src="back" mode="widthFix"></image> -->
				<!-- <image class="pub-qr" :src="qr" mode=""></image> -->
			</view>
			<view class="pub-button mt40 w">
				<text class="btn" @click="bcFn">保存图片到相册</text>
			</view>
		</view>
	</view>
</template>

<script>
	import Qr from '@/js_sdk/wxqrcode.js'
	export default {
		data(){
			return {
				qr: '',
				base64:'',
				backImg: '../../static/image/c8ff41_813x1324.png',
				url: '',
				
				yijing: true,
			}
		},
		created(){
			this.getConfig();
		},
		methods: {
			// 请求下载地址
			getConfig(){
				this.$api.personal.download()
				.then(res=>{
					this.url = res.data;
					console.log(res);
					this.getqr();
				})
			},
			// 生成二维码
			getqr(){
				const _this = this
				this.qr = Qr.createQrCodeImg(_this.url + '?uuid=' + _this.$aes.id)
				setTimeout(()=>{
					this.copyFn();
				}, 500)
			},
			// 保存到相册中
			bcFn(){
				const _this = this;
				uni.showLoading({
					title: '正在保存',
					mask: true
				})
				uni.saveImageToPhotosAlbum({  //保存图片
					filePath: _this.base64,  
					success: (res) => {
						uni.showToast({
							title:'保存成功',
						})
					},
					fail() {
						setTimeout(()=>{
							_this.bcFn();
						}, 5000)
					}
				})
			},
			copyFn() {
				const _this = this;
				let ww, hh;
				const query = uni.createSelectorQuery().in(this);
				query.select('#sss').boundingClientRect(data => {  //获取canvas-dom
					ww = data.width
					hh = data.height
					var ctx = uni.createCanvasContext('myCanvas') //绑定画布
					ctx.drawImage(_this.backImg, 0, 0, ww, hh); //填充背景图片
					
					_this.yijing = false;
					
					ctx.drawImage(_this.qr, (106 / 300) * ww, (371 / 489) * hh, (87 / 300) * ww, (87 / 300) * ww); //填充二维码
					ctx.setFillStyle('white')  //设置内容2的文字样式
					ctx.setFontSize(16);
					ctx.setTextAlign('center')  //同上
					var text = 'ID:' + _this.$aes.id
					ctx.fillText(text, ww/2, (346 / 489) * hh)
					
					ctx.draw();  //输出到画布中
					
					setTimeout(()=>{  //不加延迟的话，base64有时候会赋予undefined
						uni.canvasToTempFilePath({
							canvasId:'myCanvas',
							success: (res) => {
								_this.base64 = res.tempFilePath
							}
						})
					}, 800)
				}).exec();
			},
		}
	}
</script>

<style lang="stylus" scoped>
	.back
		width 100%
		min-height 500upx
	#sss {
		// position: absolute;
		width: 100%;
		height: 977upx;
		// background-color #fff;
		// top: -99999899upx;
		// left: -99999899upx;
		z-index: 9;
	}
</style>

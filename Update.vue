<template>
	<view class="app-update">
		<view class="layout" v-if="show">
			<text class="h2">正在自动更新</text>
			<view class="process">
				<view class="value" :style="{'width': curr + '%'}"></view>
			</view>
			<view class="tips">
				<text class="font">已下载{{curr}}%</text>
			</view>
		</view>
	</view>
</template>

<script>
	const { platform } = uni.getSystemInfoSync();
	export default {
		data(){
			return {
				show: false,
				curr: 0,
				path:'',
				
				down_config: {},

			}
		},
		created() {
			// this.resetApp();
			// console.log('Update Created');
			// #ifdef APP-PLUS
			this.downFileUpdate();
			// #endif
		},
		methods: {
			// 检查更新
			downFileUpdate(){
				const url = 'http://101.200.171.163:5001/api/update';
				const _this = this;
				
				var data = {
					imei: '',
					phone: uni.getStorageSync('phone') || ''
				}
				
				// console.log(data);
									
				// #ifdef APP-PLUS
					data.imei = plus.device.imei
				// #endif
				
				plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {  
					// console.log(widgetInfo.version); // 版本号
					uni.request({
						url: url,
						method:'POST',
						data: {...data, ...widgetInfo},
						success: (result) => {
							console.log(result);
							const data = result.data.data
							_this.down_config = data
							if (data.update && data.wgt_url) {
								_this.show = true;
								_this.update();
							}
						},
						fail:(error)=>{
							console.log(error);
						}
					});
				});
			},
						
			// 更新
			update(){
				const _this = this;
				var downloadTask;
				// console.log(_this.down_config.wgt_url);
				downloadTask = uni.downloadFile({  
					url: _this.down_config.wgt_url,
					success: (downloadResult) => {  
						if (downloadResult.statusCode === 200) {
							_this.path = downloadResult.tempFilePath
							_this.install()
						}  
					}  
				});
				downloadTask.onProgressUpdate((res) => {
					if(_this.curr != res.progress){
						_this.curr = res.progress
						console.log(res.progress);
					}
				})
			},
			
			// 安装
			install(){
				const _this = this;
				plus.runtime.install(_this.path, {
					force: true  
				}, function() {  
					// console.log('install success...');
					setTimeout(()=>{
						// _this.install_state = false
						_this.resetApp();
					}, 1200)
					
				}, function(e) {  
					// console.error('install fail...');
					uni.showToast({
						title:'安装失败',
						icon:'none'
					})
				});  	
			},
			
			// 重启应用
			resetApp(){
				if(platform == 'ios'){
					const threadClass = plus.ios.importClass("NSThread");
					const mainThread = plus.ios.invoke(threadClass, "mainThread");
					plus.ios.invoke(mainThread, "exit");
				}else{
					plus.runtime.restart();
				}
			}
		},
	}
</script>

<style lang="stylus" scoped>
	.app-update
		.layout
			position fixed
			left 20px
			right 20px
			top 50%
			z-index 99
			margin-top -150upx
			height 300upx
			background-color #fff
			border-radius 10px
			padding 0 40upx
			.h2
				text-align center
				line-height 140upx
				display block
				font-size 34upx
				font-weight bold
			.process
				height 30upx
				position relative
				background-color #CCCCCC
				margin-top 15upx
				border-radius 30upx
				overflow hidden
				.value
					position absolute
					left 0
					bottom 0
					top 0
					background-color #0062CC
			.tips
				text-align center
				margin-top 30upx
				text
					display block
					
				
</style>
<template>
	<view class="alert-xieyi">
		<view class="layout">
			<text class="title">用户协议及隐私政策</text>
			<text class="p">感谢您信任并使用好逗短视频</text>
			<view class="text-wrap">
				我们非常重视您的个人信息和隐私保护，为了更好的保障您的个人权益，在您使用我们的产品前，请您认真阅读<text class="color" @click="gotoLink">《用户协议》</text>的全部内容，同意并接受全部条款后开始使用我们的产品和服务。若选择不同意，将无法使用我们的产品和服务，并会退出应用。
				</view>
			<view class="btn-two">
				<text @click="no_handle" class="no_handle">不同意</text>
				<text @click="yes_handle" class="yes_handle">同意</text>
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
		created() {
			let res = uni.getStorageSync('xieyi')
			if(res){
				this.$emit('quit');
			}
		},
		methods: {
			gotoLink(){
				uni.navigateTo({
					url: '../set/xieyi'
				})
			},
			no_handle(){
				// 退出
				// #ifdef APP-PLUS
				if (uni.getSystemInfoSync().platform=='ios'){
					const threadClass = plus.ios.importClass("NSThread");
					const mainThread = plus.ios.invoke(threadClass, "mainThread");
					plus.ios.invoke(mainThread, "exit");
				//上面的不起效果下面的
				//plus.ios.import("UIApplication").sharedApplication().performSelector("exit")
				} else if (uni.getSystemInfoSync().platform=='android'){
					plus.runtime.quit();
				}
				// #endif
			},
			yes_handle(){
				// 同意
				uni.setStorageSync('xieyi', 'OK');
				this.$emit('quit');
			}
		}
	}
</script>

<style>
</style>

<script>
	import { websocketURL } from "@/tool/common/config.js";
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
			// #ifdef APP-PLUS
				// plus.navigator.setFullscreen(true) //隐藏状态栏
				// plus.navigator.hideSystemNavigation() //隐藏虚拟按键
			var Color = plus.android.importClass("android.graphics.Color");
			plus.android.importClass("android.view.Window");  
			var mainActivity = plus.android.runtimeMainActivity();  
			var window_android = mainActivity.getWindow();
			window_android.setNavigationBarColor(Color.argb(255,17,17,24));
			
			// #endif
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* 全局样式 */
	@import 'src/static/css/font.css';
	@import 'src/static/css/style.min.css';
	/* @import 'gulp/_dist/app.css'; */
</style>

<script>
	import { websocketURL } from "@/tool/common/config.js";
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
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
</style>

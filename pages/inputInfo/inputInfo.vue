<template>
	<view class="app bg-six">
		<view class="input-page" :style="{'height': windowHeight + 'px'}">
			<input v-model="text" placeholder-class="placeholder-class" type="text" :placeholder="'请输入' + place " maxlength="20">
			<text @click="click_qd" class="btn">保存</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: '',
				place:'',
				field: ''
			}
		},
		onLoad(params) {
			this.place = params.place
            this.text = params.name
            this.field = params.field
			
			uni.setNavigationBarTitle({
			　　title: '修改' + this.place
			})
		},
		methods: {
			click_qd:function(){
				this.$assist.prePage()[this.field] = this.text
				uni.navigateBack();
			}
		}
	}
</script>

<style>

</style>

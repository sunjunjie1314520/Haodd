<template>
	<view class="app" :style="{'height': windowHeight + 'px'}">
		<view class="binddata-page">
			<view class="ul">
				<view class="li">
					<text class="span">姓名:</text>
					<view class="fr">
						<input type="text" maxlength="3" value="" placeholder="请输入身份证姓名" placeholder-class="placeholder-class" />
					</view>
				</view>
				<view class="li">
					<text class="span">身份证号码:</text>
					<view class="fr">
						<input type="text" value="" maxlength="18" placeholder="请输入18位身份证号码" placeholder-class="placeholder-class" />
					</view>
				</view>
			</view>
			<view class="pub-button">
				<text class="btn">确定</text>
			</view>
			<view class="tips">
				<text class="p">第一步：请填写个人姓名和身份证号码</text>
				<text class="p">第二步：请支付1.5元认证费完成认证</text>
				<text class="p">注：支付宝账户与实名身份信息不一致将会影响交易</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				array: ['建设银行', '农业银行', '建设银行', '中国银行'],
				index: 0,
			}
		},
		methods: {
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
		}
	}
</script>

<style>
</style>
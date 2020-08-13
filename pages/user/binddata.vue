<template>
	<view class="app" :style="{'height': windowHeight + 'px'}">
		<view class="binddata-page">
			<view class="ul">
				<view class="li">
					<text class="span">开户人:</text>
					<view class="fr">
						<input type="text" value="" placeholder="请输入开户人姓名(必填)" placeholder-class="placeholder-class" />
					</view>
				</view>
				<view class="li">
					<text class="span">身份证号:</text>
					<view class="fr">
						<input type="text" value="" placeholder="请输入身份证号" placeholder-class="placeholder-class" />
					</view>
				</view>
				<view class="li">
					<text class="span">籍贯:</text>
					<view class="fr">
						<input type="text" value="" placeholder="确认输入籍贯" placeholder-class="placeholder-class" />
					</view>
				</view>
				<view class="li">
					<text class="span">开户银行类型:</text>
					<view class="fr">
						<picker @change="bindPickerChange" :value="index" :range="array">
							<view class="picker-type">{{array[index]}}</view>
						</picker>
					</view>
				</view>
				<view class="li">
					<text class="span">详细支行:</text>
					<view class="fr">
						<input type="text" value="" placeholder="确认输入新密码" placeholder-class="placeholder-class" />
					</view>
				</view>
				<view class="li">
					<text class="span">银行账户:</text>
					<view class="fr">
						<input type="text" value="" placeholder="输入银行账户" placeholder-class="placeholder-class" />
					</view>
				</view>
				<view class="li">
					<text class="span">支付宝账号:</text>
					<view class="fr">
						<input type="text" value="" placeholder="输入银行账户" placeholder-class="placeholder-class" />
					</view>
				</view>
				<view class="li">
					<text class="span">微信账号:</text>
					<view class="fr">
						<input type="text" value="" placeholder="输入银行账户" placeholder-class="placeholder-class" />
					</view>
				</view>
			</view>
			<view class="pub-button">
				<text class="btn">确定</text>
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
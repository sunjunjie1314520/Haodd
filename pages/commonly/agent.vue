<template>
	<view class="app" :style="{'height': windowHeight + 'px'}">
		<view class="agent-page">
			<view class="box">
				<view class="ul">
					<view class="li">
						<text class="span">申请人：</text>
						<view class="fr">
							<input type="text" v-model="config.name" value="" maxlength="3" placeholder="请填写真实姓名" placeholder-class="placeholder-class" />
						</view>
					</view>
					<view class="li">
						<text class="span">身份证号：</text>
						<view class="fr">
							<input type="number"  v-model="config.number" maxlength="18" value="" placeholder="请输入申请人身份证号码" placeholder-class="placeholder-class" />
						</view>
					</view>
					<view class="li">
						<text class="span">联系方式：</text>
						<view class="fr">
							<input type="number" v-model="config.phone" maxlength="11" value="" placeholder="请填写手机号码" placeholder-class="placeholder-class" />
						</view>
					</view>
					<view class="li">
						<text class="span">申请代理级别：</text>
						<view class="fr more" @tap="show=true">
							<input type="text" value="" placeholder="请选择申请代理级别" placeholder-class="placeholder-class" disabled />
						</view>
					</view>
					<view class="li">
						<text class="span">申请区域：</text>
						<view class="fr more">
							<input type="text" value="" placeholder="请选择申请区域" placeholder-class="placeholder-class" disabled />
						</view>
					</view>
				</view>
				<view class="tips">
					<text class="p">提示:在申请前请确认已联系公司相关人员，取得了相关的申请资格。</text>
				</view>
			</view>
		</view>
		<view class="pub-button fixed">
			<text class="btn" @click="submitFun">确实提交</text>
		</view>
		<view class="alert-box" v-if="show">
			<view class="layout">
				<view class="ul">
					<view @tap="select=0" :class="['li', {active: select==0}]">
						<text class="ico"></text>
						<text class="span">省级代理</text>
					</view>
					<view @tap="select=1" :class="['li', {active: select==1}]">
						<text class="ico"></text>
						<text class="span">市级代理</text>
					</view>
					<view @tap="select=2" :class="['li', {active: select==2}]">
						<text class="ico"></text>
						<text class="span">县(区)级代理</text>
					</view>
				</view>
				<view class="btn">
					<text @tap="show=false">取消</text>
					<text @tap="confrim">确定</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				select: 0,
				show: false,
				
				config:{
					name: '',
					number:'',
					phone:''
				}
			}
		},
		methods:{
			confrim(){
				this.show=false
			},
			submitFun(){
				let data = {
					...this.config,
					tx: this.select,
					area: '北京苛模压苛模压枯'
				}
				this.$api.personal.daili(data)
				.then(res=>{
					console.log(res);
					this.$assist.msg(res, true, true);
				})
			}
		}
	}
</script>

<style>
</style>

<template>
	<view class="app">
		<view class="personal-page" :style="{'height': windowHeight + 'px'}">
			<view class="pict-wrap">
				<view class="pict"	>
					<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598873289295&di=5c049235ef74beb9077aa5dad9e25787&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201309%2F15%2F102651flir191rqasoz2kq.jpg" mode=""></image>
				</view>
				<view class="box" @click="uploadFile">
					
				</view>
			</view>
			<view class="ul">
				<view class="li">
					<text class="span">姓名</text>
					<view class="fr">
						<text class="field" @click="gotoPage(config.name, '姓名', 'newname')">{{config.name}}</text>
					</view>
				</view>
				<view class="li">
					<text class="span">昵称</text>
					<view class="fr">
						<text class="field" @click="gotoPage(config.nick, '昵称', 'newnick')">{{config.nick}}</text>
					</view>
				</view>
				<view class="li">
					<text class="span">性别</text>
					<view class="fr">
						<picker @change="bindPickerChange" :value="index" :range="array">
							<text class="field">{{array[index]}}</text>
						</picker>
					</view>
				</view>
				<view class="li">
					<text class="span">出生日期</text>
					<view class="fr">
						<text class="field" @click="show=true">{{birth}}</text>
					</view>
				</view>
				<view class="li">
					<text class="span">所在地</text>
					<view class="fr">
						<text class="field" @click="openAddres">{{config.address}}</text>
					</view>
				</view>
				<view class="li">
					<text class="span">个人介绍</text>
					<view class="fr">
						<text class="field" @click="gotoPage(config.jieshao, '个人介绍', 'newjieshao')">{{config.jieshao}}</text>
					</view>
				</view>
			</view>
		</view>
		
		<simple-address ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm"></simple-address>
		<birthTime :class="{active: show}" @confirm="confirm" @cancel="show=false"></birthTime>
	</view>
</template>

<script>
	import birthTime from '@/components/BirthTime/index.vue'
	export default {
		data(){
			return {
				show: false,
				
				// 男女
				array: ['男', '女'],
				index: 0,
				// 年月日
				cityPickerValueDefault: [0, 0, 1],
				
				config: {
					name: '幽幽xx',
					nick: '与寂寞陪伴',
					jieshao:'我喜欢睡觉打游戏~',
					address: '请选择',
				},
				
				birth: '2020-09-05',
				
				newname:'',
				newnick:'',
				newjieshao: '',
			}
		},
		watch: {
			newname(name){
				console.log(name);
				this.config.name = name;
				// this.updateName(newName)
			},
			newnick(nick){
				console.log(nick);
				this.config.nick = nick;
				// this.updateDescribe(nick)
			},
			newjieshao(nick){
				console.log(nick);
				this.config.jieshao = nick;
				// this.updateDescribe(nick)
			},
		},
		methods: {
			// 修改名字
			gotoPage(name, place, newname){
				uni.navigateTo({
					url:`../inputInfo/inputInfo?name=${name}&place=${place}&field=${newname}`
				})
			},
			bindPickerChange(e) {
				this.index = e.target.value
			},
			onConfirm(e) {
				console.log(e);
				this.config.address = e.label
			},
			openAddres() {
				this.cityPickerValueDefault = [0,0,1]
				this.$refs.simpleAddress.open();
			},
			confirm(date){
				this.show=false;
				this.birth = date;
			},
			uploadFile(){
				this.$api.upload.image()
				.then(res=>{
					console.log(res)
				})
			}
		},
		components: {
			birthTime,
		}
	}
</script>

<style>
</style>

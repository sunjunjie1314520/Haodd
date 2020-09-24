<template>
	<view class="app">
		<view class="personal-page" :style="{'height': windowHeight + 'px'}">
			<view class="pict-wrap1">
				<view class="pict"	>
					<image :src="qiniuURL + $user.avatar" mode=""></image>
				</view>
				<view class="box" @click="uploadFile">
					
				</view>
			</view>
			<view class="ul">
				<view class="li">
					<text class="span">姓名</text>
					<view class="fr">
						 <!-- @click="gotoPage($user.card_name || '', '姓名', 'newname')" -->
						<text class="field" @click="gotoYan">{{$user.card_name || '去实名验证'}}</text>
					</view>
				</view>
				<view class="li">
					<text class="span">昵称</text>
					<view class="fr">
						<text class="field" @click="gotoPage($user.nickname || '', '昵称', 'newnick')">{{$user.nickname}}</text>
					</view>
				</view>
				<view class="li">
					<text class="span">性别</text>
					<view class="fr">
						<picker @change="bindPickerChange" :value="$user.sex" :range="array">
							<text class="field">{{array[$user.sex]}}</text>
						</picker>
					</view>
				</view>
				<view class="li">
					<text class="span">出生日期</text>
					<view class="fr">
						<text v-if="$user.birth" class="field" @click="show=true">{{$user.birth | timestampToTime}}</text>
						<text v-else class="field" @click="show=true">{{birth}}</text>
					</view>
				</view>
				<view class="li">
					<text class="span">所在地</text>
					<view class="fr">
						<text class="field" @click="openAddres">{{$user.address || address}}</text>
					</view>
				</view>
				<view class="li">
					<text class="span">个人介绍</text>
					<view class="fr">
						<text class="field" @click="gotoPage($user.des, '个人介绍', 'newjieshao')">{{$user.des}}</text>
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
	import { qiniuURL } from '@/tool/common/config.js'
	export default {
		data(){
			return {
				qiniuURL: qiniuURL,
				show: false,
				
				// 女男
				array: ['女', '男'],
				index: 0,
				// 年月日
				cityPickerValueDefault: [0, 0, 1],
				
				birth: '未选择',
				address:'未选择',
				
				newname:'',
				newnick:'',
				newjieshao: '',
			}
		},
		watch: {
			newname(name){
				console.log(name);
				this.userSave({username: name});
			},
			newnick(nick){
				console.log(nick);
				this.userSave({nickname: nick});
			},
			newjieshao(nick){
				console.log(nick);
				this.userSave({des: nick});
			},
		},
		created() {
			// console.log(this.$user);
			// this.index = this.$user.sex
		},
		methods: {
			upload(res){
				this.userSave({avatar: res[0]});
			},
			gotoYan(){
				uni.navigateTo({
					url: '../user/real'
				})
			},
			// 修改名字
			gotoPage(name, place, newname){
				uni.navigateTo({
					url:`../inputInfo/inputInfo?name=${name}&place=${place}&field=${newname}`
				})
			},
			bindPickerChange(e) {
				// this.index = e.target.value
				this.userSave({sex: e.target.value});
			},
			
			onConfirm(e) {
				console.log(e);
				this.userSave({address: e.label});
			},
			openAddres() {
				this.cityPickerValueDefault = [0,0,1]
				this.$refs.simpleAddress.open();
			},
			confirm(date){
				this.show=false;
				this.birth = date;
				
				var date1 = new Date(date).getTime() / 1000;
				console.log(date1);
				this.userSave({birth: date1});
			},
			
			
		},
		components: {
			birthTime,
		}
	}
</script>

<style>
</style>

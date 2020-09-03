<template>
    <view class="app bg-six" :style="{'min-height': windowHeight + 'px'}">
        
        <view class="address-manage-page" v-if="addressList">
			<uni-swipe-action  class="ul">
				<uni-swipe-action-item
				class="li"
				:options="options"
				@click="deleteAddress($event, item.id)"
				@change="change" 
				v-for="(item, index) in addressList"
				:key="item.id">
					<view class="box">
						<view class="fl" @tap="selectAddress(item)">
							<view class="one">
								<text class="s1">{{item.name}}</text>
								<text class="s2">{{item.phone}}</text>
							</view>
							<view class="two">
								<text class="p">{{item.province}}{{item.city}}{{item.area}}{{item.address}}</text>
							</view>
						</view>
						<view class="fr">
							<navigator class="edit" :url="'../order/newconsignee?id=' + item.id"></navigator>
						</view>
					</view>
				</uni-swipe-action-item>
			</uni-swipe-action>
            <view class="pub-fixed-button">
                <navigator hover-class="hover-class" url="../order/newconsignee" class="btn">新建收货地址</navigator>
            </view>
        </view>
		
		<uni-loadding v-else></uni-loadding>
		
    </view>
</template>

<script>
	import { PERSONAL_LIST_ADDRESS } from '@/tool/common/constants.js' 
	import { mapState } from 'vuex'
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
	import uniSwipeActionItem from '@/components/uni-swipe-action-item/uni-swipe-action-item.vue'
	export default {
		data(){
			return {
				options:[
					{
						text: '删除',
						style: {
							backgroundColor: '#f7224e'
						}
					},
				]
			}
		},
		onLoad(params) {
			this.select = params.select
			// this.$store.dispatch(`Personal/${PERSONAL_LIST_ADDRESS}`)
		},
		computed: {
			// ...mapState('Personal/', {
			// 	addressList: state => state[PERSONAL_LIST_ADDRESS]
			// })
			addressList(){
				return [
					{
						id:1,
						phone: 15971345754,
						name: '阿杰',
						province:'湖北省',
						city:'黄冈市',
						area:'蕲春县',
						address:'漕河镇金色家园'
					}
				]
			}
		},
		methods:{
			
			change(e){
				console.log(e);
			},
			
			deleteAddress(e, id){
				console.log(e, id);
				this.$api.personal.deleteAddress({id})
				.then(res=>{
					if(this.$assist.msg(res, true)){
						this.$store.dispatch(`Personal/${PERSONAL_LIST_ADDRESS}`)
					}
				})
			},
			selectAddress(item){
				if (this.select){
					this.$assist.prePage().address = item
					uni.navigateBack()
				}
			}
		},
		components: {
			uniSwipeAction,
			uniSwipeActionItem
		}
	}
</script>

<style>

</style>
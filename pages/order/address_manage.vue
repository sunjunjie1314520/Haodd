<template>
    <view class="app bg-six" :style="{'min-height': windowHeight + 'px'}">
        
        <view class="address-manage-page" v-if="paegData">
			<uni-swipe-action  class="ul">
				<uni-swipe-action-item
				class="li"
				:options="options"
				@click="deleteAddress($event, item.id)"
				@change="change" 
				v-for="(item, index) in $addressList"
				:key="item.id">
					<view class="box">
						<view class="fl" @tap="selectAddress(item)">
							<view class="one">
								<text class="s1">{{item.consignee}}</text>
								<text class="s2">{{item.consignee_phone}}</text>
							</view>
							<view class="two">
								<text class="p">{{item.province}}{{item.city}}{{item.area}}{{item.address}}</text>
							</view>
						</view>
						<view class="fr">
							<text class="edit" @click="editAddress(item)"></text>
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

	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
	import uniSwipeActionItem from '@/components/uni-swipe-action-item/uni-swipe-action-item.vue'
	export default {
		data(){
			return {
				paegData: false,

				size: 10,
				page: 1,
				next: true,
				list: [],

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
		},
		created(){
			this.getNetData()
		},
		watch:{
			
		},
		methods:{
			getNetData(){
				let data = {
					page: this.page,
				}
				// this.$api.shop.consignee_index(data)
				this.$store.dispatch('Shop/consignee_index', data)
				.then(res=>{
					console.log(res);
					this.paegData = res
					this.store(res.data, res.count)
				})
			},
			change(e){
				console.log(e);
			},
			// 编辑地址
			editAddress(item){
				this.$store.commit('Shop/SET_DEFAULT', item)
				uni.navigateTo({
					url: '../order/newconsignee?id=' + item.id
				})
			},
			// 删除收货地址
			deleteAddress(e, id){
				console.log(e, id);
				this.$api.shop.consignee_delete({id})
				.then(res=>{
					if(this.$assist.msg(res, true)){
						this.$store.dispatch('Shop/consignee_index', {page: 1})
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
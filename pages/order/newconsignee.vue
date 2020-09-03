<template>
    <view class="app bg-six" :style="{'min-height': windowHeight + 'px'}">
        
        <view class="newconsignee-page">
            <view class="ul">
                <view class="li">
                    <view class="span">
                        收货人
                    </view>
                    <input v-model="formData.name" type="text" value="" placeholder-class="placeholder-class" placeholder="请填写收货人姓名" />
                </view>
                <view class="li">
                    <view class="span">
                        手机号码
                    </view>
                    <input v-model="formData.phone" class="short" type="number" maxlength="11" placeholder-class="placeholder-class" placeholder="请填写收货人手机号" />
                </view>
                <view class="li">
                    <view class="span">
                        所在地区
                    </view>
                    <text @tap="openAddres" :class="{'acti': pickerText.label}">{{pickerText.label ? pickerText.label : '省市县、乡镇等'}}</text>
                    <!-- <view class="address"></view> -->
                </view>
                <view class="li">
                    <view class="span">
                        详细地址
                    </view>
                    <input v-model="formData.address" class="short" type="text" placeholder-class="placeholder-class" placeholder="街道、楼牌号等" />
                </view>
            </view>
            <view class="pub-fixed-button">
                <text v-if="!params" @click="submitFun" class="btn">保存地址</text>
                <text v-else @click="updateAddress" class="btn">确认修改</text>
            </view>
				
        </view>
		
  <!--      <view class="content">
			<button class="btns" type="primary" @tap="openAddres">默认打开地址</button>
	
			<button class="btns" type="default" @tap="openAddres2">自定义：根据省市区名称打开地址</button>
	
			<button class="btns" type="warn" @tap="openAddres3">自定义：根据省市区“code”打开地址</button>
			
			<textarea v-model="pickerText" cols="30" rows="10"></textarea>
			
			 mask-bg-color="rgba(0, 229, 238, 0.4)" // 自定义遮罩层背景颜色
			
		</view> -->
		
		<simple-address ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm"></simple-address>
	
    </view>
</template>

<script>
	import simpleAddress from '@/components/simple-address/simple-address.nvue'
	import { PERSONAL_LIST_ADDRESS } from '@/tool/common/constants.js'
	import { mapState } from 'vuex'
	
	export default {
		data(){
			return {
				cityPickerValueDefault: [0, 0, 1],
				pickerText: {
					label:""
				},
				formData:{
					name:'',
					phone:'',
					province:'',
					city:'',
					area:'',
					address:''
				},
				params: false,
				id:'',
				city:[]
			}
		},
		onLoad(e){
			if(e.id){
				this.params = true
				this.id = e.id
				this.addressDetail()
			}
		},
		computed: {
			...mapState('Personal/', {
				addressList: state => state[PERSONAL_LIST_ADDRESS]
			})
		},
		methods:{
			// 地址详情
			addressDetail(){
				this.$api.personal.addressDetail({id: this.id})
				.then(res=>{
					var data = res.result
					this.formData = data
					var arr = []
					arr.push(data.province)
					arr.push(data.city)
					arr.push(data.area)
					this.pickerText.label = arr.join('-')
				})
			},
			// 保存地址
			submitFun(){
				this.$api.personal.insertAddress(this.formData)
				.then(res=>{
					if (this.$assist.msg(res, true, true)){
						this.$store.dispatch(`Personal/${PERSONAL_LIST_ADDRESS}`)
					}
				})
			},
			// 修改地址
			updateAddress(){
				this.$api.personal.updateAddress({...this.formData,...{id:this.id}})
				.then(res=>{
					if (this.$assist.msg(res, true, true)){
						this.$store.dispatch(`Personal/${PERSONAL_LIST_ADDRESS}`)
					}
				})
			},
			
			openAddres() {
				this.cityPickerValueDefault = [0,0,1]
				this.$refs.simpleAddress.open();
			},
			openAddres2() {
				// 根据 label 获取
				var index = this.$refs.simpleAddress.queryIndex(this.city, 'label');
				console.log(index);
				this.cityPickerValueDefault = index.index;
				this.$refs.simpleAddress.open();
			},
			openAddres3() {
				// 根据value 获取
				var index = this.$refs.simpleAddress.queryIndex([13, 1302, 130203], 'value');
				console.log(index);
				this.cityPickerValueDefault = index.index;
				this.$refs.simpleAddress.open();
			},
			onConfirm(e) {
				this.pickerText = e;
				this.formData.province = e.labelArr[0]
				this.formData.city = e.labelArr[1]
				this.formData.area = e.labelArr[2]
			}
		},
		components:{
			simpleAddress
		}
	}
</script>

<style>

</style>
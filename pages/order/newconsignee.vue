<template>
    <view class="app bg-six" :style="{'min-height': windowHeight + 'px'}">
        
        <view class="newconsignee-page">
            <view class="ul">
                <view class="li">
                    <view class="span">
                        收货人
                    </view>
                    <input v-model="formData.consignee" type="text" value="" placeholder-class="placeholder-class" placeholder="请填写收货人姓名" />
                </view>
                <view class="li">
                    <view class="span">
                        手机号码
                    </view>
                    <input v-model="formData.consignee_phone" class="short" type="number" maxlength="11" placeholder-class="placeholder-class" placeholder="请填写收货人手机号" />
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

	export default {
		data(){
			return {
				cityPickerValueDefault: [0, 0, 1],
				pickerText: {
					label:""
				},
				formData:{
					consignee:'',
					consignee_phone:'',
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
				this.formData.consignee = this.$current.consignee
				this.formData.consignee_phone = this.$current.consignee_phone
				this.formData.address = this.$current.address
				this.formData.province = this.$current.province
				this.formData.city = this.$current.city
				this.formData.area = this.$current.area
				this.pickerText.label = this.$current.province + '-' + this.$current.city + '-' + this.$current.area
			}
		},
		created(){
			
		},
		methods:{
			// 保存地址
			submitFun(){
				let yz = [
					{
						type: 'name',
						val: this.formData.consignee,
					},
					{
						type: 'phone',
						val: this.formData.consignee_phone,
					},
					{
						type: 'null',
						val: this.pickerText.label,
						field: '地址'
					},
					{
						type: 'null',
						val: this.formData.address,
						field: '详情地址'
					}
				]
				
				if(!this.$assist.ver(yz)){
					return false;
				}
				
				this.$api.shop.consignee_save(this.formData)
				.then(res=>{
					if (this.$assist.msg(res, true, true)){
						this.$store.dispatch('Shop/consignee_index', {page: 1})
					}
				})
			},
			// 修改地址
			updateAddress(){
				this.$api.shop.consignee_save({...this.formData,...{id:this.id}})
				.then(res=>{
					if (this.$assist.msg(res, true, true)){
						this.$store.dispatch('Shop/consignee_index', {page: 1})
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
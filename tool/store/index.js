
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Personal from "./modules/Personal.js";
import Shop from "./modules/Shop.js";
import Video from "./modules/Video.js";

var channels = null;

function getRandomHost() {
	var hosts = ['https://apibj.beecloud.cn',
		'https://apihz.beecloud.cn',
		'https://apisz.beecloud.cn',
		'https://apiqd.beecloud.cn'
	];
	return "" + hosts[parseInt(3 * Math.random())] + "/2/rest/app/bill";
}

function getPayChannel(bc_channel) {	
	var dc_channel_id = '';
	switch (bc_channel) {
		case 'ALI_APP':
			dc_channel_id = 'alipay';
			break;
		case 'WX_APP':
			dc_channel_id = 'wxpay';
			break;
		default:
			break;
	} 
	for (var i in channels) {
		if (channels[i].id == dc_channel_id) {
			return channels[i];
		}
	}
	return null;
}

const store = new Vuex.Store({
    strict: true,
    modules: {
		Personal,
		Shop,
		Video,
    },
    state: {
        
    },
    mutations: {
		
        payReq(state, payload) {
			
			const _this = this;
			console.log(payload);
			// #ifdef APP-PLUS
			plus.payment.getChannels(function(s) {
				channels = s
			})
			var url = getRandomHost();
			uni.request({
				url: url,
				method: 'POST',
				data: JSON.stringify(payload.data),
				dataType: 'json',
				success(data) {
					var result = data.data
					if (result.result_code == 0) {
						var payChannel = getPayChannel(payload.data.channel);
						var paySrc = result.order_string
						plus.payment.request(payChannel, paySrc, function(res){
							// console.log(res);
							uni.showToast({
								title: `${payload.data.title}-支付成功`,
								icon:'none'
							})
							_this.dispatch('Personal/me');
							setTimeout(() => {
								payload.callback();
							}, 1600);
						}, function(e){
							uni.showToast({
								title: `${e.message}`,
								icon:'none'
							})
							setTimeout(() => {
								payload.callback();
							}, 1600);
						});
					}
				}
			})
			// #endif
        }
    },
    actions:{
        
    }
})

export default store
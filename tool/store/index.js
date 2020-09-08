
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Personal from "./modules/Personal.js";
import Shop from "./modules/Shop.js";

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
    },
    state: {
        
    },
    mutations: {
		
        payReq(state, payload) {
			console.log('pay');
			// #ifdef APP-PLUS
			plus.payment.getChannels(function(s) {
				console.log(s)
				channels = s
			})
			var url = getRandomHost();
			uni.request({
				url: url,
				method: 'POST',
				data: JSON.stringify(payload),
				dataType: 'json',
				success(data) {
					var result = data.data
					if (result.result_code == 0) {
						var payChannel = getPayChannel(payload.channel);
						var paySrc = result.order_string
						plus.payment.request(payChannel, paySrc, function(res){
							console.log(res);
							this.dispatch('Personal/me');
							uni.showToast({
								title: `支付成功${res}`,
								icon:'success'
							})
						}, function(e){
							uni.showToast({
								title: `${e.message}`,
								icon:'none'
							})
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
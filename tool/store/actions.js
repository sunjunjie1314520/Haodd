
import $api from '../api/index.js' //接口入口

var config = {}

// 全局支付
config.order_pay = ({commit}, payload) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            $api.order.pay(payload)
            .then(res => {
                console.log(res);
                // #ifdef APP-PLUS
                uni.requestPayment({
                    provider: payload.pay_id == 1 ? 'alipay' : 'weixin',
                    orderInfo: res.result.orderInfo,
                    success: function(res) {
                        resolve(res)
                    },
                    fail: function(err) {
                        uni.showToast({
                            title: '支付失败',
                            icon: 'none'
                        })
                        reject(err)
                    }
                });
                // #endif
                // #ifdef H5
                uni.showToast({
                    "title":'H5不支持支付',
                    "icon": 'none'
                })
                // #endif
            })
        }, 200)
    })
}

// 全局登录
config.LoginActions = ({commit}, payload) => {
    return new Promise(function(resolve, reject){
        $api.login.sign(payload)
        .then(res => {
            if (res.code == 0) {
                uni.setStorageSync('token', res.result.token)
            }
            resolve(res)
        })
    })
    
}


export default config
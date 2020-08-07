import assist from "../../utils/play";

const state = {
    login:false,
}

const mutations = {
    // 初始化
	WEBSOCKET_INIT(state, payload) {
		
	},
    // 发送消息
	WEBSOCKET_SEND(state, p) {
		uni.sendSocketMessage({
		    data: JSON.stringify(p),
		    success() {
		        console.log('发送成功!');
		    },
		})
	},
    // 登录
	WEBSOCKET_LOGIN(state) {
        var token = uni.getStorageSync('token')
	    var p = {
	        "type": "login",
	        "data": {
	            "token": token
	        }
	    }
        console.log(token);
        if(token) this.commit('Websocket/WEBSOCKET_SEND', p)
	},
    // 设置登录状态
	WEBSOCKET_SET_LOGIN(state, p) {
		state.login = p
    }
}


const actions = {
    WEBSOCKET_INIT({ commit }, url) {
        commit('WEBSOCKET_INIT', url)
    },
    WEBSOCKET_SEND({ commit }, p) {
        commit('WEBSOCKET_SEND', p)
	}
}

export default {
    namespaced: true,
	state,
	mutations,
	actions
}
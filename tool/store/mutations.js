import $api from '../api/index.js' //接口入口
var config = {}

// 设置登录状态
config.signToggle = (state, payload) => {
    state.loginStatus = payload
}

// 退出账号
config.loginToggle = (state, payload) => {
    state.loginStatus = payload
}


export default config
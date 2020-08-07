import Vue from 'vue'
import App from './App'

//服务器地址
import url_config from './tool/common/config.js'

// 接口模块
import api from './tool/api'

// vuex
import store from './tool/store'

// 功能模块
import assist from './tool/utils/play.js'

// 自定义组件
// import Footer from "@/components/type-compon/Footer.vue";

// 全局注册组件
// Vue.component('uni-footer', Footer)
import mixins from "@/tool/plug/mixins/index.js";
Vue.use(mixins)


// 全局挂载
Vue.prototype.$api = api
Vue.prototype.$url = url_config
Vue.prototype.$store = store
Vue.prototype.$assist = assist

// debug
console.log('接口地址:', url_config)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
    store
})
app.$mount()

import filter from "./filter";
import directive from "./directive";

import assist from './assist.js'

import Binput from "./component/Binput";
import Berror from "./component/Berror";

import { mapState } from "vuex";

let plug = {}

plug.install = function(Vue, options) {
	
    // 指令
    directive(Vue)
    
    // 混入
    Vue.mixin({
        data(){
            return {
                windowHeight: null,
            }
        },
        computed: {
            
        },
        created(){
			
        },
		onLoad() {
			const { windowWidth, windowHeight } = uni.getSystemInfoSync();
			this.windowHeight = windowHeight;
			console.log(windowHeight);
		},
        mounted(){
            
        },
        methods:{
            
        }
    })

    // 过滤器
    filter(Vue)

    // 注册组件
    Vue.component(Binput.name, Binput)
    Vue.component(Berror.name, Berror)

    // 添加原型函数
    Vue.prototype.$BaseConfig = function(params) {
        // console.log(params);
        console.log('%c%s','color: #f60;',`mixins $BaseConfig function from ${params}`);
        return this.$route.query;
    }
    Vue.prototype.$assist = assist;
}

export default plug
import filter from "./filter";
import directive from "./directive";

import assist from './assist.js'

import Binput from "./component/Binput";
import Berror from "./component/Berror";

import { mapState } from "vuex";

import { qiniuURL } from '@/tool/common/config.js'

let plug = {}

plug.install = function(Vue, options) {
	
    // 指令
    directive(Vue)
    
    // 混入
    Vue.mixin({
        data(){
            return {
                qiniuURL: qiniuURL,
                windowHeight: null,

                code_config: {
                    init: 60,
                    down: 0,
                    timer: 0,
                }
            }
        },
        computed: {
            ...mapState('Personal', {
                $user: state => state.me,
                $aes: state => state.aes,
                $current_new: state => state.current_new
            }),
            ...mapState('Shop', {
                $current: state => state.current,
                $addressList: state => state.consignee_index,
                $category: state => state.category_index,
                $product: state => state.product_index,
                $product_detail: state => state.product,
                $confirm: state => state.confirm,
            })
        },
        created(){
			const { windowWidth, windowHeight } = uni.getSystemInfoSync();
			this.windowHeight = windowHeight;
        },
		onLoad() {
			
		},
        mounted(){
            
        },
        methods:{
			// 提示
			toast(msg, icon='none'){
				uni.showToast({
					title: msg,
					icon: icon,
					mask: true
				})
			},
			// 发送验证码
            sendCode(phone){
				let yz = [
					{
						type: 'phone',
						val: phone,
					}
				]
				
				if(!this.$assist.ver(yz)){
					return false;
				}
				
				this.$api.login.sendCode({phone: phone})
				.then(res=>{
                    this.toast(res.msg, 'success');
                    this.cutDown();
				})
            },
            cutDown(){
                this.code_config.down = this.code_config.init
                this.code_config.down = this.code_config.down - 1
                this.code_config.timer = setInterval(() => {
                    this.code_config.down = this.code_config.down - 1
                    if (this.code_config.down == 0){
                        clearInterval(this.code_config.timer)
                    }
                }, 1000);
            },
            // 修改资料
            userSave(data){
                this.$api.personal.save(data)
                .then(res=>{
                    console.log(res);
                    if(res.code == 1){
                        this.$store.dispatch('Personal/me');
                    }
                })
            },
            // 分页功能
            store(data, count) {
                if (data.length == 0){
                    this.list = data
                }else {
                    this.list = this.list.concat(data)
                }
                if (count <= this.size || count <= this.list.length || count === 0) {
                    this.next = false;
                } else {
                    this.page = this.page + 1;
                }
            },
            // 上传图片
            uploadFile(methods = 'upload') {
                this.$api.upload.qiniu()
                .then(res => {
                    console.log(res);
                    this.$api.upload.image(['album ', 'camera'], res.token)
                    .then(res => {
                        this[methods](res);
                    })
                })
            }
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
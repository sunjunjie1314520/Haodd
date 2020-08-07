let url_config = null

// 显示环境信息
console.log(process.env);

const serverURL = 'http://app.lunmaiquan.com/'

const websocketURL = 'ws://app.lunmaiquan.com:18306'

if(process.env.NODE_ENV === 'development'){
    // 开发环境
	url_config = serverURL.concat('mobile')
    
    // #ifdef H5
        // 代理配置
        // url_config = 'dev/mobile'
    // #endif
	
}else{
    // 生产环境
    url_config = serverURL.concat('mobile')
}

export default url_config

export {
    url_config,
    websocketURL
}
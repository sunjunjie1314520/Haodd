let url_config = null

// 显示环境信息
console.log(process.env);

const serverURL = 'http://192.168.1.50/index.php'

const websocketURL = 'ws://app.lunmaiquan.com:18306'

if(process.env.NODE_ENV === 'development'){
    // 开发环境
	url_config = serverURL
    	
}else{
    // 生产环境
    url_config = serverURL
}

export default url_config

export {
    url_config,
    websocketURL
}
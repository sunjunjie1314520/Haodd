let url_config = null

// 显示环境信息
console.log(process.env);

// 接口地址
// const serverURL = 'http://192.168.1.50/index.php'
const serverURL = 'http://101.200.171.163/public/index.php'

// 上传文件地址
const qiniu = 'http://up-z2.qiniup.com'

// 图片显示地址
const qiniuURL = 'http://api.ohtbmgn.cn/'

// 支付金额配置
const play_config = {
	auth: 1.5, // 认证金额
	broker: 699,  // 经纪商
}

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
    qiniu,
	qiniuURL,
	play_config
}
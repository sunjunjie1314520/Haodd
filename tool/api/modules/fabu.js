import request from '@/tool/utils/request.js'

const config = {}


// 发布商品
config.shop = params => request.globalRequest('/Shop/insert', 'POST', params, 1, '正在发布')

// 申请权限
config.supplyShopPrivilege = params => request.globalRequest('/Personal/supplyShopPrivilege', 'POST', params, 1)

// 发布文章
config.article = params => request.globalRequest('/Article/insert', 'POST', params, 1, '正在发布')

// 发布视频
config.video = params => request.globalRequest('/Video/insert', 'POST', params, 1, '正在发布')

export default config
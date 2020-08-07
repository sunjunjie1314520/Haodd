import request from '@/tool/utils/request.js'

const config = {}

// 好友信息
config.info = params => request.globalRequest(`/Friend/info?user_id=${params.user_id}`, 'GET', params, 1)

// 好友文章列表
config.article = params => request.globalRequest(`/Friend/article?user_id=${params.user_id}&page=${params.page}`, 'GET', params, 1)

// 好友视频列表
config.video = params => request.globalRequest(`/Friend/video?user_id=${params.user_id}&page=${params.page}`, 'GET', params, 1)

// 好友商品列表
config.shop = params => request.globalRequest(`/Friend/shop?user_id=${params.user_id}&page=${params.page}`, 'GET', params, 1)

// 好友相册
config.photos = params => request.globalRequest(`/Friend/photos?user_id=${params.user_id}&page=${params.page}`, 'GET', params, 1)

export default config
import request from '@/tool/utils/request.js'

const config = {}

// 商品列表
config.getShopList = params => request.globalRequest(`/Shop/getShopList?keyword=${params.keyword}&page=${params.page}`, 'GET', params, 1)

// 商品收藏
config.setFavorite = params => request.globalRequest(`/Shop/setFavorite?id=${params.id}`, 'GET', params, 1)

// 商品取消收藏
config.unsetFavorite = params => request.globalRequest(`/Shop/unsetFavorite?id=${params.id}`, 'GET', params, 1)

// 商品详情
config.detail = params => request.globalRequest(`/Shop/detail?id=${params.id}`, 'GET', params, 1)

// 商品评论列表
config.comments = params => request.globalRequest(`/Shop/comments?id=${params.id}&page=${params.page}`, 'GET', params, 1)

// 商品评论
config.comment = params => request.globalRequest(`/Shop/comment`, 'POST', params, 1, '正在评论')

// 我的商品删除
config.delete = params => request.globalRequest('/Shop/delete', 'POST', params, 1, '正在删除')

// 我的商品编辑
config.update = params => request.globalRequest('/Shop/update', 'POST', params, 1, '正在编辑')

export default config
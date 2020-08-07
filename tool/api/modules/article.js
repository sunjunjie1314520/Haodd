import request from '@/tool/utils/request.js'

const config = {}

// 游戏关键词
config.getGamekeywords = params => request.globalRequest(`/Article/getGamekeywords`, 'GET', params, 1)

// 游戏列表
config.getGameList = params => request.globalRequest(`/Article/getGameList?keyword=${params.keyword}&page=${params.page}`, 'GET', params, 1)

// 文章点赞
config.setUp = params => request.globalRequest(`/Article/setUp?id=${params.id}`, 'GET', params, 1)

// 文章取消点赞
config.unsetUp = params => request.globalRequest(`/Article/unsetUp?id=${params.id}`, 'GET', params, 1)

// 文章详情
config.detail = params => request.globalRequest(`/Article/detail?id=${params.id}`, 'GET', params, 1)

// 文章评论列表
config.comments = params => request.globalRequest(`/Article/comments?id=${params.id}&page=${params.page}`, 'GET', params, 1)

// 文章评论
config.comment = params => request.globalRequest('/Article/comment', 'POST', params, 1, '发送中')

export default config
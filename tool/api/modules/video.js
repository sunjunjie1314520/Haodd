import request from '@/tool/utils/request.js'

const config = {}

// 视频列表
config.getVideoAllList = params => request.globalRequest(`/Video/getVideoAllList?type=${params.type}&page=${params.page}`, 'GET', params, 1)

// 视频详情
config.detail = params => request.globalRequest(`/Video/detail?id=${params.id}`, 'GET', params, 1)

// 视频评论列表
config.comments = params => request.globalRequest(`/Video/comments?id=${params.id}&page=${params.page}`, 'GET', params, 1)

// 视频评论
config.comment = params => request.globalRequest('/Video/comment', 'POST', params, 1, '正在评论')

// 视频点赞
config.setUp = params => request.globalRequest(`/Video/setUp?id=${params.id}`, 'GET', params, 1)

// 视频取消点赞
config.unsetUp = params => request.globalRequest(`/Video/unsetUp?id=${params.id}`, 'GET', params, 1)

// 视频实时动态
config.getList = params => request.globalRequest(`/Video/getList?page=${params.page}`, 'GET', params, 1)

export default config
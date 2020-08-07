import request from '@/tool/utils/request.js'

const config = {}

// 热门论坛
config.getHot = params => request.globalRequest(`/Forum/getHot`, 'GET', params, 1)
// 全部论坛
config.getAll = params => request.globalRequest(`/Forum/getAll`, 'GET', params, 1)

// 论坛详情
config.detail = params => request.globalRequest(`/Forum/detail?id=${params.id}`, 'GET', params, 1)

// 论坛评论
config.comment = params => request.globalRequest(`/Forum/comment`, 'POST', params, 1, '正在评论')

// 论坛评论列表
config.comments = params => request.globalRequest(`/Forum/comments?id=${params.id}&page=${params.page}&type=${params.type}`, 'GET', params, 1)

// 论坛精华评论列表
config.bestComments = params => request.globalRequest(`/Forum/bestComments?id=${params.id}`, 'GET', params, 1)

// 评论点赞
config.setUp = params => request.globalRequest(`/Forum/setUp?id=${params.id}`, 'GET', params, 1, '正在点赞')

// 评论取消点赞
config.unsetUp = params => request.globalRequest(`/Forum/unsetUp?id=${params.id}`, 'GET', params, 1, '正在取消')

// 发帖子
config.insertTie = params => request.globalRequest('/Forum/insertTie', 'POST', params, 1, '正在发布')

// 帖子列表
config.getTieList = params => request.globalRequest(`/Forum/getTieList?id=${params.id}&page=${params.page}&type=${params.type}`, 'GET', params, 1)

// 帖子详情
config.tieDetail = params => request.globalRequest(`/Forum/tieDetail?id=${params.id}`, 'GET', params, 1)

// 帖子点赞
config.setTieUp = params => request.globalRequest(`/Forum/setTieUp?id=${params.id}`, 'GET', params, 1, '正在点赞')

// 帖子取消点赞
config.unsetTieUp = params => request.globalRequest(`/Forum/unsetTieUp?id=${params.id}`, 'GET', params, 1, '正在取消')

// 帖子评论
config.tieComment = params => request.globalRequest(`/Forum/tieComment`, 'POST', params, 1)

// 帖子评论列表
config.tieComments = params => request.globalRequest(`/Forum/tieComments?id=${params.id}&pid=${params.pid}&to_user_id=${params.to_user_id}&content=${params.content}`, 'GET', params, 1)

// 精华帖子列表
config.bestTieList = params => request.globalRequest(`/Forum/bestTieList?id=${params.id}`, 'GET', params, 1)

// 帖子最新动态
config.getList = params => request.globalRequest(`/Forum/getList?page=${params.page}`, 'GET', params, 1)

// 帖子删除
config.deleteTie = params => request.globalRequest(`/Forum/deleteTie?id=${params.id}`, 'GET', params, 1, '正在删除')

// 回帖删除
config.deleteComment = params => request.globalRequest(`/Forum/deleteComment?id=${params.id}`, 'GET', params, 1, '正在删除')

export default config
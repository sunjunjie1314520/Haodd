import request from '@/tool/utils/request.js'

const config = {}

// 用户视频主页
config.video_home = params => request.globalRequest('/user/video_home', 'POST', params, 1)

// 视频列表
config.video_index = params => request.globalRequest('/video/page_index', 'POST', params, 1)

// 点赞/取消
config.video_click = params => request.globalRequest('/video_like/click', 'POST', params, 1)

// 关注取消对方
config.follow_add = params => request.globalRequest('/user_follow/add', 'POST', params, 1)

export default config

import request from '@/tool/utils/request.js'

const config = {}

// 用户视频主页
config.video_home = params => request.globalRequest('/user/video_home', 'POST', params, 1)

// 视频列表
config.video_index = params => request.globalRequest('/video/page_index', 'POST', params, 1)



export default config

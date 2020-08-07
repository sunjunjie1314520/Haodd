import request from '@/tool/utils/request.js'

const config = {}

// 首页
config.index = params => request.globalRequest('/banner/index', 'GET', params, 1)

// 体育
config.healthy = params => request.globalRequest('/banner/healthy', 'GET', params, 1)

// 社区
config.social = params => request.globalRequest('/banner/social', 'GET', params, 1)

// 游戏
config.game = params => request.globalRequest('/banner/game', 'GET', params, 1)

export default config
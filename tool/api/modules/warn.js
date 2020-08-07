import request from '@/tool/utils/request.js'

const config = {}

// 举报用户
config.user = params => request.globalRequest(`/Warn/user`, 'POST', params, 1)

export default config
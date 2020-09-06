import request from '@/tool/utils/request.js'

const config = {}

// 修改用户资料
config.save = params => request.globalRequest('/User/save', 'POST', params, 1, '正在修改')

// 忘记密码
config.forgot = params => request.globalRequest('/login/forgot', 'POST', params, 1, '正在重置')

export default config
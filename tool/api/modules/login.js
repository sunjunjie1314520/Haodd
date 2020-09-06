import request from '@/tool/utils/request.js'

const config = {}

// 登录
config.sign = params => request.globalRequest('/login/user', 'POST', params, 1, '登录中')

// 注册
config.register = params => request.globalRequest('/reg/user', 'POST', params, 1, '正在注册')

// 发送验证码
config.sendCode = params => request.globalRequest('/sys/verity_code', 'POST', params, 1, '正在发送')

export default config

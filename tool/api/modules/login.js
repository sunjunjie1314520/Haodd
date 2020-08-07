import request from '@/tool/utils/request.js'

const config = {}

// 登录
config.sign = params => request.globalRequest('/login/login', 'POST', params, 1)

// 注册
config.register = params => request.globalRequest('/login/register', 'POST', params, 1, '正在注册')

// 发送验证码
config.sendCode = params => request.globalRequest('/login/sendCode', 'POST', params, 1, '正在发送')

// 重置密码
config.resetPass = params => request.globalRequest('/login/resetPass', 'POST', params, 1, '正在重置')

export default config
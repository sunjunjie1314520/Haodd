import request from '@/tool/utils/request.js'

const config = {}

// 修改用户资料
config.save = params => request.globalRequest('/User/save', 'POST', params, 1, '正在修改')

// 忘记密码
config.forgot = params => request.globalRequest('/login/forgot', 'POST', params, 1, '正在重置')

// 我的首页， 音豆 达人 等级
config.me = params => request.globalRequest('/user/me', 'GET', params, 1)

// 我的团队
config.user_team = params => request.globalRequest('/user_team/me', 'GET', params, 1)

// 我的团队经纪商， 直属经纪商
config.me_partner = params => request.globalRequest('/user_team/me_partner', 'GET', params, 1)

// 任务中心
config.Mineral = params => request.globalRequest('/Mineral/page_index', 'GET', params, 1)

// 修改用户密码
config.upd_pwd = params => request.globalRequest('/User/upd_pwd', 'POST', params, 1, '正在修改')

// 绑定修改银行卡
config.add_bank = params => request.globalRequest('/user/add_bank', 'POST', params, 1, '操作')

// 修改交易安全码
config.upd_safe = params => request.globalRequest('/User/upd_safe', 'POST', params, 1, '正在修改')

// 用户银行信息
config.bank_index = params => request.globalRequest('/user/bank_index', 'GET', params, 1)

// 我的团队
config.user_team = params => request.globalRequest('/user_team/me', 'POST', params, 1)

// 我的团队经纪商， 直属经纪商
config.me_partner = params => request.globalRequest('/user_team/me_partner', 'POST', params, 1)

// 音豆收入与支出
config.amount_detail = params => request.globalRequest('/User_Amount_Detail/page_index', 'POST', params, 1)

// 兑换卷轴
config.add_mineral = params => request.globalRequest('/user_mineral/add_mineral', 'POST', params, 1)

// 任务中心
config.mineral = params => request.globalRequest('/Mineral/page_index', 'POST', params, 1)

// 我的卷轴
config.usermineral = params => request.globalRequest('/UserMineral/page_index', 'POST', params, 1)

// 我的任务完成情况
config.today_count = params => request.globalRequest('/user_task/today_count', 'GET', params, 1)

// 系统公告
config.news = params => request.globalRequest('/sys/news', 'POST', params, 1)

// 下载软件配置
config.download = params => request.globalRequest('/sys/download', 'POST', params, 1)

// 查询身份证号码
config.user_card = params => request.globalRequest('/user_card/index', 'POST', params, 1)

// 查询结果
config.aliyun_check_log = params => request.globalRequest('/user/aliyun_check_log', 'POST', params, 1)

// 找回交易密码
config.reset_safe_code = params => request.globalRequest('/user/reset_safe_code', 'POST', params, 1, '正在重置')

export default config
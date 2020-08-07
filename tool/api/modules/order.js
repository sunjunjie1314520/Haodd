import request from '@/tool/utils/request.js'

const config = {}


// 我买到的
config.buys = params => request.globalRequest(`/Order/buys?page=${params.page}`, 'GET', params, 1)

// 我卖出的
config.sells = params => request.globalRequest(`/Order/sells?page=${params.page}`, 'GET', params, 1)

// 生成订单
config.insert = params => request.globalRequest('/Order/insert', 'POST', params, 1)

// 订单详情
config.detail = params => request.globalRequest(`/Order/detail?order_id=${params.order_id}`, 'GET', params, 1)

// 退款单发起申请
config.service = params => request.globalRequest(`/Order/service`, 'POST', params, 1, '正在提交')

// 订单支付信息
config.pay = params => request.globalRequest(`/Order/pay`, 'POST', params, 1)

// 退款单详情
config.service_detail = params => request.globalRequest(`/Order/service_detail?service_id=${params.service_id}`, 'GET', params, 1)

// 退款单买家取消
config.service_cancel = params => request.globalRequest(`/Order/service_cancel`, 'POST', params, 1)

// 退款单买家关闭
config.service_close = params => request.globalRequest(`/Order/service_close`, 'POST', params, 1)

// 订单确认收货
config.confirm = params => request.globalRequest(`/Order/confirm`, 'POST', params, 1)

// 退货单申请平台介入
config.service_platform = params => request.globalRequest(`/Order/service_platform`, 'POST', params, 1)

// 订单取消
config.cancel = params => request.globalRequest(`/Order/cancel`, 'POST', params, 1, '正在取消')

// 退款单卖家审核
config.service_check = params => request.globalRequest(`/Order/service_check`, 'POST', params, 1)

// 订单发货
config.send = params => request.globalRequest(`/Order/send`, 'POST', params, 1, '正在发货')

// 获取快递列表
config.getExpress = params => request.globalRequest(`/Order/getExpress`, 'POST', params, 1)

// 删除订单
config.delete = params => request.globalRequest(`/Order/delete`, 'POST', params, 1, '正在删除')


export default config
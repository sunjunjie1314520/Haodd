import request from '@/tool/utils/request.js'

const config = {}

// 地址管理收货信息列表
config.consignee_index = params => request.globalRequest('/user_consignee/page_index', 'POST', params, 1)

// 删除地址管理收货信息
config.consignee_delete = params => request.globalRequest('/user_consignee/delete', 'POST', params, 1, '正在删除')

// 添加修改地址管理收货信息
config.consignee_save = params => request.globalRequest('/user_consignee/save', 'POST', params, 1, '正在添加')

// 分类列表
config.category_index = params => request.globalRequest('/product_category/index', 'POST', params, 1)

// 根据分类获取产品
config.product_index = params => request.globalRequest('/product/page_index', 'POST', params, 1)

// 产品详情页
config.product_detail = params => request.globalRequest('/product/index', 'POST', params, 1)

// 加入购物车
config.add_cart = params => request.globalRequest('/cart/add_cart', 'POST', params, 1, '正在加入')

// 创建订单
config.add_order = params => request.globalRequest('/order/add_order', 'POST', params, 1, '正在下单')

// 购物车列表详情
config.cart_index = params => request.globalRequest('/cart/page_index', 'POST', params, 1)

// 订单产品列表详情
config.order_index = params => request.globalRequest('/order/page_index', 'POST', params, 1)

// 商城轮播图
config.sys_shop = params => request.globalRequest('/sys_shop/index', 'POST', params, 1)

// 确认收货
config.confim_status = params => request.globalRequest('/order/confim_status', 'POST', params, 1)

// 删除订单
config.order_delete = params => request.globalRequest('/order/delete', 'POST', params, 1)

// 物流单号
config.order_delivery = params => request.globalRequest('/order_delivery/index', 'POST', params, 1)

// 删除购物车
config.cart_delete = params => request.globalRequest('/cart/delete', 'POST', params, 1)

export default config
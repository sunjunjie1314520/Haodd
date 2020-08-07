import request from '@/tool/utils/request.js'

const config = {}


// 公告内容
config.getNotice = params => request.globalRequest('/setting/getNotice', 'GET', params, 1)

// 可能认识的人
config.mayKnow = params => request.globalRequest('/Personal/mayKnow', 'GET', params, 1)

// 实时动态
config.getList = params => request.globalRequest(`/Article/getList?desc=${params.desc}&page=${params.page}`, 'GET', params, 1)

// 交友页面列表
config.getContactAllList = params => request.globalRequest(`/Article/getContactAllList?type=${params.type}&page=${params.page}`, 'GET', params, 1)

// 交友热门话题
config.hotTopic = params => request.globalRequest(`/Article/hotTopic`, 'GET', params, 1)



// 最新慈善列表
config.getCishanNewList = params => request.globalRequest(`/Article/getCishanNewList?page=${params.page}`, 'GET', params, 1)

// 最热慈善列表
config.getCishanHotList = params => request.globalRequest(`/Article/getCishanHotList`, 'GET', params, 1)


// 体育列表
config.getConsults = params => request.globalRequest(`/Healthy/getConsults?page=${params.page}`, 'GET', params, 1)

// 体育
config.getPlans = params => request.globalRequest(`/Healthy/getPlans`, 'GET', params, 1)

// 体育文章详情
config.detail = params => request.globalRequest(`/Healthy/detail?id=${params.id}`, 'GET', params, 1)


export default config
import request from '@/tool/utils/request.js'

const config = {}

// 个人信息
config.getPersonal = params => request.globalRequest('/Personal/getPersonal', 'GET', params, 1)

// 地址列表
config.listAddress = params => request.globalRequest('/Personal/listAddress', 'GET', params, 1)

// 地址新增
config.insertAddress = params => request.globalRequest('/Personal/insertAddress', 'POST', params, 1, '正在保存')

// 地址修改
config.updateAddress = params => request.globalRequest('/Personal/updateAddress', 'POST', params, 1, true)

// 地址删除
config.deleteAddress = params => request.globalRequest('/Personal/deleteAddress', 'POST', params, 1, true)

// 地址详情
config.addressDetail = params => request.globalRequest(`/Personal/addressDetail?id=${params.id}`, 'GET', params, 1)

// 修改账号密码
config.changePass = params => request.globalRequest('/Personal/changePass', 'POST', params, 1, true)

// 修改手机号码
config.changePhone = params => request.globalRequest('/Personal/changePhone', 'POST', params, 1, true)


// 更新头像
config.updateAvatar = params => request.globalRequest('/Personal/updateAvatar', 'POST', params, 1, true)
// 更新昵称
config.updateName = params => request.globalRequest('/Personal/updateName', 'POST', params, 1)
// 更新性别
config.updateSex = params => request.globalRequest('/Personal/updateSex', 'POST', params, 1, true)
// 更新生日
config.updateBirth = params => request.globalRequest('/Personal/updateBirth', 'POST', params, 1, true)
// 更新所在地
config.updatePlace = params => request.globalRequest('/Personal/updatePlace', 'POST', params, 1, true)
// 更新个人描述
config.updateDescribe = params => request.globalRequest('/Personal/updateDescribe', 'POST', params, 1, true)
// 更新相册
config.updatePhotos = params => request.globalRequest('/Personal/updatePhotos', 'POST', params, 1)


// 粉丝列表
config.fansList = params => request.globalRequest('/Personal/fansList', 'GET', params, 1)

// 关注列表
config.focusList = params => request.globalRequest('/Personal/focusList', 'GET', params, 1)

// 我的视频列表
config.video = params => request.globalRequest(`/Personal/video?page=${params.page}`, 'GET', params, 1)

// 我的视频列表
config.article = params => request.globalRequest(`/Personal/article?page=${params.page}`, 'GET', params, 1)

// 我的收藏列表
config.favorite = params => request.globalRequest(`/Personal/favorite?page=${params.page}`, 'GET', params, 1)

// 我的商品列表
config.shop = params => request.globalRequest(`/Personal/shop?page=${params.page}`, 'GET', params, 1)

// 我的商品编辑
config.update = params => request.globalRequest(`/Personal/update?page=${params.page}`, 'GET', params, 1)

// 收到的评论
config.getComments = params => request.globalRequest(`/Personal/getComments?page=${params.page}`, 'GET', params, 1)

// 收到的点赞
config.getUps = params => request.globalRequest(`/Personal/getUps?page=${params.page}`, 'GET', params, 1)

// 关注
config.focus = params => request.globalRequest('/Personal/focus', 'POST', params, 1)

// 取消关注
config.unfocus = params => request.globalRequest('/Personal/unfocus', 'POST', params, 1)

// 视频删除
config.deleteVideo = params => request.globalRequest('/Personal/deleteVideo', 'POST', params, 1, '正在删除')

// 文章删除
config.deleteArticle = params => request.globalRequest('/Personal/deleteArticle', 'POST', params, 1, '正在删除')

// 推荐好友
config.recommend = params => request.globalRequest(`/Personal/recommend?page=${params.page}`, 'GET', params, 1)

// 用户忽略推荐
config.ignore = params => request.globalRequest('/Personal/ignore', 'POST', params, 1, '正在忽略')

// 我的帖子列表
config.getMyTies = params => request.globalRequest(`/Personal/getMyTies?page=${params.page}`, 'GET', params, 1)

// 我的回帖列表
config.getMyBacks = params => request.globalRequest(`/Personal/getMyBacks?page=${params.page}`, 'GET', params, 1)

// 拉黑用户
config.black = params => request.globalRequest('/Personal/black', 'POST', params, 1, '正在拉黑')

export default config
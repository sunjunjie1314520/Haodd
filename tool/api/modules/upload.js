import request from '@/tool/utils/request.js'

const config = {}

// 上传图片
config.image = (params = ['album ', 'camera'], token) => request.globalChooseImage(`/upload/qiniu`, 1, params, token)

// 上传视频
config.video = (params = [], token) => request.globalChooseVideo(`/upload/qiniu`, params, 1, token)

// 附件删除
config.delete = (params = {}) => request.globalRequest(`/Upload/delete`, 'POST', params, 1)

// 千牛云
config.qiniu = params => request.globalRequest('/upload/qiniu', 'POST', params, 1)

export default config
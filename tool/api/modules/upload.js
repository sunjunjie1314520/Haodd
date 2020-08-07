import request from '@/tool/utils/request.js'

const config = {}

// 上传图片
config.image = (params = ['album ', 'camera']) => request.globalChooseImage(`/Upload/uploadImage`, 1, params)

// 上传视频
config.video = (params = {}) => request.globalChooseVideo(`/Upload/uploadVideo`, params, 1)

// 附件删除
config.delete = (params = {}) => request.globalRequest(`/Upload/delete`, 'POST', params, 1)

export default config
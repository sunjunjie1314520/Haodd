import request from '@/tool/utils/request.js'

const config = {}

// 聊天列表
config.getMessageRooms = params => request.globalRequest('/Message/getMessageRooms', 'GET', params, 1)

// 设置信息已读
config.setRead = params => request.globalRequest('/Message/setRead', 'POST', params, 1)

// 删除聊天
config.deleteRoom = params => request.globalRequest('/Message/deleteRoom', 'POST', params, 1)

// 未读聊天记录
config.getMessageUnreadLogs = params => request.globalRequest(`/Message/getMessageUnreadLogs?room_id=${params.room_id}`, 'GET', params, 1)

// 聊天记录
config.getMessageLogs = params => request.globalRequest(`/Message/getMessageLogs?room_id=${params.room_id}`, 'GET', params, 1)

// 客服信息
config.getService = params => request.globalRequest('/Message/getService', 'GET', params, 1)

export default config
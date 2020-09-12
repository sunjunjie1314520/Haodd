
import { store } from "@/tool/store/store.js";

import {
    VIDEO,
    VIDEO_INDEX,
	VIDEO_CLICK,
	VIDEO_FOLLOW_ADD,
} from "../../common/constants";


const state = {
    [VIDEO_INDEX]: false,
	[VIDEO_CLICK]: false,
	[VIDEO_FOLLOW_ADD]: false,
}

const getters = {
    
}

const mutations = {
	// 设置是否点赞
    SET_DIANZAN(state, payload){
		if(payload.mine_like_count === 0){
			state.video_index[payload.index].mine_like_count = 1
		} else if(payload.mine_like_count === 1){
			state.video_index[payload.index].mine_like_count = 0
		}
	},
	SET_MINE_FOLLOW(state, payload){
		console.log(state.follow_add, payload);
		if (payload.mine_follow === 0) {
		    state.video_index[payload.index].mine_follow = 1
		} else if (payload.mine_follow === 1) {
		    state.video_index[payload.index].mine_follow = 0
		}
	},
	SET_VIDEO_STATUS(state, payload){
		state.video_index[payload.index].play_status = payload.is
	},
}

const actions = {

}


export default store('video', VIDEO, state, getters, mutations, actions)
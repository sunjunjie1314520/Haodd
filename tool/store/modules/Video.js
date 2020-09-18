
import { store } from "@/tool/store/store.js";

import {
    VIDEO,
    VIDEO_INDEX,
	VIDEO_CLICK,
	VIDEO_FOLLOW_ADD,
	VIDEO_COMMENT_INDEX,
	VIDEO_COMMENT_SAVE,
} from "../../common/constants";


const state = {
    [VIDEO_INDEX]: false,
	[VIDEO_CLICK]: false,
	[VIDEO_FOLLOW_ADD]: false,
	[VIDEO_COMMENT_INDEX]: false,
	[VIDEO_COMMENT_SAVE]: false,
}

const getters = {
    
}

const mutations = {
	SET_ADD_COMMENTS(state, payload){
		state.video_index[payload].number_of_comments = state.video_index[payload].number_of_comments + 1
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
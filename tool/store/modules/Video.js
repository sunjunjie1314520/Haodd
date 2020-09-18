
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
	
}

const actions = {

}


export default store('video', VIDEO, state, getters, mutations, actions)
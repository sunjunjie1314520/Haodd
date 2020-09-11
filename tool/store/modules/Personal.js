
import { store } from "@/tool/store/store.js";

import {
    PERSONAL,
    PERSONAL_ME,
    PERSONAL_TODAY_COUNT,
    PERSONAL_NEWS,
} from "../../common/constants";


const state = {
    [PERSONAL_ME]: false,
    [PERSONAL_TODAY_COUNT]: false,
    [PERSONAL_NEWS]: false,
    aes: false,
	current_new: false
}

const getters = {
    
}

const mutations = {
    ADD_AES(state, payload){
        state.aes = payload
    },
	SET_CURRENT_NEWS(state, payload){
		state.current_new = payload
	}
}

const actions = {

}


export default store('personal', PERSONAL, state, getters, mutations, actions)
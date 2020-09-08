
import { store } from "@/tool/store/store.js";

import {
    PERSONAL,
    PERSONAL_ME,
} from "../../common/constants";


const state = {
    [PERSONAL_ME]: false,
    aes: false,
}

const getters = {
    
}

const mutations = {
    ADD_AES(state, payload){
        state.aes = payload
    },
}

const actions = {

}


export default store('personal', PERSONAL, state, getters, mutations, actions)
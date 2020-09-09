
import { store } from "@/tool/store/store.js";

import {
    SHOP,
    CONSIGNEE_INDEX,
    CATEGORY_INDEX,
    PRODUCT_INDEX
} from "../../common/constants";


const state = {
    [CONSIGNEE_INDEX]: false,
    [CATEGORY_INDEX]: false,
    [PRODUCT_INDEX]: false,
    current: {},
    product: {},
    confirm: []
}

const getters = {
    
}

const mutations = {
    SET_DEFAULT(state, payload){
        state.current = payload
    },
    SET_PRODUCT(state, payload) {
        state.product = payload
    },
    SET_CONFIRM(state, payload) {
        state.confirm = payload
    },
}

const actions = {

}


export default store('shop', SHOP, state, getters, mutations, actions)

import { store } from "@/tool/store/store.js";

import {
    SHOP,
    CONSIGNEE_INDEX,
    CATEGORY_INDEX,
    PRODUCT_INDEX,
    PRODUCT_SYS_SHOP,
} from "../../common/constants";


const state = {
    [CONSIGNEE_INDEX]: false,
    [CATEGORY_INDEX]: false,
    [PRODUCT_INDEX]: false,
    [PRODUCT_SYS_SHOP]: false,
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
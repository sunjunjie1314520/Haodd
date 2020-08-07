
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from './state.js'
import mutations from './mutations.js'
import actions from './actions.js'

// import Websocket from "./modules/Websocket.js";

import Banner from "./modules/Banner.js";

const store = new Vuex.Store({
    modules: {
        // Websocket,
        Banner,
    },
    state: {
        ...state,
    },
    mutations: {
        ...mutations
    },
    actions:{
        ...actions,
    }
})

export default store
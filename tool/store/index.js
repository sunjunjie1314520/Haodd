
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Personal from "./modules/Personal.js";

const store = new Vuex.Store({
    strict: true,
    modules: {
        Personal,
    },
    state: {
        
    },
    mutations: {
        
    },
    actions:{
        
    }
})

export default store
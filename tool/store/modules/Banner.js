import $api from '../../api/index.js'
import {
    BANNER,
    BANNER_GET_INDEX,
    BANNER_GET_HEALTHY,
    BANNER_GET_SOCIAL,
    BANNER_GET_GAME
} from "../../common/constants";


const state = {
    [BANNER_GET_INDEX]: '',
    [BANNER_GET_HEALTHY]: '',
    [BANNER_GET_SOCIAL]: '',
    [BANNER_GET_GAME]: ''
}

const mutations = { }

const actions = { }

console.log(BANNER);

BANNER.forEach(item => {
    mutations[item] = (state, payload) => {
        state[item] = payload
    },
    actions[item] = ({ commit }, payload={}) => {
        $api.banner[item](payload)
        .then(res => {
            if (typeof(payload) == 'boolean') {
                uni.showToast({
                    title: res.msg
                })
            }else{
                commit(item, res.result)
            }
        })
    }
})

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
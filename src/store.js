import { createStore } from 'vuex'

export const store = createStore({
    state () {
        return {
            count: 12,
            msg: 'Hello Worls!'
        }
    },
    mutations: {
        setCount(state, payload){
            state.count = payload + 1
        }
    },
    actions: {
        plus({ commit, state }){
            commit('setCount', state.count)
        }
    }
})
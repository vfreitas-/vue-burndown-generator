import Vue from 'vue'


export default {
    state: {
        title: '',
        data: []
    },
    mutations: {
        updateForm (state, {data, title}) {
            Vue.set(state, 'data', data)
            Vue.set(state, 'title', title)
        }
    },
    actions: {
        updateForm ({ commit }, data) {
            commit('updateForm', data)
        }
    }
}
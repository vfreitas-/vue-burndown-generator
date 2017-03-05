
export default {
    state: {
        title: '',
        data: []
    },
    mutations: {
        updateForm (state, data) {
            Object.assign(state, data)
        }
    },
    actions: {
        updateForm ({ commit }, data) {
            commit('updateForm', data)
        }
    }
}
export const state = () => ({
    list: [],
    active : null,
    isLoading : false,
    error : null,
    api : '/books',
})

export const mutations = {
    storeList(state, data) {
        state.list = data ;
    },
    clearList(state) {
        state.list = []
    },
    storeActive(state, data) {
        state.active = data ;
    },
    clearActive(state) {
        state.active = null
    },
    setLoading(state, value) {
        state.isLoading = value
    }
}

export const actions = {
    async getListRequest(store, params = {}) {
        store.commit('setLoading', true)
        let res = await this.$axios.get(store.state.api, {
            params : {
                ...params
            }
        })
        store.commit('storeList', res.data)
        store.commit('setLoading', false)
    },
    async getOneByIdRequest(store, id) {
        store.commit('setLoading', true)
        let res = await this.$axios.get(store.state.api, {
            params : {
                id
            }
        })
        store.commit('storeActive', res.data)
        store.commit('setLoading', false)
    },
    async deleteOneByIdRequest(store, id) {
        store.commit('setLoading', true)
        let res = await this.$axios.delete(store.state.api, {
            data : {
                id
            }
        })
        store.commit('storeActive', res.data)
        store.commit('setLoading', false)
    },
    async clearList(store) {
        await store.commit('clearList')
    },
    async setActive(store, object_identifier) {
        let data = await store.state.list.find(item => item.object_identifier == object_identifier);
        store.commit('storeActive', data)
    },
    async clearActive(store) {
        await store.commit('clearActive')
    },

}

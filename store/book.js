export const state = () => ({
    list: [],
    active : {},
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
    addOne(state, data) {
        state.list.unshift(data)
    },
    deleteOne(state, index) {
        state.list.splice(index, 1)
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
        let res = await this.$axios.get(store.state.api +'/'+ id )
        store.commit('storeActive', res.data)
        store.commit('setLoading', false)
    },
    async createOneRequest(store, data) {
        store.commit('setLoading', true)
        let res = await this.$axios.post(store.state.api, data)
        store.commit('storeActive', res.data)
        store.commit('addOne', res.data)
        store.commit('setLoading', false)
    },
    async deleteOneByIdRequest(store, id) {
        store.commit('setLoading', true)
        let res = await this.$axios.delete(store.state.api +'/'+ id )
        let index = store.state.list.findIndex(book => book.bookId == id)
        store.commit('deleteOne', index)
        store.commit('setLoading', false)
    },
    async updateOneByIdRequest(store, data) {
        store.commit('setLoading', true)
        let res = await this.$axios.put(store.state.api +'/'+ data.bookId, data )
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

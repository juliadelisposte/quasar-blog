import api from 'axios'

const state = {
  posts: []
}

const getters = {
  postsList: state => state.posts
}

const mutations = {
  setPosts (state, value) {
    state.posts = value
  }

}

const actions = {
  async fetchPosts ({ commit }) {
    try {
      const { data } = await api.get('posts')
      commit('setPosts', data)
    } catch {}
  },

  async onlyPost ({ commit }, id) {
    try {
      const { data } = await api.get(`posts/${id}`)
      return data
    } catch {}
  },

  async putPosts ({ commit }, { id, values }) {
    try {
      const { data } = await api.put(`posts/${id}`, values)
      return data
    } catch {}
  },

  async createPosts ({ commit }, values) {
    try {
      await api.post('posts', values)
    } catch {}
  },

  async deletePost ({ commit }, id) {
    try {
      await api.delete(`posts/${id}`)
    } catch {}
  }
}

export default {
  namespaced: true,

  state,
  getters,
  mutations,
  actions
}

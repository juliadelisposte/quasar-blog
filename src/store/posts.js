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
      const { data } = await api.get(`http://localhost:3000/posts/${id}`)
      return data
    } catch {}
  },

  async putPosts ({ commit }, editPost) {
    try {
      const { data } = await api.put(`http://localhost:3000/posts/${editPost.id}`, editPost.values)
      return data
    } catch {}
  },

  async postsCreate ({ commit }, values) {
    try {
      await api.post('posts', values)
    } catch {}
  },

  async deletePost ({ commit }, id) {
    try {
      await api.delete(`http://localhost:3000/posts/${id}`)
    } catch (error) {}
  }
}

export default {
  namespaced: true,

  state,
  getters,
  mutations,
  actions
}

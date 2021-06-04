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
  },
  addPosts (state, value) {
    state.posts.push(value)
  }
}

const actions = {
  addPosts ({ commit }, value) {
    commit('addPosts', value)
  },

  async fetchPosts ({ commit }) {
    try {
      const { data } = await api.get('posts')
      commit('setPosts', data)
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

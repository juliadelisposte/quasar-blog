import api from 'axios'

const state = {
  authors: []
}

const getters = {
  authorsList: state => state.authors
}

const mutations = {
  setAuthors (state, value) {
    state.authors = value
  }
}

const actions = {
  async fetchAuthors ({ commit }) {
    try {
      const { data } = await api.get('authors')
      commit('setAuthors', data)
    } catch {}
  },

  async authorsCreate ({ commit }, values) {
    try {
      await api.post('authors', values)
    } catch {}
  },

  async deleteAuthor ({ commit }, id) {
    try {
      await api.delete(`http://localhost:3000/authors/${id}`)
    } catch (error) {
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

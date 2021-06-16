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

  async postAuthors ({ commit }, values) {
    try {
      await api.post('authors', values)
    } catch {}
  },

  async deleteAuthor ({ commit }, id) {
    try {
      await api.delete(`authors/${id}`)
    } catch {}
  },

  async getAuthor ({ commit }, id) {
    try {
      const { data } = await api.get(`authors/${id}`)
      return data
    } catch {}
  },

  async putAuthors ({ commit }, { id, values }) {
    try {
      const { data } = await api.put(`authors/${id}`, values)
      return data
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

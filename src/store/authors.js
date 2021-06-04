import api from 'axios'

const requestService = async (method, url, params = {}, data = {}) => {
  return await api({ method, url, data, params })
}

const deleteMethod = (url, params) => requestService('DELETE', url, params)

const state = {
  authors: []
}

const getters = {
  authorsList: state => state.authors
}

const mutations = {
  setAuthors (state, value) {
    state.authors = value
  },

  addAuthors (state, value) {
    state.authors.push(value)
  }
}

const actions = {
  async addAuthors ({ commit }, value) {
    commit('addAuthors', value)
  },

  async fetchAuthors ({ commit }) {
    try {
      const { data } = await api.get('authors')
      commit('setAuthors', data)
    } catch {}
  },
  async deleteAuthor ({ commit }, id) {
    try {
      await deleteMethod(`http://localhost:3000/authors/${id}`)
    } catch (error) {
      console.log()
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

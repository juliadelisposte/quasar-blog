import api from 'axios'

const state = {
  authors: []
}

const getters = {
  authorsList: state => {
    return state.authors
  }
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
  }
}

export default {
  namespaced: true,

  state,
  getters,
  mutations,
  actions
}

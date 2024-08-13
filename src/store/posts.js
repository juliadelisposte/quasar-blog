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
  addPost (state, post) {
    state.posts.push(post)
  },
  updatePost (state, updatedPost) {
    const index = state.posts.findIndex(post => post.id === updatedPost.id)
    if (index !== -1) {
      state.posts.splice(index, 1, updatedPost)
    }
  },
  removePost (state, id) {
    state.posts = state.posts.filter(post => post.id !== id)
  }
}

const actions = {
  async fetchPosts ({ commit }) {
    try {
      const { data } = await api.get('posts')
      commit('setPosts', data)
    } catch (error) {
      console.error('Erro ao buscar posts:', error)
    }
  },

  async fetchPost ({ commit }, id) {
    try {
      const { data } = await api.get(`posts/${id}`)
      return data
    } catch (error) {
      console.error(`Erro ao buscar o post com ID ${id}:`, error)
      throw error
    }
  },

  async createPost ({ commit }, values) {
    try {
      const { data } = await api.post('posts', values)
      commit('addPost', data)
    } catch (error) {
      console.error('Erro ao criar o post:', error)
      throw error
    }
  },

  async updatePost ({ commit }, { id, values }) {
    try {
      const { data } = await api.put(`posts/${id}`, values)
      commit('updatePost', data)
    } catch (error) {
      console.error(`Erro ao atualizar o post com ID ${id}:`, error)
      throw error
    }
  },

  async deletePost ({ commit }, id) {
    try {
      await api.delete(`posts/${id}`)
      commit('removePost', id)
    } catch (error) {
      console.error(`Erro ao excluir o post com ID ${id}:`, error)
      throw error
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

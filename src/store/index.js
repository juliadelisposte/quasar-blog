import Vue from 'vue'
import Vuex from 'vuex'

import posts from './posts'
import authors from './authors'

Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    modules: {
      posts,
      authors
    },

    strict: process.env.DEV
  })

  return Store
}

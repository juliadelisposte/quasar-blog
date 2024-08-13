<template>
  <div class="page-posts-list">
    <q-page class="flex flex-center">
      <div v-for="post in paginatedPosts" :key="post.id">
        <card-content :content="post" />
      </div>
    </q-page>
    <div class="flex flex-center">
      <q-pagination v-model="current" :max="maxPages" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CardContent from 'src/components/CardContent.vue'

export default {
  data () {
    return {
      current: 1,
      postsList: [],
      totalPosts: 0,
      postsPerPage: 5
    }
  },

  components: {
    CardContent
  },

  computed: {
    paginatedPosts () {
      const start = (this.current - 1) * this.postsPerPage
      const end = start + this.postsPerPage
      return this.postsList.slice(start, end)
    },
    maxPages () {
      return Math.ceil(this.totalPosts / this.postsPerPage)
    }
  },

  methods: {
    fetchPosts () {
      axios.get('/posts') // Substitua o caminho se necessário
        .then(response => {
          this.postsList = response.data
          this.totalPosts = this.postsList.length
        })
        .catch(error => {
          console.error('Erro ao buscar os posts:', error)
        })
    }
  },

  mounted () {
    this.fetchPosts()
  }
}
</script>

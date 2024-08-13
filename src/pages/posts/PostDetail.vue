<template>
    <div class="post-detail">
      <q-card>
        <q-card-section class="q-pa-md example-column-row-wrapping column" style="height: 600px; max-height: 100%">
          <div class="col-9"> <h2>{{ post.title }}</h2>
          <div class="" style="height: 450px; max-width: 500px"> <q-img :src="post.mainImageURL" /> </div> </div>
          <div class="q-pl-md col-5"><strong>Autor:</strong> {{ post.authorName }}</div>
          <div class="q-pl-md col-5"><strong>Data:</strong> {{ post.postDate }}</div>
          <div class="col-5"><strong>Categoria:</strong> {{ post.category }}</div>
          <div class="col-5"><strong>Descrição:</strong> {{ post.shortDescription }}</div>
          <div class="col-5"><strong>Texto Principal:</strong> {{ post.mainText }}</div>
        </q-card-section>
      </q-card>
    </div>
  </template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      post: {}
    }
  },
  created () {
    this.fetchPost()
  },
  methods: {
    async fetchPost () {
      const id = this.$route.params.id
      axios.get('/posts')
        .then(response => {
          this.post = response.data.find(post => post.id === parseInt(id))
          console.log('post', response.data.find(post => post.id))
        })
        .catch(error => {
          console.error('Erro ao buscar os posts:', error)
        })
    }
  }
}
</script>

<style scoped>

</style>

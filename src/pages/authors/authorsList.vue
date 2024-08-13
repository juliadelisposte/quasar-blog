<template>
  <div class="authors-content">
    <h1 class="authors-content__title text-h6 row justify-center"> Lista de Autores </h1>
    <div class="col q-pa-lg row q-mx-sm q-pt-sm">
      <div v-for="author in authorsList" :key="author.id">
        <div class="q-mr-xl"> <span class="text-bold"> Autor: </span> {{ author.name }} </div>
        <div class="q-mr-xl"> <span class="text-bold"> E-mail: </span> {{ author.email }} </div>
        <q-btn
          class="q-mt-sm q-mb-md"
          size="12px"
          label="Excluir"
          color="primary"
          @click="deleteAuthor(author.id)" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      authorsList: []
    }
  },

  methods: {
    fetchAuthors () {
      axios.get('/authors')
        .then(response => {
          this.authorsList = response.data
        })
        .catch(error => {
          console.error('Erro ao buscar os autores:', error)
        })
    },

    deleteAuthor (authorId) {
      axios.delete(`/authors/${authorId}`)
        .then(() => {
          // Remova o autor da lista localmente
          this.authorsList = this.authorsList.filter(author => author.id !== authorId)
        })
        .catch(error => {
          console.error('Erro ao excluir o autor:', error)
        })
    }
  },

  mounted () {
    this.fetchAuthors()
  }
}
</script>

<style lang="scss">
.authors-content {
  &__title {
    color: $primary;
  }
}
</style>

<template>
  <div class="pages-author-list">
    <div class="text-primary text-h4 q-pa-md text-center"> Listagem de Autores </div>
    <div class="column items-center">
      <div class="row">
        <div v-for="author in authorsContent" :key="author">
          <authors-content :content="author"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthorsContent from 'components/AuthorsContent.vue'

export default {
  components: {
    AuthorsContent
  },

  computed: {
    authorsContent () {
      return [
        {
          author: 'desconhecido',
          email: 'email@email.com.br'
        },
        {
          author: 'desconhecido 2',
          email: 'email@email.com.br'
        }
      ]
    }
  }
}
</script>

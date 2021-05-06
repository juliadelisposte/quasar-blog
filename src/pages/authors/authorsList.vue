<template>
  <div class="pages-author-list">
    <div class="text-primary text-h4 q-pa-md text-center"> Listagem de Autores </div>
    <div class="column items-center">
      <div class="row">
        <div v-for="value in authorsContent" :key="value">
          <authors-list :content="value"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthorsList from 'components/AuthorsList.vue'

export default {
  components: {
    AuthorsList
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

<template>
  <div class="page-author-list">
    <div class="text-primary text-h4 q-pa-md text-center"> Listagem de Autores </div>
    <div v-for="value in AuthorsContent" :key="value">
      <authors :content="value"/>
    </div>
  </div>
</template>

<script>
import Authors from 'components/Authors.vue'

export default {
  components: {
    Authors
  },
  IsValid () {
    this.author = getComputedStyle.CardContent.author
  },

  computed: {
    AuthorsContent () {
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

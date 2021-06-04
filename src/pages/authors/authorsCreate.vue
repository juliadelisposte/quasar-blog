<template>
  <div class="page-authors-create">
    <h1 class="page-authors-create__title text-h5 row justify-center q-py-md text-primary">Criação de Autores</h1>
    <div class="row justify-center">
      <div class="col-md-8 q-pt-sm">
        <q-form @submit="submit" class="q-gutter-md">
          <q-input filled v-model="value.name" label="Insira o nome do autor" hint="Nome e Sobrenome"/>
          <q-input filled v-model="value.email" label="Insira o e-mail do autor" type="email"/>
          <div class="row justify-center q-pt-sm">
            <q-btn @click="saveAuthor" label="Salvar" type="submit" color="primary"/>
          </div>
        </q-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      value: {
        name: '',
        email: ''
      }
    }
  },

  computed: {
    ...mapGetters({
      authors: 'authors/authorsList'
    })
  },

  created () {
    this.fetchAuthors()
  },

  methods: {
    ...mapActions({
      fetchAuthors: 'authors/fetchAuthors'
    }),

    saveAuthor () {
      this.$axios.post('authors', this.value)
    },
    async saveAuthors () {
      await this.addAuthors(this.value)
    }
  }
}
</script>

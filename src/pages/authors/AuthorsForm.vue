<template>
  <div class="page-authors-form">
    <h1 class="text-h5 row justify-center q-py-md text-primary"> {{ pageTitle }} </h1>
    <div class="row justify-center">
      <div class="col-md-8 q-pt-sm">
        <q-form class="q-gutter-md" @submit="submit">
          <q-input filled v-model="values.name" label="Insira o nome do autor" hint="Nome e Sobrenome" />
          <q-input filled v-model="values.email" label="Insira o e-mail do autor" type="email" />
          <div class="row justify-center q-pt-sm">
            <div class="row justify-center q-mt-lg">
              <q-btn color="primary" type="submit" icon-right="send"> {{ submitButtonLabel }} </q-btn>
            </div>
          </div>
        </q-form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
import { extend } from 'quasar'

export default {
  data () {
    return {
      values: {
        name: '',
        email: ''
      }
    }
  },

  computed: {
    isCreateAuthors () {
      return this.$route.name === 'AuthorsCreate'
    },

    pageTitle () {
      return `${this.isCreateAuthors ? 'Criação' : 'Edição'} de autores`
    },

    submitButtonLabel () {
      return this.isCreateAuthors ? 'Criar' : 'Editar'
    },

    idAuthor () {
      return this.$route.params.id
    }
  },

  created () {
    if (!this.isCreateAuthors) {
      this.setAuthorValues()
    }
  },

  methods: {
    ...mapActions({
      postAuthors: 'authors/postAuthors',
      putAuthors: 'authors/putAuthors',
      fetchAuthor: 'authors/fetchAuthor'
    }),

    async submit () {
      this.isCreateAuthors ? await this.createAuthors() : await this.editAuthor()
      this.$router.push({ name: 'AuthorsList' })
    },

    async editAuthor () {
      const values = {
        values: this.values,
        id: this.idAuthor
      }
      await this.putAuthors(values)
    },

    async createAuthors () {
      try {
        const response = await axios.post('/authors', {
          ...this.values,
          id: Date.now() // Gera um ID único baseado no timestamp atual
        })
        console.log('Autor criado com sucesso:', response.data)
      } catch (error) {
        console.error('Erro ao criar o autor:', error)
      }
    },

    async setAuthorValues () {
      const author = await this.fetchAuthor(this.idAuthor)
      this.values = extend(true, {}, author)
    }
  }
}
</script>

<style lang="scss">
.page-authors-form {
  &__title {
    color: $primary;
  }
}
</style>

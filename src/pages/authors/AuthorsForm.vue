<template>
  <div class="page-authors-form">
    <h1 class="text-h5 row justify-center q-py-md text-primary"> {{ submitTitleLabel }} </h1>
    <div class="row justify-center">
      <div class="col-md-8 q-pt-sm">
        <q-form class="q-gutter-md" @submit="createOrEdit">
          <q-input filled v-model="values.name" label="Insira o nome do autor" hint="Nome e Sobrenome"/>
          <q-input filled v-model="values.email" label="Insira o e-mail do autor" type="email"/>
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

    submitTitleLabel () {
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
      this.setInputEditValues()
    }
    this.fetchAuthors()
  },

  methods: {
    ...mapActions({
      fetchAuthors: 'authors/fetchAuthors',
      postAuthors: 'authors/postAuthors',
      putAuthors: 'authors/putAuthors',
      fetchAuthor: 'authors/fetchAuthor'
    }),

    createOrEdit () {
      this.isCreateAuthors ? this.createAuthors() : this.editAuthor()
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
      await this.postAuthors(this.values)
    },

    async setInputEditValues () {
      const author = await this.fetchAuthor(this.idAuthor)
      this.values = extend(true, {}, author)
    }

  }
}
</script>

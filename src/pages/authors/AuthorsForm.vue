<template>
  <div class="page-authors-form">
    <h1 class="text-h5 row justify-center q-py-md text-primary"> {{ title }} </h1>
    <div class="row justify-center">
      <div class="col-md-8 q-pt-sm">
        <q-form class="q-gutter-md">
          <q-input filled v-model="values.name" label="Insira o nome do autor" hint="Nome e Sobrenome"/>
          <q-input filled v-model="values.email" label="Insira o e-mail do autor" type="email"/>
          <div class="row justify-center q-pt-sm">
            <div @submit="submit">
              <div class="row justify-center q-mt-lg">
                <q-btn color="primary" @click="createOrEdit" icon-right="send"> {{ button }} </q-btn>
              </div>
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
    authorsForm () {
      return this.$route.name === 'AuthorsCreate'
    },

    title () {
      return this.authorsForm ? 'Criação de Autores' : 'Edição de Autores'
    },

    button () {
      return this.authorsForm ? 'Criar' : 'Editar'
    },

    idAuthorsForm () {
      return this.$route.params.id
    }
  },

  created () {
    if (!this.authorsForm) {
      this.inputEdit()
    }
    this.fetchAuthors()
  },

  methods: {
    ...mapActions({
      fetchAuthors: 'authors/fetchAuthors',
      createAuthors: 'authors/createAuthors',
      editAuthors: 'authors/editAuthors',
      onlyAuthor: 'authors/onlyAuthor'
    }),

    createOrEdit () {
      this.authorsForm ? this.submit() : this.editAuthor()
    },

    async editAuthor () {
      const editAuthor = {
        values: this.values,
        id: this.idAuthorsForm
      }
      await this.editAuthors(editAuthor)
      this.$router.push({ name: 'AuthorsList' })
    },

    async submit () {
      await this.createAuthors(this.values)
      this.$router.push({ name: 'AuthorsList' })
    },

    async inputEdit () {
      const author = await this.onlyAuthor(this.idAuthorsForm)
      this.values = extend(true, {}, author)
    }

  }
}
</script>

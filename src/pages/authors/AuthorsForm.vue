<template>
  <div class="page-authors-form">
    <h1 class="text-h5 row justify-center q-py-md text-primary"> {{ submitTitleLabel }} </h1>
    <div class="row justify-center">
      <div class="col-md-8 q-pt-sm">
        <q-form class="q-gutter-md">
          <q-input filled v-model="values.name" label="Insira o nome do autor" hint="Nome e Sobrenome"/>
          <q-input filled v-model="values.email" label="Insira o e-mail do autor" type="email"/>
          <div class="row justify-center q-pt-sm">
            <div class="row justify-center q-mt-lg">
              <q-btn color="primary" @click="createOrEdit" icon-right="send"> {{ submitButtonLabel }} </q-btn>
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
    isAuthorsCreate () {
      return this.$route.name === 'AuthorsCreate'
    },

    submitTitleLabel () {
      return this.isAuthorsCreate ? 'Criação de Autores' : 'Edição de Autores'
    },

    submitButtonLabel () {
      return this.isAuthorsCreate ? 'Criar' : 'Editar'
    },

    idAuthor () {
      return this.$route.params.id
    }
  },

  created () {
    if (!this.isAuthorsCreate) {
      this.setInputEditValues()
    }
    this.fetchAuthors()
  },

  methods: {
    ...mapActions({
      fetchAuthors: 'authors/fetchAuthors',
      postAuthors: 'authors/postAuthors',
      putAuthors: 'authors/putAuthors',
      getAuthor: 'authors/getAuthor'
    }),

    createOrEdit () {
      this.isAuthorsCreate ? this.submitAuthors() : this.editAuthor()
      this.$router.push({ name: 'AuthorsList' })
    },

    async editAuthor () {
      const editAuthors = {
        values: this.values,
        id: this.idAuthor
      }
      await this.putAuthors(editAuthors)
    },

    async submitAuthors () {
      await this.postAuthors(this.values)
    },

    async setInputEditValues () {
      const author = await this.getAuthor(this.idAuthor)
      this.values = extend(true, {}, author)
    }

  }
}
</script>

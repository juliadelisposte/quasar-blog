<template>
  <div class="page-authors-form">
    <h1 class="text-h5 row justify-center q-py-md text-primary">Criação de Autores</h1>
    <div class="row justify-center">
      <div class="col-md-8 q-pt-sm">
        <q-form class="q-gutter-md" @submit="submit()">
          <q-input filled v-model="values.name" label="Insira o nome do autor" hint="Nome e Sobrenome"/>
          <q-input filled v-model="values.email" label="Insira o e-mail do autor" type="email"/>
          <div class="row justify-center q-pt-sm">
            <q-btn label="Salvar" type="submit" color="primary"/>
          </div>
        </q-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      values: {
        name: '',
        email: ''
      }
    }
  },

  methods: {
    ...mapActions({
      createAuthors: 'authors/createAuthors'
    }),

    submit () {
      this.createAuthors(this.values)
    }
  }
}
</script>

<template>
  <div class="page-authors-create">
    <h1 class="page-authors-create__title text-h5 row justify-center q-py-md text-primary">Criação de Autores</h1>
    <div class="row justify-center col-md-8 q-pt-sm">
      <div class="col-md-8 q-pt-sm">
        <q-form @submit="submit" class="q-gutter-md">
          <q-input filled v-model="name" label="Insira o nome do autor" hint="Nome e Sobrenome"/>
          <q-input filled v-model="email" label="Insira o e-mail do autor" type="email"/>
          <div class="row justify-center q-pt-sm">
            <q-btn label="Salvar" type="submit" color="primary"/>
          </div>
        </q-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: ''
    }
  }
}
</script>

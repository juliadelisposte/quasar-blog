<template>
  <div class="authors-content">
    <div class="shadow-3 flex inline shadow-box flex-center column items-center q-ml-md">
      <div class="text-h6" color="primary"> Lista de Autores </div>
      <div class="col q-pa-lg row q-mx-sm q-pt-sm">
        <div v-for="value in authorsList" :key="value">
          <div class="q-mr-lg"> <span class="text-bold"> Autor: </span> {{ value.author }} </div>
          <div class="q-mr-lg"> <span class="text-bold"> E-mail: </span> {{ value.email }} </div>
          <q-btn class="q-mt-sm q-mt-sm" size="12px" label="Excluir" color="primary" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    content: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    authorsList () {
      return [
        {
          author: 'autor',
          email: 'email@email'
        },
        {
          author: 'autor 2',
          email: 'email2@email'
        },
        {
          author: 'autor 2',
          email: 'email2@email'
        },
        {
          author: 'autor 2',
          email: 'email2@email'
        },
        {
          author: 'autor 2',
          email: 'email2@email'
        },
        {
          author: 'autor 2',
          email: 'email2@email'
        },
        {
          author: 'autor 2',
          email: 'email2@email'
        },
        {
          author: 'autor 2',
          email: 'email2@email'
        }
      ]
    }
  }
}
</script>

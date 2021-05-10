<template>
  <div class="authors-content">
    <h1 class="authors-content__title text-h6 row justify-center"> Lista de Autores </h1>
    <div class="col q-pa-lg row q-mx-sm q-pt-sm">
      <div v-for="value in authorsList" :key="value">
        <div class="q-mr-xl"> <span class="text-bold"> Autor: </span> {{ value.author }} </div>
        <div class="q-mr-xl"> <span class="text-bold"> E-mail: </span> {{ value.email }} </div>
        <q-btn class="q-mt-sm q-mt-sm q-mb-md" size="12px" label="Excluir" color="primary" />
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

<style lang="scss">
  .authors-content {
    &__title {
      color: $primary;
    }
  }
</style>

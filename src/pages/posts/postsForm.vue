<template>
  <div class="page-posts-form">
    <div class="row">
      <div class="page-posts-form__selects q-pa-md row">
        <q-select rounded outlined v-model="values.modelCategory" :options="optionsCategory" label="Categorias" />
        <q-select rounded outlined v-model="values.modelAuthor" :options="optionsAuthor" label="Autores" />
      </div>
    </div>
    <q-form @submit="submit" class="q-gutter-md q-pa-md">
      <div class="row">
        <q-input filled v-model="values.date" mask="date" :rules="['date']">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-date v-model="values.date">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
            <div class="text-subtitle2"> Data de Publicação </div>
          </template>
        </q-input>
        <q-input class="q-ml-md" filled v-model="values.secondDate" mask="date" :rules="['date']">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-date v-model="values.secondDate">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
            <div class="text-subtitle2"> Data da Última Alteração </div>
          </template>
        </q-input>
      </div>
      <div class="q-pa-lg row">
        <q-input v-model="values.url" filled type="url" hint="Insira a URL da imagem" />
        <div class="page-posts-form__img-button q-pa-sm">
          <q-btn icon="cloud_upload" type="submit" color="primary"/>
        </div>
      </div>
      <q-input name="title" v-model="values.title" color="primary" label="Título" error-message="Por favor, use no máximo 100 caracteres" :error="!isValidTitle" filled clearable />
      <div class="page-posts-form__description">
        <q-input name="description" v-model="values.description" color="primary" label="Pequena descrição" error-message="Por favor, use no máximo 200 caracteres" :error="!isValidDescription"/>
      </div>
      <q-input name="content" v-model="values.content" color="primary" label="Conteúdo" filled />
      <div>
        <q-btn label="Salvar" type="submit" color="primary"/>
      </div>
    </q-form>
    <div>Título: {{ values.title }} Conteúdo: {{ values.content }} Pequena Descrição: {{ values.description }}</div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      values: {
        description: '',
        content: '',
        title: '',
        url: '',
        secondDate: '2021/04/30',
        date: '2021/04/29',
        modelCategory: 'Escolha a categoria',
        modelAuthor: 'Escolha o autor'
      },
      optionsCategory: [
        'Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4', 'Categoria 5'
      ],
      optionsAuthor: [
        'Autor 1', 'Autor 2', 'Autor 3', 'Autor 4', 'Autor 5'
      ]
    }
  }
}
</script>

<style>
  .page-posts-form__description{
    width: 600px;
}
</style>

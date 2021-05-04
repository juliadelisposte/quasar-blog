<template>
  <div class="page-create-post">
    <div class="row">
      <div class="page-create-post__selects">
        <div class="q-pa-md">
          <div class="row">
            <q-select rounded outlined v-model="values.modelcategory" :options="OptionsCategory" label="Categorias" />
            <q-select rounded outlined v-model="values.modelauthor" :options="OptionsAuthor" label="Autores" />
          </div>
        </div>
      </div>
    </div>
    <div class="page-create-post__post">
      <div class="q-pa-md">
        <q-form @submit="Submit" class="q-gutter-md">
          <div class="row">
            <q-input filled v-model="values.date" mask="date" :rules="['date']">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy transition-show="scale" transition-hide="scale">
                    <q-date v-model="values.date">
                      <div class="row">
                        <div class="items-center">
                          <div class="justify-end">
                            <q-btn v-close-popup label="Close" color="primary" />
                          </div>
                        </div>
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
                <div class="text-subtitle2"> Data de Publicação </div>
              </template>
            </q-input>
            <q-input class="q-ml-md" filled v-model="values.seconddate" mask="date" :rules="['date']">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy transition-show="scale" transition-hide="scale">
                    <q-date v-model="values.seconddate">
                      <div class="row">
                        <div class="items-center">
                          <div class="justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                          </div>
                        </div>
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
                <div class="text-subtitle2"> Data da Última Alteração </div>
              </template>
            </q-input>
          </div>
          <div class="page-create-post__post-img">
            <div class="q-pa-lg">
              <div class="row">
                <q-input v-model="values.url" filled type="url" hint="Insira a URL da imagem" />
                <div class="page-create-post__img-button">
                  <div class="q-pa-sm">
                    <q-btn :loading="loading" :percentage="percentage" round @click="startComputing(2)" icon="cloud_upload" type="Submit" color="primary"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <q-input name="title" v-model="values.title" color="primary" label="Título" filled clearable />
          <div class="page-create-post__post-description">
            <q-input name="description" v-model="values.description" color="primary" label="Pequena descrição" error-message="Por favor use no máximo 200 caracteres" :error="!isValid"/>
          </div>
          <q-input name="content" v-model="values.content" color="primary" label="Conteúdo" filled />
          <div>
            <q-btn label="Salvar" type="Submit" color="primary"/>
          </div>
        </q-form>
        <div>Título: {{ values.title }} Conteúdo: {{ values.content }} Pequena Descrição: {{ values.description }}</div>
      </div>
    </div>
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
        seconddate: '2021/04/30',
        date: '2021/04/29',
        modelcategory: 'Escolha a categoria',
        modelauthor: 'Escolha o autor'
      },
      OptionsCategory: [
        'Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4', 'Categoria 5'
      ],
      OptionsAuthor: [
        'Autor 1', 'Autor 2', 'Autor 3', 'Autor 4', 'Autor 5'
      ]
    }
  },

  computed: {
    isValid () {
      return this.values.description.length <= 200
    }
  }
}
</script>

<style>
.page-create-post {
  &__post-description{
    width: 600px;
  }
  &__img-button{
    width: 20px;
  }
}
</style>

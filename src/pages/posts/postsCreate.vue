<template>
  <div class="pages-posts-create">
    <div class="col-12 q-pa-md">
      <div class="row justify-center">
        <div class="col col-md-8">
          <div class="pages-posts-create__title">
            <q-input class="q-pr-lg" v-model="values.inputTitle" color="secondary" clearable filled label="Insira o título o seu post" />
          </div>
        </div>
      </div>
      <div class="row justify-center">
        <div class="col-1 q-mt-md">
          <q-btn-dropdown size="13px" color="primary" icon="add_a_photo" stack glossy label="Imagem">
            <q-item clickable>
              <q-item-section>
                <q-item-label class="q-px-sm q-py-lg">
                  <q-input v-model="values.url" filled type="url" hint="Insira a URL da imagem do post"/>
                  <q-btn class="q-mt-lg" size="12px" icon="cloud_upload" color="primary"/>
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-btn-dropdown>
        </div>
        <div class="col-2 q-mx-sm q-my-lg">
          <q-select filled v-model="values.modelAuthor" :options="optionsAuthor" label="Autor" />
        </div>
        <div class="col-2 q-mx-sm q-my-lg">
          <q-select filled v-model="values.modelCategory" :options="optionsCategory" label="Categoria" />
        </div>
        <div class="col-2 q-mx-sm q-my-lg">
          <q-input filled label="Insira a data" v-model="values.date">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-date v-model="values.date" mask="DD/MM/YYYY">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Fechar" color="primary" />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
          <div class="col col-md-8">
            <div class="pages-posts-create__post-area">
              <q-input class="q-pr-lg" v-model="values.inputDescription" color="secondary" clearable filled label="Insira a pequena descrição do seu post" />
              <q-input class="q-pr-lg q-mb-md q-mt-lg" v-model="values.inputPost" color="secondary" filled type="textarea" label="Insira o conteúdo do seu post" />
            </div>
          </div>
      </div>
      <div class="row justify-center q-mt-lg">
        <q-btn color="primary" icon-right="send" label="Postar" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      values: {
        inputTitle: '',
        inputDescription: '',
        inputPost: '',
        url: '',
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

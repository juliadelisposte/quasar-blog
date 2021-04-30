<template>
<div class="CreatePost">
  <div class="row">
    <div class="q-pa-md">
      <q-form @submit="onSecondSubmit" class="q-gutter-md">
        <q-input secondName="secondMame" v-model="secondName" color="primary" label="Título" filled clearable />
      </q-form>
      <q-card v-if="secondsubmitResult.length > 0" flat bordered class="q-mt-md bg-grey-2">
        <q-card-section>Submitted form contains the following formData (key = secondValue):</q-card-section>
        <q-card-section class="row q-gutter-sm items-center">
          <div v-for="(secondItem, secondIndex) in secondsubmitResult" :key="secondIndex" class="q-px-sm q-py-xs bg-grey-8 text-white rounded-borders text-center text-no-wrap">
            {{ secondItem.secondName }} = {{ secondItem.secondValue }}
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="q-pa-md">
      <div class="q-gutter-md row items-start">
        <q-input @input="val => { file = val[0] }" filled type="file" hint="Escolha Uma Imagem"/>
      </div>
    </div>
    <div class="q-pa-md">
      <div class="row">
        <q-input filled v-model="date" mask="date" :rules="['date']">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                <q-date v-model="date">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
            <div class="text-subtitle2"> Data de Publicação </div>
          </template>
        </q-input>
        <q-input class="q-ml-md" filled v-model="date" mask="date" :rules="['date']">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                <q-date v-model="date">
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
    </div>
  </div>
  <div class="row">
    <div class="description">
      <div class="q-pa-md">
        <q-input filled v-model="model" label="Pequena Descrição" bottom-slots hint="Não ultrapasse o máximo de 200 caracteres" error-message="Por favor use no máximo 200 caracteres" :error="!isValid" />
      </div>
    </div>
      <div class="q-gutter-md">
        <div class="q-py-lg">
          <q-btn color="primary" label="Categorias">
            <q-menu>
              <q-item>
                <q-item-section>Primeira Categoria</q-item-section>
              </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>Segunda Categoria</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>Terceira Categoria</q-item-section>
                </q-item>
            </q-menu>
          </q-btn>
          <q-btn class='q-ml-md' color="primary" label="Autores">
            <q-menu>
              <q-item>
                <q-item-section>Autor 1</q-item-section>
              </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>Autor 2</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>Autor 3</q-item-section>
                </q-item>
            </q-menu>
          </q-btn>
        </div>
      </div>
  </div>
  <div class="post">
    <div class="q-pa-md">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-input name="name" v-model="name" color="primary" label="Conteúdo do post" filled clearable autogrow />
          <div><q-btn label="Salvar" type="submit" color="primary"/></div>
      </q-form>
      <q-card v-if="submitResult.length > 0" flat bordered class="q-mt-md bg-grey-2">
        <q-card-section>Submitted form contains the following formData (key = value):</q-card-section>
        <q-card-section class="row q-gutter-sm items-center">
          <div v-for="(item, index) in submitResult" :key="index" class="q-px-sm q-py-xs bg-grey-8 text-white rounded-borders text-center text-no-wrap">
            {{ item.name }} = {{ item.value }}
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</div>
</template>

<script>

export default {
  data () {
    return {
      file: null,
      files: null,
      submitResult: [],
      date: '2021/04/29',
      secondsubmitResult: [],
      model: ''
    }
  },

  methods: {
    onSubmit (evt) {
      const formData = new FormData(evt.target)
      const submitResult = []
      for (const [name, value] of formData.entries()) {
        submitResult.push({
          name,
          value
        })
      }
      this.submitResult = submitResult
    },

    onSecondSubmit (evt) {
      const formData = new FormData(evt.target)
      const secondsubmitResult = []
      for (const [secondName, secondValue] of formData.entries()) {
        secondsubmitResult.push({
          secondName,
          secondValue
        })
      }
      this.secondsubmitResult = secondsubmitResult
    }
  },

  computed: {
    isValid () {
      return this.model.length <= 200
    }
  }
}
</script>

<style scoped>
.description{
  width: 600px;
}
</style>

<template>
  <card>
    <div class="card-content">
      <div class="text-primary text-center text-h6">{{ content.title }}</div>
      <div> Data da última alteração: {{ content.alteration }} </div>
      <div class="column">
        <div>Autor: {{ content.author }} </div>
        <div>Data: {{ content.date }} </div>
        <div>Categoria: {{ content.category }} </div>
      </div>
      <q-img class="card-content__image" :src="content.photo"/>
      <span class="q-pa-xl">{{ content.description }}</span>
        <div class="row q-pa-md q-gutter-sm">
          <q-btn size="10px" color="primary" text-color="white" :label="content.button" />
          <q-btn size="10px" color="primary" text-color="white" :label="content.buttonTwo" />
          <q-btn size="10px" color="primary" text-color="white" :label="content.buttonThree" />
        </div>
    </div>
  </card>
</template>

<script>
import Card from './Card.vue'

export default {
  components: {
    Card
  },

  props: {
    content: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style>
 .card-list__image {
    max-height: 210px;
  }
</style>

<template>
  <card contentCard>
    <div class="text-primary">
      <div class="text-center">
        <div class='text-h6'> {{ content.title }} </div>
      </div>
    </div>
    <div> Data da última alteração: {{ content.alteration }} </div>
    <div class="column">
      <div>Autor: {{ content.author }} </div>
      <div>Data: {{ content.date }} </div>
      <div>Categoria: {{ content.category }} </div>
    </div>
    <q-img :src="content.photo"/>
    <span class="card-post__description">{{ content.description }}</span>
    <div class="row">
      <div class="q-pa-md q-gutter-sm">
        <q-btn size="12px" color="primary" text-color="white" :label="content.button" />
        <q-btn size="12px" color="primary" text-color="white" :label="content.button_two" />
        <q-btn size="12px" color="primary" text-color="white" :label="content.button_three" />
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

<template>
<div>
  <div class="q-pl-lg">
    <div class="text-primary">
      <div class='text-h6'>{{title}}</div>
    </div>
  </div>
  <div class="last-alteration"> Data da última alteração: {{alteration}} </div>
    <div class="column">
      <div>Autor: {{author}}</div>
       <div>Data: {{date}} </div>
       <div>Categoria: {{category}}</div>
       </div>
    <div class="page-post__image">
      <q-img :src="`${photo}`" style="width: 100%" native-context-menu>
      </q-img>
    </div>
    <div class="page-post__action">
      <span class="page-post__description">{{description}}</span>
      <div class="row">
      <div class="q-mt-md">
      <q-btn
        v-for="size in sizes" :key="`btn_size_rd_${size}`"
        rounded
        color="primary"
        :size="size"
        :label="`${button}`"
      />
      <q-btn
        v-for="size in sizes" :key="`btn_size_rd_${size}`"
        rounded
        color="primary"
        :size="size"
        :label="`${button_two}`"
      />
      <q-btn
        v-for="size in sizes" :key="`btn_size_rd_${size}`"
        rounded
        color="primary"
        :size="size"
        :label="`${button_three}`"
      />
      </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    alteration: {
      type: String
    },
    button: {
      type: String
    },
    button_two: {
      type: String
    },
    button_three: {
      type: String
    },
    description: {
      type: String
    },
    photo: {
      type: String
    },
    author: {
      type: String
    },
    date: {
      type: Date
    },
    category: {
      type: String
    }
  },
  data () {
    return {
      sizes: ['sm'],
      icons: ['navigation']
    }
  }
}
</script>

<style>
.page-post{
     width: 20%;
}
</style>

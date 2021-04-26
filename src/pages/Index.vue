<template>
  <q-page class="flex flex-center">
    <card-post :content= "cardContent"/>
  </q-page>
</template>

<script>

import CardPost from 'src/components/CardPost.vue'

export default {
  components: {
    CardPost
  },

  computed: {
    cardContent () {
      return {
        title: 'titulo',
        alteration: '23/04/2021',
        author: 'desconhecido',
        date: '23/04/2021',
        category: 'categoria',
        button: 'Leia Mais',
        button_two: 'Editar Post',
        button_three: 'Excluir post',
        photo: 'https://besthqwallpapers.com/Uploads/27-12-2017/35250/thumb2-4k-living-room-white-and-gray-interior-modern-apartment-sofa.jpg'
      }
    }
  },
  name: 'PageIndex'
}
</script>

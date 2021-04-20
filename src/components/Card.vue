<template v-slot: card>
<div class="page-post">
<!-- <div class ="row"> -->
  <div class="shadow-12">
    <div class="page-post__card">
      <div class="page-post__header--size-lg">
        <div class="page-post__title">
          <card-post title="title" author="desconhecido" date="20/04/2021" category="categoria" photo="https://besthqwallpapers.com/Uploads/27-12-2017/35250/thumb2-4k-living-room-white-and-gray-interior-modern-apartment-sofa.jpg" button="Leia Mais" button_two="Editar" button_three="Excluir"/>
            </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import CardPost from './CardPost.vue'
export default {
  components: { CardPost },
  props: {
    title: {
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
  }
}
</script>

<style>
</style>

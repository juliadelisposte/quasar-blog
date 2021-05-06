<template>
  <div class="page-posts-list">
    <q-page class="flex flex-center">
      <div v-for="value in postsList" :key="value">
        <card-list :content="value"/>
      </div>
    </q-page>
    <div class=" flex flex-center">
      <q-pagination v-model="current" :max="5" />
    </div>
  </div>
</template>

<script>
import CardList from 'src/components/CardList.vue'

export default {
  data () {
    return {
      current: 1
    }
  },

  components: {
    CardList
  },

  computed: {
    postsList () {
      return [
        {
          title: 'titulo',
          alteration: '23/04/2021',
          author: 'desconhecido',
          date: '23/04/2021',
          category: 'categoria',
          description: 'A pequena descrição entra aqui',
          button: 'Leia Mais',
          buttonTwo: 'Editar Post',
          buttonThree: 'Excluir post',
          photo: 'https://i.pinimg.com/736x/c3/6b/00/c36b00c3a9e3bfddea0c60be4c240990.jpg'
        },
        {
          title: 'titulo 2',
          alteration: '03/05/2021',
          author: 'desconhecido 2',
          date: '23/04/2021',
          category: 'categoria 2',
          description: 'A pequena descrição entra aqui',
          button: 'Leia Mais',
          buttonTwo: 'Editar Post',
          buttonThree: 'Excluir post',
          photo: 'https://wallpapercave.com/wp/wp6181121.jpg'
        },
        {
          title: 'titulo 3',
          alteration: '03/05/2021',
          author: 'desconhecido 3',
          date: '23/04/2021',
          category: 'categoria 3',
          description: 'A pequena descrição entra aqui',
          button: 'Leia Mais',
          buttonTwo: 'Editar Post',
          buttonThree: 'Excluir post',
          photo: 'https://images6.alphacoders.com/103/1035008.jpg'
        }
      ]
    }
  }
}
</script>

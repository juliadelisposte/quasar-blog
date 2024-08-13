<template>
  <card>
    <div class="card-content">
      <h1 class="text-primary text-center text-h6 card-title">{{ content.title }}</h1>
      <div class="card-details row justify-between">
        <div class="row q-pa-sm"> <div class="card-sub-title q-pr-sm"> Autor: </div> {{ content.authorName.label }}</div>
        <div class="row q-pa-sm"> <div class="card-sub-title q-pr-sm"> Data: </div> {{ content.postDate }}</div>
        <div class="row q-pa-sm"> <div class="card-sub-title q-pr-sm"> Categoria: </div> {{ content.category }}</div>
      </div>
      <q-img class="card-image" style="height: 450px; max-width: 500px" :src="content.mainImageURL"/>
      <span class="card-description">{{ content.shortDescription }}</span>
      <div class="button-group">
        <q-btn @click="viewPost(content.id)" :color="buttonProperties.color" :size="buttonProperties.size" :text-color="buttonProperties.textColor" label="Leia Mais" />
        <q-btn @click="editPost(content.id)" :color="buttonProperties.color" :size="buttonProperties.size" :text-color="buttonProperties.textColor" label="Editar Post" />
        <q-btn @click="deletePost(content.id)" :color="buttonProperties.color" :size="buttonProperties.size" :text-color="buttonProperties.textColor" label="Excluir Post"/>
      </div>
    </div>
  </card>
</template>

<script>
import Card from './Card'
import axios from 'axios'

export default {
  components: {
    Card
  },
  computed: {
    buttonProperties () {
      return {
        size: 'sm',
        color: 'primary',
        textColor: 'white'
      }
    }
  },
  props: {
    content: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    viewPost (id) {
      this.$router.push({ name: 'PostDetail', params: { id } })
    },
    editPost (id) {
      this.$router.push({ name: 'PostsCreate', params: { id } })
    },
    async deletePost (id) {
      axios.delete(`/posts/${id}`)
        .then(() => {
          // Remova o autor da lista localmente
          this.content = this.content.id !== id
          this.$router.go()
        })
        .catch(error => {
          console.error('Erro ao excluir o autor:', error)
        })
    }
  }
}
</script>

<style scoped>
.card-content {
  padding: 20px;
  /* background-color: #fff8f2; */
}

.card-title {
  color: #A0522D;
  margin-bottom: 10px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to right, #A0522D, #8B4513);
  -webkit-background-clip: text;
  color: transparent;
  animation: fadeIn 2s;
}

.card-sub-title {
  color: #A0522D;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.card-details {
  /* display: flex;
  flex-direction: row; */
  margin-bottom: 15px;
}

.card-image {
  border-radius: 100px;
  margin-bottom: 15px;
}

.card-description {
  display: block;
  margin-bottom: 20px;
  color: #333;
}

.button-group {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.q-btn {
  background-color: #A0522D;
  color: #FFFFFF;
  border-radius: 100px;
}
</style>

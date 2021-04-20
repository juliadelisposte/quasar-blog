<template>
  <div class="page-post">
    <div class ="row">
      <div class="shadow-12">
        <div class="page-post__card">
          <div class="page-post__header--size-lg">
            <div class="page-post__title">
              <div class="q-my-md">
                <div class="text-primary">
                  <div class='text-h6'>Título do post</div>
                </div>
              </div>
              <div class="text-subtitle2">
                <div class="column">
                  <div>Autor:</div>
                  <div>Data: 08/04/2021</div>
                  <div>Categoria:</div>
                </div>
              </div>
              <div class="page-post__image">
                <img src="https://i.pinimg.com/originals/8f/53/d4/8f53d45eb2a7572bdd26621c9c227841.png" width='97%' height='250px'>
              </div>
              <span class="page-post__description">Aqui entrará uma breve descrição do que o post se trata</span>
              <div class="page-post__action">
                <q-btn-toggle v-model="model" toggle-color="primary" :options="[ {label: 'Visualizar post', value: 'one'}, {label: 'Editar post', value: 'two'}, {label: 'Excluir post', value: 'two'},]"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PageIndex'
}
</script>

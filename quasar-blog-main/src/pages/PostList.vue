<template>
  <div class="page-post">
        <div class="page-post__card">
            <div class="page-post__header--size-lg" >
                <!-- The title of the post will catch the information of the API and shows up where the title it is-->
               <span class="page-post__title"> Título do post<br> </span>
                <span class="page-post__second-text"> Autor: <br> Data: 08/04/2021 <br> Categoria: </span>
            </div>
            <!-- Image insertion-->
            <div class="page-post__image"> <img src="https://lh3.googleusercontent.com/proxy/qWq6bDfFbztBQI_Xn2wGsv_jSFmpgaR9ZowJzniknH7DpMeSnuvWNF0gpdUVlmVOC2noCisbIAE9N2Rmsv7PuIcWv_vbEElhD-9LQdtKHZEBkyq7TmfE0HuAv0Cf83ml3x-HrkA" width='95%' height='250px'> </div>
            <!--<div class="page-post__button-card">-->
            <span class="page-post__description"> Aqui entrará uma breve descrição do que o post se trata </span>
            <div class="page-post__action">
               <q-btn-toggle
               v-model="model"
               toggle-color="primary"
               :options="[
               {label: 'Visualizar post', value: 'one'},
               {label: 'Editar post', value: 'two'},
               {label: 'Excluir post', value: 'two'},
        ]"
        />
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

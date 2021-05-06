<template>
  <div class="authors-list">
      <div class="flex inline shadow-box flex-center column items-center" :class="`shadow-3`">
        <div class="authors-list__content">
          <div class="col q-pa-lg q-pt-md">
            <div> <div class="text-bold"> Autor: </div> {{ content.author }} </div>
            <div> <div class="text-bold"> E-mail: </div> {{ content.email }} </div>
            <q-btn class="q-mt-sm" size='12px' label="Excluir" type="Submit" color="primary"/>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  props: {
    content: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

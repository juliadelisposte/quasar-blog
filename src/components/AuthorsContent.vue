<template>
  <div class="authors-content">
    <div class="shadow-3 flex inline shadow-box flex-center column items-center q-mx-md">
      <div class="col q-pa-lg">
        <div> <div class="text-bold"> Autor: </div> {{ content.author }} </div>
        <div> <div class="text-bold"> E-mail: </div> {{ content.email }} </div>
        <q-btn class="q-mt-sm" size="12px" label="Excluir" type="submit" color="primary" />
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

<template>
<div class="grey-4">
  <div class="column items-center" style="height: 150px">
      <div class="col">
        <div> <div class="text-bold"> Autor: </div> {{ content.author }} </div>
        <div> <div class="text-bold"> E-mail: </div> {{ content.email }} </div>
        <q-btn size='12px' label="Excluir" type="Submit" color="primary"/>
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

<style lang="sass" scoped>
  .column > div
    padding: 10px 15px
    border: 1px solid rgba(86, 61, 124, .2)
  .doc-container > div + div
    margin-top: 1rem
</style>

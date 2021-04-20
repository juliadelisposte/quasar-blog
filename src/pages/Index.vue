<template>
  <q-page class="flex flex-center">
    <card/>
  </q-page>
</template>

<script>
import Card from 'components/Card'

export default {
  components: {
    Card
  },

  name: 'PageIndex'
}
</script>

<style>
   .text-h6{
    margin-left: 80px;
  }
  .title{
    margin-left: 30px;
  }
</style>

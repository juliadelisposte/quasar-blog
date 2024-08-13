<template>
  <div class="main" id="q-app" :color="color">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',

  data () {
    return {
      color: 'primary'
    }
  }

}
</script>

<style scoped>
.main {
  background-color: #FAEBD7;
}
</style>

<template>
  <q-item clickable tag="a" target="_blank" :href="link">
    <q-item-section>
      <q-item-label> {{ title }} </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>

export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: '#'
    }
  }
}
</script>

<template>
  <q-item :to="{ name: content.routeName }">
    <q-item-section>
      <q-item-label> {{ content.title }} </q-item-label>
    </q-item-section>
  </q-item>
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

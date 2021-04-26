<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu">
          <q-menu>
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section>
                <essential-link v-for="link in essentialLinks" :key="link.title" v-bind="link"/>
              </q-item-section>
            </q-item>
          </q-list>
          </q-menu>
        </q-btn>

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import EssentialLink from 'components/EssentialLink.vue'

const linksData = {
  title: 'Home',
  link: '/'
}

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>

<style scoped>
q-list {
  min-width: 100px
}
</style>

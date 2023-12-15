<template lang="pug">
v-main.bg-blue-lighten-5.pb-8
  router-view
v-navigation-drawer(width="150")
  v-list-item(title="總覽")
  v-divider
  v-list-item(link title="發電總覽" to="/home")
  v-list-item(link title="設備清單" to="/devicelist")
v-navigation-drawer(width="180")
  v-card(elevation=0).pa-3
      v-text-field(
        variant="outlined"
        density="compact"
        label="搜尋"
        append-inner-icon="mdi-magnify"
        single-line
        hide-details)
  v-list-item(link title="案場一")
  v-list-item(link title="案場二")
  v-list-item(link title="案場三")

</template>

<script setup>
import { ref } from 'vue'

</script>

<style>
* {
  box-sizing: border-box;
}
</style>

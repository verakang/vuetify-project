<script setup>
import { ref } from 'vue'

</script>

<template lang="pug">
v-card(elevation=0).pa-5
  div.mb-8
    .float-left.text-primary 發電機系統 
    .float-right 法蘭西斯式水輪機
  v-divider
  v-img.mt-3(height="200" src="@/assets/水輪機.jpg" cover)

</template>

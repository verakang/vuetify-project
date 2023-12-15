<script setup>
defineProps(['title', 'content', 'unit'])
</script>

<template lang="pug">
v-card(elevation=0).my-2.bg-white.rounded-lg.w-100.h-100
  .d-flex.align-center.justify-center
    v-avatar(color="blue-lighten-4")
    v-col(cols="9") 
      p.text-subtitle-1 {{ title }}
      p.text-h5 {{ content }}
        span.text-subtitle-1.ps-2 {{ unit }}
</template>

<style scoped>
</style>

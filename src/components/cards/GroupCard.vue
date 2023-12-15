<script setup>
import { ref } from 'vue'
defineProps(['title', 'content', 'unit'])

</script>

<template lang="pug">
p.text-subtitle-1.text-primary {{ title }} 
  span ({{ unit }})
p.text-h5 {{ content }} {{ unit }}
</template>

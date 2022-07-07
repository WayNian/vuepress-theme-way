<template>
  <Common>
    <h1>404</h1>
  </Common>
</template>
<script setup lang="ts">
import Common from '@theme/Common.vue'
import { onMounted } from 'vue'
onMounted(() => {
  document.title = '哎呀，404了呢~ ( •̀ ω •́ )y' + ' | ' + document.title
})
</script>

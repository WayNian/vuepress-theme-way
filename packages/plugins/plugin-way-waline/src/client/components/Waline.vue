<template>
  <div id="waline"></div>
</template>

<script setup lang="ts">
import { init } from '@waline/client'
import { onMounted } from 'vue'
import '@waline/client/dist/waline.css'
onMounted(() => {
  init({
    el: '#waline',
    serverURL: 'https://theme-way-waline-2e8axyq7o-waynian.vercel.app',
  })
})
</script>

<style scoped></style>

<template>
  <div id="waline"></div>
</template>

<script setup lang="ts">
import { init } from '@waline/client'
import type { PropType } from 'vue'
import { onMounted } from 'vue'
import '@waline/client/dist/waline.css'
import type { WalineOptions } from '../../shared/'
const props = defineProps({
  options: {
    type: Object as PropType<WalineOptions>,
    required: true,
  },
})
onMounted(() => {
  init({
    el: '#waline',
    serverURL: 'https://theme-way-waline-2e8axyq7o-waynian.vercel.app',
  })
})
</script>

<style scoped></style>

<template>
  <div id="waline"></div>
</template>

<script setup lang="ts">
import { init } from '@waline/client'
import { onMounted } from 'vue'
import '@waline/client/dist/waline.css'
import { useThemeLocaleData } from '../composables'

const themeLocale = useThemeLocaleData()

onMounted(() => {
  const serverURL = themeLocale.value.comments?.serverURL as string
  serverURL &&
    init({
      el: '#waline',
      serverURL,
      dark: 'html.dark',
      comment: true, // 评论数统计
      pageview: true, // 浏览量统计
    })
})
</script>

<style>
:root {
  --waline-theme-color: var(--c-brand);
  --waline-active-color: var(--c-brand-light);
}
.wl-editor:focus,
.wl-input:focus {
  background: transparent;
}
</style>

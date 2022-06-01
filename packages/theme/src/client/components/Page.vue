<template>
  <main class="page">
    <slot name="top" />
    <div class="theme-way-content">
      <slot name="content-top" />
      <Content />
      <slot name="content-bottom" />
    </div>
    <slot name="bottom" />
  </main>
</template>

<script setup lang="ts">
// import PageMeta from '@theme/PageMeta.vue'
// import PageNav from '@theme/PageNav.vue'
// import { computed } from 'vue'
import { useDarkMode, useThemeLocaleData } from '../composables'

const themeLocale = useThemeLocaleData()
// const { isDarkMode } = useDarkMode()

// const giscusTheme = computed(() =>
//   isDarkMode.value
//     ? themeLocale.value.giscusDarkTheme
//     : themeLocale.value.giscusLightTheme
// )
</script>

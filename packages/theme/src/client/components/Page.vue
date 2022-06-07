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
import { useBlogType } from 'vuepress-plugin-blog2/lib/client'
import {
  useBlog,
  useDarkMode,
  useSidebarItems,
  useThemeLocaleData,
} from '../composables'
const articles = useBlogType('post')

const themeLocale = useThemeLocaleData()
const sidebarItems = useSidebarItems()
// const { isDarkMode } = useDarkMode()

// const giscusTheme = computed(() =>
//   isDarkMode.value
//     ? themeLocale.value.giscusDarkTheme
//     : themeLocale.value.giscusLightTheme
// )
</script>

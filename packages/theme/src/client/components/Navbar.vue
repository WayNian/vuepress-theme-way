<template>
  <div>
    <button>切换主题</button>
  </div>
</template>

<script setup lang="ts">
import { useDarkMode, useThemeLocaleData } from '../composables'
const isDarkMode = useDarkMode()
const themeLocale = useThemeLocaleData()
</script>

<style scoped></style>

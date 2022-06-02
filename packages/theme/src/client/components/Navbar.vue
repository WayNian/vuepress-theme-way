<template>
  <div>
    <button @click="changeMode">切换主题</button>
  </div>
</template>

<script setup lang="ts">
import { useDarkMode, useThemeLocaleData } from '../composables'
const isDarkMode = useDarkMode()
const themeLocale = useThemeLocaleData()

const changeMode = () => {
  isDarkMode.value = !isDarkMode.value
}
</script>

<style scoped></style>

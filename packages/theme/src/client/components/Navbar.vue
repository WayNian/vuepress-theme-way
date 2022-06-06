<template>
  <nav class="navbar">
    <div class="logo">
      <img src="https://pic.imgdb.cn/item/5d804d9d451253d1783c4c25.png" />
      <span>这是文字</span>
    </div>

    <ul class="navbar-menu">
      <li v-for="item in navLinks" :key="item.text">{{ item.text }}</li>
    </ul>

    <button @click="changeMode">切换主题</button>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { NavLink } from '../../shared'
import { useDarkMode, useThemeLocaleData } from '../composables'
const isDarkMode = useDarkMode()
const themeLocale = useThemeLocaleData()

const changeMode = (): void => {
  isDarkMode.value = !isDarkMode.value
}

const navLinks = computed(() => {
  return themeLocale.value.navbar as NavLink[]
})
</script>

<style scoped></style>

<template>
  <nav class="navbar">
    <div class="navbar-layout">
      <div class="flex">
        <RouterLink to="/">
          <div class="logo">
            <!-- <img src="https://pic.imgdb.cn/item/5d804d9d451253d1783c4c25.png" /> -->
            <span class="navbar-title">Waynian</span>
          </div>
        </RouterLink>

        <ul class="navbar-menu">
          <li v-for="item in navLinks" :key="item.text">
            <RouterLink :to="item.link">{{ item.text }}</RouterLink>
          </li>
        </ul>
      </div>

      <button @click="changeMode">切换主题</button>
    </div>
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

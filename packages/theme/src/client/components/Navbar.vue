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

      <!-- <button @click="changeMode">切换主题</button> -->
      <div class="navbar-right">
        <button class="switch-color" @click="changeMode">
          <svg
            v-if="isColorMode"
            t="1656554041091"
            class="navbar-icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            fill="currentColor"
          >
            <path
              d="M505.4 878.6c-196.7 0-358-150.9-374.9-343.1 1-18.6 16.1-33.4 34.9-33.4 10.8 0 20.5 4.8 26.9 12.4 0.2 0.3 0.5 0.1 0.5-0.7 41.6 44.2 100.5 71.9 166.1 71.9 127.1 0 230.1-103 230.1-230.1 0-66.1-28-125.1-72.6-166.8 0.1-0.1 0.5-0.1 0.3-0.3-7-6.5-11.4-15.7-11.4-26.1 0-19 14.9-34.1 33.7-35.3 192.1 17.1 342.9 178.3 342.9 375 0 208-168.5 376.5-376.5 376.5z"
            ></path>
          </svg>
          <svg
            v-else
            t="1656554012633"
            class="navbar-icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path
              d="M512 512m-299.52 0a299.52 299.52 0 1 0 599.04 0 299.52 299.52 0 1 0-599.04 0Z"
              p-id="6476"
            ></path>
            <path
              d="M486.4 0h48.64v125.44H486.4zM234.8544 78.9504l42.112-24.32 62.72 108.6464-42.112 24.32zM58.0608 275.8144l24.32-42.1376 108.6464 62.72-24.32 42.1376zM0 486.4h125.44v48.64H0zM55.8592 746.7264l108.6464-62.72 24.32 42.1376-108.6464 62.72zM235.6736 940.416l62.72-108.6208 42.1376 24.32-62.72 108.6208zM486.4 896h48.64v125.44H486.4zM683.8528 857.0112l42.1376-24.32 62.72 108.6208-42.1376 24.32zM833.8688 724.3776l24.32-42.1376 108.6208 62.7456-24.32 42.1376zM896 486.4h125.44v48.64H896zM833.8944 297.6512l108.6464-62.72 24.32 42.1376-108.672 62.72zM684.288 164.608l62.72-108.6208 42.112 24.32-62.72 108.6464z"
              p-id="6477"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { NavLink } from '../../shared'
import { useColorMode, useThemeLocaleData } from '../composables'
const isColorMode = useColorMode()
const themeLocale = useThemeLocaleData()

const changeMode = (): void => {
  isColorMode.value = !isColorMode.value
}

const navLinks = computed(() => {
  return themeLocale.value.navbar as NavLink[]
})
</script>

<style scoped></style>

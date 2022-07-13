<template>
  <nav :class="['navbar', { 'aside-show': isAsideShow }]">
    <div class="navbar-layout">
      <div class="flex">
        <!-- <RouterLink to="/">
          <div class="logo">
            <span class="navbar-title">Waynian</span>
          </div>
        </RouterLink> -->
        <div class="logo">
          <!-- <img src="https://pic.imgdb.cn/item/5d804d9d451253d1783c4c25.png" /> -->
          <span class="navbar-title" @click="handleAsideClick">Waynian</span>
        </div>

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
            v-show="isColorMode"
            class="navbar-icon"
            focusable="false"
            viewBox="0 0 32 32"
            fill="currentColor"
          >
            <path
              d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z"
            ></path>
            <path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z"></path>
            <path d="M2 15.005h5v2H2z"></path>
            <path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z"></path>
            <path d="M15 25.005h2v5h-2z"></path>
            <path
              d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z"
            ></path>
            <path d="M25 15.005h5v2h-5z"></path>
            <path
              d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z"
            ></path>
            <path d="M15 2.005h2v5h-2z"></path>
          </svg>

          <svg
            v-show="!isColorMode"
            class="navbar-icon"
            focusable="false"
            viewBox="0 0 32 32"
            fill="currentColor"
          >
            <path
              d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </nav>
  <aside :class="['mobile-aside', { 'aside-show': isAsideShow }]"></aside>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { NavLink } from '../../shared'
import { useColorMode, useThemeLocaleData } from '../composables'
const isColorMode = useColorMode()
const themeLocale = useThemeLocaleData()

const changeMode = (): void => {
  isColorMode.value = !isColorMode.value
}
const isAsideShow = ref(false)

const navLinks = computed(() => {
  return themeLocale.value.navbar as NavLink[]
})
const handleAsideClick = (): void => {
  isAsideShow.value = !isAsideShow.value
  document.querySelector('.theme-way-layout')?.classList.toggle('aside-show')
  document.querySelector('.footer')?.classList.toggle('aside-show')
}
</script>

<style scoped></style>

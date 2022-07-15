<template>
  <nav class="navbar">
    <div class="navbar-layout">
      <div class="flex">
        <svg
          class="navbar-icon icon-menu"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          width="25"
          @click="handleMenuClick"
        >
          <path
            d="M388.4 529.7H147.2c-27.1 0-49.2-22.1-49.2-49.2V239.3c0-27.1 22.1-49.2 49.2-49.2h241.2c27.1 0 49.2 22.1 49.2 49.2v241.2c0 27.1-22 49.2-49.2 49.2zM147.2 236c-1.8 0-3.3 1.5-3.3 3.3v241.2c0 1.8 1.5 3.3 3.3 3.3h241.2c1.8 0 3.3-1.5 3.3-3.3V239.3c0-1.8-1.5-3.3-3.3-3.3H147.2zM388.4 912.9H147.2c-27.1 0-49.2-22.1-49.2-49.2V622.5c0-27.1 22.1-49.2 49.2-49.2h241.2c27.1 0 49.2 22.1 49.2 49.2v241.2c0 27.2-22 49.2-49.2 49.2zM147.2 619.3c-1.8 0-3.3 1.5-3.3 3.3v241.2c0 1.8 1.5 3.3 3.3 3.3h241.2c1.8 0 3.3-1.5 3.3-3.3V622.5c0-1.8-1.5-3.3-3.3-3.3l-241.2 0.1zM780.2 912.9H539c-27.1 0-49.2-22.1-49.2-49.2V622.5c0-27.1 22.1-49.2 49.2-49.2h241.2c27.1 0 49.2 22.1 49.2 49.2v241.2c0 27.2-22.1 49.2-49.2 49.2zM539 619.3c-1.8 0-3.3 1.5-3.3 3.3v241.2c0 1.8 1.5 3.3 3.3 3.3h241.2c1.8 0 3.3-1.5 3.3-3.3V622.5c0-1.8-1.5-3.3-3.3-3.3l-241.2 0.1z"
          ></path>
          <path
            d="M691.8 498.2l-170-169.9c-10.2-10.2-10.2-26.8 0-37l169.9-169.9c10.2-10.2 26.8-10.2 37 0l169.9 169.9c10.2 10.2 10.2 26.8 0 37L728.7 498.2c-10.1 10.2-26.8 10.2-36.9 0z"
          ></path>
          <path
            d="M710.3 529.6c-12.8 0-25.5-4.9-35.3-14.6L505.1 345.1c-19.4-19.4-19.4-51.1 0-70.5l169.9-170c19.4-19.4 51.1-19.4 70.5 0l169.9 169.9c19.4 19.4 19.4 51.1 0 70.5L745.5 515c-9.7 9.7-22.5 14.6-35.2 14.6z m0-392.1c-0.6 0-1.3 0.2-1.7 0.7l-170 169.9c-0.9 0.9-0.9 2.5 0 3.4l169.9 169.9c0.6 0.6 1.2 0.7 1.7 0.7s1.1-0.1 1.7-0.7l169.9-169.9c0.9-0.9 0.9-2.5 0-3.4L712 138.2c-0.5-0.5-1.1-0.7-1.7-0.7z"
          ></path>
        </svg>
        <RouterLink to="/" class="logo">
          <!-- <img src="https://pic.imgdb.cn/item/5d804d9d451253d1783c4c25.png" /> -->
          <span class="navbar-title">Waynian</span>
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
  <aside class="mobile-menu-layout">
    <div
      class="mobile-menu-bg"
      :style="{
        backgroundImage: ` url(https://w.wallhaven.cc/full/rd/wallhaven-rd859w.jpg)`,
      }"
    ></div>
    <div class="menu-person">
      <Avatar :url="personInfo.avatar" :width="80" :height="80" />
      <span class="menu-name">{{ personInfo.name }}</span>
    </div>

    <ul class="mobile-menu">
      <li v-for="item in navLinks" :key="item.text">
        <RouterLink :to="item.link">{{ item.text }}</RouterLink>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import Avatar from '@theme/Avatar.vue'
import { computed } from 'vue'
import type { NavLink, PersonInfo } from '../../shared'
import { useColorMode, useThemeLocaleData } from '../composables'
const isColorMode = useColorMode()
const themeLocale = useThemeLocaleData()

const changeMode = (): void => {
  isColorMode.value = !isColorMode.value
}

const navLinks = computed(() => {
  return themeLocale.value.navbar as NavLink[]
})
const personInfo = computed(() => {
  return themeLocale.value.personInfo as PersonInfo
})

const handleMenuClick = (): void => {
  document.querySelector('.mobile-menu-layout')?.classList.toggle('show-menu')
  document.querySelector('.navbar')?.classList.toggle('show-menu')
  document.querySelector('.main')?.classList.toggle('show-menu')
  document.querySelector('.footer')?.classList.toggle('show-menu')
}
</script>

<style scoped></style>

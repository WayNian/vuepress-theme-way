<template>
  <div class="footer">
    <slot name="footer">
      <p>版权所有 © 2022-2022 {{ personInfo.name }}</p>
      <p v-if="websiteInfo.isShowThemeAuth">
        Theme
        <a href="https://github.com/WayNian/vuepress-theme-way" target="_blank"
          >Way</a
        >
        By
        <a href="https://waynian.com" target="_blank">waynian</a>
        | All Rights Reserved
      </p>
      <p>
        <a href="https://beian.miit.gov.cn/" target="_blank">{{
          websiteInfo.beian
        }}</a>
      </p>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { PersonInfo, WebsiteInfo } from '../../shared'
import { useThemeLocaleData } from '../composables'

const themeLocale = useThemeLocaleData()
const personInfo = computed(() => {
  return themeLocale.value.personInfo as PersonInfo
})

const websiteInfo = computed(() => {
  return themeLocale.value.websiteInfo as WebsiteInfo
})
</script>

<style scoped></style>

<template>
  <div class="person-view">
    <div class="flex">
      <img class="person-image" :src="personInfo.avatar" alt="" />
      <span class="person-name">{{ personInfo.name }}</span>
    </div>
    <div class="person-description">
      {{ personInfo.description }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { PersonInfo } from '../../shared'
import { useThemeLocaleData } from '../composables'
const themeLocale = useThemeLocaleData()

const personInfo = computed(() => {
  return themeLocale.value.personInfo as PersonInfo
})
</script>

<style scoped></style>

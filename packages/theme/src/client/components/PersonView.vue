<template>
  <Card class="person-view">
    <div class="person-view-bg"></div>
    <div class="person-info">
      <Avatar :url="personInfo.avatar" />
      <span class="person-name">{{ personInfo.name }}</span>
    </div>
    <div class="person-description"></div>
  </Card>
</template>

<script setup lang="ts">
import Avatar from '@theme/Avatar.vue'
import Card from '@theme/Card.vue'
import { computed } from 'vue'
import type { PersonInfo } from '../../shared'
import { useThemeLocaleData } from '../composables'

const themeLocale = useThemeLocaleData()

const personInfo = computed(() => {
  return themeLocale.value.personInfo as PersonInfo
})
</script>

<style scoped></style>

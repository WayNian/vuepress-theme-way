<template>
  <Common>
    <div>{{ themeData.links }}</div>
  </Common>
</template>

<script setup lang="ts">
import Common from '@theme/Common.vue'
import { useThemeData } from '../composables'
const themeData = useThemeData()
console.log('🚀 ~ file: Links.vue ~ line 11 ~ themeLocaleData', themeData)
</script>

<style scoped></style>

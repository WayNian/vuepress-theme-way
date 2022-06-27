<template>
  <Card v-if="themeLocale.webLinks?.length">
    <WebLink
      v-for="item in themeLocale.webLinks"
      :key="item.name"
      :data="item"
    ></WebLink>
  </Card>
</template>

<script setup lang="ts">
import Card from '@theme/Card.vue'
import WebLink from '@theme/WebLink.vue'
import { useThemeLocaleData } from '../composables'

const themeLocale = useThemeLocaleData()
</script>

<style scoped></style>

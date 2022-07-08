<template>
  <Card v-if="page.headers.length" class="person-view"> 文章目录 </Card>
</template>

<script setup lang="ts">
import Card from '@theme/Card.vue'
import { usePageData } from '@vuepress/client'
const page = usePageData()
</script>

<style scoped></style>

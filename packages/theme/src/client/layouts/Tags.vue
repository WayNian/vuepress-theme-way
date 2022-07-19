<template>
  <Common>
    <div></div>
  </Common>
</template>

<script setup lang="ts">
import Common from '@theme/Common.vue'
import { useBlogCategory } from 'vuepress-plugin-blog2/lib/client'
const tags = useBlogCategory('tag')
</script>

<style scoped></style>

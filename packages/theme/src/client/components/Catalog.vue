<template>
  <Card v-if="page.headers.length" class="catalog">
    <span>目录</span>
    <TitleItem :title-list="page.headers" :active-anchor="route.hash">
    </TitleItem>
  </Card>
</template>

<script setup lang="ts">
import Card from '@theme/Card.vue'
import TitleItem from '@theme/TitleItem.vue'
import { usePageData } from '@vuepress/client'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
const page = usePageData()
const route = useRoute()
</script>

<style scoped>
.catalog {
  height: min-content;
}
</style>

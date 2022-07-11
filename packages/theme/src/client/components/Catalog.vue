<template>
  <Card v-if="page.headers.length" class="catalog">
    <TitleItem :title-list="page.headers"> </TitleItem>
  </Card>
</template>

<script setup lang="ts">
import Card from '@theme/Card.vue'
import TitleItem from '@theme/TitleItem.vue'
import { usePageData } from '@vuepress/client'
const page = usePageData()
console.log('🚀 ~ file: Catalog.vue ~ line 9 ~ page', page.value.headers)
</script>

<style scoped>
.catalog {
  height: min-content;
}
</style>

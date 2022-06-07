<template>
  <div>
    <ArticleItem
      v-for="item in articles.items"
      :key="item.path"
      :article-info="item"
    ></ArticleItem>
  </div>
</template>

<script setup lang="ts">
import ArticleItem from '@theme/ArticleItem.vue'
import { useBlogType } from 'vuepress-plugin-blog2/lib/client'

const articles = useBlogType('post')
</script>

<style scoped></style>

<template>
  <div class="article-list">
    <ArticleItem
      v-for="item in articles.items"
      :key="item.path"
      :article-info="item"
    ></ArticleItem>
  </div>
</template>

<script setup lang="ts">
import ArticleItem from '@theme/ArticleItem.vue'
import { useBlogCategory, useBlogType } from 'vuepress-plugin-blog2/lib/client'

const articles = useBlogType('post')
const tags = useBlogCategory('tag')
console.log('🚀 ~ file: ArticleView.vue ~ line 17 ~ tags', tags)
</script>

<style scoped></style>

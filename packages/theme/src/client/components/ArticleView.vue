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
import { pageviewCount } from '@waline/client'
import { onMounted } from 'vue'
import { useBlogCategory, useBlogType } from 'vuepress-plugin-blog2/lib/client'
import { useThemeLocaleData } from '../composables'
const themeLocale = useThemeLocaleData()

const articles = useBlogType('post')
const tags = useBlogCategory('tag')
onMounted(() => {
  pageviewCount({
    serverURL: themeLocale.value.comments?.serverURL as string,
    path: window.location.pathname,
  })
})
</script>

<style scoped></style>

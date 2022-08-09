<template>
  <Card class="person-view">
    <img
      class="person-view-bg"
      src="https://pic.imgdb.cn/item/629da6b0094754312907e9d0.jpg"
    />
    <div class="person-info">
      <Avatar :url="personInfo.avatar" />
      <span class="person-name">{{ personInfo.name }}</span>
    </div>
    <div class="article-data">
      <div class="article-data-content">
        <span class="article-data-number">{{ articles.items.length }}</span
        ><span class="article-data-title">文章</span>
      </div>
      <div class="article-data-content">
        <span class="article-data-number">{{ data.commentTotal }}</span
        ><span class="article-data-title">评论</span>
      </div>
      <div class="article-data-content">
        <span class="article-data-number">{{ data.counterTotal }}</span
        ><span class="article-data-title">访问</span>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import Avatar from '@theme/Avatar.vue'
import Card from '@theme/Card.vue'
import { computed } from 'vue'
import { useBlogType } from 'vuepress-plugin-blog2/lib/client'
import type { PersonInfo } from '../../shared'
import { useArticleData, useThemeLocaleData } from '../composables'

const themeLocale = useThemeLocaleData()
const data = useArticleData()
const articles = useBlogType('post')
// const data = computed(() => {
//   return {
//     commentTotal,
//     counterTotal,
//   }
// })

const personInfo = computed(() => {
  return themeLocale.value.personInfo as PersonInfo
})
</script>

<style scoped></style>

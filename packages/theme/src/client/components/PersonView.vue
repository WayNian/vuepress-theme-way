<template>
  <Card class="person-view">
    <div class="person-view-bg"></div>
    <div class="person-info">
      <Avatar :url="personInfo.avatar" />
      <span class="person-name">{{ personInfo.name }}</span>
    </div>
    <div class="article-data">
      <div class="article-data-content">
        <span class="article-data-number">{{ data.commentTotal }}</span
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
import type { PersonInfo } from '../../shared'
import { useArticleData, useThemeLocaleData } from '../composables'

const themeLocale = useThemeLocaleData()
const data = useArticleData()

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

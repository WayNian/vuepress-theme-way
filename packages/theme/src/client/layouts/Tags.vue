<template>
  <Common>
    <ul class="tag-list">
      <li v-for="item in tags" :key="item.name" class="tag-item">
        <RouterLink :to="`/tags/${item.name}`">
          {{ item.name }} * {{ item.pages.length }}</RouterLink
        >
      </li>
    </ul>
    <div class="article-list">
      <ArticleItem
        v-for="item in articleList"
        :key="item.path"
        :article-info="item"
      ></ArticleItem>
    </div>
  </Common>
</template>

<script setup lang="ts">
import ArticleItem from '@theme/ArticleItem.vue'
import Common from '@theme/Common.vue'
import { computed, onMounted, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useBlogType } from 'vuepress-plugin-blog2/lib/client'
import { useTags } from '../composables/'

const articles = useBlogType('post')
const tags = useTags()
const route = useRoute()
const currentTag = ref('')

currentTag.value = route.path.split('/')[2]

watchEffect(() => {
  currentTag.value = route.path.split('/')[2]
})

const articleList = computed(() => {
  return articles.value.items.filter((item) => {
    return (item.info.tags as string[]).includes(currentTag.value)
  })
})
</script>

<style scoped></style>

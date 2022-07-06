<template>
  <Card class="article-item-layout">
    <div class="article-item-top">
      <Avatar :url="personInfo.avatar" :width="48" :height="48" />
      <div class="flex-v ml-20">
        <a class="article-item-author">{{ articleInfo.info.author }}</a>
        <span class="article-item-date">2019-10-10</span>
      </div>
    </div>
    <div class="article-item-tags">
      <RouterLink
        v-for="item in info.tags"
        :key="item"
        class="pointer"
        :to="`/tags/${item}`"
      >
        #{{ item }}#</RouterLink
      >
    </div>
    <div class="article-item-info">
      <div
        class="article-item-cover"
        :style="{
          backgroundImage: `url(https://b3logfile.com/bing/20210102.jpg?imageView2/2/w/1280/format/jpg/interlace/1/q/100)`,
        }"
      ></div>
      <RouterLink :to="info.path" class="article-item-text">
        <h3 class="article-item-title">{{ info.title }}</h3>
        <p class="article-item-description">这是个测试 {{ info.subtitle }}</p>
      </RouterLink>
    </div>
  </Card>
</template>

<script setup lang="ts">
import Avatar from '@theme/Avatar.vue'
import Card from '@theme/Card.vue'
import type { PropType } from 'vue'
import { computed } from 'vue'
import type { PersonInfo, WayThemePostData } from '../../shared'
import { useThemeLocaleData } from '../composables'

const props = defineProps({
  articleInfo: {
    type: Object as PropType<WayThemePostData>,
    required: true,
  },
})
console.log(props.articleInfo)

const themeLocale = useThemeLocaleData()

const personInfo = computed(() => {
  return themeLocale.value.personInfo as PersonInfo
})

const info = computed(() => {
  return {
    ...props.articleInfo.info,
    path: props.articleInfo.path,
  }
})
</script>

<style scoped></style>

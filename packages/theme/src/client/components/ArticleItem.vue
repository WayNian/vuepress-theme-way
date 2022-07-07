<template>
  <Card class="article-item-layout">
    <div class="article-item-top">
      <Avatar
        :url="info.authorImage || personInfo.avatar"
        :width="48"
        :height="48"
      />
      <div class="flex-v ml-20">
        <a class="article-item-author">{{ info.author || personInfo.name }}</a>
        <span class="article-item-date">{{ info.date }}</span>
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
        v-if="info.cover"
        class="article-item-cover"
        :style="{
          backgroundImage: `url(${info.cover})`,
        }"
      ></div>
      <RouterLink :to="info.path" class="article-item-text">
        <h3 class="article-item-title">{{ info.title }}</h3>
        <p class="article-item-description">{{ info.subtitle }}</p>
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

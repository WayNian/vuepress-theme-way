<template>
  <main class="page">
    <slot name="top" />
    <div class="theme-way-content">
      <div
        v-if="info.cover"
        class="content-top"
        :style="{
          backgroundImage: `url(${info.cover})`,
        }"
      ></div>
      <h1 class="content-title">{{ info.title }}</h1>
      <div class="content-author-info">
        <Avatar :url="personInfo.avatar" :width="48" :height="48" />
        <div class="flex-v ml-20">
          <span class="person-name">{{ info.author || personInfo.name }}</span>
          <span class="person-name">{{ info.date }}</span>
        </div>
      </div>
      <slot name="content-top" />
      <article class="content">
        <Content />
      </article>
      <Comments></Comments>
      <slot name="content-bottom" />
    </div>
    <slot name="bottom" />
  </main>
</template>

<script setup lang="ts">
import Avatar from '@theme/Avatar.vue'
import Comments from '@theme/Comments.vue'
import { usePageFrontmatter } from '@vuepress/client'
import { computed } from 'vue'
import type { PersonInfo, WayThemePostFrontmatter } from '../../shared'
import { useThemeLocaleData } from '../composables'
const info = usePageFrontmatter<WayThemePostFrontmatter>()

const themeLocale = useThemeLocaleData()
const personInfo = computed(() => {
  return themeLocale.value.personInfo as PersonInfo
})
</script>

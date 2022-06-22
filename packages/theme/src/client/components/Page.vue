<template>
  <main class="page">
    <slot name="top" />
    <div class="theme-way-content">
      <div
        class="content-top"
        :style="{
          backgroundImage: `url(https://pic.imgdb.cn/item/5d776c5c451253d1783b9e9b.jpg)`,
        }"
      >
        <!-- <div
          class="content-image-mask"
          src=""
        /> -->
        <!-- <div class="content-top-info">
          <div class="content-title">{{ info.title }}</div>
          <div>
            <span>{{ info.date }}</span> <span>大概需要2min读完</span>
          </div>
          <div class="content-tags">
            <RouterLink
              v-for="item in info.tags"
              :key="item"
              class="pointer"
              :to="`/tags/${item}`"
            >
              #{{ item }}#</RouterLink
            >
          </div>
        </div> -->
      </div>
      <div class="content-author-info">
        <Avatar :url="personInfo.avatar" :width="48" :height="48" />
        <div class="flex-v ml-20">
          <span class="person-name">{{ personInfo.name }}</span>
          <span class="person-name">{{ info.date }}</span>
        </div>
      </div>
      <h4 class="content-title">{{ info.title }}</h4>
      <slot name="content-top" />
      <article class="content">
        <Content />
      </article>
      <slot name="content-bottom" />
    </div>
    <slot name="bottom" />
  </main>
</template>

<script setup lang="ts">
import Avatar from '@theme/Avatar.vue'
import { usePageFrontmatter } from '@vuepress/client'
import { computed } from 'vue'
import type { PersonInfo, WayThemePostFrontmatter } from '../../shared'
import { useThemeLocaleData } from '../composables'
const frontmatter = usePageFrontmatter<WayThemePostFrontmatter>()

const themeLocale = useThemeLocaleData()
const personInfo = computed(() => {
  return themeLocale.value.personInfo as PersonInfo
})

const info = computed(() => {
  return {
    ...frontmatter.value,
    date: new Date(frontmatter.value.date as string).toLocaleString(),
  }
})
</script>

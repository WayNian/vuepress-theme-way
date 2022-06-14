<template>
  <main class="page">
    <slot name="top" />
    <div class="theme-way-content">
      <div class="content-top">
        <div
          class="content-image-mask"
          src="https://pic.imgdb.cn/item/5d776c5c451253d1783b9e9b.jpg"
        />
        <div class="content-top-info">
          <div class="content-title">{{ info.title }}</div>
          <div>
            <span>{{ info.date }}</span> <span>大概需要2min读完</span>
          </div>
          <TagList :tags="info.tags"></TagList>
        </div>
      </div>

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
import TagList from '@theme/TagList.vue'
import { usePageFrontmatter } from '@vuepress/client'
import { computed } from 'vue'
import type { WayThemePostFrontmatter } from '../../shared'
import { useThemeLocaleData } from '../composables'
const frontmatter = usePageFrontmatter<WayThemePostFrontmatter>()

const info = computed(() => {
  return {
    ...frontmatter.value,
    date: new Date(frontmatter.value.date as string).toLocaleString(),
  }
})
</script>

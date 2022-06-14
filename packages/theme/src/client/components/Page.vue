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
          <div>{{ info.date }}</div>
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
// import PageMeta from '@theme/PageMeta.vue'
import TagList from '@theme/TagList.vue'
import { pageData, usePageFrontmatter } from '@vuepress/client'
import { computed } from 'vue'
import { useBlogType } from 'vuepress-plugin-blog2/lib/client'
import type { WayThemePostFrontmatter } from '../../shared'
import {
  useBlog,
  useDarkMode,
  useSidebarItems,
  useThemeLocaleData,
} from '../composables'
const frontmatter = usePageFrontmatter<WayThemePostFrontmatter>()

const themeLocale = useThemeLocaleData()
// const { isDarkMode } = useDarkMode()

// const giscusTheme = computed(() =>
//   isDarkMode.value
//     ? themeLocale.value.giscusDarkTheme
//     : themeLocale.value.giscusLightTheme
// )

const info = computed(() => {
  return {
    ...frontmatter.value,
    date: new Date(frontmatter.value.date as string).toLocaleString(),
  }
})
</script>

<template>
  <Common>
    <ArticleView v-if="frontmatter.home"></ArticleView>
    <Transition v-else name="fade-slide-y" mode="out-in">
      <Page :key="pageData.path">
        <template #top>
          <slot name="page-top" />
        </template>
        <template #content-top>
          <slot name="page-content-top" />
        </template>
        <template #content-bottom>
          <slot name="page-content-bottom" />
        </template>
        <template #bottom>
          <slot name="page-bottom" />
        </template>
      </Page>
    </Transition>
  </Common>
</template>

<script setup lang="ts">
import ArticleView from '@theme/ArticleView.vue'
import Common from '@theme/Common.vue'
import Page from '@theme/Page.vue'
import { pageData, usePageFrontmatter } from '@vuepress/client'
import type { WayThemePageFrontmatter } from '../../shared'
const frontmatter = usePageFrontmatter<WayThemePageFrontmatter>()
</script>

<template>
  <div>
    <Navbar></Navbar>
    <h1 v-if="frontmatter.home">这是首页</h1>
    <Transition name="fade-slide-y" mode="out-in">
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
  </div>
</template>

<script setup lang="ts">
import Navbar from '@theme/Navbar.vue'
import Page from '@theme/Page.vue'
import { pageData, usePageFrontmatter } from '@vuepress/client'
import type { DefaultThemePageFrontmatter } from '../../shared'
const frontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>()
console.log('frontmatter', frontmatter.value.home)
</script>

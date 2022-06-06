<template>
  <div class="bg"></div>
  <div>
    <Navbar></Navbar>
    <Home v-if="frontmatter.home"></Home>
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
  </div>
</template>

<script setup lang="ts">
import Home from '@theme/Home.vue'
import Navbar from '@theme/Navbar.vue'
import Page from '@theme/Page.vue'
import { pageData, usePageFrontmatter } from '@vuepress/client'
import type { WayThemePageFrontmatter } from '../../shared'
const frontmatter = usePageFrontmatter<WayThemePageFrontmatter>()
console.log('frontmatter', frontmatter.value.home)
</script>

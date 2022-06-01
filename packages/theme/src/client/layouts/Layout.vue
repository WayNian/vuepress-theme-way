<template>
  <main>
    <Navbar></Navbar>
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
  </main>
</template>

<script setup lang="ts">
import Navbar from '@theme/Navbar.vue'
import Page from '@theme/Page.vue'
import { pageData } from '@vuepress/client'
</script>

<template>
  <Navbar></Navbar>
  <div class="theme-way-layout main">
    <aside class="left-view">
      <PersonView></PersonView>
      <PersonLink></PersonLink>
    </aside>
    <main class="main-view">
      <slot></slot>
    </main>
    <aside class="right-view">
      <SitePoem v-show="!isPage"></SitePoem>
      <TagList v-show="!isPage"></TagList>
      <Catalog v-show="isPage"></Catalog>
    </aside>
  </div>
  <Footer></Footer>
  <BackToTop></BackToTop>
  <!-- <Aplayer></Aplayer> -->
</template>

<script setup lang="ts">
import BackToTop from '@theme/BackToTop.vue'
import Catalog from '@theme/Catalog.vue'
import Footer from '@theme/Footer.vue'
import Navbar from '@theme/Navbar.vue'
import PersonLink from '@theme/PersonLink.vue'
import PersonView from '@theme/PersonView.vue'
import SitePoem from '@theme/SitePoem.vue'
import TagList from '@theme/TagList.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isPage = computed(() => {
  return route.path.includes('posts/')
})
</script>

<style scoped></style>

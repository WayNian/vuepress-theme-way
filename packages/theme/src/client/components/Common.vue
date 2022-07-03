<template>
  <Navbar></Navbar>
  <div class="theme-way-layout">
    <aside class="left-view">
      <PersonView></PersonView>
      <PersonLink></PersonLink>
    </aside>
    <main class="main-view">
      <div class="main-layout">
        <slot></slot>
      </div>
    </main>
    <aside class="right-view">
      <SitePoem></SitePoem>
      <TagList></TagList>
    </aside>
  </div>
  <Footer></Footer>
  <BackTop></BackTop>
</template>

<script setup lang="ts">
import BackTop from '@theme/BackTop.vue'
import Footer from '@theme/Footer.vue'
import Navbar from '@theme/Navbar.vue'
import PersonLink from '@theme/PersonLink.vue'
import PersonView from '@theme/PersonView.vue'
import SitePoem from '@theme/SitePoem.vue'
import TagList from '@theme/TagList.vue'
</script>

<style scoped></style>

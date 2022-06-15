<template>
  <Navbar></Navbar>
  <div class="theme-way-layout">
    <aside class="left-view">
      <PersonView></PersonView>
    </aside>
    <main class="main-view">
      <div class="main-layout">
        5615615
        <slot></slot>
      </div>
    </main>
    <aside class="right-view">gwagwag</aside>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@theme/Navbar.vue'
import PersonView from '@theme/PersonView.vue'
</script>

<style scoped></style>

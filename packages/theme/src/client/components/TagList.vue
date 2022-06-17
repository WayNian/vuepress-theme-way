<template>
  <Card>
    <ul class="tag-list">
      <li v-for="item in tags" :key="item.name" class="tag-item">
        {{ item.name }} * {{ item.pages.length }}
      </li>
    </ul>
  </Card>
</template>

<script setup lang="ts">
import Card from '@theme/Card.vue'
import { useTags } from '../composables/useTag'
const tags = useTags()
</script>

<style lang="scss"></style>

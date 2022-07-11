<template>
  <ul>
    <li v-for="item in props.titleList" :key="item.slug">
      <a :href="`#${item.slug}`">{{ item.title }} - {{ item.level }}</a>
      <TitleItem :title-list="item.children"> </TitleItem>
    </li>
  </ul>
</template>

<script setup lang="ts">
import TitleItem from '@theme/TitleItem.vue'
import type { PageHeader } from '@vuepress/shared'
import type { PropType } from 'vue'

const props = defineProps({
  titleList: {
    type: Array as PropType<PageHeader[]>,
    required: true,
  },
})
</script>

<style scoped>
ul {
  margin: 0;
}
</style>

<template>
  <ul>
    <li v-for="(item, index) in props.titleList" :key="item.slug">
      <a :href="`#${item.slug}`" :class="`catalog-title-${item.level}`">{{
        item.title
      }}</a>
      <TitleItem
        :title-list="item.children"
        class="sub-title"
        :title-num="index + 1"
      >
      </TitleItem>
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
  titleNum: {
    type: Number,
    default: null,
  },
})
</script>

<style scoped>
ul {
  margin: 0;
}
.catalog-title-1 {
  font-size: 1.5rem;
  font-weight: bold;
}
.catalog-title-2 {
  font-size: 1rem;
  font-weight: bold;
}
.sub-title {
  padding-left: 10px;
}
</style>

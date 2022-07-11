<template>
  <ul>
    <li v-for="(item, index) in props.titleList" :key="item.slug">
      <a :href="`#${item.slug}`" class="catalog-title">{{ item.title }}</a>
      <TitleItem
        v-if="item.children.length"
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
.catalog-title {
  font-size: 0.875rem /* 14/16 */;
  font-weight: normal;
}

.sub-title {
  padding-left: 1.25rem /* 20/16 */;
}
</style>

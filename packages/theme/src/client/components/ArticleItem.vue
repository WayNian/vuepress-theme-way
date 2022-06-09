<template>
  <div class="article-item">
    <RouterLink :to="info.path">
      <span class="article-item-title">{{ info.title }}</span>
    </RouterLink>
    <!-- <div style="width: 100%; height: 2px; background-color: aqua"></div> -->
    <div class="article-item-content">
      <img
        src="https://pic.imgdb.cn/item/5d36dae1451253d1789d583d.jpg"
        alt=""
      />
      <div>{{ info.subtitle }}</div>
    </div>
    <div>
      <span> {{ info.date }} </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { computed } from 'vue'
import type { WayThemePostData, WayThemePostFrontmatter } from '../../shared'

const props = defineProps({
  articleInfo: {
    type: Object as PropType<WayThemePostData>,
    required: true,
  },
})
const info = computed(() => {
  return {
    ...props.articleInfo.info,
    path: props.articleInfo.path,
  }
})
</script>

<style scoped></style>

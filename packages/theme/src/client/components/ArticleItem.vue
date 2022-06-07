<template>
  <section class="article-item">
    <span> {{ info.date }} </span>
    <div class="article-item-content">
      <img
        src="https://pic.imgdb.cn/item/5d36dae1451253d1789d583d.jpg"
        alt=""
      />
      <div>
        <h1>{{ info.title }}</h1>
        <p>{{ info.subtitle }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { computed } from 'vue'
import type { IArticleInfo, WayThemePostFrontmatter } from '../../shared'

const props = defineProps({
  articleInfo: {
    type: Object as PropType<IArticleInfo>,
    required: true,
  },
})
const info = computed(() => {
  return props.articleInfo.info
})
</script>

<style scoped></style>

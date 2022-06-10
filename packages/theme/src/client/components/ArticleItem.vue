<template>
  <div class="article-item-layout">
    <div class="article-item-container">
      <!-- <div style="width: 100%; height: 2px; background-color: aqua"></div> -->
      <div
        class="article-item-cover"
        :style="{
          backgroundImage: `url(https://pic.imgdb.cn/item/5d36dae1451253d1789d583d.jpg)`,
        }"
      ></div>
      <div class="article-item-description">
        {{ info.subtitle }} Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Voluptas, quasi beatae? Aliquam quae, vitae ratione repudiandae ut
        animi optio. Perferendis nisi voluptatum, sapiente quaerat iure officiis
        et optio voluptatibus tenetur.
      </div>
      <div class="article-item-block-right"></div>
      <div class="article-item-block-left"></div>
      <div class="article-item-info">
        <RouterLink :to="info.path">
          <span class="article-item-title">{{ info.title }}</span>
        </RouterLink>
        <p>{{ info.date }}</p>
      </div>
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

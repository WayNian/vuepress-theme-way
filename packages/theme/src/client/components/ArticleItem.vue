<template>
  <Card class="article-item-layout">
    <div class="article-item-top">
      <Avatar :url="personInfo.avatar" :width="47" :height="47" />
      <div class="flex-v ml-20">
        <a class="article-item-author">waynian</a>
        <span class="article-item-date">2019-10-10</span>
      </div>
    </div>
    <div class="article-item-tags">
      <span class="pointer">#前端</span>
    </div>
    <div
      class="article-item-cover"
      :style="{
        backgroundImage: `url(https://b3logfile.com/bing/20210102.jpg?imageView2/2/w/1280/format/jpg/interlace/1/q/100)`,
      }"
    ></div>
    <div class="article-item-description">
      {{ info.subtitle }} Lorem ipsum dolor sit, amet consectetur adipisicing
      elit. Voluptas, quasi beatae? Aliquam quae, vitae ratione repudiandae ut
      animi optio. Perferendis nisi voluptatum, sapiente quaerat iure officiis
      et optio voluptatibus tenetur.
    </div>

    <div class="article-item-info">
      <RouterLink :to="info.path">
        <span class="article-item-title">{{ info.title }}</span>
      </RouterLink>
    </div>
  </Card>
</template>

<script setup lang="ts">
import Avatar from '@theme/Avatar.vue'
import Card from '@theme/Card.vue'
import type { PropType } from 'vue'
import { computed } from 'vue'
import type { PersonInfo, WayThemePostData } from '../../shared'
import { useThemeLocaleData } from '../composables'

const props = defineProps({
  articleInfo: {
    type: Object as PropType<WayThemePostData>,
    required: true,
  },
})

const themeLocale = useThemeLocaleData()

const personInfo = computed(() => {
  return themeLocale.value.personInfo as PersonInfo
})

const info = computed(() => {
  return {
    ...props.articleInfo.info,
    date: new Date(props.articleInfo.info.date as string).toLocaleString(),
    path: props.articleInfo.path,
  }
})
</script>

<style scoped></style>

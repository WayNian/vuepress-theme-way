<template>
  <Card v-if="page.headers.length" class="catalog">
    <span>目录</span>
    <TitleItem :title-list="page.headers" :active-anchor="activeAnchor">
    </TitleItem>
  </Card>
</template>

<script setup lang="ts">
import Card from '@theme/Card.vue'
import TitleItem from '@theme/TitleItem.vue'
import type { PageHeader } from '@vuepress/client'
import { usePageData } from '@vuepress/client'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const page = usePageData()
const route = useRoute()
const activeAnchor = ref('#' + route.hash)
const headers = ref<PageHeader[]>([])

const flatHeaders = (headers: PageHeader[]): [] => {
  return headers.reduce((acc, header) => {
    acc.push(header as never)
    if (header.children) {
      acc.push(...flatHeaders(header.children))
    }
    return acc
  }, [])
}
onMounted(() => {
  headers.value = flatHeaders(page.value.headers)
})
const handleScroll = (): void => {
  headers.value.forEach((item) => {
    const anchor = document.querySelector(`#${item.slug}`)
    if (anchor) {
      const anchorTop = anchor.getBoundingClientRect().top
      if (anchorTop < 0) {
        activeAnchor.value = `#${item.slug}`
      }
    }
  })
}

onMounted(() => {
  document.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
  document.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.catalog {
  height: min-content;
}
</style>

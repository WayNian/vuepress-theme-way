<template>
  <div class="web-link">
    <img class="web-link-icon" :src="link.icon" alt="" />
    <a class="web-link-url" :href="link.url" target="_blank">{{
      link.nickname
    }}</a>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { computed } from 'vue'
import type { WebLinkItem } from '../../shared'
import bilibili from '../icons/bilibili.svg'
import github from '../icons/github.svg'
import weibo from '../icons/weibo.svg'
import zhihu from '../icons/zhihu.svg'
const props = defineProps({
  data: {
    type: Object as PropType<WebLinkItem>,
    default: () => {
      return {
        name: '',
        url: '',
        nickname: '',
      }
    },
  },
})

const icons = {
  zhihu,
  github,
  bilibili,
  weibo,
}
const link = computed(() => {
  let icon = icons[props.data.name]
  if (props.data.svg) {
    const base64 = window.btoa(props.data.svg)
    icon = `data:image/svg+xml;base64,${base64}`
  }

  return {
    ...props.data,
    icon,
  }
})
</script>

<style scoped lang="scss">
$iconSize: 1rem;
.web-link {
  display: flex;
  align-items: center;
  margin-bottom: 0.625rem /* 10/16 */;
  &-icon {
    width: $iconSize;
    height: $iconSize;
    margin-right: 1rem;
  }
  &-url {
    font-size: 0.875rem /* 14/16 */;
    font-weight: 400;
  }
}
</style>

<template>
  <Card v-if="themeLocale.poem">
    <p class="poem">
      {{ themeLocale.poem }}
    </p>
  </Card>
</template>

<script setup lang="ts">
import Card from '@theme/Card.vue'
import { useThemeLocaleData } from '../composables'

const themeLocale = useThemeLocaleData()
</script>

<style lang="scss">
.poem {
  margin: 0;
  font-size: 0.875rem /* 14/16 */;
}
.poem-title {
  display: flex;
  justify-content: flex-end;
  h6 {
    font-size: 0.875rem /* 14/16 */;
    margin: 0.3125rem /* 5/16 */ 0 0 0;
  }
}
</style>

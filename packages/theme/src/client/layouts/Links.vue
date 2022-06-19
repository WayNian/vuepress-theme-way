<template>
  <Common>
    <div
      v-for="(item, index) in themeData.links"
      :key="item.title"
      class="link"
    >
      <h4 class="link-title">{{ item.title }}</h4>
      <div class="link-item">
        <Card
          v-for="link in item.children"
          :key="`${index}-${link.name}`"
          class="link-item-card"
        >
          <div class="link-info">
            <img class="link-avatar" :src="link.avatar" alt="" srcset="" />
            <div class="link-name">
              <span>{{ link.name }}</span>
              <button>
                <a :href="link.url" target="_blank">访问</a>
              </button>
            </div>
          </div>
          <div class="divider"></div>
          <p class="link-description">{{ link.description }}</p>
        </Card>
      </div>
    </div>
  </Common>
</template>

<script setup lang="ts">
import Card from '@theme/Card.vue'
import Common from '@theme/Common.vue'
import { useThemeData } from '../composables'
const themeData = useThemeData()
console.log('🚀 ~ file: Links.vue ~ line 11 ~ themeLocaleData', themeData)
</script>

<style scoped></style>

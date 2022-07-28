<template>
  <Common>
    <div class="product">
      <Card v-for="item in themeData.products" :key="item">
        <div class="product-content">
          <a :href="item.url" target="_blank">
            <img class="product-img" :src="item.img" alt="" />
          </a>
          <div>
            <img
              v-for="(badge, index) in item.badgeUrlList"
              :key="index"
              :src="badge"
              alt=""
              class="product-badge"
            />
          </div>
          <p class="product-desc">{{ item.description }}</p>
        </div>
      </Card>
    </div>
  </Common>
</template>

<script setup lang="ts">
import Card from '@theme/Card.vue'
import Common from '@theme/Common.vue'
import { useThemeData } from '../composables'
const themeData = useThemeData()
</script>

<style scoped></style>

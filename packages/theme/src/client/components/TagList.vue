<template>
  <ul class="tag-list">
    <li v-for="item in props.tags" :key="item" class="tag-item">{{ item }}</li>
  </ul>
</template>

<script setup lang="ts">
const props =  defineProps({
  tags: {
    type: Array<string>,
    required: true,
  },
})
</script>

<style scoped></style>

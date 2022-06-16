<template>
  <img
    class="avatar"
    :style="{
      width: `${props.width}px`,
      height: `${props.height}px`,
    }"
    :src="props.url"
    alt=""
  />
</template>

<script setup lang="ts">
const props = defineProps({
  url: {
    type: String,
    default: '',
  },
  width: {
    type: Number,
    default: 57,
  },
  height: {
    type: Number,
    default: 57,
  },
})
</script>

<style scoped></style>

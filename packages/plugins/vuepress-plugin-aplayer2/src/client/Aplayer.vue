<template>
  <div id="aplayer"></div>
</template>

<script setup lang="ts">
import 'APlayer/dist/APlayer.min.css'
import APlayer from 'APlayer'
import { onMounted } from 'vue'

onMounted(() => {
  const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: 'China-Y',
        artist: '徐梦圆',
        url: 'https://www.ytmp3.cn/down/59298.mp3down/39868.mp3',
        cover: '',
      },
      {
        name: 'China-X',
        artist: '徐梦圆',
        url: 'https://www.ytmp3.cn/down/49003.mp3',
        cover: '',
      },
    ],
  })
})
</script>

<style scoped></style>

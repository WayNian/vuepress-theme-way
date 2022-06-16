<template>
  <Card>
    <p class="poem">
      梦后楼台高锁，酒醒帘幕低垂。去年春恨却来时。落花人独立，微雨燕双飞。
      <br />
      记得小蘋初见，两重心字罗衣。琵琶弦上说相思。当时明月在，曾照彩云归。
    </p>
    <div class="poem-title">
      --
      <h6>《临江仙·梦后楼台高锁》</h6>
    </div>
  </Card>
</template>

<script setup lang="ts">
import Card from '@theme/Card.vue'
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

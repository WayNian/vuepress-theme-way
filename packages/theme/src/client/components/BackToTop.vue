<template>
  <Transition name="back-to-top">
    <div v-show="show" class="back-to-top" @click="scrollToTop">
      <svg
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <path
          d="M838.656 767.616l0 17.344-201.344-40.576c-12.992 43.456-65.152 76.736-125.952 76.736-60.864 0-113.024-33.344-126.016-78.208l-199.872 39.104 0-17.344c0-98.496 27.52-169.472 89.728-228.864C253.44 254.848 379.456 76.736 504 4.288L511.296 0l7.232 4.288c124.608 72.448 249.088 250.56 228.864 531.584C811.136 595.264 838.656 666.24 838.656 767.616zM574.976 417.152c37.632-34.752 40.512-94.144 5.76-131.84C545.984 247.68 486.656 244.736 448.96 279.488c-37.632 34.752-40.512 94.208-5.76 131.84C477.952 449.024 537.344 451.904 574.976 417.152zM558.4 916.8C558.4 958.784 512 1024 512 1024s-46.336-69.568-46.336-107.2c0-31.872 20.224-57.92 46.336-57.92S558.4 884.928 558.4 916.8z"
        ></path>
      </svg>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { debounce } from 'ts-debounce'
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const getScrollTop = (): number =>
  window.pageYOffset ||
  document.documentElement.scrollTop ||
  document.body.scrollTop ||
  0

const scrollToTop = (): void => window.scrollTo({ top: 0, behavior: 'smooth' })

const scrollTop = ref(0)
const show = computed(() => scrollTop.value > 300)
const onScroll = debounce(() => {
  scrollTop.value = getScrollTop()
}, 100)

onMounted(() => {
  scrollTop.value = getScrollTop()

  window.addEventListener('scroll', () => onScroll())
})

onBeforeUnmount(() => {
  document.removeEventListener('scroll', () => onScroll())
})
</script>

<style scoped lang="scss">
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  width: 40px;
  height: 40px;
  background: var(--c-bg);
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: var(--c-icon);
  transition: all var(--t-color);
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
}
@media (max-width: 959px) {
  .back-to-top {
    display: none;
  }
}

.back-to-top-enter-active,
.back-to-top-leave-active {
  transition: opacity 0.3s;
}

.back-to-top-enter-from,
.back-to-top-leave-to {
  opacity: 0;
}
</style>

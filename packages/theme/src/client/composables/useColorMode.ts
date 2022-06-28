import { usePreferredDark, useStorage } from '@vueuse/core'
import { computed, inject, onMounted, onUnmounted, provide, watch } from 'vue'
import type { InjectionKey, WritableComputedRef } from 'vue'
import { useThemeLocaleData } from '.'

export type ColorModeRef = WritableComputedRef<boolean>

export const colorModeSymbol: InjectionKey<ColorModeRef> = Symbol(
  __VUEPRESS_DEV__ ? 'colorMode' : ''
)

export const useColorMode = (): ColorModeRef => {
  const isColorMode = inject(colorModeSymbol)
  if (!isColorMode) {
    throw new Error('useColorMode() is called without provider.')
  }
  return isColorMode
}

/**
 * Create dark mode ref and provide as global computed in setup
 */
export const setupColorMode = (): void => {
  const themeLocale = useThemeLocaleData()
  const isDarkPreferred = usePreferredDark()
  const darkStorage = useStorage('vuepress-color-scheme', 'auto')

  const isColorMode = computed<boolean>({
    get() {
      if (!themeLocale.value.colorMode) {
        return false
      }
      if (darkStorage.value === 'auto') {
        return isDarkPreferred.value
      }
      return darkStorage.value === 'dark'
    },
    set(val) {
      if (val === isDarkPreferred.value) {
        darkStorage.value = 'auto'
      } else {
        darkStorage.value = val ? 'dark' : 'light'
      }
    },
  })
  provide(colorModeSymbol, isColorMode)
  updateHtmlDarkClass(isColorMode)
}

export const updateHtmlDarkClass = (isColorMode: ColorModeRef): void => {
  const update = (value = isColorMode.value): void => {
    const htmlEl = window?.document.querySelector('html')
    htmlEl?.classList.toggle('dark', value)
  }

  onMounted(() => {
    watch(isColorMode, update, { immediate: true })
  })

  onUnmounted(() => update())
}

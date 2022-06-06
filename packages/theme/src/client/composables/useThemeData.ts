import {
  useThemeData as _useThemeData,
  useThemeLocaleData as _useThemeLocaleData,
} from '@vuepress/plugin-theme-data/lib/client'
import type {
  ThemeDataRef,
  ThemeLocaleDataRef,
} from '@vuepress/plugin-theme-data/lib/client'
import type { WayThemeData } from '../../shared'

export const useThemeData = (): ThemeDataRef<WayThemeData> =>
  _useThemeData<WayThemeData>()
export const useThemeLocaleData = (): ThemeLocaleDataRef<WayThemeData> =>
  _useThemeLocaleData<WayThemeData>()

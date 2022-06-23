import type { PluginConfig } from '@vuepress/core'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { palettePlugin } from '@vuepress/plugin-palette'
import { prismjsPlugin } from '@vuepress/plugin-prismjs'
import { themeDataPlugin } from '@vuepress/plugin-theme-data'
import { themeWayWaline } from '@waynian/plugin-way-waline'
import type { WayThemeData, WayThemePluginsOptions } from '../../shared'
import { getBlogPlugin } from './blog'

export const getPlugins = (
  plugins: WayThemePluginsOptions,
  localeOptions: WayThemeData
): PluginConfig => {
  const pluginConfig = [
    // @vuepress/plugin-nprogress
    plugins.nprogress !== false ? nprogressPlugin() : [],
    // @vuepress/plugin-palette
    palettePlugin({ preset: 'sass' }),
    // @vuepress/plugin-prismjs
    plugins.prismjs !== false ? prismjsPlugin() : [],
    // @vuepress/plugin-theme-data
    themeDataPlugin({ themeData: localeOptions }),
    // vuepress-plugin-blog2
    getBlogPlugin(localeOptions, plugins.blog),
    themeWayWaline({
      theme: 'dark',
    }),
  ]

  return pluginConfig
}

import type { PluginConfig } from '@vuepress/core'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { palettePlugin } from '@vuepress/plugin-palette'
import { prismjsPlugin } from '@vuepress/plugin-prismjs'
import { themeDataPlugin } from '@vuepress/plugin-theme-data'
// import { aplayerPlugin } from 'vuepress-plugin-aplayer2'
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
    prismjsPlugin(),
    // @vuepress/plugin-theme-data
    themeDataPlugin({ themeData: localeOptions }),
    // vuepress-plugin-blog2
    getBlogPlugin(localeOptions, plugins.blog),
    // aplayerPlugin(),
    // themeWayWaline({
    //   serverURL: 'https://theme-way-waline-2e8axyq7o-waynian.vercel.app',
    // }),
  ]

  return pluginConfig
}

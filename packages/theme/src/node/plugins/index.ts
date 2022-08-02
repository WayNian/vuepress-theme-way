import type { PluginConfig } from '@vuepress/core'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { palettePlugin } from '@vuepress/plugin-palette'
import { prismjsPlugin } from '@vuepress/plugin-prismjs'
import { themeDataPlugin } from '@vuepress/plugin-theme-data'
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance'
import { wayPlayerPlugin } from 'vuepress-plugin-way-player'
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
    wayPlayerPlugin(),
    // md增强
    mdEnhancePlugin({
      // 启用任务列表
      tasklist: true,
      // 添加选项卡支持
      tabs: true,
      // 代码块分组
      codetabs: true,
      // 启用下角标功能
      sub: true,
      // 启用上角标
      sup: true,
      // 启用脚注
      footnote: true,
      // 开启标记
      mark: true,
      // 启用图片标记
      imageMark: true,
      // 启用图片大小
      imageSize: true,
      // 启用自定义对齐
      align: true,
    }),
    // themeWayWaline({
    //   serverURL: 'https://theme-way-waline-2e8axyq7o-waynian.vercel.app',
    // }),
  ]

  return pluginConfig
}

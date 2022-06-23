import type { Plugin } from '@vuepress/core'
import { path } from '@vuepress/utils'
import type { WalineOptions } from '../shared'

export type WalinePluginOptions = WalineOptions

export const themeWayWaline = (options: WalinePluginOptions): Plugin => ({
  name: 'theme-way-waline',
  clientConfigFile: path.resolve(__dirname, '../client/config.js'),
  define: {
    __WALINE_OPTIONS__: options,
  },
})

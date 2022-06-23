import type { Plugin } from '@vuepress/core'
import { path } from '@vuepress/utils'

export const themeWayWaline = (): Plugin => ({
  name: 'theme-way-waline',
  clientConfigFile: path.resolve(__dirname, '../client/config.js'),
})

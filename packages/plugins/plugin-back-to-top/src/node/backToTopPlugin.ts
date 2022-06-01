import type { Plugin } from '@vuepress/core'
import { path } from '@vuepress/utils'

export const backToTopPlugin = (): Plugin => ({
  name: 'back-to-top',

  clientConfigFile: path.resolve(__dirname, '../client/config.js'),
})

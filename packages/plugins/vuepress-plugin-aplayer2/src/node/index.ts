import type { Plugin } from '@vuepress/core'
import { path } from '@vuepress/utils'

export const aplayerPlugin = (): Plugin => (app) => ({
  name: 'vuepress-plugin-aplayer',

  define: {
    __SITE_LOCALES__: app.siteData.locales,
    __SITE_LANG__: app.siteData.lang,
  },

  clientConfigFile: path.resolve(__dirname, '../client/config.js'),
})

export default aplayerPlugin

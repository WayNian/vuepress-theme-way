import type { Page, Theme } from '@vuepress/core'
// import { themeDataPlugin } from '@vuepress/plugin-theme-data'
import { fs, path } from '@vuepress/utils'
import type {
  WayThemeLocaleOptions,
  WayThemePageData,
  WayThemePluginsOptions,
} from '../shared'
import { getPlugins } from './plugins'
import { assignDefaultLocaleOptions, createPages } from './utils'
export interface DefaultThemeOptions extends WayThemeLocaleOptions {
  themePlugins?: WayThemePluginsOptions
}

export const wayTheme = ({
  themePlugins = {},
  ...localeOptions
}: DefaultThemeOptions = {}): Theme => {
  assignDefaultLocaleOptions(localeOptions)

  return {
    name: 'vupress-theme-way',

    layouts: path.resolve(__dirname, '../client/layouts'),

    templateBuild: path.resolve(__dirname, '../../templates/build.html'),

    // use alias to make all components replaceable
    alias: Object.fromEntries(
      fs
        .readdirSync(path.resolve(__dirname, '../client/components'))
        .filter((file) => file.endsWith('.vue'))
        .map((file) => [
          `@theme/${file}`,
          path.resolve(__dirname, '../client/components', file),
        ])
    ),
    clientConfigFile: path.resolve(__dirname, '../client/config.js'),
    extendsPage: (page: Page<Partial<WayThemePageData>>) => {
      // save relative file path into page data to generate edit link
      page.data.filePathRelative = page.filePathRelative
      // save title into route meta to generate navbar and sidebar
      page.routeMeta.title = page.title
    },
    plugins: getPlugins(themePlugins, localeOptions),
    onInitialized: async (app) => {
      createPages(app, localeOptions)
    },
  }
}

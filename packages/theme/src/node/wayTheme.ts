import type { Theme } from '@vuepress/core'
import { themeDataPlugin } from '@vuepress/plugin-theme-data'
import { fs, path } from '@vuepress/utils'
import type {
  DefaultThemeLocaleOptions,
  DefaultThemePluginsOptions,
} from '../shared'
import { assignDefaultLocaleOptions } from './utils'
export interface DefaultThemeOptions extends DefaultThemeLocaleOptions {
  themePlugins?: DefaultThemePluginsOptions
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
    plugins: [
      // @vuepress/plugin-theme-data
      themeDataPlugin({ themeData: localeOptions }),
    ],
  }
}

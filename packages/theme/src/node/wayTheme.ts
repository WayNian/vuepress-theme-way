import { fs, path } from '@vuepress/utils'

export const wayTheme = () => {
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
  }
}

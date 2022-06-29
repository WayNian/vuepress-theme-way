import { createPage } from '@vuepress/core'
import type { App } from '@vuepress/core'
import type { WayThemeData } from '../../shared'

export const createPages = async (
  app: App,
  localeOptions: WayThemeData
): Promise<void> => {
  // 创建友链页面
  app.pages.push(
    await createPage(app, {
      path: '/links',
      frontmatter: {
        layout: 'Links',
      },
    })
  )
}

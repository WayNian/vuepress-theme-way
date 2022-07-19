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
        title: '友链',
      },
    })
  )
  // 创建项目页面
  app.pages.push(
    await createPage(app, {
      path: '/products',
      frontmatter: {
        layout: 'Product',
        title: '项目',
      },
    })
  )
  // 创建关于页面
  // app.pages.push(
  //   await createPage(app, {
  //     path: '/about',
  //     frontmatter: {
  //       layout: 'About',
  //       title: '关于我 ヾ(≧▽≦*)o',
  //     },
  //   })
  // )
}

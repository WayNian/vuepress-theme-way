import type { Page, Plugin } from '@vuepress/core'
import { blogPlugin } from 'vuepress-plugin-blog2'
import type { BlogOptions } from 'vuepress-plugin-blog2'
import type {
  WayThemeBlogPluginOptions,
  WayThemeData,
  WayThemePostFrontmatter,
  WayThemePostInfo,
} from '../../shared'

type ThemePostPage = Page<WayThemePostFrontmatter>

const getTime = (page: ThemePostPage): number => {
  const date = page.frontmatter.date
  return date ? new Date(date).getTime() : -1
}

const compareDate = (pageA: ThemePostPage, pageB: ThemePostPage): number => {
  const timeA = getTime(pageA)
  const timeB = getTime(pageB)

  if (timeA === -1) return 1
  if (timeB === -1) return -1

  return timeB - timeA
}

const sorter = (pageA: ThemePostPage, pageB: ThemePostPage): number =>
  compareDate(pageA, pageB)

export const getBlogPlugin = (
  localeOptions: WayThemeData,
  options?: WayThemeBlogPluginOptions
): Plugin | [] => {
  if (options === false) return []

  return blogPlugin({
    metaScope: '',

    filter: ({ filePathRelative }) =>
      !!filePathRelative && filePathRelative.startsWith('posts/'),

    getInfo: ({
      excerpt,
      frontmatter,
    }: {
      excerpt: string
      frontmatter: WayThemePostFrontmatter
    }): WayThemePostInfo => ({
      ...frontmatter,
      author: frontmatter.author,
      tags: frontmatter.tags || [],
      excerpt,
    }),
    category: [
      {
        key: 'tag',
        getter: ({ frontmatter }: { frontmatter: WayThemePostFrontmatter }) =>
          frontmatter.tags || [],
        path: '/tags/',
        layout: 'Tags',
        itemPath: '/tags/:name/',
        itemLayout: 'Tags',
        frontmatter: () => ({ title: 'Tags' }),
        itemFrontmatter: (name) => ({
          title: `Tag ${name}`,
        }),
      },
    ],
    type: [
      {
        key: 'post',
        sorter,
        filter: () => true,
        path: '/',
        layout: 'HomePage',
        frontmatter: () => ({
          title: 'Home',
          layout: 'HomePage',
        }),
      },
    ],
  } as BlogOptions)
}

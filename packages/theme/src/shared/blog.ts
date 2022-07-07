import type { Article } from 'vuepress-plugin-blog2'

export interface WayThemePostPager {
  title?: string
  link?: string
  text?: string
}

export interface WayThemePostInfo extends Record<string, unknown> {
  title: string
  subtitle?: string
  editLink?: boolean
  editLinkPattern?: string
  lastUpdated?: boolean
  author?: string
  authorImage?: string
  date?: string
  /**
   * 封面图片
   */
  cover?: string
  tags?: string[]
  hide?: boolean
  /**
   *是否置顶
   */
  isTop?: boolean
  excerpt?: string
  next?: WayThemePostPager | null
  prev?: WayThemePostPager | null
}

export type WayThemePostData = Article<WayThemePostInfo>

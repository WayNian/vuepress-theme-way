import type { Article } from 'vuepress-plugin-blog2'

export interface WayThemePostPager {
  title?: string
  link?: string
  text?: string
}

export interface WayThemePostInfo extends Record<string, unknown> {
  title: string
  subtitle?: string
  author?: string
  date?: string | null
  tags?: string[]
  headerImage?: string
  excerpt?: string
  next?: WayThemePostPager | null
  prev?: WayThemePostPager | null
}

export type WayThemePostData = Article<WayThemePostInfo>

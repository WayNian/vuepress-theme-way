import type { GitPluginPageData } from '@vuepress/plugin-git'
import type { NavLink, SidebarConfig } from './nav'

export interface WayThemePageData extends GitPluginPageData {
  filePathRelative: string | null
}

export interface WayThemePageFrontmatter {
  home?: boolean
  navbar?: boolean
  pageClass?: string
}

export interface WayThemeNormalPageFrontmatter extends WayThemePageFrontmatter {
  home?: false
  editLink?: boolean
  editLinkPattern?: string
  lastUpdated?: boolean
  contributors?: boolean
  sidebar?: 'auto' | false | SidebarConfig
  sidebarDepth?: number
  prev?: string | NavLink
  next?: string | NavLink
}

export interface WayThemePostFrontmatter extends WayThemePageFrontmatter {
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
}

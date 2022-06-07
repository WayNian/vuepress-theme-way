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

export interface WayThemeHomePageFrontmatter extends WayThemePageFrontmatter {
  home: true
  heroImage?: string
  heroImageDark?: string
  heroAlt?: string
  heroText?: string | null
  tagline?: string | null
  actions?: {
    text: string
    link: string
    type?: 'primary' | 'secondary'
  }[]
  features?: {
    title: string
    details: string
  }[]
  footer?: string
  footerHtml?: boolean
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
  useHeaderImage?: boolean
  author?: string
  date?: string
  headerImage?: string
  headerMask?: string
  headerImageCredit?: string
  headerImageCreditLink?: string
  catalog?: boolean
  tags?: string[]
  hide?: boolean
}

export interface IArticleInfo {
  path: string
  info: WayThemePostFrontmatter
}

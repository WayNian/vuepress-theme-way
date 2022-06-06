import type { BlogOptions } from 'vuepress-plugin-blog2'

export interface WayThemeContainerOptions {
  info?: boolean
  tip?: boolean
  warning?: boolean
  danger?: boolean
  details?: boolean
  codeGroup?: boolean
  codeGroupItem?: boolean
  link?: boolean | { siteDomain?: boolean }
}

export interface WayThemeBlogPluginOptions extends Pick<BlogOptions, 'filter'> {
  /**
   * @default "/tags/"
   */
  tag?: string

  /**
   * @default "/tags/:name/"
   */
  tagItem?: string
}

export interface WayThemePluginsOptions {
  /**
   * Enable @vuepress/plugin-active-header-links or not
   */
  activeHeaderLinks?: boolean

  /**
   * Enable @vuepress/plugin-container or not
   */
  container?: WayThemeContainerOptions

  /**
   * Enable @vuepress/plugin-git or not
   */
  git?: boolean

  /**
   * Enable @vuepress/plugin-medium-zoom or not
   *
   * @default true
   */
  mediumZoom?: boolean

  /**
   * Enable @vuepress/plugin-nprogress or not
   *
   * @default true
   */
  nprogress?: boolean

  /**
   * Enable @vuepress/plugin-prismjs or not
   *
   * @default true
   */
  prismjs?: boolean

  /**
   * Enable @renovamen/vuepress-plugin-katex or not
   *
   * @default false
   */
  katex?: boolean

  /**
   * Enable @vuepress/plugin-google-analytics or not and pass your
   * Measurement ID
   *
   * @default false
   */
  ga?: false | string

  /**
   * Enable @renovamen/vuepress-plugin-baidu-tongji or not and pass
   * your tracking code
   *
   * @default false
   */
  ba?: false | string

  /**
   * Options for vuepress-plugin-blog2
   */
  blog?: WayThemeBlogPluginOptions
}

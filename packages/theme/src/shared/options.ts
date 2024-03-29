import type { ThemeData } from '@vuepress/plugin-theme-data'
import type { LocaleData } from '@vuepress/shared'
import type {
  LinkGroup,
  NavbarConfig,
  PersonInfo,
  ProductItem,
  SidebarConfig,
  WalineOptions,
  WebLinkItem,
  WebsiteInfo,
} from '.'

interface ImageItem {
  path: string
  mask?: string
}

export interface WayThemePageOptions {
  title?: string
  subtitle?: string
  bgImage?: ImageItem
}

export interface WayThemePagesOptions {
  tags?: WayThemePageOptions
  links?: WayThemePageOptions
}

export type WayThemeLocaleOptions = WayThemeData

export type WayThemeData = ThemeData<WayThemeLocaleData>
export interface WayThemeLocaleData extends LocaleData {
  /**
   * Default color mode
   *
   * @default 'auto'
   */
  colorMode?: 'auto' | 'dark' | 'light'

  /**
   * Enable color mode switching and display a button in navbar or not
   *
   * @default true
   */
  colorModeSwitch?: boolean
  /**
   * Home path of current locale
   *
   * Used as the link of back-to-home
   */
  home?: string

  /**
   * Navbar logo config
   *
   * Logo to display in navbar
   */
  logo?: null | string
  /**
   * Navbar repository config
   *
   * Used for the repository link of navbar
   */
  repo?: null | string

  /**
   * Navbar repository config
   *
   * Used for the repository text of navbar
   */
  repoLabel?: string
  /**
   * Enable hitokoto or not?
   */
  hitokoto?: boolean | string

  /**
   * Icon for search button (should be registered first). "false" for no icon.
   *
   * @default "ri-search-2-line"
   */
  searchIcon?: string | boolean

  /**
   * Icon for language seletor (should be registered first). "false" for no icon.
   *
   * @default "hi-translate"
   */
  langIcon?: string | boolean

  /**
   * Header images on home page
   */
  homeHeaderImages?: null | Array<ImageItem>

  /**
   * Other pages
   */
  pages?: null | WayThemePagesOptions

  /**
   * Display catalog for all posts or not. Catalog can also be configured
   * in page frontmatter.
   */
  catalog?: boolean

  /**
   * Maximum number of blogs per page.
   *
   * Default: 10
   */
  blogNumPerPage?: number

  /**
   * Navbar config
   *
   * Set to `false` to disable navbar in current locale
   */
  navbar?: false | NavbarConfig

  /**
   * Sidebar config
   *
   * Set to `false` to disable sidebar in current locale
   */
  sidebar?: 'auto' | false | SidebarConfig

  /**
   * Sidebar depth
   *
   * - Set to `0` to disable all levels
   * - Set to `1` to include `<h2>`
   * - Set to `2` to include `<h2>` and `<h3>`
   * - ...
   *
   * The max value depends on which headers you have extracted
   * via `markdown.extractHeaders.level`.
   *
   * The default value of `markdown.extractHeaders.level` is `[2, 3]`,
   * so the default max value of `sidebarDepth` is `2`
   */
  sidebarDepth?: number

  /**
   * Page meta - edit link config
   *
   * Whether to show "Edit this page" or not
   */
  editLink?: boolean

  /**
   * Page meta - edit link config
   *
   * Pattern of edit link
   *
   * @example ':repo/edit/:branch/:path'
   */
  editLinkPattern?: string

  /**
   * Page meta - edit link config
   *
   * Use `repo` config by default
   *
   * Set this config if your docs is placed in a different repo
   */
  docsRepo?: string

  /**
   * Page meta - edit link config
   *
   * Set this config if the branch of your docs is not 'main'
   */
  docsBranch?: string

  /**
   * Page meta - edit link config
   *
   * Set this config if your docs is placed in sub dir of your `docsRepo`
   */
  docsDir?: string

  /**
   * Page meta - last updated config
   *
   * Whether to show "Last Updated" or not
   */
  lastUpdated?: boolean

  /**
   * Page meta - contributors config
   *
   * Whether to show "Contributors" or not
   */
  contributors?: boolean

  /**
   * Footer, support HTML
   */
  footer?: string

  personInfo?: PersonInfo

  websiteInfo?: WebsiteInfo

  links?: LinkGroup[]

  comments?: WalineOptions

  webLinks?: WebLinkItem[]

  products?: ProductItem[]

  poem?: string
}

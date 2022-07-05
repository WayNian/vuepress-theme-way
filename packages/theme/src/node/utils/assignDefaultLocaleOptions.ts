import type { WayThemeLocaleOptions } from '../../shared'

export const DEFAULT_LOCALE_OPTIONS: WayThemeLocaleOptions = {
  // navbar
  navbar: [],
  logo: null,
  // color mode
  colorMode: 'auto',
  colorModeSwitch: true,
  repo: null,
  // sidebar
  sidebar: 'auto',
  sidebarDepth: 2,
}
/**
 * Assign default options
 */
export const assignDefaultLocaleOptions = (
  localeOptions: WayThemeLocaleOptions
): void => {
  Object.assign(localeOptions, {
    ...DEFAULT_LOCALE_OPTIONS,
    ...localeOptions,
  })
}

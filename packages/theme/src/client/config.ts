import { defineClientConfig } from '@vuepress/client'
import './styles/index.scss'
import { setupBlogPages, setupDarkMode, setupSidebarItems } from './composables'
import { setupTags } from './composables/useTag'
import { resolveExtensionPage } from './utils'

export default defineClientConfig({
  enhance({ app, router }) {
    resolveExtensionPage(router)
  },
  setup() {
    setupDarkMode()
    setupSidebarItems()
    setupBlogPages()
    setupTags()
  },
})

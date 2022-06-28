import { defineClientConfig } from '@vuepress/client'
import './styles/index.scss'
import {
  setupArticleData,
  setupBlogPages,
  setupColorMode,
  setupSidebarItems,
} from './composables'
import { setupTags } from './composables/useTag'
import { resolveExtensionPage } from './utils'

export default defineClientConfig({
  enhance({ app, router }) {
    resolveExtensionPage(router)
  },
  setup() {
    setupColorMode()
    setupSidebarItems()
    setupBlogPages()
    setupArticleData()
    setupTags()
  },
})

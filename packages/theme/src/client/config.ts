import { defineClientConfig } from '@vuepress/client'
import './styles/index.scss'
import {
  setupArticleData,
  setupBlogPages,
  setupColorMode,
  setupSidebarItems,
} from './composables'
import { setupTags } from './composables/useTag'

export default defineClientConfig({
  setup() {
    setupColorMode()
    setupSidebarItems()
    setupBlogPages()
    setupArticleData()
    setupTags()
  },
})

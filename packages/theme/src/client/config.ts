import { defineClientConfig } from '@vuepress/client'
import './styles/index.scss'
import { setupDarkMode } from './composables'
import { resolveExtensionPage } from './utils'

export default defineClientConfig({
  enhance({ app, router }) {
    resolveExtensionPage(router)
  },

  setup() {
    setupDarkMode()
  },
})

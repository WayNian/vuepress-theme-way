import { defineClientConfig } from '@vuepress/client'
import './styles/index.scss'
import { setupDarkMode } from './composables'

export default defineClientConfig({
  enhance({ app, router }) {
    console.log(1)
  },

  setup() {
    setupDarkMode()
    console.log(1)
  },
})

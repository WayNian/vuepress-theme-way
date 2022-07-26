import { defineClientConfig } from '@vuepress/client'
import './styles/index.scss'
import {
  setupArticleData,
  setupBlogPages,
  setupColorMode,
  setupTags,
  useScrollPromise,
} from './composables'

export default defineClientConfig({
  enhance({ app, router }) {
    // handle scrollBehavior with transition
    const scrollBehavior = router.options.scrollBehavior!
    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait()
      return scrollBehavior(...args)
    }
  },
  setup() {
    setupColorMode()
    setupBlogPages()
    setupArticleData()
    setupTags()
  },
})

import { defineClientConfig } from '@vuepress/client'
import { Waline } from './components'

export default defineClientConfig({
  enhance({ app, router }) {
    app.component('CommentService', Waline)
  },
})

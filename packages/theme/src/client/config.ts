import { defineClientConfig } from '@vuepress/client'
import './styles/index.scss'

export default defineClientConfig({
  enhance({ app, router }) {
    console.log(1)
  },

  setup() {
    console.log(1)
  },
})

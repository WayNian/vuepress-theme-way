/* eslint-disable no-undef */

import { defineClientConfig } from '@vuepress/client'
import Aplayer from './Aplayer.vue'

export default defineClientConfig({
  enhance: ({ app }) => {
    if (__VUEPRESS_SSR__) return
    app.component('Aplayer', Aplayer)
  },
})

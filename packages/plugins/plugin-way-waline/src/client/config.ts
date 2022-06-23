import { defineClientConfig } from '@vuepress/client'
import { h } from 'vue'
import type { WalineOptions } from './../shared/index'
import { Waline } from './components'

declare const __WALINE_OPTIONS__: WalineOptions
const options = __WALINE_OPTIONS__
export default defineClientConfig({
  enhance({ app, router }) {
    app.component('CommentService', () => h(Waline, { options }))
  },
})

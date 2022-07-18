/* eslint-disable no-undef */

import { defineClientConfig } from '@vuepress/client'
import Aplayer from './Aplayer'

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component('Aplayer', Aplayer)
  },
})

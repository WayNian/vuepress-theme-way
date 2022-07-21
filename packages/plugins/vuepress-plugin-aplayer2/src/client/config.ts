/* eslint-disable no-undef */

import { defineClientConfig } from '@vuepress/client'
import WayPlayer from './WayPlayer.vue'

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component('WayPlayer', WayPlayer)
  },
})

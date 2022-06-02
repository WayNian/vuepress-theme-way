import type { Router } from 'vue-router'

// 动态添加页面，路由记录 不会 在构建模式中被预渲染出来
export const resolveExtensionPage = (router: Router): void => {
  router.addRoute({
    path: '/links',
    component: () => import('../components/Links.vue'),
  })
}

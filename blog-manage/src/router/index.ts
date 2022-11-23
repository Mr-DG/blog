import { createRouter, createWebHashHistory } from 'vue-router'
import outsideLayout from './outsideLayout'
// 路由守卫
import { createRouterGuards } from './router-guards';
// 路由白名单
import { whiteNameList } from './constant'
import type { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/home',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '首页',
    },
    children: [
      // {
      //   name: 'home',
      //   path: '/home',
      //   component: () => import('@/views/home/index.vue')
      // },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/NotFound/index.vue')
      }
    ],
  },
  // Layout之外的路由(Login...)
  ...outsideLayout,
]

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

// 创建路由守卫
createRouterGuards(router, whiteNameList)
export default router
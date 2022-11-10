import { createRouter, createWebHistory } from 'vue-router'
import outsideLayout from './outsideLayout'
// 路由守卫
import { createRouterGuards } from './router-guards';
// 路由白名单
import { whiteNameList } from './constant';

export const routes = [
  {
    path: '/',
    name: 'Layout',
    // redirect: '/home',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '首页',
    },
    children: [],
  },
  // Layout之外的路由(Login...)
  ...outsideLayout,
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// 创建路由守卫
createRouterGuards(router, whiteNameList)

export default router
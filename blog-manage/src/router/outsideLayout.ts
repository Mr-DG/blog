// Layout之外的路由
import type { RouteRecordRaw } from "vue-router"

export const LoginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import(/* webpackChunkName: "login" */ 'views/login/index.vue'),
  meta: {
    title: '登录',
  },
}

export default [LoginRoute]
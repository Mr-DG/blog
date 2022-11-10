// 路由守卫
import type { Router } from 'vue-router'
import type { WhiteNameList } from './constant'

export const createRouterGuards = (router: Router, whiteNameList: WhiteNameList) => {
  // 前置路由
  router.beforeEach((to, _, next) => {
    next()
  })

  // 后置路由
  router.afterEach((to, from, failure) => {

  })

  // 错误处理
  router.onError((error) => {
    console.log('路由错误', error)
  })
}
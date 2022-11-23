// 路由守卫
import type { Router } from 'vue-router'
import type { WhiteNameList } from './constant'
import { useUserStore } from 'stores/modules/user'
import { TOKEN_KEY } from '@/constant'

let isAddRoutes = true
export const createRouterGuards = (router: Router, whiteNameList: WhiteNameList) => {
  // ——————添加动态路由函数——————
  const addRouter = async () => {
    // 发送请求获取动态路由
    const userStore = useUserStore()
    const routers = await userStore.getMenusList()
    // addRoute
    routers.forEach(item => {
      router.addRoute('Layout', item)
    })
    // 添加完路由之后设置为false，在重定向之后就不会一直添加
    isAddRoutes = false
  }

  // ——————前置路由——————
  router.beforeEach(async (to, _, next) => {
    if (to.path !== '/login') {
      const token = localStorage.getItem(TOKEN_KEY)
      if (token) {
        // 获取路由
        if (isAddRoutes) {
          await addRouter()
          next({ ...to, replace: true })
        } else {
          next()
        }
      } else {
        // 没有token
        localStorage.clear()
        next({ path: '/login' })
      }
    } else {
      // 退出登录之后，就需要重新添加路由了
      isAddRoutes = true
      next()
    }

  })

  // ——————后置路由——————
  router.afterEach((to, from, failure) => {

  })

  // ——————错误处理——————
  router.onError((error) => {
    console.log('路由错误', error)
  })
}
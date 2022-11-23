import type { RouteRecordRaw } from "vue-router"
import type { MenusTree } from '@/utils/index'
const modules = import.meta.glob('../views/**/**.vue')

// 根据后端的数据生成路由
export const generatorRouter = (menusTree: MenusTree[]): RouteRecordRaw[] => {
  const newRouters = menusTree.map(item => {
    const route: RouteRecordRaw = {
      name: item.name,
      path: item.path,
      component: modules[`../views/${item.component}.vue`],
      meta: {
        title: item.title,
        icon: item.icon,
      },
      children: []
    }
    if (item.children) {
      route.children = generatorRouter(item.children)
      // 如果有children说明是目录，将children的第一项作为重定向的路径
      route.redirect = route.children[0].path
    }
    return route
  })

  return newRouters
}
import { defineStore } from 'pinia'
import { TOKEN_KEY } from '@/constant/index'
import type { RouteRecordRaw } from 'vue-router'
import { getUserInfo, getUserMenus } from '@/api/account/index'
import { generatorRouter } from '@/router/generator-router'
import { listToTree } from '@/utils/index'
import { useTabsStore } from 'stores/index'

interface UserState {
  token: string
  name: string
  menus: RouteRecordRaw[]
  userInfo: Partial<API.User>
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => {
    return {
      token: localStorage.getItem(TOKEN_KEY) || '',
      name: '',
      menus: [],
      userInfo: {}
    }
  },
  getters: {
    getToken: (state): string => state.token,
    getName: (state): string => state.name,
  },
  actions: {
    // 清空token及用户信息
    resetToken() {
      this.name = this.token = ''
      this.menus = []
      this.userInfo = {}
      localStorage.clear()
    },

    // // 登录
    // async login(data: any) {
    //   try {
    //     // const res = await login(data)
    //     // this.token = res.token
    //     // localStorage.setItem(TOKEN_KEY, res.token)
    //     return this.afterLogin()
    //   } catch (error) {
    //     return Promise.reject(error)
    //   }
    // },

    // 退出登录
    logout() {
      const tabsStore = useTabsStore()
      tabsStore.deleteAllTabItem()
      localStorage.clear()
      sessionStorage.clear()
      this.token = ""
      this.menus = []
    },

    async getMenusList() {
      try {
        // 获取后端数据
        const { data } = await getUserMenus()
        // 首页静态添加
        data.unshift({
          id: 0,
          name: 'home',
          title: '工作台',
          pid: null,
          path: '/home',
          icon: 'icon-wode',
          component: 'home/index',
          type: 1
        },)
        // 将后端数据生成树
        const menusTree = listToTree(data)
        // 将树菜单变成路由
        const routers = generatorRouter(menusTree)
        this.menus = routers
        return routers
      } catch (error) {
        return Promise.reject(error)
      }
    }
  }
})

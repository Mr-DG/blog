import { defineStore } from 'pinia'

interface Tabs {
  tabsList: TabItem[]
}

interface TabItem {
  title: string,
  path: string
}

export const useTabsStore = defineStore({
  id: 'tabs',
  state: (): Tabs => {
    return {
      tabsList: JSON.parse(sessionStorage.getItem('tabsList') as string) || []
    }
  },
  getters: {},
  actions: {
    // 初始换tabs
    initTabs(initTabs: TabItem[]) {
      this.tabsList = initTabs
    },
    // 添加tab-item
    addTabItem(tabItem: TabItem) {
      if (this.tabsList.some(item => item.path === tabItem.path)) return
      this.tabsList.push(tabItem)
    },
    // 删除tab-item
    deleteTabItem(path: string) {
      if (this.tabsList.length === 1) return
      this.tabsList = this.tabsList.filter(item => item.path != path)
    },
    // 清空所有
    deleteAllTabItem() {
      this.tabsList = []
    }
  }
})
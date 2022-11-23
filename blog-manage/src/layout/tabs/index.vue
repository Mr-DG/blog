<template>
  <div class="flex bg-light-50 pt-5px pb-2px px-15px overflow-auto">
    <a-space>
      <div
        v-for="item in tabsList"
        class="px-8px py-3px cursor-pointer flex border-gray-300 border-width-1px"
        :class="[route.path == item.path && 'text-light-200 bg-blue-500']"
        @click="changeRoute(item.path)">
        <span class="mr-6px whitespace-nowrap hover:text-blue-500"
          :class="[route.path == item.path && 'hover:text-light-200']">{{
              item.title
          }}</span>
        <span class="ml-4px transition-all transform hover:scale-120" @click.stop="deleteTabItem(item.path)">
          <close-outlined />
        </span>
      </div>
    </a-space>
  </div>
  <div class="overflow-auto h-full p-15px">
    <div class="bg-light-50">
      <router-view>
        <template #default="{ Component, route }">
          <Transition name="fade-transform" mode="out-in" appear>
            <component :is="Component" :key="route.path" />
          </Transition>
        </template>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTabsStore } from '@/stores'
import { CloseOutlined } from '@ant-design/icons-vue'

const tabsStore = useTabsStore()
const tabsList = computed(() => tabsStore.tabsList)

const router = useRouter()
const route = useRoute()
const changeRoute = (path: string) => {
  router.push(path)
}

// 页面刚进来需要添加tab
tabsStore.addTabItem({ title: route.meta?.title as string, path: route.path })

// 监听路由变化，添加tabs
watch(() => route.fullPath, () => {
  if (router.hasRoute(route.name as string)) {
    tabsStore.addTabItem({ title: route.meta?.title as string, path: route.path })
  }
})

// 删除tab-item
const deleteTabItem = (path: string) => {
  tabsStore.deleteTabItem(path)
  // 如果关闭的tab-item是当前的path，跳转到tablist最后一个path
  if (path == route.path) {
    router.push(tabsList.value[tabsList.value.length - 1].path)
  }
}

// 在页面关闭或刷新之前，保存数据
window.addEventListener('beforeunload', () => {
  sessionStorage.setItem('tabsList', JSON.stringify(tabsList.value))
})
</script>

<style scoped lang="less">

</style>

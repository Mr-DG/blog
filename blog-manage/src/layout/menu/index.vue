<template>
  <a-menu
    v-model:selectedKeys="selectedKeys"
    v-model:openKeys="openKeys"
    theme="dark"
    mode="inline"
    @click="clickMenuItem">
    <template v-for="item in menus" :key="item.name || item.fullpath">
      <MenuItem :menuInfo="item" />
    </template>
  </a-menu>
</template>

<script setup lang="ts">
// 字体图标
import '@ant-design/icons-vue'
import MenuItem from './MenuItem.vue'
import type { MenuProps } from 'ant-design-vue'
import { useUserStore } from 'stores/modules/user'
import { useRouter, useRoute } from 'vue-router'
import { findAllParentPath } from '@/utils/index'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
// menu相关配置
const selectedKeys = ref<string[]>([route.path])
const openKeys = ref<string[]>([''])

const menus = computed(() => [...userStore.menus])

const props = defineProps({
  collapsed: {
    type: Boolean,
  }
})

// 获取展开的sub
const getSubKey = () => {
  openKeys.value = props.collapsed ? [] : findAllParentPath(menus.value, route.name as string)
}
getSubKey()

// 点击menu-item事件,跳转路由
const clickMenuItem: MenuProps['onClick'] = ({ key }) => {
  if (key == selectedKeys.value[0]) return
  router.push(key as string)
}

watch(() => route.fullPath, () => {
  selectedKeys.value[0] = route.path
  getSubKey()
})
watch(() => props.collapsed, () => {
  getSubKey()
})
</script>

<style scoped lang="less">

</style>

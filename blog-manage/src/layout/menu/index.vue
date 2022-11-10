<template>
  <a-menu
    v-model:selectedKeys="selectedKeys"
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
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
} from '@ant-design/icons-vue';
import type { RouteRecordRaw } from 'vue-router';
import MenuItem from './MenuItem.vue'
import type { MenuProps } from 'ant-design-vue';

const selectedKeys = ref<string[]>([''])

const menus: RouteRecordRaw[] = [
  { path: '/test1', name: 'test1', meta: { title: 'test1' }, children: [] },
  {
    path: '/test2', name: 'test2', meta: { title: 'test2', },
    children: [
      {
        path: '/test21', name: 'test21', meta: { title: 'test21' }, children: [
          { path: '/test211', name: 'test211', meta: { title: 'test211' }, children: [] },
        ]
      },
      { path: '/test22', name: 'test22', meta: { title: 'test22' }, children: [] },
      { path: '/test23', name: 'test23', meta: { title: 'test23' }, children: [] },
      { path: '/test24', name: 'test24', meta: { title: 'test24' }, children: [] },
    ],
  },
  { path: '/test3', name: 'test3', meta: { title: 'test3', }, children: [], },
]

// 点击menu-item事件,跳转路由
const clickMenuItem: MenuProps['onClick'] = ({ key }) => {
  if (key == selectedKeys.value[0]) return
  console.log('router push')
}
</script>

<style scoped lang="less">

</style>

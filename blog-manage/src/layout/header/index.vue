<template>
  <a-layout-header
    :style="{ background: '#fff', paddingLeft: '20px', paddingRight: '20px', borderBottom: '1px solid #ddd', height: '50px' }"
    class="flex items-center justify-between">
    <a-space size="middle">
      <!-- 控制侧边菜单收缩 -->
      <menu-unfold-outlined
        v-if="collapsed"
        class="trigger"
        @click="$emit('update:collapsed', !collapsed)" />
      <menu-fold-outlined v-else class="trigger" @click="$emit('update:collapsed', !collapsed)" />
      <!-- 面包屑 -->
      <Breadcrumb />
    </a-space>
    <a-space>
      <div class="flex items-center">
        <a-dropdown>
          <div class="w-30px overflow-hidden rounded-1">
            <img src="src/assets/images/logo.png" alt="" class="w-full">
          </div>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <span>用户设置</span>
              </a-menu-item>
              <a-menu-item>
                <span @click="logout">退出登录</span>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
        <span class="ml-10px">user1</span>
      </div>
    </a-space>
  </a-layout-header>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue'
import Breadcrumb from './components/breadcrumb.vue'

defineProps({
  collapsed: {
    type: Boolean,
  }
})

const userStore = useUserStore()
const router = useRouter()
const logout = () => {
  userStore.logout()
  router.replace('/login')
}
</script>

<style scoped lang="less">

</style>

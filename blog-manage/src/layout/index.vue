<template>
  <a-layout class="flex h-100vh">
    <!-- menu -->
    <a-layout-sider
      :trigger="null"
      :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }"
      collapsible
      class="sider-box">
      <Logo />
      <AsideMenu />
    </a-layout-sider>
    <a-layout theme="light">
      <!-- header -->
      <PageHeader></PageHeader>
      <!-- content -->
      <a-layout-content>
        <TabsView />
      </a-layout-content>
      <PageFooter />
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import AsideMenu from './menu/index.vue'
import PageHeader from './header/index.vue'
import PageFooter from './footer/index.vue'
import TabsView from './tabs/index.vue'
import Logo from './logo/index.vue'

// const collapsed = ref<boolean>(false)

</script>

<style scoped lang="less">
.sider-box {

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>

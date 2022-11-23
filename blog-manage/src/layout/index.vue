<template>
  <a-layout class="h-100vh overflow-hidden">
    <!-- menu -->
    <a-layout-sider
      v-model:collapsed="collapsed"
      collapsible
      :trigger="null"
      class="sider-box overflow-auto">
      <Logo />
      <AsideMenu v-model:collapsed="collapsed" />
    </a-layout-sider>
    <a-layout>
      <!-- header -->
      <PageHeader v-model:collapsed="collapsed"></PageHeader>
      <!-- content -->
      <a-layout-content class="flex flex-col">
        <TabsView />
      </a-layout-content>
      <!-- <PageFooter /> -->
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import AsideMenu from './menu/index.vue'
import PageHeader from './header/index.vue'
// import PageFooter from './footer/index.vue'
import TabsView from './tabs/index.vue'
import Logo from './logo/index.vue'

const collapsed = ref<boolean>(false)
</script>

<style scoped lang="less">
.sider-box {

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>

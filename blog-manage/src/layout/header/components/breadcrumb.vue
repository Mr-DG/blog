<template>
  <a-breadcrumb :routes="routes">
    <template #itemRender="{ route }">
      <span v-if="routes.indexOf(route) === routes.length - 1">
        {{ route.meta.title }}
      </span>
      <router-link v-else :to="route.path">
        {{ route.meta.title }}
      </router-link>
    </template>
  </a-breadcrumb>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores'

const route = useRoute()
const userState = useUserStore()
const routes = computed(() => {
  return [...route.matched]
})
// 首页下面的children没有对应的路由，需要添加一下
routes.value[0].children = userState.menus
</script>

<style scoped lang="less">

</style>

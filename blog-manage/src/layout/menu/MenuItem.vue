<template>
  <template v-if="menuInfo?.children?.length === 0">
    <a-menu-item :key="menuInfo?.path">
      <template #icon>
        <!-- <MailOutlined /> -->
      </template>
      {{ menuInfo?.meta?.title }}
    </a-menu-item>
  </template>
  <template v-else>
    <a-sub-menu :key="menuInfo?.path">
      <template #icon>
        <!-- <AppstoreOutlined /> -->
      </template>
      <template #title>{{ menuInfo?.meta?.title }}</template>
      <template v-for="item in menuInfo?.children">
        <MenuItem :menuInfo="item" />
      </template>
    </a-sub-menu>
  </template>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

defineProps({
  menuInfo: {
    type: Object as PropType<RouteRecordRaw>
  }
})

const clickMenuItem = (path: string | undefined) => {
  console.log(path)
}
</script>

<style scoped lang="less">

</style>

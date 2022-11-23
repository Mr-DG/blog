<template>
  <template v-if="menuInfo.children?.length === 0">
    <a-menu-item :key="menuInfo.path">
      <template #icon>
        <MyIcon :type="menuInfo.meta?.icon" />
      </template>
      {{ menuInfo.meta?.title }}
    </a-menu-item>
  </template>
  <template v-else>
    <a-sub-menu :key="menuInfo.path">
      <template #icon>
        <MyIcon :type="menuInfo.meta?.icon" />
      </template>
      <template #title>{{ menuInfo.meta?.title }}</template>
      <template v-for="item in menuInfo.children">
        <MenuItem :menuInfo="item" />
      </template>
    </a-sub-menu>
  </template>
</template>

<script setup lang="ts">
import { createFromIconfontCN } from '@ant-design/icons-vue'
import type { RouteRecordRaw } from 'vue-router'
const MyIcon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_2759908_og35pl9r93p.js',
})

interface Props {
  menuInfo: RouteRecordRaw
}
defineProps<Props>()
</script>

<style scoped lang="less">

</style>

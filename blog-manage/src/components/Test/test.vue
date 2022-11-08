<template>
  <!-- ref自动引入 -->
  <h1>Count: {{ count }}</h1>
  <button @click="count++">+1</button>
  <!-- ant design 按需引入 -->
  <a-button type="primary">Primary Button</a-button>
  <!-- vite icon引入 -->
  <TestIcon class="test" />
</template>

<script setup lang="ts">
import TestIcon from 'assets/icon/test.svg?component'
const count = ref(0)
// env
console.log(import.meta.env.VITE_PROXY_URL)
</script>
<!-- less使用 -->
<style scoped lang="less">
.test {
  fill: red;

  &:hover {
    fill: green;
  }
}
</style>

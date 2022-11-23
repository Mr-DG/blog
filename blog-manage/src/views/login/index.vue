<template>
  <div class="flex items-center justify-center h-screen p-10">
    <div class="w-400px h-360px p-10 border-dark-500 border-width-1px rounded-2xl">
      <a-form
        :model="formState"
        :label-col="{ span: 6 }"
        layout="vertical"
        @finish="onFinish">
        <a-form-item
          label="用户名"
          name="username"
          :rules="[{ required: true, message: '请输入用户名！' }]">
          <a-input v-model:value="formState.username" />
        </a-form-item>
        <a-form-item
          label="密码"
          name="password"
          :rules="[{ required: true, message: '请输入密码！' }]">
          <a-input-password v-model:value="formState.password" />
        </a-form-item>
        <a-form-item name="remember">
          <a-checkbox v-model:checked="formState.remember">记住密码</a-checkbox>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit">登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TOKEN_KEY } from '@/constant/index'
import { message } from 'ant-design-vue'

const router = useRouter()

interface FormState {
  username: string
  password: string
  remember: boolean
}
const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true,
})

const onFinish = (values: any) => {
  // 发送登录请求获取token
  localStorage.setItem(TOKEN_KEY, '123123123123')
  message.success('登录成功')
  router.push('/')
}
</script>

<style scoped lang="less">

</style>

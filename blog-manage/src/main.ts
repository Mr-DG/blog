import 'virtual:windi.css'
import 'ant-design-vue/es/message/style/css'
import 'assets/styles/global.less'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import '@/utils/index'

const app = createApp(App)

const setupApp = () => {
  app.use(createPinia())
  // 挂载路由
  app.use(router)
  // 挂载app
  app.mount('#app')
  if (true) {
    console.log(123)
  }
}


setupApp()


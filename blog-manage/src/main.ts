import 'virtual:windi.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'

const app = createApp(App)

const setupApp = () => {
  app.use(createPinia())
  // 挂载路由
  app.use(router)
  // 挂载app
  app.mount('#app')
}
setupApp()


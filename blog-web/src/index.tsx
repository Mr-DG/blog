import ReactDOM from 'react-dom/client'
// reset重置样式，common公共样式
import 'assets/styles/reset.css'
import 'assets/styles/common.less'
// 字体图标
import 'assets/iconfont/iconfont.css'
import App from './App'
// import App from './App'
import { Provider } from 'react-redux'
import { store } from './store'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

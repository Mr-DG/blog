import { configureStore } from '@reduxjs/toolkit'
import backTop from './modules/backTop'

export const store = configureStore({
  reducer: {
    backTop
  }
})

// 获取dispatch的类型
export type AppDispatch = typeof store.dispatch
// 获取store的类型
export type RootState = ReturnType<typeof store.getState>
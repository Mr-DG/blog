import { createSlice } from "@reduxjs/toolkit"

interface backTopState {
  isShow: boolean,
  menuIsShow: boolean
}

const initialState: backTopState = {
  isShow: false,      // 返回顶部按钮
  menuIsShow: false   // 屏幕小于1000px下是展开的侧边菜单
}

export const backTopSlice = createSlice({
  name: 'backTop',
  initialState,
  reducers: {
    show: state => {
      state.isShow = true
    },
    hidden: state => {
      state.isShow = false
    },
    menuShow: state => {
      state.menuIsShow = true
    },
    menuHidden: state => {
      state.menuIsShow = false
    }
  }
})

export const { show, hidden, menuShow, menuHidden } = backTopSlice.actions
export default backTopSlice.reducer
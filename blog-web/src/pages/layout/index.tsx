import './index.less'
import HeaderNav from 'components/HeaderNav'
import BackTop from 'components/BackTop'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppDispatch } from 'store/hooks'
// 控制BackTop组件现实隐藏的两个action
import { show, hidden } from 'store/modules/backTop'

export default function Layout() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    // 监听滚动，控制bakcTop现实隐藏
    document.addEventListener('scroll', () => {
      // 获取垂直滚动的距离
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 300) {
        dispatch(show())
      } else {
        dispatch(hidden())
      }
    })
  }, [dispatch])

  return (
    <div className='layout'>
      <HeaderNav />
      <BackTop />
      <Menu />
      <Outlet />
      <Footer />
    </div>
  )
}

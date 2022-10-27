import { useState, useEffect } from 'react'
import './index.less'
import { Link, useLocation } from 'react-router-dom'
import { useAppDispatch } from 'store/hooks'
import { menuShow } from 'store/modules/backTop'

const list = [
  { id: 0, name: "首页", toURL: '/' },
  { id: 1, name: "文章", toURL: '/article' },
  { id: 2, name: "项目", toURL: '/project' },
  { id: 3, name: "空间", toURL: '/space' },
  { id: 4, name: "关于", toURL: '/about' }
]
export default function HeaderNav() {

  const [id, setID] = useState(0)

  const handleClick = (id: number) => {
    setID(id)
  }

  // 显示menu
  const dispatch = useAppDispatch()
  const showMenu = () => {
    dispatch(menuShow())
    // 禁止页面滚动
    document.body.style.overflow = 'hidden'
  }

  const s = useLocation()

  useEffect(() => {
    for (let i = 0; i < list.length; i++) {
      if (list[i].toURL === s.pathname) {
        setID(list[i].id)
        break
      }
    }
  }, [s])

  return (
    <div className='header-nav'>
      {/* glass是毛玻璃 */}
      <div className="glass"></div>
      <div className='main header-container flex'>
        <div className='header-left flex fw600'>
          DiBlog
        </div>
        <div className='header-mid'>
          <ul className='flex jcc aic'>
            {
              list.map(item => {
                return <Link
                  to={item.toURL}
                  key={item.id}
                  onClick={() => handleClick(item.id)}>
                  <li className={[`${item.id === id ? "active" : ""}`, 'gray'].join(' ')} >
                    {item.name}
                  </li>
                </Link>
              })
            }
          </ul>
        </div>
        <div className='header-right flex aic'>
          <div className='search icon-btn flex jcc aic'>
            <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2646" width="64" height="64"><path d="M966.4 924.8l-230.4-227.2c60.8-67.2 96-156.8 96-256 0-217.6-176-390.4-390.4-390.4-217.6 0-390.4 176-390.4 390.4 0 217.6 176 390.4 390.4 390.4 99.2 0 188.8-35.2 256-96l230.4 227.2c9.6 9.6 28.8 9.6 38.4 0C979.2 950.4 979.2 934.4 966.4 924.8zM102.4 441.6c0-185.6 150.4-339.2 339.2-339.2s339.2 150.4 339.2 339.2c0 89.6-35.2 172.8-92.8 233.6-3.2 0-3.2 3.2-6.4 3.2-3.2 3.2-3.2 3.2-3.2 6.4-60.8 57.6-144 92.8-233.6 92.8C256 780.8 102.4 627.2 102.4 441.6z" p-id="2647" fill="#ffffff"></path></svg>
          </div>
          <div className='drawer icon-btn flex jcc aic' onClick={() => { showMenu() }}>
            <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="915" width="64" height="64"><path d="M160 240c-8.96 0-16-7.04-16-16s7.04-16 16-16h704c8.96 0 16 7.04 16 16s-7.04 16-16 16H160z" fill="#ffffff" p-id="916"></path><path d="M864 192H160c-17.6 0-32 14.4-32 32s14.4 32 32 32h704c17.6 0 32-14.4 32-32s-14.4-32-32-32z" fill="#ffffff" p-id="917"></path><path d="M160 528c-8.96 0-16-7.04-16-16s7.04-16 16-16h704c8.96 0 16 7.04 16 16s-7.04 16-16 16H160z" fill="#ffffff" p-id="918"></path><path d="M864 480H160c-17.6 0-32 14.4-32 32s14.4 32 32 32h704c17.6 0 32-14.4 32-32s-14.4-32-32-32z" fill="#ffffff" p-id="919"></path><path d="M160 816c-8.96 0-16-7.04-16-16s7.04-16 16-16h704c8.96 0 16 7.04 16 16s-7.04 16-16 16H160z" fill="#ffffff" p-id="920"></path><path d="M864 768H160c-17.6 0-32 14.4-32 32s14.4 32 32 32h704c17.6 0 32-14.4 32-32s-14.4-32-32-32z" fill="#ffffff" p-id="921"></path></svg>
          </div>
        </div>
      </div>
    </div >
  )
}

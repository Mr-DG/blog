import './index.less'
import { useAppSelector, useAppDispatch } from 'store/hooks'
import { menuHidden } from 'store/modules/backTop'
import avatar from 'assets/imgs/avatar.jpg'

export default function Menu() {
  const menuIsShow = useAppSelector(state => state.backTop.menuIsShow)

  // 隐藏menu
  const dispatch = useAppDispatch()
  const hiddenMenu = () => {
    dispatch(menuHidden())
    document.body.style.overflow = ''
  }

  return (
    <>
      {
        menuIsShow
          ? <div className='menu' >
            <div className="menu-mark" onClick={() => { hiddenMenu() }}></div>
            <div className='menu-box'>
              <div className='menu-header flex fdc aic'>
                <div className="menu-avatar br50 flex">
                  <img src={avatar} alt="" />
                </div>
                <div className="menu-article-message flex jcsa f20 ">
                  <div className="menu-message-count">
                    <div>文章</div>
                    <div>30</div>
                  </div>
                  <div className="menu-message-count">
                    <div>标签</div>
                    <div>15</div>
                  </div>
                  <div className="menu-message-count">
                    <div>分类</div>
                    <div>3</div>
                  </div>
                </div>
              </div>
              <div className="menu-list f20 flex fdc aic">
                <div className='menu-item br10 flex jcc aic'><span className='iconfont menu-icon'>&#xe8c6;</span><span>首页</span></div>
                <div className='menu-item br10 flex jcc aic'><span className='iconfont menu-icon'>&#xe6a6;</span><span>文章</span></div>
                <div className='menu-item br10 flex jcc aic'><span className='iconfont menu-icon'>&#xe60a;</span><span>项目</span></div>
                <div className='menu-item br10 flex jcc aic'><span className='iconfont menu-icon'>&#xe89f;</span><span>空间</span></div>
                <div className='menu-item br10 flex jcc aic'><span className='iconfont menu-icon'>&#xe78e;</span><span>关于</span></div>
              </div>
            </div>
          </div>
          : ''
      }
    </>
  )
}

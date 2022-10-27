import './index.less'
import { useState, Fragment } from 'react'
import SmallCard from 'components/SmallCard'
export default function HotArticle() {

  const [activeId, setActiveId] = useState(0)
  const tabsList = [
    {
      id: 0,
      name: '热门',
      component: (
        <>
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard line={false} />
        </>
      )
    },
    {
      id: 1,
      name: '最新',
      component: (
        <>
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard line={false} />
        </>
      )
    }
  ]
  const handleClick = (id: number) => {
    setActiveId(id)
  }

  return (
    <div className="hot br10">
      <div className='hot-tabs flex jcc'>
        {
          tabsList.map(item => {
            return (
              <div
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={activeId === item.id ? 'active' : ''}
              >
                {item.name}
              </div>)
          })
        }
      </div>
      <div className='hot-list flex fdc jca'>
        {
          tabsList.map(item => {
            return (
              <Fragment key={item.id}>
                {
                  activeId === item.id && item.component
                }
              </Fragment>
            )
          })
        }
      </div>
    </div>
  )
}

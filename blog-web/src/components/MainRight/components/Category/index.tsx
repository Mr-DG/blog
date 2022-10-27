import SmallModule from "components/SmallModule"
import './index.less'
import { Fragment } from 'react'

export default function Category() {

  const categoryList = [
    { id: 1, name: '前端', num: 5 },
    { id: 2, name: '后端', num: 4 },
    { id: 3, name: '算法', num: 2 },
    { id: 4, name: '生活', num: 1 },
    { id: 5, name: '项目', num: 1 },
    { id: 6, name: '其他', num: 6 }
  ]
  return (
    <>
      <SmallModule title='文章分类'>
        <>
          {
            categoryList.map(item => {
              return (
                <Fragment key={item.id}>
                  <div className="home-category flex">
                    <div className="category-icon">¤`</div>
                    <div className="category-name t3 fw600 pointer">{item.name}</div>
                    <div className="category-count">{`(${item.num})`}</div>
                  </div>
                  <div className="category-line"></div>
                </Fragment>
              )
            })
          }
        </>
      </SmallModule>
    </>
  )
}

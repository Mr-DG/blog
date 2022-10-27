import SmallModule from "components/SmallModule"
import { useState, useEffect } from 'react'
import './index.less'

export default function Label() {

  interface labelLists {
    id: number,
    name: string
  }

  const [labelList, setLabelList] = useState<Array<labelLists>>([])
  useEffect(() => {
    setLabelList([
      { id: 1, name: 'Vue' },
      { id: 2, name: 'React' },
      { id: 3, name: 'Node' },
      { id: 4, name: 'Axios' },
      { id: 5, name: 'React' },
      { id: 6, name: 'Node' },
      { id: 7, name: 'Webpack' },
    ])
  }, [])


  return (
    <div style={{ marginTop: '50px' }}>
      <SmallModule title="标签">
        <div className="label-box flex">
          {
            labelList.map(item => {
              return <div className="label-btn br10 pointer" key={item.id}>{item.name}</div>
            })}
        </div>
      </SmallModule>
    </div>
  )
}

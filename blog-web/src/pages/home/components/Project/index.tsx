import HomeModule from 'components/HomeModule'
import './index.less'
import VCard from 'components/VCard'
import SmallCard from 'components/SmallCard'

export default function Project() {
  return (
    <HomeModule title="项目">
      <div className='home-project flex'>
        <div className='project-left'>
          <div style={{ "marginBottom": '40px' }}><VCard /></div>
          <SmallCard />
          <SmallCard line={false} />
        </div>
        <div className="project-right">
          <div style={{ "marginBottom": '40px' }}><VCard /></div>
          <SmallCard />
          <SmallCard line={false} />
        </div>
      </div>
    </HomeModule>
  )
}

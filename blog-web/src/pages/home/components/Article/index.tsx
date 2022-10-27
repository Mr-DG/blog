import VCard from 'components/VCard'
import SmallCard from 'components/SmallCard'
import './index.less'
import HomeModule from 'components/HomeModule'

export default function Article() {
  return (
    <HomeModule title="文章">
      <div className='home-article flex'>
        <div className='home-article-left'>
          <VCard />
        </div>
        <div className='home-article-right flex fdc jcsb'>
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard line={false} />
        </div>
      </div>
    </HomeModule>
  )
}

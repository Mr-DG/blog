import Banner from './components/Banner'
import Article from './components/Article'
import Project from './components/Project'
import Space from './components/Space'
import HotArticle from 'components/MainRight/components/HotArticle'
import MainRight from 'components/MainRight'
import './index.less'
export default function index() {
  return (
    <div className="home flex">
      <div className="main-left">
        <Banner />
        <div className='hot-article-small-screen'>
          <HotArticle />
        </div>
        <Article />
        <Project />
        <Space />
      </div>
      <MainRight />
    </div>
  )
}
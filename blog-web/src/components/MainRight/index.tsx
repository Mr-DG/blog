import './index.less'
import About from './components/About'
import Category from './components/Category'
import WebData from './components/WebData'
import Label from './components/Label'
import HotArticle from './components/HotArticle'

export default function MainRight() {
  return (
    <div className="main-right">
      <HotArticle />
      <About />
      <div className='right-sticky'>
        <Category />
        <WebData />
        <Label />
      </div>
    </div>
  )
}

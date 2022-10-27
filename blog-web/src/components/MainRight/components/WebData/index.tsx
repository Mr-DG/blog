import './index.less'
import SmallModule from 'components/SmallModule'

export default function WebData() {
  return (
    <div style={{ marginTop: '50px' }}>
      <SmallModule title='网站数据'>
        <div className='web-data'>
          <div className='flex data-item'>
            <div className='data-name'>文章数目：</div>
            <div className='data-value'>38</div>
          </div>
          <div className='flex data-item'>
            <div className='data-name'>已运行时间：</div>
            <div className='data-value'>365天</div>
          </div>
          <div className='flex data-item'>
            <div className='data-name'>本站总访问量：</div>
            <div className='data-value'>325543</div>
          </div>
          <div className='flex data-item'>
            <div className='data-name'>最近更新时间：</div>
            <div className='data-value'>3小时前</div>
          </div>
        </div>
      </SmallModule>
    </div>
  )
}

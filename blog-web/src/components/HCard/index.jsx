import './index.less'
import HCardImg from 'assets/imgs/h-card-img.jpg'
export default function HCard({ line = true }) {
  return (
    <>
      <div className='h-card'>
        <div className='flex'>
          <div className='h-card-left br10'><img src={HCardImg} alt="" /></div>
          <div className='h-card-right'>
            <div className='h-card-info flex gray d'>Zed <p className='fw600'>·</p> 前端 <p className='fw600'>·</p> 2022-10-29</div>
            <h2 className='h-card-title t2 fw600 l15'>The Next 60 Things To Immediately Do About Building</h2>
            <p className='gray l17 c'>A wonderful serenity has taken possession of my entire soul,like these sweet mornings</p>
            <span className='cpink h-card-more'>more</span>
          </div>
        </div>
      </div>
      <div className={line ? 'h-card-line' : ''}></div>
    </>
  )
}

import './index.less'
import CardImg from 'assets/imgs/card-img.jpg'

export default function VCard() {
  return (
    <div className='v-card'>
      <div className='v-card-img br10'><img src={CardImg} alt="" /></div>
      <div className='v-card-info flex gray d'>前端<p className="fw600">·</p> 2022-10-19</div>
      <h2 className="v-card-header t2 fw600">15 Unheard Ways To Achieve Greater Walker</h2>
      <p className="v-card-content c gray">A wonderful serenity has taken possession of my entire soul,like these sweet mornings of spring which I enjoy</p>
    </div>
  )
}

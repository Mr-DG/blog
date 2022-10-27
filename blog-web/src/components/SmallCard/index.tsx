import './index.less'
import smallImg from 'assets/imgs/small-card.jpg'

export default function SmallCard({ line = true }) {
  return (
    <>
      <div className='small-card'>
        <div className='flex'>
          <div className='small-card-img br10'><img src={smallImg} alt="" /></div>
          <div className="small-card-info">
            <div className="small-card-header f16 fw600 t3">
              3 Easy Ways To Make Your iPhone Faster
            </div>
            <div className="small-card-time d gray">2022-10-19</div>
          </div>
        </div>
      </div>
      <div className={line ? 'small-card-line' : ''}></div>
    </>
  )
}

import './index.less'
export default function HomeModule(props) {
  return (
    <div>
      <h1 className='home-module-header t1 fw600'>
        {props.title}
        <br />
        {<svg width="33" height="6">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FE4F70"></stop>
              <stop offset="100%" stopColor="#FFA387"></stop>
            </linearGradient>
          </defs>
          <path d="M33 1c-3.3 0-3.3 4-6.598 4C23.1 5 23.1 1 19.8 1c-3.3 0-3.3 4-6.599 4-3.3 0-3.3-4-6.6-4S3.303 5 0 5" stroke="url(#gradient)" strokeWidth="2" fill="none"></path>
        </svg>}
      </h1>
      <div className='home-module br10'>
        {props.children}
      </div>
    </div>
  )
}

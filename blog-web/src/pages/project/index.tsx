import MainRight from "components/MainRight"
import VCard from 'components/VCard'
import HomeModule from 'components/HomeModule'

export default function About() {
  return (
    <div className="flex">
      <div className="main-left">
        <HomeModule noHeader={true}>
          <div className='home-project flex'>
            <div className='project-left'>
              <div style={{ "marginBottom": '40px' }}><VCard /></div>
              <div style={{ "marginBottom": '40px' }}><VCard /></div>
              <div style={{ "marginBottom": '40px' }}><VCard /></div>
            </div>
            <div className="project-right">
              <div style={{ "marginBottom": '40px' }}><VCard /></div>
              <div style={{ "marginBottom": '40px' }}><VCard /></div>
            </div>
          </div>
        </HomeModule>
      </div>
      <MainRight />
    </div>
  )
}

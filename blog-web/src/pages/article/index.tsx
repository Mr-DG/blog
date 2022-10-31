import MainRight from "components/MainRight"
import HCard from 'components/HCard'
import HomeModule from 'components/HomeModule'

export default function Article() {
  return (
    <div className="flex">
      <div className="main-left">
        <HomeModule>
          <HCard />
          <HCard />
          <HCard />
          <HCard />
          <HCard />
          <HCard />
          <HCard />
          <HCard />
          <HCard />
        </HomeModule>
      </div>
      <MainRight />
    </div>
  )
}

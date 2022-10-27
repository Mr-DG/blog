import HCard from "components/HCard"
import HomeModule from "components/HomeModule"

export default function Space() {
  return (
    <HomeModule title="空间">
      <HCard />
      <HCard />
      <HCard />
      <HCard line={false} />
    </HomeModule>
  )
}

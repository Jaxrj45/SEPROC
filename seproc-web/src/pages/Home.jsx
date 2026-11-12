import HomeHero from '../components/sections/home/HomeHero'
import HomeIntro from '../components/sections/home/HomeIntro'
import HomeServices from '../components/sections/home/HomeServices'
import HomeProjects from '../components/sections/home/HomeProjects'
import HomeCta from '../components/sections/home/HomeCta'

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeIntro />
      <HomeServices />
      <HomeProjects />
      <HomeCta />
    </>
  )
}
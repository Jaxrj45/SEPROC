import Seo from '../components/ui/Seo'
import HomeHero from '../components/sections/home/HomeHero'
import HomeIntro from '../components/sections/home/HomeIntro'
import HomeServices from '../components/sections/home/HomeServices'
import HomeProjects from '../components/sections/home/HomeProjects'
import HomeCta from '../components/sections/home/HomeCta'
import { organizationJsonLd } from '../data/seo'

export default function Home() {
  return (
    <>
      <Seo jsonLd={organizationJsonLd} />
      <HomeHero />
      <HomeIntro />
      <HomeServices />
      <HomeProjects />
      <HomeCta />
    </>
  )
}
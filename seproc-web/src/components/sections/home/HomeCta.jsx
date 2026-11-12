import CtaSection from '../CtaSection'
import { homeContent } from '../../../data/home'

export default function HomeCta() {
  const { cta } = homeContent

  return <CtaSection title={cta.title} text={cta.text} />
}
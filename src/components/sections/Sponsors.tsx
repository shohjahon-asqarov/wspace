import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import AppleLogo from '../../../public/img/Apple.svg'
import MicrosoftLogo from '../../../public/img/Microsoft.svg'
import SlackLogo from '../../../public/img/Slack_Technologies_Logo 1.svg'
import GoogleLogo from '../../../public/img/Google.svg'
import { FadeInUp, StaggerContainer, StaggerItem, HoverScale } from '@/components/ui/Animations'

const Sponsors = () => {
  const { t } = useTranslation()

  const sponsors = [
    { src: AppleLogo, alt: "Apple logo", width: 55, height: 68 },
    { src: MicrosoftLogo, alt: "Microsoft logo", width: 287, height: 62 },
    { src: SlackLogo, alt: "Slack logo", width: 280, height: 71 },
    { src: GoogleLogo, alt: "Google logo", width: 211, height: 70 }
  ]

  return (
    <section className="lg:py-[140px] md:py-[100px] !py-10 mb-10">
      <div className="container">
        <FadeInUp delay={0.2}>
          <h2 className="font-bold text-4xl md:text-[54px] lg:text-[64px] text-center">
            {t('sponsors.title')}
          </h2>
        </FadeInUp>

        <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 md:mt-24 gap-5 lg:gap-10 gap-y-20 py-10">
          {sponsors.map((sponsor, index) => (
            <StaggerItem key={index}>
              <HoverScale scale={1.1}>
                <Image
                  className="mx-auto md:mx-auto transition-all duration-300 hover:opacity-80"
                  width={sponsor.width}
                  height={sponsor.height}
                  src={sponsor.src}
                  alt={sponsor.alt}
                />
              </HoverScale>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export default Sponsors
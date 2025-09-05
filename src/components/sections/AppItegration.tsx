import Image from "next/image"
import { useTranslation } from 'react-i18next'
import AppsImage from '../../../public/img/Apps.svg'
import ArrowIcon from '../../../public/icons/Icon.svg'
import AppBg from '../../../public/App-Bg.png'
import { FadeInUp, FadeInLeft, FadeInRight, HoverScale } from '@/components/ui/Animations'

const AppIntegration = () => {
  const { t } = useTranslation()

  return (
    <section style={{ backgroundImage: `url(${AppBg.src})`}} className="color lg:py-[140px] md:py-[100px] py-20">
      <div className="container grid lg:grid-cols-2 text-center lg:text-left gap-8 lg:gap-8 items-center">
        <FadeInLeft delay={0.2}>
          <Image
            className="w-full scale-90"
            width={582}
            height={470}
            src={AppsImage}
            alt="whitepace"
          />
        </FadeInLeft>

        <div>
          <FadeInUp delay={0.4}>
            <h2 className="font-bold text-4xl md:text-[54px] lg:text-[64px] text-white">
              {t('appIntegration.title')}
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.6}>
            <p className="text-white mt-6">
              {t('appIntegration.subtitle')}
            </p>
          </FadeInUp>

          <FadeInUp delay={0.8}>
            <HoverScale scale={1.05}>
              <button className="flex defoult_btn mt-14 mx-auto lg:mx-0">
                {t('appIntegration.readMore')}
                <Image
                  className="ml-2.5"
                  width={14}
                  height={14}
                  src={ArrowIcon}
                  alt="arrow icon"
                />
              </button>
            </HoverScale>
          </FadeInUp>
        </div>
      </div>
    </section>
  )
}

export default AppIntegration
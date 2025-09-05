import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import ArrowIcon from '../../../public/icons/Icon.svg'
import { FadeInUp, HoverScale } from '@/components/ui/Animations'

const AnyWhere = () => {
  const { t } = useTranslation()

  return (
    <section className="color lg:py-[140px] md:py-[100px] py-20">
      <div className="container lg:text-center text-left">
        <FadeInUp delay={0.2}>
          <h2 className="font-bold text-4xl md:text-[54px] lg:text-[64px] text-white">
            {t('anywhere.title')}
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.4}>
          <p className="text-white mt-6">
            {t('anywhere.subtitle')}
          </p>
        </FadeInUp>

        <FadeInUp delay={0.6}>
          <HoverScale scale={1.05}>
            <button className="defoult_btn mt-14">
              {t('anywhere.readMore')}
              <Image
                className="inline-block"
                width={14}
                height={14}
                src={ArrowIcon}
                alt="arrow icon"
              />
            </button>
          </HoverScale>
        </FadeInUp>
      </div>
    </section>
  )
}

export default AnyWhere
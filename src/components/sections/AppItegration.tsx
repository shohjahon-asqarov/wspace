import Image from "next/image"
import { useTranslation } from 'react-i18next'
import AppsImage from '../../../public/img/Apps.svg'
import ArrowIcon from '../../../public/icons/Icon.svg'

import AppBg from '../../../public/App-Bg.png'

const AppIntegration = () => {
  const { t } = useTranslation()

  return (
    <section style={{ backgroundImage: `url(${AppBg.src})`}} className="color lg:py-[140px] md:py-[100px] py-20">
      <div className="container grid lg:grid-cols-2 text-center lg:text-left gap-8 lg:gap-8 items-center">
        <Image
          className="w-full scale-90"
          width={582}
          height={470}
          src={AppsImage}
          alt="whitepace"
        />

        <div>
          <h2 className="font-bold text-4xl md:text-[54px] lg:text-[64px] text-white">
            {t('appIntegration.title')}
          </h2>

          <p className="text-white mt-6">
            {t('appIntegration.subtitle')}
          </p>

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
        </div>
      </div>
    </section>
  )
}

export default AppIntegration
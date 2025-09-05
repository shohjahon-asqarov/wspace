import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import ArrowIcon from '../../../public/icons/Icon.svg'

const AnyWhere = () => {
  const { t } = useTranslation()

  return (
    <section className="color lg:py-[140px] md:py-[100px] py-20">
      <div className="container lg:text-center text-left">
        <h2 className="font-bold text-4xl md:text-[54px] lg:text-[64px] text-white">
          {t('anywhere.title')}
        </h2>

        <p className="text-white mt-6">
          {t('anywhere.subtitle')}
        </p>

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
      </div>
    </section>
  )
}

export default AnyWhere
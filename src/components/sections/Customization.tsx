import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import CustomizeImg from '../../../public/img/customize.img.jpg'
import ArrovRight from '../ui/ArrovRight'

const Customization = () => {
  const { t } = useTranslation()

  return (
    <section className="lg:py-[140px] md:py-[100px] py-20">
      <div className="container text-center lg:text-left grid lg:grid-cols-2 items-center gap-8">
        <div className="pt-12 order-2 lg:order-1">
          <h2 className="font-bold text-4xl md:text-[54px] lg:text-[64px]">
            {t('customization.title')}
          </h2>

          <p className="defoult_p mt-6 mb-15">
            {t('customization.subtitle')}
          </p>

          <button className="defoult_btn">
            {t('customization.letsGo')}
            <ArrovRight />
          </button>
        </div>

        <Image
          className="w-full order-1 lg:order-2"
          width={686}
          height={479}
          src={CustomizeImg}
          alt="customize img"
        />
      </div>
    </section>
  )
}

export default Customization
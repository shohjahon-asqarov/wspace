import Image from "next/image"
import { useTranslation } from 'react-i18next'
import Shield from '../../../public/img/Element.svg'
import ArrowIcon from '../../../public/icons/Icon.svg'

const DataSecurity = () => {
  const { t } = useTranslation()

  return (
    <section className="lg:py-[140px] md:py-[100px] py-20">
      <div className="container grid lg:grid-cols-2 lg:gap-0 gap-8 lg:text-left items-center">
        <div className="text-center lg:text-left order-2 lg:order-1">
          <h2 className="font-bold text-4xl md:text-[54px] lg:text-[64px]">
            {t('dataSecurity.title')}
          </h2>

          <p className="defoult_p mt-6">
            {t('dataSecurity.subtitle')}
          </p>

          <button className="flex defoult_btn mt-14 mx-auto lg:ml-0">
            {t('dataSecurity.readMore')}
            <Image
              className="ml-2.5"
              width={14}
              height={14}
              src={ArrowIcon}
              alt="arrow icon"
            />
          </button>
        </div>

        <div className="order-1 lg:order-2">
          <Image
            className="md:mx-auto"
            width={681}
            height={381}
            src={Shield}
            alt="whitepace"
          />
        </div>
      </div>
    </section>
  )
}

export default DataSecurity
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import WorkingImg from '../../../public/img/working.png'
import ArrovRight from '../ui/ArrovRight'

const WorkTogether = () => {
  const { t } = useTranslation()

  return (
    <div className="container grid lg:grid-cols-2 text-center lg:text-left gap-8 relative top-24">
      <Image
        className="w-full h-auto scale-75 md:scale-90"
        width={710}
        height={661}
        src={WorkingImg}
        alt="work img"
      />

      <div className="lg:py-[183px] order-[-1] lg:order-2">
        <h2 className="font-bold text-[36px] leading-[56px] md:text-[54px] md:leading-[100%] lg:text-[72px] lg:leading-[100%] tracking-[-0.02em]">
          {t('workTogether.title')}
        </h2>

        <p className="defoult_p mt-6 mb-15">
          {t('workTogether.subtitle')}
        </p>

        <button className="defoult_btn">
          {t('workTogether.tryNow')}
          <ArrovRight />
        </button>
      </div>
    </div>
  )
}

export default WorkTogether
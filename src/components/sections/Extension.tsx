import React from 'react'
import { useTranslation } from 'react-i18next'
import Extension_img from '../../../public/img/extencion.img.jpg'
import Image from 'next/image'
import ArrovRight from '../ui/ArrovRight'

const Extension = () => {
  const { t } = useTranslation()

  return (
    <section className="lg:py-[140px] md:py-[100px] py-20 color mt-32">
      <div className="container text-center lg:text-left grid lg:grid-cols-2 items-center gap-8 gap-y-20">
        <div className='lg:max-w-[528px]'>
          <h2 className="font-bold text-white text-[36px] leading-[56px] md:text-[54px] md:leading-[100%] lg:text-[64px] lg:leading-[100%] tracking-[-0.02em]">
            {t('extension.title')}
          </h2>
          <p className='defoult_p text-white  mt-6 mb-12'>
            {t('extension.subtitle')}
          </p>
          <button className='defoult_btn'>
            {t('extension.letsGo')}
            <ArrovRight />
          </button>
        </div>
        <div>
          <Image className='w-full' src={Extension_img} width={686} height={479} alt='Extension img' />
        </div>
      </div>
    </section>
  )
}

export default Extension
import { useTranslation } from 'react-i18next'
import ArrovRight from "../ui/ArrovRight"
import CheckIcon from "../ui/CheckIcon"

const Pricing = () => {
  const { t } = useTranslation()

  const plans = [
    {
      title: t('pricing.plans.free'),
      price: "$0",
      desc: t('pricing.plans.freeDesc'),
    },
    {
      title: t('pricing.plans.personal'),
      price: "$11.99",
      desc: t('pricing.plans.personalDesc'),
    },
    {
      title: t('pricing.plans.organization'),
      price: "$49.99",
      desc: t('pricing.plans.orgDesc'),
    },
  ]

  return (
    <section className="lg:py-[140px] md:py-[100px] py-20">
      <div className="container">
        <div className="text-center">
          <h2 className="font-bold text-4xl md:text-[54px] lg:text-[64px]">
            {t('pricing.title')}
          </h2>

          <p className="defoult_p mt-6 mb-15">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="max-w-[1520px] mx-auto px-[1px] grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="group rounded-2xl py-[50.5px] pl-11 flex flex-col gap-[28px] border-[1px] border-[#FFE492] text-[#212529]"
            >
              <h3 className="font-semibold text-[24px]">
                {plan.title}
              </h3>

              <p className="font-bold !text-[36px] leading-[100%] tracking-[-0.02em]">
                {plan.price}
              </p>

              <p className="font-medium text-[18px] leading-[23px] tracking-[-0.02em] ">
                {plan.desc}
              </p>

              <ul className="flex flex-col gap-[28px] font-medium text-[18px] leading-[23px] tracking-[-0.02em]">
                {(t('pricing.features', { returnObjects: true }) as string[]).map((feature: string, featureIndex: number) => (
                  <li key={featureIndex} className="flex gap-4 items-center max-w-[384px]">
                    <CheckIcon />
                    <span className="!text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="self-start text-left px-10 py-5 text-[16px] font-medium rounded-lg text-lg bg-white border border-[#FFE492]" >
                {t('pricing.getStarted')}
                <ArrovRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing

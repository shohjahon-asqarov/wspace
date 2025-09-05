import { useTranslation } from 'react-i18next'
import WorkTogether from "./WorkTogether"
import ArrovRight from "../ui/ArrovRight"
import { FadeInUp, FadeInLeft, FadeInRight, HoverScale } from '@/components/ui/Animations'

const ProjectManagement = () => {
  const { t } = useTranslation()

  return (
    <section className="lg:py-[140px] md:py-[100px] pt-10 !pb-0">
      <div className="container grid lg:grid-cols-2 gap-8 text-center lg:text-left">
        <div className="py-17">
          <FadeInUp delay={0.2}>
            <h2 className="font-bold text-4xl md:text-[54px] lg:text-[64px]">
              {t('projectManagement.title')}
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <p className="defoult_p mt-[24px] mb-[60px]">
              {t('projectManagement.subtitle')}
            </p>
          </FadeInUp>

          <FadeInUp delay={0.6}>
            <HoverScale scale={1.05}>
              <button className="defoult_btn">
                {t('projectManagement.getStarted')}
                <ArrovRight />
              </button>
            </HoverScale>
          </FadeInUp>
        </div>

        <FadeInRight delay={0.8}>
          <div className={'bg-[#C4DEFD] w-full h-[547px] rounded-2xl'}></div>
        </FadeInRight>
      </div>

      <WorkTogether />
    </section>
  )
}

export default ProjectManagement
import { useTranslation } from 'react-i18next'
import WorkTogether from "./WorkTogether"
import ArrovRight from "../ui/ArrovRight"

const ProjectManagement = () => {
  const { t } = useTranslation()

  return (
    <section className="lg:py-[140px] md:py-[100px] pt-10 !pb-0">
      <div className="container grid lg:grid-cols-2 gap-8 text-center lg:text-left">
        <div className="py-17">
          <h2 className="font-bold text-4xl md:text-[54px] lg:text-[64px]">
            {t('projectManagement.title')}
          </h2>

          <p className="defoult_p mt-[24px] mb-[60px]">
            {t('projectManagement.subtitle')}
          </p>

          <button className="defoult_btn">
            {t('projectManagement.getStarted')}
            <ArrovRight />
          </button>
        </div>

        {/*<Image */}
        {/*  className="w-full" */}
        {/*  width={719} */}
        {/*  height={448} */}
        {/*  src={ProjectImg} */}
        {/*  alt="project img" */}
        {/*/>*/}

        <div className={'bg-[#C4DEFD] w-full h-[547px]'}></div>
      </div>

      <WorkTogether />
    </section>
  )
}

export default ProjectManagement
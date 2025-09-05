import Image from "next/image"
import WorkTogether from "./WorkTogether"
import ProjectImg from '../../../public/img/project.img.jpg'
import ArrovRight from "../ui/ArrovRight"

const ProjectManagement = () => {
  return (
    <section className="lg:py-[140px] md:py-[100px] pt-10 !pb-0">
      <div className="container grid lg:grid-cols-2 gap-8 text-center lg:text-left">
        <div className="py-17">
          <h2 className="font-bold text-4xl md:text-[54px] lg:text-[64px]">
            Project <br /> Management
          </h2>

          <p className="defoult_p mt-[24px] mb-[60px]">
            Images, videos, PDFs and audio files are supported. Create math expressions and diagrams
            directly from the app. Take photos with the mobile app and save them to a note.
          </p>

          <button className="defoult_btn">
            Get Started
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
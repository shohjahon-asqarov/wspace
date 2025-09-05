// import Image from 'next/image'
// import HeroImg from '../../../public/img/hero-img.jpg'
import ArrovRight from '../ui/ArrovRight'
import MainBgImg from '../../../public/Main-Bg-Img.png'

const Hero = () => {
  return (
    <section className={`md:!py-[100px] !py-0 color  bg-no-repeat bg-center`} style={{ backgroundImage: `url(${MainBgImg.src})`, minHeight: "calc(100vh - 60px)" }}>
      <div className="container grid lg:grid-cols-2 text-center lg:text-left items-center py-10">
        <div className="flex flex-col items-center lg:items-start py-20">
          <h1 className="text-white font-bold text-[36px] md:text-[54px] lg:text-[64px] leading-[100%]">
            Get More Done with whitepace
          </h1>

          <p className="defoult_p text-white mt-6 mb-10 lg:mb-15">
            Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
          </p>

          <button className="defoult_btn flex items-center gap-4">
            Try Whitepace free
            <ArrovRight />
          </button>
        </div>

        {/*<Image */}
        {/*  className="w-full" */}
        {/*  width={824} */}
        {/*  height={549} */}
        {/*  src={HeroImg} */}
        {/*  alt="hero img" */}
        {/*/>*/}


        <div className={'bg-[#C4DEFD] w-full h-[549px]'}></div>
      </div>
    </section>
  )
}

export default Hero
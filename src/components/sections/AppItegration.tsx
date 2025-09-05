import Image from "next/image"
import AppsImage from '../../../public/img/Apps.svg'
import ArrowIcon from '../../../public/icons/Icon.svg'

import AppBg from '../../../public/App-Bg.png'

const AppIntegration = () => {
  return (
    <section style={{ backgroundImage: `url(${AppBg.src})`}} className="color lg:py-[140px] md:py-[100px] py-20">
      <div className="container grid lg:grid-cols-2 text-center lg:text-left gap-8 lg:gap-8 items-center">
        <Image
          className="w-full scale-90"
          width={582}
          height={470}
          src={AppsImage}
          alt="whitepace"
        />

        <div>
          <h2 className="font-bold text-4xl md:text-[54px] lg:text-[64px] text-white">
            Work with Your Favorite Apps Using whitepace
          </h2>

          <p className="text-white mt-6">
            Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to <br />
            have all the tools you need for your project success.
          </p>

          <button className="flex defoult_btn mt-14 mx-auto lg:mx-0">
            Read more
            <Image
              className="ml-2.5"
              width={14}
              height={14}
              src={ArrowIcon}
              alt="arrow icon"
            />
          </button>
        </div>
      </div>
    </section>
  )
}

export default AppIntegration
import Image from 'next/image'
import ArrowIcon from '../../../public/icons/Icon.svg'

const AnyWhere = () => {
  return (
    <section className="color lg:py-[140px] md:py-[100px] py-20">
      <div className="container lg:text-center text-left">
        <h2 className="font-bold text-4xl md:text-[54px] lg:text-[64px] text-white">
          Your work, everywhere you are
        </h2>

        <p className="text-white mt-6">
          Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and
          OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
        </p>

        <button className="defoult_btn mt-14">
          Read more
          <Image
            className="inline-block"
            width={14}
            height={14}
            src={ArrowIcon}
            alt="arrow icon"
          />
        </button>
      </div>
    </section>
  )
}

export default AnyWhere
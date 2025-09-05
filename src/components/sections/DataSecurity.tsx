import Image from "next/image"
import Shield from '../../../public/img/Element.svg'
import ArrowIcon from '../../../public/icons/Icon.svg'

const DataSecurity = () => {
  return (
    <section className="lg:py-[140px] md:py-[100px] py-20">
      <div className="container grid lg:grid-cols-2 lg:gap-0 gap-9 lg:text-left items-center">
        <div className="text-center lg:text-left order-2 lg:order-1">
          <h2 className="font-bold text-4xl md:text-[54px] lg:text-[64px]">
            100% your data
          </h2>

          <p className="defoult_p mt-6">
            The app is open source and your notes are saved to an open format, so you&apos;ll always have access
            to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but
            yourself can access them.
          </p>

          <button className="flex defoult_btn mt-14 mx-auto lg:ml-0">
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
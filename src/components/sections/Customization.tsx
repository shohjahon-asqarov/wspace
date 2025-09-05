import Image from 'next/image'
import CustomizeImg from '../../../public/img/customize.img.jpg'
import ArrovRight from '../ui/ArrovRight'

const Customization = () => {
  return (
    <section className="lg:py-[140px] md:py-[100px] py-20">
      <div className="container text-center lg:text-left grid lg:grid-cols-2 gap-8">
        <div className="pt-12">
          <h2 className="font-bold text-[36px] leading-[56px] md:text-[54px] md:leading-[100%] lg:text-[64px] lg:leading-[100%] tracking-[-0.02em]">
            Customise it to your needs
          </h2>

          <p className="defoult_p mt-6 mb-15">
            Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown).
            Or create your own scripts and plugins using the Extension API.
          </p>

          <button className="defoult_btn md:mb-[60px] mb-[60px]">
            Let&apos;s go
            <ArrovRight />
          </button>
        </div>

        <Image
          className="w-full"
          width={686}
          height={479}
          src={CustomizeImg}
          alt="customize img"
        />
      </div>
    </section>
  )
}

export default Customization
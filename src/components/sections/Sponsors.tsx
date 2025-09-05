import Image from 'next/image'
import AppleLogo from '../../../public/img/Apple.svg'
import MicrosoftLogo from '../../../public/img/Microsoft.svg'
import SlackLogo from '../../../public/img/Slack_Technologies_Logo 1.svg'
import GoogleLogo from '../../../public/img/Google.svg'

const Sponsors = () => {
  return (
    <section className="lg:py-[140px] md:py-[100px] !py-10 mb-10">
      <div className="container">
        <div>
          <h2 className="font-bold text-4xl md:text-[54px] lg:text-[64px] text-center">
            Our sponsors
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 md:mt-24 gap-5 lg:gap-10 gap-y-20 py-10">
          <Image
            className="mx-auto md:mx-auto"
            width={55}
            height={68}
            src={AppleLogo}
            alt="Apple logo"
          />
          <Image
            className="mx-auto md:mx-auto"
            width={287}
            height={62}
            src={MicrosoftLogo}
            alt="Microsoft logo"
          />
          <Image
            className="mx-auto md:mx-auto"
            width={280}
            height={71}
            src={SlackLogo}
            alt="Slack logo"
          />
          <Image
            className="mx-auto md:mx-auto"
            width={211}
            height={70}
            src={GoogleLogo}
            alt="Google logo"
          />
        </div>
      </div>
    </section>
  )
}

export default Sponsors
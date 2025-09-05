import ArrovRight from "../ui/ArrovRight"
import CheckIcon from "../ui/CheckIcon"

const Pricing = () => {
  const plans = [
    {
      title: "Free",
      price: "$0",
      desc: "Capture ideas and find them quickly",
    },
    {
      title: "Personal",
      price: "$11.99",
      desc: "Keep home and family on track",
    },
    {
      title: "Organization",
      price: "$49.99",
      desc: "Capture ideas and find them quickly",
    },
  ]

  const features = [
    "Sync unlimited devices",
    "10 GB monthly uploads",
    "200 MB max. note size",
    "Customize Home dashboard and access extra widgets",
    "Connect primary Google Calendar account",
    "Add due dates, reminders, and notifications to your tasks",
  ]

  return (
    <section className="lg:py-[140px] md:py-[100px] py-20">
      <div className="container">
        <div className="text-center">
          <h2 className="font-bold text-4xl md:text-[54px] lg:text-[64px]">
            Choose Your Plan
          </h2>

          <p className="defoult_p mt-6 mb-15">
            Whether you want to get organized, keep your personal life on track,
            or boost workplace productivity, Evernote has the  right plan
            for you.
          </p>
        </div>

        <div className="max-w-[1520px] mx-auto px-[1px] grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group rounded-2xl py-[50.5px] pl-6 flex flex-col gap-[28px] border border-[#FFE492] 
                ${index == 1 ? "bg-blue-500" : ""}`}
            >
              <h3 className="font-bold text-[36px] leading-[36px]">
                {plan.title}
              </h3>

              <p className="font-bold text-[36px] leading-[100%] tracking-[-0.02em]">
                {plan.price}
              </p>

              <p className="font-normal text-[16px] leading-[20px] tracking-[-0.02em] text-gray-600">
                {plan.desc}
              </p>

              <ul className="flex flex-col gap-[28px] font-normal text-[16px] leading-[20px] tracking-[-0.02em] text-gray-600">
                {features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex gap-1 items-center">
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="self-start text-left px-10 py-5 rounded-lg font-medium text-lg text-[#4F9CF9] bg-white border border-[#4F9CF9]" >
                Get Started
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

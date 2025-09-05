import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import OldManAvatar from '../../../public/img/Avater 02.svg'
import LongHairAvatar from '../../../public/img/turkish.svg'
import StarIcon from '../../../public/icons/Btn-Star.svg'
import ArrowLeft from '../../../public/icons/Arrow2.svg'
import ArrowRight from '../../../public/icons/Arrow.svg'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Testimonials = () => {
  const { t } = useTranslation()

  const testimonials = [
    {
      id: 1,
      avatar: OldManAvatar,
      text: t('testimonials.testimonial1'),
      name: t('testimonials.name'),
      position: t('testimonials.position'),
      bgColor: "bg-white",
      textColor: "text-gray-800"
    },
    {
      id: 2,
      avatar: LongHairAvatar,
      text: t('testimonials.testimonial1'),
      name: t('testimonials.name'),
      position: t('testimonials.position'),
      bgColor: "bg_color",
      textColor: "text-white"
    },
    {
      id: 3,
      avatar: OldManAvatar,
      text: t('testimonials.testimonial1'),
      name: t('testimonials.name'),
      position: t('testimonials.position'),
      bgColor: "bg_color",
      textColor: "text-white"
    },
    {
      id: 4,
      avatar: OldManAvatar,
      text: t('testimonials.testimonial1'),
      name: t('testimonials.name'),
      position: t('testimonials.position'),
      bgColor: "bg-white",
      textColor: "text-gray-800"
    },
    {
      id: 5,
      avatar: LongHairAvatar,
      text: t('testimonials.testimonial1'),
      name: t('testimonials.name'),
      position: t('testimonials.position'),
      bgColor: "bg_color",
      textColor: "text-white"
    },
    {
      id: 6,
      avatar: OldManAvatar,
      text: t('testimonials.testimonial1'),
      name: t('testimonials.name'),
      position: t('testimonials.position'),
      bgColor: "bg_color",
      textColor: "text-white"
    }
  ]

  const swiperBreakpoints = {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  }

  return (
    <section className="lg:py-[140px] md:py-[100px] py-20">
      <div className="container mx-auto px-4">
        <div>
          <h2 className="font-bold text-4xl md:text-[54px] lg:text-[64px] text-center">
            {t('testimonials.title')}
          </h2>
        </div>

        <div className="mt-16 relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: '.button-next',
              prevEl: '.button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={swiperBreakpoints}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className={`w-full py-10 px-7 rounded-xl shadow-lg ${testimonial.bgColor} ${testimonial.textColor} h-full`}>
                  <Image
                    width={70}
                    height={70}
                    src={testimonial.avatar}
                    alt="testimonial avatar"
                    className="rounded-full"
                  />

                  <p className="mt-9 pr-7 leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  <div className="grid lg:grid-cols-2 mt-8 items-center">
                    <div>
                      <p className="font-black">{testimonial.name}</p>
                      <p>{testimonial.position}</p>
                    </div>

                    <Image
                      className="lg:ml-4 lg:mt-0 mt-5"
                      width={103}
                      height={15}
                      src={StarIcon}
                      alt="rating stars"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Navigation Buttons */}
        <div className="text-center mt-16 hidden lg:flex justify-center space-x-6 md:space-x-10 lg:space-x-24">
          <button className="button-prev w-[60px] h-[60px] md:w-[75px] md:h-[75px] bg-blue-100 rounded-full text-center hover:bg-blue-200 transition-all duration-200 flex justify-center items-center shadow-lg hover:shadow-xl transform hover:scale-105">
            <Image
              width={24}
              height={12}
              src={ArrowLeft}
              alt="previous"
              className="md:w-[29px] md:h-[14px]"
            />
          </button>

          <button className="button-next w-[60px] h-[60px] md:w-[75px] md:h-[75px] bg-blue-100 rounded-full text-center hover:bg-blue-200 transition-all duration-200 flex justify-center items-center shadow-lg hover:shadow-xl transform hover:scale-105">
            <Image
              width={24}
              height={12}
              src={ArrowRight}
              alt="next"
              className="md:w-[29px] md:h-[14px]"
            />
          </button>
        </div>

        {/* Custom Pagination */}
        <div className="swiper-pagination flex md:hidden justify-center gap-3 mt-8"></div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .testimonials-swiper {
          padding-bottom: 40px;
        }
        
        .swiper-pagination {
          position: relative !important;
          bottom: 0 !important;
          margin-top: 20px;
        }
        
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #e5e7eb;
          opacity: 1;
          transition: all 0.3s ease;
          border-radius: 50%;
        }
        
        .swiper-pagination-bullet-active {
          background: #3b82f6;
          transform: scale(1.2);
          box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);
        }
        
        .swiper-slide {
          height: auto;
        }
        
        /* Disable button when at start/end */
        .swiper-button-disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: scale(0.95);
        }
        
        /* Navigation button hover effects */
        .button-prev:hover:not(.swiper-button-disabled),
        .button-next:hover:not(.swiper-button-disabled) {
          background-color: #dbeafe;
          transform: scale(1.05);
        }
      `}</style>
    </section>
  )
}

export default Testimonials


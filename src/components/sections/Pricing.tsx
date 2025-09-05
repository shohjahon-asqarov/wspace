import React from 'react';
import { useTranslation } from 'react-i18next';
import { usePricing } from '@/hooks/useNavigation';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import { H2, H3, P } from '@/components/ui/TextElements';
import Button from '@/components/ui/Button';
import { PricingPlan } from '@/types';
import ArrovRight from "../ui/ArrovRight";
import CheckIcon from "../ui/CheckIcon";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FadeInUp, StaggerContainer, StaggerItem, HoverLift, HoverScale } from '@/components/ui/Animations';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PricingCard: React.FC<{ plan: PricingPlan; index: number }> = ({ plan, index }) => {
  const { t } = useTranslation();
  const isPopular = index === 1;

  return (
    <HoverLift lift={isPopular ? -12 : -8}>
      <div className={`group rounded-2xl py-[50.5px] pl-11 flex flex-col gap-[28px] border-[1px] transition-all duration-300 ${
        isPopular 
          ? 'bg-[#043873] border-[#043873] text-white md:scale-y-110 shadow-2xl' 
          : 'border-[#FFE492] text-[#212529] hover:shadow-lg'
      }`}>
        <H3 className={`font-semibold text-[24px] ${isPopular ? 'text-white' : 'text-[#212529]'}`}>
          {plan.title}
        </H3>

        <P className={`font-bold !text-[36px] leading-[100%] tracking-[-0.02em] ${
          isPopular ? 'text-[#FFE492]' : 'text-[#212529]'
        }`}>
          {plan.price}
        </P>

        <P className={`font-medium text-[18px] leading-[23px] tracking-[-0.02em] ${
          isPopular ? 'text-white' : 'text-[#212529]'
        }`}>
          {plan.description}
        </P>

        <ul className={`flex flex-col gap-[28px] font-medium text-[18px] leading-[23px] tracking-[-0.02em] ${
          isPopular ? 'text-white' : 'text-[#212529]'
        }`}>
          {plan.features.map((feature: string, featureIndex: number) => (
            <li key={featureIndex} className="flex gap-4 items-center max-w-[384px]">
              <CheckIcon isWhite={isPopular} />
              <span className="!text-base">{feature}</span>
            </li>
          ))}
        </ul>

        <HoverScale scale={1.02}>
          <Button 
            variant={isPopular ? "primary" : "white"}
            className={`self-start text-left px-10 py-5 text-[16px] font-medium rounded-lg text-lg transition-all duration-300 ${
              isPopular
                ? 'bg-[#4f9cf9] text-white border-[#4f9cf9] hover:bg-[#3d8ce8]'
                : 'bg-white border border-[#FFE492] text-[#212529] hover:bg-[#f8f9fa]'
            }`}
          >
            {t('pricing.getStarted')}
            <ArrovRight />
          </Button>
        </HoverScale>
      </div>
    </HoverLift>
  );
};

const PricingHeader: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center">
      <FadeInUp delay={0.2}>
        <H2 className="font-bold text-4xl md:text-[54px] lg:text-[64px]">
          {t('pricing.title')}
        </H2>
      </FadeInUp>

      <FadeInUp delay={0.4}>
        <P className="defoult_p mt-6 mb-15">
          {t('pricing.subtitle')}
        </P>
      </FadeInUp>
    </div>
  );
};

const PricingGrid: React.FC<{ plans: PricingPlan[] }> = ({ plans }) => (
  <>
    <StaggerContainer className="hidden md:grid max-w-[1520px] mx-auto px-[1px] grid-cols-2 lg:grid-cols-3 gap-8 mt-32">
      {plans.map((plan, index) => (
        <StaggerItem key={index}>
          <PricingCard plan={plan} index={index} />
        </StaggerItem>
      ))}
    </StaggerContainer>
    
    <div className="md:hidden mt-32">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="pricing-swiper"
      >
        {plans.map((plan, index) => (
          <SwiperSlide key={index}>
            <PricingCard plan={plan} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </>
);

const Pricing: React.FC = () => {
  const { plans } = usePricing();

  return (
    <Section className="lg:py-[140px] md:py-[100px] py-20">
      <Container>
        <PricingHeader />
        <PricingGrid plans={plans} />
      </Container>
    </Section>
  );
};

export default Pricing;
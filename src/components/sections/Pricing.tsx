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

const PricingCard: React.FC<{ plan: PricingPlan; index: number }> = ({ plan, index }) => {
  const { t } = useTranslation();

  return (
    <div className="group rounded-2xl py-[50.5px] pl-11 flex flex-col gap-[28px] border-[1px] border-[#FFE492] text-[#212529]">
      <H3 className="font-semibold text-[24px]">
        {plan.title}
      </H3>

      <P className="font-bold !text-[36px] leading-[100%] tracking-[-0.02em]">
        {plan.price}
      </P>

      <P className="font-medium text-[18px] leading-[23px] tracking-[-0.02em]">
        {plan.description}
      </P>

      <ul className="flex flex-col gap-[28px] font-medium text-[18px] leading-[23px] tracking-[-0.02em]">
        {plan.features.map((feature: string, featureIndex: number) => (
          <li key={featureIndex} className="flex gap-4 items-center max-w-[384px]">
            <CheckIcon />
            <span className="!text-base">{feature}</span>
          </li>
        ))}
      </ul>

      <Button 
        variant="white"
        className="self-start text-left px-10 py-5 text-[16px] font-medium rounded-lg text-lg bg-white border border-[#FFE492]"
      >
        {t('pricing.getStarted')}
        <ArrovRight />
      </Button>
    </div>
  );
};

const PricingHeader: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center">
      <H2 className="font-bold text-4xl md:text-[54px] lg:text-[64px]">
        {t('pricing.title')}
      </H2>

      <P className="defoult_p mt-6 mb-15">
        {t('pricing.subtitle')}
      </P>
    </div>
  );
};

const PricingGrid: React.FC<{ plans: PricingPlan[] }> = ({ plans }) => (
  <div className="max-w-[1520px] mx-auto px-[1px] grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {plans.map((plan, index) => (
      <PricingCard key={index} plan={plan} index={index} />
    ))}
  </div>
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
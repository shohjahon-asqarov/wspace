import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import { H1, P } from '@/components/ui/TextElements';
import Button from '@/components/ui/Button';
import ArrovRight from '../ui/ArrovRight';
import MainBgImg from '../../../public/Main-Bg-Img.png';

const HeroContent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center lg:items-start py-20">
      <H1 className="text-white font-bold text-[36px] md:text-[54px] lg:text-[64px] leading-[100%]">
        {t('hero.title')}
      </H1>

      <P className="defoult_p text-white mt-6 mb-10 lg:mb-15">
        {t('hero.subtitle')}
      </P>

      <Button 
        variant="primary" 
        className="flex items-center gap-4"
      >
        {t('hero.getStarted')}
        <ArrovRight />
      </Button>
    </div>
  );
};

const HeroImage: React.FC = () => (
  <div className="bg-[#C4DEFD] w-full h-[549px]" />
);

const Hero: React.FC = () => {
  return (
    <Section 
      className="md:!py-[100px] !py-0 color bg-no-repeat bg-center"
      style={{ 
        backgroundImage: `url(${MainBgImg.src})`, 
        minHeight: "calc(100vh - 60px)" 
      }}
    >
      <Container className="grid lg:grid-cols-2 text-center lg:text-left items-center py-10">
        <HeroContent />
        <HeroImage />
      </Container>
    </Section>
  );
};

export default Hero;
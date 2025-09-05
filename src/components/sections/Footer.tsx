import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import { H2, H3, P } from '@/components/ui/TextElements';
import Button from '@/components/ui/Button';
import { SocialIcon } from '@/types';
import Logo from '../../../public/img/Logo.svg';
import ArrowIcon from '../../../public/icons/Icon.svg';
import GlobalIcon from '../../../public/icons/Group.png';
import FacebookIcon from '../../../public/icons/Icon_11_.svg';
import TwitterIcon from '../../../public/icons/Group.svg';
import LinkedInIcon from '../../../public/icons/Linkedin.svg';
import ArrovRight from '../ui/ArrovRight';
import Apple from '../../../public/icons/apple.svg';
import Windovs from '../../../public/icons/windows.svg';
import Android from '../../../public/icons/android.svg';

const FooterCTA: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='lg:mx-auto lg:max-w-[595px] pb-[140px] flex flex-col items-center'>
      <H2 className="font-bold lg:text-center text-left text-white text-[36px] leading-[56px] md:text-[54px] md:leading-[100%] lg:text-[64px] lg:leading-[100%] tracking-[-0.02em]">
        {t('footer.tryToday')}
      </H2>
      
      <P className='defoult_p text-center text-white mt-6 mb-10'>
        {t('footer.getStarted')}
        {t('footer.addTeam')}
      </P>
      
      <Button variant="primary" className='inline-block'>
        {t('footer.tryTaskey')}
        <ArrovRight />
      </Button>
      
      <P className='defoult_p lg:text-center my-10 text-left text-white'>
        {t('footer.bigTeam')}
      </P>
      
      <div className='grid grid-cols-3 max-w-[260px] lg:mx-auto gap-7'>
        <Image src={Apple} width={60} height={60} alt='Apple logo' />
        <Image src={Windovs} width={60} height={60} alt='Windows logo' />
        <Image src={Android} width={60} height={60} alt='Android logo' />
      </div>
    </div>
  );
};

const FooterLinkGroup: React.FC<{
  title: string;
  links: string[];
}> = ({ title, links }) => (
  <div className="text-center sm:text-left">
    <H3 className="font-medium text-xl lg:text-2xl mb-4 text-white">
      {title}
    </H3>
    <div className="space-y-3">
      {links.map((link: string, index: number) => (
        <P 
          key={index} 
          className="text-sm hover:text-gray-300 cursor-pointer transition-colors"
        >
          {link}
        </P>
      ))}
    </div>
  </div>
);

const FooterLogoSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center text-center sm:inline-block sm:text-left">
      <Image
        width={191}
        height={34}
        src={Logo}
        alt="whitepace"
      />
      <P className="text-white mt-4 text-sm leading-relaxed">
        {t('footer.description')}
      </P>
    </div>
  );
};

const FooterTryTodaySection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
      <H3 className="font-bold text-2xl lg:text-3xl mb-4 text-white">
        {t('footer.tryItToday')}
      </H3>
      <P className="text-sm leading-relaxed mb-6 text-white">
        {t('footer.getStarted')} {t('footer.addTeam')}
      </P>
      <Button variant="primary" className="flex mx-auto sm:mx-0 w-fit">
        {t('footer.startToday')}
        <Image
          className="ml-2.5"
          width={14}
          height={14}
          src={ArrowIcon}
          alt="arrow icon"
        />
      </Button>
    </div>
  );
};

const FooterBottomSection: React.FC = () => {
  const { t } = useTranslation();

  const socialIcons: SocialIcon[] = [
    { src: FacebookIcon, alt: 'Facebook', width: 13, height: 13 },
    { src: TwitterIcon, alt: 'Twitter', width: 25, height: 13 },
    { src: LinkedInIcon, alt: 'LinkedIn', width: 25, height: 13 }
  ];

  const bottomLinks = t('footer.bottomLinks', { returnObjects: true }) as string[];

  return (
    <div className="border-t-2 border-blue-950 mt-16 pt-8">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-white text-sm">
          <div className="flex items-center gap-2.5">
            <Image
              width={25}
              height={19}
              src={GlobalIcon}
              alt="global icon"
            />
            <span>English</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            {bottomLinks.map((link: string, index: number) => (
              <span key={index} className="hover:text-gray-300 cursor-pointer transition-colors">
                {link}
              </span>
            ))}
            <span>{t('footer.copyright')}</span>
          </div>
        </div>

        <div className="flex gap-6">
          {socialIcons.map((icon, index) => (
            <Image
              key={index}
              width={icon.width}
              height={icon.height}
              src={icon.src}
              alt={icon.alt}
              className="hover:opacity-80 cursor-pointer transition-opacity"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const footerLinks = {
    product: t('footer.links.product', { returnObjects: true }) as string[],
    resources: t('footer.links.resources', { returnObjects: true }) as string[],
    company: t('footer.links.company', { returnObjects: true }) as string[]
  };

  return (
    <Section className="color pt-[140px] pb-8">
      <Container>
        <FooterCTA />
        
        <div>
          <div className="text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            <FooterLogoSection />
            <FooterLinkGroup title={t('footer.product')} links={footerLinks.product} />
            <FooterLinkGroup title={t('footer.resources')} links={footerLinks.resources} />
            <FooterLinkGroup title={t('footer.company')} links={footerLinks.company} />
            <FooterTryTodaySection />
          </div>

          <FooterBottomSection />
        </div>
      </Container>
    </Section>
  );
};

export default Footer;
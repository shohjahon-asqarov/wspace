import { useTranslation } from 'react-i18next';
import { NavLink, PricingPlan } from '@/types';

export const useNavigation = () => {
  const { t } = useTranslation();

  const navLinks: NavLink[] = [
    {
      id: 1,
      title: t('navbar.products'),
      to: '#'
    },
    {
      id: 2,
      title: t('navbar.solution'),
      to: '#'
    },
    {
      id: 3,
      title: t('navbar.resource'),
      to: '#'
    },
    {
      id: 4,
      title: t('navbar.pricing'),
      to: '#pricing'
    }
  ];

  return { navLinks };
};

export const usePricing = () => {
  const { t } = useTranslation();

  const plans: PricingPlan[] = [
    {
      title: t('pricing.plans.free'),
      price: '$0',
      description: t('pricing.plans.freeDesc'),
      features: t('pricing.features', { returnObjects: true }) as string[]
    },
    {
      title: t('pricing.plans.personal'),
      price: '$11.99',
      description: t('pricing.plans.personalDesc'),
      features: t('pricing.features', { returnObjects: true }) as string[]
    },
    {
      title: t('pricing.plans.organization'),
      price: '$49.99',
      description: t('pricing.plans.orgDesc'),
      features: t('pricing.features', { returnObjects: true }) as string[]
    }
  ];

  return { plans };
};

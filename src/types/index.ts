// Navigation types
export interface NavLink {
  id: number;
  title: string;
  to: string;
}

// Pricing types
export interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: string[];
}

// Social media types
export interface SocialIcon {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Footer link types
export interface FooterLinkGroup {
  title: string;
  links: string[];
}

// Button variants
export type ButtonVariant = 'primary' | 'secondary' | 'yellow' | 'white';

// Button sizes
export type ButtonSize = 'small' | 'medium' | 'large';

// Component props interfaces
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SectionProps extends BaseComponentProps {
  id?: string;
  backgroundImage?: string;
  backgroundColor?: string;
}

// Translation keys
export interface TranslationKeys {
  navbar: {
    products: string;
    solution: string;
    resource: string;
    pricing: string;
    login: string;
    tryFree: string;
  };
  hero: {
    title: string;
    subtitle: string;
    getStarted: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    plans: {
      free: string;
      personal: string;
      organization: string;
      freeDesc: string;
      personalDesc: string;
      orgDesc: string;
    };
    features: string[];
    getStarted: string;
  };
  footer: {
    tryToday: string;
    getStarted: string;
    addTeam: string;
    tryTaskey: string;
    bigTeam: string;
    description: string;
    product: string;
    resources: string;
    company: string;
    tryItToday: string;
    startToday: string;
    links: {
      product: string[];
      resources: string[];
      company: string[];
    };
    bottomLinks: string[];
    copyright: string;
  };
}

// Theme configuration
export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    white: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

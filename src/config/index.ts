// Application configuration
export const APP_CONFIG = {
  name: 'Whitespace',
  version: '1.0.0',
  description: 'Project management software that enables teams to collaborate, plan, analyze and manage everyday tasks',
  url: 'https://whitespace.com',
  supportEmail: 'support@whitespace.com',
  
  // SEO Configuration
  seo: {
    title: 'Whitespace - Project Management Software',
    description: 'Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks',
    keywords: ['project management', 'collaboration', 'team management', 'productivity'],
    ogImage: '/og-image.jpg',
  },
  
  // Social Media Links
  social: {
    facebook: 'https://facebook.com/whitespace',
    twitter: 'https://twitter.com/whitespace',
    linkedin: 'https://linkedin.com/company/whitespace',
  },
  
  // API Configuration
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.whitespace.com',
    timeout: 10000,
    retries: 3,
  },
  
  // Feature Flags
  features: {
    enableAnalytics: process.env.NODE_ENV === 'production',
    enableErrorReporting: process.env.NODE_ENV === 'production',
    enablePerformanceMonitoring: process.env.NODE_ENV === 'production',
  },
  
  // Localization
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'uz', 'kz'],
    fallbackLocale: 'en',
  },
} as const;

// Navigation configuration
export const NAVIGATION_CONFIG = {
  main: [
    { id: 'products', label: 'Products', href: '#products' },
    { id: 'solution', label: 'Solution', href: '#solution' },
    { id: 'resource', label: 'Resource', href: '#resource' },
    { id: 'pricing', label: 'Pricing', href: '#pricing' },
  ],
  footer: {
    product: [
      { label: 'Overview', href: '#overview' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Customer stories', href: '#stories' },
    ],
    resources: [
      { label: 'Blog', href: '#blog' },
      { label: 'Guides & tutorials', href: '#guides' },
      { label: 'Help center', href: '#help' },
    ],
    company: [
      { label: 'About us', href: '#about' },
      { label: 'Careers', href: '#careers' },
      { label: 'Media kit', href: '#media' },
    ],
  },
} as const;

// Pricing configuration
export const PRICING_CONFIG = {
  plans: [
    {
      id: 'free',
      name: 'Free',
      price: 0,
      currency: 'USD',
      period: 'month',
      description: 'Capture ideas and find them quickly',
      features: [
        'Sync unlimited devices',
        '10 GB monthly uploads',
        '200 MB max. note size',
        'Customize Home dashboard and access extra widgets',
        'Connect primary Google Calendar account',
        'Add due dates, reminders, and notifications to your tasks',
      ],
      popular: false,
    },
    {
      id: 'personal',
      name: 'Personal',
      price: 11.99,
      currency: 'USD',
      period: 'month',
      description: 'Keep home and family on track',
      features: [
        'Sync unlimited devices',
        '10 GB monthly uploads',
        '200 MB max. note size',
        'Customize Home dashboard and access extra widgets',
        'Connect primary Google Calendar account',
        'Add due dates, reminders, and notifications to your tasks',
      ],
      popular: true,
    },
    {
      id: 'organization',
      name: 'Organization',
      price: 49.99,
      currency: 'USD',
      period: 'month',
      description: 'Capture ideas and find them quickly',
      features: [
        'Sync unlimited devices',
        '10 GB monthly uploads',
        '200 MB max. note size',
        'Customize Home dashboard and access extra widgets',
        'Connect primary Google Calendar account',
        'Add due dates, reminders, and notifications to your tasks',
      ],
      popular: false,
    },
  ],
} as const;

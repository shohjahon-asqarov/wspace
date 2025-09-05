// Theme configuration constants
export const THEME = {
  colors: {
    primary: '#4f9cf9',
    secondary: '#043873',
    accent: '#ffe492',
    background: '#ffffff',
    text: '#212529',
    white: '#ffffff',
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
} as const;

// Layout constants
export const LAYOUT = {
  container: {
    maxWidth: '1520px',
    padding: '20px',
  },
  section: {
    padding: {
      mobile: '80px 0',
      tablet: '100px 0',
      desktop: '140px 0',
    },
  },
  footer: {
    padding: '140px 0',
  },
} as const;

// Button styles
export const BUTTON_STYLES = {
  primary: {
    padding: '20px 40px',
    backgroundColor: THEME.colors.primary,
    color: THEME.colors.white,
    fontWeight: THEME.fontWeight.medium,
    fontSize: THEME.fontSize.lg,
    lineHeight: '23px',
    letterSpacing: '-2%',
    borderRadius: THEME.borderRadius.md,
  },
  secondary: {
    padding: '20px 40px',
    backgroundColor: THEME.colors.accent,
    color: THEME.colors.secondary,
    fontWeight: THEME.fontWeight.medium,
    fontSize: THEME.fontSize.lg,
    lineHeight: '23px',
    letterSpacing: '-2%',
    borderRadius: THEME.borderRadius.md,
  },
  white: {
    padding: '20px 40px',
    backgroundColor: THEME.colors.white,
    color: THEME.colors.text,
    fontWeight: THEME.fontWeight.medium,
    fontSize: THEME.fontSize.lg,
    lineHeight: '23px',
    letterSpacing: '-2%',
    borderRadius: THEME.borderRadius.md,
  },
} as const;

// Animation constants
export const ANIMATIONS = {
  duration: {
    fast: '200ms',
    normal: '300ms',
    slow: '500ms',
  },
  easing: {
    easeInOut: 'ease-in-out',
    easeOut: 'ease-out',
  },
} as const;

// Z-index constants
export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
} as const;

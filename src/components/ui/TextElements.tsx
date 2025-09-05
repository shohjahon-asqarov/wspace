import React from 'react';
import { BaseComponentProps } from '@/types';

export const H1: React.FC<BaseComponentProps> = ({ className = '', children, ...props }) => (
  <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight ${className}`} {...props}>
    {children}
  </h1>
);

export const H2: React.FC<BaseComponentProps> = ({ className = '', children, ...props }) => (
  <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight ${className}`} {...props}>
    {children}
  </h2>
);

export const H3: React.FC<BaseComponentProps> = ({ className = '', children, ...props }) => (
  <h3 className={`text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight ${className}`} {...props}>
    {children}
  </h3>
);

export const H4: React.FC<BaseComponentProps> = ({ className = '', children, ...props }) => (
  <h4 className={`text-xl md:text-2xl lg:text-3xl font-bold leading-tight tracking-tight ${className}`} {...props}>
    {children}
  </h4>
);

export const H5: React.FC<BaseComponentProps> = ({ className = '', children, ...props }) => (
  <h5 className={`text-lg md:text-xl lg:text-2xl font-bold leading-tight tracking-tight ${className}`} {...props}>
    {children}
  </h5>
);

export const H6: React.FC<BaseComponentProps> = ({ className = '', children, ...props }) => (
  <h6 className={`text-base md:text-lg lg:text-xl font-bold leading-tight tracking-tight ${className}`} {...props}>
    {children}
  </h6>
);

/**
 * Simple paragraph component
 * Use this for most text content
 */
export const P: React.FC<BaseComponentProps> = ({ className = '', children, ...props }) => (
  <p className={`text-base md:text-lg leading-relaxed ${className}`} {...props}>
    {children}
  </p>
);

/**
 * Simple span component for inline text
 */
export const Span: React.FC<BaseComponentProps> = ({ className = '', children, ...props }) => (
  <span className={`${className}`} {...props}>
    {children}
  </span>
);

/**
 * Simple div component for text containers
 */
export const Div: React.FC<BaseComponentProps> = ({ className = '', children, ...props }) => (
  <div className={`${className}`} {...props}>
    {children}
  </div>
);

// Export the unified Typography component for complex cases
export { default as Typography } from './Typography';

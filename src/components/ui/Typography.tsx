import React from 'react';
import { BaseComponentProps } from '@/types';

interface TypographyProps extends BaseComponentProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  color?: string;
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'p',
  size,
  color,
  weight,
  align = 'left',
  className = '',
  children,
  ...props
}) => {
  const Tag = variant as keyof React.JSX.IntrinsicElements;
  
  const getSizeClass = () => {
    if (size) {
      return `text-${size}`;
    }
    
    // Default sizes based on semantic variant
    switch (variant) {
      case 'h1': return 'text-4xl md:text-5xl lg:text-6xl';
      case 'h2': return 'text-3xl md:text-4xl lg:text-5xl';
      case 'h3': return 'text-2xl md:text-3xl lg:text-4xl';
      case 'h4': return 'text-xl md:text-2xl lg:text-3xl';
      case 'h5': return 'text-lg md:text-xl lg:text-2xl';
      case 'h6': return 'text-base md:text-lg lg:text-xl';
      case 'p': return 'text-base md:text-lg';
      default: return 'text-base';
    }
  };

  const getWeightClass = () => {
    if (weight) {
      switch (weight) {
        case 'normal': return 'font-normal';
        case 'medium': return 'font-medium';
        case 'semibold': return 'font-semibold';
        case 'bold': return 'font-bold';
        default: return 'font-normal';
      }
    }
    
    // Default weights based on semantic variant
    switch (variant) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        return 'font-bold';
      default:
        return 'font-normal';
    }
  };

  const getAlignClass = () => {
    switch (align) {
      case 'center': return 'text-center';
      case 'right': return 'text-right';
      default: return 'text-left';
    }
  };

  const getBaseClasses = () => {
    switch (variant) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        return 'leading-tight tracking-tight';
      default:
        return 'leading-relaxed';
    }
  };

  const baseClasses = getBaseClasses();
  const sizeClasses = getSizeClass();
  const weightClasses = getWeightClass();
  const alignClasses = getAlignClass();

  return React.createElement(
    Tag,
    {
      className: `${baseClasses} ${sizeClasses} ${weightClasses} ${alignClasses} ${className}`,
      style: { color },
      ...props,
    },
    children
  );
};

export default Typography;

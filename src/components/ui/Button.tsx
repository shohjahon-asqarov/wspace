import React from 'react';
import { ButtonVariant, ButtonSize, BaseComponentProps } from '@/types';
import { BUTTON_STYLES, THEME } from '@/constants';

interface ButtonProps extends BaseComponentProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  children,
  ...props
}) => {
  const getButtonStyles = () => {
    const baseStyles = 'font-medium transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100';
    
    switch (variant) {
      case 'primary':
        return `${baseStyles} defoult_btn`;
      case 'secondary':
        return `${baseStyles} yellow_btn`;
      case 'white':
        return `${baseStyles} white_btn`;
      default:
        return `${baseStyles} defoult_btn`;
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return 'px-4 py-2 text-sm';
      case 'large':
        return 'px-8 py-4 text-xl';
      default:
        return 'px-6 py-3 text-lg';
    }
  };

  return (
    <button
      type={type}
      className={`${getButtonStyles()} ${getSizeStyles()} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

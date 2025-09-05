import React from 'react';
import { motion } from 'framer-motion';
import { ButtonVariant, ButtonSize, BaseComponentProps } from '@/types';

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
    const baseStyles = 'font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
    
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
    <motion.button
      type={type}
      className={`${getButtonStyles()} ${getSizeStyles()} ${className}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ 
        scale: disabled ? 1 : 1.05,
        y: disabled ? 0 : -2
      }}
      whileTap={{ 
        scale: disabled ? 1 : 0.95,
        y: disabled ? 0 : 0
      }}
      transition={{ 
        duration: 0.2,
        ease: "easeOut"
      }}
      {...props}
    >
      <motion.span
        className="relative inline-block"
        whileHover={{ 
          x: variant === 'primary' ? 2 : 0,
          transition: { duration: 0.2 }
        }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
};

export default Button;

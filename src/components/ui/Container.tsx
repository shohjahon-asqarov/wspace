import React from 'react';
import { BaseComponentProps } from '@/types';

interface ContainerProps extends BaseComponentProps {
  maxWidth?: string;
  padding?: string;
}

const Container: React.FC<ContainerProps> = ({
  className = '',
  children,
  maxWidth = '1520px',
  padding = '20px',
  ...props
}) => {
  return (
    <div
      className={`container ${className}`}
      style={{ maxWidth, paddingInline: padding }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;

import React from 'react';
import { SectionProps } from '@/types';

interface ExtendedSectionProps extends SectionProps {
  style?: React.CSSProperties;
}

const Section: React.FC<ExtendedSectionProps> = ({
  id,
  className = '',
  children,
  backgroundImage,
  backgroundColor,
  style,
  ...props
}) => {
  const sectionStyles = {
    ...(backgroundImage && { backgroundImage: `url(${backgroundImage})` }),
    ...(backgroundColor && { backgroundColor }),
    ...style,
  };

  return (
    <section
      id={id}
      className={`${className}`}
      style={sectionStyles}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;

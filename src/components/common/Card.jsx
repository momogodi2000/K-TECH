
import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

const Card = ({
  children,
  className,
  hover = true,
  shadow = 'md',
  padding = 'md',
  ...props
}) => {
  const baseClasses = 'bg-white rounded-lg border border-gray-200';
  
  const shadows = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  };

  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };

  const cardClasses = clsx(
    baseClasses,
    shadows[shadow],
    paddings[padding],
    className
  );

  const CardComponent = hover ? motion.div : 'div';
  const hoverProps = hover ? {
    whileHover: { y: -4, shadow: 'lg' },
    transition: { duration: 0.2 }
  } : {};

  return (
    <CardComponent
      className={cardClasses}
      {...hoverProps}
      {...props}
    >
      {children}
    </CardComponent>
  );
};

export default Card;

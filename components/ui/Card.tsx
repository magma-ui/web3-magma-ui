import React, { forwardRef } from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'highlighted';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', variant = 'default', ...props }, ref) => {
    const baseClasses = 'bg-zinc-800 shadow-lg rounded-lg p-6 text-white transition-all duration-300 ease-in-out';
    const variantClasses = {
      default: '',
      highlighted: 'border-2 border-primary scale-105'
    };

    return (
      <div
        ref={ref}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

export const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', ...props }, ref) => (
    <div ref={ref} className={`text-xl font-bold mb-4 text-white border-b border-gray-700 pb-2 ${className}`} {...props} />
  )
);

CardHeader.displayName = 'CardHeader';

export const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', ...props }, ref) => (
    <div ref={ref} className={`text-gray-100 flex-grow space-y-4 p-4 sm:p-6 ${className}`} {...props} />
  )
);

CardContent.displayName = 'CardContent';

export const CardDescription = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', ...props }, ref) => (
    <div ref={ref} className={`text-gray-400 text-sm sm:text-base flex justify-center text-center mb-4 px-4 ${className}`} {...props} />
  )
);

CardDescription.displayName = 'CardDescription';

export const CardTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className = '', ...props }, ref) => (
    <h2 ref={ref} className={`text-2xl sm:text-3xl font-semibold mb-3 text-white flex justify-center ${className}`} {...props} />
  )
);

CardTitle.displayName = 'CardTitle';

export const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', ...props }, ref) => (
    <div ref={ref} className={`mt-6 flex justify-center ${className}`} {...props} />
  )
);

CardFooter.displayName = 'CardFooter';
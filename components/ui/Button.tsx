import React, { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseClasses = 'flex justify-center items-center text-center rounded-md cursor-pointer transition-all duration-300 ease-in-out font-semibold';
    
    const variantClasses = {
      primary: 'bg-primary text-white hover:bg-primary/90',
      secondary: 'bg-secondary text-white hover:bg-secondary/90',
      outline: 'bg-transparent text-primary border border-primary hover:bg-primary/10'
    };
    
    const sizeClasses = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg'
    };

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
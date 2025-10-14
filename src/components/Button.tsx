import React from 'react';
import { ComponentProps, ComponentVariant, ComponentSize } from '../types';
import { cn } from '../utils/cn';

export interface ButtonProps extends ComponentProps {
  variant?: ComponentVariant;
  size?: ComponentSize;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const buttonVariants = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90',
  destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
  outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  link: 'text-primary underline-offset-4 hover:underline',
};

const buttonSizes = {
  sm: 'h-9 px-3 text-xs',
  md: 'h-10 px-4 py-2',
  lg: 'h-11 px-8',
};

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'default',
  size = 'md',
  disabled = false,
  children,
  onClick,
  ...props
}) => {
  return (
    <button
      className={cn(
        'rupa-button',
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

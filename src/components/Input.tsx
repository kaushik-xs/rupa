import React from 'react';
import { ComponentProps } from '../types';
import { cn } from '../utils/cn';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
  error?: boolean;
}

const inputSizes = {
  sm: 'h-8 px-2 text-xs',
  md: 'h-10 px-3 py-2',
  lg: 'h-12 px-4 text-lg',
};

export const Input: React.FC<InputProps> = ({
  className,
  size = 'md',
  error = false,
  ...props
}) => {
  return (
    <input
      className={cn(
        'rupa-input',
        inputSizes[size],
        error && 'border-destructive focus-visible:ring-destructive',
        className
      )}
      {...props}
    />
  );
};

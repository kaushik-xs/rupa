import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const buttonGroupVariants = cva(
  'inline-flex items-center justify-center flex-row',
  {
    variants: {
      size: {
        default: '',
        sm: '',
        lg: '',
      },
      variant: {
        default: '',
        outline: '',
        ghost: '',
      },
    },
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
  }
);

export interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<VariantProps<typeof buttonGroupVariants>, 'orientation'> {
  children: React.ReactNode;
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, size, variant, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(buttonGroupVariants({ size, variant }), className)}
        role="group"
        {...props}
      >
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            // Add rounded corners only to first and last buttons
            const isFirst = index === 0;
            const isLast = index === React.Children.count(children) - 1;
            const totalButtons = React.Children.count(children);
            
            let buttonClassName = '';
            
            if (totalButtons === 1) {
              // Single button - keep all rounded corners (don't override)
              buttonClassName = '';
            } else if (isFirst) {
              // First button - rounded left corners only (top-left and bottom-left)
              // Override the base rounded-md by setting all corners explicitly
              buttonClassName = 'rounded-none rounded-l-md';
            } else if (isLast) {
              // Last button - rounded right corners only (top-right and bottom-right)
              // Override the base rounded-md by setting all corners explicitly
              buttonClassName = 'rounded-none rounded-r-md';
            } else {
              // Middle buttons - no rounding on any corner
              buttonClassName = 'rounded-none';
            }
            
            // Remove border between buttons (except for the last one)
            if (!isLast) {
              buttonClassName = cn(buttonClassName, 'border-r-0');
            }

            const existingClassName = (child.props as { className?: string })?.className;
            return React.cloneElement(child, {
              className: cn(buttonClassName, existingClassName),
            } as Partial<unknown>);
          }
          return child;
        })}
      </div>
    );
  }
);
ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup, buttonGroupVariants };


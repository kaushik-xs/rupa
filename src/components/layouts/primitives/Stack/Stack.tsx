import * as React from 'react';
import { cn } from '../../../../utils/cn';
import { LayoutProps } from '../../../../types/layout';
import {
  responsiveSpacingToClass,
  directionToClass,
} from '../../../../utils/tailwind';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement>, LayoutProps {
  direction?: 'row' | 'column';
  spacing?: number | string;
  children?: React.ReactNode;
}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (
    {
      className,
      direction = 'column',
      spacing,
      gap,
      padding,
      paddingX,
      paddingY,
      margin,
      marginX,
      marginY,
      background,
      border,
      borderRadius,
      shadow,
      style,
      children,
      ...props
    },
    ref
  ) => {
    // Use spacing prop if provided, otherwise use gap
    const spacingValue = spacing !== undefined ? spacing : gap;

    const classes = cn(
      'flex',
      directionToClass(direction),
      direction === 'column' && responsiveSpacingToClass('space-y', spacingValue),
      direction === 'row' && responsiveSpacingToClass('space-x', spacingValue),
      // Fallback to gap if space-* doesn't work
      !spacing && responsiveSpacingToClass('gap', gap),
      responsiveSpacingToClass('p', padding),
      responsiveSpacingToClass('px', paddingX),
      responsiveSpacingToClass('py', paddingY),
      responsiveSpacingToClass('m', margin),
      responsiveSpacingToClass('mx', marginX),
      responsiveSpacingToClass('my', marginY),
      background && `bg-${background}`,
      border === true && 'border',
      typeof border === 'string' && `border-${border}`,
      borderRadius && (typeof borderRadius === 'number' ? `rounded-${borderRadius}` : `rounded-${borderRadius}`),
      className
    );

    return (
      <div ref={ref} className={classes} style={style} {...props}>
        {children}
      </div>
    );
  }
);

Stack.displayName = 'Stack';


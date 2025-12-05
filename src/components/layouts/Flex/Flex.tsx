import * as React from 'react';
import { cn } from '../../../utils/cn';
import { LayoutProps } from '../../../types/layout';
import {
  responsiveSpacingToClass,
  directionToClass,
  alignToClass,
  justifyToClass,
  wrapToClass,
} from '../../../utils/tailwind';

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement>, LayoutProps {
  children?: React.ReactNode;
}

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      className,
      direction = 'row',
      align,
      justify,
      wrap,
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
    const classes = cn(
      'flex',
      directionToClass(direction),
      alignToClass(align),
      justifyToClass(justify),
      wrapToClass(wrap),
      responsiveSpacingToClass('gap', gap),
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

Flex.displayName = 'Flex';


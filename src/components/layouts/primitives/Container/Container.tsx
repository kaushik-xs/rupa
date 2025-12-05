import * as React from 'react';
import { cn } from '../../../../utils/cn';
import { LayoutProps } from '../../../../types/layout';
import { responsiveSpacingToClass } from '../../../../utils/tailwind';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>, LayoutProps {
  children?: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | string | number;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      className,
      maxWidth = 'xl',
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
    const maxWidthClass =
      typeof maxWidth === 'string' && ['sm', 'md', 'lg', 'xl', '2xl', 'full'].includes(maxWidth)
        ? `max-w-${maxWidth}`
        : '';

    const classes = cn(
      'container mx-auto',
      maxWidthClass,
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

    const inlineStyles: React.CSSProperties = {
      ...style,
      ...(typeof maxWidth === 'number' && { maxWidth: `${maxWidth}px` }),
      ...(typeof maxWidth === 'string' && !['sm', 'md', 'lg', 'xl', '2xl', 'full'].includes(maxWidth) && {
        maxWidth,
      }),
    };

    return (
      <div ref={ref} className={classes} style={inlineStyles} {...props}>
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';


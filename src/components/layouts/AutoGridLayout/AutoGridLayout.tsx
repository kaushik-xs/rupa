import * as React from 'react';
import { cn } from '../../../utils/cn';
import { LayoutProps, ResponsiveValue } from '../../../types/layout';
import { responsiveSpacingToClass, columnsToClass } from '../../../utils/tailwind';

export interface AutoGridLayoutProps extends React.HTMLAttributes<HTMLDivElement>, LayoutProps {
  children?: React.ReactNode;
  minItemWidth?: number | string;
  columns?: ResponsiveValue<number | string>;
}

export const AutoGridLayout = React.forwardRef<HTMLDivElement, AutoGridLayoutProps>(
  (
    {
      className,
      minItemWidth = 250,
      columns,
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
    const minWidthValue = typeof minItemWidth === 'number' ? `${minItemWidth}px` : minItemWidth;

    const classes = cn(
      'grid',
      columns ? columnsToClass(columns) : '',
      !columns && `grid-cols-[repeat(auto-fit,minmax(${minWidthValue},1fr))]`,
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

AutoGridLayout.displayName = 'AutoGridLayout';


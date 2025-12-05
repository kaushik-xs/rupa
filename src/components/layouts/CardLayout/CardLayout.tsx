import * as React from 'react';
import { cn } from '../../../utils/cn';
import { LayoutProps } from '../../../types/layout';
import { responsiveSpacingToClass, columnsToClass } from '../../../utils/tailwind';
import { Card } from '../../Card/Card';

export interface CardLayoutProps extends React.HTMLAttributes<HTMLDivElement>, LayoutProps {
  children?: React.ReactNode;
  columns?: { default?: number; sm?: number; md?: number; lg?: number; xl?: number; '2xl'?: number };
  cardClassName?: string;
  wrapChildrenInCards?: boolean;
}

export const CardLayout = React.forwardRef<HTMLDivElement, CardLayoutProps>(
  (
    {
      className,
      columns = { default: 1, sm: 2, lg: 3 },
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
      cardClassName,
      wrapChildrenInCards = true,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      'grid',
      columnsToClass(columns),
      responsiveSpacingToClass('gap', gap || 4),
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
        {wrapChildrenInCards
          ? React.Children.map(children, (child, index) => (
              <Card key={index} className={cardClassName}>
                {child}
              </Card>
            ))
          : children}
      </div>
    );
  }
);

CardLayout.displayName = 'CardLayout';


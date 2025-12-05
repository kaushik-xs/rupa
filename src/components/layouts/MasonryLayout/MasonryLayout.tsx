import * as React from 'react';
import { cn } from '../../../utils/cn';
import { LayoutProps } from '../../../types/layout';
import { responsiveSpacingToClass } from '../../../utils/tailwind';

export interface MasonryLayoutProps extends React.HTMLAttributes<HTMLDivElement>, LayoutProps {
  children?: React.ReactNode;
  columns?: number | { default?: number; sm?: number; md?: number; lg?: number; xl?: number; '2xl'?: number };
  columnGap?: number | string;
  rowGap?: number | string;
}

export const MasonryLayout = React.forwardRef<HTMLDivElement, MasonryLayoutProps>(
  (
    {
      className,
      columns = 3,
      columnGap,
      rowGap,
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
    const columnCount = typeof columns === 'number' ? columns : columns.default || 3;
    const gapValue = gap || columnGap || 4;
    const rowGapValue = rowGap || gap || 4;

    const classes = cn(
      'columns-auto',
      typeof columns === 'number' ? `columns-${columnCount}` : '',
      responsiveSpacingToClass('gap', gapValue),
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
      columnCount: typeof columns === 'object' ? undefined : columnCount,
      columnGap: typeof columnGap === 'number' ? `${columnGap}px` : columnGap || `${gapValue * 0.25}rem`,
      rowGap: typeof rowGap === 'number' ? `${rowGap}px` : rowGap || `${rowGapValue * 0.25}rem`,
    };

    return (
      <div ref={ref} className={classes} style={inlineStyles} {...props}>
        {React.Children.map(children, (child, index) => (
          <div key={index} className="break-inside-avoid mb-4">
            {child}
          </div>
        ))}
      </div>
    );
  }
);

MasonryLayout.displayName = 'MasonryLayout';


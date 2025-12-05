import * as React from 'react';
import { cn } from '../../../utils/cn';
import { LayoutProps } from '../../../types/layout';
import {
  responsiveSpacingToClass,
  columnsToClass,
  shadowToClass,
} from '../../../utils/tailwind';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement>, LayoutProps {
  children?: React.ReactNode;
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (
    {
      className,
      columns = 2,
      rows,
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
      autoFit,
      autoFill,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const gridTemplateColumns = autoFit
      ? 'repeat(auto-fit, minmax(0, 1fr))'
      : autoFill
      ? 'repeat(auto-fill, minmax(0, 1fr))'
      : undefined;

    const gridTemplateRows = rows
      ? typeof rows === 'object'
        ? undefined // Responsive rows handled via classes if needed
        : `repeat(${rows}, 1fr)`
      : undefined;

    const classes = cn(
      'grid',
      !autoFit && !autoFill && columnsToClass(columns),
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
      shadowToClass(shadow),
      className
    );

    const inlineStyles: React.CSSProperties = {
      ...style,
      ...(gridTemplateColumns && { gridTemplateColumns }),
      ...(gridTemplateRows && { gridTemplateRows }),
    };

    return (
      <div ref={ref} className={classes} style={inlineStyles} {...props}>
        {children}
      </div>
    );
  }
);

Grid.displayName = 'Grid';


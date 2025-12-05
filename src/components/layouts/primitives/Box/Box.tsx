import * as React from 'react';
import { cn } from '../../../../utils/cn';
import { LayoutProps } from '../../../../types/layout';
import {
  responsiveSpacingToClass,
  shadowToClass,
} from '../../../../utils/tailwind';

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement>, LayoutProps {
  children?: React.ReactNode;
}

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      className,
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
      width,
      height,
      maxWidth,
      minWidth,
      maxHeight,
      minHeight,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      // Padding
      responsiveSpacingToClass('p', padding),
      responsiveSpacingToClass('px', paddingX),
      responsiveSpacingToClass('py', paddingY),
      // Margin
      responsiveSpacingToClass('m', margin),
      responsiveSpacingToClass('mx', marginX),
      responsiveSpacingToClass('my', marginY),
      // Background
      background && `bg-${background}`,
      // Border
      border === true && 'border',
      typeof border === 'string' && `border-${border}`,
      // Border radius
      borderRadius && (typeof borderRadius === 'number' ? `rounded-${borderRadius}` : `rounded-${borderRadius}`),
      // Shadow
      shadowToClass(shadow),
      className
    );

    const inlineStyles: React.CSSProperties = {
      ...style,
      ...(width && { width: typeof width === 'number' ? `${width}px` : width }),
      ...(height && { height: typeof height === 'number' ? `${height}px` : height }),
      ...(maxWidth && { maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth }),
      ...(minWidth && { minWidth: typeof minWidth === 'number' ? `${minWidth}px` : minWidth }),
      ...(maxHeight && { maxHeight: typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight }),
      ...(minHeight && { minHeight: typeof minHeight === 'number' ? `${minHeight}px` : minHeight }),
    };

    return (
      <div ref={ref} className={classes} style={inlineStyles} {...props}>
        {children}
      </div>
    );
  }
);

Box.displayName = 'Box';


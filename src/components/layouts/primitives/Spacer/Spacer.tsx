import * as React from 'react';
import { cn } from '../../../../utils/cn';
import { LayoutProps } from '../../../../types/layout';

export interface SpacerProps extends React.HTMLAttributes<HTMLDivElement>, LayoutProps {
  children?: React.ReactNode;
  flex?: boolean | number;
  width?: number | string;
  height?: number | string;
}

export const Spacer = React.forwardRef<HTMLDivElement, SpacerProps>(
  (
    {
      className,
      flex = true,
      width,
      height,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      flex === true && 'flex-1',
      typeof flex === 'number' && `flex-[${flex}]`,
      className
    );

    const inlineStyles: React.CSSProperties = {
      ...style,
      ...(width && { width: typeof width === 'number' ? `${width}px` : width }),
      ...(height && { height: typeof height === 'number' ? `${height}px` : height }),
    };

    return (
      <div ref={ref} className={classes} style={inlineStyles} {...props}>
        {children}
      </div>
    );
  }
);

Spacer.displayName = 'Spacer';


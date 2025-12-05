import * as React from 'react';
import { cn } from '../../../../utils/cn';
import { LayoutProps } from '../../../../types/layout';

export interface PositionedItem {
  id: string;
  x: number | string;
  y: number | string;
  width?: number | string;
  height?: number | string;
  content?: React.ReactNode;
  zIndex?: number;
}

export interface FreePositionLayoutProps extends React.HTMLAttributes<HTMLDivElement>, LayoutProps {
  children?: React.ReactNode;
  items?: PositionedItem[];
  relative?: boolean;
}

export const FreePositionLayout = React.forwardRef<HTMLDivElement, FreePositionLayoutProps>(
  (
    {
      className,
      items,
      relative = true,
      width,
      height,
      background,
      border,
      borderRadius,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      relative ? 'relative' : 'absolute',
      background && `bg-${background}`,
      border === true && 'border',
      typeof border === 'string' && `border-${border}`,
      borderRadius && (typeof borderRadius === 'number' ? `rounded-${borderRadius}` : `rounded-${borderRadius}`),
      className
    );

    const containerStyles: React.CSSProperties = {
      ...style,
      width: typeof width === 'number' ? `${width}px` : width,
      height: typeof height === 'number' ? `${height}px` : height,
      position: relative ? 'relative' : 'absolute',
    };

    return (
      <div ref={ref} className={classes} style={containerStyles} {...props}>
        {items ? (
          items.map((item: PositionedItem) => (
            <div
              key={item.id}
              className="absolute"
              style={{
                left: typeof item.x === 'number' ? `${item.x}px` : item.x,
                top: typeof item.y === 'number' ? `${item.y}px` : item.y,
                width: item.width
                  ? typeof item.width === 'number'
                    ? `${item.width}px`
                    : item.width
                  : undefined,
                height: item.height
                  ? typeof item.height === 'number'
                    ? `${item.height}px`
                    : item.height
                  : undefined,
                zIndex: item.zIndex,
              }}
            >
              {item.content}
            </div>
          ))
        ) : (
          children
        )}
      </div>
    );
  }
);

FreePositionLayout.displayName = 'FreePositionLayout';


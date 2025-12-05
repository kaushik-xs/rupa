import * as React from 'react';
import { cn } from '../../../../utils/cn';
import { LayoutProps } from '../../../../types/layout';

export interface SidebarLayoutProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'>, LayoutProps {
  children?: React.ReactNode;
  sidebar?: React.ReactNode;
  sidebarWidth?: number | string;
  sidebarPosition?: 'left' | 'right';
  content?: React.ReactNode;
}

export const SidebarLayout = React.forwardRef<HTMLDivElement, SidebarLayoutProps>(
  (
    {
      className,
      sidebar,
      sidebarWidth = 250,
      sidebarPosition = 'left',
      content,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const sidebarWidthValue = typeof sidebarWidth === 'number' ? `${sidebarWidth}px` : sidebarWidth;

    const classes = cn('flex', className);

    const sidebarClasses = cn(
      'flex-shrink-0',
      sidebarPosition === 'right' && 'order-2'
    );

    const contentClasses = cn('flex-1', sidebarPosition === 'right' && 'order-1');

    return (
      <div ref={ref} className={classes} style={style} {...props}>
        {sidebar && (
          <aside className={sidebarClasses} style={{ width: sidebarWidthValue }}>
            {sidebar}
          </aside>
        )}
        <main className={contentClasses}>
          {content || children}
        </main>
      </div>
    );
  }
);

SidebarLayout.displayName = 'SidebarLayout';


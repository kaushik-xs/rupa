import * as React from 'react';
import { cn } from '../../../utils/cn';
import { LayoutProps } from '../../../types/layout';

export interface HeaderFooterLayoutProps extends React.HTMLAttributes<HTMLDivElement>, LayoutProps {
  children?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  body?: React.ReactNode;
  fullHeight?: boolean;
}

export const HeaderFooterLayout = React.forwardRef<HTMLDivElement, HeaderFooterLayoutProps>(
  (
    {
      className,
      header,
      footer,
      body,
      children,
      fullHeight = true,
      style,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      'flex flex-col',
      fullHeight && 'h-screen',
      className
    );

    return (
      <div ref={ref} className={classes} style={style} {...props}>
        {header && (
          <header className="flex-shrink-0">
            {header}
          </header>
        )}
        <main className="flex-1 overflow-auto">
          {body || children}
        </main>
        {footer && (
          <footer className="flex-shrink-0">
            {footer}
          </footer>
        )}
      </div>
    );
  }
);

HeaderFooterLayout.displayName = 'HeaderFooterLayout';


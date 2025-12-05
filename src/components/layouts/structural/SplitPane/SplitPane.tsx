import * as React from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { cn } from '../../../../utils/cn';
import { LayoutProps } from '../../../../types/layout';

export interface SplitPaneProps extends Omit<LayoutProps, 'direction'>, React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  direction?: 'horizontal' | 'vertical';
  defaultSizes?: number[];
  minSizes?: number[];
  maxSizes?: number[];
  resizable?: boolean;
}

export const SplitPane = React.forwardRef<HTMLDivElement, SplitPaneProps>(
  (
    {
      className,
      direction = 'horizontal',
      defaultSizes,
      minSizes,
      maxSizes,
      resizable = true,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const childArray = React.Children.toArray(children);
    
    if (childArray.length < 2) {
      console.warn('SplitPane requires at least 2 children');
      return <div ref={ref}>{children}</div>;
    }

    const classes = cn('w-full h-full', className);

    return (
      <div ref={ref} className={classes} style={style} {...props}>
        <PanelGroup
          direction={direction}
          autoSaveId={undefined}
        >
          {childArray.map((child, index) => (
            <React.Fragment key={index}>
              <Panel
                defaultSize={defaultSizes?.[index]}
                minSize={minSizes?.[index]}
                maxSize={maxSizes?.[index]}
              >
                {child}
              </Panel>
              {index < childArray.length - 1 && resizable && (
                <PanelResizeHandle className="w-1 bg-border hover:bg-border/80 transition-colors" />
              )}
            </React.Fragment>
          ))}
        </PanelGroup>
      </div>
    );
  }
);

SplitPane.displayName = 'SplitPane';


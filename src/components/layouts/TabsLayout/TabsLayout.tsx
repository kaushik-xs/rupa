import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '../../../utils/cn';
import { LayoutProps } from '../../../types/layout';

export interface TabItem {
  value: string;
  label: string;
  content?: React.ReactNode;
  disabled?: boolean;
}

export interface TabsLayoutProps extends React.HTMLAttributes<HTMLDivElement>, LayoutProps {
  children?: React.ReactNode;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  tabs?: TabItem[];
  orientation?: 'horizontal' | 'vertical';
  variant?: 'default' | 'pills' | 'underline';
}

export const TabsLayout = React.forwardRef<HTMLDivElement, TabsLayoutProps>(
  (
    {
      className,
      defaultValue,
      value,
      onValueChange,
      tabs,
      orientation = 'horizontal',
      variant = 'default',
      children,
      style,
      ...props
    },
    ref
  ) => {
    const tabsClasses = cn(
      'flex',
      orientation === 'horizontal' ? 'flex-col' : 'flex-row',
      className
    );

    const listClasses = cn(
      'flex',
      orientation === 'horizontal'
        ? 'flex-row border-b border-border'
        : 'flex-col border-r border-border',
      variant === 'pills' && 'gap-2',
      variant === 'underline' && 'border-b-2'
    );

    const triggerClasses = (isActive: boolean) =>
      cn(
        'px-4 py-2 text-sm font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        variant === 'default' &&
          cn(
            'border-b-2 border-transparent',
            isActive && 'border-primary text-primary'
          ),
        variant === 'pills' &&
          cn(
            'rounded-md',
            isActive ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
          ),
        variant === 'underline' &&
          cn(
            'border-b-2 border-transparent',
            isActive && 'border-primary'
          )
      );

    return (
      <TabsPrimitive.Root
        defaultValue={defaultValue}
        value={value}
        onValueChange={onValueChange}
        orientation={orientation}
      >
        <div ref={ref} className={tabsClasses} style={style} {...props}>
          {tabs && (
            <TabsPrimitive.List className={listClasses}>
              {tabs.map((tab: TabItem) => (
                <TabsPrimitive.Trigger
                  key={tab.value}
                  value={tab.value}
                  disabled={tab.disabled}
                  className={triggerClasses(value === tab.value || defaultValue === tab.value)}
                >
                  {tab.label}
                </TabsPrimitive.Trigger>
              ))}
            </TabsPrimitive.List>
          )}
          {tabs ? (
            tabs.map((tab: TabItem) => (
              <TabsPrimitive.Content key={tab.value} value={tab.value} className="mt-4">
                {tab.content}
              </TabsPrimitive.Content>
            ))
          ) : (
            <div>{children}</div>
          )}
        </div>
      </TabsPrimitive.Root>
    );
  }
);

TabsLayout.displayName = 'TabsLayout';


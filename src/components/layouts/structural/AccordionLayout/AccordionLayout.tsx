import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../../../utils/cn';
import { LayoutProps } from '../../../../types/layout';

export interface AccordionItem {
  value: string;
  title: string;
  content?: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionLayoutProps extends React.HTMLAttributes<HTMLDivElement>, LayoutProps {
  children?: React.ReactNode;
  items?: AccordionItem[];
  type?: 'single' | 'multiple';
  defaultValue?: string | string[];
  collapsible?: boolean;
}

export const AccordionLayout = React.forwardRef<HTMLDivElement, AccordionLayoutProps>(
  (
    {
      className,
      items,
      type = 'single',
      defaultValue,
      collapsible = true,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const AccordionItem = React.forwardRef<
      React.ElementRef<typeof AccordionPrimitive.Item>,
      React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
    >(({ className, ...props }, ref) => (
      <AccordionPrimitive.Item
        ref={ref}
        className={cn('border-b border-border', className)}
        {...props}
      />
    ));
    AccordionItem.displayName = 'AccordionItem';

    const AccordionTrigger = React.forwardRef<
      React.ElementRef<typeof AccordionPrimitive.Trigger>,
      React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
    >(({ className, children, ...props }, ref) => (
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          ref={ref}
          className={cn(
            'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
            className
          )}
          {...props}
        >
          {children}
          <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    ));
    AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

    const AccordionContent = React.forwardRef<
      React.ElementRef<typeof AccordionPrimitive.Content>,
      React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
    >(({ className, children, ...props }, ref) => (
      <AccordionPrimitive.Content
        ref={ref}
        className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        {...props}
      >
        <div className={cn('pb-4 pt-0', className)}>{children}</div>
      </AccordionPrimitive.Content>
    ));
    AccordionContent.displayName = AccordionPrimitive.Content.displayName;

    return (
      <AccordionPrimitive.Root
        type={type}
        defaultValue={defaultValue}
        collapsible={collapsible}
      >
        <div ref={ref} className={className} style={style} {...props}>
        {items ? (
          items.map((item: AccordionItem) => (
              <AccordionItem key={item.value} value={item.value} disabled={item.disabled}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))
          ) : (
            children
          )}
        </div>
      </AccordionPrimitive.Root>
    );
  }
);

AccordionLayout.displayName = 'AccordionLayout';


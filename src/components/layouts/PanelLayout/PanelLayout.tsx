import * as React from 'react';
import { cn } from '../../../utils/cn';
import { LayoutProps } from '../../../types/layout';
import { ChevronDown, ChevronRight } from 'lucide-react';

export interface Panel {
  id: string;
  title: string;
  content?: React.ReactNode;
  defaultOpen?: boolean;
  collapsible?: boolean;
}

export interface PanelLayoutProps extends React.HTMLAttributes<HTMLDivElement>, LayoutProps {
  children?: React.ReactNode;
  panels?: Panel[];
  defaultOpen?: boolean;
  allowMultipleOpen?: boolean;
}

export const PanelLayout = React.forwardRef<HTMLDivElement, PanelLayoutProps>(
  (
    {
      className,
      panels,
      defaultOpen = false,
      allowMultipleOpen = true,
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
    const [openPanels, setOpenPanels] = React.useState<Set<string>>(
      new Set(panels?.filter((p: Panel) => p.defaultOpen).map((p: Panel) => p.id) || [])
    );

    const togglePanel = (panelId: string) => {
      setOpenPanels((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(panelId)) {
          newSet.delete(panelId);
        } else {
          if (!allowMultipleOpen) {
            newSet.clear();
          }
          newSet.add(panelId);
        }
        return newSet;
      });
    };

    const classes = cn(
      'flex flex-col',
      'border border-border rounded-lg divide-y divide-border',
      'bg-card',
      className
    );

    return (
      <div ref={ref} className={classes} style={style} {...props}>
        {panels ? (
          panels.map((panel: Panel) => {
            const isOpen = openPanels.has(panel.id);
            const isCollapsible = panel.collapsible !== false;

            return (
              <div key={panel.id} className="flex flex-col">
                <button
                  onClick={() => isCollapsible && togglePanel(panel.id)}
                  disabled={!isCollapsible}
                  className={cn(
                    'flex items-center justify-between p-4 text-left',
                    'hover:bg-muted/50 transition-colors',
                    !isCollapsible && 'cursor-default'
                  )}
                >
                  <span className="font-medium">{panel.title}</span>
                  {isCollapsible && (
                    <div className="ml-4">
                      {isOpen ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </div>
                  )}
                </button>
                {isOpen && panel.content && (
                  <div className="p-4 pt-0">{panel.content}</div>
                )}
              </div>
            );
          })
        ) : (
          children
        )}
      </div>
    );
  }
);

PanelLayout.displayName = 'PanelLayout';


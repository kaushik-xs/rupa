import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { Pin, PinOff, ChevronsRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const sideNavigationVariants = cva(
  'flex flex-col h-screen bg-muted border-r border-border',
  {
    variants: {
      width: {
        default: 'w-16',
        sm: 'w-12',
        lg: 'w-20',
      },
    },
    defaultVariants: {
      width: 'default',
    },
  }
);

export interface NavigationItem {
  id: string;
  label: string;
  icon: LucideIcon;
  badge?: string | number;
  secondaryMenu?: SecondaryMenuItem[];
  onClick?: () => void;
  href?: string;
}

export interface SecondaryMenuItem {
  id: string;
  label: string;
  icon?: LucideIcon;
  onClick?: () => void;
  href?: string;
  separator?: boolean;
}

export interface SideNavigationProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sideNavigationVariants> {
  logo?: React.ReactNode;
  items: NavigationItem[];
  activeItemId?: string;
  onItemClick?: (itemId: string) => void;
  footerItems?: React.ReactNode[];
  secondaryMenuWidth?: number;
  defaultPinned?: boolean;
  onPinnedChange?: (pinned: boolean) => void;
  showSecondaryMenuOnHover?: boolean;
}

const SideNavigation = React.forwardRef<HTMLDivElement, SideNavigationProps>(
  (
    {
      className,
      width,
      logo,
      items,
      activeItemId,
      onItemClick,
      footerItems,
      secondaryMenuWidth = 240,
      defaultPinned = false,
      onPinnedChange,
      showSecondaryMenuOnHover = true,
      ...props
    },
    ref
  ) => {
    const [hoveredItemId, setHoveredItemId] = React.useState<string | null>(null);
    const [pinnedItemId, setPinnedItemId] = React.useState<string | null>(
      defaultPinned && items.find((item) => item.secondaryMenu)?.id || null
    );
    const [isPinned, setIsPinned] = React.useState(defaultPinned);
    const hoverTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
    const secondaryMenuRef = React.useRef<HTMLDivElement>(null);

    const handleItemMouseEnter = (itemId: string) => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      if (showSecondaryMenuOnHover) {
        setHoveredItemId(itemId);
      }
    };

    const handleItemMouseLeave = () => {
      if (!isPinned) {
        hoverTimeoutRef.current = setTimeout(() => {
          setHoveredItemId(null);
        }, 200);
      }
      // When pinned, keep the hovered item so the menu can change on hover
    };

    const handleSecondaryMenuMouseEnter = () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };

    const handleSecondaryMenuMouseLeave = () => {
      if (!isPinned) {
        hoverTimeoutRef.current = setTimeout(() => {
          setHoveredItemId(null);
        }, 200);
      }
      // When pinned, keep the hovered item so the menu stays visible
    };

    const handlePinToggle = () => {
      const newPinnedState = !isPinned;
      setIsPinned(newPinnedState);
      if (newPinnedState) {
        // When pinning, use hovered item, or active item, or first item with secondary menu
        const itemToPin = hoveredItemId || activeItemId || items.find((item) => item.secondaryMenu)?.id || null;
        setPinnedItemId(itemToPin);
      } else {
        setPinnedItemId(null);
        // Keep hoveredItemId so menu can still show on hover after unpinning
      }
      onPinnedChange?.(newPinnedState);
    };

    // When pinned, show hovered menu if available, otherwise show pinned menu
    // When not pinned, show hovered menu
    const activeSecondaryMenuId = hoveredItemId || (isPinned ? pinnedItemId : null);
    const activeItem = items.find((item) => item.id === activeSecondaryMenuId);
    const hasSecondaryMenu = activeItem?.secondaryMenu && activeItem.secondaryMenu.length > 0 && activeSecondaryMenuId;

    React.useEffect(() => {
      return () => {
        if (hoverTimeoutRef.current) {
          clearTimeout(hoverTimeoutRef.current);
        }
      };
    }, []);

    return (
      <div className="flex relative" ref={ref} {...props}>
        <nav className={cn(sideNavigationVariants({ width }), className)}>
          {/* Logo */}
          {logo && (
            <div className="flex items-center justify-center h-16 border-b border-border">
              {logo}
            </div>
          )}

          {/* Navigation Items */}
          <div className="flex-1 flex flex-col py-2">
            {items.map((item) => {
              const isActive = activeItemId === item.id;
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => handleItemMouseEnter(item.id)}
                  onMouseLeave={handleItemMouseLeave}
                >
                  <button
                    onClick={() => {
                      onItemClick?.(item.id);
                      item.onClick?.();
                    }}
                    className={cn(
                      'w-full flex flex-col items-center justify-center py-3 px-2 transition-colors relative group',
                      'hover:bg-accent/50',
                      isActive && 'bg-primary/10'
                    )}
                  >
                    {/* Active indicator bar */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                    )}

                    <Icon
                      className={cn(
                        'h-5 w-5 transition-colors',
                        isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
                      )}
                    />
                    {item.badge && (
                      <span className={cn(
                        'absolute text-[10px] font-semibold flex items-center justify-center',
                        typeof item.badge === 'number' || String(item.badge).length <= 2
                          ? 'top-1 right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground'
                          : 'top-0.5 right-0.5 px-1.5 py-0.5 rounded bg-yellow-500 text-yellow-900 text-[9px] whitespace-nowrap'
                      )}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Footer Items */}
          {footerItems && footerItems.length > 0 && (
            <div className="border-t border-border py-2">
              {footerItems.map((item, index) => (
                <div key={index} className="flex items-center justify-center py-2">
                  {item}
                </div>
              ))}
            </div>
          )}
        </nav>

        {/* Secondary Menu */}
        {hasSecondaryMenu && (
          <div
            ref={secondaryMenuRef}
            className={cn(
              'h-full bg-background border-r border-border transition-all duration-200',
              isPinned
                ? 'relative flex-shrink-0'
                : cn(
                    'absolute left-full top-0 shadow-lg z-50',
                    activeSecondaryMenuId ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'
                  )
            )}
            style={{ width: `${secondaryMenuWidth}px` }}
            onMouseEnter={handleSecondaryMenuMouseEnter}
            onMouseLeave={handleSecondaryMenuMouseLeave}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border">
                <h2 className="text-lg font-semibold">{activeItem?.label}</h2>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePinToggle}
                    className={cn(
                      'p-1.5 rounded-md transition-colors',
                      'hover:bg-accent',
                      isPinned ? 'text-primary' : 'text-muted-foreground'
                    )}
                    title={isPinned ? 'Unpin menu' : 'Pin menu'}
                  >
                    {isPinned ? (
                      <Pin className="h-4 w-4" />
                    ) : (
                      <PinOff className="h-4 w-4" />
                    )}
                  </button>
                  <button
                    onClick={() => {
                      setIsPinned(false);
                      setPinnedItemId(null);
                      setHoveredItemId(null);
                      onPinnedChange?.(false);
                    }}
                    className="p-1.5 rounded-md transition-colors hover:bg-accent text-muted-foreground"
                    title="Close menu"
                  >
                    <ChevronsRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Menu Items */}
              <div className="flex-1 overflow-y-auto py-2">
                {activeItem?.secondaryMenu?.map((menuItem, index) => {
                  if (menuItem.separator) {
                    return (
                      <div
                        key={`separator-${index}`}
                        className="h-px bg-border mx-4 my-2"
                      />
                    );
                  }

                  const MenuIcon = menuItem.icon;
                  const isMenuActive = false; // You can add active state logic here

                  return (
                    <button
                      key={menuItem.id}
                      onClick={() => {
                        menuItem.onClick?.();
                        if (!isPinned) {
                          setHoveredItemId(null);
                        }
                      }}
                      className={cn(
                        'w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors relative',
                        'hover:bg-accent/50',
                        isMenuActive && 'bg-primary/10 text-primary'
                      )}
                    >
                      {isMenuActive && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                      )}
                      {MenuIcon && (
                        <MenuIcon
                          className={cn(
                            'h-4 w-4',
                            isMenuActive ? 'text-primary' : 'text-muted-foreground'
                          )}
                        />
                      )}
                      <span
                        className={cn(
                          isMenuActive ? 'text-primary font-medium' : 'text-foreground'
                        )}
                      >
                        {menuItem.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
);

SideNavigation.displayName = 'SideNavigation';

export { SideNavigation, sideNavigationVariants };


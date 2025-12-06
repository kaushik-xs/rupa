'use client';

import { usePathname, useRouter } from 'next/navigation';
import { SideNavigation, type NavigationItem } from '@kaushik91/rupa';
import { 
  Home, 
  LayoutDashboard, 
  ShoppingCart, 
  BarChart3, 
  FileText, 
  Table, 
  User, 
  Settings, 
  MousePointerClick,
  Layout,
  Search,
  Users,
  Package,
  ShoppingBag,
  TrendingUp
} from 'lucide-react';

const navigationItems: NavigationItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: Home,
    href: '/',
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    secondaryMenu: [
      { id: 'overview', label: 'Overview', href: '/dashboard' },
      { id: 'users', label: 'Users', icon: Users, href: '/dashboard?tab=users' },
      { id: 'analytics', label: 'Analytics', icon: TrendingUp, href: '/dashboard?tab=analytics' },
    ],
  },
  {
    id: 'ecommerce',
    label: 'E-Commerce',
    icon: ShoppingCart,
    href: '/ecommerce',
    secondaryMenu: [
      { id: 'products', label: 'Products', icon: Package, href: '/ecommerce?tab=products' },
      { id: 'orders', label: 'Orders', icon: ShoppingBag, href: '/ecommerce?tab=orders' },
      { id: 'analytics', label: 'Analytics', icon: BarChart3, href: '/ecommerce?tab=analytics' },
    ],
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: BarChart3,
    href: '/analytics',
  },
  {
    id: 'forms',
    label: 'Forms',
    icon: FileText,
    href: '/forms',
  },
  {
    id: 'tables',
    label: 'Tables',
    icon: Table,
    href: '/tables',
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: User,
    href: '/profile',
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: Settings,
    href: '/settings',
  },
  {
    id: 'interactive',
    label: 'Interactive',
    icon: MousePointerClick,
    href: '/interactive',
  },
  {
    id: 'layouts',
    label: 'Layouts',
    icon: Layout,
    href: '/layouts',
  },
  {
    id: 'components',
    label: 'Components',
    icon: Search,
    href: '/components',
  },
];

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleItemClick = (itemId: string) => {
    const item = navigationItems.find((item) => item.id === itemId);
    if (item?.href) {
      router.push(item.href);
    }
  };

  const handleSecondaryMenuClick = (href?: string) => {
    if (href) {
      router.push(href);
    }
  };

  // Update secondary menu items to use onClick
  const itemsWithHandlers = navigationItems.map((item) => ({
    ...item,
    onClick: () => handleItemClick(item.id),
    secondaryMenu: item.secondaryMenu?.map((menuItem) => ({
      ...menuItem,
      onClick: () => handleSecondaryMenuClick(menuItem.href),
    })),
  }));

  // Determine active item based on pathname
  const activeItemId = navigationItems.find((item) => {
    if (item.href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(item.href);
  })?.id;

  return (
    <div className="flex h-screen overflow-hidden">
      <SideNavigation
        items={itemsWithHandlers}
        activeItemId={activeItemId}
        onItemClick={handleItemClick}
        logo={
          <div className="text-lg font-bold text-primary">Rupa</div>
        }
        width="default"
      />
      <main className="flex-1 overflow-y-auto bg-background">
        {children}
      </main>
    </div>
  );
}


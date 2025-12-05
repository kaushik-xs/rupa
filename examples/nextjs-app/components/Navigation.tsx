'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@kaushik-xs/rupa';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/ecommerce', label: 'E-Commerce' },
  { href: '/analytics', label: 'Analytics' },
  { href: '/forms', label: 'Forms' },
  { href: '/tables', label: 'Tables' },
  { href: '/profile', label: 'Profile' },
  { href: '/settings', label: 'Settings' },
  { href: '/interactive', label: 'Interactive' },
  { href: '/layouts', label: 'Layouts' },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-xl font-bold">
              Rupa Examples
            </Link>
            <div className="flex space-x-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link key={item.href} href={item.href}>
                    <Button
                      variant={isActive ? 'default' : 'ghost'}
                      size="sm"
                      className={isActive ? 'bg-primary text-primary-foreground' : ''}
                    >
                      {item.label}
                    </Button>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}


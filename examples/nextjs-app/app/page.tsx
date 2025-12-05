'use client';

import Link from 'next/link';
import { LayoutRenderer } from '@kaushik-xs/rupa';
import type { LayoutNode } from '@kaushik-xs/rupa';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Button, Badge } from '@kaushik-xs/rupa';

// Import to register all layouts and components (auto-registered via main package)
import '@kaushik-xs/rupa';

const examplePages = [
  {
    title: 'Dashboard',
    description: 'Admin dashboard with metrics, charts, and sidebar navigation',
    href: '/dashboard',
    features: ['headerFooterLayout', 'sidebarLayout', 'Charts', 'Metric Cards'],
  },
  {
    title: 'E-Commerce',
    description: 'Product catalog with filters, search, and shopping cart',
    href: '/ecommerce',
    features: ['cardLayout', 'Filters', 'Product Grid', 'Shopping Cart'],
  },
  {
    title: 'Analytics',
    description: 'Data visualization with multiple chart types and metrics',
    href: '/analytics',
    features: ['Multiple Charts', 'Grid Layout', 'Date Selectors', 'Metrics'],
  },
  {
    title: 'Forms',
    description: 'Complex forms with validation and multi-step wizards',
    href: '/forms',
    features: ['All Form Components', 'Validation', 'Wizard Layout', 'Multi-step'],
  },
  {
    title: 'Tables',
    description: 'Data tables with sorting, filtering, and pagination',
    href: '/tables',
    features: ['Table Component', 'Sorting', 'Filtering', 'Pagination'],
  },
  {
    title: 'Profile',
    description: 'User profile with tabs, accordions, and editable sections',
    href: '/profile',
    features: ['Tabs', 'Accordion', 'Avatar', 'Editable Sections'],
  },
  {
    title: 'Settings',
    description: 'Settings page with tabs, groups, and modals',
    href: '/settings',
    features: ['TabsLayout', 'AccordionLayout', 'Switches', 'Modals'],
  },
  {
    title: 'Interactive',
    description: 'All interactive components: modals, dropdowns, toasts',
    href: '/interactive',
    features: ['Modals', 'Dropdowns', 'Toasts', 'Popovers'],
  },
  {
    title: 'Layouts',
    description: 'Showcase of all layout types and capabilities',
    href: '/layouts',
    features: ['All Layouts', 'Responsive', 'Flexible', 'Comprehensive'],
  },
];

export default function Home() {
  const config: LayoutNode = {
    type: 'container',
    props: {
      maxWidth: 'xl',
      padding: 8,
    },
    children: [
      {
        type: 'flex',
        props: {
          direction: 'column',
          gap: 8,
          align: 'center',
        },
        children: [
          {
            type: 'component',
            props: {
              component: 'Box',
              componentProps: {
                className: 'text-center space-y-4',
              },
            },
            children: [
              {
                type: 'component',
                props: {
                  component: 'Box',
                  componentProps: {
                    children: <h1 className="text-4xl font-bold">Rupa UI Library</h1>,
                  },
                },
              },
              {
                type: 'component',
                props: {
                  component: 'Box',
                  componentProps: {
                    children: (
                      <p className="text-xl text-muted-foreground max-w-2xl">
                        Comprehensive examples showcasing all capabilities of the Rupa UI library
                        with React 19 and Next.js 16
                      </p>
                    ),
                  },
                },
              },
            ],
          },
          {
            type: 'grid',
            props: {
              columns: { default: 1, md: 2, lg: 3 },
              gap: 6,
            },
            children: examplePages.map((page) => ({
              type: 'component',
              props: {
                component: 'Card',
              },
              children: [
                {
                  type: 'component',
                  props: {
                    component: 'CardHeader',
                  },
                  children: [
                    {
                      type: 'component',
                      props: {
                        component: 'CardTitle',
                        componentProps: {
                          children: page.title,
                        },
                      },
                    },
                    {
                      type: 'component',
                      props: {
                        component: 'CardDescription',
                        componentProps: {
                          children: page.description,
                        },
                      },
                    },
                  ],
                },
                {
                  type: 'component',
                  props: {
                    component: 'CardContent',
                  },
                  children: [
                    {
                      type: 'flex',
                      props: {
                        direction: 'column',
                        gap: 4,
                      },
                      children: [
                        {
                          type: 'flex',
                          props: {
                            wrap: 'wrap',
                            gap: 2,
                          },
                          children: page.features.map((feature) => ({
                            type: 'component',
                            props: {
                              component: 'Badge',
                              componentProps: {
                                variant: 'secondary',
                                children: feature,
                              },
                            },
                          })),
                        },
                        {
                          type: 'component',
                          props: {
                            component: 'Button',
                            componentProps: {
                              className: 'w-full',
                              children: (
                                <Link href={page.href} className="w-full">
                                  View Example
                                </Link>
                              ),
                            },
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            })),
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <LayoutRenderer config={config} />
    </div>
  );
}

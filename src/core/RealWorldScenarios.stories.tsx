import type { Meta, StoryObj } from '@storybook/react';
import { LayoutRenderer } from './layout-renderer';
import { LayoutNode } from '../types/layout';
import { widgetRegistry } from './registry';
import { Button } from '../components/Button/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/Card/Card';
import { Input } from '../components/Input/Input';
import { Badge } from '../components/Badge/Badge';
import { Alert, AlertTitle, AlertDescription } from '../components/Alert/Alert';
import { Box } from '../components/layouts';
// Import to register all layouts
import './register-layouts';

// Register components
widgetRegistry.register('Button', { component: Button });
widgetRegistry.register('Card', { component: Card });
widgetRegistry.register('CardHeader', { component: CardHeader });
widgetRegistry.register('CardTitle', { component: CardTitle });
widgetRegistry.register('CardDescription', { component: CardDescription });
widgetRegistry.register('CardContent', { component: CardContent });
widgetRegistry.register('CardFooter', { component: CardFooter });
widgetRegistry.register('Input', { component: Input });
widgetRegistry.register('Badge', { component: Badge });
widgetRegistry.register('Alert', { component: Alert });
widgetRegistry.register('AlertTitle', { component: AlertTitle });
widgetRegistry.register('AlertDescription', { component: AlertDescription });
widgetRegistry.register('Box', { component: Box });

const meta: Meta<typeof LayoutRenderer> = {
  title: 'Examples/Real World Scenarios',
  component: LayoutRenderer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LayoutRenderer>;

// Helper to create text content as a component
const createTextComponent = (text: string, className = '') => ({
  type: 'component' as const,
  props: {
    component: 'Box',
    componentProps: {
      children: <span className={className}>{text}</span>,
    },
  },
});

export const AdminDashboard: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'headerFooterLayout',
      props: {},
      children: [
        {
          type: 'box',
          props: {
            className: 'border-b',
            padding: 4,
            border: true,
          },
          children: [
            {
              type: 'flex',
              props: {
                justify: 'between',
                align: 'center',
              },
              children: [
                {
                  type: 'component',
                  props: {
                    component: 'Box',
                    componentProps: {
                      children: <h1 className="text-2xl font-bold">Admin Dashboard</h1>,
                    },
                  },
                },
                {
                  type: 'flex',
                  props: {
                    gap: 2,
                  },
                  children: [
                    {
                      type: 'component',
                      props: {
                        component: 'Button',
                        componentProps: { variant: 'outline', size: 'sm', children: 'Settings' },
                      },
                    },
                    {
                      type: 'component',
                      props: {
                        component: 'Button',
                        componentProps: { size: 'sm', children: 'John Doe' },
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'sidebarLayout',
          props: {
            sidebarWidth: 250,
          },
          children: [
            {
              type: 'box',
              props: {
                className: 'h-full border-r',
                padding: 4,
                background: 'muted',
              },
              children: [
                {
                  type: 'component',
                  props: {
                    component: 'Box',
                    componentProps: {
                      children: (
                        <nav className="space-y-2">
                          <div className="font-semibold text-sm text-muted-foreground mb-4">NAVIGATION</div>
                          <div className="p-2 rounded hover:bg-background cursor-pointer">Dashboard</div>
                          <div className="p-2 rounded hover:bg-background cursor-pointer">Users</div>
                          <div className="p-2 rounded hover:bg-background cursor-pointer">Products</div>
                          <div className="p-2 rounded hover:bg-background cursor-pointer">Orders</div>
                          <div className="p-2 rounded hover:bg-background cursor-pointer">Analytics</div>
                        </nav>
                      ),
                    },
                  },
                },
              ],
            },
            {
              type: 'responsiveDashboard',
              props: {
                columns: { default: 1, md: 2, lg: 3 },
                gap: 4,
                padding: 6,
              },
              children: [
                {
                  type: 'component',
                  props: {
                    component: 'Card',
                    componentProps: {
                      children: (
                        <>
                          <CardHeader>
                            <CardTitle>Total Users</CardTitle>
                            <CardDescription>Active users this month</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="text-3xl font-bold">12,345</div>
                            <Badge variant="secondary" className="mt-2">+12% from last month</Badge>
                          </CardContent>
                        </>
                      ),
                    },
                  },
                },
                {
                  type: 'component',
                  props: {
                    component: 'Card',
                    componentProps: {
                      children: (
                        <>
                          <CardHeader>
                            <CardTitle>Revenue</CardTitle>
                            <CardDescription>Total revenue this month</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="text-3xl font-bold">$45,678</div>
                            <Badge variant="secondary" className="mt-2">+8% from last month</Badge>
                          </CardContent>
                        </>
                      ),
                    },
                  },
                },
                {
                  type: 'component',
                  props: {
                    component: 'Card',
                    componentProps: {
                      children: (
                        <>
                          <CardHeader>
                            <CardTitle>Orders</CardTitle>
                            <CardDescription>Orders processed</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="text-3xl font-bold">1,234</div>
                            <Badge variant="secondary" className="mt-2">+5% from last month</Badge>
                          </CardContent>
                        </>
                      ),
                    },
                  },
                },
              ],
            },
          ],
        },
        {
          type: 'box',
          props: {
            className: 'border-t text-center text-sm text-muted-foreground',
            padding: 4,
            border: true,
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'Box',
                componentProps: {
                  children: '© 2024 Admin Dashboard. All rights reserved.',
                },
              },
            },
          ],
        },
      ],
    };
    return <LayoutRenderer config={config} />;
  },
};

export const ECommerceProductGrid: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'container',
      props: {
        maxWidth: 'xl',
        padding: 6,
      },
      children: [
        {
          type: 'sidebarLayout',
          props: {
            sidebarWidth: 280,
          },
          children: [
            {
              type: 'box',
              props: {
                className: 'rounded-lg',
                padding: 4,
                background: 'muted',
              },
              children: [
                {
                  type: 'component',
                  props: {
                    component: 'Box',
                    componentProps: {
                      children: (
                        <div className="space-y-4">
                          <h3 className="font-semibold">Filters</h3>
                          <div className="space-y-2">
                            <div>
                              <label className="text-sm font-medium">Category</label>
                              <div className="mt-1 space-y-1">
                                <div className="flex items-center">
                                  <input type="checkbox" className="mr-2" />
                                  <span className="text-sm">Electronics</span>
                                </div>
                                <div className="flex items-center">
                                  <input type="checkbox" className="mr-2" />
                                  <span className="text-sm">Clothing</span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Price Range</label>
                              <div className="mt-1 flex gap-2">
                                <Input placeholder="Min" type="number" className="w-full" />
                                <Input placeholder="Max" type="number" className="w-full" />
                              </div>
                            </div>
                            <Button className="w-full">Apply Filters</Button>
                          </div>
                        </div>
                      ),
                    },
                  },
                },
              ],
            },
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
                    justify: 'between',
                    align: 'center',
                  },
                  children: [
                    {
                      type: 'component',
                      props: {
                        component: 'Box',
                        componentProps: {
                          children: <h2 className="text-xl font-bold">Products</h2>,
                        },
                      },
                    },
                    {
                      type: 'component',
                      props: {
                        component: 'Badge',
                        componentProps: {
                          children: '24 items',
                        },
                      },
                    },
                  ],
                },
                {
                  type: 'cardLayout',
                  props: {
                    columns: { default: 1, sm: 2, lg: 3 },
                    gap: 4,
                  },
                  children: Array.from({ length: 9 }).map((_, i) => ({
                    type: 'component',
                    props: {
                      component: 'Box',
                      componentProps: {
                        children: (
                          <>
                            <div className="aspect-square bg-muted rounded-lg mb-2 flex items-center justify-center">
                              <span className="text-muted-foreground">Product {i + 1}</span>
                            </div>
                            <h3 className="font-semibold">Product Name {i + 1}</h3>
                            <p className="text-sm text-muted-foreground mb-2">Product description</p>
                            <div className="flex items-center justify-between">
                              <span className="font-bold">${(i + 1) * 10}.99</span>
                              <Button size="sm">Add to Cart</Button>
                            </div>
                          </>
                        ),
                      },
                    },
                  })),
                },
              ],
            },
          ],
        },
      ],
    };
    return <LayoutRenderer config={config} />;
  },
};

export const AnalyticsDashboard: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'flex',
      props: {
        direction: 'column',
        gap: 6,
        padding: 6,
      },
      children: [
        {
          type: 'flex',
          props: {
            justify: 'between',
            align: 'center',
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'Box',
                componentProps: {
                  children: <h1 className="text-3xl font-bold">Analytics Dashboard</h1>,
                },
              },
            },
            {
              type: 'flex',
              props: {
                gap: 2,
              },
              children: [
                {
                  type: 'component',
                  props: {
                    component: 'Input',
                    componentProps: {
                      type: 'date',
                      className: 'w-auto',
                    },
                  },
                },
                {
                  type: 'component',
                  props: {
                    component: 'Button',
                    componentProps: {
                      variant: 'outline',
                      children: 'Export',
                    },
                  },
                },
              ],
            },
          ],
        },
        {
          type: 'grid',
          props: {
            columns: { default: 1, md: 2, lg: 4 },
            gap: 4,
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'Card',
                componentProps: {
                  children: (
                    <>
                      <CardHeader>
                        <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">45,231</div>
                        <Badge variant="secondary" className="mt-2">+20.1%</Badge>
                      </CardContent>
                    </>
                  ),
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'Card',
                componentProps: {
                  children: (
                    <>
                      <CardHeader>
                        <CardTitle className="text-sm font-medium">Page Views</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">142,543</div>
                        <Badge variant="secondary" className="mt-2">+12.5%</Badge>
                      </CardContent>
                    </>
                  ),
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'Card',
                componentProps: {
                  children: (
                    <>
                      <CardHeader>
                        <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">32.4%</div>
                        <Badge variant="secondary" className="mt-2">-2.1%</Badge>
                      </CardContent>
                    </>
                  ),
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'Card',
                componentProps: {
                  children: (
                    <>
                      <CardHeader>
                        <CardTitle className="text-sm font-medium">Avg. Session</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">4m 32s</div>
                        <Badge variant="secondary" className="mt-2">+8.3%</Badge>
                      </CardContent>
                    </>
                  ),
                },
              },
            },
          ],
        },
      ],
    };
    return <LayoutRenderer config={config} />;
  },
};

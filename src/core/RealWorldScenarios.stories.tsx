import type { Meta, StoryObj } from '@storybook/react';
import { LayoutRenderer } from './layout-renderer';
import { LayoutNode } from '../types/layout';
// Import to register all layouts and components
import './register-layouts';
import './register-components';

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
                              children: 'Total Users',
                            },
                          },
                        },
                        {
                          type: 'component',
                          props: {
                            component: 'CardDescription',
                            componentProps: {
                              children: 'Active users this month',
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
                          type: 'component',
                          props: {
                            component: 'Box',
                            componentProps: {
                              children: <div className="text-3xl font-bold">12,345</div>,
                            },
                          },
                        },
                        {
                          type: 'component',
                          props: {
                            component: 'Badge',
                            componentProps: {
                              variant: 'secondary',
                              className: 'mt-2',
                              children: '+12% from last month',
                            },
                          },
                        },
                      ],
                    },
                  ],
                },
                {
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
                              children: 'Revenue',
                            },
                          },
                        },
                        {
                          type: 'component',
                          props: {
                            component: 'CardDescription',
                            componentProps: {
                              children: 'Total revenue this month',
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
                          type: 'component',
                          props: {
                            component: 'Box',
                            componentProps: {
                              children: <div className="text-3xl font-bold">$45,678</div>,
                            },
                          },
                        },
                        {
                          type: 'component',
                          props: {
                            component: 'Badge',
                            componentProps: {
                              variant: 'secondary',
                              className: 'mt-2',
                              children: '+8% from last month',
                            },
                          },
                        },
                      ],
                    },
                  ],
                },
                {
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
                              children: 'Orders',
                            },
                          },
                        },
                        {
                          type: 'component',
                          props: {
                            component: 'CardDescription',
                            componentProps: {
                              children: 'Orders processed',
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
                          type: 'component',
                          props: {
                            component: 'Box',
                            componentProps: {
                              children: <div className="text-3xl font-bold">1,234</div>,
                            },
                          },
                        },
                        {
                          type: 'component',
                          props: {
                            component: 'Badge',
                            componentProps: {
                              variant: 'secondary',
                              className: 'mt-2',
                              children: '+5% from last month',
                            },
                          },
                        },
                      ],
                    },
                  ],
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
                      className: 'space-y-4',
                    },
                  },
                  children: [
                    {
                      type: 'component',
                      props: {
                        component: 'Box',
                        componentProps: {
                          children: <h3 className="font-semibold">Filters</h3>,
                        },
                      },
                    },
                    {
                      type: 'component',
                      props: {
                        component: 'Box',
                        componentProps: {
                          className: 'space-y-4',
                        },
                      },
                      children: [
                        {
                          type: 'flex',
                          props: {
                            direction: 'column',
                            gap: 2,
                          },
                          children: [
                            {
                              type: 'component',
                              props: {
                                component: 'Label',
                                componentProps: {
                                  children: 'Category',
                                },
                              },
                            },
                            {
                              type: 'component',
                              props: {
                                component: 'Select',
                                componentProps: {
                                  options: [
                                    { value: 'all', label: 'All Categories' },
                                    { value: 'electronics', label: 'Electronics' },
                                    { value: 'clothing', label: 'Clothing' },
                                    { value: 'books', label: 'Books' },
                                  ],
                                  placeholder: 'Select category...',
                                },
                              },
                            },
                          ],
                        },
                        {
                          type: 'flex',
                          props: {
                            direction: 'column',
                            gap: 2,
                          },
                          children: [
                            {
                              type: 'component',
                              props: {
                                component: 'Label',
                                componentProps: {
                                  children: 'Price Range',
                                },
                              },
                            },
                            {
                              type: 'component',
                              props: {
                                component: 'Slider',
                                componentProps: {
                                  defaultValue: [0, 1000],
                                  max: 1000,
                                  step: 10,
                                },
                              },
                            },
                          ],
                        },
                        {
                          type: 'flex',
                          props: {
                            direction: 'column',
                            gap: 2,
                          },
                          children: [
                            {
                              type: 'component',
                              props: {
                                component: 'Label',
                                componentProps: {
                                  children: 'Options',
                                },
                              },
                            },
                            {
                              type: 'flex',
                              props: {
                                align: 'center',
                                gap: 2,
                              },
                              children: [
                                {
                                  type: 'component',
                                  props: {
                                    component: 'Checkbox',
                                    componentProps: {
                                      id: 'in-stock',
                                    },
                                  },
                                },
                                {
                                  type: 'component',
                                  props: {
                                    component: 'Label',
                                    componentProps: {
                                      htmlFor: 'in-stock',
                                      children: 'In Stock Only',
                                    },
                                  },
                                },
                              ],
                            },
                            {
                              type: 'flex',
                              props: {
                                align: 'center',
                                gap: 2,
                              },
                              children: [
                                {
                                  type: 'component',
                                  props: {
                                    component: 'Checkbox',
                                    componentProps: {
                                      id: 'on-sale',
                                    },
                                  },
                                },
                                {
                                  type: 'component',
                                  props: {
                                    component: 'Label',
                                    componentProps: {
                                      htmlFor: 'on-sale',
                                      children: 'On Sale',
                                    },
                                  },
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: 'component',
                          props: {
                            component: 'Button',
                            componentProps: {
                              className: 'w-full',
                              children: 'Apply Filters',
                            },
                          },
                        },
                      ],
                    },
                  ],
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
                    },
                    children: [
                      {
                        type: 'component',
                        props: {
                          component: 'Box',
                          componentProps: {
                            className: 'aspect-square bg-muted rounded-lg mb-2 flex items-center justify-center',
                            children: <span className="text-muted-foreground">Product {i + 1}</span>,
                          },
                        },
                      },
                      {
                        type: 'component',
                        props: {
                          component: 'Box',
                          componentProps: {
                            children: <h3 className="font-semibold">Product Name {i + 1}</h3>,
                          },
                        },
                      },
                      {
                        type: 'component',
                        props: {
                          component: 'Box',
                          componentProps: {
                            children: <p className="text-sm text-muted-foreground mb-2">Product description</p>,
                          },
                        },
                      },
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
                                children: <span className="font-bold">${(i + 1) * 10}.99</span>,
                              },
                            },
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'Button',
                              componentProps: {
                                size: 'sm',
                                children: 'Add to Cart',
                              },
                            },
                          },
                        ],
                      },
                    ],
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
    const chartData = [
      { name: 'Jan', visitors: 4000, pageViews: 12000, bounceRate: 35 },
      { name: 'Feb', visitors: 3000, pageViews: 9800, bounceRate: 32 },
      { name: 'Mar', visitors: 5000, pageViews: 15000, bounceRate: 30 },
      { name: 'Apr', visitors: 4500, pageViews: 13000, bounceRate: 28 },
      { name: 'May', visitors: 6000, pageViews: 18000, bounceRate: 25 },
      { name: 'Jun', visitors: 5500, pageViews: 16000, bounceRate: 27 },
    ];

    const pieData = [
      { name: 'Desktop', value: 45 },
      { name: 'Mobile', value: 35 },
      { name: 'Tablet', value: 20 },
    ];

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
                          className: 'text-sm font-medium',
                          children: 'Total Visitors',
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
                      type: 'component',
                      props: {
                        component: 'Box',
                        componentProps: {
                          children: <div className="text-2xl font-bold">45,231</div>,
                        },
                      },
                    },
                    {
                      type: 'component',
                      props: {
                        component: 'Badge',
                        componentProps: {
                          variant: 'secondary',
                          className: 'mt-2',
                          children: '+20.1%',
                        },
                      },
                    },
                  ],
                },
              ],
            },
            {
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
                          className: 'text-sm font-medium',
                          children: 'Page Views',
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
                      type: 'component',
                      props: {
                        component: 'Box',
                        componentProps: {
                          children: <div className="text-2xl font-bold">142,543</div>,
                        },
                      },
                    },
                    {
                      type: 'component',
                      props: {
                        component: 'Badge',
                        componentProps: {
                          variant: 'secondary',
                          className: 'mt-2',
                          children: '+12.5%',
                        },
                      },
                    },
                  ],
                },
              ],
            },
            {
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
                          className: 'text-sm font-medium',
                          children: 'Bounce Rate',
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
                      type: 'component',
                      props: {
                        component: 'Box',
                        componentProps: {
                          children: <div className="text-2xl font-bold">32.4%</div>,
                        },
                      },
                    },
                    {
                      type: 'component',
                      props: {
                        component: 'Badge',
                        componentProps: {
                          variant: 'secondary',
                          className: 'mt-2',
                          children: '-2.1%',
                        },
                      },
                    },
                  ],
                },
              ],
            },
            {
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
                          className: 'text-sm font-medium',
                          children: 'Avg. Session',
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
                      type: 'component',
                      props: {
                        component: 'Box',
                        componentProps: {
                          children: <div className="text-2xl font-bold">4m 32s</div>,
                        },
                      },
                    },
                    {
                      type: 'component',
                      props: {
                        component: 'Badge',
                        componentProps: {
                          variant: 'secondary',
                          className: 'mt-2',
                          children: '+8.3%',
                        },
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'grid',
          props: {
            columns: { default: 1, lg: 2 },
            gap: 6,
          },
          children: [
            {
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
                          children: 'Visitor Trends',
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
                      type: 'component',
                      props: {
                        component: 'LineChart',
                        componentProps: {
                          data: chartData,
                          lines: [
                            { dataKey: 'visitors', name: 'Visitors' },
                            { dataKey: 'pageViews', name: 'Page Views' },
                          ],
                          height: 300,
                        },
                      },
                    },
                  ],
                },
              ],
            },
            {
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
                          children: 'Device Distribution',
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
                      type: 'component',
                      props: {
                        component: 'PieChart',
                        componentProps: {
                          data: pieData,
                          height: 300,
                        },
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
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
                      children: 'Bounce Rate Over Time',
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
                  type: 'component',
                  props: {
                    component: 'AreaChart',
                    componentProps: {
                      data: chartData,
                      areas: [
                        { dataKey: 'bounceRate', name: 'Bounce Rate' },
                      ],
                      height: 300,
                    },
                  },
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

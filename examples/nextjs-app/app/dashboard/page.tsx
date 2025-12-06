'use client';

import { LayoutRenderer } from '@kaushik91/rupa';
import type { LayoutNode } from '@kaushik91/rupa';

// Import to register all layouts and components (auto-registered via main package)
import '@kaushik91/rupa';
import { dashboardMetrics, analyticsData, deviceDistribution } from '@/lib/data';

export default function DashboardPage() {
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
              direction: 'column',
              gap: 4,
            },
            children: [
              {
                type: 'component',
                props: {
                  component: 'Breadcrumb',
                },
                children: [
                  {
                    type: 'component',
                    props: {
                      component: 'BreadcrumbList',
                    },
                    children: [
                      {
                        type: 'component',
                        props: {
                          component: 'BreadcrumbItem',
                        },
                        children: [
                          {
                            type: 'component',
                            props: {
                              component: 'BreadcrumbLink',
                              componentProps: {
                                href: '/',
                                children: 'Home',
                              },
                            },
                          },
                        ],
                      },
                      {
                        type: 'component',
                        props: {
                          component: 'BreadcrumbSeparator',
                        },
                      },
                      {
                        type: 'component',
                        props: {
                          component: 'BreadcrumbItem',
                        },
                        children: [
                          {
                            type: 'component',
                            props: {
                              component: 'BreadcrumbPage',
                              componentProps: {
                                children: 'Dashboard',
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
                            children: <div className="text-3xl font-bold">{dashboardMetrics.totalUsers.toLocaleString()}</div>,
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
                            children: `+${dashboardMetrics.growth.users}% from last month`,
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
                            children: <div className="text-3xl font-bold">${dashboardMetrics.revenue.toLocaleString()}</div>,
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
                            children: `+${dashboardMetrics.growth.revenue}% from last month`,
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
                            children: <div className="text-3xl font-bold">{dashboardMetrics.orders.toLocaleString()}</div>,
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
                            children: `+${dashboardMetrics.growth.orders}% from last month`,
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
                            data: analyticsData,
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
                            data: deviceDistribution,
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
                            children: 'Revenue by Month',
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
                          component: 'BarChart',
                          componentProps: {
                            data: analyticsData,
                            bars: [
                              { dataKey: 'revenue', name: 'Revenue' },
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

  return (
    <div className="min-h-screen">
      <LayoutRenderer config={config} />
    </div>
  );
}


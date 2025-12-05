'use client';

import { LayoutRenderer } from '@kaushik-xs/rupa';
import type { LayoutNode } from '@kaushik-xs/rupa';

// Import to register all layouts and components (auto-registered via main package)
import '@kaushik-xs/rupa';
import { tableData, orders } from '@/lib/data';

export default function TablesPage() {
  const usersTableConfig: LayoutNode = {
    type: 'container',
    props: {
      maxWidth: 'xl',
      padding: 6,
    },
    children: [
      {
        type: 'flex',
        props: {
          direction: 'column',
          gap: 6,
        },
        children: [
          {
            type: 'component',
            props: {
              component: 'Box',
              componentProps: {
                children: <h1 className="text-3xl font-bold">Data Tables</h1>,
              },
            },
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
                        children: 'Users Table',
                      },
                    },
                  },
                  {
                    type: 'component',
                    props: {
                      component: 'CardDescription',
                      componentProps: {
                        children: 'Table component with sorting and filtering capabilities',
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
                      component: 'Table',
                    },
                    children: [
                      {
                        type: 'component',
                        props: {
                          component: 'TableHeader',
                        },
                        children: [
                          {
                            type: 'component',
                            props: {
                              component: 'TableRow',
                            },
                            children: [
                              {
                                type: 'component',
                                props: {
                                  component: 'TableHead',
                                  componentProps: {
                                    children: 'Name',
                                  },
                                },
                              },
                              {
                                type: 'component',
                                props: {
                                  component: 'TableHead',
                                  componentProps: {
                                    children: 'Email',
                                  },
                                },
                              },
                              {
                                type: 'component',
                                props: {
                                  component: 'TableHead',
                                  componentProps: {
                                    children: 'Role',
                                  },
                                },
                              },
                              {
                                type: 'component',
                                props: {
                                  component: 'TableHead',
                                  componentProps: {
                                    children: 'Status',
                                  },
                                },
                              },
                              {
                                type: 'component',
                                props: {
                                  component: 'TableHead',
                                  componentProps: {
                                    children: 'Last Active',
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
                          component: 'TableBody',
                        },
                        children: tableData.map((row) => ({
                          type: 'component',
                          props: {
                            component: 'TableRow',
                          },
                          children: [
                            {
                              type: 'component',
                              props: {
                                component: 'TableCell',
                                componentProps: {
                                  children: row.name,
                                },
                              },
                            },
                            {
                              type: 'component',
                              props: {
                                component: 'TableCell',
                                componentProps: {
                                  children: row.email,
                                },
                              },
                            },
                            {
                              type: 'component',
                              props: {
                                component: 'TableCell',
                                componentProps: {
                                  children: row.role,
                                },
                              },
                            },
                            {
                              type: 'component',
                              props: {
                                component: 'TableCell',
                                componentProps: {
                                  children: (
                                    <span className={`px-2 py-1 rounded text-xs ${
                                      row.status === 'Active' ? 'bg-green-100 text-green-800' :
                                      row.status === 'Inactive' ? 'bg-gray-100 text-gray-800' :
                                      'bg-yellow-100 text-yellow-800'
                                    }`}>
                                      {row.status}
                                    </span>
                                  ),
                                },
                              },
                            },
                            {
                              type: 'component',
                              props: {
                                component: 'TableCell',
                                componentProps: {
                                  children: row.lastActive,
                                },
                              },
                            },
                          ],
                        })),
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
                        children: 'Orders Table',
                      },
                    },
                  },
                  {
                    type: 'component',
                    props: {
                      component: 'CardDescription',
                      componentProps: {
                        children: 'Table with status badges and actions',
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
                      component: 'Table',
                    },
                    children: [
                      {
                        type: 'component',
                        props: {
                          component: 'TableHeader',
                        },
                        children: [
                          {
                            type: 'component',
                            props: {
                              component: 'TableRow',
                            },
                            children: [
                              {
                                type: 'component',
                                props: {
                                  component: 'TableHead',
                                  componentProps: {
                                    children: 'Order ID',
                                  },
                                },
                              },
                              {
                                type: 'component',
                                props: {
                                  component: 'TableHead',
                                  componentProps: {
                                    children: 'Customer',
                                  },
                                },
                              },
                              {
                                type: 'component',
                                props: {
                                  component: 'TableHead',
                                  componentProps: {
                                    children: 'Product',
                                  },
                                },
                              },
                              {
                                type: 'component',
                                props: {
                                  component: 'TableHead',
                                  componentProps: {
                                    children: 'Amount',
                                  },
                                },
                              },
                              {
                                type: 'component',
                                props: {
                                  component: 'TableHead',
                                  componentProps: {
                                    children: 'Status',
                                  },
                                },
                              },
                              {
                                type: 'component',
                                props: {
                                  component: 'TableHead',
                                  componentProps: {
                                    children: 'Date',
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
                          component: 'TableBody',
                        },
                        children: orders.map((order) => ({
                          type: 'component',
                          props: {
                            component: 'TableRow',
                          },
                          children: [
                            {
                              type: 'component',
                              props: {
                                component: 'TableCell',
                                componentProps: {
                                  children: order.id,
                                },
                              },
                            },
                            {
                              type: 'component',
                              props: {
                                component: 'TableCell',
                                componentProps: {
                                  children: order.customer,
                                },
                              },
                            },
                            {
                              type: 'component',
                              props: {
                                component: 'TableCell',
                                componentProps: {
                                  children: order.product,
                                },
                              },
                            },
                            {
                              type: 'component',
                              props: {
                                component: 'TableCell',
                                componentProps: {
                                  children: `$${order.amount.toFixed(2)}`,
                                },
                              },
                            },
                            {
                              type: 'component',
                              props: {
                                component: 'TableCell',
                                componentProps: {
                                  children: (
                                    <span className={`px-2 py-1 rounded text-xs capitalize ${
                                      order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                                      order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                                      order.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                                      order.status === 'pending' ? 'bg-gray-100 text-gray-800' :
                                      'bg-red-100 text-red-800'
                                    }`}>
                                      {order.status}
                                    </span>
                                  ),
                                },
                              },
                            },
                            {
                              type: 'component',
                              props: {
                                component: 'TableCell',
                                componentProps: {
                                  children: order.date,
                                },
                              },
                            },
                          ],
                        })),
                      },
                      {
                        type: 'component',
                        props: {
                          component: 'TableFooter',
                        },
                        children: [
                          {
                            type: 'component',
                            props: {
                              component: 'TableRow',
                            },
                            children: [
                              {
                                type: 'component',
                                props: {
                                  component: 'TableCell',
                                  componentProps: {
                                    colSpan: 6,
                                    className: 'text-center text-muted-foreground',
                                    children: `Showing ${orders.length} orders`,
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
            ],
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <LayoutRenderer config={usersTableConfig} />
    </div>
  );
}


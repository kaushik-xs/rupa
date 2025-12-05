'use client';

import { LayoutRenderer } from '@kaushik-xs/rupa';
import type { LayoutNode } from '@kaushik-xs/rupa';

// Import to register all layouts and components (auto-registered via main package)
import '@kaushik-xs/rupa';
import { analyticsData, deviceDistribution, trafficSources } from '@/lib/data';

export default function AnalyticsPage() {
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
                        data: analyticsData,
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
                        children: 'Traffic Sources',
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
                        data: trafficSources,
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
                    children: 'Revenue & Conversions',
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
                  component: 'ComposedChart',
                  componentProps: {
                    data: analyticsData,
                    series: [
                      { type: 'bar', dataKey: 'revenue', name: 'Revenue' },
                      { type: 'line', dataKey: 'conversions', name: 'Conversions' },
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

  return (
    <div className="min-h-screen">
      <LayoutRenderer config={config} />
    </div>
  );
}


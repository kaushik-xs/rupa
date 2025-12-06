'use client';

import { LayoutRenderer } from '@kaushik91/rupa';
import type { LayoutNode } from '@kaushik91/rupa';

// Import to register all layouts and components (auto-registered via main package)
import '@kaushik91/rupa';

export default function LayoutsPage() {
  const config: LayoutNode = {
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
          gap: 8,
        },
        children: [
          {
            type: 'component',
            props: {
              component: 'Box',
              componentProps: {
                children: <h1 className="text-3xl font-bold">Layout Showcase</h1>,
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
                        children: 'Primitive Layouts',
                      },
                    },
                  },
                  {
                    type: 'component',
                    props: {
                      component: 'CardDescription',
                      componentProps: {
                        children: 'Box, Flex, Grid, Stack, Container, Spacer',
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
                        type: 'box',
                        props: {
                          padding: 4,
                          background: 'muted',
                          borderRadius: 'md',
                        },
                        children: [
                          {
                            type: 'component',
                            props: {
                              component: 'Box',
                              componentProps: {
                                children: <p>Box Layout - Basic container with padding and background</p>,
                              },
                            },
                          },
                        ],
                      },
                      {
                        type: 'flex',
                        props: {
                          gap: 2,
                          wrap: 'wrap',
                        },
                        children: [
                          {
                            type: 'component',
                            props: {
                              component: 'Badge',
                              componentProps: {
                                children: 'Flex Item 1',
                              },
                            },
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'Badge',
                              componentProps: {
                                children: 'Flex Item 2',
                              },
                            },
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'Badge',
                              componentProps: {
                                children: 'Flex Item 3',
                              },
                            },
                          },
                        ],
                      },
                      {
                        type: 'grid',
                        props: {
                          columns: { default: 2, md: 4 },
                          gap: 2,
                        },
                        children: Array.from({ length: 4 }).map((_, i) => ({
                          type: 'component',
                          props: {
                            component: 'Box',
                            componentProps: {
                              className: 'p-2 bg-muted rounded text-center',
                              children: `Grid Item ${i + 1}`,
                            },
                          },
                        })),
                      },
                      {
                        type: 'stack',
                        props: {
                          gap: 2,
                        },
                        children: [
                          {
                            type: 'component',
                            props: {
                              component: 'Box',
                              componentProps: {
                                className: 'p-2 bg-muted rounded',
                                children: 'Stack Item 1',
                              },
                            },
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'Box',
                              componentProps: {
                                className: 'p-2 bg-muted rounded',
                                children: 'Stack Item 2',
                              },
                            },
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'Box',
                              componentProps: {
                                className: 'p-2 bg-muted rounded',
                                children: 'Stack Item 3',
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
                        children: 'Structural Layouts',
                      },
                    },
                  },
                  {
                    type: 'component',
                    props: {
                      component: 'CardDescription',
                      componentProps: {
                        children: 'SidebarLayout, HeaderFooterLayout, SplitPane',
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
                    type: 'splitPane',
                    props: {
                      direction: 'horizontal' as any,
                      defaultSize: 50,
                    },
                    children: [
                      {
                        type: 'box',
                        props: {
                          padding: 4,
                          background: 'muted',
                          className: 'h-full',
                        },
                        children: [
                          {
                            type: 'component',
                            props: {
                              component: 'Box',
                              componentProps: {
                                children: <p>Left Pane</p>,
                              },
                            },
                          },
                        ],
                      },
                      {
                        type: 'box',
                        props: {
                          padding: 4,
                          background: 'muted',
                          className: 'h-full',
                        },
                        children: [
                          {
                            type: 'component',
                            props: {
                              component: 'Box',
                              componentProps: {
                                children: <p>Right Pane</p>,
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
                        children: 'Dashboard Layouts',
                      },
                    },
                  },
                  {
                    type: 'component',
                    props: {
                      component: 'CardDescription',
                      componentProps: {
                        children: 'ResponsiveDashboard, CardLayout, MasonryLayout, AutoGridLayout',
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
                    type: 'cardLayout',
                    props: {
                      columns: { default: 1, sm: 2, lg: 3 },
                      gap: 4,
                    },
                    children: Array.from({ length: 6 }).map((_, i) => ({
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
                                  children: `Card ${i + 1}`,
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
                                  children: <p>Card layout item {i + 1}</p>,
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
                        children: 'Responsive Grid',
                      },
                    },
                  },
                  {
                    type: 'component',
                    props: {
                      component: 'CardDescription',
                      componentProps: {
                        children: 'Responsive columns that adapt to screen size',
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
                    type: 'responsiveDashboard',
                    props: {
                      columns: { default: 1, md: 2, lg: 4 },
                      gap: 4,
                    },
                    children: Array.from({ length: 8 }).map((_, i) => ({
                      type: 'component',
                      props: {
                        component: 'Box',
                        componentProps: {
                          className: 'p-4 bg-muted rounded',
                          children: `Responsive Item ${i + 1}`,
                        },
                      },
                    })),
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
      <LayoutRenderer config={config} />
    </div>
  );
}


'use client';

import { LayoutRenderer } from '@kaushik91/rupa';
import type { LayoutNode } from '@kaushik91/rupa';
import '@kaushik91/rupa';

export default function ComponentsPage() {
  const config: LayoutNode = {
    type: 'container',
    props: {
      maxWidth: 'xl',
      padding: 6,
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
                        children: 'Components',
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
          component: 'Box',
          componentProps: {
            children: <h1 className="text-3xl font-bold mb-2">Component Showcase</h1>,
          },
        },
      },
      {
        type: 'component',
        props: {
          component: 'Box',
          componentProps: {
            children: <p className="text-muted-foreground mb-8">Comprehensive examples of all Rupa UI components</p>,
          },
        },
      },
      {
        type: 'grid',
        props: {
          columns: { default: 1, md: 2 },
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
                        children: 'Breadcrumb',
                      },
                    },
                  },
                  {
                    type: 'component',
                    props: {
                      component: 'CardDescription',
                      componentProps: {
                        children: 'Navigation breadcrumb component',
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
                                  component: 'BreadcrumbLink',
                                  componentProps: {
                                    href: '/components',
                                    children: 'Components',
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
                                    children: 'Breadcrumb',
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
                        children: 'Button Group',
                      },
                    },
                  },
                  {
                    type: 'component',
                    props: {
                      component: 'CardDescription',
                      componentProps: {
                        children: 'Grouped buttons for related actions',
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
                        type: 'component',
                        props: {
                          component: 'ButtonGroup',
                          componentProps: {
                            variant: 'default',
                          },
                        },
                        children: [
                          {
                            type: 'component',
                            props: {
                              component: 'Button',
                              componentProps: {
                                children: 'Left',
                              },
                            },
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'Button',
                              componentProps: {
                                children: 'Center',
                              },
                            },
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'Button',
                              componentProps: {
                                children: 'Right',
                              },
                            },
                          },
                        ],
                      },
                      {
                        type: 'component',
                        props: {
                          component: 'ButtonGroup',
                          componentProps: {
                            variant: 'outline',
                          },
                        },
                        children: [
                          {
                            type: 'component',
                            props: {
                              component: 'Button',
                              componentProps: {
                                children: 'Save',
                              },
                            },
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'Button',
                              componentProps: {
                                children: 'Cancel',
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
                        children: 'Command Palette',
                      },
                    },
                  },
                  {
                    type: 'component',
                    props: {
                      component: 'CardDescription',
                      componentProps: {
                        children: 'Command component for searchable actions',
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
                      component: 'Command',
                    },
                    children: [
                      {
                        type: 'component',
                        props: {
                          component: 'CommandInput',
                          componentProps: {
                            placeholder: 'Type a command or search...',
                          },
                        },
                      },
                      {
                        type: 'component',
                        props: {
                          component: 'CommandList',
                        },
                        children: [
                          {
                            type: 'component',
                            props: {
                              component: 'CommandEmpty',
                              componentProps: {
                                children: 'No results found.',
                              },
                            },
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'CommandGroup',
                              componentProps: {
                                heading: 'Suggestions',
                              },
                            },
                            children: [
                              {
                                type: 'component',
                                props: {
                                  component: 'CommandItem',
                                  componentProps: {
                                    children: 'Calendar',
                                  },
                                },
                              },
                              {
                                type: 'component',
                                props: {
                                  component: 'CommandItem',
                                  componentProps: {
                                    children: 'Search Emoji',
                                  },
                                },
                              },
                              {
                                type: 'component',
                                props: {
                                  component: 'CommandItem',
                                  componentProps: {
                                    children: 'Calculator',
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
                        children: 'Alert',
                      },
                    },
                  },
                  {
                    type: 'component',
                    props: {
                      component: 'CardDescription',
                      componentProps: {
                        children: 'Alert component for notifications',
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
                        type: 'component',
                        props: {
                          component: 'Alert',
                        },
                        children: [
                          {
                            type: 'component',
                            props: {
                              component: 'AlertTitle',
                              componentProps: {
                                children: 'Default Alert',
                              },
                            },
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'AlertDescription',
                              componentProps: {
                                children: 'This is a default alert message.',
                              },
                            },
                          },
                        ],
                      },
                      {
                        type: 'component',
                        props: {
                          component: 'Alert',
                          componentProps: {
                            variant: 'destructive',
                          },
                        },
                        children: [
                          {
                            type: 'component',
                            props: {
                              component: 'AlertTitle',
                              componentProps: {
                                children: 'Error Alert',
                              },
                            },
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'AlertDescription',
                              componentProps: {
                                children: 'This is a destructive alert message.',
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
                        children: 'Badge Variants',
                      },
                    },
                  },
                  {
                    type: 'component',
                    props: {
                      component: 'CardDescription',
                      componentProps: {
                        children: 'Different badge styles and variants',
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
                      wrap: 'wrap',
                      gap: 2,
                    },
                    children: [
                      {
                        type: 'component',
                        props: {
                          component: 'Badge',
                          componentProps: {
                            children: 'Default',
                          },
                        },
                      },
                      {
                        type: 'component',
                        props: {
                          component: 'Badge',
                          componentProps: {
                            variant: 'secondary',
                            children: 'Secondary',
                          },
                        },
                      },
                      {
                        type: 'component',
                        props: {
                          component: 'Badge',
                          componentProps: {
                            variant: 'destructive',
                            children: 'Destructive',
                          },
                        },
                      },
                      {
                        type: 'component',
                        props: {
                          component: 'Badge',
                          componentProps: {
                            variant: 'outline',
                            children: 'Outline',
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
                        children: 'Loading States',
                      },
                    },
                  },
                  {
                    type: 'component',
                    props: {
                      component: 'CardDescription',
                      componentProps: {
                        children: 'Spinner and Skeleton components',
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
                          align: 'center',
                          gap: 4,
                        },
                        children: [
                          {
                            type: 'component',
                            props: {
                              component: 'Spinner',
                            },
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'Box',
                              componentProps: {
                                children: <span className="text-sm">Loading...</span>,
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
                              component: 'Skeleton',
                              componentProps: {
                                className: 'h-4 w-full',
                              },
                            },
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'Skeleton',
                              componentProps: {
                                className: 'h-4 w-3/4',
                              },
                            },
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'Skeleton',
                              componentProps: {
                                className: 'h-4 w-1/2',
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
  };

  return (
    <div className="min-h-screen">
      <LayoutRenderer config={config} />
    </div>
  );
}


'use client';

import { LayoutRenderer } from '@kaushik-xs/rupa';
import type { LayoutNode } from '@kaushik-xs/rupa';

// Import to register all layouts and components (auto-registered via main package)
import '@kaushik-xs/rupa';

export default function InteractivePage() {
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
                children: <h1 className="text-3xl font-bold">Interactive Components</h1>,
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
                            children: 'Modal',
                          },
                        },
                      },
                      {
                        type: 'component',
                        props: {
                          component: 'CardDescription',
                          componentProps: {
                            children: 'Modal dialog component',
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
                          component: 'Button',
                          componentProps: {
                            children: 'Open Modal',
                            onClick: () => {
                              // Modal would be controlled by state in a real implementation
                              alert('Modal would open here');
                            },
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
                            children: 'Dialog',
                          },
                        },
                      },
                      {
                        type: 'component',
                        props: {
                          component: 'CardDescription',
                          componentProps: {
                            children: 'Dialog component with trigger',
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
                          component: 'Dialog',
                        },
                        children: [
                          {
                            type: 'component',
                            props: {
                              component: 'DialogTrigger',
                              componentProps: {
                                asChild: true,
                              },
                            },
                            children: [
                              {
                                type: 'component',
                                props: {
                                  component: 'Button',
                                  componentProps: {
                                    children: 'Open Dialog',
                                  },
                                },
                              },
                            ],
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'DialogContent',
                            },
                            children: [
                              {
                                type: 'component',
                                props: {
                                  component: 'DialogHeader',
                                },
                                children: [
                                  {
                                    type: 'component',
                                    props: {
                                      component: 'DialogTitle',
                                      componentProps: {
                                        children: 'Dialog Title',
                                      },
                                    },
                                  },
                                  {
                                    type: 'component',
                                    props: {
                                      component: 'DialogDescription',
                                      componentProps: {
                                        children: 'This is a dialog description.',
                                      },
                                    },
                                  },
                                ],
                              },
                              {
                                type: 'component',
                                props: {
                                  component: 'Box',
                                  componentProps: {
                                    children: <p>Dialog content goes here.</p>,
                                  },
                                },
                              },
                              {
                                type: 'component',
                                props: {
                                  component: 'DialogFooter',
                                },
                                children: [
                                  {
                                    type: 'component',
                                    props: {
                                      component: 'Button',
                                      componentProps: {
                                        variant: 'outline',
                                        children: 'Cancel',
                                      },
                                    },
                                  },
                                  {
                                    type: 'component',
                                    props: {
                                      component: 'Button',
                                      componentProps: {
                                        children: 'Confirm',
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
                            children: 'Popover',
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
                          component: 'Popover',
                        },
                        children: [
                          {
                            type: 'component',
                            props: {
                              component: 'PopoverTrigger',
                              componentProps: {
                                asChild: true,
                              },
                            },
                            children: [
                              {
                                type: 'component',
                                props: {
                                  component: 'Button',
                                  componentProps: {
                                    variant: 'outline',
                                    children: 'Open Popover',
                                  },
                                },
                              },
                            ],
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'PopoverContent',
                            },
                            children: [
                              {
                                type: 'component',
                                props: {
                                  component: 'Box',
                                  componentProps: {
                                    children: (
                                      <div className="space-y-2">
                                        <h4 className="font-medium">Popover Title</h4>
                                        <p className="text-sm text-muted-foreground">
                                          This is popover content.
                                        </p>
                                      </div>
                                    ),
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
                            children: 'Tooltip',
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
                          component: 'TooltipProvider',
                        },
                        children: [
                          {
                            type: 'component',
                            props: {
                              component: 'Tooltip',
                            },
                            children: [
                              {
                                type: 'component',
                                props: {
                                  component: 'TooltipTrigger',
                                  componentProps: {
                                    asChild: true,
                                  },
                                },
                                children: [
                                  {
                                    type: 'component',
                                    props: {
                                      component: 'Button',
                                      componentProps: {
                                        variant: 'outline',
                                        children: 'Hover for Tooltip',
                                      },
                                    },
                                  },
                                ],
                              },
                              {
                                type: 'component',
                                props: {
                                  component: 'TooltipContent',
                                },
                                children: [
                                  {
                                    type: 'component',
                                    props: {
                                      component: 'Box',
                                      componentProps: {
                                        children: 'This is a tooltip',
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
                            children: 'Dropdown Menu',
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
                          component: 'DropdownMenu',
                        },
                        children: [
                          {
                            type: 'component',
                            props: {
                              component: 'DropdownMenuTrigger',
                              componentProps: {
                                asChild: true,
                              },
                            },
                            children: [
                              {
                                type: 'component',
                                props: {
                                  component: 'Button',
                                  componentProps: {
                                    variant: 'outline',
                                    children: 'Open Menu',
                                  },
                                },
                              },
                            ],
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'DropdownMenuContent',
                            },
                            children: [
                              {
                                type: 'component',
                                props: {
                                  component: 'DropdownMenuItem',
                                  componentProps: {
                                    children: 'Profile',
                                  },
                                },
                              },
                              {
                                type: 'component',
                                props: {
                                  component: 'DropdownMenuItem',
                                  componentProps: {
                                    children: 'Settings',
                                  },
                                },
                              },
                              {
                                type: 'component',
                                props: {
                                  component: 'DropdownMenuSeparator',
                                },
                              },
                              {
                                type: 'component',
                                props: {
                                  component: 'DropdownMenuItem',
                                  componentProps: {
                                    children: 'Logout',
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
                            children: 'Sheet',
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
                          component: 'Sheet',
                        },
                        children: [
                          {
                            type: 'component',
                            props: {
                              component: 'SheetTrigger',
                              componentProps: {
                                asChild: true,
                              },
                            },
                            children: [
                              {
                                type: 'component',
                                props: {
                                  component: 'Button',
                                  componentProps: {
                                    variant: 'outline',
                                    children: 'Open Sheet',
                                  },
                                },
                              },
                            ],
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'SheetContent',
                            },
                            children: [
                              {
                                type: 'component',
                                props: {
                                  component: 'SheetHeader',
                                },
                                children: [
                                  {
                                    type: 'component',
                                    props: {
                                      component: 'SheetTitle',
                                      componentProps: {
                                        children: 'Sheet Title',
                                      },
                                    },
                                  },
                                  {
                                    type: 'component',
                                    props: {
                                      component: 'SheetDescription',
                                      componentProps: {
                                        children: 'This is a sheet description.',
                                      },
                                    },
                                  },
                                ],
                              },
                              {
                                type: 'component',
                                props: {
                                  component: 'Box',
                                  componentProps: {
                                    children: <p>Sheet content goes here.</p>,
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
      <LayoutRenderer config={config} />
    </div>
  );
}


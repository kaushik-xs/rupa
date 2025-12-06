'use client';

import { LayoutRenderer } from '@kaushik91/rupa';
import type { LayoutNode } from '@kaushik91/rupa';

// Import to register all layouts and components (auto-registered via main package)
import '@kaushik91/rupa';

export default function FormsPage() {
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
                            children: 'Forms',
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
                children: <h1 className="text-3xl font-bold">Forms & Inputs</h1>,
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
                        children: 'Button Groups',
                      },
                    },
                  },
                  {
                    type: 'component',
                    props: {
                      component: 'CardDescription',
                      componentProps: {
                        children: 'ButtonGroup component for related actions',
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
                                children: 'Save',
                              },
                            },
                          },
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
                                variant: 'outline',
                                children: 'Delete',
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
                                children: 'Edit',
                              },
                            },
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'Button',
                              componentProps: {
                                children: 'View',
                              },
                            },
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'Button',
                              componentProps: {
                                children: 'Share',
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
                        children: 'Basic Form Components',
                      },
                    },
                  },
                  {
                    type: 'component',
                    props: {
                      component: 'CardDescription',
                      componentProps: {
                        children: 'All form input components available in Rupa',
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
                    type: 'grid',
                    props: {
                      columns: { default: 1, md: 2 },
                      gap: 4,
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
                                htmlFor: 'text-input',
                                children: 'Text Input',
                              },
                            },
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'Input',
                              componentProps: {
                                id: 'text-input',
                                placeholder: 'Enter text...',
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
                                htmlFor: 'email-input',
                                children: 'Email Input',
                              },
                            },
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'Input',
                              componentProps: {
                                id: 'email-input',
                                type: 'email',
                                placeholder: 'email@example.com',
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
                                htmlFor: 'textarea',
                                children: 'Textarea',
                              },
                            },
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'Textarea',
                              componentProps: {
                                id: 'textarea',
                                placeholder: 'Enter your message...',
                                rows: 4,
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
                                htmlFor: 'select',
                                children: 'Select',
                              },
                            },
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'Select',
                              componentProps: {
                                id: 'select',
                                options: [
                                  { value: 'option1', label: 'Option 1' },
                                  { value: 'option2', label: 'Option 2' },
                                  { value: 'option3', label: 'Option 3' },
                                ],
                                placeholder: 'Select an option...',
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
                        children: 'Checkboxes & Switches',
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
                          gap: 2,
                        },
                        children: [
                          {
                            type: 'component',
                            props: {
                              component: 'Checkbox',
                              componentProps: {
                                id: 'checkbox1',
                              },
                            },
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'Label',
                              componentProps: {
                                htmlFor: 'checkbox1',
                                children: 'Accept terms and conditions',
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
                                id: 'checkbox2',
                                defaultChecked: true,
                              },
                            },
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'Label',
                              componentProps: {
                                htmlFor: 'checkbox2',
                                children: 'Subscribe to newsletter',
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
                              component: 'Switch',
                              componentProps: {
                                id: 'switch1',
                              },
                            },
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'Label',
                              componentProps: {
                                htmlFor: 'switch1',
                                children: 'Enable notifications',
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
                        children: 'Radio Group',
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
                      component: 'RadioGroup',
                      componentProps: {
                        defaultValue: 'option1',
                      },
                    },
                    children: [
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
                              component: 'RadioGroupItem',
                              componentProps: {
                                value: 'option1',
                                id: 'option1',
                              },
                            },
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'Label',
                              componentProps: {
                                htmlFor: 'option1',
                                children: 'Option 1',
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
                              component: 'RadioGroupItem',
                              componentProps: {
                                value: 'option2',
                                id: 'option2',
                              },
                            },
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'Label',
                              componentProps: {
                                htmlFor: 'option2',
                                children: 'Option 2',
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
                              component: 'RadioGroupItem',
                              componentProps: {
                                value: 'option3',
                                id: 'option3',
                              },
                            },
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'Label',
                              componentProps: {
                                htmlFor: 'option3',
                                children: 'Option 3',
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
                        children: 'Slider & Progress',
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
                          direction: 'column',
                          gap: 2,
                        },
                        children: [
                          {
                            type: 'component',
                            props: {
                              component: 'Label',
                              componentProps: {
                                children: 'Volume',
                              },
                            },
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'Slider',
                              componentProps: {
                                defaultValue: [50],
                                max: 100,
                                step: 1,
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
                                children: 'Progress',
                              },
                            },
                          },
                          {
                            type: 'component',
                            props: {
                              component: 'Progress',
                              componentProps: {
                                value: 65,
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
                        children: 'Multi-Step Form (Wizard)',
                      },
                    },
                  },
                  {
                    type: 'component',
                    props: {
                      component: 'CardDescription',
                      componentProps: {
                        children: 'Example of wizardLayout for multi-step forms',
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
                    type: 'wizardLayout',
                    props: {
                      steps: [
                        { id: 'step1', title: 'Personal Info' },
                        { id: 'step2', title: 'Address' },
                        { id: 'step3', title: 'Review' },
                      ],
                    },
                    children: [
                      {
                        type: 'component',
                        props: {
                          component: 'Box',
                          componentProps: {
                            className: 'space-y-4',
                            children: (
                              <div className="space-y-4">
                                <div>
                                  <label className="block text-sm font-medium mb-2">First Name</label>
                                  <input type="text" className="w-full p-2 border rounded" placeholder="John" />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium mb-2">Last Name</label>
                                  <input type="text" className="w-full p-2 border rounded" placeholder="Doe" />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium mb-2">Email</label>
                                  <input type="email" className="w-full p-2 border rounded" placeholder="john@example.com" />
                                </div>
                              </div>
                            ),
                          },
                        },
                      },
                      {
                        type: 'component',
                        props: {
                          component: 'Box',
                          componentProps: {
                            className: 'space-y-4',
                            children: (
                              <div className="space-y-4">
                                <div>
                                  <label className="block text-sm font-medium mb-2">Street Address</label>
                                  <input type="text" className="w-full p-2 border rounded" placeholder="123 Main St" />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium mb-2">City</label>
                                  <input type="text" className="w-full p-2 border rounded" placeholder="San Francisco" />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium mb-2">ZIP Code</label>
                                  <input type="text" className="w-full p-2 border rounded" placeholder="94102" />
                                </div>
                              </div>
                            ),
                          },
                        },
                      },
                      {
                        type: 'component',
                        props: {
                          component: 'Box',
                          componentProps: {
                            children: (
                              <div className="text-center py-8">
                                <p className="text-lg mb-4">Review your information</p>
                                <p className="text-muted-foreground">All information looks good!</p>
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
    ],
  };

  return (
    <div className="min-h-screen">
      <LayoutRenderer config={config} />
    </div>
  );
}


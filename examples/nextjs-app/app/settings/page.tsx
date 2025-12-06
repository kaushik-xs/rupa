'use client';

import { LayoutRenderer } from '@kaushik91/rupa';
import type { LayoutNode } from '@kaushik91/rupa';

// Import to register all layouts and components (auto-registered via main package)
import '@kaushik91/rupa';
import { settingsCategories } from '@/lib/data';

export default function SettingsPage() {
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
          gap: 6,
        },
        children: [
          {
            type: 'component',
            props: {
              component: 'Box',
              componentProps: {
                children: <h1 className="text-3xl font-bold">Settings</h1>,
              },
            },
          },
          {
            type: 'component',
            props: {
              component: 'Tabs',
              componentProps: {
                defaultValue: settingsCategories[0].id,
              },
            },
            children: [
              {
                type: 'component',
                props: {
                  component: 'TabsList',
                },
                children: settingsCategories.map((category) => ({
                  type: 'component',
                  props: {
                    component: 'TabsTrigger',
                    componentProps: {
                      value: category.id,
                      children: (
                        <span className="flex items-center gap-2">
                          <span>{category.icon}</span>
                          <span>{category.name}</span>
                        </span>
                      ),
                    },
                  },
                })),
              },
              ...settingsCategories.map((category) => ({
                type: 'component',
                props: {
                  component: 'TabsContent',
                  componentProps: {
                    value: category.id,
                  },
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
                                children: category.name,
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
                              component: 'Accordion',
                              componentProps: {
                                type: 'single',
                                collapsible: true,
                              },
                            },
                            children: category.items.map((item) => ({
                              type: 'component',
                              props: {
                                component: 'AccordionItem',
                                componentProps: {
                                  value: item.id,
                                },
                              },
                              children: [
                                {
                                  type: 'component',
                                  props: {
                                    component: 'AccordionTrigger',
                                    componentProps: {
                                      children: item.label,
                                    },
                                  },
                                },
                                {
                                  type: 'component',
                                  props: {
                                    component: 'AccordionContent',
                                  },
                                  children: [
                                    {
                                      type: 'flex',
                                      props: {
                                        direction: 'column',
                                        gap: 4,
                                      },
                                      children: [
                                        ...(item.type === 'switch' ? [{
                                          type: 'flex',
                                          props: {
                                            align: 'center',
                                            justify: 'between',
                                          },
                                          children: [
                                            {
                                              type: 'component',
                                              props: {
                                                component: 'Box',
                                                componentProps: {
                                                  children: (
                                                    <span className="text-sm text-muted-foreground">
                                                      {typeof item.value === 'boolean' ? (item.value ? 'Enabled' : 'Disabled') : String(item.value)}
                                                    </span>
                                                  ),
                                                },
                                              },
                                            },
                                            {
                                              type: 'component',
                                              props: {
                                                component: 'Switch',
                                                componentProps: {
                                                  defaultChecked: item.value as boolean,
                                                },
                                              },
                                            },
                                          ],
                                        }] : item.type === 'select' ? [{
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
                                                  children: 'Select Option',
                                                },
                                              },
                                            },
                                            {
                                              type: 'component',
                                              props: {
                                                component: 'Select',
                                                componentProps: {
                                                  options: item.options?.map(opt => ({ value: opt, label: opt })) || [],
                                                  defaultValue: item.value as string,
                                                },
                                              },
                                            },
                                          ],
                                        }] : [{
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
                                                  children: 'Value',
                                                },
                                              },
                                            },
                                            {
                                              type: 'component',
                                              props: {
                                                component: 'Input',
                                                componentProps: {
                                                  defaultValue: item.value as string,
                                                },
                                              },
                                            },
                                          ],
                                        }]),
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
                  },
                ],
              })),
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

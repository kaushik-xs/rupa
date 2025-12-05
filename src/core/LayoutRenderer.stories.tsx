import type { Meta, StoryObj } from '@storybook/react';
import { LayoutRenderer } from './layout-renderer';
import { LayoutNode } from '../types/layout';
// Import to register all layouts and components
import './register-layouts';
import './register-components';

const meta: Meta<typeof LayoutRenderer> = {
  title: 'Core/LayoutRenderer',
  component: LayoutRenderer,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LayoutRenderer>;

export const SimpleFlex: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'flex',
      props: {
        gap: 4,
        padding: 4,
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'Button',
            componentProps: { children: 'Button 1' },
          },
        },
        {
          type: 'component',
          props: {
            component: 'Button',
            componentProps: { variant: 'secondary', children: 'Button 2' },
          },
        },
        {
          type: 'component',
          props: {
            component: 'Button',
            componentProps: { variant: 'outline', children: 'Button 3' },
          },
        },
      ],
    };
    return <LayoutRenderer config={config} />;
  },
};

export const NestedLayouts: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'container',
      props: {
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
                component: 'Alert',
              },
              children: [
                {
                  type: 'component',
                  props: {
                    component: 'AlertTitle',
                    componentProps: {
                      children: 'Welcome',
                    },
                  },
                },
                {
                  type: 'component',
                  props: {
                    component: 'AlertDescription',
                    componentProps: {
                      children: 'This is a nested layout example',
                    },
                  },
                },
              ],
            },
            {
              type: 'grid',
              props: {
                columns: { default: 1, md: 2, lg: 3 },
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
                              children: 'Card 1',
                            },
                          },
                        },
                      ],
                    },
                    {
                      type: 'component',
                      props: {
                        component: 'CardContent',
                        componentProps: {
                          children: 'Content for card 1',
                        },
                      },
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
                              children: 'Card 2',
                            },
                          },
                        },
                      ],
                    },
                    {
                      type: 'component',
                      props: {
                        component: 'CardContent',
                        componentProps: {
                          children: 'Content for card 2',
                        },
                      },
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
                              children: 'Card 3',
                            },
                          },
                        },
                      ],
                    },
                    {
                      type: 'component',
                      props: {
                        component: 'CardContent',
                        componentProps: {
                          children: 'Content for card 3',
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
    };
    return <LayoutRenderer config={config} />;
  },
};

export const ResponsiveGrid: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'grid',
      props: {
        columns: { default: 1, sm: 2, md: 3, lg: 4 },
        gap: { default: 2, md: 4 },
        padding: 4,
      },
      children: Array.from({ length: 8 }).map((_, i) => ({
        type: 'component',
        props: {
          component: 'Badge',
          componentProps: {
            children: `Item ${i + 1}`,
            variant: i % 2 === 0 ? 'default' : 'secondary',
          },
        },
      })),
    };
    return <LayoutRenderer config={config} />;
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const ConditionalRendering: Story = {
  render: () => {
    const showAdvanced = true;
    const config: LayoutNode = {
      type: 'flex',
      props: {
        direction: 'column',
        gap: 4,
        padding: 4,
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'Input',
            componentProps: {
              placeholder: 'Basic input',
            },
          },
        },
        {
          type: 'component',
          props: {
            component: 'Input',
            componentProps: {
              placeholder: 'Advanced input',
            },
          },
          condition: showAdvanced,
        },
        {
          type: 'component',
          props: {
            component: 'Button',
            componentProps: {
              children: 'Submit',
            },
          },
        },
      ],
    };
    return <LayoutRenderer config={config} />;
  },
};

export const FormComponents: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'container',
      props: {
        maxWidth: 'md',
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
                  children: <h2 className="text-2xl font-bold">Form Example</h2>,
                },
              },
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
                    direction: 'column',
                    gap: 2,
                  },
                  children: [
                    {
                      type: 'component',
                      props: {
                        component: 'Label',
                        componentProps: {
                          children: 'Email',
                        },
                      },
                    },
                    {
                      type: 'component',
                      props: {
                        component: 'Input',
                        componentProps: {
                          type: 'email',
                          placeholder: 'Enter your email',
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
                          children: 'Message',
                        },
                      },
                    },
                    {
                      type: 'component',
                      props: {
                        component: 'Textarea',
                        componentProps: {
                          placeholder: 'Enter your message',
                          rows: 4,
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
                          id: 'terms',
                        },
                      },
                    },
                    {
                      type: 'component',
                      props: {
                        component: 'Label',
                        componentProps: {
                          htmlFor: 'terms',
                          children: 'Accept terms and conditions',
                        },
                      },
                    },
                  ],
                },
                {
                  type: 'component',
                  props: {
                    component: 'Button',
                    componentProps: {
                      children: 'Submit',
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

export const ChartExample: Story = {
  render: () => {
    const chartData = [
      { name: 'Jan', sales: 4000, revenue: 2400 },
      { name: 'Feb', sales: 3000, revenue: 1398 },
      { name: 'Mar', sales: 2000, revenue: 9800 },
      { name: 'Apr', sales: 2780, revenue: 3908 },
      { name: 'May', sales: 1890, revenue: 4800 },
      { name: 'Jun', sales: 2390, revenue: 3800 },
    ];

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
                  children: <h2 className="text-2xl font-bold">Sales Dashboard</h2>,
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'LineChart',
                componentProps: {
                  data: chartData,
                  lines: [
                    { dataKey: 'sales', name: 'Sales' },
                    { dataKey: 'revenue', name: 'Revenue' },
                  ],
                  height: 300,
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

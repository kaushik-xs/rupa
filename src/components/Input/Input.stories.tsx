import type { Meta, StoryObj } from '@storybook/react';
import { LayoutRenderer } from '../../core/layout-renderer';
import { LayoutNode } from '../../types/layout';
// Import to register all components
import '../../core/register-components';

const meta: Meta<typeof LayoutRenderer> = {
  title: 'Components/Input',
  component: LayoutRenderer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LayoutRenderer>;

export const Default: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'component',
      props: {
        component: 'Input',
        componentProps: {
          placeholder: 'Enter text...',
        },
      },
    };
    return <LayoutRenderer config={config} />;
  },
};

export const Types: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'flex',
      props: {
        direction: 'column',
        gap: 4,
        className: 'w-64',
      },
      children: [
        {
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
                  children: <label className="block text-sm font-medium mb-2">Text Input</label>,
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'Input',
                componentProps: {
                  type: 'text',
                  placeholder: 'Enter text...',
                },
              },
            },
          ],
        },
        {
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
                  children: <label className="block text-sm font-medium mb-2">Email Input</label>,
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'Input',
                componentProps: {
                  type: 'email',
                  placeholder: 'email@example.com',
                },
              },
            },
          ],
        },
        {
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
                  children: <label className="block text-sm font-medium mb-2">Password Input</label>,
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'Input',
                componentProps: {
                  type: 'password',
                  placeholder: 'Enter password',
                },
              },
            },
          ],
        },
        {
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
                  children: <label className="block text-sm font-medium mb-2">Number Input</label>,
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'Input',
                componentProps: {
                  type: 'number',
                  placeholder: 'Enter number',
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

export const Disabled: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'component',
      props: {
        component: 'Input',
        componentProps: {
          placeholder: 'Disabled input',
          disabled: true,
        },
      },
    };
    return <LayoutRenderer config={config} />;
  },
};

export const WithValue: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'component',
      props: {
        component: 'Input',
        componentProps: {
          defaultValue: 'Pre-filled value',
        },
      },
    };
    return <LayoutRenderer config={config} />;
  },
};


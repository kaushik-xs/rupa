import type { Meta, StoryObj } from '@storybook/react';
import { LayoutRenderer } from '../../core/layout-renderer';
import { LayoutNode } from '../../types/layout';
// Import to register all components
import '../../core/register-components';

const meta: Meta<typeof LayoutRenderer> = {
  title: 'Components/Badge',
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
        component: 'Badge',
        componentProps: {
          children: 'Badge',
        },
      },
    };
    return <LayoutRenderer config={config} />;
  },
};

export const Variants: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'flex',
      props: {
        gap: 4,
        wrap: true,
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'Badge',
            componentProps: {
              variant: 'default',
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
    };
    return <LayoutRenderer config={config} />;
  },
};

export const WithText: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'flex',
      props: {
        direction: 'column',
        gap: 4,
      },
      children: [
        {
          type: 'flex',
          props: {
            gap: 2,
            align: 'center',
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'Box',
                componentProps: {
                  children: <span>Status:</span>,
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'Badge',
                componentProps: {
                  children: 'Active',
                },
              },
            },
          ],
        },
        {
          type: 'flex',
          props: {
            gap: 2,
            align: 'center',
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'Box',
                componentProps: {
                  children: <span>Status:</span>,
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'Badge',
                componentProps: {
                  variant: 'secondary',
                  children: 'Pending',
                },
              },
            },
          ],
        },
        {
          type: 'flex',
          props: {
            gap: 2,
            align: 'center',
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'Box',
                componentProps: {
                  children: <span>Status:</span>,
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'Badge',
                componentProps: {
                  variant: 'destructive',
                  children: 'Error',
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


import type { Meta, StoryObj } from '@storybook/react';
import { LayoutRenderer } from '../../core/layout-renderer';
import { LayoutNode } from '../../types/layout';
import '../../core/register-components';

const meta: Meta<typeof LayoutRenderer> = {
  title: 'Components/Switch',
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
        component: 'Switch',
        componentProps: {},
      },
    };
    return <LayoutRenderer config={config} />;
  },
};

export const WithLabel: Story = {
  render: () => {
    const config: LayoutNode = {
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
              id: 'notifications',
            },
          },
        },
        {
          type: 'component',
          props: {
            component: 'Label',
            componentProps: {
              htmlFor: 'notifications',
              children: 'Enable notifications',
            },
          },
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
        component: 'Switch',
        componentProps: {
          disabled: true,
        },
      },
    };
    return <LayoutRenderer config={config} />;
  },
};


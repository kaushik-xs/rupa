import type { Meta, StoryObj } from '@storybook/react';
import { LayoutRenderer } from '../../core/layout-renderer';
import { LayoutNode } from '../../types/layout';
import '../../core/register-components';

const meta: Meta<typeof LayoutRenderer> = {
  title: 'Components/Spinner',
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
        component: 'Spinner',
        componentProps: {},
      },
    };
    return <LayoutRenderer config={config} />;
  },
};

export const Sizes: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'flex',
      props: {
        gap: 4,
        align: 'center',
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'Spinner',
            componentProps: {
              size: 'sm',
            },
          },
        },
        {
          type: 'component',
          props: {
            component: 'Spinner',
            componentProps: {
              size: 'default',
            },
          },
        },
        {
          type: 'component',
          props: {
            component: 'Spinner',
            componentProps: {
              size: 'lg',
            },
          },
        },
      ],
    };
    return <LayoutRenderer config={config} />;
  },
};


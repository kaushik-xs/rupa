import type { Meta, StoryObj } from '@storybook/react';
import { LayoutRenderer } from '../../core/layout-renderer';
import { LayoutNode } from '../../types/layout';
import '../../core/register-components';

const meta: Meta<typeof LayoutRenderer> = {
  title: 'Components/Progress',
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
        component: 'Progress',
        componentProps: {
          value: 33,
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
        direction: 'column',
        gap: 4,
        className: 'w-64',
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'Progress',
            componentProps: {
              value: 33,
              variant: 'default',
            },
          },
        },
        {
          type: 'component',
          props: {
            component: 'Progress',
            componentProps: {
              value: 66,
              variant: 'success',
            },
          },
        },
        {
          type: 'component',
          props: {
            component: 'Progress',
            componentProps: {
              value: 100,
              variant: 'warning',
            },
          },
        },
      ],
    };
    return <LayoutRenderer config={config} />;
  },
};


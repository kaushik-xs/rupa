import type { Meta, StoryObj } from '@storybook/react';
import { LayoutRenderer } from '../../core/layout-renderer';
import { LayoutNode } from '../../types/layout';
import '../../core/register-components';

const meta: Meta<typeof LayoutRenderer> = {
  title: 'Components/Skeleton',
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
        component: 'Skeleton',
        componentProps: {
          className: 'h-4 w-[250px]',
        },
      },
    };
    return <LayoutRenderer config={config} />;
  },
};

export const CardSkeleton: Story = {
  render: () => {
    const config: LayoutNode = {
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
                component: 'Skeleton',
                componentProps: {
                  className: 'h-4 w-[200px]',
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'Skeleton',
                componentProps: {
                  className: 'h-4 w-[150px]',
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
                component: 'Skeleton',
                componentProps: {
                  className: 'h-4 w-full',
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


import type { Meta, StoryObj } from '@storybook/react';
import { LayoutRenderer } from '../../core/layout-renderer';
import { LayoutNode } from '../../types/layout';
import '../../core/register-components';

const meta: Meta<typeof LayoutRenderer> = {
  title: 'Components/Popover',
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
                  children: 'Open popover',
                },
              },
            },
          ],
        },
        {
          type: 'component',
          props: {
            component: 'PopoverContent',
            componentProps: {
              children: 'This is a popover content',
            },
          },
        },
      ],
    };
    return <LayoutRenderer config={config} />;
  },
};


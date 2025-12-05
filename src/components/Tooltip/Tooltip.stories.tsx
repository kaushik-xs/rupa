import type { Meta, StoryObj } from '@storybook/react';
import { LayoutRenderer } from '../../core/layout-renderer';
import { LayoutNode } from '../../types/layout';
import '../../core/register-components';

const meta: Meta<typeof LayoutRenderer> = {
  title: 'Components/Tooltip',
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
        component: 'TooltipProvider',
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'Tooltip',
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'TooltipTrigger',
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
                      variant: 'outline',
                      children: 'Hover me',
                    },
                  },
                },
              ],
            },
            {
              type: 'component',
              props: {
                component: 'TooltipContent',
                componentProps: {
                  children: 'This is a tooltip',
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


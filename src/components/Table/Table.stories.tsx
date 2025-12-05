import type { Meta, StoryObj } from '@storybook/react';
import { LayoutRenderer } from '../../core/layout-renderer';
import { LayoutNode } from '../../types/layout';
import '../../core/register-components';

const meta: Meta<typeof LayoutRenderer> = {
  title: 'Components/Table',
  component: LayoutRenderer,
  parameters: {
    layout: 'padded',
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
        component: 'Table',
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'TableHeader',
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'TableRow',
              },
              children: [
                {
                  type: 'component',
                  props: {
                    component: 'TableHead',
                    componentProps: {
                      children: 'Name',
                    },
                  },
                },
                {
                  type: 'component',
                  props: {
                    component: 'TableHead',
                    componentProps: {
                      children: 'Email',
                    },
                  },
                },
                {
                  type: 'component',
                  props: {
                    component: 'TableHead',
                    componentProps: {
                      children: 'Role',
                    },
                  },
                },
              ],
            },
          ],
        },
        {
          type: 'component',
          props: {
            component: 'TableBody',
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'TableRow',
              },
              children: [
                {
                  type: 'component',
                  props: {
                    component: 'TableCell',
                    componentProps: {
                      children: 'John Doe',
                    },
                  },
                },
                {
                  type: 'component',
                  props: {
                    component: 'TableCell',
                    componentProps: {
                      children: 'john@example.com',
                    },
                  },
                },
                {
                  type: 'component',
                  props: {
                    component: 'TableCell',
                    componentProps: {
                      children: 'Admin',
                    },
                  },
                },
              ],
            },
            {
              type: 'component',
              props: {
                component: 'TableRow',
              },
              children: [
                {
                  type: 'component',
                  props: {
                    component: 'TableCell',
                    componentProps: {
                      children: 'Jane Smith',
                    },
                  },
                },
                {
                  type: 'component',
                  props: {
                    component: 'TableCell',
                    componentProps: {
                      children: 'jane@example.com',
                    },
                  },
                },
                {
                  type: 'component',
                  props: {
                    component: 'TableCell',
                    componentProps: {
                      children: 'User',
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


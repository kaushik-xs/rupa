import type { Meta, StoryObj } from '@storybook/react';
import { LayoutRenderer } from '../../core/layout-renderer';
import { LayoutNode } from '../../types/layout';
import '../../core/register-components';

const meta: Meta<typeof LayoutRenderer> = {
  title: 'Components/Tabs',
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
        component: 'Tabs',
        componentProps: {
          defaultValue: 'tab1',
        },
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'TabsList',
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'TabsTrigger',
                componentProps: {
                  value: 'tab1',
                  children: 'Tab 1',
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'TabsTrigger',
                componentProps: {
                  value: 'tab2',
                  children: 'Tab 2',
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'TabsTrigger',
                componentProps: {
                  value: 'tab3',
                  children: 'Tab 3',
                },
              },
            },
          ],
        },
        {
          type: 'component',
          props: {
            component: 'TabsContent',
            componentProps: {
              value: 'tab1',
              children: 'Content for Tab 1',
            },
          },
        },
        {
          type: 'component',
          props: {
            component: 'TabsContent',
            componentProps: {
              value: 'tab2',
              children: 'Content for Tab 2',
            },
          },
        },
        {
          type: 'component',
          props: {
            component: 'TabsContent',
            componentProps: {
              value: 'tab3',
              children: 'Content for Tab 3',
            },
          },
        },
      ],
    };
    return <LayoutRenderer config={config} />;
  },
};


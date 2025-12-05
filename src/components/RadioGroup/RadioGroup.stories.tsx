import type { Meta, StoryObj } from '@storybook/react';
import { LayoutRenderer } from '../../core/layout-renderer';
import { LayoutNode } from '../../types/layout';
import '../../core/register-components';

const meta: Meta<typeof LayoutRenderer> = {
  title: 'Components/RadioGroup',
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
        component: 'RadioGroup',
        componentProps: {
          defaultValue: 'option1',
        },
      },
      children: [
        {
          type: 'flex',
          props: {
            align: 'center',
            gap: 2,
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'RadioGroupItem',
                componentProps: {
                  value: 'option1',
                  id: 'option1',
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'Label',
                componentProps: {
                  htmlFor: 'option1',
                  children: 'Option 1',
                },
              },
            },
          ],
        },
        {
          type: 'flex',
          props: {
            align: 'center',
            gap: 2,
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'RadioGroupItem',
                componentProps: {
                  value: 'option2',
                  id: 'option2',
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'Label',
                componentProps: {
                  htmlFor: 'option2',
                  children: 'Option 2',
                },
              },
            },
          ],
        },
        {
          type: 'flex',
          props: {
            align: 'center',
            gap: 2,
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'RadioGroupItem',
                componentProps: {
                  value: 'option3',
                  id: 'option3',
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'Label',
                componentProps: {
                  htmlFor: 'option3',
                  children: 'Option 3',
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


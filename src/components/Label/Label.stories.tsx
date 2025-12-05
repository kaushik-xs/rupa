import type { Meta, StoryObj } from '@storybook/react';
import { LayoutRenderer } from '../../core/layout-renderer';
import { LayoutNode } from '../../types/layout';
import '../../core/register-components';

const meta: Meta<typeof LayoutRenderer> = {
  title: 'Components/Label',
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
        component: 'Label',
        componentProps: {
          children: 'Label',
        },
      },
    };
    return <LayoutRenderer config={config} />;
  },
};

export const WithInput: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'flex',
      props: {
        direction: 'column',
        gap: 2,
        className: 'w-64',
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'Label',
            componentProps: {
              htmlFor: 'email',
              children: 'Email',
            },
          },
        },
        {
          type: 'component',
          props: {
            component: 'Input',
            componentProps: {
              id: 'email',
              type: 'email',
              placeholder: 'Enter your email',
            },
          },
        },
      ],
    };
    return <LayoutRenderer config={config} />;
  },
};


import type { Meta, StoryObj } from '@storybook/react';
import { LayoutRenderer } from '../../core/layout-renderer';
import { LayoutNode } from '../../types/layout';
import '../../core/register-components';

const meta: Meta<typeof LayoutRenderer> = {
  title: 'Components/Textarea',
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
        component: 'Textarea',
        componentProps: {
          placeholder: 'Enter your message...',
        },
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
        direction: 'column',
        gap: 2,
        className: 'w-96',
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'Label',
            componentProps: {
              children: 'Message',
            },
          },
        },
        {
          type: 'component',
          props: {
            component: 'Textarea',
            componentProps: {
              placeholder: 'Enter your message...',
              rows: 4,
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
        component: 'Textarea',
        componentProps: {
          placeholder: 'Disabled textarea',
          disabled: true,
        },
      },
    };
    return <LayoutRenderer config={config} />;
  },
};


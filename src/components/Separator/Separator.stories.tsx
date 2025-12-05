import type { Meta, StoryObj } from '@storybook/react';
import { LayoutRenderer } from '../../core/layout-renderer';
import { LayoutNode } from '../../types/layout';
import '../../core/register-components';

const meta: Meta<typeof LayoutRenderer> = {
  title: 'Components/Separator',
  component: LayoutRenderer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LayoutRenderer>;

export const Horizontal: Story = {
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
            component: 'Box',
            componentProps: {
              children: 'Content above',
            },
          },
        },
        {
          type: 'component',
          props: {
            component: 'Separator',
            componentProps: {
              orientation: 'horizontal',
            },
          },
        },
        {
          type: 'component',
          props: {
            component: 'Box',
            componentProps: {
              children: 'Content below',
            },
          },
        },
      ],
    };
    return <LayoutRenderer config={config} />;
  },
};

export const Vertical: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'flex',
      props: {
        gap: 4,
        className: 'h-20',
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'Box',
            componentProps: {
              children: 'Left',
            },
          },
        },
        {
          type: 'component',
          props: {
            component: 'Separator',
            componentProps: {
              orientation: 'vertical',
            },
          },
        },
        {
          type: 'component',
          props: {
            component: 'Box',
            componentProps: {
              children: 'Right',
            },
          },
        },
      ],
    };
    return <LayoutRenderer config={config} />;
  },
};


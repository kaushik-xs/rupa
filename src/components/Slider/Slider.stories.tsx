import type { Meta, StoryObj } from '@storybook/react';
import { LayoutRenderer } from '../../core/layout-renderer';
import { LayoutNode } from '../../types/layout';
import '../../core/register-components';

const meta: Meta<typeof LayoutRenderer> = {
  title: 'Components/Slider',
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
        component: 'Slider',
        componentProps: {
          defaultValue: [50],
          max: 100,
          step: 1,
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
        className: 'w-64',
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'Label',
            componentProps: {
              children: 'Volume',
            },
          },
        },
        {
          type: 'component',
          props: {
            component: 'Slider',
            componentProps: {
              defaultValue: [50],
              max: 100,
            },
          },
        },
      ],
    };
    return <LayoutRenderer config={config} />;
  },
};

export const Range: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'component',
      props: {
        component: 'Slider',
        componentProps: {
          defaultValue: [20, 80],
          max: 100,
        },
      },
    };
    return <LayoutRenderer config={config} />;
  },
};


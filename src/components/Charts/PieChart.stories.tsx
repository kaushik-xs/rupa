import type { Meta, StoryObj } from '@storybook/react';
import { LayoutRenderer } from '../../core/layout-renderer';
import { LayoutNode } from '../../types/layout';
import '../../core/register-components';

const meta: Meta<typeof LayoutRenderer> = {
  title: 'Components/Charts/PieChart',
  component: LayoutRenderer,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LayoutRenderer>;

const sampleData = [
  { name: 'Desktop', value: 400 },
  { name: 'Mobile', value: 300 },
  { name: 'Tablet', value: 200 },
  { name: 'Other', value: 100 },
];

export const Default: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'component',
      props: {
        component: 'PieChart',
        componentProps: {
          data: sampleData,
          height: 300,
        },
      },
    };
    return <LayoutRenderer config={config} />;
  },
};

export const Donut: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'component',
      props: {
        component: 'PieChart',
        componentProps: {
          data: sampleData,
          height: 300,
          innerRadius: 60,
          outerRadius: 100,
        },
      },
    };
    return <LayoutRenderer config={config} />;
  },
};


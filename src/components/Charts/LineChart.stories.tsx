import type { Meta, StoryObj } from '@storybook/react';
import { LayoutRenderer } from '../../core/layout-renderer';
import { LayoutNode } from '../../types/layout';
import '../../core/register-components';

const meta: Meta<typeof LayoutRenderer> = {
  title: 'Components/Charts/LineChart',
  component: LayoutRenderer,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LayoutRenderer>;

const sampleData = [
  { name: 'Jan', sales: 4000, revenue: 2400 },
  { name: 'Feb', sales: 3000, revenue: 1398 },
  { name: 'Mar', sales: 2000, revenue: 9800 },
  { name: 'Apr', sales: 2780, revenue: 3908 },
  { name: 'May', sales: 1890, revenue: 4800 },
  { name: 'Jun', sales: 2390, revenue: 3800 },
];

export const Default: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'component',
      props: {
        component: 'LineChart',
        componentProps: {
          data: sampleData,
          lines: [
            { dataKey: 'sales', name: 'Sales', stroke: 'hsl(var(--primary))' },
            { dataKey: 'revenue', name: 'Revenue', stroke: 'hsl(var(--secondary))' },
          ],
          height: 300,
        },
      },
    };
    return <LayoutRenderer config={config} />;
  },
};

export const SingleLine: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'component',
      props: {
        component: 'LineChart',
        componentProps: {
          data: sampleData,
          lines: [
            { dataKey: 'sales', name: 'Sales' },
          ],
          height: 300,
        },
      },
    };
    return <LayoutRenderer config={config} />;
  },
};


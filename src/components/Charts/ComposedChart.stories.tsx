import type { Meta, StoryObj } from '@storybook/react';
import { LayoutRenderer } from '../../core/layout-renderer';
import { LayoutNode } from '../../types/layout';
import '../../core/register-components';

const meta: Meta<typeof LayoutRenderer> = {
  title: 'Components/Charts/ComposedChart',
  component: LayoutRenderer,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LayoutRenderer>;

const sampleData = [
  { name: 'Jan', sales: 4000, revenue: 2400, profit: 1000 },
  { name: 'Feb', sales: 3000, revenue: 1398, profit: 800 },
  { name: 'Mar', sales: 2000, revenue: 9800, profit: 1200 },
  { name: 'Apr', sales: 2780, revenue: 3908, profit: 900 },
  { name: 'May', sales: 1890, revenue: 4800, profit: 1100 },
  { name: 'Jun', sales: 2390, revenue: 3800, profit: 950 },
];

export const Default: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'component',
      props: {
        component: 'ComposedChart',
        componentProps: {
          data: sampleData,
          series: [
            { type: 'bar', dataKey: 'sales', name: 'Sales' },
            { type: 'line', dataKey: 'revenue', name: 'Revenue' },
            { type: 'area', dataKey: 'profit', name: 'Profit' },
          ],
          height: 300,
        },
      },
    };
    return <LayoutRenderer config={config} />;
  },
};


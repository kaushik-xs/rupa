import type { Meta, StoryObj } from '@storybook/react';
import { ComposedChart } from './ComposedChart';

const sampleData = [
  { name: 'Jan', value: 400, count: 240 },
  { name: 'Feb', value: 300, count: 198 },
  { name: 'Mar', value: 600, count: 380 },
];

const meta: Meta<typeof ComposedChart> = {
  title: 'Charts/ComposedChart',
  component: ComposedChart,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ComposedChart>;

export const Default: Story = {
  args: {
    data: sampleData,
    series: [
      { type: 'line', dataKey: 'value', name: 'Value' },
      { type: 'bar', dataKey: 'count', name: 'Count' },
    ],
  },
};

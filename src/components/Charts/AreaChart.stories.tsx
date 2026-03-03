import type { Meta, StoryObj } from '@storybook/react';
import { AreaChart } from './AreaChart';

const sampleData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
];

const meta: Meta<typeof AreaChart> = {
  title: 'Charts/AreaChart',
  component: AreaChart,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AreaChart>;

export const Default: Story = {
  args: {
    data: sampleData,
    areas: [{ dataKey: 'value', name: 'Value' }],
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { PieChart } from './PieChart';

const sampleData = [
  { name: 'A', value: 400 },
  { name: 'B', value: 300 },
  { name: 'C', value: 300 },
];

const meta: Meta<typeof PieChart> = {
  title: 'Charts/PieChart',
  component: PieChart,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PieChart>;

export const Default: Story = {
  args: { data: sampleData },
};

import type { Meta, StoryObj } from '@storybook/react';
import { RadarChart } from './RadarChart';

const sampleData = [
  { subject: 'A', value: 120, fullMark: 150 },
  { subject: 'B', value: 98, fullMark: 150 },
  { subject: 'C', value: 86, fullMark: 150 },
];

const meta: Meta<typeof RadarChart> = {
  title: 'Charts/RadarChart',
  component: RadarChart,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RadarChart>;

export const Default: Story = {
  args: {
    data: sampleData,
    radars: [{ dataKey: 'value', name: 'Value' }],
    subjectKey: 'subject',
  },
};

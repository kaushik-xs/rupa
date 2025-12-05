import type { Meta, StoryObj } from '@storybook/react';
import { AutoGridLayout } from './AutoGridLayout';
import { Box } from '../Box/Box';

const meta: Meta<typeof AutoGridLayout> = {
  title: 'Layouts/AutoGridLayout',
  component: AutoGridLayout,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AutoGridLayout>;

export const Default: Story = {
  render: () => (
    <AutoGridLayout minItemWidth={200} gap={4}>
      {Array.from({ length: 8 }).map((_, i) => (
        <Box key={i} padding={4} background="muted">
          Item {i + 1}
        </Box>
      ))}
    </AutoGridLayout>
  ),
};

export const ResponsiveColumns: Story = {
  render: () => (
    <AutoGridLayout
      columns={{ default: 1, sm: 2, md: 3, lg: 4 }}
      gap={4}
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <Box key={i} padding={4} background="muted">
          Item {i + 1}
        </Box>
      ))}
    </AutoGridLayout>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

export const MinItemWidth: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-2 font-semibold">Min Width: 150px</h3>
        <AutoGridLayout minItemWidth={150} gap={4}>
          {Array.from({ length: 6 }).map((_, i) => (
            <Box key={i} padding={4} background="muted">
              Item {i + 1}
            </Box>
          ))}
        </AutoGridLayout>
      </div>
      <div>
        <h3 className="mb-2 font-semibold">Min Width: 300px</h3>
        <AutoGridLayout minItemWidth={300} gap={4}>
          {Array.from({ length: 6 }).map((_, i) => (
            <Box key={i} padding={4} background="muted">
              Item {i + 1}
            </Box>
          ))}
        </AutoGridLayout>
      </div>
    </div>
  ),
};


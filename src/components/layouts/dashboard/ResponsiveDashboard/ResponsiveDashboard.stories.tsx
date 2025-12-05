import type { Meta, StoryObj } from '@storybook/react';
import { ResponsiveDashboard } from './ResponsiveDashboard';
import { Box } from '../../primitives/Box/Box';

const meta: Meta<typeof ResponsiveDashboard> = {
  title: 'Layouts/ResponsiveDashboard',
  component: ResponsiveDashboard,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ResponsiveDashboard>;

export const Default: Story = {
  render: () => (
    <ResponsiveDashboard gap={4} padding={4}>
      {Array.from({ length: 12 }).map((_, i) => (
        <Box key={i} padding={6} background="muted" border>
          <h3 className="font-semibold mb-2">Widget {i + 1}</h3>
          <p className="text-sm text-muted-foreground">Dashboard widget content</p>
        </Box>
      ))}
    </ResponsiveDashboard>
  ),
};

export const CustomColumns: Story = {
  render: () => (
    <ResponsiveDashboard
      columns={{ default: 1, sm: 2, md: 2, lg: 3, xl: 4 }}
      gap={4}
      padding={4}
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <Box key={i} padding={6} background="muted" border>
          <h3 className="font-semibold mb-2">Widget {i + 1}</h3>
          <p className="text-sm text-muted-foreground">Custom column configuration</p>
        </Box>
      ))}
    </ResponsiveDashboard>
  ),
};


import type { Meta, StoryObj } from '@storybook/react';
import { MasonryLayout } from './MasonryLayout';
import { Box } from '../Box/Box';

const meta: Meta<typeof MasonryLayout> = {
  title: 'Layouts/MasonryLayout',
  component: MasonryLayout,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MasonryLayout>;

export const Default: Story = {
  render: () => (
    <MasonryLayout columns={3} gap={4}>
      {Array.from({ length: 12 }).map((_, i) => (
        <Box
          key={i}
          padding={4}
          background="muted"
          className={`h-${[24, 32, 40, 48][i % 4]}`}
        >
          Item {i + 1} - Variable height
        </Box>
      ))}
    </MasonryLayout>
  ),
};

export const ResponsiveColumns: Story = {
  render: () => (
    <MasonryLayout columns={{ default: 1, sm: 2, md: 3, lg: 4 }} gap={4}>
      {Array.from({ length: 16 }).map((_, i) => (
        <Box
          key={i}
          padding={4}
          background="muted"
          className={`h-${[24, 32, 40, 48][i % 4]}`}
        >
          Item {i + 1}
        </Box>
      ))}
    </MasonryLayout>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

export const CustomGap: Story = {
  render: () => (
    <MasonryLayout columns={3} columnGap={8} rowGap={4}>
      {Array.from({ length: 9 }).map((_, i) => (
        <Box
          key={i}
          padding={4}
          background="muted"
          className={`h-${[24, 32, 40][i % 3]}`}
        >
          Item {i + 1}
        </Box>
      ))}
    </MasonryLayout>
  ),
};

